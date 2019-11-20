var mysql = require("mysql");
var clitable3 = require('cli-table3');
var inquirer = require('inquirer'); 
// var inquirer = require('inquirer');


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Salem2015",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  readProducts(); 
  buyProduct();
});
function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
 
  });
}
var buyProduct = 
function () {
  connection.query("SELECT * FROM products", function(err, res) {
    console.log(res);
  inquirer
    .prompt({
      name: "productChoice",
      type: "number",
      message: "Please enter the id of the item you would like to purchase:",
        })
    .then(function(answer) {
      // compare the input with the list of ids 
      var idArray = [];  
      for (var i = 0; i < res.length; i++) {
        idArray.push(res[i].item_id);
      }
      if (idArray.includes(answer.productChoice)){
        // return true 
        quantity(answer.productChoice);
      } else {
        console.log(answer , "is not a product!");
      }
         
    });
 })
}

function quantity (id){
   connection.query("SELECT * FROM bamazon_db.products WHERE item_id = " + id, function(err, res) {
    //  console.log(res);
   inquirer
    .prompt({
      name: "productQuantity",
      type: "number",
      message: "How many would you like ?"
    })
    .then(function(answer){
        if (answer.productQuantity <= res[0].stock_quantity){
          var newTotal = res[0].stock_quantity - answer.productQuantity;
          updateQuantity(newTotal, id); 
        }
        else {
          console.log("Insufficient quantity!")
        }
        });
      })
    }

function updateQuantity (newTotal, id){
  console.log(id, "?"); 
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: newTotal
      },
      {
        item_id: id
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
    }
  );

  // connection.query("SELECT * FROM bamazon_db.products WHERE item_id = " + id, function(err, res) {

}