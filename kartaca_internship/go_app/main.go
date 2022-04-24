package main

import (
	"context"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func index_handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Merhaba Go!")
}

func intern_handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, element_to_display())
}

func element_to_display() string {
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://admin:admin@mongo:27017/"))
	if err != nil {
		log.Fatal(err)
	}
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}

	defer client.Disconnect(ctx)

	db := client.Database("stajdb")
	col := db.Collection("ulkeler")

	cursor, err := col.Find(ctx, bson.M{})
	if err != nil {
		log.Fatal(err)
	}

	var ulkeler []bson.M
	if err = cursor.All(ctx, &ulkeler); err != nil {
		log.Fatal(err)
	}

	var newList []bson.M
	for _, ulke := range ulkeler {
		newList = append(newList, ulke)
	}

	randomIndex := rand.Intn(len(newList))
	pick := newList[randomIndex]
	fmt.Println(pick)
	ulke := pick["ulke"].(string)
	nufus := pick["nufus"].(string)
	baskent := pick["baskent"].(string)
	result := "{ \"ulke\" : \"" + ulke + "\", \"nufus\" : " + nufus + ", \"baskent\" : \"" + baskent + "\" } "
	return result

}

func main() {
	element_to_display()
	http.HandleFunc("/", index_handler)
	http.HandleFunc("/staj", intern_handler)
	http.ListenAndServe(":5555", nil)
	fmt.Println("hi there")
}
