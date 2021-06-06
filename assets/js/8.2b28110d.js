(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{432:function(v,_,t){v.exports=t.p+"assets/img/tcpqueue.1c7e69df.jpg"},433:function(v,_,t){v.exports=t.p+"assets/img/tcpconnect.d4e5840b.jpg"},434:function(v,_,t){v.exports=t.p+"assets/img/tcpflow.fe54bdce.jpg"},435:function(v,_,t){v.exports=t.p+"assets/img/tcpcrowd.95f450ba.jpg"},607:function(v,_,t){"use strict";t.r(_);var p=t(42),a=Object(p.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("h1",{attrs:{id:"tcp-简介"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#tcp-简介"}},[v._v("#")]),v._v(" TCP 简介")]),v._v(" "),p("h2",{attrs:{id:"前言"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),p("p",[v._v("tcp 里面的东西还是蛮多的，这里先做一个大体的介绍。")]),v._v(" "),p("p",[v._v("没一个小部分，还是可以拿出来加深理解总结的。")]),v._v(" "),p("h2",{attrs:{id:"序列号与确认应答"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#序列号与确认应答"}},[v._v("#")]),v._v(" 序列号与确认应答")]),v._v(" "),p("p",[v._v("首先， tcp 是要在不可靠的 ip 协议上提供可靠传输的。")]),v._v(" "),p("p",[v._v("因此，tcp 主要就是针对如何可靠传输，以及更高效的可靠传输做了一些实现。")]),v._v(" "),p("p",[v._v("序列号就是其一。")]),v._v(" "),p("p",[v._v("可以想象一下，你对另一个人说话，如果另一个人始终默不作声，你怎么知道他有没有听到你说的话呢？")]),v._v(" "),p("p",[v._v("很容易想打，如果对方能回一句 嗯，你大概就知道他听到了，至于听没听进去，那就不关我们的事了。")]),v._v(" "),p("p",[v._v("确认应答就是这个 “嗯”")]),v._v(" "),p("p",[v._v("确认应答在 tcp 首部里有一个字段 ACK .即 acknowledge")]),v._v(" "),p("hr"),v._v(" "),p("p",[v._v("如果在一定时间内，发送方没有拿到这个 ACK, 就会认为。包已经丢了，至于是自己的包丢了，还是应答的包丢了，它也不清楚。")]),v._v(" "),p("p",[v._v("总之，肯定是有包丢了，这时候，发送方只有重发一份了。")]),v._v(" "),p("p",[v._v("但是再想一下，一定是包丢了吗，可不可能是网速有点慢呢?")]),v._v(" "),p("p",[v._v("如果是这种情况的话，发送方就会一直发送重复的包。")]),v._v(" "),p("p",[v._v("这样对接收方就是一场灾难了，它会接收好多相同的数据包。所以，它得识别哪些是重复的包，并把它们丢掉。")]),v._v(" "),p("p",[v._v("于是我们的序列号就起作用了。")]),v._v(" "),p("p",[v._v("发送方在发送包的时候，在 首部 加上一个序列号，和数据的长度，告诉发送方，这个包是哪块数据。")]),v._v(" "),p("p",[v._v("接收方就可以在接受到之后，把序列号加数据长度放在首部并 + 1，告诉发送方，前面的数据已经接受到了，请发送下一部分的数据。")]),v._v(" "),p("p",[p("img",{attrs:{src:t(432),alt:""}})]),v._v(" "),p("hr"),v._v(" "),p("p",[v._v("上面是 tcp 为了保证可靠传输做的一个方面，我们继续看")]),v._v(" "),p("h2",{attrs:{id:"重发超时如何确定"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#重发超时如何确定"}},[v._v("#")]),v._v(" 重发超时如何确定")]),v._v(" "),p("p",[v._v("上面遗留了一个问题，就是一定时间没收到应答，发送方就会重传。")]),v._v(" "),p("p",[v._v("这个一定时间是多少呢？")]),v._v(" "),p("p",[v._v("最好的办法当然是，这个时间内，应答信号刚好能到发送方。")]),v._v(" "),p("p",[v._v("当然，这只是理想情况，由于网络的不稳定，应答信号的到达时间是不同的。")]),v._v(" "),p("p",[v._v("我们只能折中一下，尽量去找一个最小的时间。为了能找的更准确，我们这个时间最好是能随网速改边而改变。")]),v._v(" "),p("p",[v._v("所以，在每次发包时，都会计算往返时间及其偏差，将这两个时间相加，重发超时的时间比这个大一点即可。")]),v._v(" "),p("p",[v._v("在 unxi 和 windows 中，重传都是以 0.5 s 为单位进行控制的。因此重传时间的是它的整数倍。")]),v._v(" "),p("p",[v._v("然后就是若发生了一次重传，发生会认为网上较慢，会对重传时间进行加倍。也就是 "),p("strong",[v._v("超时加倍")])]),v._v(" "),p("p",[v._v("最后，这个加倍也不可能无限制的，达到一定重传此时后，如果仍然没有应答，会判断网络发生异常，强制关闭连接。")]),v._v(" "),p("h2",{attrs:{id:"连接管理"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#连接管理"}},[v._v("#")]),v._v(" 连接管理")]),v._v(" "),p("p",[v._v("稳定传输还有一个重要的点，就是得先知道对方是能和自己交流的。比如打电话的时候，经常会发生如下对话。")]),v._v(" "),p("p",[v._v("A: 我是 vajeanth， 能听见我说话吗？")]),v._v(" "),p("p",[v._v("B：valjeanth， 你好啊，我是 sofia，我听的见你说话，你能听见我说话吗？")]),v._v(" "),p("p",[v._v("A: 嗯，我能听的见你说话。")]),v._v(" "),p("p",[v._v("....  开始通话内容。")]),v._v(" "),p("p",[v._v("tcp 的连接也是如此，要确认双方都能通信，就少不了上面三步的验证。")]),v._v(" "),p("p",[v._v("tcp 里叫三次握手。具体流程安照上面的打电话走一遍")]),v._v(" "),p("ol",[p("li",[p("p",[v._v("客户端发送一个 tcp 包，SYN = 1, 请求和服务器连接。")])]),v._v(" "),p("li",[p("p",[v._v("服务器收到后，返回一个 tcp 包，ACK = 1,(针对客户端 SYN 应答)， SYN = 1, 请求和客户端连接。")])]),v._v(" "),p("li",[p("p",[v._v("客户端收到后，发送一个 tcp 包 ACK = 1（针对服务器 SYN 应答）")])])]),v._v(" "),p("p",[v._v("连接成功之后就可以互相通信了。")]),v._v(" "),p("hr"),v._v(" "),p("p",[v._v("当通信完成后，tcp 还要关闭连接的。叫 tcp 四次挥手。")]),v._v(" "),p("ol",[p("li",[p("p",[v._v("客户端发送 tcp 包，FIN = 1 ,告诉服务器，我没有数据要发了，请求断开连接。")])]),v._v(" "),p("li",[p("p",[v._v("服务收到后，发送 ACK, 告诉客户端知道了。不再接受客户端数据")])])]),v._v(" "),p("p",[v._v("此时，客户端还是可以接受数据的")]),v._v(" "),p("p",[v._v("如果，服务器也没数据发送了，")]),v._v(" "),p("ol",{attrs:{start:"3"}},[p("li",[p("p",[v._v("服务器发送 tcp 包，FIN = 1, 告诉客户端，我也没数据要发了，请求断开连接。")])]),v._v(" "),p("li",[p("p",[v._v("客户端收到后，发送 ACK = 1 , 告诉服务器，我知道了，不再接受服务器数据")])])]),v._v(" "),p("p",[v._v("至此，tcp 连接就断开了。")]),v._v(" "),p("hr"),v._v(" "),p("p",[p("img",{attrs:{src:t(433),alt:""}})]),v._v(" "),p("p",[v._v("总结一下，一个连接的建立与断开至少要来回发送 7 个包。")]),v._v(" "),p("h2",{attrs:{id:"tcp-以段为单位发送数据"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#tcp-以段为单位发送数据"}},[v._v("#")]),v._v(" TCP 以段为单位发送数据")]),v._v(" "),p("p",[v._v("这里讨论一下，tcp 包，一个包发送多少数据合适。")]),v._v(" "),p("p",[v._v("最理想的情况是，这个数据的长度刚好不会被 ip 分片处理。")]),v._v(" "),p("p",[v._v("tcp 包传输数据的最大长度我们叫 MSS (maximum segment size)。")]),v._v(" "),p("p",[v._v("这个 MSS 会在握手阶段计算出，双方会发送自己的接口能适应的 MSS 大小，然后选择较小的那个作为 MSS.")]),v._v(" "),p("h2",{attrs:{id:"窗口提供速度"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#窗口提供速度"}},[v._v("#")]),v._v(" 窗口提供速度")]),v._v(" "),p("p",[v._v("tcp 以段为单位，每发一个段进行一确认应答处理有一个缺陷。")]),v._v(" "),p("p",[v._v("超时等待这段时间啥也没干。")]),v._v(" "),p("p",[v._v("这样通信的效率是很低的。")]),v._v(" "),p("p",[v._v("因此，tcp 采用窗口传输来提升速率，就是一次发送多个包，这个发送送包的大小就是窗口的大小。       。")]),v._v(" "),p("p",[v._v("当然，带来的问题是数据顺序的乱序。因为网络是不稳定的，很可能后发的包先到了")]),v._v(" "),p("p",[v._v("解决办法，是一种叫做 "),p("strong",[v._v("滑动窗口")]),v._v(" 的机制，会单独拿出来做详细介绍。这里先带过。")]),v._v(" "),p("h2",{attrs:{id:"流控制"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#流控制"}},[v._v("#")]),v._v(" 流控制")]),v._v(" "),p("p",[v._v("上面说到，用窗口可以大大提高传输效率，那么窗口设置为多大比较合适呢？")]),v._v(" "),p("p",[v._v("这个就要考虑接收端了。如果接受端的缓冲区满了，还没来得及被上层取出来用。")]),v._v(" "),p("p",[v._v("那么即使你发送再多数据，接收方也会因为接收不了选择丢弃，于是又会引发重传。")]),v._v(" "),p("p",[v._v("所以，最好的是，发接受端能通知一下，你缓冲区还能接受几段数据。我下次就把窗口设为这个，一并发给你")]),v._v(" "),p("p",[v._v("TCP 首部中，专门有一个 16位字段 来通知窗口大小。")]),v._v(" "),p("p",[v._v("当接受端发送的报文显示窗口大小是 0 时，发送方会等待一个超时的时间。")]),v._v(" "),p("p",[v._v("如果过了该时间，接收端还是没告诉自己接受的窗口大小，发送端会发送一个字节数据的包，叫做窗口探测。")]),v._v(" "),p("p",[v._v("如果窗口还是 0 就会再等待一个超时，一旦接收端缓存区更新，就会发送窗口更新通知，发送方继续发送数据。")]),v._v(" "),p("p",[p("img",{attrs:{src:t(434),alt:""}})]),v._v(" "),p("h2",{attrs:{id:"拥塞控制"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制"}},[v._v("#")]),v._v(" 拥塞控制")]),v._v(" "),p("p",[v._v("现在，我们有了窗口来加速数据的传输。")]),v._v(" "),p("p",[v._v("但是，如果一开始就发送大量的数据包会引发一些其他问题。")]),v._v(" "),p("p",[v._v("一般来说，计算机网络都处于一个共享的环境中，因此也有可能会因为其他主机间的通信使得网络拥堵。")]),v._v(" "),p("p",[v._v("在网络拥堵的时候，如果突然发送一个较大量的数据，极有可能导致整个网络瘫痪。")]),v._v(" "),p("hr"),v._v(" "),p("p",[v._v("所以，TCP 采取了一种慢启动的算法得到数值，对发送数据量进行控制。")]),v._v(" "),p("p",[v._v("具体流程大致如下：")]),v._v(" "),p("ol",[p("li",[p("p",[v._v("首先，定义一个拥塞窗口，开始的时候，这个窗口只有一个数据段(或者稍微大些)，开始发送的窗口就是这个拥塞窗口")])]),v._v(" "),p("li",[p("p",[v._v("发送方每收到一个应答，拥塞窗口就会+1，也就是说，拥塞窗口会随之发送指数增长，1 -> 2 -> 4 -> 8")])]),v._v(" "),p("li",[p("p",[v._v("发送数据时，会将拥塞窗口和接收方通知的窗口进行比较，选择较小的作为发送窗口。")])]),v._v(" "),p("li",[p("p",[v._v("如果发送超时重传，说明网络开始拥堵，拥塞窗口重新置 1 ，再发送。")])]),v._v(" "),p("li",[p("p",[v._v("为了避免拥塞窗口增长太快，会设置一个阈值，一旦到达这个阈值，增长数目 = 1个数据段字节数^2/拥塞窗口字节数")])]),v._v(" "),p("li",[p("p",[v._v("5 中超过阈值的增长是线性的。且刚开始的时候是没设置阈值的，发生重传后，阈值为当前拥塞窗口一半。")])]),v._v(" "),p("li",[p("p",[v._v("如果收到重复确认应答造成的重发，此时网络拥堵较为轻，那么阈值设为其一半，窗口大小设为阈值+3")])])]),v._v(" "),p("hr"),v._v(" "),p("p",[p("img",{attrs:{src:t(435),alt:""}})]),v._v(" "),p("p",[v._v("经过拥塞机制的优化，TCP 会在带宽好的时候，逐步占据带宽，网络拥堵的时候又及时放弃带宽。")])])}),[],!1,null,null,null);_.default=a.exports}}]);