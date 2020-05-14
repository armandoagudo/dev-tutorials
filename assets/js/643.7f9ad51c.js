(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{989:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"decltype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decltype"}},[t._v("#")]),t._v(" decltype")]),t._v(" "),a("p",[t._v("The keyword "),a("code",[t._v("decltype")]),t._v(" can be used to get the type of a variable, function or an expression.")]),t._v(" "),a("h2",{attrs:{id:"basic-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-example"}},[t._v("#")]),t._v(" Basic Example")]),t._v(" "),a("p",[t._v("This example just illustrates how this keyword can be used.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Assume that type of variable 'a' is not known here, or it may")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// be changed by programmer (from int to long long, for example).")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hence we declare another variable, 'b' of the same type using ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// decltype keyword.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("decltype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'decltype(a)' evaluates to 'int'")]),t._v("\n\n")])])]),a("p",[t._v("If, for example, someone changes, type of 'a' to:")]),t._v(" "),a("p",[a("code",[t._v("float a=99.0f;")])]),t._v(" "),a("p",[t._v("Then the type of variable "),a("code",[t._v("b")]),t._v(" now automatically becomes "),a("code",[t._v("float")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"another-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#another-example"}},[t._v("#")]),t._v(" Another example")]),t._v(" "),a("p",[t._v("Let's say we have vector:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" intVector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("And we want to declare an iterator for this vector. An obvious idea is to use "),a("code",[t._v("auto")]),t._v(". However, it may be needed just declare an iterator variable (and not to assign it to anything). We would do:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("iterator iter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("However, with "),a("code",[t._v("decltype")]),t._v(" it becomes easy and less error prone (if type of "),a("code",[t._v("intVector")]),t._v(" changes).")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("decltype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intVector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("iterator iter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Alternatively:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("decltype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intVector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" iter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("In second example, the return type of "),a("code",[t._v("begin")]),t._v(" is used to determine the actual type, which is "),a("code",[t._v("vector<int>::iterator")]),t._v(".")]),t._v(" "),a("p",[t._v("If we need a const_iterator, we just need to use "),a("code",[t._v("cbegin")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("decltype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intVector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cbegin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" iter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vector<int>::const_iterator")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);