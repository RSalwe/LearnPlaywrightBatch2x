class TestDataStorage<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item)
    }
    getFirst(): T {
        return this.items[0]!;
    }
    getAll(): T[] {
        return this.items;
    }
    count(): number {
        return this.items.length;
    }
}
let statusCodeStore = new TestDataStorage<number>();
let statusNameStore = new TestDataStorage<string>();

statusCodeStore.add(150);
statusCodeStore.add(250);
statusCodeStore.add(350);

statusNameStore.add("Login Test");
statusNameStore.add("Logout Test");

console.log("Codes: ", statusCodeStore.getAll());
console.log("First Code: ", statusCodeStore.getFirst());
console.log("Tests: ", statusNameStore.getAll());
console.log("Tests Count: ", statusNameStore.count());



