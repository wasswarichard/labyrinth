export function findShortestPath(labyrinth: string[][]): number {
    const rows: number = labyrinth.length;
    const columns: number = labyrinth[0].length;
    const blocked_path: string = '1'; // wall

    const directions: number[][] = [
        [0, 1], // right
        [1, 0], // down
        [0, -1], // left
        [-1, 0], // up
    ];

    /**
     * find the start (S) position
     */
    let startRow: number = -1;
    let startCol: number = -1;
    let endRow: number = -1;
    let endCol: number = -1;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (labyrinth[i][j] === 'S') {
                startRow = i;
                startCol = j;
            } else if (labyrinth[i][j] === 'E') {
                endRow = i;
                endCol = j;
            }
        }
    }

    if (startRow === -1 || startCol === -1) return -1;


    return -1;
}
