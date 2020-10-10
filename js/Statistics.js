class Statistics{
    constructor(){
        this.gameStatisctics = []
    }
    addGameToStatistics(win,bid){
        let result = {
            win,
            bid,
        }
        this.gameStatisctics.push(result)
    }
    showGameStatistics(){
        let games = this.gameStatisctics.length
        let wins = this.gameStatisctics.filter(result=>result.win).length
        let losses = this.gameStatisctics.filter(result=>!result.win).length
        return [games,wins,losses]
    }
}
// const stats = new Statistics()