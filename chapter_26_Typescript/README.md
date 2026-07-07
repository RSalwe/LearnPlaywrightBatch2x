# Chapter 26 — TypeScript

JavaScript with types. Adds static type checking, interfaces, enums, and modern tooling support on top of JS.

## Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `193_TS.js` | Plain JS file | JavaScript without type annotations |
| `194_TS_HelloWorld.ts` | First TS file | Type annotations on variables and functions |
| `194_TS_HelloWorld.js` | Compiled output | The JS generated from the `.ts` file |
| `195_TS_Part1.ts` | Basic functions | `void` return type, string parameter |
| `196_TS_Part2.ts` | Primitive types | `string`, `number`, `boolean`, `null`, `undefined`, arrays, `any`, `unknown` |
| `197_TS_Part2.ts` | Type guards & functions | `typeof` narrowing, function/arrow/object annotations |
| `198_TS_Part3.ts` | Return types | `void`, `never` for functions that throw or loop forever |
| `199_IQ.ts` | Interview Q — endpoint | String builder, status code checker, step logger |
| `200_IQ.ts` | Interview Q — arrays | Filter response codes for failures (`>= 400`) |

## Run

```bash
npx ts-node 194_TS_HelloWorld.ts
# or compile first
npx tsc 194_TS_HelloWorld.ts
node 194_TS_HelloWorld.js
```

## Q&A

- **Q: What's the difference between `any` and `unknown`?** A: `any` disables type-checking entirely. `unknown` forces you to narrow (e.g. with `typeof`) before using the value.
- **Q: What does `never` mean?** A: A function that never returns — either it throws an error or has an infinite loop.
- **Q: Do browsers run `.ts` files?** A: No — TypeScript must be compiled (`tsc`) to JavaScript first.
