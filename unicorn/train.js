class Train
{
    constructor()
    {
        //posizionamento del treno
        this.r = 78;
        this.x = 700; // dal bordo
        this.y = height - this.r; //dal basso
    }

    //funzione di movimento
    move()
    {
        this.x -= 7.8;
    }

    show()
    {
        image(tImg, this.x, this.y, this.r, this.r);
    }
}