// Part 1: Add the products to the display

// Identify what DOM elements we want to affect and use

    // Get the body of the shopping cart. We'll add the individual items to it

    // Get the subtotal, tax total and total elements. We'll update these as we add items to the cart

    // Get the select element for the tax rate. We'll add the options to it. We're also going to bind an event to this element to update the cart when the tax rate changes

// Create variables to hold the total and subtotal

// Write a loop that will iterate over the cartInfo array and add each item to the cart. We want to add these as table rows in the body of the table. There is a samplePopulated.html that we can use as an example of what the final product should look like.

    // Create a new table row element to hold the item

        // Create a new table cell element to hold the item name

        // Set the text of the cell to the item name

        // Append the cell to the row

        // Create a new table cell element to hold the item quantity

        // Set the text of the cell to the item quantity

        // Append the cell to the row

        // Create a new table cell element to hold the item price

        // Format the price to two decimal places and add a dollar sign

        // Set the text of the cell to the item price

        // Append the cell to the row

        // Create a new table cell element to hold the item total

        // Calculate the total of the items

        // Format the total to two decimal places and add a dollar sign

        // Add the item total to the subtotal

        // Set the text of the cell to the item total

        // Append the cell to the row

    // Append the row to the cart body

// Part 2: Taxes and totals

// Display the subtotal that we calculated in the loop above

// Write pseudocode to calculate the tax and total. You'll need to first populate the tax selector with sales tax rates from the salesTaxRates object. Then you'll need to bind an event to the selector to update the cart when the tax rate changes.

