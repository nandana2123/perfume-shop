db.products.updateOne(
    { _id: ObjectId("670e3a29b452a427d617854a") },  // Replace with the actual product ID
    { 
        $set: { brand: "Bella Vita" }  // Replace with the brand ID you want
    }
);
