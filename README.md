# Test Libraries

## Jest

[Jest Getting Started](<https://jestjs.io/docs/en/getting-started.html>)

```shell
npm i jest jest-axe @types/jest @types/jest-axe -D
```

## React Testing Library (RTL)

[RTL Getting Started](<https://testing-library.com/docs/intro>)

```shell
npm i @testing-library/react -D
npm i @testing-library/jest-dom -D
npm i @testing-library/user-event -D
```

## Test Dependencies & Configuration

```shell
npm i ts-jest identity-obj-proxy -D
```

* [Configuration](<./jest.config.js>)
* [Required Imports](<./src/setupTests.ts>)

## Tests

* [Function Test](<./src/__tests__/function.test.tsx>)
* [Component Test](<./src/__tests__/component.test.tsx>)
* [Api Connected Component Test](<./src/__tests__/api.test.tsx>)
* [Redux Connected Component Test](<./src/__tests__/redux.test.tsx>)
