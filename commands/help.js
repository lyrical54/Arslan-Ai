const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭━━━〔 🤖 *lyrical-xmd* 〕━━━╮
┃ 💠 *Bot Name:* ${settings.botName || 'lyrical-xmd'}
┃ 🔖 *Version:* ${settings.version || '2.0.5'}
┃ 👑 *Owner:* ${settings.botOwner || 'lyricalxdOfficial'}
┃ 📺 *YouTube:* ${global.ytch || 'Not set'}
╰━━━━━━━━━━━━━━╯
✨ _Designed with 💙 by lyrical tech 
━━━━━━━━━━━━━━━
> 📌*COMMAND MENU*
━━━━━━━━━━━━━━━
╭─🌐 *kremline ZONE*
│ 🌐 .help  
│ 📡 .ping  
│ ⚡ .alive  
│ 🗣️ .tts  
│ 👑 .owner  
│ 😂 .joke  
│ 📜 .quote  
│ 📚 .fact  
│ 🌤️ .weather  
│ 📰 .news  
│ 🖍️ .attp  
│ 🎶 .lyrics  
│ 🎱 .8ball  
│ 👥 .groupinfo  
│ 🛡️ .staff  
│ 📎 .vv  
│ 🌍 .trt  
│ 🖼️ .ss  
│ 🆔 .jid  
╰──────────────
╭─🛡️ *GROUP mode*
│ 🚫 .ban  
│ 🔺 .promote  
│ 🔻 .demote  
│ 🔇 .mute  
│ 🔊 .unmute  
│ 🗑️ .delete  
│ 🥾 .kick  
│ ⚠️ .warnings  
│ ⚡ .warn  
│ 🛑 .antilink  
│ 🤬 .antibadword  
│ 🧹 .clear  
│ 📢 .tag  
│ 📣 .tagall  
│ 🤖 .chatbot  
│ 🔁 .resetlink  
│ 👋 .welcome  
│ 🥀 .goodbye  
╰─────────────

╭─🔒 *lyrical*
│ 🛠️ .mode  
│ 📶 .autostatus  
│ 🧼 .clearsession  
│ 👁‍🗨 .antidelete  
│ 🗑 .cleartmp  
│ 🖼 .setpp  
│ ❤️ .autoreact  
╰──────────────
╭─🎨 *OOLS*
│ 🌀 .blur  
│ 🖼️ .simage  
│ 🪄 .sticker  
│ 🔗 .tgsticker  
│ 😂 .meme  
│ 🏷️ .take  
│ 😎 .emojimix  
╰──────────────
╭─🎮 *GAME zone*
│ ❌⭕ .tictactoe  
│ 💀 .hangman  
│ 🔤 .guess  
│ ❓ .trivia  
│ ✅ .answer  
│ 🔍 .truth  
│ 🔥 .dare  
╰──────────────
╭─🧠 *AI *
│ 🤖 .gpt  
│ 🧠 .gemini  
│ 🎨 .imagine  
│ 🌌 .flux  
╰──────────────
╭─🎉 *FUN ZONE*
│ 💘 .compliment  
│ 🤬 .insult  
│ 😎 .flirt  
│ 🎭 .shayari  
│ 🌙 .goodnight  
│ 🌹 .roseday  
│ 🎭 .character  
│ ☠️ .wasted  
│ 🚢 .ship  
│ 🤤 .simp  
│ 🤡 .stupid  
╰──────────────
╭─✍️ *logo*
│ 💎 .metallic  
│ 🧊 .ice  
│ ❄️ .snow  
│ ✨ .impressive  
│ 🌌 .matrix  
│ 💡 .light  
│ 🎇 .neon  
│ 👿 .devil  
│ 💜 .purple  
│ ⚡ .thunder  
│ 🌿 .leaves  
│ 🎬 .1917  
│ 🛡️ .arena  
│ 💀 .hacker  
│ 🏖️ .sand  
│ 🩷 .blackpink  
│ 💥 .glitch  
│ 🔥 .fire  
╰──────────────
╭─📥 *MEDIA ZONE*
│ 🎧 .play  
│ 🎵 .song  
│ 📹 .video  
│ ▶️ .ytmp4  
│ 📸 .instagram  
│ 📘 .facebook  
│ 🎞️ .tiktok  
╰──────────────
╭─💻 *GITHUBER*
│ 🖥️ .git  
│ 📂 .github  
│ 🧠 .sc  
│ 🧾 .script  
│ 📦 .repo  
╰──────────────

📢 *Join our channel*`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        if (fs.existsSync(imagePath)) {
            await sock.sendMessage(chatId, {
                image: fs.readFileSync(imagePath),
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363348739987203@newsletter',
                        newsletterName: 'lyrical-xmd',
                        serverMessageId: -1
                    }
                }
            }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, {
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363348739987203@newsletter',
                        newsletterName: 'lyrical xmd by lyrical Official',
                        serverMessageId: -1
                    }
                }
            });
        }

        // 🔊 Voice note (optional)
        const audioPath = path.join(__dirname, '../assets/audio.mp3');
        if (fs.existsSync(audioPath)) {
            await sock.sendMessage(chatId, {
                audio: fs.readFileSync(audioPath),
                mimetype: 'audio/mp4',
                ptt: true
            }, { quoted: message });
        }

    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
