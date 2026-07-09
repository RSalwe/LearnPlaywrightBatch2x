# Chapter 28 — ENUM

A special type that lets you define a set of named constants. Enums make code more readable by grouping related values under one name.

## Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `211_ENUM.ts` | Enum basics | `TestStatus` enum with string values (PASS, FAIL, SKIP, etc.) |
| `212_ENUM_Functions.ts` | Enums in functions | `SeverityLevels` and `Environment` enums for config |
| `213_ENUM.ts` | Enum + switch | `Browser` enum — `launchBrowser()` switches on enum value |
| `214_ENUM_API.ts` | API method enum | `HTTPMethod` enum for REST API calls |

## Run

```bash
npx ts-node 211_ENUM.ts
```

## Q&A

- **Q: Why use enums instead of strings?** A: Enums prevent typos and give you autocomplete. `"Chrome"` vs `Browser.Chrome` — the enum version is checked at compile time.
- **Q: Can enums have string values?** A: Yes — `enum Browser { Chrome = "chrome" }` assigns custom string values.
- **Q: Where do enums shine?** A: Switch statements, fixed option lists (browsers, environments, HTTP methods, test statuses).
