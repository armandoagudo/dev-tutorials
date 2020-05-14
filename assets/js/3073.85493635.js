(window.webpackJsonp=window.webpackJsonp||[]).push([[3073],{3418:function(e,t,s){"use strict";s.r(t);var a=s(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"gem-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gem-usage"}},[e._v("#")]),e._v(" Gem Usage")]),e._v(" "),s("h2",{attrs:{id:"installing-ruby-gems"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-ruby-gems"}},[e._v("#")]),e._v(" Installing ruby gems")]),e._v(" "),s("p",[e._v("This guide assumes you already have Ruby installed.\nIf you're using Ruby < "),s("code",[e._v("1.9")]),e._v(" you'll have to manually "),s("a",{attrs:{href:"https://rubygems.org/pages/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("install RubyGems"),s("OutboundLink")],1),e._v(" as it won't be "),s("a",{attrs:{href:"http://guides.rubygems.org/rubygems-basics/",target:"_blank",rel:"noopener noreferrer"}},[e._v("included natively"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("To install a ruby gem, enter the command:")]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[e._v("gem install "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("gemname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n")])])]),s("p",[e._v("If you are working on a project with a list of gem dependencies, then these will be listed in a file named "),s("code",[e._v("Gemfile")]),e._v(". To install a new gem in the project, add the following line of code in the "),s("code",[e._v("Gemfile")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[e._v("gem "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'gemname'")]),e._v("\n\n")])])]),s("p",[e._v("This "),s("code",[e._v("Gemfile")]),e._v(" is used by the "),s("a",{attrs:{href:"https://rubygems.org/gems/bundler",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bundler gem"),s("OutboundLink")],1),e._v(" to install dependencies your project requires, this does however mean that you'll have to install Bundler first by running (if you haven't already):")]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[e._v("gem install bundler\n\n")])])]),s("p",[e._v("Save the file, and then run the command:")]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[e._v("bundle install\n\n")])])]),s("h3",{attrs:{id:"specifying-versions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specifying-versions"}},[e._v("#")]),e._v(" Specifying versions")]),e._v(" "),s("p",[e._v("The version number can be specified on the command live, with the "),s("code",[e._v("-v")]),e._v(" flag, such as:")]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[e._v("gem install gemname "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("v "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.14")]),e._v("\n\n")])])]),s("p",[e._v("When specifying version numbers in a "),s("code",[e._v("Gemfile")]),e._v(", you have several options available:")]),e._v(" "),s("ul",[s("li",[e._v("No version specified ("),s("code",[e._v("gem 'gemname')")]),e._v(" -- Will install the "),s("strong",[e._v("latest")]),e._v(" version which is compatible with other gems in the "),s("code",[e._v("Gemfile")]),e._v(".")]),e._v(" "),s("li",[e._v("Exact version specified ("),s("code",[e._v("gem 'gemname', '3.14'")]),e._v(") -- Will only attempt to install version "),s("code",[e._v("3.14")]),e._v(" (and fail if this is incompatible with other gems in the "),s("code",[e._v("Gemfile")]),e._v(").")]),e._v(" "),s("li",[s("strong",[e._v("Optimistic")]),e._v(" minimum version number ("),s("code",[e._v("gem 'gemname', '>=3.14'")]),e._v(") -- Will only attempt to install the "),s("strong",[e._v("latest")]),e._v(" version which is compatible with other gems in the "),s("code",[e._v("Gemfile")]),e._v(", and fails if no version greater than or equal to "),s("code",[e._v("3.14")]),e._v(" is compatible. The operator "),s("code",[e._v(">")]),e._v(" can also be used.")]),e._v(" "),s("li",[s("strong",[e._v("Pessimistic")]),e._v(" minimum version number ("),s("code",[e._v("gem 'gemname', '~>3.14'")]),e._v(") -- This is functionally equivalent to using "),s("code",[e._v("gem 'gemname', '>=3.14', '<4'")]),e._v(". In other words, only the number after the "),s("strong",[e._v("final period")]),e._v(" is permitted to increase.")])]),e._v(" "),s("p",[s("strong",[e._v("As a best practice")]),e._v(": You might want to use one of the Ruby version management libraries like "),s("a",{attrs:{href:"https://github.com/rbenv/rbenv",target:"_blank",rel:"noopener noreferrer"}},[e._v("rbenv"),s("OutboundLink")],1),e._v(" or "),s("a",{attrs:{href:"https://github.com/rvm/rvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("rvm"),s("OutboundLink")],1),e._v(". Through these libraries, you can install different versions of Ruby runtimes and gems accordingly. So, when working in a project, this will be especially handy because most of the projects are coded against a known Ruby version.")]),e._v(" "),s("h2",{attrs:{id:"gem-installation-from-github-filesystem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gem-installation-from-github-filesystem"}},[e._v("#")]),e._v(" Gem installation from github/filesystem")]),e._v(" "),s("p",[e._v("You can install a gem from github or filesystem. If the gem has been checked out from git or somehow already on the file system, you could install it using")]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[e._v("gem install "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("local path_to_gem"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("gem\n\n")])])]),s("p",[e._v("Installing gem from github. Download the sources from github")]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[e._v("mkdir newgem\ncd newgem\ngit clone https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("urltogem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("git\n\n")])])]),s("p",[e._v("Build the gem")]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[e._v("gem build "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("GEMNAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("gemspec\ngem install gemname"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("gem\n\n")])])]),s("h2",{attrs:{id:"checking-if-a-required-gem-is-installed-from-within-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checking-if-a-required-gem-is-installed-from-within-code"}},[e._v("#")]),e._v(" Checking if a required gem is installed from within code")]),e._v(" "),s("p",[e._v("To check if a required gem is installed, from within your code, you can use the following (using nokogiri as an example):")]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("begin")]),e._v("\n  found_gem "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Gem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Specification")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("find_by_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'nokogiri'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("require")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'nokogiri'")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("the rest of your code"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rescue")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Gem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("LoadError")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n")])])]),s("p",[e._v("However, this can be further extended to a function that can be used in setting up functionality within your code.")]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token method-definition"}},[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("gem_installed")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("gem_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  found_gem "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("begin")]),e._v("\n    found_gem "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Gem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Specification")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("find_by_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("gem_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rescue")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Gem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("LoadError")]),e._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n")])])]),s("p",[e._v("Now you can check if the required gem is installed, and print an error message.")]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" gem_installed"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'nokogiri'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("require")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'nokogiri'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v("\n  printf "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nokogiri gem required\\n"')]),e._v("\n  exit "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n")])])]),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" gem_installed"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'nokogiri'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("require")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'nokogiri'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("require")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'REXML'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n")])])]),s("h2",{attrs:{id:"using-a-gemfile-and-bundler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-gemfile-and-bundler"}},[e._v("#")]),e._v(" Using a Gemfile and Bundler")]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("Gemfile")]),e._v(" is the standard way to organize dependencies in your application. A basic Gemfile will look like this:")]),e._v(" "),s("p",[e._v("You can specify the versions of the gem you want as follows:")]),e._v(" "),s("p",[e._v("You can also pull gems straight from a git repo:")]),e._v(" "),s("p",[e._v("You can also group gems depending on what they are used for. For example:")]),e._v(" "),s("p",[e._v("You can specify which platform certain gems should run on if you application needs to be able to run on multiple platforms. For example:")]),e._v(" "),s("p",[e._v("To install all the gems from a Gemfile do:")]),e._v(" "),s("h2",{attrs:{id:"bundler-inline-bundler-v1-10-and-later"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bundler-inline-bundler-v1-10-and-later"}},[e._v("#")]),e._v(" Bundler/inline (bundler v1.10 and later)")]),e._v(" "),s("p",[e._v("Sometimes you need to make a script for someone but you are not sure what he has on his machine. Is there everything that your script needs? Not to worry. Bundler has a great function called in line.")]),e._v(" "),s("p",[e._v("It provides a "),s("code",[e._v("gemfile")]),e._v(" method and before the script is run it downloads and requires all the necessary gems. A little example:")]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("require")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'bundler/inline'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#require only what you need")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Start the bundler and in it use the syntax you are already familiar with")]),e._v("\ngemfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" \n  source "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://rubygems.org'")]),e._v("\n        gem "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'nokogiri'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'~> 1.6.8.1'")]),e._v("\n        gem "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ruby-graphviz'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);