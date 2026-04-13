package db

import (
	"fmt"

	"github.com/notedrop-app/backend/models"
	"gorm.io/gorm"
)

func Migrate(db *gorm.DB) error {
	err := db.AutoMigrate(models.Waitlist{})

	if err != nil {
		fmt.Println("Error migrating database: ", err)
		return err
	}

	fmt.Println("Database migration complete")
	return nil
}
