import { findShortestPath } from './index';

const labyrinth: string[][] = [
   ['S', '0', '1', '0', 'E'],
   ['1', '0', '1', '0', '1'],
   ['1', '0', '0', '0', '0'],
   ['0', '0', '1', '1', '1'],
   ['0', '0', '0', '0', '0'],
];

describe('labyrinth', () => {
   beforeEach(() => {});

   it('should find the shortest distance', () => {
      expect(findShortestPath(labyrinth).distance).toEqual(8);
   });

   it('should return start position', () => {
      expect(findShortestPath(labyrinth).startPosition).toEqual([]);
   });

   it('should return end position', () => {
      expect(findShortestPath(labyrinth).endPosition).toEqual([]);
   });
});
