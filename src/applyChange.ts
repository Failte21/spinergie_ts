import { lensPath, set } from "ramda";

type Change = { path: [String]; value: String };

const applyChange = (original: Object, changes: [Change]) => {
  return changes.reduce((acc, { path, value }) => {
    const lens = lensPath(path);
    return set(lens, value, acc);
  }, original);
};

export default applyChange;
