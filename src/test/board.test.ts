import {Cell, CellStatuses} from "../main/cell";

describe('Conways Game of Life Board', () => {
    describe("",()=>{
        it("",()=>{
            let board:Board= new Board([3,3],[
                new Cell(CellStatuses.Dead,0,0),
                new Cell(CellStatuses.Dead,0,1),
                new Cell(CellStatuses.Dead,0,2),
                new Cell(CellStatuses.Dead,1,0),
                new Cell(CellStatuses.Alive,1,1),
                new Cell(CellStatuses.Dead,1,2),
                new Cell(CellStatuses.Dead,2,0),
                new Cell(CellStatuses.Dead,2,1),
                new Cell(CellStatuses.Dead,2,2)
            ]);
            let currentStatus = board.getCurrentStatus();
            expect(currentStatus).toEqual("xxxxoxxxx")
        })
    })
})