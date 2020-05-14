(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{542:function(t,n,s){"use strict";s.r(n);var a=s(19),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"google-signin-integration-on-android"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-signin-integration-on-android"}},[t._v("#")]),t._v(" Google signin integration on android")]),t._v(" "),s("p",[t._v("This topic is based on How to integrate google sign-in, On android apps")]),t._v(" "),s("h2",{attrs:{id:"integration-of-google-auth-in-your-project-get-a-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration-of-google-auth-in-your-project-get-a-configuration-file"}},[t._v("#")]),t._v(" Integration of google Auth in your project. (Get a configuration file)")]),t._v(" "),s("p",[t._v("First get the Configuration File for Sign-in from")]),t._v(" "),s("p",[t._v("Open link below")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/identity/sign-in/android/start-integrating%5D%5B1%5D",target:"_blank",rel:"noopener noreferrer"}},[t._v("[https://developers.google.com/identity/sign-in/android/start-integrating][1]"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("click on get A configuration file")]),t._v(" "),s("ul",[s("li",[t._v("Enter App name And package name  and click on choose and configure services")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://stackoverflow.com/a/33479550/4044380",target:"_blank",rel:"noopener noreferrer"}},[t._v("provide SHA1"),s("OutboundLink")],1),t._v(" Enable google SIGNIN and generate configuration files")])]),t._v(" "),s("p",[t._v("Download the configuration file and place the file in app/ folder of your project")]),t._v(" "),s("ol",[s("li",[t._v("Add the dependency to your project-level build.gradle:")])]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("classpath 'com.google.gms:google-services:3.0.0'")]),t._v(" "),s("ol",[s("li",[t._v("Add the plugin to your app-level build.gradle:(bottom)")])]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("apply plugin: 'com.google.gms.google-services'")]),t._v(" "),s("ol",[s("li",[t._v("add this dependency to your app gradle file")])]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("dependencies {\ncompile 'com.google.android.gms:play-services-auth:9.8.0'\n}")]),t._v(" "),s("h2",{attrs:{id:"code-implementation-google-signin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-implementation-google-signin"}},[t._v("#")]),t._v(" Code Implementation Google SignIn")]),t._v(" "),s("ul",[s("li",[t._v("In your sign-in activity's onCreate method, configure Google Sign-In to request the user data required by your app.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nGoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)\n        .requestEmail()\n        .build();\n\n")])])]),s("ul",[s("li",[t._v("create a GoogleApiClient object with access to the Google Sign-In API and the options you specified.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nmGoogleApiClient = new GoogleApiClient.Builder(this)\n        .enableAutoManage(this /* FragmentActivity */, this /* OnConnectionFailedListener */)\n        .addApi(Auth.GOOGLE_SIGN_IN_API, gso)\n        .build();\n\n")])])]),s("li",[t._v("\nNow When User click on Google signin button call this Function.\n"),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("signIn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" signInIntent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Auth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoogleSignInApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSignInIntent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mGoogleApiClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startActivityForResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signInIntent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RC_SIGN_IN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])]),t._v(" "),s("li",[t._v("\nimplement OnActivityResult to get the response.\n")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n@Override\npublic void onActivityResult(int requestCode, int resultCode, Intent data) {\n    super.onActivityResult(requestCode, resultCode, data);\n\n    // Result returned from launching the Intent from GoogleSignInApi.getSignInIntent(...);\n    if (requestCode == RC_SIGN_IN) {\n        GoogleSignInResult result = Auth.GoogleSignInApi.getSignInResultFromIntent(data);\n        handleSignInResult(result);\n    }\n}\n\n")])])]),s("li",[t._v("\nLast step Handle The Result and get User Data\n"),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleSignInResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoogleSignInResult")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("d")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"handleSignInResult:"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSuccess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSuccess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Signed in successfully, show authenticated UI.")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoogleSignInAccount")]),t._v(" acct "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSignInAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     mStatusTextView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("signed_in_fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" acct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDisplayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateUI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Signed out, show unauthenticated UI.")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateUI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])])}),[],!1,null,null,null);n.default=e.exports}}]);