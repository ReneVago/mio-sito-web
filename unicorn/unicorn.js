class Unicorn
{
    
    constructor()
    {
        // dimensione unicorno
        this.r = 98;
        this.x = this.r;
        this.y = height - this.r;
        // velocità dell oggetto sull asse y
        this.vy = 0;
        //q la gravità serveper evitare che l unicorno voli via
        this.gravity= 2;
    }

    // forza del salto dell oggetto
    jump()
    {
        if (this.y == height - this.r) // questo comando fà si che l unicorno salti soltanto quando la sua altezza è vicina al fondo canvas 
        {
            this.vy = -32;
        }
        
    }

    // funzione di collisione con in treni(hits usato in sketch)
    hits(train)
    {
        return collideRectRect(this.x, this.y, this.r, this.r,train.x, train.y, train.r, train.r);
    }

    //movimento de lsalto
    move()
    {
        this.y += this.vy;
        this.vy += this.gravity;
        // il movimento sulla asse y, cioè in basso,  è vincolato tra 0 e il risultato dell altezza - 50
        this.y = constrain(this.y, 0, height - this.r );
    }

    // posizone unicorno e collegare varibile nel js di gioco
    //caricamento immagine unicorno
    show()
    {
        image(uImg,this.x, this.y, this.r , this.r);
    }
}