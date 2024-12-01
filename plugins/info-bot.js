import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `𝘔𝘦 𝘱𝘳𝘦𝘴𝘦𝘯𝘵𝘰 𝘤𝘰𝘮𝘰 🔱𝕷𝖚𝖓𝖎𝖙𝖆 𝕭𝖔𝖙 🔱\n\n𝘌𝘴𝘤𝘳𝘪𝘣𝘦 .𝘮𝘦𝘯𝘶 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘮𝘪𝘴 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴.`, m, rcanal, )
}
  
if (/^.bermuda/i.test(m.text)) {
conn.reply(m.chat, `*Mapa Eligido Bermuda 🐉*`, m, rcanal, )
}

if (/^.hexagonal/i.test(m.text)) {
conn.reply(m.chat, `𝙈𝙖𝙥𝙖 𝙀𝙡𝙚𝙜𝙞𝙙𝙤 𝙃𝙚𝙭𝙖𝙜𝙤𝙣𝙖𝙡 🐉`, m, rcanal, )
}

if (/^.cuadrilatero/i.test(m.text)) {
conn.reply(m.chat, `𝙈𝙖𝙥𝙖 𝙀𝙡𝙚𝙜𝙞𝙙𝙤 𝘾𝙪𝙖𝙙𝙧𝙞𝙡𝙖𝙩𝙚𝙧𝙤 🐉`, m, rcanal, )
}

if (/^.alpes/i.test(m.text)) {
conn.reply(m.chat, `*Mapa Eligido Alpes 🐉*`, m, rcanal, )
}

if (/^.purgatorio/i.test(m.text)) {
conn.reply(m.chat, `*Mapa Eligido Purgatorio 🐉*`, m, rcanal, )
}
  
if (/^.kalahari$/i.test(m.text)) {
conn.reply(m.chat, `*Mapa Eligido Kalahari 🐉*`, m, rcanal, )
}

if (/^.nexterra$/i.test(m.text)) {
conn.reply(m.chat, `*Mapa Eligido NexTerra 🐉*`, m, rcanal, )
}
return !0;
};
export default handler;
