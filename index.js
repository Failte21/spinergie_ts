require("@babel/register")({ extensions: [".js", ".ts"] });

const { default: app } = require("./src/app");

app();
