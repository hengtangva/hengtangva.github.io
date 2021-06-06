(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{425:function(v,_,s){v.exports=s.p+"assets/img/certificate.54ee4ae0.jpg"},600:function(v,_,s){"use strict";s.r(_);var t=s(42),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"ssl-加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssl-加密"}},[v._v("#")]),v._v(" SSL 加密")]),v._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),t("p",[v._v("了解 SSL 加密之前，还得说明几个概念，不然后面就很不好理解。")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("秘钥：秘钥是加密或者解密算法所要传递的参数，也就是说，给了这个正确参数，再给上密文，就能输出明文。反过来也是如此。自己的理解类似于随机数的种子，如果没有种子的话，随机数就总是一样的了。")])]),v._v(" "),t("li",[t("p",[v._v("对称加密： 就是传递双方都用一个秘钥进行加密与解密")])]),v._v(" "),t("li",[t("p",[v._v("非对称加密 RSA： 双方使用公钥和私钥进行加密和解密，当 a 想和 b 发送信息时，它可以用 b 的公钥进行加密，b 得到密文之后，用自己的私钥进行解密，得到信息。简单来说，公钥和私钥是一对，公钥加密的内容只有私钥能解密，私钥加密的内容只有对应的公钥能解密。")])]),v._v(" "),t("li",[t("p",[v._v("私钥：非对称加密的其中一个参数，一般自己留着，不能让其他人知道。")])]),v._v(" "),t("li",[t("p",[v._v("公钥： 非对称加密的另一把钥匙，一般会把它给想要和自己通信的一方，让它用自己的公钥加密信息。")])]),v._v(" "),t("li",[t("p",[v._v("SSL/TLS:  之前以为 TLS 又是一种协议，实际上，这只是 SSL 协议的 3.0 版本")])])]),v._v(" "),t("h2",{attrs:{id:"ssl-的加密方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssl-的加密方法"}},[v._v("#")]),v._v(" SSL 的加密方法")]),v._v(" "),t("p",[v._v("ssl 加密是结合了对称加密和非对称加密的。")]),v._v(" "),t("p",[v._v("原因在于：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("对于对称加密，效率虽然高，但是，你的秘钥还是得通过网络连接传的啊，如果秘钥被人截取到了，后面的内容就不是加密的了。")])]),v._v(" "),t("li",[t("p",[v._v("对于非对称加密，虽然加密措施比较好，但是非常的耗时间去计算。而网页最重要的性能就是加载速度了。")])])]),v._v(" "),t("p",[v._v("所以，ssl 才用两种结合的方法。")]),v._v(" "),t("p",[v._v("ssl 加密过程会发生 5 次握手。如下图：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014092003.png",alt:""}})]),v._v(" "),t("p",[v._v("总结起来就是：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("客户端给出 通信的协议版本号，自己的加密方法，一个生成的随机数(Client Random)")])]),v._v(" "),t("li",[t("p",[v._v("服务端确认双方的加密方法，给出自己的数字证书(后面会说到)，一个随机生成的随机数(Server Random)")])]),v._v(" "),t("li",[t("p",[v._v("客户端确认数字证书的有效性，再生成一个随机数 (Premaster secret),并使用证书中的公钥对信息对 Premaster secret 进行加密")])]),v._v(" "),t("li",[t("p",[v._v("服务端用自己的私钥对发送的随机数进行解密，得到 Premaster secret")])]),v._v(" "),t("li",[t("p",[v._v("至此，双方都有了三个随机数，并约定加密方法，用这三个随机数生成一个秘钥--对话秘钥(session key),之后的通信都用这个session key 进行加密通信信息。")])])]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("简而言之，就是先用非对称加密，得到一个 session key，之后，用这个 session key 对传输信息进行对称加密。")]),v._v(" "),t("p",[v._v("这样，别人最多只能截取你两个随机数，因为第三个 premaster secret 是通过非对称加密发送的。")]),v._v(" "),t("p",[v._v("所以，也就得不到传输所用的 session key")]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"证书的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#证书的问题"}},[v._v("#")]),v._v(" 证书的问题")]),v._v(" "),t("p",[v._v("证书的出现，主要是为了解决这样一个问题，通信的对方给我的公钥到底是不是别人伪造的。")]),v._v(" "),t("p",[v._v("一旦别人劫持了你的通信请求，给你返回一个它自己的公钥，你之后加密 premaster secret 其实就是给了攻击人了，之后你的通信一直就是在和攻击人通信。")]),v._v(" "),t("p",[v._v("所以，为了确认你想通信的对方给你公钥是你想要通信的那一方，对方就得证明它的身份，这也就是证书的由来。")]),v._v(" "),t("p",[v._v("为了能增加可信度，证书一般都是由值得信任的权威机构颁发。颁发证书的机构叫 CA (Certificate Authority)")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("首先，证书是一个文件，里面包含了关于网站的信息：网站的域名，证书有效时间，签发机构等等。")]),v._v(" "),t("p",[v._v("文件的格式叫做 X.509, 储存上分两种，一种是 DER 是二进制的，另一种是 PEM 是基于 base64的")]),v._v(" "),t("p",[v._v("这些看看就行了，下面的东西就得理解了。")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("证书文件主要由两部分组成：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("站点的信息，内容包括其公钥等，经过 hash算法生成 一个信息摘要，只要稍微改动摘要就会巨变")])]),v._v(" "),t("li",[t("p",[v._v("数字签名，由上述信息摘要，经过 CA 的私钥得到的数字签名")])])]),v._v(" "),t("p",[v._v("如下图：")]),v._v(" "),t("p",[t("img",{attrs:{src:s(425),alt:""}})]),v._v(" "),t("p",[v._v("客户端得到证书后，会用 CA 的公钥解密数字签名，看看是否和信息摘要一样，一样的话就说明通信时安全的。")]),v._v(" "),t("p",[v._v("okk ，来解释上面的一些做法。")]),v._v(" "),t("p",[v._v("我们采用这样复杂的操作，是为了避免证书被人伪造，或者修改。")]),v._v(" "),t("p",[v._v("因为你发来的证书还要经过不安全的网络传输的。")]),v._v(" "),t("p",[v._v("要想发来的证书有效，CA 用自己的私钥进行加密，生成一个难以伪造的数字签名。")]),v._v(" "),t("p",[v._v("而接受端如何解开这个数字签名呢？，当然是用 CA 的公钥，很方便的是，CA 的公钥是内置在操作系统中的。")]),v._v(" "),t("p",[v._v("也就是说我们每个人的电脑里都内置了 CA 的公钥，可以解开这个数字证书。")]),v._v(" "),t("p",[v._v("如此，就可以做到比较安全的通信了。")])])}),[],!1,null,null,null);_.default=e.exports}}]);