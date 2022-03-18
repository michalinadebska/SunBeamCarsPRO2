   
    const form = document.getElementById("info");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name1= document.getElementById("name");
        const lastname = document.getElementById("lastname");
        const street = document.getElementById("street");
        const number = document.getElementById("number");
        const postalandcity = document.getElementById("postalandcity");

        sessionStorage.setItem("name1", name1.value);
        sessionStorage.setItem("lastname", lastname.value);
        sessionStorage.setItem("street", street.value);
        sessionStorage.setItem("number", number.value);
        sessionStorage.setItem("postalandcity", postalandcity.value);

        document.location.href = "thankyou.html?"; //Redirects to the "Thank you" page



        
    })
