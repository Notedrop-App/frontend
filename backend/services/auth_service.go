package services

import (
	"errors"

	"github.com/notedrop-app/backend/models"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type UserSignUp struct {
	Email     string
	Password  string
	Username  string
	PublicKey string
	SaltKdf   string
}

func SignUp(user UserSignUp, db *gorm.DB) error {

	var existing models.User

	// check if email is already registered
	err := db.Where("email = ?", user.Email).First(&existing).Error

	if err == nil {
		return errors.New("Email Already in use!")
	}

	if !errors.Is(err, gorm.ErrRecordNotFound) {
		return err
	}

	// check if username is already taken.
	err = db.Where("username = ?", user.Username).First(&existing).Error

	if err == nil {
		return errors.New("Username Already taken!")
	}

	if !errors.Is(err, gorm.ErrRecordNotFound) {
		return err
	}

	//hash user password using bcrypt
	hash, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)

	if err != nil {
		return err
	}

	//if everything works. finally create a user entry in database.

	if err := db.Create(&models.User{Email: user.Email, PasswordHash: string(hash), Username: user.Username, PublicKey: user.PublicKey, SaltKdf: user.SaltKdf}).Error; err != nil {
		return err
	}

	return nil
}
