# Chapter 24 — Polymorphism

Same method name, different behavior based on the object's actual type. The calling code doesn't need to know which concrete class it's dealing with.

## Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `192_Method_Overriding.js` | Method overriding | Child class overrides parent method, dynamic dispatch |

## Concept

When a child class defines a method that already exists in the parent, the child's version **overrides** the parent's. At runtime, JavaScript looks at the actual object type, not the reference type, to decide which method to call:

```js
class BaseTest {
    setup() { console.log("Base: Open Browser"); }
}
class APITest extends BaseTest {
    setup() { console.log("APITest: Open Browser"); }
}

let test = new APITest();
test.setup(); // "APITest: Open Browser" — overridden
```

## Run

```bash
node 192_Method_Overriding.js
```

## Q&A

- **Q: Can I still call the parent's overridden method?** A: Yes — use `super.methodName()` inside the child's method.
- **Q: Is this compile-time or runtime?** A: Runtime (dynamic dispatch). JavaScript doesn't have compile-time method resolution.
