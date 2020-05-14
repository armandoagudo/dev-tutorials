(window.webpackJsonp=window.webpackJsonp||[]).push([[1368],{1714:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dynamic-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-type"}},[t._v("#")]),t._v(" Dynamic Type")]),t._v(" "),s("h2",{attrs:{id:"get-the-current-content-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-current-content-size"}},[t._v("#")]),t._v(" Get the Current Content Size")]),t._v(" "),s("h3",{attrs:{id:"swift"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swift"}},[t._v("#")]),t._v(" Swift")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sharedApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("preferredContentSizeCategory\n\n")])])]),s("h3",{attrs:{id:"objective-c"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objective-c"}},[t._v("#")]),t._v(" Objective-C")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),t._v(" sharedApplication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("preferredContentSizeCategory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("This returns a content size category constant, or an accessibility content size category constant.")]),t._v(" "),s("h2",{attrs:{id:"matching-dynamic-type-font-size-in-wkwebview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#matching-dynamic-type-font-size-in-wkwebview"}},[t._v("#")]),t._v(" Matching Dynamic Type Font Size in WKWebView")]),t._v(" "),s("p",[t._v("WKWebView resizes the fonts on web content so that a full-sized web page will fit on the device's form factor. If you want the web text in both portrait and landscape to be similar in size to the user's preferred reading size, you need to set it explicitly.")]),t._v(" "),s("h3",{attrs:{id:"swift-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swift-2"}},[t._v("#")]),t._v(" Swift")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// build HTML header for dynamic type and responsive design")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildHTMLHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get preferred dynamic type font sizes for html styles")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bodySize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFont")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preferredFont")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("forTextStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFontTextStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointSize\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" h1Size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFont")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preferredFont")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("forTextStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFontTextStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointSize\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" h2Size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFont")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preferredFont")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("forTextStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFontTextStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointSize\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" h3Size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFont")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preferredFont")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("forTextStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFontTextStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointSize\n        \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// On iPad, landscape text is larger than preferred font size")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" portraitMultiplier "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" landscapeMultiplier "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// iPhone text is shrunken    ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIDevice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("of"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iPhone"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        portraitMultiplier "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        landscapeMultiplier "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Start HTML header text")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" patternText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<html> <head> <style> "')]),t._v("\n        \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Match Dynamic Type for this page.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"body { background-color: '),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("backgroundColor"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v(';} "')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@media all and (orientation:portrait) {img {max-width: 90%; height: auto;} "')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p, li { font: -apple-system-body; font-family: Georgia, serif; font-size:calc('),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("bodySize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" portraitMultiplier"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v("px + 1.0vw); font-weight: normal; color: "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("fontColor"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v(' } "')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h1 { font: -apple-system-headine; font-family: Verdana, sans-serif; font-size:calc('),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("h1Size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" portraitMultiplier"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v("px + 1.0vw); font-weight: bold; color: "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("headFontColor"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v(' } "')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h2 { font: -apple-system-headine; font-family: Verdana, sans-serif; font-size:calc('),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("h2Size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" portraitMultiplier"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v("px + 1.0vw); font-weight: bold; color: "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("headFontColor"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v(' } "')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h3, h4 { font: -apple-system-headine; font-family: Verdana, sans-serif; font-size:calc('),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("h3Size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" portraitMultiplier"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v("px + 1.0vw); font-weight: bold; color: "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("headFontColor"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v(' } } "')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@media all and (orientation:landscape) {img {max-width: 65%; height: auto;}"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p, li { font: -apple-system-body; font-family: Georgia, serif; font-size:calc('),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("bodySize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" landscapeMultiplier"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v("px + 1.0vw); font-weight: normal; color: "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("fontColor"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v(' }"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h1 { font: -apple-system-headine; font-family: Verdana, sans-serif; font-size:calc('),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("h1Size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" landscapeMultiplier"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v("px + 1.0vw); font-weight: bold; color: "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("headFontColor"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v(' } "')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h2 { font: -apple-system-headine; font-family: Verdana, sans-serif; font-size:calc('),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("h2Size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" landscapeMultiplier"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v("px + 1.0vw); font-weight: bold; color: "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("headFontColor"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v(' } "')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h3, h4 { font: -apple-system-headine; font-family: Verdana, sans-serif; font-size:calc('),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("h3Size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" landscapeMultiplier"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v("px + 1.0vw); font-weight: bold; color: "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("headFontColor"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v(' } } </style>"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</head><body>"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<meta name=\\"viewport\\" content=\\"width: device-width\\">"')]),t._v("\n        \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" patternText\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"text-size-change-notification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-size-change-notification"}},[t._v("#")]),t._v(" Text Size Change Notification")]),t._v(" "),s("p",[t._v("You can register for notifications of when the device text size is changed.")]),t._v(" "),s("h3",{attrs:{id:"swift-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swift-3"}},[t._v("#")]),t._v(" Swift")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSNotificationCenter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultCenter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" selector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updateFont"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategoryDidChangeNotification")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"objective-c-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objective-c-2"}},[t._v("#")]),t._v(" Objective-C")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSNotificationCenter")]),t._v(" defaultCenter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" addObserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" selector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updateFont"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategoryDidChangeNotification")]),t._v(" object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("The notification "),s("code",[t._v("userInfo")]),t._v(" object contains the new size under  "),s("code",[t._v("UIContentSizeCategoryNewValueKey")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"handling-preferred-text-size-change-without-notifications-on-ios-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handling-preferred-text-size-change-without-notifications-on-ios-10"}},[t._v("#")]),t._v(" Handling Preferred Text Size Change Without Notifications on iOS 10")]),t._v(" "),s("p",[s("code",[t._v("UILabel")]),t._v(", "),s("code",[t._v("UITextField")]),t._v(", & "),s("code",[t._v("UITextView")]),t._v(" classes have a new property starting from iOS 10 for automatically resizing their font when a user changes their preferred reading size named "),s("code",[t._v("adjustsFontForContentSizeCategory")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"swift-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swift-4"}},[t._v("#")]),t._v(" Swift")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@IBOutlet")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UILabel")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" #"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("available")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iOS "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("adjustsFontForContentSizeCategory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Observe for UIContentSizeCategoryDidChangeNotification and handle it manually")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// since the adjustsFontForContentSizeCategory property isn't available.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Content size category constants")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategoryExtraSmall")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategorySmall")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategoryMedium")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategoryLarge")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategoryExtraLarge")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategoryExtraExtraLarge")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategoryExtraExtraExtraLarge")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Accessibility sizes")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategoryAccessibilityMedium")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategoryAccessibilityLarge")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategoryAccessibilityExtraLarge")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategoryAccessibilityExtraExtraLarge")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIContentSizeCategoryAccessibilityExtraExtraExtraLarge")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);