(window.webpackJsonp=window.webpackJsonp||[]).push([[1766],{2111:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"notifications-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notifications-api"}},[t._v("#")]),t._v(" Notifications API")]),t._v(" "),n("h2",{attrs:{id:"requesting-permission-to-send-notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requesting-permission-to-send-notifications"}},[t._v("#")]),t._v(" Requesting Permission to send notifications")]),t._v(" "),n("p",[t._v("We use "),n("code",[t._v("Notification.requestPermission")]),t._v(" to ask the user if he/she wants to receive notifications from our website.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Notification"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestPermission")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Notification"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permission "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'granted'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user approved.")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use of new Notification(...) syntax will now be successful")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Notification"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permission "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'denied'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user denied.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Notification.permission === 'default'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user didn’t make a decision.")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You can’t send notifications until they grant permission.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("p",[t._v("Since Firefox 47\nThe "),n("code",[t._v(".requestPermission")]),t._v(" method can also return a promise when handling the user's decision for granting permission")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Notification"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestPermission")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("permission")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'permission'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" Notification"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Notification"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permission "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" permission"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you got permission !")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("rejection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handle rejection here.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"sending-notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sending-notifications"}},[t._v("#")]),t._v(" Sending Notifications")]),t._v(" "),n("p",[t._v("After the user has approved a "),n("a",{attrs:{href:"http://stackoverflow.com/documentation/javascript/696/notifications-api/2305/requesting-permission-to-send-notifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("request for permission to send notifications"),n("OutboundLink")],1),t._v(", we can send a simple notification that says Hello to the user:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Notification")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" body"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, world!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url to an .ico image'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("p",[t._v("This will send a notification like this:")]),t._v(" "),n("blockquote"),t._v(" "),n("h3",[t._v("Hello")]),t._v("\nHello, world!\n"),n("h2",{attrs:{id:"closing-a-notification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#closing-a-notification"}},[t._v("#")]),t._v(" Closing a notification")]),t._v(" "),n("p",[t._v("You can close a notification by using the "),n("code",[t._v(".close()")]),t._v(" method.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" notification "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Notification")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do some work, then close the notification")]),t._v("\nnotification"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("You can utilize the "),n("code",[t._v("setTimeout")]),t._v(" function to auto-close the notification sometime in the future.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" notification "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Notification")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    notification"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("p",[t._v("The above code will spawn a notification and close it after 4 seconds.")]),t._v(" "),n("h2",{attrs:{id:"notification-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notification-events"}},[t._v("#")]),t._v(" Notification events")]),t._v(" "),n("p",[t._v("The Notification API specifications support 2 events that can be fired by a Notification.")]),t._v(" "),n("ol",[n("li",[t._v("The "),n("code",[t._v("click")]),t._v(" event.")])]),t._v(" "),n("p",[t._v("This event will run when you click on the notification body (excluding the closing X and the Notifications configuration button).")]),t._v(" "),n("p",[t._v("Example:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("notification"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"you click me and this is my event object: "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("ol",[n("li",[t._v("The "),n("code",[t._v("error")]),t._v(" event")])]),t._v(" "),n("p",[t._v("The notification will fire this event whenever something wrong will happen, like being unable to display")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("notification"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"There was an error: "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h4",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),n("ul",[n("li",[t._v("Notification.requestPermission("),n("strong",[t._v("callback")]),t._v(")")]),t._v(" "),n("li",[t._v("Notification.requestPermission().then("),n("strong",[t._v("callback")]),t._v(", "),n("strong",[t._v("rejectFunc")]),t._v(")")]),t._v(" "),n("li",[t._v("new Notification("),n("strong",[t._v("title")]),t._v(", "),n("strong",[t._v("options")]),t._v(")")]),t._v(" "),n("li",[n("strong",[t._v("notification")]),t._v(".close()")])]),t._v(" "),n("h4",{attrs:{id:"remarks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),n("p",[t._v("The Notifications API was designed to allow browser access to notifying the client.")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://caniuse.com/#feat=notifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("Support by browsers"),n("OutboundLink")],1),t._v(" might be limited. Also support by the operating system may be limited.")]),t._v(" "),n("p",[t._v("The following table gives an overview of the earliest browser versions that provide support for notifications.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Chrome")]),t._v(" "),n("th",[t._v("Edge")]),t._v(" "),n("th",[t._v("Firefox")]),t._v(" "),n("th",[t._v("Internet Explorer")]),t._v(" "),n("th",[t._v("Opera")]),t._v(" "),n("th",[t._v("Opera Mini")]),t._v(" "),n("th",[t._v("Safari")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("29")]),t._v(" "),n("td",[t._v("14")]),t._v(" "),n("td",[t._v("46")]),t._v(" "),n("td",[t._v("no support")]),t._v(" "),n("td",[t._v("38")]),t._v(" "),n("td",[t._v("no support")]),t._v(" "),n("td",[t._v("9.1")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);