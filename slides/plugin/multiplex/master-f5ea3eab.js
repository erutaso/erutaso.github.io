!function(){if(!window.location.search.match(/receiver/gi)){var e=Reveal.getConfig().multiplex,t=io.connect(e.url),n=function(n,r,i,o){if("undefined"==typeof o&&"remote"!==o){var a,s,l=Reveal.getIndices().f;"undefined"==typeof l&&(l=0),n.nextElementSibling&&"SECTION"==n.parentNode.nodeName?(a=r,s=i+1):(a=r+1,s=0);var c={indexh:r,indexv:i,indexf:l,nextindexh:a,nextindexv:s,secret:e.secret,socketId:e.id};t.emit("slidechanged",c)}};Reveal.addEventListener("slidechanged",function(e){n(e.currentSlide,e.indexh,e.indexv,e.origin)});var r=function(e){n(Reveal.getCurrentSlide(),Reveal.getIndices().h,Reveal.getIndices().v,e.origin)};Reveal.addEventListener("fragmentshown",r),Reveal.addEventListener("fragmenthidden",r)}}();