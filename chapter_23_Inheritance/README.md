# Chapter 23 — Inheritance

One class extends another. The child gets everything the parent has and can add or override its own.

## Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `183_Single_Inheritance.js` | Single inheritance | `extends` keyword, child inherits parent methods |
| `184_SI_Example.js` | SI example | Practical single-inheritance scenario |
| `185_Single Inheritance_Contra.js` | Constructor chain | `super()` in child constructor |
| `186_IQ.js` | IQ questions | Inheritance interview prep |
| `187_IQ2.js` | Advanced IQ | Deeper inheritance edge cases |
| `188_REAL_POM.js` | POM pattern | Page Object Model via inheritance |
| `189_Multiple_Inheritance.js` | Multiple inheritance | Mixin / composition pattern |
| `190_Multi_Level_Inheritance.js` | Multi-level | Grandparent → Parent → Child chain |
| `191_Hierarchical_Inheritance.js` | Hierarchical | One parent, many children |

## Concept

`class Child extends Parent` creates an inheritance chain. The child can:
- Use parent methods as-is
- Override methods with its own version
- Call parent methods with `super.methodName()`
- Call parent constructor with `super()`

JavaScript doesn't support classical multiple inheritance — one class can extend only one other. For sharing behavior across unrelated classes, use mixins or composition.

## Run

```bash
node 183_Single_Inheritance.js
```

## Q&A

- **Q: Does the child need a constructor?** A: No — if omitted, it automatically calls `super(...args)` with whatever arguments are passed. If you write a constructor, you *must* call `super()` before using `this`.
- **Q: Can a child override a method?** A: Yes — just define a method with the same name. The child's version wins.
