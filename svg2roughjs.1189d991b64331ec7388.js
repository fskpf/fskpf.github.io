(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{51:function(t,e,r){"use strict";r.d(e,"a",(function(){return g})),r.d(e,"b",(function(){return d}));var a=r(52),i=r.n(a),s=r(13),n=r(46);function l(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,n=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return n=t.done,t},e:function(t){l=!0,s=t},f:function(){try{n||null==r.return||r.return()}finally{if(l)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function v(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),t}var f=r(386),p=function(){function t(e,r){c(this,t),this.$x=e||0,this.$y=r||0}return v(t,[{key:"x",get:function(){return this.$x}},{key:"y",get:function(){return this.$y}}]),v(t,[{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y)}}]),t}(),g=function(){function t(){c(this,t)}return v(t,null,[{key:"SVG",get:function(){return"RenderMode.SVG"}},{key:"CANVAS",get:function(){}}]),t}(),d=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.SVG,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(c(this,t),!e)throw new Error("No target provided");if("object"===h(e)){if("CANVAS"!==e.tagName&&"SVG"!==e.tagName)throw new Error("Target object is not of type HMTLCanvaseElement or SVGSVGElement");this.canvas=e,this.$renderMode="CANVAS"===e.tagName?g.CANVAS:g.SVG}else if("string"==typeof e){var i=document.querySelector(e);if(!i)throw new Error("No element found with ".concat(e));r===g.CANVAS?(this.canvas=document.createElement("canvas"),this.canvas.width=i.clientWidth,this.canvas.height=i.clientHeight):(this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.canvas.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink")),this.$renderMode=r,i.appendChild(this.canvas)}this.renderMode===g.CANVAS?(this.rc=n.a.canvas(this.canvas,a),this.ctx=this.canvas.getContext("2d")):this.rc=n.a.svg(this.canvas,a),this.$roughConfig=a,this.$fontFamily="Comic Sans MS, cursive",this.$randomize=!0}return v(t,[{key:"svg",set:function(t){this.$svg!==t&&(this.$svg=t,t.hasAttribute("width")?this.width=t.width.baseVal.value:t.hasAttribute("viewBox")?this.width=t.viewBox.baseVal.width:this.width=300,t.hasAttribute("height")?this.height=t.height.baseVal.value:t.hasAttribute("viewBox")?this.height=t.viewBox.baseVal.height:this.height=150,this.renderMode===g.CANVAS?(this.canvas.width=this.width,this.canvas.height=this.height):(this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height)),this.collectElementsWithID(),this.redraw())},get:function(){return this.$svg}},{key:"roughConfig",set:function(t){this.$roughConfig=t,this.renderMode===g.CANVAS?this.rc=n.a.canvas(this.canvas,this.$roughConfig):this.rc=n.a.svg(this.canvas,this.$roughConfig),this.redraw()},get:function(){return this.$roughConfig}},{key:"fontFamily",set:function(t){this.$fontFamily!==t&&(this.$fontFamily=t,this.redraw())},get:function(){return this.$fontFamily}},{key:"randomize",set:function(t){this.$randomize=t,this.redraw()},get:function(){return this.$randomize}},{key:"backgroundColor",set:function(t){this.$backgroundColor=t},get:function(){return this.$backgroundColor}},{key:"renderMode",set:function(t){if(this.$renderMode!==t){this.$renderMode=t;var e,r=this.canvas.parentElement;r.removeChild(this.canvas),t===g.CANVAS?((e=document.createElement("canvas")).width=this.width,e.height=this.height,this.ctx=e.getContext("2d")):(this.ctx=null,(e=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),e.setAttribute("width",this.width),e.setAttribute("height",this.height)),r.appendChild(e),this.canvas=e,t===g.CANVAS?this.rc=n.a.canvas(this.canvas,this.$roughConfig):this.rc=n.a.svg(this.canvas,this.$roughConfig),this.redraw()}},get:function(){return this.$renderMode}},{key:"pencilFilter",set:function(t){this.$pencilFilter!==t&&(this.$pencilFilter=t,this.redraw())},get:function(){return this.$pencilFilter}}],[{key:"CONTAINS_UNIT_REGEXP",value:function(){return/[a-z%]/}}]),v(t,[{key:"clearCanvas",value:function(){if(this.renderMode===g.CANVAS)this.ctx.clearRect(0,0,this.width,this.height);else for(;this.canvas.firstChild;)this.canvas.removeChild(this.canvas.firstChild)}},{key:"redraw",value:function(){if(this.svg){this.clearCanvas();var t=null;if(this.backgroundColor)if(this.renderMode===g.CANVAS)this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height);else{var e=document.createElementNS("http://www.w3.org/2000/svg","rect");e.width.baseVal.value=this.width,e.height.baseVal.value=this.height,e.setAttribute("fill",this.backgroundColor),this.canvas.appendChild(e),t=e}if(this.pencilFilter&&this.renderMode===g.SVG){var r=this.getOutputDefsElement();if(r){r.appendChild(m.roughPaperFilter),r.appendChild(m.pencilTextureFilter);var a=document.createElementNS("http://www.w3.org/1999/xhtml","style");a.setAttribute("type","text/css"),a.innerHTML="svg > g:not(.text-container) { filter:url(#pencilTextureFilter); }",r.appendChild(a)}if(t)t.setAttribute("filter","url(#roughPaperFilter)");else{var i=document.createElementNS("http://www.w3.org/2000/svg","rect");i.width.baseVal.value=this.width,i.height.baseVal.value=this.height,i.setAttribute("fill",this.backgroundColor||"white"),i.setAttribute("filter","url(#roughPaperFilter)"),this.canvas.insertBefore(i,this.canvas.firstElementChild)}}this.processRoot(this.svg,null,this.width,this.height)}}},{key:"processRoot",value:function(t,e,r,a){var i=[];if("svg"===t.tagName||"symbol"===t.tagName||"marker"===t.tagName){var s=0,n=0;"symbol"===t.tagName?(s=parseFloat(t.getAttribute("x"))||0,n=parseFloat(t.getAttribute("y"))||0,r=r||parseFloat(t.getAttribute("width"))||void 0,a=a||parseFloat(t.getAttribute("height"))||void 0):"marker"===t.tagName?(s=-t.refX.baseVal.value,n=-t.refY.baseVal.value,r=r||parseFloat(t.getAttribute("markerWidth"))||void 0,a=a||parseFloat(t.getAttribute("markerHeight"))||void 0):(s=t.x.baseVal.value,n=t.y.baseVal.value);var l=this.svg.createSVGMatrix();if(void 0!==r&&void 0!==a&&t.getAttribute("viewBox")){var o=t.viewBox.baseVal,h=o.x,c=o.y,u=o.width,v=o.height;l="marker"===t.tagName?l.translate(r/u*-h,a/v*-c).scaleNonUniform(r/u,a/v).translate(s,n):l.translate(r/u*-h,a/v*-c).translate(s,n).scaleNonUniform(r/u,a/v)}else l=l.translate(s,n);var f=e?e.matrix.multiply(l):l;e=this.svg.createSVGTransformFromMatrix(f);for(var p=this.getNodeChildren(t),g=p.length-1;g>=0;g--){var d=p[g];if("symbol"!==d.tagName&&"marker"!==d.tagName){var m=e?this.getCombinedTransform(d,e):this.getSvgTransform(d);i.push({element:d,transform:m})}}}else i.push({element:t,transform:e});for(;i.length>0;){var y=i.pop(),b=y.element,x=y.transform;if(this.drawElement(b,x),"defs"!==b.tagName&&"symbol"!==b.tagName&&"marker"!==b.tagName&&"svg"!==b.tagName&&"clipPath"!==b.tagName)for(var w=this.getNodeChildren(b),A=w.length-1;A>=0;A--){var C=w[A],k=x?this.getCombinedTransform(C,x):this.getSvgTransform(C);i.push({element:C,transform:k})}}}},{key:"postProcessElement",value:function(t,e){if(this.renderMode===g.SVG&&e){this.canvas.appendChild(e);var r=t.getAttribute("data-sketchy-clip-path");r&&e.setAttribute("clip-path","url(#".concat(r,")"))}}},{key:"getCombinedTransform",value:function(t,e){var r=this.getSvgTransform(t);if(r){var a=r.matrix,i=e.matrix.multiply(a);return this.svg.createSVGTransformFromMatrix(i)}return e}},{key:"getSvgTransform",value:function(t){return t.transform&&t.transform.baseVal.numberOfItems>0?t.transform.baseVal.consolidate():null}},{key:"applyGlobalTransform",value:function(t,e){if(t&&t.matrix){var r=t.matrix;this.renderMode===g.CANVAS?this.ctx.setTransform(r.a,r.b,r.c,r.d,r.e,r.f):this.renderMode===g.SVG&&e&&(e.transform.baseVal.numberOfItems>0?e.transform.baseVal.getItem(0).setMatrix(r):e.transform.baseVal.appendItem(t))}}},{key:"isIdentityTransform",value:function(t){if(!t)return!0;var e=t.matrix;return!e||1===e.a&&0===e.b&&0===e.c&&1===e.d&&0===e.e&&0===e.f}},{key:"isTranslationTransform",value:function(t){if(!t)return!0;var e=t.matrix;return!e||1===e.a&&0===e.b&&0===e.c&&1===e.d}},{key:"collectElementsWithID",value:function(){this.idElements={};var t,e=l(Array.prototype.slice.apply(this.svg.querySelectorAll("*[id]")));try{for(e.s();!(t=e.n()).done;){var r=t.value,a=r.getAttribute("id");a&&(this.idElements[a]=r)}}catch(t){e.e(t)}finally{e.f()}}},{key:"applyMatrix",value:function(t,e){if(!e)return t;var r=e.matrix,a=r.a*t.x+r.c*t.y+r.e,i=r.b*t.x+r.d*t.y+r.f;return new p(a,i)}},{key:"getRandomNumber",value:function(t,e){return Math.random()*(e-t)+t}},{key:"getStopOffset",value:function(t){var e=t.getAttribute("offset");return e?e.indexOf("%")?parseFloat(e.substring(0,e.length-1)):100*parseFloat(e):0}},{key:"getStopColor",value:function(t){var e=t.getAttribute("stop-color");if(!e){var r=t.getAttribute("style"),a=/stop-color:\s?(.*);?/.exec(r);a.length>1&&(e=a[1])}return e?i()(e):i()("white")}},{key:"gradientToColor",value:function(t,e){var r=this,a=Array.prototype.slice.apply(t.querySelectorAll("stop"));if(0===a.length)return"transparent";if(1===a.length){var s=this.getStopColor(stop);return s.setAlpha(e),s.toString()}var n=a.reduce((function(t,e){var a=r.getStopColor(e),s=r.getStopOffset(e);return i.a.mix(t,a,s)}));return n.setAlpha(e),n.toString()}},{key:"getIdFromUrl",value:function(t){var e=/url\('#?(.*?)'\)/.exec(t)||/url\("#?(.*?)"\)/.exec(t)||/url\(#?(.*?)\)/.exec(t);return e&&e.length>1?e[1]:null}},{key:"parseFillUrl",value:function(t,e){var r=this.getIdFromUrl(t);if(!r)return"transparent";var a=this.idElements[r];if(a){if("string"==typeof a)return a;if("linearGradient"===a.tagName||"radialGradient"===a.tagName){var i=this.gradientToColor(a,e);return this.idElements[r]=i,i}}}},{key:"getOpacity",value:function(t,e){var r=getComputedStyle(t)[e]||t.getAttribute(e);return r?-1!==r.indexOf("%")?Math.min(1,Math.max(0,parseFloat(r.substring(0,r.length-1))/100)):Math.min(1,Math.max(0,parseFloat(r))):1}},{key:"getEffectiveElementOpacity",value:function(t,e,r){var a;if(a=r?t.getAttribute("opacity"):getComputedStyle(t).opacity||t.getAttribute("opacity")){e*=-1!==a.indexOf("%")?Math.min(1,Math.max(0,parseFloat(a.substring(0,a.length-1))/100)):Math.min(1,Math.max(0,parseFloat(a)))}var i=t.parentElement,s=r,n=s;return s&&s.referenced===t&&(i=s.root,n=s.parentContext),i&&i!==this.$svg?this.getEffectiveElementOpacity(i,e,n):e}},{key:"getEffectiveAttribute",value:function(t,e,r){var a;if(!(a=r?t.getAttribute(e):getComputedStyle(t)[e]||t.getAttribute(e))){var i=t.parentElement,s=r,n=s;return s&&s.referenced===t&&(i=s.root,n=s.parentContext),i&&i!==this.$svg?this.getEffectiveAttribute(i,e,n):null}return a}},{key:"convertToPixelUnit",value:function(e){return null!==e.match(t.CONTAINS_UNIT_REGEXP)?f.convert("px",e,this.$svg):parseFloat(e)}},{key:"parseStyleConfig",value:function(t,e){var r=this,a=Object.assign({},this.$roughConfig),s=1;if(!this.isIdentityTransform(e)){var n=e.matrix,l=n.a*n.d-n.c*n.b;s=Math.sqrt(l)}var o=this.getEffectiveElementOpacity(t,1,this.$useElementContext),h=this.getEffectiveAttribute(t,"fill",this.$useElementContext)||"black",c=o*this.getOpacity(t,"fill-opacity");if(h)if(-1!==h.indexOf("url"))a.fill=this.parseFillUrl(h,c);else if("none"===h)delete a.fill;else{var u=i()(h);u.setAlpha(c),a.fill=u.toString()}var v=this.getEffectiveAttribute(t,"stroke",this.$useElementContext),f=o*this.getOpacity(t,"stroke-opacity");if(v)if(-1!==v.indexOf("url"))a.stroke=this.parseFillUrl(h,f);else if("none"===v)a.stroke="none";else{var p=i()(v);p.setAlpha(f),a.stroke=p.toString()}else a.stroke="none";var g=this.getEffectiveAttribute(t,"stroke-width",this.$useElementContext);a.strokeWidth=g?this.convertToPixelUnit(g)*s:0;var d=this.getEffectiveAttribute(t,"stroke-dasharray",this.$useElementContext);d&&"none"!==d&&(d=d.split(/[\s,]+/).filter((function(t){return t.length>0})).map((function(t){return Math.max(.5,r.convertToPixelUnit(t)*s)})),a.strokeLineDash=d);var m=this.getEffectiveAttribute(t,"stroke-dashoffset",this.$useElementContext);return m&&(m=this.convertToPixelUnit(m),a.strokeLineDashOffset=m*s),a.fill&&"none"===a.stroke&&(a.stroke=a.fill,a.strokeWidth=1),this.randomize&&(a.fillWeight=this.getRandomNumber(.5,3),a.hachureAngle=this.getRandomNumber(-30,-50),a.hachureGap=this.getRandomNumber(3,5),void 0===a.disableMultiStroke&&(a.disableMultiStroke=Math.random()>.3)),a}},{key:"getOutputDefsElement",value:function(){if(this.renderMode===g.SVG){var t=this.canvas.querySelector("defs");return t||(t=document.createElementNS("http://www.w3.org/2000/svg","defs"),this.canvas.childElementCount>0?this.canvas.insertBefore(t,this.canvas.firstElementChild):this.canvas.appendChild(t)),t}return null}},{key:"applyClipPath",value:function(t,e,r){var a=this.getIdFromUrl(e);if(a){var i=this.idElements[a];if(i){var s;if(this.renderMode===g.CANVAS)this.ctx.beginPath();else{var n=this.getOutputDefsElement(),l="".concat(a,"_").concat(n.childElementCount);(s=document.createElementNS("http://www.w3.org/2000/svg","clipPath")).id=l,t.setAttribute("data-sketchy-clip-path",l),n.appendChild(s)}for(var o=[],h=this.getNodeChildren(i),c=h.length-1;c>=0;c--){var u=h[c],v=r?this.getCombinedTransform(u,r):this.getSvgTransform(u);o.push({element:u,transform:v})}for(;o.length>0;){var f=o.pop(),p=f.element,d=f.transform;if(this.applyElementClip(p,s,d),"defs"!==p.tagName&&"svg"!==p.tagName&&"clipPath"!==p.tagName&&"text"!==p.tagName)for(var m=this.getNodeChildren(p),y=m.length-1;y>=0;y--){var b=m[y],x=d?this.getCombinedTransform(b,d):this.getSvgTransform(b);o.push({element:b,transform:x})}}this.renderMode===g.CANVAS&&this.ctx.clip()}}}},{key:"applyElementClip",value:function(t,e,r){switch(t.tagName){case"rect":this.applyRectClip(t,e,r);break;case"circle":this.applyCircleClip(t,e,r);break;case"ellipse":this.applyEllipseClip(t,e,r);break;case"polygon":this.applyPolygonClip(t,e,r)}}},{key:"isHidden",value:function(t){var e=t.style;return!!e&&("none"===e.display||"hidden"===e.visibility)}},{key:"drawElement",value:function(t,e){if(!this.isHidden(t)){var r=t.getAttribute("clip-path");switch(r&&(this.renderMode===g.CANVAS&&this.ctx.save(),this.applyClipPath(t,r,e)),t.tagName){case"svg":case"symbol":this.drawRoot(t,e);break;case"rect":this.drawRect(t,e);break;case"path":this.drawPath(t,e);break;case"use":this.drawUse(t,e);break;case"line":this.drawLine(t,e);break;case"circle":this.drawCircle(t,e);break;case"ellipse":this.drawEllipse(t,e);break;case"polyline":this.drawPolyline(t,e);break;case"polygon":this.drawPolygon(t,e);break;case"text":this.drawText(t,e);break;case"image":this.drawImage(t,e)}r&&this.renderMode===g.CANVAS&&this.ctx.restore()}}},{key:"drawMarkers",value:function(t,e,r){if(0!==e.length){var a=t.getAttribute("markerUnits"),i=1;if(!a||"strokeWidth"===a){var s=this.getEffectiveAttribute(t,"stroke-width",null);s&&(i=this.convertToPixelUnit(s))}var n=this.getIdFromUrl(t.getAttribute("marker-start")),l=n?this.idElements[n]:null;if(l){var o=l.orientAngle.baseVal.value;if(e.length>1){var h=l.getAttribute("orient");if("auto"===h||"auto-start-reverse"===h){var c=this.getAngle(e[0],e[1]);o="auto"===h?c:c+180}}var u=e[0],v=this.svg.createSVGMatrix().translate(u.x,u.y).rotate(o).scale(i),f=r?r.matrix.multiply(v):v,p=this.svg.createSVGTransformFromMatrix(f);this.processRoot(l,p)}var g=this.getIdFromUrl(t.getAttribute("marker-end")),d=g?this.idElements[g]:null;if(d){var m=d.orientAngle.baseVal.value;if(e.length>1){var y=d.getAttribute("orient");"auto"!==y&&"auto-start-reverse"!==y||(m=this.getAngle(e[e.length-2],e[e.length-1]))}var b=e[e.length-1],x=this.svg.createSVGMatrix().translate(b.x,b.y).rotate(m).scale(i),w=r?r.matrix.multiply(x):x,A=this.svg.createSVGTransformFromMatrix(w);this.processRoot(d,A)}var C=this.getIdFromUrl(t.getAttribute("marker-mid")),k=C?this.idElements[C]:null;if(k&&e.length>2)for(var S=0;S<e.length;S++){var M=e[S];if(0!==S&&S!==e.length-1){var V=k.orientAngle.baseVal.value,E=k.getAttribute("orient");if("auto"===E||"auto-start-reverse"===E){var N=e[S-1],T=e[S+1];V=(this.getAngle(N,M)+this.getAngle(M,T))/2+(T.x<M.x?180:0)}var F=this.svg.createSVGMatrix().translate(M.x,M.y).rotate(V).scale(i),P=r?r.matrix.multiply(F):F,O=this.svg.createSVGTransformFromMatrix(P);this.processRoot(k,O)}}}}},{key:"getAngle",value:function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)*(180/Math.PI)}},{key:"drawPolyline",value:function(t,e){var r=this,a=this.getPointsArray(t),i=a.map((function(t){var a=r.applyMatrix(t,e);return[a.x,a.y]})),s=this.parseStyleConfig(t,e);if(s.fill&&"none"!==s.fill){var n=Object.assign({},s);n.stroke="none",this.postProcessElement(t,this.rc.polygon(i,n))}this.postProcessElement(t,this.rc.linearPath(i,s)),this.drawMarkers(t,a,e)}},{key:"getPointsArray",value:function(t){var e,r=t.getAttribute("points");if(!r)return[];e=r.indexOf(" ")>0?/\s+/g:/,/g;for(var a=r.split(e),i=[],s=0;s<a.length;s++){var n=a[s],l=n.split(",");if(2===l.length)i.push(new p(parseFloat(l[0]),parseFloat(l[1])));else{var o=s+1;o<a.length&&(i.push(new p(parseFloat(n),parseFloat(a[o]))),s=o)}}return i}},{key:"applyPolygonClip",value:function(t,e,r){if(this.renderMode===g.CANVAS){var a=this.getPointsArray(t);if(a.length>0){this.ctx.save(),this.applyGlobalTransform(r);var i=a[0];this.ctx.moveTo(i.x,i.y);for(var s=1;s<a.length;s++){var n=a[s];this.ctx.lineTo(n.x,n.y)}this.ctx.closePath(),this.ctx.restore()}}else{var l=document.createElementNS("http://www.w3.org/2000/svg","polygon");l.setAttribute("points",t.getAttribute("points")),this.applyGlobalTransform(r,l),e.appendChild(l)}}},{key:"drawPolygon",value:function(t,e){var r=this,a=this.getPointsArray(t),i=a.map((function(t){var a=r.applyMatrix(t,e);return[a.x,a.y]}));this.postProcessElement(t,this.rc.polygon(i,this.parseStyleConfig(t,e))),a.length>0&&(a.push(a[0]),this.drawMarkers(t,a,e))}},{key:"applyEllipseClip",value:function(t,e,r){var a=t.cx.baseVal.value,i=t.cy.baseVal.value,s=t.rx.baseVal.value,n=t.ry.baseVal.value;if(0!==s&&0!==n)if(this.renderMode===g.CANVAS)this.ctx.save(),this.applyGlobalTransform(r),this.ctx.ellipse(a,i,s,n,0,0,2*Math.PI),this.ctx.restore();else{var l=document.createElementNS("http://www.w3.org/2000/svg","ellipse");l.cx.baseVal.value=a,l.cy.baseVal.value=i,l.rx.baseVal.value=s,l.ry.baseVal.value=n,this.applyGlobalTransform(r,l),e.appendChild(l)}}},{key:"drawEllipse",value:function(t,e){var r=t.cx.baseVal.value,a=t.cy.baseVal.value,i=t.rx.baseVal.value,s=t.ry.baseVal.value;if(0!==i&&0!==s){var n;if(this.isIdentityTransform(e)||this.isTranslationTransform(e)){var l=this.applyMatrix(new p(r,a),e),o=this.applyMatrix(new p(r+i,a+s),e),h=2*(o.x-l.x),c=2*(o.y-l.y);n=this.rc.ellipse(l.x,l.y,h,c,this.parseStyleConfig(t,e))}else{var u=4/3*(Math.sqrt(2)-1),v=this.applyMatrix(new p(r+i,a),e),f=this.applyMatrix(new p(r,a+s),e),g=this.applyMatrix(new p(r-i,a),e),d=this.applyMatrix(new p(r,a-s),e),m=this.applyMatrix(new p(r+i,a+u*s),e),y=this.applyMatrix(new p(r+u*i,a+s),e),b=this.applyMatrix(new p(r-i,a+u*s),e),x=this.applyMatrix(new p(r-u*i,a-s),e),w=this.applyMatrix(new p(r+i,a-u*s),e),A="M ".concat(v," C ").concat(m," ").concat(y," ").concat(f," S ").concat(b," ").concat(g," S ").concat(x," ").concat(d," S ").concat(w," ").concat(v,"z");n=this.rc.path(A,this.parseStyleConfig(t,e))}this.postProcessElement(t,n)}}},{key:"applyCircleClip",value:function(t,e,r){var a=t.cx.baseVal.value,i=t.cy.baseVal.value,s=t.r.baseVal.value;if(0!==s)if(this.renderMode===g.CANVAS)this.ctx.save(),this.applyGlobalTransform(r),this.ctx.ellipse(a,i,s,s,0,0,2*Math.PI),this.ctx.restore();else{var n=document.createElementNS("http://www.w3.org/2000/svg","circle");n.cx.baseVal.value=a,n.cy.baseVal.value=i,n.r.baseVal.value=s,this.applyGlobalTransform(r,n),e.appendChild(n)}}},{key:"drawCircle",value:function(t,e){var r=t.cx.baseVal.value,a=t.cy.baseVal.value,i=t.r.baseVal.value;if(0!==i){var s,n=this.applyMatrix(new p(r,a),e);if(this.isIdentityTransform(e)||this.isTranslationTransform(e)){var l=2*(this.applyMatrix(new p(r+i,a+i),e).x-n.x);s=this.rc.circle(n.x,n.y,l,this.parseStyleConfig(t,e))}else{var o=4/3*(Math.sqrt(2)-1),h=this.applyMatrix(new p(r+i,a),e),c=this.applyMatrix(new p(r,a+i),e),u=this.applyMatrix(new p(r-i,a),e),v=this.applyMatrix(new p(r,a-i),e),f=this.applyMatrix(new p(r+i,a+o*i),e),g=this.applyMatrix(new p(r+o*i,a+i),e),d=this.applyMatrix(new p(r-i,a+o*i),e),m=this.applyMatrix(new p(r-o*i,a-i),e),y=this.applyMatrix(new p(r+i,a-o*i),e),b="M ".concat(h," C ").concat(f," ").concat(g," ").concat(c," S ").concat(d," ").concat(u," S ").concat(m," ").concat(v," S ").concat(y," ").concat(h,"z");s=this.rc.path(b,this.parseStyleConfig(t,e))}this.postProcessElement(t,s)}}},{key:"drawLine",value:function(t,e){var r=new p(t.x1.baseVal.value,t.y1.baseVal.value),a=this.applyMatrix(r,e),i=new p(t.x2.baseVal.value,t.y2.baseVal.value),s=this.applyMatrix(i,e);a.x===s.x&&a.y===s.y||(this.postProcessElement(t,this.rc.line(a.x,a.y,s.x,s.y,this.parseStyleConfig(t,e))),this.drawMarkers(t,[r,i],e))}},{key:"drawRoot",value:function(t,e){var r=parseFloat(t.getAttribute("width")),a=parseFloat(t.getAttribute("height"));(isNaN(r)||isNaN(a))&&(r=a=null),this.processRoot(t,e,r,a)}},{key:"drawUse",value:function(t,e){var r=t.href.baseVal;r.startsWith("#")&&(r=r.substring(1));var a=this.idElements[r];if(a){var i,s;t.getAttribute("width")&&t.getAttribute("height")&&(i=t.width.baseVal.value,s=t.height.baseVal.value);var n=t.x.baseVal.value,l=t.y.baseVal.value,o=this.svg.createSVGMatrix().translate(n,l);o=e?e.matrix.multiply(o):o;var h=this.svg.createSVGTransformFromMatrix(o);if(this.$useElementContext){var c={root:t,referenced:a,parentContext:Object.assign({},this.$useElementContext)};this.$useElementContext=c}else this.$useElementContext={root:t,referenced:a};this.processRoot(a,this.getCombinedTransform(a,h),i,s),this.$useElementContext.parentContext?this.$useElementContext=this.$useElementContext.parentContext:this.$useElementContext=null}}},{key:"drawPath",value:function(t,e){var r=t.getAttribute("d"),a=new s.a(r).toAbs().transform(s.b.NORMALIZE_HVZ()).transform(s.b.NORMALIZE_ST()),i=new s.a(a.commands.map((function(t){return Object.assign({},t)})));e&&i.transform(s.b.MATRIX(e.matrix.a,e.matrix.b,e.matrix.c,e.matrix.d,e.matrix.e,e.matrix.f));var n=Object(s.c)(i.commands);if(-1===n.indexOf("undefined")){this.postProcessElement(t,this.rc.path(n,this.parseStyleConfig(t,e)));var l,o=[];a.commands.forEach((function(t){switch(t.type){case s.a.MOVE_TO:var e=new p(t.x,t.y);o.push(e),l=e;break;case s.a.LINE_TO:case s.a.QUAD_TO:case s.a.SMOOTH_QUAD_TO:case s.a.CURVE_TO:case s.a.SMOOTH_CURVE_TO:case s.a.ARC:o.push(new p(t.x,t.y));break;case s.a.HORIZ_LINE_TO:o.push(new p(t.x,0));break;case s.a.VERT_LINE_TO:o.push(new p(0,t.y));break;case s.a.CLOSE_PATH:l&&o.push(l)}})),this.drawMarkers(t,o,e)}else console.error("broken path data")}},{key:"applyRectClip",value:function(t,e,r){var a=t.x.baseVal.value,i=t.y.baseVal.value,s=t.width.baseVal.value,n=t.height.baseVal.value;if(0!==s&&0!==n){var l=t.hasAttribute("rx")?t.rx.baseVal.value:null,o=t.hasAttribute("ry")?t.ry.baseVal.value:null;if(this.renderMode===g.CANVAS){if(this.ctx.save(),this.applyGlobalTransform(r),l||o){var h=4/3*(Math.sqrt(2)-1);this.ctx.moveTo(a+l,i),this.ctx.lineTo(a+s-l,i),this.ctx.bezierCurveTo(a+s-l+h*l,i,a+s,i+h*o,a+s,i+o),this.ctx.lineTo(a+s,i+n-o),this.ctx.bezierCurveTo(a+s,i+n-o+h*o,a+s-h*l,i+n,a+s-l,i+n),this.ctx.lineTo(a+l,i+n),this.ctx.bezierCurveTo(a+l-h*l,i+n,a,i+n-h*o,a,i+n-o),this.ctx.lineTo(a,i+o),this.ctx.bezierCurveTo(a,i+h*o,a+h*l,i,a+l,i),this.ctx.closePath()}else this.ctx.rect(a,i,s,n);this.ctx.restore()}else{var c=document.createElementNS("http://www.w3.org/2000/svg","rect");c.x.baseVal.value=a,c.y.baseVal.value=i,c.width.baseVal.value=s,c.height.baseVal.value=n,l&&(c.rx.baseVal.value=l),o&&(c.ry.baseVal.value=o),this.applyGlobalTransform(r,c),e.appendChild(c)}}}},{key:"drawRect",value:function(t,e){var r=t.x.baseVal.value,a=t.y.baseVal.value,i=t.width.baseVal.value,s=t.height.baseVal.value;if(0!==i&&0!==s){var n=t.hasAttribute("rx")?t.rx.baseVal.value:null,l=t.hasAttribute("ry")?t.ry.baseVal.value:null;if((n||l)&&(l=l<0?0:l,n=null===(n=n<0?0:n)?l:n,l=null===l?n:l,n=Math.min(n,i/2),l=Math.min(l,s/2)),!this.isIdentityTransform(e)&&!this.isTranslationTransform(e)||n||l){var o="";if(n||l){var h=4/3*(Math.sqrt(2)-1),c=this.applyMatrix(new p(r+n,a),e);o+="M ".concat(c);var u=this.applyMatrix(new p(r+i-n,a),e);o+="L ".concat(u);var v=this.applyMatrix(new p(r+i-n+h*n,a),e),f=this.applyMatrix(new p(r+i,a+h*l),e),d=this.applyMatrix(new p(r+i,a+l),e);o+="C ".concat(v," ").concat(f," ").concat(d);var m=this.applyMatrix(new p(r+i,a+s-l),e);o+="L ".concat(m);var y=this.applyMatrix(new p(r+i,a+s-l+h*l),e),b=this.applyMatrix(new p(r+i-h*n,a+s),e),x=this.applyMatrix(new p(r+i-n,a+s),e);o+="C ".concat(y," ").concat(b," ").concat(x);var w=this.applyMatrix(new p(r+n,a+s),e);o+="L ".concat(w);var A=this.applyMatrix(new p(r+n-h*n,a+s),e),C=this.applyMatrix(new p(r,a+s-h*l),e),k=this.applyMatrix(new p(r,a+s-l),e);o+="C ".concat(A," ").concat(C," ").concat(k);var S=this.applyMatrix(new p(r,a+l),e);o+="L ".concat(S);var M=this.applyMatrix(new p(r,a+h*l),e),V=this.applyMatrix(new p(r+h*n,a),e);o+="C ".concat(M," ").concat(V," ").concat(c),o+="z"}else{var E=this.applyMatrix(new p(r,a),e),N=this.applyMatrix(new p(r+i,a),e),T=this.applyMatrix(new p(r+i,a+s),e),F=this.applyMatrix(new p(r,a+s),e);o+="M ".concat(E),o+="L ".concat(N),o+="L ".concat(T),o+="L ".concat(F),o+="z"}this.renderMode===g.CANVAS&&(this.ctx.save(),this.ctx.lineCap="square");var P=this.rc.path(o,this.parseStyleConfig(t,e));this.renderMode===g.SVG&&P&&P.setAttribute("stroke-linecap","square"),this.postProcessElement(t,P),this.renderMode===g.CANVAS&&this.ctx.restore()}else{var O=this.applyMatrix(new p(r,a),e),$=this.applyMatrix(new p(r+i,a+s),e),I=$.x-O.x,G=$.y-O.y;this.postProcessElement(t,this.rc.rectangle(O.x,O.y,I,G,this.parseStyleConfig(t,e)))}}}},{key:"drawImage",value:function(t,e){var r,a,i=this,s=t.href.baseVal,n=t.x.baseVal.value,l=t.y.baseVal.value;if(t.getAttribute("width")&&t.getAttribute("height")&&(r=t.width.baseVal.value,a=t.height.baseVal.value),s.startsWith("data:")&&-1!==s.indexOf("image/svg+xml")){var o=/^data:([^,]*),(.*)/.exec(s);if(o.length>2){var h=o[1],c=o[2],u=-1!==h.indexOf("base64"),v=-1!==h.indexOf("utf8");u&&(c=btoa(c)),v||(c=decodeURIComponent(c));var f=(new DOMParser).parseFromString(c,"image/svg+xml").firstElementChild,p=this.svg.createSVGMatrix().translate(n,l);return p=e?e.matrix.multiply(p):p,void this.processRoot(f,this.svg.createSVGTransformFromMatrix(p),r,a)}}else{var d=this.svg.createSVGMatrix().translate(n,l);if(d=e?e.matrix.multiply(d):d,this.renderMode===g.CANVAS){var m=d.e,y=d.f,b=new Image;b.onload=function(){i.ctx.drawImage(b,m,y)},b.src=s}else{var x=t.cloneNode(),w=document.createElementNS("http://www.w3.org/2000/svg","g");this.applyGlobalTransform(e,w),w.appendChild(x),this.postProcessElement(t,w)}}}},{key:"drawText",value:function(t,e){if(this.renderMode===g.SVG){var r=document.createElementNS("http://www.w3.org/2000/svg","g");r.setAttribute("class","text-container"),this.applyGlobalTransform(e,r);var a=t.cloneNode(!0);return a.transform.baseVal.numberOfItems>0&&a.transform.baseVal.clear(),a.setAttribute("font-family",this.fontFamily),r.appendChild(a),void this.postProcessElement(t,r)}this.ctx.save();var i=new p(this.getLengthInPx(t.x),this.getLengthInPx(t.y));this.ctx.font=this.getCssFont(t,e);var s=this.parseStyleConfig(t,e);s.fill&&(this.ctx.fillStyle=s.fill);var n="none"!=this.getEffectiveAttribute(t,"stroke");n&&(this.ctx.strokeStyle=s.stroke,this.ctx.lineWidth=this.convertToPixelUnit(this.getEffectiveAttribute(t,"stroke-width")));var l=this.getEffectiveAttribute(t,"text-anchor",this.$useElementContext);l&&(this.ctx.textAlign="middle"!==l?l:"center"),this.applyGlobalTransform(e);var o=this.getLengthInPx(t.dx),h=this.getLengthInPx(t.dy);if(this.ctx.translate(o,h),0===t.childElementCount)this.ctx.fillText(this.getTextContent(t),i.x,i.y,t.getComputedTextLength()),n&&this.ctx.strokeText(this.getTextContent(t),i.x,i.y,t.getComputedTextLength());else for(var c=this.getNodeChildren(t),u=0;u<c.length;u++){var v=c[u];if("tspan"===v.tagName){i=new p(this.getLengthInPx(v.x),this.getLengthInPx(v.y));var f=this.getLengthInPx(v.dx),d=this.getLengthInPx(v.dy);this.ctx.translate(f,d),this.ctx.fillText(this.getTextContent(v),i.x,i.y),n&&this.ctx.strokeText(this.getTextContent(v),i.x,i.y)}}this.ctx.restore()}},{key:"getTextContent",value:function(t){var e=t.textContent;return e=this.shouldNormalizeWhitespace(t)?e.replace(/[\n\r\t ]+/g," ").trim():e.replace(/\r\n|[\n\r\t]/g," ")}},{key:"shouldNormalizeWhitespace",value:function(t){for(var e=null;null!==t&&t!==this.$svg&&null===e;)null===(e=t.getAttribute("xml:space"))&&(t=t.parentNode);return"preserve"!==e}},{key:"getLengthInPx",value:function(t){return t&&t.baseVal.numberOfItems>0?t.baseVal.getItem(0).value:0}},{key:"getCssFont",value:function(t,e){var r="",a=this.getEffectiveAttribute(t,"font-style",this.$useElementContext);a&&(r+=a);var i=this.getEffectiveAttribute(t,"font-weight",this.$useElementContext);i&&(r+=" ".concat(i));var s=this.getEffectiveAttribute(t,"font-size",this.$useElementContext);if(s&&(r+=" ".concat(s)),this.fontFamily)r+=" ".concat(this.fontFamily);else{var n=this.getEffectiveAttribute(t,"font-family",this.$useElementContext);n&&(r+=" ".concat(n))}return r=r.trim()}},{key:"getNodeChildren",value:function(t){if(void 0!==t.children)return t.children;for(var e,r=0,a=t.childNodes,i=[];e=a[r++];)1===e.nodeType&&i.push(e);return i}}]),t}(),m=function(){function t(){c(this,t)}return v(t,null,[{key:"roughPaperFilter",get:function(){var t=document.createElementNS("http://www.w3.org/2000/svg","filter");t.setAttribute("id","roughPaperFilter"),t.setAttribute("x","0"),t.setAttribute("y","0"),t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.setAttribute("filterUnits","objectBoundingBox");var e=document.createElementNS("http://www.w3.org/2000/svg","feTurbulence");e.setAttribute("type","fractalNoise"),e.setAttribute("baseFrequency","128"),e.setAttribute("numOctaves","1"),e.setAttribute("result","noise"),t.appendChild(e);var r=document.createElementNS("http://www.w3.org/2000/svg","feDiffuseLighting");r.setAttribute("in","noise"),r.setAttribute("lighting-color","white"),r.setAttribute("surfaceScale","1"),r.setAttribute("result","diffLight");var a=document.createElementNS("http://www.w3.org/2000/svg","feDistantLight");a.setAttribute("azimuth","45"),a.setAttribute("elevation","55"),r.appendChild(a),t.appendChild(r);var i=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");i.setAttribute("in","diffLight"),i.setAttribute("stdDeviation","0.75"),i.setAttribute("result","dlblur"),t.appendChild(i);var s=document.createElementNS("http://www.w3.org/2000/svg","feComposite");return s.setAttribute("operator","arithmetic"),s.setAttribute("k1","1.2"),s.setAttribute("k2","0"),s.setAttribute("k3","0"),s.setAttribute("k4","0"),s.setAttribute("in","dlblur"),s.setAttribute("in2","SourceGraphic"),s.setAttribute("result","out"),t.appendChild(s),t}},{key:"pencilTextureFilter",get:function(){var t=document.createElementNS("http://www.w3.org/2000/svg","filter");t.setAttribute("id","pencilTextureFilter"),t.setAttribute("x","0%"),t.setAttribute("y","0%"),t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.setAttribute("filterUnits","objectBoundingBox");var e=document.createElementNS("http://www.w3.org/2000/svg","feTurbulence");e.setAttribute("type","fractalNoise"),e.setAttribute("baseFrequency","2"),e.setAttribute("numOctaves","5"),e.setAttribute("stitchTiles","stitch"),e.setAttribute("result","f1"),t.appendChild(e);var r=document.createElementNS("http://www.w3.org/2000/svg","feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("values","0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5"),r.setAttribute("result","f2"),t.appendChild(r);var a=document.createElementNS("http://www.w3.org/2000/svg","feComposite");return a.setAttribute("operator","in"),a.setAttribute("in","SourceGraphic"),a.setAttribute("in2","f2"),a.setAttribute("result","f3"),t.appendChild(a),t}}]),t}()}}]);