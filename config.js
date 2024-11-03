//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2347025340774";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU015L0sxb2xMNUI4R1VxTGh4QU9FbDBjVjJrQlNYc2JhdEowdHVKVVZGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmd1dEN4U1BCS3d1RS9MajVpZmJMN2xuWHZzVUVJN1dFbTBIV0tFNnYyRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQUxvWkllb2d6c0xEbHZvZjYzdGJ3U2tVVFlqZ1FXVHBlQ04rQUpiWDN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvdjA2WVFJdkYybEJFY3N0TXVES3FKSU5HYkZsY1NyYjUzYllMd1JmTlVVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQOFFqVmd3UFY2WjNKTTBWUmMwZUNibmdBejZNSi9WN1N1WWxyTnpmSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ1QlhOK2wwVUJ1R3RON1luQmgrT1JLZ1Zlam93ZHdyNkFsYlBHL0I0bTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0t3dm5tYnlrSWsxeXZDUlcvcmhRb0YvWGdpRndpb2s4US8wdUtibi8yZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1YwUVg1NWlFZ1NLeUs0VGEvTnlQQmVWbHVrZFZJQXVXY29IWE1zb2x4OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpHSXNkU01JOGczWW55ZzQwUVFSQmhtaGgyYkpqUGI1K0FOditoSHE0cHVGeW9FUFJlbWxQRDFoN2cyUzNXNnp3NVQ5MHNRSjIzSmtSRkkyVUcrcGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMzLCJhZHZTZWNyZXRLZXkiOiJ3TzFLVnNDQzVJMnFxcSt4bk5KRUJtY3prWGtSVFoxNmc0N1hDVzFUQ3VzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaQnROVTlZSlM0eXhVTGNYZ0lIWTB3IiwicGhvbmVJZCI6IjMzMTRmYTRjLWU0NzAtNDY0ZS1iZGM5LTc1ZGI3MTI4NWViNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVbkJGZENVVmlsQzNlOVJoT0xERWpVZUdzSDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXFveDVMREJLN3UxUmwweDd4dTA2eVl1NllzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkYxRkVYMkNWIiwibWUiOnsiaWQiOiIyMzQ3MDI1MzQwNzc0OjdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BtNzNzQUZFTHZFbjdrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdDaWRyM29qWnZDMVNuRWhQT0VrNHpGdm5VWFNZb0M1SUFZMUZhMEFpWDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkU5SDBEVk80cFI2cmN4NllWbkZGeFV5YTdDeFVMUmdwbnRjelBXalVxNDE1VW5Ba3Y3bjZEcWRYYWZiVlI1Q3A0dzFmeHVyMDFSdUErT1lNckNROUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNa200VVNMUjZFNVhFMTJxMWhTY1JnRmZMUE1SRGE0V2p3TlZhNExtSFRHaEpQQ0pjWVcrNnV4bFl0Z3FVL3NaeUcvOEp2Mm8zRmkxd3I2cUUzL2lodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMjUzNDA3NzQ6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSZ29uYTk2STJid3RVcHhJVHpoSk9NeGI1MUYwbUtBdVNBR05SV3RBSWw5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNjY3MDgxfQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`☯︎tbester✌︎💨™`",
  author: process.env.PACK_AUTHER || "☯︎tbester✌︎💨",
  packname: process.env.PACK_NAME || "☯︎tbester✌︎💨",
  botname: process.env.BOT_NAME || "☯︎tbester✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎tbester✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎tbester✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
