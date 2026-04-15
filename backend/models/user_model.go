package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Email        string `gorm:"unique;not null;type:varchar(100);uniqueIndex"`
	PasswordHash string `gorm:"not null"`
	Username     string `gorm:"unique;not null; type:varchar(32);uniqueIndex"`
	PublicKey    []byte `gorm:"unique;not null;type:bytea"`
	SaltKdf      []byte `gorm:"not null;type:bytea"`
	AvatarUrl    string `gorm:"default:null"`
}
