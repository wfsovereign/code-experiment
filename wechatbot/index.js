/**
 * Created by wfsovereign on 16/3/18.
 */
const Weixinbot = require('weixinbot');
const qrcode = require('qrcode-terminal');
// will send qrcode to your email address
const bot = new Weixinbot({receiver: '@qq.com'});

// will emit when bot fetch a new qrcodeUrl
bot.on('qrcode', (qrcodeUrl) => {
    console.log(qrcodeUrl);
    qrcode.generate(qrcodeUrl.replace('/qrcode/', '/l/'), console.log);
});

bot.on('friend', (msg) => {
    console.log('msg  :', msg);
    console.log(msg.Member.NickName + ': ' + msg.Content);
    bot.sendText(msg.FromUserName, 'Got it')
});

bot.run();