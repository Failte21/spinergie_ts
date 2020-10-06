type Change = { path: [string]; value: String };

const set = (path: [string] | [], value: unknown, object: Object) => {
  const [first, ...rest] = path;

  if (rest.length == 0) {
    return { ...object, [first]: value };
  }
  if (object[first]) {
    return { ...object, [first]: set(rest, value, object[first]) };
  }
  return object;
};

const applyChange = (original: Object, changes: [Change]) => {
  return changes.reduce((acc, { path, value }) => {
    // const lens = lensPath(path);
    return set(path, value, acc);
  }, original);
};

export default applyChange;
