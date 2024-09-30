import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="java基础知识" tabindex="-1"><a class="header-anchor" href="#java基础知识" aria-hidden="true">#</a> Java基础知识</h1><h2 id="面向对象三大特征" tabindex="-1"><a class="header-anchor" href="#面向对象三大特征" aria-hidden="true">#</a> 面向对象三大特征</h2><h3 id="_1-封装" tabindex="-1"><a class="header-anchor" href="#_1-封装" aria-hidden="true">#</a> 1.封装</h3><ul><li><p>封装（Encapsulation）是面向对象的三大特征之一，它指的是将对象的状态信息隐藏在对象内部，不允许外部程序直接访问对象内部信息，而是通过该类所提供的方法来实现对内部信息的操作和访问。</p></li><li><p>封装 ，大白话的解释就是，把一个东西，装到箱子了，只留小小的口，用于外界访问</p></li><li><p>优点：减少耦合: 可以独立地开发、测试、优化、使用、理解和修改减轻维护的负担: 可以更容易被程序员理解，并且在调试的时候可以不影响其他模块有效地调节性能: 可以通过剖析确定哪些模块影响了系统的性能提高软件的可重用性降低了构建大型系统的风险: 即使整个系统不可用，但是这些独立的模块却有可能是可用的</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> password<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 通过方法获取学生类私有属性</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> student<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-继承" tabindex="-1"><a class="header-anchor" href="#_2-继承" aria-hidden="true">#</a> 2.继承</h3><ul><li><p>定义一个类，让它成为某个类(一般叫父类)的子类，那么它就会继承父类里的部分属性和方法，因此，类的继承性使所建立的软件具有开放性、可扩充性，这是信息组织与分类的行之有效的方法.</p></li><li><p>优点：通过类的继承关系，使公共的特性能够共享，简化了对象、类的创建工作量，增加了代码的可重用性，复用性。</p></li><li><p>注意：如果访问的成员变量子类中有，则优先访问子类本身的 如果访问的成员变量子类中无，父类中有，则访问继承下来的 如果子类与父类中有同名的成员变量，则优先访问子类自己的，即子类将父类的同名变量隐藏</p></li><li><p>成员变量的访问遵循就近原则，自己有就优先访问自己的</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token class-name">String</span> gender<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;吃东西&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;在睡觉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
   
