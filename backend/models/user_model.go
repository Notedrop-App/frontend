package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Email        string `gorm:"unique;not null;type:varchar(100);index"`
	PasswordHash string `gorm:"not null"`
	Username     string `gorm:"unique;not null; type:varchar(32);index:username"`
	PublicKey    string `gorm:"unique;not null;type:text"`
	SaltKdf      string `gorm:"not null;type:text"`
	AvatarUrl    string `gorm:"default:null"`
}
