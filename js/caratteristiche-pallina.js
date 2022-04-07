let velocita;
let palle; // questa è la variabile della lista che conterrà tante palle
let palleInserite; 

/*collegamento con il canvas in html*/ 
var canvas= document.getElementById("canvas");

function setup()
{
  /*richiamo della tela con p5.js*/
    let canvas= createCanvas(500,500);
    canvas.parent("canvas");
    velocita = createSlider(1, 50, 1); /*valori velocità di gioco*/
    velocita.parent("posizioneSlider"); /*posizone e richiamo dello slider */
    palle = []; // lista vuota delle palle, dentro a setup che si crea una volta sola
    palleInserite = 0;
}

function mouseClicked() // funzione del click col mouse per colpire le palle

{ 
  
   for (let indice = 0; indice < palle.length; indice = indice  + 1)
    { 
        let palla = palle[indice]; 
        palla.colpita();
    }
}

function draw()
{
    background(252, 174, 5); 
    let secondi = Math.floor(millis() / 1000) ; // per ottenere i secondi, si deve dividere i millisecondi a mille, ora per rendere i secondi cifra tondo va aggiunto MATH.FLOOR ai millis
    
    if (secondi > palleInserite) // se i secondi sono maggiori delle palleInserte alla che una palla venga inserita in automatico con posizione randomica
    {
      palle.push (new Palla (random(width) , random(height), random(0,255), random(0,255), random(0,255))); 
      palleInserite ++;
    }
    console.log(secondi);

    //ora stampo tutte le palle della lista attraverso il "ciclo for"!
      //variabile indice con valore 0
      let palleRimosse = 0;
        for (let indice = 0; indice < palle.length; indice++)
    { //indice 0 e se il valore di indice è minore alla lunghezza delle palle allora il valore di indice deve acquisire un +1 
        let palla = palle[indice]; // nella variabile palla, ci inserisco dentro il valore di indice
        
        if (palla.daRimuovere) // se palle da rimuovere sono 0 allora incrementare di uno le palle rimosse
        {
           palleRimosse ++;
        } else {               // altrimenti le disegno
        palla.disegna(); 
        palla.aggiorna();
        }

        /*if (palla.daRimuovere == false){ // in questo modo nn disegna le palle da rimuovere ma solo quelle nuove
        palla.disegna(); 
        palla.aggiorna();}*/
    } 
    // ora si crea il contatore delle palle rimosse
    /*textSize(50);
    fill(0);
    text( palleRimosse, 30, 50);*/

    // ora si crea il contatore delle palle che rimangono con un limitatore a 5 in cui se appaiono più di 5 palle, l utente perde la partita e finisce
    let palleRimaste = palle.length - palleRimosse;
    textSize(50);
    fill(0);
    text( palleRimaste, 30, 50); // tutte le palle - le palle rimosse con altezza e larghezza 

    if (palleRimaste > 5 )
    {
      text("HAI PERSO", 115 , 250);
      noLoop()
    }else 
    {
      text (palleRimaste, 30 , 50);     
    }
}