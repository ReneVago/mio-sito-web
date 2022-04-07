var tentativi = 3;
var player, system;
var system_pt = 0, player_pt = 0;

startGame = function()
    {
        startBTN = document.querySelector(".start button"); /*collegato al bottone dentro alla classe start*/
        startSCN = document.querySelector(".start"); /*varibile collegato a tutta la sezione start*/ 
        vs = document.querySelector(".vs"); /*collegato alle istruzioni dentro la classe vs */

        /* creazione dell evento click sul bottone di start + istruzioni interne*/
        startBTN.addEventListener("click", function()
        {
            /*la sezione di start sparisca e attraverso la classe gameout, la sezione di oscuri */
            startSCN.classList.add("gameout");
            /*la sezione vs diventi appaia diventando attiva */
            vs.classList.add("gamein");
            /*rimozione del gameout da vs */
            vs.classList.remove("gameout");

            /*NB: CLASSLIST ha la funzione di aggiungere o rimuovere della classi ai componenti inseriti nell html */
        });
    };
    startGame();


for (var i = 0; i < tentativi; i++){
  computer = Math.floor(Math.random() * 3);

  if (system == 0) {
    system = 'forbice';
  } else if (system == 1){
    system = 'sasso';
  } else {
    system = 'carta';
  }
  console.log(system);

  /*player = prompt('Inserisci f per forbice, s per sasso e c per carta');
  player = player.toLowerCase();*/

  if (system == player) {
    console.log('parità');
  } else if ((player == 'sasso' && system == 'forbice') || (player == 'forbice' && system == 'carta') || (player == 'carta' && system == 'sasso')) {
    console.log('Hai vinto');
    player_pt++;
  } else {
    console.log('Hai perso ');
    system_pt++;
  }
}


console.log(system_pt);
console.log(player_pt);