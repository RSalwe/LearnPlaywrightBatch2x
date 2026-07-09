# Chapter 29 — TypeScript Generics

Write reusable functions and classes that work with **any type** while keeping type safety. The type is passed in as a parameter (`<T>`).

## Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `215_Generic.ts` | Generic functions | `getFirstResult<T>` — works with `number[]` or `string[]` |
| `216_Generic_Class.ts` | Generic classes | `TestDataStorage<T>` — a type-safe container with add/get/count |
| `217_Generic_API_Response.ts` | Generic API wrapper | `wrapResponse<T>` — wraps any data type with a status code |

## Run

```bash
npx ts-node 215_Generic.ts
```

## Q&A

- **Q: What does `<T>` mean?** A: It's a type variable — like a placeholder. You pass the actual type when calling: `getFirstResult<number>(...)`.
- **Q: Why not just use `any`?** A: `any` disables type checking. Generics preserve the type — if you pass `string[]`, you get `string` back.
- **Q: Can I use generics with classes?** A: Yes — `class TestDataStorage<T>` lets you create a storage for `number`, `string`, or any type you need.
