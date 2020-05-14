(window.webpackJsonp=window.webpackJsonp||[]).push([[2300],{2645:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nsdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nsdate"}},[t._v("#")]),t._v(" NSDate")]),t._v(" "),s("h2",{attrs:{id:"creating-an-nsdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-nsdate"}},[t._v("#")]),t._v(" Creating an NSDate")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("NSDate")]),t._v(" class provides methods for creating "),s("code",[t._v("NSDate")]),t._v(" objects corresponding to a given date and time. An "),s("code",[t._v("NSDate")]),t._v(" can be initialized using the designated initializer, which:")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("Returns an "),s("code",[t._v("NSDate")]),t._v(" object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("NSDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSDate alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithTimeIntervalSinceReferenceDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("code",[t._v("NSDate")]),t._v(" also provides an easy way to create an "),s("code",[t._v("NSDate")]),t._v(" equal to the current date and time:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("NSDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("now "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSDate date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("It is also possible to create an "),s("code",[t._v("NSDate")]),t._v(" a given amount of seconds from the current date and time:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("NSDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("tenSecondsFromNow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSDate dateWithTimeIntervalSinceNow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"date-comparison"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date-comparison"}},[t._v("#")]),t._v(" Date Comparison")]),t._v(" "),s("p",[t._v("There are 4 methods for comparing "),s("code",[t._v("NSDate")]),t._v("s in Objective-C:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("- (BOOL)isEqualToDate:(NSDate *)anotherDate")])]),t._v(" "),s("li",[s("code",[t._v("- (NSDate *)earlierDate:(NSDate *)anotherDate")])]),t._v(" "),s("li",[s("code",[t._v("- (NSDate *)laterDate:(NSDate *)anotherDate")])]),t._v(" "),s("li",[s("code",[t._v("- (NSComparisonResult)compare:(NSDate *)anotherDate")])])]),t._v(" "),s("p",[t._v("Consider the following example using 2 dates, "),s("code",[t._v("NSDate date1 = July 7, 2016")]),t._v(" and "),s("code",[t._v("NSDate date2 = July 2, 2016")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("NSDateComponents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("comps1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSDateComponents alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncomps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("year "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncomps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("month "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncomps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("day "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nNSDateComponents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("comps2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSDateComponents alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    comps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("year "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    comps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("month "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    comps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("day "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nNSDate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" date1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("calendar dateFromComponents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("comps1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Initialized as July 7, 2016 ")]),t._v("\nNSDate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" date2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("calendar dateFromComponents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("comps2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Initialized as July 2, 2016 ")]),t._v("\n\n")])])]),s("p",[t._v("Now that the "),s("code",[t._v("NSDate")]),t._v("s are created, they can be compared:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("date1 isEqualToDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("date2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Here it returns false, as both dates are not equal")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("We can also use the "),s("code",[t._v("earlierDate:")]),t._v(" and "),s("code",[t._v("laterDate:")]),t._v(" methods of the "),s("code",[t._v("NSDate")]),t._v(" class:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("NSDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("earlierDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("date1 earlierDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("date2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Returns the earlier of 2 dates. Here earlierDate will equal date2.")]),t._v("\nNSDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("laterDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("date1 laterDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("date2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Returns the later of 2 dates. Here laterDate will equal date1.")]),t._v("\n\n")])])]),s("p",[t._v("Lastly, we can use "),s("code",[t._v("NSDate")]),t._v("'s "),s("code",[t._v("compare:")]),t._v(" method:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("NSComparisonResult result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("date1 compare"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("date2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" NSOrderedAscending"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Fails")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Comes here if date1 is earlier than date2. In our case it will not come here.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" NSOrderedSame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Fails")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Comes here if date1 is the same as date2. In our case it will not come here.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//NSOrderedDescending")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Succeeds")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Comes here if date1 is later than date2. In our case it will come here")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"convert-nsdate-that-is-composed-from-hour-and-minute-only-to-a-full-nsdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#convert-nsdate-that-is-composed-from-hour-and-minute-only-to-a-full-nsdate"}},[t._v("#")]),t._v(" Convert NSDate that is composed from hour and minute (only) to a full NSDate")]),t._v(" "),s("p",[t._v("There are many cases when one has created an NSDate from only an hour and minute format, i.e: 08:12")]),t._v(" "),s("p",[t._v('The downside for this situation is that your NSDate is almost completely "naked" and what you need to do is to create: day, month, year, second and time zone in order to this object to "play along" with other NSDate types.')]),t._v(" "),s("p",[t._v("For the sake of the example let's say that hourAndMinute is the NSDate type that is composed from hour and minute format:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("NSDateComponents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("hourAndMintuteComponents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("calendar components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NSCalendarUnitHour "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NSCalendarUnitMinute\n                                                         fromDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hourAndMinute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nNSDateComponents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("componentsOfDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSCalendar currentCalendar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NSCalendarUnitDay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NSCalendarUnitMonth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NSCalendarUnitYear\n                                                                     fromDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSDate date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nNSDateComponents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("components "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSDateComponents alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("components setDay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" componentsOfDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("components setMonth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" componentsOfDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("month"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("components setYear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" componentsOfDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("year"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("components setHour"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hourAndMintuteComponents hour"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("components setMinute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hourAndMintuteComponents minute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("components setSecond"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("calendar setTimeZone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSTimeZone defaultTimeZone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nNSDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("yourFullNSDateObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("calendar dateFromComponents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v('Now your object is the total opposite of being "naked".')]),t._v(" "),s("h2",{attrs:{id:"converting-nsdate-to-nsstring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#converting-nsdate-to-nsstring"}},[t._v("#")]),t._v(" Converting NSDate to NSString")]),t._v(" "),s("p",[t._v("If ww have NSDate object, and we want to convert it into NSString. There are different types of Date strings. How we can do that?, It is very simple. Just 3 steps.")]),t._v(" "),s("ol",[s("li",[t._v("Create NSDateFormatter Object")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n   NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];\n\n")])])]),s("ol",[s("li",[t._v("Set the date format in which you want your string.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n   dateFormatter.dateFormat = @\"yyyy-MM-dd 'at' HH:mm\";\n\n")])])]),s("li",[t._v("\nNow, get the formatted string\n"),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v(" NSDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSDate date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your NSDate object")]),t._v("\n NSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("dateString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dateFormatter stringFromDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])]),t._v(" "),s("p",[t._v("This will give output something like this: "),s("code",[t._v("2001-01-02 at 13:00")])]),t._v(" "),s("p",[s("strong",[t._v("Note:")])]),t._v(" "),s("p",[t._v("Creating an "),s("code",[t._v("NSDateFormatter")]),t._v(" instance is an expensive operation, so it is recommended to create it once and reuse when possible.")]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[s("code",[t._v("NSDate")]),t._v(" is a very simple value type, representing one exact moment in universal time. It does not contain information about time zones, daylight saving time, calendars, or locale.")]),t._v(" "),s("p",[s("code",[t._v("NSDate")]),t._v(" is really only an immutable wrapper around an "),s("code",[t._v("NSTimeInterval")]),t._v(" which is a "),s("code",[t._v("double")]),t._v(". There is no mutable subclass, as with some other value types in Foundation.")])])}),[],!1,null,null,null);a.default=n.exports}}]);