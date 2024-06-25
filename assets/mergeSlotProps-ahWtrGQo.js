import{a3 as z,a4 as g,c as Z,R as N,a5 as A,_ as E,d as G}from"./index-BbBC1wuP.js";const j={disabled:!1};var q=function(a){return a.scrollTop},b="unmounted",m="exited",h="entering",y="entered",L="exiting",d=function(t){z(a,t);function a(r,n){var e;e=t.call(this,r,n)||this;var i=n,l=i&&!i.isMounting?r.enter:r.appear,u;return e.appearStatus=null,r.in?l?(u=m,e.appearStatus=h):u=y:r.unmountOnExit||r.mountOnEnter?u=b:u=m,e.state={status:u},e.nextCallback=null,e}a.getDerivedStateFromProps=function(n,e){var i=n.in;return i&&e.status===b?{status:m}:null};var o=a.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(n){var e=null;if(n!==this.props){var i=this.state.status;this.props.in?i!==h&&i!==y&&(e=h):(i===h||i===y)&&(e=L)}this.updateStatus(!1,e)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var n=this.props.timeout,e,i,l;return e=i=l=n,n!=null&&typeof n!="number"&&(e=n.exit,i=n.enter,l=n.appear!==void 0?n.appear:i),{exit:e,enter:i,appear:l}},o.updateStatus=function(n,e){if(n===void 0&&(n=!1),e!==null)if(this.cancelNextCallback(),e===h){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this);i&&q(i)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===m&&this.setState({status:b})},o.performEnter=function(n){var e=this,i=this.props.enter,l=this.context?this.context.isMounting:n,u=this.props.nodeRef?[l]:[g.findDOMNode(this),l],f=u[0],p=u[1],x=this.getTimeouts(),S=l?x.appear:x.enter;if(!n&&!i||j.disabled){this.safeSetState({status:y},function(){e.props.onEntered(f)});return}this.props.onEnter(f,p),this.safeSetState({status:h},function(){e.props.onEntering(f,p),e.onTransitionEnd(S,function(){e.safeSetState({status:y},function(){e.props.onEntered(f,p)})})})},o.performExit=function(){var n=this,e=this.props.exit,i=this.getTimeouts(),l=this.props.nodeRef?void 0:g.findDOMNode(this);if(!e||j.disabled){this.safeSetState({status:m},function(){n.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:L},function(){n.props.onExiting(l),n.onTransitionEnd(i.exit,function(){n.safeSetState({status:m},function(){n.props.onExited(l)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},o.setNextCallback=function(n){var e=this,i=!0;return this.nextCallback=function(l){i&&(i=!1,e.nextCallback=null,n(l))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},o.onTransitionEnd=function(n,e){this.setNextCallback(e);var i=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this),l=n==null&&!this.props.addEndListener;if(!i||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],f=u[0],p=u[1];this.props.addEndListener(f,p)}n!=null&&setTimeout(this.nextCallback,n)},o.render=function(){var n=this.state.status;if(n===b)return null;var e=this.props,i=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var l=Z(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return N.createElement(A.Provider,{value:null},typeof i=="function"?i(n,l):N.cloneElement(N.Children.only(i),l))},a}(N.Component);d.contextType=A;d.propTypes={};function v(){}d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v};d.UNMOUNTED=b;d.EXITED=m;d.ENTERING=h;d.ENTERED=y;d.EXITING=L;var s={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=Symbol.for("react.element"),F=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),R=Symbol.for("react.context"),V=Symbol.for("react.server_context"),D=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),B=Symbol.for("react.offscreen"),X;X=Symbol.for("react.module.reference");function c(t){if(typeof t=="object"&&t!==null){var a=t.$$typeof;switch(a){case I:switch(t=t.type,t){case C:case O:case T:case $:case M:return t;default:switch(t=t&&t.$$typeof,t){case V:case R:case D:case _:case P:case k:return t;default:return a}}case F:return a}}}s.ContextConsumer=R;s.ContextProvider=k;s.Element=I;s.ForwardRef=D;s.Fragment=C;s.Lazy=_;s.Memo=P;s.Portal=F;s.Profiler=O;s.StrictMode=T;s.Suspense=$;s.SuspenseList=M;s.isAsyncMode=function(){return!1};s.isConcurrentMode=function(){return!1};s.isContextConsumer=function(t){return c(t)===R};s.isContextProvider=function(t){return c(t)===k};s.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===I};s.isForwardRef=function(t){return c(t)===D};s.isFragment=function(t){return c(t)===C};s.isLazy=function(t){return c(t)===_};s.isMemo=function(t){return c(t)===P};s.isPortal=function(t){return c(t)===F};s.isProfiler=function(t){return c(t)===O};s.isStrictMode=function(t){return c(t)===T};s.isSuspense=function(t){return c(t)===$};s.isSuspenseList=function(t){return c(t)===M};s.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===C||t===O||t===T||t===$||t===M||t===B||typeof t=="object"&&t!==null&&(t.$$typeof===_||t.$$typeof===P||t.$$typeof===k||t.$$typeof===R||t.$$typeof===D||t.$$typeof===X||t.getModuleId!==void 0)};s.typeOf=c;const Y=t=>t.scrollTop;function tt(t,a){var o,r;const{timeout:n,easing:e,style:i={}}=t;return{duration:(o=i.transitionDuration)!=null?o:typeof n=="number"?n:n[a.mode]||0,easing:(r=i.transitionTimingFunction)!=null?r:typeof e=="object"?e[a.mode]:e,delay:i.transitionDelay}}function J(t){return typeof t=="string"}function et(t,a,o){return t===void 0||J(t)?a:E({},a,{ownerState:E({},a.ownerState,o)})}function K(t,a=[]){if(t===void 0)return{};const o={};return Object.keys(t).filter(r=>r.match(/^on[A-Z]/)&&typeof t[r]=="function"&&!a.includes(r)).forEach(r=>{o[r]=t[r]}),o}function nt(t,a,o){return typeof t=="function"?t(a,o):t}function W(t){if(t===void 0)return{};const a={};return Object.keys(t).filter(o=>!(o.match(/^on[A-Z]/)&&typeof t[o]=="function")).forEach(o=>{a[o]=t[o]}),a}function rt(t){const{getSlotProps:a,additionalProps:o,externalSlotProps:r,externalForwardedProps:n,className:e}=t;if(!a){const U=G(o==null?void 0:o.className,e,n==null?void 0:n.className,r==null?void 0:r.className),H=E({},o==null?void 0:o.style,n==null?void 0:n.style,r==null?void 0:r.style),w=E({},o,n,r);return U.length>0&&(w.className=U),Object.keys(H).length>0&&(w.style=H),{props:w,internalRef:void 0}}const i=K(E({},n,r)),l=W(r),u=W(n),f=a(i),p=G(f==null?void 0:f.className,o==null?void 0:o.className,e,n==null?void 0:n.className,r==null?void 0:r.className),x=E({},f==null?void 0:f.style,o==null?void 0:o.style,n==null?void 0:n.style,r==null?void 0:r.style),S=E({},f,o,u,l);return p.length>0&&(S.className=p),Object.keys(x).length>0&&(S.style=x),{props:S,internalRef:f.ref}}export{d as T,nt as a,et as b,K as e,tt as g,J as i,rt as m,Y as r};
