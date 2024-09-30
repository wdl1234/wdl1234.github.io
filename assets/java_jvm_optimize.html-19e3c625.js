import{_ as i,p as l,q as d,R as n,t as e,a1 as s}from"./framework-96b046e1.js";const r={},t=n("h1",{id:"jvm调优",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jvm调优","aria-hidden":"true"},"#"),e(" JVM调优")],-1),c=n("h2",{id:"jdk工具包",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jdk工具包","aria-hidden":"true"},"#"),e(" JDK工具包")],-1),p=["src"],u=s(`<h3 id="jps" tabindex="-1"><a class="header-anchor" href="#jps" aria-hidden="true">#</a> jps</h3><p>查看Java进程 ，相当于Linux下的ps命令，只不过它只列出Java进程。</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>jps ：列出Java程序进程ID和Main函数名称
jps -q ：只输出进程ID
jps -m ：输出传递给Java进程（主函数）的参数
jps -l ：输出主函数的完整路径
jps -v ：显示传递给Java虚拟的参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jstat" tabindex="-1"><a class="header-anchor" href="#jstat" aria-hidden="true">#</a> jstat</h3><p>jstat可以查看Java程序运行时相关信息，可以通过它查看运行时堆信息的相关情况。</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>jstat -&lt;options&gt; [-t] [-h&lt;lines&gt;] &lt;vmid&gt; [&lt;interval&gt; [&lt;count&gt;]]

options：由以下值构成
-class：显示ClassLoader的相关信息
-compiler：显示JIT编译的相关信息
-gc：显示与GC相关信息
-gccapacity：显示各个代的容量和使用情况
-gccause：显示垃圾收集相关信息（同-gcutil），同时显示最后一次或当前正在发生的垃圾收集的诱发原因
-gcnew：显示新生代信息
-gcnewcapacity：显示新生代大小和使用情况
-gcold：显示老年代信息
-gcoldcapacity：显示老年代大小
-gcpermcapacity：显示永久代大小
-gcutil：显示垃圾收集信息

jstat -gc 18551 250 4

# 进程ID 34784 ，采样间隔250ms，采样数4

S0C：年轻代中第一个survivor（幸存区）的容量 （单位kb）  
S1C：年轻代中第二个survivor（幸存区）的容量 (单位kb)  
S0U ：年轻代中第一个survivor（幸存区）目前已使用空间 (单位kb)  
S1U ：年轻代中第二个survivor（幸存区）目前已使用空间 (单位kb)  
EC ：年轻代中Eden的容量 (单位kb)  

EU ：年轻代中Eden目前已使用空间 (单位kb)  
OC ：Old代的容量 (单位kb)  
OU ：Old代目前已使用空间 (单位kb)  
MC：metaspace的容量 (单位kb)  
MU：metaspace目前已使用空间 (单位kb)  
CCSC：压缩类空间大小  
CCSU：压缩类空间使用大小  
YGC ：从应用程序启动到采样时年轻代中gc次数  
YGCT ：从应用程序启动到采样时年轻代中gc所用时间(s)  
FGC ：从应用程序启动到采样时old代(全gc)gc次数  
FGCT ：从应用程序启动到采样时old代(全gc)gc所用时间(s)  
GCT：从应用程序启动到采样时gc用的总时间(s)  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=["src"],v=s(`<p>jstat -gcutil</p><p>下面输出的是进程内存区域百分百 及 GC详细信息</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>jstat -gcutil 30108 1s 5
# 进程ID 30108，采样间隔1s，采样数5

S0 年轻代中第一个survivor（幸存区）已使用的占当前容量百分比
S1 年轻代中第二个survivor（幸存区）已使用的占当前容量百分比
E 年轻代中Eden（伊甸园）已使用的占当前容量百分比
O old代已使用的占当前容量百分比
M metaspace已使用的占当前容量百分比
CCS 压缩使用比例
YGC 从应用程序启动到采样时年轻代中gc次数
YGCT 从应用程序启动到采样时年轻代中gc所用时间(s)
FGC 从应用程序启动到采样时old代(全gc)gc次数
FGCT 从应用程序启动到采样时old代(全gc)gc所用时间(s)
GCT 从应用程序启动到采样时gc用的总时间(s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m=["src"],b=s(`<h3 id="jinfo" tabindex="-1"><a class="header-anchor" href="#jinfo" aria-hidden="true">#</a> jinfo</h3><p>jinfo可以用来查看正在运行的Java程序的扩展参数，甚至支持修改运行过程中的部分参数</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>jinfo [option] &lt;pid&gt;

-flags 打印虚拟机 VM 参数
-flag &lt;name&gt; 打印指定虚拟机 VM 参数
-flag [+|-]&lt;name&gt; 打开或关闭虚拟机参数
-flag &lt;name&gt;=&lt;value&gt; 设置指定虚拟机参数的值


jinfo -flags 18551
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h=["src"],g=s(`<h3 id="jmap" tabindex="-1"><a class="header-anchor" href="#jmap" aria-hidden="true">#</a> jmap</h3><p>jmap用来查看堆内存使用状况，一般结合jhat使用。</p><p>jmap pid</p><p>描述：查看进程的内存映像信息。使用不带选项参数的jmap打印共享对象映射，将会打印目标虚拟机中加载的每个共享对象的 起始地址、映射大小以及共享对象文件的路径全称。</p><p>jmap -heap pid</p><p>显示Java堆详细信息：打印堆的摘要信息，包括使用的GC算法、堆配置信息和各内存区域内存使用信息</p><p>jmap -histo:live pid</p><p>描述：显示堆中对象的统计信息：其中包括每个Java类、对象数量、内存大小(单位：字节)、完全限定的类名。打印的虚拟机内 部的类名称将会带有一个’*’前缀。如果ja指定了live子选项，则只计算活动的对象</p><p>jmap -clstats pid</p><p>描述：打印类加载器信息：打印Java堆内存的方法区的类加载器的智能统计信息。对于每个类加载器而言，它的名称、活跃度、 地址、父类加载器、它所加载的类的数量和大小都会被打印。此外，包含的字符串数量和大小也会被打印。</p><p>jmap -finalizerinfo pid</p><p>描述：打印等待终结的对象信息</p><p>jmap -dump:format=b,file=heapdump.hprof pid</p><p>描述：生成堆转储快照dump文件：以二进制格式转储Java堆到指定文件中。如果指定了live子选项，堆中只有活动的对象会被转 储。浏览heap dump 可以使用jhat 读取生成的文件，也可以使用MAT等堆内存分析工具。</p><h3 id="jhat" tabindex="-1"><a class="header-anchor" href="#jhat" aria-hidden="true">#</a> jhat</h3><p>jhat 命令会解析Java堆转储文件，并启动一个 web server。然后用浏览器来查看/浏览 dump 出来的 heap二进制文件。<br> jhat 命令支持预先设计的查询，比如：显示某个类的所有实例。还支持 对象查询语言（OQL）。 OQL有点类似SQL，专门用来 查询堆转储。</p><p>Java生成堆转储的方式有多种:</p><ol><li>使用 jmap -dump 选项可以在JVM运行时获取 dump.</li><li>使用 jconsole 选项通过 HotSpotDiagnosticMXBean 从运行时获得堆转储。</li><li>在虚拟机启动时如果指定了 -XX:+HeapDumpOnOutOfMemoryError 选项，则抛出 OutOfMemoryError 时，会自动执行堆转 储</li></ol><p>jhat [ options ] heap-dump-file</p><h3 id="jstack" tabindex="-1"><a class="header-anchor" href="#jstack" aria-hidden="true">#</a> jstack</h3><p>stack是Java虚拟机自带的一种堆栈跟踪工具，用于生成java虚拟机当前时刻的线程快照。</p><p>线程快照是当前Java虚拟机内每一条线程正在执行的方法堆栈的集合，生成线程快照的主要目的是定位线程出现长时间停顿的原因， 如线程间死锁、死循环、请求外部资源导致的长时间等待、等等。</p><p>线程快照里留意下面几种状态</p><p>死锁，Deadlock（重点关注）<br> 等待资源，Waiting on condition（重点关注）<br> 等待获取管程，Waiting on monitor entry（重点关注）<br> 阻塞，Blocked（重点关注）<br> 执行中，Runnable<br> 暂停，Suspended<br> 对象等待中，Object.wait() 或 TIMED_WAITING<br> 停止，Parked</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>jstack [ option ] pid 查看当前时间点，指定进程的dump堆栈信息。
jstack [ option ] pid &gt; 文件 将当前时间点的指定进程的dump堆栈信息，写入到指定文件中。
# 注:若该文件不存在，则会自动生成; 若该文件存在，则会覆盖源文件。
jstack [ option ] executable core 查看当前时间点，core文件的dump堆栈信息。
jstack [ option ] [server_id@]&lt;remote server IP or hostname&gt; 查看当前时间点，远程机器的dump堆栈信息。


-F # 当进程挂起了，此时&#39;jstack [-l] pid&#39;是没有相应的，这时候可使用此参数来强制打印堆栈信息,强制jstack），一般情况不
需要使用。
-m # 打印java和native c/c++框架的所有栈信息。可以打印JVM的堆栈，以及Native的栈帧，一般应用排查不需要使用。
-l # 长列表. 打印关于锁的附加信息。例如属于java.util.concurrent的ownable synchronizers列表，会使得JVM停顿得长久
得多（可能会差很多倍，比如普通的jstack可能几毫秒和一次GC没区别，加了-l 就是近一秒的时间），-l 建议不要用。一般情况不需
要使用。
-h or -hel # 打印帮助信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jstack pid 打印堆栈</p><p>jstack -l 30108 | grep &#39;java.lang.Thread.State&#39; | wc -l</p><h3 id="visualvm" tabindex="-1"><a class="header-anchor" href="#visualvm" aria-hidden="true">#</a> VisualVM</h3><p>VisualVM 是一款免费的性能分析工具。它通过 jvmstat、JMX、SA（Serviceability Agent）以及 Attach API 等多种方式从程序运行时 获得实时数据，从而进行动态的性能分析。同时，它能自动选择更快更轻量级的技术尽量减少性能分析对应用程序造成的影响，提高 性能分析的精度。</p><h2 id="第三方工具" tabindex="-1"><a class="header-anchor" href="#第三方工具" aria-hidden="true">#</a> 第三方工具</h2><h3 id="gceasy" tabindex="-1"><a class="header-anchor" href="#gceasy" aria-hidden="true">#</a> GCEasy</h3><p>业界首先采用机器学习算法解决GC日志分析问题，GCeasy内置机器智能可以自动检测JVM和Android GC日志中的问题，并推荐解决 方案。</p><p>https://gceasy.io/</p><h3 id="mat" tabindex="-1"><a class="header-anchor" href="#mat" aria-hidden="true">#</a> MAT</h3><p>MAT是一个强大的可视化内存分析工具，可以快捷、有效地帮助我们找到内存泄露，减少内存消耗分析工具。MAT是Memory Analyzer tool的缩写，是一种快速，功能丰富的Java堆分析工具，能帮助你查找内存泄漏和减少内存消耗。</p><p>功能：<br> 找到最大的对象，因为MAT提供显示合理的累积大小（retained size）<br> 探索对象图，包括inbound和outbound引用，即引用此对象的和此对象引出的<br> 查找无法回收的对象，可以计算从垃圾收集器根到相关对象的路径<br> 找到内存浪费，比如冗余的String对象，空集合对象。</p><p>MAT安装有两种方式，一种是以eclipse插件方式安装，一种是独立安装。<br> 在MAT的官方文档中有相应的安装文件下载，下载地址为：https://www.eclipse.org/mat/downloads.php<br> eclipse插件安装，help -&gt; install new soft点击ADD，在弹出框中添加插件地址：http://download.eclipse.org/mat/1.9.0/upda te-site/，也可以直接在下载页面下载离线插件包，以离线方式安装。<br> 独立安装：下载解压包，解压即安装</p><h3 id="arthas" tabindex="-1"><a class="header-anchor" href="#arthas" aria-hidden="true">#</a> Arthas</h3><p>Arthas 是一款线上监控诊断产品，通过全局视角实时查看应用 load、内存、gc、线程的状态信息，并能在不修改应用代码的情况下， 对业务问题进行诊断，包括查看方法调用的出入参、异常，监测方法执行耗时，类加载信息等，大大提升线上问题排查效率。</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code># 下载arthas-boot.jar
curl -O https://alibaba.github.io/arthas/arthas-boot.jar
# 启动
java -jar arthas-boot.jar
# 选择应用java进程：

[INFO] arthas-boot version: 3.5.3
[INFO] Found existing java process, please choose one and input the serial number of the
process, eg : 1. Then hit ENTER.
* [1]: 31480 org.apache.catalina.startup.Bootstrap
[2]: 30108 /root/hero_web-1.0-SNAPSHOT-default.jar
# Demo进程是第2个，则输入2，再输入回车/enter。Arthas会attach到目标进程上，并输出日志：
[INFO] Start download arthas from remote server: https://arthas.aliyun.com/download/3.5.4?
mirror=aliyun
[INFO] Download arthas success.
[INFO] arthas home: /root/.arthas/lib/3.5.4/arthas
[INFO] Try to attach process 30108
[INFO] Attach process 30108 success.
[INFO] arthas-client connect 127.0.0.1 3658
,---. ,------. ,--------.,--. ,--. ,---. ,---.
/ O \\ | .--. &#39;&#39;--. .--&#39;| &#39;--&#39; | / O \\ &#39; .-&#39;
| .-. || &#39;--&#39;.&#39; | | | .--. || .-. |\`. \`-.
| | | || |\\ \\ | | | | | || | | |.-&#39; |
\`--&#39; \`--&#39;\`--&#39; &#39;--&#39; \`--&#39; \`--&#39; \`--&#39;\`--&#39; \`--&#39;\`-----&#39;
wiki https://arthas.aliyun.com/doc
tutorials https://arthas.aliyun.com/doc/arthas-tutorials.html
version 3.5.4
main_class
pid 30108
time 2021-10-12 11:24:34
[arthas@30108]$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Arthas 常见命令<br> jvm：查看当前 JVM 的信息<br> thread：查看当前 JVM 的线程堆栈信息，<br> -b 选项可以一键检测死锁<br> -n 指定最忙的前N个线程并打印堆栈<br> trace：方法内部调用路径，并输出方法路径上的每个节点上耗时，服务间调用时间过长时使用<br> stack：输出当前方法被调用的调用路径<br> Jad：反编译指定已加载类的源码，反编译便于理解业务<br> logger：查看和修改 logger，可以动态更新日志级别</p></li><li><p>查看dashboard</p></li></ul><p>输入dashboard，按 回车/enter ，会展示当前进程的信息，按 ctrl+c 可以中断执行</p>`,42),k=["src"],X=n("ul",null,[n("li",null,"查看线程thread")],-1),G=n("p",null,"通过thread命令来获取到应用进程的线程信息",-1),C=n("br",null,null,-1),j=["src"],x=s(`<ul><li>反编译已加载类源码</li></ul><p>运行期通过jad来反编译项目代码</p><ul><li>监听运行时方法的返回值watch<br> 通过watch命令来查看 com.hero.web.user.controller#UserController 函数的返回值：</li></ul><div class="language-linxu line-numbers-mode" data-ext="linxu"><pre class="language-linxu"><code>watch com.hero.web.user.controller.UserController findByUsername returnObj 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>退出<br> 如果只是退出当前的连接，可以用 quit 或者 exit 命令。Attach到目标进程上的arthas还会继续运行，端口会保持开放，下次连接时 可以直接连接上。如果想完全退出arthas，可以执行 stop 命令。</li></ul><h2 id="jvm参数" tabindex="-1"><a class="header-anchor" href="#jvm参数" aria-hidden="true">#</a> JVM参数</h2><p>标准参数、非标准参数、不稳定参数</p><h3 id="标准参数" tabindex="-1"><a class="header-anchor" href="#标准参数" aria-hidden="true">#</a> 标准参数</h3><p>顾名思义，标准参数中包括功能以及输出的结果都是很稳定的，基本上不会随着JVM版本的变化而变化。标准参数以-开 头，如：java -version、java -jar等，通过java -help可以查询所有的标准参数，我们可以通过 -help 命令来检索出所有标准参数</p><h3 id="非标准参数" tabindex="-1"><a class="header-anchor" href="#非标准参数" aria-hidden="true">#</a> 非标准参数</h3><p>非标准参数：以-X开头，是标准参数的扩展。表示在将来的JVM版本中可能会发生改变，但是这类以-X开始的参数变化比较小。 可以通过 Java -X 命令来检索所有-X 参数。</p><p>比较常见的非标准参数：</p><ol><li>-Xms堆最小值：默认值是总内存/64（且小于1G），默认情况下，当堆中可用内存小于40%（-XX: MinHeapFreeRatio调整） 时，堆内存会开始增加，一直增加到-Xmx大小。</li><li>-Xmx堆最大值：默认值是总内存/64（且小于1G），如果Xms和Xmx都不设置，则两者大小会相同，默认情况下，当堆中可用 内存大于70%时，堆内存会开始减少，一直减小到-Xms的大小；</li><li>-Xmn新生代内存：默认是整堆的1/3，包括Eden区和两个Survivor区的总和，写法如： -Xmn1024，-Xmn1024k，-Xmn1024m，- Xmn1g 。新生代按整堆的比例分配，所以，此值不建议设置！</li><li>-Xss线程栈内存：默认1M，一般来说是不需要改的。</li><li>打印GC日志：-Xloggc:file与-verbose:gc功能类似，只是将每次GC事件的相关情况记录到一个文件中。</li></ol><h3 id="不稳定参数" tabindex="-1"><a class="header-anchor" href="#不稳定参数" aria-hidden="true">#</a> 不稳定参数</h3><p>不稳定参数：这也是非标准化参数，相对来说不稳定，随着JVM版本的变化可能会发生变化，主要用于JVM调优和debug。 不稳定参数以-XX 开头，此类参数的设置很容易引起JVM 性能上的差异，使JVM存在极大的不稳定性。如果此类参数设置合理将大大提 高JVM的性能及稳定性。</p><p>不稳定参数分为三类：<br> 性能参数：用于JVM的性能调优和内存分配控制，如内存大小的设置；<br> 行为参数：用于改变JVM的基础行为，如GC的方式和算法的选择；<br> 调试参数：用于监控、打印、输出jvm的信息；</p><p>不稳定参数语法规则：</p><ol><li>布尔类型参数值：<br> -XX:+<br> &#39;+&#39;表示启用该选项<br> -XX:-<br> &#39;-&#39;表示关闭该选项<br> 示例：-XX:+UseG1GC：表示启用G1垃圾收集器</li><li>数字类型参数值：<br> -XX:<br> =给选项设置一个数字类型值，可跟随单位，例如：&#39;m&#39;或&#39;M&#39;表示兆字节;&#39;k&#39;或&#39;K&#39;千字节;&#39;g&#39;或&#39;G&#39;千兆字节。32K与32768是相同大小的。<br> 示例：-XX:MaxGCPauseMillis=500 ：表示设置GC的最大停顿时间是500ms</li><li>字符串类型参数值：<br> -XX:<br> =给选项设置一个字符串类型值，通常用于指定一个文件、路径或一系列命令列表。<br> 示例：-XX:HeapDumpPath=./dump.core<br> 常用的不稳定参数：<br> -XX:+UseSerialGC 配置串行收集器<br> -XX:+UseParallelGC 配置PS并行收集器<br> -XX:+UseParallelOldGC 配置PO并行收集器<br> -XX:+UseParNewGC 配置ParNew并行收集器<br> -XX:+UseConcMarkSweepGC 配置CMS并行收集器<br> -XX:+UseG1GC 配置G1并行收集器<br> -XX:+PrintGCDetails 配置开启GC日志打印<br> -XX:+PrintGCTimeStamps 配置开启打印GC时间戳<br> -XX:+PrintGCDateStamps 配置开启打印GC日期<br> -XX:+PrintHeapAtGC 配置开启在GC时，打印堆内存信息</li></ol><h2 id="调优" tabindex="-1"><a class="header-anchor" href="#调优" aria-hidden="true">#</a> 调优</h2><p>调优的最终目的都是为了应用程序使用最小的硬件消耗来承载更大的吞吐量。JVM调优主要是针对垃圾收集器的收集性能进行优化令 运行在虚拟机上的应用，能够使用更少的内存（Footprint），及更低的延迟（Latency），获取更大的吞吐量（Throughput）。</p><p>调优最终目标：</p><ul><li>堆内存使用率 &lt;= 70%;</li><li>老年代内存使用率&lt;= 70%;</li><li>avg pause &lt;= 1秒;</li><li>Full GC 次数0 或 avg pause interval &gt;= 24小时 ;</li></ul><h3 id="什么时候调优" tabindex="-1"><a class="header-anchor" href="#什么时候调优" aria-hidden="true">#</a> 什么时候调优</h3><p>遇到以下情况，就需要考虑进行JVM调优：</p><ol><li>系统吞吐量下降与响应延迟（P99）；</li><li>Heap内存（老年代）持续上涨至出现OOM；</li><li>Full GC 次数频繁；</li><li>GC 停顿过长（超过1秒）；</li><li>应用出现OutOfMemory 等内存异常；</li><li>应用中有使用本地缓存且占用大量内存空间；</li></ol><h3 id="调优调什么" tabindex="-1"><a class="header-anchor" href="#调优调什么" aria-hidden="true">#</a> 调优调什么</h3><p>内存分配 + 垃圾回收！</p><ol><li>合理使用堆内存</li><li>GC高效回收占用的内存的垃圾对象</li><li>GC高效释放掉内存空间</li></ol><h3 id="调优原则" tabindex="-1"><a class="header-anchor" href="#调优原则" aria-hidden="true">#</a> 调优原则</h3><p>优先原则：优先架构调优和代码调优，JVM优化是不得已的手段<br> 大多数的Java应用不需要进行JVM优化<br> 观测性原则：发现问题解决问题，没有问题不找问题</p><h3 id="调优步骤" tabindex="-1"><a class="header-anchor" href="#调优步骤" aria-hidden="true">#</a> 调优步骤</h3><p>第一步：监控分析GC日志<br> 第二步：判断JVM问题：<br> 如果各项参数设置合理，系统没有超时日志出现，GC频率不高，GC耗时不高，那么没有必要进行GC优化 如果GC时间超过1秒，或者频繁GC，则必须优化。<br> 第三步：确定调优目标<br> 第四步：调整参数<br> 调优一般是从满足程序的内存使用需求开始，之后是时间延迟需求，最后才是吞吐量要求，要基于这个步骤来不断优化，每 一个步骤都是进行下一步的基础，不可逆行之。<br> 第五步：对比调优前后差距<br> 第六步：重复：1、2、3、4、5步骤<br> 找到最佳JVM参数设置<br> 第七步：应用JVM参数到应用服务器：<br> 找到最合适的参数，将这些参数灰度发布一部分机器，观察一段时间。<br> 如果，观察结果可以验证方案的价值，则进行全量发布！</p><h3 id="调优参数设置" tabindex="-1"><a class="header-anchor" href="#调优参数设置" aria-hidden="true">#</a> 调优参数设置</h3><p>JVM调优典型参数设置：<br> -Xms堆内存最小值<br> -Xmx堆内存最大值<br> -Xmn新生代内存的最大值<br> -Xss每个线程的栈内存</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code># 计算最大线程数的公式：理论上限
Number of threads = (MaxProcess内存 - JVM内存 - ReservedOsMemory) / (ThreadStackSize)
系统最大可创建的线程数量=(机器本身可用内存 - (JVM分配的堆内存+JVM元数据区)) / Xss的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要确定JVM性能问题瓶颈，需要分析GC日志</p><ol><li>-XX:+PrintGCDetails 开启GC日志创建更详细的GC日志，默认关闭</li><li>-XX:+PrintGCTimeStamps，-XX:+PrintGCDateStamps 开启GC时间提示， 开启时间便于我们更精确地判断几次GC操作之间的时两个参数的区别<br> 时间戳是相对于0（依据JVM启动的时间）的值，而日期戳（date stamp）是实际的日期字符串 由于日期戳需要进行格式化，所以它的效率可能会受轻微的影响，不过这种操作并不频繁，它造成的影响也很难被我们感 知。</li><li>-XX:+PrintHeapAtGC 打印堆的GC日志</li><li>-Xloggc:./logs/gc.log 指定GC日志路径</li></ol><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code># 配置GC日志输出
JAVA_OPT=&quot;\${JAVA_OPT} -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -
XX:+PrintHeapAtGC -Xloggc:\${BASE_DIR}/logs/gc-default.log &quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="young-gc-日志含义" tabindex="-1"><a class="header-anchor" href="#young-gc-日志含义" aria-hidden="true">#</a> Young GC 日志含义</h3><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>2021-05-18T14:31:11.340+0800: 2.340: [GC (Allocation Failure) [PSYoungGen: 896512K-&gt;41519K(1045504K)]
896512K-41543K(3435008K), 0.0931965 secs] [Times: user=0.14 sys=0.02, real=0.10 secs]


# 第一部分
2021-05-18T14:31:11.340+0800: 2.340: [GC (Allocation Failure)
GC事件开始时间，+0800代表中国所在的东区：2021-05-18T14:31:11.340+0800
GC事件开始时间相对于JVM开始启动的间隔秒数：2.340
区分YoungGC还是FullGC的标志，GC代表YoungGC
触发GC的原因： (Allocation Failure)
# 第二部分
[PSYoungGen: 896512K-&gt;41519K(1045504K)] 896512K-41543K(3435008K), 0.0931965 secs]
垃圾收集器的名称：PSYoungGen
在垃圾收集之前 和 之后新时代的使用量：896512K-&gt;41519K
新生代总空间大小：(1045504K)
在垃圾收集之前和之后整个堆内存使用量：896512K-41543K
堆总空间大小：(3435008K)
GC持续时间：0.0931965 secs

# 第三部分
[Times: user=0.14 sys=0.02, real=0.10 secs]
GC线程消耗的CPU时间：user=0.14
GC过程中操作系统调用和系统等待事件所消耗的时间：sys=0.02
应用程序暂停的时间：0.10 secs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fullgc-日志含义" tabindex="-1"><a class="header-anchor" href="#fullgc-日志含义" aria-hidden="true">#</a> FullGC 日志含义</h3><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>2021-05-19T14:46:07.367+0800: 1.562: [Full GC (Metadata GC Threshold)[PSYoungGen: 18640K-
&gt;0K(1835008K)] [ParOldGen: 16K-&gt;18327K(1538048K)] 18656K-&gt;18327K(3373056K), [Metaspace: 20401K-
&gt;20398K(1069056K)], 0.0624559 secs] [Times: user=0.19 sys=0.00, real=0.06 secs]

# 第一部分
2021-05-19T14:46:07.367+0800: 1.562: [Full GC (Metadata GC Threshold)
GC事件开始时间，+0800代表中国所在的东区：
GC事件开始时间相对于JVM开始启动的间隔秒数：2.340
区分YoungGC还是FullGC的标志
触发GC的原因： (Allocation Failure)
# 第二部分
[PSYoungGen: 18640K-&gt;0K(1835008K)] [ParOldGen: 16K-&gt;18327K(1538048K)] 18656K-&gt;18327K(3373056K),
垃圾收集器的名称：PSYoungGen
在垃圾收集之前 和 之后新时代的使用量：18640K-&gt;0K
新生代总空间大小：(1835008K)
老年代垃圾收集器名称：ParOldGen
在垃圾收集之前和之后老年代的使用量：16K-&gt;18327K
老年代总空间大小：(1538048K)
在垃圾收集之前和之后整个堆内存使用量：18656K-&gt;18327K
堆总空间大小：(3373056K)
# 第三部分
[Metaspace: 20401K-&gt;20398K(1069056K)], 0.0624559 secs] [Times: user=0.19 sys=0.00, real=0.06 secs]
元空间区域垃圾收集器：Metaspace
在垃圾收集之前和之后元空间的使用量：20401K-&gt;20398K
元空间大小：(1069056K)
GC事件持续的时间：0.0624559 secs
GC线程消耗的CPU时间：user=0.19
GC过程中，操作系统调用和系统等待事件所消耗的时间：sys=0.00
应用程序暂停时间：real=0.06 secs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="堆内存跟元空间优化" tabindex="-1"><a class="header-anchor" href="#堆内存跟元空间优化" aria-hidden="true">#</a> 堆内存跟元空间优化</h3><p>老年代的空间大小为 274MB【那些不容易消亡的老对象】</p><p>java heap：参数-Xms和-Xmx，建议扩大至3-4倍FullGC后的老年代空间占用。274 * (3-4) = (822-1096)MB ，设置heap大小为 1096MB，最好是8的整数倍；</p><p>元空间：参数-XX:MetaspaceSize=N，设置元空间大小为128MB;</p><p>新生代：参数-Xmn，建议扩大至1-1.5倍FullGC之后的老年代空间占用。274M*(1-1.5)=(274 -411)M，设置新生代大小为 411MB，最好是8的整数倍，因此改为408M；</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code># 调整参数，基于当前系统运行情况这是最佳配置
JAVA_OPT=&quot;\${JAVA_OPT} -Xms1096m -Xmx1096m -Xmn408m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=128m&quot;
JAVA_OPT=&quot;\${JAVA_OPT} -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -
XX:+PrintHeapAtGC -Xloggc:\${BASE_DIR}/logs/gc-best-heap-metaspace.log&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线程堆栈优化" tabindex="-1"><a class="header-anchor" href="#线程堆栈优化" aria-hidden="true">#</a> 线程堆栈优化</h3><p>对于不同版本的Java虚拟机和不同的操作系统，栈容量最小值可能会有所限制，这主要取决于操作系统内存分页大小。譬如上述方法 中的参数-Xss128k可以正常用于32位Windows系统下的JDK 6，但是如果用于64位Windows系统下的JDK 11，则会提示栈容量最小不 能低于180K，而在Linux下这个值则可能是228K，如果低于这个最小限制，HotSpot虚拟器启动时会给出如下提示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">The</span> <span class="token class-name">Java</span> thread stack size specified is too <span class="token class-name"><span class="token namespace">small<span class="token punctuation">.</span></span> Specify</span> at least <span class="token number">228</span>k
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>JDK5.0以后每个线程堆栈大小为1M，以前每个线程堆栈大小为256。根据应用的线程所需内存大小进行调整。在相同物理内存下，减 小这个值能生成更多的线程。但是操作系统对一个进程内的线程数还是有限制的，不能无限生成， 如果栈不是很深， 应该是256k够 用了，大的应用建议使用512k。</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>JAVA_OPT=&quot;\${JAVA_OPT} -Xms1096m -Xmx1096m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=128m -Xss512k&quot;
JAVA_OPT=&quot;\${JAVA_OPT} -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -
XX:+PrintHeapAtGC -Xloggc:\${BASE_DIR}/logs/gc-best-stack.log&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="垃圾回收器优化" tabindex="-1"><a class="header-anchor" href="#垃圾回收器优化" aria-hidden="true">#</a> 垃圾回收器优化</h3><p>吞吐量优先ps+po</p><p>默认使用ps+po 垃圾回收器组合： 并行垃圾回收器组合</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>JAVA_OPT=&quot;\${JAVA_OPT} -Xms256m -Xmx256m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=128m -Xss512k&quot;
JAVA_OPT=&quot;\${JAVA_OPT} -XX:+UseParallelGC -XX:+UseParallelOldGC &quot;
JAVA_OPT=&quot;\${JAVA_OPT} -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -
XX:+PrintHeapAtGC -Xloggc:\${BASE_DIR}/logs/gc-ps-po.log&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应时间优先parnew+cms</p><p>使用cms垃圾回收器，垃圾回收器组合： parNew+CMS, cms垃圾回收器在垃圾标记，垃圾清除的时候，和业务线程交叉执行，尽量 减少stw时间，因此这垃圾回收器叫做响应时间优先；</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>JAVA_OPT=&quot;\${JAVA_OPT} -Xms256m -Xmx256m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=128m -Xss512k&quot;
JAVA_OPT=&quot;\${JAVA_OPT} -XX:+UseParNewGC -XX:+UseConcMarkSweepGC &quot;
JAVA_OPT=&quot;\${JAVA_OPT} -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -
XX:+PrintHeapAtGC -Xloggc:\${BASE_DIR}/logs/gc-parnew-cms.log&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>G1全功能</p><p>配置G1只需要简单三步即可：</p><ol><li>第一步，开启G1垃圾收集器</li><li>第二步，设置堆的最大内存</li><li>第三步，设置最大的停顿时间</li></ol><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>JAVA_OPT=&quot;\${JAVA_OPT} -Xms256m -Xmx256m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=128m -Xss512k&quot;
JAVA_OPT=&quot;\${JAVA_OPT} -XX:+UseG1GC -XX:MaxGCPauseMillis=100&quot;
JAVA_OPT=&quot;\${JAVA_OPT} -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -
XX:+PrintHeapAtGC -Xloggc:\${BASE_DIR}/logs/gc-g-one.log&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于G1垃圾收集器参数设置建议：<br> 设置为100-300之间比较合理，不要设置的太短<br> 堆内存小于2GB，不建议使用G1</p><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><p>内存溢出的定位与分析</p><p>内存溢出在实际的生产环境中经常会遇到，比如，不断的将数据写入到一个集合中，出现了死循环，读取超大的文件等等，都可能会 造成内存溢出。<br> 如果出现了内存溢出，首先我们需要定位到发生内存溢出的环节，并且进行分析，是正常还是非正常情况，如果是正常的需求，就应 该考虑加大内存的设置，如果是非正常需求，那么就要对代码进行修改，修复这个bug。<br> 首先，我们得先学会如何定位问题，然后再进行分析。如何定位问题呢，我们需要借助于jmap与MAT工具进行定位分析。 接下来，我们模拟内存溢出的场景。</p><p>模拟内存溢出</p><p>编写代码，向List集合中添加100万个字符串，每个字符串由1000个UUID组成。如果程序能够正常执行，最后打印ok。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>hero<span class="token punctuation">.</span>jvm<span class="token punctuation">.</span>memory</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">UUID</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestJvmOutOfMemory</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
str <span class="token operator">+=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>




#参数如下：
<span class="token operator">-</span><span class="token class-name">Xms8m</span> <span class="token operator">-</span><span class="token class-name">Xmx8m</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">HeapDumpOnOutOfMemoryError</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，当发生内存溢出时，会dump文件到java_pid31092.hprof</p><p>导入到MAT工具中进行分析</p>`,73),M=["src"],A=s(`<p>可以看到，有81.72%的内存由Object[]数组占有，所以比较可疑。<br> 分析：这个可疑是正确的，因为已经有超过80%的内存都被它占有，这是非常有可能出现内存溢出的。</p><p>检测死锁</p><p>有些时候我们需要查看下jvm中的线程执行情况，比如，发现服务器的CPU的负载突然增高了、出现了死锁、死循环等，我们该如何 分析呢？<br> 由于程序是正常运行的，没有任何的输出，从日志方面也看不出什么问题，所以就需要看下JVM的内部线程的执行情况，然后再进行 分析查找出原因。<br> 这个时候，就需要借助于jstack命令了，jstack的作用是将正在运行的jvm的线程情况进行快照，并且打印出来：</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>jstack 18487 | grep &#39;BLOCKED&#39; -A 15 --color

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用Arthas进行分析</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>thread -b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),P=["src"],J=n("p",null,"可以准确知道： 死锁在代码的中的第几行",-1);function _(a,f){return l(),d("div",null,[t,c,n("img",{src:a.$withBase("/images/jvm/57.png"),alt:"jvm"},null,8,p),u,n("img",{src:a.$withBase("/images/jvm/58.png"),alt:"jvm"},null,8,o),v,n("img",{src:a.$withBase("/images/jvm/59.png"),alt:"jvm"},null,8,m),b,n("img",{src:a.$withBase("/images/jvm/60.png"),alt:"jvm"},null,8,h),g,n("img",{src:a.$withBase("/images/jvm/62.png"),alt:"jvm"},null,8,k),X,G,n("p",null,[e("thread -1 会打印线程统计信息。"),C,n("img",{src:a.$withBase("/images/jvm/61.png"),alt:"jvm"},null,8,j)]),x,n("img",{src:a.$withBase("/images/jvm/63.png"),alt:"jvm"},null,8,M),A,n("img",{src:a.$withBase("/images/jvm/64.png"),alt:"jvm"},null,8,P),J])}const S=i(r,[["render",_],["__file","java_jvm_optimize.html.vue"]]);export{S as default};
