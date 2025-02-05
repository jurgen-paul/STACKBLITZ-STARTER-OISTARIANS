require('dotenv').config();

const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true',
  databaseURL: process.env.DATABASE_URL,
};
module.exports = config;
console.log(config);