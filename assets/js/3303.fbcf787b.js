(window.webpackJsonp=window.webpackJsonp||[]).push([[3303],{3648:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"window-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-functions"}},[t._v("#")]),t._v(" Window Functions")]),t._v(" "),a("h2",{attrs:{id:"setting-up-a-flag-if-other-rows-have-a-common-property"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-flag-if-other-rows-have-a-common-property"}},[t._v("#")]),t._v(" Setting up a flag if other rows have a common property")]),t._v(" "),a("p",[t._v("Let's say I have this data:")]),t._v(" "),a("p",[t._v("Table items")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("id")]),t._v(" "),a("th",[t._v("name")]),t._v(" "),a("th",[t._v("tag")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("example")]),t._v(" "),a("td",[t._v("unique_tag")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("foo")]),t._v(" "),a("td",[t._v("simple")])]),t._v(" "),a("tr",[a("td",[t._v("42")]),t._v(" "),a("td",[t._v("bar")]),t._v(" "),a("td",[t._v("simple")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("baz")]),t._v(" "),a("td",[t._v("hello")])]),t._v(" "),a("tr",[a("td",[t._v("51")]),t._v(" "),a("td",[t._v("quux")]),t._v(" "),a("td",[t._v("world")])])])]),t._v(" "),a("p",[t._v("I'd like to get all those lines and know if a tag is used by other lines")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OVER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" flag "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" items\n\n")])])]),a("p",[t._v("The result will be:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("id")]),t._v(" "),a("th",[t._v("name")]),t._v(" "),a("th",[t._v("tag")]),t._v(" "),a("th",[t._v("flag")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("example")]),t._v(" "),a("td",[t._v("unique_tag")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("foo")]),t._v(" "),a("td",[t._v("simple")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("42")]),t._v(" "),a("td",[t._v("bar")]),t._v(" "),a("td",[t._v("simple")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("baz")]),t._v(" "),a("td",[t._v("hello")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("51")]),t._v(" "),a("td",[t._v("quux")]),t._v(" "),a("td",[t._v("world")]),t._v(" "),a("td",[t._v("false")])])])]),t._v(" "),a("p",[t._v("In case your database doesn't have OVER and PARTITION you can use this to produce the same result:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" items B "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" flag "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" items A\n\n")])])]),a("h2",{attrs:{id:"getting-a-running-total"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-a-running-total"}},[t._v("#")]),t._v(" Getting a running total")]),t._v(" "),a("p",[t._v("Given this data:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("date")]),t._v(" "),a("th",[t._v("amount")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2016-03-12")]),t._v(" "),a("td",[t._v("200")])]),t._v(" "),a("tr",[a("td",[t._v("2016-03-11")]),t._v(" "),a("td",[t._v("-50")])]),t._v(" "),a("tr",[a("td",[t._v("2016-03-14")]),t._v(" "),a("td",[t._v("100")])]),t._v(" "),a("tr",[a("td",[t._v("2016-03-15")]),t._v(" "),a("td",[t._v("100")])]),t._v(" "),a("tr",[a("td",[t._v("2016-03-10")]),t._v(" "),a("td",[t._v("-250")])])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OVER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" running\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" operations\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),t._v("\n\n")])])]),a("p",[t._v("will give you")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("date")]),t._v(" "),a("th",[t._v("amount")]),t._v(" "),a("th",[t._v("running")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2016-03-10")]),t._v(" "),a("td",[t._v("-250")]),t._v(" "),a("td",[t._v("-250")])]),t._v(" "),a("tr",[a("td",[t._v("2016-03-11")]),t._v(" "),a("td",[t._v("-50")]),t._v(" "),a("td",[t._v("-300")])]),t._v(" "),a("tr",[a("td",[t._v("2016-03-12")]),t._v(" "),a("td",[t._v("200")]),t._v(" "),a("td",[t._v("-100")])]),t._v(" "),a("tr",[a("td",[t._v("2016-03-14")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("2016-03-15")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("-100")])])])]),t._v(" "),a("h2",{attrs:{id:"finding-out-of-sequence-records-using-the-lag-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finding-out-of-sequence-records-using-the-lag-function"}},[t._v("#")]),t._v(' Finding "out-of-sequence" records using the LAG() function')]),t._v(" "),a("p",[t._v("Given these sample data:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("STATUS")]),t._v(" "),a("th",[t._v("STATUS_TIME")]),t._v(" "),a("th",[t._v("STATUS_BY")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("ONE")]),t._v(" "),a("td",[t._v("2016-09-28-19.47.52.501398")]),t._v(" "),a("td",[t._v("USER_1")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("ONE")]),t._v(" "),a("td",[t._v("2016-09-28-19.47.52.501511")]),t._v(" "),a("td",[t._v("USER_2")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("THREE")]),t._v(" "),a("td",[t._v("2016-09-28-19.47.52.501517")]),t._v(" "),a("td",[t._v("USER_3")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("TWO")]),t._v(" "),a("td",[t._v("2016-09-28-19.47.52.501521")]),t._v(" "),a("td",[t._v("USER_2")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("THREE")]),t._v(" "),a("td",[t._v("2016-09-28-19.47.52.501524")]),t._v(" "),a("td",[t._v("USER_4")])])])]),t._v(" "),a("p",[t._v("Items identified by "),a("code",[t._v("ID")]),t._v(" values must move from "),a("code",[t._v("STATUS")]),t._v(" 'ONE' to 'TWO' to 'THREE' in sequence, without skipping statuses. The problem is to find users ("),a("code",[t._v("STATUS_BY")]),t._v(") values who violate the rule and move from 'ONE' immediately to 'THREE'.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("LAG()")]),t._v(" analytical function helps to solve the problem by returning for each row the value in the preceding row:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n  t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  LAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OVER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" status_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" prev_status \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" test t\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" t1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'THREE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" prev_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TWO'")]),t._v("\n\n")])])]),a("p",[t._v("In case your database doesn't have LAG() you can use this to produce the same result:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" prev_status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" prev_status_time\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Data")]),t._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Data")]),t._v(" B\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("   B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MAX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" status_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("   A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'THREE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TWO'")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"adding-the-total-rows-selected-to-every-row"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-total-rows-selected-to-every-row"}},[t._v("#")]),t._v(" Adding the total rows selected to every row")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" your_columns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OVER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Ttl_Rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" your_data_set\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("id")]),t._v(" "),a("th",[t._v("name")]),t._v(" "),a("th",[t._v("Ttl_Rows")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("example")]),t._v(" "),a("td",[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("foo")]),t._v(" "),a("td",[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("bar")]),t._v(" "),a("td",[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("baz")]),t._v(" "),a("td",[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("quux")]),t._v(" "),a("td",[t._v("5")])])])]),t._v(" "),a("p",[t._v("Instead of using two queries to get a count then the line, you can use an aggregate as a window function and use the full result set as the window."),a("br"),t._v("\nThis can be used as a base for further calculation without the complexity of extra self joins.")]),t._v(" "),a("h2",{attrs:{id:"getting-the-n-most-recent-rows-over-multiple-grouping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-n-most-recent-rows-over-multiple-grouping"}},[t._v("#")]),t._v(" Getting the N most recent rows over multiple grouping")]),t._v(" "),a("p",[t._v("Given this data")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("User_ID")]),t._v(" "),a("th",[t._v("Completion_Date")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("2016-07-20")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("2016-07-21")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2016-07-20")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2016-07-21")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2016-07-22")])])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" CTE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        ROW_NUMBER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OVER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" User_ID \n                           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" Completion_Date "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Row_Num\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" FORM CTE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" Row_Num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n\n\n")])])]),a("p",[t._v("Using n=1, you'll get the one most recent row per "),a("code",[t._v("user_id")]),t._v(":")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("User_ID")]),t._v(" "),a("th",[t._v("Completion_Date")]),t._v(" "),a("th",[t._v("Row_Num")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("2016-07-21")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2016-07-22")]),t._v(" "),a("td",[t._v("1")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);