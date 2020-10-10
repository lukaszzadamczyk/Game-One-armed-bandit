class Game{
    constructor(start){
        this.statistics = new Statistics()
        this.wallet = new Wallet(start)

        document.querySelector('.play__start').addEventListener('click', this.startGame.bind(this));
        this.boards = document.querySelectorAll('.game__color');
        this.input = document.querySelector('.play__bid');
        this.spanWallet = document.querySelector('.panel__span');
        this.spanResult = document.querySelector('.score__result');
        this.spanGames = document.querySelector('.score__number');
        this.spanWins = document.querySelector('.score__win');
        this.spanLosses = document.querySelector('.score__loss');

        this.render();

    }
    render(colors = ['gray', 'gray', 'gray'],money = this.wallet.getMoney(), stats = [0,0,0], result = true, won = 0, bid = 0, ){
        this.boards.forEach((board, index)=>{
            board.style.backgroundColor = colors[index]
        })
        if(result){
            result = `You Win ${won}`
        }else if(!result && result != ''){
            result = `You Lose ${bid}`
        }
        this.spanResult.textContent = result;
        this.spanWallet.textContent = money;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];

    }

    startGame(){

    }
}