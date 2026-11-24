(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=1021,w=1022,T=1023,E=1024,D=1025,O=1026,k=1027,A=1028,j=1029,M=1030,N=1031,P=1033,F=33776,I=33777,L=33778,R=33779,z=35840,ee=35841,te=35842,B=35843,ne=36196,re=37492,ie=37496,ae=37808,oe=37809,se=37810,ce=37811,le=37812,V=37813,ue=37814,de=37815,fe=37816,H=37817,pe=37818,me=37819,U=37820,he=37821,ge=36492,_e=36494,ve=36495,ye=36283,be=36284,xe=36285,Se=36286,Ce=2300,we=2301,Te=2302,Ee=2400,De=2401,Oe=2402,ke=3200,Ae=3201,je=`srgb`,Me=`srgb-linear`,Ne=`display-p3`,Pe=`display-p3-linear`,Fe=`linear`,Ie=`srgb`,Le=`rec709`,Re=7680,ze=35044,Be=2e3,Ve=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},He=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ue=1234567,We=Math.PI/180,Ge=180/Math.PI;function Ke(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(He[e&255]+He[e>>8&255]+He[e>>16&255]+He[e>>24&255]+`-`+He[t&255]+He[t>>8&255]+`-`+He[t>>16&15|64]+He[t>>24&255]+`-`+He[n&63|128]+He[n>>8&255]+`-`+He[n>>16&255]+He[n>>24&255]+He[r&255]+He[r>>8&255]+He[r>>16&255]+He[r>>24&255]).toLowerCase()}function qe(e,t,n){return Math.max(t,Math.min(n,e))}function Je(e,t){return(e%t+t)%t}function Ye(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Xe(e,t,n){return e===t?0:(n-e)/(t-e)}function Ze(e,t,n){return(1-n)*e+n*t}function Qe(e,t,n,r){return Ze(e,t,1-Math.exp(-n*r))}function $e(e,t=1){return t-Math.abs(Je(e,t*2)-t)}function et(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function tt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function nt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function rt(e,t){return e+Math.random()*(t-e)}function it(e){return e*(.5-Math.random())}function at(e){e!==void 0&&(Ue=e);let t=Ue+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ot(e){return e*We}function st(e){return e*Ge}function ct(e){return!(e&e-1)&&e!==0}function lt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ut(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function dt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var mt={DEG2RAD:We,RAD2DEG:Ge,generateUUID:Ke,clamp:qe,euclideanModulo:Je,mapLinear:Ye,inverseLerp:Xe,lerp:Ze,damp:Qe,pingpong:$e,smoothstep:et,smootherstep:tt,randInt:nt,randFloat:rt,randFloatSpread:it,seededRandom:at,degToRad:ot,radToDeg:st,isPowerOfTwo:ct,ceilPowerOfTwo:lt,floorPowerOfTwo:ut,setQuaternionFromProperEuler:dt,normalize:pt,denormalize:ft},W=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},G=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ht.makeScale(e,t)),this}rotate(e){return this.premultiply(ht.makeRotation(-e)),this}translate(e,t){return this.premultiply(ht.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ht=new G;function gt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function _t(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function vt(){let e=_t(`canvas`);return e.style.display=`block`,e}var yt={};function bt(e){e in yt||(yt[e]=!0,console.warn(e))}function xt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function St(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ct(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var wt=new G().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tt=new G().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Et={[Me]:{transfer:Fe,primaries:Le,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[je]:{transfer:Ie,primaries:Le,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Pe]:{transfer:Fe,primaries:`p3`,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(Tt),fromReference:e=>e.applyMatrix3(wt)},[Ne]:{transfer:Ie,primaries:`p3`,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(Tt),fromReference:e=>e.applyMatrix3(wt).convertLinearToSRGB()}},Dt=new Set([Me,Pe]),Ot={enabled:!0,_workingColorSpace:Me,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Dt.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=Et[t].toReference,i=Et[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Et[e].primaries},getTransfer:function(e){return e===``?Fe:Et[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(Et[t].luminanceCoefficients)}};function kt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function At(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var jt,Mt=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jt===void 0&&(jt=_t(`canvas`)),jt.width=e.width,jt.height=e.height;let n=jt.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=jt}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=_t(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=kt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(kt(t[e]/255)*255):t[e]=kt(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Nt=0,Pt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nt++}),this.uuid=Ke(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ft(r[t].image)):e.push(Ft(r[t]))}else e=Ft(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ft(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Mt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var It=0,Lt=class e extends Ve{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=T,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:It++}),this.uuid=Ke(),this.name=``,this.source=new Pt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new W(0,0),this.repeat=new W(1,1),this.center=new W(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null,Lt.DEFAULT_MAPPING=300,Lt.DEFAULT_ANISOTROPY=1;var Rt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zt=class extends Ve{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Lt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Pt(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Bt=class extends zt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vt=class extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ht=class extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ut=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wt.copy(this).projectOnVector(e),this.sub(Wt)}reflect(e){return this.sub(Wt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wt=new K,Gt=new Ut,Kt=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Jt):Jt.fromBufferAttribute(r,t),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Yt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Yt.copy(e.boundingBox)),Yt.applyMatrix4(e.matrixWorld),this.union(Yt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nn),rn.subVectors(this.max,nn),Xt.subVectors(e.a,nn),Zt.subVectors(e.b,nn),Qt.subVectors(e.c,nn),$t.subVectors(Zt,Xt),en.subVectors(Qt,Zt),tn.subVectors(Xt,Qt);let t=[0,-$t.z,$t.y,0,-en.z,en.y,0,-tn.z,tn.y,$t.z,0,-$t.x,en.z,0,-en.x,tn.z,0,-tn.x,-$t.y,$t.x,0,-en.y,en.x,0,-tn.y,tn.x,0];return!sn(t,Xt,Zt,Qt,rn)||(t=[1,0,0,0,1,0,0,0,1],!sn(t,Xt,Zt,Qt,rn))?!1:(an.crossVectors($t,en),t=[an.x,an.y,an.z],sn(t,Xt,Zt,Qt,rn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qt=[new K,new K,new K,new K,new K,new K,new K,new K],Jt=new K,Yt=new Kt,Xt=new K,Zt=new K,Qt=new K,$t=new K,en=new K,tn=new K,nn=new K,rn=new K,an=new K,on=new K;function sn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){on.fromArray(e,a);let o=i.x*Math.abs(on.x)+i.y*Math.abs(on.y)+i.z*Math.abs(on.z),s=t.dot(on),c=n.dot(on),l=r.dot(on);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var cn=new Kt,ln=new K,un=new K,dn=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?cn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ln.subVectors(e,this.center);let t=ln.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ln,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(un.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ln.copy(e.center).add(un)),this.expandByPoint(ln.copy(e.center).sub(un))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new K,pn=new K,mn=new K,hn=new K,gn=new K,_n=new K,vn=new K,yn=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){pn.copy(e).add(t).multiplyScalar(.5),mn.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(pn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(mn),o=hn.dot(this.direction),s=-hn.dot(mn),c=hn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(pn).addScaledVector(mn,d),f}intersectSphere(e,t){fn.subVectors(e.center,this.origin);let n=fn.dot(this.direction),r=fn.dot(fn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,r,i){gn.subVectors(t,e),_n.subVectors(n,e),vn.crossVectors(gn,_n);let a=this.direction.dot(vn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hn.subVectors(this.origin,e);let s=o*this.direction.dot(_n.crossVectors(hn,_n));if(s<0)return null;let c=o*this.direction.dot(gn.cross(hn));if(c<0||s+c>a)return null;let l=-o*hn.dot(vn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bn=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/xn.setFromMatrixColumn(e,0).length(),i=1/xn.setFromMatrixColumn(e,1).length(),a=1/xn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cn,e,wn)}lookAt(e,t,n){let r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Tn.crossVectors(n,Dn),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Tn.crossVectors(n,Dn)),Tn.normalize(),En.crossVectors(Dn,Tn),r[0]=Tn.x,r[4]=En.x,r[8]=Dn.x,r[1]=Tn.y,r[5]=En.y,r[9]=Dn.y,r[2]=Tn.z,r[6]=En.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=xn.set(r[0],r[1],r[2]).length(),a=xn.set(r[4],r[5],r[6]).length(),o=xn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);let s=1/i,c=1/a,l=1/o;return Sn.elements[0]*=s,Sn.elements[1]*=s,Sn.elements[2]*=s,Sn.elements[4]*=c,Sn.elements[5]*=c,Sn.elements[6]*=c,Sn.elements[8]*=l,Sn.elements[9]*=l,Sn.elements[10]*=l,t.setFromRotationMatrix(Sn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Be){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Be){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xn=new K,Sn=new bn,Cn=new K(0,0,0),wn=new K(1,1,1),Tn=new K,En=new K,Dn=new K,On=new bn,kn=new Ut,An=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-qe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return On.makeRotationFromQuaternion(e),this.setFromRotationMatrix(On,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kn.setFromEuler(this),this.setFromQuaternion(kn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER=`XYZ`;var jn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Mn=0,Nn=new K,Pn=new Ut,Fn=new bn,In=new K,Ln=new K,Rn=new K,zn=new Ut,Bn=new K(1,0,0),Vn=new K(0,1,0),Hn=new K(0,0,1),Un={type:`added`},Wn={type:`removed`},Gn={type:`childadded`,child:null},Kn={type:`childremoved`,child:null},qn=class e extends Ve{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mn++}),this.uuid=Ke(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new An,r=new Ut,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new bn},normalMatrix:{value:new G}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.multiply(Pn),this}rotateOnWorldAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.premultiply(Pn),this}rotateX(e){return this.rotateOnAxis(Bn,e)}rotateY(e){return this.rotateOnAxis(Vn,e)}rotateZ(e){return this.rotateOnAxis(Hn,e)}translateOnAxis(e,t){return Nn.copy(e).applyQuaternion(this.quaternion),this.position.add(Nn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bn,e)}translateY(e){return this.translateOnAxis(Vn,e)}translateZ(e){return this.translateOnAxis(Hn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?In.copy(e):In.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ln.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ln,In,this.up):Fn.lookAt(In,Ln,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),Pn.setFromRotationMatrix(Fn),this.quaternion.premultiply(Pn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Un),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wn),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Un),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ln,e,Rn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ln,zn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};qn.DEFAULT_UP=new K(0,1,0),qn.DEFAULT_MATRIX_AUTO_UPDATE=!0,qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new K,Yn=new K,Xn=new K,Zn=new K,Qn=new K,$n=new K,er=new K,tr=new K,nr=new K,rr=new K,ir=new Rt,ar=new Rt,or=new Rt,sr=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jn.subVectors(e,t),r.cross(Jn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Jn.subVectors(r,t),Yn.subVectors(n,t),Xn.subVectors(e,t);let a=Jn.dot(Jn),o=Jn.dot(Yn),s=Jn.dot(Xn),c=Yn.dot(Yn),l=Yn.dot(Xn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zn)!==null&&Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Zn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Zn.x),s.addScaledVector(a,Zn.y),s.addScaledVector(o,Zn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ir.setScalar(0),ar.setScalar(0),or.setScalar(0),ir.fromBufferAttribute(e,t),ar.fromBufferAttribute(e,n),or.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ir,i.x),a.addScaledVector(ar,i.y),a.addScaledVector(or,i.z),a}static isFrontFacing(e,t,n,r){return Jn.subVectors(n,t),Yn.subVectors(e,t),Jn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Jn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Qn.subVectors(r,n),$n.subVectors(i,n),tr.subVectors(e,n);let s=Qn.dot(tr),c=$n.dot(tr);if(s<=0&&c<=0)return t.copy(n);nr.subVectors(e,r);let l=Qn.dot(nr),u=$n.dot(nr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Qn,a);rr.subVectors(e,i);let f=Qn.dot(rr),p=$n.dot(rr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector($n,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return er.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(er,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Qn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},ur={h:0,s:0,l:0};function dr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var fr=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ot.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ot.workingColorSpace){if(e=Je(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=dr(i,r,e+1/3),this.g=dr(i,r,e),this.b=dr(i,r,e-1/3)}return Ot.toWorkingColorSpace(this,r),this}setStyle(e,t=je){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=je){let n=cr[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kt(e.r),this.g=kt(e.g),this.b=kt(e.b),this}copyLinearToSRGB(e){return this.r=At(e.r),this.g=At(e.g),this.b=At(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return Ot.fromWorkingColorSpace(pr.copy(this),e),Math.round(qe(pr.r*255,0,255))*65536+Math.round(qe(pr.g*255,0,255))*256+Math.round(qe(pr.b*255,0,255))}getHexString(e=je){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.fromWorkingColorSpace(pr.copy(this),t);let n=pr.r,r=pr.g,i=pr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(pr.copy(this),t),e.r=pr.r,e.g=pr.g,e.b=pr.b,e}getStyle(e=je){Ot.fromWorkingColorSpace(pr.copy(this),e);let t=pr.r,n=pr.g,r=pr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+t,lr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(ur);let n=Ze(lr.h,ur.h,t),r=Ze(lr.s,ur.s,t),i=Ze(lr.l,ur.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pr=new fr;fr.NAMES=cr;var mr=0,hr=class extends Ve{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mr++}),this.uuid=Ke(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fr(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Re,this.stencilZFail=Re,this.stencilZPass=Re,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},gr=class extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new fr(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_r=new K,vr=new W,yr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ze,this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix4(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyNormalMatrix(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.transformDirection(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ft(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ft(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ft(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ft(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ft(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},br=class extends yr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},xr=class extends yr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Sr=class extends yr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cr=0,wr=new bn,Tr=new qn,Er=new K,Dr=new Kt,Or=new Kt,kr=new K,Ar=class e extends Ve{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cr++}),this.uuid=Ke(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(gt(e)?xr:br)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new G().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wr.makeRotationFromQuaternion(e),this.applyMatrix4(wr),this}rotateX(e){return wr.makeRotationX(e),this.applyMatrix4(wr),this}rotateY(e){return wr.makeRotationY(e),this.applyMatrix4(wr),this}rotateZ(e){return wr.makeRotationZ(e),this.applyMatrix4(wr),this}translate(e,t,n){return wr.makeTranslation(e,t,n),this.applyMatrix4(wr),this}scale(e,t,n){return wr.makeScale(e,t,n),this.applyMatrix4(wr),this}lookAt(e){return Tr.lookAt(e),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new Sr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Dr.setFromBufferAttribute(n),this.morphTargetsRelative?(kr.addVectors(this.boundingBox.min,Dr.min),this.boundingBox.expandByPoint(kr),kr.addVectors(this.boundingBox.max,Dr.max),this.boundingBox.expandByPoint(kr)):(this.boundingBox.expandByPoint(Dr.min),this.boundingBox.expandByPoint(Dr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);else if(e){let n=this.boundingSphere.center;if(Dr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(kr.addVectors(Dr.min,Or.min),Dr.expandByPoint(kr),kr.addVectors(Dr.max,Or.max),Dr.expandByPoint(kr)):(Dr.expandByPoint(Or.min),Dr.expandByPoint(Or.max))}Dr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)kr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(kr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)kr.fromBufferAttribute(a,t),o&&(Er.fromBufferAttribute(e,t),kr.add(Er)),r=Math.max(r,n.distanceToSquared(kr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new yr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new W,f=new W,p=new W,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new yr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kr.fromBufferAttribute(e,t),kr.normalize(),e.setXYZ(t,kr.x,kr.y,kr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new yr(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},jr=new bn,Mr=new yn,Nr=new dn,Pr=new K,Fr=new K,Ir=new K,Lr=new K,Rr=new K,zr=new K,Br=new K,Vr=new K,q=class extends qn{constructor(e=new Ar,t=new gr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){zr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Rr.fromBufferAttribute(s,e),a?zr.addScaledVector(Rr,r):zr.addScaledVector(Rr.sub(t),r))}t.add(zr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Mr.copy(e.ray).recast(e.near),!(Nr.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Nr,Pr)===null||Mr.origin.distanceToSquared(Pr)>(e.far-e.near)**2))&&(jr.copy(i).invert(),Mr.copy(e.ray).applyMatrix4(jr),(n.boundingBox===null||Mr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ur(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ur(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ur(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ur(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Hr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Vr.copy(s),Vr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Vr);return l<n.near||l>n.far?null:{distance:l,point:Vr.clone(),object:e}}function Ur(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Fr),e.getVertexPosition(c,Ir),e.getVertexPosition(l,Lr);let u=Hr(e,t,n,r,Fr,Ir,Lr,Br);if(u){let e=new K;sr.getBarycoord(Br,Fr,Ir,Lr,e),i&&(u.uv=sr.getInterpolatedAttribute(i,s,c,l,e,new W)),a&&(u.uv1=sr.getInterpolatedAttribute(a,s,c,l,e,new W)),o&&(u.normal=sr.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};sr.getNormal(Fr,Ir,Lr,t.normal),u.face=t,u.barycoord=e}return u}var Wr=class e extends Ar{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Sr(c,3)),this.setAttribute(`normal`,new Sr(l,3)),this.setAttribute(`uv`,new Sr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Kr(e){let t={};for(let n=0;n<e.length;n++){let r=Gr(e[n]);for(let e in r)t[e]=r[e]}return t}function qr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Jr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ot.workingColorSpace}var Yr={clone:Gr,merge:Kr},Xr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qr=class extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xr,this.fragmentShader=Zr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=qr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$r=class extends qn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=Be}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ei=new K,ti=new W,ni=new W,ri=class extends $r{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ge*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(We*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ge*2*Math.atan(Math.tan(We*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,ti,ni),t.subVectors(ni,ti)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(We*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ii=-90,ai=1,oi=class extends qn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ri(ii,ai,e,t);r.layers=this.layers,this.add(r);let i=new ri(ii,ai,e,t);i.layers=this.layers,this.add(i);let a=new ri(ii,ai,e,t);a.layers=this.layers,this.add(a);let o=new ri(ii,ai,e,t);o.layers=this.layers,this.add(o);let s=new ri(ii,ai,e,t);s.layers=this.layers,this.add(s);let c=new ri(ii,ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},si=class extends Lt{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ci=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new si(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?c:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wr(5,5,5),i=new Qr({name:`CubemapFromEquirect`,uniforms:Gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new oi(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},li=new K,ui=new K,di=new G,fi=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=li.subVectors(n,t).cross(ui.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(li),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||di.getNormalMatrix(e),r=this.coplanarPoint(li).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new dn,mi=new K,hi=class{constructor(e=new fi,t=new fi,n=new fi,r=new fi,i=new fi,a=new fi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Be){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(mi.x=r.normal.x>0?e.max.x:e.min.x,mi.y=r.normal.y>0?e.max.y:e.min.y,mi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gi(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function _i(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var vi=class e extends Ar{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Sr(p,3)),this.setAttribute(`normal`,new Sr(m,3)),this.setAttribute(`uv`,new Sr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new fr(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fr(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fr(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new fr(16777215)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},yi={basic:{uniforms:Kr([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:Kr([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new fr(0)}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:Kr([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new fr(0)},specular:{value:new fr(1118481)},shininess:{value:30}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:Kr([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new fr(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:Kr([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new fr(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:Kr([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:Kr([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:Kr([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:Kr([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:Kr([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:Kr([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distanceRGBA:{uniforms:Kr([Y.common,Y.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distanceRGBA_vert,fragmentShader:J.distanceRGBA_frag},shadow:{uniforms:Kr([Y.lights,Y.fog,{color:{value:new fr(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};yi.physical={uniforms:Kr([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new fr(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new fr(0)},specularColor:{value:new fr(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new W},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var bi={r:0,b:0,g:0},xi=new An,Si=new bn;function Ci(e,t,n,r,i,a,o){let s=new fr(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new q(new Wr(1,1,1),new Qr({name:`BackgroundCubeMaterial`,uniforms:Gr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),xi.copy(n.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Si.makeRotationFromEuler(xi)),u.material.toneMapped=Ot.getTransfer(r.colorSpace)!==Ie,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new q(new vi(2,2),new Qr({name:`BackgroundMaterial`,uniforms:Gr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=Ot.getTransfer(r.colorSpace)!==Ie,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(bi,Jr(e)),r.buffers.color.setClear(bi.r,bi.g,bi.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function wi(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ti(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e];for(let e=0;e<s.length;e++)n.update(t,r,s[e])}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Ei(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`);if(f===!0){let e=t.get(`EXT_clip_control`);e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT)}let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Di(e){let t=this,n=null,r=0,i=!1,a=!1,o=new fi,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Oi(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new ci(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var ki=class extends $r{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ai=4,ji=[.125,.215,.35,.446,.526,.582],Mi=20,Ni=new ki,Pi=new fr,Fi=null,Ii=0,Li=0,Ri=!1,zi=(1+Math.sqrt(5))/2,Bi=1/zi,Vi=[new K(-zi,Bi,0),new K(zi,Bi,0),new K(-Bi,0,zi),new K(Bi,0,zi),new K(0,zi,-Bi),new K(0,zi,Bi),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],Hi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Fi=this._renderer.getRenderTarget(),Ii=this._renderer.getActiveCubeFace(),Li=this._renderer.getActiveMipmapLevel(),Ri=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ji(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fi,Ii,Li),this._renderer.xr.enabled=Ri,e.scissorTest=!1,Gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fi=this._renderer.getRenderTarget(),Ii=this._renderer.getActiveCubeFace(),Li=this._renderer.getActiveMipmapLevel(),Ri=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:v,format:T,colorSpace:Me,depthBuffer:!1},r=Wi(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wi(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ui(r)),this._blurMaterial=Ki(r,e,t)}return r}_compileMaterial(e){let t=new q(this._lodPlanes[0],e);this._renderer.compile(t,Ni)}_sceneToCubeUV(e,t,n,r){let i=new ri(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Pi),s.toneMapping=0,s.autoClear=!1;let u=new gr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new q(new Wr,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Pi),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Gi(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ji()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qi());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new q(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Gi(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ni)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Vi[(r-t-1)%Vi.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new q(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Mi;m>Mi&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let h=[],g=0;for(let e=0;e<Mi;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Gi(t,3*v*(r>_-Ai?r-_+Ai:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ni)}};function Ui(e){let t=[],n=[],r=[],i=e,a=e-Ai+1+ji.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Ai?s=ji[o-e+Ai-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Ar;h.setAttribute(`position`,new yr(f,3)),h.setAttribute(`uv`,new yr(p,2)),h.setAttribute(`faceIndex`,new yr(m,1)),t.push(h),i>Ai&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Wi(e,t,n){let r=new Bt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Gi(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ki(e,t,n){let r=new Float32Array(Mi),i=new K(0,1,0);return new Qr({name:`SphericalGaussianBlur`,defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qi(){return new Qr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Yi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ji(){return new Qr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yi(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xi(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Hi(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Hi(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Zi(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&bt(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Qi(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(gt(n)?xr:br)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function $i(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e];for(let e=0;e<c.length;e++)n.update(t,r,c[e])}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ea(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ta(e,t,n){let r=new WeakMap,i=new Rt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Vt(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new W(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function na(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var ra=class extends Lt{constructor(e,t,n,r,i,o,s,c,l,u=O){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=g),n===void 0&&u===1027&&(n=x),super(null,r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?a:s,this.minFilter=c===void 0?a:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ia=new Lt,aa=new ra(1,1),oa=new Vt,sa=new Ht,ca=new si,la=[],ua=[],da=new Float32Array(16),fa=new Float32Array(9),pa=new Float32Array(4);function ma(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=la[i];if(a===void 0&&(a=new Float32Array(i),la[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ha(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ga(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function _a(e,t){let n=ua[t];n===void 0&&(n=new Int32Array(t),ua[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function va(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ya(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ha(n,t))return;e.uniform2fv(this.addr,t),ga(n,t)}}function ba(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ha(n,t))return;e.uniform3fv(this.addr,t),ga(n,t)}}function xa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ha(n,t))return;e.uniform4fv(this.addr,t),ga(n,t)}}function Sa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ha(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ga(n,t)}else{if(ha(n,r))return;pa.set(r),e.uniformMatrix2fv(this.addr,!1,pa),ga(n,r)}}function Ca(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ha(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ga(n,t)}else{if(ha(n,r))return;fa.set(r),e.uniformMatrix3fv(this.addr,!1,fa),ga(n,r)}}function wa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ha(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ga(n,t)}else{if(ha(n,r))return;da.set(r),e.uniformMatrix4fv(this.addr,!1,da),ga(n,r)}}function Ta(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ea(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ha(n,t))return;e.uniform2iv(this.addr,t),ga(n,t)}}function Da(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ha(n,t))return;e.uniform3iv(this.addr,t),ga(n,t)}}function Oa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ha(n,t))return;e.uniform4iv(this.addr,t),ga(n,t)}}function ka(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Aa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ha(n,t))return;e.uniform2uiv(this.addr,t),ga(n,t)}}function ja(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ha(n,t))return;e.uniform3uiv(this.addr,t),ga(n,t)}}function Ma(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ha(n,t))return;e.uniform4uiv(this.addr,t),ga(n,t)}}function Na(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(aa.compareFunction=515,a=aa):a=ia,n.setTexture2D(t||a,i)}function Pa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||sa,i)}function Fa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ca,i)}function Ia(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||oa,i)}function La(e){switch(e){case 5126:return va;case 35664:return ya;case 35665:return ba;case 35666:return xa;case 35674:return Sa;case 35675:return Ca;case 35676:return wa;case 5124:case 35670:return Ta;case 35667:case 35671:return Ea;case 35668:case 35672:return Da;case 35669:case 35673:return Oa;case 5125:return ka;case 36294:return Aa;case 36295:return ja;case 36296:return Ma;case 35678:case 36198:case 36298:case 36306:case 35682:return Na;case 35679:case 36299:case 36307:return Pa;case 35680:case 36300:case 36308:case 36293:return Fa;case 36289:case 36303:case 36311:case 36292:return Ia}}function Ra(e,t){e.uniform1fv(this.addr,t)}function za(e,t){let n=ma(t,this.size,2);e.uniform2fv(this.addr,n)}function Ba(e,t){let n=ma(t,this.size,3);e.uniform3fv(this.addr,n)}function Va(e,t){let n=ma(t,this.size,4);e.uniform4fv(this.addr,n)}function Ha(e,t){let n=ma(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ua(e,t){let n=ma(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Wa(e,t){let n=ma(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ga(e,t){e.uniform1iv(this.addr,t)}function Ka(e,t){e.uniform2iv(this.addr,t)}function qa(e,t){e.uniform3iv(this.addr,t)}function Ja(e,t){e.uniform4iv(this.addr,t)}function Ya(e,t){e.uniform1uiv(this.addr,t)}function Xa(e,t){e.uniform2uiv(this.addr,t)}function Za(e,t){e.uniform3uiv(this.addr,t)}function Qa(e,t){e.uniform4uiv(this.addr,t)}function $a(e,t,n){let r=this.cache,i=t.length,a=_a(n,i);ha(r,a)||(e.uniform1iv(this.addr,a),ga(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||ia,a[e])}function eo(e,t,n){let r=this.cache,i=t.length,a=_a(n,i);ha(r,a)||(e.uniform1iv(this.addr,a),ga(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||sa,a[e])}function to(e,t,n){let r=this.cache,i=t.length,a=_a(n,i);ha(r,a)||(e.uniform1iv(this.addr,a),ga(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ca,a[e])}function no(e,t,n){let r=this.cache,i=t.length,a=_a(n,i);ha(r,a)||(e.uniform1iv(this.addr,a),ga(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||oa,a[e])}function ro(e){switch(e){case 5126:return Ra;case 35664:return za;case 35665:return Ba;case 35666:return Va;case 35674:return Ha;case 35675:return Ua;case 35676:return Wa;case 5124:case 35670:return Ga;case 35667:case 35671:return Ka;case 35668:case 35672:return qa;case 35669:case 35673:return Ja;case 5125:return Ya;case 36294:return Xa;case 36295:return Za;case 36296:return Qa;case 35678:case 36198:case 36298:case 36306:case 35682:return $a;case 35679:case 36299:case 36307:return eo;case 35680:case 36300:case 36308:case 36293:return to;case 36289:case 36303:case 36311:case 36292:return no}}var io=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=La(t.type)}},ao=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ro(t.type)}},oo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},so=/(\w+)(\])?(\[|\.)?/g;function co(e,t){e.seq.push(t),e.map[t.id]=t}function lo(e,t,n){let r=e.name,i=r.length;for(so.lastIndex=0;;){let a=so.exec(r),o=so.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){co(n,l===void 0?new io(s,e,t):new ao(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new oo(s),co(n,e)),n=e}}}var uo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);lo(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function fo(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var po=37297,mo=0;function ho(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function go(e){let t=Ot.getPrimaries(Ot.workingColorSpace),n=Ot.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case Me:case Pe:return[r,`LinearTransferOETF`];case je:case Ne:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function _o(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ho(e.getShaderSource(t),r)}return i}function vo(e,t){let n=go(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function yo(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var bo=new K;function xo(){return Ot.getLuminanceCoefficients(bo),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${bo.x.toFixed(4)}, ${bo.y.toFixed(4)}, ${bo.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function So(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(To).join(`
`)}function Co(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function wo(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function To(e){return e!==``}function Eo(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Do(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Oo=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(e){return e.replace(Oo,jo)}var Ao=new Map;function jo(e,t){let n=J[t];if(n===void 0){let e=Ao.get(t);if(e!==void 0)n=J[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return ko(n)}var Mo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function No(e){return e.replace(Mo,Po)}function Po(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Fo(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Io(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Lo(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Ro(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function zo(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Bo(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Vo(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Io(n),l=Lo(n),u=Ro(n),d=zo(n),f=Bo(n),p=So(n),m=Co(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(To).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(To).join(`
`),_.length>0&&(_+=`
`)):(g=[Fo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(To).join(`
`),_=[Fo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:yo(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,vo(`linearToOutputTexel`,n.outputColorSpace),xo(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(To).join(`
`)),o=ko(o),o=Eo(o,n),o=Do(o,n),s=ko(s),s=Eo(s,n),s=Do(s,n),o=No(o),s=No(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=fo(i,i.VERTEX_SHADER,y),S=fo(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=_o(i,x,`vertex`),r=_o(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new uo(i,h),T=wo(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,po)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mo++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ho=0,Uo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wo(e),t.set(e,n)),n}},Wo=class{constructor(e){this.id=Ho++,this.code=e,this.usedTimes=0}};function Go(e,t,n,r,i,a,o){let s=new jn,c=new Uo,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,p=i.vertexTextures,m=i.precision,h={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function g(e){return l.add(e),e===0?`uv`:`uv${e}`}function _(a,s,u,_,v){let y=_.fog,b=v.geometry,x=a.isMeshStandardMaterial?_.environment:null,S=(a.isMeshStandardMaterial?n:t).get(a.envMap||x),C=S&&S.mapping===306?S.image.height:null,w=h[a.type];a.precision!==null&&(m=i.getMaxPrecision(a.precision),m!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,m,`instead.`));let T=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,E=T===void 0?0:T.length,D=0;b.morphAttributes.position!==void 0&&(D=1),b.morphAttributes.normal!==void 0&&(D=2),b.morphAttributes.color!==void 0&&(D=3);let O,k,A,j;if(w){let e=yi[w];O=e.vertexShader,k=e.fragmentShader}else O=a.vertexShader,k=a.fragmentShader,c.update(a),A=c.getVertexShaderID(a),j=c.getFragmentShaderID(a);let M=e.getRenderTarget(),N=v.isInstancedMesh===!0,P=v.isBatchedMesh===!0,F=!!a.map,I=!!a.matcap,L=!!S,R=!!a.aoMap,z=!!a.lightMap,ee=!!a.bumpMap,te=!!a.normalMap,B=!!a.displacementMap,ne=!!a.emissiveMap,re=!!a.metalnessMap,ie=!!a.roughnessMap,ae=a.anisotropy>0,oe=a.clearcoat>0,se=a.dispersion>0,ce=a.iridescence>0,le=a.sheen>0,V=a.transmission>0,ue=ae&&!!a.anisotropyMap,de=oe&&!!a.clearcoatMap,fe=oe&&!!a.clearcoatNormalMap,H=oe&&!!a.clearcoatRoughnessMap,pe=ce&&!!a.iridescenceMap,me=ce&&!!a.iridescenceThicknessMap,U=le&&!!a.sheenColorMap,he=le&&!!a.sheenRoughnessMap,ge=!!a.specularMap,_e=!!a.specularColorMap,ve=!!a.specularIntensityMap,ye=V&&!!a.transmissionMap,be=V&&!!a.thicknessMap,xe=!!a.gradientMap,Se=!!a.alphaMap,Ce=a.alphaTest>0,we=!!a.alphaHash,Te=!!a.extensions,Ee=0;a.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Ee=e.toneMapping);let De={shaderID:w,shaderType:a.type,shaderName:a.name,vertexShader:O,fragmentShader:k,defines:a.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:m,batching:P,batchingColor:P&&v._colorsTexture!==null,instancing:N,instancingColor:N&&v.instanceColor!==null,instancingMorph:N&&v.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:M===null?e.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Me,alphaToCoverage:!!a.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&S.mapping,envMapCubeUVHeight:C,aoMap:R,lightMap:z,bumpMap:ee,normalMap:te,displacementMap:p&&B,emissiveMap:ne,normalMapObjectSpace:te&&a.normalMapType===1,normalMapTangentSpace:te&&a.normalMapType===0,metalnessMap:re,roughnessMap:ie,anisotropy:ae,anisotropyMap:ue,clearcoat:oe,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:H,dispersion:se,iridescence:ce,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:le,sheenColorMap:U,sheenRoughnessMap:he,specularMap:ge,specularColorMap:_e,specularIntensityMap:ve,transmission:V,transmissionMap:ye,thicknessMap:be,gradientMap:xe,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ce,alphaHash:we,combine:a.combine,mapUv:F&&g(a.map.channel),aoMapUv:R&&g(a.aoMap.channel),lightMapUv:z&&g(a.lightMap.channel),bumpMapUv:ee&&g(a.bumpMap.channel),normalMapUv:te&&g(a.normalMap.channel),displacementMapUv:B&&g(a.displacementMap.channel),emissiveMapUv:ne&&g(a.emissiveMap.channel),metalnessMapUv:re&&g(a.metalnessMap.channel),roughnessMapUv:ie&&g(a.roughnessMap.channel),anisotropyMapUv:ue&&g(a.anisotropyMap.channel),clearcoatMapUv:de&&g(a.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&g(a.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(a.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(a.iridescenceThicknessMap.channel),sheenColorMapUv:U&&g(a.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(a.sheenRoughnessMap.channel),specularMapUv:ge&&g(a.specularMap.channel),specularColorMapUv:_e&&g(a.specularColorMap.channel),specularIntensityMapUv:ve&&g(a.specularIntensityMap.channel),transmissionMapUv:ye&&g(a.transmissionMap.channel),thicknessMapUv:be&&g(a.thicknessMap.channel),alphaMapUv:Se&&g(a.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(te||ae),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:v.isPoints===!0&&!!b.attributes.uv&&(F||Se),fog:!!y,useFog:a.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:v.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ee,decodeVideoTexture:F&&a.map.isVideoTexture===!0&&Ot.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Te&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Te&&a.extensions.multiDraw===!0||P)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function v(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(y(n,t),b(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function y(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function b(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.alphaToCoverage&&s.enable(20),e.push(s.mask)}function x(e){let t=h[e.type],n;if(t){let e=yi[t];n=Yr.clone(e.uniforms)}else n=e.uniforms;return n}function S(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Vo(e,n,t,a),u.push(r)),r}function C(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function w(e){c.remove(e)}function T(){c.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:T}}function Ko(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function qo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Jo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Yo(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||qo),r.length>1&&r.sort(t||Jo),i.length>1&&i.sort(t||Jo)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Xo(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Yo,e.set(t,[i])):n>=r.length?(i=new Yo,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Zo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new K,color:new fr};break;case`SpotLight`:n={position:new K,direction:new K,color:new fr,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new fr,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new fr,groundColor:new fr};break;case`RectAreaLight`:n={color:new fr,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function Qo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var $o=0;function es(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ts(e){let t=new Zo,n=Qo(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new bn,o=new bn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(es);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=$o++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ns(e){let t=new ts(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function rs(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ns(e),t.set(n,[a])):r>=i.length?(a=new ns(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var is=class extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ke,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},as=class extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},os=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ss=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cs(e,t,n){let r=new hi,i=new W,o=new W,s=new Rt,c=new is({depthPacking:Ae}),l=new as,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:os,fragmentShader:ss}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Ar;h.setAttribute(`position`,new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new q(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();if(i.multiply(g),o.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/g.x),i.x=o.x*g.x,f.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/g.y),i.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:a,magFilter:a};f.map!==null&&f.map.dispose(),f.map=new Bt(i.x,i.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),r=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let a=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Bt(i.x,i.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var ls={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function us(e){function t(){let t=!1,n=new Rt,r=null,i=new Rt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function n(){let t=!1,n=!1,r=null,i=null,a=null;return{setReversed:function(e){n=e},setTest:function(t){t?B(e.DEPTH_TEST):ne(e.DEPTH_TEST)},setMask:function(n){r!==n&&!t&&(e.depthMask(n),r=n)},setFunc:function(t){if(n&&(t=ls[t]),i!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}i=t}},setLocked:function(e){t=e},setClear:function(t){a!==t&&(e.clearDepth(t),a=t)},reset:function(){t=!1,r=null,i=null,a=null}}}function r(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?B(e.STENCIL_TEST):ne(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let i=new t,a=new n,o=new r,s=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new fr(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),j=M>=1);let P=null,F={},I=e.getParameter(e.SCISSOR_BOX),L=e.getParameter(e.VIEWPORT),R=new Rt().fromArray(I),z=new Rt().fromArray(L);function ee(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let te={};te[e.TEXTURE_2D]=ee(e.TEXTURE_2D,e.TEXTURE_2D,1),te[e.TEXTURE_CUBE_MAP]=ee(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[e.TEXTURE_2D_ARRAY]=ee(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),te[e.TEXTURE_3D]=ee(e.TEXTURE_3D,e.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),B(e.DEPTH_TEST),a.setFunc(3),V(!1),ue(1),B(e.CULL_FACE),ce(0);function B(t){l[t]!==!0&&(e.enable(t),l[t]=!0)}function ne(t){l[t]!==!1&&(e.disable(t),l[t]=!1)}function re(t,n){return u[t]!==n&&(e.bindFramebuffer(t,n),u[t]=n,t===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=n),!0)}function ie(t,n){let r=f,i=!1;if(t){r=d.get(n),r===void 0&&(r=[],d.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ae(t){return p!==t&&(e.useProgram(t),p=t,!0)}let oe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};oe[103]=e.MIN,oe[104]=e.MAX;let se={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ce(t,n,r,i,a,o,s,c,l,u){if(t===0)m===!0&&(ne(e.BLEND),m=!1);else if(m===!1&&(B(e.BLEND),m=!0),t!==5){if(t!==h||u!==w){if((g!==100||y!==100)&&(e.blendEquation(e.FUNC_ADD),g=100,y=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}_=null,v=null,b=null,x=null,S.set(0,0,0),C=0,h=t,w=u}}else a||=n,o||=r,s||=i,(n!==g||a!==y)&&(e.blendEquationSeparate(oe[n],oe[a]),g=n,y=a),(r!==_||i!==v||o!==b||s!==x)&&(e.blendFuncSeparate(se[r],se[i],se[o],se[s]),_=r,v=i,b=o,x=s),(c.equals(S)===!1||l!==C)&&(e.blendColor(c.r,c.g,c.b,l),S.copy(c),C=l),h=t,w=!1}function le(t,n){t.side===2?ne(e.CULL_FACE):B(e.CULL_FACE);let r=t.side===1;n&&(r=!r),V(r),t.blending===1&&t.transparent===!1?ce(0):ce(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),a.setFunc(t.depthFunc),a.setTest(t.depthTest),a.setMask(t.depthWrite),i.setMask(t.colorWrite);let s=t.stencilWrite;o.setTest(s),s&&(o.setMask(t.stencilWriteMask),o.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),o.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),fe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?B(e.SAMPLE_ALPHA_TO_COVERAGE):ne(e.SAMPLE_ALPHA_TO_COVERAGE)}function V(t){T!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),T=t)}function ue(t){t===0?ne(e.CULL_FACE):(B(e.CULL_FACE),t!==E&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),E=t}function de(t){t!==D&&(j&&e.lineWidth(t),D=t)}function fe(t,n,r){t?(B(e.POLYGON_OFFSET_FILL),(O!==n||k!==r)&&(e.polygonOffset(n,r),O=n,k=r)):ne(e.POLYGON_OFFSET_FILL)}function H(t){t?B(e.SCISSOR_TEST):ne(e.SCISSOR_TEST)}function pe(t){t===void 0&&(t=e.TEXTURE0+A-1),P!==t&&(e.activeTexture(t),P=t)}function me(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+A-1:P);let i=F[r];i===void 0&&(i={type:void 0,texture:void 0},F[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||te[t]),i.type=t,i.texture=n)}function U(){let t=F[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function he(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ge(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function _e(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ve(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(t){R.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),R.copy(t))}function Ee(t){z.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),z.copy(t))}function De(t,n){let r=c.get(n);r===void 0&&(r=new WeakMap,c.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Oe(t,n){let r=c.get(n).get(t);s.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),s.set(n,r))}function ke(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),l={},P=null,F={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new fr(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,R.set(0,0,e.canvas.width,e.canvas.height),z.set(0,0,e.canvas.width,e.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:B,disable:ne,bindFramebuffer:re,drawBuffers:ie,useProgram:ae,setBlending:ce,setMaterial:le,setFlipSided:V,setCullFace:ue,setLineWidth:de,setPolygonOffset:fe,setScissorTest:H,activeTexture:pe,bindTexture:me,unbindTexture:U,compressedTexImage2D:he,compressedTexImage3D:ge,texImage2D:Ce,texImage3D:we,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:xe,texStorage3D:Se,texSubImage2D:_e,texSubImage3D:ve,compressedTexSubImage2D:ye,compressedTexSubImage3D:be,scissor:Te,viewport:Ee,reset:ke}}function ds(e,t,n,r){let i=fs(r);switch(n){case C:return e*t;case E:return e*t;case D:return e*t*2;case A:return e*t/i.components*i.byteLength;case j:return e*t/i.components*i.byteLength;case M:return e*t*2/i.components*i.byteLength;case N:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case P:return e*t*4/i.components*i.byteLength;case F:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case L:case R:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ee:case B:return Math.max(e,16)*Math.max(t,8)/4;case z:case te:return Math.max(e,8)*Math.max(t,8)/2;case ne:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case se:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ce:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case le:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case V:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ue:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case de:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case fe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case H:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case pe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case me:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case U:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case he:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ge:case _e:case ve:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ye:case be:return Math.ceil(e/4)*Math.ceil(t/4)*8;case xe:case Se:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function fs(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function ps(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new W,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):_t(`canvas`)}function w(e,t,n){let r=1,i=xe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps&&e.minFilter!==1003&&e.minFilter!==1006}function E(t){e.generateMipmap(t)}function D(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),r===e.RGBA){let t=o?Fe:Ot.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function O(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),N(t),t.isVideoTexture&&y.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),F(t)}function N(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&P(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function P(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=x.get(r);delete i[n.__cacheKey],h.memory.textures--}function F(t){let n=f.get(t);if(t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let I=0;function L(){I=0}function R(){let e=I;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),I+=1,e}function z(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ee(t,n){let r=f.get(t);if(t.isVideoTexture&&ye(t),t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{ce(r,t,n);return}}d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function te(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?ce(r,t,n):d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function B(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?ce(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function ne(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?le(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let re={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},ie={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},ae={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function oe(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,re[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,re[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,re[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ie[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ie[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ae[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function se(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,j));let i=n.source,a=x.get(i);a===void 0&&(a={},x.set(i,a));let o=z(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&P(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function ce(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=se(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){d.activeTexture(e.TEXTURE0+r);let t=Ot.getPrimaries(Ot.workingColorSpace),c=n.colorSpace===``?null:Ot.getPrimaries(n.colorSpace),l=n.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=w(n.image,!1,p.maxTextureSize);u=be(n,u);let f=m.convert(n.format,n.colorSpace),h=m.convert(n.type),g=D(n.internalFormat,f,h,n.colorSpace,n.isVideoTexture);oe(i,n);let _,v=n.mipmaps,y=n.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=A(n,u);if(n.isDepthTexture)g=O(n.format===k,n.type),b&&(y?d.texStorage2D(e.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(n.isDataTexture){if(v.length>0){y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data);n.generateMipmaps=!1}else y?(b&&d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height),x&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,u.width,u.height,f,h,u.data)):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){y&&b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let t=0,r=v.length;t<r;t++)if(_=v[t],n.format!==1023){if(f!==null){if(y){if(x){if(n.layerUpdates.size>0){let r=ds(_.width,_.height,n.format,n.type);for(let i of n.layerUpdates){let n=_.data.subarray(i*r/_.data.BYTES_PER_ELEMENT,(i+1)*r/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,_.width,_.height,1,f,n,0,0)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,_.data,0,0)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,_.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}}else if(n.isDataArrayTexture){if(y){if(b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x){if(n.layerUpdates.size>0){let t=ds(u.width,u.height,n.format,n.type);for(let r of n.layerUpdates){let n=u.data.subarray(r*t/u.data.BYTES_PER_ELEMENT,(r+1)*t/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,u.width,u.height,1,f,h,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data)}else if(n.isData3DTexture)y?(b&&d.texStorage3D(e.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(e.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(n.isFramebufferTexture){if(b){if(y)d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height);else{let t=u.width,n=u.height;for(let r=0;r<S;r++)d.texImage2D(e.TEXTURE_2D,r,g,t,n,0,f,h,null),t>>=1,n>>=1}}}else if(v.length>0){if(y&&b){let t=xe(v[0]);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f,h,_):d.texImage2D(e.TEXTURE_2D,t,g,f,h,_);n.generateMipmaps=!1}else if(y){if(b){let t=xe(u);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}x&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(e.TEXTURE_2D,0,g,f,h,u);T(n)&&E(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function le(t,n,r){if(n.image.length!==6)return;let i=se(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Ot.getPrimaries(Ot.workingColorSpace),s=n.colorSpace===``?null:Ot.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=w(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=be(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=D(n.internalFormat,g,_,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=A(n,h);oe(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=xe(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}T(n)&&E(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function V(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=D(r.internalFormat,s,c,r.colorSpace);if(!f.get(n).__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),ve(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,f.get(r).__webglTexture,0,_e(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,f.get(r).__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=O(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=_e(n);ve(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,c,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,c,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=D(a.internalFormat,o,s,a.colorSpace),l=_e(n);r&&ve(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,n.width,n.height):ve(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function de(t,n){if(n&&n.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);f.get(n.depthTexture).__webglTexture&&n.depthTexture.image.width===n.width&&n.depthTexture.image.height===n.height||(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),ee(n.depthTexture,0);let r=f.get(n.depthTexture).__webglTexture,i=_e(n);if(n.depthTexture.format===1026)ve(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0,i):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0);else if(n.depthTexture.format===1027)ve(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,r,0,i):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,r,0);else throw Error(`Unknown depthTexture format`)}function fe(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)throw Error(`target.depthTexture not supported in Cube render targets`);de(n.__webglFramebuffer,t)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),ue(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),ue(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}d.bindFramebuffer(e.FRAMEBUFFER,null)}function H(t,n,r){let i=f.get(t);n!==void 0&&V(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&fe(t)}function pe(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,M);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&ve(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=D(i.internalFormat,o,s,i.colorSpace,t.isXRRenderTarget===!0),l=_e(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),ue(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),oe(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)V(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else V(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);T(n)&&E(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i);d.bindTexture(e.TEXTURE_2D,o.__webglTexture),oe(e.TEXTURE_2D,i),V(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,e.TEXTURE_2D,0),T(i)&&E(e.TEXTURE_2D)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),oe(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)V(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else V(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);T(n)&&E(a),d.unbindTexture()}t.depthBuffer&&fe(t)}function me(t){let n=t.textures;for(let r=0,i=n.length;r<i;r++){let i=n[r];if(T(i)){let n=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,r=f.get(i).__webglTexture;d.bindTexture(n,r),E(n),d.unbindTexture()}}}let U=[],he=[];function ge(t){if(t.samples>0){if(ve(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(U.length=0,he.length=0,U.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(U.push(o),he.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,he)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,U))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function _e(e){return Math.min(p.maxSamples,e.samples)}function ve(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ye(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function be(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ot.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function xe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=R,this.resetTextureUnits=L,this.setTexture2D=ee,this.setTexture2DArray=te,this.setTexture3D=B,this.setTextureCube=ne,this.rebindTextures=H,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=V,this.useMultisampledRTT=ve}function ms(e,t){function n(n,r=``){let i,a=Ot.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var hs=class extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},X=class extends qn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},gs={type:`move`},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new X,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new X,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new X,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gs)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new X;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vs=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ys=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bs=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Lt,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qr({vertexShader:vs,fragmentShader:ys,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xs=class extends Ve{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=new bs,_=t.getContextAttributes(),v=null,y=null,b=[],S=[],C=new W,w=null,E=new ri;E.layers.enable(1),E.viewport=new Rt;let D=new ri;D.layers.enable(2),D.viewport=new Rt;let A=[E,D],j=new hs;j.layers.enable(1),j.layers.enable(2);let M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new _s,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new _s,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new _s,b[e]=t),t.getHandSpace()};function P(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function F(){r.removeEventListener(`select`,P),r.removeEventListener(`selectstart`,P),r.removeEventListener(`selectend`,P),r.removeEventListener(`squeeze`,P),r.removeEventListener(`squeezestart`,P),r.removeEventListener(`squeezeend`,P),r.removeEventListener(`end`,F),r.removeEventListener(`inputsourceschange`,I);for(let e=0;e<b.length;e++){let t=S[e];t!==null&&(S[e]=null,b[e].disconnect(t))}M=null,N=null,h.reset(),e.setRenderTarget(v),p=null,f=null,u=null,r=null,y=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,P),r.addEventListener(`selectstart`,P),r.addEventListener(`selectend`,P),r.addEventListener(`squeeze`,P),r.addEventListener(`squeezestart`,P),r.addEventListener(`squeezeend`,P),r.addEventListener(`end`,F),r.addEventListener(`inputsourceschange`,I),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Bt(p.framebufferWidth,p.framebufferHeight,{format:T,type:d,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?k:O,a=_.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Bt(f.textureWidth,f.textureHeight,{format:T,type:d,depthTexture:new ra(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function I(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let L=new K,R=new K;function z(e,t,n){L.setFromMatrixPosition(t.matrixWorld),R.setFromMatrixPosition(n.matrixWorld);let r=L.distanceTo(R),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ee(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),j.near=D.near=E.near=t,j.far=D.far=E.far=n,(M!==j.near||N!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,N=j.far);let i=e.parent,a=j.cameras;ee(j,i);for(let e=0;e<a.length;e++)ee(a[e],i);a.length===2?z(j,E,D):j.projectionMatrix.copy(E.projectionMatrix),te(e,j,i)};function te(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ge*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)};let B=null;function ne(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let n=!1;t.length!==j.cameras.length&&(j.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(p!==null)a=p.getViewport(i);else{let t=u.getViewSubImage(f,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(y,t.colorTexture,f.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(y))}let o=A[r];o===void 0&&(o=new ri,o.layers.enable(r),o.viewport=new Rt,A[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),n===!0&&j.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&h.init(e,n,r.renderState)}}for(let e=0;e<b.length;e++){let t=S[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}B&&B(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let re=new gi;re.setAnimationLoop(ne),this.setAnimationLoop=function(e){B=e},this.dispose=function(){}}},Ss=new An,Cs=new bn;function ws(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Jr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Ss.copy(o),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),e.envMapRotation.value.setFromMatrix4(Cs.makeRotationFromEuler(Ss)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ts(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Es=class{constructor(e={}){let{canvas:t=vt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),h=new Int32Array(4),g=null,_=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=0,this.toneMappingExposure=1;let x=this,S=!1,C=0,w=0,T=null,E=-1,D=null,O=new Rt,k=new Rt,A=null,j=new fr(0),M=0,N=t.width,P=t.height,F=1,I=null,L=null,R=new Rt(0,0,N,P),z=new Rt(0,0,N,P),ee=!1,te=new hi,B=!1,ne=!1,re=new bn,ie=new bn,ae=new K,oe=new Rt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function le(){return T===null?F:1}let V=n;function ue(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r169`),t.addEventListener(`webglcontextlost`,Le,!1),t.addEventListener(`webglcontextrestored`,Re,!1),t.addEventListener(`webglcontextcreationerror`,ze,!1),V===null){let t=`webgl2`;if(V=ue(t,e),V===null)throw ue(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let de,fe,H,pe,me,U,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,Ne,Pe;function Fe(){de=new Zi(V),de.init(),Ae=new ms(V,de),fe=new Ei(V,de,e,Ae),H=new us(V),fe.reverseDepthBuffer&&H.buffers.depth.setReversed(!0),pe=new ea(V),me=new Ko,U=new ps(V,de,H,me,fe,Ae,pe),he=new Oi(x),ge=new Xi(x),_e=new _i(V),Ne=new wi(V,_e),ve=new Qi(V,_e,pe,Ne),ye=new na(V,ve,_e,pe),De=new ta(V,fe,U),we=new Di(me),be=new Go(x,he,ge,de,fe,Ne,we),xe=new ws(x,me),Se=new Xo,Ce=new rs(de),Ee=new Ci(x,he,ge,H,ye,p,s),Te=new cs(x,ye,fe),Pe=new Ts(V,pe,fe,H),Oe=new Ti(V,de,pe),ke=new $i(V,de,pe),pe.programs=be.programs,x.capabilities=fe,x.extensions=de,x.properties=me,x.renderLists=Se,x.shadowMap=Te,x.state=H,x.info=pe}Fe();let Ie=new xs(x,V);this.xr=Ie,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=de.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=de.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(e){e!==void 0&&(F=e,this.setSize(N,P,!1))},this.getSize=function(e){return e.set(N,P)},this.setSize=function(e,n,r=!0){Ie.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(N=e,P=n,t.width=Math.floor(e*F),t.height=Math.floor(n*F),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(N*F,P*F).floor()},this.setDrawingBufferSize=function(e,n,r){N=e,P=n,F=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(O)},this.getViewport=function(e){return e.copy(R)},this.setViewport=function(e,t,n,r){e.isVector4?R.set(e.x,e.y,e.z,e.w):R.set(e,t,n,r),H.viewport(O.copy(R).multiplyScalar(F).round())},this.getScissor=function(e){return e.copy(z)},this.setScissor=function(e,t,n,r){e.isVector4?z.set(e.x,e.y,e.z,e.w):z.set(e,t,n,r),H.scissor(k.copy(z).multiplyScalar(F).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(e){H.setScissorTest(ee=e)},this.setOpaqueSort=function(e){I=e},this.setTransparentSort=function(e){L=e},this.getClearColor=function(e){return e.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(T!==null){let t=T.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=T.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Ee.getClearColor(),r=Ee.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(m[0]=i,m[1]=a,m[2]=o,m[3]=r,V.clearBufferuiv(V.COLOR,0,m)):(h[0]=i,h[1]=a,h[2]=o,h[3]=r,V.clearBufferiv(V.COLOR,0,h))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT,V.clearDepth(+!this.capabilities.reverseDepthBuffer)),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Le,!1),t.removeEventListener(`webglcontextrestored`,Re,!1),t.removeEventListener(`webglcontextcreationerror`,ze,!1),Se.dispose(),Ce.dispose(),me.dispose(),he.dispose(),ge.dispose(),ye.dispose(),Ne.dispose(),Pe.dispose(),be.dispose(),Ie.dispose(),Ie.removeEventListener(`sessionstart`,Ke),Ie.removeEventListener(`sessionend`,qe),Je.stop()};function Le(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),S=!0}function Re(){console.log(`THREE.WebGLRenderer: Context Restored.`),S=!1;let e=pe.autoReset,t=Te.enabled,n=Te.autoUpdate,r=Te.needsUpdate,i=Te.type;Fe(),pe.autoReset=e,Te.enabled=t,Te.autoUpdate=n,Te.needsUpdate=r,Te.type=i}function ze(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Be(e){let t=e.target;t.removeEventListener(`dispose`,Be),Ve(t)}function Ve(e){He(e),me.remove(e)}function He(e){let t=me.get(e).programs;t!==void 0&&(t.forEach(function(e){be.releaseProgram(e)}),e.isShaderMaterial&&be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=se);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=rt(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ne.setup(i,r,s,n,c);let h,g=Oe;if(c!==null&&(h=_e.get(c),g=ke,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*le()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*le()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(de.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?_e.get(c).bytesPerElement:1,o=me.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ue(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,et(e,t,n),e.side=0,e.needsUpdate=!0,et(e,t,n),e.side=2):et(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),_=Ce.get(n),_.init(t),b.push(_),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(_.pushLight(e),e.castShadow&&_.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(_.pushLight(e),e.castShadow&&_.pushShadow(e))}),_.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ue(a,n,e),r.add(a)}else Ue(t,n,e),r.add(t)}}),b.pop(),_=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){me.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}de.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let We=null;function Ge(e){We&&We(e)}function Ke(){Je.stop()}function qe(){Je.start()}let Je=new gi;Je.setAnimationLoop(Ge),typeof self<`u`&&Je.setContext(self),this.setAnimationLoop=function(e){We=e,Ie.setAnimationLoop(e),e===null?Je.stop():Je.start()},Ie.addEventListener(`sessionstart`,Ke),Ie.addEventListener(`sessionend`,qe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(S===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(t),t=Ie.getCamera()),e.isScene===!0&&e.onBeforeRender(x,e,t,T),_=Ce.get(e,b.length),_.init(t),b.push(_),ie.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),te.setFromProjectionMatrix(ie),ne=this.localClippingEnabled,B=we.init(this.clippingPlanes,ne),g=Se.get(e,y.length),g.init(),y.push(g),Ie.enabled===!0&&Ie.isPresenting===!0){let e=x.xr.getDepthSensingMesh();e!==null&&Ye(e,t,-1/0,x.sortObjects)}Ye(e,t,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(I,L),ce=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,ce&&Ee.addToRenderList(g,e),this.info.render.frame++,B===!0&&we.beginShadows();let n=_.state.shadowsArray;Te.render(n,e,t),B===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=g.opaque,i=g.transmissive;if(_.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];Ze(r,i,e,a)}ce&&Ee.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Xe(g,e,r,r.viewport)}}else i.length>0&&Ze(r,i,e,t),ce&&Ee.render(e),Xe(g,e,t);T!==null&&(U.updateMultisampleRenderTarget(T),U.updateRenderTargetMipmap(T)),e.isScene===!0&&e.onAfterRender(x,e,t),Ne.resetDefaultState(),E=-1,D=null,b.pop(),b.length>0?(_=b[b.length-1],B===!0&&we.setGlobalState(x.clippingPlanes,_.state.camera)):_=null,y.pop(),g=y.length>0?y[y.length-1]:null};function Ye(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)_.pushLight(e),e.castShadow&&_.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||te.intersectsSprite(e)){r&&oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ie);let t=ye.update(e),i=e.material;i.visible&&g.push(e,t,i,n,oe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||te.intersectsObject(e))){let t=ye.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),oe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),oe.copy(e.boundingSphere.center)),oe.applyMatrix4(e.matrixWorld).applyMatrix4(ie)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&g.push(e,t,s,n,oe.z,o)}}else i.visible&&g.push(e,t,i,n,oe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ye(i[e],t,n,r)}function Xe(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;_.setupLightsView(n),B===!0&&we.setGlobalState(x.clippingPlanes,n),r&&H.viewport(O.copy(r)),i.length>0&&Qe(i,t,n),a.length>0&&Qe(a,t,n),o.length>0&&Qe(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Ze(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[r.id]===void 0&&(_.state.transmissionRenderTarget[r.id]=new Bt(1,1,{generateMipmaps:!0,type:de.has(`EXT_color_buffer_half_float`)||de.has(`EXT_color_buffer_float`)?v:d,minFilter:u,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace}));let a=_.state.transmissionRenderTarget[r.id],o=r.viewport||O;a.setSize(o.z,o.w);let s=x.getRenderTarget();x.setRenderTarget(a),x.getClearColor(j),M=x.getClearAlpha(),M<1&&x.setClearColor(16777215,.5),x.clear(),ce&&Ee.render(n);let c=x.toneMapping;x.toneMapping=0;let l=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),_.setupLightsView(r),B===!0&&we.setGlobalState(x.clippingPlanes,r),Qe(e,n,r),U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a),de.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,$e(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a))}x.setRenderTarget(s),x.setClearColor(j,M),l!==void 0&&(r.viewport=l),x.toneMapping=c}function Qe(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&$e(o,t,n,s,c,l)}}function $e(e,t,n,r,i,a){e.onBeforeRender(x,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(x,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=2):x.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(x,t,n,r,i,a)}function et(e,t,n){t.isScene!==!0&&(t=se);let r=me.get(e),i=_.state.lights,a=_.state.shadowsArray,o=i.state.version,s=be.getParameters(e,i.state,a,t,n),c=be.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?ge:he).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Be),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return nt(e,s),u}else s.uniforms=be.getUniforms(e),e.onBeforeCompile(s,x),u=be.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=we.uniform),nt(e,s),r.needsLights=at(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=uo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function nt(e,t){let n=me.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function rt(e,t,n,r,i){t.isScene!==!0&&(t=se),U.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Me,c=(r.isMeshStandardMaterial?ge:he).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(m=x.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,v=me.get(r),y=_.state.lights;if(B===!0&&(ne===!0||e!==D)){let t=e===D&&r.id===E;we.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===c?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==we.numPlanes||v.numIntersection!==we.numIntersection)?b=!0:v.vertexAlphas===l&&v.vertexTangents===u&&v.morphTargets===d&&v.morphNormals===f&&v.morphColors===p&&v.toneMapping===m?v.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=et(r,t,i));let C=!1,w=!1,O=!1,k=S.getUniforms(),A=v.uniforms;if(H.useProgram(S.program)&&(C=!0,w=!0,O=!0),r.id!==E&&(E=r.id,w=!0),C||D!==e){fe.reverseDepthBuffer?(re.copy(e.projectionMatrix),St(re),Ct(re),k.setValue(V,`projectionMatrix`,re)):k.setValue(V,`projectionMatrix`,e.projectionMatrix),k.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(V,ae.setFromMatrixPosition(e.matrixWorld)),fe.logarithmicDepthBuffer&&k.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),D!==e&&(D=e,w=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(V,i,`bindMatrix`),k.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(V,`boneTexture`,e.boneTexture,U))}i.isBatchedMesh&&(k.setOptional(V,i,`batchingTexture`),k.setValue(V,`batchingTexture`,i._matricesTexture,U),k.setOptional(V,i,`batchingIdTexture`),k.setValue(V,`batchingIdTexture`,i._indirectTexture,U),k.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(V,`batchingColorTexture`,i._colorsTexture,U));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&De.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(V,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),w&&(k.setValue(V,`toneMappingExposure`,x.toneMappingExposure),v.needsLights&&it(A,O),a&&r.fog===!0&&xe.refreshFogUniforms(A,a),xe.refreshMaterialUniforms(A,r,F,P,_.state.transmissionRenderTarget[e.id]),uo.upload(V,tt(v),A,U)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(uo.upload(V,tt(v),A,U),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(V,`center`,i.center),k.setValue(V,`modelViewMatrix`,i.modelViewMatrix),k.setValue(V,`normalMatrix`,i.normalMatrix),k.setValue(V,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Pe.update(n,S),Pe.bind(n,S)}}return S}function it(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function at(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(e,t,n){me.get(e.texture).__webglTexture=t,me.get(e.depthTexture).__webglTexture=n;let r=me.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||de.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=me.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){T=e,C=t,w=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=me.get(e);if(s.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(V.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)U.setupRenderTarget(e);else if(s.__hasExternalTextures)U.rebindTextures(e,me.get(e.texture).__webglTexture,me.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&me.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);U.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=me.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&U.useMultisampledRTT(e)===!1?me.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,O.copy(e.viewport),k.copy(e.scissor),A=e.scissorTest}else O.copy(R).multiplyScalar(F).floor(),k.copy(z).multiplyScalar(F).floor(),A=ee;if(H.bindFramebuffer(V.FRAMEBUFFER,i)&&r&&H.drawBuffers(e,i),H.viewport(O),H.scissor(k),H.setScissorTest(A),a){let r=me.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=me.get(e.texture),i=t||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}E=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=me.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){H.bindFramebuffer(V.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!fe.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!fe.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,Ae.convert(s),Ae.convert(c),a)}finally{let e=T===null?null:me.get(T).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=me.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!fe.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!fe.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,s);let e=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,e),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),V.readPixels(t,n,r,i,Ae.convert(c),Ae.convert(l),0);let o=T===null?null:me.get(T).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,o);let u=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await xt(V,u,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,e),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.deleteBuffer(e),V.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(bt(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;U.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(bt(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u;n===null?(a=e.image.width,o=e.image.height,s=0,c=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.min.x,c=n.min.y),r===null?(l=0,u=0):(l=r.x,u=r.y);let d=Ae.convert(t.format),f=Ae.convert(t.type);U.setTexture2D(t,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let p=V.getParameter(V.UNPACK_ROW_LENGTH),m=V.getParameter(V.UNPACK_IMAGE_HEIGHT),h=V.getParameter(V.UNPACK_SKIP_PIXELS),g=V.getParameter(V.UNPACK_SKIP_ROWS),_=V.getParameter(V.UNPACK_SKIP_IMAGES),v=e.isCompressedTexture?e.mipmaps[i]:e.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,v.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,v.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,s),V.pixelStorei(V.UNPACK_SKIP_ROWS,c),e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,i,l,u,a,o,d,f,v.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,i,l,u,v.width,v.height,d,v.data):V.texSubImage2D(V.TEXTURE_2D,i,l,u,a,o,d,f,v),V.pixelStorei(V.UNPACK_ROW_LENGTH,p),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,m),V.pixelStorei(V.UNPACK_SKIP_PIXELS,h),V.pixelStorei(V.UNPACK_SKIP_ROWS,g),V.pixelStorei(V.UNPACK_SKIP_IMAGES,_),i===0&&t.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(bt(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.max.z-n.min.z,c=n.min.x,l=n.min.y,u=n.min.z),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Ae.convert(t.format),g=Ae.convert(t.type),_;if(t.isData3DTexture)U.setTexture3D(t,0),_=V.TEXTURE_3D;else if(t.isDataArrayTexture||t.isCompressedArrayTexture)U.setTexture2DArray(t,0),_=V.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let v=V.getParameter(V.UNPACK_ROW_LENGTH),y=V.getParameter(V.UNPACK_IMAGE_HEIGHT),b=V.getParameter(V.UNPACK_SKIP_PIXELS),x=V.getParameter(V.UNPACK_SKIP_ROWS),S=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,m.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,m.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,c),V.pixelStorei(V.UNPACK_SKIP_ROWS,l),V.pixelStorei(V.UNPACK_SKIP_IMAGES,u),e.isDataTexture||e.isData3DTexture?V.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):V.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m),V.pixelStorei(V.UNPACK_ROW_LENGTH,v),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,y),V.pixelStorei(V.UNPACK_SKIP_PIXELS,b),V.pixelStorei(V.UNPACK_SKIP_ROWS,x),V.pixelStorei(V.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&V.generateMipmap(_),H.unbindTexture()},this.initRenderTarget=function(e){me.get(e).__webglFramebuffer===void 0&&U.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?U.setTextureCube(e,0):e.isData3DTexture?U.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?U.setTexture2DArray(e,0):U.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,H.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Be}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=Ot.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}},Ds=class extends qn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Os=class extends hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new fr(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ks=new K,As=new K,js=new bn,Ms=new yn,Ns=new dn,Ps=new K,Fs=new K,Is=class extends qn{constructor(e=new Ar,t=new Os){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ks.fromBufferAttribute(t,e-1),As.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ks.distanceTo(As);e.setAttribute(`lineDistance`,new Sr(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=i,e.ray.intersectsSphere(Ns)===!1)return;js.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(js);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ls(this,e,Ms,s,n,r);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ls(this,e,Ms,s,i,a);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ls(this,e,Ms,s,i,i+1);n&&t.push(n)}if(this.isLineLoop){let i=Ls(this,e,Ms,s,r-1,n);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ls(e,t,n,r,i,a){let o=e.geometry.attributes.position;if(ks.fromBufferAttribute(o,i),As.fromBufferAttribute(o,a),n.distanceSqToSegment(ks,As,Ps,Fs)>r)return;Ps.applyMatrix4(e.matrixWorld);let s=t.ray.origin.distanceTo(Ps);if(!(s<t.near||s>t.far))return{distance:s,point:Fs.clone().applyMatrix4(e.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:e}}var Rs=class extends Lt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},zs=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new W:new K);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new K,r=[],i=[],a=[],o=new K,s=new bn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new K)}i[0]=new K,a[0]=new K;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(qe(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(qe(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Bs=class extends zs{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new W){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vs=class extends Bs{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Hs(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Us=new K,Ws=new Hs,Gs=new Hs,Ks=new Hs,qs=class extends zs{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new K){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Us.subVectors(r[0],r[1]).add(r[0]),c=Us);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Us.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Us),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ws.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Gs.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ks.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ws.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Gs.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ks.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ws.calc(s),Gs.calc(s),Ks.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Js(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ys(e,t){let n=1-e;return n*n*t}function Xs(e,t){return 2*(1-e)*e*t}function Zs(e,t){return e*e*t}function Qs(e,t,n,r){return Ys(e,t)+Xs(e,n)+Zs(e,r)}function $s(e,t){let n=1-e;return n*n*n*t}function ec(e,t){let n=1-e;return 3*n*n*e*t}function tc(e,t){return 3*(1-e)*e*e*t}function nc(e,t){return e*e*e*t}function rc(e,t,n,r,i){return $s(e,t)+ec(e,n)+tc(e,r)+nc(e,i)}var ic=class extends zs{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(rc(e,r.x,i.x,a.x,o.x),rc(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ac=class extends zs{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(rc(e,r.x,i.x,a.x,o.x),rc(e,r.y,i.y,a.y,o.y),rc(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oc=class extends zs{constructor(e=new W,t=new W){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sc=class extends zs{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cc=class extends zs{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Qs(e,r.x,i.x,a.x),Qs(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lc=class extends zs{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Qs(e,r.x,i.x,a.x),Qs(e,r.y,i.y,a.y),Qs(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uc=class extends zs{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new W){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Js(o,s.x,c.x,l.x,u.x),Js(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this}},dc=Object.freeze({__proto__:null,ArcCurve:Vs,CatmullRomCurve3:qs,CubicBezierCurve:ic,CubicBezierCurve3:ac,EllipseCurve:Bs,LineCurve:oc,LineCurve3:sc,QuadraticBezierCurve:cc,QuadraticBezierCurve3:lc,SplineCurve:uc}),fc=class extends zs{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new dc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new dc[n.type]().fromJSON(n))}return this}},pc=class extends fc{constructor(e){super(),this.type=`Path`,this.currentPoint=new W,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new oc(this.currentPoint.clone(),new W(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new cc(this.currentPoint.clone(),new W(e,t),new W(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ic(this.currentPoint.clone(),new W(e,t),new W(n,r),new W(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new uc([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Bs(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},mc=class e extends Ar{constructor(e=[new W(0,-.5),new W(.5,0),new W(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=qe(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new K,d=new W,f=new K,p=new K,m=new K,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Sr(a,3)),this.setAttribute(`uv`,new Sr(o,2)),this.setAttribute(`normal`,new Sr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},hc=class e extends mc{constructor(e=1,t=1,n=4,r=8){let i=new pc;i.absarc(0,-t/2,e,Math.PI*1.5,0),i.absarc(0,t/2,e,0,Math.PI*.5),super(i.getPoints(n),r),this.type=`CapsuleGeometry`,this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(t){return new e(t.radius,t.length,t.capSegments,t.radialSegments)}},gc=class e extends Ar{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new K,l=new W;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Sr(a,3)),this.setAttribute(`normal`,new Sr(o,3)),this.setAttribute(`uv`,new Sr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_c=class e extends Ar{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Sr(u,3)),this.setAttribute(`normal`,new Sr(d,3)),this.setAttribute(`uv`,new Sr(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let i=m[r][n],a=m[r+1][n],o=m[r+1][n+1],s=m[r][n+1];e>0&&(l.push(i,a,s),v+=3),t>0&&(l.push(a,o,s),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new W,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vc=class extends pc{constructor(e){super(e),this.uuid=Ke(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new pc().fromJSON(n))}return this}},yc={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=bc(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=Dc(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return Sc(a,o,n,s,c,p,0),o}};function bc(e,t,n,r,i){let a,o;if(i===Xc(e,t,n,r)>0)for(a=t;a<n;a+=r)o=qc(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=qc(a,e[a],e[a+1],o);return o&&zc(o,o.next)&&(Jc(o),o=o.next),o}function xc(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(zc(n,n.next)||Rc(n.prev,n,n.next)===0)){if(Jc(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Sc(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Mc(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;)if(c=e.prev,l=e.next,a?wc(e,r,i,a):Cc(e))t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),Jc(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Tc(xc(e),t,n),Sc(e,t,n,r,i,a,2)):o===2&&Ec(e,t,n,r,i,a):Sc(xc(e),t,n,r,i,a,1);break}}function Cc(e){let t=e.prev,n=e,r=e.next;if(Rc(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ic(i,s,a,c,o,l,m.x,m.y)&&Rc(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function wc(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Rc(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=Pc(p,m,t,n,r),v=Pc(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ic(s,u,c,d,l,f,y.x,y.y)&&Rc(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ic(s,u,c,d,l,f,b.x,b.y)&&Rc(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ic(s,u,c,d,l,f,y.x,y.y)&&Rc(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ic(s,u,c,d,l,f,b.x,b.y)&&Rc(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Tc(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!zc(i,a)&&Bc(i,r,r.next,a)&&Wc(i,a)&&Wc(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),Jc(r),Jc(r.next),r=e=a),r=r.next}while(r!==e);return xc(r)}function Ec(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Lc(o,e)){let s=Kc(o,e);o=xc(o,o.next),s=xc(s,s.next),Sc(o,t,n,r,i,a,0),Sc(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Dc(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=bc(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(Fc(l));for(i.sort(Oc),a=0;a<i.length;a++)n=kc(i[a],n);return n}function Oc(e,t){return e.x-t.x}function kc(e,t){let n=Ac(e,t);if(!n)return t;let r=Kc(n,e);return xc(r,r.next),xc(n,n.next)}function Ac(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&Ic(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),Wc(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&jc(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function jc(e,t){return Rc(e.prev,e,t.prev)<0&&Rc(t.next,e,e.next)<0}function Mc(e,t,n,r){let i=e;do i.z===0&&(i.z=Pc(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Nc(i)}function Nc(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function Pc(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Fc(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ic(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Lc(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Uc(e,t)&&(Wc(e,t)&&Wc(t,e)&&Gc(e,t)&&(Rc(e.prev,e,t.prev)||Rc(e,t.prev,t))||zc(e,t)&&Rc(e.prev,e,e.next)>0&&Rc(t.prev,t,t.next)>0)}function Rc(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function zc(e,t){return e.x===t.x&&e.y===t.y}function Bc(e,t,n,r){let i=Hc(Rc(e,t,n)),a=Hc(Rc(e,t,r)),o=Hc(Rc(n,r,e)),s=Hc(Rc(n,r,t));return!!(i!==a&&o!==s||i===0&&Vc(e,n,t)||a===0&&Vc(e,r,t)||o===0&&Vc(n,e,r)||s===0&&Vc(n,t,r))}function Vc(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Hc(e){return e>0?1:e<0?-1:0}function Uc(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Bc(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Wc(e,t){return Rc(e.prev,e,e.next)<0?Rc(e,t,e.next)>=0&&Rc(e,e.prev,t)>=0:Rc(e,t,e.prev)<0||Rc(e,e.next,t)<0}function Gc(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Kc(e,t){let n=new Yc(e.i,e.x,e.y),r=new Yc(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function qc(e,t,n,r){let i=new Yc(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Jc(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Yc(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xc(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Zc=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Qc(e),$c(n,e);let a=e.length;t.forEach(Qc);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,$c(n,t[e]);let o=yc.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Qc(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function $c(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var el=class e extends Ar{constructor(e=new vc([new W(.5,.5),new W(-.5,.5),new W(-.5,-.5),new W(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Sr(r,3)),this.setAttribute(`uv`,new Sr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?tl:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new K,b=new K,x=new K),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Zc.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Zc.isClockWise(t)&&(w[e]=t.reverse())}}let T=Zc.triangulateShape(C,w),E=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function D(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length,k=T.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new W(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new W(r/a,i/a)}let j=[];for(let e=0,t=E.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(E[e],E[n],E[r]);let M=[],N,P=j.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);z(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],N[e],r);z(i.x,i.y,-n)}}}let F=d+f;for(let e=0;e<O;e++){let t=l?D(C[e],P[e],F):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),z(x.x,x.y,x.z)):z(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?D(C[t],P[t],F):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),z(x.x,x.y,x.z)):z(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);z(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],N[e],r);_?z(i.x,i.y+g[s-1].y,g[s-1].x+n):z(i.x,i.y,c+n)}}}I(),L();function I(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<k;e++){let n=T[e];ee(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<k;e++){let n=T[e];ee(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<k;e++){let t=T[e];ee(t[2],t[1],t[0])}for(let e=0;e<k;e++){let t=T[e];ee(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function L(){let e=r.length/3,t=0;R(E,t),t+=E.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];R(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function R(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);te(t+r+n,t+i+n,t+i+a,t+r+a)}}}function z(e,t,n){a.push(e),a.push(t),a.push(n)}function ee(e,t,i){B(e),B(t),B(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ne(o[0]),ne(o[1]),ne(o[2])}function te(e,t,i,a){B(e),B(t),B(a),B(t),B(i),B(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ne(s[0]),ne(s[1]),ne(s[3]),ne(s[1]),ne(s[2]),ne(s[3])}function B(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ne(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return nl(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new dc[i.type]().fromJSON(i)),new e(r,t.options)}},tl={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new W(a,o),new W(s,c),new W(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new W(o,1-c),new W(l,1-d),new W(f,1-m),new W(h,1-_)]:[new W(s,1-c),new W(u,1-d),new W(p,1-m),new W(g,1-_)]}};function nl(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var rl=class e extends Ar{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new K,p=new W;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Sr(s,3)),this.setAttribute(`normal`,new Sr(c,3)),this.setAttribute(`uv`,new Sr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},il=class e extends Ar{constructor(e=new vc([new W(0,.5),new W(-.5,-.5),new W(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Sr(r,3)),this.setAttribute(`normal`,new Sr(i,3)),this.setAttribute(`uv`,new Sr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Zc.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Zc.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Zc.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return al(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function al(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var ol=class e extends Ar{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new K,u=new K,d=new K;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new Sr(o,3)),this.setAttribute(`normal`,new Sr(s,3)),this.setAttribute(`uv`,new Sr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},sl=class e extends Ar{constructor(e=new lc(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new K,s=new K,c=new W,l=new K,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Sr(u,3)),this.setAttribute(`normal`,new Sr(d,3)),this.setAttribute(`uv`,new Sr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new dc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Z=class extends hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new fr(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fr(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cl=class extends Z{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new W(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fr(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fr(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fr(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ll(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ul(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var dl=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},fl=class extends dl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ee,endingEnd:Ee}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case De:i=e,o=2*t-n;break;case Oe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case De:a=e,s=2*n-t;break;case Oe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},pl=class extends dl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ml=class extends dl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},hl=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ll(t,this.TimeBufferType),this.values=ll(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ll(e.times,Array),values:ll(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ce:t=this.InterpolantFactoryMethodDiscrete;break;case we:t=this.InterpolantFactoryMethodLinear;break;case Te:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ce;case this.InterpolantFactoryMethodLinear:return we;case this.InterpolantFactoryMethodSmooth:return Te}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ul(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Te,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};hl.prototype.TimeBufferType=Float32Array,hl.prototype.ValueBufferType=Float32Array,hl.prototype.DefaultInterpolation=we;var gl=class extends hl{constructor(e,t,n){super(e,t,n)}};gl.prototype.ValueTypeName=`bool`,gl.prototype.ValueBufferType=Array,gl.prototype.DefaultInterpolation=Ce,gl.prototype.InterpolantFactoryMethodLinear=void 0,gl.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends hl{};_l.prototype.ValueTypeName=`color`;var vl=class extends hl{};vl.prototype.ValueTypeName=`number`;var yl=class extends dl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ut.slerpFlat(i,0,a,c-o,a,c,s);return i}},bl=class extends hl{InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}};bl.prototype.ValueTypeName=`quaternion`,bl.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends hl{constructor(e,t,n){super(e,t,n)}};xl.prototype.ValueTypeName=`string`,xl.prototype.ValueBufferType=Array,xl.prototype.DefaultInterpolation=Ce,xl.prototype.InterpolantFactoryMethodLinear=void 0,xl.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends hl{};Sl.prototype.ValueTypeName=`vector`;var Cl=class extends qn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new fr(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},wl=class extends Cl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fr(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tl=new bn,El=new K,Dl=new K,Ol=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new W(512,512),this.map=null,this.mapPass=null,this.matrix=new bn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hi,this._frameExtents=new W(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;El.setFromMatrixPosition(e.matrixWorld),t.position.copy(El),Dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dl),t.updateMatrixWorld(),Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},kl=new bn,Al=new K,jl=new K,Ml=class extends Ol{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new W(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Al.setFromMatrixPosition(e.matrixWorld),n.position.copy(Al),jl.copy(n.position),jl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jl),n.updateMatrixWorld(),r.makeTranslation(-Al.x,-Al.y,-Al.z),kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl)}},Nl=class extends Cl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Ml}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Pl=class extends Ol{constructor(){super(new ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fl=class extends Cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.target=new qn,this.shadow=new Pl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Il=class extends Cl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Ll=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Rl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Rl(){return performance.now()}var zl=`\\[\\]\\.:\\/`,Bl=RegExp(`[\\[\\]\\.:\\/]`,`g`),Vl=`[^\\[\\]\\.:\\/]`,Hl=`[^`+zl.replace(`\\.`,``)+`]`,Ul=`((?:WC+[\\/:])*)`.replace(`WC`,Vl),Wl=`(WCOD+)?`.replace(`WCOD`,Hl),Gl=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Vl),Kl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Vl),ql=RegExp(`^`+Ul+Wl+Gl+Kl+`$`),Jl=[`material`,`materials`,`bones`,`map`],Yl=class{constructor(e,t,n){let r=n||Xl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Xl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Bl,``)}static parseTrackName(e){let t=ql.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Jl.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xl.Composite=Yl,Xl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Xl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Xl.prototype.GetterByBindingType=[Xl.prototype._getValue_direct,Xl.prototype._getValue_array,Xl.prototype._getValue_arrayElement,Xl.prototype._getValue_toArray],Xl.prototype.SetterByBindingTypeAndVersioning=[[Xl.prototype._setValue_direct,Xl.prototype._setValue_direct_setNeedsUpdate,Xl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xl.prototype._setValue_array,Xl.prototype._setValue_array_setNeedsUpdate,Xl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xl.prototype._setValue_arrayElement,Xl.prototype._setValue_arrayElement_setNeedsUpdate,Xl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xl.prototype._setValue_fromArray,Xl.prototype._setValue_fromArray_setNeedsUpdate,Xl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zl=new bn,Ql=class{constructor(e,t,n=0,r=1/0){this.ray=new yn(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new jn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Zl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zl),this}intersectObject(e,t=!0,n=[]){return eu(e,this,n,t),n.sort($l),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)eu(e[r],this,n,t);return n.sort($l),n}};function $l(e,t){return e.distance-t.distance}function eu(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)eu(r[e],t,n,!0)}}var tu=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},nu=class extends Ve{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`169`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`169`);var ru={type:`change`},iu={type:`start`},au={type:`end`},ou=new yn,su=new fi,cu=Math.cos(70*mt.DEG2RAD),lu=new K,uu=2*Math.PI,du={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fu=1e-6,pu=class extends nu{constructor(n,r=null){super(n,r),this.state=du.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Ut,this._lastTargetPosition=new K,this._quat=new Ut().setFromUnitVectors(n.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tu,this._sphericalDelta=new tu,this._scale=1,this._panOffset=new K,this._rotateStart=new W,this._rotateEnd=new W,this._rotateDelta=new W,this._panStart=new W,this._panEnd=new W,this._panDelta=new W,this._dollyStart=new W,this._dollyEnd=new W,this._dollyDelta=new W,this._dollyDirection=new K,this._mouse=new W,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hu.bind(this),this._onPointerDown=mu.bind(this),this._onPointerUp=gu.bind(this),this._onContextMenu=Cu.bind(this),this._onMouseWheel=yu.bind(this),this._onKeyDown=bu.bind(this),this._onTouchStart=xu.bind(this),this._onTouchMove=Su.bind(this),this._onMouseDown=_u.bind(this),this._onMouseMove=vu.bind(this),this._interceptControlDown=wu.bind(this),this._interceptControlUp=Tu.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ru),this.update(),this.state=du.NONE}update(e=null){let t=this.object.position;lu.copy(t).sub(this.target),lu.applyQuaternion(this._quat),this._spherical.setFromVector3(lu),this.autoRotate&&this.state===du.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=uu:n>Math.PI&&(n-=uu),r<-Math.PI?r+=uu:r>Math.PI&&(r-=uu),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(lu.setFromSpherical(this._spherical),lu.applyQuaternion(this._quatInverse),t.copy(this.target).add(lu),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=lu.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new K(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new K(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=lu.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(ou.origin.copy(this.object.position),ou.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ou.direction))<cu?this.object.lookAt(this.target):(su.setFromNormalAndCoplanarPoint(this.object.up,this.target),ou.intersectPlane(su,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>fu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fu||this._lastTargetPosition.distanceToSquared(this.target)>fu?(this.dispatchEvent(ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?uu/60/60*this.autoRotateSpeed:uu/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){lu.setFromMatrixColumn(t,0),lu.multiplyScalar(-e),this._panOffset.add(lu)}_panUp(e,t){this.screenSpacePanning===!0?lu.setFromMatrixColumn(t,1):(lu.setFromMatrixColumn(t,0),lu.crossVectors(this.object.up,lu)),lu.multiplyScalar(e),this._panOffset.add(lu)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;lu.copy(r).sub(this.target);let i=lu.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(uu*this._rotateDelta.x/t.clientHeight),this._rotateUp(uu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(uu*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-uu*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(uu*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-uu*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(uu*this._rotateDelta.x/t.clientHeight),this._rotateUp(uu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new W,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function mu(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener(`pointermove`,this._onPointerMove),this.domElement.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e)))}function hu(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function gu(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(au),this.state=du.NONE;break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function _u(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=du.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=du.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=du.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=du.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=du.PAN}break;default:this.state=du.NONE}this.state!==du.NONE&&this.dispatchEvent(iu)}function vu(e){switch(this.state){case du.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case du.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case du.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function yu(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===du.NONE&&(e.preventDefault(),this.dispatchEvent(iu),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(au))}function bu(e){this.enabled!==!1&&this.enablePan!==!1&&this._handleKeyDown(e)}function xu(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=du.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=du.TOUCH_PAN;break;default:this.state=du.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=du.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=du.TOUCH_DOLLY_ROTATE;break;default:this.state=du.NONE}break;default:this.state=du.NONE}this.state!==du.NONE&&this.dispatchEvent(iu)}function Su(e){switch(this._trackPointer(e),this.state){case du.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case du.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case du.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case du.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=du.NONE}}function Cu(e){this.enabled!==!1&&e.preventDefault()}function wu(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Tu(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Eu=class extends Ds{constructor(){super();let e=new Wr;e.deleteAttribute(`uv`);let t=new Z({side:1}),n=new Z,r=new Nl(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new q(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new q(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new q(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let s=new q(e,n);s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),this.add(s);let c=new q(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let l=new q(e,n);l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),this.add(l);let u=new q(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new q(e,Du(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new q(e,Du(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let p=new q(e,Du(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let m=new q(e,Du(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let h=new q(e,Du(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let g=new q(e,Du(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Du(e){let t=new gr;return t.color.setScalar(e),t}var Ou=class extends qn{constructor(e=document.createElement(`div`)){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position=`absolute`,this.element.style.userSelect=`none`,this.element.setAttribute(`draggable`,!1),this.center=new W(.5,.5),this.addEventListener(`removed`,function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}},ku=new K,Au=new bn,ju=new bn,Mu=new K,Nu=new K,Pu=class{constructor(e={}){let t=this,n,r,i,a,o={objects:new WeakMap},s=e.element===void 0?document.createElement(`div`):e.element;s.style.overflow=`hidden`,this.domElement=s,this.getSize=function(){return{width:n,height:r}},this.render=function(e,t){e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Au.copy(t.matrixWorldInverse),ju.multiplyMatrices(t.projectionMatrix,Au),l(e,e,t),f(e)},this.setSize=function(e,t){n=e,r=t,i=n/2,a=r/2,s.style.width=e+`px`,s.style.height=t+`px`};function c(e){e.isCSS2DObject&&(e.element.style.display=`none`);for(let t=0,n=e.children.length;t<n;t++)c(e.children[t])}function l(e,n,r){if(e.visible===!1)c(e);else{if(e.isCSS2DObject){ku.setFromMatrixPosition(e.matrixWorld),ku.applyMatrix4(ju);let c=ku.z>=-1&&ku.z<=1&&e.layers.test(r.layers)===!0,l=e.element;l.style.display=c===!0?``:`none`,c===!0&&(e.onBeforeRender(t,n,r),l.style.transform=`translate(`+-100*e.center.x+`%,`+-100*e.center.y+`%)translate(`+(ku.x*i+i)+`px,`+(-ku.y*a+a)+`px)`,l.parentNode!==s&&s.appendChild(l),e.onAfterRender(t,n,r));let d={distanceToCameraSquared:u(r,e)};o.objects.set(e,d)}for(let t=0,i=e.children.length;t<i;t++)l(e.children[t],n,r)}}function u(e,t){return Mu.setFromMatrixPosition(e.matrixWorld),Nu.setFromMatrixPosition(t.matrixWorld),Mu.distanceToSquared(Nu)}function d(e){let t=[];return e.traverseVisible(function(e){e.isCSS2DObject&&t.push(e)}),t}function f(e){let t=d(e).sort(function(e,t){return e.renderOrder===t.renderOrder?o.objects.get(e).distanceToCameraSquared-o.objects.get(t).distanceToCameraSquared:t.renderOrder-e.renderOrder}),n=t.length;for(let e=0,r=t.length;e<r;e++)t[e].element.style.zIndex=n-e}}};function Fu(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Iu(e,t,n){let r=document.createElement(`canvas`);return r.width=e,r.height=t,n(r.getContext(`2d`),e,t),r}function Lu(e,{srgb:t=!0,repeat:r=[1,1],aniso:i=8}={}){let a=new Rs(e);return a.wrapS=a.wrapT=n,a.repeat.set(r[0],r[1]),a.anisotropy=i,a.colorSpace=t?je:``,a.needsUpdate=!0,a}function Ru(e,t,n,r){let i=Fu(n);e.fillStyle=r===`bump`?`#3c3c3c`:`#c6bdae`,e.fillRect(0,0,t,t);for(let n=0;n*30<t+30;n++){let a=n%2?50:0;for(let o=-1;o*100<t+96;o++){let t=o*100+a,s=n*30,c=i();if(r===`bump`){let t=170+Math.floor(c*50);e.fillStyle=`rgb(${t},${t},${t})`}else e.fillStyle=`hsl(${13+c*10} ${34+i()*20}% ${30+i()*15}%)`;if(e.fillRect(t,s,96,26),r===`color`){for(let n=0;n<14;n++)e.fillStyle=i()>.5?`rgba(40, 15, 8, ${.03+i()*.07})`:`rgba(255, 225, 195, ${.02+i()*.05})`,e.fillRect(t+i()*96,s+i()*26,6+i()*34,1+i()*3);e.fillStyle=`rgba(255, 230, 210, 0.05)`,e.fillRect(t,s,96,2)}}}if(r===`color`)for(let n=0;n<5e3;n++)e.fillStyle=`rgba(0,0,0,${i()*.05})`,e.fillRect(i()*t,i()*t,1+i()*2,1+i()*2)}function zu(e=8,t=[1,1]){let n=1024,r=Iu(n,n,e=>Ru(e,n,21,`color`)),i=Iu(n,n,e=>Ru(e,n,21,`bump`));return{map:Lu(r,{repeat:t,aniso:e}),bumpMap:Lu(i,{srgb:!1,repeat:t,aniso:e})}}function Bu(e=8,t=[1,1]){let n=1024,r=Fu(31),i=Iu(n,n,e=>{e.fillStyle=`#34383c`,e.fillRect(0,0,n,n);for(let t=0;t<2;t++)for(let n=0;n<2;n++){e.fillStyle=`hsl(210 5% ${23+r()*3.4}%)`,e.fillRect(n*512+2,t*512+2,508,508);for(let i=0;i<3;i++){let i=n*512+r()*512,a=t*512+r()*512,o=60+r()*180,s=e.createRadialGradient(i,a,0,i,a,o),c=r()>.5;s.addColorStop(0,c?`rgba(255,255,255,0.028)`:`rgba(0,0,0,0.05)`),s.addColorStop(1,`rgba(0,0,0,0)`),e.fillStyle=s,e.fillRect(i-o,a-o,o*2,o*2)}e.strokeStyle=`rgba(255,255,255,0.035)`;for(let i=0;i<26;i++){e.lineWidth=.5+r(),e.beginPath();let i=n*512+r()*512,a=t*512+r()*512;e.moveTo(i,a),e.lineTo(i+(r()-.5)*90,a+(r()-.5)*90),e.stroke()}}e.strokeStyle=`rgba(10,12,14,0.85)`,e.lineWidth=5,e.beginPath(),e.moveTo(512,0),e.lineTo(512,n),e.moveTo(0,512),e.lineTo(n,512),e.moveTo(.5,0),e.lineTo(.5,n),e.moveTo(0,.5),e.lineTo(n,.5),e.stroke(),e.strokeStyle=`rgba(255,255,255,0.05)`,e.lineWidth=1.5,e.beginPath(),e.moveTo(515,0),e.lineTo(515,n),e.moveTo(0,515),e.lineTo(n,515),e.stroke();for(let t=0;t<9e3;t++)e.fillStyle=r()>.55?`rgba(220,225,230,${r()*.045})`:`rgba(0,0,0,${r()*.06})`,e.fillRect(r()*n,r()*n,1+r()*2,1+r()*2)}),a=Iu(n,n,e=>{e.fillStyle=`#a4a4a4`,e.fillRect(0,0,n,n);for(let t=0;t<1100;t++){let t=156+Math.floor(r()*22);e.fillStyle=`rgb(${t},${t},${t})`;let i=8+r()*38;e.beginPath(),e.arc(r()*n,r()*n,i,0,Math.PI*2),e.fill()}e.strokeStyle=`#d8d8d8`,e.lineWidth=6,e.beginPath(),e.moveTo(512,0),e.lineTo(512,n),e.moveTo(0,512),e.lineTo(n,512),e.stroke()});return{map:Lu(i,{repeat:t,aniso:e}),roughnessMap:Lu(a,{srgb:!1,repeat:t,aniso:e})}}function Vu(e=8){let t=Fu(5);return Lu(Iu(512,512,e=>{e.fillStyle=`#b9bdc2`,e.fillRect(0,0,512,512);for(let n=0;n<2600;n++){let n=t()*512;e.strokeStyle=t()>.5?`rgba(255,255,255,${t()*.13})`:`rgba(60,66,72,${t()*.12})`,e.lineWidth=.6+t()*1.4,e.beginPath();let r=t()*512;e.moveTo(r,n),e.lineTo(r+40+t()*200,n+(t()-.5)*1.2),e.stroke()}}),{aniso:e,repeat:[1,1]})}function Hu(e=8){let t=Fu(9);return Lu(Iu(128,256,e=>{e.fillStyle=`#15171a`,e.fillRect(0,0,128,256);for(let t=0;t<256;t+=32)e.fillStyle=`rgba(90,96,104,0.5)`,e.fillRect(0,t,128,4),e.fillStyle=`rgba(0,0,0,0.55)`,e.fillRect(0,t+4,128,3);for(let n=0;n<1200;n++)e.fillStyle=`rgba(255,255,255,${t()*.04})`,e.fillRect(t()*128,t()*256,1.5,1.5)}),{aniso:e,repeat:[1,1]})}function Uu(e=8){let t=Fu(3);return Lu(Iu(640,400,e=>{e.fillStyle=`#14161c`,e.fillRect(0,0,640,400),e.fillStyle=`#1b1e26`,e.fillRect(0,0,640,26),e.fillStyle=`#2a2e38`,e.fillRect(0,26,130,374);let n=[`#6fb3ff`,`#c792ea`,`#8bd17c`,`#f2b233`,`#e9edf2`],r=48;for(;r<380;){let i=12+Math.floor(t()*3)*14;e.fillStyle=n[Math.floor(t()*n.length)],e.fillRect(150+i,r,40+t()*380,4),t()>.72&&(e.fillStyle=`#5a6270`,e.fillRect(150+i,r+10,30+t()*120,3),r+=13),r+=12}e.fillStyle=`#4c5563`,e.fillRect(8,40,110,4);for(let n=0;n<12;n++)e.fillRect(8,58+n*16,40+t()*70,3);e.fillStyle=`#0d0f13`,e.fillRect(0,382,640,18),e.fillStyle=`#5f6b7c`,e.font=`11px Consolas, monospace`,e.fillText(`mps_line.py  ·  build ok`,10,395)}),{aniso:e})}function Wu(e=`MPS`,t=`E1`,n=8){return Lu(Iu(256,96,n=>{n.fillStyle=`#e9ebee`,n.fillRect(0,0,256,96),n.fillStyle=`#c81020`,n.fillRect(0,0,8,96),n.fillStyle=`#1c2126`;let r=34;for(n.font=`700 ${r}px 'Segoe UI', Arial, sans-serif`;n.measureText(e).width>212&&r>14;)r-=2,n.font=`700 ${r}px 'Segoe UI', Arial, sans-serif`;for(n.fillText(e,24,46),n.fillStyle=`#6c757f`,r=20,n.font=`600 ${r}px 'Segoe UI', Arial, sans-serif`;n.measureText(t).width>212&&r>10;)--r,n.font=`600 ${r}px 'Segoe UI', Arial, sans-serif`;n.fillText(t,24,76),n.strokeStyle=`#b9bec5`,n.lineWidth=2,n.strokeRect(1,1,254,94)}),{aniso:n})}var Gu={idle:[`#8d98a5`,`rgba(255,255,255,0.08)`],ready:[`#6fb0ff`,`rgba(75,147,255,0.16)`],running:[`#48e08a`,`rgba(55,214,122,0.18)`],done:[`#48e08a`,`rgba(55,214,122,0.18)`],error:[`#ff8a7a`,`rgba(255,90,74,0.18)`]};function Ku(e=8,t=`MPS-00`,n=`ESTAÇÃO`,r={}){let i=r.tag||`HMI · BLOCOS`,a=r.rows||[[`#2f6fd0`,`iniciar ciclo`,1],[`#2f9e63`,`contar peça`,.78],[`#c99a2e`,`aguardar 1 s`,.88]],o=document.createElement(`canvas`);o.width=512,o.height=320;let s=o.getContext(`2d`),c=Lu(o,{aniso:e}),l=(e=`TOQUE PARA PROGRAMAR`,r=`idle`)=>{let o=s.createLinearGradient(0,0,0,320);o.addColorStop(0,`#111820`),o.addColorStop(1,`#070a0e`),s.fillStyle=o,s.fillRect(0,0,512,320),s.fillStyle=`#161d26`,s.fillRect(0,0,512,56),s.fillStyle=`#d4141f`,s.fillRect(0,0,6,56),s.fillStyle=`#ffffff`,s.font=`700 26px 'Segoe UI', Arial, sans-serif`,s.fillText(t,20,37),s.fillStyle=`#7f8a96`,s.font=`600 14px 'Segoe UI', Arial, sans-serif`,s.textAlign=`right`,s.fillText(i,494,35),s.textAlign=`left`,s.fillStyle=`#9fb0c0`,s.font=`600 15px 'Segoe UI', Arial, sans-serif`,s.fillText(n,20,84),a.forEach(([e,t,n],r)=>{let i=98+r*44,a=176*n+26;s.fillStyle=e,s.beginPath(),s.roundRect(20,i,a,32,8),s.fill(),s.fillStyle=`rgba(255,255,255,0.92)`,s.font=`600 15px 'Segoe UI', Arial, sans-serif`,s.fillText(t,34,i+22)}),s.save(),s.translate(392,158),s.strokeStyle=`rgba(120,150,180,0.3)`,s.lineWidth=9,s.beginPath(),s.arc(0,0,52,-.4,Math.PI*1.5),s.stroke(),s.fillStyle=`rgba(75,147,255,0.16)`,s.beginPath(),s.arc(0,0,42,0,Math.PI*2),s.fill(),s.fillStyle=`#6fb0ff`,s.beginPath(),s.moveTo(-12,-20),s.lineTo(26,0),s.lineTo(-12,20),s.closePath(),s.fill(),s.restore();let[l,u]=Gu[r]||Gu.idle;s.fillStyle=u,s.strokeStyle=l,s.lineWidth=2,s.beginPath(),s.roundRect(18,244,476,54,12),s.fill(),s.stroke(),s.fillStyle=l,s.beginPath(),s.arc(44,271,7,0,Math.PI*2),s.fill(),s.fillStyle=r===`idle`?`#c8d2dc`:l,s.font=`600 19px 'Segoe UI', Arial, sans-serif`,s.fillText(e,62,278),c.needsUpdate=!0};return l(`TOQUE PARA PROGRAMAR`,`idle`),{texture:c,draw:l}}function qu(e=8){return Lu(Iu(256,64,e=>{e.fillStyle=`#e8b400`,e.fillRect(0,0,256,64),e.fillStyle=`#151515`;for(let t=-64;t<320;t+=48)e.beginPath(),e.moveTo(t,0),e.lineTo(t+24,0),e.lineTo(t+24-64,64),e.lineTo(t-64,64),e.closePath(),e.fill();e.globalAlpha=.18,e.fillStyle=`#000`,e.fillRect(0,0,256,19.2)}),{aniso:e,repeat:[3,1]})}function Ju(e=8){return Lu(Iu(256,128,e=>{e.fillStyle=`#0c8a3f`,e.fillRect(0,0,256,128),e.fillStyle=`#ffffff`,e.fillRect(26,40,8,48),e.beginPath(),e.arc(60,34,8,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(52,48),e.lineTo(78,62),e.lineTo(66,78),e.lineTo(86,82),e.lineTo(70,96),e.lineTo(56,78),e.lineTo(46,90),e.closePath(),e.fill(),e.font=`700 40px 'Segoe UI', Arial, sans-serif`,e.fillText(`SAÍDA`,110,82)}),{aniso:e})}function Yu(e=8){let t=2048,n=1152;return Lu(Iu(t,n,e=>{let r=e.createLinearGradient(0,0,t,n);r.addColorStop(0,`#10151a`),r.addColorStop(.55,`#182028`),r.addColorStop(1,`#0d1216`),e.fillStyle=r,e.fillRect(0,0,t,n),e.strokeStyle=`rgba(150,180,210,0.055)`,e.lineWidth=1;for(let r=0;r<=t;r+=64)e.beginPath(),e.moveTo(r,0),e.lineTo(r,n),e.stroke();for(let r=0;r<=n;r+=64)e.beginPath(),e.moveTo(0,r),e.lineTo(t,r),e.stroke();e.fillStyle=`#e01b24`,e.fillRect(0,0,24,n),e.strokeStyle=`rgba(224,27,36,0.5)`,e.lineWidth=4,e.beginPath(),e.arc(1600,600,352,-.65,1.35),e.stroke(),e.strokeStyle=`rgba(255,255,255,0.09)`,e.lineWidth=2,e.setLineDash([10,16]),e.beginPath(),e.arc(1600,600,300,0,Math.PI*2),e.stroke(),e.setLineDash([]);let i=(t,n,r,i)=>{e.strokeStyle=i,e.lineWidth=r,e.lineCap=`round`,e.beginPath(),e.moveTo(t[0],t[1]),e.lineTo(n[0],n[1]),e.stroke()},a=(t,n,r,i=`#e01b24`)=>{e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fillStyle=`#131a20`,e.fill(),e.lineWidth=9,e.strokeStyle=i,e.stroke(),e.beginPath(),e.arc(t,n,r*.36,0,Math.PI*2),e.fillStyle=`#e8eef3`,e.fill()};e.fillStyle=`#222c35`,e.strokeStyle=`rgba(255,255,255,0.22)`,e.lineWidth=3,e.beginPath(),e.moveTo(1445,906),e.lineTo(1645,906),e.lineTo(1610,826),e.lineTo(1480,826),e.closePath(),e.fill(),e.stroke(),e.fillStyle=`#e01b24`,e.fillRect(1470,892,150,6),i([1545,826],[1462,642],54,`#e6ecf1`),i([1462,642],[1700,502],46,`#e6ecf1`),i([1700,502],[1786,548],34,`#c3ccd4`),i([1786,548],[1806,596],16,`#e01b24`),i([1786,548],[1822,522],16,`#e01b24`),a(1545,826,44),a(1462,642,38),a(1700,502,30),e.fillStyle=`rgba(224,27,36,0.14)`,e.strokeStyle=`rgba(224,27,36,0.75)`,e.lineWidth=2,e.beginPath(),e.roundRect(1452,96,468,76,38),e.fill(),e.stroke(),e.fillStyle=`#ff5a63`,e.font=`700 30px 'Segoe UI', Arial, sans-serif`,e.textAlign=`center`;try{e.letterSpacing=`6px`}catch{}e.fillText(`ROBÓTICA INDUSTRIAL`,1686,146);try{e.letterSpacing=`0px`}catch{}e.textAlign=`left`,e.fillStyle=`#e01b24`,e.beginPath(),e.roundRect(92,76,330,92,10),e.fill(),e.fillStyle=`#ffffff`,e.font=`800 54px 'Segoe UI', Arial, sans-serif`;try{e.letterSpacing=`3px`}catch{}e.fillText(`SENAI`,120,142);try{e.letterSpacing=`0px`}catch{}e.fillStyle=`#d7dee5`,e.font=`600 34px 'Segoe UI', Arial, sans-serif`,e.fillText(`Caxias do Sul`,456,118),e.fillStyle=`#8b96a1`,e.font=`400 26px 'Segoe UI', Arial, sans-serif`;try{e.letterSpacing=`4px`}catch{}e.fillText(`RIO GRANDE DO SUL`,456,154);try{e.letterSpacing=`0px`}catch{}e.fillStyle=`#8f9aa5`,e.font=`600 27px 'Segoe UI', Arial, sans-serif`;try{e.letterSpacing=`7px`}catch{}e.fillText(`EDUCAÇÃO PROFISSIONAL E TECNOLÓGICA`,92,266);try{e.letterSpacing=`0px`}catch{}e.fillStyle=`#eef3f7`,e.font=`600 68px 'Segoe UI', Arial, sans-serif`,e.fillText(`CURSO DE`,92,390);try{e.letterSpacing=`0px`}catch{}e.fillStyle=`#ffffff`,e.font=`800 152px 'Segoe UI', Arial, sans-serif`,e.fillText(`ROBÓTICA`,86,542),e.fillStyle=`#e01b24`,e.fillRect(92,578,636,10),e.fillStyle=`#b9c4ce`,e.font=`400 37px 'Segoe UI', Arial, sans-serif`,e.fillText(`Formação em automação e robótica industrial`,92,652),e.font=`600 33px 'Segoe UI', Arial, sans-serif`,[`Programação de robôs industriais`,`CLPs, sensores e pneumática`,`Integração de células flexíveis`,`Prática no laboratório de automação`].forEach((t,n)=>{let r=764+n*62;e.save(),e.translate(104,r-11),e.rotate(Math.PI/4),e.fillStyle=`#e01b24`,e.fillRect(-9,-9,18,18),e.restore(),e.fillStyle=`#dde4ea`,e.fillText(t,148,r)}),e.strokeStyle=`rgba(255,255,255,0.14)`,e.lineWidth=2,e.beginPath(),e.moveTo(92,1012),e.lineTo(1210,1012),e.stroke(),e.fillStyle=`#8f9aa5`,e.font=`400 28px 'Segoe UI', Arial, sans-serif`,e.fillText(`Informe-se na secretaria da unidade`,92,1068),e.fillStyle=`#e6ecf1`,e.font=`600 28px 'Segoe UI', Arial, sans-serif`,e.fillText(`senai.rs.br`,780,1068)}),{aniso:e})}function Xu(e=8){let t=Fu(19);return Lu(Iu(512,512,e=>{let n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,`#dce9f5`),n.addColorStop(.6,`#c2d6e8`),n.addColorStop(1,`#aebfce`),e.fillStyle=n,e.fillRect(0,0,512,512),e.fillStyle=`rgba(255,255,255,0.5)`;for(let n=0;n<22;n++){let n=t()*512,r=t()*512,i=20+t()*80,a=e.createRadialGradient(n,r,0,n,r,i);a.addColorStop(0,`rgba(255,255,255,0.35)`),a.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=a,e.fillRect(n-i,r-i,i*2,i*2)}}),{aniso:e})}function Zu(e){let t=Math.min(8,e.capabilities.getMaxAnisotropy()),n=zu(t,[1,1]),r=Bu(t,[1,1]),i=Vu(t),a=Uu(t),o=Ju(t),s=Xu(t),c=qu(t),l=Hu(t),u=Yu(t);return{aniso:t,textures:{belt:l,screen:a,hazard:c,exit:o,sky:s,course:u,brickBase:n,floorBase:r},floor:new Z({map:r.map,roughnessMap:r.roughnessMap,roughness:.82,metalness:.14,envMapIntensity:.7}),brick:new Z({map:n.map,bumpMap:n.bumpMap,bumpScale:.35,roughness:.94,metalness:0}),concrete:new Z({color:3817027,roughness:.95}),ceiling:new Z({color:12172735,roughness:.95,metalness:.02}),alu:new Z({map:i,color:14080734,metalness:.82,roughness:.42,envMapIntensity:1.1}),aluDark:new Z({map:i,color:7173244,metalness:.75,roughness:.46}),steel:new Z({color:14146270,metalness:.95,roughness:.24,envMapIntensity:1.5}),traySteel:new Z({color:13817821,metalness:1,roughness:.15,envMapIntensity:2}),chrome:new Z({color:15264750,metalness:1,roughness:.1,envMapIntensity:2}),whitePaint:new Z({color:15330028,roughness:.5,metalness:.08}),offWhite:new Z({color:15856371,roughness:.44,metalness:.04}),lightGrey:new Z({color:13159633,roughness:.6,metalness:.1}),darkGrey:new Z({color:5001817,roughness:.62,metalness:.3}),graphite:new Z({color:2764339,roughness:.58,metalness:.35}),blackPlastic:new Z({color:1382170,roughness:.62,metalness:.12}),rubber:new Z({color:1052947,roughness:.92}),blueTube:new Z({color:2057176,roughness:.5,metalness:.05}),blackCable:new Z({color:1645342,roughness:.8}),glass:new cl({color:10469580,metalness:0,roughness:.06,transparent:!0,opacity:.2,envMapIntensity:1.6,side:2,depthWrite:!1}),glassClear:new cl({color:12900573,metalness:0,roughness:.04,transparent:!0,opacity:.13,envMapIntensity:1.8,side:2,depthWrite:!1}),redPaint:new Z({color:13111328,roughness:.45,metalness:.1}),senaiRed:new Z({color:13898783,roughness:.42,metalness:.1}),yellow:new Z({color:15250432,roughness:.5,metalness:.1}),hazard:new Z({map:c,roughness:.6}),bluePlastic:new Z({color:3107804,roughness:.45}),greenPlastic:new Z({color:3120739,roughness:.45}),pinkPlastic:new Z({color:16723818,roughness:.4}),orangePlastic:new Z({color:14833194,roughness:.5}),cardboard:new Z({color:10254927,roughness:.92}),benchTop:new Z({color:14278112,roughness:.55,metalness:.1}),screen:new Z({map:a,emissive:16777215,emissiveMap:a,emissiveIntensity:.8,roughness:.25,metalness:.2}),sky:new gr({map:s,toneMapped:!1}),exit:new Z({map:o,emissive:16777215,emissiveMap:o,emissiveIntensity:.7,roughness:.5}),courseBoard:new Z({map:u,emissive:16777215,emissiveMap:u,emissiveIntensity:.42,roughness:.92,metalness:0,envMapIntensity:.08}),lamp:new Z({color:16777215,emissive:16774112,emissiveIntensity:2.8,roughness:.4}),lampCool:new Z({color:16777215,emissive:14478591,emissiveIntensity:2,roughness:.4}),ledGreen:new Z({color:1320474,emissive:3989626,emissiveIntensity:2.4}),ledRed:new Z({color:2756112,emissive:16722731,emissiveIntensity:2.4}),ledAmber:new Z({color:2826766,emissive:16756768,emissiveIntensity:2.4}),ledBlue:new Z({color:990259,emissive:4953087,emissiveIntensity:2.6}),ledOff:new Z({color:2763823,roughness:.5}),blackFabric:new Z({color:1908773,roughness:.9}),chairBlack:new Z({color:2237738,roughness:.66,metalness:.12}),monitorBlack:new Z({color:1776928,roughness:.55,metalness:.2}),deskWhite:new Z({color:15001578,roughness:.4,metalness:.06})}}function Qu(e,t,n){return new Z({map:Wu(t,n,Math.min(8,e.capabilities.getMaxAnisotropy())),roughness:.55,metalness:.05})}function $u(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Ar,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=ed(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=ed(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}return c}function ed(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new yr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}new Wr(1,1,1);function Q(e,t,n,r,i=0,a=0,o=0,s={}){let c=new q(new Wr(e,t,n),r);return c.position.set(i,a,o),c.castShadow=s.cast??!0,c.receiveShadow=s.receive??!0,s.rotY&&(c.rotation.y=s.rotY),s.rotX&&(c.rotation.x=s.rotX),s.rotZ&&(c.rotation.z=s.rotZ),c}function $(e,t,n,r,i=20,a=0,o=0,s=0,c={}){let l=new q(new _c(e,t,n,i),r);return l.position.set(a,o,s),l.castShadow=c.cast??!0,l.receiveShadow=c.receive??!0,c.rotX&&(l.rotation.x=c.rotX),c.rotY&&(l.rotation.y=c.rotY),c.rotZ&&(l.rotation.z=c.rotZ),l}function td(e,t,n=.0042,r,i=.06,a=.03){let o=new K(...e),s=new K(...t),c=o.clone().add(s).multiplyScalar(.5);c.y-=i,c.x+=a;let l=new q(new sl(new lc(o,c,s),22,n,7,!1),r);return l.castShadow=!1,l}function nd(e,t=!0,n=!0){return e.traverse(e=>{e.isMesh&&(e.castShadow=t,e.receiveShadow=n)}),e}function rd(e,t){let n=new q($u(e,!1),t);return n.castShadow=!0,n.receiveShadow=!0,n}function id(e,t,n,r,i,a,o=0){let s=new Wr(e,t,n);return o&&s.rotateY(o),s.translate(r,i,a),s}function ad(e,t,n,r,i,a=0,o=0,s=8){let c=new _c(e,e,t,s);return a&&c.rotateX(a),o&&c.rotateZ(o),c.translate(n,r,i),c}function od(e,t,n,r=6){let i=new K(...e),a=new K(...t).clone().sub(i),o=new _c(n,n,a.length(),r),s=new Ut().setFromUnitVectors(new K(0,1,0),a.clone().normalize()),c=new bn().makeRotationFromQuaternion(s);return c.setPosition(i.clone().add(a.multiplyScalar(.5))),o.applyMatrix4(c),o}var sd=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,cd=e=>Math.max(0,Math.min(1,e)),ld={w:16,l:30,h:6.4,chamfer:4};function ud(e,t,n,r,i,a,o){let s=new Wr(e,t,n),c=s.attributes.uv,l=Math.max(.4,e/2.4),u=Math.max(.4,t/1.2);for(let e=0;e<c.count;e++)c.setXY(e,c.getX(e)*l,c.getY(e)*u);let d=new q(s,r.brick);return d.position.set(i,a,o),d.castShadow=!0,d.receiveShadow=!0,d}function dd(){let e=ld.w/2,t=ld.l/2,n=ld.chamfer,r=[[e,-t+n],[e,t-n],[e-n,t],[-e+n,t],[-e,t-n],[-e,-t+n],[-e+n,-t],[e-n,-t]],i=new vc;i.moveTo(r[0][0],r[0][1]);for(let e=1;e<r.length;e++)i.lineTo(r[e][0],r[e][1]);return i.closePath(),i}function fd(){let e=new il(dd()),t=e.attributes.position,n=e.attributes.uv;for(let e=0;e<t.count;e++)n.setXY(e,(t.getX(e)+ld.w/2)/ld.w,(t.getY(e)+ld.l/2)/ld.l);return n.needsUpdate=!0,e}function pd(e,t){let n=fd();t.floor.map.repeat.set(ld.w/6,ld.l/6),t.floor.roughnessMap.repeat.set(ld.w/6,ld.l/6),t.floor.side=2;let r=new q(n,t.floor);r.rotation.x=-Math.PI/2,r.receiveShadow=!0,e.add(r);let i=new Z({color:14201402,roughness:.8});for(let t of[-3.05,3.05]){let n=new q(new vi(.07,24),i);n.rotation.x=-Math.PI/2,n.position.set(t,.004,0),n.receiveShadow=!0,e.add(n)}}function md(e,t){t.ceiling.side=2;let n=new q(fd(),t.ceiling);n.rotation.x=Math.PI/2,n.position.y=ld.h,e.add(n);let r=new q(new vi(4.6,22),t.sky);r.rotation.x=Math.PI/2,r.position.set(0,ld.h-.04,0),e.add(r);let i=[];for(let e=-11;e<=11;e+=2)i.push(id(4.8,.09,.09,0,ld.h-.05,e));i.push(id(.09,.09,22,-2.35,ld.h-.05,0)),i.push(id(.09,.09,22,2.35,ld.h-.05,0));let a=rd(i,t.aluDark);a.castShadow=!1,e.add(a)}function hd(e,t){let n=[],r=[-11,-5.5,0,5.5,11],i=5.45,a=6.05;for(let e of r){n.push(od([-8,a,e],[8,a,e],.038)),n.push(od([-8,i,e],[8,i,e],.034));for(let t=-8;t<8;t+=2){let r=(t+2)%4==0;n.push(od([t,r?i:a,e],[t+2,r?a:i,e],.024))}for(let t=-8;t<=8;t+=4)n.push(od([t,i,e],[t,a,e],.024))}for(let e of[-8,-4,0,4,8])n.push(od([e,a,-11],[e,a,11],.032));for(let e of[-8,8])n.push(od([e,i,-11],[e,i,11],.03));let o=rd(n,t.lightGrey);o.castShadow=!1,o.receiveShadow=!0,e.add(o);let s=[];for(let e of[-2.2,2.2]){s.push(id(.09,.09,20,e,4.9,0));for(let t=-10;t<=10;t+=4)s.push(ad(.015,.55,e,5.18,t,0,0,6))}let c=rd(s,t.lightGrey);c.castShadow=!1,e.add(c)}function gd(e,t){let n=[],r=[];for(let e of[-5.4,-1.8,1.8,5.4])for(let t=-10.5;t<=10.5;t+=3.5)n.push(id(1.42,.075,.16,e,5.2,t)),r.push(id(1.3,.012,.11,e,5.155,t)),n.push(ad(.012,.34,e,5.4,t,0,0,6));let i=rd(n,t.lightGrey);i.castShadow=!1,e.add(i);let a=rd(r,t.lamp);return a.castShadow=!1,e.add(a),a}function _d(e,t,n){let r=n*8,i=[-10.8,-5.5,0,5.5,10.8],a=new Z({color:1317407,roughness:.95}),o=new q(new vi(22,ld.h),a);o.position.set(n*8.7,ld.h/2,0),o.rotation.y=n>0?-Math.PI/2:Math.PI/2,e.add(o);let s=new Z({color:2830904,emissive:9414587,emissiveIntensity:.16,roughness:.9});for(let t=-9;t<=9;t+=6){let r=new q(new vi(.9,2.4),s);r.position.set(n*8.65,2.2,t),r.rotation.y=n>0?-Math.PI/2:Math.PI/2,e.add(r)}let c=new q(new vi(22,4.28),t.glass);c.position.set(r,2.3,0),c.rotation.y=n>0?-Math.PI/2:Math.PI/2,c.castShadow=!1,e.add(c);let l=[];for(let e of i)l.push(id(.42,6.4,.42,r,3.2,e));for(let e=-10.6;e<=10.6;e+=1.6)l.push(id(.07,4.3,.09,r,2.3,e));l.push(id(.1,.12,22,r,4.45,0)),l.push(id(.1,.16,22,r,.16,0));let u=rd(l,t.alu);u.castShadow=!1,e.add(u);let d=Q(.22,.16,22,t.whitePaint,r,.08,0);d.castShadow=!1,e.add(d);let f=new q(new vi(21.7,.85),new cl({color:14673898,roughness:.78,metalness:0,transparent:!0,opacity:.4,side:2,depthWrite:!1}));f.position.set(n*7.96,.63,0),f.rotation.y=n>0?-Math.PI/2:Math.PI/2,e.add(f);for(let n of i)e.add(ud(.44,4.42,.46,t,r,2.21,n));let p=Q(.47,.52,.49,t.hazard,r,.26,0);p.castShadow=!1,e.add(p);let m=Q(.4,1.95,22,t.concrete,r,5.42,0);m.castShadow=!1,e.add(m)}function vd(e,t,n,r){let i=[n*8,r*11],a=[n*4,r*15],o=a[0]-i[0],s=a[1]-i[1],c=Math.hypot(o,s),l=new X;l.position.set((i[0]+a[0])/2,0,(i[1]+a[1])/2),l.rotation.y=Math.atan2(-s,o),e.add(l);let u=n*r>0?1:-1,d=2.5,f=2.5,p=2.25,m=(c-d)/2-.02,h=d/2+m/2;l.add(ud(c,1,.3,t,0,.5,0)),l.add(ud(c,ld.h-3.5,.3,t,0,(ld.h+3.5)/2,0));for(let e of[-1,1])l.add(ud(m,f,.3,t,e*h,p,0));let g=new Z({color:1317407,roughness:.95}),_=new q(new vi(c+1.4,ld.h),g);_.position.set(0,ld.h/2,-u*1.02),_.rotation.y=u>0?0:Math.PI,l.add(_);let v=new Z({color:2830904,emissive:9414587,emissiveIntensity:.14,roughness:.9}),y=new q(new vi(2.6,f),v);y.position.set(0,p,-u*.62),y.rotation.y=u>0?0:Math.PI,l.add(y);let b=new q(new vi(d,f),t.glass);b.position.set(0,p,u*.14),b.rotation.y=u>0?0:Math.PI,b.castShadow=!1,l.add(b);let x=u*.17,S=rd([id(.1,2.66,.1,-2.5/2-.03,p,x),id(.1,2.66,.1,1.28,p,x),id(2.66,.1,.1,0,3.53,x),id(2.66,.1,.1,0,p-f/2-.03,x),id(.06,f,.08,0,p,x)],t.alu);S.castShadow=!1,l.add(S);let C=Q(2.84,.08,.4,t.whitePaint,0,.99,u*.15,{cast:!1});l.add(C);let w=new Z({color:3488061,roughness:.8}),T=Q(c-.2,.1,.06,w,0,.05,u*.18,{cast:!1});l.add(T)}function yd(e,t){let n=-2.1,r=2.1;e.add(ud(.8,ld.h,.3,t,0,ld.h/2,-15));for(let n of[-1,1])e.add(ud(.24,ld.h,.34,t,n*3.88,ld.h/2,-15)),e.add(ud(3.4,2.9,.3,t,n*2.1,4.95,-15));let i=new q(new vi(3.4,3.5),t.glassClear);i.position.set(n,1.85,-14.8),e.add(i);let a=rd([id(3.6,.12,.16,n,3.62,-14.95),id(3.6,.12,.16,n,.1,-14.95),id(.12,3.7,.16,-3.85,1.85,-14.95),id(.12,3.7,.16,-.3500000000000001,1.85,-14.95),id(.07,3.6,.1,n,1.85,-14.95)],t.alu);a.castShadow=!1,e.add(a);let o=new q(new vi(4.2,3.8),new Z({color:2765112,roughness:.95}));o.position.set(n,1.9,-16.1),e.add(o);let s=Q(3.4,3.5,.1,new Z({color:5988712,roughness:.62,metalness:.4}),r,1.78,-14.84);e.add(s);for(let n=.3;n<3.5;n+=.32){let i=Q(3.4,.025,.02,t.graphite,r,n,-14.77);i.castShadow=!1,e.add(i)}let c=rd([id(.18,3.8,.28,.3500000000000001,1.9,-14.9),id(.18,3.8,.28,3.85,1.9,-14.9),id(3.68,.2,.28,r,3.78,-14.9)],t.aluDark);e.add(c);let l=Q(1.2,.7,.06,t.monitorBlack,0,4.6,-14.78);e.add(l);let u=new q(new vi(1.12,.62),t.screen);u.position.set(0,4.6,-14.74),e.add(u);let d=$(.19,.19,.05,t.whitePaint,24,-3.25,4.6,-14.75,{rotX:Math.PI/2});e.add(d);let f=new q(new ol(.19,.012,8,24),t.graphite);f.position.set(-3.25,4.6,-14.72),e.add(f)}function bd(e,t){e.add(ud(2.7,ld.h,.3,t,-2.65,ld.h/2,15)),e.add(ud(2.7,ld.h,.3,t,2.65,ld.h/2,15)),e.add(ud(2.8,2.9,.3,t,0,4.95,15));let n=Q(1.4,1,.03,t.whitePaint,-3.1,1.75,14.83);n.castShadow=!1,e.add(n);let r=rd([id(1.48,.04,.045,-3.1,2.26,14.83),id(1.48,.04,.045,-3.1,1.24,14.83),id(.04,1.02,.045,-3.82,1.75,14.83),id(.04,1.02,.045,-2.38,1.75,14.83)],t.alu);r.castShadow=!1,e.add(r),e.add(Q(.45,.03,.06,t.alu,-3.1,1.22,14.8));for(let n of[-2,-1.55])e.add(Q(.38,.5,.09,t.lightGrey,n,1.85,14.81)),e.add(Q(.3,.4,.012,t.darkGrey,n,1.86,14.755)),e.add(Q(.03,.03,.012,t.ledGreen,n+.12,1.7,14.748));let i=new q(new vi(2.6,2.7),t.glassClear);i.position.set(0,1.35,14.98),e.add(i);let a=rd([id(.13,2.9,.2,-1.34,1.45,14.95),id(.13,2.9,.2,1.34,1.45,14.95),id(.09,2.85,.16,0,1.43,14.95),id(2.8,.13,.2,0,2.9,14.95),id(2.7,.08,.1,0,.04,14.95),id(.9,.06,.06,-.38,1.05,14.88),id(.9,.06,.06,.38,1.05,14.88)],t.alu);a.castShadow=!1,e.add(a);let o=new q(new vi(.75,.38),t.exit);o.position.set(0,3.15,14.82),o.rotation.y=Math.PI,e.add(o);let s=new q(new vi(5,4),new Z({color:10335940,roughness:1}));s.position.set(0,2,16.4),s.rotation.y=Math.PI,e.add(s)}function xd(e,t,n){for(let e of[-6.6,6.9]){let r=$(.032,.032,22,n.blueTube,12,e,4.92,0,{rotX:Math.PI/2});r.castShadow=!1,t.add(r);for(let r=-9;r<=9;r+=6)t.add($(.055,.055,.06,n.aluDark,12,e,4.92,r,{rotX:Math.PI/2}))}for(let e of[-2.2,2.2]){let r=Q(.32,.07,25,n.aluDark,e,4.55,0);r.castShadow=!1,t.add(r),t.add(Q(.34,.02,25,n.blackCable,e,4.585,0,{cast:!1}))}let r=6.1,i=Q(.04,.52,.34,n.graphite,7.96,1.02,r);i.castShadow=!1,e.add(i),e.add($(.075,.075,.46,n.senaiRed,16,7.88,1.02,r)),e.add($(.078,.078,.018,n.graphite,16,7.88,1.259,r)),e.add(Q(.1,.06,.12,n.blackPlastic,7.88,1.3,r)),e.add(Q(.16,.02,.03,n.blackPlastic,7.86,1.34,r));let a=new q(od([7.9,1.29,6.06],[7.86,.97,6.01],.008),n.blackCable);a.castShadow=!1,e.add(a);let o=Q(.03,.36,.66,n.graphite,7.97,2.9,-8.5);o.castShadow=!1,e.add(o);let s=new q(new vi(.6,.3),n.exit);s.position.set(7.95,2.9,-8.5),s.rotation.y=-Math.PI/2,e.add(s);let c=new Z({color:3488061,roughness:.8});e.add(Q(.06,.1,21.4,c,-7.94,.05,0,{cast:!1})),e.add(Q(.06,.1,21.4,c,7.94,.05,0,{cast:!1}))}function Sd(e,t){let n=new X;n.name=`hall`;let r=new X;r.name=`roof`,n.add(r),pd(n,t),md(r,t),hd(r,t);let i=gd(r,t);_d(n,t,-1),_d(n,t,1),vd(n,t,1,1),vd(n,t,1,-1),vd(n,t,-1,1),vd(n,t,-1,-1),yd(n,t),bd(n,t),xd(n,r,t),e.add(n);let a=new wl(14280447,2237994,.75);e.add(a);let o=new Il(16777215,.28);e.add(o);let s=new Fl(16774370,2.5);s.position.set(5,16,7),s.target.position.set(0,0,0),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-13,s.shadow.camera.right=13,s.shadow.camera.top=17,s.shadow.camera.bottom=-17,s.shadow.camera.near=1,s.shadow.camera.far=45,s.shadow.bias=-4e-4,s.shadow.normalBias=.035,e.add(s),e.add(s.target);let c=new Fl(12572671,.45);c.position.set(-9,8,-6),e.add(c);let l=[];for(let[t,n,r,i,a,o]of[[0,4.7,-3,16773597,55,22],[0,4.7,6,15397631,45,20],[-6.4,3.6,-7.5,16766883,18,10],[6.5,3.6,-2,14675711,26,12]]){let s=new Nl(i,a,o,2);s.position.set(t,n,r),e.add(s),l.push(s)}let u=[t.lamp,t.lampCool];return{group:n,roof:r,fixtures:i,setRoofVisible(e){r.visible=e},setShadows(e){s.castShadow=e},setLights(e){s.intensity=e?2.5:.45,a.intensity=e?.75:.22,o.intensity=e?.28:.12,c.intensity=e?.45:.12,l.forEach(t=>{t.userData.base=t.userData.base??t.intensity,t.intensity=e?t.userData.base:t.userData.base*.2}),u.forEach(t=>{t.userData.base=t.userData.base??t.emissiveIntensity,t.emissiveIntensity=e?t.userData.base:.15})}}}var Cd=new K;function wd(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Cd.copy(t),Cd[r]=0,Cd.normalize();let l=.5*o/(o+s),u=1-Cd.angleTo(e)/c;return Math.sign(Cd[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Td=class extends Wr{constructor(e=1,t=1,n=1,r=2,i=.1){if(r=r*2+1,i=Math.min(e/2,t/2,n/2,i),super(1,1,1,r,r,r),r===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new K,s=new K,c=new K(e,t,n).divideScalar(2).subScalar(i),l=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=l.length/6,p=new K,m=.5/r;for(let r=0,a=0;r<l.length;r+=3,a+=2)switch(o.fromArray(l,r),s.copy(o),s.x-=Math.sign(s.x)*m,s.y-=Math.sign(s.y)*m,s.z-=Math.sign(s.z)*m,s.normalize(),l[r+0]=c.x*Math.sign(o.x)+s.x*i,l[r+1]=c.y*Math.sign(o.y)+s.y*i,l[r+2]=c.z*Math.sign(o.z)+s.z*i,u[r+0]=s.x,u[r+1]=s.y,u[r+2]=s.z,Math.floor(r/f)){case 0:p.set(1,0,0),d[a+0]=wd(p,s,`z`,`y`,i,n),d[a+1]=1-wd(p,s,`y`,`z`,i,t);break;case 1:p.set(-1,0,0),d[a+0]=1-wd(p,s,`z`,`y`,i,n),d[a+1]=1-wd(p,s,`y`,`z`,i,t);break;case 2:p.set(0,1,0),d[a+0]=1-wd(p,s,`x`,`z`,i,e),d[a+1]=wd(p,s,`z`,`x`,i,n);break;case 3:p.set(0,-1,0),d[a+0]=1-wd(p,s,`x`,`z`,i,e),d[a+1]=1-wd(p,s,`z`,`x`,i,n);break;case 4:p.set(0,0,1),d[a+0]=1-wd(p,s,`x`,`y`,i,e),d[a+1]=1-wd(p,s,`y`,`x`,i,t);break;case 5:p.set(0,0,-1),d[a+0]=wd(p,s,`x`,`y`,i,e),d[a+1]=1-wd(p,s,`y`,`x`,i,t)}}},Ed={w:.2,d:.112},Dd=.026,Od=.004,kd=.66,Ad=.65;function jd(e,t,n,r){let i=e/2,a=t/2,o=Math.min(n,i*.8,a*.8),s=[[i,a-o],[i-o,a],[-i+o,a],[-i,a-o],[-i,-a+o],[-i+o,-a],[i-o,-a],[i,-a+o]],c=[],l=[];for(let e=0;e<8;e++){let t=s[(e+7)%8],n=s[e],i=s[(e+1)%8],a=Math.hypot(t[0]-n[0],t[1]-n[1]),o=Math.hypot(i[0]-n[0],i[1]-n[1]),u=Math.min(r,a/2,o/2);c.push([n[0]+(t[0]-n[0])/a*u,n[1]+(t[1]-n[1])/a*u]),l.push([n[0]+(i[0]-n[0])/o*u,n[1]+(i[1]-n[1])/o*u])}let u=new vc;u.moveTo(l[0][0],l[0][1]);for(let e=1;e<8;e++)u.lineTo(c[e][0],c[e][1]),u.quadraticCurveTo(s[e][0],s[e][1],l[e][0],l[e][1]);return u.lineTo(c[0][0],c[0][1]),u.quadraticCurveTo(s[0][0],s[0][1],l[0][0],l[0][1]),u.closePath(),u}var Md=null;function Nd(){let e=new el(jd(Ed.w,Ed.d,Dd,Od),{depth:.0055,bevelEnabled:!0,bevelThickness:8e-4,bevelSize:8e-4,bevelSegments:1,curveSegments:4});e.rotateX(-Math.PI/2),e.translate(0,-.0055,0);let t=jd(Ed.w,Ed.d,Dd,Od),n=jd(Ed.w*kd,Ed.d*Ad,Dd*.8,Od*.75);t.holes.push(n);let r=new el(t,{depth:.0075,bevelEnabled:!0,bevelThickness:.0012,bevelSize:.003,bevelSegments:3,curveSegments:4});return r.rotateX(-Math.PI/2),r.translate(0,-.002,0),{rim:r,base:e}}function Pd(e){Md||=Nd();let t=new X,n=new q(Md.rim,e.traySteel);n.castShadow=!0,n.receiveShadow=!0;let r=new q(Md.base,e.traySteel);return r.castShadow=!0,r.receiveShadow=!0,t.add(n,r),t.userData.tray=!0,t}var Fd=null;function Id(){let e=.6,t=.64,n=new vc,r=.02;n.moveTo(-.27999999999999997,-.64/2),n.lineTo(e/2-r,-.64/2),n.quadraticCurveTo(e/2,-.64/2,e/2,-.3),n.lineTo(e/2,t/2-r),n.quadraticCurveTo(e/2,t/2,e/2-r,t/2),n.lineTo(-.27999999999999997,t/2),n.quadraticCurveTo(-.6/2,t/2,-.6/2,t/2-r),n.lineTo(-.6/2,-.3),n.quadraticCurveTo(-.6/2,-.64/2,-.27999999999999997,-.64/2);let i=[];for(let e of[-.115,.115])for(let t of[-.18,-.06,.06,.18]){let r=new pc;r.absarc(e,t,.036,0,Math.PI*2,!0),n.holes.push(r),i.push(new K(e,0,t))}let a=new el(n,{depth:.016,bevelEnabled:!0,bevelThickness:.0015,bevelSize:.0015,bevelSegments:1,curveSegments:20});return a.translate(0,0,-.008),a.rotateX(-Math.PI/2),{geo:a,slots:i}}function Ld(e){Fd||=Id();let{geo:t,slots:n}=Fd,r=new X,i=new q(t,e.offWhite);i.castShadow=!0,i.receiveShadow=!0,r.add(i);let a=new Z({color:2303530,roughness:.9});for(let e of n){let t=new q(new gc(.035,20),a);t.rotation.x=-Math.PI/2,t.position.set(e.x,5e-4,e.z),r.add(t)}for(let t of[-.2,.2]){let n=new q(new Wr(.05,.006,.58),e.aluDark);n.position.set(t,-.014,0),r.add(n)}let o=[n[0],n[7]];for(let t of o){let n=new q(new _c(.024,.026,.13,14),e.pinkPlastic);n.position.set(t.x,.072,t.z),n.castShadow=!0,r.add(n);let i=new q(new _c(.027,.027,.012,14),e.pinkPlastic);i.position.set(t.x,.142,t.z),r.add(i)}return{group:r,slots:n,usable:n.filter(e=>!o.includes(e))}}function Rd(e,t=.032,n=.022){let r=new X,i=new q(new _c(t,t,n,20),e.steel),a=new q(new _c(t*1.005,t*1.005,.006,20),e.steel),o=new q(new _c(t*.62,t*.55,.006,16),e.chrome);o.position.y=n/2+.003;for(let e of[i,a,o])e.castShadow=!0,e.receiveShadow=!0;r.add(i,a,o);let s={metal:[e.steel,e.chrome,e.steel],colored:[e.bluePlastic,e.orangePlastic,e.orangePlastic],black:[e.blackPlastic,e.blackPlastic,e.blackPlastic]};return r.userData.setType=e=>{let[t,n,r]=s[e]||s.metal;i.material=t,o.material=n,a.material=r},r.userData.setType(`metal`),r}function zd(e,t=.028,n=.018){let r=new X,i=new q(new _c(t,t,n,20),e.steel);i.castShadow=!0,i.receiveShadow=!0,r.add(i);let a=new q(new _c(t*.62,t*.55,.006,16),e.pinkPlastic);return a.position.y=n/2+.003,r.add(a),r}function Bd(e,t,n,r,i=0,a={}){let{x:o=-.452,y:s=1.035,rotY:c=-Math.PI/2,tag:l=`HMI · BLOCOS`,rows:u}=a,d=new X;d.position.set(o,s,i),d.rotation.y=c;let f=new X;f.rotation.x=-.24,d.add(f),d.add(Q(.026,.1,.026,e.blackPlastic,0,-.128,-.024)),d.add(Q(.05,.05,.014,e.aluDark,0,-.172,-.016)),f.add(Q(.3,.215,.024,e.graphite,0,0,-.002)),f.add(Q(.262,.178,.008,e.blackPlastic,0,0,.007));let{texture:p,draw:m}=Ku(Math.min(8,t.capabilities.getMaxAnisotropy()),n,r,{tag:l,rows:u}),h=new Z({map:p,emissive:16777215,emissiveMap:p,emissiveIntensity:.9,roughness:.28,metalness:.08}),g=new q(new vi(.25,.157),h);g.position.z=.0115,f.add(g);let _=new q(new vi(.33,.25),new gr({transparent:!0,opacity:0,depthWrite:!1}));_.position.z=.03,f.add(_);let v=new q(new vi(.06,.008),new Z({color:1909030,emissive:4953087,emissiveIntensity:1.6}));return v.position.set(.108,-.096,.014),f.add(v),{root:d,screen:g,hit:_,draw:m,code:n}}var Vd=.945;function Hd(e,{len:t=.14,r:n=.026,stroke:r=.06}={}){let i=new X,a=$(n,n,t,e.alu,18,0,t/2,0),o=$(n*1.06,n*1.06,.01,e.graphite,18,0,.005,0),s=$(n*1.06,n*1.06,.01,e.graphite,18,0,t-.005,0),c=new X,l=r+.04,u=$(n*.33,n*.33,l,e.chrome,12,0,t-l/2+.01,0),d=$(n*.92,n*.92,.011,e.aluDark,16,0,t+.006,0);c.add(u,d),i.add(a,o,s,c);let f=$(.007,.007,.022,e.blueTube,8,n*.95,t*.22,0,{rotZ:Math.PI/2}),p=$(.007,.007,.022,e.blueTube,8,n*.95,t*.78,0,{rotZ:Math.PI/2});return i.add(f,p),i.userData.extension=0,i.setExtension=e=>{let t=cd(e);c.position.y=t*r},i}function Ud(e){let t=new X;t.add(Q(.13,.055,.085,e.graphite,0,.028,0));for(let n=0;n<3;n++){let r=-.043+n*.043;t.add(Q(.033,.05,.075,e.darkGrey,r,.08,0)),t.add($(.0045,.0045,.006,e.ledGreen,6,r,.085,.042,{rotX:Math.PI/2}))}return t.add(Q(.13,.014,.09,e.blackPlastic,0,.008,0)),t}function Wd(e){let t=new X;t.add($(.019,.024,.02,e.graphite,12,0,.01,0)),t.add($(.007,.007,.2,e.aluDark,8,0,.12,0));let n=$(.026,.026,.042,e.ledRed,14,0,.235,0),r=$(.026,.026,.042,e.ledAmber,14,0,.279,0),i=$(.026,.026,.042,e.ledGreen,14,0,.323,0);return t.add(n,r,i),t.add($(.028,.028,.008,e.blackPlastic,14,0,.348,0)),{group:t,amber:r,green:i,red:n}}function Gd(e,t=.82,n=.56){let r=new X,i=.032;return r.add(Q(t,.016,n,e.graphite,0,.008,0)),r.add(Q(t-.075,.02,n-.075,e.benchTop,0,.026,0)),r.add(Q(t,i,.034,e.alu,0,.024,-n/2+.017)),r.add(Q(t,i,.034,e.alu,0,.024,n/2-.017)),r.add(Q(.034,i,n,e.alu,-t/2+.017,.024,0)),r.add(Q(.034,i,n,e.alu,t/2-.017,.024,0)),r}function Kd(e,t,n,r,i=0){let a=new X;return a.add(Q(.026,.05,.026,e.graphite,0,0,0,{rotY:i})),a.add($(.0042,.0042,.008,e.ledRed,6,.014,0,0,{rotZ:Math.PI/2})),a.position.set(t,n,r),a}function qd(e,t,n,r,i=-.413,a=.052,o=.16){let s=Qu(t,n,r),c=new q(new vi(.2,.075),s);return c.position.set(i,a,o),c.rotation.y=-Math.PI/2,c}function Jd(e,t,n){let r=new X;r.add(Gd(e));let i=.036,a=-.06,o=.029,s=.07899999999999999,c=.11,l=new X,u=new cl({color:14149354,metalness:0,roughness:.08,transparent:!0,opacity:.3,envMapIntensity:1.4,side:2,depthWrite:!1});l.add($(.053,.053,.02,e.graphite,22,a,.055999999999999994,0));let d=new q(new _c(.052,.052,.237,24,1,!0),u);d.position.set(a,.21349999999999997,0),l.add(d),l.add($(.056,.056,.014,e.graphite,22,a,.33199999999999996,0));let f=[];for(let t=0;t<8;t++){let n=zd(e,.036,.026);n.position.set(a,s+t*o,0),l.add(n),f.push(n)}r.add(l);let p=Hd(e,{len:.14,r:.02,stroke:c});p.rotation.z=Math.PI/2,p.position.set(.1275,s,0),r.add(p),r.add(Q(.06,.023,.05,e.alu,.1,.0475,0)),r.add($(.024,.024,.024,e.aluDark,18,.075,s,0,{rotZ:Math.PI/2}));let m=-.17,h=.7,g=.26999999999999996,_=.022,v=.08,y=new X;y.position.set(m,.066,0),y.rotation.x=_,y.add(Q(.11,.012,h,e.alu,0,-.006,g));for(let t of[-1,1])y.add(Q(.006,.02,h,e.alu,t*.058,.004,g));y.add(Q(.128,.032,.012,e.aluDark,0,.01,.62)),r.add(y);for(let t of[.02,.35]){let n=.054000000000000006-t*Math.sin(_)-i;r.add(Q(.05,n,.05,e.aluDark,m,i+n/2,t))}let b=new gr({color:4845706,transparent:!0,opacity:.55,depthWrite:!1}),x=new gr({color:16756768,transparent:!0,opacity:.55,depthWrite:!1});function S(t,n,a,o,s){let c=new X;c.add(Q(.028,.044,.028,e.graphite,0,0,0)),c.add($(.009,.009,.004,a,12,.016,0,0,{rotZ:Math.PI/2}));let l=$(.0045,.0045,.006,e.ledOff,8,0,.026,0);c.add(l),c.position.set(-.255,n,t),r.add(c);let u=n-.022-i;r.add(Q(.012,u,.012,e.aluDark,-.255,i+u/2,t));let d=Q(.15,.0025,.0025,o,-.165,n,t,{cast:!1,receive:!1});return d.visible=!1,r.add(d),{led:l,beam:d,onMat:s}}let C=S(-.02,.09199999999999998,e.bluePlastic,b,e.ledBlue),w=S(7*v,.09199999999999998-7*v*Math.sin(_),e.glassClear,x,e.ledAmber),T=Ud(e);T.position.set(.3,i,.18),r.add(T),r.add(td([.3,.126,.16],[.088,.098,.004],.0042,e.blueTube,.04)),r.add(td([.3,.126,.2],[.01,.098,-.004],.0042,e.blueTube,.05,-.02)),r.add(td([.3,.086,.2],[.3,.086,.26],.0055,e.blackCable,.02)),r.add(td([.3,.136,.22],[-.255,.131,.56],.0035,e.blackCable,.05,0)),r.add(td([-.255,.121,.55],[-.255,.121,-.015],.003,e.blackCable,.02));let E=Wd(e);E.group.position.set(.32,i,-.2),r.add(E.group),r.add(qd(e,t,n,`DISTRIBUIÇÃO`));let D=f.slice(),O=[],k=!1,A=null,j=e=>{A=e},M=e=>s-e*Math.sin(_);function N(){let t=f.some(e=>e.position.x<-.095&&Math.abs(e.position.z)<.05),n=f.some(e=>e.position.x<-.095&&Math.abs(e.position.z-7*v)<.05);C.led.material=t?C.onMat:e.ledOff,C.beam.visible=t,w.led.material=n?w.onMat:e.ledOff,w.beam.visible=n}return{group:r,height:.44,ctl:{apply(t,n){if(t!==`eject`)return;if(D.length===0)return E.red.material=e.ledRed,E.amber.material=e.ledOff,E.green.material=e.ledOff,A?.draw(`MAGAZINE VAZIO`,`error`),{stop:`MAGAZINE VAZIO`,message:`Magazine vazio · programa interrompido`};n<.08&&(k=!1);let r=sd(cd(n/.3)),i=sd(cd((n-.42)/.32)),l=sd(cd((n-.62)/.34));p.setExtension(r*(1-l)),D.forEach((e,t)=>{t===0?e.position.set(a-r*c,s,0):e.position.set(a,s+(t-i)*o,0)}),O.forEach(e=>{let t=e.baseZ+r*v;e.mesh.position.set(m,M(t),t)}),N(),!k&&r>.55&&(k=!0,A?.draw(`SAÍDA ${Math.min(8,O.length+1)}/8`,`running`))},commit(t){if(t!==`eject`||D.length===0)return;O.forEach(e=>{e.baseZ+=v,e.mesh.position.set(m,M(e.baseZ),e.baseZ)});let n=D.shift();n.position.set(m,s,0),O.unshift({mesh:n,baseZ:0}),N();let r=O.length>=8;E.red.material=e.ledOff,E.amber.material=r?e.ledOff:e.ledAmber,E.green.material=r?e.ledGreen:e.ledOff,A?.draw(r?`CALHA CHEIA · 8/8`:`SAÍDA ${O.length}/8`,r?`done`:`running`)},reset(){p.setExtension(0),O=[],k=!1,D=f.slice(),f.forEach((e,t)=>{e.visible=!0,e.position.set(a,s+t*o,0)}),N(),E.red.material=e.ledRed,E.amber.material=e.ledOff,E.green.material=e.ledOff},setHmi:j},light:E,persistResult:!0}}var Yd=null,Xd=null;function Zd(e){Yd||(Yd=new mc([[.015,0],[.044,0],[.052,0],[.052,.006],[.049,.01],[.04,.013],[.04,.034],[.037,.039],[.015,.039],[.015,0]].map(([e,t])=>new W(e,t)),40),Yd.computeVertexNormals());let t=new X;t.name=`test-bushing`;let n=new q(Yd,e.traySteel);n.castShadow=!0,n.receiveShadow=!0,t.add(n);let r=$(.0142,.0146,.026,e.chrome,32,0,.019,0);r.castShadow=!0,r.receiveShadow=!0,t.add(r);let i=new q(new ol(.0152,8e-4,6,32),e.aluDark);i.rotation.x=Math.PI/2,i.position.y=.0391,t.add(i);let a=new q(new ol(.0255,.0012,6,36),e.bluePlastic);a.rotation.x=Math.PI/2,a.position.y=.0394,t.add(a);let o=new q(new ol(.034,7e-4,5,36),e.chrome);o.rotation.x=Math.PI/2,o.position.y=.0392,t.add(o);for(let n=0;n<3;n++){let r=n/3*Math.PI*2+Math.PI/6,i=Math.cos(r)*.0455,a=Math.sin(r)*.0455;t.add($(.0033,.0033,.0012,e.graphite,12,i,.0106,a));let o=new q(new ol(.0036,45e-5,5,16),e.chrome);o.rotation.x=Math.PI/2,o.position.set(i,.0112,a),t.add(o)}return t}function Qd(e){if(Xd)return Xd;let t=document.createElement(`canvas`);t.width=256,t.height=256;let n=t.getContext(`2d`);n.fillStyle=`#f4f4ef`,n.fillRect(0,0,256,256),n.beginPath(),n.arc(128,128,116,0,Math.PI*2),n.fillStyle=`#fbfbf7`,n.fill(),n.lineWidth=5,n.strokeStyle=`#5b6268`,n.stroke();for(let e=0;e<=40;e++){let t=Math.PI*.75+e/40*Math.PI*1.5,r=e%5==0,i=r?86:96;n.beginPath(),n.moveTo(128+Math.cos(t)*i,128+Math.sin(t)*i),n.lineTo(128+Math.cos(t)*106,128+Math.sin(t)*106),n.lineWidth=r?3:1.5,n.strokeStyle=e>=36?`#c81020`:`#343a40`,n.stroke()}n.fillStyle=`#343a40`,n.font=`bold 17px Arial`,n.textAlign=`center`,n.textBaseline=`middle`;for(let e=0;e<=4;e++){let t=Math.PI*.75+e/4*Math.PI*1.5;n.fillText(String(e*2),128+Math.cos(t)*70,128+Math.sin(t)*70)}return n.font=`bold 15px Arial`,n.fillText(`bar`,128,171),n.font=`12px Arial`,n.fillText(`PRENSA`,128,193),Xd=new Rs(t),Xd.colorSpace=je,Xd.anisotropy=e,Xd}function $d(e,t,n){let r=new X;r.add(Gd(e));let i=.036,a=.02,o=(e,t,n,r,i,a=0,o=0,s=0)=>{let c=new q(new Td(e,t,n,3,r),i);return c.position.set(a,o,s),c.castShadow=!0,c.receiveShadow=!0,c};for(let t of[-1,1]){r.add(o(.045,.46,.045,.006,e.alu,a,.266,t*.17)),r.add(Q(.008,.4,.012,e.graphite,-.002999999999999999,.27099999999999996,t*.17)),r.add(o(.11,.018,.11,.004,e.aluDark,a,.05399999999999999,t*.17)),r.add(Q(.012,.12,.034,e.aluDark,-.018,.10899999999999999,t*.17,{rotZ:-.55}));for(let n of[-.035,.035])r.add($(.005,.005,.006,e.chrome,6,a+n,.066,t*.17))}r.add(o(.16,.052,.41,.008,e.alu,a,.521,0)),r.add(o(.13,.016,.15,.003,e.graphite,a,.49,0)),r.add(o(.09,.006,.035,.002,e.hazard,-.005000000000000001,.55,.185));let s=Hd(e,{len:.25,r:.032,stroke:.05});s.rotation.x=Math.PI,s.position.set(a,.486,0),r.add(s),r.add($(.044,.044,.018,e.aluDark,24,a,.479,0)),r.add($(.033,.033,.028,e.bluePlastic,24,a,.40399999999999997,0));for(let t of[-1,1]){for(let n of[-1,1])r.add($(.0035,.0035,.215,e.chrome,10,a+t*.043,.34299999999999997,n*.043));r.add($(.007,.007,.31,e.chrome,18,a+t*.072,.311,0)),r.add($(.014,.014,.024,e.aluDark,18,a+t*.072,.46599999999999997,0)),r.add($(.013,.013,.018,e.aluDark,18,a+t*.072,.156,0))}let c=new X;c.name=`test-press-head`,c.position.set(a,.226,0),c.add(o(.19,.028,.15,.005,e.aluDark,0,0,0)),c.add(o(.13,.009,.105,.002,e.steel,0,.018,0));for(let t of[-1,1])c.add($(.015,.015,.05,e.aluDark,18,t*.072,.012,0)),c.add($(.009,.009,.054,e.chrome,16,t*.072,.012,0));c.add($(.027,.03,.022,e.chrome,28,0,-.027,0)),c.add($(.019,.019,.004,e.rubber,24,0,-.039,0));for(let t of[-1,1])for(let n of[-1,1])c.add($(.004,.004,.005,e.chrome,6,t*.05,.025,n*.04));r.add(c),r.add(o(.24,.018,.26,.004,e.aluDark,a,.063,0)),r.add(o(.16,.014,.16,.003,e.steel,a,.07899999999999999,0)),r.add($(.06,.064,.012,e.graphite,32,a,.09,0)),r.add($(.0145,.0145,.003,e.graphite,24,a,.097,0));for(let t=0;t<3;t++){let n=t/3*Math.PI*2;r.add($(.0035,.0035,.016,e.chrome,14,a+Math.cos(n)*.058,.10400000000000001,Math.sin(n)*.058))}for(let t of[-1,1])for(let n of[-1,1])r.add($(.004,.004,.005,e.chrome,6,a+t*.068,.089,n*.068));let l=Zd(e);l.position.set(a,.096,0),r.add(l);let u=new X;u.position.set(-.11,.39099999999999996,.13),u.add($(.045,.045,.024,e.offWhite,28,0,0,0,{rotZ:Math.PI/2}));let d=new q(new ol(.039,.004,8,32),e.chrome);d.rotation.y=-Math.PI/2,d.position.x=-.013,u.add(d);let f=new q(new gc(.0365,40),new Z({map:Qd(e.aniso),roughness:.52,metalness:.04}));f.rotation.y=-Math.PI/2,f.position.x=-.0145,u.add(f);let p=Q(.0018,.028,.0028,e.redPaint,-.016,.01,0);p.name=`test-gauge-needle`,p.rotation.x=-2.05,u.add(p),u.add($(.0055,.0055,.004,e.graphite,16,-.018,0,0,{rotZ:Math.PI/2}));let m=new q(new gc(.037,36),e.glassClear);m.rotation.y=-Math.PI/2,m.position.x=-.019,u.add(m),r.add(u),r.add($(.006,.006,.13,e.aluDark,12,-.045,.39099999999999996,.13,{rotZ:Math.PI/2}));let h=Kd(e,.132,.10999999999999999,.035);h.children[1].material=e.ledGreen,r.add(h),r.add(Q(.014,.04,.014,e.aluDark,.132,.091,.035));let g=new X;g.position.set(.114,.17300000000000001,-.025),g.add(Q(.024,.034,.02,e.graphite,0,0,0)),g.add($(.006,.006,.01,e.steel,12,-.016,.013,0,{rotZ:Math.PI/2}));let _=$(.004,.004,.005,e.ledOff,10,0,.021,0);g.add(_),r.add(g);let v=new X;v.position.set(.285,i,-.12),v.add($(.026,.026,.07,e.offWhite,20,0,.047,0)),v.add($(.023,.023,.035,e.glassClear,20,0,.013,0)),v.add($(.03,.03,.012,e.bluePlastic,20,0,.085,0)),v.add($(.022,.022,.028,e.graphite,18,0,.104,0)),v.add($(.027,.027,.018,e.blackPlastic,18,0,.126,0)),r.add(v);let y=Ud(e);y.position.set(.3,i,.16),r.add(y),r.add(o(.032,.024,.36,.003,e.graphite,.265,.08299999999999999,-.01)),r.add(td([.285,.162,-.12],[.3,.11599999999999999,.14],.0042,e.blueTube,.045,.015)),r.add(td([.3,.126,.16],[.052000000000000005,.426,.006],.0042,e.blueTube,.06)),r.add(td([.3,.126,.2],[.052000000000000005,.286,-.006],.0042,e.blueTube,.075,-.02)),r.add(td([.04,.136,.22],[.24,.11599999999999999,.24],.0042,e.blueTube,.035)),r.add(td([.3,.086,.18],[.3,.086,.25],.0055,e.blackCable,.015)),r.add(td([.132,.126,.035],[.265,.096,.06],.0028,e.blackCable,.025,.01));let b=Wd(e);return b.group.position.set(.32,i,-.2),r.add(b.group),r.add(qd(e,t,n,`TESTE`)),{group:r,height:.55,ctl:{apply(t,n){if(t!==`press`)return;let r=n<.4?sd(n/.4):n<.64?1:1-sd((n-.64)/.36);s.setExtension(r),c.position.y=.226-r*.05,p.rotation.x=-2.05+r*4.1,_.material=n>.3&&n<.75?e.ledRed:e.ledOff},reset(){s.setExtension(0),c.position.y=.226,p.rotation.x=-2.05,_.material=e.ledOff}},light:b}}function ef(e,t,n){let r=new X;r.add(Gd(e));let i=.036;r.add($(.17,.17,.055,e.graphite,28,0,.0635,0));let a=new X;a.position.set(0,.098,0),a.add($(.16,.16,.018,e.aluDark,32,0,.009,0)),a.add($(.035,.035,.03,e.chrome,18,0,.03,0));for(let t=0;t<4;t++){let n=t/4*Math.PI*2,r=Math.cos(n)*.105,i=Math.sin(n)*.105;if(a.add(Q(.07,.016,.07,e.alu,r,.024,i)),a.add(Q(.02,.02,.02,e.graphite,r-.05,.028,i-.05)),t%2==0){let t=zd(e,.032,.024);t.position.set(r,.044,i),a.add(t)}}r.add(a),r.add(Q(.1,.07,.1,e.bluePlastic,.27,.07100000000000001,.02)),r.add($(.012,.012,.075,e.chrome,12,.1835,.096,.02,{rotZ:Math.PI/2}));let o=Ud(e);o.position.set(.3,i,-.19),r.add(o),r.add(td([.3,.126,-.17],[.3,.136,.02],.0042,e.blueTube,.06,-.03)),r.add(td([.3,.126,-.2],[.24,.156,-.2],.0042,e.blueTube,.04)),r.add(td([.26,.066,-.18],[.3,.066,-.14],.0055,e.blackCable,.02));for(let t of[-1,1])r.add(Q(.02,.24,.02,e.yellow,-.33,.156,t*.22)),r.add(Q(.04,.012,.04,e.aluDark,-.33,.041999999999999996,t*.22)),r.add(Q(.024,.024,.024,e.ledRed,-.33,.23600000000000002,t*.22));let s=Wd(e);s.group.position.set(.32,i,-.2),r.add(s.group),r.add(qd(e,t,n,`PROCESSAMENTO`));let c=0;return{group:r,height:.3,ctl:{apply(e,t){e===`rotate`&&(a.rotation.y=-c*(Math.PI/2)-sd(t)*(Math.PI/2))},commit(e){e===`rotate`&&c++},reset(){c=0,a.rotation.y=0}},light:s}}function tf(e){let t=new X;t.name=`assembly-base`,t.add($(.041,.043,.025,e.offWhite,28,0,.0125,0)),t.add($(.043,.043,.005,e.steel,28,0,.0025,0)),t.add($(.034,.034,.004,e.steel,28,0,.027,0)),t.add($(.024,.026,.01,e.aluDark,24,0,.034,0));let n=new q(new ol(.023,.0014,6,28),e.chrome);n.rotation.x=Math.PI/2,n.position.y=.039,t.add(n);for(let n=0;n<3;n++){let r=n/3*Math.PI*2;t.add($(.003,.003,.0012,e.graphite,12,Math.cos(r)*.029,.0294,Math.sin(r)*.029))}return t.add(Q(.007,.005,.01,e.pinkPlastic,.034,.029,0)),t}function nf(e){let t=new X;t.name=`assembly-cap`,t.add($(.031,.031,.016,e.pinkPlastic,26,0,.008,0)),t.add($(.032,.032,.004,e.steel,26,0,.002,0)),t.add($(.013,.014,.006,e.chrome,20,0,.019,0)),t.add(Q(.008,.006,.012,e.pinkPlastic,.028,.009,0));let n=new q(new ol(.026,.001,5,26),e.orangePlastic);return n.rotation.x=Math.PI/2,n.position.y=.0164,t.add(n),t}function rf(e,t,n){let r=new X;r.add(Gd(e));let i=.036,a=.02,o=-.035,s=.045,c=(e,t,n,r,i,a=0,o=0,s=0)=>{let c=new q(new Td(e,t,n,3,r),i);return c.position.set(a,o,s),c.castShadow=!0,c.receiveShadow=!0,c};for(let t of[-1,1]){r.add(c(.045,.5,.045,.006,e.alu,a,.286,t*.21)),r.add(Q(.008,.43,.012,e.graphite,-.002999999999999999,.291,t*.21)),r.add(c(.12,.018,.12,.004,e.aluDark,a,.05399999999999999,t*.21)),r.add(Q(.012,.14,.036,e.aluDark,-.02,.11599999999999999,t*.21,{rotZ:-.5}));for(let n of[-.04,.04])r.add($(.005,.005,.006,e.chrome,6,a+n,.066,t*.21))}r.add(c(.17,.052,.47,.008,e.alu,a,.541,0)),r.add(c(.15,.014,.25,.003,e.graphite,a,.508,0)),r.add(c(.1,.006,.035,.002,e.hazard,0,.5700000000000001,.215));let l=Hd(e,{len:.3,r:.028,stroke:.05});l.rotation.x=Math.PI,l.position.set(a,.506,o),r.add(l),r.add($(.04,.04,.016,e.aluDark,22,a,.499,o)),r.add($(.029,.029,.026,e.bluePlastic,22,a,.426,o));let u=Hd(e,{len:.27,r:.022,stroke:.07});u.rotation.x=Math.PI,u.position.set(a,.506,s),r.add(u),r.add($(.031,.031,.014,e.aluDark,20,a,.499,s)),r.add($(.023,.023,.022,e.bluePlastic,20,a,.436,s));for(let t of[o,s])for(let n of[-1,1])r.add($(.006,.006,.29,e.chrome,16,a+n*.043,.32099999999999995,t)),r.add($(.012,.012,.022,e.aluDark,16,a+n*.043,.46599999999999997,t)),r.add($(.011,.011,.016,e.aluDark,16,a+n*.043,.17600000000000002,t));let d=new X;d.name=`assembly-press-head`,d.position.set(a,.203,o),d.add(c(.14,.026,.12,.004,e.aluDark,0,0,0)),d.add(c(.09,.008,.08,.002,e.steel,0,.017,0));for(let t of[-1,1])d.add($(.013,.013,.046,e.aluDark,16,t*.043,.008,0));d.add($(.022,.025,.02,e.chrome,24,0,-.009,0)),d.add($(.015,.015,.003,e.rubber,20,0,-.02,0)),r.add(d);let f=new X;f.name=`assembly-feeder-head`,f.position.set(a,.23600000000000002,s),f.add(c(.12,.024,.1,.004,e.aluDark,0,0,0));for(let t of[-1,1])f.add($(.011,.011,.042,e.aluDark,16,t*.043,.006,0));f.add($(.018,.02,.02,e.chrome,22,0,-.016,0)),f.add($(.013,.013,.003,e.rubber,18,0,-.027,0)),r.add(f),r.add(c(.23,.02,.25,.004,e.aluDark,a,.057999999999999996,0)),r.add(c(.15,.012,.13,.003,e.steel,a,.074,o)),r.add($(.048,.052,.008,e.graphite,28,a,.08299999999999999,o));for(let t=0;t<3;t++){let n=t/3*Math.PI*2;r.add($(.0035,.0035,.014,e.chrome,14,a+Math.cos(n)*.055,.091,o+Math.sin(n)*.055))}let p=tf(e);p.position.set(a,.076,o),r.add(p);let m=new X;m.name=`assembly-shuttle`,m.position.set(a,.10799999999999998,s),m.add(c(.09,.01,.12,.002,e.aluDark,0,0,0)),m.add(Q(.012,.012,.1,e.chrome,-.034,.008,0)),m.add(Q(.012,.012,.1,e.chrome,.034,.008,0)),r.add(m);let h=Hd(e,{len:.1,r:.016,stroke:.07});h.rotation.x=-Math.PI/2,h.position.set(a,.1,.145),r.add(h),r.add(c(.06,.024,.05,.003,e.aluDark,a,.08299999999999999,.13));let g=nf(e);g.position.set(a,.17600000000000002,s),r.add(g);let _=[g];for(let t=1;t<5;t++){let n=nf(e);n.position.set(a,.17600000000000002+t*.022,s),_.push(n),r.add(n)}r.add(Q(.09,.008,.085,e.aluDark,a,.166,s)),r.add(Q(.004,.13,.085,e.glassClear,-.027,.23600000000000002,s)),r.add(Q(.004,.13,.085,e.glassClear,.067,.23600000000000002,s)),r.add(Q(.09,.13,.004,e.glassClear,a,.23600000000000002,.003999999999999997));for(let t of[-1,1])r.add($(.003,.003,.14,e.chrome,12,a+t*.047,.23600000000000002,.087));r.add(c(.105,.01,.1,.003,e.aluDark,a,.308,s)),r.add(Q(.05,.008,.004,e.hazard,a,.315,.097));let v=Hd(e,{len:.11,r:.02,stroke:.09});v.rotation.z=Math.PI/2,v.position.set(.185,.101,o),r.add(v),r.add(c(.07,.03,.075,.004,e.aluDark,.175,.07100000000000001,o)),r.add($(.025,.025,.024,e.aluDark,16,.148,.101,o,{rotZ:Math.PI/2}));let y=c(.012,.045,.065,.003,e.offWhite,.092,.11099999999999999,o);y.add(Q(.006,.035,.052,e.rubber,-.008,0,0)),r.add(y),r.add(c(.23,.012,.14,.003,e.aluDark,-.145,.049999999999999996,o)),r.add(c(.21,.006,.12,.002,e.rubber,-.145,.059,o));for(let t of[-1,1])r.add(Q(.21,.024,.006,e.alu,-.145,.069,o+t*.06));let b=new X;b.position.set(-.115,.366,.12),b.add($(.043,.043,.024,e.offWhite,28,0,0,0,{rotZ:Math.PI/2}));let x=new q(new ol(.037,.004,8,32),e.chrome);x.rotation.y=-Math.PI/2,x.position.x=-.013,b.add(x);let S=new q(new gc(.0345,40),new Z({map:Qd(e.aniso),roughness:.52,metalness:.04}));S.rotation.y=-Math.PI/2,S.position.x=-.0145,b.add(S);let C=Q(.0018,.026,.0026,e.redPaint,-.016,.009,0);C.name=`assembly-gauge-needle`,C.rotation.x=-2.05,b.add(C),b.add($(.005,.005,.004,e.graphite,16,-.018,0,0,{rotZ:Math.PI/2}));let w=new q(new gc(.035,36),e.glassClear);w.rotation.y=-Math.PI/2,w.position.x=-.019,b.add(w),r.add(b),r.add($(.006,.006,.12,e.aluDark,12,-.045,.366,.12,{rotZ:Math.PI/2}));let T=Kd(e,.123,.11299999999999999,o);T.children[1].material=e.ledGreen;let E=Kd(e,-.076,.141,s);E.children[1].material=e.ledBlue;let D=Kd(e,.11800000000000001,.127,.0049999999999999975);D.children[1].material=e.ledBlue,r.add(T,E,D),r.add(Q(.018,.062,.018,e.aluDark,.123,.093,o)),r.add(Q(.018,.064,.018,e.aluDark,-.076,.119,s)),r.add(Q(.018,.06,.018,e.aluDark,.11800000000000001,.10500000000000001,.0049999999999999975));let O=new X;O.position.set(.112,.182,o),O.add(c(.028,.034,.022,.003,e.graphite,0,0,0)),O.add($(.006,.006,.012,e.steel,12,-.018,.012,0,{rotZ:Math.PI/2}));let k=$(.004,.004,.005,e.ledOff,10,0,.022,0);O.add(k),r.add(O);let A=new X;A.position.set(.29,i,-.2),A.add(c(.09,.026,.065,.003,e.aluDark,0,.035,0)),A.add($(.021,.021,.07,e.offWhite,18,-.026,.078,0)),A.add($(.019,.019,.055,e.offWhite,18,.01,.078,0)),A.add($(.016,.016,.04,e.glassClear,20,.01,.082,0)),A.add($(.022,.022,.008,e.graphite,18,-.026,.112,0)),A.add($(.022,.022,.008,e.graphite,18,.01,.108,0)),r.add(A);let j=Ud(e);j.position.set(.285,i,.12),r.add(j);let M=Ud(e);M.position.set(.285,i,.22),r.add(M),r.add(c(.17,.035,.19,.004,e.aluDark,.285,.043,.17)),r.add(td([.26,.11599999999999999,-.2],[.26,.11599999999999999,.08],.0055,e.blueTube,.04)),r.add(td([.285,.136,.1],[.04,.45599999999999996,o],.0042,e.blueTube,.07)),r.add(td([.3,.146,.1],[.065,.32599999999999996,o],.0042,e.blueTube,.07)),r.add(td([.255,.136,.14],[.05,.45599999999999996,s],.0042,e.blueTube,.06)),r.add(td([.285,.146,.2],[.05500000000000001,.126,.14],.0042,e.blueTube,.06)),r.add(td([.3,.146,.24],[.18,.126,o],.0042,e.blueTube,.06)),r.add(td([.3,.076,.12],[.3,.076,-.3],.0055,e.blackCable,.03)),r.add(Q(.045,.025,.23,e.graphite,.34,.07100000000000001,.02)),r.add(td([.34,.086,-.1],[.34,.086,.27],.004,e.blackCable,.02));let N=Wd(e);N.group.position.set(.33,i,-.12),r.add(N.group),r.add(qd(e,t,n,`MONTAGEM`));let P=(e,t,n)=>sd(cd((e-t)/(n-t))),F=[`ALIMENTANDO`,`POSICIONANDO`,`PRENSANDO`,`VERIFICANDO`,`EXPULSANDO`],I=[],L=0,R=null,z=-1,ee=null,te=e=>{ee=e};function B(){return L>=_.length?!1:(R=_[L],R.visible=!0,R.position.set(a,.17600000000000002,s),z=-1,!0)}function ne(t=!1,n=!1){T.children[1].material=e.ledGreen,E.children[1].material=R&&re?e.ledBlue:e.ledOff,D.children[1].material=n?e.ledBlue:e.ledOff,k.material=t?e.ledRed:e.ledOff}let re=!1,ie={apply(t,n){if(t!==`assemble`)return;if(L>=_.length)return N.red.material=e.ledRed,N.amber.material=e.ledOff,N.green.material=e.ledOff,ee?.draw(`MAGAZINE VAZIO`,`error`),{stop:`MAGAZINE VAZIO`,message:`Magazine de tampas vazio · programa interrompido`};if(R||B(),!R)return;let r=P(n,0,.22)*(1-P(n,.28,.42)),i=P(n,.2,.4)*(1-P(n,.9,1)),o=P(n,.36,.56)*(1-P(n,.64,.76)),c=P(n,.76,.9)*(1-P(n,.94,1)),g=P(n,0,.22)*.057+o*.006,b=P(n,.2,.4);u.setExtension(r),h.setExtension(i),l.setExtension(o),v.setExtension(c),f.position.y=.23600000000000002-r*.07,d.position.y=.203-o*.05,m.position.z=s-i*.08,R.position.set(a,.17600000000000002-g,s-b*.08),p.position.x=a-c*.14,y.position.x=.092-c*.13,C.rotation.x=-2.05+o*4.1,re=n>.08&&n<.42,ne(o>.35,i>.1&&i<.95);let x=n<.2?0:n<.36?1:n<.64?2:n<.76?3:4;x!==z&&(z=x,ee?.draw(F[z],z===4?`done`:`running`)),N.red.material=e.ledOff,N.amber.material=z<3?e.ledAmber:e.ledOff,N.green.material=z>=3?e.ledGreen:e.ledOff},commit(t){if(t!==`assemble`||!R||L>=_.length)return;let n=new X;n.name=`assembly-finished-${L+1}`;let i=tf(e),c=nf(e);n.add(i,c),c.position.y=.04,n.position.set(-.11-I.length*.078,.061,o),r.add(n),I.push(n),R.visible=!1,R=null,L+=1;for(let e=L;e<_.length;e++)_[e].position.set(a,.17600000000000002+(e-L)*.022,s);p.position.set(a,.076,o),y.position.x=.092,N.green.material=L<_.length?e.ledGreen:e.ledOff,N.amber.material=L<_.length?e.ledAmber:e.ledOff,N.red.material=L>=_.length?e.ledRed:e.ledOff,ee?.draw(L>=_.length?`MAGAZINE VAZIO`:`MONTAGEM ${L}/${_.length}`,L>=_.length?`error`:`done`)},reset(){for(let e of I)r.remove(e);I.length=0,L=0,R=null,z=-1,re=!1,_.forEach((e,t)=>{e.visible=!0,e.position.set(a,.17600000000000002+t*.022,s)}),l.setExtension(0),u.setExtension(0),h.setExtension(0),v.setExtension(0),d.position.y=.203,f.position.y=.23600000000000002,m.position.z=s,p.position.set(a,.076,o),y.position.x=.092,C.rotation.x=-2.05,ne(),N.red.material=e.ledOff,N.amber.material=e.ledAmber,N.green.material=e.ledOff},setHmi:te};return reset(),{group:r,height:.56,ctl:ie,light:N,persistResult:!0}}function af(e,t,r){let i=new X;i.add(Gd(e));let a=.036,o=.84,s=.27,c=new X;c.position.set(0,a,0),c.add(Q(.33,.024,o,e.graphite,0,.012,0));for(let t of[-1,1])c.add(Q(.035,.03,o,e.alu,t*.325/2,.045,0)),c.add(Q(.01,.05,o,e.aluDark,t*.29000000000000004/2,.075,0));let l=e.textures.belt.clone();l.wrapS=l.wrapT=n,l.repeat.set(1,o/.14),l.needsUpdate=!0;let u=new Z({map:l,roughness:.88,metalness:.04,color:3115863}),d=new q(new vi(s,o),u);d.rotation.x=-Math.PI/2,d.position.y=.06,d.receiveShadow=!0,c.add(d);for(let t of[-.84/2,o/2])c.add($(.03,.03,s,e.steel,16,0,.06,t,{rotZ:Math.PI/2}));i.add(c);let f=.32,p=.4,m=.071,h=.32,g=.05,_=[`metal`,`colored`,`black`],v={metal:`METÁLICA`,colored:`PLÁSTICA COLORIDA`,black:`PLÁSTICA PRETA`},y={metal:`RAMPA 1`,colored:`RAMPA 2`,black:`RAMPA 3`},b={metal:{z:.12,color:e.bluePlastic,label:`METÁLICAS`,sub:`RAMPA 1`},colored:{z:-.04,color:e.orangePlastic,label:`COLORIDAS`,sub:`RAMPA 2`},black:{z:-.2,color:e.blackPlastic,label:`PRETAS`,sub:`RAMPA 3`}},x=-.18;for(let t of _){let n=b[t],r=n.z;i.add(Q(.22,.006,.08,e.alu,.245,.088,r,{rotZ:x}));for(let t of[-1,1])i.add(Q(.22,.018,.004,e.alu,.245,.098,r+t*.042,{rotZ:x}));i.add(Q(.2,.004,.005,n.color,.245,.10799999999999998,r-.043,{rotZ:x})),i.add(Q(.04,.08,.09,e.aluDark,.375,.076,r))}i.add(Q(.05,.018,.52,e.alu,.3,.216,0));for(let t of[-1,1])i.add(Q(.03,.18,.03,e.aluDark,.375,.126,t*.24)),i.add(Q(.08,.02,.03,e.aluDark,.34,.20700000000000002,t*.24));let S={};for(let t of _){let n=b[t].z,r=Hd(e,{len:.1,r:.018,stroke:.12});r.rotation.z=Math.PI/2,r.position.set(.23,.196,n),i.add(r),i.add(Q(.05,.02,.03,e.aluDark,.265,.20600000000000002,n));let a=Q(.012,.11,.06,e.yellow,.124,.151,n);i.add(a),S[t]={piston:r,paddle:a}}for(let n of _){let r=b[n];i.add(Q(.004,.05,.1,e.aluDark,.302,.251,r.z));let a=new q(new vi(.2,.075),Qu(t,r.label,r.sub));a.scale.setScalar(.42),a.position.set(.2995,.258,r.z),a.rotation.y=-Math.PI/2,i.add(a)}let C={leds:{},beam:null};for(let[t,n]of[[`metal`,-1],[`color`,1]]){let r=new X;r.add(Q(.03,.05,.03,e.graphite,0,0,0));let a=t===`metal`?e.bluePlastic:e.glassClear;r.add($(.009,.009,.004,a,12,-n*.017,0,0,{rotZ:Math.PI/2}));let o=$(.0045,.0045,.006,e.ledOff,8,0,.028,0);r.add(o),r.position.set(n*.19,.151,f),i.add(r),i.add(Q(.014,.11,.014,e.aluDark,n*.19,.091,f)),i.add(Q(.05,.012,.05,e.aluDark,n*.19,.041999999999999996,f)),C.leds[t]=o}let w=Q(.34,.0025,.0025,new gr({color:4845706,transparent:!0,opacity:.55,depthWrite:!1}),0,.118,f,{cast:!1,receive:!1});w.visible=!1,i.add(w),C.beam=w;let T=(n,r,a)=>{i.add(Q(.01,.03,.01,e.aluDark,a*.19,.196,f));let o=new q(new vi(.2,.075),Qu(t,n,r));o.scale.setScalar(.34),o.position.set(a*.199,.221,f),o.rotation.y=a*Math.PI/2,i.add(o)};T(`INDUTIVO`,`METAL`,-1),T(`ÓPTICO`,`COR`,1);let E=Ud(e);E.position.set(.31,a,.32),i.add(E),i.add(td([.31,.126,.3],[.3,.216,.24],.0042,e.blueTube,.04,.01)),i.add(td([.31,.126,.34],[.23,.196,.12],.0042,e.blueTube,.06,.02)),i.add(td([.31,.086,.36],[.36,.046,.24],.0055,e.blackCable,.02));let D=Wd(e);D.group.position.set(-.32,a,-.2),i.add(D.group),i.add(qd(e,t,r,`TRANSFERÊNCIA`));let O=[];for(let t=0;t<16;t++){let t=Rd(e,.032,.022);t.visible=!1,t.userData.inUse=!1,c.add(t),O.push(t)}let k=[],A={metal:[],colored:[],black:[]},j=0,M=0,N=0,P=0,F=null,I=null,L=``,R=null,z={sortMetal:`metal`,sortColor:`colored`,sortBlack:`black`},ee=e=>Object.prototype.hasOwnProperty.call(z,e),te=.06,B=e=>{R=e};function ne(e,t){let n=O.find(e=>!e.userData.inUse);if(!n)return null;n.userData.inUse=!0,n.visible=!0,n.userData.setType(e),n.position.set(0,m,t);let r={mesh:n,type:e,z:t,classified:!1};return k.push(r),r}function re(){M>=9||k.length>=5||k.some(e=>e.z>.28)||(ne(_[j%_.length],p),j+=1,M+=1,N=0)}let ie=()=>M>=9&&k.length===0;function ae(){let t=k.find(e=>Math.abs(e.z-f)<=.05)||null,n=!!t&&t.type===`metal`,r=!!t&&t.type!==`black`;C.leds.metal.material=n?e.ledBlue:e.ledOff,C.leds.color.material=r?e.ledGreen:e.ledOff,C.beam.visible=!!t,C.beam.material.color.set(r?4845706:16734794),t?t.type!==L&&(L=t.type,t.classified=!0,R?.draw(`${v[t.type]} · ${y[t.type]}`,`running`)):L&&=``}function oe(e){if(e){P+=e,N=Math.max(0,N+e);for(let t=k.length-1;t>=0;t--){let n=k[t];n.z-=e,n.z>p&&(n.z=p),n.z<-.42&&(n.z+=.8200000000000001),n.mesh.position.z=n.z}N>=.14&&re(),ae(),l.offset.y=-(P/.14)%1}}function se(e,t){let n=A[t];if(n.push(e),e.mesh.position.set(h,g+(n.length-1)*.022,b[t].z),n.length>3){let e=n.shift();e.mesh.visible=!1,e.mesh.userData.inUse=!1}n.forEach((e,n)=>{e.mesh.position.set(h,g+n*.022,b[t].z)});let r=k.indexOf(e);r>=0&&k.splice(r,1)}function ce(e){let t=b[e].z,n=null,r=te;for(let i of k){if(i.type!==e)continue;let a=Math.abs(i.z-t);a<=r&&(r=a,n=i)}if(n)return n;r=1/0;for(let i of k){if(i.type!==e)continue;let a=i.z-t;a>te&&a<r&&(r=a,n=i)}return n}function le(e){let t=z[e],n=ce(t);F={action:e,type:t,target:n,gap:n?n.z-b[t].z:0,lockP:0,moved:0,movedAtLock:0,lastP:0}}function V(){if(!F)return;let{target:e,type:t}=F;e&&e.mesh.userData.inUse&&Math.abs(e.z-b[t].z)<.012&&se(e,t),F=null}function ue(e,t){F&&F.action===e||le(e);let n=b[F.type].z,r=Math.min(t,.68);if(F.target){let e=Math.max(.001,.68-F.lockP),t=sd(cd((r-F.lockP)/e)),n=F.gap*t-(F.moved-F.movedAtLock);Math.abs(n)>1e-6&&(F.moved+=n,oe(n))}else{let e=.45*Math.max(0,r-F.lastP)/.68;e>0&&(F.moved+=e,oe(e));let t=ce(F.type);t&&(F.target=t,F.gap=t.z-n,F.lockP=r,F.movedAtLock=F.moved)}F.lastP=r;let i=cd((t-.68)/.32),a=i<.28?sd(i/.28):i<.72?1:1-sd((i-.72)/.28),o=S[F.type];o.piston.setExtension(a),o.paddle.position.x=.124-a*.12;let s=F.target;if(s){let e=cd((i-.36)/.36);if(e>0){let t=sd(e);s.mesh.position.x=.12+t*.2,s.mesh.position.y=m-t*.02099999999999999,s.mesh.position.z=b[F.type].z,s.z=b[F.type].z}else s.mesh.position.x=a*.12}}function de(){for(let e of _)S[e].piston.setExtension(0),S[e].paddle.position.x=.124,A[e].forEach(e=>{e.mesh.visible=!1,e.mesh.userData.inUse=!1});k.forEach(e=>{e.mesh.visible=!1,e.mesh.userData.inUse=!1}),k=[],A={metal:[],colored:[],black:[]},P=0,N=0,j=1,M=1,F=null,I=null,L=``,l.offset.y=0,C.leds.metal.material=e.ledOff,C.leds.color.material=e.ledOff,C.beam.visible=!1,ne(`metal`,p),ae()}let fe={apply(e,t){if((e===`belt`||ee(e))&&ie())return{stop:`LOTE CONCLUÍDO`,message:`Lote concluído · todas as peças separadas`,kind:`done`};if(e===`belt`){I||={action:`belt`,last:0};let e=t*.5,n=e-I.last;I.last=e,n>0&&oe(n)}else ee(e)&&ue(e,t)},commit(e){e===`belt`?I=null:ee(e)&&V()},reset:de,setHmi:B};return de(),{group:i,height:.27,ctl:fe,light:D,persistResult:!0}}function of(e,t,{length:n,stationZs:r,codes:i,types:a}){let o=new X,s=.8;if(o.add(Q(s,.1,n,e.whitePaint,0,.1,0)),o.add(Q(s,.3,n,e.whitePaint,0,.75,0)),o.add(Q(.74,.03,n-.06,e.graphite,0,.17,0)),o.add(Q(.06,.84,n,e.whitePaint,.36,.48,0)),o.add(Q(s,.84,.035,e.whitePaint,0,.48,-n/2+.0175)),o.add(Q(s,.84,.035,e.whitePaint,0,.48,n/2-.0175)),r.length>0)for(let t=1;t<r.length;t++){let n=(r[t-1]+r[t])/2;o.add(Q(.7200000000000001,.44,.03,e.offWhite,0,.39,n))}let c=[-n/2+.03];for(let e=1;e<r.length;e++)c.push((r[e-1]+r[e])/2);c.push(n/2-.03);for(let t=1;t<c.length;t++){let n=c[t-1]+.014,r=c[t]-.014;r-n<.05||o.add(Q(.03,.41,r-n,e.whitePaint,-.385,.395,(n+r)/2))}for(let t of r)for(let n of[-.19,.19]){let r=Q(.2,.16,.12,e.lightGrey,.12,.3,t+n);r.rotation.x=-.32,o.add(r);let i=Q(.16,.1,.01,e.darkGrey,.02,.31,t+n);i.rotation.x=-.32,o.add(i);let a=td([0,.24,t+n],[-.16,.03,t+n+.02],.006,e.blackCable,.05);o.add(a)}o.add(Q(.86,.045,n,e.benchTop,0,.9225,0));for(let t of[-1,1])o.add(Q(.035,.05,n,e.alu,t*.43,.9,0));for(let t=0;t<=Math.round(n/1.8);t++){let r=-n/2+.12+t*(n-.24)/Math.max(1,Math.round(n/1.8));for(let t of[-1,1])o.add(Q(.07,.05,.07,e.blackPlastic,t*.3,.025,r))}let l=[];r.forEach((n,r)=>{let s=new X;s.position.set(-.41,.72,n),s.add(Q(.03,.32,.3,e.offWhite,0,0,0));let c=[[e.greenPlastic,-.1],[e.senaiRed,-.035],[e.yellow,.03],[e.blackPlastic,.095]];for(let[e,t]of c){let n=$(.016,.016,.012,e,14,-.02,-.055,t,{rotZ:Math.PI/2});s.add(n)}let u=$(.017,.017,.012,e.lightGrey,14,-.02,0,-.11,{rotZ:Math.PI/2});s.add(u);let d=Q(.02,.07,.07,e.yellow,-.018,0,.12);s.add(d);let f=$(.028,.024,.02,e.redPaint,16,-.04,0,.12,{rotZ:Math.PI/2});s.add(f),o.add(s);let p=Bd(e,t,i[r],a[r],n);o.add(p.root),l.push(p)});let u=new X;u.position.set(.3,0,n/2-.4),u.add(Q(.09,.1,.06,e.graphite,0,1.02,0)),u.add($(.035,.035,.14,e.offWhite,16,0,.88,0)),u.add($(.032,.032,.02,e.bluePlastic,16,0,.79,0)),u.add($(.04,.04,.02,e.offWhite,16,0,1.1,0,{rotX:Math.PI/2}));let d=td([.3,1.11,n/2-.4],[.22,4.9,n/2-.9],.012,e.blueTube,0);o.add(u,d);for(let t of[-n/3,n/3]){let n=td([.12,.15,t],[.32,.02,t+.4],.009,e.blackCable,.06);o.add(n)}return{group:o,hmis:l}}var sf={distribution:{name:`Estação de Distribuição`,type:`Pneumática`,desc:`Retira a peça do magazine de coluna com cilindro de ejeção e a deposita na rampa acumuladora. Um sensor indutivo confirma cada peça liberada e um sensor óptico no fim da rampa indica quando a calha está cheia.`,tech:[`Cilindro duplo efeito`,`Válvula 5/2`,`Sensor indutivo`,`Sensor óptico reflexivo`,`Magazine tubular transparente`,`Rampa acumuladora`],tip:`Cada comando de ejeção libera uma peça do magazine e empurra a fila na rampa, que acumula as 8 peças. O sensor indutivo acende a cada peça na saída e o óptico no fim da rampa indica calha cheia. Quando o magazine esvazia, o programa para e as peças permanecem na rampa.`},test:{name:`Estação de Teste`,type:`Pneumática`,desc:`Prensa pneumática que verifica a montagem da peça. O cilindro desce sob pressão controlada e a altura final é conferida por sensores, com leitura no manômetro.`,tech:[`Prensa pneumática`,`Manômetro`,`Válvula reguladora`,`Sensores de posição`],tip:`A prensa desce até encostar na peça do ninho. Observe o manômetro: a leitura indica a pressão aplicada durante o teste.`},processing:{name:`Estação de Processamento`,type:`Eletropneumática`,desc:`Mesa rotativa indexada em quatro posições. O atuador gira a mesa em 90° a cada ciclo, permitindo usinar ou inspecionar a peça em pontos distintos.`,tech:[`Atuador rotativo`,`Mesa indexada 4 posições`,`Sensores de fim de curso`],tip:`A mesa gira 90° a cada comando, levando as peças apoiadas nos dispositivos para a próxima posição. A cortina de luz protege o acesso.`},assembly:{name:`Estação de Montagem`,type:`Eletropneumática`,desc:`Célula de montagem com alimentador, shuttle de posicionamento, prensa e expulsor lateral. Sensores confirmam cada etapa e um magazine transparente fornece cinco tampas por ciclo.`,tech:[`Magazine de 5 tampas`,`Shuttle linear`,`Prensa pneumática`,`Sensores de posição`,`Expulsor lateral`],tip:`O alimentador captura a tampa, o shuttle a leva até a base, a prensa assenta o conjunto e o expulsor o envia para a bandeja. Ao usar as cinco tampas, o programa é interrompido até a reposição.`},storage:{name:`Estação de Armazenagem`,type:`Pneumática`,desc:`Estante de três níveis que recebe e organiza as bandejas produzidas. O fluxo é controlado por sensores de nível e pelo CLP da bancada.`,tech:[`Estante 3 níveis`,`Sensores de nível`,`Bandejas octogonais`],tip:`As peças ficam apoiadas nas prateleiras; o comando apenas desloca a peça para a posição de armazenagem, sem tirá-la do nível.`},conveyor:{name:`Estação de Transferência`,type:`Sensoriamento`,desc:`Esteira com triagem por material. Um sensor indutivo identifica peças metálicas e um sensor óptico reflexivo distingue o plástico colorido do preto (sem reflexão). Três desviadores laterais encaminham cada peça para a rampa correspondente.`,tech:[`Esteira transportadora`,`Sensor indutivo`,`Sensor óptico reflexivo`,`3 cilindros de desvio`,`3 rampas de triagem`],tip:`A leitura é: indutivo ligado = metálica; indutivo desligado e óptico ligado = plástico colorido; os dois desligados = plástico preto. Cada bloco de separação alinha a peça com o cilindro e a desvia. O lote tem 9 peças (3 de cada tipo) e é finito: as peças que não são desviadas voltam para o início da esteira e continuam rodando. Quando todas forem separadas, o programa para com LOTE CONCLUÍDO.`}};function cf({code:e,kind:t,lineX:n,facing:r,z:i,group:a,height:o,sizeZ:s=.9}){let c=sf[t],l=new q(new Wr(.8,1,s),new gr({transparent:!0,opacity:0,depthWrite:!1}));return l.position.set(0,.42,0),a.add(l),{code:e,kind:t,name:c.name,type:c.type,desc:c.desc,tech:c.tech,tip:c.tip,group:a,labelHeight:o+.32,hitbox:l,lineX:n,facing:r,z:i,station:!0}}function lf(e,t){let n=new X;n.name=`production-lines`;let r=[],i=[];function a(t,n,r){let i={programMode:!1};t.hmi=r,t.state=i,n.ctl?.setHmi?.(r);let a=t=>{let r=n.light;r&&(r.red.material=t===`all`||t===`red`?e.ledRed:e.ledOff,r.amber.material=t===`all`||t===`amber`?e.ledAmber:e.ledOff,r.green.material=t===`all`||t===`green`?e.ledGreen:e.ledOff)};return t.setProgramMode=(e,t=!1)=>{i.programMode=e,e?(n.persistResult&&n.ctl?.reset?.(),r?.draw(`MODO PROGRAMA`,`ready`)):(t&&n.persistResult||n.ctl?.reset?.(),a(`all`),r?.draw(`TOQUE PARA PROGRAMAR`,`idle`))},t.programStep=(t,r)=>{if(t===`signalGreen`)a(`green`);else if(t===`signalAmber`)a(`amber`);else if(t===`signalOff`)a(`off`);else if(t===`piece`&&n.light)n.light.green.material=Math.floor(r*5)%2==0?e.ledGreen:e.ledOff;else return n.ctl?.apply?.(t,r)},t.programCommit=e=>{n.ctl?.commit?.(e),e===`piece`&&a(`green`)},t}let o=[-2.7,-1.62,-.54,.54,1.62,2.7],s=[`MPS-01`,`MPS-02`,`MPS-03`,`MPS-04`,`MPS-05`,`MPS-06`],c=[`DISTRIBUIÇÃO`,`TESTE`,`PROCESSAMENTO`,`MONTAGEM`,`TESTE`,`TRANSFERÊNCIA`],l=[`distribution`,`test`,`processing`,`assembly`,`test`,`conveyor`],u=new X;u.position.set(2,0,0);let d=of(e,t,{length:7.2,stationZs:o,codes:s,types:c});u.add(d.group);let f=[Jd,$d,ef,rf,$d,af];o.forEach((n,i)=>{let o=f[i](e,t,s[i]);o.group.position.set(0,Vd,n),u.add(o.group);let c=cf({code:s[i],kind:l[i],lineX:2,facing:-1,z:n,group:o.group,height:o.height});a(c,o,d.hmis[i]),r.push(c)}),n.add(u);let p=[-3,-1.9,1.9,3],m=[3,1.9,-1.9,-3],h=[`MPS-07`,`MPS-08`,`MPS-09`,`MPS-10`],g=[`DISTRIBUIÇÃO`,`TESTE`,`MONTAGEM`,`TRANSFERÊNCIA`],_=[`distribution`,`test`,`assembly`,`conveyor`],v=[Jd,$d,rf,af],y=new X;y.position.set(-2,0,0),y.rotation.y=Math.PI;let b=of(e,t,{length:7.8,stationZs:p,codes:h,types:g});y.add(b.group),p.forEach((n,i)=>{let o=v[i](e,t,h[i]);o.group.position.set(0,Vd,n),y.add(o.group);let s=cf({code:h[i],kind:_[i],lineX:-2,facing:1,z:m[i],group:o.group,height:o.height});a(s,o,b.hmis[i]),r.push(s)}),n.add(y);let x=new X;x.position.set(-2,Vd,0);let S=Q(.72,.02,2.35,e.aluDark,0,.01,.05);x.add(S);let C=e.graphite;for(let e of[-1,1.05])x.add(Q(.72,.03,.04,C,0,.03,e));n.add(x),n.updateMatrixWorld(!0);let w=new K;for(let e of r)e.group.getWorldPosition(w),e.world=w.clone(),e.labelPos=new K(w.x,Vd+e.labelHeight,w.z),e.focus={pos:new K(w.x-Math.sign(w.x)*1.6,1.82,w.z+.75),target:new K(w.x,1.15,w.z)};return{root:n,stations:r,updaters:i}}function uf(e,t=4,n=.75,r=.74){let i=new X,a=Q(n,.04,t,e.deskWhite,0,r,0);i.add(a);let o=e.aluDark,s=Math.max(1,Math.round(t/1.7));for(let e=0;e<=s;e++){let a=-t/2+.12+e*(t-.24)/s;for(let e of[-1,1])i.add(Q(.05,r-.04,.05,o,e*(n/2-.08),(r-.04)/2,a));i.add(Q(n-.1,.04,.05,o,0,.12,a))}return i.add(Q(.16,.04,t-.3,e.aluDark,.12,r-.09,0)),i}var df=new gr({visible:!1});function ff(e,t=.55,n=.33){let r=new X,i=n/2+.28,a=new q(new Td(t+.018,n+.018,.026,3,.006),e.monitorBlack);a.position.set(0,i,0);let o=new q(new vi(t-.016,n-.026),e.screen);o.position.set(0,i,.0135);let s=new q(new vi(t+.16,n+.14),df);s.position.set(0,i,.02),s.visible=!1,s.userData.devScreen=!0;let c=new q(new Td(t*.9,n*.86,.05,2,.012),e.monitorBlack);c.position.set(0,i,-.035);let l=Q(.055,.27,.045,e.monitorBlack,0,.135,-.035),u=new q(new Td(.3,.016,.21,2,.006),e.monitorBlack);return u.position.set(0,.008,-.02),r.add(a,o,s,c,l,u),r}function pf(e){let t=new X,n=new q(new Td(.44,.016,.152,3,.005),e.monitorBlack);n.position.y=.008,t.add(n);let r=.0281,i=.0032,a=[{z:-.0562,widths:Array(15).fill(1)},{z:-.0281,widths:Array(15).fill(1)},{z:0,widths:[1.75,...Array(12).fill(1),1.25]},{z:r,widths:[2.1,...Array(11).fill(1),1.9]},{z:r*2,widths:[1.25,1.25,1.25,6.25,1.25,1.25,1.25,1.25]}],o=[];for(let e of a){let t=-.21075;for(let n of e.widths){let a=n*r-i;o.push(id(a,.008,.0249,t+a/2+i/2,.02,e.z)),t+=n*r}}return t.add(rd(o,e.graphite)),t}function mf(e){let t=new X,n=new q(new Td(.066,.024,.11,3,.011),e.blackPlastic);n.position.y=.012;let r=new q(new Td(.06,.02,.098,3,.014),e.blackPlastic);r.position.set(0,.03,-.004);let i=Q(.0016,.0022,.046,e.rubber,0,.0398,.022,{cast:!1}),a=$(.0075,.0075,.008,e.rubber,14,0,.039,.004,{rotZ:Math.PI/2});return t.add(n,r,i,a),t}var hf=(e,t,n,r,i=.028)=>{let a=new q(new Td(e,t,n,3,i),r);return a.castShadow=!0,a.receiveShadow=!0,a};function gf(e,t,n,r,i){let a=new K(...e),o=new K(...t),s=o.clone().sub(a),c=s.length(),l=s.normalize(),u=new K(0,1,0).cross(l).normalize(),d=l.clone().cross(u).normalize(),f=new q(new Wr(n,r,c),i);return f.matrixAutoUpdate=!1,f.matrix.makeBasis(u,d,l).setPosition(a.add(o).multiplyScalar(.5)),f.castShadow=!0,f.receiveShadow=!0,f}function _f(e){let t=new X,n=.092,r=.3;t.add($(.058,.058,.052,e.monitorBlack,20,0,n,0));for(let i=0;i<5;i++){let a=i/5*Math.PI*2+Math.PI/5,o=[Math.cos(a)*r,.07,Math.sin(a)*r];t.add(gf([0,n,0],o,.052,.034,e.monitorBlack)),t.add($(.015,.015,.03,e.aluDark,10,o[0],.055,o[2])),t.add(Q(.048,.028,.036,e.monitorBlack,o[0],.04,o[2]));let s=new X;s.position.set(o[0],.033,o[2]),s.rotation.y=-(a+Math.PI/2);for(let t of[-1,1]){let n=$(.033,.033,.014,e.rubber,16,t*.015,0,0,{rotZ:Math.PI/2});s.add(n)}t.add(s)}t.add($(.032,.036,.15,e.monitorBlack,16,0,.165,0)),t.add($(.019,.019,.18,e.aluDark,12,0,.32,0)),t.add(Q(.34,.03,.3,e.monitorBlack,0,.398,.01));let i=hf(.47,.085,.45,e.chairBlack);i.position.set(0,.445,.015),t.add(i),t.add(Q(.085,.17,.05,e.monitorBlack,0,.475,-.205,{rotX:.22}));let a=new X;a.position.set(0,.49,-.215),a.rotation.x=-.1;let o=hf(.44,.52,.085,e.chairBlack,.03);o.position.set(0,.27,-.005),a.add(o),t.add(a);for(let n of[-1,1]){t.add(Q(.035,.16,.05,e.monitorBlack,n*.245,.52,.02));let r=hf(.075,.032,.26,e.chairBlack,.014);r.position.set(n*.245,.61,.02),t.add(r)}return t}function vf(e){let t=new X,n=new q(new Td(.21,.43,.44,3,.008),e.blackPlastic);n.position.y=.227;let r=new q(new Td(.014,.4,.4,2,.005),e.monitorBlack);r.position.set(-.104,.227,0),t.add(n,r);for(let n=0;n<7;n++)t.add(Q(.004,.24,.016,e.rubber,-.112,.19,-.15+n*.05,{cast:!1}));t.add($(.011,.011,.006,e.darkGrey,16,-.112,.38,.15,{rotZ:Math.PI/2})),t.add($(.004,.004,.007,e.ledBlue,10,-.113,.345,.15,{rotZ:Math.PI/2}));for(let n=0;n<6;n++)t.add(Q(.15,.004,.008,e.rubber,0,.443,-.13+n*.052,{cast:!1}));for(let n of[-1,1])for(let r of[-1,1])t.add($(.012,.012,.012,e.rubber,8,n*.075,.006,r*.16));return t}function yf(e){let t=new X;t.name=`props`;let n=[],r=uf(e,6,.75,.74);r.position.set(6.35,0,.8),t.add(r);let i=[-1.6,-.1,1.4,2.9];i.forEach((r,i)=>{let a=ff(e);a.position.set(6.32,.76,r),a.rotation.y=-Math.PI/2,a.userData.seat={stand:new K(5.08,1.58,r),eye:new K(5.58,1.16,r),look:new K(6.32,1.19,r)},t.add(a),n.push(a);let o=pf(e);o.position.set(6.12,.768,r),o.rotation.y=-Math.PI/2,t.add(o);let s=mf(e);s.position.set(6.16,.76,r+.29),s.rotation.y=Math.PI/2,t.add(s),i%2==0&&t.add((()=>{let t=vf(e);return t.position.set(6.32,0,r+(i===0?-.35:.35)),t})())}),i.forEach((n,r)=>{let i=_f(e);i.position.set(5.45,0,n),i.rotation.y=Math.PI/2+(r%2?-.13:.09),t.add(i)});let a=uf(e,5.4,.7,.74);a.position.set(-6.7,0,4.2),t.add(a);for(let[r,i]of[2.4,4.1,5.8].entries()){let a=ff(e);a.position.set(-6.62,.76,i),a.rotation.y=Math.PI/2,a.userData.seat={stand:new K(-5.55,1.58,i),eye:new K(-6.08,1.16,i),look:new K(-6.62,1.19,i)},t.add(a),n.push(a);let o=pf(e);o.position.set(-6.47,.768,i),o.rotation.y=Math.PI/2,t.add(o);let s=mf(e);s.position.set(-6.45,.76,i+.29),s.rotation.y=-Math.PI/2,t.add(s);let c=_f(e);c.position.set(-5.95,0,i),c.rotation.y=-Math.PI/2+(r%2?.12:-.09),t.add(c)}let o=new X;o.position.set(-6.7,0,7.9);for(let t=0;t<3;t++)o.add(Q(1.1,.02,.12,e.cardboard,0,.08+t*.14,-.4+t*.4-.4));o.add(Q(1.15,.02,1,e.cardboard,0,.03,0));for(let t=0;t<4;t++)o.add(Q(.09,.06,1,e.graphite,-.45+t*.3,0,0));for(let t=0;t<3;t++){let n=Q(.5,.34,.44,e.cardboard,t%2*.52-.26,.22+Math.floor(t/2)*.36,t%2*.1);o.add(n)}t.add(o);let s=new X;s.position.set(-7.35,0,10.4),s.add(Q(.5,1.9,1,e.offWhite,0,.95,0)),s.add(Q(.01,.02,.44,e.graphite,.255,1.2,-.24)),s.add(Q(.01,.02,.44,e.graphite,.255,1.2,.24)),t.add(s);let c=new X;c.position.set(-5.7,0,-6.7),c.rotation.y=.35;let l=2.5,u=1.62,d=e.graphite.clone();d.roughness=.88,d.metalness=.08,c.add(Q(2.15,.06,.46,e.graphite,0,.03,.06));for(let t of[-1,1])c.add(Q(.07,.8600000000000001,.07,e.aluDark,t*1.02,.49000000000000005,-.1));c.add(Q(2.04,.05,.05,e.aluDark,0,.24,-.1)),c.add(Q(l,1.52,.035,d,0,u,-.035)),c.add(Q(l,.06,.1,d,0,2.32+.03,0)),c.add(Q(l,.06,.1,d,0,.89,0));for(let e of[-1,1])c.add(Q(.06,1.52,.1,d,e*(l/2-.03),u,0));c.add(Q(2.42,.022,.012,e.senaiRed,0,2.32+.062,.052));let f=new q(new vi(2.4,1.3),e.courseBoard);return f.position.set(0,u,.023),c.add(f),t.add(c),nd(t,!0,!0),{group:t,monitors:n}}var bf=.5,xf=.46,Sf=.16,Cf=.965,wf=.3,Tf=.135,Ef=1.4000000000000001,Df=6.8,Of=new K(-1.95,1.55,.55),kf=1.32,Af=-.66,jf=1,Mf=1.3,Nf=(e,t,n)=>Math.max(t,Math.min(n,e)),Pf=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function Ff(e,t,n){let r=new X;r.name=`robot-cell`,r.position.set(-2,Cf,0),r.add($(.17,.19,.03,t.aluDark,28,0,.015,0)),r.add($(.15,.15,.1,t.whitePaint,28,0,.08,0)),r.add($(.155,.155,.012,t.graphite,28,0,.132,0));let i=new X;i.position.y=Tf,r.add(i),i.add($(.112,.118,.17,t.whitePaint,26,0,.085,0)),i.add($(.121,.121,.014,t.bluePlastic,26,0,.126,0)),i.add($(.118,.118,.02,t.graphite,26,0,.175,0)),i.add($(.1,.1,.03,t.whitePaint,26,0,.2,0)),i.add(Q(.07,.09,.08,t.blackPlastic,-.09,.06,-.07));let a=new X;a.position.set(0,wf,0),i.add(a),a.add($(.092,.092,.2,t.whitePaint,24,0,0,0,{rotX:Math.PI/2})),a.add($(.075,.075,.205,t.graphite,24,0,0,0,{rotX:Math.PI/2})),a.add($(.093,.093,.03,t.whitePaint,24,0,0,.1,{rotX:Math.PI/2})),a.add($(.093,.093,.03,t.whitePaint,24,0,0,-.1,{rotX:Math.PI/2})),a.add($(.094,.094,.012,t.bluePlastic,24,0,0,.118,{rotX:Math.PI/2})),a.add($(.094,.094,.012,t.bluePlastic,24,0,0,-.118,{rotX:Math.PI/2}));let o=new X;a.add(o),o.add(Q(.42,.105,.115,t.whitePaint,.24,0,0)),o.add(Q(.43,.03,.12,t.lightGrey,.23,.045,0)),o.add(Q(.09,.07,.12,t.graphite,.06,0,0));let s=new X;s.position.set(bf,0,0),o.add(s),s.add($(.079,.079,.17,t.whitePaint,22,0,0,0,{rotX:Math.PI/2})),s.add($(.062,.062,.175,t.graphite,22,0,0,0,{rotX:Math.PI/2})),s.add($(.08,.08,.03,t.whitePaint,22,0,0,.085,{rotX:Math.PI/2})),s.add($(.08,.08,.03,t.whitePaint,22,0,0,-.085,{rotX:Math.PI/2})),s.add($(.081,.081,.011,t.bluePlastic,22,0,0,.103,{rotX:Math.PI/2})),s.add($(.081,.081,.011,t.bluePlastic,22,0,0,-.103,{rotX:Math.PI/2}));let c=new X;s.add(c),c.add(Q(.36,.085,.095,t.whitePaint,.2,0,0)),c.add(Q(.37,.025,.1,t.lightGrey,.2,.04,0)),c.add(Q(.08,.06,.1,t.graphite,.05,0,0));let l=new X;l.position.set(xf,0,0),c.add(l),l.add($(.058,.058,.11,t.whitePaint,20,0,0,0,{rotX:Math.PI/2})),l.add($(.06,.06,.01,t.bluePlastic,20,0,0,.058,{rotX:Math.PI/2})),l.add($(.06,.06,.01,t.bluePlastic,20,0,0,-.058,{rotX:Math.PI/2})),l.add($(.05,.05,.02,t.graphite,20,.01,0,.055,{rotX:Math.PI/2}));let u=new X;l.add(u),u.add($(.042,.042,.045,t.aluDark,20,.045,0,0,{rotZ:Math.PI/2})),u.add(Q(.075,.075,.15,t.blackPlastic,.1,0,0)),u.add(Q(.02,.05,.155,t.bluePlastic,.075,0,0));let d=[];for(let e of[-1,1]){let n=new X;n.position.set(.14,0,e*.08),n.add(Q(.09,.055,.016,t.aluDark,0,0,0)),n.add(Q(.03,.05,.02,t.rubber,.055,0,0)),u.add(n),d.push({group:n,dir:e})}let f=Q(.008,.012,.012,t.ledGreen,.11,.042,.06);u.add(f);let p=new qn;p.position.set(Sf,0,0),l.add(p);let m=new X;m.position.set(0,0,Af),m.add(Q(.34,.012,.34,t.aluDark,0,.006,0));for(let e of[0,2.1,4.2])m.add($(.008,.008,.11,t.alu,8,Math.cos(e)*.13,.062,Math.sin(e)*.13));let h=[];for(let e=0;e<6;e++){let n=Pd(t);n.position.set(0,.021+e*.017,0),m.add(n),h.push(n)}r.add(m);let g=Ld(t);g.group.position.set(0,.017000000000000015,.66),r.add(g.group),r.add(Q(.1,.02,.1,t.graphite,0,.006,.66));let _=new X;_.position.set(0,0,0),_.add(Q(.04,1.55,.04,t.aluDark,-.34,.78,-1.12)),_.add(Q(.04,1.55,.04,t.aluDark,.34,.78,-1.12)),_.add(Q(.04,1.55,.04,t.aluDark,-.34,.78,1.18)),_.add(Q(.04,1.55,.04,t.aluDark,.34,.78,1.18)),_.add(Q(.72,.04,.04,t.aluDark,0,1.55,-1.12)),_.add(Q(.72,.04,.04,t.aluDark,0,1.55,1.18)),_.add(Q(.04,.04,2.3,t.aluDark,-.34,1.55,.03)),_.add(Q(.04,.04,2.3,t.aluDark,.34,1.55,.03));let v=new q(new vi(2.25,1.35),new cl({color:10474718,transparent:!0,opacity:.075,roughness:.06,side:2,depthWrite:!1}));v.rotation.y=Math.PI/2,v.position.set(-.34,.86,.03),_.add(v),r.add(_);let y=Bd(t,n,`CÉLULA`,`ROBÔ 6 EIXOS`,1.18,{x:.452,y:.07,rotY:Math.PI/2,tag:`HMI · PENDANT`,rows:[[`#2f6fd0`,`ensinar pontos`,1],[`#2f9e63`,`executar sequência`,.95],[`#c99a2e`,`jog manual`,.8]]});r.add(y.root),r.add(Q(.14,.035,.05,t.aluDark,.39,-.102,1.18)),r.add(Q(.05,.12,.06,t.aluDark,.34,-.102,1.18)),r.add(td([-.2,3.6,-.4],[0,.35,-.12],.012,t.blueTube,.15,.05));let b=new X;b.position.set(-1.15,-.965,-4.9),b.add(Q(.55,1.1,.45,t.whitePaint,0,.55,0)),b.add(Q(.56,.06,.46,t.graphite,0,1.1,0)),b.add(Q(.3,.2,.02,t.monitorBlack,-.2,.82,.23));let x=new q(new vi(.26,.17),t.screen);x.rotation.y=0,x.position.set(-.2,.82,.245),b.add(x);let S=$(.03,.03,.025,t.redPaint,14,.12,.78,.235,{rotX:Math.PI/2});b.add(S),b.add($(.032,.032,.012,t.yellow,14,.12,.78,.222,{rotX:Math.PI/2})),r.add(b),e.add(r);let C=[{dur:1,key:`home`},{dur:.9,key:`abovePick`},{dur:.5,key:`pick`},{dur:.35,key:`grab`},{dur:.5,key:`abovePick`},{dur:1.1,key:`abovePlace`},{dur:.5,key:`place`},{dur:.35,key:`release`},{dur:.55,key:`abovePlace`},{dur:1.05,key:`home`}],w=C.reduce((e,t)=>e+t.dur,0),T=`auto`,E=0,D=0,O=0,k=.981,A=0,j=0,M=null,N=[],P=-1,F=()=>{},I=Of.clone(),L=Of.clone(),R=new K,z=new K,ee=.9,te=[],B=0,ne=!1,re=1,ie=!1,ae=null,oe=0,se=()=>{},ce=new K,le=new K,V=new K,ue=new K;function de(e){let t=g.usable[e%g.usable.length];return new K(-2+t.x,.997,.66+t.z)}function fe(){h.forEach(e=>e.visible=!0),O=0,k=.981}function H(){for(let t of N)e.remove(t);N.length=0,D=0,fe()}function pe(e){let t=e.x+2,n=e.z,r=Math.max(.05,Math.hypot(t,n)),o=Math.atan2(-n,t),c=e.y+Sf-Ef,u=Math.hypot(r,c);u=Nf(u,.12,.956);let d=Math.atan2(c,r),f=Nf((u*u+bf*bf-xf*xf)/(2*u*bf),-1,1),p=Math.acos(f),m=Nf((.4616-u*u)/(2*bf*xf),-1,1),h=Math.acos(m),g=d+p,_=h-Math.PI,v=-Math.PI/2-(g+_);i.rotation.y=o,a.rotation.z=g,s.rotation.z=_,l.rotation.z=v}function me(e){let t=0;for(let n=0;n<C.length;n++){if(e<t+C[n].dur)return{i:n,local:(e-t)/C[n].dur,phase:C[n]};t+=C[n].dur}return{i:C.length-1,local:1,phase:C[C.length-1]}}function U(e){let t=de(D);switch(e){case`home`:return Of.clone();case`abovePick`:return new K(-2,kf,Af);case`pick`:case`grab`:return new K(-2,k,Af);case`abovePlace`:return new K(t.x,Mf,t.z);case`place`:case`release`:return new K(t.x,jf,t.z);default:return Of.clone()}}let he=-1;function ge(e){j+=(A-j)*Math.min(1,e*14);let n=.066+(1-j)*.036;d.forEach(e=>{e.group.position.z=e.dir*n}),f.material=j>.6?t.ledGreen:t.ledOff}function _e(n){if(P>=0){P+=n;let e=Nf(P/.9,0,1);N.forEach(t=>t.scale.setScalar(1-e)),P>1.05&&(H(),P=-1,E=0,he=-1),pe(Of),A=0}else{E+=n,E>=w&&(E-=w,he=-1,k=.981+O*.017,D>=g.usable.length&&(P=0));let{i:r,local:i}=me(E);r!==he&&(r===3&&(A=1,M=Pd(t),e.add(M),O<h.length&&(h[O].visible=!1),O++),r===7&&(A=0,M&&(M.position.copy(de(D)),M.scale.setScalar(1),N.push(M),M=null,D++,F(D))),he=r);let a=C[r].key,o=C[Math.min(r+1,C.length-1)];V.copy(U(a));let s=a===`grab`||a===`release`;ue.copy(s?V:U(o.key));let c=Pf(Nf(i,0,1));le.lerpVectors(V,ue,c),pe(le)}ge(n)}function ve(e){z.subVectors(I,L);let t=z.length();if(t>1e-5){let n=1.4*e;t<=n?L.copy(I):L.addScaledVector(z,n/t)}pe(L),ge(e)}function ye(e){e.y=Nf(e.y,.995,2.05);let t=e.x+2,n=e.z,r=Math.hypot(t,n),i=e.y+Sf-Ef,a=Math.hypot(r,i);if(a>ee){let r=ee/a;e.x=-2+t*r,e.z=n*r,e.y=Nf(1.2400000000000002+i*r,.995,2.05)}return e}function be(e,t,n){T!==`program`&&(T=`manual`,I.x+=e,I.y+=t,I.z+=n,ye(I))}function xe(){if(M||(r.updateMatrixWorld(!0),p.getWorldPosition(ce),Math.hypot(ce.x+2,ce.z+.66)>.24||ce.y>1.28))return!1;let n=null;for(let e=h.length-1;e>=0;e--)if(h[e].visible){n=h[e];break}return n?(n.visible=!1,M=Pd(t),e.add(M),!0):!1}function Se(){if(!M)return!1;r.updateMatrixWorld(!0),p.getWorldPosition(ce);let e=Math.abs(ce.x+2)<.3&&Math.abs(ce.z-.66)<.34;return M.position.set(ce.x,e?.997:.022,ce.z),M.rotation.set(0,0,0),M.scale.setScalar(1),N.push(M),M=null,e&&F(N.length),!0}function Ce(e){se({type:e,index:B,total:te.length,step:te[B]})}function we(){ie&&(ie=!1,ae=null,T=`manual`,r.updateMatrixWorld(!0),p.getWorldPosition(I),L.copy(I),Ce(`done`))}function Te(e){B=e,oe=0;let t=te[e];if(!t)we();else{if(r.updateMatrixWorld(!0),p.getWorldPosition(R),t.type===`move`||t.type===`home`){let e=t.type===`home`?Of.clone():new K(t.point.x,t.point.y,t.point.z),n=R.distanceTo(e);ae={kind:`move`,from:R.clone(),to:e,dur:Nf(n/(.6*re),.28,3)}}else t.type===`grip`?(A=1,ae={kind:`grip`,dur:.36/re}):t.type===`release`?(A=0,ae={kind:`release`,dur:.32/re}):ae={kind:`wait`,dur:Math.max(.05,(t.seconds??.5)/re)};Ce(`step`)}}function Ee(){B+1<te.length?Te(B+1):ne?Te(0):we()}function De(e){if(!ie||!ae)return;oe+=e;let t=Nf(oe/ae.dur,0,1);ae.kind===`move`?(le.lerpVectors(ae.from,ae.to,Pf(t)),pe(le),t>=1&&(le.copy(ae.to),pe(le),Ee())):t>=1&&(ae.kind===`grip`?xe():ae.kind===`release`&&Se(),Ee()),ge(e)}function Oe(){return ie=!1,ae=null,T=`manual`,A=0,P=-1,M&&=(e.remove(M),null),H(),fe(),r.updateMatrixWorld(!0),p.getWorldPosition(I),L.copy(I),I.clone()}function ke(){ie=!1,ae=null,M&&=(e.remove(M),null),H(),fe(),A=0,P=-1,E=0,he=-1,k=.981,O=0,T=`auto`}function Ae(e,t={}){return!e||!e.length?!1:(te=e.map(e=>({...e,point:e.point?{...e.point}:void 0})),ne=!!t.loop,re=Nf(t.speed??1,.3,2),ie=!0,T=`program`,Te(0),!0)}function je(){ie&&(ie=!1,ae=null,T=`manual`,r.updateMatrixWorld(!0),p.getWorldPosition(I),L.copy(I),Ce(`stop`))}function Me(e){T!==`program`&&(A=+!!e,e?xe():Se())}function Ne(e=new K){return r.updateMatrixWorld(!0),p.getWorldPosition(e)}function Pe(e){let t=Math.min(e.dt,.05);T===`auto`?_e(t):T===`program`?De(t):ve(t),r.updateMatrixWorld(!0),M&&(p.getWorldPosition(ce),M.position.copy(ce),M.rotation.set(0,0,0))}let Fe=new q(new Wr(.75,1.75,2.4),new gr({transparent:!0,opacity:0,depthWrite:!1}));return Fe.position.set(-2,1.815,.03),e.add(Fe),{group:r,hitbox:Fe,info:{name:`Célula Robótica`,type:`Robótica`,desc:`Robô de 6 eixos com garra paralela. Retira as bandejas octogonais da pilha de alimentação e as acomoda no pallet 2×4, alimentando o fluxo de montagem da linha.`,tech:[`Robô 6 eixos`,`Garra paralela`,`Pallet 2×4`,`Controlador + IHM`,`Barreira de luz`]},hmi:y,update:Pe,cycle:Df,labelPos:new K(-2,2.55,.1),focus:{pos:new K(-.15,1.95,1.25),target:new K(-2,1.35,.2)},setOnPlaced(e){F=e},startProgramming:Oe,endProgramming:ke,startProgram:Ae,stopProgram:je,jog:be,setGrip:Me,getTip:Ne,getGrip(){return A>.5},onProgramEvent(e){se=e},getProgramState(){return{mode:T,running:ie,index:B,total:te.length}}}}var If=.3,Lf=1.66,Rf={x:8,z:15,chamfer:4},zf=[{x1:1.55,x2:2.45,z1:-3.72,z2:3.72},{x1:-2.45,x2:-1.55,z1:-4.02,z2:4.02},{x1:5.9,x2:6.8,z1:-2.3,z2:3.9},{x1:-7.1,x2:-6.3,z1:1.4,z2:7},{x1:-3.45,x2:-2.85,z1:-5.15,z2:-4.65},{x1:-6.85,x2:-4.55,z1:-7.4,z2:-6},{x1:-7.3,x2:-6.1,z1:7.35,z2:8.45},{x1:-7.65,x2:-7.05,z1:9.85,z2:10.95}];function Bf(e,t,n=If){let r=Math.abs(e),i=Math.abs(t);if(r>Rf.x-n||i>Rf.z-n)return!1;if(i>Rf.z-Rf.chamfer){let e=Rf.x+Rf.z-Rf.chamfer-n*Math.SQRT2;if(r+i>e)return!1}for(let r=0;r<zf.length;r++){let i=zf[r];if(e>i.x1-n&&e<i.x2+n&&t>i.z1-n&&t<i.z2+n)return!1}return!0}function Vf(e,t,n,r=If){let i=e.x+t;Bf(i,e.z,r)&&(e.x=i);let a=e.z+n;Bf(e.x,a,r)&&(e.z=a)}function Hf(e,t,n){let r=t.getWorldPosition(new K),i=e.position.clone().sub(r).applyAxisAngle(new K(0,1,0),n);e.position.copy(r).add(i),e.position.y=0,e.rotation.y+=n}var Uf=new K(0,1,0),Wf=.18,Gf=1.55,Kf=Math.PI/6,qf={x:0,z:12.3},Jf=e=>{let t=Math.abs(e);return t<Wf?0:Math.sign(e)*((t-Wf)/.8200000000000001)};function Yf({renderer:e,scene:t,camera:n,room:r}){e.xr.enabled=!0,e.xr.setReferenceSpaceType(`local-floor`);let i=new X;i.name=`xr-player`,t.add(i);let a=new Z({color:2830648,roughness:.5,metalness:.35}),o=new Os({color:9098495,transparent:!0,opacity:.9}),s=new Is(new Ar().setFromPoints([new K,new K]),o);s.frustumCulled=!1,s.visible=!1,t.add(s);let c=new gr({color:4970239,transparent:!0,opacity:.85,side:2,depthTest:!1,depthWrite:!1}),l=new q(new rl(.16,.21,44),c);l.rotation.x=-Math.PI/2,l.position.y=.015,l.renderOrder=30,l.visible=!1,t.add(l);let u=[],d=[];for(let t=0;t<2;t++){let n=e.xr.getController(t),r=e.xr.getControllerGrip(t);r.add(new q(new hc(.021,.075,4,10),a)),r.children[0].rotation.x=Math.PI/2,r.children[0].position.z=-.015,n.visible=!1,r.visible=!1,i.add(n,r),u.push(n),d.push(n,r),n.addEventListener(`selectstart`,()=>E(n)),n.addEventListener(`selectend`,()=>{p===n&&D()})}let f=!1,p=null,m=!1,h=!1,g=null,_=new K,v=new K,y=new Ut,b=new K,x=new K,S=new K,C=new K,w=new K;function T(e){l.visible=e}function E(e){f&&(p=e,s.visible=!0,O())}function D(){p&&m&&k(w),p=null,m=!1,s.visible=!1,T(!1)}function O(){if(!p)return;if(p.getWorldPosition(_),p.getWorldQuaternion(y),v.set(0,0,-1).applyQuaternion(y),m=!1,x.copy(_).addScaledVector(v,2.4),v.y<-.08){let e=-_.y/v.y;if(e>.2&&e<9){w.copy(_).addScaledVector(v,e),x.copy(w),n.getWorldPosition(b);let t=b.x-i.position.x,r=b.z-i.position.z;m=Bf(w.x-t,w.z-r,If)}}let e=s.geometry.attributes.position;e.setXYZ(0,_.x,_.y,_.z),e.setXYZ(1,x.x,x.y,x.z),e.needsUpdate=!0,s.geometry.computeBoundingSphere(),T(m||x.y<.05),l.position.set(w.x,.015,w.z),c.color.setHex(m?4970239:16734794)}function k(e){n.getWorldPosition(b);let t=b.x-i.position.x,r=b.z-i.position.z,a=e.x-t,o=e.z-r;Bf(a,o,.3)&&i.position.set(a,0,o)}function A(e){let t=e?.gamepad;if(!t)return null;let n=t.axes;return!n||n.length<2?null:n.length>=4?{x:n[2]||0,y:n[3]||0}:{x:n[0]||0,y:n[1]||0}}function j(e,t){let r=A(e);if(!r)return;let a=Jf(r.x),o=Jf(r.y);if(!a&&!o||(n.getWorldDirection(S),S.y=0,S.lengthSq()<1e-6))return;S.normalize(),C.crossVectors(S,Uf).normalize();let s=Gf*t;Vf(i.position,(S.x*-o+C.x*a)*s,(S.z*-o+C.z*a)*s)}function M(e){let t=A(e);if(!t)return;let r=t.x;!h&&Math.abs(r)>.7&&(Hf(i,n,r>0?-Kf:Kf),h=!0),Math.abs(r)<.3&&(h=!1)}function N(t){if(!f)return;p&&O();let n=e.xr.getSession();if(!n)return;let r=n.inputSources,i=null,a=null;for(let e of r)e.handedness===`left`?i=e:e.handedness===`right`&&(a=e);i||=r[0]||null,a||=r[1]||null,j(i,t),a&&a!==i&&M(a)}function P(){f=!0,h=!1,p=null,s.visible=!1,T(!1),i.position.set(qf.x,0,qf.z),i.rotation.set(0,0,0),i.add(n),n.position.set(0,0,0),n.quaternion.identity(),d.forEach(e=>e.visible=!0),e.xr.setFoveation(1),e.shadowMap.enabled=!1,r.setShadows?.(!1),g?.(!0)}function F(){f=!1,p=null,m=!1,s.visible=!1,T(!1),d.forEach(e=>e.visible=!1),i.remove(n),t.add(n),n.position.set(qf.x,Lf,qf.z),n.lookAt(.15,1.5,-2.6),e.shadowMap.enabled=!0,r.setShadows?.(!0),g?.(!1)}e.xr.addEventListener(`sessionstart`,P),e.xr.addEventListener(`sessionend`,F);async function I(){if(!navigator.xr?.isSessionSupported)return!1;try{return await navigator.xr.isSessionSupported(`immersive-vr`)}catch{return!1}}async function L(){if(f)return;if(!navigator.xr)throw Error(`WebXR não disponível neste navegador`);let t=await navigator.xr.requestSession(`immersive-vr`,{optionalFeatures:[`local-floor`,`bounded-floor`]});try{await e.xr.setSession(t)}catch(e){throw await t.end().catch(()=>{}),e}}async function R(){let t=e.xr.getSession();t&&await t.end()}return{enter:L,exit:R,update:N,isSupported:I,onChange(e){g=e},get active(){return f}}}var Xf=1.9,Zf=3.4,Qf=.0024,$f=1.2,ep={x:0,z:12.3},tp=(e,t,n)=>Math.max(t,Math.min(n,e));function np({camera:e,dom:t,controls:n,onStop:r,onInspect:i}){let a=!1,o=!1,s=0,c=0,l=!1,u=0,d=0,f=0,p=0,m=new Set;function h(){try{let e=t.requestPointerLock?.();e&&typeof e.catch==`function`&&e.catch(()=>{})}catch{}}function g(t){a||(a=!0,n.enabled=!1,m.clear(),e.rotation.order=`YXZ`,t?(e.position.set(t.x,Lf,t.z),s=t.yaw,c=tp(t.pitch??0,-1.2,$f),e.rotation.set(c,s,0,`YXZ`)):(e.position.set(ep.x,Lf,ep.z),s=0,c=0,e.rotation.set(0,0,0)),document.body.classList.add(`walk-mode`),h())}function _(){if(!a)return;a=!1,m.clear(),l=!1,document.body.classList.remove(`walk-mode`),document.body.classList.remove(`fps-look`),n.enabled=!0;let i=e.getWorldDirection(new K);n.target.copy(e.position).addScaledVector(i,3),n.update(),document.pointerLockElement===t&&document.exitPointerLock(),r?.()}document.addEventListener(`pointerlockchange`,()=>{o=document.pointerLockElement===t,document.body.classList.toggle(`fps-look`,o),!o&&a&&_()}),document.addEventListener(`pointerlockerror`,()=>{o=!1,document.body.classList.remove(`fps-look`)}),document.addEventListener(`mousemove`,t=>{if(!a)return;if(o){s-=t.movementX*Qf,c=tp(c-t.movementY*Qf,-1.2,$f),e.rotation.set(c,s,0,`YXZ`);return}if(!l)return;let n=t.clientX-u,r=t.clientY-d;u=t.clientX,d=t.clientY,s-=n*Qf*1.35,c=tp(c-r*Qf*1.35,-1.2,$f),e.rotation.set(c,s,0,`YXZ`)}),t.addEventListener(`pointerdown`,e=>{a&&(o?e.button===0&&i?.(e):e.button===0&&(h(),l=!0,f=e.clientX,p=e.clientY,u=e.clientX,d=e.clientY,t.setPointerCapture?.(e.pointerId)))}),t.addEventListener(`pointerup`,e=>{a&&!o&&l&&e.button===0&&Math.hypot(e.clientX-f,e.clientY-p)<6&&i?.(e),l=!1}),t.addEventListener(`pointercancel`,()=>{l=!1}),window.addEventListener(`blur`,()=>m.clear()),window.addEventListener(`keydown`,e=>{a&&(m.add(e.code),e.code===`KeyE`&&(e.preventDefault(),i?.()))}),window.addEventListener(`keyup`,e=>m.delete(e.code));function v(t){if(!a)return;let n=(m.has(`KeyW`)||m.has(`ArrowUp`)?1:0)-(m.has(`KeyS`)||m.has(`ArrowDown`)?1:0),r=(m.has(`KeyD`)||m.has(`ArrowRight`)?1:0)-(m.has(`KeyA`)||m.has(`ArrowLeft`)?1:0);if(n||r){let i=m.has(`ShiftLeft`)||m.has(`ShiftRight`)?Zf:Xf,a=-Math.sin(s),o=-Math.cos(s),c=Math.cos(s),l=-Math.sin(s),u=Math.hypot(n,r)||1,d=(a*n+c*r)/u*i*t,f=(o*n+l*r)/u*i*t;Vf(e.position,d,f)}e.position.y=Lf,e.rotation.set(c,s,0,`YXZ`)}return{start:g,stop:_,update:v,isLocked:()=>o,get active(){return a}}}var rp=`senai.devstudio.v1`,ip=4e3,ap=[{id:`python`,label:`Python`,folder:`python`,badge:`Py`,color:`#3776ab`,runner:`Python 3 · simulado`},{id:`csharp`,label:`C#`,folder:`csharp`,badge:`C#`,color:`#8b3fa8`,runner:`C# · simulado`},{id:`javascript`,label:`JavaScript`,folder:`javascript`,badge:`JS`,color:`#d9c34a`,runner:`JavaScript · worker`}],op=[{id:`python-1`,lang:`python`,file:`01_ciclo.py`,title:`Tempo de ciclo da salva`,level:`Básico`,brief:`A salva recebe 12 peças por rodada e cada peça leva 6,5 s no ciclo completo. Para balancear a produção, o operador precisa saber quanto tempo a rodada inteira consome.`,goals:[`Multiplicar a quantidade de peças pelo tempo de cada peça.`,`Guardar o resultado na variável total.`,`Imprimir a linha Total: 78 no terminal.`],concepts:[`variáveis`,`multiplicação`,`print`],hint:`total = ciclos * tempo_por_peca`,expected:[`Total: 78`],starter:`# Atividade 1 - Tempo de ciclo da salva
# Cada peça leva 6,5 s e a salva recebe 12 peças.
ciclos = 12
tempo_por_peca = 6.5

# TODO: calcule total multiplicando ciclos por tempo_por_peca
total = 0

print("Total:", total)
`},{id:`python-2`,lang:`python`,file:`02_esteira.py`,title:`Repetição na esteira`,level:`Básico`,brief:`O lote de teste tem 3 peças. Em vez de escrever três print, use um laço para listar cada peça que passa na esteira.`,goals:[`Repetir o bloco 3 vezes com range(1, 4).`,`Imprimir Peça 1, Peça 2 e Peça 3 em linhas separadas.`,`Observar como o valor de i muda a cada volta.`],concepts:[`for`,`range`,`indentação`],hint:`for i in range(1, 4):`,expected:[`Peça 1`,`Peça 2`,`Peça 3`],starter:`# Atividade 2 - Repetição: três peças na esteira

# TODO: ajuste o range para repetir 3 vezes
for i in range(1, 2):
    print("Peça", i)
`},{id:`python-3`,lang:`python`,file:`03_qualidade.py`,title:`Controle de qualidade`,level:`Intermediário`,brief:`A peça só é aprovada quando a medida fica a até 0,05 mm do alvo de 5,00 mm. A leitura do sensor foi 5,02 mm: use uma condição para decidir.`,goals:[`Comparar a diferença entre medida e alvo usando abs().`,`Verificar se essa diferença é menor ou igual à tolerância.`,`Imprimir Aprovada ou Reprovada.`],concepts:[`if/else`,`abs()`,`comparação`],hint:`if abs(medida - alvo) <= tolerancia:`,expected:[`Aprovada`],starter:`# Atividade 3 - Controle de qualidade
# A peça é aprovada dentro da tolerância de 0,05 mm.
medida = 5.02
alvo = 5.00
tolerancia = 0.05

# TODO: compare abs(medida - alvo) com a tolerancia
if medida == alvo:
    print("Aprovada")
else:
    print("Reprovada")
`},{id:`csharp-1`,lang:`csharp`,file:`01_ciclo.cs`,title:`Tempo de ciclo da salva`,level:`Básico`,brief:`A salva recebe 12 peças por rodada e cada peça leva 6,5 s. Calcule o tempo total da rodada e mostre o resultado no console.`,goals:[`Multiplicar ciclos por tempoPorPeca.`,`Guardar o resultado em total.`,`Escrever Total: 78 com Console.WriteLine.`],concepts:[`int/double`,`operadores`,`Console.WriteLine`],hint:`total = ciclos * tempoPorPeca;`,expected:[`Total: 78`],starter:`// Atividade 1 - Tempo de ciclo da salva
// Cada peça leva 6,5 s e a salva recebe 12 peças.

int ciclos = 12;
double tempoPorPeca = 6.5;

// TODO: calcule o total multiplicando ciclos por tempoPorPeca
double total = 0;

Console.WriteLine("Total: " + total);
`},{id:`csharp-2`,lang:`csharp`,file:`02_esteira.cs`,title:`Repetição na esteira`,level:`Básico`,brief:`O lote de teste tem 3 peças. Use um laço for para escrever uma linha por peça que passa na esteira.`,goals:[`Ajustar o limite do for para repetir 3 vezes.`,`Montar a mensagem com o número da peça.`,`Escrever Peça 1, Peça 2 e Peça 3 em linhas separadas.`],concepts:[`for`,`incremento`,`concatenação`],hint:`for (int i = 1; i <= 3; i++)`,expected:[`Peça 1`,`Peça 2`,`Peça 3`],starter:`// Atividade 2 - Repetição: três peças na esteira

// TODO: ajuste o limite do for para imprimir 3 peças
for (int i = 1; i <= 1; i++)
{
    Console.WriteLine("Peça " + i);
}
`},{id:`csharp-3`,lang:`csharp`,file:`03_qualidade.cs`,title:`Controle de qualidade`,level:`Intermediário`,brief:`A peça só é aprovada quando a medida fica a até 0,05 mm do alvo de 5,00 mm. A leitura do sensor foi 5,02 mm.`,goals:[`Calcular a diferença com Math.Abs(medida - alvo).`,`Comparar com a tolerância usando if/else.`,`Escrever Aprovada ou Reprovada.`],concepts:[`if/else`,`Math.Abs`,`tolerância`],hint:`if (Math.Abs(medida - alvo) <= tolerancia)`,expected:[`Aprovada`],starter:`// Atividade 3 - Controle de qualidade
double medida = 5.02;
double alvo = 5.00;
double tolerancia = 0.05;

// TODO: use Math.Abs(medida - alvo) <= tolerancia
if (medida == alvo)
{
    Console.WriteLine("Aprovada");
}
else
{
    Console.WriteLine("Reprovada");
}
`},{id:`javascript-1`,lang:`javascript`,file:`01_ciclo.js`,title:`Tempo de ciclo da salva`,level:`Básico`,brief:`A salva recebe 12 peças por rodada e cada peça leva 6,5 s. Calcule o tempo total e mostre no console do navegador.`,goals:[`Multiplicar ciclos por tempoPorPeca.`,`Guardar o resultado em total.`,`Mostrar Total: 78 com console.log.`],concepts:[`const/let`,`operadores`,`console.log`],hint:`const total = ciclos * tempoPorPeca;`,expected:[`Total: 78`],starter:`// Atividade 1 - Tempo de ciclo da salva
// Cada peça leva 6,5 s e a salva recebe 12 peças.

const ciclos = 12;
const tempoPorPeca = 6.5;

// TODO: calcule o total multiplicando ciclos por tempoPorPeca
let total = 0;

console.log("Total:", total);
`},{id:`javascript-2`,lang:`javascript`,file:`02_esteira.js`,title:`Repetição na esteira`,level:`Básico`,brief:`O lote de teste tem 3 peças. Use um laço for para registrar cada peça que passa na esteira.`,goals:[`Ajustar a condição do for para repetir 3 vezes.`,`Montar a mensagem com o número da peça.`,`Mostrar Peça 1, Peça 2 e Peça 3 em linhas separadas.`],concepts:[`for`,`template string`,`console.log`],hint:`for (let i = 1; i <= 3; i++)`,expected:[`Peça 1`,`Peça 2`,`Peça 3`],starter:`// Atividade 2 - Repetição: três peças na esteira

// TODO: ajuste a condição para repetir 3 vezes
for (let i = 1; i <= 1; i++) {
  console.log("Peça " + i);
}
`},{id:`javascript-3`,lang:`javascript`,file:`03_qualidade.js`,title:`Controle de qualidade`,level:`Intermediário`,brief:`A peça só é aprovada quando a medida fica a até 0,05 mm do alvo de 5,00 mm. A leitura do sensor foi 5,02 mm.`,goals:[`Calcular a diferença com Math.abs(medida - alvo).`,`Comparar com a tolerância usando if/else.`,`Mostrar Aprovada ou Reprovada.`],concepts:[`if/else`,`Math.abs`,`comparação`],hint:`if (Math.abs(medida - alvo) <= tolerancia)`,expected:[`Aprovada`],starter:`// Atividade 3 - Controle de qualidade
const medida = 5.02;
const alvo = 5.0;
const tolerancia = 0.05;

// TODO: compare Math.abs(medida - alvo) com a tolerancia
if (medida === alvo) {
  console.log("Aprovada");
} else {
  console.log("Reprovada");
}
`}],sp=String.raw`
self.onmessage = function (event) {
  var code = event.data && event.data.code ? String(event.data.code) : "";
  var lines = [];
  var partial = "";
  function fmt(v) {
    if (typeof v === "string") return v;
    if (v === null) return "null";
    if (v === undefined) return "undefined";
    if (typeof v === "number" || typeof v === "boolean" || typeof v === "bigint") return String(v);
    if (Array.isArray(v)) {
      var parts = [];
      for (var i = 0; i < v.length; i++) parts.push(fmt(v[i]));
      return "[" + parts.join(", ") + "]";
    }
    if (typeof v === "object") {
      try { return JSON.stringify(v); } catch (e) { return String(v); }
    }
    return String(v);
  }
  function log() {
    var parts = [];
    for (var i = 0; i < arguments.length; i++) parts.push(fmt(arguments[i]));
    lines.push(partial + parts.join(" "));
    partial = "";
  }
  var consoleShim = { log: log, info: log, warn: log, error: log, debug: log };
  function write(v) { partial += fmt(v); }
  var py = {
    len: function (v) { return v == null ? 0 : v.length; },
    str: fmt,
    int: function (v) { return Math.trunc(Number(v)); },
    float: function (v) { return Number(v); },
    round: function (v, d) {
      var f = Math.pow(10, d || 0);
      return Math.round(v * f) / f;
    },
    range: function () {
      var args = Array.prototype.slice.call(arguments).map(Number);
      var start = 0, stop = 0, step = 1;
      if (args.length === 1) {
        stop = args[0];
      } else if (args.length >= 2) {
        start = args[0];
        stop = args[1];
        if (args.length > 2) step = args[2];
      }
      var out = [];
      if (step === 0) return out;
      for (var v = start; step > 0 ? v < stop : v > stop; v += step) out.push(v);
      return out;
    },
    input: function () {
      throw new Error("input() não existe no sandbox: use valores fixos nesta atividade.");
    }
  };
  var cs = { write: write };
  var error = null;
  try {
    var fn = new Function("console", "__py", "__cs", code);
    fn(consoleShim, py, cs);
    if (partial) lines.push(partial);
  } catch (err) {
    error = err && err.message ? String(err.message) : String(err);
  }
  self.postMessage({ lines: lines, error: error });
};
`;function cp(e){return new Promise(t=>{let n,r=``;try{r=URL.createObjectURL(new Blob([sp],{type:`text/javascript`})),n=new Worker(r)}catch{t({lines:[],error:`Não foi possível iniciar o sandbox de execução.`});return}URL.revokeObjectURL(r);let i=!1,a=e=>{i||(i=!0,clearTimeout(o),n.terminate(),t(e))},o=setTimeout(()=>a({lines:[],error:`Tempo esgotado (${ip/1e3} s): verifique se há um laço infinito.`}),ip);n.onmessage=e=>a(e.data||{lines:[],error:null}),n.onerror=e=>a({lines:[],error:e.message||`Erro ao executar o código.`}),n.postMessage({code:e})})}function lp(e,t=`,`){let n=[],r=0,i=null,a=``;for(let o=0;o<e.length;o++){let s=e[o];i?(a+=s,s===`\\`?(a+=e[o+1]||``,o++):s===i&&(i=null)):s===`"`||s===`'`?(i=s,a+=s):`([{`.includes(s)?(r++,a+=s):`)]}`.includes(s)?(r--,a+=s):s===t&&r===0?(n.push(a.trim()),a=``):a+=s}return(a.trim()||n.length)&&n.push(a.trim()),n}function up(e){let t=null;for(let n=0;n<e.length;n++){let r=e[n];if(t)r===`\\`?n++:r===t&&(t=null);else if(r===`"`||r===`'`)t=r;else if(r===`#`)return e.slice(0,n).trimEnd()}return e.trimEnd()}function dp(e){return"`"+e.replace(/\\/g,`\\\\`).replace(/`/g,"\\`").replace(/\$\{/g,"\\${").replace(/\{\{/g,`\\{`).replace(/\}\}/g,`\\}`).replace(/\{([^{}]+)\}/g,(e,t)=>"${"+fp(t)+`}`)+"`"}function fp(e){let t=e.trim();return t=t.replace(/\bf(["'])((?:\\.|(?!\1).)*)\1/g,(e,t,n)=>dp(n)),t=t.replace(/\bTrue\b/g,`true`).replace(/\bFalse\b/g,`false`).replace(/\bNone\b/g,`null`).replace(/\band\b/g,`&&`).replace(/\bor\b/g,`||`).replace(/\bnot\s+/g,`!`).replace(/\blen\s*\(/g,`__py.len(`).replace(/\bstr\s*\(/g,`__py.str(`).replace(/\bint\s*\(/g,`__py.int(`).replace(/\bfloat\s*\(/g,`__py.float(`).replace(/\babs\s*\(/g,`Math.abs(`).replace(/\bround\s*\(/g,`__py.round(`).replace(/\brange\s*\(/g,`__py.range(`).replace(/\binput\s*\(/g,`__py.input(`),t}function pp(e){let t=e.replace(/\r/g,``).split(`
`),n=[],r=[],i=new Set,a=0,o=()=>`  `.repeat(a);for(let e of t){let t=e.replace(/\t/g,`    `),s=t.trim();if(!s){n.push(``);continue}let c=t.length-t.trimStart().length;if(s.startsWith(`#`)){n.push(o()+`//`+s.slice(1));continue}let l=up(s);if(!l)continue;for(;r.length&&c<=r[r.length-1];)r.pop(),a=Math.max(0,a-1),n.push(o()+`}`);let u;if(u=/^if\s+(.+):$/.exec(l))n.push(`${o()}if (${fp(u[1])}) {`),r.push(c),a++;else if(u=/^elif\s+(.+):$/.exec(l))n.push(`${o()}else if (${fp(u[1])}) {`),r.push(c),a++;else if(/^else\s*:$/.test(l))n.push(`${o()}else {`),r.push(c),a++;else if(u=/^while\s+(.+):$/.exec(l))n.push(`${o()}while (${fp(u[1])}) {`),r.push(c),a++;else if(u=/^def\s+([A-Za-z_]\w*)\s*\((.*)\)\s*:$/.exec(l))n.push(`${o()}function ${u[1]}(${u[2]}) {`),r.push(c),a++;else if(u=/^for\s+([A-Za-z_]\w*)\s+in\s+(.+):$/.exec(l)){let e=u[1],t=u[2].trim(),i=/^range\s*\((.*)\)$/.exec(t);if(i){let t=lp(i[1]).map(e=>fp(e)),r=`0`,a=`0`,s=null;t.length===1?a=t[0]:t.length===2?[r,a]=t:[r,a,s]=t;let c=s&&/^-\s*/.test(s)?`>`:`<`,l=s?`${e} += ${s}`:`${e}++`;n.push(`${o()}for (let ${e} = ${r}; ${e} ${c} ${a}; ${l}) {`)}else n.push(`${o()}for (const ${e} of ${fp(t)}) {`);r.push(c),a++}else if(!/^pass$/.test(l)){if(u=/^return\b\s*(.*)$/.exec(l))n.push(`${o()}return${u[1]?` `+fp(u[1]):``};`);else if(u=/^print\s*\((.*)\)$/s.exec(l))n.push(`${o()}console.log(${fp(u[1])});`);else if(u=/^([A-Za-z_]\w*)\s*\+=\s*(.+)$/.exec(l))n.push(`${o()}${u[1]} += ${fp(u[2])};`);else if(u=/^([A-Za-z_]\w*)\s*=(?!=)\s*(.+)$/.exec(l)){let e=u[1];n.push(`${o()}${i.has(e)?``:`let `}${e} = ${fp(u[2])};`),i.add(e)}else n.push(`${o()}${fp(l)};`)}}for(;r.length;)r.pop(),a=Math.max(0,a-1),n.push(o()+`}`);return n.join(`
`)}function mp(e){return"`"+e.replace(/\\/g,`\\\\`).replace(/`/g,"\\`").replace(/\$\{/g,"\\${").replace(/\{\{/g,`\\{`).replace(/\}\}/g,`\\}`).replace(/\{([^{}]+)\}/g,(e,t)=>"${"+t.trim()+`}`)+"`"}function hp(e){let t=e.replace(/\r/g,``);return t=t.replace(/^\s*using\s+[\w.]+\s*;\s*$/gm,``),t=t.replace(/\$"((?:\\.|[^"\\])*)"/g,(e,t)=>mp(t)),t=t.replace(/Console\.WriteLine\s*\(/g,`console.log(`),t=t.replace(/Console\.Write\s*\(/g,`__cs.write(`),t=t.replace(/\bMath\.Abs\b/g,`Math.abs`),t=t.replace(/\bMath\.Round\b/g,`Math.round`),t=t.replace(/\bMath\.Max\b/g,`Math.max`),t=t.replace(/\bMath\.Min\b/g,`Math.min`),t=t.replace(/\b(int|double|float|decimal|long|string|bool|var|object)\s+([A-Za-z_]\w*)\s*=/g,`let $2 =`),t=t.replace(/'(\\.|[^'\\])'/g,(e,t)=>JSON.stringify(t===`\\'`?`'`:t)),t}function gp(e){return e.map(e=>String(e).replace(/\s+/g,` `).trim()).filter(Boolean).map(e=>e.replace(/-?\d+(?:[.,]\d+)?/g,e=>{let t=Number(e.replace(`,`,`.`));return Number.isFinite(t)?String(t):e}))}function _p(e,t){let n=gp(e),r=gp(t);return n.length===r.length&&n.every((e,t)=>e===r[t])}function vp(){try{let e=localStorage.getItem(rp);if(!e)return{};let t=JSON.parse(e);if(!t||typeof t!=`object`)return{};let n={};if(t.code&&typeof t.code==`object`)for(let[e,r]of Object.entries(t.code))typeof r==`string`&&(n[e]=r);return{lastId:typeof t.lastId==`string`?t.lastId:null,completed:Array.isArray(t.completed)?t.completed.filter(e=>typeof e==`string`):[],code:n}}catch{return{}}}function yp(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}function bp(e){return String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e])}var xp=`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>`,Sp=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h6"/></svg>`,Cp=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M20 19H6.5A2.5 2.5 0 0 0 4 21.5"/><path d="M8 7h8M8 11h6"/></svg>`,wp=`<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>`,Tp={python:new Set([`if`,`elif`,`else`,`for`,`in`,`while`,`def`,`return`,`import`,`from`,`as`,`and`,`or`,`not`,`True`,`False`,`None`,`break`,`continue`,`pass`]),csharp:new Set(`if.else.for.foreach.in.while.return.int.double.float.string.bool.var.decimal.long.object.class.static.void.new.true.false.null.public.private.using.namespace`.split(`.`)),javascript:new Set([`if`,`else`,`for`,`while`,`return`,`const`,`let`,`var`,`function`,`new`,`true`,`false`,`null`,`undefined`,`class`,`of`,`in`,`typeof`,`async`,`await`])},Ep=new Set([`print`,`Console`,`Math`,`console`,`abs`,`len`,`str`,`int`,`float`,`round`,`range`,`WriteLine`,`Write`]);function Dp(e,t){if(e.length>2e4)return bp(e);let n=Tp[t]||Tp.javascript,r=/(#[^\n]*|\/\/[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)/g,i=[],a=0,o;for(;o=r.exec(e);){if(o.index>a&&i.push(bp(e.slice(a,o.index))),o[1])i.push(`<span class="tk-com">${bp(o[1])}</span>`);else if(o[2])i.push(`<span class="tk-str">${bp(o[2])}</span>`);else if(o[3])i.push(`<span class="tk-num">${bp(o[3])}</span>`);else{let t=o[4],r=``;n.has(t)?r=`tk-kw`:(Ep.has(t)||/^\s*\(/.test(e.slice(o.index+t.length)))&&(r=`tk-fn`),i.push(r?`<span class="${r}">${bp(t)}</span>`:bp(t))}a=o.index+o[0].length}return i.push(bp(e.slice(a))),i.join(``)}function Op({onClose:e}={}){let t=vp(),n={open:!1,activityId:op.some(e=>e.id===t.lastId)?t.lastId:op[0].id,completed:new Set((t.completed||[]).filter(e=>op.some(t=>t.id===e))),code:t.code||{},running:!1,hintOn:!1,guideOn:!0,collapsed:new Set},r=0,i=-1,a=yp(`div`,`studio-layer`);a.setAttribute(`aria-hidden`,`true`),a.innerHTML=`
    <div class="studio-backdrop"></div>
    <div class="studio-window" role="dialog" aria-modal="true" aria-label="Dev Lab — atividades de programação">
      <div class="st-titlebar">
        <span class="st-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="st-title">Dev Lab<em>atividades de programação · PC de bancada</em></span>
        <button type="button" class="st-close" title="Fechar (Esc)" aria-label="Fechar Dev Lab">${xp}</button>
      </div>
      <div class="studio-body">
        <nav class="st-activitybar" aria-label="Vistas do Dev Lab">
          <button type="button" class="st-ab is-active" data-view="files" title="Atividades">${Sp}</button>
          <button type="button" class="st-ab is-active" data-view="guide" title="Enunciado">${Cp}</button>
          <span class="st-ab-fill"></span>
          <span class="st-ab-brand">SENAI</span>
        </nav>
        <aside class="st-sidebar">
          <div class="st-side-head"><span>EXPLORADOR</span><span class="st-side-dots" aria-hidden="true">···</span></div>
          <div class="st-tree"></div>
          <div class="st-progress">
            <div class="st-progress-label"><span>Progresso</span><b class="st-progress-count">0/9</b></div>
            <div class="st-progress-track"><i></i></div>
          </div>
        </aside>
        <main class="st-main">
          <div class="st-tabs"></div>
          <div class="st-breadcrumb"></div>
          <div class="st-work">
            <section class="st-editor-col">
              <div class="st-editor">
                <div class="st-gutter"><div class="st-gutter-inner">1</div></div>
                <div class="st-code-wrap">
                  <pre class="st-highlight" aria-hidden="true"></pre>
                  <textarea class="st-code" spellcheck="false" autocomplete="off" autocapitalize="off" wrap="off" aria-label="Editor de código"></textarea>
                </div>
              </div>
              <div class="st-actions">
                <button type="button" class="st-btn st-run">${wp}<span>Executar</span><kbd>F5</kbd></button>
                <button type="button" class="st-btn" data-act="reset">Restaurar código</button>
                <button type="button" class="st-btn" data-act="hint">Dica</button>
                <span class="st-state" data-kind="idle"><i></i><span class="st-state-text">Pronto para executar</span></span>
              </div>
              <section class="st-terminal">
                <div class="st-term-head">
                  <div class="st-term-tabs">
                    <button type="button" class="is-active" data-term="run">TERMINAL</button>
                    <button type="button" data-term="expected">SAÍDA ESPERADA</button>
                  </div>
                  <span class="st-term-note">execução no navegador · limite 4 s</span>
                </div>
                <div class="st-term-pane" data-pane="run"><div class="st-term-body"></div></div>
                <div class="st-term-pane is-hidden" data-pane="expected"><pre class="st-term-expected"></pre></div>
              </section>
            </section>
            <aside class="st-guide"><div class="st-guide-inner"></div></aside>
          </div>
        </main>
      </div>
      <footer class="st-statusbar">
        <span class="st-sb-left"><i></i>Dev Lab · execução local no navegador</span>
        <span class="st-sb-right"><span class="st-sb-lang">Python</span> · <span class="st-sb-count">0/9</span> concluídas</span>
      </footer>
    </div>`;let o=a.querySelector(`.studio-window`),s=a.querySelector(`.st-tree`),c=a.querySelector(`.st-tabs`),l=a.querySelector(`.st-breadcrumb`);a.querySelector(`.st-guide`);let u=a.querySelector(`.st-guide-inner`),d=a.querySelector(`.st-code`),f=a.querySelector(`.st-highlight`),p=a.querySelector(`.st-gutter-inner`),m=a.querySelector(`.st-state`),h=a.querySelector(`.st-state-text`),g=a.querySelector(`.st-run`),_=a.querySelector(`[data-act="hint"]`),v=a.querySelector(`[data-act="reset"]`),y=a.querySelector(`.st-term-body`),b=a.querySelector(`.st-term-expected`),x=a.querySelector(`.st-progress-count`),S=a.querySelector(`.st-progress-track i`),C=a.querySelector(`.st-sb-lang`),w=a.querySelector(`.st-sb-count`),T=a.querySelector(`[data-view="guide"]`);function E(e){n.guideOn=e,o.classList.toggle(`no-guide`,!e),T.classList.toggle(`is-active`,e)}let D=()=>op.find(e=>e.id===n.activityId)||op[0],O=e=>ap.find(t=>t.id===e.lang)||ap[0],k=e=>op.filter(t=>t.lang===e.lang).indexOf(e)+1;function A(){try{localStorage.setItem(rp,JSON.stringify({version:1,lastId:n.activityId,completed:[...n.completed],code:n.code}))}catch{}}function j(){clearTimeout(r),r=setTimeout(A,450)}function M(){r&&(clearTimeout(r),r=0,A())}function N(){let e=n.completed.size,t=op.length;x.textContent=`${e}/${t}`,w.textContent=`${e}/${t}`,S.style.width=`${e/t*100}%`}function P(){s.innerHTML=``;for(let e of ap){let t=yp(`div`,`st-group`),r=yp(`button`,`st-group-head`);r.type=`button`;let i=n.collapsed.has(e.id);r.innerHTML=`<span class="st-chev${i?` is-closed`:``}" aria-hidden="true">▾</span>`;let a=yp(`span`,`st-lang-chip`,e.badge);if(a.style.background=e.color,r.append(a,yp(`span`,`st-group-name`,e.folder)),r.addEventListener(`click`,()=>{i?n.collapsed.delete(e.id):n.collapsed.add(e.id),P()}),t.appendChild(r),!i){let r=yp(`div`,`st-files`);for(let t of op.filter(t=>t.lang===e.id)){let i=yp(`button`,`st-file`+(t.id===n.activityId?` is-active`:``));i.type=`button`,i.title=t.title;let a=yp(`span`,`st-file-dot`);a.style.background=e.color,i.append(a,yp(`span`,`st-file-name`,t.file)),n.completed.has(t.id)&&i.appendChild(yp(`span`,`st-file-mark`,`✓`)),i.addEventListener(`click`,()=>ie(t.id)),r.appendChild(i)}t.appendChild(r)}s.appendChild(t)}}function F(){let e=D(),t=O(e);c.innerHTML=``;let n=yp(`div`,`st-tab is-active`),r=yp(`span`,`st-lang-chip`,t.badge);r.style.background=t.color,n.append(r,yp(`span`,`st-tab-name`,e.file)),c.appendChild(n)}function I(){let e=D(),t=O(e);l.textContent=`atividades  ›  ${t.folder}  ›  ${e.file}`}function L(){let e=D();b.textContent=e.expected.join(`
`)}function R(e,t){m.dataset.kind=e,h.textContent=t;let n=u.querySelector(`.st-verdict`);if(n){n.dataset.kind=e===`busy`?`idle`:e;let r=n.querySelector(`span`);r&&(r.textContent=t)}}function z(){let e=D(),t=O(e),r=n.hintOn,i=n.completed.has(e.id)?`Atividade concluída anteriormente`:`Ainda não concluída`;u.innerHTML=`
      <div class="st-guide-kicker">ATIVIDADE ${String(k(e)).padStart(2,`0`)} · ${bp(t.label)}</div>
      <h2 class="st-guide-title">${bp(e.title)}</h2>
      <div class="st-guide-meta">
        <span class="st-badge-level">${bp(e.level)}</span>
        <span class="st-badge-file">${bp(e.file)}</span>
      </div>
      <p class="st-guide-brief">${bp(e.brief)}</p>
      <h3>O que fazer</h3>
      <ol class="st-goals">${e.goals.map(e=>`<li>${bp(e)}</li>`).join(``)}</ol>
      <h3>Conceitos</h3>
      <div class="st-chips">${e.concepts.map(e=>`<span>${bp(e)}</span>`).join(``)}</div>
      <h3>Saída esperada</h3>
      <pre class="st-expected">${bp(e.expected.join(`
`))}</pre>
      <div class="st-hint-box"${r?``:` hidden`}>
        <span class="st-hint-label">Dica</span>
        <code>${bp(e.hint)}</code>
      </div>
      <div class="st-verdict" data-kind="${n.completed.has(e.id)?`ok`:`idle`}"><i></i><span>${bp(i)}</span></div>
      <p class="st-guide-foot">Subconjunto didático da linguagem: variáveis, laços, condições e saída de texto. A execução acontece no seu navegador, sem instalar nada.</p>
    `,_.classList.toggle(`is-on`,r)}function ee(){let e=d.value.split(`
`).length;if(e===i)return;i=e;let t=``;for(let n=1;n<=e;n++)t+=n+(n<e?`
`:``);p.textContent=t,te()}function te(){p.style.transform=`translateY(${-d.scrollTop}px)`,f.scrollTop=d.scrollTop,f.scrollLeft=d.scrollLeft}function B(){f.innerHTML=Dp(d.value,D().lang),te()}function ne(e){if(y.innerHTML=``,!e.length)y.appendChild(yp(`div`,`st-term-line is-dim`,`▶ Execute o código para ver a saída aqui.`));else{for(let t of e)y.appendChild(yp(`div`,`st-term-line is-`+(t.kind||`out`),t.text));y.scrollTop=y.scrollHeight}}function re(e){a.querySelectorAll(`.st-term-tabs button`).forEach(t=>{t.classList.toggle(`is-active`,t.dataset.term===e)}),a.querySelectorAll(`.st-term-pane`).forEach(t=>{t.classList.toggle(`is-hidden`,t.dataset.pane!==e)})}function ie(e){if(!op.some(t=>t.id===e))return;M(),n.activityId=e,n.hintOn=!1;let t=D();d.value=Object.prototype.hasOwnProperty.call(n.code,e)?n.code[e]:t.starter,i=-1,ee(),B(),d.scrollTop=0,F(),I(),L(),z(),P(),N(),re(`run`),ne([]),R(`idle`,n.completed.has(e)?`Concluída · revise ou execute de novo`:`Pronto para executar`),C.textContent=O(t).label,A()}function ae(e){let t=d.selectionStart,n=d.selectionEnd,r=d.value,i=!1;try{d.focus(),d.setSelectionRange(t,n),i=document.execCommand(`insertText`,!1,e)}catch{i=!1}i||(d.value=r.slice(0,t)+e+r.slice(n),d.selectionStart=d.selectionEnd=t+e.length),oe()}function oe(){ee(),B(),n.code[n.activityId]=d.value,j()}async function se(){if(n.running||!n.open)return;let e=D(),t=O(e),r=d.value,i=r;e.lang===`python`?i=pp(r):e.lang===`csharp`&&(i=hp(r)),n.running=!0,g.disabled=!0,g.classList.add(`is-busy`),re(`run`),R(`busy`,`Executando…`),ne([{text:`▶ ${t.runner} · ${e.file}`,kind:`meta`}]);let a=await cp(i);n.running=!1,g.disabled=!1,g.classList.remove(`is-busy`);let o=a.lines.map(e=>({text:e,kind:`out`}));if(a.error&&o.push({text:a.error,kind:`err`}),o.length||o.push({text:`(o programa terminou sem imprimir nada)`,kind:`dim`}),ne(o),!a.error&&_p(e.expected,a.lines)){let t=!n.completed.has(e.id);n.completed.add(e.id),A(),P(),N(),R(`ok`,t?`Saída correta · atividade concluída`:`Saída correta · atividade já concluída`)}else a.error?R(`err`,`O código parou com um erro — confira o terminal`):R(`warn`,`A saída ainda não corresponde ao esperado`)}d.addEventListener(`input`,oe),d.addEventListener(`scroll`,te),d.addEventListener(`keydown`,e=>{let t=D().lang===`javascript`?`  `:`    `;if(e.key===`Tab`)e.preventDefault(),ae(t);else if(e.key===`Enter`&&!e.shiftKey&&!e.isComposing){e.preventDefault();let n=d.value.slice(0,d.selectionStart),r=n.slice(n.lastIndexOf(`
`)+1),i=/^[ \t]*/.exec(r)[0],a=r.trimEnd();(/[{([]\s*$/.test(a)||D().lang===`python`&&/:\s*$/.test(a))&&(i+=t),ae(`
`+i),d.scrollTop=d.scrollHeight}}),g.addEventListener(`click`,se),v.addEventListener(`click`,()=>{let e=D();d.value=e.starter,delete n.code[e.id],i=-1,ee(),B(),A(),R(`idle`,`Código restaurado — resolva os TODOs`),ne([]),re(`run`)}),_.addEventListener(`click`,()=>{n.hintOn=!n.hintOn,_.classList.toggle(`is-on`,n.hintOn);let e=u.querySelector(`.st-hint-box`);e&&(e.hidden=!n.hintOn,n.hintOn&&e.scrollIntoView({block:`nearest`,behavior:`smooth`}))}),a.querySelectorAll(`.st-term-tabs button`).forEach(e=>{e.addEventListener(`click`,()=>re(e.dataset.term))}),a.querySelector(`.st-close`).addEventListener(`click`,()=>V()),a.querySelector(`.studio-backdrop`).addEventListener(`click`,()=>V()),T.addEventListener(`click`,()=>E(!n.guideOn)),document.addEventListener(`keydown`,e=>{n.open&&(e.key===`Escape`?(e.preventDefault(),V()):(e.key===`F5`||e.ctrlKey&&e.key===`Enter`)&&(e.preventDefault(),se()))});function ce(){n.open||(n.open=!0,E(window.innerWidth>1180),a.classList.add(`is-open`),a.setAttribute(`aria-hidden`,`false`),ie(n.activityId),d.focus({preventScroll:!0}),d.setSelectionRange(0,0))}function le(){n.open&&(M(),n.open=!1,a.classList.remove(`is-open`),a.setAttribute(`aria-hidden`,`true`),d.blur())}function V(){n.open&&(le(),e?.())}function ue(){return n.open}return o.classList.toggle(`no-guide`,!n.guideOn),document.getElementById(`app`).appendChild(a),P(),N(),ie(n.activityId),B(),{open:ce,close:le,isOpen:ue,run:se,selectActivity:ie}}var kp=`senai.blocks.v1`,Ap={eject:{label:`Ejetar peça`,hint:`cilindro de ejeção`,dur:2.2,tone:`blue`,tip:`O cilindro de ejeção empurra a peça de baixo do magazine para a rampa de saída. O sensor indutivo confirma a peça e o sensor óptico do fim da rampa avisa quando a calha acumulou as 8 peças.`},press:{label:`Prensar peça`,hint:`prensa pneumática`,dur:2.6,tone:`blue`,tip:`A prensa desce sob pressão controlada até encostar na peça. O manômetro mostra a força aplicada — pressão alta demais pode marcar a peça.`},rotate:{label:`Girar mesa 90°`,hint:`mesa indexada`,dur:2.6,tone:`blue`,tip:`O atuador rotativo gira a mesa em 90° por ciclo, levando a peça à próxima posição de trabalho. Cada comando avança um quarto de volta.`},assemble:{label:`Montar conjunto`,hint:`alimentar + posicionar + prensar`,dur:4.2,tone:`blue`,tip:`O alimentador captura uma tampa, o shuttle a posiciona sobre a base, a prensa assenta o conjunto e o cilindro lateral o leva à saída. O magazine possui cinco tampas e interrompe o programa ao esvaziar.`},store:{label:`Guardar bandeja`,hint:`estante de níveis`,dur:2.4,tone:`blue`,tip:`A peça é deslocada para a posição de armazenagem na prateleira. O sinal amarelo indica operação em andamento.`},belt:{label:`Transportar peça`,hint:`esteira + sensores`,dur:3.4,tone:`blue`,tip:`A esteira conduz as peças no sentido da saída. Os sensores fotoelétricos detectam a passagem na entrada e na saída.`},sortMetal:{label:`Separar metálica`,hint:`rampa 1 · indutivo`,dur:3,tone:`blue`,tip:`O sensor indutivo identifica o metal. A esteira alinha a peça com o cilindro — avançando ou recuando se ela passou um pouco — e o cilindro 1 a empurra para a rampa das metálicas.`},sortColor:{label:`Separar colorida`,hint:`rampa 2 · óptico`,dur:3,tone:`teal`,tip:`O sensor óptico detecta reflexão no plástico colorido. A esteira alinha a peça com o cilindro — avançando ou recuando se ela passou um pouco — e o cilindro 2 a desvia para a rampa do meio.`},sortBlack:{label:`Separar preta`,hint:`rampa 3 · sem reflexão`,dur:3,tone:`grey`,tip:`O plástico preto não reflete: o sensor óptico fica desligado. A esteira alinha a peça com o cilindro — avançando ou recuando se ela passou um pouco — e o cilindro 3 a empurra para a última rampa.`},piece:{label:`Contar peça`,hint:`sensor de saída`,dur:.6,tone:`green`,tip:`Registra uma peça produzida, como o contador do CLP. Coloque este bloco sempre depois de mover a peça.`},signalGreen:{label:`Sinal verde`,hint:`torre luminosa`,dur:.8,tone:`green`,tip:`Acende o verde da torre: estação liberada, sem falhas.`},signalAmber:{label:`Sinal amarelo`,hint:`torre luminosa`,dur:.8,tone:`amber`,tip:`Acende o amarelo da torre: atenção, operação em andamento ou ciclo em espera.`},signalOff:{label:`Apagar sinal`,hint:`torre luminosa`,dur:.6,tone:`grey`,tip:`Apaga a torre luminosa ao final da sequência.`},wait:{label:`Aguardar 1 s`,hint:`temporizador`,dur:1,tone:`amber`,tip:`Pausa de 1 segundo, como o timer do CLP. Útil entre o posicionamento e a prensagem.`}},jp={distribution:`eject`,test:`press`,processing:`rotate`,assembly:`assemble`,storage:`store`,conveyor:`belt`},Mp={blue:`#2f6fd0`,teal:`#2f8f8a`,green:`#2f9e63`,amber:`#c99a2e`,grey:`#5a6470`},Np=`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>`,Pp=`<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>`,Fp=5;function Ip(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}function Lp(e){return e.toFixed(1).replace(`.`,`,`)+` s`}function Rp(e){let t=e===`conveyor`?[`belt`,`sortMetal`,`sortColor`,`sortBlack`]:[jp[e]];return t.push(`piece`,`wait`,`signalGreen`,`signalAmber`,`signalOff`),t.filter(e=>Ap[e])}function zp(e){return e===`conveyor`?[`sortMetal`,`piece`,`sortColor`,`piece`,`sortBlack`,`piece`]:[jp[e],`piece`,`wait`].filter(e=>Ap[e])}function Bp(){try{let e=localStorage.getItem(kp),t=e?JSON.parse(e):null;return t&&typeof t==`object`?t:{}}catch{return{}}}function Vp({onParts:e,onClose:t}={}){let n=Bp(),r={open:!1,station:null,steps:[],loop:1,running:!1,index:0,elapsed:0,cycles:0,pieces:0},i=Ip(`div`,`bl-layer`);i.setAttribute(`aria-hidden`,`true`),i.innerHTML=`
    <section class="bl-window" role="dialog" aria-label="Programação em blocos">
      <header class="bl-head">
        <div class="bl-head-text">
          <span class="bl-kicker"></span>
          <h2>Programação em blocos</h2>
          <p>Arraste os blocos e acompanhe a bancada funcionando ao lado.</p>
        </div>
        <button type="button" class="bl-close" aria-label="Fechar programação">${Np}</button>
      </header>
      <div class="bl-status" data-kind="idle">
        <span class="bl-dot"></span>
        <span class="bl-status-text">Pronto para programar</span>
      </div>
      <div class="bl-body">
        <aside class="bl-palette">
          <div class="bl-col-head"><span>BLOCOS DISPONÍVEIS</span></div>
          <div class="bl-blocks"></div>
          <p class="bl-note">Toque para adicionar ou arraste até a posição desejada no programa.</p>
        </aside>
        <main class="bl-canvas">
          <div class="bl-col-head"><span>PROGRAMA DA ESTAÇÃO</span><span class="bl-count">0 blocos</span></div>
          <div class="bl-loopbar">
            <span class="bl-loop-label">repetir programa</span>
            <button type="button" class="bl-mini" data-loop="-1" aria-label="Menos repetições">−</button>
            <b class="bl-loop-value">1×</b>
            <button type="button" class="bl-mini" data-loop="1" aria-label="Mais repetições">+</button>
            <span class="bl-loop-note">de 1 a ${Fp} vezes</span>
          </div>
          <div class="bl-list-wrap">
            <div class="bl-list"></div>
            <p class="bl-empty">Arraste um bloco para começar o programa.</p>
          </div>
          <footer class="bl-actions">
            <button type="button" class="bl-run">${Pp}<span>Executar programa</span></button>
            <button type="button" class="bl-stop" disabled>Parar</button>
            <button type="button" class="bl-clear">Limpar</button>
            <span class="bl-parts">Peças <b>0</b></span>
            <span class="bl-save"></span>
          </footer>
        </main>
        <aside class="bl-info">
          <div class="bl-col-head"><span>SOBRE A MÁQUINA</span></div>
          <p class="bl-info-desc"></p>
          <div class="bl-info-tech"></div>
          <div class="bl-info-seq">
            <span class="bl-info-seq-tag">SEQUÊNCIA SUGERIDA</span>
            <p class="bl-info-seq-text"></p>
          </div>
          <div class="bl-tip">
            <span class="bl-tip-tag">DICA</span>
            <p class="bl-tip-text"></p>
          </div>
        </aside>
      </div>
    </section>`,document.getElementById(`app`).appendChild(i);let a=i.querySelector(`.bl-kicker`),o=i.querySelector(`.bl-head-text h2`),s=i.querySelector(`.bl-status`),c=i.querySelector(`.bl-status-text`),l=i.querySelector(`.bl-blocks`),u=i.querySelector(`.bl-list-wrap`),d=i.querySelector(`.bl-list`),f=i.querySelector(`.bl-empty`),p=i.querySelector(`.bl-count`),m=i.querySelector(`.bl-loop-value`),h=i.querySelector(`.bl-run`),g=i.querySelector(`.bl-stop`),_=i.querySelector(`.bl-clear`),v=i.querySelector(`.bl-parts b`),y=i.querySelector(`.bl-save`),b=i.querySelector(`.bl-info-desc`),x=i.querySelector(`.bl-info-tech`),S=i.querySelector(`.bl-info-seq-text`),C=i.querySelector(`.bl-tip-text`),w=null,T=!1,E=``;function D(e){C.textContent=e||``,C.animate([{opacity:0,transform:`translateY(2px)`},{opacity:1,transform:`none`}],{duration:180,easing:`ease-out`})}function O(e){return Ap[e]?.tip||E}function k(e){let t=e.target.closest(`.bl-pal, .bl-step`);t&&(t.classList.contains(`bl-pal`)?D(O(t.dataset.id)):D(O(r.steps[Number(t.dataset.i)])))}function A(e){e.relatedTarget&&e.currentTarget.contains(e.relatedTarget)||D(E)}let j=()=>Array.from(d.querySelectorAll(`.bl-step`));function M(e,t){s.dataset.kind=e,c.textContent=t}function N(){v.textContent=String(r.pieces),v.animate([{color:`#ffffff`,transform:`scale(1.2)`},{color:`#37d67a`,transform:`scale(1)`}],{duration:320,easing:`ease-out`})}function P(){h.disabled=r.running||r.steps.length===0,g.disabled=!r.running,_.disabled=r.running||r.steps.length===0,i.querySelectorAll(`.bl-mini`).forEach(e=>e.disabled=r.running),i.classList.toggle(`is-running`,r.running)}function F(){if(r.station){n[r.station.code]={loop:r.loop,steps:r.steps.slice()};try{localStorage.setItem(kp,JSON.stringify(n)),y.textContent=`salvo neste navegador`}catch{y.textContent=`não foi possível salvar`}}}function I(){if(l.innerHTML=``,r.station)for(let e of Rp(r.station.kind)){let t=Ap[e],n=Ip(`button`,`bl-pal`);n.type=`button`,n.dataset.id=e,n.style.setProperty(`--blk`,Mp[t.tone]||Mp.blue),n.innerHTML=`<span class="bl-pal-text"><b>${t.label}</b><em>${t.hint}</em></span><span class="bl-pal-dur">${Lp(t.dur)}</span>`,l.appendChild(n)}}function L(){d.innerHTML=``,f.hidden=r.steps.length>0,p.textContent=`${r.steps.length} ${r.steps.length===1?`bloco`:`blocos`}`,r.steps.forEach((e,t)=>{let n=Ap[e],i=Ip(`div`,`bl-step`);i.dataset.i=String(t),i.style.setProperty(`--blk`,Mp[n.tone]||Mp.blue),i.innerHTML=`
        <span class="bl-step-fill"></span>
        <span class="bl-step-idx">${String(t+1).padStart(2,`0`)}</span>
        <span class="bl-step-label">${n.label}</span>
        <span class="bl-step-dur">${Lp(n.dur)}</span>`;let a=Ip(`button`,`bl-step-del`,`×`);a.type=`button`,a.setAttribute(`aria-label`,`Remover ${n.label}`),a.disabled=r.running,a.addEventListener(`click`,()=>{r.running||(r.steps.splice(t,1),F(),L(),P(),M(`idle`,`Programa alterado · execute para testar`))}),i.appendChild(a),d.appendChild(i)}),P()}function R(){m.textContent=`${r.loop}×`,i.querySelectorAll(`.bl-mini`).forEach(e=>{let t=Number(e.dataset.loop);e.disabled=r.running||(t<0?r.loop<=1:r.loop>=Fp)})}function z(e,t){if(r.running||!r.station||!Ap[e]||!Rp(r.station.kind).includes(e))return;let n=t===void 0?r.steps.length:Math.max(0,Math.min(t,r.steps.length));r.steps.splice(n,0,e),F(),L(),D(O(e)),M(`idle`,`Programa alterado · execute para testar`),d.children[n]?.scrollIntoView({block:`nearest`,behavior:`smooth`})}function ee(e,t){let n=u.getBoundingClientRect();return e>=n.left-48&&e<=n.right+48&&t>=n.top-46&&t<=n.bottom+46}function te(e){let t=j();for(let n=0;n<t.length;n++){let r=t[n].getBoundingClientRect();if(e<r.top+r.height/2)return n}return r.steps.length}function B(){j().forEach(e=>e.classList.remove(`is-insert`)),d.classList.remove(`is-insert-end`,`is-target`)}function ne(e){j().forEach((t,n)=>t.classList.toggle(`is-insert`,n===e)),d.classList.toggle(`is-insert-end`,e>=r.steps.length)}function re(e){if(!w||!w.moved&&Math.hypot(e.clientX-w.x0,e.clientY-w.y0)<5)return;w.moved=!0,w.ghost.classList.add(`is-dragging`),w.ghost.style.left=`${e.clientX}px`,w.ghost.style.top=`${e.clientY}px`;let t=ee(e.clientX,e.clientY);d.classList.toggle(`is-target`,t),t?(w.index=te(e.clientY),ne(w.index)):(B(),d.classList.toggle(`is-target`,!1),w.index=r.steps.length)}function ie(e){window.removeEventListener(`pointermove`,re);let t=w;if(w=null,!t)return;t.ghost.remove();let n=ee(e.clientX,e.clientY);B(),t.moved&&(T=!0,setTimeout(()=>{T=!1},0),n&&z(t.id,t.index))}l.addEventListener(`pointerdown`,e=>{let t=e.target.closest(`.bl-pal`);if(!t||r.running||e.button!==0)return;let n=t.dataset.id,i=Ap[n];if(!i)return;let a=Ip(`div`,`bl-ghost`,i.label);a.style.setProperty(`--blk`,Mp[i.tone]||Mp.blue),a.style.left=`${e.clientX}px`,a.style.top=`${e.clientY}px`,document.body.appendChild(a),w={id:n,ghost:a,x0:e.clientX,y0:e.clientY,moved:!1,index:r.steps.length},window.addEventListener(`pointermove`,re),window.addEventListener(`pointerup`,ie,{once:!0})}),l.addEventListener(`click`,e=>{let t=e.target.closest(`.bl-pal`);t&&(T?T=!1:z(t.dataset.id))});for(let e of[l,d])e.addEventListener(`pointerover`,k),e.addEventListener(`pointerout`,A);l.addEventListener(`focusin`,k),l.addEventListener(`focusout`,A);function ae(e){j().forEach((t,n)=>{t.classList.toggle(`is-current`,n===e),n!==e&&t.style.setProperty(`--p`,`0%`)});let t=Ap[r.steps[e]];if(t){let n=r.loop>1?` · volta ${r.cycles+1}/${r.loop}`:``;M(`running`,`Passo ${e+1}/${r.steps.length} · ${t.label}${n}`),r.station?.hmi?.draw(`ETAPA ${e+1}/${r.steps.length}`,`running`)}}function oe(){j().forEach(e=>{e.classList.remove(`is-current`),e.style.setProperty(`--p`,`0%`)})}function se(){!r.running&&r.station&&r.steps.length!==0&&(r.running=!0,r.index=0,r.elapsed=0,r.cycles=0,r.pieces=0,r.station.setProgramMode?.(!0),L(),R(),P(),N(),ae(0))}function ce(){r.running=!1,r.station?.setProgramMode?.(!1,!0),r.station?.hmi?.draw(`PROGRAMA CONCLUÍDO`,`done`),M(`done`,`Programa concluído · ${r.pieces} ${r.pieces===1?`peça contada`:`peças contadas`}`),oe(),R(),P()}function le(){r.running&&(r.running=!1,r.station?.setProgramMode?.(!1),r.station?.hmi?.draw(`PROGRAMA INTERROMPIDO`,`error`),M(`error`,`Programa interrompido`),oe(),R(),P())}function V(e,t,n=`error`){r.running=!1,r.station?.setProgramMode?.(!1,!0),r.station?.hmi?.draw(e,n),M(n===`error`?`error`:`done`,t),oe(),R(),P()}function ue(t){if(!r.running||!r.station)return;let n=r.steps[r.index],i=Ap[n];if(!i){le();return}r.elapsed+=t;let a=Math.min(1,r.elapsed/i.dur),o=r.station.programStep?.(n,a);if(o&&o.stop){V(o.stop,o.message||`Programa interrompido`,o.kind);return}let s=j()[r.index];if(s&&s.style.setProperty(`--p`,`${(a*100).toFixed(1)}%`),!(a<1)){if(r.station.programCommit?.(n),n===`piece`&&(r.pieces+=1,N(),e?.(1)),r.elapsed=0,r.index+=1,r.index>=r.steps.length){if(r.cycles+=1,r.cycles<r.loop)r.index=0;else{ce();return}}ae(r.index)}}function de(e){if(r.open||!e)return;r.running&&le(),r.station=e,r.running=!1,r.index=0,r.elapsed=0,r.cycles=0,r.pieces=0;let t=n[e.code],s=Rp(e.kind),c=Array.isArray(t?.steps)?t.steps.filter(e=>s.includes(e)):[];r.steps=c.length>0?c:zp(e.kind),r.loop=Math.max(1,Math.min(Fp,Number(t?.loop)||1)),a.textContent=`${e.code} · ${e.type.toUpperCase()}`,o.textContent=`${e.name} · blocos`,y.textContent=t?`programa salvo neste navegador`:`programa de exemplo`,b.textContent=e.desc||``,x.innerHTML=``,(e.tech||[]).forEach(e=>x.appendChild(Ip(`span`,`bl-chip`,e))),S.textContent=zp(e.kind).map(e=>Ap[e]?.label).filter(Boolean).join(` → `),E=e.tip||Ap[zp(e.kind)[0]]?.tip||``,D(E),I(),L(),R(),P(),N(),M(`idle`,`Pronto para programar`),r.open=!0,i.classList.add(`is-open`),i.setAttribute(`aria-hidden`,`false`),e.hmi?.draw(`EM PROGRAMAÇÃO`,`ready`)}function fe(){r.open&&(r.running&&le(),r.open=!1,r.station?.setProgramMode?.(!1,!0),r.station?.hmi?.draw(`TOQUE PARA PROGRAMAR`,`idle`),i.classList.remove(`is-open`),i.setAttribute(`aria-hidden`,`true`),r.station=null)}function H(){r.open&&(fe(),t?.())}return h.addEventListener(`click`,se),g.addEventListener(`click`,le),_.addEventListener(`click`,()=>{r.running||(r.steps=[],F(),L(),M(`idle`,`Programa vazio · adicione blocos`))}),i.querySelectorAll(`.bl-mini`).forEach(e=>{e.addEventListener(`click`,()=>{if(r.running)return;let t=r.loop+Number(e.dataset.loop);r.loop=Math.max(1,Math.min(Fp,t)),F(),R()})}),i.querySelector(`.bl-close`).addEventListener(`click`,H),document.addEventListener(`keydown`,e=>{r.open&&e.key===`Escape`&&(e.preventDefault(),e.stopImmediatePropagation(),H())}),P(),{open:de,close:fe,isOpen:()=>r.open,update:ue}}var Hp=new Es({canvas:document.getElementById(`scene`),antialias:!0,powerPreference:`high-performance`});Hp.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),Hp.setSize(window.innerWidth,window.innerHeight),Hp.shadowMap.enabled=!0,Hp.shadowMap.type=2,Hp.toneMapping=4,Hp.toneMappingExposure=1.08,Hp.outputColorSpace=je;var Up=new Ds;Up.background=new fr(724240);var Wp=new ri(48,window.innerWidth/window.innerHeight,.05,140);Wp.position.set(10.5,6.4,15.5);var Gp=new pu(Wp,Hp.domElement);Gp.target.set(0,1.15,.3),Gp.enableDamping=!0,Gp.dampingFactor=.06,Gp.maxPolarAngle=Math.PI/2-.035,Gp.minDistance=.7,Gp.maxDistance=44,Gp.rotateSpeed=.55,Gp.zoomSpeed=.8,Gp.panSpeed=.6,Gp.screenSpacePanning=!0;var Kp=new Hi(Hp);Up.environment=Kp.fromScene(new Eu,.05).texture,Up.environmentIntensity=.55,Kp.dispose();var qp=new Pu;qp.setSize(window.innerWidth,window.innerHeight),qp.domElement.style.position=`absolute`,qp.domElement.style.inset=`0`,qp.domElement.style.pointerEvents=`none`,document.getElementById(`labels`).appendChild(qp.domElement);var Jp=Zu(Hp),Yp=Sd(Up,Jp),Xp=lf(Jp,Hp);Up.add(Xp.root);var Zp=yf(Jp);Up.add(Zp.group);var Qp=Ff(Up,Jp,Hp),$p=Xp.updaters,em=Yf({renderer:Hp,scene:Up,camera:Wp,room:Yp}),tm=np({camera:Wp,dom:Hp.domElement,controls:Gp,onStop:()=>ah(),onInspect:e=>Vm(e)}),nm=!1,rm=Op({onClose:()=>{nm&&setTimeout(oh,140),nm=!1,fm&&pm(!0)}}),im=Vp({onParts:e=>Zm(e),onClose:()=>setTimeout(oh,140)}),am=[];for(let e of Zp.monitors)e.traverse(e=>{e.userData.devScreen&&am.push(e)});var om=[],sm=new Map;for(let e of Xp.stations)e.hmi&&(om.push(e.hmi.hit),sm.set(e.hmi.hit,e));var cm=new W(0,0);function lm(e,t){xm.x=e/window.innerWidth*2-1,xm.y=-(t/window.innerHeight)*2+1,bm.setFromCamera(xm,Wp);let n=bm.intersectObjects(om,!1)[0],r=bm.intersectObjects(am,!1)[0];return n&&(!r||n.distance<=r.distance)?{type:`hmi`,station:sm.get(n.object)||null}:r?{type:`dev`,monitor:r.object.parent}:null}function um(e){!e||im.isOpen()||em.active||(Mm(),ig(),rm.close(),tm.active&&tm.stop(),Wm=null,im.open(e))}function dm(){rm.isOpen()||em.active||fm||(Mm(),ig(),im.close(),nm=tm.active,tm.active&&(tm.stop(),ah()),Wm=null,rm.open())}var fm=null;function pm(e){if(!fm)return;let t=fm.back;fm=null,Gp.enabled=!0,e&&(Wm={p0:Wp.position.clone(),t0:Gp.target.clone(),p1:t.pos.clone(),t1:t.target.clone(),t:0,dur:.9,onDone:()=>{t.walk&&oh()}})}function mm(e){let t=e?.userData?.seat;if(!t){dm();return}if(fm||rm.isOpen()||em.active)return;let n=tm.active,r=Wp.getWorldDirection(new K);fm={back:{pos:Wp.position.clone(),target:n?Wp.position.clone().addScaledVector(r,3):Gp.target.clone(),walk:n}},Mm(),ig(),im.close(),nm=!1,tm.active&&(tm.stop(),ah()),Gp.enabled=!1,Wm={p0:Wp.position.clone(),t0:Gp.target.clone(),p1:t.stand.clone(),t1:t.look.clone(),t:0,dur:1.05,onDone:()=>{Wm={p0:Wp.position.clone(),t0:t.look.clone(),p1:t.eye.clone(),t1:t.look.clone(),t:0,dur:.7,onDone:()=>rm.open()}}}}var hm=[...Xp.stations],gm={code:`CÉLULA`,name:Qp.info.name,type:Qp.info.type,desc:Qp.info.desc,tech:Qp.info.tech,focus:Qp.focus,hitbox:Qp.hitbox,labelPos:Qp.labelPos,isRobot:!0};hm.push(gm),gm.hmi=Qp.hmi,om.push(Qp.hmi.hit),sm.set(Qp.hmi.hit,gm);var _m=[];for(let e of hm){let t=document.createElement(`div`);t.className=`label-anchor`;let n=document.createElement(`div`);n.className=`station-label`+(e.isRobot?` is-robot`:``);let r=e.name.replace(`Estação de `,``);n.innerHTML=`<em>${e.isRobot?`ROBÔ`:e.code.slice(-2)}</em><span>${r}</span>`,t.appendChild(n);let i=new Ou(t);i.position.copy(e.labelPos),!e.isRobot&&hm.indexOf(e)%2==1&&(i.position.y+=.17),i.userData.inner=n,Up.add(i),_m.push(i)}var vm=new Map;hm.forEach(e=>vm.set(e.hitbox,e));var ym=hm.map(e=>e.hitbox),bm=new Ql,xm=new W,Sm=null,Cm=null,wm=document.getElementById(`info-panel`),Tm=document.getElementById(`panel-kicker`),Em=document.getElementById(`panel-title`),Dm=document.getElementById(`panel-desc`),Om=document.getElementById(`panel-tech`),km=document.getElementById(`panel-focus`);function Am(){Cm&&=(Up.remove(Cm),Cm.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),null)}function jm(e){Uh()&&ig(),Sm=e,Tm.textContent=`${e.type} · ${e.code}`,Em.textContent=e.name,Dm.textContent=e.desc,Om.innerHTML=e.tech.map(e=>`<span class="tech-tag">${e}</span>`).join(``),wm.classList.add(`is-open`),wm.setAttribute(`aria-hidden`,`false`),Eh.hidden=!e.isRobot,Dh.hidden=!e.station,Am();let t=e.hitbox.parent,n=e.hitbox.getWorldPosition(new K),r=e.isRobot?.008:t.getWorldPosition(new K).y+.008,i=e.isRobot?.66:.44,a=new q(new rl(i*.92,i,72),new gr({color:16734794,transparent:!0,opacity:.55,side:2,depthTest:!1,depthWrite:!1,blending:2}));a.rotation.x=-Math.PI/2,a.renderOrder=20;let o=new X;o.position.set(n.x,r,n.z),o.add(a),Up.add(o),Cm=o}function Mm(){wm.classList.remove(`is-open`),wm.setAttribute(`aria-hidden`,`true`),Sm=null,Am()}function Nm(e,t){xm.x=e/window.innerWidth*2-1,xm.y=-(t/window.innerHeight)*2+1,bm.setFromCamera(xm,Wp);let n=bm.intersectObjects(hm.map(e=>e.hitbox),!1);return n.length===0?null:vm.get(n[0].object)||null}var Pm={x:0,y:0,t:0};Hp.domElement.addEventListener(`pointerdown`,e=>{Pm={x:e.clientX,y:e.clientY,t:performance.now()}}),Hp.domElement.addEventListener(`pointerup`,e=>{if(tm.active||im.isOpen()||fm||Math.hypot(e.clientX-Pm.x,e.clientY-Pm.y)>7||performance.now()-Pm.t>700)return;let t=lm(e.clientX,e.clientY);if(t&&t.type===`hmi`){t.station?.isRobot?rg():um(t.station);return}if(t&&t.type===`dev`){mm(t.monitor);return}let n=Nm(e.clientX,e.clientY);n?jm(n):Mm()});var Fm=0;Hp.domElement.addEventListener(`pointermove`,e=>{if(tm.active||im.isOpen()||fm)return;let t=performance.now();if(t-Fm<90)return;Fm=t;let n=lm(e.clientX,e.clientY),r=n?null:Nm(e.clientX,e.clientY);Hp.domElement.style.cursor=n||r?`pointer`:`grab`,Hp.domElement.title=n?.type===`hmi`?n.station?.isRobot?`Programar robô (teach pendant)`:`Programar bancada em blocos`:n?.type===`dev`?`Abrir Dev Lab — atividades de programação`:``}),document.getElementById(`panel-close`).addEventListener(`click`,Mm),km.addEventListener(`click`,()=>{Sm&&Gm(null,Sm.focus.pos,Sm.focus.target)});var Im=document.getElementById(`crosshair`),Lm=Im.querySelector(`.ch-hint`),Rm=0;function zm(e,t,n=4.5){bm.setFromCamera(cm,Wp);let r=bm.intersectObjects(om,!1)[0],i=bm.intersectObjects(am,!1)[0],a=bm.intersectObjects(ym,!1)[0],o=[];return r&&r.distance<=e&&o.push({type:`hmi`,station:sm.get(r.object)||null,d:r.distance}),i&&i.distance<=n&&o.push({type:`dev`,monitor:i.object.parent,d:i.distance}),a&&a.distance<=t&&o.push({type:`entry`,entry:vm.get(a.object)||null,d:a.distance}),o.sort((e,t)=>e.d-t.d),o[0]||null}function Bm(e){e&&(e.isRobot?rg():um(e))}function Vm(e){if(!tm.active)return;if(e&&!tm.isLocked()&&typeof e.clientX==`number`){let t=lm(e.clientX,e.clientY);if(t?.type===`hmi`&&t.station){Bm(t.station);return}if(t?.type===`dev`){mm(t.monitor);return}let n=Nm(e.clientX,e.clientY);n?jm(n):Mm();return}let t=zm(5.5,7.5);t?.type===`hmi`&&t.station?Bm(t.station):t?.type===`dev`?mm(t.monitor):t?.type===`entry`&&t.entry&&jm(t.entry)}function Hm(e){if(!tm.active||!tm.isLocked()){Im.classList.remove(`is-target`),Lm.textContent=``;return}if(Rm+=e,Rm<.1)return;Rm=0;let t=zm(5.5,7.5);t?.type===`hmi`&&t.station?(Im.classList.add(`is-target`),Lm.textContent=t.station.isRobot?`E · programar robô`:`E · programar ${t.station.code}`):t?.type===`dev`?(Im.classList.add(`is-target`),Lm.textContent=`E · abrir Dev Lab`):t?.type===`entry`&&t.entry?(Im.classList.add(`is-target`),Lm.textContent=t.entry.isRobot?`E · célula robótica`:`E · ${t.entry.code}`):(Im.classList.remove(`is-target`),Lm.textContent=``)}var Um={overview:{pos:new K(1.3,4,11.7),target:new K(-.3,.95,-3.4)},line:{pos:new K(-.45,1.72,4.9),target:new K(1.6,1.08,-1)},robot:{pos:new K(.45,2.15,1.85),target:new K(-2,1.35,.15)},desks:{pos:new K(2.35,2.05,6.4),target:new K(6.15,.9,.1)},top:{pos:new K(.02,36,8),target:new K(0,.15,.2),hideRoof:!0}},Wm=null;function Gm(e,t,n){if(em.active)return;pm(!1),im.close(),tm.active&&(tm.stop(),ah());let r=e?Um[e]:null,i=t||r&&r.pos,a=n||r&&r.target;i&&a&&(document.querySelectorAll(`.view-btn`).forEach(t=>{t.classList.toggle(`is-active`,e!==null&&t.dataset.view===e)}),Yp.setRoofVisible(!(r&&r.hideRoof)),Wm={p0:Wp.position.clone(),t0:Gp.target.clone(),p1:i.clone(),t1:a.clone(),t:0,dur:e===`top`?1.5:1.25})}document.querySelectorAll(`.view-btn`).forEach(e=>{e.addEventListener(`click`,()=>Gm(e.dataset.view))});var Km=!0,qm=0,Jm=document.getElementById(`status-pill`),Ym=document.getElementById(`status-text`),Xm=document.getElementById(`kpi-parts`);function Zm(e=1){qm+=e,Xm.textContent=String(qm).padStart(3,`0`),Xm.animate([{color:`#ffffff`,transform:`scale(1.18)`},{color:`#37d67a`,transform:`scale(1)`}],{duration:420,easing:`ease-out`})}Qp.setOnPlaced(()=>Zm()),document.getElementById(`toggle-labels`).addEventListener(`change`,e=>{document.body.classList.toggle(`no-labels`,!e.target.checked)}),document.getElementById(`toggle-sim`).addEventListener(`change`,e=>{Km=e.target.checked,Jm.classList.toggle(`is-paused`,!Km),Ym.textContent=Km?`Linha em produção`:`Simulação pausada`}),document.getElementById(`toggle-lights`).addEventListener(`change`,e=>{Yp.setLights(e.target.checked)});var Qm=document.getElementById(`ui-toggle`);function $m(){document.body.classList.toggle(`ui-hidden`)}Qm.addEventListener(`click`,$m),document.body.addEventListener(`keydown`,e=>{if(!(rm.isOpen()||im.isOpen())){if((e.key===`h`||e.key===`H`)&&$m(),e.key===`Escape`){if(Uh()){ig({resumeWalk:!0});return}tm.active&&(tm.stop(),ah()),Mm()}e.key>=`1`&&e.key<=`5`&&Gm([`overview`,`line`,`robot`,`desks`,`top`][Number(e.key)-1])}});var eh=document.getElementById(`vr-btn`),th=document.getElementById(`vr-btn-text`),nh=document.getElementById(`walk-btn`),rh=document.getElementById(`walk-btn-text`),ih=!1;function ah(){nh.classList.toggle(`is-active`,tm.active),rh.textContent=tm.active?`Sair do passeio`:`Caminhar`,nh.title=tm.active?`Voltar à visão geral (Esc)`:`Andar pelo galpão com WASD`}function oh(){if(em.active)return;Wm=null;let e=Wp.getWorldDirection(new K);tm.start({x:Wp.position.x,z:Wp.position.z,yaw:Math.atan2(-e.x,-e.z),pitch:Math.asin(Math.max(-1,Math.min(1,e.y)))}),ah()}function sh(e){eh.classList.toggle(`is-active`,e),th.textContent=e?`Sair da VR`:ih?`Entrar em VR`:`VR indisponível`}em.onChange(e=>{document.body.classList.toggle(`xr-active`,e),qp.domElement.style.display=e?`none`:``,sh(e),e?(Wm=null,pm(!1),Mm(),ig(),rm.close(),im.close(),tm.active&&(tm.stop(),ah())):Gm(`overview`)}),em.isSupported().then(e=>{ih=e,eh.disabled=!e,eh.classList.toggle(`is-unavailable`,!e),eh.title=e?`Entrar no modo imersivo`:`Este navegador ou dispositivo não suporta WebXR imersivo`,sh(!1)}),eh.addEventListener(`click`,async()=>{if(em.active)try{await em.exit()}catch(e){console.warn(`Falha ao encerrar a sessão VR:`,e)}else try{await em.enter()}catch(e){console.warn(`Falha ao iniciar a sessão VR:`,e),th.textContent=`Falha ao iniciar VR`,setTimeout(()=>sh(!1),2200)}}),nh.addEventListener(`click`,()=>{if(!em.active){if(tm.active)tm.stop();else{let e=im.isOpen()||Uh();Mm(),ig(),im.close(),Wm=null,e?oh():tm.start()}ah()}});var ch=document.getElementById(`program-panel`),lh=document.getElementById(`program-close`),uh=document.getElementById(`program-status`),dh=document.getElementById(`program-status-text`),fh=document.getElementById(`tip-readout`),ph=document.getElementById(`jog-step`),mh=document.getElementById(`grip-btn`),hh=document.getElementById(`teach-btn`),gh=document.getElementById(`point-list`),_h=document.getElementById(`program-list`),vh=document.getElementById(`program-empty`),yh=document.getElementById(`program-count`),bh=document.getElementById(`program-run`),xh=document.getElementById(`program-stop`),Sh=document.getElementById(`program-speed`),Ch=document.getElementById(`speed-value`),wh=document.getElementById(`program-loop`),Th=document.getElementById(`program-clear`),Eh=document.getElementById(`panel-program`),Dh=document.getElementById(`panel-blocks`),Oh=document.getElementById(`points-save`),kh=document.getElementById(`points-reset`),Ah=document.getElementById(`points-state`),jh=`senai.robot.teach.v1`,Mh=[{tag:`Acima do ninho`,x:-2,y:1.32,z:-.66},{tag:`Ninho`,x:-2,y:1.03,z:-.66},{tag:`Acima do pallet`,x:-2,y:1.3,z:.66},{tag:`Pallet`,x:-2,y:1,z:.66},{tag:`Início`,x:-1.95,y:1.55,z:.55}],Nh=[],Ph=0,Fh=[],Ih=!1,Lh=!1,Rh=-1,zh=!1,Bh=0,Vh=!1,Hh=e=>e.toFixed(2).replace(`.`,`,`),Uh=()=>ch.classList.contains(`is-open`);function Wh(){return Mh.map((e,t)=>({name:`P${t+1}`,tag:e.tag,x:e.x,y:e.y,z:e.z}))}function Gh(){Ph=Nh.reduce((e,t)=>{let n=/^P(\d+)$/.exec(t.name||``);return n?Math.max(e,Number(n[1])):e},0)}function Kh(){try{let e=localStorage.getItem(jh);if(!e)return null;let t=JSON.parse(e);if(!t||!Array.isArray(t.points))return null;let n=t.points.filter(e=>e&&[e.x,e.y,e.z].every(e=>Number.isFinite(Number(e)))).map((e,t)=>({name:typeof e.name==`string`&&e.name?e.name:`P${t+1}`,tag:typeof e.tag==`string`?e.tag:``,x:Number(e.x),y:Number(e.y),z:Number(e.z)}));return n.length===0?null:{points:n,program:Array.isArray(t.program)?t.program.filter(e=>!e||typeof e.type!=`string`?!1:e.type===`move`?!!e.point&&[e.point.x,e.point.y,e.point.z].every(e=>Number.isFinite(Number(e))):[`home`,`grip`,`release`,`wait`].includes(e.type)).map(e=>({type:e.type,label:typeof e.label==`string`?e.label:`Passo`,seconds:Number.isFinite(Number(e.seconds))?Number(e.seconds):void 0,point:e.point?{x:Number(e.point.x),y:Number(e.point.y),z:Number(e.point.z)}:void 0})):[],nextPoint:Number.isFinite(Number(t.nextPoint))?Number(t.nextPoint):0}}catch{return null}}function qh(){try{let e={version:1,nextPoint:Ph,points:Nh.map(({name:e,tag:t,x:n,y:r,z:i})=>({name:e,tag:t,x:n,y:r,z:i})),program:Fh.map(e=>({type:e.type,label:e.label,seconds:e.seconds,point:e.point?{...e.point}:void 0}))};return localStorage.setItem(jh,JSON.stringify(e)),Vh=!1,Jh(),!0}catch{return Ah.textContent=`Não foi possível salvar neste navegador`,!1}}function Jh(){let e=`${Nh.length} ${Nh.length===1?`ponto`:`pontos`}`,t=`${Fh.length} ${Fh.length===1?`passo`:`passos`}`;Ah.textContent=Vh?`${e} · ${t} · alterações não salvas`:`${e} · ${t} · salvo neste navegador`}var Yh=Kh();Yh?(Nh.push(...Yh.points),Fh=Yh.program):(Nh.push(...Wh()),Vh=!0),Gh(),Yh&&(Ph=Math.max(Ph,Yh.nextPoint||0));function Xh(e,t){uh.className=`program-status is-${e}`,dh.textContent=t}function Zh(){zh=Qp.getGrip(),mh.textContent=zh?`Abrir garra`:`Fechar garra`}function Qh(){let e=Qp.getTip();fh.textContent=`X ${Hh(e.x)} · Y ${Hh(e.y)} · Z ${Hh(e.z)}`}function $h(){if(gh.innerHTML=``,Nh.length===0){let e=document.createElement(`span`);e.className=`pg-hint-inline`,e.textContent=`Nenhum ponto ensinado ainda.`,gh.appendChild(e),Jh()}else Nh.forEach(e=>{let t=document.createElement(`div`);t.className=`pg-point`;let n=document.createElement(`button`);n.type=`button`,n.className=`pg-point-main`,n.title=`Inserir movimento até ${e.name}`,n.innerHTML=`<b>${e.tag?`${e.name} · ${e.tag}`:e.name}</b><span>${Hh(e.x)} · ${Hh(e.y)} · ${Hh(e.z)}</span>`,n.disabled=Ih,n.addEventListener(`click`,()=>{tg({type:`move`,point:{x:e.x,y:e.y,z:e.z},label:e.tag?`Ir para ${e.name} · ${e.tag}`:`Ir para ${e.name}`})});let r=document.createElement(`button`);r.type=`button`,r.className=`pg-point-del`,r.title=`Remover ponto`,r.textContent=`×`,r.disabled=Ih,r.addEventListener(`click`,()=>{if(Ih)return;let t=Nh.indexOf(e);t>=0&&Nh.splice(t,1),Vh=!0,$h()}),t.append(n,r),gh.appendChild(t)}),Jh()}function eg(){_h.innerHTML=``,vh.hidden=Fh.length>0,yh.textContent=`${Fh.length} ${Fh.length===1?`passo`:`passos`}`,Fh.forEach((e,t)=>{let n=document.createElement(`li`);n.className=`pg-step`+(t===Rh?` is-current`:``);let r=document.createElement(`span`);r.className=`pg-step-idx`,r.textContent=String(t+1).padStart(2,`0`);let i=document.createElement(`span`);i.className=`pg-step-label`,i.textContent=e.label;let a=document.createElement(`button`);a.type=`button`,a.className=`pg-step-del`,a.title=`Remover passo`,a.textContent=`×`,a.disabled=Ih,a.addEventListener(`click`,()=>{Ih||(Fh.splice(t,1),Vh=!0,eg())}),n.append(r,i,a),_h.appendChild(n)}),bh.disabled=Ih||Fh.length===0,Th.disabled=Ih||Fh.length===0,Jh()}function tg(e){!Ih&&Uh()&&(Fh.push(e),Vh=!0,eg(),_h.lastElementChild?.scrollIntoView({block:`nearest`}))}function ng(e){Ih=e,ch.classList.toggle(`is-running`,e),document.querySelectorAll(`.pg-jog, .pg-palette button, #teach-btn, #grip-btn, #points-save, #points-reset`).forEach(t=>{t.disabled=e}),xh.disabled=!e,wh.disabled=e,$h(),eg()}function rg(){Uh()||em.active||(im.close(),Lh=tm.active,tm.active&&(tm.stop(),ah()),Mm(),Gm(`robot`),Qp.startProgramming(),Qp.hmi?.draw(`MODO MANUAL`,`ready`),ch.classList.add(`is-open`),ch.setAttribute(`aria-hidden`,`false`),Rh=-1,ng(!1),Zh(),Xh(`manual`,`Manual · mova o robô e ensine os pontos`),Qh())}function ig({resumeWalk:e=!1}={}){if(!Uh())return;let t=e&&Lh;Lh=!1,Qp.endProgramming(),Qp.hmi?.draw(`TOQUE PARA PROGRAMAR`,`idle`),ch.classList.remove(`is-open`),ch.setAttribute(`aria-hidden`,`true`),Rh=-1,ng(!1),Xh(`manual`,`Manual · mova o robô e ensine os pontos`),t&&setTimeout(oh,140)}Eh.addEventListener(`click`,rg),Dh.addEventListener(`click`,()=>{Sm&&Sm.station&&um(Sm)}),lh.addEventListener(`click`,()=>ig({resumeWalk:!0})),document.querySelectorAll(`.pg-jog`).forEach(e=>{let t=null,n=()=>{if(Ih)return;let[t,n,r]=e.dataset.jog.split(`,`).map(Number),i=Number(ph.value);Qp.jog(t*i,n*i,r*i)};e.addEventListener(`pointerdown`,e=>{e.preventDefault(),!Ih&&(n(),t&&clearInterval(t),t=setInterval(n,110))});let r=()=>{t&&=(clearInterval(t),null)};e.addEventListener(`pointerup`,r),e.addEventListener(`pointerleave`,r),e.addEventListener(`pointercancel`,r),e.addEventListener(`blur`,r)}),mh.addEventListener(`click`,()=>{Ih||(zh=!zh,Qp.setGrip(zh),mh.textContent=zh?`Abrir garra`:`Fechar garra`)}),hh.addEventListener(`click`,()=>{if(Ih)return;let e=Qp.getTip();Ph+=1,Nh.push({name:`P${Ph}`,tag:``,x:e.x,y:e.y,z:e.z}),Vh=!0,$h(),Xh(`manual`,`Ponto P${Ph} ensinado · clique em Salvar`),Qh()}),Oh.addEventListener(`click`,()=>{Ih||qh()&&Xh(`done`,`Pontos e sequência salvos`)}),kh.addEventListener(`click`,()=>{Ih||(Nh.length=0,Nh.push(...Wh()),Gh(),Vh=!0,$h(),Xh(`manual`,`Pontos padrão carregados · clique em Salvar`))}),document.querySelectorAll(`.pg-palette [data-step]`).forEach(e=>{e.addEventListener(`click`,()=>{if(Ih)return;let t=e.dataset.step;tg(t===`home`?{type:`home`,label:`Ir para posição inicial`}:t===`grip`?{type:`grip`,label:`Fechar garra`}:t===`release`?{type:`release`,label:`Abrir garra`}:{type:`wait`,seconds:.5,label:`Esperar 0,5 s`})})}),Sh.addEventListener(`input`,()=>{Ch.textContent=`${Number(Sh.value).toFixed(1).replace(`.`,`,`)}×`}),bh.addEventListener(`click`,()=>{if(!(Ih||Fh.length===0)){if(!Km){let e=document.getElementById(`toggle-sim`);e.checked=!0,e.dispatchEvent(new Event(`change`))}Rh=-1,ng(!0),Qp.startProgram(Fh,{loop:wh.checked,speed:Number(Sh.value)})}}),xh.addEventListener(`click`,()=>Qp.stopProgram()),Th.addEventListener(`click`,()=>{Ih||(Fh=[],Rh=-1,Vh=!0,eg())}),Qp.onProgramEvent(e=>{e.type===`step`?(Rh=e.index,eg(),Qp.hmi?.draw(`PASSO ${e.index+1}/${e.total}`,`running`),Xh(`running`,`Passo ${e.index+1}/${e.total} · ${e.step?e.step.label:``}`)):e.type===`done`?(Rh=-1,ng(!1),Zh(),Qp.hmi?.draw(`PROGRAMA CONCLUÍDO`,`done`),Xh(`done`,`Programa concluído`)):e.type===`stop`&&(Rh=-1,ng(!1),Zh(),Qp.hmi?.draw(`PROGRAMA INTERROMPIDO`,`error`),Xh(`manual`,`Programa interrompido`))}),Yh||qh(),$h(),eg();var ag=new Ll,og=0;function sg(){let e=!document.body.classList.contains(`no-labels`);if(qp.domElement.style.display=e?``:`none`,!e){for(let e of _m)e.element.style.opacity=`0`;return}let t=window.innerWidth,n=window.innerHeight,r=[];for(let e of _m){let i=Wp.position.distanceTo(e.position);if(i>24){e.element.style.opacity=`0`;continue}let a=e.position.clone().project(Wp);a.z>1?e.element.style.opacity=`0`:r.push({obj:e,dist:i,x:(a.x*.5+.5)*t,y:(-a.y*.5+.5)*n})}r.sort((e,t)=>e.dist-t.dist);let i=[];for(let e of r){let t=Math.min(1.05,Math.max(.8,Math.sqrt(9.5/Math.max(e.dist,.001))));e.obj.userData.inner.style.transform=`scale(${t.toFixed(3)})`;let n=58*t,r=12*t,a=i.some(t=>Math.abs(e.x-t.x)<n+t.hw+4&&Math.abs(e.y-t.y)<r+t.hh+2);e.obj.element.style.opacity=a?`0`:`1`,a||i.push({x:e.x,y:e.y,hw:n,hh:r})}}function cg(){let e=Math.min(ag.getDelta(),.05);if(Km){og+=e;let t={t:og,dt:e};$p.forEach(e=>e(t)),Qp.update(t)}if(im.update(e),Uh()&&(Bh+=e,Bh>=.12&&(Bh=0,Qh())),em.active)em.update(e);else{if(Wm){Wm.t+=e;let t=sd(Math.min(1,Wm.t/Wm.dur));if(Wp.position.lerpVectors(Wm.p0,Wm.p1,t),Gp.target.lerpVectors(Wm.t0,Wm.t1,t),Wp.lookAt(Gp.target),t>=1){let e=Wm.onDone;Wm=null,e&&e()}}tm.update(e),Hm(e),tm.active||fm||Wm||Gp.update()}if(Cm){let e=performance.now()*.001,t=Math.sin(e*3.2);Cm.scale.setScalar(1+t*.03),Cm.children[0].material.opacity=.45+.18*(.5+.5*t)}Hp.render(Up,Wp),em.active||(qp.render(Up,Wp),sg())}Gp.addEventListener(`start`,()=>{Wm&&Wm.t>.15&&(Wm=null)}),window.addEventListener(`resize`,()=>{Wp.aspect=window.innerWidth/window.innerHeight,Wp.updateProjectionMatrix(),Hp.setSize(window.innerWidth,window.innerHeight),qp.setSize(window.innerWidth,window.innerHeight)}),document.addEventListener(`visibilitychange`,()=>{document.hidden||ag.getDelta()}),Wp.position.set(1.3,1.72,12.2),Gp.target.set(.15,1.5,-2.5),setTimeout(()=>{Wm={p0:Wp.position.clone(),t0:Gp.target.clone(),p1:Um.overview.pos.clone(),t1:Um.overview.target.clone(),t:0,dur:2.6}},380),Hp.setAnimationLoop(cg),requestAnimationFrame(()=>{requestAnimationFrame(()=>{let e=document.getElementById(`loader`);e.classList.add(`is-done`),setTimeout(()=>e.remove(),900)})});