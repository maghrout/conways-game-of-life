enum CellStatuses {
    Alive = 'alive',
    Dead = 'dead'
}

export class Cell {
    getNextGeneration(currentStatus: string, numberOfAliveNeighbours: number) {
        if(currentStatus === CellStatuses.Alive) {
            return Cell.handleAliveCell(numberOfAliveNeighbours);
        }

        return Cell.handleDeadCell(numberOfAliveNeighbours);
    }

    private static handleDeadCell(numberOfAliveNeighbours: number) {
        return numberOfAliveNeighbours === 3 ? CellStatuses.Alive : CellStatuses.Dead;
    }

    private static handleAliveCell(numberOfAliveNeighbours: number) {
        return numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3 ? CellStatuses.Alive : CellStatuses.Dead;
    }
}