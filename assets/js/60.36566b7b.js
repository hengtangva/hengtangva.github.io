(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{473:function(s,t,n){"use strict";n.r(t);var a=n(42),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"new-操作符到底干了什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-操作符到底干了什么"}},[s._v("#")]),s._v(" new 操作符到底干了什么")]),s._v(" "),n("p",[s._v("js 高级教程第四版 p221")]),s._v(" "),n("p",[s._v("使用 new 操作符调用构造函数，会执行如下操作：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("在内存中创建一个新对象。")])]),s._v(" "),n("li",[n("p",[s._v("将这个对象的 "),n("strong",[s._v("proto")]),s._v(" 指针指向构造函数的 原型(prototype)。")])]),s._v(" "),n("li",[n("p",[s._v("构造函数内部的 this 被赋值给这个对象 （即，this 指向新对象）。")])]),s._v(" "),n("li",[n("p",[s._v("执行构造函数里面的代码。（给新对象增添属性）。")])]),s._v(" "),n("li",[n("p",[s._v("如果构造函数返回空对象，则返回该对象，否则返回返回新创建的对象。")])])]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("要理解上述操作，我们必须了解原型和原型链，还有构造函数。这些在下一讲中会讲到。")]),s._v(" "),n("p",[s._v("建议先看下一讲，再回来理解上述过程。")]),s._v(" "),n("p",[s._v("自己实现 new 操作符的功能")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("myNew")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("constructors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1, 创建一个空对象")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2, 将其 __proto__ 属性指向构造函数原型")]),s._v("\n    obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" constructors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3, 改变 this 指针，执行构造函数")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" args "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取构造参数,由于是类数组，所以调用 Array 上的slice方法")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4, 若构造函数没有返回值，则返回实例，否则返回返回值")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("hr"),s._v(" "),n("p",[s._v("其实，手写还是比较简单的，只要知道 new 干了什么一一实现就 ok 了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);