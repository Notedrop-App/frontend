package models

import "gorm.io/gorm"

type Waitlist struct {
	gorm.Model
	Email string `gorm:"unique;not null;type:varchar(100);index"`
}
