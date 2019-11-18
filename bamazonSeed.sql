DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db; 

USE bamazon_db; 

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price DECIMAL(10,2) NULL,
  stock_quantity INT (10),
  PRIMARY KEY (item_id)
)

-- Creates new rows containing data in all named columns --
INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Vanila Chai Lip Balm", "cosmetics", 2.00, 100);

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Notebook", "electronics", 500, 80);

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Cashmere Sweater", "fashion", 100, 150);

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Italian Expresso Machine", "kitchen & gadgets", 500, );

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
