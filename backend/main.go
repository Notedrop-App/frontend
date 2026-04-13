package main

import (
	"os"

	"github.com/goccy/go-json"
	"github.com/gofiber/fiber/v3"
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
}

func main() {

	port := os.Getenv("PORT")

	app := fiber.New(fiber.Config{
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
	})
	api := app.Group("/api/v1")

	api.Post("/waitlist/join", controllers.Join(db.DB))

	app.Listen(":" + port)
}
