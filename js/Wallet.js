class Wallet{
    constructor(money){
        let _money = money

        this.getMoney = ()=> _money

        this.checkCanPlay = (value)=>{
            if(money >= value) return true
            return false
        }

        this.changeMoneyWallet = (value, type = '+')=>{
            if(typeof value === 'number' && !isNaN(value)){
                if(type === '+'){
                    return _money += value
                }else if( type === '-'){
                    return _money -= value
                }else{
                    throw new Error('Bad operation')
                }
            }else{
                console.log(typeof value);
                throw new Error('Wrong value!')
            }
        }
    }
}

// const wallet = new Wallet(100)