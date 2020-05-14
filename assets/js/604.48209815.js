(window.webpackJsonp=window.webpackJsonp||[]).push([[604],{950:function(t,s,a){"use strict";a.r(s);var r=a(19),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"valgrind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#valgrind"}},[t._v("#")]),t._v(" Valgrind")]),t._v(" "),a("h2",{attrs:{id:"bytes-lost-forgetting-to-free"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bytes-lost-forgetting-to-free"}},[t._v("#")]),t._v(" Bytes lost -- Forgetting to free")]),t._v(" "),a("p",[t._v("Here is a program that calls malloc but not free:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdlib.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("malloc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the culprint ")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("With no extra arguments, valgrind will not look for this error.")]),t._v(" "),a("p",[t._v("But if we turn on "),a("code",[t._v("--leak-check=yes")]),t._v(" or "),a("code",[t._v("--tool=memcheck")]),t._v(", it will complain and display the lines responsible for those memory leaks if the program was compiled in debug mode:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("$ valgrind "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("leak"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("check"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("missing_free\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4776")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v(" bytes in "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" blocks are definitely lost in loss record "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" of "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4776")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x4024F20")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("malloc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vg_replace_malloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("236")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4776")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x80483F8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("missing_free"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4776")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" \n\n")])])]),a("p",[t._v("If the program is not compiled in debug mode (for example with the "),a("code",[t._v("-g")]),t._v(" flag in GCC) it will still show us where the leak happened in terms of the relevant function, but not the lines.")]),t._v(" "),a("p",[t._v("This lets us go back and look at what block was allocated in that line and try to trace forward to see why it wasn't freed.")]),t._v(" "),a("h2",{attrs:{id:"most-common-errors-encountered-while-using-valgrind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#most-common-errors-encountered-while-using-valgrind"}},[t._v("#")]),t._v(" Most common errors encountered while using Valgrind")]),t._v(" "),a("p",[t._v("Valgrind provides you with the "),a("strong",[t._v("lines at which the error occurred")]),t._v(" at the end of each line in the format "),a("code",[t._v("(file.c:line_no)")]),t._v(". Errors in valgrind are summarised in the following way:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("ERROR SUMMARY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" errors from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("contexts")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("suppressed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("The most common errors include:")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Illegal read/write errors")])])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8451")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Invalid read of size "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8451")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x4E7381D")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getenv")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getenv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("84")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8451")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x4EB1559")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__libc_message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("libc_fatal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8451")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x4F5256B")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__fortify_fail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fortify_fail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8451")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x4F5250F")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__stack_chk_fail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack_chk_fail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8451")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x40059C")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("valg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8451")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("  Address "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x700000007")]),t._v(" is not stack"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d, malloc'")]),t._v("d "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("or")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("recently"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" free'd\n\n")])])]),a("p",[t._v("This happens when the code starts to access memory which does not belong to the program. The size of the memory accessed also gives you an indication of what variable was used.")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Use of Uninitialized Variables")])])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8795")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" errors in context "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" of "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8795")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Conditional jump or move depends on uninitialised "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8795")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x4E881AF")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vfprintf")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vfprintf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1631")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8795")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x4E8F898")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("printf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8795")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x400548")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("valg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("According to the error, at line 7 of the "),a("code",[t._v("main")]),t._v(" of "),a("code",[t._v("valg.c")]),t._v(", the call to "),a("code",[t._v("printf()")]),t._v(" passed an uninitialized variable to "),a("code",[t._v("printf")]),t._v(".")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Illegal freeing of Memory")])])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8954")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Invalid "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" delete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" delete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("realloc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8954")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x4C2EDEB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("valgrind"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vgpreload_memcheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("amd64"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("so"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8954")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x4005A8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("valg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8954")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("  Address "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x5203040")]),t._v(" is "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" bytes inside a block of size "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),t._v(" free'd\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8954")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x4C2EDEB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("valgrind"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vgpreload_memcheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("amd64"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("so"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8954")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x40059C")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("valg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8954")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("  Block was alloc'd at\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8954")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x4C2DB8F")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("malloc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("valgrind"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vgpreload_memcheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("amd64"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("so"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8954")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x40058C")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("valg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("According to valgrind, the code freed the memory illegally (a second time) at "),a("strong",[t._v("line 10")]),t._v(" of "),a("code",[t._v("valg.c")]),t._v(", whereas it was already freed at "),a("strong",[t._v("line 9")]),t._v(", and the block itself was allocated memory at "),a("strong",[t._v("line 7")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"running-valgrind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-valgrind"}},[t._v("#")]),t._v(" Running Valgrind")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("valgrind "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("program arg1 arg2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("input\n\n")])])]),a("p",[t._v("This will run your program and produce a report of any allocations and de-allocations it did. It will also warn you about common errors like using uninitialized memory, dereferencing pointers to strange places, writing off the end of blocks allocated using malloc, or failing to free blocks.")]),t._v(" "),a("h2",{attrs:{id:"adding-flags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-flags"}},[t._v("#")]),t._v(" Adding flags")]),t._v(" "),a("p",[t._v("You can also turn on more tests, such as:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("valgrind "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("tool"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("memcheck "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("leak"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("check"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("program arg1 arg2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("input\n\n")])])]),a("p",[t._v("See valgrind --help for more information about the (many) options, or look at the documentation at "),a("a",{attrs:{href:"http://valgrind.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://valgrind.org/"),a("OutboundLink")],1),t._v(" for detailed information about what the output means.")]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[t._v("valgrind "),a("strong",[t._v("program-name")]),t._v(" "),a("strong",[t._v("optional-arguments")]),t._v(" < "),a("strong",[t._v("test input")])])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("Valgrind is a debugging tool that can be used to diagnose errors regarding memory management in C programs. Valgrind can be used to detect errors like invalid pointer usage, including writing or reading past the allocated space, or making an invalid call to "),a("code",[t._v("free()")]),t._v(". It can also be used for improving applications through functions that conduct memory profiling.")]),t._v(" "),a("p",[t._v("For more info see "),a("a",{attrs:{href:"http://valgrind.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://valgrind.org"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=e.exports}}]);