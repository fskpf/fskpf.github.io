(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{51:function(t,e,a){"use strict";a.d(e,"a",(function(){return g})),a.d(e,"b",(function(){return m}));var r=a(52),i=a.n(r),s=a(13),n=a(46);function l(t,e){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,n=!0,l=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return n=t.done,t},e:function(t){l=!0,s=t},f:function(){try{n||null==a.return||a.return()}finally{if(l)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,a){return e&&u(t.prototype,e),a&&u(t,a),t}var f=a(386),p=function(){function t(e,a){c(this,t),this.$x=e||0,this.$y=a||0}return v(t,[{key:"x",get:function(){return this.$x}},{key:"y",get:function(){return this.$y}}]),v(t,[{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y)}}]),t}(),g=function(){function t(){c(this,t)}return v(t,null,[{key:"SVG",get:function(){return"RenderMode.SVG"}},{key:"CANVAS",get:function(){}}]),t}(),m=function(){function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.SVG,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(c(this,t),!e)throw new Error("No target provided");if("object"===h(e)){if("CANVAS"!==e.tagName&&"SVG"!==e.tagName)throw new Error("Target object is not of type HMTLCanvaseElement or SVGSVGElement");this.canvas=e,this.$renderMode="CANVAS"===e.tagName?g.CANVAS:g.SVG}else if("string"==typeof e){var i=document.querySelector(e);if(!i)throw new Error("No element found with ".concat(e));a===g.CANVAS?(this.canvas=document.createElement("canvas"),this.canvas.width=i.clientWidth,this.canvas.height=i.clientHeight):(this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.canvas.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink")),this.$renderMode=a,i.appendChild(this.canvas)}this.renderMode===g.CANVAS?(this.rc=n.a.canvas(this.canvas,r),this.ctx=this.canvas.getContext("2d")):this.rc=n.a.svg(this.canvas,r),this.$roughConfig=r,this.$fontFamily="Comic Sans MS, cursive",this.$randomize=!0}return v(t,[{key:"svg",set:function(t){this.$svg!==t&&(this.$svg=t,t.hasAttribute("width")?this.width=t.width.baseVal.value:t.hasAttribute("viewBox")?this.width=t.viewBox.baseVal.width:this.width=300,t.hasAttribute("height")?this.height=t.height.baseVal.value:t.hasAttribute("viewBox")?this.height=t.viewBox.baseVal.height:this.height=150,this.renderMode===g.CANVAS?(this.canvas.width=this.width,this.canvas.height=this.height):(this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height)),this.collectElementsWithID(),this.redraw())},get:function(){return this.$svg}},{key:"roughConfig",set:function(t){this.$roughConfig=t,this.renderMode===g.CANVAS?this.rc=n.a.canvas(this.canvas,this.$roughConfig):this.rc=n.a.svg(this.canvas,this.$roughConfig),this.redraw()},get:function(){return this.$roughConfig}},{key:"fontFamily",set:function(t){this.$fontFamily!==t&&(this.$fontFamily=t,this.redraw())},get:function(){return this.$fontFamily}},{key:"randomize",set:function(t){this.$randomize=t,this.redraw()},get:function(){return this.$randomize}},{key:"backgroundColor",set:function(t){this.$backgroundColor=t},get:function(){return this.$backgroundColor}},{key:"renderMode",set:function(t){if(this.$renderMode!==t){this.$renderMode=t;var e,a=this.canvas.parentElement;a.removeChild(this.canvas),t===g.CANVAS?((e=document.createElement("canvas")).width=this.width,e.height=this.height,this.ctx=e.getContext("2d")):(this.ctx=null,(e=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),e.setAttribute("width",this.width),e.setAttribute("height",this.height)),a.appendChild(e),this.canvas=e,t===g.CANVAS?this.rc=n.a.canvas(this.canvas,this.$roughConfig):this.rc=n.a.svg(this.canvas,this.$roughConfig),this.redraw()}},get:function(){return this.$renderMode}},{key:"pencilFilter",set:function(t){this.$pencilFilter!==t&&(this.$pencilFilter=t,this.redraw())},get:function(){return this.$pencilFilter}}],[{key:"CONTAINS_UNIT_REGEXP",value:function(){return/[a-z%]/}}]),v(t,[{key:"redraw",value:function(){this.svg&&(this.renderMode===g.CANVAS?this.initializeCanvas(this.canvas):this.initializeSvg(this.canvas),this.processRoot(this.svg,null,this.width,this.height))}},{key:"initializeCanvas",value:function(t){this.ctx=t.getContext("2d"),this.ctx.clearRect(0,0,this.width,this.height),this.backgroundColor&&(this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height))}},{key:"initializeSvg",value:function(t){for(this.ctx=null;t.firstChild;)t.removeChild(t.firstChild);var e;(this.backgroundColor&&((e=document.createElementNS("http://www.w3.org/2000/svg","rect")).width.baseVal.value=this.width,e.height.baseVal.value=this.height,e.setAttribute("fill",this.backgroundColor),t.appendChild(e)),this.pencilFilter)&&this.getDefsElement(t).appendChild(d.pencilTextureFilter)}},{key:"processRoot",value:function(t,e,a,r){var i=[];if("svg"===t.tagName||"symbol"===t.tagName||"marker"===t.tagName){var s=0,n=0;"symbol"===t.tagName?(s=parseFloat(t.getAttribute("x"))||0,n=parseFloat(t.getAttribute("y"))||0,a=a||parseFloat(t.getAttribute("width"))||void 0,r=r||parseFloat(t.getAttribute("height"))||void 0):"marker"===t.tagName?(s=-t.refX.baseVal.value,n=-t.refY.baseVal.value,a=a||parseFloat(t.getAttribute("markerWidth"))||void 0,r=r||parseFloat(t.getAttribute("markerHeight"))||void 0):(s=t.x.baseVal.value,n=t.y.baseVal.value);var l=this.svg.createSVGMatrix();if(void 0!==a&&void 0!==r&&t.getAttribute("viewBox")){var o=t.viewBox.baseVal,h=o.x,c=o.y,u=o.width,v=o.height;l="marker"===t.tagName?l.translate(a/u*-h,r/v*-c).scaleNonUniform(a/u,r/v).translate(s,n):l.translate(a/u*-h,r/v*-c).translate(s,n).scaleNonUniform(a/u,r/v)}else l=l.translate(s,n);var f=e?e.matrix.multiply(l):l;e=this.svg.createSVGTransformFromMatrix(f);for(var p=this.getNodeChildren(t),g=p.length-1;g>=0;g--){var m=p[g];if("symbol"!==m.tagName&&"marker"!==m.tagName){var d=e?this.getCombinedTransform(m,e):this.getSvgTransform(m);i.push({element:m,transform:d})}}}else i.push({element:t,transform:e});for(;i.length>0;){var y=i.pop(),x=y.element,b=y.transform;if(this.drawElement(x,b),"defs"!==x.tagName&&"symbol"!==x.tagName&&"marker"!==x.tagName&&"svg"!==x.tagName&&"clipPath"!==x.tagName)for(var w=this.getNodeChildren(x),A=w.length-1;A>=0;A--){var C=w[A],k=b?this.getCombinedTransform(C,b):this.getSvgTransform(C);i.push({element:C,transform:k})}}}},{key:"postProcessElement",value:function(t,e){if(this.renderMode===g.SVG&&e){var a=t.getAttribute("data-sketchy-clip-path");a&&e.setAttribute("clip-path","url(#".concat(a,")")),this.pencilFilter&&"text"!==t.tagName&&e.setAttribute("filter","url(#pencilTextureFilter)"),this.canvas.appendChild(e)}}},{key:"getCombinedTransform",value:function(t,e){var a=this.getSvgTransform(t);if(a){var r=a.matrix,i=e.matrix.multiply(r);return this.svg.createSVGTransformFromMatrix(i)}return e}},{key:"getSvgTransform",value:function(t){return t.transform&&t.transform.baseVal.numberOfItems>0?t.transform.baseVal.consolidate():null}},{key:"applyGlobalTransform",value:function(t,e){if(t&&t.matrix){var a=t.matrix;this.renderMode===g.CANVAS?this.ctx.setTransform(a.a,a.b,a.c,a.d,a.e,a.f):this.renderMode===g.SVG&&e&&(e.transform.baseVal.numberOfItems>0?e.transform.baseVal.getItem(0).setMatrix(a):e.transform.baseVal.appendItem(t))}}},{key:"isIdentityTransform",value:function(t){if(!t)return!0;var e=t.matrix;return!e||1===e.a&&0===e.b&&0===e.c&&1===e.d&&0===e.e&&0===e.f}},{key:"isTranslationTransform",value:function(t){if(!t)return!0;var e=t.matrix;return!e||1===e.a&&0===e.b&&0===e.c&&1===e.d}},{key:"collectElementsWithID",value:function(){this.idElements={};var t,e=l(Array.prototype.slice.apply(this.svg.querySelectorAll("*[id]")));try{for(e.s();!(t=e.n()).done;){var a=t.value,r=a.getAttribute("id");r&&(this.idElements[r]=a)}}catch(t){e.e(t)}finally{e.f()}}},{key:"applyMatrix",value:function(t,e){if(!e)return t;var a=e.matrix,r=a.a*t.x+a.c*t.y+a.e,i=a.b*t.x+a.d*t.y+a.f;return new p(r,i)}},{key:"getRandomNumber",value:function(t,e){return Math.random()*(e-t)+t}},{key:"getStopOffset",value:function(t){var e=t.getAttribute("offset");return e?e.indexOf("%")?parseFloat(e.substring(0,e.length-1)):100*parseFloat(e):0}},{key:"getStopColor",value:function(t){var e=t.getAttribute("stop-color");if(!e){var a=t.getAttribute("style"),r=/stop-color:\s?(.*);?/.exec(a);r.length>1&&(e=r[1])}return e?i()(e):i()("white")}},{key:"gradientToColor",value:function(t,e){var a=this,r=Array.prototype.slice.apply(t.querySelectorAll("stop"));if(0===r.length)return"transparent";if(1===r.length){var s=this.getStopColor(stop);return s.setAlpha(e),s.toString()}var n=r.reduce((function(t,e){var r=a.getStopColor(e),s=a.getStopOffset(e);return i.a.mix(t,r,s)}));return n.setAlpha(e),n.toString()}},{key:"getIdFromUrl",value:function(t){var e=/url\('#?(.*?)'\)/.exec(t)||/url\("#?(.*?)"\)/.exec(t)||/url\(#?(.*?)\)/.exec(t);return e&&e.length>1?e[1]:null}},{key:"parseFillUrl",value:function(t,e){var a=this.getIdFromUrl(t);if(!a)return"transparent";var r=this.idElements[a];if(r){if("string"==typeof r)return r;if("linearGradient"===r.tagName||"radialGradient"===r.tagName){var i=this.gradientToColor(r,e);return this.idElements[a]=i,i}}}},{key:"getOpacity",value:function(t,e){var a=getComputedStyle(t)[e]||t.getAttribute(e);return a?-1!==a.indexOf("%")?Math.min(1,Math.max(0,parseFloat(a.substring(0,a.length-1))/100)):Math.min(1,Math.max(0,parseFloat(a))):1}},{key:"getEffectiveElementOpacity",value:function(t,e,a){var r;if(r=a?t.getAttribute("opacity"):getComputedStyle(t).opacity||t.getAttribute("opacity")){e*=-1!==r.indexOf("%")?Math.min(1,Math.max(0,parseFloat(r.substring(0,r.length-1))/100)):Math.min(1,Math.max(0,parseFloat(r)))}var i=t.parentElement,s=a,n=s;return s&&s.referenced===t&&(i=s.root,n=s.parentContext),i&&i!==this.$svg?this.getEffectiveElementOpacity(i,e,n):e}},{key:"getEffectiveAttribute",value:function(t,e,a){var r;if(!(r=a?t.getAttribute(e):getComputedStyle(t)[e]||t.getAttribute(e))){var i=t.parentElement,s=a,n=s;return s&&s.referenced===t&&(i=s.root,n=s.parentContext),i&&i!==this.$svg?this.getEffectiveAttribute(i,e,n):null}return r}},{key:"convertToPixelUnit",value:function(e){return null!==e.match(t.CONTAINS_UNIT_REGEXP)?f.convert("px",e,this.$svg):parseFloat(e)}},{key:"parseStyleConfig",value:function(t,e){var a=this,r=Object.assign({},this.$roughConfig),s=1;if(!this.isIdentityTransform(e)){var n=e.matrix,l=n.a*n.d-n.c*n.b;s=Math.sqrt(l)}var o=this.getEffectiveElementOpacity(t,1,this.$useElementContext),h=this.getEffectiveAttribute(t,"fill",this.$useElementContext)||"black",c=o*this.getOpacity(t,"fill-opacity");if(h)if(-1!==h.indexOf("url"))r.fill=this.parseFillUrl(h,c);else if("none"===h)delete r.fill;else{var u=i()(h);u.setAlpha(c),r.fill=u.toString()}var v=this.getEffectiveAttribute(t,"stroke",this.$useElementContext),f=o*this.getOpacity(t,"stroke-opacity");if(v)if(-1!==v.indexOf("url"))r.stroke=this.parseFillUrl(h,f);else if("none"===v)r.stroke="none";else{var p=i()(v);p.setAlpha(f),r.stroke=p.toString()}else r.stroke="none";var g=this.getEffectiveAttribute(t,"stroke-width",this.$useElementContext);r.strokeWidth=g?this.convertToPixelUnit(g)*s:0;var m=this.getEffectiveAttribute(t,"stroke-dasharray",this.$useElementContext);m&&"none"!==m&&(m=m.split(/[\s,]+/).filter((function(t){return t.length>0})).map((function(t){return Math.max(.5,a.convertToPixelUnit(t)*s)})),r.strokeLineDash=m);var d=this.getEffectiveAttribute(t,"stroke-dashoffset",this.$useElementContext);return d&&(d=this.convertToPixelUnit(d),r.strokeLineDashOffset=d*s),r.fill&&"none"===r.stroke&&(r.stroke=r.fill,r.strokeWidth=1),this.randomize&&(r.fillWeight=this.getRandomNumber(.5,3),r.hachureAngle=this.getRandomNumber(-30,-50),r.hachureGap=this.getRandomNumber(3,5),void 0===r.disableMultiStroke&&(r.disableMultiStroke=Math.random()>.3)),r}},{key:"getDefsElement",value:function(t){var e=t.querySelector("defs");return e||(e=document.createElementNS("http://www.w3.org/2000/svg","defs"),t.childElementCount>0?t.insertBefore(e,t.firstElementChild):t.appendChild(e)),e}},{key:"applyClipPath",value:function(t,e,a){var r=this.getIdFromUrl(e);if(r){var i=this.idElements[r];if(i){var s;if(this.renderMode===g.CANVAS)this.ctx.beginPath();else{var n=this.getDefsElement(this.canvas),l="".concat(r,"_").concat(n.childElementCount);(s=document.createElementNS("http://www.w3.org/2000/svg","clipPath")).id=l,t.setAttribute("data-sketchy-clip-path",l),n.appendChild(s)}for(var o=[],h=this.getNodeChildren(i),c=h.length-1;c>=0;c--){var u=h[c],v=a?this.getCombinedTransform(u,a):this.getSvgTransform(u);o.push({element:u,transform:v})}for(;o.length>0;){var f=o.pop(),p=f.element,m=f.transform;if(this.applyElementClip(p,s,m),"defs"!==p.tagName&&"svg"!==p.tagName&&"clipPath"!==p.tagName&&"text"!==p.tagName)for(var d=this.getNodeChildren(p),y=d.length-1;y>=0;y--){var x=d[y],b=m?this.getCombinedTransform(x,m):this.getSvgTransform(x);o.push({element:x,transform:b})}}this.renderMode===g.CANVAS&&this.ctx.clip()}}}},{key:"applyElementClip",value:function(t,e,a){switch(t.tagName){case"rect":this.applyRectClip(t,e,a);break;case"circle":this.applyCircleClip(t,e,a);break;case"ellipse":this.applyEllipseClip(t,e,a);break;case"polygon":this.applyPolygonClip(t,e,a)}}},{key:"isHidden",value:function(t){var e=t.style;return!!e&&("none"===e.display||"hidden"===e.visibility)}},{key:"drawElement",value:function(t,e){if(!this.isHidden(t)){var a=t.getAttribute("clip-path");switch(a&&(this.renderMode===g.CANVAS&&this.ctx.save(),this.applyClipPath(t,a,e)),t.tagName){case"svg":case"symbol":this.drawRoot(t,e);break;case"rect":this.drawRect(t,e);break;case"path":this.drawPath(t,e);break;case"use":this.drawUse(t,e);break;case"line":this.drawLine(t,e);break;case"circle":this.drawCircle(t,e);break;case"ellipse":this.drawEllipse(t,e);break;case"polyline":this.drawPolyline(t,e);break;case"polygon":this.drawPolygon(t,e);break;case"text":this.drawText(t,e);break;case"image":this.drawImage(t,e)}a&&this.renderMode===g.CANVAS&&this.ctx.restore()}}},{key:"drawMarkers",value:function(t,e,a){if(0!==e.length){var r=t.getAttribute("markerUnits"),i=1;if(!r||"strokeWidth"===r){var s=this.getEffectiveAttribute(t,"stroke-width",null);s&&(i=this.convertToPixelUnit(s))}var n=this.getIdFromUrl(t.getAttribute("marker-start")),l=n?this.idElements[n]:null;if(l){var o=l.orientAngle.baseVal.value;if(e.length>1){var h=l.getAttribute("orient");if("auto"===h||"auto-start-reverse"===h){var c=this.getAngle(e[0],e[1]);o="auto"===h?c:c+180}}var u=e[0],v=this.svg.createSVGMatrix().translate(u.x,u.y).rotate(o).scale(i),f=a?a.matrix.multiply(v):v,p=this.svg.createSVGTransformFromMatrix(f);this.processRoot(l,p)}var g=this.getIdFromUrl(t.getAttribute("marker-end")),m=g?this.idElements[g]:null;if(m){var d=m.orientAngle.baseVal.value;if(e.length>1){var y=m.getAttribute("orient");"auto"!==y&&"auto-start-reverse"!==y||(d=this.getAngle(e[e.length-2],e[e.length-1]))}var x=e[e.length-1],b=this.svg.createSVGMatrix().translate(x.x,x.y).rotate(d).scale(i),w=a?a.matrix.multiply(b):b,A=this.svg.createSVGTransformFromMatrix(w);this.processRoot(m,A)}var C=this.getIdFromUrl(t.getAttribute("marker-mid")),k=C?this.idElements[C]:null;if(k&&e.length>2)for(var M=0;M<e.length;M++){var S=e[M];if(0!==M&&M!==e.length-1){var V=k.orientAngle.baseVal.value,E=k.getAttribute("orient");if("auto"===E||"auto-start-reverse"===E){var T=e[M-1],N=e[M+1];V=(this.getAngle(T,S)+this.getAngle(S,N))/2+(N.x<S.x?180:0)}var F=this.svg.createSVGMatrix().translate(S.x,S.y).rotate(V).scale(i),P=a?a.matrix.multiply(F):F,$=this.svg.createSVGTransformFromMatrix(P);this.processRoot(k,$)}}}}},{key:"getAngle",value:function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)*(180/Math.PI)}},{key:"drawPolyline",value:function(t,e){var a=this,r=this.getPointsArray(t),i=r.map((function(t){var r=a.applyMatrix(t,e);return[r.x,r.y]})),s=this.parseStyleConfig(t,e);if(s.fill&&"none"!==s.fill){var n=Object.assign({},s);n.stroke="none",this.postProcessElement(t,this.rc.polygon(i,n))}this.postProcessElement(t,this.rc.linearPath(i,s)),this.drawMarkers(t,r,e)}},{key:"getPointsArray",value:function(t){var e,a=t.getAttribute("points");if(!a)return[];e=a.indexOf(" ")>0?/\s+/g:/,/g;for(var r=a.split(e),i=[],s=0;s<r.length;s++){var n=r[s],l=n.split(",");if(2===l.length)i.push(new p(parseFloat(l[0]),parseFloat(l[1])));else{var o=s+1;o<r.length&&(i.push(new p(parseFloat(n),parseFloat(r[o]))),s=o)}}return i}},{key:"applyPolygonClip",value:function(t,e,a){if(this.renderMode===g.CANVAS){var r=this.getPointsArray(t);if(r.length>0){this.ctx.save(),this.applyGlobalTransform(a);var i=r[0];this.ctx.moveTo(i.x,i.y);for(var s=1;s<r.length;s++){var n=r[s];this.ctx.lineTo(n.x,n.y)}this.ctx.closePath(),this.ctx.restore()}}else{var l=document.createElementNS("http://www.w3.org/2000/svg","polygon");l.setAttribute("points",t.getAttribute("points")),this.applyGlobalTransform(a,l),e.appendChild(l)}}},{key:"drawPolygon",value:function(t,e){var a=this,r=this.getPointsArray(t),i=r.map((function(t){var r=a.applyMatrix(t,e);return[r.x,r.y]}));this.postProcessElement(t,this.rc.polygon(i,this.parseStyleConfig(t,e))),r.length>0&&(r.push(r[0]),this.drawMarkers(t,r,e))}},{key:"applyEllipseClip",value:function(t,e,a){var r=t.cx.baseVal.value,i=t.cy.baseVal.value,s=t.rx.baseVal.value,n=t.ry.baseVal.value;if(0!==s&&0!==n)if(this.renderMode===g.CANVAS)this.ctx.save(),this.applyGlobalTransform(a),this.ctx.ellipse(r,i,s,n,0,0,2*Math.PI),this.ctx.restore();else{var l=document.createElementNS("http://www.w3.org/2000/svg","ellipse");l.cx.baseVal.value=r,l.cy.baseVal.value=i,l.rx.baseVal.value=s,l.ry.baseVal.value=n,this.applyGlobalTransform(a,l),e.appendChild(l)}}},{key:"drawEllipse",value:function(t,e){var a=t.cx.baseVal.value,r=t.cy.baseVal.value,i=t.rx.baseVal.value,s=t.ry.baseVal.value;if(0!==i&&0!==s){var n;if(this.isIdentityTransform(e)||this.isTranslationTransform(e)){var l=this.applyMatrix(new p(a,r),e),o=this.applyMatrix(new p(a+i,r+s),e),h=2*(o.x-l.x),c=2*(o.y-l.y);n=this.rc.ellipse(l.x,l.y,h,c,this.parseStyleConfig(t,e))}else{var u=4/3*(Math.sqrt(2)-1),v=this.applyMatrix(new p(a+i,r),e),f=this.applyMatrix(new p(a,r+s),e),g=this.applyMatrix(new p(a-i,r),e),m=this.applyMatrix(new p(a,r-s),e),d=this.applyMatrix(new p(a+i,r+u*s),e),y=this.applyMatrix(new p(a+u*i,r+s),e),x=this.applyMatrix(new p(a-i,r+u*s),e),b=this.applyMatrix(new p(a-u*i,r-s),e),w=this.applyMatrix(new p(a+i,r-u*s),e),A="M ".concat(v," C ").concat(d," ").concat(y," ").concat(f," S ").concat(x," ").concat(g," S ").concat(b," ").concat(m," S ").concat(w," ").concat(v,"z");n=this.rc.path(A,this.parseStyleConfig(t,e))}this.postProcessElement(t,n)}}},{key:"applyCircleClip",value:function(t,e,a){var r=t.cx.baseVal.value,i=t.cy.baseVal.value,s=t.r.baseVal.value;if(0!==s)if(this.renderMode===g.CANVAS)this.ctx.save(),this.applyGlobalTransform(a),this.ctx.ellipse(r,i,s,s,0,0,2*Math.PI),this.ctx.restore();else{var n=document.createElementNS("http://www.w3.org/2000/svg","circle");n.cx.baseVal.value=r,n.cy.baseVal.value=i,n.r.baseVal.value=s,this.applyGlobalTransform(a,n),e.appendChild(n)}}},{key:"drawCircle",value:function(t,e){var a=t.cx.baseVal.value,r=t.cy.baseVal.value,i=t.r.baseVal.value;if(0!==i){var s,n=this.applyMatrix(new p(a,r),e);if(this.isIdentityTransform(e)||this.isTranslationTransform(e)){var l=2*(this.applyMatrix(new p(a+i,r+i),e).x-n.x);s=this.rc.circle(n.x,n.y,l,this.parseStyleConfig(t,e))}else{var o=4/3*(Math.sqrt(2)-1),h=this.applyMatrix(new p(a+i,r),e),c=this.applyMatrix(new p(a,r+i),e),u=this.applyMatrix(new p(a-i,r),e),v=this.applyMatrix(new p(a,r-i),e),f=this.applyMatrix(new p(a+i,r+o*i),e),g=this.applyMatrix(new p(a+o*i,r+i),e),m=this.applyMatrix(new p(a-i,r+o*i),e),d=this.applyMatrix(new p(a-o*i,r-i),e),y=this.applyMatrix(new p(a+i,r-o*i),e),x="M ".concat(h," C ").concat(f," ").concat(g," ").concat(c," S ").concat(m," ").concat(u," S ").concat(d," ").concat(v," S ").concat(y," ").concat(h,"z");s=this.rc.path(x,this.parseStyleConfig(t,e))}this.postProcessElement(t,s)}}},{key:"drawLine",value:function(t,e){var a=new p(t.x1.baseVal.value,t.y1.baseVal.value),r=this.applyMatrix(a,e),i=new p(t.x2.baseVal.value,t.y2.baseVal.value),s=this.applyMatrix(i,e);r.x===s.x&&r.y===s.y||(this.postProcessElement(t,this.rc.line(r.x,r.y,s.x,s.y,this.parseStyleConfig(t,e))),this.drawMarkers(t,[a,i],e))}},{key:"drawRoot",value:function(t,e){var a=parseFloat(t.getAttribute("width")),r=parseFloat(t.getAttribute("height"));(isNaN(a)||isNaN(r))&&(a=r=null),this.processRoot(t,e,a,r)}},{key:"drawUse",value:function(t,e){var a=t.href.baseVal;a.startsWith("#")&&(a=a.substring(1));var r=this.idElements[a];if(r){var i,s;t.getAttribute("width")&&t.getAttribute("height")&&(i=t.width.baseVal.value,s=t.height.baseVal.value);var n=t.x.baseVal.value,l=t.y.baseVal.value,o=this.svg.createSVGMatrix().translate(n,l);o=e?e.matrix.multiply(o):o;var h=this.svg.createSVGTransformFromMatrix(o);if(this.$useElementContext){var c={root:t,referenced:r,parentContext:Object.assign({},this.$useElementContext)};this.$useElementContext=c}else this.$useElementContext={root:t,referenced:r};this.processRoot(r,this.getCombinedTransform(r,h),i,s),this.$useElementContext.parentContext?this.$useElementContext=this.$useElementContext.parentContext:this.$useElementContext=null}}},{key:"drawPath",value:function(t,e){var a=t.getAttribute("d"),r=new s.a(a).toAbs().transform(s.b.NORMALIZE_HVZ()).transform(s.b.NORMALIZE_ST()),i=new s.a(r.commands.map((function(t){return Object.assign({},t)})));e&&i.transform(s.b.MATRIX(e.matrix.a,e.matrix.b,e.matrix.c,e.matrix.d,e.matrix.e,e.matrix.f));var n=Object(s.c)(i.commands);if(-1===n.indexOf("undefined")){this.postProcessElement(t,this.rc.path(n,this.parseStyleConfig(t,e)));var l,o=[];r.commands.forEach((function(t){switch(t.type){case s.a.MOVE_TO:var e=new p(t.x,t.y);o.push(e),l=e;break;case s.a.LINE_TO:case s.a.QUAD_TO:case s.a.SMOOTH_QUAD_TO:case s.a.CURVE_TO:case s.a.SMOOTH_CURVE_TO:case s.a.ARC:o.push(new p(t.x,t.y));break;case s.a.HORIZ_LINE_TO:o.push(new p(t.x,0));break;case s.a.VERT_LINE_TO:o.push(new p(0,t.y));break;case s.a.CLOSE_PATH:l&&o.push(l)}})),this.drawMarkers(t,o,e)}else console.error("broken path data")}},{key:"applyRectClip",value:function(t,e,a){var r=t.x.baseVal.value,i=t.y.baseVal.value,s=t.width.baseVal.value,n=t.height.baseVal.value;if(0!==s&&0!==n){var l=t.hasAttribute("rx")?t.rx.baseVal.value:null,o=t.hasAttribute("ry")?t.ry.baseVal.value:null;if(this.renderMode===g.CANVAS){if(this.ctx.save(),this.applyGlobalTransform(a),l||o){var h=4/3*(Math.sqrt(2)-1);this.ctx.moveTo(r+l,i),this.ctx.lineTo(r+s-l,i),this.ctx.bezierCurveTo(r+s-l+h*l,i,r+s,i+h*o,r+s,i+o),this.ctx.lineTo(r+s,i+n-o),this.ctx.bezierCurveTo(r+s,i+n-o+h*o,r+s-h*l,i+n,r+s-l,i+n),this.ctx.lineTo(r+l,i+n),this.ctx.bezierCurveTo(r+l-h*l,i+n,r,i+n-h*o,r,i+n-o),this.ctx.lineTo(r,i+o),this.ctx.bezierCurveTo(r,i+h*o,r+h*l,i,r+l,i),this.ctx.closePath()}else this.ctx.rect(r,i,s,n);this.ctx.restore()}else{var c=document.createElementNS("http://www.w3.org/2000/svg","rect");c.x.baseVal.value=r,c.y.baseVal.value=i,c.width.baseVal.value=s,c.height.baseVal.value=n,l&&(c.rx.baseVal.value=l),o&&(c.ry.baseVal.value=o),this.applyGlobalTransform(a,c),e.appendChild(c)}}}},{key:"drawRect",value:function(t,e){var a=t.x.baseVal.value,r=t.y.baseVal.value,i=t.width.baseVal.value,s=t.height.baseVal.value;if(0!==i&&0!==s){var n=t.hasAttribute("rx")?t.rx.baseVal.value:null,l=t.hasAttribute("ry")?t.ry.baseVal.value:null;if((n||l)&&(l=l<0?0:l,n=null===(n=n<0?0:n)?l:n,l=null===l?n:l,n=Math.min(n,i/2),l=Math.min(l,s/2)),!this.isIdentityTransform(e)&&!this.isTranslationTransform(e)||n||l){var o="";if(n||l){var h=4/3*(Math.sqrt(2)-1),c=this.applyMatrix(new p(a+n,r),e);o+="M ".concat(c);var u=this.applyMatrix(new p(a+i-n,r),e);o+="L ".concat(u);var v=this.applyMatrix(new p(a+i-n+h*n,r),e),f=this.applyMatrix(new p(a+i,r+h*l),e),m=this.applyMatrix(new p(a+i,r+l),e);o+="C ".concat(v," ").concat(f," ").concat(m);var d=this.applyMatrix(new p(a+i,r+s-l),e);o+="L ".concat(d);var y=this.applyMatrix(new p(a+i,r+s-l+h*l),e),x=this.applyMatrix(new p(a+i-h*n,r+s),e),b=this.applyMatrix(new p(a+i-n,r+s),e);o+="C ".concat(y," ").concat(x," ").concat(b);var w=this.applyMatrix(new p(a+n,r+s),e);o+="L ".concat(w);var A=this.applyMatrix(new p(a+n-h*n,r+s),e),C=this.applyMatrix(new p(a,r+s-h*l),e),k=this.applyMatrix(new p(a,r+s-l),e);o+="C ".concat(A," ").concat(C," ").concat(k);var M=this.applyMatrix(new p(a,r+l),e);o+="L ".concat(M);var S=this.applyMatrix(new p(a,r+h*l),e),V=this.applyMatrix(new p(a+h*n,r),e);o+="C ".concat(S," ").concat(V," ").concat(c),o+="z"}else{var E=this.applyMatrix(new p(a,r),e),T=this.applyMatrix(new p(a+i,r),e),N=this.applyMatrix(new p(a+i,r+s),e),F=this.applyMatrix(new p(a,r+s),e);o+="M ".concat(E),o+="L ".concat(T),o+="L ".concat(N),o+="L ".concat(F),o+="z"}this.renderMode===g.CANVAS&&(this.ctx.save(),this.ctx.lineCap="square");var P=this.rc.path(o,this.parseStyleConfig(t,e));this.renderMode===g.SVG&&P&&P.setAttribute("stroke-linecap","square"),this.postProcessElement(t,P),this.renderMode===g.CANVAS&&this.ctx.restore()}else{var $=this.applyMatrix(new p(a,r),e),O=this.applyMatrix(new p(a+i,r+s),e),I=O.x-$.x,G=O.y-$.y;this.postProcessElement(t,this.rc.rectangle($.x,$.y,I,G,this.parseStyleConfig(t,e)))}}}},{key:"drawImage",value:function(t,e){var a,r,i=this,s=t.href.baseVal,n=t.x.baseVal.value,l=t.y.baseVal.value;if(t.getAttribute("width")&&t.getAttribute("height")&&(a=t.width.baseVal.value,r=t.height.baseVal.value),s.startsWith("data:")&&-1!==s.indexOf("image/svg+xml")){var o=/^data:([^,]*),(.*)/.exec(s);if(o.length>2){var h=o[1],c=o[2],u=-1!==h.indexOf("base64"),v=-1!==h.indexOf("utf8");u&&(c=btoa(c)),v||(c=decodeURIComponent(c));var f=(new DOMParser).parseFromString(c,"image/svg+xml").firstElementChild,p=this.svg.createSVGMatrix().translate(n,l);return p=e?e.matrix.multiply(p):p,void this.processRoot(f,this.svg.createSVGTransformFromMatrix(p),a,r)}}else{var m=this.svg.createSVGMatrix().translate(n,l);if(m=e?e.matrix.multiply(m):m,this.renderMode===g.CANVAS){var d=m.e,y=m.f,x=new Image;x.onload=function(){i.ctx.drawImage(x,d,y)},x.src=s}else{var b=t.cloneNode(),w=document.createElementNS("http://www.w3.org/2000/svg","g");this.applyGlobalTransform(e,w),w.appendChild(b),this.postProcessElement(t,w)}}}},{key:"drawText",value:function(t,e){if(this.renderMode===g.SVG){var a=document.createElementNS("http://www.w3.org/2000/svg","g");a.setAttribute("class","text-container"),this.applyGlobalTransform(e,a);var r=t.cloneNode(!0);return r.transform.baseVal.numberOfItems>0&&r.transform.baseVal.clear(),r.setAttribute("font-family",this.fontFamily),a.appendChild(r),void this.postProcessElement(t,a)}this.ctx.save();var i=new p(this.getLengthInPx(t.x),this.getLengthInPx(t.y));this.ctx.font=this.getCssFont(t,e);var s=this.parseStyleConfig(t,e);s.fill&&(this.ctx.fillStyle=s.fill);var n="none"!=this.getEffectiveAttribute(t,"stroke");n&&(this.ctx.strokeStyle=s.stroke,this.ctx.lineWidth=this.convertToPixelUnit(this.getEffectiveAttribute(t,"stroke-width")));var l=this.getEffectiveAttribute(t,"text-anchor",this.$useElementContext);l&&(this.ctx.textAlign="middle"!==l?l:"center"),this.applyGlobalTransform(e);var o=this.getLengthInPx(t.dx),h=this.getLengthInPx(t.dy);if(this.ctx.translate(o,h),0===t.childElementCount)this.ctx.fillText(this.getTextContent(t),i.x,i.y,t.getComputedTextLength()),n&&this.ctx.strokeText(this.getTextContent(t),i.x,i.y,t.getComputedTextLength());else for(var c=this.getNodeChildren(t),u=0;u<c.length;u++){var v=c[u];if("tspan"===v.tagName){i=new p(this.getLengthInPx(v.x),this.getLengthInPx(v.y));var f=this.getLengthInPx(v.dx),m=this.getLengthInPx(v.dy);this.ctx.translate(f,m),this.ctx.fillText(this.getTextContent(v),i.x,i.y),n&&this.ctx.strokeText(this.getTextContent(v),i.x,i.y)}}this.ctx.restore()}},{key:"getTextContent",value:function(t){var e=t.textContent;return e=this.shouldNormalizeWhitespace(t)?e.replace(/[\n\r\t ]+/g," ").trim():e.replace(/\r\n|[\n\r\t]/g," ")}},{key:"shouldNormalizeWhitespace",value:function(t){for(var e=null;null!==t&&t!==this.$svg&&null===e;)null===(e=t.getAttribute("xml:space"))&&(t=t.parentNode);return"preserve"!==e}},{key:"getLengthInPx",value:function(t){return t&&t.baseVal.numberOfItems>0?t.baseVal.getItem(0).value:0}},{key:"getCssFont",value:function(t,e){var a="",r=this.getEffectiveAttribute(t,"font-style",this.$useElementContext);r&&(a+=r);var i=this.getEffectiveAttribute(t,"font-weight",this.$useElementContext);i&&(a+=" ".concat(i));var s=this.getEffectiveAttribute(t,"font-size",this.$useElementContext);if(s&&(a+=" ".concat(s)),this.fontFamily)a+=" ".concat(this.fontFamily);else{var n=this.getEffectiveAttribute(t,"font-family",this.$useElementContext);n&&(a+=" ".concat(n))}return a=a.trim()}},{key:"getNodeChildren",value:function(t){if(void 0!==t.children)return t.children;for(var e,a=0,r=t.childNodes,i=[];e=r[a++];)1===e.nodeType&&i.push(e);return i}}]),t}(),d=function(){function t(){c(this,t)}return v(t,null,[{key:"pencilTextureFilter",get:function(){var t=document.createElementNS("http://www.w3.org/2000/svg","filter");t.setAttribute("id","pencilTextureFilter"),t.setAttribute("x","0%"),t.setAttribute("y","0%"),t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.setAttribute("filterUnits","objectBoundingBox");var e=document.createElementNS("http://www.w3.org/2000/svg","feTurbulence");e.setAttribute("type","fractalNoise"),e.setAttribute("baseFrequency","2"),e.setAttribute("numOctaves","5"),e.setAttribute("stitchTiles","stitch"),e.setAttribute("result","f1"),t.appendChild(e);var a=document.createElementNS("http://www.w3.org/2000/svg","feColorMatrix");a.setAttribute("type","matrix"),a.setAttribute("values","0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5"),a.setAttribute("result","f2"),t.appendChild(a);var r=document.createElementNS("http://www.w3.org/2000/svg","feComposite");return r.setAttribute("operator","in"),r.setAttribute("in","SourceGraphic"),r.setAttribute("in2","f2"),r.setAttribute("result","f3"),t.appendChild(r),t}}]),t}()}}]);