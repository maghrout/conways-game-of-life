import {Cell, CellStatuses} from "../main/cell";

describe('Conways Game of Life Cells', () => {
    describe('When a living cell has no alive neighbour', () => {
        it("should die from underpopulation", () => {
            let cell: Cell = new Cell(CellStatuses.Alive,0,0);
            expect(cell.getNextGeneration('alive', 0)).toBe('dead');
        })
    })

    describe('When a living cell has one alive neighbour', () => {
        it("should die from underpopulation", () => {
            let cell: Cell = new Cell(CellStatuses.Alive,0,0);
            expect(cell.getNextGeneration('alive', 1)).toBe('dead');
        })
    })

    describe('When a living cell has two alive neighbours', () => {
        it("should survive to the next generation", () => {
            let cell: Cell = new Cell(CellStatuses.Alive,0,0);
            expect(cell.getNextGeneration('alive', 2)).toBe('alive');
        })
    })

    describe('When a living cell has three alive neighbours', () => {
        it("should survive to the next generation", () => {
            let cell: Cell = new Cell(CellStatuses.Alive,0,0);
            expect(cell.getNextGeneration('alive', 3)).toBe('alive');
        })
    })

    describe('When a living cell has more than three alive neighbours', () => {
        it("should die in the next generation", () => {
            let cell: Cell = new Cell(CellStatuses.Alive,0,0);
            expect(cell.getNextGeneration('alive', 5)).toBe('dead');
        })
    })

    describe('When a dead cell has exactly three alive neighbours', () => {
        it("should become a living cell in the next generation", () => {
            let cell: Cell = new Cell(CellStatuses.Dead,0,0);
            expect(cell.getNextGeneration('dead', 3)).toBe('alive');
        })
    })

    describe('When a dead cell has exactly 4 alive neighbours', () => {
        it("should stay dead in the next generation", () => {
            let cell: Cell = new Cell(CellStatuses.Dead,0,0);
            expect(cell.getNextGeneration('dead', 4)).toBe('dead');
        })
    })

    describe('When a dead cell has exactly 2 alive neighbours', () => {
        it("should stay dead in the next generation", () => {
            let cell: Cell = new Cell(CellStatuses.Dead,0,0);
            expect(cell.getNextGeneration('dead', 2)).toBe('dead');
        })
    })
});
