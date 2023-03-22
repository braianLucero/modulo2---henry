(()=>{"use strict";var t={d:(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function s(){this.subscribers={}}t.r(e),t.d(e,{Decoder:()=>bt,Encoder:()=>mt,PacketType:()=>gt,protocol:()=>yt}),s.prototype.on=function(t,e){this.subscribers[t]||(this.subscribers[t]=[]),this.subscribers[t].push(e)},s.prototype.emit=function(t){if(this.subscribers[t]){var e=[].slice.call(arguments,1);this.subscribers[t].forEach((function(t){t.apply(null,e)}))}};var i=new s;const n=i;var r;[].slice.call(document.querySelectorAll(".marker")).forEach((function(t){t.style.backgroundColor=t.id,t.addEventListener("click",(function(){r=this.id,document.querySelector(".selected").classList.remove("selected"),this.classList.add("selected")}))}));var o=document.getElementById("paint"),a=o.getContext("2d");function h(){a.setTransform(1,0,0,1,0,0);var t=window.devicePixelRatio||1,e=o.clientWidth*t,s=o.clientHeight*t;if(e!==o.width||s!==o.height){var i=a.getImageData(0,0,o.width,o.height);o.width=e,o.height=s,a.putImageData(i,0,0)}a.scale(t,t),a.lineWidth=5,a.lineJoin="round",a.lineCap="round"}h(),window.addEventListener("resize",h);var c={x:0,y:0},u={x:0,y:0},p=!1;o.addEventListener("mousedown",(function(t){p=!0,c.x=t.pageX-this.offsetLeft,c.y=t.pageY-this.offsetTop})),o.addEventListener("mouseup",(function(){p=!1})),o.addEventListener("mousemove",(function(t){p&&(u.x=c.x,u.y=c.y,c.x=t.pageX-this.offsetLeft,c.y=t.pageY-this.offsetTop,i.draw(u,c,r,!0))})),i.draw=function(t,e,s,n){a.beginPath(),a.strokeStyle=s||"black",a.moveTo(t.x,t.y),a.lineTo(e.x,e.y),a.closePath(),a.stroke(),n&&i.emit("draw",t,e,s)};const l=Object.create(null);l.open="0",l.close="1",l.ping="2",l.pong="3",l.message="4",l.upgrade="5",l.noop="6";const d=Object.create(null);Object.keys(l).forEach((t=>{d[l[t]]=t}));const f={type:"error",data:"parser error"},y="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),g="function"==typeof ArrayBuffer,m=(t,e)=>{const s=new FileReader;return s.onload=function(){const t=s.result.split(",")[1];e("b"+(t||""))},s.readAsDataURL(t)},b=({type:t,data:e},s,i)=>{return y&&e instanceof Blob?s?i(e):m(e,i):g&&(e instanceof ArrayBuffer||(n=e,"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer))?s?i(e):m(new Blob([e]),i):i(l[t]+(e||""));var n},v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",w="undefined"==typeof Uint8Array?[]:new Uint8Array(256);for(let t=0;t<v.length;t++)w[v.charCodeAt(t)]=t;const k="function"==typeof ArrayBuffer,_=(t,e)=>{if(k){const s=(t=>{let e,s,i,n,r,o=.75*t.length,a=t.length,h=0;"="===t[t.length-1]&&(o--,"="===t[t.length-2]&&o--);const c=new ArrayBuffer(o),u=new Uint8Array(c);for(e=0;e<a;e+=4)s=w[t.charCodeAt(e)],i=w[t.charCodeAt(e+1)],n=w[t.charCodeAt(e+2)],r=w[t.charCodeAt(e+3)],u[h++]=s<<2|i>>4,u[h++]=(15&i)<<4|n>>2,u[h++]=(3&n)<<6|63&r;return c})(t);return E(s,e)}return{base64:!0,data:t}},E=(t,e)=>"blob"===e&&t instanceof ArrayBuffer?new Blob([t]):t,A=(t,e)=>{if("string"!=typeof t)return{type:"message",data:E(t,e)};const s=t.charAt(0);return"b"===s?{type:"message",data:_(t.substring(1),e)}:d[s]?t.length>1?{type:d[s],data:t.substring(1)}:{type:d[s]}:f},O=String.fromCharCode(30);function T(t){if(t)return function(t){for(var e in T.prototype)t[e]=T.prototype[e];return t}(t)}T.prototype.on=T.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},T.prototype.once=function(t,e){function s(){this.off(t,s),e.apply(this,arguments)}return s.fn=e,this.on(t,s),this},T.prototype.off=T.prototype.removeListener=T.prototype.removeAllListeners=T.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var s,i=this._callbacks["$"+t];if(!i)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n=0;n<i.length;n++)if((s=i[n])===e||s.fn===e){i.splice(n,1);break}return 0===i.length&&delete this._callbacks["$"+t],this},T.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),s=this._callbacks["$"+t],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(s){i=0;for(var n=(s=s.slice(0)).length;i<n;++i)s[i].apply(this,e)}return this},T.prototype.emitReserved=T.prototype.emit,T.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},T.prototype.hasListeners=function(t){return!!this.listeners(t).length};const R="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")();function C(t,...e){return e.reduce(((e,s)=>(t.hasOwnProperty(s)&&(e[s]=t[s]),e)),{})}const x=R.setTimeout,B=R.clearTimeout;function L(t,e){e.useNativeTimers?(t.setTimeoutFn=x.bind(R),t.clearTimeoutFn=B.bind(R)):(t.setTimeoutFn=R.setTimeout.bind(R),t.clearTimeoutFn=R.clearTimeout.bind(R))}class S extends Error{constructor(t,e,s){super(t),this.description=e,this.context=s,this.type="TransportError"}}class N extends T{constructor(t){super(),this.writable=!1,L(this,t),this.opts=t,this.query=t.query,this.socket=t.socket}onError(t,e,s){return super.emitReserved("error",new S(t,e,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(t){"open"===this.readyState&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=A(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}}const P="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),q=64,j={};let I,D=0,F=0;function M(t){let e="";do{e=P[t%q]+e,t=Math.floor(t/q)}while(t>0);return e}function V(){const t=M(+new Date);return t!==I?(D=0,I=t):t+"."+M(D++)}for(;F<q;F++)j[P[F]]=F;function U(t){let e="";for(let s in t)t.hasOwnProperty(s)&&(e.length&&(e+="&"),e+=encodeURIComponent(s)+"="+encodeURIComponent(t[s]));return e}let H=!1;try{H="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(t){}const Y=H;function K(t){const e=t.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!e||Y))return new XMLHttpRequest}catch(t){}if(!e)try{return new(R[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}function z(){}const W=null!=new K({xdomain:!1}).responseType;class J extends T{constructor(t,e){super(),L(this,e),this.opts=e,this.method=e.method||"GET",this.uri=t,this.async=!1!==e.async,this.data=void 0!==e.data?e.data:null,this.create()}create(){const t=C(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd,t.xscheme=!!this.opts.xs;const e=this.xhr=new K(t);try{e.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(let t in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(t)&&e.setRequestHeader(t,this.opts.extraHeaders[t])}}catch(t){}if("POST"===this.method)try{e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{e.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in e&&(e.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(e.timeout=this.opts.requestTimeout),e.onreadystatechange=()=>{4===e.readyState&&(200===e.status||1223===e.status?this.onLoad():this.setTimeoutFn((()=>{this.onError("number"==typeof e.status?e.status:0)}),0))},e.send(this.data)}catch(t){return void this.setTimeoutFn((()=>{this.onError(t)}),0)}"undefined"!=typeof document&&(this.index=J.requestsCount++,J.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if(void 0!==this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=z,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete J.requests[this.index],this.xhr=null}}onLoad(){const t=this.xhr.responseText;null!==t&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}function X(){for(let t in J.requests)J.requests.hasOwnProperty(t)&&J.requests[t].abort()}J.requestsCount=0,J.requests={},"undefined"!=typeof document&&("function"==typeof attachEvent?attachEvent("onunload",X):"function"==typeof addEventListener&&addEventListener("onpagehide"in R?"pagehide":"unload",X,!1));const $="function"==typeof Promise&&"function"==typeof Promise.resolve?t=>Promise.resolve().then(t):(t,e)=>e(t,0),Q=R.WebSocket||R.MozWebSocket,G="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),Z={websocket:class extends N{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const t=this.uri(),e=this.opts.protocols,s=G?{}:C(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=G?new Q(t,e,s):e?new Q(t,e):new Q(t)}catch(t){return this.emitReserved("error",t)}this.ws.binaryType=this.socket.binaryType||"arraybuffer",this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const s=t[e],i=e===t.length-1;b(s,this.supportsBinary,(t=>{try{this.ws.send(t)}catch(t){}i&&$((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}uri(){let t=this.query||{};const e=this.opts.secure?"wss":"ws";let s="";this.opts.port&&("wss"===e&&443!==Number(this.opts.port)||"ws"===e&&80!==Number(this.opts.port))&&(s=":"+this.opts.port),this.opts.timestampRequests&&(t[this.opts.timestampParam]=V()),this.supportsBinary||(t.b64=1);const i=U(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(i.length?"?"+i:"")}check(){return!!Q}},polling:class extends N{constructor(t){if(super(t),this.polling=!1,"undefined"!=typeof location){const e="https:"===location.protocol;let s=location.port;s||(s=e?"443":"80"),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||s!==t.port,this.xs=t.secure!==e}const e=t&&t.forceBase64;this.supportsBinary=W&&!e}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let t=0;this.polling&&(t++,this.once("pollComplete",(function(){--t||e()}))),this.writable||(t++,this.once("drain",(function(){--t||e()})))}else e()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){((t,e)=>{const s=t.split(O),i=[];for(let t=0;t<s.length;t++){const n=A(s[t],e);if(i.push(n),"error"===n.type)break}return i})(t,this.socket.binaryType).forEach((t=>{if("opening"===this.readyState&&"open"===t.type&&this.onOpen(),"close"===t.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(t)})),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}doClose(){const t=()=>{this.write([{type:"close"}])};"open"===this.readyState?t():this.once("open",t)}write(t){this.writable=!1,((t,e)=>{const s=t.length,i=new Array(s);let n=0;t.forEach(((t,r)=>{b(t,!1,(t=>{i[r]=t,++n===s&&e(i.join(O))}))}))})(t,(t=>{this.doWrite(t,(()=>{this.writable=!0,this.emitReserved("drain")}))}))}uri(){let t=this.query||{};const e=this.opts.secure?"https":"http";let s="";!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=V()),this.supportsBinary||t.sid||(t.b64=1),this.opts.port&&("https"===e&&443!==Number(this.opts.port)||"http"===e&&80!==Number(this.opts.port))&&(s=":"+this.opts.port);const i=U(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(i.length?"?"+i:"")}request(t={}){return Object.assign(t,{xd:this.xd,xs:this.xs},this.opts),new J(this.uri(),t)}doWrite(t,e){const s=this.request({method:"POST",data:t});s.on("success",e),s.on("error",((t,e)=>{this.onError("xhr post error",t,e)}))}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",((t,e)=>{this.onError("xhr poll error",t,e)})),this.pollXhr=t}}},tt=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,et=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function st(t){const e=t,s=t.indexOf("["),i=t.indexOf("]");-1!=s&&-1!=i&&(t=t.substring(0,s)+t.substring(s,i).replace(/:/g,";")+t.substring(i,t.length));let n=tt.exec(t||""),r={},o=14;for(;o--;)r[et[o]]=n[o]||"";return-1!=s&&-1!=i&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=function(t,e){const s=e.replace(/\/{2,9}/g,"/").split("/");return"/"!=e.slice(0,1)&&0!==e.length||s.splice(0,1),"/"==e.slice(-1)&&s.splice(s.length-1,1),s}(0,r.path),r.queryKey=function(t,e){const s={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(t,e,i){e&&(s[e]=i)})),s}(0,r.query),r}class it extends T{constructor(t,e={}){super(),this.writeBuffer=[],t&&"object"==typeof t&&(e=t,t=null),t?(t=st(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=st(e.host).host),L(this,e),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=e.transports||["polling","websocket"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"==typeof this.opts.query&&(this.opts.query=function(t){let e={},s=t.split("&");for(let t=0,i=s.length;t<i;t++){let i=s[t].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,"function"==typeof addEventListener&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=4,e.transport=t,this.id&&(e.sid=this.id);const s=Object.assign({},this.opts.transportOptions[t],this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new Z[t](s)}open(){let t;if(this.opts.rememberUpgrade&&it.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn((()=>{this.emitReserved("error","No transports available")}),0);t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",(t=>this.onClose("transport close",t)))}probe(t){let e=this.createTransport(t),s=!1;it.priorWebsocketSuccess=!1;const i=()=>{s||(e.send([{type:"ping",data:"probe"}]),e.once("packet",(t=>{if(!s)if("pong"===t.type&&"probe"===t.data){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;it.priorWebsocketSuccess="websocket"===e.name,this.transport.pause((()=>{s||"closed"!==this.readyState&&(c(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())}))}else{const t=new Error("probe error");t.transport=e.name,this.emitReserved("upgradeError",t)}})))};function n(){s||(s=!0,c(),e.close(),e=null)}const r=t=>{const s=new Error("probe error: "+t);s.transport=e.name,n(),this.emitReserved("upgradeError",s)};function o(){r("transport closed")}function a(){r("socket closed")}function h(t){e&&t.name!==e.name&&n()}const c=()=>{e.removeListener("open",i),e.removeListener("error",r),e.removeListener("close",o),this.off("close",a),this.off("upgrading",h)};e.once("open",i),e.once("error",r),e.once("close",o),this.once("close",a),this.once("upgrading",h),e.open()}onOpen(){if(this.readyState="open",it.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade){let t=0;const e=this.upgrades.length;for(;t<e;t++)this.probe(this.upgrades[t])}}onPacket(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data)}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn((()=>{this.onClose("ping timeout")}),this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let s=0;s<this.writeBuffer.length;s++){const i=this.writeBuffer[s].data;if(i&&(t+="string"==typeof(e=i)?function(t){let e=0,s=0;for(let i=0,n=t.length;i<n;i++)e=t.charCodeAt(i),e<128?s+=1:e<2048?s+=2:e<55296||e>=57344?s+=3:(i++,s+=4);return s}(e):Math.ceil(1.33*(e.byteLength||e.size))),s>0&&t>this.maxPayload)return this.writeBuffer.slice(0,s);t+=2}var e;return this.writeBuffer}write(t,e,s){return this.sendPacket("message",t,e,s),this}send(t,e,s){return this.sendPacket("message",t,e,s),this}sendPacket(t,e,s,i){if("function"==typeof e&&(i=e,e=void 0),"function"==typeof s&&(i=s,s=null),"closing"===this.readyState||"closed"===this.readyState)return;(s=s||{}).compress=!1!==s.compress;const n={type:t,data:e,options:s};this.emitReserved("packetCreate",n),this.writeBuffer.push(n),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},s=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(()=>{this.upgrading?s():t()})):this.upgrading?s():t()),this}onError(t){it.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const e=[];let s=0;const i=t.length;for(;s<i;s++)~this.transports.indexOf(t[s])&&e.push(t[s]);return e}}it.protocol=4,it.protocol;const nt="function"==typeof ArrayBuffer,rt=t=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,ot=Object.prototype.toString,at="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===ot.call(Blob),ht="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===ot.call(File);function ct(t){return nt&&(t instanceof ArrayBuffer||rt(t))||at&&t instanceof Blob||ht&&t instanceof File}function ut(t,e){if(!t||"object"!=typeof t)return!1;if(Array.isArray(t)){for(let e=0,s=t.length;e<s;e++)if(ut(t[e]))return!0;return!1}if(ct(t))return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return ut(t.toJSON(),!0);for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&ut(t[e]))return!0;return!1}function pt(t){const e=[],s=t.data,i=t;return i.data=lt(s,e),i.attachments=e.length,{packet:i,buffers:e}}function lt(t,e){if(!t)return t;if(ct(t)){const s={_placeholder:!0,num:e.length};return e.push(t),s}if(Array.isArray(t)){const s=new Array(t.length);for(let i=0;i<t.length;i++)s[i]=lt(t[i],e);return s}if("object"==typeof t&&!(t instanceof Date)){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=lt(t[i],e));return s}return t}function dt(t,e){return t.data=ft(t.data,e),delete t.attachments,t}function ft(t,e){if(!t)return t;if(t&&!0===t._placeholder){if("number"==typeof t.num&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}if(Array.isArray(t))for(let s=0;s<t.length;s++)t[s]=ft(t[s],e);else if("object"==typeof t)for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(t[s]=ft(t[s],e));return t}const yt=5;var gt;!function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"}(gt||(gt={}));class mt{constructor(t){this.replacer=t}encode(t){return t.type!==gt.EVENT&&t.type!==gt.ACK||!ut(t)?[this.encodeAsString(t)]:this.encodeAsBinary({type:t.type===gt.EVENT?gt.BINARY_EVENT:gt.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id})}encodeAsString(t){let e=""+t.type;return t.type!==gt.BINARY_EVENT&&t.type!==gt.BINARY_ACK||(e+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(e+=t.nsp+","),null!=t.id&&(e+=t.id),null!=t.data&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=pt(t),s=this.encodeAsString(e.packet),i=e.buffers;return i.unshift(s),i}}class bt extends T{constructor(t){super(),this.reviver=t}add(t){let e;if("string"==typeof t){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const s=e.type===gt.BINARY_EVENT;s||e.type===gt.BINARY_ACK?(e.type=s?gt.EVENT:gt.ACK,this.reconstructor=new vt(e),0===e.attachments&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else{if(!ct(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e))}}decodeString(t){let e=0;const s={type:Number(t.charAt(0))};if(void 0===gt[s.type])throw new Error("unknown packet type "+s.type);if(s.type===gt.BINARY_EVENT||s.type===gt.BINARY_ACK){const i=e+1;for(;"-"!==t.charAt(++e)&&e!=t.length;);const n=t.substring(i,e);if(n!=Number(n)||"-"!==t.charAt(e))throw new Error("Illegal attachments");s.attachments=Number(n)}if("/"===t.charAt(e+1)){const i=e+1;for(;++e&&","!==t.charAt(e)&&e!==t.length;);s.nsp=t.substring(i,e)}else s.nsp="/";const i=t.charAt(e+1);if(""!==i&&Number(i)==i){const i=e+1;for(;++e;){const s=t.charAt(e);if(null==s||Number(s)!=s){--e;break}if(e===t.length)break}s.id=Number(t.substring(i,e+1))}if(t.charAt(++e)){const i=this.tryParse(t.substr(e));if(!bt.isPayloadValid(s.type,i))throw new Error("invalid payload");s.data=i}return s}tryParse(t){try{return JSON.parse(t,this.reviver)}catch(t){return!1}}static isPayloadValid(t,e){switch(t){case gt.CONNECT:return"object"==typeof e;case gt.DISCONNECT:return void 0===e;case gt.CONNECT_ERROR:return"string"==typeof e||"object"==typeof e;case gt.EVENT:case gt.BINARY_EVENT:return Array.isArray(e)&&e.length>0;case gt.ACK:case gt.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class vt{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const t=dt(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function wt(t,e,s){return t.on(e,s),function(){t.off(e,s)}}const kt=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class _t extends T{constructor(t,e,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[wt(t,"open",this.onopen.bind(this)),wt(t,"packet",this.onpacket.bind(this)),wt(t,"error",this.onerror.bind(this)),wt(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){if(kt.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const s={type:gt.EVENT,data:e,options:{}};if(s.options.compress=!1!==this.flags.compress,"function"==typeof e[e.length-1]){const t=this.ids++,i=e.pop();this._registerAckCallback(t,i),s.id=t}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(t,e){var s;const i=null!==(s=this.flags.timeout)&&void 0!==s?s:this._opts.ackTimeout;if(void 0===i)return void(this.acks[t]=e);const n=this.io.setTimeoutFn((()=>{delete this.acks[t];for(let e=0;e<this.sendBuffer.length;e++)this.sendBuffer[e].id===t&&this.sendBuffer.splice(e,1);e.call(this,new Error("operation has timed out"))}),i);this.acks[t]=(...t)=>{this.io.clearTimeoutFn(n),e.apply(this,[null,...t])}}emitWithAck(t,...e){const s=void 0!==this.flags.timeout||void 0!==this._opts.ackTimeout;return new Promise(((i,n)=>{e.push(((t,e)=>s?t?n(t):i(e):i(t))),this.emit(t,...e)}))}_addToQueue(t){let e;"function"==typeof t[t.length-1]&&(e=t.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push(((t,...i)=>{if(s===this._queue[0])return null!==t?s.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(t)):(this._queue.shift(),e&&e(null,...i)),s.pending=!1,this._drainQueue()})),this._queue.push(s),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||0===this._queue.length)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){"function"==typeof this.auth?this.auth((t=>{this._sendConnectPacket(t)})):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:gt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e)}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case gt.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case gt.EVENT:case gt.BINARY_EVENT:this.onevent(t);break;case gt.ACK:case gt.BINARY_ACK:this.onack(t);break;case gt.DISCONNECT:this.ondisconnect();break;case gt.CONNECT_ERROR:this.destroy();const e=new Error(t.data.message);e.data=t.data.data,this.emitReserved("connect_error",e)}}onevent(t){const e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const s of e)s.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&"string"==typeof t[t.length-1]&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let s=!1;return function(...i){s||(s=!0,e.packet({type:gt.ACK,id:t,data:i}))}}onack(t){const e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach((t=>this.emitEvent(t))),this.receiveBuffer=[],this.sendBuffer.forEach((t=>{this.notifyOutgoingListeners(t),this.packet(t)})),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach((t=>t())),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:gt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let s=0;s<e.length;s++)if(t===e[s])return e.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let s=0;s<e.length;s++)if(t===e[s])return e.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const s of e)s.apply(this,t.data)}}}function Et(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Et.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),s=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-s:t+s}return 0|Math.min(t,this.max)},Et.prototype.reset=function(){this.attempts=0},Et.prototype.setMin=function(t){this.ms=t},Et.prototype.setMax=function(t){this.max=t},Et.prototype.setJitter=function(t){this.jitter=t};class At extends T{constructor(t,s){var i;super(),this.nsps={},this.subs=[],t&&"object"==typeof t&&(s=t,t=void 0),(s=s||{}).path=s.path||"/socket.io",this.opts=s,L(this,s),this.reconnection(!1!==s.reconnection),this.reconnectionAttempts(s.reconnectionAttempts||1/0),this.reconnectionDelay(s.reconnectionDelay||1e3),this.reconnectionDelayMax(s.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(i=s.randomizationFactor)&&void 0!==i?i:.5),this.backoff=new Et({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==s.timeout?2e4:s.timeout),this._readyState="closed",this.uri=t;const n=s.parser||e;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this._autoConnect=!1!==s.autoConnect,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}reconnectionAttempts(t){return void 0===t?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return void 0===t?this._reconnectionDelay:(this._reconnectionDelay=t,null===(e=this.backoff)||void 0===e||e.setMin(t),this)}randomizationFactor(t){var e;return void 0===t?this._randomizationFactor:(this._randomizationFactor=t,null===(e=this.backoff)||void 0===e||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return void 0===t?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,null===(e=this.backoff)||void 0===e||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new it(this.uri,this.opts);const e=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const i=wt(e,"open",(function(){s.onopen(),t&&t()})),n=wt(e,"error",(e=>{s.cleanup(),s._readyState="closed",this.emitReserved("error",e),t?t(e):s.maybeReconnectOnOpen()}));if(!1!==this._timeout){const t=this._timeout;0===t&&i();const s=this.setTimeoutFn((()=>{i(),e.close(),e.emit("error",new Error("timeout"))}),t);this.opts.autoUnref&&s.unref(),this.subs.push((function(){clearTimeout(s)}))}return this.subs.push(i),this.subs.push(n),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(wt(t,"ping",this.onping.bind(this)),wt(t,"data",this.ondata.bind(this)),wt(t,"error",this.onerror.bind(this)),wt(t,"close",this.onclose.bind(this)),wt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(t){this.onclose("parse error",t)}}ondecoded(t){$((()=>{this.emitReserved("packet",t)}),this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let s=this.nsps[t];return s?this._autoConnect&&!s.active&&s.connect():(s=new _t(this,t,e),this.nsps[t]=s),s}_destroy(t){const e=Object.keys(this.nsps);for(const t of e)if(this.nsps[t].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let s=0;s<e.length;s++)this.engine.write(e[s],t.options)}cleanup(){this.subs.forEach((t=>t())),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(t,e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn((()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),t.skipReconnect||t.open((e=>{e?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",e)):t.onreconnect()})))}),e);this.opts.autoUnref&&s.unref(),this.subs.push((function(){clearTimeout(s)}))}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Ot={};function Tt(t,e){"object"==typeof t&&(e=t,t=void 0);const s=function(t,e="",s){let i=t;s=s||"undefined"!=typeof location&&location,null==t&&(t=s.protocol+"//"+s.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?s.protocol+t:s.host+t),/^(https?|wss?):\/\//.test(t)||(t=void 0!==s?s.protocol+"//"+t:"https://"+t),i=st(t)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const n=-1!==i.host.indexOf(":")?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+n+":"+i.port+e,i.href=i.protocol+"://"+n+(s&&s.port===i.port?"":":"+i.port),i}(t,(e=e||{}).path||"/socket.io"),i=s.source,n=s.id,r=s.path,o=Ot[n]&&r in Ot[n].nsps;let a;return e.forceNew||e["force new connection"]||!1===e.multiplex||o?a=new At(i,e):(Ot[n]||(Ot[n]=new At(i,e)),a=Ot[n]),s.query&&!e.query&&(e.query=s.queryKey),a.socket(s.path,e)}Object.assign(Tt,{Manager:At,Socket:_t,io:Tt,connect:Tt});var Rt=Tt(window.location.origin);Rt.on("connect",(function(){console.log("Connected!")})),Rt.on("load",(function(t){t.forEach((function(t){var e=t.start,s=t.end,i=t.color;n.draw(e,s,i,!1)}))})),Rt.on("draw",(function(t,e,s){n.draw(t,e,s,!1)})),n.on("draw",(function(t,e,s){Rt.emit("draw",t,e,s)}))})();