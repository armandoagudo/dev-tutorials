(window.webpackJsonp=window.webpackJsonp||[]).push([[1966],{2311:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"update-operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-operators"}},[t._v("#")]),t._v(" Update Operators")]),t._v(" "),a("h2",{attrs:{id:"set-operator-to-update-specified-field-s-in-document-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-operator-to-update-specified-field-s-in-document-s"}},[t._v("#")]),t._v(" $set operator to update specified field(s) in document(s)")]),t._v(" "),a("h3",{attrs:{id:"i-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-overview"}},[t._v("#")]),t._v(" I.Overview")]),t._v(" "),a("p",[t._v("A significant difference between MongoDB & RDBMS is MongoDB has many kinds of operators. One of them is update operator, which is used in update statements.")]),t._v(" "),a("h3",{attrs:{id:"ii-what-happen-if-we-don-t-use-update-operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ii-what-happen-if-we-don-t-use-update-operators"}},[t._v("#")]),t._v(" II.What happen if we don't use update operators?")]),t._v(" "),a("p",[t._v("Suppose we have a "),a("strong",[t._v("student")]),t._v(" collection to store student information(Table view):\n"),a("a",{attrs:{href:"http://i.stack.imgur.com/u0vd0.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/u0vd0.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v('One day you get a job that need to change Tom\'s gender from "M" to "F". That\'s easy, right? So you write below statement very quickly based on your RDBMS experience:')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// query criteria")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update action")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Let's see what is the result:\n"),a("a",{attrs:{href:"http://i.stack.imgur.com/ykECO.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/ykECO.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("We lost Tom's age & name! From this example, we can know that "),a("strong",[t._v("the whole document will be overrided")]),t._v(" if without any update operator in update statement. This is the default behavior of MongoDB.")]),t._v(" "),a("h3",{attrs:{id:"iii-set-operator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iii-set-operator"}},[t._v("#")]),t._v(" III.$set operator")]),t._v(" "),a("p",[t._v("If we want to change only the 'sex' field in Tom's document, we can use "),a("code",[t._v("$set")]),t._v(" to specify which field(s) we want to update:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// query criteria")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update action")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("The value of "),a("code",[t._v("$set")]),t._v(" is an object, its fields stands for those fields you want to update in the documents, and the values of these fields are the target values.")]),t._v(" "),a("p",[t._v("So, the result is correct now:\n"),a("a",{attrs:{href:"http://i.stack.imgur.com/6Fxmv.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/6Fxmv.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Also, if you want to change both 'sex' and 'age' at the same time, you can append them to "),a("code",[t._v("$set")]),t._v(" :")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// query criteria")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update action")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[t._v("{ $set: { "),a("field1",[t._v(":"),a("value1",[t._v(", "),a("field2",[t._v(":"),a("value2",[t._v(", ... } }")])],1)],1)],1)],1)]),t._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("parameters")]),t._v(" "),a("th",[t._v("Meaning")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("fieldName")])]),t._v(" "),a("td",[t._v("Field will be updated :{"),a("strong",[a("strong",[t._v("name")])]),t._v(": 'Tom'}")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("targetVaule")])]),t._v(" "),a("td",[t._v("Value will be assigned to the field :{name: "),a("strong",[a("strong",[t._v("'Tom'")])]),t._v("}")])])])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("Reference for $set operator:\n"),a("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/operator/update/set/",target:"_blank",rel:"noopener noreferrer"}},[t._v("$set on offical website"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);