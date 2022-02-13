# Datastore.js

![Tests](https://github.com/itsag/datastore.js/actions/workflows/tests-build.yml/badge.svg) ![Issues](https://img.shields.io/github/issues/itsag/datastore.js.svg) ![PRs](https://img.shields.io/github/issues-pr/itsag/datastore.js.svg)

A simple in-memory database built on objects for JavaScript apps.

## Introduction

Datastore.js is built on top of plain JavaScript objects as they can store any type of data in key value pairs. They can have nested objects and arrays as a value. The logic is fairly simple: every datastore instance initializes a new object and all the CRUD operations are performed on it.

## Documentation

### createDataStore

Creates a new datastore.

```js
const notesDataStore = createDataStore();
```

### getStore

Returns everything in the store.

```js
const results = notesDataStore.getStore();
```

### clearStore

Clears the store.

```js
notesDataStore.clearStore();
```

### getItem(key: string)

Gets an item from the store.

```js
const result = notesDataStore.getItem("key1");
```

### setItem(key: string, value: any)

Sets an item in the store.

```js
notesDataStore.setItem("key1", "value1");
```

### removeItem(key: string)

Remove an item from the store.

```js
notesDataStore.removeItem("key1");
```
