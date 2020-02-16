import time

class Game:
    def __init__(self, board_size=3):
        self.board_size = board_size
        self.X_PLAYER = 'X'
        self.O_PLAYER = 'O'
        self.EMPTY    = '.'
        self.init_game()


    def init_game(self):
        self.current_state = [['.' for _ in range(self.board_size)] for _ in range(self.board_size)]
        self.player_turn = self.X_PLAYER

    def draw_board(self):
        for i in range(self.board_size):
            row = self.current_state[i]
            print("|".join([' {} '.format(x) for x in row]))
            print("")
        print("")

    def is_valid(self, px, py):
        if 0 <= px < self.board_size and 0 <= py < self.board_size:
            return self.current_state[px][py] == self.EMPTY
        return False


    def is_end(self):
        def transpose(board):
            board_size = len(board)
            return [[board[j][i] for j in range(board_size)] for i in range(board_size)]

        def check_row(board):
            for i in range(len(board)):
                winner = board[i][0] if (len(set(board[i])) == 1) else None
                if winner != None and winner != self.EMPTY:
                    return winner
            return winner

        def check_diagonal(board):
            n = len(board[0])
            main_diagonal = [board[i][i] for i in range(n)]
            secn_diagonal = [board[i][n - i - 1] for i in range(n)]

            if len(set(main_diagonal)) == 1:
                return main_diagonal[0]
            
            if len(set(secn_diagonal)) == 1:
                return secn_diagonal[0]

            return None 

        # check rows and columns
        for board in [self.current_state, transpose(self.current_state)]:
            winner = check_row(board)
            if winner != None and winner != self.EMPTY:
                return winner 
        
        # check diagonal
        winner = check_diagonal(self.current_state)
        if winner != None and winner != self.EMPTY:
            return winner 

        #is board not full? continue
        if self.EMPTY in [x for row in board for x in row]:
            return None

        # It's a tie
        return self.EMPTY
    
    # O is computer. Seeking 2 things - maximize its own score 
    # and minimize score of X
    def max(self):
        maxv = -2
        px = None
        py = None

        winner = self.is_end()
        if winner == self.X_PLAYER:
            return (-1, 0, 0)
        elif winner == self.O_PLAYER:
            return (1, 0, 0)
        elif winner == self.EMPTY:
            return (0, 0, 0)

        board_size = len(self.current_state[0])
        for i in range(board_size):
            for j in range(board_size):
                if self.current_state[i][j] == self.EMPTY:
                    self.current_state[i][j] = self.O_PLAYER
                    (m, min_i, min_j) = self.min()

                    if m > maxv:
                        maxv = m
                        px = i
                        py = j

                    self.current_state[i][j] = self.EMPTY

        return (maxv, px, py)

    # X looking for min
    def min(self):
        minv = 2
        px = None
        py = None

        winner = self.is_end()
        if winner == self.X_PLAYER:
            return (-1, 0, 0)
        elif winner == self.O_PLAYER:
            return (1, 0, 0)
        elif winner == self.EMPTY:
            return (0, 0, 0)

        board_size = len(self.current_state[0])
        for i in range(board_size):
            for j in range(board_size):
                if self.current_state[i][j] == self.EMPTY:
                    self.current_state[i][j] = self.X_PLAYER
                    (m, min_i, min_j) = self.max()

                    if m < minv:
                        minv= m
                        px = i
                        py = j

                    self.current_state[i][j] = self.EMPTY

        return (minv, px, py)
    
    def play(self):
        while True:
            self.draw_board()
            self.winner = self.is_end()

            if self.winner != None:
                if self.winner == self.X_PLAYER:
                    print("winner is X!")
                elif self.winner == self.O_PLAYER:
                    print("winner is O!")
                elif self.winner == self.EMPTY:
                    print("It's a tie!")

                self.init_game()

            if self.player_turn == self.X_PLAYER:
                while True:
                    start = time.time()
                    (m, qx, qy) = self.min()
                    end = time.time()

                    print("evaluation time: {}".format(round(end - start, 7)))
                    print("recommeded move: x={} y={}".format(qx, qy))

                    px = int(input("Insert X coordinate"))
                    py = int(input("Insert Y coordinate"))

                    (qx, qy) = (px, py)

                    if self.is_valid(px, py):
                        self.current_state[px][py] = 'X'
                        self.player_turn = self.O_PLAYER
                        break
                    else:
                        print("This move is not valid!. Try again.")
            else:
                (m, px, py) = self.max()
                self.current_state[px][py] = self.O_PLAYER
                self.player_turn = 'X'


def test():
    g = Game()

    # row tests
    g.current_state = [['X', 'X', 'X'],
                        ['.', '.', '.'],
                        ['.', '.', '.']] 
    assert(g.is_end() == 'X')

    g.current_state = [['.', '.', '.'],
                        ['X', 'X', 'X'],
                        ['.', '.', '.']] 
    assert(g.is_end() == 'X')

    g.current_state = [['.', '.', '.'],
                        ['.', '.', '.'],
                        ['X', 'X', 'X']]
    assert(g.is_end() == 'X')

    # column tests
    g.current_state = [ ['O', '.', '.'],
                        ['O', '.', '.'],
                        ['O', '.', '.']]
    assert(g.is_end() == 'O')

    g.current_state = [ ['.', 'O', '.'],
                        ['.', 'O', '.'],
                        ['.', 'O', '.']]
    assert(g.is_end() == 'O')

    g.current_state = [ ['.', 'O', 'O'],
                        ['.', 'O', 'O'],
                        ['.', 'O', 'O']]
    assert(g.is_end() == 'O')

    # diagonal test
    g.current_state = [ ['X', '.', '.'],
                        ['.', 'X', '.'],
                        ['.', '.', 'X']]
    assert(g.is_end() == 'X')

    g.current_state = [ ['.', '.', 'O'],
                        ['.', 'O', '.'],
                        ['O', '.', '.']]
    assert(g.is_end() == 'O')
    
    print("tests passed")
test()

def main():
    g = Game()
    g.play()

main()
