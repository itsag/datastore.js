![datastore-js](https://user-images.githubusercontent.com/71135962/159658498-bfd1def8-cd91-4425-b7b9-cf84840e0d52.png)

## Status

![Tests](https://github.com/itsag/datastore.js/actions/workflows/tests-build.yml/badge.svg) ![Issues](https://img.shields.io/github/issues/itsag/datastore.js.svg) ![PRs](https://img.shields.io/github/issues-pr/itsag/datastore.js.svg)

## Introduction

Datastore.js is built on top of plain JavaScript objects as they can store any type of data in key value pairs. They can have nested objects and arrays as a value. The logic is fairly simple: every datastore instance initializes a new object and all the CRUD operations are performed on it.

## Installation

```sh
yarn add @ajayguptadev/datastore
```

## Documentation

### createDataStore

Create a new datastore.

```js
const notesDataStore = createDataStore();
```

### getStore

Return everything in the store.

```js
const results = notesDataStore.getStore();
```

### clearStore

Clear the store.

```js
notesDataStore.clearStore();
```

### getItem(key: string)

Get an item from the store.

```js
const result = notesDataStore.getItem("key1");
```

### setItem(key: string, value: any)

Set an item in the store.

```js
notesDataStore.setItem("key1", "value1");
```

### removeItem(key: string)

Remove an item from the store.

```js
notesDataStore.removeItem("key1");
```
