import fs from "fs";

const parse = () => {
  if (process.argv.length < 4) {
    return {
      error: { message: "Usage: npm start original_file change_file " },
    };
  }
  try {
    const original_file = fs.readFileSync(process.argv[2]);
    const change_file = fs.readFileSync(process.argv[3]);
    const original = JSON.parse(original_file.toString());
    const change = JSON.parse(change_file.toString());
    return { data: [original, change] };
  } catch (error) {
    return { error };
  }
};

const app = () => {
  const { data, error } = parse();
  if (error) console.error(error.message);
  else {
    const [original, change] = data;
    console.log({ original, change });
  }
};

export default app;
