enum CellStatuses {
    Alive = 'alive',
    Dead = 'dead'
}

export class GameOfLife {
    getCellNextGeneration(currentStatus: string, numberOfNeighbours: number) {
        if(numberOfNeighbours === 2){
            return CellStatuses.Alive;
        }
        return CellStatuses.Dead;
    }
}