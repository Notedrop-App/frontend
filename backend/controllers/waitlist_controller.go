package controllers

import (
	"github.com/gofiber/fiber/v3"
	"github.com/notedrop-app/backend/models"
	"github.com/notedrop-app/backend/services"
	"gorm.io/gorm"
)

func Join(db *gorm.DB) fiber.Handler {

	return func(c fiber.Ctx) error {

		var waitlist models.Waitlist

		err := c.Bind().Body(&waitlist)

		if err != nil {
			return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
				"message": err,
				"error":   true,
			})
		}

		err = services.JoinWaitlist(waitlist.Email, db)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": err.Error(),
				"error":   true,
			})
		}

		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"message": "Success",
			"email":   waitlist.Email,
		})
	}
}
