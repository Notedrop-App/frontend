package main

import (
	"fmt"
	"os"

	"github.com/goccy/go-json"
	"github.com/gofiber/fiber/v3"
	"github.com/gofiber/fiber/v3/middleware/cors"
	"github.com/notedrop-app/backend/controllers"
	"github.com/notedrop-app/backend/db"
	"github.com/notedrop-app/backend/utils"
)

func init() {
	utils.LoadENV("./.env")

	err := db.ConnectDB(os.Getenv("DATABASE_URL"))
	if err != nil {
		return
	}

	if os.Getenv("ENV") != "PROD" {
		db.Migrate(db.DB)
	} else {
		fmt.Println("Skipping Migration, Production environment detected.")
	}
}

func main() {

	port := os.Getenv("PORT")

	app := fiber.New(fiber.Config{
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
	})

	app.Use(cors.New(cors.Config{
		AllowOrigins:     []string{os.Getenv("ALLOWED_ORIGIN")},
		AllowMethods:     []string{"GET", "POST", "DELETE", "PUT"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	api := app.Group("/api/v1")

	api.Get("/health", func(c fiber.Ctx) error {
		return c.SendStatus(200)
	})

	api.Post("/waitlist/join", controllers.Join(db.DB))

	api.Post("/auth/signup", controllers.SignUp(db.DB))
	api.Post("auth/signin", controllers.SignIn(db.DB))

	app.Listen(":" + port)
}
