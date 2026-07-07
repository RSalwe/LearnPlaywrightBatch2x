# Chapter 22 — Encapsulation

Keep internal state private and expose only what's needed. The calling code shouldn't care about *how* data is stored — only *what* it can ask for.

## Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `179_Encap.js` | Encapsulation basics | Private `#` fields, controlled access via methods |
| `180_Real_Ex.js` | Real-world example | Practical data hiding scenario |
| `181_Real_Car.js` | Car encapsulation | Car internals hidden behind a clean API |
| `182_Encap_Bank.js` | Bank account | Balance as a private field, deposit/getbalance methods |

## Concept

Encapsulation bundles data (fields) and the methods that operate on that data inside a class, then restricts direct access to the fields. In JavaScript this is done with `#privateField` syntax. Callers interact through public methods — they can't accidentally set the balance to a negative value or skip validation.

## Run

```bash
node 179_Encap.js
```

## Q&A

- **Q: Can external code read `#balance`?** A: No. `account.#balance` throws a SyntaxError. Use the getter method.
- **Q: Why encapsulate?** A: So you can change internal implementation without breaking everything that uses the class.
