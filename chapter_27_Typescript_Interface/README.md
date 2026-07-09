# Chapter 27 — TypeScript Interface

Defines the *shape* of an object — what properties and methods it must have. Interfaces are a compile-time contract, not a runtime construct.

## Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `201_Interface.ts` | Interface basics | Define a `TestCase` interface, create typed objects |
| `202_Interface_Part2.ts` | Optional properties | `?` suffix for fields that may be omitted |
| `203_Interface_Readonly.ts` | Readonly modifier | `readonly` prevents reassignment after creation |
| `204_Interface_Readonly.ts` | Advanced readonly | `readonly` on Point, readonly arrays |
| `205_Interface.ts` | Interface methods | Define methods in interfaces (Calculator example) |
| `206_Hooks.ts` | Function types | Anonymous function signature in interfaces (test hooks) |
| `207_Bug_Report.ts` | Real-world model | `BugReport` interface with string arrays |
| `208_TestConfig.ts` | Config objects | Optional fields in test configuration objects |
| `209_Real_Example.ts` | Extending interfaces | `LoginPage` and `FreeTriaPage` extend `BasePage` |
| `210_Class_Interface.ts` | Class + Interface | `implements` keyword — class contracts |

## Run

```bash
npx ts-node 201_Interface.ts
```

## Q&A

- **Q: Does an interface exist at runtime?** A: No — it's erased during compilation. It's a compile-time check only.
- **Q: Optional vs readonly?** A: `?` means the property can be missing. `readonly` means it must be present but can't be changed later.
- **Q: Can I make an array readonly in an interface?** A: Yes — `readonly items: readonly number[]` makes both the property and the array itself immutable.
- **Q: Can an interface extend another?** A: Yes — `interface LoginPage extends BasePage` inherits all properties from `BasePage`.
- **Q: Can a class implement an interface?** A: Yes — `class TestCase implements Executable` means the class must provide all properties and methods the interface declares.
