(window.webpackJsonp=window.webpackJsonp||[]).push([[3159],{3505:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"integrating-react-js-with-rails-using-hyperloop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#integrating-react-js-with-rails-using-hyperloop"}},[e._v("#")]),e._v(" Integrating React.js with Rails Using Hyperloop")]),e._v(" "),r("p",[e._v("This topic covers integrating React.js with Rails using the "),r("a",{attrs:{href:"http://ruby-hyperloop.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hyperloop"),r("OutboundLink")],1),e._v(" gem")]),e._v(" "),r("p",[e._v("Other approaches not covered here are using the react-rails or react_on_rails gems.")]),e._v(" "),r("h2",{attrs:{id:"adding-a-simple-react-component-written-in-ruby-to-your-rails-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-simple-react-component-written-in-ruby-to-your-rails-app"}},[e._v("#")]),e._v(" Adding a simple react component (written in ruby) to your Rails app")]),e._v(" "),r("ol",[r("li",[e._v("Add the hyperloop gem to your rails (4.0 - 5.1) Gemfile")]),e._v(" "),r("li",[r("code",[e._v("bundle install")])]),r("li",[e._v("Add the hyperloop manifest to the application.js file:\n"),r("pre",[e._v("// app/assets/javascripts/application.js\n...\n//= hyperloop-loader\n")])]),e._v(" "),r("li",[e._v("Create your react components, and place them in the "),r("code",[e._v("hyperloop/components")]),e._v(" directory\n"),r("pre",[e._v('# app/hyperloop/components/hello_world.rb\nclass HelloWorld < Hyperloop::Component\nafter_mount do\nevery(1.second) { mutate.current_time(Time.now) }\nend\nrender do\n"Hello World!  The time is now: #{state.current_time}"\nend\nend\n')])]),e._v(" "),r("li",[e._v('Components act just like views.  They are "mounted" using the '),r("code",[e._v("render_component")]),e._v(" method in a controller:\n"),r("pre",[e._v("# somewhere in a controller:\n...\ndef hello_world\nrender_component # renders HelloWorld based on method name\nend\n")])])]),e._v(" "),r("h2",{attrs:{id:"callbacks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#callbacks"}},[e._v("#")]),e._v(" Callbacks")]),e._v(" "),r("h2",{attrs:{id:"declaring-component-parameters-props"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#declaring-component-parameters-props"}},[e._v("#")]),e._v(" Declaring component parameters (props)")]),e._v(" "),r("h2",{attrs:{id:"html-tags"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#html-tags"}},[e._v("#")]),e._v(" HTML Tags")]),e._v(" "),r("h2",{attrs:{id:"event-handlers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-handlers"}},[e._v("#")]),e._v(" Event Handlers")]),e._v(" "),r("h2",{attrs:{id:"states"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#states"}},[e._v("#")]),e._v(" States")]),e._v(" "),r("p",[e._v("Note that states can be shared between components using "),r("a",{attrs:{href:"http://ruby-hyperloop.io/start/stores/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hyperloop::Stores"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"remarks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),r("p",[e._v("Component classes simply generate the equivalent javascript component classes.")]),e._v(" "),r("p",[e._v("You can also access javascript components and libraries directly from your ruby component classes.")]),e._v(" "),r("p",[e._v('Hyperloop will "prerender" the view server side so your initial view will load just like ERB or HAML templates.  Once loaded on the client react takes over and will incrementally update the DOM as state changes due to inputs from the user, HTTP requests or incoming web socket data.')]),e._v(" "),r("p",[e._v("Besides Components, Hyperloop has Stores to manage shared state, Operations to encapsulate isomorphic business logic, and Models which give direct access to your ActiveRecord models on the client using the standard AR syntax.")]),e._v(" "),r("p",[e._v("More info here: "),r("a",{attrs:{href:"http://ruby-hyperloop.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://ruby-hyperloop.io/"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);