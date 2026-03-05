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

    console.log(gebruiker.naam);//Geeftterug:"Tim"
    console.log(gebruiker.leeftijd);//Geeftterug:"70"
    gebruiker.hobbys.forEach(function (hobby){
        console.log(hobby); //Elkekeerindeloopdevolgendehobby
    })
