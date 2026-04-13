package db

import (
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB(connectionString string) error {
	var err error

	DB, err = gorm.Open(postgres.Open(connectionString), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to database: ", err)
		return err
	}

	fmt.Println("Successfully connected to database")

	return nil

}
