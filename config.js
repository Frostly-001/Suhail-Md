const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="pelumifrost@gmail.com"
global.location="Lagos,Ikeja."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Abuja";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348078595608" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347065465047";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078595608";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_00_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDg1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAwLFxuICAgICAgICA4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4LFxuICAgICAgICA2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgNjksXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3RzlHLzZQdXlsQ0JjUmV6ZVZQMHRRMnpBNkc3L0lxNjR6am9rNVYza3VvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwQzJHR1pMQlEwNnBvRjd1d0hHejZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNiMmY2NmY1LTFmMDgtNGIxYy05YWUzLWFlOGYxODUxZmZlZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDEyMCxcbiAgICAgIDY5LFxuICAgICAgMTUxLFxuICAgICAgMzMsXG4gICAgICAxMDUsXG4gICAgICAzLFxuICAgICAgNzEsXG4gICAgICAyMTksXG4gICAgICA4NixcbiAgICAgIDc0LFxuICAgICAgNDEsXG4gICAgICAyNSxcbiAgICAgIDE0LFxuICAgICAgNDMsXG4gICAgICAxMTYsXG4gICAgICAxNjAsXG4gICAgICAxMjYsXG4gICAgICAyMzcsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTgsXG4gICAgICA3OSxcbiAgICAgIDEwLFxuICAgICAgMTE4LFxuICAgICAgMTEwLFxuICAgICAgMTM0LFxuICAgICAgMTAzLFxuICAgICAgMSxcbiAgICAgIDE2MyxcbiAgICAgIDEyMCxcbiAgICAgIDE0NyxcbiAgICAgIDE2MSxcbiAgICAgIDM5LFxuICAgICAgNTksXG4gICAgICA4OSxcbiAgICAgIDYxLFxuICAgICAgMTc2LFxuICAgICAgMTQzLFxuICAgICAgODAsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0Q3SjJHWkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjU0NjUwNDc6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgwMzE2MTIzMzU3MzY4OjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ016UDdOMEhFTjNibHJRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiajZhS3B5ZlN5Wi8xaE43MEliNXE4dlZJOGtjWlk1SUFXaTUxd091NzBtUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYbG5XSlI3d2JqV2g2cWJHVitrVndNU2U1cUJ2eGdlRjBRQWhkVExBYTIwQXBEeGNVbWcvQy9qbktuZ2laODgyL1Z3UVVjNHJaZ09QaEtvOEpLaDJEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoM1J2WGRybUxwMHliRVhMR1F0REN4SVYxdVBnbGRudEt3dXNUc0hVNVEvU1B3MTgrczAreU5tYWJ3Y3dUc2czTWJuWTFIRTFUQmZUOG5SbUQ5SUJnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY1NDY1MDQ3OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMzY4MzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBdUhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF1SC5qc29uIjogIntcImtleURhdGFcIjpcInBlU0VwYVdTVXYxcE52KzFjR0FGV0RQbmVDdnBCb0RFUUtqWjllUGZqNUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA3NTg2Mjk4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Frosby bot",
  ownername:process.env.OWNER_NAME|| "Pelumifrost",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
