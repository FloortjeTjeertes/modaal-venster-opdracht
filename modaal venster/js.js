// var di alle mondale content heeft
const modaalContent = document.querySelectorAll(".venster")

//alle modale content gaat weg
for (let i = 0; i < modaalContent.length; i++) {
  let modaalAlles = modaalContent[i];
  modaalAlles.parentNode.removeChild(modaalAlles);
}



// lijst van de knoppen voegInhoud
const modaalKnoppen = document.querySelectorAll('.modaal-knop');
const modaalKnoppenArray =[];



// elementen aanmaken
let modaalbg = document.createElement('div');
modaalbg.className = 'modaal-achtergrond';
let modaal = document.createElement('div');
modaal.className = 'modaal';
let sluitKnop    = document.createElement('button');
sluitKnop.className = 'sluit-knop';
sluitKnop.innerHTML = '&#x00D7;';


// content aan dom toevoegen
const voegInhoudToe = (event) => {
  const teller = modaalKnoppenArray.indexOf(event.target);
console.log(teller);
modaal.appendChild(sluitKnop);
  modaal.appendChild(modaalContent[teller]);
  modaalbg.appendChild(modaal);
  document.body.appendChild(modaalbg);
}
//sluit addEventListener
const sluit =() =>{
  modaal.innerHTML='';
  modaalbg.innerHTML ='';
  document.body.removeChild(modaalbg);
}
//sluitknop event listener
sluitKnop.addEventListener('click', sluit);

for (let i = 0; i < modaalKnoppen.length; i++) {
  modaalKnoppenArray.push(modaalKnoppen[i]);
  modaalKnoppen[i].addEventListener('click', voegInhoudToe)
}
