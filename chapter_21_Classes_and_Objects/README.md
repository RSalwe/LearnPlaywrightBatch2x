# Chapter 21 — Classes & Objects

Blueprint → instance. A class defines the structure (properties) and behavior (methods) that every object of that type carries.

## Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `171_Class_Object.js` | Class basics | `class` keyword, constructor, properties, methods |
| `171_Class_Object2.js` | Class methods | Adding behavior to a class |
| `173_Car.js` | Car class | Real-world domain modeling |
| `174_Real_Browser.js` | Browser class | Simulating browser launch/close |
| `175_IQ.js` | Interview questions | Common class/object patterns |
| `176_Private_Public.js` | Private fields | `#property` syntax for encapsulation |
| `177_Static.js` | Static members | `static` methods and properties |
| `178_Static.js` | Advanced static | More static member patterns |
| `22-JUN-2026 (TASK).js` | Practice task | Calculator & Student class exercises |

## Concept

A **class** is a template. You call `new ClassName()` to create an **object** (instance) that has its own copy of the properties and can call the methods.

## Run

```bash
node 171_Class_Object.js
```

## Q&A

- **Q: Can I skip the constructor?** A: Yes — JavaScript adds an invisible empty constructor.
- **Q: What's `this` inside a method?** A: The object that called the method (the instance).
- **Q: Private vs public?** A: `#field` is private — only methods inside the class can access it. Everything else is public.
