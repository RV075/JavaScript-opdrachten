//opdr 1.2
document.querySelector('#box1').style.backgroundColor = "gold";

//opdr 2.1: on load
window.addEventListener("load", function () {
    console.log("De pagina is geladen!");
});

//opdr 2.2: on click
document.querySelector('#box1').addEventListener('click', function() {
    console.log("Ooooh je mag niet klikken!");
});

//opdr 2.2: on submit
document.querySelector('#search_form').addEventListener('submit', function() {
    console.log("Laten we dan nu het hele formulier naar PHP sturen.");
});

//opdr 2.3
document.querySelector('#box2').innerText = "Dit is nu de tekst in Box Twee."

document.querySelector('#box2').innerHTML = "<h1>Dit is nu</h1><p>de tekst in Box Twee.</p>";

//opdr 2.4
window.addEventListener("load", function () {
    document.querySelector('#box1').addEventListener('click', function() {
        document.querySelector('#box2').innerHTML =
            "<h1>Hallo</h1><p>Je klikte op box1</p>";
        document.querySelector('#box2').style.backgroundColor = "green";
    });

    document.querySelector('#box2').addEventListener('click', function() {
        document.querySelector('#box1').innerHTML =
            "<h1>Hallo</h1><p>Je klikte op box2</p>";
        document.querySelector('#box1').style.backgroundColor = "orange";

    });
});

// opdr 3.3
fetch("website.json")
    .then(function (response){
        return response.json();
    })
    .then(function (auto){
        console.log(auto.merk);
        console.log(auto.bouwjaar);
        auto.eigenaren.forEach(function (eigenaar){
            console.log(eigenaar);
        });
        document.querySelector("#box2").addEventListener("click", function (){
            let html = "<h1>" + auto.merk + "</h1>";
            html += "<p>Bouwjaar: " + auto.bouwjaar + "</p>";
            html += "<h2>Eigenaren</h2>";
            auto.eigenaren.forEach(function (eigenaar){
                html += "<p>" + eigenaar + "</p>";
            });
            document.querySelector("#box2").innerHTML = html;
        });
    });

// opdr 3.2
    let gebruiker = {
        "naam": "Tim",
        "leeftijd": 70,
        "hobbys":[
            "Koffiedrinken",
            "Tekenen",
            "Programmeren"
        ],
        "haalt_graag_koffie": false
    };

    console.log(gebruiker.naam);//Geeft terug:"Tim"
    console.log(gebruiker.leeftijd);//Geeft terug:"70"
    gebruiker.hobbys.forEach(function (hobby){
        console.log(hobby); //Elke keer in de loop de volgende hobby
    })

// opdr 3.3
    let auto = {
        "merk": "Subaru",
        "bouwjaar": 1967,
        "eigenaren": [
            "John Pork",
            "Tung Tung Sahur"
            ],
        "heeft_schade": false
    };

    console.log(auto.merk); // Geeft terug: "Subaru"
    console.log(auto.bouwjaar); // Geeft terug: "1967"
    auto.eigenaren.forEach(function (eigenaar){
        console.log(eigenaar); // Elke keer in de loop de volgende eigenaar
    })

document.querySelector("#box2").addEventListener("click", function (){
    let eigenarenHTML = "<h1>Eigenaren</h1>";
    auto.eigenaren.forEach(function (eigenaar){
        eigenarenHTML += "<p>" + eigenaar + "</p>";
    });
    document.querySelector("box2").innerHTML = eigenarenHTML;
});
