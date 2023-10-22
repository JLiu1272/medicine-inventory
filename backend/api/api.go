package api

import (
	"db"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
)

func HelloWorld() {
	fmt.Println("Hello World")
}

func InsertToDB(c *gin.Context) {
	client, ctx, cancel, err := db.Connect("mongodb://localhost:27017")
	if err != nil {
		panic(err)
	}

	// Release resource when main function is returned.
	defer db.Close(client, ctx, cancel)

	// Create a object of type interface to store
	// the bson values, that we are inserting into database.
	document := bson.D{
		{Key: "rollNo", Value: 175},
	}

	// insertOne accepts client , context, database
	// name collection name and an interface that
	// will be inserted into the collection.
	// insertOne returns an error and a result of
	// insert in a single document into the collection.
	insertOneResult, err := db.InsertOne(client, ctx, "gfg",
		"marks", document)

	// handle the error
	if err != nil {
		panic(err)
	}

	// print the insertion id of the document,
	// if it is inserted.
	fmt.Println("Result of InsertOne")
	fmt.Println(insertOneResult.InsertedID)
	c.IndentedJSON(http.StatusOK, insertOneResult.InsertedID)
}
