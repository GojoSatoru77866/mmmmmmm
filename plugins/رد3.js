let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*قــلــب لينو تشان مـن جـوا 👀⚕️*`;
await conn.sendMessage(m.chat, { react: { text: '😊', key: m.key } })
    conn.sendFile(m.chat, 'https://i.ibb.co/Tg3W6v8/591032bd9d7a.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^لينو$/i;
handler.command = new RegExp;

export default handler;
