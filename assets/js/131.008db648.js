(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{476:function(t,a,e){"use strict";e.r(a);var s=e(19),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"constraintlayout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constraintlayout"}},[t._v("#")]),t._v(" ConstraintLayout")]),t._v(" "),e("p",[e("code",[t._v("ConstraintLayout")]),t._v(" is a "),e("code",[t._v("ViewGroup")]),t._v(" which allows you to position and size widgets in a flexible way. It is compatible with Android 2.3 (API level 9) and higher.")]),t._v(" "),e("p",[t._v("It allows you to create large and complex layouts with a flat view hierarchy. It is similar to "),e("code",[t._v("RelativeLayout")]),t._v(" in that all views are laid out according to relationships between sibling views and the parent layout, but it's more flexible than "),e("code",[t._v("RelativeLayout")]),t._v(" and easier to use with Android Studio's Layout Editor.")]),t._v(" "),e("h2",{attrs:{id:"adding-constraintlayout-to-your-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-constraintlayout-to-your-project"}},[t._v("#")]),t._v(" Adding ConstraintLayout to your project")]),t._v(" "),e("p",[t._v("To work with ConstraintLayout, you need Android Studio Version 2.2 or newer and have at least version 32 (or higher) of Android Support Repository.")]),t._v(" "),e("ol",[e("li",[t._v("Add the Constraint Layout library as a dependency in your "),e("code",[t._v("build.gradle")]),t._v(" file:")])]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("dependencies "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   compile "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.android.support.constraint:constraint-layout:1.0.2'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("ol",[e("li",[t._v("Sync project")])]),t._v(" "),e("p",[t._v("To add a new constraint layout to your project:")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Right-click")]),t._v(" on your module's layout directory, then click "),e("code",[t._v("New > XML > Layout XML.")])]),t._v(" "),e("li",[t._v("Enter a "),e("strong",[t._v("name")]),t._v(" for the layout and enter "),e("code",[t._v('"android.support.constraint.ConstraintLayout"')]),t._v(" for the Root Tag.")]),t._v(" "),e("li",[t._v("Click "),e("strong",[t._v("Finish")]),t._v(".")])]),t._v(" "),e("p",[t._v("Otherwise just add in a layout file:")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("xml version"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConstraintLayout")]),t._v("\n    xmlns"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),t._v("\n    xmlns"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res-auto"')]),t._v("\n    android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match_parent"')]),t._v("\n    android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match_parent"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConstraintLayout")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"chains"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chains"}},[t._v("#")]),t._v(" Chains")]),t._v(" "),e("p",[t._v("Since "),e("code",[t._v("ConstraintLayout")]),t._v(" alpha 9, "),e("strong",[t._v("Chains")]),t._v(" are available. A "),e("strong",[t._v("Chain")]),t._v(" is a set of views inside a "),e("code",[t._v("ConstraintLayout")]),t._v(" that are connected in a bi-directional way between them, i.e "),e("strong",[t._v("A")]),t._v(" connected to "),e("strong",[t._v("B")]),t._v(" with a constraint, and "),e("strong",[t._v("B")]),t._v(" connected to "),e("strong",[t._v("A")]),t._v(" with another constraint.")]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConstraintLayout")]),t._v("\n    xmlns"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),t._v("\n    xmlns"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res-auto"')]),t._v("\n    android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match_parent"')]),t._v("\n    android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match_parent"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" view is linked "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" the bottomTextView "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextView")]),t._v("\n        android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/topTextView"')]),t._v("\n        android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n        android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n        android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TextView"')]),t._v("\n        app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_constraintBottom_toTopOf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/bottomTextView"')]),t._v("\n        app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_constraintTop_toTopOf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parent"')]),t._v("\n        app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_constraintVertical_chainPacked"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" view is linked "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" the topTextView at the same time "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextView")]),t._v("\n        android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/bottomTextView"')]),t._v("\n        android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n        android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n        android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bottom\\nMkay"')]),t._v("\n        app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_constraintBottom_toBottomOf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parent"')]),t._v("\n        app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_constraintTop_toBottomOf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/topTextView"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConstraintLayout")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),e("p",[t._v("In this example, the two views are positioned one under another and both of them are centered vertically. You may change the vertical position of these views by adjusting the chain's "),e("strong",[t._v("bias")]),t._v(". Add the following code to the first element of a chain:")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_constraintVertical_bias"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.2"')]),t._v("\n\n")])])]),e("p",[t._v("In a vertical chain, the first element is a top-most view, and in a horizontal chain it is the left-most view. The first element defines the whole chain's behavior.")]),t._v(" "),e("p",[t._v("Chains are a new feature and are updated frequently. "),e("a",{attrs:{href:"https://developer.android.com/reference/android/support/constraint/ConstraintLayout.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here"),e("OutboundLink")],1),t._v(" is an official Android Documentation on Chains.")]),t._v(" "),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("li",[t._v("\n**ConstraintLayout**\n"),e("ul",[e("li",[t._v("\npublic void addView(View child, int index, ViewGroup.LayoutParams params)\n")]),t._v(" "),e("li",[t._v("\npublic ConstraintLayout.LayoutParams generateLayoutParams(AttributeSet attrs)\n")]),t._v(" "),e("li",[t._v("\npublic void onViewAdded(View view)\n")]),t._v(" "),e("li",[t._v("\npublic void onViewRemoved(View view)\n")]),t._v(" "),e("li",[t._v("\npublic void removeView(View view)\n")]),t._v(" "),e("li",[t._v("\npublic void requestLayout()\n")]),t._v(" "),e("li",[t._v("\nprotected boolean checkLayoutParams(ViewGroup.LayoutParams params)\n")]),t._v(" "),e("li",[t._v("\nprotected ConstraintLayout.LayoutParams generateDefaultLayoutParams()\n")]),t._v(" "),e("li",[t._v("\nprotected ViewGroup.LayoutParams generateLayoutParams(ViewGroup.LayoutParams params)\n")]),t._v(" "),e("li",[t._v("\nprotected void onLayout(boolean changed, int left, int top, int right, int bottom)\n")]),t._v(" "),e("li",[t._v("\nprotected void onMeasure(int widthMeasureSpec, int heightMeasureSpec)\n")]),t._v(" "),e("p",[e("strong",[t._v("ConstraintLayout.LayoutParams")])]),t._v(" "),e("li",[t._v("\npublic void resolveLayoutDirection(int layoutDirection)\n")]),t._v(" "),e("li",[t._v("\npublic void validate()\n")]),t._v(" "),e("li",[t._v("\nprotected void setBaseAttributes(TypedArray a, int widthAttr, int heightAttr)\n")]),t._v(" "),e("h4",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("Details")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("child")]),t._v(" "),e("td",[t._v("The "),e("code",[t._v("View")]),t._v(" to be added to the layout")])]),t._v(" "),e("tr",[e("td",[t._v("index")]),t._v(" "),e("td",[t._v("The index of the "),e("code",[t._v("View")]),t._v(" in the layout hierarchy")])]),t._v(" "),e("tr",[e("td",[t._v("params")]),t._v(" "),e("td",[t._v("The "),e("code",[t._v("LayoutParams")]),t._v(" of the "),e("code",[t._v("View")])])]),t._v(" "),e("tr",[e("td",[t._v("attrs")]),t._v(" "),e("td",[t._v("The "),e("code",[t._v("AttributeSet")]),t._v(" that defines the "),e("code",[t._v("LayoutParams")])])]),t._v(" "),e("tr",[e("td",[t._v("view")]),t._v(" "),e("td",[t._v("The "),e("code",[t._v("View")]),t._v(" that has been added or removed")])]),t._v(" "),e("tr",[e("td",[t._v("changed")]),t._v(" "),e("td",[t._v("Indicates if this "),e("code",[t._v("View")]),t._v(" has changed size or position")])]),t._v(" "),e("tr",[e("td",[t._v("left")]),t._v(" "),e("td",[t._v("The left position, relative to the parent "),e("code",[t._v("View")])])]),t._v(" "),e("tr",[e("td",[t._v("top")]),t._v(" "),e("td",[t._v("The top position, relative to the parent "),e("code",[t._v("View")])])]),t._v(" "),e("tr",[e("td",[t._v("right")]),t._v(" "),e("td",[t._v("The right position, relative to the parent "),e("code",[t._v("View")])])]),t._v(" "),e("tr",[e("td",[t._v("bottom")]),t._v(" "),e("td",[t._v("The bottom position, relative to the parent "),e("code",[t._v("View")])])]),t._v(" "),e("tr",[e("td",[t._v("widthMeasureSpec")]),t._v(" "),e("td",[t._v("The horizontal space requirements imposed by the parent "),e("code",[t._v("View")])])]),t._v(" "),e("tr",[e("td",[t._v("heightMeasureSpec")]),t._v(" "),e("td",[t._v("The vertical space requirements imposed by the parent "),e("code",[t._v("View")])])]),t._v(" "),e("tr",[e("td",[t._v("layoutDirection")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("a")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("widthAttr")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("heightAttr")]),t._v(" "),e("td",[t._v("-")])])])]),t._v(" "),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),e("p",[t._v("At Google IO 2016 Google announced a new Android layout named ConstraintLayout."),e("br"),t._v("\nPay attention because currently, this layout is a "),e("strong",[t._v("Beta release")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"fore-more-about-constraint-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fore-more-about-constraint-layout"}},[t._v("#")]),t._v(" Fore More About Constraint Layout:")]),t._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"https://codelabs.developers.google.com/codelabs/constraint-layout/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codelabs.developers.google.com/codelabs/constraint-layout/index.html"),e("OutboundLink")],1)])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);