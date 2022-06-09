

function Palla(posizioneInizialeX, posizioneInizialeY) 
{
    this.posizione = posizioneInizialeX; // qui definita la posizione X della pallina
    this.direzione = + 1; 
    this.daRimuovere = false; // variabile che toglierà le palle da rimuovere, ora è settato su false, cioè nessuna rimozione

// ora la parte estetica dell'oggetto il disegno
  this.disegna = function()
    {
        //stroke(random(0,255, random(0.,255), random(0,255))); // i bordi continuano a cambiare colore all infinito
        fill(111, 228, 252); // colore rimane pieno 
        circle(this.posizione, posizioneInizialeY, 40); //qui definita la posizione Y della pallina
    }

// ora la parte di aggiornamento / comportamento / metodo
    this.aggiorna = function()
    {
        if (this.posizione >= width)
            {
                this.direzione = -1;
            }
        if (this.posizione <= 0)
            {
                this.direzione = + 1; 
            }
    
        this.posizione = this.posizione + (this.direzione * velocita.value()); 
    }
    
    this.colpita = function()
    {
        if (dist(mouseX, mouseY, this.posizione, posizioneInizialeY) < 40)
        {console.log("colpita!");
        this.daRimuovere = true; // ora dopo che la palla viene colpita, si attiva in true la variabile
    }

    }

}