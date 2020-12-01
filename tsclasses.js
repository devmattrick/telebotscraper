const Handlebars = require("handlebars");
const { readFileSync } = require("fs");
const { outputFile } = require("fs-extra");

Handlebars.registerHelper('curly', function (object, open) {
  return open ? '{' : '}';
});

const typesTemplate = Handlebars.compile(readFileSync("templateclasses.hbs").toString());
const apiTemplate = Handlebars.compile(readFileSync("templateapi.hbs").toString());

const TYPE_CONVERSIONS = {
  "String": "string",
  "Float number": "number",
  "Integer": "number",
  "Float": "number",
  "Boolean": "boolean",

  "True": "true",
  "False": "false",
  "PassportElementError\"": "any\"", // alternative: (PassportElementErrorDataField | PassportElementErrorFrontSide | PassportElementErrorReverseSide | PassportElementErrorSelfie | PassportElementErrorFile | PassportElementErrorFiles | PassportElementErrorTranslationFile | PassportElementErrorTranslationFiles | PassportElementErrorUnspecified)
  "InlineQueryResult\"": "any\"", // alternative: ..you know
  "InputMedia\"": "(InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo)\"",
  "InputMessageContent\"": "(InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent)\"",
  "Array of InputMediaAudio, InputMediaDocument, InputMediaPhoto and InputMediaVideo\"": "(InputMediaAudio | InputMediaDocument | InputMediaPhoto | InputMediaVideo)[]\"",
  "InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply\"": "(InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply)\""
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
    field.type.split(/\W+/).filter(t=>t.length).filter(t=>t.charAt(0)===t.charAt(0).toUpperCase()).forEach(type => {
            
        schema.complexTypes[type] = type;
    })
  })

  // no ${schema.category} cuz imports
  outputFile(`types/classes/${schema.name}.ts`, typesTemplate({ schema }))
    .catch((err) => console.error(err));
});

outputFile('./types/classes/InputFile.ts', "import fs from 'fs';\nexport default class InputFile extends fs.ReadStream{}")
  .catch((err) => console.error(err));

  
outputFile(`./types/Api.ts`, apiTemplate(dataObj))
  .catch((err) => console.error(err));
