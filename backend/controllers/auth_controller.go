package controllers

import (
	"github.com/gofiber/fiber/v3"
	"github.com/notedrop-app/backend/dto"
	"github.com/notedrop-app/backend/services"
	"gorm.io/gorm"
)

func SignUp(db *gorm.DB) fiber.Handler {
	return func(c fiber.Ctx) error {

		var user dto.UserDto

		err := c.Bind().Body(&user)

		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": err.Error(),
				"error":   true,
			})
		}

		//bind Dto to serviceUser struct

		serviceUser := services.UserSignUp{
			Email:     user.Email,
			Password:  user.Password,
			Username:  user.Username,
			PublicKey: user.PublicKey,
			SaltKdf:   user.SaltKdf,
		}

		if err := services.SignUp(serviceUser, db); err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": err.Error(),
				"error":   true,
			})
		}

		return c.Status(fiber.StatusCreated).JSON(fiber.Map{
			"message": "Account Created.",
			"error":   false,
		})
	}
}
