# Chapter 30 — Access Modifiers & Abstraction

Control who can see and modify class members — `public`, `private`, `protected`, `readonly`, and `abstract`.

## Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `218_PPP.ts` | Public / Private / Protected | `APIClient` — `public baseURL`, `private apiKey`, `protected timeout` |
| `219_Page_Object_Model.ts` | POM pattern | `BasePage` with `protected navigate()`, `LoginPage` extends it |
| `220_READONLY.ts` | Readonly fields | `PlayWrightConfig` — fields set once in constructor, never changed |
| `221_Abstract_Class.ts` | Abstract classes | `BaseTest` with abstract `setup()`, `execute()`, `teardown()` |

## Run

```bash
npx ts-node 218_PPP.ts
```

## Q&A

- **Q: `public` vs `private` vs `protected`?** A: `public` — anyone can access. `private` — only inside the same class. `protected` — inside the class and subclasses.
- **Q: What does `readonly` do?** A: The field can be assigned once (in the constructor) but never changed after that.
- **Q: What's an abstract class?** A: A class that can't be instantiated directly. It defines a blueprint — subclasses must implement the abstract methods.
