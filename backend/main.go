package main

import (
	"api"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.POST("/insertMedicine", api.AddMedicine)
	router.GET("/allMedicine", api.AllMedicine)
	router.POST("/getMedicineById", api.GetMedicineById)

	router.Run("localhost:8080")
}
