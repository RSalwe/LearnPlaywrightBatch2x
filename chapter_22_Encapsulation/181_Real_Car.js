class Car {
    #engine;

    constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName;
    }

    getEngine() {
        return this.#engine;
    }
    setEngine(nameEngine) {
        this.#engine = nameEngine;
    }
}

const p = new Car("Tesla", "V8");
//console.log(Car.#engine);//Syntax error
console.log(p.getEngine());
p.setEngine("V9");
console.log(p.getEngine());