<span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;小头&quot;</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-多态" tabindex="-1"><a class="header-anchor" href="#_3-多态" aria-hidden="true">#</a> 3. 多态</h3><ul><li>​ 通俗来说，就是多种形态，具体点就是去完成某个行为，当不同的对象去完成时会产生出不同 的状态。 总的来说：同一件事情，发生在不同对象身上，就会产生不同的结果。</li><li>多态实现条件<br> 1：必须在继承体系下,完成向上转型<br> 2：子类必须要对父类中方法进行重写<br> 3：通过父类的引用调用重写的方法(动态绑定)</li><li>向上转型<br> 向上转型：实际就是创建一个子类对象，将其当成父类对象来使用。<br> 语法格式：父类类型 对象名 = new 子类类型()<br> 向上转型的优点：让代码实现更简单灵活。<br> 向上转型的缺陷：不能调用到子类特有的方法。</li><li>向下转型<br> 一个已经向上转型的子类对象，将父类引用转为子类引用</li><li>特点<br> 只能强制转换父类的引用，不能强制转换父类的对象<br> 要求父类的引用必须指向的是当前目标类型的对象<br> 当向下转型后，可以调用子类类型中所有的成员</li></ul><h3 id="方法重写" tabindex="-1"><a class="header-anchor" href="#方法重写" aria-hidden="true">#</a> 方法重写</h3><p>重写：需要有继承关系，子类重写父类的方法！</p><ul><li>条件<br> 1.方法名必须相同<br> 2.参数列表必须相同<br> 3.修饰符：范围可以扩大但不能缩小： public&gt;Protected&gt;Default&gt;private<br> 4.抛出的异常：范围可以缩小，但不能扩大；ClassNotFoundException--&gt;Exception(大)</li></ul><h3 id="方法重载" tabindex="-1"><a class="header-anchor" href="#方法重载" aria-hidden="true">#</a> 方法重载</h3><p>重载：Java 允许同一个类中定义多个同名方法，只要它们的形参列表不同即可。如果同一个类中包含了两个或两个以上方法名相同的方法，但形参列表不同，这种情况被称为方法重载（overload）。</p><ul><li>规则<br> 方法名必须相同<br> 参数列表必须不同(参数列表的个数不同，或者类型不同，或者参数列表的排列顺序不同)<br> 方法的返回类型可以相同也可以不相同<br> 仅仅返回类型不同不足以够成方法的重载</li></ul><h2 id="static跟final关键字" tabindex="-1"><a class="header-anchor" href="#static跟final关键字" aria-hidden="true">#</a> static跟final关键字</h2><h3 id="final关键字" tabindex="-1"><a class="header-anchor" href="#final关键字" aria-hidden="true">#</a> final关键字</h3><ul><li>数据<br> 声明数据为常量，可以是编译时常量，也可以是在运行时被初始化后不能被改变的常量。<br> 对于基本类型，final 使数值不变；<br> 对于引用类型，final 使引用不变，也就不能引用其它对象，但是被引用的对象本身是可以修改的</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// x = 2;  // cannot assign value to final variable &#39;x&#39;</span>
<span class="token keyword">final</span> <span class="token class-name">A</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
y<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方法<br> 声明方法不能被子类重写<br> private 方法隐式地被指定为 final，如果在子类中定义的方法和基类中的一个 private 方法签名相同，此时子类的方法不是重写基类方法，而是在子类中定义了一个新的方法</li><li>类<br> 声明类不允许被继承。</li></ul><h3 id="static关键字" tabindex="-1"><a class="header-anchor" href="#static关键字" aria-hidden="true">#</a> static关键字</h3><ul><li>静态变量<br> 静态变量：又称为类变量，也就是说这个变量属于类的，类所有的实例都共享静态变量，可以直接通过类名来访问它。静态变量在内存中只存在一份。</li><li>实例变量：每创建一个实例就会产生一个实例变量，它与该实例同生共死。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> x<span class="token punctuation">;</span>         <span class="token comment">// 实例变量</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> y<span class="token punctuation">;</span>  <span class="token comment">// 静态变量</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// int x = A.x;  </span>
        <span class="token comment">// Non-static field &#39;x&#39; cannot be referenced from a static context</span>

        <span class="token class-name">A</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> a<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">.</span>y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>静态方法<br> 静态方法在类加载的时候就存在了，它不依赖于任何实例。所以静态方法必须有实现，也就是说它不能是抽象方法。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// public abstract static void func2();  </span>
    <span class="token comment">// Illegal combination of modifiers: &#39;abstract&#39; and &#39;static&#39;</span>
    <span class="token comment">// 静态方法必须有实现，也就是说它不能是抽象方法。</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只能访问所属类的静态字段和静态方法，方法中不能有 this 和 super 关键字。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> x<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> y<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> x<span class="token punctuation">;</span>
        <span class="token comment">// int b = y;  </span>
        <span class="token comment">// Non-static field &#39;y&#39; cannot be referenced from a static context</span>
        <span class="token comment">// int b = this.y;     // &#39;A.this&#39; cannot be referenced from a static context</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>静态语句块<br> 静态语句块在类初始化时运行一次。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">A</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">A</span> a2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>静态内部类<br> 非静态内部类依赖于外部类的实例，而静态内部类不需要。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OuterClass</span> <span class="token punctuation">{</span>

    <span class="token keyword">class</span> <span class="token class-name">InnerClass</span> <span class="token punctuation">{</span> <span class="token comment">// 非静态内部类</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">StaticInnerClass</span> <span class="token punctuation">{</span> <span class="token comment">// 静态内部类</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// InnerClass innerClass = new InnerClass(); </span>
        <span class="token comment">// &#39;OuterClass.this&#39; cannot be referenced from a static context</span>
        <span class="token class-name">OuterClass</span> outerClass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OuterClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InnerClass</span> innerClass <span class="token operator">=</span> outerClass<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">InnerClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StaticInnerClass</span> staticInnerClass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticInnerClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注意:静态内部类不能访问外部类的非静态的变量和方法。</li><li>初始化顺序<br> 静态变量和静态语句块优先于实例变量和普通语句块，静态变量和静态语句块的初始化顺序取决于它们在代码中的顺序。</li><li>重点<br> 存在继承的情况下，初始化顺序为：</li></ul><p>父类（静态变量、静态语句块）<br> 子类（静态变量、静态语句块）<br> 父类（实例变量、普通语句块）<br> 父类（构造函数）<br> 子类（实例变量、普通语句块）<br> 子类（构造函数）</p>`,36),c=[p];function l(i,o){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","java_base.html.vue"]]);export{d as default};
