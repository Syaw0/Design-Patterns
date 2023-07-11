package main

import (
	"fmt"
	"sync"
)

type Database struct {
	// Some fields and methods
	// ...
}

var (
	instance *Database
	once     sync.Once
)

func GetInstance() *Database {
	once.Do(func() {
		instance = &Database{}
		// Initialize the database instance
	})
	return instance
}

func (db *Database) Query(query string) {
	// Perform the database query
	// ...
}

func main() {
	// Access the singleton instance
	db := GetInstance()

	// Use the singleton instance
	db.Query("SELECT * FROM users;")
}
