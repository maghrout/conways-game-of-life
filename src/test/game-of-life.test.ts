import {GameOfLife} from "../main/game-of-life";

describe('Conways Game of Life', () => {
    describe('When a living cell has one neighbour', () => {
        it("should die from underpopulation", () => {
            let gameOfLife: GameOfLife = new GameOfLife();
            expect(gameOfLife.getCellNextGeneration('alive', 1)).toBe('dead');
        })
    })
});
