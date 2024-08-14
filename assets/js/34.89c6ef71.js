(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{328:function(s,e,t){"use strict";t.r(e);var a=t(14),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"install-the-lesson-builder-program-and-vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-the-lesson-builder-program-and-vuepress"}},[s._v("#")]),s._v(" Install the lesson builder program and vuepress")]),s._v(" "),e("p",[s._v("Install the lesson plan program")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("python "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-mvenv")]),s._v(" .venv\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" .venv/bin/activate\npip "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" git+https://github.com/league-infrastructure/lesson-builder.git"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#egg=lesson-builder")]),s._v("\n")])])]),e("p",[s._v("Install vuepress, if you haven't already.  "),e("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("See these instructions for details"),e("OutboundLink")],1),s._v(".\nin this example, we will be using "),e("code",[s._v("yarn")]),s._v(" rather than "),e("code",[s._v("npm")]),s._v(" to install vuepress.")]),s._v(" "),e("p",[s._v("If you have installed yarn previously, you will still need to install in the docs dir")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cd docs "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("h1",{attrs:{id:"install-lessons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-lessons"}},[s._v("#")]),s._v(" Install Lessons")]),s._v(" "),e("p",[s._v("You can copy lessons into the "),e("code",[s._v("lessons")]),s._v(" directory, or create new a new one with")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("jtl new plan lessons "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v("\n")])])]),e("p",[s._v("This should result in a new "),e("code",[s._v("lesson-plan.yaml")]),s._v(" file in the lessons directory")]),s._v(" "),e("h1",{attrs:{id:"install-assignments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-assignments"}},[s._v("#")]),s._v(" Install Assignments.")]),s._v(" "),e("p",[s._v("Now install some assigments in the assignments directory. You can clone them\nfrom another repository, or create them with "),e("code",[s._v("jtl new assignment")]),s._v(". Here we will\ncreate one called "),e("code",[s._v("new_assignment")]),s._v(". However, assignments are typically\norganized into lessons, which are just sub-directories in the assignments. So,\nwe will create a lesson directory first, but you don't really have to.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" assignments\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" lesson1\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" lesson1\njtl new assignment new_assignment\n")])])]),e("p",[s._v("Or, you can also clone into assignments directory, for instance:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" assignments "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/League-central/python-modules.git"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("h1",{attrs:{id:"link-assignments-to-the-lesson-plan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#link-assignments-to-the-lesson-plan"}},[s._v("#")]),s._v(" Link assignments to the lesson plan")]),s._v(" "),e("p",[s._v("Now, edit "),e("code",[s._v("lessons/lesson-plan.yaml")]),s._v(" to link to your new assignment. We will use\nthe "),e("code",[s._v("assignments")]),s._v(" directory as the root for assignments, so your new assignment will\nbe named relative to that directory, "),e("code",[s._v("lesson/new_assignment")]),s._v(".  Here is what the\nlessons section in the default lesson-plan.yaml file looks like:")]),s._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("lessons")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("lesson1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" lesson1.md\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" flag.png\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("assignments")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" python"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("modules/Levels/Level0/Module0/01_drawing/tina_the_turtle\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" python"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("modules/Levels/Level0/Module0/01_drawing/shapes_and_colors\n")])])]),e("p",[s._v("The "),e("code",[s._v("python-modules")]),s._v(" prefix is what you would use if you'd cloned "),e("code",[s._v("python-modules.git")]),s._v(" into the\nassignments directory.")]),s._v(" "),e("p",[s._v("If you created a new assignment, we will change that to:")]),s._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("lessons")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("lesson1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" lesson1.md\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" flag.png\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("assignments")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" lesson1/new_assignment\n")])])]),e("h1",{attrs:{id:"build-the-website-source"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-the-website-source"}},[s._v("#")]),s._v(" Build the  Website source")]),s._v(" "),e("p",[s._v("Now you can build your website.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ jtl "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-vv")]),s._v(" build "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" lessons "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" assignments "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" docs\nINFO:lesson_builder.cli.jtl:Using url base "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'LevelX'")]),s._v("\nINFO:lesson_builder.lesson:Writing lesson plan to docs/src/lessons\nDEBUG:lesson_builder.lesson:Writing Lesson Introduction to Tina the Turtle to docs/src/lessons/introduction-to-tina-the-turtle\nDEBUG:lesson_builder.lesson:        Copying flag.png to docs/src/lessons/introduction-to-tina-the-turtle\nDEBUG:lesson_builder.lesson:        Writing Shapes and Colors\n")])])]),e("h1",{attrs:{id:"serve-the-website"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serve-the-website"}},[s._v("#")]),s._v(" Serve the website.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("jtl serve\n")])])]),e("p",[s._v("If you get errors, it maybe because you need to install packages with yarn. Try: "),e("code",[s._v("(cd docs && yarn install )")])]),s._v(" "),e("p",[s._v("If it works, visit  "),e("a",{attrs:{href:"http://localhost:8080/LevelX/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080/LevelX/"),e("OutboundLink")],1),s._v(" to see your site.")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("The "),e("code",[s._v("LevelX")]),s._v(" part is the directory of the website, defined in the "),e("code",[s._v("base")]),s._v(" variable in "),e("code",[s._v("config.yml")]),s._v(". It should be set to the repository name for most  websites served from Github, but should be empty for the root\nwebsite of an organization, or if your site is using a CNAME")])])])}),[],!1,null,null,null);e.default=n.exports}}]);