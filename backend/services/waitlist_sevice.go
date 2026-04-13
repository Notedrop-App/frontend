package services

import (
	"errors"

	"github.com/notedrop-app/backend/models"
	"gorm.io/gorm"
)

func JoinWaitlist(email string, db *gorm.DB) error {

	var existing models.Waitlist

	//check if email is already in the waitlist
	err := db.Where("email = ?", email).First(&existing).Error

	if err == nil {
		return errors.New("already joined waitlist")
	}

	if !errors.Is(err, gorm.ErrRecordNotFound) {
		return err
	}

	if err := db.Create(&models.Waitlist{Email: email}).Error; err != nil {
		return err
	}

	return nil

}
