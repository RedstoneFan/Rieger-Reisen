function zufallZiel(){
    var zufall = Math.round(Math.random() * (7 - 1)) + 1;     // Generiere eine Zufallszahl zwischen 1 und 7
    var ziel ;

    // Verwende eine Switch-Anweisung, um das Ziel entsprechend der Zufallszahl festzulegen
    switch(zufall) {
        case 1: ziel = "Paris"; break;
        case 2: ziel = "Rom"; break;
        case 3: ziel = "London"; break;
        case 4: ziel = "Strassburg"; break;
        case 5: ziel = "Athen"; break;
        case 6: ziel = "Pisa"; break;
        case 7: ziel = "Barcelona"; break;
        default: zufallZiel(); break;       // Bei einer unerwarteten Zufallszahl rufe die Funktion erneut auf
    }

    if(confirm("Für Sie wurde " + ziel + " ausgelost. Wist du dort hin weiter geleitet werden?"))       // Zeige eine Bestätigungsbox mit dem ausgewählten Ziel an
    {        
        // Verwende erneut eine Switch-Anweisung, um je nach Ziel die Webseite umzuleiten
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
    

    return; // Beende die Funktion
}

// Funktion zur Anzeige einer Benachrichtigung über wichtige Informationen zur Webseite
function wichtig() {
    alert("Diese Webseite ist nur ein Schulprojekt und besteht, abgesehen von den zwei animierten Bildern, dem Flugzeug und dem Hintergrund,  aus eigenen  Aufnahmen. Die Empfehlungen sind nur meine Meinung und sind aus eigenen Erfahrungen. Die Informationen auf dieser Webseite können von der Realität abweichen und/oder nicht mehr aktuell sein.");
}