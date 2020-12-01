const Handlebars = require("handlebars");
const { readFileSync } = require("fs");
const { outputFile } = require("fs-extra");


const template = Handlebars.compile(readFileSync("templateclasses.hbs").toString());

const TYPE_CONVERSIONS = {
  "String": "string",
  "Integer": "number",
  "Float": "number",
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

  schema.complexTypes = {};
  schema.fields.forEach(field => {
    field.type.split(/\W+/).forEach(type => {
      if (type.charAt(0) === type.charAt(0).toUpperCase()) schema.complexTypes[type] = type;
    })
  })

  // no ${schema.category} cuz imports
  outputFile(`types/${schema.name}.ts`, template({ schema }))
    .catch((err) => console.error(err));
});
