/**
 * marked - a markdown parser
 * Copyright (c) 2011-2013, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */
(function(){function e(e){this.tokens=[],this.tokens.links={},this.options=e||s.defaults,this.rules=l.normal,this.options.gfm&&(this.rules=this.options.tables?l.tables:l.gfm)}function t(e,t){if(this.options=t||s.defaults,this.links=e,this.rules=c.normal,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.rules=this.options.breaks?c.breaks:c.gfm:this.options.pedantic&&(this.rules=c.pedantic)}function n(e){this.tokens=[],this.token=null,this.options=e||s.defaults}function r(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function i(e,t){return e=e.source,t=t||"",function n(r,i){return r?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,i),n):new RegExp(e,t)}}function o(){}function a(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function s(t,i,o){if(o||"function"==typeof i){o||(o=i,i=null),i&&(i=a({},s.defaults,i));var l=e.lex(l,i),c=i.highlight,u=0,d=l.length,p=0;if(!c||c.length<3)return o(null,n.parse(l,i));for(var f=function(){delete i.highlight;var e=n.parse(l,i);return i.highlight=c,o(null,e)};d>p;p++)(function(e){return"code"===e.type?(u++,c(e.text,e.lang,function(t,n){return null==n||n===e.text?--u||f():(e.text=n,e.escaped=!0,void(--u||f()))})):void 0})(l[p])}else try{return i&&(i=a({},s.defaults,i)),n.parse(e.lex(t,i),i)}catch(h){if(h.message+="\nPlease report this to https://github.com/chjj/marked.",(i||s.defaults).silent)return"<p>An error occured:</p><pre>"+r(h.message+"",!0)+"</pre>";throw h}}var l={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:o,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:o,lheading:/^([^\n]+)\n *(=|-){3,} *\n*/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:o,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};l.bullet=/(?:[*+-]|\d+\.)/,l.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,l.item=i(l.item,"gm")(/bull/g,l.bullet)(),l.list=i(l.list)(/bull/g,l.bullet)("hr",/\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(),l._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b",l.html=i(l.html)("comment",/\x3c!--[\s\S]*?--\x3e/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,l._tag)(),l.paragraph=i(l.paragraph)("hr",l.hr)("heading",l.heading)("lheading",l.lheading)("blockquote",l.blockquote)("tag","<"+l._tag)("def",l.def)(),l.normal=a({},l),l.gfm=a({},l.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/}),l.gfm.paragraph=i(l.paragraph)("(?!","(?!"+l.gfm.fences.source.replace("\\1","\\2")+"|")(),l.tables=a({},l.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),e.rules=l,e.lex=function(t,n){var r=new e(n);return r.lex(t)},e.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},e.prototype.token=function(e,t){for(var n,r,i,o,a,s,c,u,d,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),s={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},u=0;u<s.align.length;u++)s.align[u]=/^ *-+: *$/.test(s.align[u])?"right":/^ *:-+: *$/.test(s.align[u])?"center":/^ *:-+ *$/.test(s.align[u])?"left":null;for(u=0;u<s.cells.length;u++)s.cells[u]=s.cells[u].split(/ *\| */);this.tokens.push(s)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),o=i[2],this.tokens.push({type:"list_start",ordered:o.length>1}),i=i[0].match(this.rules.item),n=!1,d=i.length,u=0;d>u;u++)s=i[u],c=s.length,s=s.replace(/^ *([*+-]|\d+\.) +/,""),~s.indexOf("\n ")&&(c-=s.length,s=this.options.pedantic?s.replace(/^ {1,4}/gm,""):s.replace(new RegExp("^ {1,"+c+"}","gm"),"")),this.options.smartLists&&u!==d-1&&(a=l.bullet.exec(i[u+1])[0],o===a||o.length>1&&a.length>1||(e=i.slice(u+1).join("\n")+e,u=d-1)),r=n||/\n\n(?!\s*$)/.test(s),u!==d-1&&(n="\n"===s[s.length-1],r||(r=n)),this.tokens.push({type:r?"loose_item_start":"list_item_start"}),this.token(s,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:"pre"===i[1]||"script"===i[1],text:i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),s={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<s.align.length;u++)s.align[u]=/^ *-+: *$/.test(s.align[u])?"right":/^ *:-+: *$/.test(s.align[u])?"center":/^ *:-+ *$/.test(s.align[u])?"left":null;for(u=0;u<s.cells.length;u++)s.cells[u]=s.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(s)}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1][i[1].length-1]?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var c={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:o,tag:/^\x3c!--[\s\S]*?--\x3e|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:o,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};c._inside=/(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/,c._href=/\s*<?([^\s]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,c.link=i(c.link)("inside",c._inside)("href",c._href)(),c.reflink=i(c.reflink)("inside",c._inside)(),c.normal=a({},c),c.pedantic=a({},c.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),c.gfm=a({},c.normal,{escape:i(c.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:i(c.text)("]|","~]|")("|","|https?://|")()}),c.breaks=a({},c.gfm,{br:i(c.br)("{2,}","*")(),text:i(c.gfm.text)("{2,}","*")()}),t.rules=c,t.output=function(e,n,r){var i=new t(n,r);return i.output(e)},t.prototype.output=function(e){for(var t,n,i,o,a="";e;)if(o=this.rules.escape.exec(e))e=e.substring(o[0].length),a+=o[1];else if(o=this.rules.autolink.exec(e))e=e.substring(o[0].length),"@"===o[2]?(n=this.mangle(":"===o[1][6]?o[1].substring(7):o[1]),i=this.mangle("mailto:")+n):(n=r(o[1]),i=n),a+='<a href="'+i+'">'+n+"</a>";else if(o=this.rules.url.exec(e))e=e.substring(o[0].length),n=r(o[1]),i=n,a+='<a href="'+i+'">'+n+"</a>";else if(o=this.rules.tag.exec(e))e=e.substring(o[0].length),a+=this.options.sanitize?r(o[0]):o[0];else if(o=this.rules.link.exec(e))e=e.substring(o[0].length),a+=this.outputLink(o,{href:o[2],title:o[3]});else if((o=this.rules.reflink.exec(e))||(o=this.rules.nolink.exec(e))){if(e=e.substring(o[0].length),t=(o[2]||o[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){a+=o[0][0],e=o[0].substring(1)+e;continue}a+=this.outputLink(o,t)}else if(o=this.rules.strong.exec(e))e=e.substring(o[0].length),a+="<strong>"+this.output(o[2]||o[1])+"</strong>";else if(o=this.rules.em.exec(e))e=e.substring(o[0].length),a+="<em>"+this.output(o[2]||o[1])+"</em>";else if(o=this.rules.code.exec(e))e=e.substring(o[0].length),a+="<code>"+r(o[2],!0)+"</code>";else if(o=this.rules.br.exec(e))e=e.substring(o[0].length),a+="<br>";else if(o=this.rules.del.exec(e))e=e.substring(o[0].length),a+="<del>"+this.output(o[1])+"</del>";else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),a+=r(o[0]);else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return a},t.prototype.outputLink=function(e,t){return"!"!==e[0][0]?'<a href="'+r(t.href)+'"'+(t.title?' title="'+r(t.title)+'"':"")+">"+this.output(e[1])+"</a>":'<img src="'+r(t.href)+'" alt="'+r(e[1])+'"'+(t.title?' title="'+r(t.title)+'"':"")+">"},t.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/--/g,"\u2014").replace(/'([^']*)'/g,"\u2018$1\u2019").replace(/"([^"]*)"/g,"\u201c$1\u201d").replace(/\.{3}/g,"\u2026"):e},t.prototype.mangle=function(e){for(var t,n="",r=e.length,i=0;r>i;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},n.parse=function(e,t){var r=new n(t);return r.parse(e)},n.prototype.parse=function(e){this.inline=new t(e.links,this.options),this.tokens=e.reverse();for(var n="";this.next();)n+=this.tok();return n},n.prototype.next=function(){return this.token=this.tokens.pop()},n.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},n.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},n.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return"<hr>\n";case"heading":return"<h"+this.token.depth+">"+this.inline.output(this.token.text)+"</h"+this.token.depth+">\n";case"code":if(this.options.highlight){var e=this.options.highlight(this.token.text,this.token.lang);null!=e&&e!==this.token.text&&(this.token.escaped=!0,this.token.text=e)}return this.token.escaped||(this.token.text=r(this.token.text,!0)),"<pre><code"+(this.token.lang?' class="'+this.options.langPrefix+this.token.lang+'"':"")+">"+this.token.text+"</code></pre>\n";case"table":var t,n,i,o,a,s="";for(s+="<thead>\n<tr>\n",n=0;n<this.token.header.length;n++)t=this.inline.output(this.token.header[n]),s+=this.token.align[n]?'<th align="'+this.token.align[n]+'">'+t+"</th>\n":"<th>"+t+"</th>\n";for(s+="</tr>\n</thead>\n",s+="<tbody>\n",n=0;n<this.token.cells.length;n++){for(i=this.token.cells[n],s+="<tr>\n",a=0;a<i.length;a++)o=this.inline.output(i[a]),s+=this.token.align[a]?'<td align="'+this.token.align[a]+'">'+o+"</td>\n":"<td>"+o+"</td>\n";s+="</tr>\n"}return s+="</tbody>\n","<table>\n"+s+"</table>\n";case"blockquote_start":for(var s="";"blockquote_end"!==this.next().type;)s+=this.tok();return"<blockquote>\n"+s+"</blockquote>\n";case"list_start":for(var l=this.token.ordered?"ol":"ul",s="";"list_end"!==this.next().type;)s+=this.tok();return"<"+l+">\n"+s+"</"+l+">\n";case"list_item_start":for(var s="";"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return"<li>"+s+"</li>\n";case"loose_item_start":for(var s="";"list_item_end"!==this.next().type;)s+=this.tok();return"<li>"+s+"</li>\n";case"html":return this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);case"paragraph":return"<p>"+this.inline.output(this.token.text)+"</p>\n";case"text":return"<p>"+this.parseText()+"</p>\n"}},o.exec=o,s.options=s.setOptions=function(e){return a(s.defaults,e),s},s.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!1,silent:!1,highlight:null,langPrefix:""},s.Parser=n,s.parser=n.parse,s.Lexer=e,s.lexer=e.lex,s.InlineLexer=t,s.inlineLexer=t.output,s.parse=s,"object"==typeof exports?module.exports=s:"function"==typeof define&&define.amd?define(function(){return s}):this.marked=s}).call(function(){return this||("undefined"!=typeof window?window:global)}());