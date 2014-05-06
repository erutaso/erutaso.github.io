module.exports=function(e){var t=e.option("port")||8e3;e.initConfig({pkg:e.file.readJSON("package.json"),meta:{banner:'/*!\n * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n * http://lab.hakim.se/reveal-js\n * MIT licensed\n *\n * Copyright (C) 2014 Hakim El Hattab, http://hakim.se\n */'},qunit:{files:["test/*.html"]},uglify:{options:{banner:"<%= meta.banner %>\n"},build:{src:"js/reveal-41b7ff47.js",dest:"js/reveal.min-953a1e9c.js"}},cssmin:{compress:{files:{"css/reveal.min-7e5ca7d5.css":["css/reveal-262cf151.css"]}}},sass:{main:{files:{"css/theme/default-17b33b79.css":"css/theme/source/default.scss","css/theme/beige-dfe73fea.css":"css/theme/source/beige.scss","css/theme/night-e175aed6.css":"css/theme/source/night.scss","css/theme/serif-59cec8a6.css":"css/theme/source/serif.scss","css/theme/simple-bde0091c.css":"css/theme/source/simple.scss","css/theme/sky-842b3c17.css":"css/theme/source/sky.scss","css/theme/moon-ab273106.css":"css/theme/source/moon.scss","css/theme/solarized-28d53397.css":"css/theme/source/solarized.scss","css/theme/blood-9ef9f85a.css":"css/theme/source/blood.scss"}}},jshint:{options:{curly:!1,eqeqeq:!0,immed:!0,latedef:!0,newcap:!0,noarg:!0,sub:!0,undef:!0,eqnull:!0,browser:!0,expr:!0,globals:{head:!1,module:!1,console:!1,unescape:!1}},files:["Gruntfile-fcbf40b3.js","js/reveal-41b7ff47.js"]},connect:{server:{options:{port:t,base:"."}}},zip:{"reveal-js-presentation.zip":["index.html","css/**","js/**","lib/**","images/**","plugin/**"]},watch:{main:{files:["Gruntfile-fcbf40b3.js","js/reveal-41b7ff47.js","css/reveal-262cf151.css"],tasks:"default"},theme:{files:["css/theme/source/*.scss","css/theme/template/*.scss"],tasks:"themes"}}}),e.loadNpmTasks("grunt-contrib-qunit"),e.loadNpmTasks("grunt-contrib-jshint"),e.loadNpmTasks("grunt-contrib-cssmin"),e.loadNpmTasks("grunt-contrib-uglify"),e.loadNpmTasks("grunt-contrib-watch"),e.loadNpmTasks("grunt-contrib-sass"),e.loadNpmTasks("grunt-contrib-connect"),e.loadNpmTasks("grunt-zip"),e.registerTask("default",["jshint","cssmin","uglify","qunit"]),e.registerTask("themes",["sass"]),e.registerTask("package",["default","zip"]),e.registerTask("serve",["connect","watch"]),e.registerTask("test",["jshint","qunit"])};