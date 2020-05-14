(window.webpackJsonp=window.webpackJsonp||[]).push([[503],{856:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"handling-the-system-prompt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handling-the-system-prompt"}},[t._v("#")]),t._v(" Handling the system prompt")]),t._v(" "),e("h2",{attrs:{id:"using-the-prompt-command-envrionment-variable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-prompt-command-envrionment-variable"}},[t._v("#")]),t._v(" Using the PROMPT_COMMAND envrionment variable")]),t._v(" "),e("p",[t._v("When the last command in an interactive bash instance is done, the evaluated PS1 variable is displayes. Before actually displaying PS1 bash looks whether the PROMPT_COMMAND is set. This value of this var must be a callable program or script. If this var is set this program/script is called BEFORE the PS1 prompt is displayed.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# just a stupid function, we will use to demonstrate")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# we check the date if Hour is 12 and Minute is lower than 59")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("lunchbreak")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v(" $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("H"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("M"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# and print colored \\033[ starts the escape sequence")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5; is blinking attribute")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2; means bold")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 31 says red")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("printf")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[t._v("\\033")]),t._v("[5;1;31mmind the lunch break"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[t._v("\\033")]),t._v("[0m"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("printf")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[t._v("\\033")]),t._v("[33mstill working..."),e("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[t._v("\\033")]),t._v("[0m"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# activating it")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PROMPT_COMMAND")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lunchbreak\n\n")])])]),e("h2",{attrs:{id:"using-ps2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-ps2"}},[t._v("#")]),t._v(" Using PS2")]),t._v(" "),e("p",[t._v("PS2 is displayed when a command extends to more than one line and bash awaits more keystrokes. It is displayed too when a compound command like "),e("strong",[t._v("while...do..done")]),t._v(" and alike is entered.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PS2")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"would you please complete this command?'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# now enter a command extending to at least two lines to see PS2")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"using-ps3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-ps3"}},[t._v("#")]),t._v(" Using PS3")]),t._v(" "),e("p",[t._v("When the select statement is executed, it displays the given items prefixed with a number and then displays the PS3 prompt:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PS3")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  To choose your language type the preceding number : "')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("lang")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" EN CA FR DE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check input here until valid.")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("break")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"using-ps4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-ps4"}},[t._v("#")]),t._v(" Using PS4")]),t._v(" "),e("p",[t._v("PS4 is displayes when bash is in debugging mode.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env bash")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# switch on debugging")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -x\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# define a stupid_func")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("stupid_func")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" I am line "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" of stupid_func\n   "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" I am line "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" of stupid_func\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# setting the PS4 "DEBUG" prompt')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PS4")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("DEBUG level:"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$SHLVL")]),t._v(" subshell-level: "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BASH_SUBSHELL")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("source-file:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("BASH_SOURCE")]),t._v("}")]),t._v(" line#:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${LINENO}")]),t._v(" function:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${FUNCNAME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":+")]),t._v("${FUNCNAME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}")]),t._v("(): }"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("statement: '")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a normal statement")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" something\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# function call")]),t._v("\nstupid_func\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a pipeline of commands running in a subshell")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"using-ps1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-ps1"}},[t._v("#")]),t._v(" Using PS1")]),t._v(" "),e("p",[t._v("PS1 is the normal system prompt indicating that bash waits for commands being typed in. It understands some escape sequences and can execute functions or progams. As bash has to position the cursor after the displayes prompt, it needs to know how to calculate the effective length of the prompt string. To indicate non printing sequences of chars within the PS1 variable escaped braces are used: "),e("strong",[t._v("[")]),t._v(" "),e("strong",[t._v("a non printing sequence of chars")]),t._v(" "),e("strong",[t._v("]")]),t._v(". All being said holds true for all PS* vars.")]),t._v(" "),e("p",[t._v("(The black caret indicates cursor)")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#everything not being an escape sequence will be literally printed")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PS1")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"literal sequence "')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Prompt is now:")]),t._v("\nliteral sequence ▉\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \\u == user \\h == host \\w == actual working directory")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mind the single quotes avoiding interpretation by shell")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PS1")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\u@\\h:\\w > '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \\u == user, \\h == host, \\w actual working dir")]),t._v("\nlooser@host:/some/path "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ▉\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# executing some commands within PS1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# following line will set foreground color to red, if user==root,")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# else it resets attributes to default")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $( (($EUID == 0)) &&  tput setaf 1)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# later we do reset attributes to default with")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $(  tput sgr0 )")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# assuming being root:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PS1")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\['),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$EUID")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" &&  tput setaf 1 \\]\\u\\["),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("tput sgr0"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('\\]@\\w:\\w \\$ "')]),t._v("\nlooser@host:/some/path "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ▉  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if not root else <red>root<default>@host....")]),t._v("\n\n")])])]),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("ul",[e("li",[t._v('export PS1="something" # displayes when bash awaits a command to be typed in')]),t._v(" "),e("li",[t._v('export PS2="anotherthing" # dsplayed when statement extends to more lines')]),t._v(" "),e("li",[t._v('export PS3="question prompt for select statement" # seldomly used prompt for select. First set PS3 to your needs, then call '),e("strong",[t._v("select")]),t._v(". See "),e("strong",[t._v("help select")])]),t._v(" "),e("li",[t._v('export PS4="mostly useful for debugging; line number and so on" # used for debugging bash scripts.')])]),t._v(" "),e("h4",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Escape")]),t._v(" "),e("th",[t._v("Details")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("\\a")]),t._v(" "),e("td",[t._v("A bell character.")])]),t._v(" "),e("tr",[e("td",[t._v("\\d")]),t._v(" "),e("td",[t._v('The date, in "Weekday Month Date" format (e.g., "Tue May 26").')])]),t._v(" "),e("tr",[e("td",[t._v("\\D{FORMAT}")]),t._v(" "),e("td",[t._v("The FORMAT is passed to `strftime'(3) and the result is inserted into the prompt string; an empty FORMAT results in a locale-specific time representation. The braces are required.")])]),t._v(" "),e("tr",[e("td",[t._v("\\e")]),t._v(" "),e("td",[t._v("An escape character. \\033 works of course too.")])]),t._v(" "),e("tr",[e("td",[t._v("\\h")]),t._v(" "),e("td",[t._v("The hostname, up to the first `.'. (i.e. no domain part)")])]),t._v(" "),e("tr",[e("td",[t._v("\\H")]),t._v(" "),e("td",[t._v("The hostname eventually with domain part")])]),t._v(" "),e("tr",[e("td",[t._v("\\j")]),t._v(" "),e("td",[t._v("The number of jobs currently managed by the shell.")])]),t._v(" "),e("tr",[e("td",[t._v("\\l")]),t._v(" "),e("td",[t._v("The basename of the shell's terminal device name.")])]),t._v(" "),e("tr",[e("td",[t._v("\\n")]),t._v(" "),e("td",[t._v("A newline.")])]),t._v(" "),e("tr",[e("td",[t._v("\\r")]),t._v(" "),e("td",[t._v("A carriage return.")])]),t._v(" "),e("tr",[e("td",[t._v("\\s")]),t._v(" "),e("td",[t._v("The name of the shell, the basename of `$0' (the portion following the final slash).")])]),t._v(" "),e("tr",[e("td",[t._v("\\t")]),t._v(" "),e("td",[t._v("The time, in 24-hour HH:MM:SS format.")])]),t._v(" "),e("tr",[e("td",[t._v("\\T")]),t._v(" "),e("td",[t._v("The time, in 12-hour HH:MM:SS format.")])]),t._v(" "),e("tr",[e("td",[t._v("@")]),t._v(" "),e("td",[t._v("The time, in 12-hour am/pm format.")])]),t._v(" "),e("tr",[e("td",[t._v("\\A")]),t._v(" "),e("td",[t._v("The time, in 24-hour HH:MM format.")])]),t._v(" "),e("tr",[e("td",[t._v("\\u")]),t._v(" "),e("td",[t._v("The username of the current user.")])]),t._v(" "),e("tr",[e("td",[t._v("\\v")]),t._v(" "),e("td",[t._v("The version of Bash (e.g., 2.00)")])]),t._v(" "),e("tr",[e("td",[t._v("\\V")]),t._v(" "),e("td",[t._v("The release of Bash, version + patchlevel (e.g., 2.00.0)")])]),t._v(" "),e("tr",[e("td",[t._v("\\w")]),t._v(" "),e("td",[t._v("The current working directory, with $HOME abbreviated with a tilde (uses the $PROMPT_DIRTRIM variable).")])]),t._v(" "),e("tr",[e("td",[t._v("\\W")]),t._v(" "),e("td",[t._v("The basename of $PWD, with $HOME abbreviated with a tilde.")])]),t._v(" "),e("tr",[e("td",[t._v("!")]),t._v(" "),e("td",[t._v("The history number of this command.")])]),t._v(" "),e("tr",[e("td",[t._v("#")]),t._v(" "),e("td",[t._v("The command number of this command.")])]),t._v(" "),e("tr",[e("td",[t._v("$")]),t._v(" "),e("td",[t._v("If the effective uid is 0, "),e("strong",[t._v("#")]),t._v(", otherwise "),e("strong",[t._v("$")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[t._v("\\NNN")]),t._v(" "),e("td",[t._v("The character whose ASCII code is the octal value NNN.")])]),t._v(" "),e("tr",[e("td",[t._v("|A backslash.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("[")]),t._v(" "),e("td",[t._v("Begin a sequence of non-printing characters. This could be used to embed a terminal control sequence into the prompt.")])]),t._v(" "),e("tr",[e("td",[t._v("]")]),t._v(" "),e("td",[t._v("End a sequence of non-printing characters.")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);