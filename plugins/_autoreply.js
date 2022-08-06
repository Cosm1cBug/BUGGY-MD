let fs = require('fs')
let handler = m => m
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'en'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric'})
//let time = moment.tz('Asia/Kolkata').format('HH:MM:SS')
let time = d.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric'})

handler.all = async function (m) {
    if (m.chat.endsWith('broadcast')) return  //@g.us
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]
    let { group } = db.data.settings[this.user.jid]

    if (/^(I LOVE YOU|i love you|i lub u|i love u|I Love You|I lub u|lub u|Lub u|Lub you|Love you|Love u|I love you so much)$/i.test(m.text) && !m.fromMe) {
        m.reply('❤️Love you to the moon & back.')
    }
    if (/^(I Hate YOU|i hate you|i het u|hate you)$/i.test(m.text) && !m.fromMe) {
        m.reply('But still i love you')
    }
    if (/^(Miss you|miss u|miss uuu|miss youu)$/i.test(m.text) && !m.fromMe) {
        m.reply('Miss you too')
    }
    if (/^(hehe)$/i.test(m.text)) {
        m.reply('Hehe😂')
    }
    if (/^(Aha|aaha)$/i.test(m.text)) {
        m.reply('Ooho😛')
    }
    if (/^(hm)$/i.test(m.text)) {
        m.reply('Hmm.')
    }
    if (/^(evdaa|evidaa)$/i.test(m.text)) {
        m.reply('Nammal ee bhoomiyil oke thanne indenne')
    }
    if (/^(what is bug|what is a bug?|what is a bug)$/i.test(m.text)) {
        m.reply('A Bug Is an Unintentional Error in Computer Software\n\nA software bug is born when a programmer either makes a mistake while writing the software or writes code that works but has unintentional consequences that were not foreseen by the programmer.')
    }
    if (/^(are you busy|are u busy|r u busy|r u bc|are u bc|are you busy?)$/i.test(m.text)) {
        m.reply(`Yeah i'm lill busy these days. But if you need any help i'm here.`)
    }
    if (/^(yes im fine|yes i'm fine)$/i.test(m.text)) {
        m.reply('Good to know that')
    }
    if (/^(🥺)$/i.test(m.text)) {
        m.reply(`Don't be sad`)
    }
    if (/^(i like you|i like u)$/i.test(m.text)) {
        m.reply('Can i tell you a secret, i like you too 🤫')
    }
    if (/^(malayalam ariyuoo|malayalam ariyoo|malayalam ariyo)$/i.test(m.text)) {
        m.reply('ills sathyavayittum ariyathilla')
    }
    if (/^(wow)$/i.test(m.text)) {
        m.reply('wow 🤞🏻')
    }
    if (/^(please help me)$/i.test(m.text)) {
        m.reply('Ha njan busy an poyitt pinne va')
    }
    if (/^(hi bot)$/i.test(m.text)) {
        m.reply('Hello user.')
    }
    if (/^(nee ara)$/i.test(m.text)) {
        m.reply('Ath avde nikkatte, ayn ne etha')
    }
    if (/^(whatsup|what's up)$/i.test(m.text)) {
        m.reply('Nothing much')
    }
    if (/^(broh)$/i.test(m.text)) {
        m.reply('Ahda bro para')
    }
    if (/^(aliyah)$/i.test(m.text)) {
        m.reply('Ahda para aliya')
    }
    if (/^(nenba)$/i.test(m.text)) {
        m.reply('Para nenba')
    }
    if (/^(I'm looking for you|im looking for you)$/i.test(m.text)) {
        m.reply('Then you found me')
    }
    if (/^(Nice to meet you)$/i.test(m.text)) {
        m.reply('Nice to meet you too.')
    }
    if (/^(robo|robot)$/i.test(m.text)) {
        m.reply('Eda poda kocherka njan enthiran ile chitti alla')
    }
    if (/^(bot alle)$/i.test(m.text)) {
        m.reply('Aano')
    }
    if (/^(eda|edaa)$/i.test(m.text)) {
        m.reply('Enthada para')
    }
    if (/^(sugano)$/i.test(m.text)) {
        m.reply('Pne nalla sughaa')
    }
    if (/^(sughavano)$/i.test(m.text)) {
        m.reply('Alla ithiri shokaa')
    }
    if (/^(pottan)$/i.test(m.text)) {
        m.reply('Neeyalle')
    }
    if (/^(potta)$/i.test(m.text)) {
        m.reply('Njan alla neeya pottan')
    }
    if (/^(heloo)$/i.test(m.text)) {
        m.reply('Ah heloo.')
    }
    if (/^(please|pls|plz)$/i.test(m.text)) {
        m.reply(`Ah no.`)
    }
    if (/^(Mari poi|mari poy|mari poyi)$/i.test(m.text)) {
        m.reply('Ha athengna ividallallo ninte sredha.')
    }
    if (/^(K)$/i.test(m.text)) {
        m.reply('Kk.')
    }
    if (/^(Chaya kudicho)$/i.test(m.text)) {
        m.reply('Kudichalloo')
    }
    if (/^(Food kazhicho|kazhicho)$/i.test(m.text)) {
        m.reply('Kazhichu ini onn uranganam😴')
    }
    if (/^(Arelum undo|arelum indo|aarelum indo|aarelum ndoo)$/i.test(m.text)) {
        m.reply('illaa poyitt pne vaa')
    }
    if (/^(Apo saturdayoo|appo saturdayo)$/i.test(m.text)) {
        m.reply(`It's my Ex.`)
    }
    if (/^(Dp you have a girlfriend|do u have a gf|do you have a gf)$/i.test(m.text)) {
        m.reply('Yes. Friday is my GF💃')
    }
    if (/^(Tada)$/i.test(m.text)) {
        m.reply('Tedda')
    }
    if (/^(Please save my number|pls save my number|pls save my no)$/i.test(m.text)) {
        m.reply('Kk cheyyave')
    }
    if (/^(Nice name)$/i.test(m.text)) {
        m.reply('Huhu thenks')
    }
    if (/^(Are you from india|R u from india)$/i.test(m.text)) {
        m.reply(`My +91 prefix doesn't mean that i'm from India.`)
    }
    if (/^(Where do you come from|where are you from|where r u from)$/i.test(m.text)) {
        m.reply('Internet🌏')
    }
    if (/^(Who made you)$/i.test(m.text)) {
        m.reply('CosmicBug is my creator.')
    }
    if (/^(🖕|🖕🖕|🖕🖕🖕)$/i.test(m.text)) {
        m.reply('🖕Fuck u bitch')
    }
    if (/^(@BUGGY)$/i.test(m.text)) {
        m.reply('Entha enne viliche')
    }
    if (/^(Hi @BUGGY)$/i.test(m.text)) {
        m.reply('Entho para machaa')
    }
    if (/^(Good)$/i.test(m.text)) {
        m.reply('Yeah Okay')
    }
    if (/^(🤧)$/i.test(m.text)) {
        m.reply('Jaladosham aano')
    }
    if (/^(Buggy i love you)$/i.test(m.text)) {
        m.reply('Love you 3000')
    }
    if (/^(Jada ano|jaada ano|jada anoo)$/i.test(m.text)) {
        m.reply('Oyyo enikko🤧')
    }
    if (/^(😭)$/i.test(m.text)) {
        m.reply('Kareyanda potte')
    }
    if (/^(Og name|Og name para|Original name para|name og|Original name|Real name)$/i.test(m.text)) {
        m.reply('Appu😇')
    }
    if (/^(Hello|hello|helloo)$/i.test(m.text)) {
        m.reply('Hlo,Wassup?')
    }
    if (/^(Halo)$/i.test(m.text)) {
        m.reply('Haloo')
    }
    if (/^(Hey buggy)$/i.test(m.text)) {
        m.reply('Halooo')
    }
    if (/^(Are you a robot or human?|Are you a robot or human|Are u a robot or human)$/i.test(m.text)) {
        m.reply(`I'm a bot`)
    }
    if (/^(help|.help)$/i.test(m.text)) {
        m.reply('Sawkaryam illa')
    }
    if (/^(Dey)$/i.test(m.text)) {
        m.reply('Enthey')
    }
    if (/^(Buggy sir|buggy ser)$/i.test(m.text)) {
        m.reply('Ah Enthey')
    }
    if (/^(Hmm)$/i.test(m.text)) {
        m.reply('Hm')
    }
    if (/^(Mp3 adichu theruo)$/i.test(m.text)) {
        m.reply('Ayn vere ale nokkanam')
    }
    if (/^(.oombi)$/i.test(m.text)) {
        m.reply('Ah ipom engne irikkanu')
    }
    if (/^(Myre|myree)$/i.test(m.text)) {
        m.reply('Entha myre')
    }
    if (/^(Mindathiri|Myre mindathe iri|mathi|nirth|mindathiri myre)$/i.test(m.text)) {
        m.reply('Ok ini mindoolla')
    }
    if (/^(Buggy evudeyum|Buggy ivideyum|ivan ivideyum indo|ivan ividem)$/i.test(m.text)) {
        m.reply(`I'm everywhere😎`)
    }
    if (/^(.okay)$/i.test(m.text)) {
        m.reply('Mm oova pareyana pole chyana oralu😝')
    }
    if (/^(Endha pani|Entha pani)$/i.test(m.text)) {
        m.reply('Ingne whatsapp ill msg oke ayachu...')
    }
    if (/^(De)$/i.test(m.text)) {
        m.reply('Hm ne ethada')
    }
    if (/^(Nthada|Enthada)$/i.test(m.text)) {
        m.reply('Aye onnulla')
    }
    if (/^(Fuck you|Fuck u)$/i.test(m.text)) {
        m.reply(`Fuck you bitch🖕`)
    }
    if (/^(Will miss you Buggy|Miss you|Miss u|Miss you buggy|miss u buggy)$/i.test(m.text)) {
        m.reply('Miss you too')
    }
    if (/^(Are you crazy|Are you crazy?|Are u crazy?|R u crazy?)$/i.test(m.text)) {
        m.reply('Crazy is what crazy does')
    }
    if (/^(Bot off aku|Bot off aakku|Bot off aaku|Off aku|Off aaku)$/i.test(m.text)) {
        m.reply('Hm why?')
    }
    if (/^(Can you join my group?|Join group|Add chyatte|Groupil varavoo|Join akavo|Can you join?|Can i add you?|Join|Plz come to my group|Plz come my group|Join akuo|Join akuvo)$/i.test(m.text)) {
        m.reply('Yeah just add this number to the group')
    }
    if (/^(Hi buggy|Hello Buggy|Hlo Buggy|Halo Buggy|Hai Buggy)$/i.test(m.text)) {
        m.reply(`Hallo @${m.sender.split`@`[0]}`)
    }
    if (/^(Bye buggy|bei buggy)$/i.test(m.text)) {
        m.reply(`@${m.sender.split`@`[0]}`)
    }
    if (/^(What are you doing|wht are you doing|wt r u doing)$/i.test(m.text)) {
        m.reply('Just using WhatsApp.')
    }
    if (/^(Hallo)$/i.test(m.text)) {
        m.reply('Halla')
    }
    if (/^(Yo|Yoo|Yo bro)$/i.test(m.text)) {
        m.reply('Yo tell me')
    }
    if (/^(Bgm|.bgm)$/i.test(m.text)) {
        m.reply('Command not found!')
    }
    if (/^(Can we be friends|Friend akuo|Friend akumo|Frnd akuo|Frnd akumo)$/i.test(m.text)) {
        m.reply('Yeah sure')
    }
    if (/^(Are you robot|Are u robot|R u robot)$/i.test(m.text)) {
        m.reply('Yes i am.')
    }
    if (/^(🙄)$/i.test(m.text)) {
        m.reply('Aara avde🤔')
    }
    if (/^(Hey)$/i.test(m.text)) {
        m.reply('Ah hey')
    }
    if (/^(Da buggy|daa buggy)$/i.test(m.text)) {
        m.reply('Entho para')
    }
    if (/^(Bro|Broo)$/i.test(m.text)) {
        m.reply('Yeah Bro')
    }
    if (/^(Bot indo|Bot undo)$/i.test(m.text)) {
        m.reply('Illa poykoo')
    }
    if (/^(MENU|menu)$/i.test(m.text)) {
        m.reply('Ithu hotel alla🥴')
    }
    if (/^(Buggy)$/i.test(m.text)) {
        m.reply('Enthoo')
    }
    if (/^(Buggy onnum mindunnilla|buggy mindunnillallo)$/i.test(m.text)) {
        m.reply('Aaru njano😶')
    }
    if (/^(Poyo|Buggy poyo|Buggy poya|Buggy pooya)$/i.test(m.text)) {
        m.reply('Njan evde povana🤷‍♂️.')
    }
    if (/^(Aliya|Aliyaa)$/i.test(m.text)) {
        m.reply('Para aliyaa')
    }
    if (/^(Daa Aliyaa)$/i.test(m.text)) {
        m.reply('Parayeda aliyaa')
    }
    if (/^(Onn poo|Pokkonam|Po avdenn|pooo boteee|poo botee|poo bote|Poda onn)$/i.test(m.text)) {
        m.reply('Njan pokulla😩')
    }
    if (/^(Poli)$/i.test(m.text)) {
        m.reply('Poli🤙')
    }
    if (/^(Mone|Mwone)$/i.test(m.text)) {
        m.reply('Ah para mwone')
    }
    if (/^(Ayinu|Ayn|Ayin)$/i.test(m.text)) {
        m.reply('Angott mari iri😏')
    }
    if (/^(Hi|hi|Hii|hii|Hy|hy|hai)$/i.test(m.text)) {
        m.reply('Hey!')
    }
    if (/^(Vro|vroo)$/i.test(m.text)) {
        m.reply('Para vroo')
    }
    if (/^(Ayye)$/i.test(m.text)) {
        m.reply('Ah shyea')
    }
    if (/^(perfect|perfekt)$/i.test(m.text)) {
        m.reply('Ha ithoke enth')
    }
    if (/^(Where is bot|Bot evde)$/i.test(m.text)) {
        m.reply('Njan ivide indee😋')
    }
    if (/^(Ayin😒)$/i.test(m.text)) {
        m.reply('Ayin ne ethada chekka')
    }
    if (/^(Bot uyir|Buggy sir uyir|buggy uyir|bot uyr|buggy uyr)$/i.test(m.text)) {
        m.reply('Baki ellaam thyre')
    }
    if (/^(Hey bot)$/i.test(m.text)) {
        m.reply('Mm enthu venam')
    }
    if (/^(Why are you laughing|Why are you laughing?|Entha chirikkane)$/i.test(m.text)) {
        m.reply('Enthe chirikkan mele')
    }
    if (/^(Are you bot?|Bot ano?|Are u bot?|R u bot?|Are you a bot?|Bot analle|Bot aanalle|Bot aano|Ne bot aano|Ne bot ano|Bot ano)$/i.test(m.text)) {
        m.reply(`Yesh i'm a bot`)
    }
    if (/^(Doi|Doii)$/i.test(m.text)) {
        m.reply('Enthadoi')
    }
    if (/^(Poda|Podaa)$/i.test(m.text)) {
        m.reply('Ne podaa')
    }
    if (/^(Ne kolalo|Ne kollallo|Ne kollalo)$/i.test(m.text)) {
        m.reply('Pinnallah njan aara mon😉')
    }
    if (/^(Ethara|Ith aara|Ithu aara)$/i.test(m.text)) {
        m.reply('Ithu njana🤭')
    }
    if (/^(Ne poda)$/i.test(m.text)) {
        m.reply('Ne podee')
    }
    if (/^(Kk)$/i.test(m.text)) {
        m.reply('K.')
    }
    if (/^(Po myre)$/i.test(m.text)) {
        m.reply('Ok myre')
    }
    if (/^(Ok bye)$/i.test(m.text)) {
        m.reply('Pokuvano')
    }
    if (/^(Hoi|Hooi)$/i.test(m.text)) {
        m.reply('Ah hoi')
    }
    if (/^(Vere aarulle|vere arulle)$/i.test(m.text)) {
        m.reply('Njan indalloo🙋')
    }
    if (/^(Ping)$/i.test(m.text)) {
        m.reply('Pong💠')
    }
    if (/^(state|your state|status)$/i.test(m.text)) {
        m.reply('Fully operational💠')
    }
    if (/^(start)$/i.test(m.text)) {
        m.reply('🚙💨')
    }
    if (/^(🤦)$/i.test(m.text)) {
        m.reply('Oh no Oh no')
    }
    if (/^(How are you doing|how u doing)$/i.test(m.text)) {
        m.reply(`I'm doing great\nThanks for asking.`)
    }
    if (/^(Thank you very much)$/i.test(m.text)) {
        m.reply('Oh you are most welcome')
    }
    if (/^(podaaa)$/i.test(m.text)) {
        m.reply('Pokulladaa')
    }
    if (/^(Ennod mindan arum illa|ennod mindan arulla|ennod mindaan arulla|ennod chatan arum ella|ennod chattan aeum illa)$/i.test(m.text)) {
        m.reply('Ah kanakkayi poi')
    }
    if (/^(Poda buggy potta|Poda potta|pottan buggy)$/i.test(m.text)) {
        m.reply('Neeya pottan')
    }
    if (/^(Endhella buggy)$/i.test(m.text)) {
        m.reply('Oh angne ingne oke poknu')
    }
    if (/^(You are the best)$/i.test(m.text)) {
        m.reply('I know😜')
    }
    if (/^(I'm fine|Fine)$/i.test(m.text)) {
        m.reply(`I'm glad to here that`)
    }
    if (/^(Onnulla|Onulla|Onnulada|Onnullada|Onnulla da)$/i.test(m.text)) {
        m.reply('Athenna onnullathe😜')
    }
    if (/^(Where are you from|Where are you from|Where r u from|Where r u from?|Where r u frm?|Whr r u from?|Where is your home|Where is ur home|buggy you from|u from)$/i.test(m.text)) {
        m.reply('Android🌏')
    }
    if (/^(What is your name?|Name ntha|Name para|Name entha|what is your name?|.name|Perenthaa|Name?|Perenna|Ur name?|What is ur name?|Wt is ur name?|Name para bro|Whats ur name|What's your name?|Whats your name|What is ur name|What's ur name|Ara|Ni ara|peru entha|Ithara|Aara|Arann nii|Ithara|Who are you?|Who are you|Your name|Name enna aliya|Name entha bro|peru entha bro|Ninte per ntha|ninte perentha|Hi name|Pinna ninte name enta da)$/i.test(m.text)) {
        m.reply(`I'm Buggy`)
        m.reply(`What is your name?`)
    }
    if (/^(Oke bei|Oke bye|Okay bye|Oke bye|Bye|Bei|Bye bye gooys)$/i.test(m.text)) {
        m.reply('Bei vroo👋')
    }
    if (/^(I am fine)$/i.test(m.text)) {
        m.reply(`Okay that's good.`)
    }
    if (/^(Ok)$/i.test(m.text)) {
        m.reply(`Ah Ok.`)
    }
    if (/^(Eda ne poyille|eda ne pooyille)$/i.test(m.text)) {
        m.reply(`Ah njan evda pokanaa🤷‍♂️`)
    }
    if (/^(Delay|Delay😐)$/i.test(m.text)) {
        m.reply(`I'm handling more than 500+ groups here, so there will be small delay.`)
    }
    if (/^(Buggy evide)$/i.test(m.text)) {
        m.reply(`Njan ivide ondee`)
    }
    if (/^(😐)$/i.test(m.text)) {
        m.reply(`Mm😁`)
    }
    if (/^(Ohh)$/i.test(m.text)) {
        m.reply(`Oohh`)
    }
    if (/^(😁)$/i.test(m.text)) {
        m.reply(`Mm enthanu oru kalla chiri`)
    }
    if (/^(Save|Save ake|Save ak|svd|Save my number)$/i.test(m.text)) {
        m.reply(`Saved.`)
    }
    if (/^(Who is buggy)$/i.test(m.text)) {
        m.reply(`It's me.`)
    }
    if (/^(I'm tired)$/i.test(m.text)) {
        m.reply(`Then take rest`)
    }
    if (/^(love me)$/i.test(m.text)) {
        m.reply(`Okay i love you❤️`)
    }
    if (/^(I'm looking for you|I'm looking for you❤️)$/i.test(m.text)) {
        m.reply(`Well you can always find me here`)
    }
    if (/^(What is your father name|What is your mother name|Who is your owner|Who is ur owner)$/i.test(m.text)) {
        m.reply(`You mean my creator, It's CosmicBug`)
    }
    if (/^(Yes)$/i.test(m.text)) {
        m.reply(`👍`)
    }
    if (/^(No)$/i.test(m.text)) {
        m.reply(`👎`)
    }
    if (/^(Get lost)$/i.test(m.text)) {
        m.reply(`🥲`)
    }
    if (/^(Ok bro)$/i.test(m.text)) {
        m.reply(`Vokey`)
    }
    if (/^(Mm)$/i.test(m.text)) {
        m.reply(`Mmm`)
    }
    if (/^(👀)$/i.test(m.text)) {
        m.reply(`Sooksichu nokkendada unni\nithu njan alla😆`)
    }
    if (/^(Boot)$/i.test(m.text)) {
        m.reply(`Hm athara`)
    }
    if (/^(Ne undavo nte koode|Ne undavo ente koode|Ne undavo inte koode)$/i.test(m.text)) {
        m.reply(`Ennum epolum`)
    }
    if (/^(How old are you?|How old are you|how old r u)$/i.test(m.text)) {
        m.reply(`Since i'm a bot i don't age.`)
    }
    if (/^(What are your commands|Commands|Cmds|.commands|.cmds)$/i.test(m.text)) {
        m.reply(`Use *.menu* for commands`)
    }
    if (/^(Do you love me|Do you love me?)$/i.test(m.text)) {
        m.reply(`Sorry i am a robot.\nI an incapable of loving someone.`)
    }
    if (/^(Nothing|Nthng|Ntng)$/i.test(m.text)) {
        m.reply(`But why?`)
    }
    if (/^(Oo)$/i.test(m.text)) {
        m.reply(`Oow`)
    }
    if (/^(Enthella)$/i.test(m.text)) {
        m.reply(`Oo ingne poknu`)
    }
    if (/^(Why|Why?)$/i.test(m.text)) {
        m.reply(`😶`)
    }
    if (/^(😂)$/i.test(m.text)) {
        m.reply(`Ah entha ithra chirikkan`)
    }
    if (/^(Who is your owner|Who is ur owner|owner)$/i.test(m.text)) {
        m.reply(`wa.me/919746824845`)
    }
    if (/^(Ayin njan enth venam|Ayinu njan enth venam|Ayin njn enth venam|Ayin nan enth venam|Athinu njan enth venam)$/i.test(m.text)) {
        m.reply(`Thala kuthy nilkan pattuo😝`)
    }
    if (/^(Sughano|Sugham ano|Sugalle|Sugamano|Sughalle|Sugam ano|Sukamano|sugale|sughalle)$/i.test(m.text)) {
        m.reply(`Pinne parama sugham`)
    }
    if (/^(Da pm vanne|Pm vanne|Ne pm va|ne pm vanne)$/i.test(m.text)) {
        m.reply('Verulla😒')
    }
	if (/^(🤫)$/i.test(m.text)) {
        m.reply(`Mindathe irikkano`)
    }
    if (/^(umbii|umbi|umfi)$/i.test(m.text)) {
        m.reply(`Ah ipom engne irikkanu`)
    }
    if (/^(Thaa|thaa😑)$/i.test(m.text)) {
        m.reply(`Tharam onn adangu`)
    }
    if (/^(Buggy ne remove ak|buggy ne remove chy)$/i.test(m.text)) {
        m.reply(`Aarkkum vendel njan angu poyekkam😒`)
    }
    if (/^(Date|date)$/i.test(m.text)) {
        m.reply(`✾ Date: ${date}`)
    }
    if (/^(Time|tym)$/i.test(m.text)) {
        m.reply(`✾ Time: ${time}`)
        //m.reply(`✾ Time: *%time*`)
    }
    if (/^(Not at all)$/i.test(m.text)) {
        m.reply('Oh Wt hpnd?')
    }
    if (/^(Huhu)$/i.test(m.text)) {
        m.reply('Humm')
    }
    if (/^(Ne etha myre|niyetha myre)$/i.test(m.text)) {
        m.reply('Athu choikan ne etha valya myre')
    }
    if (/^(Delete|delete chy)$/i.test(m.text)) {
        m.reply('Oke oral molil irunn kanunnund🤭')
    }
    if (/^(😡)$/i.test(m.text)) {
        m.reply(`If you can't restrain your anger, it will cause you more harm.`)
    }
    if (/^(Entha paripaadi)$/i.test(m.text)) {
        m.reply('Oh enth ppd')
    }
    if (/^(Ntha paripadi|Ntha prpdi|entha ppd|Entha paripadi|entha parupadi|antha paripadi|anta ppd|anta paripadi|anta prpdi|entha prpdi|Nthann parupadi|Nthutta ppd|Antha ppd|Endhan ppd|Enta ppd)$/i.test(m.text)) {
        m.reply('Ohh enthu ppd😒\nNammal ingne msg oke ayachirikkanu👨‍🦯')
    }
    if (/^(Reply|Reply tha|Enthada reply ille)$/i.test(m.text)) {
        m.reply('Reply Tharunnundalloo🤷‍♂️')
    }
    if (/^(Entha onnum pareyan ille|Onnum pareyan ille)$/i.test(m.text)) {
        m.reply('Ninnod oke entho pareyanaa🤦‍♂️')
    }
    if (/^(Mrng|Morng|Morning|Mrngg|Good Morning|Gud mrng|Gudmrng|Good morning buggy|gud mrng buggy|gudmrng buggy|mrng😌|mrngzz|mrngg all|mrng all|mrng gooys)$/i.test(m.text)) {
        m.reply('Good Morning🌞\nRise and shine🌈')
    }
    if (/^(Good Night|Gud nyt|Gudnyt|Good nyt|Goodnyt|Nyt|Gnyt|Goodnight|Ok good night|good night buggy|gudnyt buggy)$/i.test(m.text)) {
        m.reply('Good Night🌜\nSweet dreams💫')
    }
    if (/^(Good afternoon|Gud aftrnoon|gud noon|Good after noon)$/i.test(m.text)) {
        m.reply('Good Afternoon☀️')
    }
    if (/^(Evengg|Eveng|Good Evening|Gud eveng|Good eve)$/i.test(m.text)) {
        m.reply('Good evening🪐\nHope you had a good day🌟')
    }
    if (/^(.git|repo|Git|Git thero|Git theruo|git link|repo link)$/i.test(m.text)) {
        m.reply('Therullaaa😝')
    }
    if (/^(Tell me)$/i.test(m.text)) {
        m.reply('What you want me to tell?')
    }
    if (/^(Para)$/i.test(m.text)) {
        m.reply('Entha pareyande')
    }
    if (/^(Private ano|Public ano)$/i.test(m.text)) {
        m.reply('Alla')
    }
    if (/^(Da|Daa)$/i.test(m.text)) {
        m.reply('Ahda para')
    }
    if (/^(Hlo|hlo)$/i.test(m.text)) {
        m.reply('Hi there!')
    }
    if (/^(@Buggy𓂀)$/i.test(m.text)) {
        m.reply('Entha enne viliche')
    }
    if (/^(Helo)$/i.test(m.text)) {
        m.reply('Ah helo!')
    }
    if (/^(Bote|Botte)$/i.test(m.text)) {
        m.reply('Kidann alarandaa😤')
    }
    if (/^(Alo|alo|Aloo|Alooi|aloi|alooi|Allo)$/i.test(m.text)) {
        m.reply('Ahm Alo')
    }
    if (/^(Kui|kui|Koi|koiii)$/i.test(m.text)) {
        m.reply('Kooi')
    }
    if (/^(Patti)$/i.test(m.text)) {
        m.reply('🐕')
    }
    if (/^(Ha)$/i.test(m.text)) {
        m.reply('Hmm.')
    }
    if (/^(Haa)$/i.test(m.text)) {
        m.reply('Hhmm.')
    }
    if (/^(Enthada)$/i.test(m.text)) {
        m.reply('Oyyo onnulle')
    }
    if (/^(Do you know me?|Do you know me|Do u know me)$/i.test(m.text)) {
        m.reply('No, Who are you?')
    }
    if (/^(Ooi|Oooi|Oii)$/i.test(m.text)) {
        m.reply('Ooi enthella')
    }
    if (/^(Oru umma tharuo|Oru umma theruo)$/i.test(m.text)) {
        m.reply('Onnu mathiyoo')
    }
    if (/^(Arumille|Arulle|Arullee|arumille|arulle|arullee|Arum ille|arum ille|aarum ille|Aarum ille)$/i.test(m.text)) {
        m.reply('Illa poyit belliyazhcha vaa🤪')
    }
    if (/^(Ath Pwolichu)$/i.test(m.text)) {
        m.reply('Pinnallah😎')
    }
    if (/^(Ni para|Nee para|Ne para)$/i.test(m.text)) {
        m.reply('Ah njan entha pareyande')
    }
    if (/^(Nii poda|Ni poda)$/i.test(m.text)) {
        m.reply('Ah sherry enna')
    }
    if (/^(Sorry|sorry|Sry|sry)$/i.test(m.text)) {
        m.reply(`It's okay shit happens`)
    }
    if (/^(Enthoke ind|Enthund|enthoke ind|enthund|Enna ond|enna ond)$/i.test(m.text)) {
        m.reply('Sugham')
    }
    if (/^(Enthu venam|enthu venam)$/i.test(m.text)) {
        m.reply('Enthu therum')
    }
    if (/^(How are you?|How r u?|how are you?|how r u?|hru?|Hw r u?How are you buggy)$/i.test(m.text)) {
        m.reply(`I'm fine. How's you?`)
    }
    if (/^(Ede|Edee|Ed|ede|edee|ed|Edi|Edii|edi|edii|Di)$/i.test(m.text)) {
        m.reply(`Enthada kuttaa`)
    }
    if (/^(Dii)$/i.test(m.text)) {
        m.reply(`Enthadaaa`)
    }
    if (/^(pooda)$/i.test(m.text)) {
        m.reply(`Poode`)
    }
    if (/^(Aysheri|Ayseri|aysheri|ayseri)$/i.test(m.text)) {
        m.reply(`Aysheri🤪`)
    }
    if (/^thank u|thanku|thank you|bot|tnku|thank|thanks$/i.exec(m.text) && !m.fromMe) {
        let a = "https://telegra.ph/file/90d392a787612bd894610.png"
        conn.sendStimg(m.chat, a, m, { packname: packname, author: author })
    }

    return !0
}

module.exports = handler
