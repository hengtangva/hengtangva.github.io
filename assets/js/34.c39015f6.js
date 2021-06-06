(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{367:function(s,t,a){s.exports=a.p+"assets/img/varAndLet.71a54746.jpg"},484:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"var-const-let"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#var-const-let"}},[s._v("#")]),s._v(" var const let")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("觉得变量不会被改变，就用 const"),n("br"),s._v("\n否则就用 let"),n("br"),s._v("\n反正，别用 var")])]),s._v(" "),n("h2",{attrs:{id:"三者区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三者区别"}},[s._v("#")]),s._v(" 三者区别")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("变量提升")])])]),s._v(" "),n("p",[s._v("var 会进行变量提升，let 和 const 不会进行提升")]),s._v(" "),n("p",[s._v("先看 var")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// undefined")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Matt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("实际上，用 var 声明变量时，会将声明放到当前作用域最前端(函数作用域)"),n("br"),s._v("\n等价于：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// undefined")]),s._v("\nname "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Matt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("再来看 let")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  ReferenceError: age 没有定义")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" age "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Matt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("也就是说，let 中的代码就是按照顺序执行的")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("暂存死区")]),n("br"),s._v("\n后面会提到暂时性死区"),n("br"),s._v("\n因为var会进行变量提升，所以可以在声明之前访问，不会形成暂存死区。"),n("br"),s._v("\nlet 和const 不会进行变量提升，在声明之前不能使用，形成暂存死区")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("重复声明")])])])]),s._v(" "),n("p",[s._v("var 可以进行重复声明，但是 let 和 const 不能进行重复声明")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("块作用域")])])]),s._v(" "),n("p",[s._v("var 不会形成块作用域（函数作用域）， let 和 const 可以形成块作用域 ( { } 内为作用域 )")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("全局声明")])])]),s._v(" "),n("p",[s._v("var 在全局中声明对象会成为 window 的属性，而 let 不会")]),s._v(" "),n("p",[n("img",{attrs:{src:a(367),alt:""}})]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("重新赋值")])])]),s._v(" "),n("p",[s._v("var和let声明的变量可以重新赋值，const不可以。"),n("br"),s._v("\n如果const 声明的变量存储的是引用地址, 是可以修改这个引用对应的对象的值的，但是这个变量不能被赋予其他值")]),s._v(" "),n("p",[s._v("然而，实际上，我们不是仅仅想知道区别就行了，如果是的话，工作中不用 var 一切就ok了，我们想了解背后一些底层的东西")]),s._v(" "),n("h2",{attrs:{id:"变量的声明周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量的声明周期"}},[s._v("#")]),s._v(" 变量的声明周期")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://dmitripavlutin.com/static/ca6269b32115dd32ebe631dd8293298a/0ffe4/1-1.webp",alt:""}})]),s._v(" "),n("p",[s._v("我们看到，我们所谓的声明一个变量 let a = 1;")]),s._v(" "),n("p",[s._v("其实，引擎做了三件事，")]),s._v(" "),n("ol",[n("li",[s._v("创建，这里用 declare ，但为了不与我们平常所说的声明混淆，我们用创建这个词。")])]),s._v(" "),n("p",[s._v("用来在当前作用域下 注册变量，告诉引擎有这个东西")]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[s._v("初始化，分配内存，并与我们注册的名字绑定。默认内存中是 undefined")])]),s._v(" "),n("li",[n("p",[s._v("赋值，将其初始值写到内存。没有初始值的话，就采用默认")])])]),s._v(" "),n("h3",{attrs:{id:"var-声明的变量声明周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#var-声明的变量声明周期"}},[s._v("#")]),s._v(" var 声明的变量声明周期")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/18/16fb83f65e4c4f58?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),s._v(" "),n("p",[s._v("也就是说，var 定义的变量，创建和初始化是一起做的，且都放到作用域最前面，即所谓提升")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1，创建一个变量 a")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2, 为其初始化 其值为 undefined")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3, 为其赋值，其值为 1")]),s._v("\na "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"let-声明的变量声明周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#let-声明的变量声明周期"}},[s._v("#")]),s._v(" let 声明的变量声明周期")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/18/16fb871fe772986e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),s._v(" "),n("p",[s._v("我们可以看到，let 也有会有提升，只不过仅提升创建这一过程罢了")]),s._v(" "),n("p",[s._v("我们也可以看到，灰色地带的 temporal dead zone， 即我们的暂时性死区")]),s._v(" "),n("p",[s._v("在 let variable 之前，variable 这个词是不能访问的，因为内存还没分配，访问就报错")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1, 创建 i，注册")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此处为暂时性死区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2, 初始化 i ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3, 为其赋值 1")]),s._v("\ni "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("再来看一个例子，证明，let 确实有提升的地方")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" global "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hi'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("global"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ReferenceError: Cannot access 'global' before initialization")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" global"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("如下报错，假如啥都没提升，那么我们按照顺序执行代码，打印 global 变量，是可以访问外层的变量的")]),s._v(" "),n("p",[s._v("然而，事实是，我们访问不了，做鬼的是 后面的 let global，它将它的创建过程提升了")]),s._v(" "),n("p",[s._v("从该代码块的开始，到 let global; 这条代码，global 这个词不能使用了")]),s._v(" "),n("p",[s._v("因为它注册了这个单词，不让访问外面的同名变量，还不分配空间让我们用里面的它")]),s._v(" "),n("p",[s._v("我们也称这块叫做，global 的暂时性死区，")]),s._v(" "),n("hr"),s._v(" "),n("p",[n("strong",[s._v("如果第一步创建就失败会怎么样？")])]),s._v(" "),n("p",[s._v("来看图片：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-a0d8881872aabf1fd086b630ff17d0f4_1440w.png",alt:""}})]),s._v(" "),n("p",[s._v("看着就很焦虑")]),s._v(" "),n("p",[s._v("如果 let x 的初始化过程失败了，那么")]),s._v(" "),n("ol",[n("li",[s._v("x 变量就将永远处于 created 状态。")]),s._v(" "),n("li",[s._v("你无法再次对 x 进行初始化（初始化只有一次机会，而那次机会你失败了）。")]),s._v(" "),n("li",[s._v("由于 x 无法被初始化，所以 x 永远处在暂时死区（也就是盗梦空间里的 limbo）！")])]),s._v(" "),n("h3",{attrs:{id:"const"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#const"}},[s._v("#")]),s._v(" const")]),s._v(" "),n("p",[s._v("const 只有创建，初始化两个过程，没有赋值过程")]),s._v(" "),n("h2",{attrs:{id:"function-foo-的声明提升"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-foo-的声明提升"}},[s._v("#")]),s._v(" function foo(){} 的声明提升")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/18/16fb854c650e6399?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),s._v(" "),n("p",[s._v("可以看到，在提升的部分，function 的创建，初始化，赋值，全部都做完了")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("思考，问下面两个代码分别输出什么：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("实际上，始终输出函数，因为，它提前给 foo 赋值了，内存中关于 foo 就是一个函数")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("参考：https://zhuanlan.zhihu.com/p/28140450，\nhttps://juejin.cn/post/6844904050614353928")])])}),[],!1,null,null,null);t.default=e.exports}}]);