/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Faster Spawn': '更快的生成',
    'Gradient': '倾斜度',
    'Greek Letters': '希腊字母',
    'Help': '帮助',
    'Imperial': '帝国',
    'Import Game': '导入',
    'Infinity': '无限',
    'Introduction': '介绍',
    'Isotopes': '同位素',
    'Japanese': '日语',
    'Letters': '字母',
    'LOCKED': '未解锁',
    'Logarithm': '对数',
    'Matter on Merge': '物质上合并',
    'Max All': '全部最大',
    'Max Objects': '最大对象',
    'You get': '你获得',
    'You have': '你有',
    'Select': '选择',
    'Style': '风格',
    'Social Stuff': '社交',
    'Save Management': '存档管理',
    'Export Game': '导出',
    'Engineering': '工程符号',
    'Energy Cores': '能量核心',
    'Dark': '深色',
    'Clock': '时钟',
    'Click to Hide / Show': '点击隐藏/显示',
    'Custom Notation': '自定义符号',
    'Cancer': '癌症',
    'ALL': '全部',
    'Apply': '同意',
    'Better Mergers': '更好的合并',
    'Add Core': '增加核心',
    'Number Format': '数字格式',
    'Omega': '欧米伽',
    'Prime': '素数',
    'Prestige Upgrades': '声望升级',
    'Reach': '达到',
    'Roman': '罗马符号',
    'Settings': '设置',
    'Standard': '常规',
    'Scientific': '科学计数法',
    'more Quantum Foam!': ' 的量子泡沫!',
    'Molecules': '分子',
    'to get': '以得到',
    'Prestige': '声望',
    'Quantum Foam Boost': '量子泡沫提升',
    'Precise Prime': '精确素数',
    'Plastic': '塑料',
    'Omega (Short': '欧米伽 (短',
    'Mixed scientific': '混合科学',
    'Mixed Logarithm (Sci': '混合对数（科学',
    'Mixed engineering': '混合工程',
    'Hex': '十六进制',
    'Upgrades': '升级',
    'Tritetrated': '四分',
    'MAX': '最大',
    'Photon +': '光子 +',
    'Neutrino +': '中微子 +',
    'Gluon +': '胶子 +',
    'Electron +': '电子 +',
    'Muon +': 'μ介子 +',
    'Brackets': '括号',
    'Dots': '圆点',
    'Double Spawn': '双胞胎',
    "Click Abilities": "点击能力",
    "Increase the Chance of getting 2 Seconds of your total Matter per Second on Merge.": "增加在合并时每秒获得你总物质的几率，持续2秒。",
    "Increase the Max Amount of Mergers that can be on screen at once.": "增加一次可以在屏幕上显示的最大合并数量。",
    "Mergers spawn one Tier higher. After Upgrading, Mergers with a low Level get upgraded.": "合并产生更高一级。 升级后，低等级的合并会得到升级。",
    "Preloading": "预加载",
    "Prestige once": "声望一次",
    "Reach 1e12 Matter": "达到 1e12 物质",
    "The cooldown Between Merges spawning is reduced.": "合并生成之间的冷却时间减少。",
    "AMOLED": "非常黑",
    "Add 50 % to the move speed of all Mergers. It will cap out at 60 % and decrease over time.": "所有合并的移动速度增加 50%。 它的上限为 60%，并随着时间的推移而减少。",
    "as possible. Each Merger produces": "尽可能。 每次合并产生",
    "Base Production": "基础生产",
    "Browser Storage isn't the most reliable thing on Earth and Cleaning Tools might intervene. Make sure to export frequently!": "浏览器存储并不是地球上最可靠的东西，清洁工具可能会介入。 确保经常导出！",
    "Click Particles": "点击粒子",
    "Credits": "鸣谢",
    "Decrease the wait time for the next Merger by 75 ms (0.075s) with each click.": "每次单击将下一次合并的等待时间减少 75 毫秒（0.075 秒）。",
    "Have 50,000 Quantum Foam": "拥有 50,000 量子泡沫",
    "Low Performance Mode": "低性能模式",
    "Matter": "物质",
    "Max FPS": "最大 FPS",
    "Mergepedia Animations": "合并动画",
    "Merger": "合并",
    "Merger Move Speed": "合并移动速度",
    "more matter per second than the previous.\n            Matter can be used on": "每秒的物质比上一个多。\n 物质可以用于",
    "Off": "关闭",
    "On": "开启",
    "Prestige Confirmation": "声望确认",
    "Production": "生产",
    "Select your Click ability": "选择您的点击能力",
    "Spawn Speed": "生成速度",
    "Support Me ♥": "支持我 ♥",
    "Switching is free!": "切换是免费的！",
    "that can increase the initial tier Mergers spawn on,\n            how fast they spawn and how many can be on the screen at once.": "这可以增加合并产生的初始层，\n 它们产生的速度以及一次可以在屏幕上显示的数量。",
    "The Game auto-saves.": "游戏自动保存。",
    "Your goal in this game is to combine Objects \"Mergers\" to produce as much": "你在这个游戏中的目标是组合对象 \"合并\" 来产生尽可能多的东西",
    "Have 100e9 Quantum Foam": "拥有 100e9 量子泡沫",
    "Reach Merger #": "达到合并 #",
    "Get a Quantum Processor Core": "获得量子处理器内核",
    "Download": "下载",
    "Select Best": "选择最佳",
    " MAX": " 最大",
    ", you can level them up by selecting them. They gain": "，您可以通过选择它们来升级它们。 他们获得",
    "About": "关于",
    "These can be used to Upgrade the Chance that you get Isotopes and that 2 Mergers\n            spawn at once. You can also use them to upgrade": "这些可用于升级获得同位素和 2 个合并\n 一次生成的机会。 您也可以使用它们来升级",
    "Prestige: ": "声望: ",
    ". Buying them will not decrease the matter boost, since\n            the boost is determined based on": ".购买它们不会减少物质提升，因为\n提升是基于",
    ". In that process, you lose\n            all Progress made so far, but in exchange, each Quantum Foam increases you Matter Production by": ".在这个过程中，你会损失\n到目前为止取得的所有进展，但作为交换，每个量子泡沫都会使你的物质生产量增加",
    ".These can further boost\n            your matter production, make Mergers move faster, increase the Quantum Foam yield\n            or give you a headstart.": ".这些可以进一步提高\n你的物质生产，使合并更快，增加量子泡沫的产量\n或给你一个先机。",
    "\"Support Me\" boost is better": "“支持我”提升效果更好",
    "[Banked Quantum Foam]": "[存储的量子泡沫]",
    "After a certain point, it is harder and harder to Progress and unlock new Mergers.\n            To solve that Problem, you can Prestige to get": "到了一定点之后，就越来越难推进和解锁新的合并了。\n要解决这个问题，你可以通过声望来获得",
    "are another way to boost your matter production. After buying them with": "是提高您的物质生产的另一种方式。购买后",
    "Automatic Foam": "自动泡沫",
    "can be used on": "可用于",
    "each level (x25, x50, x75, ...).": "每个级别（x25，x50，x75，...）。",
    "Get a percentage of potential Quantum Foam each Second": "每秒获得一定百分比的潜在量子泡沫",
    "gives you an overview over what Mergers you have seen so far.": "为您提供迄今为止您所看到的合并的概述。",
    "Increase the Chance to get Isotopes when two Mergers collide.": "增加两个合并碰撞时获得同位素的机会。",
    "Increase the Chance to spawn 2 Mergers at once instead of one.": "增加一次产生 2 个合并的机会，而不是 1 个。",
    "is a powerful technology that can increase matter production dramatically.\n            Each Processor Core multiplies matter production by": "是一项强大的技术，可以显着增加物质产量。\n 每个处理器核心都会将物质产量乘以",
    "Isotope": "同位素",
    "Merger Spawn Time is reduced even further": "合并生成时间进一步减少",
    "Mergers spawn and move Faster": "合并产生并更快地移动",
    "production rises.": "产量上升。",
    "Quantum Foam": "量子泡沫",
    "Quantum Foam Are recommended for the first Reset.": "推荐使用量子泡沫进行第一次重置。",
    "Quantum Processors": "量子处理器",
    "Social Boost is raised to a power": "Social Boost被提升为一种力量",
    "Social Power": "社会力量",
    "Support Boost": "支持提升",
    "The": "这",
    "When two Mergers collide, there's a chance that they create an": "当两个合并发生冲突时，他们有可能创建一个",
    "xp per merge. When they Level up,\n            their boost to": "xp 每次合并。当他们升级时，\n 他们提升到",
    "You can spend Isotopes to increase the Boost of each individual core. The Boost\n            increases by": "您可以使用同位素来增加每个核心的 提升。 提升\n 增加",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Discord": "Discord",
    'Produce even more matter': '产生更多的物质',
    'Isotope Chance': '同位素几率',
    'Increase the Chance to spawn 2 Mergers': '增加产生2合并的几率',
    'Increase the Chance to get 1 Isotope': '增加得到1个同位素的几率',
    ' Each Quantum Processing Core gives a 25x Boost to Matter produced.': '每个量子处理核心都能将产生的物质提升25倍。',
    'Molecules.': '分子。',
    'Mergers move Faster': '合并加快移动速度',
    'Matter Boost': '物质提升',
    'Head Start': '抢先一步',
    'Get more Quantum Foam.': '获得更多量子泡沫。',
    'Get free Matter on Prestige': '通过声望获得免费的物质',
    'Faster Mergers': '更快的合并',
    'Boost Matter Production even further.': '进一步促进物质生产。',
    'Each Quantum Processing Core gives a 25x Boost to Matter produced.': '每个量子处理核心都能将产生的物质提升25倍。',
    'Each Quantum Foam adds a 1% Boost to Matter produced': '每一个量子泡沫都会给产生的物质增加1%的提升',
    'Molecules every Second': '每秒钟的分子数',
    'Mergers spawn one Tier higher': '合并产生更高一层小球',
    'Mergers spawn faster': '合并产生得更快',
    'The Mergepedia gives you an overview over what Mergers you have seen so far.': '合并图鉴为您提供了迄今为止所见过的合并的概述。',
    'Resource Overview in Canvas': '画布中的资源概述',
    'Quantum Processor': '量子处理器',
    'Buy Max Quantum Foam Upgrades': '购买最多的量子泡沫升级',
    'Upgrade your Molecule Income by spending resources': '通过花费资源来升级您的分子收入',
    'WIPE ABSOLUTELY EVERYTHING': '抹去一切',
    'Increase the Max Amount of Objects': '增加对象的最大数量',
    'Increase the Chance of getting bonus matter on Merge. (2 seconds of income': '增加合并后获得奖金的几率。(2秒的收入',

    //原样
    'Mergepedia': '合并图鉴',
    'Shi': 'Shi',
    'Yet another Merge Game': '合并个球',
    'Zalgo': 'Zalgo',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    ".\n            ": ".\n            ",
    "Unlock for ": "解锁成本 ",
    "Buy for ": "购买成本 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
    "Page": "页",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/,
    /^进行声望可以得到(.+)量子泡沫$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^Prestige to get\n(.+) Quantum Foam$/, '进行声望可以得到 $1 量子泡沫'],
    [/^After a certain point, it is harder and harder to Progress and unlock new Mergers.\n(.+)To solve that Problem, you can Prestige to get Quantum Foam. In that process, you lose\n(.+)all Progress made so far, but in exchange, each Quantum Foam increases you Matter Production by 1\%.\n(.+)About 100-150 Quantum Foam Are recommended for the first Reset.$/, '在某个特定点之后，提升和解锁新的合并将变得越来越困难。要解决这个问题，可以通过声望望得到量子泡沫。在这个过程中，你失去了迄今为止取得的所有游戏进度，但作为交换，每一个量子泡沫增加你的物质产量1\%。首次转生建议在能获得100-150量子泡沫的时候进行。'],
    [/^You can spend Isotopes to increase the Boost of each individual core. The Boost\n(.+)increases by 25 each level.$/, '你可以使用同位素来增加每个核心的提升效果。提升每升一级增加25点。'],
    [/^Your goal in this game is to combine Objects "Mergers" to produce as much\n(.+)Matter as possible. Each Merger produces five times more matter per second than the previous.\n(.+)Matter can be used on Upgrades that can increase the initial tier Mergers spawn on,\n(.+)how fast they spawn and how many can be on the screen at once.$/, '在这款游戏中，你的目标是将物体“合并”，以产生尽可能多的物质。每次合并每秒产生的物质比上一次多五倍。物质可用于升级，该升级可以增加合并的初始层级，产生的速度，一次可以出现在屏幕上的数量。'],
    [/^x(.+) Matter Production$/, 'x$1 物质产量'],
    [/^Mergers reached in the current\n(.+)Prestige run are highlighted.$/, '当前声望运行中达成的合并将突出显示。'],
    [/^Upgrade Cores by spending Isotopes to increase their boost.\n(.+)You have$/, '通过消耗同位素来增加核心以增强其能量。提升'],
    [/^When two Mergers collide, there's a chance that they create an Isotope.\n(.+)These can be used to Upgrade the Chance that you get Isotopes and that 2 Mergers\n(.+)spawn at once. You can also use them to upgrade Quantum Processor Cores.$/, '当两个合并发生碰撞时，它们可能会创建一个同位素，这可以用来升级您获得同位素且同时产生两个合并的机会。 您也可以使用它们来升级量子处理器核心。'],
    [/^The Quantum Processor is a powerful technology that can increase matter production dramatically.\n(.+)Each Processor Core multiplies matter production by 25.$/, '量子处理器是一项强大的技术，可以显着提高物质产量。每个处理器核心将物质产量提高25倍。'],
    [/^Quantum Foam can be used on Prestige Upgrades. These can further boost\n(.+)your matter production, make Mergers move faster, increase the Quantum Foam yield\n(.+)or give you a headstart.$/, '量子泡沫可用于声望升级。 这些可以进一步提高您的物质生产能力，使合并速度更快，增加量子泡沫的产量或为您提供领先优势。'],
    [/^Molecules are a resource than can be used on Upgrades that give general Boosts, for example\n(.+)boosting Isotopes. Their production is determined based on the amount of merges since the last prestige\n(.+)and muliplieres that can be invested in by spending different resources.$/, '分子是一种资源，不能用于提供一般增强作用（例如增强同位素）的升级中。 它们的产量是根据自上次声望以来的合并数量和可以通过花费不同资源进行投资的多义性来确定的。'],
    [/^Energy Cores are another way to boost your matter production. After buying them with\n(.+)Quantum Foam, you can level them up by selecting them. They gain 1 xp per merge. When they Level up,\n(.+)their boost to matter production rises.$/, '能量核心是提高物质生产能力的另一种方法。 在使用量子泡沫购买它们之后，您可以通过选择它们来升级它们。 他们每次合并获得 1 经验。 当他们升级时，他们对物质生产的推动作用就会增强。'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+) kiloBytes$/, '$1 Kb'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);