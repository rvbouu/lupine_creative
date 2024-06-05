const connection = require("../config/connection");
const { Product } = require("../models");
const productdata = require("./products.json");


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

  try {
    await Product.insertMany(productdata)
    console.log("Product seeding successful")
  } catch(err){
    console.log("Product seeding failed - " + err.message)
  }

  process.exit(0)

})