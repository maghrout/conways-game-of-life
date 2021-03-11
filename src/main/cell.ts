enum CellStatuses {
    Alive = 'alive',
    Dead = 'dead'
}

export class Cell {
    getNextGeneration(currentStatus: string, numberOfNeighbours: number) {
        if(numberOfNeighbours === 2 || numberOfNeighbours === 3){
            return CellStatuses.Alive;
        }
        return CellStatuses.Dead;
    }
}