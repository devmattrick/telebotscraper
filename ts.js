const Handlebars = require("handlebars");
const { readFileSync } = require("fs");
const { outputFile } = require("fs-extra");

const template = Handlebars.compile(readFileSync("template.hbs").toString());

const TYPE_CONVERSIONS = {
  "String": "string",
  "Integer": "number",
  "Float": "number",
  "Float number": "number", 
  "Boolean": "boolean",

  "True": "true",
  "False": "false",
}

let data = readFileSync("./data.json").toString();

// Primitive type conversions
Object.keys(TYPE_CONVERSIONS).forEach((key) => {
  const replaceWith = TYPE_CONVERSIONS[key];
  data = data.replace(new RegExp(key, "g"), replaceWith);
});

// Array type conversions
data = data.replace(/"Array of (\w+)"/g, `"$1[]"`);
data = data.replace(/"Array of Array of (\w+)"/g, `"$1[][]"`);

// Mixed types
data = data.replace(/"(\w+) or (\w+)"/g, `"$1 | $2"`);

const dataObj = JSON.parse(data);

dataObj.schemas.forEach((schema) => {
  outputFile(`types/${schema.category}/${schema.name}.ts`, template({ schema }))
    .catch((err) => console.error(err));
});
