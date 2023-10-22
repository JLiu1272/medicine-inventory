package main

import (
	"api"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/insertMedicine", api.InsertToDB)

	router.Run("localhost:8080")
}
