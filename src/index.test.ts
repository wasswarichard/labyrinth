import { findShortestPath } from './index';

describe('labyrinth', () => {
    beforeEach(() => {});

    it('should 8 for the shortest distance', () => {
        const labyrinth: string[][] = [
            ['S', '0', '1', '0', 'E'],
            ['1', '0', '1', '0', '1'],
            ['1', '0', '0', '0', '0'],
            ['0', '0', '1', '1', '1'],
            ['0', '0', '0', '0', '0'],
        ];
        expect(findShortestPath(labyrinth)).toEqual(8);
    });

    it('should return -1 if no path exists', () => {
        const labyrinth: string[][] = [
            ['S', '1', '1', '1', 'E'],
            ['1', '0', '0', '0', '0'],
            ['1', '1', '1', '1', '1'],
            ['0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
        ];
        expect(findShortestPath(labyrinth)).toBe(-1);
    });

    it('should 1 for shortest distance', () => {
        const labyrinth: string[][] = [
            ['S', 'E'],
            ['0', '0'],
        ];
        expect(findShortestPath(labyrinth)).toBe(1);
    });

    it('should return -1 for a single cell labyrinth that is neither S nor E', () => {
        const labyrinth: string[][] = [['0']];
        expect(findShortestPath(labyrinth)).toBe(-1);
    });
});
