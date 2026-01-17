# Trait Views - Reference Implementation

**Reference implementation for experimentation and discussion**

This repository contains a reference implementation of the concepts explored in the article *"Trait Views: exposing behavior without inheritance"*.

## ⚠️ Important Notice

This is an **experimental reference implementation** designed for:
- 📖 **Reading**: Understanding the concepts through concrete code
- 🧪 **Testing**: Experimenting with the approach in controlled environments  
- 💬 **Discussing**: Evaluating trade-offs and alternatives

**This is NOT:**
- ❌ A production-ready library
- ❌ A framework or package to install
- ❌ Intended for use in production applications

## Educational Purpose

The primary goal is **pedagogical** - to provide a working example that can be studied, discussed, and used as a basis for experimentation. The implementation prioritizes clarity and demonstrating concepts over performance or production concerns.

## Repository Structure

```
.
├── README.md          # This file
├── src/              # Reference implementation
├── examples/         # Usage examples
└── LICENSE           # License information
```

## Getting Started

Clone the repository and explore the code:

```bash
git clone https://github.com/lsarrazi/trait-views-article.git
cd trait-views-article
```

Read through the TypeScript source code in `src/trait-views.ts` and examine the examples in `examples/` to understand how trait views work.

### Running Examples

The examples are written in TypeScript. To run them, you can use `tsx` or compile them first:

```bash
npx tsx examples/complete-test-trait.ts
```

## Contributing

This is a reference implementation for discussion purposes. If you have questions, observations, or want to discuss the approach, please open an issue.

**Note**: This repository does not accept feature PRs or aim to become a maintained package.
