let unicorn;
let uImg; // imm unicorno
let tImg; // imm treno
let bImg; // imm sfondo
let trains =[]; // array dei trani che saranno gli ostacoli
let punti = 0;
let x = 700;

/*collegamento con il canvas in html*/ 
var canvas= document.getElementById("canvas");

//funzione per il caricamento di immagini
function preload()
{
    uImg = loadImage("unicorn.png"); // inserimento immagine
    tImg = loadImage("train.png");
    bImg = loadImage("background.jpg");
}

function setup()
{
    /*richiamo della tela con p5.js*/
    let canvas= createCanvas(800, 450);
    canvas.parent("canvas");

    //richiama la classe dell unicorno dentro alla variabile
    unicorn = new Unicorn();
    
    
}

// tasti
function keyPressed()
{
    if (key == "a")
    {
        unicorn.jump();
    }
}


function draw()
{

    // inserimento casuale dei treni
    if(random(1) < 0.005) //treni apparizione random
    {
        trains.push(new Train()); // punsh(INSERImento), richiamo della classe train
    }

   
    background(bImg); // o 220

    // inserendo qui il codice i treni saranno sopra al background ma dietro all unicorn
    for (let t of trains)
    {
        t.move();
        t.show();

        // collisione dei treni che al tocco stampa game over
        if(unicorn.hits(t))
        {
            //console.log("Game over!");
            noLoop(); // con questo la funzione di draw si ferma
            textSize(50);
            fill(0);
            text("Game over!", 275, 150);
        }
    }
    
    if ( trains >= -1)
    {
        punti =+ 1 ; // la varibile cambia ma conta i movimenti del treno    
        // cosi diventa un contatore ++punti;
        console.log("1 punto");
    }
    
    //punteggio
    textSize(50);
    fill(0);
    text(punti, 700, 70);


    //applicazione della forma unicorno sulla variabile
    unicorn.show();
    //appl della funzione movimento sulla variabile
    unicorn.move();


}