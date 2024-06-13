document.addEventListener("DOMContentLoaded", function() {
    // Le contenu DOM est chargé, vous pouvez exécuter du code ici
    console.log("Le contenu DOM est entièrement chargé.");
    
    // Exemple : Ajouter un gestionnaire d'événement au bouton
    var myButton = document.getElementById("change-color-btn");
    myButton.addEventListener("click", function() {
        alert("Vous avez cliqué sur le bouton !");
    });
});

let btn=document.getElementById("change-color-btn")
let box=document.getElementById("color-box")
console.log(btn)
console.log(box)


function getRandomColor() {
    const HexaD = '0123456789ABCDEF';
    let Randomcolor = '#';
    for (let i = 0; i < 6; i++) {
        Randomcolor += HexaD[Math.floor(Math.random() * 16)];
    }
    return Randomcolor;
}

btn.addEventListener("click",function random() {



box.style.backgroundColor= getRandomColor()

})






  