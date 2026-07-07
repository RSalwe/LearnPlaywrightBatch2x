class Person {
    #child1;
    #child2;

    constructor(child, child1, child2) {
        this.child = child;
        this.#child1 = child1;
        this.#child2 = child2;
    }

    getchild1() {
        return this.#child1;
    }
    setchild1(changed_name) {
        this.#child1 = changed_name;
    }
}
const p = new Person("Ramesh", "Suresh", "Ganesh");
console.log(p.child);
//console.log(p.#child1);//Syntax Error

console.log(p.getchild1());
