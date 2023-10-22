package main

import (
	"api"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.POST("/insertMedicine", api.AddMedicine)

	router.Run("localhost:8080")
}
