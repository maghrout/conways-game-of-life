enum CellStatuses {
    Alive = 'alive',
    Dead = 'dead'
}

export class Cell {
    getNextGeneration(currentStatus: string, numberOfAliveNeighbours: number) {
        if(currentStatus === CellStatuses.Alive) {
            if (numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3) {
                return CellStatuses.Alive;
            }
            return CellStatuses.Dead;
        } else {
            if(numberOfAliveNeighbours === 3) {
                return CellStatuses.Alive;
            }
            return CellStatuses.Dead;
        }
    }
}