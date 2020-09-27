import { expect } from "chai";

import applyChange from "./applyChange";

const original = {
  page1: {
    initialSettings: {
      coordinates: [10, 12],
      color: "white",
    },
    "available-filters": {
      "name-filter": {
        column: "name",
        sort: "desc",
      },
    },
  },
  page2: {
    initialSettings: {
      coordinates: [14, 20],
      color: "red",
    },
    "available-filters": {},
  },
};

describe("ApplyChange", () => {
  it("works with change similar to original", () => {
    const change = original;
    const expected = original;
    expect(applyChange(original, expected)).to.eq(expected);
  });
});
