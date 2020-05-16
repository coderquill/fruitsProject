//jshint esversion:6
const mongoose = require("mongoose");
var url = process.env.DATABASE_URL || "mongodb://localhost:27017/fruitsDB";
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));
//mongoose.connect("mongodb://localhost:270117/fruitsDB",{useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name:{
    type: String,
    required:[true,"oh o, name should be given:/"]
  },
  rating: {
    type: Number,
    min:0,
    max:10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

/*Fruit.updateOne({_id:"5ebb8feaf88e1e1f190f559a"}, {name:"sitafal"}, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("successfully updated");
  }
})

Fruit.deleteOne({name:"sitafal"}, function(err){
  if(err){
    console.log(err);
  }
   else{
     console.log("successfully deleted");
   }
});*/
/*const melon = new Fruit({
  name:"waterMelon",
  rating:"10",
  review:"My favorite fruit"
});

const mango = new Fruit({
  name:"mango",
  rating:"10",
  review:"The best fruit"
});*/

/*Fruit.insertMany([melon, mango], function(err){
  if(err){
    console.log(err);
  }else
  console.log("successfully added and saved fruits");
});
*/
const pinapple = new Fruit({
  name:"Pine-apple",
  rating: 8,
  review:"little sour for my taste"
});

pinapple.save();

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  } else{
    //console.log(fruits);
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });

    mongoose.connection.close();
  }
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});


const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name:"Raj",
  age:3,
  favoriteFruit:pinapple
});


const person2 = new Person({
  name:"Rupali",
  age:22
});

person.save();
/*Person.insertMany([person1, person2], function(err, person){
  if(err){
    console.log(err);
  } else{
    person.forEach(function(person){
      console.log(person.name);
    });

  }
});*/
