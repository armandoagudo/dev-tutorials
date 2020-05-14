(window.webpackJsonp=window.webpackJsonp||[]).push([[2027],{2376:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"modify-json-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-json-text"}},[s._v("#")]),s._v(" Modify JSON text")]),s._v(" "),a("h2",{attrs:{id:"modify-value-in-json-text-on-the-specified-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-value-in-json-text-on-the-specified-path"}},[s._v("#")]),s._v(" Modify value in JSON text on the specified path")]),s._v(" "),a("p",[s._v("JSON_MODIFY function uses JSON text as input parameter, and modifies a value on the specified path using third argument:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" nvarchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"Id":1,"Name":"Toy Car","Price":34.99}\'')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" JSON_MODIFY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$.Price'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39.99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('-- Output: {"Id":1,"Name":"Toy Car","Price":39.99}')]),s._v("\n\n")])])]),a("p",[s._v('As a result, we will have new JSON text with "Price":39.99 and other value will not be changed. If object on the specified path does not exists, JSON_MODIFY will insert key:value pair.')]),s._v(" "),a("p",[s._v("In order to delete key:value pair, put NULL as new value:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" nvarchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"Id":1,"Name":"Toy Car","Price":34.99}\'')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" JSON_MODIFY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$.Price'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('-- Output: {"Id":1,"Name":"Toy Car"}')]),s._v("\n\n")])])]),a("p",[s._v("JSON_MODIFY will by default delete key if it does not have value so you can use it to delete a key.")]),s._v(" "),a("h2",{attrs:{id:"append-a-scalar-value-into-a-json-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#append-a-scalar-value-into-a-json-array"}},[s._v("#")]),s._v(" Append a scalar value into a JSON array")]),s._v(" "),a("p",[s._v("JSON_MODIFY has 'append' mode that appends value into array.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" nvarchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"Id":1,"Name":"Toy Car","Tags":["toy","game"]}\'')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" JSON_MODIFY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'append $.Tags'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sales'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('-- Output: {"Id":1,"Name":"Toy Car","Tags":["toy","game","sales"]}')]),s._v("\n\n")])])]),a("p",[s._v("If array on the specified path does not exists, JSON_MODIFY(append) will create new array with a single element:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" nvarchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"Id":1,"Name":"Toy Car","Price":34.99}\'')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" JSON_MODIFY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'append $.Tags'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sales'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('-- Output {"Id":1,"Name":"Toy Car","Tags":["sales"]}')]),s._v("\n\n")])])]),a("h2",{attrs:{id:"insert-new-json-object-in-json-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-new-json-object-in-json-text"}},[s._v("#")]),s._v(" Insert new JSON Object in JSON text")]),s._v(" "),a("p",[s._v("JSON_MODIFY function enables you to insert JSON objects into JSON text:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" nvarchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"Id":1,"Name":"Toy Car"}\'')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" JSON_MODIFY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$.Price'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n                        JSON_QUERY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"Min":34.99,"Recommended":45.49}\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('-- Output: {"Id":1,"Name":"Toy Car","Price":{"Min":34.99,"Recommended":45.49}}')]),s._v("\n\n")])])]),a("p",[s._v('Since third parameter is text you need to wrap it with JSON_QUERY function to "cast" text to JSON. Without this "cast", JSON_MODIFY will treat third parameter as plain text and escape characters before inserting it as string value. Without JSON_QUERY results will be:')]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Id"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Toy Car"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Price"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\\"Min\\":34.99,\\"Recommended\\":45.49}\'')]),s._v("}\n\n")])])]),a("p",[s._v("JSON_MODIFY will insert this object if it does not exist, or delete it if value of third parameter is NULL.")]),s._v(" "),a("h2",{attrs:{id:"insert-new-json-array-generated-with-for-json-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-new-json-array-generated-with-for-json-query"}},[s._v("#")]),s._v(" Insert new JSON array generated with FOR JSON query")]),s._v(" "),a("p",[s._v("You can generate JSON object using standard SELECT query with FOR JSON clause and insert it into JSON text as third parameter:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" nvarchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"Id":17,"Name":"WWI"}\'')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" JSON_MODIFY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$.tables'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" JSON PATH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" affected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Id"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"master"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tables"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Colors"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Colors_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OrderLines"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PackageTypes"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PackageTypes_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"StockGroups"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"StockItemStockGroups"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"StockGroups_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"StateProvinces"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CustomerTransactions"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"StateProvinces_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cities"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cities_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SystemParameters"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"InvoiceLines"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Suppliers"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"StockItemTransactions"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Suppliers_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Customers"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Customers_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PurchaseOrders"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Orders"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"People"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"StockItems"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"People_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ColdRoomTemperatures"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ColdRoomTemperatures_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VehicleTemperatures"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"StockItems_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Countries"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"StockItemHoldings"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sysdiagrams"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PurchaseOrderLines"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Countries_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DeliveryMethods"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DeliveryMethods_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PaymentMethods"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SupplierTransactions"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PaymentMethods_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TransactionTypes"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SpecialDeals"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TransactionTypes_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SupplierCategories"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SupplierCategories_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"BuyingGroups"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Invoices"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"BuyingGroups_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CustomerCategories"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CustomerCategories_Archive"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}\n\n")])])]),a("p",[s._v("JSON_MODIFY will know that select query with FOR JSON clause generates valid JSON array and it will just insert it into JSON text.")]),s._v(" "),a("blockquote"),s._v(" "),a("p",[s._v("You can use all FOR JSON options in SELECT query, "),a("strong",[s._v("except\nWITHOUT_ARRAY_WRAPPER")]),s._v(", which will generate single object instead of\nJSON array. See other example in this topic to see how insert single\nJSON object.")]),s._v(" "),a("h2",{attrs:{id:"insert-single-json-object-generated-with-for-json-clause"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-single-json-object-generated-with-for-json-clause"}},[s._v("#")]),s._v(" Insert single JSON object generated with FOR JSON clause")]),s._v(" "),a("p",[s._v("You can generate JSON object using standard SELECT query with FOR JSON clause and WITHOUT_ARRAY_WRAPPER option, and insert it into JSON text as a third parameter:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" nvarchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"Id":17,"Name":"WWI"}\'')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" JSON_MODIFY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$.table'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n                        JSON_QUERY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" create_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" schema_id\n                           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Colors'")]),s._v(" \n                           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" JSON PATH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" WITHOUT_ARRAY_WRAPPER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@json")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" affected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Id"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"WWI"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"table"')]),s._v(":{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Colors"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"create_date"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2016-06-02T10:04:03.280"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"schema_id"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("}}\n\n")])])]),a("p",[s._v("FOR JSON with WITHOUT_ARRAY_WRAPPER option may generate invalid JSON text if SELECT query returns more than one result (you should use TOP 1 or filter by primary key in this case). Therefore, JSON_MODIFY will assume that returned result is just a plain text and escape it like any other text if you don't wrap it with JSON_QUERY function.")]),s._v(" "),a("blockquote"),s._v(" "),a("p",[s._v("You should wrap **FOR JSON, WITHOUT_ARRAY_WRAPPER** query with\n**JSON_QUERY** function in order to cast result to JSON.")])])}),[],!1,null,null,null);t.default=e.exports}}]);