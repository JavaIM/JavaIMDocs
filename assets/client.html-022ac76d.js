import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as d,d as a,e,b as n,f as o}from"./app-18fc8981.js";const l={},c=o('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>This page is about installing JavaIM Client.</p><h1 id="📝-client-configuration" tabindex="-1"><a class="header-anchor" href="#📝-client-configuration" aria-hidden="true">#</a> 📝 Client Configuration</h1><h2 id="step-1-install-java" tabindex="-1"><a class="header-anchor" href="#step-1-install-java" aria-hidden="true">#</a> Step 1. Install Java</h2><p>JavaIM requires Java 17. You need to go to Oracle’s official website to download the installation package of JDK 17.</p>',5),h={href:"https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.exe",target:"_blank",rel:"noopener noreferrer"},p=a("h2",{id:"step-2-download-the-default-configured-javaim-from-github-action",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#step-2-download-the-default-configured-javaim-from-github-action","aria-hidden":"true"},"#"),e(" Step 2. Download the default configured JavaIM from Github Action")],-1),u={href:"https://github.com/JavaIM/JavaIM/actions/workflows/maven.yml",target:"_blank",rel:"noopener noreferrer"},f=o(`<p>In the new interface that opens, confirm that the page you open is Summary page. To check it, check the left side of the &quot;Summary&quot; to see if there are any colors. If not, click on the text &quot;Summary&quot;.</p><p>After opening the Summary, search for &quot;Artifacts&quot; in the new interface. You should be able to find &quot;JavaIM - Please Use It After Unzipping&quot; in the area. Click on it, and your browser should start downloading.</p><p>After finishing downloading, unzip and copy the &quot;JavaIM-1.0-SNAPSHOT.jar&quot; to a folder.</p><h2 id="step-3-obtain-the-public-key-from-the-server" tabindex="-1"><a class="header-anchor" href="#step-3-obtain-the-public-key-from-the-server" aria-hidden="true">#</a> Step 3. Obtain the public key from the server</h2><p>After obtaining the public key, rename it to &quot;ServerPublicKey.key&quot; and place it in the same folder as the jar file.</p><h2 id="step-4-run-according-to-prompts" tabindex="-1"><a class="header-anchor" href="#step-4-run-according-to-prompts" aria-hidden="true">#</a> Step 4. Run according to prompts</h2><p>Please open the terminal in the previous folder (cmd for Windows systems). If you are a Linux user, please enter</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$Java_Home</span>/bin/java.exe -Dfile-encoding<span class="token operator">=</span>UTF-8 <span class="token parameter variable">-jar</span> JavaIM-1.0-SNAPSHOT.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you are a Windows user, please also enter</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>%Java_Home%\\bin\\java.exe -Dfile-encoding=UTF-8 -jar JavaIM-1.0-SNAPSHOT.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After that, follow the prompts to input. If you want to open it again, just perform the third step again.</p><h2 id="step-5-complete" tabindex="-1"><a class="header-anchor" href="#step-5-complete" aria-hidden="true">#</a> Step 5. Complete</h2><p>After arriving here, you should already be able to start chatting.</p>`,13);function m(b,v){const t=r("ExternalLinkIcon");return s(),d("div",null,[c,a("p",null,[e("Click "),a("a",h,[e("here"),n(t)]),e(" to download the installation package of JDK 17.")]),p,a("p",null,[e("Access "),a("a",u,[e("https://github.com/JavaIM/JavaIM/actions/workflows/maven.yml"),n(t)]),e(' using a browser. Click on the text with an item on the right side with a green check mark. It is recommended to use the top one. Please note that there is a blue box behind it, and please ensure that it is "main". If not, the stability can not be guaranteed.')]),f])}const k=i(l,[["render",m],["__file","client.html.vue"]]);export{k as default};
