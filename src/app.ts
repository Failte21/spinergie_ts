import applyChange from "./applyChange";
import parse from "./parser";

const app = () => {
  const { data, error } = parse();
  if (error) console.error(error.message);
  else {
    const [original, change] = data;
    console.log({ original, change });
    console.log(JSON.stringify(applyChange(original, change)));
  }
};

export default app;
