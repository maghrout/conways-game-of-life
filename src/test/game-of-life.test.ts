import {Cell} from "../main/cell";

describe('Conways Game of Life', () => {
    describe('When a living cell has no alive neighbour', () => {
        it("should die from underpopulation", () => {
            let gameOfLife: Cell = new Cell();
            expect(gameOfLife.getNextGeneration('alive', 0)).toBe('dead');
        })
    })

    describe('When a living cell has one alive neighbour', () => {
        it("should die from underpopulation", () => {
            let gameOfLife: Cell = new Cell();
            expect(gameOfLife.getNextGeneration('alive', 1)).toBe('dead');
        })
    })

    describe('When a living cell has two alive neighbours', () => {
        it("should survive to the next generation", () => {
            let gameOfLife: Cell = new Cell();
            expect(gameOfLife.getNextGeneration('alive', 2)).toBe('alive');
        })
    })

    describe('When a living cell has three alive neighbours', () => {
        it("should survive to the next generation", () => {
            let gameOfLife: Cell = new Cell();
            expect(gameOfLife.getNextGeneration('alive', 3)).toBe('alive');
        })
    })

    describe('When a living cell has more than three alive neighbours', () => {
        it("should die in the next generation", () => {
            let gameOfLife: Cell = new Cell();
            expect(gameOfLife.getNextGeneration('alive', 5)).toBe('dead');
        })
    })
});
