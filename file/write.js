
var fs = require('fs');

var a =  [{"twoAbbreviation":"AD","threeAbbreviation":"AND","name":"安道尔"},{"twoAbbreviation":"AE","threeAbbreviation":"ARE","name":"阿联酋"},{"twoAbbreviation":"AF","threeAbbreviation":"AFG","name":"阿富汗"},{"twoAbbreviation":"AG","threeAbbreviation":"ATG","name":"安提瓜和巴布达"},{"twoAbbreviation":"AI","threeAbbreviation":"AIA","name":"安圭拉"},{"twoAbbreviation":"AL","threeAbbreviation":"ALB","name":"阿尔巴尼亚"},{"twoAbbreviation":"AM","threeAbbreviation":"ARM","name":"亚美尼亚"},{"twoAbbreviation":"AO","threeAbbreviation":"AGO","name":"安哥拉"},{"twoAbbreviation":"AQ","threeAbbreviation":"ATA","name":"南极洲"},{"twoAbbreviation":"AR","threeAbbreviation":"ARG","name":"阿根廷"},{"twoAbbreviation":"AS","threeAbbreviation":"ASM","name":"美属萨摩亚"},{"twoAbbreviation":"AT","threeAbbreviation":"AUT","name":"奥地利"},{"twoAbbreviation":"AU","threeAbbreviation":"AUS","name":"澳大利亚"},{"twoAbbreviation":"AW","threeAbbreviation":"ABW","name":"阿鲁巴"},{"twoAbbreviation":"AX","threeAbbreviation":"ALA","name":"奥兰"},{"twoAbbreviation":"AZ","threeAbbreviation":"AZE","name":"阿塞拜疆"},{"twoAbbreviation":"BA","threeAbbreviation":"BIH","name":"波斯尼亚和黑塞哥维那"},{"twoAbbreviation":"BB","threeAbbreviation":"BRB","name":"巴巴多斯"},{"twoAbbreviation":"BD","threeAbbreviation":"BGD","name":"孟加拉国"},{"twoAbbreviation":"BE","threeAbbreviation":"BEL","name":"比利时"},{"twoAbbreviation":"BF","threeAbbreviation":"BFA","name":"布基纳法索"},{"twoAbbreviation":"BG","threeAbbreviation":"BGR","name":"保加利亚"},{"twoAbbreviation":"BH","threeAbbreviation":"BHR","name":"巴林"},{"twoAbbreviation":"BI","threeAbbreviation":"BDI","name":"布隆迪"},{"twoAbbreviation":"BJ","threeAbbreviation":"BEN","name":"贝宁"},{"twoAbbreviation":"BL","threeAbbreviation":"BLM","name":"圣巴泰勒米"},{"twoAbbreviation":"BM","threeAbbreviation":"BMU","name":"百慕大"},{"twoAbbreviation":"BN","threeAbbreviation":"BRN","name":"文莱"},{"twoAbbreviation":"BO","threeAbbreviation":"BOL","name":"玻利维亚"},{"twoAbbreviation":"BQ","threeAbbreviation":"BES","name":"加勒比荷兰"},{"twoAbbreviation":"BR","threeAbbreviation":"BRA","name":"巴西"},{"twoAbbreviation":"BS","threeAbbreviation":"BHS","name":"巴哈马"},{"twoAbbreviation":"BT","threeAbbreviation":"BTN","name":"不丹"},{"twoAbbreviation":"BV","threeAbbreviation":"BVT","name":"布韦岛"},{"twoAbbreviation":"BW","threeAbbreviation":"BWA","name":"博茨瓦纳"},{"twoAbbreviation":"BY","threeAbbreviation":"BLR","name":"白俄罗斯"},{"twoAbbreviation":"BZ","threeAbbreviation":"BLZ","name":"伯利兹"},{"twoAbbreviation":"CA","threeAbbreviation":"CAN","name":"加拿大"},{"twoAbbreviation":"CC","threeAbbreviation":"CCK","name":"科科斯（基林）群岛"},{"twoAbbreviation":"CD","threeAbbreviation":"COD","name":"民主刚果"},{"twoAbbreviation":"CF","threeAbbreviation":"CAF","name":"中非共和国"},{"twoAbbreviation":"CG","threeAbbreviation":"COG","name":"刚果"},{"twoAbbreviation":"CH","threeAbbreviation":"CHE","name":"瑞士"},{"twoAbbreviation":"CI","threeAbbreviation":"CIV","name":"科特迪瓦"},{"twoAbbreviation":"CK","threeAbbreviation":"COK","name":"库克群岛"},{"twoAbbreviation":"CL","threeAbbreviation":"CHL","name":"智利"},{"twoAbbreviation":"CM","threeAbbreviation":"CMR","name":"喀麦隆"},{"twoAbbreviation":"CN","threeAbbreviation":"CHN","name":"中国"},{"twoAbbreviation":"CO","threeAbbreviation":"COL","name":"哥伦比亚"},{"twoAbbreviation":"CR","threeAbbreviation":"CRI","name":"哥斯达黎加"},{"twoAbbreviation":"CU","threeAbbreviation":"CUB","name":"古巴"},{"twoAbbreviation":"CV","threeAbbreviation":"CPV","name":"佛得角"},{"twoAbbreviation":"CW","threeAbbreviation":"CUW","name":"库拉索"},{"twoAbbreviation":"CX","threeAbbreviation":"CXR","name":"圣诞岛"},{"twoAbbreviation":"CY","threeAbbreviation":"CYP","name":"塞浦路斯"},{"twoAbbreviation":"CZ","threeAbbreviation":"CZE","name":"捷克"},{"twoAbbreviation":"DE","threeAbbreviation":"DEU","name":"德国"},{"twoAbbreviation":"DJ","threeAbbreviation":"DJI","name":"吉布提"},{"twoAbbreviation":"DK","threeAbbreviation":"DNK","name":"丹麦"},{"twoAbbreviation":"DM","threeAbbreviation":"DMA","name":"多米尼克"},{"twoAbbreviation":"DO","threeAbbreviation":"DOM","name":"多米尼加"},{"twoAbbreviation":"DZ","threeAbbreviation":"DZA","name":"阿尔及利亚"},{"twoAbbreviation":"EC","threeAbbreviation":"ECU","name":"厄瓜多尔"},{"twoAbbreviation":"EE","threeAbbreviation":"EST","name":"爱沙尼亚"},{"twoAbbreviation":"EG","threeAbbreviation":"EGY","name":"埃及"},{"twoAbbreviation":"EH","threeAbbreviation":"ESH","name":"撒拉威阿拉伯民主共和国"},{"twoAbbreviation":"ER","threeAbbreviation":"ERI","name":"厄立特里亚"},{"twoAbbreviation":"ES","threeAbbreviation":"ESP","name":"西班牙"},{"twoAbbreviation":"ET","threeAbbreviation":"ETH","name":"埃塞俄比亚"},{"twoAbbreviation":"FI","threeAbbreviation":"FIN","name":"芬兰"},{"twoAbbreviation":"FJ","threeAbbreviation":"FJI","name":"斐济"},{"twoAbbreviation":"FK","threeAbbreviation":"FLK","name":"福克兰群岛"},{"twoAbbreviation":"FM","threeAbbreviation":"FSM","name":"密克罗尼西亚联邦"},{"twoAbbreviation":"FO","threeAbbreviation":"FRO","name":"法罗群岛"},{"twoAbbreviation":"FR","threeAbbreviation":"FRA","name":"法国"},{"twoAbbreviation":"GA","threeAbbreviation":"GAB","name":"加蓬"},{"twoAbbreviation":"GB","threeAbbreviation":"GBR","name":"英国"},{"twoAbbreviation":"GD","threeAbbreviation":"GRD","name":"格林纳达"},{"twoAbbreviation":"GE","threeAbbreviation":"GEO","name":"格鲁吉亚"},{"twoAbbreviation":"GF","threeAbbreviation":"GUF","name":"法属圭亚那"},{"twoAbbreviation":"GG","threeAbbreviation":"GGY","name":"根西"},{"twoAbbreviation":"GH","threeAbbreviation":"GHA","name":"加纳"},{"twoAbbreviation":"GI","threeAbbreviation":"GIB","name":"直布罗陀"},{"twoAbbreviation":"GL","threeAbbreviation":"GRL","name":"格陵兰"},{"twoAbbreviation":"GM","threeAbbreviation":"GMB","name":"冈比亚"},{"twoAbbreviation":"GN","threeAbbreviation":"GIN","name":"几内亚"},{"twoAbbreviation":"GP","threeAbbreviation":"GLP","name":"瓜德罗普"},{"twoAbbreviation":"GQ","threeAbbreviation":"GNQ","name":"赤道几内亚"},{"twoAbbreviation":"GR","threeAbbreviation":"GRC","name":"希腊"},{"twoAbbreviation":"GS","threeAbbreviation":"SGS","name":"南乔治亚和南桑威奇群岛"},{"twoAbbreviation":"GT","threeAbbreviation":"GTM","name":"危地马拉"},{"twoAbbreviation":"GU","threeAbbreviation":"GUM","name":"关岛"},{"twoAbbreviation":"GW","threeAbbreviation":"GNB","name":"几内亚比绍"},{"twoAbbreviation":"GY","threeAbbreviation":"GUY","name":"圭亚那"},{"twoAbbreviation":"HK","threeAbbreviation":"HKG","name":"中国香港"},{"twoAbbreviation":"HM","threeAbbreviation":"HMD","name":"赫德岛和麦克唐纳群岛"},{"twoAbbreviation":"HN","threeAbbreviation":"HND","name":"洪都拉斯"},{"twoAbbreviation":"HR","threeAbbreviation":"HRV","name":"克罗地亚"},{"twoAbbreviation":"HT","threeAbbreviation":"HTI","name":"海地"},{"twoAbbreviation":"HU","threeAbbreviation":"HUN","name":"匈牙利"},{"twoAbbreviation":"ID","threeAbbreviation":"IDN","name":"印度尼西亚"},{"twoAbbreviation":"IE","threeAbbreviation":"IRL","name":"爱尔兰"},{"twoAbbreviation":"IL","threeAbbreviation":"ISR","name":"以色列"},{"twoAbbreviation":"IM","threeAbbreviation":"IMN","name":"马恩岛"},{"twoAbbreviation":"IN","threeAbbreviation":"IND","name":"印度"},{"twoAbbreviation":"IO","threeAbbreviation":"IOT","name":"英属印度洋领地"},{"twoAbbreviation":"IQ","threeAbbreviation":"IRQ","name":"伊拉克"},{"twoAbbreviation":"IR","threeAbbreviation":"IRN","name":"伊朗"},{"twoAbbreviation":"IS","threeAbbreviation":"ISL","name":"冰岛"},{"twoAbbreviation":"IT","threeAbbreviation":"ITA","name":"意大利"},{"twoAbbreviation":"JE","threeAbbreviation":"JEY","name":"泽西"},{"twoAbbreviation":"JM","threeAbbreviation":"JAM","name":"牙买加"},{"twoAbbreviation":"JO","threeAbbreviation":"JOR","name":"约旦"},{"twoAbbreviation":"JP","threeAbbreviation":"JPN","name":"日本"},{"twoAbbreviation":"KE","threeAbbreviation":"KEN","name":"肯尼亚"},{"twoAbbreviation":"KG","threeAbbreviation":"KGZ","name":"吉尔吉斯斯坦"},{"twoAbbreviation":"KH","threeAbbreviation":"KHM","name":"柬埔寨"},{"twoAbbreviation":"KI","threeAbbreviation":"KIR","name":"基里巴斯"},{"twoAbbreviation":"KM","threeAbbreviation":"COM","name":"科摩罗"},{"twoAbbreviation":"KN","threeAbbreviation":"KNA","name":"圣基茨和尼维斯"},{"twoAbbreviation":"KP","threeAbbreviation":"PRK","name":"朝鲜"},{"twoAbbreviation":"KR","threeAbbreviation":"KOR","name":"韩国"},{"twoAbbreviation":"KW","threeAbbreviation":"KWT","name":"科威特"},{"twoAbbreviation":"KY","threeAbbreviation":"CYM","name":"开曼群岛"},{"twoAbbreviation":"KZ","threeAbbreviation":"KAZ","name":"哈萨克斯坦"},{"twoAbbreviation":"LA","threeAbbreviation":"LAO","name":"老挝"},{"twoAbbreviation":"LB","threeAbbreviation":"LBN","name":"黎巴嫩"},{"twoAbbreviation":"LC","threeAbbreviation":"LCA","name":"圣卢西亚"},{"twoAbbreviation":"LI","threeAbbreviation":"LIE","name":"列支敦士登"},{"twoAbbreviation":"LK","threeAbbreviation":"LKA","name":"斯里兰卡"},{"twoAbbreviation":"LR","threeAbbreviation":"LBR","name":"利比里亚"},{"twoAbbreviation":"LS","threeAbbreviation":"LSO","name":"莱索托"},{"twoAbbreviation":"LT","threeAbbreviation":"LTU","name":"立陶宛"},{"twoAbbreviation":"LU","threeAbbreviation":"LUX","name":"卢森堡"},{"twoAbbreviation":"LV","threeAbbreviation":"LVA","name":"拉脱维亚"},{"twoAbbreviation":"LY","threeAbbreviation":"LBY","name":"利比亚"},{"twoAbbreviation":"MA","threeAbbreviation":"MAR","name":"摩洛哥"},{"twoAbbreviation":"MC","threeAbbreviation":"MCO","name":"摩纳哥"},{"twoAbbreviation":"MD","threeAbbreviation":"MDA","name":"摩尔多瓦"},{"twoAbbreviation":"ME","threeAbbreviation":"MNE","name":"黑山"},{"twoAbbreviation":"MF","threeAbbreviation":"MAF","name":"圣马丁行政区"},{"twoAbbreviation":"MG","threeAbbreviation":"MDG","name":"马达加斯加"},{"twoAbbreviation":"MH","threeAbbreviation":"MHL","name":"马绍尔群岛"},{"twoAbbreviation":"MK","threeAbbreviation":"MKD","name":"马其顿"},{"twoAbbreviation":"ML","threeAbbreviation":"MLI","name":"马里"},{"twoAbbreviation":"MM","threeAbbreviation":"MMR","name":"缅甸"},{"twoAbbreviation":"MN","threeAbbreviation":"MNG","name":"蒙古国"},{"twoAbbreviation":"MO","threeAbbreviation":"MAC","name":"中国澳门"},{"twoAbbreviation":"MP","threeAbbreviation":"MNP","name":"北马里亚纳群岛"},{"twoAbbreviation":"MQ","threeAbbreviation":"MTQ","name":"马提尼克"},{"twoAbbreviation":"MR","threeAbbreviation":"MRT","name":"毛里塔尼亚"},{"twoAbbreviation":"MS","threeAbbreviation":"MSR","name":"蒙特塞拉特"},{"twoAbbreviation":"MT","threeAbbreviation":"MLT","name":"马耳他"},{"twoAbbreviation":"MU","threeAbbreviation":"MUS","name":"毛里求斯"},{"twoAbbreviation":"MV","threeAbbreviation":"MDV","name":"马尔代夫"},{"twoAbbreviation":"MW","threeAbbreviation":"MWI","name":"马拉维"},{"twoAbbreviation":"MX","threeAbbreviation":"MEX","name":"墨西哥"},{"twoAbbreviation":"MY","threeAbbreviation":"MYS","name":"马来西亚"},{"twoAbbreviation":"MZ","threeAbbreviation":"MOZ","name":"莫桑比克"},{"twoAbbreviation":"NA","threeAbbreviation":"NAM","name":"纳米比亚"},{"twoAbbreviation":"NC","threeAbbreviation":"NCL","name":"新喀里多尼亚"},{"twoAbbreviation":"NE","threeAbbreviation":"NER","name":"尼日尔"},{"twoAbbreviation":"NF","threeAbbreviation":"NFK","name":"诺福克岛"},{"twoAbbreviation":"NG","threeAbbreviation":"NGA","name":"尼日利亚"},{"twoAbbreviation":"NI","threeAbbreviation":"NIC","name":"尼加拉瓜"},{"twoAbbreviation":"NL","threeAbbreviation":"NLD","name":"荷兰"},{"twoAbbreviation":"NO","threeAbbreviation":"NOR","name":"挪威"},{"twoAbbreviation":"NP","threeAbbreviation":"NPL","name":"尼泊尔"},{"twoAbbreviation":"NR","threeAbbreviation":"NRU","name":"瑙鲁"},{"twoAbbreviation":"NU","threeAbbreviation":"NIU","name":"纽埃"},{"twoAbbreviation":"NZ","threeAbbreviation":"NZL","name":"新西兰"},{"twoAbbreviation":"OM","threeAbbreviation":"OMN","name":"阿曼"},{"twoAbbreviation":"PA","threeAbbreviation":"PAN","name":"巴拿马"},{"twoAbbreviation":"PE","threeAbbreviation":"PER","name":"秘鲁"},{"twoAbbreviation":"PF","threeAbbreviation":"PYF","name":"法属波利尼西亚"},{"twoAbbreviation":"PG","threeAbbreviation":"PNG","name":"巴布亚新几内亚"},{"twoAbbreviation":"PH","threeAbbreviation":"PHL","name":"菲律宾"},{"twoAbbreviation":"PK","threeAbbreviation":"PAK","name":"巴基斯坦"},{"twoAbbreviation":"PL","threeAbbreviation":"POL","name":"波兰"},{"twoAbbreviation":"PM","threeAbbreviation":"SPM","name":"圣皮埃尔和密克隆"},{"twoAbbreviation":"PN","threeAbbreviation":"PCN","name":"皮特凯恩群岛"},{"twoAbbreviation":"PR","threeAbbreviation":"PRI","name":"波多黎各"},{"twoAbbreviation":"PS","threeAbbreviation":"PSE","name":"巴勒斯坦"},{"twoAbbreviation":"PT","threeAbbreviation":"PRT","name":"葡萄牙"},{"twoAbbreviation":"PW","threeAbbreviation":"PLW","name":"帕劳"},{"twoAbbreviation":"PY","threeAbbreviation":"PRY","name":"巴拉圭"},{"twoAbbreviation":"QA","threeAbbreviation":"QAT","name":"卡塔尔"},{"twoAbbreviation":"RE","threeAbbreviation":"REU","name":"留尼汪"},{"twoAbbreviation":"RO","threeAbbreviation":"ROU","name":"罗马尼亚"},{"twoAbbreviation":"RS","threeAbbreviation":"SRB","name":"塞尔维亚"},{"twoAbbreviation":"RU","threeAbbreviation":"RUS","name":"俄罗斯"},{"twoAbbreviation":"RW","threeAbbreviation":"RWA","name":"卢旺达"},{"twoAbbreviation":"SA","threeAbbreviation":"SAU","name":"沙特阿拉伯"},{"twoAbbreviation":"SB","threeAbbreviation":"SLB","name":"所罗门群岛"},{"twoAbbreviation":"SC","threeAbbreviation":"SYC","name":"塞舌尔"},{"twoAbbreviation":"SD","threeAbbreviation":"SDN","name":"苏丹"},{"twoAbbreviation":"SE","threeAbbreviation":"SWE","name":"瑞典"},{"twoAbbreviation":"SG","threeAbbreviation":"SGP","name":"新加坡"},{"twoAbbreviation":"SH","threeAbbreviation":"SHN","name":"圣赫勒拿"},{"twoAbbreviation":"SI","threeAbbreviation":"SVN","name":"斯洛文尼亚"},{"twoAbbreviation":"SJ","threeAbbreviation":"SJM","name":"斯瓦尔巴群岛和扬马延岛"},{"twoAbbreviation":"SK","threeAbbreviation":"SVK","name":"斯洛伐克"},{"twoAbbreviation":"SL","threeAbbreviation":"SLE","name":"塞拉利昂"},{"twoAbbreviation":"SM","threeAbbreviation":"SMR","name":"圣马力诺"},{"twoAbbreviation":"SN","threeAbbreviation":"SEN","name":"塞内加尔"},{"twoAbbreviation":"SO","threeAbbreviation":"SOM","name":"索马里"},{"twoAbbreviation":"SR","threeAbbreviation":"SUR","name":"苏里南"},{"twoAbbreviation":"SS","threeAbbreviation":"SSD","name":"南苏丹"},{"twoAbbreviation":"ST","threeAbbreviation":"STP","name":"圣多美和普林西比"},{"twoAbbreviation":"SV","threeAbbreviation":"SLV","name":"萨尔瓦多"},{"twoAbbreviation":"SX","threeAbbreviation":"SXM","name":"荷属圣马丁"},{"twoAbbreviation":"SY","threeAbbreviation":"SYR","name":"叙利亚"},{"twoAbbreviation":"SZ","threeAbbreviation":"SWZ","name":"斯威士兰"},{"twoAbbreviation":"TC","threeAbbreviation":"TCA","name":"特克斯和凯科斯群岛"},{"twoAbbreviation":"TD","threeAbbreviation":"TCD","name":"乍得"},{"twoAbbreviation":"TF","threeAbbreviation":"ATF","name":"法属南部领地"},{"twoAbbreviation":"TG","threeAbbreviation":"TGO","name":"多哥"},{"twoAbbreviation":"TH","threeAbbreviation":"THA","name":"泰国"},{"twoAbbreviation":"TJ","threeAbbreviation":"TJK","name":"塔吉克斯坦"},{"twoAbbreviation":"TK","threeAbbreviation":"TKL","name":"托克劳"},{"twoAbbreviation":"TL","threeAbbreviation":"TLS","name":"东帝汶"},{"twoAbbreviation":"TM","threeAbbreviation":"TKM","name":"土库曼斯坦"},{"twoAbbreviation":"TN","threeAbbreviation":"TUN","name":"突尼斯"},{"twoAbbreviation":"TO","threeAbbreviation":"TON","name":"汤加"},{"twoAbbreviation":"TR","threeAbbreviation":"TUR","name":"土耳其"},{"twoAbbreviation":"TT","threeAbbreviation":"TTO","name":"特立尼达"},{"twoAbbreviation":"TV","threeAbbreviation":"TUV","name":"图瓦卢"},{"twoAbbreviation":"TW","threeAbbreviation":"TWN","name":"中国台湾"},{"twoAbbreviation":"TZ","threeAbbreviation":"TZA","name":"坦桑尼亚"},{"twoAbbreviation":"UA","threeAbbreviation":"UKR","name":"乌克兰"},{"twoAbbreviation":"UG","threeAbbreviation":"UGA","name":"乌干达"},{"twoAbbreviation":"UM","threeAbbreviation":"UMI","name":"美国本土外小岛屿"},{"twoAbbreviation":"US","threeAbbreviation":"USA","name":"美国"},{"twoAbbreviation":"UY","threeAbbreviation":"URY","name":"乌拉圭"},{"twoAbbreviation":"UZ","threeAbbreviation":"UZB","name":"乌兹别克斯坦"},{"twoAbbreviation":"VA","threeAbbreviation":"VAT","name":"梵蒂冈"},{"twoAbbreviation":"VC","threeAbbreviation":"VCT","name":"圣文森特和格林纳丁斯"},{"twoAbbreviation":"VE","threeAbbreviation":"VEN","name":"委内瑞拉"},{"twoAbbreviation":"VG","threeAbbreviation":"VGB","name":"英属维尔京群岛"},{"twoAbbreviation":"VI","threeAbbreviation":"VIR","name":"美属维京群岛"},{"twoAbbreviation":"VN","threeAbbreviation":"VNM","name":"越南"},{"twoAbbreviation":"VU","threeAbbreviation":"VUT","name":"瓦努阿图"},{"twoAbbreviation":"WF","threeAbbreviation":"WLF","name":"瓦利斯和富图纳"},{"twoAbbreviation":"WS","threeAbbreviation":"WSM","name":"萨摩亚"},{"twoAbbreviation":"YE","threeAbbreviation":"YEM","name":"也门"},{"twoAbbreviation":"YT","threeAbbreviation":"MYT","name":"马约特"},{"twoAbbreviation":"ZA","threeAbbreviation":"ZAF","name":"南非"},{"twoAbbreviation":"ZM","threeAbbreviation":"ZMB","name":"赞比亚"},{"twoAbbreviation":"ZW","threeAbbreviation":"ZWE","name":"津巴布韦"}];

console.time('t1');
fs.writeFile('a.json',JSON.stringify(a),function  (err) {
    if(err) throw err;
    console.log('write success');
});

console.timeEnd('t1');

console.time('t2');
var writeStream = fs.createWriteStream('ple.json');

writeStream.write(JSON.stringify(a));
writeStream.on('data',function (data){
    console.log(data);
});
writeStream.on('end',function (){
    console.log('write success 2');
});
console.timeEnd('t2');

// fs.open('a.json','w',0755,function  (e,fd) {
//     if(e) throw e;
//     fs.write(fd,a,0,'utf8',function  (e) {
//         if(e) throw e;
//         fs.closeSync(fd);
//     })
// })