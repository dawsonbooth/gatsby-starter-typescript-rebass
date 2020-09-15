(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OJSm:function(e,r,t){"use strict";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.r(r),t.d(r,"get",(function(){return o})),t.d(r,"responsive",(function(){return p})),t.d(r,"css",(function(){return f}));var o=function(e,r,t,n,o){for(r=r&&r.split?r.split("."):[r],n=0;n<r.length;n++)e=e?e[r[n]]:o;return e===o?t:e},i=[40,52,64].map((function(e){return e+"em"})),a={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},d={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},c={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},u={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},s=function(e,r){if("number"!=typeof r||r>=0)return o(e,r,r);var t=Math.abs(r),n=o(e,t,t);return"string"==typeof n?"-"+n:-1*n},l=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,r){var t;return n({},e,((t={})[r]=s,t))}),{}),p=function(e){return function(r){var t={},n=o(r,"breakpoints",i),a=[null].concat(n.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var d in e){var c="function"==typeof e[d]?e[d](r):e[d];if(null!=c)if(Array.isArray(c))for(var u=0;u<c.slice(0,a.length).length;u++){var s=a[u];s?(t[s]=t[s]||{},null!=c[u]&&(t[s][d]=c[u])):t[d]=c[u]}else t[d]=c}return t}},f=function e(r){return function(t){void 0===t&&(t={});var i=n({},a,{},t.theme||t),s={},f="function"==typeof r?r(i):r,g=p(f)(i);for(var m in g){var b=g[m],h="function"==typeof b?b(i):b;if("variant"!==m)if(h&&"object"==typeof h)s[m]=e(h)(i);else{var y=o(d,m,m),v=o(u,y),S=o(i,v,o(i,y,{})),x=o(l,y,o)(S,h,h);if(c[y])for(var R=c[y],w=0;w<R.length;w++)s[R[w]]=x;else s[y]=x}else s=n({},s,{},e(o(i,h))(i))}return s}};r.default=f},VdAu:function(e,r,t){"use strict";t.d(r,"f",(function(){return d})),t.d(r,"d",(function(){return c})),t.d(r,"e",(function(){return u})),t.d(r,"b",(function(){return s}));var n=t("q1tI"),o=t.n(n),i=t("dJMH");function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,"a",(function(){return i.Box})),t.d(r,"c",(function(){return i.Flex}));var d=Object(n.forwardRef)((function(e,r){return o.a.createElement(i.Box,a({ref:r,tx:"text"},e))})),c=Object(n.forwardRef)((function(e,r){return o.a.createElement(i.Box,a({ref:r,as:"h2",tx:"text",variant:"heading"},e,{__css:{fontSize:4,fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"}}))})),u=Object(n.forwardRef)((function(e,r){return o.a.createElement(i.Box,a({ref:r,as:"a",variant:"link"},e))})),s=Object(n.forwardRef)((function(e,r){return o.a.createElement(i.Box,a({ref:r,as:"button",tx:"buttons",variant:"primary"},e,{__css:{appearance:"none",display:"inline-block",textAlign:"center",lineHeight:"inherit",textDecoration:"none",fontSize:"inherit",px:3,py:2,color:"white",bg:"primary",border:0,borderRadius:4}}))}));Object(n.forwardRef)((function(e,r){return o.a.createElement(i.Box,a({ref:r,as:"img"},e,{__css:{maxWidth:"100%",height:"auto"}}))})),Object(n.forwardRef)((function(e,r){return o.a.createElement(i.Box,a({ref:r,variant:"card"},e))}))},dJMH:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Flex=r.Box=void 0;c(t("q1tI"));var n=c(t("5D9J")),o=t("za5s"),i=function(e){if(e&&e.__esModule)return e;var r=d();if(r&&r.has(e))return r.get(e);var t={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(t,o,i):t[o]=e[o]}}t.default=e,r&&r.set(e,t);return t}(t("OJSm")),a=c(t("rKjV"));function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}var u=(0,n.default)("div",{shouldForwardProp:a.default})({boxSizing:"border-box",margin:0,minWidth:0},(function(e){return(0,i.default)(e.__css)(e.theme)}),(function(e){var r=e.theme,t=e.variant,n=e.tx,o=void 0===n?"variants":n;return(0,i.default)((0,i.get)(r,o+"."+t,(0,i.get)(r,t)))(r)}),(function(e){return(0,i.default)(e.sx)(e.theme)}),(function(e){return e.css}),(0,o.compose)(o.space,o.layout,o.typography,o.color,o.flexbox));r.Box=u;var s=(0,n.default)(u)({display:"flex"});r.Flex=s},nQb1:function(e,r,t){"use strict";var n=t("q1tI"),o=t("VdAu"),i=t("+ZDr"),a=t.n(i);r.a=function(e){return e.hasOwnProperty("to")?n.createElement(o.e,Object.assign({as:a.a},e)):n.createElement(o.e,e)}},rKjV:function(e,r,t){"use strict";t.r(r),t.d(r,"props",(function(){return a})),t.d(r,"createShouldForwardProp",(function(){return d}));var n=t("4qRI"),o=t("9uj6"),i=t("za5s"),a=Object(i.compose)(i.space,i.typography,i.color,i.layout,i.flexbox,i.border,i.background,i.position,i.grid,i.shadow,i.buttonStyle,i.textStyle,i.colorStyle).propNames,d=function(e){var r=new RegExp("^("+e.join("|")+")$");return Object(n.a)((function(e){return Object(o.a)(e)&&!r.test(e)}))};r.default=d(a)},soUV:function(e,r,t){"use strict";t.d(r,"a",(function(){return p}));var n=t("q1tI"),o=t("VdAu"),i=t("nQb1"),a=function(){return n.createElement(o.c,{as:"footer",px:2,alignItems:"center",color:"background",bg:"text"},n.createElement(o.f,{p:2},"© Copyright 2020 Dawson Booth"),n.createElement(o.a,{mx:"auto"}),n.createElement(o.f,null,"Made with ",n.createElement(i.a,{href:"https://reactjs.org/"},"React"),", ",n.createElement(i.a,{href:"https://www.gatsbyjs.com/"},"Gatsby"),", ",n.createElement(i.a,{href:"https://rebassjs.org/"},"Rebass"),", and ",n.createElement(i.a,{href:"https://theme-ui.com/"},"Theme UI")))},d=t("PcS7"),c=["lite","dark","atlassian","eva","gray","hack","pink"],u=function(){return n.createElement("svg",{viewBox:"0 0 32 32",width:"24",height:"24",fill:"currentcolor",style:{display:"block"}},n.createElement("circle",{cx:"16",cy:"16",r:"14",fill:"none",stroke:"currentcolor",strokeWidth:"4"}),n.createElement("path",{d:"\n        M 16 0\n        A 16 16 0 0 0 16 32\n        z\n      "}))},s=function(){var e=Object(d.b)(),r=e[0],t=e[1];return n.createElement(o.c,{as:"header",px:3,py:2,justifyContent:"center",alignItems:"center",color:"background",bg:"text"},n.createElement(o.c,{flex:1,justifyContent:"center"},n.createElement(o.f,{p:2,fontWeight:"bold",mr:"auto"},"Dawson Booth")),n.createElement(o.c,{flex:1,justifyContent:"center"},n.createElement(i.a,{variant:"nav",to:"/"},"Home"),n.createElement(i.a,{variant:"nav",to:"/page-2/"},"Page 2")),n.createElement(o.c,{flex:1,justifyContent:"center"},n.createElement(o.b,{title:"Change color mode",variant:"transparent",width:32,height:32,p:1,ml:"auto",sx:{cursor:"pointer",borderRadius:"50%"},onClick:function(){var e=(c.indexOf(r)+1)%c.length;t(c[e])}},n.createElement(u,null))))},l=function(e){var r=e.children;return n.createElement(o.c,{as:"main",flexDirection:"column",justifyContent:"center",alignItems:"center"},r)};function p(e){var r=e.children;return n.createElement(o.c,{flexDirection:"column",justifyContent:"space-between",height:"100vh"},n.createElement(s,null),n.createElement(l,null,r),n.createElement(a,null))}},za5s:function(e,r,t){"use strict";t.r(r),t.d(r,"get",(function(){return u})),t.d(r,"createParser",(function(){return s})),t.d(r,"createStyleFunction",(function(){return f})),t.d(r,"compose",(function(){return m})),t.d(r,"system",(function(){return g})),t.d(r,"margin",(function(){return X})),t.d(r,"padding",(function(){return _})),t.d(r,"space",(function(){return D})),t.d(r,"color",(function(){return v})),t.d(r,"layout",(function(){return b})),t.d(r,"typography",(function(){return x})),t.d(r,"flexbox",(function(){return w})),t.d(r,"border",(function(){return T})),t.d(r,"background",(function(){return L})),t.d(r,"position",(function(){return I})),t.d(r,"grid",(function(){return C})),t.d(r,"shadow",(function(){return M})),t.d(r,"boxShadow",(function(){return J})),t.d(r,"textShadow",(function(){return J})),t.d(r,"variant",(function(){return q})),t.d(r,"buttonStyle",(function(){return N})),t.d(r,"textStyle",(function(){return K})),t.d(r,"colorStyle",(function(){return Q})),t.d(r,"borders",(function(){return z})),t.d(r,"width",(function(){return U})),t.d(r,"height",(function(){return Z})),t.d(r,"minWidth",(function(){return $})),t.d(r,"minHeight",(function(){return ee})),t.d(r,"maxWidth",(function(){return re})),t.d(r,"maxHeight",(function(){return te})),t.d(r,"size",(function(){return ne})),t.d(r,"verticalAlign",(function(){return oe})),t.d(r,"display",(function(){return ie})),t.d(r,"overflow",(function(){return ae})),t.d(r,"overflowX",(function(){return de})),t.d(r,"overflowY",(function(){return ce})),t.d(r,"opacity",(function(){return ue})),t.d(r,"fontSize",(function(){return se})),t.d(r,"fontFamily",(function(){return le})),t.d(r,"fontWeight",(function(){return pe})),t.d(r,"lineHeight",(function(){return fe})),t.d(r,"textAlign",(function(){return ge})),t.d(r,"fontStyle",(function(){return me})),t.d(r,"letterSpacing",(function(){return be})),t.d(r,"alignItems",(function(){return he})),t.d(r,"alignContent",(function(){return ye})),t.d(r,"justifyItems",(function(){return ve})),t.d(r,"justifyContent",(function(){return Se})),t.d(r,"flexWrap",(function(){return xe})),t.d(r,"flexDirection",(function(){return Re})),t.d(r,"flex",(function(){return we})),t.d(r,"flexGrow",(function(){return ke})),t.d(r,"flexShrink",(function(){return Be})),t.d(r,"flexBasis",(function(){return Ce})),t.d(r,"justifySelf",(function(){return We})),t.d(r,"alignSelf",(function(){return je})),t.d(r,"order",(function(){return Te})),t.d(r,"gridGap",(function(){return ze})),t.d(r,"gridColumnGap",(function(){return Ee})),t.d(r,"gridRowGap",(function(){return Le})),t.d(r,"gridColumn",(function(){return Oe})),t.d(r,"gridRow",(function(){return Ae})),t.d(r,"gridAutoFlow",(function(){return Ie})),t.d(r,"gridAutoColumns",(function(){return Ge})),t.d(r,"gridAutoRows",(function(){return He})),t.d(r,"gridTemplateColumns",(function(){return Pe})),t.d(r,"gridTemplateRows",(function(){return Ye})),t.d(r,"gridTemplateAreas",(function(){return Fe})),t.d(r,"gridArea",(function(){return Xe})),t.d(r,"borderWidth",(function(){return _e})),t.d(r,"borderStyle",(function(){return De})),t.d(r,"borderColor",(function(){return Me})),t.d(r,"borderTop",(function(){return Je})),t.d(r,"borderRight",(function(){return Ve})),t.d(r,"borderBottom",(function(){return qe})),t.d(r,"borderLeft",(function(){return Ne})),t.d(r,"borderRadius",(function(){return Ke})),t.d(r,"backgroundImage",(function(){return Qe})),t.d(r,"backgroundSize",(function(){return Ue})),t.d(r,"backgroundPosition",(function(){return Ze})),t.d(r,"backgroundRepeat",(function(){return $e})),t.d(r,"zIndex",(function(){return er})),t.d(r,"top",(function(){return rr})),t.d(r,"right",(function(){return tr})),t.d(r,"bottom",(function(){return nr})),t.d(r,"left",(function(){return or})),t.d(r,"style",(function(){return ir}));var n=t("6qGY"),o=t.n(n),i=function(e,r){var t=o()({},e,r);for(var n in e){var i;e[n]&&"object"==typeof r[n]&&o()(t,((i={})[n]=o()(e[n],r[n]),i))}return t},a={breakpoints:[40,52,64].map((function(e){return e+"em"}))},d=function(e){return"@media screen and (min-width: "+e+")"},c=function(e,r){return u(r,e,e)},u=function(e,r,t,n,o){for(r=r&&r.split?r.split("."):[r],n=0;n<r.length;n++)e=e?e[r[n]]:o;return e===o?t:e},s=function e(r){var t={},n=function(e){var n,c,s={},f=!1,g=e.theme&&e.theme.disableStyledSystemCache;for(var m in e)if(r[m]){var b=r[m],h=e[m],y=u(e.theme,b.scale,b.defaults);if("object"!=typeof h)o()(s,b(h,y,e));else{if(t.breakpoints=!g&&t.breakpoints||u(e.theme,"breakpoints",a.breakpoints),Array.isArray(h)){t.media=!g&&t.media||[null].concat(t.breakpoints.map(d)),s=i(s,l(t.media,b,y,h,e));continue}null!==h&&(s=i(s,p(t.breakpoints,b,y,h,e)),f=!0)}}return f&&(n=s,c={},Object.keys(n).sort((function(e,r){return e.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(e){c[e]=n[e]})),s=c),s};n.config=r,n.propNames=Object.keys(r),n.cache=t;var c=Object.keys(r).filter((function(e){return"config"!==e}));return c.length>1&&c.forEach((function(t){var o;n[t]=e(((o={})[t]=r[t],o))})),n},l=function(e,r,t,n,i){var a={};return n.slice(0,e.length).forEach((function(n,d){var c,u=e[d],s=r(n,t,i);u?o()(a,((c={})[u]=o()({},a[u],s),c)):o()(a,s)})),a},p=function(e,r,t,n,i){var a={};for(var c in n){var u=e[c],s=r(n[c],t,i);if(u){var l,p=d(u);o()(a,((l={})[p]=o()({},a[p],s),l))}else o()(a,s)}return a},f=function(e){var r=e.properties,t=e.property,n=e.scale,o=e.transform,i=void 0===o?c:o,a=e.defaultScale;r=r||[t];var d=function(e,t,n){var o={},a=i(e,t,n);if(null!==a)return r.forEach((function(e){o[e]=a})),o};return d.scale=n,d.defaults=a,d},g=function(e){void 0===e&&(e={});var r={};return Object.keys(e).forEach((function(t){var n=e[t];r[t]=!0!==n?"function"!=typeof n?f(n):n:f({property:t,scale:t})})),s(r)},m=function(){for(var e={},r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];t.forEach((function(r){r&&r.config&&o()(e,r.config)}));var i=s(e);return i},b=g({width:{property:"width",scale:"sizes",transform:function(e,r){return u(r,e,!function(e){return"number"==typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),h=b,y={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};y.bg=y.backgroundColor;var v=g(y),S=v,x=g({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),R=x,w=g({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),k=w,B={space:[0,4,8,16,32,64,128,256,512]},C=g({gridGap:{property:"gridGap",scale:"space",defaultScale:B.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:B.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:B.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),W=C,j={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};j.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},j.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},j.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},j.borderBottomColor={property:"borderBottomColor",scale:"colors"},j.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},j.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},j.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},j.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},j.borderLeftColor={property:"borderLeftColor",scale:"colors"},j.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},j.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},j.borderRightColor={property:"borderRightColor",scale:"colors"},j.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var T=g(j),z=T,E={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};E.bgImage=E.backgroundImage,E.bgSize=E.backgroundSize,E.bgPosition=E.backgroundPosition,E.bgRepeat=E.backgroundRepeat;var L=g(E),O=L,A={space:[0,4,8,16,32,64,128,256,512]},I=g({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:A.space},right:{property:"right",scale:"space",defaultScale:A.space},bottom:{property:"bottom",scale:"space",defaultScale:A.space},left:{property:"left",scale:"space",defaultScale:A.space}}),G=I,H={space:[0,4,8,16,32,64,128,256,512]},P=function(e){return"number"==typeof e&&!isNaN(e)},Y=function(e,r){if(!P(e))return u(r,e,e);var t=e<0,n=Math.abs(e),o=u(r,n,n);return P(o)?o*(t?-1:1):t?"-"+o:o},F={};F.margin={margin:{property:"margin",scale:"space",transform:Y,defaultScale:H.space},marginTop:{property:"marginTop",scale:"space",transform:Y,defaultScale:H.space},marginRight:{property:"marginRight",scale:"space",transform:Y,defaultScale:H.space},marginBottom:{property:"marginBottom",scale:"space",transform:Y,defaultScale:H.space},marginLeft:{property:"marginLeft",scale:"space",transform:Y,defaultScale:H.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:Y,defaultScale:H.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:Y,defaultScale:H.space}},F.margin.m=F.margin.margin,F.margin.mt=F.margin.marginTop,F.margin.mr=F.margin.marginRight,F.margin.mb=F.margin.marginBottom,F.margin.ml=F.margin.marginLeft,F.margin.mx=F.margin.marginX,F.margin.my=F.margin.marginY,F.padding={padding:{property:"padding",scale:"space",defaultScale:H.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:H.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:H.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:H.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:H.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:H.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:H.space}},F.padding.p=F.padding.padding,F.padding.pt=F.padding.paddingTop,F.padding.pr=F.padding.paddingRight,F.padding.pb=F.padding.paddingBottom,F.padding.pl=F.padding.paddingLeft,F.padding.px=F.padding.paddingX,F.padding.py=F.padding.paddingY;var X=g(F.margin),_=g(F.padding),D=m(X,_),M=g({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}}),J=M,V=t("OJSm"),q=function(e){var r,t,n=e.scale,o=e.prop,i=void 0===o?"variant":o,a=e.variants,d=void 0===a?{}:a,c=e.key;(t=Object.keys(d).length?function(e,r,t){return Object(V.default)(u(r,e,null))(t.theme)}:function(e,r){return u(r,e,null)}).scale=n||c,t.defaults=d;var l=((r={})[i]=t,r);return s(l)},N=q({key:"buttons"}),K=q({key:"textStyles",prop:"textStyle"}),Q=q({key:"colorStyles",prop:"colors"}),U=h.width,Z=h.height,$=h.minWidth,ee=h.minHeight,re=h.maxWidth,te=h.maxHeight,ne=h.size,oe=h.verticalAlign,ie=h.display,ae=h.overflow,de=h.overflowX,ce=h.overflowY,ue=S.opacity,se=R.fontSize,le=R.fontFamily,pe=R.fontWeight,fe=R.lineHeight,ge=R.textAlign,me=R.fontStyle,be=R.letterSpacing,he=k.alignItems,ye=k.alignContent,ve=k.justifyItems,Se=k.justifyContent,xe=k.flexWrap,Re=k.flexDirection,we=k.flex,ke=k.flexGrow,Be=k.flexShrink,Ce=k.flexBasis,We=k.justifySelf,je=k.alignSelf,Te=k.order,ze=W.gridGap,Ee=W.gridColumnGap,Le=W.gridRowGap,Oe=W.gridColumn,Ae=W.gridRow,Ie=W.gridAutoFlow,Ge=W.gridAutoColumns,He=W.gridAutoRows,Pe=W.gridTemplateColumns,Ye=W.gridTemplateRows,Fe=W.gridTemplateAreas,Xe=W.gridArea,_e=z.borderWidth,De=z.borderStyle,Me=z.borderColor,Je=z.borderTop,Ve=z.borderRight,qe=z.borderBottom,Ne=z.borderLeft,Ke=z.borderRadius,Qe=O.backgroundImage,Ue=O.backgroundSize,Ze=O.backgroundPosition,$e=O.backgroundRepeat,er=G.zIndex,rr=G.top,tr=G.right,nr=G.bottom,or=G.left,ir=function(e){var r=e.prop,t=e.cssProperty,n=e.alias,o=e.key,i=e.transformValue,a=e.scale,d=e.properties,c={};return c[r]=f({properties:d,property:t||r,scale:o,defaultScale:a,transform:i}),n&&(c[n]=c[r]),s(c)}}}]);
//# sourceMappingURL=commons-5a8913a472a9ecd4bfc3.js.map