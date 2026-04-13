package utils

import (
	"fmt"
	"log"

	"github.com/joho/godotenv"
)

func LoadENV(file_path string) {
	err := godotenv.Load(file_path)

	if err != nil {
		log.Fatal("Failed to load .env file")
	}

	fmt.Print("Succesfully loaded .env file")
}
