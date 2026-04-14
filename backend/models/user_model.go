package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Email        string `gorm:"unique;not null;type:varchar(100)"`
	PasswordHash string `gorm:"not null"`
	Username     string `gorm:"unique;not null; type:varchar(32)"`
	PublicKey    string `gorm:"unique;not null;type:bytea"`
	SaltKdf      string `gorm:"not null;type:bytea"`
	AvatarUrl    string `gorm:"default:null"`
}
