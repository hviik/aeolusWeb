_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[62],{Aiso:function(t,e,n){t.exports=n("dQHF")},Fy8l:function(t,e,n){"use strict";var i=n("nKUr"),r=n("TSYQ"),a=n.n(r),s=n("rePB"),o=n("Aiso"),u=n.n(o),c=n("YFqc"),d=n.n(c),l=n("Wgwc"),h=n("VuTL"),f=n.n(h);var _=function(t){var e,n=t.title,r=t.content,o=t.date,c=t.image,h=t.to,_=t.centered;return Object(i.jsx)("div",{className:a()(f.a.card,Object(s.a)({},f.a.centered,_)),children:(e=Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:f.a.imageContainer,children:Object(i.jsx)(u.a,{className:f.a.image,src:c.src,alt:c.src,sizes:c.sizes,quality:100,layout:"fill",objectFit:"cover"})}),Object(i.jsxs)("div",{className:f.a.content,children:[o&&Object(i.jsx)("time",{className:f.a.date,dateTime:o,children:o&&l(o).format("DD/MM/YYYY")}),Object(i.jsx)("h5",{className:a()(f.a.title,"u-h5"),children:n}),Object(i.jsx)("div",{className:a()(f.a.p,{"u-small":o}),dangerouslySetInnerHTML:{__html:r}})]})]}),h?Object(i.jsx)(d.a,{href:h,children:Object(i.jsx)("a",{children:e})}):e)})},m=n("ZGd0"),g=n.n(m);e.a=function(t){var e=t.cards;return Object(i.jsx)("div",{className:a()(g.a.cardGrid,"o-layout__item u-20 u-22@medium u-offset-2 u-offset-1@medium"),children:Object(i.jsx)("ul",{className:g.a.list,children:e&&e.map((function(t,e){var n,r,a;return Object(i.jsx)("li",{className:g.a.listItem,children:Object(i.jsx)(_,{title:t.title,content:t.content,date:null!==(n=t.date)&&void 0!==n?n:null,image:t.image,to:null!==(r=t.link)&&void 0!==r?r:null,centered:null!==(a=t.centered)&&void 0!==a?a:null})},e)}))})})}},Kr8L:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return h})),n.d(e,"default",(function(){return f}));var i=n("nKUr"),r=n("Rs2V"),a=n("l0rj"),s=n("TSYQ"),o=n.n(s),u=n("Fy8l"),c=n("srbB"),d=n.n(c);var l=function(t){var e=t.items;return Object(i.jsx)("section",{id:"news",className:d.a.newsList,children:Object(i.jsx)("div",{className:o()(d.a.listContainer,"o-layout o-layout--grids"),children:e&&Object(i.jsx)(u.a,{cards:e.map((function(t){return{title:t.title,content:t.excerpt,date:t.date,image:t.excerptImage.responsiveImage,link:"post/".concat(t.slug),centered:!0}}))})})})},h=!0;function f(t){var e,n=t.news,s=t.allPosts,o=t.site;return Object(i.jsxs)(a.a,{seo:n._seoMetaTags.concat(o.faviconMetaTags),children:[Object(i.jsx)(r.a,{title:n.headerTitle,content:n.headerContent,image:null===(e=n.headerBackground)||void 0===e?void 0:e.responsiveImage,scroll:"news"}),Object(i.jsx)(l,{items:s})]})}},RfQt:function(t,e,n){"use strict";var i=n("nKUr"),r=n("8wsC");e.a=function(t){var e=t.className,n=t.to,a=t.color,s=t.button,o=t.buttonColor,u=void 0===o?"white":o,c=function(){var t=document.getElementById(n);t&&t.scrollIntoView({behavior:"smooth"})};return s?Object(i.jsx)(r.a,{color:u,className:e,onClickHandler:c,children:s}):Object(i.jsx)("button",{type:"button",className:e,onClick:c,children:Object(i.jsx)("svg",{viewBox:"0 0 22 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M21.36 9.39L21.36 14.19L10.68 22.26L-7.51399e-07 14.19L-5.41584e-07 9.39L4.95 13.14C6.53 14.32 7.85 15.35 8.91 16.23L8.91 0.419999L12.48 0.42L12.48 16.2C13.96 15.02 15.27 14 16.41 13.14L21.36 9.39Z",fill:null!==a&&void 0!==a?a:"white"})})})}},Rs2V:function(t,e,n){"use strict";var i=n("nKUr"),r=n("rePB"),a=n("TSYQ"),s=n.n(a),o=n("D96S"),u=n("RfQt"),c=n("qThX"),d=n("Tu9s"),l=n.n(d);e.a=function(t){var e,n=t.title,a=t.content,d=t.image,h=t.scroll,f=t.contentComponent,_=t.button;return Object(i.jsxs)("header",{className:l.a.header,children:[Object(i.jsx)(c.a,{className:l.a.top,color:"white",logoSize:"small"}),Object(i.jsx)("div",{className:s()(l.a.content,"o-layout o-layout--grids"),children:Object(i.jsxs)("div",{className:"o-layout__item u-22 u-12@small u-7@medium u-offset-1 u-offset-15@medium",children:[Object(i.jsx)("h1",{className:s()(l.a.title,"u-h3"),children:n}),a&&Object(i.jsx)("p",{dangerouslySetInnerHTML:{__html:a}}),Object(i.jsx)("div",{className:l.a.contentComponent,children:f}),Object(i.jsx)(u.a,{className:s()((e={},Object(r.a)(e,l.a.button,_),Object(r.a)(e,l.a.arrow,!_),e)),to:h,button:null!==_&&void 0!==_&&_})]})}),Object(i.jsx)("div",{className:l.a.backgroundContainer,children:Object(i.jsx)(o.Image,{data:d,fadeInDuration:100,className:l.a.background})})]})}},Tu9s:function(t,e,n){t.exports={"u-underline-link":"HeaderDefault_u-underline-link__3ctJW","u-white":"HeaderDefault_u-white__8CrDt","u-h1":"HeaderDefault_u-h1__1ofzm","u-h2":"HeaderDefault_u-h2__3h7qn","u-h3":"HeaderDefault_u-h3__2i_rN","u-h4":"HeaderDefault_u-h4__1yzJh","u-h5":"HeaderDefault_u-h5__k-zLu","u-h6":"HeaderDefault_u-h6__2JX0c",header:"HeaderDefault_header__1IGF4",top:"HeaderDefault_top__t4q4y",content:"HeaderDefault_content__3NHAE",title:"HeaderDefault_title__1xBOy",button:"HeaderDefault_button__1D1xk",arrow:"HeaderDefault_arrow__32-n-",backgroundContainer:"HeaderDefault_backgroundContainer__2LUSh",background:"HeaderDefault_background__2vIxi",contentComponent:"HeaderDefault_contentComponent__1Oha0"}},UWYU:function(t,e,n){"use strict";e.__esModule=!0,e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},VuTL:function(t,e,n){t.exports={"u-underline-link":"Card_u-underline-link__3f_nS","u-white":"Card_u-white__2Z_uP","u-h1":"Card_u-h1__2Arph","u-h2":"Card_u-h2__3xqJ3","u-h3":"Card_u-h3__2nBte","u-h4":"Card_u-h4__3ScZu","u-h5":"Card_u-h5__4fpYs","u-h6":"Card_u-h6__2aLbg",card:"Card_card__1ypoP",imageContainer:"Card_imageContainer__3erCM",content:"Card_content__g9PVs",date:"Card_date__Cd_dB",title:"Card_title__2H-YC",p:"Card_p__2wgRq",centered:"Card_centered__1_y1X"}},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",a="week",s="month",o="quarter",u="year",c="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,s),a=n-r<0,o=e.clone().add(i+(a?-1:1),s);return+(-(i+(n-r)/(a?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:s,y:u,w:a,d:r,D:c,h:i,m:n,s:e,ms:t,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",g={};g[m]=h;var v=function(t){return t instanceof y},b=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)g[t]&&(i=t),e&&(g[t]=e,i=t);else{var r=t.name;g[r]=t,i=r}return!n&&i&&(m=i),i||!n&&m},p=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},w=_;w.l=b,w.i=v,w.w=function(t,e){return p(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var y=function(){function h(t){this.$L=b(t.locale,null,!0),this.parse(t)}var f=h.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(d);if(i){var r=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return w},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=p(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return p(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<p(t)},f.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var d=this,l=!!w.u(o)||o,h=w.p(t),f=function(t,e){var n=w.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return l?n:n.endOf(r)},_=function(t,e){return w.w(d.toDate()[t].apply(d.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},m=this.$W,g=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(h){case u:return l?f(1,0):f(31,11);case s:return l?f(1,g):f(0,g+1);case a:var p=this.$locale().weekStart||0,y=(m<p?m+7:m)-p;return f(l?v-y:v+(6-y),g);case r:case c:return _(b+"Hours",0);case i:return _(b+"Minutes",1);case n:return _(b+"Seconds",2);case e:return _(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(a,o){var d,l=w.p(a),h="set"+(this.$u?"UTC":""),f=(d={},d[r]=h+"Date",d[c]=h+"Date",d[s]=h+"Month",d[u]=h+"FullYear",d[i]=h+"Hours",d[n]=h+"Minutes",d[e]=h+"Seconds",d[t]=h+"Milliseconds",d)[l],_=l===r?this.$D+(o-this.$W):o;if(l===s||l===u){var m=this.clone().set(c,1);m.$d[f](_),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](_);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[w.p(t)]()},f.add=function(t,o){var c,d=this;t=Number(t);var l=w.p(o),h=function(e){var n=p(d);return w.w(n.date(n.date()+Math.round(e*t)),d)};if(l===s)return this.set(s,this.$M+t);if(l===u)return this.set(u,this.$y+t);if(l===r)return h(1);if(l===a)return h(7);var f=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[l]||1,_=this.$d.getTime()+t*f;return w.w(_,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),r=this.$locale(),a=this.$H,s=this.$m,o=this.$M,u=r.weekdays,c=r.months,d=function(t,i,r,a){return t&&(t[i]||t(e,n))||r[i].substr(0,a)},h=function(t){return w.s(a%12||12,t,"0")},f=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:d(r.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,u,2),ddd:d(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:w.s(a,2,"0"),h:h(1),hh:h(2),a:f(a,s,!0),A:f(a,s,!1),m:String(s),mm:w.s(s,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return n.replace(l,(function(t,e){return e||_[t]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,d){var l,h=w.p(c),f=p(t),_=6e4*(f.utcOffset()-this.utcOffset()),m=this-f,g=w.m(this,f);return g=(l={},l[u]=g/12,l[s]=g,l[o]=g/3,l[a]=(m-_)/6048e5,l[r]=(m-_)/864e5,l[i]=m/36e5,l[n]=m/6e4,l[e]=m/1e3,l)[h]||m,d?g:w.a(g)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return g[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return w.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),j=y.prototype;return p.prototype=j,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",r],["$M",s],["$y",u],["$D",c]].forEach((function(t){j[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),p.extend=function(t,e){return t.$i||(t(e,y,p),t.$i=!0),p},p.locale=b,p.isDayjs=v,p.unix=function(t){return p(1e3*t)},p.en=g[m],p.Ls=g,p.p={},p}()},ZGd0:function(t,e,n){t.exports={"u-underline-link":"CardGrid_u-underline-link__dkB45","u-white":"CardGrid_u-white__MuCMb","u-h1":"CardGrid_u-h1__1xz5d","u-h2":"CardGrid_u-h2__1TLoO","u-h3":"CardGrid_u-h3__2l7kx","u-h4":"CardGrid_u-h4__3S02w","u-h5":"CardGrid_u-h5__3vhbU","u-h6":"CardGrid_u-h6__1NDzN",list:"CardGrid_list__201uA"}},dEHY:function(t,e,n){"use strict";e.__esModule=!0,e.toBase64=function(t){return window.btoa(t)}},dQHF:function(t,e,n){"use strict";var i=n("J4zp"),r=n("RIqP"),a=n("TqRt");e.__esModule=!0,e.default=function(t){var e=t.src,n=t.sizes,a=t.unoptimized,o=void 0!==a&&a,l=t.priority,f=void 0!==l&&l,_=t.loading,g=t.className,v=t.quality,b=t.width,j=t.height,x=t.objectFit,$=t.objectPosition,O=t.loader,D=void 0===O?y:O,S=(0,s.default)(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),C=n?"responsive":"intrinsic",M=!1;"unsized"in S?(M=Boolean(S.unsized),delete S.unsized):"layout"in S&&(S.layout&&(C=S.layout),delete S.layout);0;var N=!f&&("lazy"===_||"undefined"===typeof _);e&&e.startsWith("data:")&&(o=!0,N=!1);var A,k,L,z=(0,h.useIntersection)({rootMargin:"200px",disabled:!N}),H=i(z,2),I=H[0],T=H[1],Y=!N||T,q=w(b),E=w(j),W=w(v),B={visibility:Y?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:x,objectPosition:$};if("undefined"!==typeof q&&"undefined"!==typeof E&&"fill"!==C){var F=E/q,U=isNaN(F)?"100%":"".concat(100*F,"%");"responsive"===C?(A={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},k={display:"block",boxSizing:"border-box",paddingTop:U}):"intrinsic"===C?(A={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},k={boxSizing:"border-box",display:"block",maxWidth:"100%"},L='<svg width="'.concat(q,'" height="').concat(E,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===C&&(A={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:q,height:E})}else"undefined"===typeof q&&"undefined"===typeof E&&"fill"===C&&(A={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var G={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};Y&&(G=function(t){var e=t.src,n=t.unoptimized,i=t.layout,a=t.width,s=t.quality,o=t.sizes,u=t.loader;if(n)return{src:e,srcSet:void 0,sizes:void 0};var c=function(t,e){if("number"!==typeof t||"fill"===e||"responsive"===e)return{widths:m,kind:"w"};return{widths:r(new Set([t,2*t].map((function(t){return p.find((function(e){return e>=t}))||p[p.length-1]})))),kind:"x"}}(a,i),d=c.widths,l=c.kind,h=d.length-1;return{src:u({src:e,quality:s,width:d[h]}),sizes:o||"w"!==l?o:"100vw",srcSet:d.map((function(t,n){return"".concat(u({src:e,quality:s,width:t})," ").concat("w"===l?t:n+1).concat(l)})).join(", ")}}({src:e,unoptimized:o,layout:C,width:q,quality:W,sizes:n,loader:D}));M&&(A=void 0,k=void 0,B=void 0);return u.default.createElement("div",{style:A},k?u.default.createElement("div",{style:k},L?u.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(L))}):null):null,u.default.createElement("img",Object.assign({},S,G,{decoding:"async",className:g,ref:I,style:B})),f?u.default.createElement(c.default,null,u.default.createElement("link",{key:"__nimg-"+G.src+G.srcSet+G.sizes,rel:"preload",as:"image",href:G.srcSet?void 0:G.src,imagesrcset:G.srcSet,imagesizes:G.sizes})):null)};var s=a(n("8OQS")),o=a(n("pVnL")),u=a(n("q1tI")),c=a(n("8Kt/")),d=n("dEHY"),l=n("UWYU"),h=n("vNVm");var f=new Map([["imgix",function(t){var e=t.root,n=t.src,i=t.width,r=t.quality,a=["auto=format","fit=max","w="+i],s="";r&&a.push("q="+r);a.length&&(s="?"+a.join("&"));return"".concat(e).concat(j(n)).concat(s)}],["cloudinary",function(t){var e=t.root,n=t.src,i=t.width,r=t.quality,a=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(e).concat(a).concat(j(n))}],["akamai",function(t){var e=t.root,n=t.src,i=t.width;return"".concat(e).concat(j(n),"?imwidth=").concat(i)}],["default",function(t){var e=t.root,n=t.src,i=t.width,r=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}]]),_={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||l.imageConfigDefault,m=_.deviceSizes,g=_.imageSizes,v=_.loader,b=_.path,p=(_.domains,[].concat(r(m),r(g)));function w(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function y(t){var e=f.get(v);if(e)return e((0,o.default)({root:b},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(v))}function j(t){return"/"===t[0]?t.slice(1):t}m.sort((function(t,e){return t-e})),p.sort((function(t,e){return t-e}))},jFvI:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n("Kr8L")}])},pVnL:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},n.apply(this,arguments)}t.exports=n},srbB:function(t,e,n){t.exports={"u-underline-link":"NewsList_u-underline-link__3kOAt","u-white":"NewsList_u-white__2CWz4","u-h1":"NewsList_u-h1__3vAh8","u-h2":"NewsList_u-h2__9Cbzk","u-h3":"NewsList_u-h3__1yvKy","u-h4":"NewsList_u-h4__3SJuH","u-h5":"NewsList_u-h5__Wuh8A","u-h6":"NewsList_u-h6__9gucX",newsList:"NewsList_newsList__1uufo",list:"NewsList_list__2QzXc"}}},[["jFvI",1,2,4,5,11,0,3,6,7,8,12,13,14,15,16,18,19,20,21]]]);