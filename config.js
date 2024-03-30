const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/thabie/thabie";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9JP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b1280bce732a289c883dd.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254705529658" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254705529658";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_00_03_30_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNkFJQkJTa0M4QzZGZnNtZzZGRGxxVGIrY1VCN3JIM0JSdG5TUnFOWmtuVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInRkcG1JZStvOG5FVjVzWDF4VExLSnc4Q1grdXZJNUlsenZJZ2sxaVEyV0E9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMk1jeHdXNkVOQkFHUUxOUkJNc3NKWjc0TDFHVCt6NUh0ejQrcUphVCsyRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImFyV29JMnNOdi93UncvaHZNdXJ6SGZhNVB5R0E4K0ZJZXY3MWZWeGxGbEE9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK0w1Vy9TSTBPTnNOa0RlREJxU1B1WW0wWWpvWmVhRDFjNXBubTB1N2pYQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkt1MmlwOVBQYlVWUy9UKzJ5ZkE5SUtwTUFPbGtacy9HSkd0M0V2SjQvaTQ9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJJQlNWWFAvNDJWcFl6WVZUcitpb0NMazdHVGxYeVZhZ3BJdmdpUDdFQlU0PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSlh3L0MzSzNkK1c5UWxoOFZGL1l0cUNoSE1iMmNPTlNlSXJCZjNuZzBDWT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJaZ05ic0k4aWdUSDNEUFlaYzNYRXhwR0NvRlBJWTc3TERIMVBhdXU5bE01ZmxvM09lWmUvb1U2TkcxZWVTK3RsUHNTbUpCWUhqZUlaQi9va1M3NTJEZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NTAsXCJhZHZTZWNyZXRLZXlcIjpcImdVYmhNeDdUQ3hzRUJnWnZZUXBmMG9FZzFFSnluNk5vQk5QZXRqVHYzRFU9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNjM3ODA3NzEzNjhAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiOUM4RjkzQUI0NDU3MjJDOEMwMUNCRTA0ODEyQjkwMjdcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTc3ODQxN30se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNjM3ODA3NzEzNjhAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMzZFRENGOTI3MzlDQjcyNTg5NzRENEY0QURDMkQzREVcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTc3ODQxOH1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIkIwbGtDVFU5UkItcThiQlVycmRjb1FcIixcInBob25lSWRcIjpcImE2Mjc4MGE0LWNjZWItNDBjNy1hN2ZlLWI1OTAyMmZkYTVkY1wiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ3c5am4yeUYxOHA3NE9vUFZGeGJtS1l1bGJvPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkxRQjNod3c1bTUxQzVHVWhsTnl5N25PcDExYz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJNRjE4N0RWQlwiLFwibWVcIjp7XCJpZFwiOlwiMjYzNzgwNzcxMzY4OjJAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMjU4NDgwMTI0NDg1ODI5OjJAbGlkXCIsXCJuYW1lXCI6XCLCsMmqXFxcIuG0gOG0jSDwnZqD8J2Zt/CdmbDwnZmx8J2ZuPCdmbTCsFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDT3JvaWFJR0VPdlVuckFHR0FJZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkFDUVZUQTM5ZWxIdjlENnlyZkwwZjBEa1BKay9HellzTjdPSUZoYlYvUm89XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJ6N1phKytibWJNV0U1ZmdDWjVJdHZJMWwzZXduakRpUFBQL3VNRUZ5SGwzeEhZMUJFVWZXVkVQdEthcFlkK3FTdnFlak51cDNsS3RNLzd3Sm1RSnVCdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImVkUDhmZzJXWlZ0aTBVS0lxQlFLN0t6MkZ6eWF0RSs1QzVKUnR4dzV1VnAwYjNEdHpDTnFxOW1ic0ZwdVRkcmF2SWw3RkRacXllTE0wRDhrUGZvMUJ3PT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNjM3ODA3NzEzNjg6MkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJRQWtGVXdOL1hwUjcvUStzcTN5OUg5QTVEeVpQeHMyTERlemlCWVcxZjBhXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMTc3ODQxNCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFDcmNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDcmMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNa0JoQnhldWt1WXErc3l4dXl4RlRZV1RBUVUxZW1GYmdXZkV4cXBtenRRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODIwNzY3NzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTc3ODExNDk4NVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©thabie" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ hacker』```", //*『sᴜʙsᴄʀɪʙᴇ • hacker』*\n youtube.com/@hacker"),
 
  author : process.env.PACK_AUTHER|| "thabie",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "thabie",
  ownername:process.env.OWNER_NAME|| "It'x thabie",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
