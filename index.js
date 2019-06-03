const axios = require("axios");
const cheerio = require("cheerio");
const { writeFileSync } = require("fs");

const DOCS_URL = "https://core.telegram.org/bots/api";

// A simple map of headings to the API category
const CATEGORIES = {
  "Getting updates": "core",
  "Available types": "core",
  "Available methods": "core",
  "Updating messages": "core",
  "Stickers": "stickers",
  "Inline mode": "inline",
  "Payments": "payments",
  "Telegram Passport": "passport",
  "Games": "game"
}

async function main() {
  const content = (await axios(DOCS_URL)).data;
  const $ = cheerio.load(content);

  // The current version is the first p that's a direct sibling to an h4
  const version = $("h4 + p").first().text();

  const schemas = [];
  const methods = [];

  // Find and iterate through every table element
  $("table").each((index, element) => {
    element = $(element);

    // We backtrack to the nearest h4, which we assume is the heading for that table
    const name = element.prevUntil("h4").prev("h4").text();

    // Backtrack to the nearest h3, which we assume is the heading for the category
    const category = CATEGORIES[element.prevUntil("h3").prev("h3").text()] || "unknown";

    const description = element.prevUntil("h4").map((index, p) => $(p).text()).get().join("\n");

    // If the first letter is uppercase, we can assume its a schema
    if (name.charAt(0) === name.charAt(0).toUpperCase()) {
      schemas.push({
        name,
        description,
        category,
        // We map each row in the table to its own field
        fields: element.find("tbody").children().map((index, row) => {
          row = $(row);

          const children = row.children();

          return {
            name: $(children[0]).text(),
            type: $(children[1]).text(),
            description: $(children[2]).text(),
            // If the description includes "Optional", we can mark the field as optional
            optional: $(children[2]).text().includes("Optional"),
          };
        }).get(),
      });

      return;
    }

    // Otherwise, its a method
    methods.push({
      name,
      description,
      category,
      fields: element.find("tbody").children().map((index, row) => {
        row = $(row);

        const children = row.children();

        return {
          name: $(children[0]).text(),
          type: $(children[1]).text(),
          description: $(children[3]).text(),
          // Methods have a separate column for optional, which is what this checks
          optional: $(children[2]).text().includes("Optional"),
        };
      }).get(),
    });
  });

  const result = {
    version,
    schemas,
    methods,
  };

  writeFileSync("data.json", JSON.stringify(result, null, 2));
}

main();
