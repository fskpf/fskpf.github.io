(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{155:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var r=a(49),i=a.n(r),n=a(50),s=a(112);function o(t,e){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s=!0,o=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return s=t.done,t},e:function(t){o=!0,n=t},f:function(){try{s||null==a.return||a.return()}finally{if(o)throw n}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,a){return e&&u(t.prototype,e),a&&u(t,a),t}var v=a(386),g=function(){function t(e,a){c(this,t),this.$x=e||0,this.$y=a||0}return f(t,[{key:"x",get:function(){return this.$x}},{key:"y",get:function(){return this.$y}}]),f(t,[{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y)}}]),t}(),p=function(){function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(c(this,t),!e)throw new Error("No target provided");if("object"===h(e)&&"CANVAS"===e.tagName){if("CANVAS"!==e.tagName)throw new Error("Target object is not an HMTLCanvaseElement");this.canvas=e}else if("string"==typeof e){var r=document.querySelector(e);if(!r)throw new Error("No element found with ".concat(e));this.canvas=document.createElement("canvas"),this.canvas.width=r.clientWidth,this.canvas.height=r.clientHeight,r.appendChild(this.canvas)}this.rc=s.a.canvas(this.canvas,a),this.$roughConfig=a,this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width,this.height=this.canvas.height,this.$fontFamily="Comic Sans MS, cursive",this.$randomize=!0}return f(t,[{key:"svg",set:function(t){this.$svg!==t&&(this.$svg=t,t.hasAttribute("width")?this.width=t.width.baseVal.value:t.hasAttribute("viewBox")?this.width=t.viewBox.baseVal.width:this.width=300,t.hasAttribute("height")?this.height=t.height.baseVal.value:t.hasAttribute("viewBox")?this.height=t.viewBox.baseVal.height:this.height=150,this.canvas.width=this.width,this.canvas.height=this.height,this.collectElementsWithID(),this.redraw())},get:function(){return this.$svg}},{key:"roughConfig",set:function(t){this.$roughConfig=t,this.rc=s.a.canvas(this.canvas,t),this.redraw()},get:function(){return this.$roughConfig}},{key:"fontFamily",set:function(t){this.$fontFamily!==t&&(this.$fontFamily=t,this.redraw())},get:function(){return this.$fontFamily}},{key:"randomize",set:function(t){this.$randomize=t,this.redraw()},get:function(){return this.$randomize}},{key:"backgroundColor",set:function(t){this.$backgroundColor=t},get:function(){return this.$backgroundColor}}],[{key:"CONTAINS_UNIT_REGEXP",value:function(){return/[a-z%]/}}]),f(t,[{key:"clearCanvas",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}},{key:"redraw",value:function(){this.svg&&(this.clearCanvas(),this.backgroundColor&&(this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height)),this.processRoot(this.svg,null,this.width,this.height))}},{key:"processRoot",value:function(t,e,a,r){var i=[];if("svg"===t.tagName||"symbol"===t.tagName||"marker"===t.tagName){var n=0,s=0;"symbol"===t.tagName?(n=parseFloat(t.getAttribute("x"))||0,s=parseFloat(t.getAttribute("y"))||0,a=a||parseFloat(t.getAttribute("width"))||void 0,r=r||parseFloat(t.getAttribute("height"))||void 0):"marker"===t.tagName?(n=-t.refX.baseVal.value,s=-t.refY.baseVal.value,a=a||parseFloat(t.getAttribute("markerWidth"))||void 0,r=r||parseFloat(t.getAttribute("markerHeight"))||void 0):(n=t.x.baseVal.value,s=t.y.baseVal.value);var o=this.svg.createSVGMatrix();if(void 0!==a&&void 0!==r&&t.getAttribute("viewBox")){var l=t.viewBox.baseVal,h=l.x,c=l.y,u=l.width,f=l.height;o="marker"===t.tagName?o.translate(a/u*-h,r/f*-c).scaleNonUniform(a/u,r/f).translate(n,s):o.translate(a/u*-h,r/f*-c).translate(n,s).scaleNonUniform(a/u,r/f)}else o=o.translate(n,s);var v=e?e.matrix.multiply(o):o;e=this.svg.createSVGTransformFromMatrix(v);for(var g=this.getNodeChildren(t),p=g.length-1;p>=0;p--){var y=g[p];if("symbol"!==y.tagName&&"marker"!==y.tagName){var m=e?this.getCombinedTransform(y,e):this.getSvgTransform(y);i.push({element:y,transform:m})}}}else i.push({element:t,transform:e});for(;i.length>0;){var x=i.pop(),d=x.element,b=x.transform;if(this.drawElement(d,b),"defs"!==d.tagName&&"symbol"!==d.tagName&&"marker"!==d.tagName&&"svg"!==d.tagName&&"clipPath"!==d.tagName)for(var w=this.getNodeChildren(d),k=w.length-1;k>=0;k--){var C=w[k],M=b?this.getCombinedTransform(C,b):this.getSvgTransform(C);i.push({element:C,transform:M})}}}},{key:"getCombinedTransform",value:function(t,e){var a=this.getSvgTransform(t);if(a){var r=a.matrix,i=e.matrix.multiply(r);return this.svg.createSVGTransformFromMatrix(i)}return e}},{key:"getSvgTransform",value:function(t){return t.transform&&t.transform.baseVal.numberOfItems>0?t.transform.baseVal.consolidate():null}},{key:"applyGlobalTransform",value:function(t){if(t&&t.matrix){var e=t.matrix;this.ctx.setTransform(e.a,e.b,e.c,e.d,e.e,e.f)}}},{key:"isIdentityTransform",value:function(t){if(!t)return!0;var e=t.matrix;return!e||1===e.a&&0===e.b&&0===e.c&&1===e.d&&0===e.e&&0===e.f}},{key:"collectElementsWithID",value:function(){this.idElements={};var t,e=o(Array.prototype.slice.apply(this.svg.querySelectorAll("*[id]")));try{for(e.s();!(t=e.n()).done;){var a=t.value,r=a.getAttribute("id");r&&(this.idElements[r]=a)}}catch(t){e.e(t)}finally{e.f()}}},{key:"applyMatrix",value:function(t,e){if(!e)return t;var a=e.matrix,r=a.a*t.x+a.c*t.y+a.e,i=a.b*t.x+a.d*t.y+a.f;return new g(r,i)}},{key:"getRandomNumber",value:function(t,e){return Math.random()*(e-t)+t}},{key:"getStopOffset",value:function(t){var e=t.getAttribute("offset");return e?e.indexOf("%")?parseFloat(e.substring(0,e.length-1)):100*parseFloat(e):0}},{key:"getStopColor",value:function(t){var e=t.getAttribute("stop-color");if(!e){var a=t.getAttribute("style"),r=/stop-color:\s?(.*);?/.exec(a);r.length>1&&(e=r[1])}return e?i()(e):i()("white")}},{key:"gradientToColor",value:function(t,e){var a=this,r=Array.prototype.slice.apply(t.querySelectorAll("stop"));if(0===r.length)return"transparent";if(1===r.length){var n=this.getStopColor(stop);return n.setAlpha(e),n.toString()}var s=r.reduce((function(t,e){var r=a.getStopColor(e),n=a.getStopOffset(e);return i.a.mix(t,r,n)}));return s.setAlpha(e),s.toString()}},{key:"getIdFromUrl",value:function(t){var e=/url\('#?(.*?)'\)/.exec(t)||/url\("#?(.*?)"\)/.exec(t)||/url\(#?(.*?)\)/.exec(t);return e&&e.length>1?e[1]:null}},{key:"parseFillUrl",value:function(t,e){var a=this.getIdFromUrl(t);if(!a)return"transparent";var r=this.idElements[a];if(r){if("string"==typeof r)return r;if("linearGradient"===r.tagName||"radialGradient"===r.tagName){var i=this.gradientToColor(r,e);return this.idElements[a]=i,i}}}},{key:"getOpacity",value:function(t,e){var a=getComputedStyle(t)[e]||t.getAttribute(e);return a?-1!==a.indexOf("%")?Math.min(1,Math.max(0,parseFloat(a.substring(0,a.length-1))/100)):Math.min(1,Math.max(0,parseFloat(a))):1}},{key:"getEffectiveElementOpacity",value:function(t,e,a){var r;if(r=a?t.getAttribute("opacity"):getComputedStyle(t).opacity||t.getAttribute("opacity")){e*=-1!==r.indexOf("%")?Math.min(1,Math.max(0,parseFloat(r.substring(0,r.length-1))/100)):Math.min(1,Math.max(0,parseFloat(r)))}var i=t.parentElement,n=a,s=n;return n&&n.referenced===t&&(i=n.root,s=n.parentContext),i&&i!==this.$svg?this.getEffectiveElementOpacity(i,e,s):e}},{key:"getEffectiveAttribute",value:function(t,e,a){var r;if(!(r=a?t.getAttribute(e):getComputedStyle(t)[e]||t.getAttribute(e))){var i=t.parentElement,n=a,s=n;return n&&n.referenced===t&&(i=n.root,s=n.parentContext),i&&i!==this.$svg?this.getEffectiveAttribute(i,e,s):null}return r}},{key:"convertToPixelUnit",value:function(e){return null!==e.match(t.CONTAINS_UNIT_REGEXP)?v.convert("px",e,this.$svg):parseFloat(e)}},{key:"parseStyleConfig",value:function(t,e){var a=this,r=Object.assign({},this.$roughConfig),n=this.getEffectiveElementOpacity(t,1,this.$useElementContext),s=this.getEffectiveAttribute(t,"fill",this.$useElementContext)||"black",o=n*this.getOpacity(t,"fill-opacity");if(s)if(-1!==s.indexOf("url"))r.fill=this.parseFillUrl(s,o);else if("none"===s)delete r.fill;else{var l=i()(s);l.setAlpha(o),r.fill=l.toString()}var h=this.getEffectiveAttribute(t,"stroke",this.$useElementContext),c=n*this.getOpacity(t,"stroke-opacity");if(h)if(-1!==h.indexOf("url"))r.stroke=this.parseFillUrl(s,c);else if("none"===h)r.stroke="none";else{var u=i()(h);u.setAlpha(c),r.stroke=u.toString()}else r.stroke="none";var f=this.getEffectiveAttribute(t,"stroke-width",this.$useElementContext);if(f){if(f=this.convertToPixelUnit(f),e&&"none"!==h){var v=e.matrix,g=v.a*v.d-v.c*v.b;f*=Math.sqrt(g)}r.strokeWidth=f}else r.strokeWidth=0;var p=this.getEffectiveAttribute(t,"stroke-dasharray",this.$useElementContext);p&&"none"!==p&&(p=p.split(/[\s,]+/).filter((function(t){return t.length>0})).map((function(t){return a.convertToPixelUnit(t)})),r.strokeLineDash=p);var y=this.getEffectiveAttribute(t,"stroke-dashoffset",this.$useElementContext);return y&&(y=this.convertToPixelUnit(y),r.strokeLineDashOffset=y),r.fill&&"none"===r.stroke&&(r.stroke=r.fill,r.strokeWidth=1),this.randomize&&(r.fillWeight=this.getRandomNumber(.5,3),r.hachureAngle=this.getRandomNumber(-30,-50),r.hachureGap=this.getRandomNumber(3,5),void 0===r.disableMultiStroke&&(r.disableMultiStroke=Math.random()>.3)),r}},{key:"applyClipPath",value:function(t,e){var a=this.getIdFromUrl(t);if(a){var r=this.idElements[a];if(r){this.ctx.beginPath();for(var i=[],n=this.getNodeChildren(r),s=n.length-1;s>=0;s--){var o=n[s],l=e?this.getCombinedTransform(o,e):this.getSvgTransform(o);i.push({element:o,transform:l})}for(;i.length>0;){var h=i.pop(),c=h.element,u=h.transform;if(this.applyElementClip(c,u),"defs"!==c.tagName&&"svg"!==c.tagName&&"clipPath"!==c.tagName&&"text"!==c.tagName)for(var f=this.getNodeChildren(c),v=f.length-1;v>=0;v--){var g=f[v],p=u?this.getCombinedTransform(g,u):this.getSvgTransform(g);i.push({element:g,transform:p})}}this.ctx.clip()}}}},{key:"applyElementClip",value:function(t,e){switch(t.tagName){case"rect":this.drawRect(t,e,!0);break;case"circle":this.drawCircle(t,e,!0);break;case"ellipse":this.drawEllipse(t,e,!0);break;case"polygon":this.drawPolygon(t,e,!0)}}},{key:"isHidden",value:function(t){var e=t.style;return!!e&&("none"===e.display||"hidden"===e.visibility)}},{key:"drawElement",value:function(t,e){if(!this.isHidden(t)){var a=t.getAttribute("clip-path");switch(a&&(this.ctx.save(),this.applyClipPath(a,e)),t.tagName){case"svg":case"symbol":this.drawRoot(t,e);break;case"rect":this.drawRect(t,e);break;case"path":this.drawPath(t,e);break;case"use":this.drawUse(t,e);break;case"line":this.drawLine(t,e);break;case"circle":this.drawCircle(t,e);break;case"ellipse":this.drawEllipse(t,e);break;case"polyline":this.drawPolyline(t,e);break;case"polygon":this.drawPolygon(t,e);break;case"text":this.drawText(t,e);break;case"image":this.drawImage(t,e)}a&&this.ctx.restore()}}},{key:"drawMarkers",value:function(t,e,a){if(0!==e.length){var r=this.getIdFromUrl(t.getAttribute("marker-start")),i=r?this.idElements[r]:null;if(i){var n=i.orientAngle.baseVal.value;if(e.length>1){var s=i.getAttribute("orient");if("auto"===s||"auto-start-reverse"===s){var o=this.getAngle(e[0],e[1]);n="auto"===s?o:o+180}}var l=e[0],h=this.svg.createSVGMatrix().translate(l.x,l.y).rotate(n),c=a?a.matrix.multiply(h):h,u=this.svg.createSVGTransformFromMatrix(c);this.processRoot(i,u)}var f=this.getIdFromUrl(t.getAttribute("marker-end")),v=f?this.idElements[f]:null;if(v){var g=i.orientAngle.baseVal.value;if(e.length>1){var p=i.getAttribute("orient");"auto"!==p&&"auto-start-reverse"!==p||(g=this.getAngle(e[e.length-2],e[e.length-1]))}var y=e[e.length-1],m=this.svg.createSVGMatrix().translate(y.x,y.y).rotate(g),x=a?a.matrix.multiply(m):m,d=this.svg.createSVGTransformFromMatrix(x);this.processRoot(v,d)}var b=this.getIdFromUrl(t.getAttribute("marker-mid")),w=b?this.idElements[b]:null;if(w&&e.length>2)for(var k=0;k<e.length;k++){var C=e[k];if(0!==k&&k!==e.length-1){var M=w.orientAngle.baseVal.value,A=w.getAttribute("orient");if("auto"===A||"auto-start-reverse"===A)M=(this.getAngle(e[k-1],C)+this.getAngle(C,e[k+1]))/2;var S=this.svg.createSVGMatrix().translate(C.x,C.y).rotate(M),E=a?a.matrix.multiply(S):S,T=this.svg.createSVGTransformFromMatrix(E);this.processRoot(w,T)}}}}},{key:"getAngle",value:function(t,e){var a=(e.y-t.y)/(e.x-t.x);return Math.atan(a)*(180/Math.PI)}},{key:"drawPolyline",value:function(t,e){var a=this,r=this.getPointsArray(t),i=r.map((function(t){var r=a.applyMatrix(t,e);return[r.x,r.y]})),n=this.parseStyleConfig(t,e);if(n.fill&&"none"!==n.fill){var s=Object.assign({},n);s.stroke="none",this.rc.polygon(i,s)}this.rc.linearPath(i,n),this.drawMarkers(t,r,e)}},{key:"getPointsArray",value:function(t){var e,a=t.getAttribute("points");if(!a)return[];e=a.indexOf(" ")>0?/\s+/g:/,/g;for(var r=a.split(e),i=[],n=0;n<r.length;n++){var s=r[n],o=s.split(",");if(2===o.length)i.push(new g(parseFloat(o[0]),parseFloat(o[1])));else{var l=n+1;l<r.length&&(i.push(new g(parseFloat(s),parseFloat(r[l]))),n=l)}}return i}},{key:"drawPolygon",value:function(t,e,a){var r=this,i=this.getPointsArray(t);if(a){if(i.length>0){this.ctx.save(),this.applyGlobalTransform(e);var n=i[0];this.ctx.moveTo(n.x,n.y);for(var s=1;s<i.length;s++){var o=i[s];this.ctx.lineTo(o.x,o.y)}this.ctx.closePath(),this.ctx.restore()}}else{var l=i.map((function(t){var a=r.applyMatrix(t,e);return[a.x,a.y]}));this.rc.polygon(l,this.parseStyleConfig(t,e)),this.drawMarkers(t,i,e)}}},{key:"drawEllipse",value:function(t,e,a){var r=t.cx.baseVal.value,i=t.cy.baseVal.value,n=t.rx.baseVal.value,s=t.ry.baseVal.value;if(0!==n&&0!==s){if(a)return this.ctx.save(),this.applyGlobalTransform(e),this.ctx.ellipse(r,i,n,s,0,0,2*Math.PI),void this.ctx.restore();if(this.isIdentityTransform(e)){var o=this.applyMatrix(new g(r,i),e),l=this.applyMatrix(new g(r+n,i+s),e),h=2*(l.x-o.x),c=2*(l.y-o.y);this.rc.ellipse(o.x,o.y,h,c,this.parseStyleConfig(t,e))}else{var u=4/3*(Math.sqrt(2)-1),f=this.applyMatrix(new g(r+n,i),e),v=this.applyMatrix(new g(r,i+s),e),p=this.applyMatrix(new g(r-n,i),e),y=this.applyMatrix(new g(r,i-s),e),m=this.applyMatrix(new g(r+n,i+u*s),e),x=this.applyMatrix(new g(r+u*n,i+s),e),d=this.applyMatrix(new g(r-n,i+u*s),e),b=this.applyMatrix(new g(r-u*n,i-s),e),w=this.applyMatrix(new g(r+n,i-u*s),e),k="M ".concat(f," C ").concat(m," ").concat(x," ").concat(v," S ").concat(d," ").concat(p," S ").concat(b," ").concat(y," S ").concat(w," ").concat(f,"z");this.rc.path(k,this.parseStyleConfig(t,e))}}}},{key:"drawCircle",value:function(t,e,a){var r=t.cx.baseVal.value,i=t.cy.baseVal.value,n=t.r.baseVal.value;if(0!==n){if(a)return this.ctx.save(),this.applyGlobalTransform(e),this.ctx.ellipse(r,i,n,n,0,0,2*Math.PI),void this.ctx.restore();var s=this.applyMatrix(new g(r,i),e);if(this.isIdentityTransform(e)){var o=2*(this.applyMatrix(new g(r+n,i+n),e).x-s.x);this.rc.circle(s.x,s.y,o,this.parseStyleConfig(t,e))}else{var l=4/3*(Math.sqrt(2)-1),h=this.applyMatrix(new g(r+n,i),e),c=this.applyMatrix(new g(r,i+n),e),u=this.applyMatrix(new g(r-n,i),e),f=this.applyMatrix(new g(r,i-n),e),v=this.applyMatrix(new g(r+n,i+l*n),e),p=this.applyMatrix(new g(r+l*n,i+n),e),y=this.applyMatrix(new g(r-n,i+l*n),e),m=this.applyMatrix(new g(r-l*n,i-n),e),x=this.applyMatrix(new g(r+n,i-l*n),e),d="M ".concat(h," C ").concat(v," ").concat(p," ").concat(c," S ").concat(y," ").concat(u," S ").concat(m," ").concat(f," S ").concat(x," ").concat(h,"z");this.rc.path(d,this.parseStyleConfig(t,e))}}}},{key:"drawLine",value:function(t,e){var a=new g(t.x1.baseVal.value,t.y1.baseVal.value),r=this.applyMatrix(a,e),i=new g(t.x2.baseVal.value,t.y2.baseVal.value),n=this.applyMatrix(i,e);r.x===n.x&&r.y===n.y||(this.rc.line(r.x,r.y,n.x,n.y,this.parseStyleConfig(t,e)),this.drawMarkers(t,[a,i],e))}},{key:"drawRoot",value:function(t,e){var a=parseFloat(t.getAttribute("width")),r=parseFloat(t.getAttribute("height"));(isNaN(a)||isNaN(r))&&(a=r=null),this.processRoot(t,e,a,r)}},{key:"drawUse",value:function(t,e){var a=t.href.baseVal;a.startsWith("#")&&(a=a.substring(1));var r=this.idElements[a];if(r){var i,n;t.getAttribute("width")&&t.getAttribute("height")&&(i=t.width.baseVal.value,n=t.height.baseVal.value);var s=t.x.baseVal.value,o=t.y.baseVal.value,l=this.svg.createSVGMatrix().translate(s,o);l=e?e.matrix.multiply(l):l;var h=this.svg.createSVGTransformFromMatrix(l);if(this.$useElementContext){var c={root:t,referenced:r,parentContext:Object.assign({},this.$useElementContext)};this.$useElementContext=c}else this.$useElementContext={root:t,referenced:r};this.processRoot(r,this.getCombinedTransform(r,h),i,n),this.$useElementContext.parentContext?this.$useElementContext=this.$useElementContext.parentContext:this.$useElementContext=null}}},{key:"drawPath",value:function(t,e){var a=t.getAttribute("d"),r=new n.a(a).toAbs().transform(n.b.NORMALIZE_HVZ()).transform(n.b.NORMALIZE_ST());e&&(r=r.transform(n.b.MATRIX(e.matrix.a,e.matrix.b,e.matrix.c,e.matrix.d,e.matrix.e,e.matrix.f)));var i=Object(n.c)(r.commands);-1===i.indexOf("undefined")?this.rc.path(i,this.parseStyleConfig(t,e)):console.error("broken path data")}},{key:"drawRect",value:function(t,e,a){var r=t.x.baseVal.value,i=t.y.baseVal.value,n=t.width.baseVal.value,s=t.height.baseVal.value;if(0!==n&&0!==s){var o=t.hasAttribute("rx")?t.rx.baseVal.value:null,l=t.hasAttribute("ry")?t.ry.baseVal.value:null;if((o||l)&&(l=l<0?0:l,o=null===(o=o<0?0:o)?l:o,l=null===l?o:l,o=Math.min(o,n/2),l=Math.min(l,s/2)),a){if(this.ctx.save(),this.applyGlobalTransform(e),o||l){var h=4/3*(Math.sqrt(2)-1);this.ctx.moveTo(r+o,i),this.ctx.lineTo(r+n-o,i),this.ctx.bezierCurveTo(r+n-o+h*o,i,r+n,i+h*l,r+n,i+l),this.ctx.lineTo(r+n,i+s-l),this.ctx.bezierCurveTo(r+n,i+s-l+h*l,r+n-h*o,i+s,r+n-o,i+s),this.ctx.lineTo(r+o,i+s),this.ctx.bezierCurveTo(r+o-h*o,i+s,r,i+s-h*l,r,i+s-l),this.ctx.lineTo(r,i+l),this.ctx.bezierCurveTo(r,i+h*l,r+h*o,i,r+o,i),this.ctx.closePath()}else this.ctx.rect(r,i,n,s);this.ctx.restore()}else if(!this.isIdentityTransform(e)||o||l){var c="";if(o||l){var u=4/3*(Math.sqrt(2)-1),f=this.applyMatrix(new g(r+o,i),e);c+="M ".concat(f);var v=this.applyMatrix(new g(r+n-o,i),e);c+="L ".concat(v);var p=this.applyMatrix(new g(r+n-o+u*o,i),e),y=this.applyMatrix(new g(r+n,i+u*l),e),m=this.applyMatrix(new g(r+n,i+l),e);c+="C ".concat(p," ").concat(y," ").concat(m);var x=this.applyMatrix(new g(r+n,i+s-l),e);c+="L ".concat(x);var d=this.applyMatrix(new g(r+n,i+s-l+u*l),e),b=this.applyMatrix(new g(r+n-u*o,i+s),e),w=this.applyMatrix(new g(r+n-o,i+s),e);c+="C ".concat(d," ").concat(b," ").concat(w);var k=this.applyMatrix(new g(r+o,i+s),e);c+="L ".concat(k);var C=this.applyMatrix(new g(r+o-u*o,i+s),e),M=this.applyMatrix(new g(r,i+s-u*l),e),A=this.applyMatrix(new g(r,i+s-l),e);c+="C ".concat(C," ").concat(M," ").concat(A);var S=this.applyMatrix(new g(r,i+l),e);c+="L ".concat(S);var E=this.applyMatrix(new g(r,i+u*l),e),T=this.applyMatrix(new g(r+u*o,i),e);c+="C ".concat(E," ").concat(T," ").concat(f),c+="z"}else{var V=this.applyMatrix(new g(r,i),e),N=this.applyMatrix(new g(r+n,i),e),F=this.applyMatrix(new g(r+n,i+s),e),$=this.applyMatrix(new g(r,i+s),e);c+="M ".concat(V),c+="L ".concat(N),c+="L ".concat(F),c+="L ".concat($),c+="z"}this.ctx.save(),this.ctx.lineCap="square",this.rc.path(c,this.parseStyleConfig(t,e)),this.ctx.restore()}else{var I=this.applyMatrix(new g(r,i),e),P=this.applyMatrix(new g(r+n,i+s),e),O=P.x-I.x,G=P.y-I.y;this.rc.rectangle(I.x,I.y,O,G,this.parseStyleConfig(t,e))}}}},{key:"drawImage",value:function(t,e){var a,r,i=this,n=t.href.baseVal,s=t.x.baseVal.value,o=t.y.baseVal.value;if(t.getAttribute("width")&&t.getAttribute("height")&&(a=t.width.baseVal.value,r=t.height.baseVal.value),n.startsWith("data:")&&-1!==n.indexOf("image/svg+xml")){var l=/^data:([^,]*),(.*)/.exec(n);if(l.length>2){var h=l[1],c=l[2],u=-1!==h.indexOf("base64"),f=-1!==h.indexOf("utf8");u&&(c=btoa(c)),f||(c=decodeURIComponent(c));var v=(new DOMParser).parseFromString(c,"image/svg+xml").firstElementChild,g=this.svg.createSVGMatrix().translate(s,o);return g=e?e.matrix.multiply(g):g,void this.processRoot(v,this.svg.createSVGTransformFromMatrix(g),a,r)}}else{var p=new Image,y=this.svg.createSVGMatrix().translate(s,o),m=(y=e?e.matrix.multiply(y):y).e,x=y.f;p.onload=function(){i.ctx.drawImage(p,m,x)},p.src=n}}},{key:"drawText",value:function(t,e){this.ctx.save();var a=new g(this.getLengthInPx(t.x),this.getLengthInPx(t.y));this.ctx.font=this.getCssFont(t,e);var r=this.parseStyleConfig(t,e);r.fill&&(this.ctx.fillStyle=r.fill);var i="none"!=this.getEffectiveAttribute(t,"stroke");i&&(this.ctx.strokeStyle=r.stroke,this.ctx.lineWidth=this.convertToPixelUnit(this.getEffectiveAttribute(t,"stroke-width")));var n=this.getEffectiveAttribute(t,"text-anchor",this.$useElementContext);n&&(this.ctx.textAlign="middle"!==n?n:"center"),this.applyGlobalTransform(e);var s=this.getLengthInPx(t.dx),o=this.getLengthInPx(t.dy);if(this.ctx.translate(s,o),0===t.childElementCount)this.ctx.fillText(this.getTextContent(t),a.x,a.y,t.getComputedTextLength()),i&&this.ctx.strokeText(this.getTextContent(t),a.x,a.y,t.getComputedTextLength());else for(var l=this.getNodeChildren(t),h=0;h<l.length;h++){var c=l[h];if("tspan"===c.tagName){a=new g(this.getLengthInPx(c.x),this.getLengthInPx(c.y));var u=this.getLengthInPx(c.dx),f=this.getLengthInPx(c.dy);this.ctx.translate(u,f),this.ctx.fillText(this.getTextContent(c),a.x,a.y),i&&this.ctx.strokeText(this.getTextContent(c),a.x,a.y)}}this.ctx.restore()}},{key:"getTextContent",value:function(t){var e=t.textContent;return e=this.shouldNormalizeWhitespace(t)?e.replace(/[\n\r\t ]+/g," ").trim():e.replace(/\r\n|[\n\r\t]/g," ")}},{key:"shouldNormalizeWhitespace",value:function(t){for(var e=null;null!==t&&t!==this.$svg&&null===e;)null===(e=t.getAttribute("xml:space"))&&(t=t.parentNode);return"preserve"!==e}},{key:"getLengthInPx",value:function(t){return t&&t.baseVal.numberOfItems>0?t.baseVal.getItem(0).value:0}},{key:"getCssFont",value:function(t,e){var a="",r=this.getEffectiveAttribute(t,"font-style",this.$useElementContext);r&&(a+=r);var i=this.getEffectiveAttribute(t,"font-weight",this.$useElementContext);i&&(a+=" ".concat(i));var n=this.getEffectiveAttribute(t,"font-size",this.$useElementContext);if(n&&(a+=" ".concat(n)),this.fontFamily)a+=" ".concat(this.fontFamily);else{var s=this.getEffectiveAttribute(t,"font-family",this.$useElementContext);s&&(a+=" ".concat(s))}return a=a.trim()}},{key:"getNodeChildren",value:function(t){if(void 0!==t.children)return t.children;for(var e,a=0,r=t.childNodes,i=[];e=r[a++];)1===e.nodeType&&i.push(e);return i}}]),t}()}}]);