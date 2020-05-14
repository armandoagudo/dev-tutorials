(window.webpackJsonp=window.webpackJsonp||[]).push([[1849],{2197:function(t,a,n){"use strict";n.r(a);var e=n(19),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"kotlin-caveats"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kotlin-caveats"}},[t._v("#")]),t._v(" Kotlin Caveats")]),t._v(" "),n("h2",{attrs:{id:"calling-a-tostring-on-a-nullable-type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#calling-a-tostring-on-a-nullable-type"}},[t._v("#")]),t._v(" Calling a toString() on a nullable type")]),t._v(" "),n("p",[t._v("A thing to look out for when using the "),n("code",[t._v("toString")]),t._v(" method in Kotlin is the handling of null in combination with the "),n("code",[t._v("String?")]),t._v(".")]),t._v(" "),n("p",[t._v("For example you want to get text from an "),n("code",[t._v("EditText")]),t._v(" in Android.")]),t._v(" "),n("p",[t._v("You would have a piece of code like:")]),t._v(" "),n("div",{staticClass:"language-kotlin extra-class"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Correct:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" text "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textField"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?:")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);