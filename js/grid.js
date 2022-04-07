const GRID_SIZE =   21

export function randomGridPosition()
{
    return{
    
        x : Math.floor(Math.random() * GRID_SIZE)+ 1,
        y : Math.floor(Math.random() * GRID_SIZE)+ 1
        }
    /*formula basata sul ricalcolo di 1 e le dimensioni della griglia è 21 */
}

export function outsideGrid(position)
{   return(
     position.x < 1 || position.x > GRID_SIZE || 
     position.y < 1 || position.y > GRID_SIZE)
    
}
