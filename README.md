# TypeScript React Webshop App

## Overview

This sample application demonstrates best practices in React scalable component organization and testing.

The `index.ts` files in each folder makes component imports clean and easy to refactor. Each React element is a self-contained unit bundled together with its children, tests and styling.

Instead of importing from parent or grandparent, top level modules are aliased into simple their folder names.

Instead of:
```
import UseFilters from '../../../hooks/UseFilters'
```
it uses:
```
import { UseFilters } from 'hooks'
```

## Behaviour

As an overly simplified webshop interface, there are a list of randomly generated products displayed to the user. You can interract with the filters to separate out the desired products. Requires clicking the `Filter` button to activate.

## Installation

To install the repo:
```
git clone git@github.com:fozodavid/typescript_react_webshop.git
yarn
```

To start the dev server:
```
yarn start
```

To run the tests:
```
yarn test
```

## Notes

`data/productGenSchema.json` is a schema to generate json at
https://www.json-generator.com/