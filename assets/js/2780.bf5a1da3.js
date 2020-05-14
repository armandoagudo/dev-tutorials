(window.webpackJsonp=window.webpackJsonp||[]).push([[2780],{3126:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"python-concurrency"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python-concurrency"}},[t._v("#")]),t._v(" Python concurrency")]),t._v(" "),e("h2",{attrs:{id:"the-multiprocessing-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-multiprocessing-module"}},[t._v("#")]),t._v(" The multiprocessing module")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" __future__ "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" print_function\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" multiprocessing\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("countdown")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Count value"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    p1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" multiprocessing"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("countdown"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    p1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    p2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" multiprocessing"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("countdown"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    p2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    p1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    p2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("p",[t._v("Here, each function is executed in a new process. Since a new instance of Python VM is running the code, there is no "),e("code",[t._v("GIL")]),t._v(" and you get parallelism running on multiple cores.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("Process.start")]),t._v(" method launches this new process and run the function passed in the "),e("code",[t._v("target")]),t._v(" argument with the arguments "),e("code",[t._v("args")]),t._v(". The "),e("code",[t._v("Process.join")]),t._v(" method waits for the end of the execution of processes "),e("code",[t._v("p1")]),t._v(" and "),e("code",[t._v("p2")]),t._v(".")]),t._v(" "),e("p",[t._v("The new processes are launched differently depending on the version of python and the plateform on which the code is running "),e("strong",[t._v("e.g.")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("Windows uses "),e("code",[t._v("spawn")]),t._v(" to create the new process.\n")]),e("li",[t._v("With unix systems and version earlier than 3.3, the processes are created using a "),e("code",[t._v("fork")]),t._v("."),e("br"),t._v("\nNote that this method does not respect the POSIX usage of fork and thus leads to unexpected behaviors, especially when interacting with other multiprocessing libraries.")]),t._v(" "),e("li",[t._v("With unix system and version 3.4+, you can choose to start the new processes with either "),e("code",[t._v("fork")]),t._v(", "),e("code",[t._v("forkserver")]),t._v(" or "),e("code",[t._v("spawn")]),t._v(" using "),e("code",[t._v("multiprocessing.set_start_method")]),t._v(" at the beginning of your program. "),e("code",[t._v("forkserver")]),t._v(" and "),e("code",[t._v("spawn")]),t._v(" methods are slower than forking but avoid some unexpected behaviors.")])]),t._v(" "),e("p",[e("strong",[t._v("POSIX fork usage")]),t._v(":")]),t._v(" "),e("blockquote"),t._v(" "),e("p",[t._v("After a fork in a multithreaded program, the child can safely call only async-signal-safe functions until such time as it calls execve."),e("br"),t._v("\n([see](http://man7.org/linux/man-pages/man2/fork.2.html))")]),t._v(" "),e("p",[t._v("Using fork, a new process will be launched with the exact same state for all the current mutex but only the "),e("code",[t._v("MainThread")]),t._v(" will be launched.\nThis is unsafe as it could lead to race conditions "),e("strong",[t._v("e.g.")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("If you use a "),e("code",[t._v("Lock")]),t._v(" in "),e("code",[t._v("MainThread")]),t._v(" and pass it to an other thread which is suppose to lock it at some point. If the "),e("code",[t._v("fork")]),t._v(" occures simultaneously, the new process will start with a locked lock which will never be released as the second thread does not exist in this new process.")])]),t._v(" "),e("p",[t._v("Actually, this kind of behavior should not occured in pure python as "),e("code",[t._v("multiprocessing")]),t._v(" handles it properly but if you are interacting with other library, this kind of behavior can occures, leading to crash of your system (for instance with numpy/accelerated on macOS).")]),t._v(" "),e("h2",{attrs:{id:"the-threading-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-threading-module"}},[t._v("#")]),t._v(" The threading module")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" __future__ "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" print_function\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" threading\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("counter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Count value"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\nt1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" threading"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Thread"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("countdown"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" threading"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Thread"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("countdown"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("p",[t._v("In certain implementations of Python such as CPython, true parallelism is not achieved using threads because of using what is known as the GIL, or "),e("strong",[t._v("G")]),t._v("lobal "),e("strong",[t._v("I")]),t._v("nterpreter "),e("strong",[t._v("L")]),t._v("ock.")]),t._v(" "),e("p",[t._v("Here is an excellent overview of Python concurrency:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.youtube.com/watch?v=MCs5OvhV9S4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python concurrency by David Beazley (YouTube)"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"passing-data-between-multiprocessing-processes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#passing-data-between-multiprocessing-processes"}},[t._v("#")]),t._v(" Passing data between multiprocessing processes")]),t._v(" "),e("p",[t._v("Because data is sensitive when dealt with between two threads (think concurrent read and concurrent write can conflict with one another, causing race conditions), a set of unique objects were made in order to facilitate the passing of data back and forth between threads. Any truly atomic operation can be used between threads, but it is always safe to stick with Queue.")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" multiprocessing\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" queue\nmy_Queue"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multiprocessing"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Creates a queue with an undefined maximum size")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#this can be dangerous as the queue becomes increasingly large")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#it will take a long time to copy data to/from each read/write thread")]),t._v("\n\n")])])]),e("p",[t._v("Most people will suggest that when using queue, to always place the queue data in a try: except: block instead of using empty. However, for applications where it does not matter if you skip a scan cycle (data can be placed in the queue while it is flipping states from "),e("code",[t._v("queue.Empty==True")]),t._v(" to "),e("code",[t._v("queue.Empty==False")]),t._v(") it is usually better to place read and write access in what I call an Iftry block, because an 'if' statement is technically more performant than catching the exception.")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" multiprocessing\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" queue\n"),e("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''Import necessary Python standard libraries, multiprocessing for classes and queue for the queue exceptions it provides'''")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Queue_Iftry_Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("get_queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" default"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use_default"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" func"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use_func"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''This global method for the Iftry block is provided for it's reuse and \nstandard functionality, the if also saves on performance as opposed to catching\n the exception, which is expencive.\n        It also allows the user to specify a function for the outgoing data to use,\n and a default value to return if the function cannot return the value from the queue'''")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" get_queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("empty"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" use_default"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" default\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_nowait"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Empty"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" use_default"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" default\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" use_func"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" func"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Queue_Iftry_Put")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("put_queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''This global method for the Iftry block is provided because of its reuse \nand \nstandard functionality, the If also saves on performance as opposed to catching\n the exception, which is expensive.\n        Return True if placing value in the queue was successful. Otherwise, false'''")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" put_queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("full"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                put_queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_nowait"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Full"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n\n")])])]),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),e("p",[t._v("The Python developers made sure that the API between "),e("code",[t._v("threading")]),t._v(" and "),e("code",[t._v("multiprocessing")]),t._v(" is similar so that switching between the two variants is easier for programmers.")])])}),[],!1,null,null,null);s.default=n.exports}}]);