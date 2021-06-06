(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{587:function(s,t,n){"use strict";n.r(t);var a=n(42),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"精灵图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#精灵图"}},[s._v("#")]),s._v(" 精灵图")]),s._v(" "),n("p",[n("strong",[s._v("写在前面：")])]),s._v(" "),n("p",[s._v("之前一直跟着做一个 h5 小游戏，对着例子敲完，发现需要用的动画图片都是取自一张很大的图片，这张大图由许多个小图构成，当时很纳闷，干嘛弄的这么复杂，对此不屑一顾，也没有深究。这次又碰到了，把很多图标放到一个大图然后去切割。随切随用。感觉这么做肯定是有原因的。于是，这次去仔细搜了一下。发现把许多图标放到一张图片，目的在于减少网络请求的次数，这才如梦初醒，原来还是在空间换时间。")]),s._v(" "),n("p",[s._v("对于如何从一个大图切下小图标，这里总结一下如何实现，")]),s._v(" "),n("p",[n("strong",[s._v("如图：这是一张众多扑克图片构成的大图，我将从其中切下自己想要的扑克 红桃2")]),s._v(" "),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210113000746198.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTQ2Njc3Ng==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),n("p",[n("strong",[s._v("一，获取要切的图标在大图中的位置")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("每张扑克的大小是 height: 120px  width:80px\n坐标原点是左上角，\n因此，红桃2 左上角的定位就是 80px, 120px\n")])])]),n("p",[n("strong",[s._v("二，添加两个类，一个是基本的扑克，另一个是特定需要的扑克，代码如下")])]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("<style>\n    .icon")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token url"}},[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string url"}},[s._v("'./images/deck.png'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 80px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 120px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".icon2")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -80px -120px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n</style>\n<body>\n    <div class="),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icon icon2'")]),s._v(">\n    </div>\n</body>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("在 icon 类中，定义了扑克所占位置的大小，以及所引用的图片地址\n在 icon2 类中，定义了切割的位置，注意这里是偏移，用 负值。")]),s._v(" "),n("p",[s._v("最后，实现效果如下：\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210113001812669.JPG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTQ2Njc3Ng==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);