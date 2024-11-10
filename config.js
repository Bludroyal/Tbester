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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZYdWdzR0d1QkpNZ1dLem5HRy9ad2ZVci9mWTI1Zlk3NE43Z282Zi9ITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXNUWHZZdXRGYlZyRUV1cnNjZTJycnZEUVMvUzk0U3l0UzFwcFB6aHFDbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RUxIZ3crY0cxUFI1UEI0UEVoTVBZSzFrSVBCYUs0alBQMGdVV1piUzFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1eW80UVorSGI4SDZOQUpPM3BWaXdLNlUvZG9tVUdMVUdScnQ2bVcvL2lNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjROYmg0TWFmdmxZaGJ2b3NzcThKTEdLMkEyQXNRbm9xd0lpVWYyMjc3RW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI1em5xYmNCMlFWSjR1RmllV0FpZ2VrdjBlUzFhMmw4SDNrT1MyL09NZ1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05MMkpib0pIVzVrL3Btcy8zT3lEMTFwb1RDeFdnRndMRXpXRDJOcjkwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTh5b3Z5b21uRFZyZnVnNkQ2N0hwdWwrWDc5c3VLNmhWQ0J1Q2tCeWpHcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBrVUtKdWh5TTZ3dmJXNTJaN1dtejFNN0RRa3Urd2dGRUFpaFNpSFYzK1Z3a3RqaVN5K2MzbTF5YzRITHQ1NllEa1RkK0sxTWcyVHhHNlQrM0grUWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJhZHRYdGNlUCtWd2pvK2t3YU4xS1N6MW1rV1R2SGdBeHNtR2MwWkhPWWtjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqdFhWX3VlbFIyLTJlSmV6cVQ4MktnIiwicGhvbmVJZCI6IjUxZmFjZWJhLWVlYmMtNGUyYi05MGM4LTA1MGE3M2E0NDUwMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkY3N6WjNZTjRkNkdqSHErdXNDVGwyZWkyVWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEhYMEhOMWdYMUFpaXkrcUJwcTBuelRpR1N3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik02TFlRSkdBIiwibWUiOnsiaWQiOiIyMzQ3MDI1MzQwNzc0OjhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BxNzNzQUZFSkNYdHJrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdDaWRyM29qWnZDMVNuRWhQT0VrNHpGdm5VWFNZb0M1SUFZMUZhMEFpWDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijd6WVJyT3krMEIxc2QzTVZ5eE81eVpWcCsxZDFtQUtKcWpydExNU2gxSHRZQjhYbnl3M2xrSEluYnQreUN5dE9YWWxJeUFBZ2RkT21PUnQvaHl5OURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFNDFMNTFOUVJUTVhER0l4WmZLN3ZvbnkxK3I2NGZCL0NWOWoyTFgxMWhNaEVZNVpyY3hMMnZhdENmWFVFZDFaTVFscVk0UG1PaDdzdyt0VmUxVmRqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMjUzNDA3NzQ6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSZ29uYTk2STJid3RVcHhJVHpoSk9NeGI1MUYwbUtBdVNBR05SV3RBSWw5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMDM4MTA5fQ==" // session id here
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
