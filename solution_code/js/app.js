// Part 1: Add the products to the display

// Identify what DOM elements we want to affect and use

    // Get the body of the shopping cart. We'll add the individual items to it
    const elCartBody = document.querySelector('.fmCartTable tbody');

    // Get the subtotal, tax total and total elements. We'll update these as we add items to the cart
    const elSubtotal = document.querySelector('#fmCartTable__subTotal');
    const elTaxTotal = document.querySelector('#fmCartTable__taxTotal');
    const elTotal = document.querySelector('#fmCartTable__Total');

    // Get the select element for the tax rate. We'll add the options to it. We're also going to bind an event to this element to update the cart when the tax rate changes
    const elTaxRate = document.querySelector('#taxSelection');

// Create variables to hold the total and subtotal
let total = 0;
let subtotal = 0;

// Write a loop that will iterate over the cartInfo array and add each item to the cart. We want to add these as table rows in the body of the table. There is a samplePopulated.html that we can use as an example of what the final product should look like.

for(let i=0; i < cartInfo.length;i++){
    // Create a new table row element to hold the item
    const elRow = document.createElement('tr');

        // Create a new table cell element to hold the item name
        const elName = document.createElement('td');

        // Set the text of the cell to the item name
        elName.textContent = cartInfo[i].name;

        // Append the cell to the row
        elRow.appendChild(elName);

        // Create a new table cell element to hold the item quantity
        const elQuantity = document.createElement('td');

        // Set the text of the cell to the item quantity
        elQuantity.textContent = cartInfo[i].quantity;

        // Append the cell to the row
        elRow.appendChild(elQuantity);

        // Create a new table cell element to hold the item price
        const elPrice = document.createElement('td');

        // Format the price to two decimal places and add a dollar sign
        const price = "$" + cartInfo[i].price.toFixed(2);

        // Set the text of the cell to the item price
        elPrice.textContent = price;

        // Append the cell to the row
        elRow.appendChild(elPrice);

        // Create a new table cell element to hold the item total
        const elTotal = document.createElement('td');

        // Calculate the total of the items
        const itemTotal = cartInfo[i].price * cartInfo[i].quantity;

        // Format the total to two decimal places and add a dollar sign
        const total = "$" + itemTotal.toFixed(2);

        // Add the item total to the subtotal
        subtotal += itemTotal;

        // Set the text of the cell to the item total
        elTotal.textContent = total;

        // Append the cell to the row
        elRow.appendChild(elTotal);

    // Append the row to the cart body
    elCartBody.appendChild(elRow);
}

// Part 2: Taxes and totals

// Display the subtotal that we calculated in the loop above
elSubtotal.textContent = "$" + subtotal.toFixed(2);

// Write pseudocode to calculate the tax and total. You'll need to first populate the tax selector with sales tax rates from the salesTaxRates object. Then you'll need to bind an event to the selector to update the cart when the tax rate changes.

// Loop through the salesTaxRates object and add each state to the tax selector

for(const state in salesTaxRates){
    // Create the new option element
    const elOption = document.createElement('option');

    // Set the option elmement's value to the state's rate
    elOption.value = salesTaxRates[state];

    // Set the option element's text to the state's name
    elOption.textContent = state;

    // Append the option to the tax selector
    elTaxRate.appendChild(elOption);
}

// Add an event listener to the tax selector to update the cart when the tax rate changes
elTaxRate.addEventListener('change', function(){
    // Calculate the tax
    const tax = subtotal * (elTaxRate.value / 100);

    // Calculate the total
    total = subtotal + tax;

    // Update the subtotal, tax total and total elements
    elTotal.textContent = "$" + total.toFixed(2);
    elTaxTotal.textContent = "$" + tax.toFixed(2);

});
