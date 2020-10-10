class Draw{
    constructor(){
        this.options = ['red','blue','green']
        let _results = this.DrawResult()
        this.getDrawResult = ()=> _results
    }

    DrawResult(){
        let colors = []
        for(let i = 0; i< this.options.length; i++){
            const index = Math.floor(Math.random()* this.options.length)
            const color = this.options[index]
            colors.push(color)
        }
        return colors
    }
}

// const draw = new Draw()