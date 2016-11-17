<template>
  <div>
    <h2>angular.bind</h2>

    <br />
    <h4 class="text-info">描述：</h4>
    <p class="text-info"> 上下文，函数以及参数动态绑定，返回值为绑定之后的函数. 其中args是可选的动态参数，self在fn中使用this调用。</p>
    <br />
    <h4 class="text-success">
      使用方法：
    </h4>
    <p class="text-success">
      angular.bind(self,fn,args );
    </p>
    <br />
    <h4 class="muted">参数：</h4>
    <table class="table muted">
      <thead>
      <tr>
        <th>
          参数名称
        </th>
        <th>
          参数类型
        </th>
        <th>
          描述
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          self
        </td>
        <td>
          Object
        </td>
        <td>
          fn的上下文对象，使用this调用
        </td>
      </tr>
      <tr>
        <td>
          fn
        </td>
        <td>
          function
        </td>
        <td>
          被绑定的function
        </td>
      </tr>
      <tr>
        <td>
          args
        </td>
        <td>
          *
        </td>
        <td>
          传入fn中的参数(可选的)
        </td>
      </tr>
      </tbody>
    </table>
    <h4 class="text-warning">返回值：</h4>
    <p class="text-warning">返回动态绑定之后的函数</p>
    <br/>
    <h4>例子：  </h4><a class="text-warning" target="_blank" href="../demo/bind.html">效果演示</a>
    <div class="highlight">
        <pre><span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;html</span> <span class="na">xmlns=</span><span class="s">&quot;http://www.w3.org/1999/xhtml&quot;</span><span class="nt">&gt;</span>
<span class="nt">&lt;head&gt;</span>
<span class="nt">&lt;meta</span> <span class="na">http-equiv=</span><span class="s">&quot;Content-Type&quot;</span> <span class="na">content=</span><span class="s">&quot;text/html; charset=utf-8&quot;</span><span class="nt">/&gt;</span>
        <span class="nt">&lt;title&gt;</span>bind例子<span class="nt">&lt;/title&gt;</span>
        <span class="nt">&lt;script </span><span class="na">src=</span><span class="s">&quot;../angular-1.3.0.14/angular.js&quot;</span><span class="nt">&gt;&lt;/script&gt;</span>
        <span class="nt">&lt;script </span><span class="na">type=</span><span class="s">&quot;text/javascript&quot;</span><span class="nt">&gt;</span>
        <span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;boyi&#39;</span> <span class="p">};</span>
        <span class="c1">//示例1--带参数</span>
        <span class="kd">var</span> <span class="nx">f</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="c1">//绑定对象，作为函数的上下文</span>
        <span class="c1">//被绑定的函数</span>
        <span class="kd">function</span> <span class="p">(</span><span class="nx">age</span><span class="p">)</span> <span class="p">{</span>
        <span class="nx">alert</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39; is &#39;</span> <span class="o">+</span> <span class="nx">age</span> <span class="o">+</span> <span class="s1">&#39; !&#39;</span><span class="p">);</span>
        <span class="p">},</span>
        <span class="c1">//绑定的参数，可省略</span>
        <span class="s1">&#39;15&#39;</span>
        <span class="p">);</span>
        <span class="nx">f</span><span class="p">();</span><span class="c1">//调用绑定之后的function</span>
        <span class="c1">//示例2--不带参数</span>
        <span class="kd">var</span> <span class="nx">m</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="c1">//绑定对象，作为函数的上下文</span>
        <span class="c1">//被绑定的函数</span>
        <span class="kd">function</span> <span class="p">(</span><span class="nx">age</span><span class="p">)</span> <span class="p">{</span>
        <span class="nx">alert</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39; is &#39;</span> <span class="o">+</span> <span class="nx">age</span> <span class="o">+</span> <span class="s1">&#39; !&#39;</span><span class="p">);</span>
        <span class="p">}</span>
        <span class="c1">//省略参数</span>
        <span class="p">);</span>
        <span class="nx">m</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span><span class="c1">//调用传参的函数</span>
        <span class="nt">&lt;/script&gt;</span>
<span class="nt">&lt;/head&gt;</span>
<span class="nt">&lt;body&gt;</span>
<span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
</pre>
    </div>


  </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }

    }
</script>
