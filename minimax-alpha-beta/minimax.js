const readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }));
}

class Game {
    constructor() {
        this.current_state = Array(9).fill(null);
        this.player_turn = 'X';
    }

    draw_board() {
        console.log(this.current_state
            .map(x => x ? x : '*')
            .map((x,i) => (i + 1) % 3 ? x : x + '\n')
            .join()
            .replace(/,/g, ''));
    }
    
    get_winner() {
        var lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let line of lines) {
            var [a, b, c] = line;
            if (this.current_state[a] &&
                this.current_state[a] == this.current_state[b] &&
                this.current_state[a] == this.current_state[c]) {
                return this.current_state[a];
            }
        }
        return null;
    }

    maxF() {
        var maxv = -2
        var bestPosition = null;

        var winner = this.get_winner();

        if (winner == 'X') {
            return [-1, bestPosition];
        } else if (winner == 'O') {
            return [1, bestPosition];
        } else if (!winner) {
            if (this.current_state.every(x => x)) {
                return [0, bestPosition];
            }
        }

        for (let i = 0; i < 9; i++) {
            if(!this.current_state[i]) {
                this.current_state[i] = 'O';
                var [m, p] = this.minF();

                if (m > maxv) {
                   maxv = m;
                    bestPosition = i;
                }
                this.current_state[i] = null;
            }
        }
        return [maxv, bestPosition];
    }

    minF() {
        var minv = 2;
        var bestPosition = null;

        var winner = this.get_winner();

        if (winner == 'X') {
            return [-1, bestPosition];
        } else if (winner == 'O') {
            return [1, bestPosition];
        } else if (!winner) {
            if (this.current_state.every(x => x)) {
                return [0, bestPosition];
            }
        }

        for (let i = 0; i < 9; i++) {
            if(!this.current_state[i]) {
                this.current_state[i] = 'X';
                var [m, p] = this.maxF();

                if (m < minv) {
                   minv = m;
                   bestPosition = i;
                }
                this.current_state[i] = null;
            }
        }
        return [minv, bestPosition];
    }
    
    play() {
        var step = 0;
        var input = [0, 2, 8, 6];
        while(true) {
            this.draw_board();
            var winner = this.get_winner();

            if (winner) {
                if (winner === 'X') {
                    console.log('winner is X');
                    return;
                }
                if (winner === 'O') {
                    console.log('winner is O');
                    return;
                }
            }
            
            if (this.player_turn === 'X') {
                var position = input[step];
                console.log(`step: ${step} position: ${position}`);
                this.current_state[position] = 'X';
                this.player_turn = 'O';
                step++;
                if (step > input.length) return;
            } else {
                var [m, p] = this.maxF();
                console.log(`computer thinking ${m} ${p}`);
                this.current_state[p] = 'O';
                this.player_turn = 'X';
            }
        }
    }
}

var g = new Game();
g.play();
