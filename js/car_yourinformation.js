

const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);

const INFOOUTPUT = document.getElementById("infooutput");
const brand = sessionStorage.getItem("brand1");
const category = sessionStorage.getItem("category1");
const persons = sessionStorage.getItem("persons1");
const suitcases = sessionStorage.getItem("suitcases1");
const total = sessionStorage.getItem("carPrice1");
const image = sessionStorage.getItem("image");
//const accessories = sessionStorage.getItem("accessories");


INFOOUTPUT.innerHTML =
    "<br>" +
    '<img src='+ image + '>' +
    "<br>" + brand +
    "<br>" +
    "Category: " + category +
    "<br>" +
    "Persons: " + persons +
    "<br>" +
    "Suitcases: " + suitcases +
    "<br><br>" +
   //"Accessories: " + accessories +
    "<br>" +
    "Total: " + total ;


const ACCESSORIESOUTPUT = document.getElementById("output");

ACCESSORIESOUTPUT.innerHTML = `${accessories}`





    

