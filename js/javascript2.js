

//CHECKBOXES CALCULATION

let total = 0.00;
total = Math.abs(total + URLDATA.get("tillaeg"));
showTotal();

function calculateTotal(checkbox, itemprice) {
    if (checkbox.checked === true) {
        total = Math.abs(total + parseFloat(itemprice));
    } else {
        total = Math.abs(total - parseFloat(itemprice));
    }
    showTotal();
}

function showTotal() {
    const output = document.getElementById("totaloutput");
    output.innerText = `Total ${total.toLocaleString("da-DK", {style: "currency", currency: "DKK"})}`;
}

const form = document.getElementById("checklist");
form.reset(); //resets form every time page loads

const checkboxes = document.getElementsByClassName("accessories");
form.addEventListener("submit", function(e){
    e.preventDefault();
    let accessorieslist = [];
    for (const checkbox of checkboxes) {
        if (checkbox.checked === true) {
            accessorieslist.push(checkbox.dataset.item + "(dkr. " + checkbox.value + ")");
        }
    }

 // Stores information in sessionstorage
 sessionStorage.setItem("goods", JSON.stringify(accessorieslist));
 sessionStorage.setItem("total", total.toLocaleString("da-DK", {style: "currency",currency: "DKK"}));

 location.href="yourinformation.html?"; // Redirect user to yourinformation.html




})

    
   


