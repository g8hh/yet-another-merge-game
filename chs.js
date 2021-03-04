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
    'Energy Cores': '能源核心',
    'Dark': '黑暗',
    'Clock': '时钟',
    'Click to Hide / Show': '点击隐藏/显示',
    'Custom Notation': '自定义符号',
    'Cancer': '癌症',
    'ALL': '全部',
    'Apply': '同意',
    'Better Mergers': '更好的合并',
    'Add Core': '添加核心',
    'Number Format': '数字格式',
    'Omega': '欧米伽',
    'Prime': '主要',
    'Prestige Upgrades': '声望升级',
    'Reach': '达到',
    'Roman': '罗马符号',
    'Settings': '设置',
    'Standard': '常规',
    'Scientific': '科学计数法',
    'more Quantum Foam!': '更多的量子泡沫!',
    'Molecules': '分子',
    'to get': '去得到',
    'Prestige': '声望',
    'Quantum Foam Boost': '量子泡沫提升',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    ' Each Quantum Processing Core gives a 25x Boost to Matter produced.': '每个量子处理核心都能将产生的物质提升25倍。',
    'Molecules.': '分子。',
    'Mergers move Faster': '合并加快步伐',
    'Matter Boost': '物质提升',
    'Head Start': '抢先一步',
    'Get more Quantum Foam.': '获得更多量子泡沫。',
    'Get free Matter on Prestige': '通过声望获得免费的物质',
    'Faster Mergers': '更快的合并',
    'Boost Matter Production even further.': '进一步促进物质生产。',
    'Each Quantum Processing Core gives a 25x Boost to Matter produced.': '每个量子处理核心都能将产生的物质提升25倍。',
    'Each Quantum Foam adds a 1% Boost to Matter produced': '每一个量子泡沫都会给产生的物质增加1%的提升',
    'Molecules every Second': '每秒钟的分子数',
    'Mergers spawn one Tier higher': '合并产生更高的一层',
    'Mergers spawn faster': '合并产生得更快',
    'The Mergepedia gives you an overview over what Mergers you have seen so far.': 'Mergepedia为您提供了迄今为止所见过的合并的概述。',
    'Resource Overview in Canvas': '画布中的资源概述',
    'Quantum Processor': '量子处理器',
    'Buy Max Quantum Foam Upgrades': '购买最多的量子泡沫升级',
    'Upgrade your Molecule Income by spending resources': '通过花费资源来升级您的分子收入',
    'WIPE ABSOLUTELY EVERYTHING': '抹去一切',
    'Increase the Max Amount of Objects': '增加对象的最大数量',
    'Increase the Chance of getting bonus matter on Merge. (2 seconds of income': '增加合并后获得奖金的几率。(2秒的收入',

    //原样
    'Mergepedia': 'Mergepedia',
    'Yet another Merge Game': '合并个球',
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
    "": "",
    "": "",
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
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
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
    [/^requires ([\d\.]+) more research points$/, '进行声望可以得到 $1 量子泡沫'],
    [/^Prestige to get\n(.+) Quantum Foam$/, '$1 皇家点数'],
    [/^After a certain point, it is harder and harder to Progress and unlock new Mergers.\n(.+)To solve that Problem, you can Prestige to get Quantum Foam. In that process, you lose\n(.+)all Progress made so far, but in exchange, each Quantum Foam increases you Matter Production by 1\%.\n(.+)About 100-150 Quantum Foam Are recommended for the first Reset.$/, '在某个特定点之后，提升和解锁新的合并将变得越来越困难。要解决这个问题，可以通过声望望得到量子泡沫。在这个过程中，你失去了迄今为止取得的所有游戏进度，但作为交换，每一个量子泡沫增加你的物质产量1\%。首次转生建议在能获得100-150量子泡沫的时候进行。'],
    [/^You can spend Isotopes to increase the Boost of each individual core. The Boost\n(.+)increases by 25 each level.$/, '你可以使用同位素来增加每个核心的提升效果。提升每升一级增加25点。'],
    [/^Your goal in this game is to combine Objects "Mergers" to produce as much\n(.+)Matter as possible. Each Merger produces five times more matter per second than the previous.\n(.+)Matter can be used on Upgrades that can increase the initial tier Mergers spawn on,\n(.+)how fast they spawn and how many can be on the screen at once.$/, '在这款游戏中，你的目标是将物体“合并”，以产生尽可能多的物质。每次合并每秒产生的物质比上一次多五倍。物质可用于升级，该升级可以增加合并的初始层级，产生的速度，一次可以出现在屏幕上的数量。'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);