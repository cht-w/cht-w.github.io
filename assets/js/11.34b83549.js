(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{376:function(t,s,a){t.exports=a.p+"assets/img/route.0df6be6a.png"},377:function(t,s,a){t.exports=a.p+"assets/img/route1.3f20017d.png"},405:function(t,s,a){"use strict";a.r(s);var n=a(42),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{attrs:{align:"center"}},[n("font",{attrs:{size:"70"}},[t._v("路由传参")])],1),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"方式一-name"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方式一-name"}},[t._v("#")]),t._v(" 方式一:name")]),t._v(" "),n("p",[n("strong",[t._v("使用name属性，进行匹配，通过params传递参数")])]),t._v(" "),n("ul",[n("li",[t._v("这个方法有一个小问题：跳转结束后，刷新页面，传递过来的参数会丢失。")]),t._v(" "),n("li",[t._v("解决方法是在路由的path字段中添加参数，但是这个参数会显示在url的后面，多个参数也可也往后添加。")])]),t._v(" "),n("p",[n("strong",[t._v("路由配置(要跳转的路由)")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/par'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'par'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/page/params/par'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解决刷新丢失的问题: 在path后面跟上参数，这样这个参数显示在url后面。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/par/:userId'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'par'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/page/params/par'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[t._v("// params.vue\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        // 描述： 点击按钮跳转路由，传递 userId过去\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("primary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("go"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("跳转"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    methods"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"par"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这个name就是你刚刚配置在router里边的name")]),t._v("\n                params"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    userId"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("正常我们在写this.$router.push()时候，我们都会添加path指定要跳转的路由。\n在这里，我们使用name匹配路由的时候，不能写path\n否则你在取参数的时候this.$router.params.userId就是undefined。这是因为，params只能用name来引入路由。")])]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[t._v("// par.vue (要跳转的页面)\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         {{id}}\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'路由跳转的参数-----'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("strong",[t._v("获取路由传递的参数： this.$route.params.userId")])]),t._v(" "),n("ul",[n("li",[t._v("打印 this.$route\n"),n("img",{attrs:{src:a(376),alt:"avatar"}})])]),t._v(" "),n("h2",{attrs:{id:"方式二-query传参"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方式二-query传参"}},[t._v("#")]),t._v(" 方式二:query传参")]),t._v(" "),n("p",[n("strong",[t._v("使用query传递参数：会显示在url后面。例如：http://localhost:8080/#/go2?userId=123&job=It")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 路由配置")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/go2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/page/params/go2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("使用编程式路由，添加query字段")])]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[t._v("// params页面,点击跳转页面\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("primary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("go2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("跳转2"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    methods"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("go2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/go2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                query"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    userId"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    job"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'It'")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("strong",[t._v("取值的两种方式区分")])]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[t._v("// go2.vue 取值页面\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 取值方式一：")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 取值方式二：")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentRoute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("ul",[n("li",[t._v("打印 this.$route\n"),n("img",{attrs:{src:a(377),alt:"avatar"}})])]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("query传参，默认路由配置即可。\n使用$router.push() 配置 path 和 query 即可。\n获取参数使用this.$route.query.userId  或者  this.$router.currentRoute.query.userId。")])]),t._v(" "),n("h2",{attrs:{id:"方式三-router-link"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方式三-router-link"}},[t._v("#")]),t._v(" 方式三:router-link")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/go3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/page/params/go3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("使用router-link的to属性，需要v-bind绑定")])]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[t._v("// params.vue\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{path:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/go3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", query:{userId:456,job:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("It"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("}}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("go3"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("strong",[t._v("参数获取")])]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);