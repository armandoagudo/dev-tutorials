(window.webpackJsonp=window.webpackJsonp||[]).push([[2817],{3163:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"templates-in-python"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#templates-in-python"}},[t._v("#")]),t._v(" Templates in python")]),t._v(" "),s("h2",{attrs:{id:"simple-data-output-program-using-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-data-output-program-using-template"}},[t._v("#")]),t._v(" Simple data output program using template")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Template\n\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"candy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" price "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" qty "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# define the template")]),t._v("\nt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Simon bought $qty $item for $price dollar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("substitute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Output:")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[t._v("Simon bought "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" candy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" dollar\n\n")])])]),s("p",[t._v("Templates support $-based substitutions instead of %-based substitution. "),s("strong",[t._v("Substitute")]),t._v(" (mapping, keywords) performs template substitution, returning a new string.")]),t._v(" "),s("p",[t._v("Mapping is any dictionary-like object with keys that match with the template placeholders. In this example, price and qty are placeholders. Keyword arguments can also be used as placeholders. Placeholders from keywords take precedence if both are present.")]),t._v(" "),s("h2",{attrs:{id:"changing-delimiter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changing-delimiter"}},[t._v("#")]),t._v(" Changing delimiter")]),t._v(" "),s("p",[t._v('You can change the "$" delimiter to any other. The following example:')]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Template\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyOtherTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    delimiter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#"')]),t._v("\n\n\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ricardo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyOtherTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My name is #name and I have the id: #id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("substitute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("You can read de docs "),s("a",{attrs:{href:"https://docs.python.org/3/library/string.html?highlight=template#string.Template.template",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);