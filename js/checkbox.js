let total = 0.00; // Global variable, total starts at zero
let accessoriesTotal = 0.00;

total = Math.abs(total + (URLDATA.get('carPrice')));

//accessoriesTotal = total-(urldata.get('carPrice'));

showTotal(); // Calls function showTotal to show current total
const VAT = 0.25;
// Event handler - check if checkbox is selected or not and 
// adjust the total value accordingly
function calculateTotal(checkbox, itemprice) {
    if (checkbox.checked === true) { // If the checkbox is seleted then ...
        total = Math.abs(total + parseFloat(itemprice * (1 + VAT)));
        accessoriesTotal = Math.abs(accessoriesTotal + parseFloat(itemprice * (1 + VAT)))
    } else { // if it is not selected then ...
        total = Math.abs(total - parseFloat(itemprice));
        accessoriesTotal = Math.abs(accessoriesTotal - parseFloat(itemprice));
    }
    showTotal();
}


// Shows total value on screen
function showTotal() {
    const output = document.getElementById("totaloutput");
    output.innerHTML = `<h3> Total ${total.toLocaleString("da-DK", {style: "currency", currency: "DKK"})}</h3> incl. VAT`;
}

const form = document.getElementById("form");
form.reset(); // Resets form every time page loads

const checkboxes = document.getElementsByClassName("slist"); //Build an object list with checkboxes
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let shoppinglist = []; // Define shopping list
    for (const checkbox of checkboxes) {
        if (checkbox.checked === true) { // If the item is selected ...
            shoppinglist.push(checkbox.dataset.item + "(dkr. " + checkbox.value + ")"); // add it to the shopping list.
        }
    }

    const priceCar = total; //Stores car price(without accessories)
    sessionStorage.setItem("priceCar", priceCar)

    // Stores information in sessionstorage
    sessionStorage.setItem("goods", JSON.stringify(shoppinglist));
    sessionStorage.setItem("total", total.toLocaleString("da-DK", {
        style: "currency",
        currency: "DKK"
    }));
    sessionStorage.setItem("accessoriesTotal", accessoriesTotal.toLocaleString("da-DK", {
        style: "currency",
        currency: "DKK"
    }));

    location.href = "yourinformation.html"; // Redirect user to page2.html
})


    
   


