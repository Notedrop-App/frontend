package models

import "gorm.io/gorm"

type Waitlist struct {
	gorm.Model
	Email string `json:"email"`
}
