const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"eB0rmBWjImxTv4g39wLi4X8noJRKO6Ys+q87ZiKkSGU="},"public":{"type":"Buffer","data":"8hMaKzDG2j0Gu3GkQaFQCotZvbBIi6Uoy2J+WetpkEE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"6DaH60g4AAl3a46mZJKulLMRTyEtZLEXpdflfy7H1Fk="},"public":{"type":"Buffer","data":"rnluXTj3PB4xuoEfo3+nhUEvEdFRBDGKQGlC2US/im8="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"0OeslyWVkK2pH0y8wuzmnChk5tDvTs/OtwC4agJRcWU="},"public":{"type":"Buffer","data":"3h33aTm/PHFRXJv/NEAHw6kDnMcz2nnZTL6JnhAZi08="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"YIN3iHb1WhlYGWlj0EGJ5bMulaev/xd20R+von9Dw0U="},"public":{"type":"Buffer","data":"uQMPuq74Nfw2fy+o+jE0MR/+KZ0ARk1IPnlfdG8l1DE="}},"signature":{"type":"Buffer","data":"rbp+xu3UEyKWhPbfNF+8hmHx4SVLa/reGicrPbRCYrc6v/kCT5r69c9oC3BxkH/siIvAI//sMCC35nT9buy3Dw=="},"keyId":1},"registrationId":35,"advSecretKey":"uLozPwJqJ2+h0W6zZeR09ZTJeo4RdNBI8qzP533sLN0=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"X03VhKlFRWy4CmMpS4zPRw","phoneId":"67044909-e25e-41f8-a938-4ddf6367508e","identityId":{"type":"Buffer","data":"Q4lAMId2U8XajTwas8kl9p8Y12I="},"registered":true,"backupToken":{"type":"Buffer","data":"pMZt80HaaNiazBJHE0uwkfp53PY="},"registration":{},"pairingCode":"NZXPKEHX","me":{"id":"2348140825959:77@s.whatsapp.net","name":"Bad Boi Hacker"},"account":{"details":"CKCi2f8PEN6UlrQGGAQgACgA","accountSignatureKey":"EOU2gt5eCggXMBPEIrO0EHq9m5HbxTcSyIwzZkYN3EM=","accountSignature":"vG1v9/BWPjhf7rzM67lWTkVRDx5N6qr7kwBFRyl+mEDVy6rzOYAr9cTxp8a37+LO9YriDqKzVLExf/xF2KeYjg==","deviceSignature":"PlzhmAiLRXoKY3npu/OfrMzD7ojgTrXdMHK5mbYtZbawIMMPQjY3vnhxFny5+nLV2YZKfKZbDUXy3a4rzmOjDA=="},"signalIdentities":[{"identifier":{"name":"2348140825959:77@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRDlNoLeXgoIFzATxCKztBB6vZuR28U3EsiMM2ZGDdxD"}}],"platform":"smbi","lastAccountSyncTimestamp":1720027755,"myAppStateKeyId":"AAAAAKxQ"}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
