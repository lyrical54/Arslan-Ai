const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭━━━〔 🤖 *lyrikial xmdI* 〕━━━╮
┃ 💠 *Bot Name:* ${settings.botName || 'lyrical xmd'}
┃ 🔖 *Version:* ${settings.version || '2.0.5'}
┃ 👑 *Owner:* ${settings.botOwner || 'lyrical md Official'}
┃ 📺 *YouTube:* ${global.ytch || 'Not set'}
╰━━━━━━━━━━━━━━╯
✨ _Designed with 💙 by lyrical-travor_
━━━━━━━━━━━━━━━
> 📌*kremline MENU*
━━━━━━━━━━━━━━━
╭─🌐 *ZONE*
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
│ 👋 😄.welcome  
│  💀.goodbye  
│ 🛠️ .mode  
│ 📶 .autostatus  
│ 🧼 .clearsession  
│ 👁‍🗨 .antidelete  
│ 🗑 .cleartmp  
│ 🖼 .setpp  
│ ❤️ .autoreact
│ 🌀 .blur  
│ 🖼️ .simage  
│ 🪄 .sticker  
│ 🔗 .tgsticker  
│ 😂 .meme  
│ 🏷️ .take  
│ 😎 .emojimix  
╰──────────────
╭─🎮 *GAME ROOM*
│ ❌⭕ .tictactoe  
│ 💀 .hangman  
│ 🔤 .guess  
│ ❓ .trivia  
│ ✅ .answer  
│ 🔍 .truth  
│ 🔥 .dare  
╭─🧠 *AI POWER*🤖🤖🤖
│ 🤖 .gpt  
│ 🧠 .gemini  
│ 🎨 .imagine  
│ 🌌 .flux  
╭─🎉 *l.y.r.i.c.a.l*
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
╰──────────you
╭─📥 *kevin bwoy
│ 🎧 .play  
│ 🎵 .song  
│ 📹 .video  
│ ▶️ .ytmp4  
│ 📸 .instagram  
│ 📘 .facebook  
│ 🎞️ .tiktok  
╰──────────────

╭─💻 *GITHUB CORNER*
│ 🖥️ .git  
│ 📂 .github  
│ 🧠 .sc  
│ 🧾 .script  
│ 📦 .repo  
╰──────────────

📢 *i create no channel fuck u*`;

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
                        newsletterName: 'lyrical xmd',
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
                        newsletterName: 'lyrical xmd by lyrical travor Official',
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
