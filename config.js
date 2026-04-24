const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "Panda-H4sIAAAAAAAAA5VWbXLbNhC9C/8aExEgCIKeyUwl2ZYUR7UVO27iTn5QJCTRkkiaH5aljC/QE/Rfr9gj9C1I253ONHXjcEgulrsPb98u9N3J8rQy52bvHH93ijJ9iGpDj/W+wN0ZNIuFKR3mJFEdOce/as14yJmWTIX0n2tcAeOuZNxXuLtMeAEL20fu4Qr91kvAFmDZxV3i3YPdF3Dn8HkOQXcmOB5xac6UYgH/9sScoplv0vgHyCiM7zNfs8C1GBE/YJ7XJgp85mmbnyuJBMjDkVrjUQAeQUROZBOuYApeLpmw5DMhebsRrHDhUniBmxLfnghXlJZptjwtVmZrymgDJi9hehubHuVGZGKVsrgBQiOxRFaf7sjPLZMKSKVkvsULm/KYT/uA2Q1xV9ZTcPDqepZr4WKNfATs0jLhwYvrN7EpUF3BQtGVDkAkwmqPAZqmIgIdkIZY9KW9iHQsSL+1IKOgwoYts4igsMIRBNBJA+SMmgVUICSTls0qXWYmmSQmq9N6/2ZVQnmgkkIRacoS6IU2sMUfetYcgAUqHBOM1AKS4BCQgKE1ElpbW2waPArSJt1RdmsLuJUSIX0LgcQZKYbaAClQPJJZgOqFtsikSmoDEpt0W4zcqhQAudIWFbf60y3fpFRSrQiY5FYOPCB8dqukVdf/G4mX5XNXr/+nJBEYZIIfbcMSUFe3+++ay6M2I1FxN7TCC7FOdHmsI84njWBOsEC1iiQReLL9SFHNMST8NzHJQT56Fh8EHaXIT4xRsV3bxIDWTRghLH/Ej0vZPOoUDovq+pnKgjtxTDKFPsnJ9ndA0sW7fmExqpvyR2QJ22u6TeDZMSYIkrTECN+z6gJXtF0aGra7ycsqI7AKIJvoPiY36huUAIQRXhoLAZFt5xBRK+ybHaucFoWdWxgh1FjIwYl7DDhgCiiTZ8HgY8jP75QII4WzUtf2e2KZK97iJ9UBldt+7SmqE1Q0SZxjjsfSLNOqLqM6zTNrCyVzouThysSlqa3qnLWYTA+3y1E2yHU1dRdmeOLFzdzM8plbn3+8OIpPlDw7G6li+h6EFmUem6oyyRiR83I/xUu0NBVI/saczDzWrZ4pHXrXWaRlVX/OmmKTR8mz2J8XozjOm6y+2mfxkB5QsmP31WzqGhO7oro2WVTGq/TBDFdRDcsi2lTmZYemNIhYl415mfPDPCEhnPvDq/HpZArkWyuQFI5OKANXBFqEUh2Ln6p3OwoaFcW7zNTw3FgnkBW6CpNFB5CuhiPZsceIIjl//vH7b87TC1iKnZg6SjdA5wynKW/m/cHph/P8PtajUf902R8u+87r5p5V21bha3ZfjePm6PZkHWl1O056j4Pd+OulPgxG1xeLYjfqnd8d7qv1ja3CP4MgQn+yjA8Pql6fnEEaq4vmcXZ6mH6ovlzMo/XHVZ3NTt2bqzu1PspvHmUlw+t9dBmPqrvHahaEanB71BsfVG93tt5cLVa96Xn+ZdDfvadsiXlIY/P3ZFs9HH646alfptknWUzE3XjfO7sWu0/y8Ln6khydNffZIPKznr6PpRjdVhdfx+Y6mf2c9M18MtfTj9ebu32+Onij/UVxH7m7+eFuhmTP/bzpjpbUKovKRq+L1Njp2JXgP8rYwiatuQj7GqGbtv92RLUzUtiGFWHbWaFrzwf86qHRRXPI/t55OX9oaIVdj/rWQdoJjKFKZ6egXzdhdyrQRJF2MNuRQOe0h0GG7ik2Ub3Iyy1QRVlS5lZuZd5QF0yyRf6jn3uM/gSjCUZDYBNVdf+1u67TranqaFtgBgSBCpVUOIuc7b5fFFc1DpquKZ0+/Rve7J2nvwA9PZkMcQoAAA==",
    // PREFIX supports comma-separated list: ".,!,/,?"
    // Use "any" to accept any leading symbol, or "" / "none" for no prefix
    PREFIX:                process.env.PREFIX || ".",
    BOT_NAME:              process.env.BOT_NAME || "🐼 ᴄʏʙᴇʀ ᴘᴀɴᴅᴀ ᴍᴅ 🐼",
    OWNER_NUMBER:          process.env.OWNER_NUMBER || "+94702782946",
    OWNER_NAME:            process.env.OWNER_NAME || "🐼 ᴄʏʙᴇʀ ᴘᴀɴᴅᴀ ᴍᴅ 🐼",
    DESCRIPTION:           process.env.DESCRIPTION || "🐼 ᴄʏʙᴇʀ ᴘᴀɴᴅᴀ ᴍᴅ 🐼",
    ALIVE_IMG:             process.env.ALIVE_IMG || "https://files.catbox.moe/5uli5p.jpeg",
    LIVE_MSG:              process.env.LIVE_MSG || "Cyber Panda is active",
    MODE:                  process.env.MODE || "both",
    AUTO_STATUS_SEEN:      toBool(process.env.AUTO_STATUS_SEEN,      true),
    AUTO_STATUS_REACT:     toBool(process.env.AUTO_STATUS_REACT,     true),
    AUTO_STATUS_REPLY:     toBool(process.env.AUTO_STATUS_REPLY,     false),
    AUTO_STATUS_MSG:       process.env.AUTO_STATUS_MSG || "Seen by Cyber Panda",
    CUSTOM_REACT_EMOJIS:   process.env.CUSTOM_REACT_EMOJIS || "❤️,🔥,💯,😍,👏,💙,🙌",
    Status_Saver:          process.env.Status_Saver  || process.env.STATUS_SAVER  || 'false',
    STATUS_REPLY:          process.env.STATUS_REPLY  || 'false',
    STATUS_MSG:            process.env.STATUS_MSG    || 'CYBER PANDA MD 💖 SUCCESSFULLY VIEWED YOUR STATUS',
    READ_MESSAGE:          toBool(process.env.READ_MESSAGE,          false),
    AUTO_REACT_NEWSLETTER:   toBool(process.env.AUTO_REACT_NEWSLETTER,   true),
    ANTI_BAD:              toBool(process.env.ANTI_BAD,              false),
    ALWAYS_ONLINE:         toBool(process.env.ALWAYS_ONLINE,         true),
    AUTO_TYPING:           toBool(process.env.AUTO_TYPING,           true),
    AUTO_RECORDING:        toBool(process.env.AUTO_RECORDING,        false),
    DELETE_LINKS:          toBool(process.env.DELETE_LINKS,          false),
    ANTIDELETE_GROUP:      toBool(process.env.ANTIDELETE_GROUP,      true),
    ANTIDELETE_PRIVATE:    toBool(process.env.ANTIDELETE_PRIVATE,    true),
    ANTILINK:              toBool(process.env.ANTILINK,               false),
    ANTIVV:                toBool(process.env.ANTIVV,                 true),
    DEBUG:                 toBool(process.env.DEBUG,                 false),
    THEME:                 (process.env.THEME || 'Panda').toLowerCase().trim(),
    GREETING:              process.env.GREETING || '',
    APP_URL:               process.env.APP_URL || '',
};
