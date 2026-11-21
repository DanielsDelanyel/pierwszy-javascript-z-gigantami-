"use strict";

// TODO: utwórz zmienną przechowującą stan licznika +1
let counter = 0;


// TODO: napisz funkcję addPoint, która zwiększa licznik o 1 i aktualizuje wyświetlacz

function addPoint(){
    counter = counter + 1;
    document.getElementById("counter-display").textContent = counter;

}


// TODO: utwórz tablicę z elementami do losowania
let items = ["słodki kotek", "kebab", "miecz bogów zniszczenia świata", "wykałaczka", "piernik","wiatrak","1 000$"];

// TODO: napisz funkcję drawItem, która losuje element z tablicy i wyświetla go
function drawItem(){
    let i = Math.floor(Math.random() * items.length);
    document.getElementById("random-display").textContent = items[i];

}

