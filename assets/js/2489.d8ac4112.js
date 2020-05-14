(window.webpackJsonp=window.webpackJsonp||[]).push([[2489],{2839:function(t,e,s){"use strict";s.r(e);var r=s(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"php-built-in-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-built-in-server"}},[t._v("#")]),t._v(" PHP Built in server")]),t._v(" "),s("p",[t._v("Learn how to use the built in server to develop and test your application without the need of other tools like xamp, wamp, etc.")]),t._v(" "),s("h2",{attrs:{id:"running-the-built-in-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-the-built-in-server"}},[t._v("#")]),t._v(" Running the built in server")]),t._v(" "),s("p",[s("code",[t._v("php -S localhost:80")])]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("PHP 7.1.7 Development Server started at Fri Jul 14 15:11:05 2017"),s("br"),t._v("\nListening on [http://localhost:80](http://localhost:80)"),s("br"),t._v("\nDocument root is C:\\projetos\\repgeral"),s("br"),t._v("\nPress Ctrl-C to quit.")]),t._v(" "),s("p",[t._v("This is the simplest way to start a PHP server that responds to request made to localhost at the port 80.")]),t._v(" "),s("p",[t._v("The -S tells that we are starting a webserver.")]),t._v(" "),s("p",[t._v("The "),s("strong",[t._v("localhost:80")]),t._v(" indicates the host that we are answering and the port. You can use other combinations like:")]),t._v(" "),s("ul",[s("li",[t._v("mymachine:80 - will listen on the address mymachine and port 80;")]),t._v(" "),s("li",[t._v("127.0.0.1:8080 - will listen on the address 127.0.0.1 and port 8080;")])]),t._v(" "),s("h2",{attrs:{id:"built-in-server-with-specific-directory-and-router-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#built-in-server-with-specific-directory-and-router-script"}},[t._v("#")]),t._v(" built in server with specific directory and router script")]),t._v(" "),s("p",[s("code",[t._v("php -S localhost:80 -t project/public router.php")])]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("PHP 7.1.7 Development Server started at Fri Jul 14 15:22:25 2017"),s("br"),t._v("\nListening on [http://localhost:80](http://localhost:80)"),s("br"),t._v("\nDocument root is /home/project/public"),s("br"),t._v("\nPress Ctrl-C to quit.")]),t._v(" "),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Column")]),t._v(" "),s("th",[t._v("Column")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-S")]),t._v(" "),s("td",[t._v("Tell the php that we want a webserver")])]),t._v(" "),s("tr",[s("td",[s("hostname",[t._v(":"),s("port")],1)],1),t._v(" "),s("td",[t._v("The host name and the por to be used")])]),t._v(" "),s("tr",[s("td",[t._v("-t")]),t._v(" "),s("td",[t._v("Public directory")])]),t._v(" "),s("tr",[s("td",[s("filename")],1),t._v(" "),s("td",[t._v("The routing script")])])])]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("An example of router script is:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// router.php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preg_match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/\\.(?:png|jpg|jpeg|gif)$/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_SERVER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"REQUEST_URI"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// serve the requested resource as-is.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//the rest of you code goes here.")]),t._v("\n\n")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);