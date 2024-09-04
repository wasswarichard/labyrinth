export function findShortestPath(labyrinth: string[][]): number {
    const rows: number = labyrinth.length;
    const columns: number = labyrinth[0].length;
    const blocked_path: string = '1'; // wall
    const startIndex: number = 0;

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

    if (startRow === -1 || startCol === -1 || endRow === -1 || endCol === -1) return -1;

    /**
     * A queue to store the visited position and the distance
     */
    const queue: [number, number, number][] = [];
    queue.push([startRow, startCol, 0]);

    while (queue.length > 0) {
        const [currentRow, currentCol, distance] = queue.shift()!;

        /**
         * check if we reached the exit (E) then return the distance
         */
        if (labyrinth[currentRow][currentCol] === labyrinth[endRow][endCol]) return distance;

        /**
         * Explore other neighbours
         */
        for (const [dx, dy] of directions) {
            const newRow = currentRow + dx;
            const newCol = currentCol + dy;

            /**
             * boundary check for index to make sure checking is within the boundaries of the array to avoid errors and undefined.
             * avoid obstacles / walls where position is 1
             */
            if (
                newRow >= startIndex &&
                newRow < rows &&
                newCol >= startIndex &&
                newCol < columns &&
                labyrinth[newRow][newCol] !== blocked_path
            ) {
                queue.push([newRow, newCol, distance + 1]);
            }
        }
    }

    return -1;
}
