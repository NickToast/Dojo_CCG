class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
    }
    showStats(){
        console.log(`${this.name} Stats:\nCost: ${this.cost}\nPower: ${this.power}\nResilience: ${this.res}\n`)
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            target[this.stat] += this.magnitude;
        } else {
            throw new Error ("Target must be a unit!")
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "res", 3);
hardAlgorithm.play(redBeltNinja); // Hard Algorithm played on Red Belt Ninja, increasing resilience from 4 to 7
redBeltNinja.showStats();
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromiseRejection = new Effect("Unhandle Promise Rejection", 1, "Reduce target's resilience by 2", "res", -2);
unhandledPromiseRejection.play(redBeltNinja);
redBeltNinja.showStats();
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2)
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
redBeltNinja.showStats();
blackBeltNinja.showStats();