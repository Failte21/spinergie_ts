import fs from "fs";

const parseChange = (changeFile) => {
  return changeFile
    .toString()
    .split("\n")
    .reduce((acc, line) => {
      const [path, value] = line.replace(/ +/g, "").trim().split(":");
      return [...acc, { path: path.split("."), value }];
    }, []);
};

const parse = () => {
  if (process.argv.length < 4) {
    return {
      error: { message: "Usage: npm start original_file change_file " },
    };
  }
  try {
    const originalFile = fs.readFileSync(process.argv[2]);
    const changeFile = fs.readFileSync(process.argv[3]);
    const original = JSON.parse(originalFile.toString());
    const change = parseChange(changeFile);
    return { data: [original, change] };
  } catch (error) {
    return { error };
  }
};

export default parse;
