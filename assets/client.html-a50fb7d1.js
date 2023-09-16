import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c as o,d as e,e as a,b as r,f as i}from"./app-ab5c7bd1.js";const c={},h=i('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>本页面会指导您如何安装一个JavaIM客户端。</p><h1 id="📝-客户端配置" tabindex="-1"><a class="header-anchor" href="#📝-客户端配置" aria-hidden="true">#</a> 📝 客户端配置</h1><h2 id="第一步-——-安装java" tabindex="-1"><a class="header-anchor" href="#第一步-——-安装java" aria-hidden="true">#</a> 第一步 —— 安装Java</h2><p>JavaIM的最低要求为Java17，你需要前往Oracle的官方网站下载JDK17的安装文件。</p>',5),l={href:"https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.exe",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"第二步-——-从github-action下载默认配置的javaim",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第二步-——-从github-action下载默认配置的javaim","aria-hidden":"true"},"#"),a(" 第二步 —— 从Github Action下载默认配置的JavaIM")],-1),m={href:"https://github.com/JavaIM/JavaIM/actions/workflows/maven.yml",target:"_blank",rel:"noopener noreferrer"},v=i(`<p>在打开的新界面，确认您打开的是Summary页面，查看方法是看左侧，Summary左侧是否有颜色，如果没有，请点击一下Summary</p><p>打开Summary后，在新界面寻找Artifacts，您应该可以在他的区域找到&quot;JavaIM请解压后使用&quot;，点击它，您的浏览器应该会开始下载</p><p>下载后，解压，将里面的JavaIM-1.0-SNAPSHOT.jar复制到一个文件夹中</p><h2 id="第三步-——-从服务端获取公钥" tabindex="-1"><a class="header-anchor" href="#第三步-——-从服务端获取公钥" aria-hidden="true">#</a> 第三步 —— 从服务端获取公钥</h2><p>获取公钥后，将他改名为ServerPublicKey.key，并将它和jar放在一起</p><h2 id="第四步-——-根据提示进行运行" tabindex="-1"><a class="header-anchor" href="#第四步-——-根据提示进行运行" aria-hidden="true">#</a> 第四步 —— 根据提示进行运行</h2><p>请在之前的文件夹中打开终端（Windows系统为cmd） 如果是Linux用户，请在这里输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$Java_Home</span>/bin/java.exe -Dfile-encoding<span class="token operator">=</span>UTF-8 <span class="token parameter variable">-jar</span> JavaIM-1.0-SNAPSHOT.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是windows用户，也请在这里输入</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>%Java_Home%\\bin\\java.exe -Dfile-encoding=UTF-8 -jar JavaIM-1.0-SNAPSHOT.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>后续根据提示进行输入 如果还想打开，只需再次执行第三步即可</p><h2 id="第五步-——-完成" tabindex="-1"><a class="header-anchor" href="#第五步-——-完成" aria-hidden="true">#</a> 第五步 —— 完成</h2><p>您到了此处后，应该就已经可以开始聊天了</p>`,13);function u(_,b){const n=t("ExternalLinkIcon");return d(),o("div",null,[h,e("p",null,[a("点击"),e("a",l,[a("此处"),r(n)]),a("下载JDK17的Windows安装包")]),p,e("p",null,[a("使用浏览器访问"),e("a",m,[a("https://github.com/JavaIM/JavaIM/actions/workflows/maven.yml"),r(n)]),a(" 点开右侧有绿色对钩的项目的文字，建议是最上面的，请注意，后方有一个蓝框，请保证是main，如为其他的，不保证稳定性")]),v])}const J=s(c,[["render",u],["__file","client.html.vue"]]);export{J as default};
