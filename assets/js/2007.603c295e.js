(window.webpackJsonp=window.webpackJsonp||[]).push([[2007],{2354:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"full-text-indexing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-text-indexing"}},[t._v("#")]),t._v(" Full-Text Indexing")]),t._v(" "),s("h2",{attrs:{id:"a-creating-a-unique-index-a-full-text-catalog-and-a-full-text-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-creating-a-unique-index-a-full-text-catalog-and-a-full-text-index"}},[t._v("#")]),t._v(" A. Creating a unique index, a full-text catalog, and a full-text index")]),t._v(" "),s("p",[t._v("The following example creates a unique index on the JobCandidateID column of the HumanResources.JobCandidate table of the AdventureWorks2012 sample database. The example then creates a default full-text catalog, ft. Finally, the example creates a full-text index on the Resume column, using the ft catalog and the system stoplist.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USE")]),t._v(" AdventureWorks2012"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nGO  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" ui_ukJobCand "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" HumanResources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JobCandidate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JobCandidateID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" FULLTEXT CATALOG ft "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" FULLTEXT "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" HumanResources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JobCandidate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Resume"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" ui_ukJobCand   \n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" STOPLIST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SYSTEM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nGO \n\n")])])]),s("p",[s("a",{attrs:{href:"https://www.simple-talk.com/sql/learn-sql-server/understanding-full-text-indexing-in-sql-server/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.simple-talk.com/sql/learn-sql-server/understanding-full-text-indexing-in-sql-server/"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/cc879306.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://msdn.microsoft.com/en-us/library/cc879306.aspx"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/ms142571.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://msdn.microsoft.com/en-us/library/ms142571.aspx"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"creating-a-full-text-index-on-several-table-columns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-full-text-index-on-several-table-columns"}},[t._v("#")]),t._v(" Creating a full-text index on several table columns")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USE")]),t._v(" AdventureWorks2012"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nGO  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" FULLTEXT CATALOG production_catalog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nGO  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" FULLTEXT "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" Production"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProductReview  \n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("   \n  ReviewerName  \n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Language")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1033")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n  EmailAddress  \n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Language")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1033")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n  Comments   \n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Language")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1033")]),t._v("       \n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" PK_ProductReview_ProductReviewID   \n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" production_catalog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \nGO  \n\n")])])]),s("h2",{attrs:{id:"creating-a-full-text-index-with-a-search-property-list-without-populating-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-full-text-index-with-a-search-property-list-without-populating-it"}},[t._v("#")]),t._v(" Creating a full-text index with a search property list without populating it")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USE")]),t._v(" AdventureWorks2012"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nGO  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" FULLTEXT "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" Production"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Document  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("   \n  Title  \n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Language")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1033")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n  DocumentSummary  \n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Language")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1033")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n  Document   \n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMN")]),t._v(" FileExtension  \n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Language")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1033")]),t._v("   \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" PK_Document_DocumentID  \n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" STOPLIST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SYSTEM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SEARCH PROPERTY LIST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DocumentPropertyList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CHANGE_TRACKING "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OFF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v(" POPULATION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n   GO  \n\n")])])]),s("p",[t._v("And populating it later with")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" FULLTEXT "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" Production"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Document "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" CHANGE_TRACKING AUTO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nGO  \n\n")])])]),s("h2",{attrs:{id:"full-text-search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-text-search"}},[t._v("#")]),t._v(" Full-Text Search")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" product_id   \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" products   \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONTAINS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("product_description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ”Snap Happy "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("EZ” "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" FORMSOF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("THESAURUS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("’Snap Happy’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" ‘"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("EZ’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" product_cost "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" candidate_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("SSN   \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" candidates   \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONTAINS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("candidate_resume"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SQL")]),t._v(" Server”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" candidate_division "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DBA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n")])])]),s("p",[t._v("For more and detailed info\n"),s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/ms142571.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://msdn.microsoft.com/en-us/library/ms142571.aspx"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);