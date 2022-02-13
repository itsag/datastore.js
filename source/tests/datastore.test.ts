// npx jest ./source/tests/datastore.test.ts

import {createDataStore} from "../datastore";

describe("createDataStore", () => {
  const dummyDataStore = createDataStore();

  beforeEach(() => {
    dummyDataStore.clearStore();
    dummyDataStore.setItem("key1", "value1");
    dummyDataStore.setItem("key2", "value2");
    dummyDataStore.setItem("key3", "value3");
    dummyDataStore.setItem("key4", "value4");
  });

  describe("getStore", () => {
    const expectedOutput = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: "value4"
    };

    it("should return everything in the store", () => {
      expect(dummyDataStore.getStore()).toEqual(expectedOutput);
    });
  });

  describe("clearStore", () => {
    const expectedOutput = {};

    it("should wipe the store", () => {
      dummyDataStore.clearStore();

      expect(dummyDataStore.getStore()).toEqual(expectedOutput);
    });
  });

  describe("getItem", () => {
    const expectedOutput = "value1";

    it("should return the value associated with a given key", () => {
      expect(dummyDataStore.getItem("key1")).toEqual(expectedOutput);
    });
  });

  describe("setItem", () => {
    const expectedOutput = "value0";

    it("should set an item with its value in the store", () => {
      dummyDataStore.setItem("key0", expectedOutput);

      expect(dummyDataStore.getItem("key0")).toEqual(expectedOutput);
    });
  });

  describe("removeItem", () => {
    it("should remove an item from the store", () => {
      dummyDataStore.removeItem("key0");

      expect(dummyDataStore.getItem("key0")).toBeUndefined();
    });
  });
});
