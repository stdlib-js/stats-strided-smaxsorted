"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=u(function(b,f){
var v=require('@stdlib/math-base-assert-is-nanf/dist'),o=require('@stdlib/math-base-assert-is-positive-zerof/dist');function p(e,r,t,n){var a,i;return e<=0?NaN:e===1||t===0?r[0]:(a=r[n],i=r[n+(e-1)*t],v(a)||v(i)?NaN:a===i?o(a)||o(i)?0:a:a>i?a:i)}f.exports=p
});var c=u(function(g,q){
var y=require('@stdlib/strided-base-stride2offset/dist'),l=s();function N(e,r,t){return l(e,r,t,y(e,t))}q.exports=N
});var m=u(function(h,x){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),P=s();O(d,"ndarray",P);x.exports=d
});var R=m();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
