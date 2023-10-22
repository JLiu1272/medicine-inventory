package api

import (
	"db"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
)

type Medicine struct {
	ObjectId string    `json:"objectId"`
	ID       int       `json:"id"`
	Name     string    `json:"name"`
	Count    int       `json:"count"`
	JoinDate time.Time `json:"joinDate"`
}

func HelloWorld(c *gin.Context) {
	fmt.Printf("Hello World")
}

func GetMedicineById(c *gin.Context) {

	var medicine Medicine

	// Call BindJSON to bind the received JSON to
	// medicine.
	if err := c.BindJSON(&medicine); err != nil {
		c.IndentedJSON(http.StatusBadRequest, err)
		return
	}

	client, ctx, cancel, err := db.Connect("mongodb://localhost:27017")
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, err)
		return
	}
	// Release resource when main function is returned.
	defer db.Close(client, ctx, cancel)

	result, err := db.FindById(client, ctx, "medicineInventoryDB", "users", medicine.ObjectId)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, err)
		return
	}
	result.Decode(&medicine)

	c.IndentedJSON(http.StatusOK, medicine)
}

func deleteMedicine(c *gin.Context, id string) {
	c.IndentedJSON(http.StatusOK, "Delete Medicine")
}

func AllMedicine(c *gin.Context) {
	var medicines []Medicine

	client, ctx, cancel, err := db.Connect("mongodb://localhost:27017")
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, err)
		return
	}
	// Release resource when main function is returned.
	defer db.Close(client, ctx, cancel)

	cursor, err := db.FindAll(client, ctx, "medicineInventoryDB",
		"users")

	cursor.All(ctx, &medicines)

	// handle the error
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, err)
		return
	}

	c.IndentedJSON(http.StatusOK, medicines)
}

func AddMedicine(c *gin.Context) {

	var medicine Medicine

	// Call BindJSON to bind the received JSON to
	// medicine.
	if err := c.BindJSON(&medicine); err != nil {
		c.IndentedJSON(http.StatusBadRequest, err)
		return
	}

	client, ctx, cancel, err := db.Connect("mongodb://localhost:27017")
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, err)
		return
	}

	// Release resource when main function is returned.
	defer db.Close(client, ctx, cancel)

	bsonD, err := bson.Marshal(medicine)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, err)
		return
	}

	// insertOne accepts client , context, database
	// name collection name and an interface that
	// will be inserted into the collection.
	// insertOne returns an error and a result of
	// insert in a single document into the collection.
	insertOneResult, err := db.InsertOne(client, ctx, "medicineInventoryDB",
		"users", bsonD)

	// handle the error
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, err)
		return
	}

	c.IndentedJSON(http.StatusOK, insertOneResult.InsertedID)
}
