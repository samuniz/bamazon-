# Bamazon App 
  
## Overview

This app is an Amazon-like storefront build with MySQL and Node. The app take in orders from customers and deplete stock from the store's inventory. 


## 

* Include screenshots (or a video) of typical user flows through your application (for the customer and if relevant the manager/supervisor). This includes views of the prompts and the responses after their selection (for the different selection options).

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works. 

* Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.

If you haven't written a markdown file yet, [click here for a rundown](https://guides.github.com/features/mastering-markdown/), or just take a look at the raw file of these instructions.


## Instructions

### Customer View (bamazonCostumer.js)

The app should prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.
   * Once the customer has placed the order, the application check if your store has enough of the product to meet the customer's request.
   * If not, the app log the phrase `Insufficient quantity!`.

 However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * The SQL database is update.
   * Show the customer the total cost of their purchase.


### Manager View (bamazonManager.js)

  * List a set of menu options:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product

  * If a manager selects `View Products for Sale`, the app list every available item: the item IDs, names, prices, and quantities.

  * If a manager selects `View Low Inventory`, then it list all items with an inventory count lower than five.

  * If a manager selects `Add to Inventory`, the app display a prompt that will let the manager "add more" of any item currently in the store.

  * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.

