(window.webpackJsonp=window.webpackJsonp||[]).push([[3511],{3858:function(t,a,n){"use strict";n.r(a);var s=n(19),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"best-practices-for-migrating-from-uilocalnotification-to-user-notifications-framework"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#best-practices-for-migrating-from-uilocalnotification-to-user-notifications-framework"}},[t._v("#")]),t._v(" Best practices for migrating from UILocalNotification to User Notifications framework")]),t._v(" "),n("h2",{attrs:{id:"usernotifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usernotifications"}},[t._v("#")]),t._v(" UserNotifications")]),t._v(" "),n("li",[t._v("\nYou will have to import UserNotifications\n"),n("div",{staticClass:"language-cs extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cs"}},[n("code",[t._v(" @"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("import")]),t._v(" UserNotifications"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])]),t._v(" "),n("p",[t._v("2.Request authorization for localNotification")]),t._v(" "),n("div",{staticClass:"language-cs extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cs"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" center "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UNUserNotificationCenter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("current")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncenter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAuthorization")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alert"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sound"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("granted"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Enable or disable features based on authorization.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("li",[t._v("\nNow we will update the application icon badge number\n"),n("div",{staticClass:"language-cs extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cs"}},[n("code",[t._v(" @IBAction  "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("triggerNotification")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("UNMutableNotificationContent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NSString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("localizedUserNotificationString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("forKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tom said:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("arguments")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NSString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("localizedUserNotificationString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("forKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Mike！Let\'s go."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("arguments")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sound "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UNNotificationSound"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token type-expression class-name"}}),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("badge "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UIApplication"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("shared")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applicationIconBadgeNumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("categoryIdentifier "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.mike.localNotification"')]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Deliver the notification in two seconds.")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" trigger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UNTimeIntervalNotificationTrigger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("timeInterval")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("repeats")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" request "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UNNotificationRequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("identifier")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TwoSecond"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("trigger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trigger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Schedule the notification.")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" center "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UNUserNotificationCenter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("current")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n @IBAction "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopNotification")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_")]),t._v(" sender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AnyObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" center "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UNUserNotificationCenter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("current")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeAllPendingNotificationRequests")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);