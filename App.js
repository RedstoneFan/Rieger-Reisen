function zufallZiel(){
    var zufall = Math.round(Math.random() * (7 - 1)) + 1;
    var ziel ;
        console.log(zufall);

    switch(zufall) {
        case 1: ziel = "Paris"; break;
        case 2: ziel = "Rom"; break;
        case 3: ziel = "London"; break;
        case 4: ziel = "Strassburg"; break;
        case 5: ziel = "Athen"; break;
        case 6: ziel = "Pisa"; break;
        case 7: ziel = "Barcelona"; break;
        default: zufallZiel(); break;
    }

    if(confirm("Für Sie wurde " + ziel + " ausgelost. Wist du dort hin weiter geleitet werden?"))
    {
        switch(zufall) {
        case 1: window.location.href = "Paris.html"; break;
        case 2: window.location.href = "Rom.html"; break;
        case 3: window.location.href = "London.html"; break;
        case 4: window.location.href = "Strassburg.html"; break;
        case 5: window.location.href = "Athen.html"; break;
        case 6: window.location.href = "Pisa.html"; break;
        case 7: window.location.href = "Barcelona.html"; break;
        default: zufallZiel(); break;
        }
    }
    

    return;
}

function wichtig() {
    alert("Diese webseite ist nur ein Schulprojekt und besteht, abgesehen von den zwei animierten Bildern, <nobr> aus eigenen  Aufnahmen. Die Empfehlungen sind nur meine Meinung und sind aus eigenen Erfahrungen. Die Informationen auf dieser Webseite können von der Realität abweichen und/oder nicht mehr Aktuell sein.");
}