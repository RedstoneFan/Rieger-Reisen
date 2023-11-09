function zufallZiel(){
    var zufall = Math.round(Math.random() * (7 - 1)) + 1;
        console.log(zufall);

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

    return;
}