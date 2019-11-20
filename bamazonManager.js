var mysql = require("mysql");
var clitable3 = require('cli-table3');
var inquirer = require('inquirer'); 


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
  start(); 
});
function start(){
  inquirer
  .prompt({
    name: "option",
    type: "list",
    message: "Menu Options",
    choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product" ]
  }).then(function(answer){
    switch(answer.option){
      case "View Products for Sale":
        readProducts();
        break;
      case "View Low Inventory":
        lowInventory();
        break;
      case "Add to Inventory":
          updateQuantity();
          break;
      case "Add New Product":
          // createProduct();
          productForm();
      break;    
    }
    });
}

/* ***************************************************************************** */
function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    var productArray = [];  

    for (var i = 0; i < res.length; i++) {
      productArray.push({
        id: res[i].item_id, 
        name: res[i].product_name, 
        department: res[i].department_name, 
        price: res[i].price, 
        quantity: res[i].stock_quantity   
    })
  } console.table(productArray);
})     
}

function lowInventory(){
  connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
  });
}

function createProduct(answer) {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO products SET ?",
    {
      product_name: answer.form_name,
      department_name: answer.form_department,
      price: answer.form_price,
      stock_quantity: answer.form_quantity
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
 
    });
  }

  function updateQuantity (newTotal, id){
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
         
  });
}

function productForm(){
  inquirer
  .prompt([{
    name: "form_name",
    type: "input",
    message: "Product Name"
  },
  {
    name: "form_department",
    type: "input",
    message: "Department"
  },
  {
    name: "form_price",
    type: "input",
    message: "Price"
  }, 
  {
    name: "form_quantity",
    type: "input",
    message: "Stock Quantity"
  }, 
 
  ]).then(function(answer){
    createProduct(answer);
  });
}

