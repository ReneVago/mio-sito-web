/*funzione che include tutte le attività del gioco*/
game = function()
{
    //impostazione del punteggio dei giocatori a 0
   let  playerPT = 0;
   let  systemPT = 0;
    
    /*funzione che contengono le istruzioni per l avvio del gioco*/
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
    

    /*funzione che contiene le istruzioni di gioco dopo l avvio di start */
    playvs = function()
    {
        check = document.querySelectorAll(".check button");/* collegato alla sezione check e ai suoi bottoni ecco perchè alla fine c'è ALL */
        launch = document.querySelectorAll(".launch img");/* collegato alle due immagini della sezione */
        playerHand = document.querySelector(".player_game");/* coll. alla classe player_game e alla sua immagine associata */
        systemHand = document.querySelector(".system_game");/*coll. alla classe system_game e alla sua immagine */

        /*array che includerà tutte le mosse che potrà eseguire il sistema*/
        systemCheck = ["carta", "forbice", "sasso"];

        /*il forEach permetterà al sistema di eseguire una mossa randomica*/
        check.forEach((opt1) => /*uso check in modo che richiami i 3 bottoni al suo interno | ((opt1) =>) in forma abbreviata richima la function di playvs */
        {
            opt1.addEventListener("click", function()
            {
                systemNumber = Math.floor(Math.random()*3);/*il systemNumber si otterà da l operazione di un numero randominco moltiplicato per 3 modificato per difetto*/
                systemChoise = systemCheck[systemNumber];/*systemChoise sceglierà che immagine scegliere in basa al numero dato da systemNumber associato alle 3 posizioni dentro il Check */

                /*impostazione di un timeout una volta che il systema ha definito un numero */
                setTimeout(() =>
                {
                    compareLaunch(this.textContent, systemChoise);
                    playerHand.src = `${this.textContent}.png`; /*backtik che si digita con alt+96 = ` */
                    systemHand.src = `${systemChoise}.png`;
                }, 2000); /*chiusura dell operazione in 2000, che sono duemillisecondi rappresentano 2 secondi*/
            });
        });
    };
    

    /* qua ci sono le funzioni che si attiveranno in base alle scelte effettuate dall utente e relative risposte dal sistema*/
    compareLaunch=(playerChoise,systemChoise) => /*confronto di due variabile che racchiudono le scelte del player e del sistema, con le possibile combinazioni di risposta da parte del sistema */
    {
        ps_win = document.querySelector(".ps_win");/* richiamo alla classe ps_win dentro html, in cui la frase sparirà ed apparirà un risultato in base al confronto delle scelte effettuate */

        if(playerChoise === systemChoise)   /*se, la scelta del player sarà uguale a quella del sistema */
        {
            ps_win.textContent = "Pareggio"; /*allora dentro la classe di ps_win apparirà il contenuto del testo = Pareggio */
            return;
        }
        
        if(playerChoise === "sasso")  /*se, player sceglie roccia e se il sistema sceglie forbice */
        {
            if(systemChoise === "forbice")
            {
                ps_win.textContent = "Player vincitore"; /* allora apprirà il testo, player vincitore */
                playerPT++;                              /* incremento della variabile dei punti player di 1 */
                endGame();                              /*funzione di fine gioco*/
                updatescore();                          /*funzione di scarico punti*/
                return;
            
            } else
            {
                ps_win.textContent = "System vincitore"; 
                systemPT++;                              
                endGame();                             
                updatescore();                          
                return;
            }
        }

        if(playerChoise === "carta")  /*se, player sceglie carta e se il sistema sceglie forbice */
        {
            if(systemChoise === "forbice")
            {
                ps_win.textContent = "System vincitore"; /* allora apprirà il testo, systema vincitore */
                systemPT++;                              /* incremento della variabile dei punti sistema di 1 */
                endGame();                              /*funzione di fine gioco*/
                updatescore();                          /*funzione di scarico punti*/
                return;
            
            } else
            {
                ps_win.textContent = "Player vincitore"; 
                playerPT++;                              
                endGame();                             
                updatescore();                          
                return;
            }
        }

        if(playerChoise === "forbice")  /*se, player sceglie forbice e se il sistema sceglie roccia */
        {
            if(systemChoise === "sasso")
            {
                ps_win.textContent = "System vincitore"; /* allora apprirà il testo, systema vincitore */
                systemPT++;                              /* incremento della variabile dei punti sistema di 1 */
                endGame();                              /*funzione di fine gioco*/
                updatescore();                          /*funzione di scarico punti*/
                return;
            
            } else
            {
                ps_win.textContent = "Player vincitore"; 
                playerPT++;                              
                endGame();                             
                updatescore();                          
                return;
            }
        }

    };
    

    /*Incremento dei punti score player e sistem */
    updatescore = function()
    {
        playerScore = document.querySelector(".player_pt p");
        systemScore = document.querySelector(".system_pt p");
    
        /*aggiornamento testuale dei punti */
        playerScore.textContent = playerPT;
        systemScore.textContent = systemPT;
    };
    

    /*funzione di restart del gioco */
    restartGame = function()
    {
        reStart = document.querySelector(".ps_winend button"); /*collegamento al bottone di restart dentro alla classe ps_winend */
        reStart.addEventListener("click", function() /*associazione di un evento al click sul bottone con una funzione di ricarica della pagina */
        {
            window.location.reload();
        }); 
    };
   

    /*funzione di fine gioco - endgame */
    endGame = function()
    {
        ps_winend = document.querySelector(".ps_winend");/*classe collegata a ps_windend con all interno al suo bottone */
        vs = document.querySelector(".vs"); /* classe collegata alle operazioni dentro al gioco */
        ps_win_stop = document.querySelector(".ps_win_stop"); /* classe collegata al testo in h1 */
    
        /* limite di punti prima del termine generale del gioco */
        if (playerPT === 5)
        {
            /*rimozione dei bottoni di gioco cioè la sua classe e inserimento del visibilità del bottone restart */
            vs.classList.remove("gamein"); 
            vs.classList.add("gameout");

            /* timeout in cui dichiarerà che il player ha vinto la partita e si attiverà il bottone di rigioco*/
            setTimeout(function()
            {
                ps_winend.classList.add("gamein");
                ps_winend.classList.remove("gameout");
                ps_win_stop.textContent = "Player ha vinto la partita!";
            }, 2000); /* tempo di 2 secondi per far apparire il testo */

        } else if(systemPT === 5)
        {
            vs.classList.remove("gamein"); 
            vs.classList.add("gameout");

            setTimeout(function()
            {
                ps_winend.classList.add("gamein");
                ps_winend.classList.remove("gameout");
                ps_win_stop.textContent = "System ha vinto la partita!";
            }, 2000);
        }
    
    };
    compareLaunch();
    startGame();
    playvs();
   
    
};
game();

   