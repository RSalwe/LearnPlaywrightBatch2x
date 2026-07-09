# Chapter 31: Type Override, Assertions, and Decorators

TypeScript advanced features — type assertions, type aliases, decorators, and related interview questions.

## Files

| File | Description |
|------|-------------|
| `222_Type_Assert.ts` | Type assertions using `as` keyword to override inferred types (e.g., `element as HTMLElement`) |
| `223_Type_Alias_As.ts` | Type aliases with `type` keyword, combining with assertions for cleaner type overrides |
| `224_Override.ts` | Method override with type-safe signatures in derived classes |
| `225_IQ.ts` | Interview questions on type assertions, narrowing, and type safety patterns |
| `226_Decorator.ts` | Class decorators — adding metadata and behavior to classes |
| `227_Decorator_2.ts` | Property and method decorators — decorating individual class members |
| `228_Multiple_Decorator.ts` | Multiple decorators on a single class — execution order and composition |

## Key Concepts

- `as` keyword — tell the compiler a value's type when you know more than it does
- `type` aliases — reusable type definitions for complex shapes
- Class decorators — `@decorator` syntax to annotate/modify classes
- Property/method decorators — decorate individual members with custom logic
- Decorator composition — multiple decorators execute bottom-to-top (order matters)
