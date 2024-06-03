const connection = require("../config/connection");
const { Product, User } = require("../models");
const dizzydata = require("./dizzydata.json");
const userdata = require("./userdata.json");


connection.once('open', async() => {

  // try {}
  //   await Product.delete({})
  // } catch(err){
  //   console.log("Could not delete products...")
  // }

  const productsExists = await connection.db.listCollections({ name: "products" }).toArray()
  if( productsExists.length ){
    await connection.db.dropCollection("products")
  }
  
  const usersExists = await connection.db.listCollections({ name: "users" }).toArray()
  if( usersExists.length ){
    await connection.db.dropCollection("users")
  }

  try {
    await Product.insertMany(dizzydata)
    console.log("Product seeding successful")
  } catch(err){
    console.log("Product seeding failed - " + err.message)
  }

  try {
    await User.insertMany(userdata)
    console.log("User seeding successful")
  } catch(err){
    console.log("User seeding failed - " + err.message)
  }

  process.exit(0)

})