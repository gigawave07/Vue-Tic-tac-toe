import {computed, reactive} from "@vue/reactivity";

export default function gameLogic() {
    const game = reactive({
        history: [
            {squares: Array(9).fill(null)}
        ],
        current: [null],
        lineWon: [],
        xIsNext: true,
    })

    const handleClick = (i) => {
        const history = game.history
        const current = history[history.length - 1].squares.slice()
        if (isWin(current) || current[i]) return
        const next = game.xIsNext ? 'X' : 'O'
        current.splice(i, 1, next)
        game.history = game.history.concat([{squares: current}])
        game.xIsNext = !game.xIsNext
        game.current = current
        game.lineWon = isWin(current)?.[1]
    }

    const jumpTo = (i) => {
        game.current = game.history[i].squares
        game.history = game.history.slice(0, i + 1)
        game.xIsNext = !(i % 2)
    }

    const status = computed(() => {
        const winner = isWin(game.current)
        return isEnd(game.current) ? `Game is draw` :
            winner ? `Player ${winner[0]} won` : `Next player: ${game.xIsNext ? 'X' : 'O'}`
    })

    const isWin = (squares) => {
        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < win.length; i++) {
            const [a, b, c] = win[i]
            if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
                return [squares[a], win[i]]
            }
        }
        return null
    }

    const isEnd = (squares) => {
        return !squares.includes(null)
    }

    return {
        game,
        status,
        handleClick,
        jumpTo,
        isWin,
    }
}
