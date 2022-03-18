const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);

const INFOOUTPUT = document.getElementById("final_output");
//const INFOTWOOUTPUT = document.getElementById("final_two_output")

const brand = sessionStorage.getItem("brand1");
const category = sessionStorage.getItem("category1");
const persons = sessionStorage.getItem("persons1");
const suitcases = sessionStorage.getItem("suitcases1");
const carTotal = sessionStorage.getItem("carPrice1");
const total = sessionStorage.getItem("total");
const name1 = sessionStorage.getItem("name1");
const lastname = sessionStorage.getItem("lastname");
const street = sessionStorage.getItem("street");
const number = sessionStorage.getItem("number");
const postalandcity = sessionStorage.getItem("postalandcity");
const accessories = sessionStorage.getItem("accessoriesTotal");


INFOOUTPUT.innerHTML =
    "<br>" +
    name1 + lastname + "<br>" + street + number + "<br>" + postalandcity +
    "<br>" +
    // `<img src=./${URLDATA.get("image")} />` +
    "<br>" + brand +
    "<br>" +
    "Category: " + category +
    "<br>" +
    "Persons: " + persons +
    "<br>" +
    "Suitcases: " + suitcases +
    "<br>" +
   // "Accessories: " + accessories+ "<br>" +

    "<br><br>" +
    "Car total: " + carTotal + "<br>" +
    "All inclusive total: " + total ;


/*
INFOTWOOUTPUT.innerHTML =
    "<br>" +
    "Accessories: " +
    "<br>" +
    URLDATA.get("accessories") +
    "<br><br>" +
    "Total: " + URLDATA.get("total")

*/


//current date
//Or you can just put this one line of code to do same const newDate = new Date().toLocaleString();
(function () {
    const TEMPLATE = document.createElement("template");
    const TEMPLATECONTENT = `
        
        <p id="dateoutput"></p>`;

    TEMPLATE.innerHTML = TEMPLATECONTENT;

    class CT extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({
                mode: 'open'
            });

            this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
        }

        connectedCallback() {

            const output = this.shadowRoot.getElementById("dateoutput");




            const date = new Date();
            const currentDay = date.getDate();
            const currentMonth = date.getMonth();
            const currentYear = date.getFullYear();
            const currentHour = date.getHours();
            const currentMinute = date.getMinutes();

            if (currentMinute < 10) {
                output.innerHTML = currentDay + "/" + currentMonth + "/" + currentYear + "/" + currentHour + ":0" + currentMinute;
            } else {

                output.innerHTML = currentDay + "/" + currentMonth + "/" + currentYear + "/" + currentHour + ":" + currentMinute;
            }
        }
    }

    window.customElements.define('m-currenttime', CT);
})();