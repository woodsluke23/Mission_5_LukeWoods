// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function GenerateQuote() {

    // Get the values and convert them
    var fHours = parseFloat($('#hours').val())
    var fRate = parseFloat($('#rate').val())

    // Validate input for hours
    if (isNaN(fHours) || fHours <= 0) {
        alert('Please enter a valid positive number for hours.');
    } else {
        var fTotal = fHours * fRate;
    }

    // Display the total in the input box
    $('#totalCost').val('$' + fTotal.toFixed(2))

}