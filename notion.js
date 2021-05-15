const { Client } = require('@notionhq/client');
const dotenv = require("dotenv")
dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

(async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.retrieve({ database_id: databaseId });
  console.log(response);
})();
