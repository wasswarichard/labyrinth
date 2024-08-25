export function findShortestPath(labyrinth: string[][]): number {
   const rows: number = labyrinth.length;
   const columns: number = labyrinth[0].length;

   // find the start (S) and end (E) positions
   let startRow: number = -1;
   let startCol: number = -1;

   for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
         if (labyrinth[i][j] === 'S') {
            startRow = i;
            startCol = j;
         }
      }
   }

   if (startRow === -1 || startCol === -1) return -1;

   return -1;
}
