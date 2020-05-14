(window.webpackJsonp=window.webpackJsonp||[]).push([[2146],{2493:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"server-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-information"}},[s._v("#")]),s._v(" Server Information")]),s._v(" "),t("h2",{attrs:{id:"show-variables-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-variables-example"}},[s._v("#")]),s._v(" SHOW VARIABLES example")]),s._v(" "),t("p",[s._v("To get all the server variables run this query either in the SQL window of your preferred interface (PHPMyAdmin or other) or in the MySQL CLI interface")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" VARIABLES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("You can specify if you want the session variables or the global variables as follows:")]),s._v(" "),t("p",[s._v("Session variables:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" VARIABLES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Global variables:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" VARIABLES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Like any other SQL command you can add parameters to your query such as the LIKE command:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" VARIABLES "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'max_join_size'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Or, using wildcards:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" VARIABLES "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%size%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("You can also filter the results of the SHOW query using a WHERE parameter as follows:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" VARIABLES "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"show-status-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-status-example"}},[s._v("#")]),s._v(" SHOW STATUS example")]),s._v(" "),t("p",[s._v("To get the database server status run this query in either the SQL window of your preferred interface (PHPMyAdmin or other) or on the MySQL CLI interface.")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("You can specify whether you wish to receive the SESSION or GLOBAL status of your sever like so:\nSession status:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Global status:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Like any other SQL command you can add parameters to your query such as the LIKE command:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Key%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Or the Where command:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("The main difference between GLOBAL and SESSION is that with the GLOBAL modifier the command displays aggregated information about the server and all of it's connections, while the SESSION modifier will only show the values for the current connection.")]),s._v(" "),t("h4",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[s._v("#")]),s._v(" Parameters")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Parameters")]),s._v(" "),t("th",[s._v("Explanation")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("GLOBAL")]),s._v(" "),t("td",[s._v("Shows the variables as they are configured for the entire server. Optional.")])]),s._v(" "),t("tr",[t("td",[s._v("SESSION")]),s._v(" "),t("td",[s._v("Shows the variables that are configured for this session only. Optional.")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);