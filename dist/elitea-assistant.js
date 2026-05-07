(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";.elitea-assistant-container{position:fixed;z-index:2147483647;font-family:Montserrat,sans-serif;font-size:.875rem;line-height:1.5;box-sizing:border-box}.elitea-assistant-container *,.elitea-assistant-container *:before,.elitea-assistant-container *:after{box-sizing:border-box}.elitea-assistant-container--bottom-right{bottom:.75rem;right:1.09375rem}.elitea-assistant-container--bottom-left{bottom:.75rem;left:1.09375rem}.elitea-assistant-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-button-bg);color:var(--elitea-assistant-button-icon);box-shadow:0 .25rem .75rem #00000026;transition:transform .2s ease,box-shadow .2s ease;padding:0}.elitea-assistant-button:hover{transform:scale(1.08);box-shadow:0 .375rem 1.25rem #0003}.elitea-assistant-button svg{width:1.75rem;height:1.75rem;fill:currentColor}.elitea-assistant-window{position:absolute;bottom:0rem;width:28.75rem;height:30rem;border-radius:1rem;overflow:hidden;display:flex;flex-direction:column;box-shadow:var(--elitea-assistant-window-shadow);background:var(--elitea-assistant-chat-bg);border:.0625rem solid var(--elitea-assistant-window-border);animation:elitea-assistant-slide-up .25s ease-out}.elitea-assistant-container--bottom-right .elitea-assistant-window{right:2.875rem}.elitea-assistant-container--bottom-left .elitea-assistant-window{left:2.875rem}@keyframes elitea-assistant-slide-up{0%{opacity:0;transform:translateY(.75rem)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483646;background:#00000080;display:flex;align-items:center;justify-content:center;animation:elitea-assistant-fade-in .2s ease-out}@keyframes elitea-assistant-fade-in{0%{opacity:0}to{opacity:1}}.elitea-assistant-window--expanded{position:static;width:45rem;height:42.375rem;animation:elitea-assistant-scale-in .2s ease-out}@keyframes elitea-assistant-scale-in{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.elitea-assistant-header{display:flex;align-items:center;justify-content:space-between;height:3.25rem;padding:0 1rem;background:var(--elitea-assistant-header-bg);color:var(--elitea-assistant-header-text);flex-shrink:0;border-bottom:.0625rem solid var(--elitea-assistant-window-border)}.elitea-assistant-header-left,.elitea-assistant-header-right{display:flex;align-items:center;gap:.5rem}.elitea-assistant-header-title{font-size:.9375rem;font-weight:600;margin:0;white-space:nowrap}.elitea-assistant-header-action{border:.0625rem solid transparent;color:var(--elitea-assistant-header-text);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;width:1.75rem;height:1.75rem;min-width:auto;box-shadow:none;background:var(--elitea-assistant-header-action-bg);transition:background .15s ease,color .15s ease,border-color .15s ease}.elitea-assistant-header-close-action{border:none;color:var(--elitea-assistant-header-close-icon);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;width:1.75rem;height:1.75rem;min-width:auto;background:var(--elitea-assistant-header-close-bg);transition:background .15s ease,color .15s ease}.elitea-assistant-header-close-action:hover{background:var(--elitea-assistant-header-close-hover-bg);color:var(--elitea-assistant-header-close-hover-color)}.elitea-assistant-header-close-action:active{background:var(--elitea-assistant-header-close-active-bg);color:var(--elitea-assistant-header-close-active-color)}.elitea-assistant-header-close-action:disabled{background:var(--elitea-assistant-header-close-disabled-bg);color:var(--elitea-assistant-header-close-disabled-color);cursor:not-allowed}.elitea-assistant-header-action:hover{background:var(--elitea-assistant-header-action-hover-bg)}.elitea-assistant-header-action:active{background:var(--elitea-assistant-header-action-active-bg);color:var(--elitea-assistant-header-action-active-color);border-color:var(--elitea-assistant-header-action-active-border)}.elitea-assistant-header-action svg{width:1rem;height:1rem;fill:currentColor}.elitea-assistant-header-close-action svg{width:1.3rem;height:1.3rem;fill:currentColor}.elitea-assistant-history-wrapper{position:relative}.elitea-assistant-header-action:disabled{background:var(--elitea-assistant-header-action-disabled-bg);color:var(--elitea-assistant-header-action-disabled-color);cursor:not-allowed}.elitea-assistant-header-action:disabled:hover{background:var(--elitea-assistant-header-action-disabled-bg)}.elitea-assistant-history-dropdown{position:absolute;top:calc(100% + .55rem);right:-2.65rem;width:19.125rem;max-height:21.875rem;overflow-y:auto;background:var(--elitea-assistant-chat-bg);border:.0625rem solid var(--elitea-assistant-history-dropdown-border);border-radius:.5rem;box-shadow:var(--elitea-assistant-history-dropdown-shadow);z-index:100;padding:.5rem 0}.elitea-assistant-history-item{display:block;width:100%;padding:.5rem .75rem;border:none;background:none;cursor:pointer;text-align:left;color:var(--elitea-assistant-header-text);font-size:.875rem;font-weight:400;line-height:1.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:background .15s ease}.elitea-assistant-history-item:hover{background:var(--elitea-assistant-history-dropdown-hover-bg)}.elitea-assistant-history-item:disabled{opacity:.45;cursor:default;background:none}.elitea-assistant-messages{flex:1;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:.625rem}.elitea-assistant-message-wrapper{display:flex;flex-direction:column;max-width:80%}.elitea-assistant-message-wrapper--user{align-self:flex-end}.elitea-assistant-message-wrapper--assistant{align-self:flex-start}.elitea-assistant-message-meta{display:flex;align-items:center;gap:.375rem;margin-bottom:.375rem}.elitea-assistant-message-meta--assistant{justify-content:flex-start}.elitea-assistant-message-meta--user{justify-content:flex-end}.elitea-assistant-message-avatar{width:1.5rem;height:1.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.elitea-assistant-message-avatar--assistant{background:var(--elitea-assistant-button-bg);color:var(--elitea-assistant-button-icon)}.elitea-assistant-message-avatar--user{background:var(--elitea-assistant-user-avatar-bg);color:var(--elitea-assistant-user-avatar-icon)}.elitea-assistant-message-avatar svg{width:1.25rem;height:1.25rem;fill:currentColor}.elitea-assistant-message-avatar img{width:100%;height:100%;border-radius:50%;object-fit:cover}.elitea-assistant-message-time{font-size:.75rem;opacity:.6;color:var(--elitea-assistant-bot-msg-text)}.elitea-assistant-message{padding:.625rem .875rem;border-radius:.75rem;word-wrap:break-word;font-weight:400;font-style:Regular;font-size:.875rem;line-height:1.5rem;letter-spacing:0%}.elitea-assistant-message--user{white-space:pre-wrap;background:var(--elitea-assistant-user-msg-bg);color:var(--elitea-assistant-user-msg-text);border-radius:1rem 0rem 1rem 1rem}.elitea-assistant-message--assistant{background:var(--elitea-assistant-bot-msg-bg);color:var(--elitea-assistant-bot-msg-text);border-radius:0 1rem 1rem;position:relative}.elitea-assistant-message--assistant>.elitea-assistant-tooltip-trigger{position:absolute;bottom:.375rem;right:.375rem;opacity:0;transition:opacity .15s ease}.elitea-assistant-message--assistant:hover>.elitea-assistant-tooltip-trigger{opacity:1}.elitea-assistant-message--error{border:1px solid #e53e3e;opacity:.9}@keyframes elitea-assistant-typing-bounce{0%,60%,to{transform:translateY(0);opacity:.25}30%{transform:translateY(-.25rem);opacity:.5}}.elitea-assistant-typing-indicator{display:inline-flex;align-items:center;gap:.1875rem;padding:.125rem 0}.elitea-assistant-typing-dot{width:.25rem;height:.25rem;border-radius:50%;background:var(--elitea-assistant-bot-msg-text);opacity:.25;animation:elitea-assistant-typing-bounce 1.2s ease-in-out infinite}.elitea-assistant-typing-dot:nth-child(2){animation-delay:.15s}.elitea-assistant-typing-dot:nth-child(3){animation-delay:.3s}@keyframes elitea-assistant-shimmer{0%{opacity:.4}50%{opacity:.7}to{opacity:.4}}.elitea-assistant-skeleton-row{display:flex;flex-direction:column;gap:.375rem;max-width:70%}.elitea-assistant-skeleton-row--left{align-self:flex-start}.elitea-assistant-skeleton-row--right{align-self:flex-end}.elitea-assistant-skeleton-meta{display:flex;align-items:center;gap:.375rem}.elitea-assistant-skeleton-row--right .elitea-assistant-skeleton-meta{justify-content:flex-end}.elitea-assistant-skeleton{background:var(--elitea-assistant-bot-msg-bg);border-radius:.5rem;animation:elitea-assistant-shimmer 1.4s ease-in-out infinite}.elitea-assistant-skeleton--avatar{width:1.5rem;height:1.5rem;border-radius:50%;flex-shrink:0}.elitea-assistant-skeleton--time{width:2.5rem;height:.75rem;border-radius:.25rem}.elitea-assistant-skeleton--bubble{width:10rem;height:2.5rem;border-radius:.75rem}.elitea-assistant-skeleton-row--right .elitea-assistant-skeleton--bubble{width:8rem}.elitea-assistant-empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--elitea-assistant-bot-msg-text);opacity:.5;font-size:.8125rem;text-align:center;padding:1.25rem}.elitea-assistant-markdown{overflow-wrap:break-word}.elitea-assistant-markdown>:first-child{margin-top:0}.elitea-assistant-markdown>:last-child{margin-bottom:0}.elitea-assistant-markdown p{margin:.5em 0}.elitea-assistant-markdown h1,.elitea-assistant-markdown h2,.elitea-assistant-markdown h3,.elitea-assistant-markdown h4,.elitea-assistant-markdown h5,.elitea-assistant-markdown h6{margin:.75em 0 .375em;font-weight:600;line-height:1.3}.elitea-assistant-markdown h1{font-size:1.25em}.elitea-assistant-markdown h2{font-size:1.125em}.elitea-assistant-markdown h3{font-size:1em}.elitea-assistant-markdown ul,.elitea-assistant-markdown ol{margin:.5em 0;padding-left:1.5em}.elitea-assistant-markdown li{margin:.25em 0}.elitea-assistant-markdown li>ul,.elitea-assistant-markdown li>ol{margin:.125em 0}.elitea-assistant-markdown code{background:#0000000f;padding:.125em .3em;border-radius:.25em;font-size:.85em;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,monospace}.elitea-assistant-markdown pre{margin:.5em 0;padding:.625em .75em;background:#0000000f;border-radius:.375em;overflow-x:auto}.elitea-assistant-markdown pre code{background:none;padding:0;font-size:.8125em;white-space:pre}.elitea-assistant-markdown blockquote{margin:.5em 0;padding:.25em .75em;border-left:3px solid rgba(0,0,0,.15);opacity:.85}.elitea-assistant-markdown blockquote>:first-child{margin-top:0}.elitea-assistant-markdown blockquote>:last-child{margin-bottom:0}.elitea-assistant-markdown hr{border:none;border-top:1px solid rgba(0,0,0,.1);margin:.75em 0}.elitea-assistant-markdown table{border-collapse:collapse;margin:.5em 0;font-size:.85em;width:100%}.elitea-assistant-markdown th,.elitea-assistant-markdown td{border:1px solid rgba(0,0,0,.1);padding:.375em .625em;text-align:left}.elitea-assistant-markdown th{font-weight:600;background:#00000008}.elitea-assistant-markdown a{color:var(--elitea-assistant-button-bg);text-decoration:underline}.elitea-assistant-markdown strong{font-weight:600}.elitea-assistant-markdown img{max-width:100%;border-radius:.375em}.elitea-assistant-input-area{display:flex;flex-direction:column;padding:.75rem;background:var(--elitea-assistant-input-bg);flex-shrink:0;border-top:.0625rem solid var(--elitea-assistant-window-border)}.elitea-assistant-input-row{display:flex;align-items:center;gap:.5rem;width:100%}.elitea-assistant-input{flex:1;padding:.5rem .25rem;border:none;border-radius:0;background:transparent;color:var(--elitea-assistant-input-text);font-size:.875rem;font-family:inherit;outline:none;resize:none}.elitea-assistant-input::placeholder{color:var(--elitea-assistant-input-placeholder);opacity:1}.elitea-assistant-attach-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-header-action-bg);color:var(--elitea-assistant-header-text);flex-shrink:0;transition:opacity .15s ease;padding:0;opacity:.8}.elitea-assistant-attach-button:hover{opacity:1}.elitea-assistant-attach-button svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-send-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-send-btn-bg);color:var(--elitea-assistant-send-btn-icon);flex-shrink:0;transition:background .15s ease;padding:0}.elitea-assistant-send-button:disabled{background:var(--elitea-assistant-send-btn-disabled-bg);cursor:default}.elitea-assistant-send-button svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-file-list{display:flex;align-items:center;gap:.5rem;padding-bottom:.5rem}.elitea-assistant-file-chip{display:flex;align-items:center;gap:.75rem;max-width:11.25rem;height:2.25rem;padding:.375rem .75rem;border-radius:.5rem;background:var(--elitea-assistant-header-action-bg);flex-shrink:0}.elitea-assistant-file-chip-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--elitea-assistant-header-close-icon)}.elitea-assistant-file-chip-icon svg{width:.75rem;height:.875rem}.elitea-assistant-file-chip-name{flex:1;min-width:0;font-size:.75rem;color:var(--elitea-assistant-input-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.elitea-assistant-file-chip-remove{display:flex;align-items:center;justify-content:center;width:1rem;height:1rem;padding:0;border:none;background:none;cursor:pointer;color:var(--elitea-assistant-header-close-icon);flex-shrink:0;opacity:.7;transition:opacity .15s ease}.elitea-assistant-file-chip-remove:hover{opacity:1}.elitea-assistant-file-chip-remove svg{width:2rem;height:2rem;fill:currentColor}.elitea-assistant-file-chip--count{font-size:.75rem;font-weight:400;color:var(--elitea-assistant-input-text);max-width:none;gap:0}.elitea-assistant-tooltip-trigger{display:inline-flex}.elitea-assistant-tooltip{position:fixed;z-index:2147483647;padding:.25rem .5rem;border-radius:.25rem;background:#e9ebf0;color:#0e131d;font-size:.6875rem;line-height:1.3;font-weight:500;font-family:Montserrat,sans-serif;white-space:nowrap;max-width:20rem;overflow:hidden;text-overflow:ellipsis;pointer-events:none;box-shadow:0 0 0 .0625rem #00000014,0 .125rem .5rem #0000001f;transition:opacity .15s ease}@keyframes elitea-tooltip-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-popup{position:absolute;bottom:.25rem;display:flex;align-items:center;gap:1rem;padding:.75rem .75rem .75rem 1.25rem;border-radius:1.5rem 1.5rem 1.5rem 0;background:var(--elitea-assistant-popup-bg);color:var(--elitea-assistant-popup-text);font-size:.875rem;font-weight:500;line-height:1.5rem;white-space:nowrap;box-shadow:0 .25rem 1rem #0003;animation:elitea-assistant-popup-in .3s ease-out}.elitea-assistant-popup:before{content:"";position:absolute;top:-.0625rem;right:-.0625rem;bottom:-.0625rem;left:-.0625rem;border-radius:inherit;padding:.0625rem;background:var(--elitea-assistant-popup-border);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none}.elitea-assistant-container--bottom-right .elitea-assistant-popup{right:2.5rem;flex-direction:row-reverse;padding:.75rem 1.25rem .75rem .75rem;border-radius:1.5rem 1.5rem 0}.elitea-assistant-container--bottom-left .elitea-assistant-popup{left:2.5rem}.elitea-assistant-popup-text{-webkit-user-select:none;user-select:none}.elitea-assistant-popup-close{display:flex;align-items:center;justify-content:center;width:1.75rem;height:1.75rem;flex-shrink:0;border:none;border-radius:50%;background:var(--elitea-assistant-popup-close-bg);color:var(--elitea-assistant-popup-text);cursor:pointer;padding:0;transition:background .15s ease}.elitea-assistant-popup-close:hover{background:var(--elitea-assistant-popup-close-hover-bg)}.elitea-assistant-popup-close svg{width:1rem;height:1rem;fill:currentColor}@keyframes elitea-assistant-popup-in{0%{opacity:0;transform:translateY(.5rem)}to{opacity:1;transform:translateY(0)}}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { jsx as v, jsxs as Q, Fragment as Sr } from "react/jsx-runtime";
import { memo as J, useState as ne, useCallback as Z, useRef as we, useLayoutEffect as ol, useEffect as Ie, createContext as Er, useContext as vr, useMemo as ft, forwardRef as al, useImperativeHandle as sl } from "react";
import { createPortal as ul } from "react-dom";
import { io as cl } from "socket.io-client";
const Ke = (e, n = !1) => ({
  ...e.token && { Authorization: `Bearer ${e.token}` },
  ...n && { "Content-Type": "application/json" }
}), Xe = (e) => e.withCredentials ? "include" : void 0, Ye = async (e) => {
  if (!e.ok) throw new Error(`${e.status} ${e.statusText}`);
  return e;
}, hl = (e, n = {}) => ({
  getConfig: () => fetch(`${e}/config/`, {
    headers: Ke(n),
    credentials: Xe(n)
  }).then(Ye).then((t) => t.json()),
  getConversations: () => fetch(`${e}/conversations/`, {
    headers: Ke(n),
    credentials: Xe(n)
  }).then(Ye).then((t) => t.json()),
  getConversation: (t) => fetch(`${e}/conversation/${t}`, {
    headers: Ke(n),
    credentials: Xe(n)
  }).then(Ye).then((r) => r.json()),
  createConversation: () => fetch(`${e}/conversations/`, {
    method: "POST",
    headers: Ke(n, !0),
    credentials: Xe(n),
    body: JSON.stringify({})
  }).then(Ye).then((t) => t.json()),
  deleteConversation: (t) => fetch(`${e}/conversation/${t}`, {
    method: "DELETE",
    headers: Ke(n),
    credentials: Xe(n)
  }).then(Ye).then(() => {
  })
}), en = J(() => /* @__PURE__ */ v(
  "svg",
  {
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v("path", { d: "M14.2499 4.375C14.8319 4.375 15.3037 4.84137 15.3037 5.41666C15.3037 5.87017 15.0104 6.25575 14.6012 6.39877V8.26399H14.9524C15.5109 8.26399 15.9675 8.69328 16.0037 9.23621H18.2544C20.5477 9.23621 22.4397 10.9331 22.7159 13.1259C23.2816 13.1443 23.7344 13.6031 23.7344 14.1667V15.6945C23.7343 16.2697 23.2625 16.7362 22.6805 16.7362C22.6637 16.7362 22.6469 16.7356 22.6302 16.7348C22.2147 18.5198 20.7287 19.6036 18.2544 20.0695C15.3037 20.625 9.26175 21.875 9.26175 21.875L10.1048 20.0695C8.0024 20.0695 6.23719 18.643 5.74513 16.7159C5.67822 16.7291 5.60903 16.7362 5.53821 16.7362C4.95623 16.7362 4.48444 16.2697 4.48438 15.6945V14.1667C4.48438 13.5914 4.95619 13.1251 5.53821 13.1251C5.57345 13.1251 5.60828 13.1267 5.64263 13.1301C5.91693 10.9353 7.81012 9.23621 10.1048 9.23621H12.3556C12.3917 8.69328 12.8484 8.26399 13.4068 8.26399H13.7581V6.33788C13.4239 6.1632 13.1961 5.81633 13.1961 5.41666C13.1961 4.84137 13.6679 4.375 14.2499 4.375ZM11.2289 11.3195C9.44405 11.3195 7.99715 12.7497 7.99715 14.5139V14.6528C7.99721 16.417 9.44409 17.8473 11.2289 17.8473H17.1304C18.9152 17.8473 20.362 16.417 20.3621 14.6528V14.5139C20.3621 12.7497 18.9152 11.3195 17.1304 11.3195H11.2289ZM11.4397 13.5416C12.0217 13.5416 12.4935 14.008 12.4935 14.5833C12.4935 15.1585 12.0217 15.6249 11.4397 15.6249C10.8577 15.6249 10.3858 15.1585 10.3858 14.5833C10.3858 14.008 10.8577 13.5416 11.4397 13.5416ZM16.9196 13.5416C17.5016 13.5416 17.9734 14.008 17.9734 14.5833C17.9734 15.1585 17.5016 15.6249 16.9196 15.6249C16.3376 15.6249 15.8658 15.1585 15.8658 14.5833C15.8658 14.008 16.3376 13.5416 16.9196 13.5416Z" })
  }
));
en.displayName = "AssistantIcon";
const Ar = J(() => /* @__PURE__ */ v(
  "svg",
  {
    viewBox: "0 0 12 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v("path", { d: "M11.5876 6.6172C11.6361 6.66719 11.6746 6.72656 11.7008 6.7919C11.7271 6.85725 11.7406 6.9273 11.7406 6.99804C11.7406 7.06878 11.7271 7.13883 11.7008 7.20417C11.6746 7.26952 11.6361 7.32889 11.5876 7.37888L6.23589 12.8964C5.55078 13.6031 4.6216 14.0001 3.65277 14C2.68393 13.9999 1.7548 13.6028 1.06978 12.8961C0.384749 12.1893 -6.11425e-05 11.2307 7.28683e-09 10.2313C6.11571e-05 9.2318 0.384988 8.2733 1.0701 7.56661L7.5443 0.789483C8.03342 0.284364 8.69701 0.000378941 9.3891 3.78958e-07C10.0812 -0.000378183 10.7451 0.282881 11.2347 0.787465C11.7243 1.29205 11.9996 1.97662 12 2.69059C12.0004 3.40456 11.7258 4.08943 11.2367 4.59455L4.76116 11.3717C4.46709 11.6751 4.06823 11.8455 3.65235 11.8455C3.23646 11.8455 2.8376 11.6751 2.54353 11.3717C2.24945 11.0683 2.08424 10.6568 2.08424 10.2278C2.08424 9.79877 2.24945 9.38731 2.54353 9.08393L7.97674 3.39012C8.02433 3.33774 8.0816 3.29571 8.14518 3.26651C8.20875 3.23731 8.27735 3.22152 8.34693 3.22008C8.4165 3.21863 8.48566 3.23156 8.55032 3.2581C8.61498 3.28464 8.67385 3.32425 8.72345 3.37461C8.77305 3.42497 8.81238 3.48506 8.83913 3.55133C8.86588 3.61761 8.87951 3.68874 8.87922 3.76053C8.87893 3.83232 8.86472 3.90333 8.83742 3.96937C8.81013 4.03541 8.77031 4.09515 8.7203 4.14508L3.28643 9.84494C3.23778 9.89474 3.19911 9.95393 3.17264 10.0191C3.14616 10.0843 3.13239 10.1543 3.13212 10.225C3.13185 10.2957 3.14507 10.3658 3.17105 10.4312C3.19702 10.4966 3.23523 10.5561 3.2835 10.6063C3.33177 10.6565 3.38914 10.6964 3.45235 10.7237C3.51556 10.751 3.58337 10.7652 3.6519 10.7655C3.72043 10.7658 3.78835 10.7521 3.85176 10.7253C3.91518 10.6985 3.97287 10.6591 4.02152 10.6093L10.4964 3.83556C10.7904 3.53281 10.9559 3.12194 10.9563 2.69335C10.9568 2.26475 10.7921 1.85354 10.4987 1.55016C10.2052 1.24679 9.80691 1.0761 9.39145 1.07566C8.97599 1.07522 8.57737 1.24506 8.2833 1.54781L1.8104 8.32224C1.56791 8.572 1.37549 8.86858 1.24411 9.19506C1.11273 9.52153 1.04496 9.8715 1.04469 10.225C1.04442 10.5785 1.11164 10.9286 1.24252 11.2553C1.37339 11.5819 1.56536 11.8788 1.80747 12.129C2.04957 12.3792 2.33706 12.5777 2.65353 12.7132C2.97 12.8487 3.30924 12.9186 3.6519 12.9189C3.99456 12.9192 4.33391 12.8498 4.65059 12.7148C4.96727 12.5798 5.25506 12.3818 5.49755 12.132L10.8499 6.6145C10.9481 6.51399 11.0809 6.45781 11.2193 6.45831C11.3576 6.45881 11.4901 6.51596 11.5876 6.6172Z" })
  }
));
Ar.displayName = "AttachmentIcon";
const fl = J(() => /* @__PURE__ */ v(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v("path", { d: "M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.2L4 17.2V4H20V16Z" })
  }
));
fl.displayName = "ChatIcon";
const Ir = J(() => /* @__PURE__ */ v(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v(
      "path",
      {
        d: "M11.6667 3.5L5.25 9.91667L2.33333 7",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
));
Ir.displayName = "CheckIcon";
const bt = J(() => /* @__PURE__ */ v(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v("path", { d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" })
  }
));
bt.displayName = "CloseIcon";
const Tr = J(() => /* @__PURE__ */ v(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v(
      "path",
      {
        d: "M4.66667 4.66667V2.33333C4.66667 1.97971 4.80714 1.64057 5.05719 1.39052C5.30724 1.14048 5.64638 1 6 1H11.6667C12.0203 1 12.3594 1.14048 12.6095 1.39052C12.8595 1.64057 13 1.97971 13 2.33333V8C13 8.35362 12.8595 8.69276 12.6095 8.94281C12.3594 9.19286 12.0203 9.33333 11.6667 9.33333H9.33333M2.33333 4.66667H8C8.73638 4.66667 9.33333 5.26362 9.33333 6V11.6667C9.33333 12.403 8.73638 13 8 13H2.33333C1.59695 13 1 12.403 1 11.6667V6C1 5.26362 1.59695 4.66667 2.33333 4.66667Z",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
));
Tr.displayName = "CopyIcon";
const Pr = J(() => /* @__PURE__ */ v(
  "svg",
  {
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v("path", { d: "M12 0.545455V3.81818C12 3.96285 11.9425 4.10158 11.8402 4.20388C11.7379 4.30617 11.5992 4.36364 11.4545 4.36364C11.3099 4.36364 11.1711 4.30617 11.0689 4.20388C10.9666 4.10158 10.9091 3.96285 10.9091 3.81818V1.86205L7.47682 5.295C7.37447 5.39735 7.23565 5.45485 7.09091 5.45485C6.94617 5.45485 6.80735 5.39735 6.705 5.295C6.60265 5.19265 6.54515 5.05383 6.54515 4.90909C6.54515 4.76435 6.60265 4.62553 6.705 4.52318L10.138 1.09091H8.18182C8.03715 1.09091 7.89842 1.03344 7.79612 0.931149C7.69383 0.828856 7.63636 0.690118 7.63636 0.545455C7.63636 0.400791 7.69383 0.262053 7.79612 0.15976C7.89842 0.0574675 8.03715 0 8.18182 0H11.4545C11.5992 0 11.7379 0.0574675 11.8402 0.15976C11.9425 0.262053 12 0.400791 12 0.545455ZM4.52318 6.705L1.09091 10.138V8.18182C1.09091 8.03715 1.03344 7.89842 0.931149 7.79612C0.828856 7.69383 0.690118 7.63636 0.545455 7.63636C0.400791 7.63636 0.262053 7.69383 0.15976 7.79612C0.0574675 7.89842 0 8.03715 0 8.18182V11.4545C0 11.5992 0.0574675 11.7379 0.15976 11.8402C0.262053 11.9425 0.400791 12 0.545455 12H3.81818C3.96285 12 4.10158 11.9425 4.20388 11.8402C4.30617 11.7379 4.36364 11.5992 4.36364 11.4545C4.36364 11.3099 4.30617 11.1711 4.20388 11.0689C4.10158 10.9666 3.96285 10.9091 3.81818 10.9091H1.86205L5.295 7.47682C5.39735 7.37447 5.45485 7.23565 5.45485 7.09091C5.45485 6.94617 5.39735 6.80735 5.295 6.705C5.19265 6.60265 5.05383 6.54515 4.90909 6.54515C4.76435 6.54515 4.62553 6.60265 4.52318 6.705Z" })
  }
));
Pr.displayName = "ExpandIcon";
const Lr = J(() => /* @__PURE__ */ v(
  "svg",
  {
    viewBox: "0 0 12 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.04082 0.965517C1.02458 0.965517 1.00901 0.971875 0.997524 0.983192C0.986042 0.994509 0.979592 1.00986 0.979592 1.02586V12.9741C0.979592 12.9901 0.986042 13.0055 0.997524 13.0168C1.00901 13.0281 1.02458 13.0345 1.04082 13.0345H10.9592C10.9754 13.0345 10.991 13.0281 11.0025 13.0168C11.014 13.0055 11.0204 12.9901 11.0204 12.9741V4.76724H7.65306C7.38255 4.76724 7.16327 4.5511 7.16327 4.28448V0.965517H1.04082ZM8.14286 3.80172H10.3277L8.14286 1.64824V3.80172ZM12 12.9741V4.28448L7.65306 0H1.04082C0.764774 0 0.500039 0.108082 0.304848 0.300468C0.109657 0.492854 0 0.753786 0 1.02586V12.9741C0 13.2462 0.109657 13.5071 0.304848 13.6995C0.50004 13.8919 0.764776 14 1.04082 14H10.9592C11.2352 14 11.5 13.8919 11.6952 13.6995C11.8903 13.5071 12 13.2462 12 12.9741ZM4.0316 3.90417C4.45607 3.90417 4.86296 4.07081 5.16279 4.36711L5.16469 4.369L8.91136 8.12291C9.31878 8.53213 9.54623 9.084 9.54386 9.65764C9.5415 10.2313 9.30986 10.781 8.89908 11.1869C8.48826 11.5929 7.93154 11.8222 7.35012 11.8245C6.76871 11.8268 6.21011 11.602 5.79595 11.1994L5.79389 11.1974L2.69801 8.1425C2.54508 7.99159 2.54522 7.74706 2.69833 7.59632C2.85144 7.44559 3.09954 7.44572 3.25247 7.59663L6.34724 10.6504C6.61408 10.9094 6.97334 11.0536 7.34692 11.0521C7.72095 11.0506 8.07943 10.9031 8.34422 10.6414C8.60904 10.3797 8.75867 10.025 8.7602 9.65451C8.76172 9.28404 8.61506 8.92818 8.35247 8.66436L4.60708 4.91173C4.45413 4.76104 4.24717 4.67658 4.0316 4.67658C3.81563 4.67658 3.60829 4.76135 3.45527 4.91258C3.30221 5.06383 3.21603 5.26919 3.21603 5.48353C3.21603 5.69787 3.30221 5.90323 3.45527 6.05448L3.45716 6.05636L7.20016 9.80623C7.23988 9.84327 7.29236 9.86361 7.34664 9.86323C7.40195 9.86284 7.45509 9.84097 7.49452 9.80202C7.53398 9.76305 7.55652 9.71008 7.55694 9.65452C7.55736 9.59928 7.53589 9.54628 7.49744 9.50678L4.35554 6.35052C4.20398 6.19827 4.20634 5.95375 4.36081 5.80436C4.51528 5.65498 4.76337 5.65731 4.91493 5.80956L8.05796 8.96696L8.05977 8.96879C8.2418 9.15408 8.34256 9.4025 8.34059 9.66032C8.33863 9.91814 8.23409 10.165 8.04926 10.3476C7.86439 10.5302 7.61403 10.6338 7.35221 10.6356C7.0904 10.6375 6.83856 10.5374 6.65109 10.3574L6.64519 10.3516L2.8994 6.59895C2.60023 6.30278 2.43236 5.90161 2.43236 5.48353C2.43236 5.06498 2.6006 4.66337 2.90041 4.36711C3.20024 4.07081 3.60713 3.90417 4.0316 3.90417Z",
        fill: "currentColor"
      }
    )
  }
));
Lr.displayName = "FileIcon";
const Dr = J(() => /* @__PURE__ */ v(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v("path", { d: "M7.84245 3.50002V6.6697L10.3716 8.2498C10.499 8.32948 10.5908 8.45859 10.6268 8.60874C10.6628 8.75888 10.64 8.91776 10.5635 9.05042C10.487 9.18309 10.363 9.27867 10.2188 9.31614C10.0746 9.3536 9.92206 9.32989 9.79466 9.25022L6.99378 7.50022C6.91089 7.44836 6.8423 7.37503 6.79469 7.28737C6.74708 7.19972 6.72207 7.10072 6.7221 7.00001V3.50002C6.7221 3.34531 6.78112 3.19693 6.88617 3.08754C6.99122 2.97814 7.13371 2.91668 7.28227 2.91668C7.43084 2.91668 7.57333 2.97814 7.67838 3.08754C7.78343 3.19693 7.84245 3.34531 7.84245 3.50002ZM7.28227 2.15915e-05C6.39859 -0.00227058 5.52325 0.177963 4.70691 0.530291C3.89056 0.882618 3.14943 1.40004 2.52639 2.05262C2.01733 2.58929 1.56499 3.10554 1.12035 3.64585V2.33335C1.12035 2.17864 1.06133 2.03027 0.956278 1.92087C0.851225 1.81148 0.708743 1.75002 0.560175 1.75002C0.411607 1.75002 0.269125 1.81148 0.164071 1.92087C0.0590182 2.03027 0 2.17864 0 2.33335V5.25001C0 5.40472 0.0590182 5.5531 0.164071 5.66249C0.269125 5.77189 0.411607 5.83335 0.560175 5.83335H3.36105C3.50962 5.83335 3.6521 5.77189 3.75715 5.66249C3.86221 5.5531 3.92122 5.40472 3.92122 5.25001C3.92122 5.0953 3.86221 4.94693 3.75715 4.83754C3.6521 4.72814 3.50962 4.66668 3.36105 4.66668H1.75055C2.2512 4.05272 2.74976 3.4745 3.31834 2.87512C4.09688 2.0644 5.08758 1.51057 6.16666 1.28283C7.24574 1.05509 8.36535 1.16353 9.38558 1.59462C10.4058 2.02571 11.2814 2.76032 11.903 3.70667C12.5246 4.65301 12.8646 5.76912 12.8805 6.91554C12.8965 8.06195 12.5876 9.18784 11.9926 10.1525C11.3975 11.1172 10.5427 11.8779 9.53484 12.3395C8.52702 12.8011 7.41089 12.9433 6.32594 12.7481C5.24098 12.553 4.23531 12.0292 3.43457 11.2423C3.38106 11.1896 3.3181 11.1485 3.2493 11.1211C3.18051 11.0938 3.10721 11.0808 3.03361 11.083C2.96 11.0852 2.88753 11.1024 2.82033 11.1338C2.75312 11.1651 2.6925 11.2099 2.64193 11.2656C2.59135 11.3214 2.55181 11.3869 2.52557 11.4586C2.49932 11.5302 2.48689 11.6065 2.48897 11.6832C2.49105 11.7598 2.5076 11.8353 2.53769 11.9053C2.56778 11.9753 2.61081 12.0384 2.66433 12.091C3.4622 12.8751 4.43221 13.4439 5.48972 13.7478C6.54722 14.0517 7.66008 14.0814 8.73117 13.8345C9.80226 13.5875 10.799 13.0713 11.6345 12.3309C12.4699 11.5905 13.1187 10.6485 13.5241 9.58695C13.9295 8.52544 14.0793 7.37674 13.9604 6.24108C13.8414 5.10543 13.4574 4.01735 12.8418 3.0718C12.2261 2.12625 11.3976 1.35197 10.4286 0.816529C9.4595 0.281089 8.37931 0.000765142 7.28227 2.15915e-05Z" })
  }
));
Dr.displayName = "HistoryIcon";
const Fr = J(() => /* @__PURE__ */ v(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v("path", { d: "M14 7C14 7.15471 13.9385 7.30308 13.8291 7.41248C13.7197 7.52188 13.5714 7.58333 13.4167 7.58333H7.58333V13.4167C7.58333 13.5714 7.52188 13.7197 7.41248 13.8291C7.30308 13.9385 7.15471 14 7 14C6.84529 14 6.69692 13.9385 6.58752 13.8291C6.47812 13.7197 6.41667 13.5714 6.41667 13.4167V7.58333H0.583333C0.428624 7.58333 0.280251 7.52188 0.170854 7.41248C0.0614583 7.30308 0 7.15471 0 7C0 6.84529 0.0614583 6.69692 0.170854 6.58752C0.280251 6.47812 0.428624 6.41667 0.583333 6.41667H6.41667V0.583333C6.41667 0.428624 6.47812 0.280251 6.58752 0.170854C6.69692 0.0614583 6.84529 0 7 0C7.15471 0 7.30308 0.0614583 7.41248 0.170854C7.52188 0.280251 7.58333 0.428624 7.58333 0.583333V6.41667H13.4167C13.5714 6.41667 13.7197 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7Z" })
  }
));
Fr.displayName = "PlusIcon";
const _r = J(() => /* @__PURE__ */ v(
  "svg",
  {
    viewBox: "0 0 13 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v("path", { d: "M13 6.99208C13.0005 7.17027 12.9514 7.34536 12.8579 7.49921C12.7644 7.65307 12.6299 7.78012 12.4682 7.86721L1.55229 13.8687C1.39545 13.9542 1.21835 13.9995 1.03805 14C0.871785 13.9997 0.708022 13.961 0.56049 13.8873C0.412958 13.8136 0.285957 13.7069 0.190131 13.5763C0.0943049 13.4456 0.0324474 13.2948 0.00974343 13.1364C-0.0129605 12.9781 0.00415071 12.8168 0.0596426 12.6661L1.83768 7.66843C1.8552 7.61898 1.88839 7.57606 1.93258 7.54567C1.97677 7.51529 2.02975 7.49898 2.08407 7.49903H6.75898C6.83028 7.49918 6.90085 7.48523 6.9663 7.45806C7.03176 7.43088 7.0907 7.39105 7.13948 7.34105C7.18825 7.29104 7.22581 7.23193 7.24982 7.16738C7.27384 7.10283 7.28379 7.03423 7.27907 6.96582C7.26727 6.83723 7.20539 6.71767 7.10582 6.63108C7.00624 6.5445 6.87632 6.49728 6.74208 6.49888H2.08862C2.03438 6.49897 1.98146 6.48275 1.93728 6.45249C1.89309 6.42222 1.85986 6.37943 1.84223 6.3301L0.0583424 1.32936C-0.0111263 1.13773 -0.018329 0.930327 0.0376911 0.734676C0.0937111 0.539025 0.210303 0.364388 0.371984 0.233956C0.533666 0.103523 0.732787 0.0234668 0.942905 0.00441721C1.15302 -0.0146324 1.3642 0.0282263 1.54838 0.127302L12.4702 6.12132C12.6308 6.20829 12.7645 6.33476 12.8576 6.48776C12.9507 6.64076 12.9999 6.81481 13 6.99208Z" })
  }
));
_r.displayName = "SendIcon";
const Nr = J(() => /* @__PURE__ */ v(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v("path", { d: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" })
  }
));
Nr.displayName = "UserIcon";
const zr = J((e) => {
  const { onClick: n } = e;
  return /* @__PURE__ */ v(
    "button",
    {
      className: "elitea-assistant-button",
      onClick: n,
      "aria-label": "Support Assistant",
      type: "button",
      children: /* @__PURE__ */ v(en, {})
    }
  );
});
zr.displayName = "ChatButton";
const Mr = J((e) => {
  const { text: n } = e, [t, r] = ne(!1), i = Z(() => {
    navigator.clipboard.writeText(n), r(!0), setTimeout(() => r(!1), 2e3);
  }, [n]);
  return /* @__PURE__ */ v(He, { content: "Copy to clipboard", children: /* @__PURE__ */ v(
    "button",
    {
      className: "elitea-assistant-header-action",
      onClick: i,
      "aria-label": "Copy to clipboard",
      type: "button",
      children: t ? /* @__PURE__ */ v(Ir, {}) : /* @__PURE__ */ v(Tr, {})
    }
  ) });
});
Mr.displayName = "CopyButton";
const He = J((e) => {
  const { content: n, children: t, placement: r = "top" } = e, i = we(null), o = we(null), [l, a] = ne(!1), [s, u] = ne(!1), [h, c] = ne({ top: 0, left: 0 }), p = Z(() => {
    const f = i.current, m = o.current;
    if (!f || !m) return;
    const y = f.getBoundingClientRect(), w = m.getBoundingClientRect();
    let k;
    r === "top" ? k = y.top - w.height - 8 : k = y.bottom + 8;
    let A = y.left + y.width / 2 - w.width / 2;
    const S = 8;
    A < S && (A = S), A + w.width > window.innerWidth - S && (A = window.innerWidth - S - w.width), k < S && (k = y.bottom + 8), c({ top: k, left: A }), u(!0);
  }, [r]);
  return ol(() => {
    l && o.current && p(), l || u(!1);
  }, [l, p]), /* @__PURE__ */ Q(Sr, { children: [
    /* @__PURE__ */ v(
      "div",
      {
        ref: i,
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        className: "elitea-assistant-tooltip-trigger",
        children: t
      }
    ),
    l && ul(
      /* @__PURE__ */ v(
        "div",
        {
          ref: o,
          className: "elitea-assistant-tooltip",
          style: {
            top: h.top,
            left: h.left,
            opacity: s ? 1 : 0
          },
          role: "tooltip",
          children: n
        }
      ),
      document.body
    )
  ] });
});
He.displayName = "Tooltip";
const Rr = J((e) => {
  const {
    title: n,
    expanded: t,
    history: r,
    currentConversationId: i,
    disabled: o,
    onClose: l,
    onExpand: a,
    onNewChat: s,
    onSelectConversation: u
  } = e, h = we(null), [c, p] = ne(!1);
  Ie(() => {
    if (!c) return;
    const y = (w) => {
      h.current && !h.current.contains(w.target) && p(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [c]);
  const f = Z(() => {
    r.length > 0 && p((y) => !y);
  }, [r.length]), m = Z(
    (y) => {
      u(y), p(!1);
    },
    [u]
  );
  return /* @__PURE__ */ Q("div", { className: "elitea-assistant-header", children: [
    /* @__PURE__ */ Q("div", { className: "elitea-assistant-header-left", children: [
      /* @__PURE__ */ v(
        "button",
        {
          className: "elitea-assistant-header-close-action",
          onClick: l,
          "aria-label": "Close chat",
          type: "button",
          children: /* @__PURE__ */ v(bt, {})
        }
      ),
      /* @__PURE__ */ v("h2", { className: "elitea-assistant-header-title", children: n })
    ] }),
    /* @__PURE__ */ Q("div", { className: "elitea-assistant-header-right", children: [
      /* @__PURE__ */ v(He, { content: "New conversation", children: /* @__PURE__ */ v(
        "button",
        {
          className: "elitea-assistant-header-action",
          onClick: s,
          "aria-label": "New chat",
          type: "button",
          disabled: o,
          children: /* @__PURE__ */ v(Fr, {})
        }
      ) }),
      /* @__PURE__ */ v(He, { content: "Conversations history", children: /* @__PURE__ */ Q(
        "div",
        {
          ref: h,
          className: "elitea-assistant-history-wrapper",
          children: [
            /* @__PURE__ */ v(
              "button",
              {
                className: "elitea-assistant-header-action",
                onClick: f,
                "aria-label": "Chat history",
                type: "button",
                disabled: o || r.length === 0,
                children: /* @__PURE__ */ v(Dr, {})
              }
            ),
            c && r.length > 0 && /* @__PURE__ */ v("div", { className: "elitea-assistant-history-dropdown", children: r.map((y) => /* @__PURE__ */ v(
              "button",
              {
                className: "elitea-assistant-history-item",
                onClick: () => m(y.uuid),
                type: "button",
                disabled: y.uuid === i,
                children: y.name
              },
              y.uuid
            )) })
          ]
        }
      ) }),
      /* @__PURE__ */ v(He, { content: t ? "Collapse" : "Expand", children: /* @__PURE__ */ v(
        "button",
        {
          className: "elitea-assistant-header-action",
          onClick: a,
          "aria-label": "Expand chat",
          type: "button",
          children: /* @__PURE__ */ v(Pr, {})
        }
      ) })
    ] })
  ] });
});
Rr.displayName = "ChatHeader";
function pl(e, n) {
  const t = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")
  ).trim();
}
const dl = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ml = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, gl = {};
function An(e, n) {
  return (gl.jsx ? ml : dl).test(e);
}
const yl = /[ \t\n\f\r]/g;
function kl(e) {
  return typeof e == "object" ? e.type === "text" ? In(e.value) : !1 : In(e);
}
function In(e) {
  return e.replace(yl, "") === "";
}
class it {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(n, t, r) {
    this.normal = t, this.property = n, r && (this.space = r);
  }
}
it.prototype.normal = {};
it.prototype.property = {};
it.prototype.space = void 0;
function Br(e, n) {
  const t = {}, r = {};
  for (const i of e)
    Object.assign(t, i.property), Object.assign(r, i.normal);
  return new it(t, r, n);
}
function Vt(e) {
  return e.toLowerCase();
}
class ce {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(n, t) {
    this.attribute = t, this.property = n;
  }
}
ce.prototype.attribute = "";
ce.prototype.booleanish = !1;
ce.prototype.boolean = !1;
ce.prototype.commaOrSpaceSeparated = !1;
ce.prototype.commaSeparated = !1;
ce.prototype.defined = !1;
ce.prototype.mustUseProperty = !1;
ce.prototype.number = !1;
ce.prototype.overloadedBoolean = !1;
ce.prototype.property = "";
ce.prototype.spaceSeparated = !1;
ce.prototype.space = void 0;
let xl = 0;
const M = Ne(), te = Ne(), Ut = Ne(), E = Ne(), Y = Ne(), je = Ne(), fe = Ne();
function Ne() {
  return 2 ** ++xl;
}
const $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: M,
  booleanish: te,
  commaOrSpaceSeparated: fe,
  commaSeparated: je,
  number: E,
  overloadedBoolean: Ut,
  spaceSeparated: Y
}, Symbol.toStringTag, { value: "Module" })), It = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys($t)
);
class tn extends ce {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(n, t, r, i) {
    let o = -1;
    if (super(n, t), Tn(this, "space", i), typeof r == "number")
      for (; ++o < It.length; ) {
        const l = It[o];
        Tn(this, It[o], (r & $t[l]) === $t[l]);
      }
  }
}
tn.prototype.defined = !0;
function Tn(e, n, t) {
  t && (e[n] = t);
}
function Ue(e) {
  const n = {}, t = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new tn(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), n[r] = o, t[Vt(r)] = r, t[Vt(o.attribute)] = r;
  }
  return new it(n, t, e.space);
}
const Or = Ue({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: te,
    ariaAutoComplete: null,
    ariaBusy: te,
    ariaChecked: te,
    ariaColCount: E,
    ariaColIndex: E,
    ariaColSpan: E,
    ariaControls: Y,
    ariaCurrent: null,
    ariaDescribedBy: Y,
    ariaDetails: null,
    ariaDisabled: te,
    ariaDropEffect: Y,
    ariaErrorMessage: null,
    ariaExpanded: te,
    ariaFlowTo: Y,
    ariaGrabbed: te,
    ariaHasPopup: null,
    ariaHidden: te,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Y,
    ariaLevel: E,
    ariaLive: null,
    ariaModal: te,
    ariaMultiLine: te,
    ariaMultiSelectable: te,
    ariaOrientation: null,
    ariaOwns: Y,
    ariaPlaceholder: null,
    ariaPosInSet: E,
    ariaPressed: te,
    ariaReadOnly: te,
    ariaRelevant: null,
    ariaRequired: te,
    ariaRoleDescription: Y,
    ariaRowCount: E,
    ariaRowIndex: E,
    ariaRowSpan: E,
    ariaSelected: te,
    ariaSetSize: E,
    ariaSort: null,
    ariaValueMax: E,
    ariaValueMin: E,
    ariaValueNow: E,
    ariaValueText: null,
    role: null
  },
  transform(e, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  }
});
function Hr(e, n) {
  return n in e ? e[n] : n;
}
function jr(e, n) {
  return Hr(e, n.toLowerCase());
}
const bl = Ue({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: je,
    acceptCharset: Y,
    accessKey: Y,
    action: null,
    allow: null,
    allowFullScreen: M,
    allowPaymentRequest: M,
    allowUserMedia: M,
    alt: null,
    as: null,
    async: M,
    autoCapitalize: null,
    autoComplete: Y,
    autoFocus: M,
    autoPlay: M,
    blocking: Y,
    capture: null,
    charSet: null,
    checked: M,
    cite: null,
    className: Y,
    cols: E,
    colSpan: null,
    content: null,
    contentEditable: te,
    controls: M,
    controlsList: Y,
    coords: E | je,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: M,
    defer: M,
    dir: null,
    dirName: null,
    disabled: M,
    download: Ut,
    draggable: te,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: M,
    formTarget: null,
    headers: Y,
    height: E,
    hidden: Ut,
    high: E,
    href: null,
    hrefLang: null,
    htmlFor: Y,
    httpEquiv: Y,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: M,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: M,
    itemId: null,
    itemProp: Y,
    itemRef: Y,
    itemScope: M,
    itemType: Y,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: M,
    low: E,
    manifest: null,
    max: null,
    maxLength: E,
    media: null,
    method: null,
    min: null,
    minLength: E,
    multiple: M,
    muted: M,
    name: null,
    nonce: null,
    noModule: M,
    noValidate: M,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: M,
    optimum: E,
    pattern: null,
    ping: Y,
    placeholder: null,
    playsInline: M,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: M,
    referrerPolicy: null,
    rel: Y,
    required: M,
    reversed: M,
    rows: E,
    rowSpan: E,
    sandbox: Y,
    scope: null,
    scoped: M,
    seamless: M,
    selected: M,
    shadowRootClonable: M,
    shadowRootDelegatesFocus: M,
    shadowRootMode: null,
    shape: null,
    size: E,
    sizes: null,
    slot: null,
    span: E,
    spellCheck: te,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: E,
    step: null,
    style: null,
    tabIndex: E,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: M,
    useMap: null,
    value: te,
    width: E,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Y,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: E,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: E,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: M,
    // Lists. Use CSS to reduce space between items instead
    declare: M,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: E,
    // `<img>` and `<object>`
    leftMargin: E,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: E,
    // `<body>`
    marginWidth: E,
    // `<body>`
    noResize: M,
    // `<frame>`
    noHref: M,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: M,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: M,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: E,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: te,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: E,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: E,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: M,
    disableRemotePlayback: M,
    prefix: null,
    property: null,
    results: E,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: jr
}), Cl = Ue({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: fe,
    accentHeight: E,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: E,
    amplitude: E,
    arabicForm: null,
    ascent: E,
    attributeName: null,
    attributeType: null,
    azimuth: E,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: E,
    by: null,
    calcMode: null,
    capHeight: E,
    className: Y,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: E,
    diffuseConstant: E,
    direction: null,
    display: null,
    dur: null,
    divisor: E,
    dominantBaseline: null,
    download: M,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: E,
    enableBackground: null,
    end: null,
    event: null,
    exponent: E,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: E,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: je,
    g2: je,
    glyphName: je,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: E,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: E,
    horizOriginX: E,
    horizOriginY: E,
    id: null,
    ideographic: E,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: E,
    k: E,
    k1: E,
    k2: E,
    k3: E,
    k4: E,
    kernelMatrix: fe,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: E,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: E,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: E,
    overlineThickness: E,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: E,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Y,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: E,
    pointsAtY: E,
    pointsAtZ: E,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: fe,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: fe,
    rev: fe,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: fe,
    requiredFeatures: fe,
    requiredFonts: fe,
    requiredFormats: fe,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: E,
    specularExponent: E,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: E,
    strikethroughThickness: E,
    string: null,
    stroke: null,
    strokeDashArray: fe,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: E,
    strokeOpacity: E,
    strokeWidth: null,
    style: null,
    surfaceScale: E,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: fe,
    tabIndex: E,
    tableValues: null,
    target: null,
    targetX: E,
    targetY: E,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: fe,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: E,
    underlineThickness: E,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: E,
    values: null,
    vAlphabetic: E,
    vMathematical: E,
    vectorEffect: null,
    vHanging: E,
    vIdeographic: E,
    version: null,
    vertAdvY: E,
    vertOriginX: E,
    vertOriginY: E,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: E,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Hr
}), Vr = Ue({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, n) {
    return "xlink:" + n.slice(5).toLowerCase();
  }
}), Ur = Ue({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: jr
}), $r = Ue({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, n) {
    return "xml:" + n.slice(3).toLowerCase();
  }
}), wl = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Sl = /[A-Z]/g, Pn = /-[a-z]/g, El = /^data[-\w.:]+$/i;
function vl(e, n) {
  const t = Vt(n);
  let r = n, i = ce;
  if (t in e.normal)
    return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && El.test(n)) {
    if (n.charAt(4) === "-") {
      const o = n.slice(5).replace(Pn, Il);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = n.slice(4);
      if (!Pn.test(o)) {
        let l = o.replace(Sl, Al);
        l.charAt(0) !== "-" && (l = "-" + l), n = "data" + l;
      }
    }
    i = tn;
  }
  return new i(r, n);
}
function Al(e) {
  return "-" + e.toLowerCase();
}
function Il(e) {
  return e.charAt(1).toUpperCase();
}
const Tl = Br([Or, bl, Vr, Ur, $r], "html"), nn = Br([Or, Cl, Vr, Ur, $r], "svg");
function Pl(e) {
  return e.join(" ").trim();
}
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rn = {}, Ln = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Ll = /\n/g, Dl = /^\s*/, Fl = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, _l = /^:\s*/, Nl = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, zl = /^[;\s]*/, Ml = /^\s+|\s+$/g, Rl = `
`, Dn = "/", Fn = "*", Fe = "", Bl = "comment", Ol = "declaration";
function Hl(e, n) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  n = n || {};
  var t = 1, r = 1;
  function i(m) {
    var y = m.match(Ll);
    y && (t += y.length);
    var w = m.lastIndexOf(Rl);
    r = ~w ? m.length - w : r + m.length;
  }
  function o() {
    var m = { line: t, column: r };
    return function(y) {
      return y.position = new l(m), u(), y;
    };
  }
  function l(m) {
    this.start = m, this.end = { line: t, column: r }, this.source = n.source;
  }
  l.prototype.content = e;
  function a(m) {
    var y = new Error(
      n.source + ":" + t + ":" + r + ": " + m
    );
    if (y.reason = m, y.filename = n.source, y.line = t, y.column = r, y.source = e, !n.silent) throw y;
  }
  function s(m) {
    var y = m.exec(e);
    if (y) {
      var w = y[0];
      return i(w), e = e.slice(w.length), y;
    }
  }
  function u() {
    s(Dl);
  }
  function h(m) {
    var y;
    for (m = m || []; y = c(); )
      y !== !1 && m.push(y);
    return m;
  }
  function c() {
    var m = o();
    if (!(Dn != e.charAt(0) || Fn != e.charAt(1))) {
      for (var y = 2; Fe != e.charAt(y) && (Fn != e.charAt(y) || Dn != e.charAt(y + 1)); )
        ++y;
      if (y += 2, Fe === e.charAt(y - 1))
        return a("End of comment missing");
      var w = e.slice(2, y - 2);
      return r += 2, i(w), e = e.slice(y), r += 2, m({
        type: Bl,
        comment: w
      });
    }
  }
  function p() {
    var m = o(), y = s(Fl);
    if (y) {
      if (c(), !s(_l)) return a("property missing ':'");
      var w = s(Nl), k = m({
        type: Ol,
        property: _n(y[0].replace(Ln, Fe)),
        value: w ? _n(w[0].replace(Ln, Fe)) : Fe
      });
      return s(zl), k;
    }
  }
  function f() {
    var m = [];
    h(m);
    for (var y; y = p(); )
      y !== !1 && (m.push(y), h(m));
    return m;
  }
  return u(), f();
}
function _n(e) {
  return e ? e.replace(Ml, Fe) : Fe;
}
var jl = Hl, Vl = mt && mt.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(rn, "__esModule", { value: !0 });
rn.default = $l;
const Ul = Vl(jl);
function $l(e, n) {
  let t = null;
  if (!e || typeof e != "string")
    return t;
  const r = (0, Ul.default)(e), i = typeof n == "function";
  return r.forEach((o) => {
    if (o.type !== "declaration")
      return;
    const { property: l, value: a } = o;
    i ? n(l, a, o) : a && (t = t || {}, t[l] = a);
  }), t;
}
var Ct = {};
Object.defineProperty(Ct, "__esModule", { value: !0 });
Ct.camelCase = void 0;
var ql = /^--[a-zA-Z0-9_-]+$/, Wl = /-([a-z])/g, Gl = /^[^-]+$/, Kl = /^-(webkit|moz|ms|o|khtml)-/, Xl = /^-(ms)-/, Yl = function(e) {
  return !e || Gl.test(e) || ql.test(e);
}, Zl = function(e, n) {
  return n.toUpperCase();
}, Nn = function(e, n) {
  return "".concat(n, "-");
}, Ql = function(e, n) {
  return n === void 0 && (n = {}), Yl(e) ? e : (e = e.toLowerCase(), n.reactCompat ? e = e.replace(Xl, Nn) : e = e.replace(Kl, Nn), e.replace(Wl, Zl));
};
Ct.camelCase = Ql;
var Jl = mt && mt.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, eo = Jl(rn), to = Ct;
function qt(e, n) {
  var t = {};
  return !e || typeof e != "string" || (0, eo.default)(e, function(r, i) {
    r && i && (t[(0, to.camelCase)(r, n)] = i);
  }), t;
}
qt.default = qt;
var no = qt;
const ro = /* @__PURE__ */ qr(no), Wr = Gr("end"), ln = Gr("start");
function Gr(e) {
  return n;
  function n(t) {
    const r = t && t.position && t.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function io(e) {
  const n = ln(e), t = Wr(e);
  if (n && t)
    return { start: n, end: t };
}
function Je(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? zn(e.position) : "start" in e || "end" in e ? zn(e) : "line" in e || "column" in e ? Wt(e) : "";
}
function Wt(e) {
  return Mn(e && e.line) + ":" + Mn(e && e.column);
}
function zn(e) {
  return Wt(e && e.start) + "-" + Wt(e && e.end);
}
function Mn(e) {
  return e && typeof e == "number" ? e : 1;
}
class ae extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(n, t, r) {
    super(), typeof t == "string" && (r = t, t = void 0);
    let i = "", o = {}, l = !1;
    if (t && ("line" in t && "column" in t ? o = { place: t } : "start" in t && "end" in t ? o = { place: t } : "type" in t ? o = {
      ancestors: [t],
      place: t.position
    } : o = { ...t }), typeof n == "string" ? i = n : !o.cause && n && (l = !0, i = n.message, o.cause = n), !o.ruleId && !o.source && typeof r == "string") {
      const s = r.indexOf(":");
      s === -1 ? o.ruleId = r : (o.source = r.slice(0, s), o.ruleId = r.slice(s + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const s = o.ancestors[o.ancestors.length - 1];
      s && (o.place = s.position);
    }
    const a = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = Je(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
ae.prototype.file = "";
ae.prototype.name = "";
ae.prototype.reason = "";
ae.prototype.message = "";
ae.prototype.stack = "";
ae.prototype.column = void 0;
ae.prototype.line = void 0;
ae.prototype.ancestors = void 0;
ae.prototype.cause = void 0;
ae.prototype.fatal = void 0;
ae.prototype.place = void 0;
ae.prototype.ruleId = void 0;
ae.prototype.source = void 0;
const on = {}.hasOwnProperty, lo = /* @__PURE__ */ new Map(), oo = /[A-Z]/g, ao = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), so = /* @__PURE__ */ new Set(["td", "th"]), Kr = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function uo(e, n) {
  if (!n || n.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const t = n.filePath || void 0;
  let r;
  if (n.development) {
    if (typeof n.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = ko(t, n.jsxDEV);
  } else {
    if (typeof n.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof n.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = yo(t, n.jsx, n.jsxs);
  }
  const i = {
    Fragment: n.Fragment,
    ancestors: [],
    components: n.components || {},
    create: r,
    elementAttributeNameCase: n.elementAttributeNameCase || "react",
    evaluater: n.createEvaluater ? n.createEvaluater() : void 0,
    filePath: t,
    ignoreInvalidStyle: n.ignoreInvalidStyle || !1,
    passKeys: n.passKeys !== !1,
    passNode: n.passNode || !1,
    schema: n.space === "svg" ? nn : Tl,
    stylePropertyNameCase: n.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: n.tableCellAlignToStyle !== !1
  }, o = Xr(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function Xr(e, n, t) {
  if (n.type === "element")
    return co(e, n, t);
  if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression")
    return ho(e, n);
  if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement")
    return po(e, n, t);
  if (n.type === "mdxjsEsm")
    return fo(e, n);
  if (n.type === "root")
    return mo(e, n, t);
  if (n.type === "text")
    return go(e, n);
}
function co(e, n, t) {
  const r = e.schema;
  let i = r;
  n.tagName.toLowerCase() === "svg" && r.space === "html" && (i = nn, e.schema = i), e.ancestors.push(n);
  const o = Zr(e, n.tagName, !1), l = xo(e, n);
  let a = sn(e, n);
  return ao.has(n.tagName) && (a = a.filter(function(s) {
    return typeof s == "string" ? !kl(s) : !0;
  })), Yr(e, l, o, n), an(l, a), e.ancestors.pop(), e.schema = r, e.create(n, o, l, t);
}
function ho(e, n) {
  if (n.data && n.data.estree && e.evaluater) {
    const r = n.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  nt(e, n.position);
}
function fo(e, n) {
  if (n.data && n.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(n.data.estree)
    );
  nt(e, n.position);
}
function po(e, n, t) {
  const r = e.schema;
  let i = r;
  n.name === "svg" && r.space === "html" && (i = nn, e.schema = i), e.ancestors.push(n);
  const o = n.name === null ? e.Fragment : Zr(e, n.name, !0), l = bo(e, n), a = sn(e, n);
  return Yr(e, l, o, n), an(l, a), e.ancestors.pop(), e.schema = r, e.create(n, o, l, t);
}
function mo(e, n, t) {
  const r = {};
  return an(r, sn(e, n)), e.create(n, e.Fragment, r, t);
}
function go(e, n) {
  return n.value;
}
function Yr(e, n, t, r) {
  typeof t != "string" && t !== e.Fragment && e.passNode && (n.node = r);
}
function an(e, n) {
  if (n.length > 0) {
    const t = n.length > 1 ? n : n[0];
    t && (e.children = t);
  }
}
function yo(e, n, t) {
  return r;
  function r(i, o, l, a) {
    const u = Array.isArray(l.children) ? t : n;
    return a ? u(o, l, a) : u(o, l);
  }
}
function ko(e, n) {
  return t;
  function t(r, i, o, l) {
    const a = Array.isArray(o.children), s = ln(r);
    return n(
      i,
      o,
      l,
      a,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0
      },
      void 0
    );
  }
}
function xo(e, n) {
  const t = {};
  let r, i;
  for (i in n.properties)
    if (i !== "children" && on.call(n.properties, i)) {
      const o = Co(e, i, n.properties[i]);
      if (o) {
        const [l, a] = o;
        e.tableCellAlignToStyle && l === "align" && typeof a == "string" && so.has(n.tagName) ? r = a : t[l] = a;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      t.style || (t.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return t;
}
function bo(e, n) {
  const t = {};
  for (const r of n.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const l = o.expression;
        l.type;
        const a = l.properties[0];
        a.type, Object.assign(
          t,
          e.evaluater.evaluateExpression(a.argument)
        );
      } else
        nt(e, n.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, o = e.evaluater.evaluateExpression(a.expression);
        } else
          nt(e, n.position);
      else
        o = r.value === null ? !0 : r.value;
      t[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return t;
}
function sn(e, n) {
  const t = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : lo;
  for (; ++r < n.children.length; ) {
    const o = n.children[r];
    let l;
    if (e.passKeys) {
      const s = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (s) {
        const u = i.get(s) || 0;
        l = s + "-" + u, i.set(s, u + 1);
      }
    }
    const a = Xr(e, o, l);
    a !== void 0 && t.push(a);
  }
  return t;
}
function Co(e, n, t) {
  const r = vl(e.schema, n);
  if (!(t == null || typeof t == "number" && Number.isNaN(t))) {
    if (Array.isArray(t) && (t = r.commaSeparated ? pl(t) : Pl(t)), r.property === "style") {
      let i = typeof t == "object" ? t : wo(e, String(t));
      return e.stylePropertyNameCase === "css" && (i = So(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? wl[r.property] || r.property : r.attribute,
      t
    ];
  }
}
function wo(e, n) {
  try {
    return ro(n, { reactCompat: !0 });
  } catch (t) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      t
    ), i = new ae("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = Kr + "#cannot-parse-style-attribute", i;
  }
}
function Zr(e, n, t) {
  let r;
  if (!t)
    r = { type: "Literal", value: n };
  else if (n.includes(".")) {
    const i = n.split(".");
    let o = -1, l;
    for (; ++o < i.length; ) {
      const a = An(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: a,
        computed: !!(o && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = l;
  } else
    r = An(n) && !/^[a-z]/.test(n) ? { type: "Identifier", name: n } : { type: "Literal", value: n };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return on.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  nt(e);
}
function nt(e, n) {
  const t = new ae(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: n,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw t.file = e.filePath || void 0, t.url = Kr + "#cannot-handle-mdx-estrees-without-createevaluater", t;
}
function So(e) {
  const n = {};
  let t;
  for (t in e)
    on.call(e, t) && (n[Eo(t)] = e[t]);
  return n;
}
function Eo(e) {
  let n = e.replace(oo, vo);
  return n.slice(0, 3) === "ms-" && (n = "-" + n), n;
}
function vo(e) {
  return "-" + e.toLowerCase();
}
const Tt = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, Ao = {};
function un(e, n) {
  const t = Ao, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0, i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return Qr(e, r, i);
}
function Qr(e, n, t) {
  if (Io(e)) {
    if ("value" in e)
      return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Rn(e.children, n, t);
  }
  return Array.isArray(e) ? Rn(e, n, t) : "";
}
function Rn(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Qr(e[i], n, t);
  return r.join("");
}
function Io(e) {
  return !!(e && typeof e == "object");
}
const Bn = document.createElement("i");
function cn(e) {
  const n = "&" + e + ";";
  Bn.innerHTML = n;
  const t = Bn.textContent;
  return t.charCodeAt(t.length - 1) === 59 && e !== "semi" || t === n ? !1 : t;
}
function pe(e, n, t, r) {
  const i = e.length;
  let o = 0, l;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(n, t), e.splice(...l);
  else
    for (t && e.splice(n, t); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(n, 0), e.splice(...l), o += 1e4, n += 1e4;
}
function de(e, n) {
  return e.length > 0 ? (pe(e, e.length, 0, n), e) : n;
}
const On = {}.hasOwnProperty;
function Jr(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; )
    To(n, e[t]);
  return n;
}
function To(e, n) {
  let t;
  for (t in n) {
    const i = (On.call(e, t) ? e[t] : void 0) || (e[t] = {}), o = n[t];
    let l;
    if (o)
      for (l in o) {
        On.call(i, l) || (i[l] = []);
        const a = o[l];
        Po(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function Po(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; )
    (n[t].add === "after" ? e : r).push(n[t]);
  pe(e, 0, 0, r);
}
function ei(e, n) {
  const t = Number.parseInt(e, n);
  return (
    // C0 except for HT, LF, FF, CR, space.
    t < 9 || t === 11 || t > 13 && t < 32 || // Control character (DEL) of C0, and C1 controls.
    t > 126 && t < 160 || // Lone high surrogates and low surrogates.
    t > 55295 && t < 57344 || // Noncharacters.
    t > 64975 && t < 65008 || /* eslint-disable no-bitwise */
    (t & 65535) === 65535 || (t & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    t > 1114111 ? "�" : String.fromCodePoint(t)
  );
}
function ge(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const se = Te(/[A-Za-z]/), oe = Te(/[\dA-Za-z]/), Lo = Te(/[#-'*+\--9=?A-Z^-~]/);
function gt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Gt = Te(/\d/), Do = Te(/[\dA-Fa-f]/), Fo = Te(/[!-/:-@[-`{-~]/);
function F(e) {
  return e !== null && e < -2;
}
function K(e) {
  return e !== null && (e < 0 || e === 32);
}
function O(e) {
  return e === -2 || e === -1 || e === 32;
}
const wt = Te(new RegExp("\\p{P}|\\p{S}", "u")), _e = Te(/\s/);
function Te(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function $e(e) {
  const n = [];
  let t = -1, r = 0, i = 0;
  for (; ++t < e.length; ) {
    const o = e.charCodeAt(t);
    let l = "";
    if (o === 37 && oe(e.charCodeAt(t + 1)) && oe(e.charCodeAt(t + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const a = e.charCodeAt(t + 1);
      o < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(o, a), i = 1) : l = "�";
    } else
      l = String.fromCharCode(o);
    l && (n.push(e.slice(r, t), encodeURIComponent(l)), r = t + i + 1, l = ""), i && (t += i, i = 0);
  }
  return n.join("") + e.slice(r);
}
function V(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return O(s) ? (e.enter(t), a(s)) : n(s);
  }
  function a(s) {
    return O(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
  }
}
const _o = {
  tokenize: No
};
function No(e) {
  const n = e.attempt(this.parser.constructs.contentInitial, r, i);
  let t;
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), V(e, n, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), o(a);
  }
  function o(a) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: t
    });
    return t && (t.next = s), t = s, l(a);
  }
  function l(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return F(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
  }
}
const zo = {
  tokenize: Mo
}, Hn = {
  tokenize: Ro
};
function Mo(e) {
  const n = this, t = [];
  let r = 0, i, o, l;
  return a;
  function a(S) {
    if (r < t.length) {
      const T = t[r];
      return n.containerState = T[1], e.attempt(T[0].continuation, s, u)(S);
    }
    return u(S);
  }
  function s(S) {
    if (r++, n.containerState._closeFlow) {
      n.containerState._closeFlow = void 0, i && A();
      const T = n.events.length;
      let D = T, b;
      for (; D--; )
        if (n.events[D][0] === "exit" && n.events[D][1].type === "chunkFlow") {
          b = n.events[D][1].end;
          break;
        }
      k(r);
      let _ = T;
      for (; _ < n.events.length; )
        n.events[_][1].end = {
          ...b
        }, _++;
      return pe(n.events, D + 1, 0, n.events.slice(T)), n.events.length = _, u(S);
    }
    return a(S);
  }
  function u(S) {
    if (r === t.length) {
      if (!i)
        return p(S);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return m(S);
      n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return n.containerState = {}, e.check(Hn, h, c)(S);
  }
  function h(S) {
    return i && A(), k(r), p(S);
  }
  function c(S) {
    return n.parser.lazy[n.now().line] = r !== t.length, l = n.now().offset, m(S);
  }
  function p(S) {
    return n.containerState = {}, e.attempt(Hn, f, m)(S);
  }
  function f(S) {
    return r++, t.push([n.currentConstruct, n.containerState]), p(S);
  }
  function m(S) {
    if (S === null) {
      i && A(), k(0), e.consume(S);
      return;
    }
    return i = i || n.parser.flow(n.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: o
    }), y(S);
  }
  function y(S) {
    if (S === null) {
      w(e.exit("chunkFlow"), !0), k(0), e.consume(S);
      return;
    }
    return F(S) ? (e.consume(S), w(e.exit("chunkFlow")), r = 0, n.interrupt = void 0, a) : (e.consume(S), y);
  }
  function w(S, T) {
    const D = n.sliceStream(S);
    if (T && D.push(null), S.previous = o, o && (o.next = S), o = S, i.defineSkip(S.start), i.write(D), n.parser.lazy[S.start.line]) {
      let b = i.events.length;
      for (; b--; )
        if (
          // The token starts before the line ending…
          i.events[b][1].start.offset < l && // …and either is not ended yet…
          (!i.events[b][1].end || // …or ends after it.
          i.events[b][1].end.offset > l)
        )
          return;
      const _ = n.events.length;
      let j = _, R, x;
      for (; j--; )
        if (n.events[j][0] === "exit" && n.events[j][1].type === "chunkFlow") {
          if (R) {
            x = n.events[j][1].end;
            break;
          }
          R = !0;
        }
      for (k(r), b = _; b < n.events.length; )
        n.events[b][1].end = {
          ...x
        }, b++;
      pe(n.events, j + 1, 0, n.events.slice(_)), n.events.length = b;
    }
  }
  function k(S) {
    let T = t.length;
    for (; T-- > S; ) {
      const D = t[T];
      n.containerState = D[1], D[0].exit.call(n, e);
    }
    t.length = S;
  }
  function A() {
    i.write([null]), o = void 0, i = void 0, n.containerState._closeFlow = void 0;
  }
}
function Ro(e, n, t) {
  return V(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Ve(e) {
  if (e === null || K(e) || _e(e))
    return 1;
  if (wt(e))
    return 2;
}
function St(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (n = o(n, t), r.push(o));
  }
  return n;
}
const Kt = {
  name: "attention",
  resolveAll: Bo,
  tokenize: Oo
};
function Bo(e, n) {
  let t = -1, r, i, o, l, a, s, u, h;
  for (; ++t < e.length; )
    if (e[t][0] === "enter" && e[t][1].type === "attentionSequence" && e[t][1]._close) {
      for (r = t; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[t][1]._open) && (e[t][1].end.offset - e[t][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[t][1].end.offset - e[t][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[t][1].end.offset - e[t][1].start.offset > 1 ? 2 : 1;
          const c = {
            ...e[r][1].end
          }, p = {
            ...e[t][1].start
          };
          jn(c, -s), jn(p, s), l = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
            end: {
              ...e[r][1].end
            }
          }, a = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[t][1].start
            },
            end: p
          }, o = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[t][1].start
            }
          }, i = {
            type: s > 1 ? "strong" : "emphasis",
            start: {
              ...l.start
            },
            end: {
              ...a.end
            }
          }, e[r][1].end = {
            ...l.start
          }, e[t][1].start = {
            ...a.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = de(u, [["enter", e[r][1], n], ["exit", e[r][1], n]])), u = de(u, [["enter", i, n], ["enter", l, n], ["exit", l, n], ["enter", o, n]]), u = de(u, St(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n)), u = de(u, [["exit", o, n], ["enter", a, n], ["exit", a, n], ["exit", i, n]]), e[t][1].end.offset - e[t][1].start.offset ? (h = 2, u = de(u, [["enter", e[t][1], n], ["exit", e[t][1], n]])) : h = 0, pe(e, r - 1, t - r + 3, u), t = r + u.length - h - 2;
          break;
        }
    }
  for (t = -1; ++t < e.length; )
    e[t][1].type === "attentionSequence" && (e[t][1].type = "data");
  return e;
}
function Oo(e, n) {
  const t = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Ve(r);
  let o;
  return l;
  function l(s) {
    return o = s, e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === o)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), h = Ve(s), c = !h || h === 2 && i || t.includes(s), p = !i || i === 2 && h || t.includes(r);
    return u._open = !!(o === 42 ? c : c && (i || !p)), u._close = !!(o === 42 ? p : p && (h || !c)), n(s);
  }
}
function jn(e, n) {
  e.column += n, e.offset += n, e._bufferIndex += n;
}
const Ho = {
  name: "autolink",
  tokenize: jo
};
function jo(e, n, t) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(f) {
    return se(f) ? (e.consume(f), l) : f === 64 ? t(f) : u(f);
  }
  function l(f) {
    return f === 43 || f === 45 || f === 46 || oe(f) ? (r = 1, a(f)) : u(f);
  }
  function a(f) {
    return f === 58 ? (e.consume(f), r = 0, s) : (f === 43 || f === 45 || f === 46 || oe(f)) && r++ < 32 ? (e.consume(f), a) : (r = 0, u(f));
  }
  function s(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), n) : f === null || f === 32 || f === 60 || gt(f) ? t(f) : (e.consume(f), s);
  }
  function u(f) {
    return f === 64 ? (e.consume(f), h) : Lo(f) ? (e.consume(f), u) : t(f);
  }
  function h(f) {
    return oe(f) ? c(f) : t(f);
  }
  function c(f) {
    return f === 46 ? (e.consume(f), r = 0, h) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), n) : p(f);
  }
  function p(f) {
    if ((f === 45 || oe(f)) && r++ < 63) {
      const m = f === 45 ? p : c;
      return e.consume(f), m;
    }
    return t(f);
  }
}
const lt = {
  partial: !0,
  tokenize: Vo
};
function Vo(e, n, t) {
  return r;
  function r(o) {
    return O(o) ? V(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || F(o) ? n(o) : t(o);
  }
}
const ti = {
  continuation: {
    tokenize: $o
  },
  exit: qo,
  name: "blockQuote",
  tokenize: Uo
};
function Uo(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o;
    }
    return t(l);
  }
  function o(l) {
    return O(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(l));
  }
}
function $o(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return O(l) ? V(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l);
  }
  function o(l) {
    return e.attempt(ti, n, t)(l);
  }
}
function qo(e) {
  e.exit("blockQuote");
}
const ni = {
  name: "characterEscape",
  tokenize: Wo
};
function Wo(e, n, t) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return Fo(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(o);
  }
}
const ri = {
  name: "characterReference",
  tokenize: Go
};
function Go(e, n, t) {
  const r = this;
  let i = 0, o, l;
  return a;
  function a(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), s;
  }
  function s(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, l = oe, h(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = Do, h) : (e.enter("characterReferenceValue"), o = 7, l = Gt, h(c));
  }
  function h(c) {
    if (c === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return l === oe && !cn(r.sliceSerialize(p)) ? t(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), n);
    }
    return l(c) && i++ < o ? (e.consume(c), h) : t(c);
  }
}
const Vn = {
  partial: !0,
  tokenize: Xo
}, Un = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Ko
};
function Ko(e, n, t) {
  const r = this, i = {
    partial: !0,
    tokenize: D
  };
  let o = 0, l = 0, a;
  return s;
  function s(b) {
    return u(b);
  }
  function u(b) {
    const _ = r.events[r.events.length - 1];
    return o = _ && _[1].type === "linePrefix" ? _[2].sliceSerialize(_[1], !0).length : 0, a = b, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), h(b);
  }
  function h(b) {
    return b === a ? (l++, e.consume(b), h) : l < 3 ? t(b) : (e.exit("codeFencedFenceSequence"), O(b) ? V(e, c, "whitespace")(b) : c(b));
  }
  function c(b) {
    return b === null || F(b) ? (e.exit("codeFencedFence"), r.interrupt ? n(b) : e.check(Vn, y, T)(b)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(b));
  }
  function p(b) {
    return b === null || F(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(b)) : O(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), V(e, f, "whitespace")(b)) : b === 96 && b === a ? t(b) : (e.consume(b), p);
  }
  function f(b) {
    return b === null || F(b) ? c(b) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(b));
  }
  function m(b) {
    return b === null || F(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(b)) : b === 96 && b === a ? t(b) : (e.consume(b), m);
  }
  function y(b) {
    return e.attempt(i, T, w)(b);
  }
  function w(b) {
    return e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), k;
  }
  function k(b) {
    return o > 0 && O(b) ? V(e, A, "linePrefix", o + 1)(b) : A(b);
  }
  function A(b) {
    return b === null || F(b) ? e.check(Vn, y, T)(b) : (e.enter("codeFlowValue"), S(b));
  }
  function S(b) {
    return b === null || F(b) ? (e.exit("codeFlowValue"), A(b)) : (e.consume(b), S);
  }
  function T(b) {
    return e.exit("codeFenced"), n(b);
  }
  function D(b, _, j) {
    let R = 0;
    return x;
    function x(B) {
      return b.enter("lineEnding"), b.consume(B), b.exit("lineEnding"), P;
    }
    function P(B) {
      return b.enter("codeFencedFence"), O(B) ? V(b, L, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(B) : L(B);
    }
    function L(B) {
      return B === a ? (b.enter("codeFencedFenceSequence"), U(B)) : j(B);
    }
    function U(B) {
      return B === a ? (R++, b.consume(B), U) : R >= l ? (b.exit("codeFencedFenceSequence"), O(B) ? V(b, W, "whitespace")(B) : W(B)) : j(B);
    }
    function W(B) {
      return B === null || F(B) ? (b.exit("codeFencedFence"), _(B)) : j(B);
    }
  }
}
function Xo(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? t(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
const Pt = {
  name: "codeIndented",
  tokenize: Zo
}, Yo = {
  partial: !0,
  tokenize: Qo
};
function Zo(e, n, t) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), V(e, o, "linePrefix", 5)(u);
  }
  function o(u) {
    const h = r.events[r.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? l(u) : t(u);
  }
  function l(u) {
    return u === null ? s(u) : F(u) ? e.attempt(Yo, l, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || F(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), n(u);
  }
}
function Qo(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? t(l) : F(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : V(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(l) : F(l) ? i(l) : t(l);
  }
}
const Jo = {
  name: "codeText",
  previous: ta,
  resolve: ea,
  tokenize: na
};
function ea(e) {
  let n = e.length - 4, t = 3, r, i;
  if ((e[t][1].type === "lineEnding" || e[t][1].type === "space") && (e[n][1].type === "lineEnding" || e[n][1].type === "space")) {
    for (r = t; ++r < n; )
      if (e[r][1].type === "codeTextData") {
        e[t][1].type = "codeTextPadding", e[n][1].type = "codeTextPadding", t += 2, n -= 2;
        break;
      }
  }
  for (r = t - 1, n++; ++r <= n; )
    i === void 0 ? r !== n && e[r][1].type !== "lineEnding" && (i = r) : (r === n || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), n -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function ta(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function na(e, n, t) {
  let r = 0, i, o;
  return l;
  function l(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
  }
  function a(c) {
    return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), s(c));
  }
  function s(c) {
    return c === null ? t(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), s) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, h(c)) : F(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || F(c) ? (e.exit("codeTextData"), s(c)) : (e.consume(c), u);
  }
  function h(c) {
    return c === 96 ? (e.consume(c), i++, h) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), n(c)) : (o.type = "codeTextData", u(c));
  }
}
class ra {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(n) {
    this.left = n ? [...n] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(n) {
    if (n < 0 || n >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + n + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return n < this.left.length ? this.left[n] : this.right[this.right.length - n + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(n, t) {
    const r = t ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(n, r) : n > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - n + this.left.length).reverse() : this.left.slice(n).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(n, t, r) {
    const i = t || 0;
    this.setCursor(Math.trunc(n));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && Ze(this.left, r), o.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(n) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(n) {
    this.setCursor(Number.POSITIVE_INFINITY), Ze(this.left, n);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(n) {
    this.setCursor(0), this.right.push(n);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(n) {
    this.setCursor(0), Ze(this.right, n.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(n) {
    if (!(n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0))
      if (n < this.left.length) {
        const t = this.left.splice(n, Number.POSITIVE_INFINITY);
        Ze(this.right, t.reverse());
      } else {
        const t = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
        Ze(this.left, t.reverse());
      }
  }
}
function Ze(e, n) {
  let t = 0;
  if (n.length < 1e4)
    e.push(...n);
  else
    for (; t < n.length; )
      e.push(...n.slice(t, t + 1e4)), t += 1e4;
}
function ii(e) {
  const n = {};
  let t = -1, r, i, o, l, a, s, u;
  const h = new ra(e);
  for (; ++t < h.length; ) {
    for (; t in n; )
      t = n[t];
    if (r = h.get(t), t && r[1].type === "chunkFlow" && h.get(t - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content"))
      for (; ++o < s.length && s[o][1].type !== "content"; )
        s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(n, ia(h, t)), t = n[t], u = !0);
    else if (r[1]._container) {
      for (o = t, i = void 0; o--; )
        if (l = h.get(o), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (i && (h.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...h.get(i)[1].start
      }, a = h.slice(i, t), a.unshift(r), h.splice(i, t - i + 1, a));
    }
  }
  return pe(e, 0, Number.POSITIVE_INFINITY, h.slice(0)), !u;
}
function ia(e, n) {
  const t = e.get(n)[1], r = e.get(n)[2];
  let i = n - 1;
  const o = [];
  let l = t._tokenizer;
  l || (l = r.parser[t.contentType](t.start), t._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const a = l.events, s = [], u = {};
  let h, c, p = -1, f = t, m = 0, y = 0;
  const w = [y];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; )
      ;
    o.push(i), f._tokenizer || (h = r.sliceStream(f), f.next || h.push(null), c && l.defineSkip(f.start), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(h), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), c = f, f = f.next;
  }
  for (f = t; ++p < a.length; )
    // Find a void token that includes a break.
    a[p][0] === "exit" && a[p - 1][0] === "enter" && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && (y = p + 1, w.push(y), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (l.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : w.pop(), p = w.length; p--; ) {
    const k = a.slice(w[p], w[p + 1]), A = o.pop();
    s.push([A, A + k.length - 1]), e.splice(A, 2, k);
  }
  for (s.reverse(), p = -1; ++p < s.length; )
    u[m + s[p][0]] = m + s[p][1], m += s[p][1] - s[p][0] - 1;
  return u;
}
const la = {
  resolve: aa,
  tokenize: sa
}, oa = {
  partial: !0,
  tokenize: ua
};
function aa(e) {
  return ii(e), e;
}
function sa(e, n) {
  let t;
  return r;
  function r(a) {
    return e.enter("content"), t = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : F(a) ? e.check(oa, l, o)(a) : (e.consume(a), i);
  }
  function o(a) {
    return e.exit("chunkContent"), e.exit("content"), n(a);
  }
  function l(a) {
    return e.consume(a), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
      contentType: "content",
      previous: t
    }), t = t.next, i;
  }
}
function ua(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), V(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || F(l))
      return t(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(l) : e.interrupt(r.parser.constructs.flow, t, n)(l);
  }
}
function li(e, n, t, r, i, o, l, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let h = 0;
  return c;
  function c(k) {
    return k === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(k), e.exit(o), p) : k === null || k === 32 || k === 41 || gt(k) ? t(k) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), y(k));
  }
  function p(k) {
    return k === 62 ? (e.enter(o), e.consume(k), e.exit(o), e.exit(i), e.exit(r), n) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), f(k));
  }
  function f(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(a), p(k)) : k === null || k === 60 || F(k) ? t(k) : (e.consume(k), k === 92 ? m : f);
  }
  function m(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), f) : f(k);
  }
  function y(k) {
    return !h && (k === null || k === 41 || K(k)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), n(k)) : h < u && k === 40 ? (e.consume(k), h++, y) : k === 41 ? (e.consume(k), h--, y) : k === null || k === 32 || k === 40 || gt(k) ? t(k) : (e.consume(k), k === 92 ? w : y);
  }
  function w(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), y) : y(k);
  }
}
function oi(e, n, t, r, i, o) {
  const l = this;
  let a = 0, s;
  return u;
  function u(f) {
    return e.enter(r), e.enter(i), e.consume(f), e.exit(i), e.enter(o), h;
  }
  function h(f) {
    return a > 999 || f === null || f === 91 || f === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    f === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? t(f) : f === 93 ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), n) : F(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), h) : (e.enter("chunkString", {
      contentType: "string"
    }), c(f));
  }
  function c(f) {
    return f === null || f === 91 || f === 93 || F(f) || a++ > 999 ? (e.exit("chunkString"), h(f)) : (e.consume(f), s || (s = !O(f)), f === 92 ? p : c);
  }
  function p(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, c) : c(f);
  }
}
function ai(e, n, t, r, i, o) {
  let l;
  return a;
  function a(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), l = p === 40 ? 41 : p, s) : t(p);
  }
  function s(p) {
    return p === l ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), n) : (e.enter(o), u(p));
  }
  function u(p) {
    return p === l ? (e.exit(o), s(l)) : p === null ? t(p) : F(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), V(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), h(p));
  }
  function h(p) {
    return p === l || p === null || F(p) ? (e.exit("chunkString"), u(p)) : (e.consume(p), p === 92 ? c : h);
  }
  function c(p) {
    return p === l || p === 92 ? (e.consume(p), h) : h(p);
  }
}
function et(e, n) {
  let t;
  return r;
  function r(i) {
    return F(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t = !0, r) : O(i) ? V(e, r, t ? "linePrefix" : "lineSuffix")(i) : n(i);
  }
}
const ca = {
  name: "definition",
  tokenize: fa
}, ha = {
  partial: !0,
  tokenize: pa
};
function fa(e, n, t) {
  const r = this;
  let i;
  return o;
  function o(f) {
    return e.enter("definition"), l(f);
  }
  function l(f) {
    return oi.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(f);
  }
  function a(f) {
    return i = ge(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : t(f);
  }
  function s(f) {
    return K(f) ? et(e, u)(f) : u(f);
  }
  function u(f) {
    return li(
      e,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(f);
  }
  function h(f) {
    return e.attempt(ha, c, c)(f);
  }
  function c(f) {
    return O(f) ? V(e, p, "whitespace")(f) : p(f);
  }
  function p(f) {
    return f === null || F(f) ? (e.exit("definition"), r.parser.defined.push(i), n(f)) : t(f);
  }
}
function pa(e, n, t) {
  return r;
  function r(a) {
    return K(a) ? et(e, i)(a) : t(a);
  }
  function i(a) {
    return ai(e, o, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function o(a) {
    return O(a) ? V(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || F(a) ? n(a) : t(a);
  }
}
const da = {
  name: "hardBreakEscape",
  tokenize: ma
};
function ma(e, n, t) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return F(o) ? (e.exit("hardBreakEscape"), n(o)) : t(o);
  }
}
const ga = {
  name: "headingAtx",
  resolve: ya,
  tokenize: ka
};
function ya(e, n) {
  let t = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), t - 2 > r && e[t][1].type === "whitespace" && (t -= 2), e[t][1].type === "atxHeadingSequence" && (r === t - 1 || t - 4 > r && e[t - 2][1].type === "whitespace") && (t -= r + 1 === t ? 2 : 4), t > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[t][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[t][1].end,
    contentType: "text"
  }, pe(e, r, t - r + 1, [["enter", i, n], ["enter", o, n], ["exit", o, n], ["exit", i, n]])), e;
}
function ka(e, n, t) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("atxHeading"), o(h);
  }
  function o(h) {
    return e.enter("atxHeadingSequence"), l(h);
  }
  function l(h) {
    return h === 35 && r++ < 6 ? (e.consume(h), l) : h === null || K(h) ? (e.exit("atxHeadingSequence"), a(h)) : t(h);
  }
  function a(h) {
    return h === 35 ? (e.enter("atxHeadingSequence"), s(h)) : h === null || F(h) ? (e.exit("atxHeading"), n(h)) : O(h) ? V(e, a, "whitespace")(h) : (e.enter("atxHeadingText"), u(h));
  }
  function s(h) {
    return h === 35 ? (e.consume(h), s) : (e.exit("atxHeadingSequence"), a(h));
  }
  function u(h) {
    return h === null || h === 35 || K(h) ? (e.exit("atxHeadingText"), a(h)) : (e.consume(h), u);
  }
}
const xa = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], $n = ["pre", "script", "style", "textarea"], ba = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Sa,
  tokenize: Ea
}, Ca = {
  partial: !0,
  tokenize: Aa
}, wa = {
  partial: !0,
  tokenize: va
};
function Sa(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); )
    ;
  return n > 1 && e[n - 2][1].type === "linePrefix" && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e;
}
function Ea(e, n, t) {
  const r = this;
  let i, o, l, a, s;
  return u;
  function u(g) {
    return h(g);
  }
  function h(g) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), c;
  }
  function c(g) {
    return g === 33 ? (e.consume(g), p) : g === 47 ? (e.consume(g), o = !0, y) : g === 63 ? (e.consume(g), i = 3, r.interrupt ? n : d) : se(g) ? (e.consume(g), l = String.fromCharCode(g), w) : t(g);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), i = 2, f) : g === 91 ? (e.consume(g), i = 5, a = 0, m) : se(g) ? (e.consume(g), i = 4, r.interrupt ? n : d) : t(g);
  }
  function f(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? n : d) : t(g);
  }
  function m(g) {
    const le = "CDATA[";
    return g === le.charCodeAt(a++) ? (e.consume(g), a === le.length ? r.interrupt ? n : L : m) : t(g);
  }
  function y(g) {
    return se(g) ? (e.consume(g), l = String.fromCharCode(g), w) : t(g);
  }
  function w(g) {
    if (g === null || g === 47 || g === 62 || K(g)) {
      const le = g === 47, Pe = l.toLowerCase();
      return !le && !o && $n.includes(Pe) ? (i = 1, r.interrupt ? n(g) : L(g)) : xa.includes(l.toLowerCase()) ? (i = 6, le ? (e.consume(g), k) : r.interrupt ? n(g) : L(g)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(g) : o ? A(g) : S(g));
    }
    return g === 45 || oe(g) ? (e.consume(g), l += String.fromCharCode(g), w) : t(g);
  }
  function k(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? n : L) : t(g);
  }
  function A(g) {
    return O(g) ? (e.consume(g), A) : x(g);
  }
  function S(g) {
    return g === 47 ? (e.consume(g), x) : g === 58 || g === 95 || se(g) ? (e.consume(g), T) : O(g) ? (e.consume(g), S) : x(g);
  }
  function T(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || oe(g) ? (e.consume(g), T) : D(g);
  }
  function D(g) {
    return g === 61 ? (e.consume(g), b) : O(g) ? (e.consume(g), D) : S(g);
  }
  function b(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? t(g) : g === 34 || g === 39 ? (e.consume(g), s = g, _) : O(g) ? (e.consume(g), b) : j(g);
  }
  function _(g) {
    return g === s ? (e.consume(g), s = null, R) : g === null || F(g) ? t(g) : (e.consume(g), _);
  }
  function j(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || K(g) ? D(g) : (e.consume(g), j);
  }
  function R(g) {
    return g === 47 || g === 62 || O(g) ? S(g) : t(g);
  }
  function x(g) {
    return g === 62 ? (e.consume(g), P) : t(g);
  }
  function P(g) {
    return g === null || F(g) ? L(g) : O(g) ? (e.consume(g), P) : t(g);
  }
  function L(g) {
    return g === 45 && i === 2 ? (e.consume(g), N) : g === 60 && i === 1 ? (e.consume(g), $) : g === 62 && i === 4 ? (e.consume(g), re) : g === 63 && i === 3 ? (e.consume(g), d) : g === 93 && i === 5 ? (e.consume(g), X) : F(g) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Ca, ee, U)(g)) : g === null || F(g) ? (e.exit("htmlFlowData"), U(g)) : (e.consume(g), L);
  }
  function U(g) {
    return e.check(wa, W, ee)(g);
  }
  function W(g) {
    return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), B;
  }
  function B(g) {
    return g === null || F(g) ? U(g) : (e.enter("htmlFlowData"), L(g));
  }
  function N(g) {
    return g === 45 ? (e.consume(g), d) : L(g);
  }
  function $(g) {
    return g === 47 ? (e.consume(g), l = "", q) : L(g);
  }
  function q(g) {
    if (g === 62) {
      const le = l.toLowerCase();
      return $n.includes(le) ? (e.consume(g), re) : L(g);
    }
    return se(g) && l.length < 8 ? (e.consume(g), l += String.fromCharCode(g), q) : L(g);
  }
  function X(g) {
    return g === 93 ? (e.consume(g), d) : L(g);
  }
  function d(g) {
    return g === 62 ? (e.consume(g), re) : g === 45 && i === 2 ? (e.consume(g), d) : L(g);
  }
  function re(g) {
    return g === null || F(g) ? (e.exit("htmlFlowData"), ee(g)) : (e.consume(g), re);
  }
  function ee(g) {
    return e.exit("htmlFlow"), n(g);
  }
}
function va(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return F(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : t(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
function Aa(e, n, t) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(lt, n, t);
  }
}
const Ia = {
  name: "htmlText",
  tokenize: Ta
};
function Ta(e, n, t) {
  const r = this;
  let i, o, l;
  return a;
  function a(d) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(d), s;
  }
  function s(d) {
    return d === 33 ? (e.consume(d), u) : d === 47 ? (e.consume(d), D) : d === 63 ? (e.consume(d), S) : se(d) ? (e.consume(d), j) : t(d);
  }
  function u(d) {
    return d === 45 ? (e.consume(d), h) : d === 91 ? (e.consume(d), o = 0, m) : se(d) ? (e.consume(d), A) : t(d);
  }
  function h(d) {
    return d === 45 ? (e.consume(d), f) : t(d);
  }
  function c(d) {
    return d === null ? t(d) : d === 45 ? (e.consume(d), p) : F(d) ? (l = c, $(d)) : (e.consume(d), c);
  }
  function p(d) {
    return d === 45 ? (e.consume(d), f) : c(d);
  }
  function f(d) {
    return d === 62 ? N(d) : d === 45 ? p(d) : c(d);
  }
  function m(d) {
    const re = "CDATA[";
    return d === re.charCodeAt(o++) ? (e.consume(d), o === re.length ? y : m) : t(d);
  }
  function y(d) {
    return d === null ? t(d) : d === 93 ? (e.consume(d), w) : F(d) ? (l = y, $(d)) : (e.consume(d), y);
  }
  function w(d) {
    return d === 93 ? (e.consume(d), k) : y(d);
  }
  function k(d) {
    return d === 62 ? N(d) : d === 93 ? (e.consume(d), k) : y(d);
  }
  function A(d) {
    return d === null || d === 62 ? N(d) : F(d) ? (l = A, $(d)) : (e.consume(d), A);
  }
  function S(d) {
    return d === null ? t(d) : d === 63 ? (e.consume(d), T) : F(d) ? (l = S, $(d)) : (e.consume(d), S);
  }
  function T(d) {
    return d === 62 ? N(d) : S(d);
  }
  function D(d) {
    return se(d) ? (e.consume(d), b) : t(d);
  }
  function b(d) {
    return d === 45 || oe(d) ? (e.consume(d), b) : _(d);
  }
  function _(d) {
    return F(d) ? (l = _, $(d)) : O(d) ? (e.consume(d), _) : N(d);
  }
  function j(d) {
    return d === 45 || oe(d) ? (e.consume(d), j) : d === 47 || d === 62 || K(d) ? R(d) : t(d);
  }
  function R(d) {
    return d === 47 ? (e.consume(d), N) : d === 58 || d === 95 || se(d) ? (e.consume(d), x) : F(d) ? (l = R, $(d)) : O(d) ? (e.consume(d), R) : N(d);
  }
  function x(d) {
    return d === 45 || d === 46 || d === 58 || d === 95 || oe(d) ? (e.consume(d), x) : P(d);
  }
  function P(d) {
    return d === 61 ? (e.consume(d), L) : F(d) ? (l = P, $(d)) : O(d) ? (e.consume(d), P) : R(d);
  }
  function L(d) {
    return d === null || d === 60 || d === 61 || d === 62 || d === 96 ? t(d) : d === 34 || d === 39 ? (e.consume(d), i = d, U) : F(d) ? (l = L, $(d)) : O(d) ? (e.consume(d), L) : (e.consume(d), W);
  }
  function U(d) {
    return d === i ? (e.consume(d), i = void 0, B) : d === null ? t(d) : F(d) ? (l = U, $(d)) : (e.consume(d), U);
  }
  function W(d) {
    return d === null || d === 34 || d === 39 || d === 60 || d === 61 || d === 96 ? t(d) : d === 47 || d === 62 || K(d) ? R(d) : (e.consume(d), W);
  }
  function B(d) {
    return d === 47 || d === 62 || K(d) ? R(d) : t(d);
  }
  function N(d) {
    return d === 62 ? (e.consume(d), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(d);
  }
  function $(d) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), q;
  }
  function q(d) {
    return O(d) ? V(e, X, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : X(d);
  }
  function X(d) {
    return e.enter("htmlTextData"), l(d);
  }
}
const hn = {
  name: "labelEnd",
  resolveAll: Fa,
  resolveTo: _a,
  tokenize: Na
}, Pa = {
  tokenize: za
}, La = {
  tokenize: Ma
}, Da = {
  tokenize: Ra
};
function Fa(e) {
  let n = -1;
  const t = [];
  for (; ++n < e.length; ) {
    const r = e[n][1];
    if (t.push(e[n]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", n += i;
    }
  }
  return e.length !== t.length && pe(e, 0, e.length, t), e;
}
function _a(e, n) {
  let t = e.length, r = 0, i, o, l, a;
  for (; t--; )
    if (i = e[t][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[t][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (e[t][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = t, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = t);
  const s = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[l][1].end
    }
  }, h = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[l - 2][1].start
    }
  };
  return a = [["enter", s, n], ["enter", u, n]], a = de(a, e.slice(o + 1, o + r + 3)), a = de(a, [["enter", h, n]]), a = de(a, St(n.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), n)), a = de(a, [["exit", h, n], e[l - 2], e[l - 1], ["exit", u, n]]), a = de(a, e.slice(l + 1)), a = de(a, [["exit", s, n]]), pe(e, o, e.length, a), e;
}
function Na(e, n, t) {
  const r = this;
  let i = r.events.length, o, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(p) {
    return o ? o._inactive ? c(p) : (l = r.parser.defined.includes(ge(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), s) : t(p);
  }
  function s(p) {
    return p === 40 ? e.attempt(Pa, h, l ? h : c)(p) : p === 91 ? e.attempt(La, h, l ? u : c)(p) : l ? h(p) : c(p);
  }
  function u(p) {
    return e.attempt(Da, h, c)(p);
  }
  function h(p) {
    return n(p);
  }
  function c(p) {
    return o._balanced = !0, t(p);
  }
}
function za(e, n, t) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return K(c) ? et(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41 ? h(c) : li(e, l, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function l(c) {
    return K(c) ? et(e, s)(c) : h(c);
  }
  function a(c) {
    return t(c);
  }
  function s(c) {
    return c === 34 || c === 39 || c === 40 ? ai(e, u, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : h(c);
  }
  function u(c) {
    return K(c) ? et(e, h)(c) : h(c);
  }
  function h(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), n) : t(c);
  }
}
function Ma(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return oi.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(a);
  }
  function o(a) {
    return r.parser.defined.includes(ge(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(a) : t(a);
  }
  function l(a) {
    return t(a);
  }
}
function Ra(e, n, t) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), n) : t(o);
  }
}
const Ba = {
  name: "labelStartImage",
  resolveAll: hn.resolveAll,
  tokenize: Oa
};
function Oa(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
  }
  function o(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), l) : t(a);
  }
  function l(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(a) : n(a);
  }
}
const Ha = {
  name: "labelStartLink",
  resolveAll: hn.resolveAll,
  tokenize: ja
};
function ja(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(l) : n(l);
  }
}
const Lt = {
  name: "lineEnding",
  tokenize: Va
};
function Va(e, n) {
  return t;
  function t(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), V(e, n, "linePrefix");
  }
}
const pt = {
  name: "thematicBreak",
  tokenize: Ua
};
function Ua(e, n, t) {
  let r = 0, i;
  return o;
  function o(u) {
    return e.enter("thematicBreak"), l(u);
  }
  function l(u) {
    return i = u, a(u);
  }
  function a(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || F(u)) ? (e.exit("thematicBreak"), n(u)) : t(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), O(u) ? V(e, a, "whitespace")(u) : a(u));
  }
}
const ue = {
  continuation: {
    tokenize: Ga
  },
  exit: Xa,
  name: "list",
  tokenize: Wa
}, $a = {
  partial: !0,
  tokenize: Ya
}, qa = {
  partial: !0,
  tokenize: Ka
};
function Wa(e, n, t) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return a;
  function a(f) {
    const m = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (m === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : Gt(f)) {
      if (r.containerState.type || (r.containerState.type = m, e.enter(m, {
        _container: !0
      })), m === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(pt, t, u)(f) : u(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(f);
    }
    return t(f);
  }
  function s(f) {
    return Gt(f) && ++l < 10 ? (e.consume(f), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), u(f)) : t(f);
  }
  function u(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      lt,
      // Can’t be empty when interrupting.
      r.interrupt ? t : h,
      e.attempt($a, p, c)
    );
  }
  function h(f) {
    return r.containerState.initialBlankLine = !0, o++, p(f);
  }
  function c(f) {
    return O(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), p) : t(f);
  }
  function p(f) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(f);
  }
}
function Ga(e, n, t) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(lt, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, V(e, n, "listItemIndent", r.containerState.size + 1)(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !O(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(qa, n, l)(a));
  }
  function l(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, V(e, e.attempt(ue, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function Ka(e, n, t) {
  const r = this;
  return V(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? n(o) : t(o);
  }
}
function Xa(e) {
  e.exit(this.containerState.type);
}
function Ya(e, n, t) {
  const r = this;
  return V(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !O(o) && l && l[1].type === "listItemPrefixWhitespace" ? n(o) : t(o);
  }
}
const qn = {
  name: "setextUnderline",
  resolveTo: Za,
  tokenize: Qa
};
function Za(e, n) {
  let t = e.length, r, i, o;
  for (; t--; )
    if (e[t][0] === "enter") {
      if (e[t][1].type === "content") {
        r = t;
        break;
      }
      e[t][1].type === "paragraph" && (i = t);
    } else
      e[t][1].type === "content" && e.splice(t, 1), !o && e[t][1].type === "definition" && (o = t);
  const l = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", l, n]), e.splice(o + 1, 0, ["exit", e[r][1], n]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = l, e.push(["exit", l, n]), e;
}
function Qa(e, n, t) {
  const r = this;
  let i;
  return o;
  function o(u) {
    let h = r.events.length, c;
    for (; h--; )
      if (r.events[h][1].type !== "lineEnding" && r.events[h][1].type !== "linePrefix" && r.events[h][1].type !== "content") {
        c = r.events[h][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = u, l(u)) : t(u);
  }
  function l(u) {
    return e.enter("setextHeadingLineSequence"), a(u);
  }
  function a(u) {
    return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), O(u) ? V(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || F(u) ? (e.exit("setextHeadingLine"), n(u)) : t(u);
  }
}
const Ja = {
  tokenize: es
};
function es(e) {
  const n = this, t = e.attempt(
    // Try to parse a blank line.
    lt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, V(e, e.attempt(this.parser.constructs.flow, i, e.attempt(la, i)), "linePrefix"))
  );
  return t;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n.currentConstruct = void 0, t;
  }
}
const ts = {
  resolveAll: ui()
}, ns = si("string"), rs = si("text");
function si(e) {
  return {
    resolveAll: ui(e === "text" ? is : void 0),
    tokenize: n
  };
  function n(t) {
    const r = this, i = this.parser.constructs[e], o = t.attempt(i, l, a);
    return l;
    function l(h) {
      return u(h) ? o(h) : a(h);
    }
    function a(h) {
      if (h === null) {
        t.consume(h);
        return;
      }
      return t.enter("data"), t.consume(h), s;
    }
    function s(h) {
      return u(h) ? (t.exit("data"), o(h)) : (t.consume(h), s);
    }
    function u(h) {
      if (h === null)
        return !0;
      const c = i[h];
      let p = -1;
      if (c)
        for (; ++p < c.length; ) {
          const f = c[p];
          if (!f.previous || f.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function ui(e) {
  return n;
  function n(t, r) {
    let i = -1, o;
    for (; ++i <= t.length; )
      o === void 0 ? t[i] && t[i][1].type === "data" && (o = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== o + 2 && (t[o][1].end = t[i - 1][1].end, t.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(t, r) : t;
  }
}
function is(e, n) {
  let t = 0;
  for (; ++t <= e.length; )
    if ((t === e.length || e[t][1].type === "lineEnding") && e[t - 1][1].type === "data") {
      const r = e[t - 1][1], i = n.sliceStream(r);
      let o = i.length, l = -1, a = 0, s;
      for (; o--; ) {
        const u = i[o];
        if (typeof u == "string") {
          for (l = u.length; u.charCodeAt(l - 1) === 32; )
            a++, l--;
          if (l) break;
          l = -1;
        } else if (u === -2)
          s = !0, a++;
        else if (u !== -1) {
          o++;
          break;
        }
      }
      if (n._contentTypeTextTrailing && t === e.length && (a = 0), a) {
        const u = {
          type: t === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? l : r.start._bufferIndex + l,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(t, 0, ["enter", u, n], ["exit", u, n]), t += 2);
      }
      t++;
    }
  return e;
}
const ls = {
  42: ue,
  43: ue,
  45: ue,
  48: ue,
  49: ue,
  50: ue,
  51: ue,
  52: ue,
  53: ue,
  54: ue,
  55: ue,
  56: ue,
  57: ue,
  62: ti
}, os = {
  91: ca
}, as = {
  [-2]: Pt,
  [-1]: Pt,
  32: Pt
}, ss = {
  35: ga,
  42: pt,
  45: [qn, pt],
  60: ba,
  61: qn,
  95: pt,
  96: Un,
  126: Un
}, us = {
  38: ri,
  92: ni
}, cs = {
  [-5]: Lt,
  [-4]: Lt,
  [-3]: Lt,
  33: Ba,
  38: ri,
  42: Kt,
  60: [Ho, Ia],
  91: Ha,
  92: [da, ni],
  93: hn,
  95: Kt,
  96: Jo
}, hs = {
  null: [Kt, ts]
}, fs = {
  null: [42, 95]
}, ps = {
  null: []
}, ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: fs,
  contentInitial: os,
  disable: ps,
  document: ls,
  flow: ss,
  flowInitial: as,
  insideSpan: hs,
  string: us,
  text: cs
}, Symbol.toStringTag, { value: "Module" }));
function ms(e, n, t) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: t && t.line || 1,
    column: t && t.column || 1,
    offset: t && t.offset || 0
  };
  const i = {}, o = [];
  let l = [], a = [];
  const s = {
    attempt: _(D),
    check: _(b),
    consume: A,
    enter: S,
    exit: T,
    interrupt: _(b, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: y,
    events: [],
    now: m,
    parser: e,
    previous: null,
    sliceSerialize: p,
    sliceStream: f,
    write: c
  };
  let h = n.tokenize.call(u, s);
  return n.resolveAll && o.push(n), u;
  function c(P) {
    return l = de(l, P), w(), l[l.length - 1] !== null ? [] : (j(n, 0), u.events = St(o, u.events, u), u.events);
  }
  function p(P, L) {
    return ys(f(P), L);
  }
  function f(P) {
    return gs(l, P);
  }
  function m() {
    const {
      _bufferIndex: P,
      _index: L,
      line: U,
      column: W,
      offset: B
    } = r;
    return {
      _bufferIndex: P,
      _index: L,
      line: U,
      column: W,
      offset: B
    };
  }
  function y(P) {
    i[P.line] = P.column, x();
  }
  function w() {
    let P;
    for (; r._index < l.length; ) {
      const L = l[r._index];
      if (typeof L == "string")
        for (P = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === P && r._bufferIndex < L.length; )
          k(L.charCodeAt(r._bufferIndex));
      else
        k(L);
    }
  }
  function k(P) {
    h = h(P);
  }
  function A(P) {
    F(P) ? (r.line++, r.column = 1, r.offset += P === -3 ? 2 : 1, x()) : P !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = P;
  }
  function S(P, L) {
    const U = L || {};
    return U.type = P, U.start = m(), u.events.push(["enter", U, u]), a.push(U), U;
  }
  function T(P) {
    const L = a.pop();
    return L.end = m(), u.events.push(["exit", L, u]), L;
  }
  function D(P, L) {
    j(P, L.from);
  }
  function b(P, L) {
    L.restore();
  }
  function _(P, L) {
    return U;
    function U(W, B, N) {
      let $, q, X, d;
      return Array.isArray(W) ? (
        /* c8 ignore next 1 */
        ee(W)
      ) : "tokenize" in W ? (
        // Looks like a construct.
        ee([
          /** @type {Construct} */
          W
        ])
      ) : re(W);
      function re(ie) {
        return qe;
        function qe(Ee) {
          const ze = Ee !== null && ie[Ee], Me = Ee !== null && ie.null, at = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(ze) ? ze : ze ? [ze] : [],
            ...Array.isArray(Me) ? Me : Me ? [Me] : []
          ];
          return ee(at)(Ee);
        }
      }
      function ee(ie) {
        return $ = ie, q = 0, ie.length === 0 ? N : g(ie[q]);
      }
      function g(ie) {
        return qe;
        function qe(Ee) {
          return d = R(), X = ie, ie.partial || (u.currentConstruct = ie), ie.name && u.parser.constructs.disable.null.includes(ie.name) ? Pe() : ie.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            L ? Object.assign(Object.create(u), L) : u,
            s,
            le,
            Pe
          )(Ee);
        }
      }
      function le(ie) {
        return P(X, d), B;
      }
      function Pe(ie) {
        return d.restore(), ++q < $.length ? g($[q]) : N;
      }
    }
  }
  function j(P, L) {
    P.resolveAll && !o.includes(P) && o.push(P), P.resolve && pe(u.events, L, u.events.length - L, P.resolve(u.events.slice(L), u)), P.resolveTo && (u.events = P.resolveTo(u.events, u));
  }
  function R() {
    const P = m(), L = u.previous, U = u.currentConstruct, W = u.events.length, B = Array.from(a);
    return {
      from: W,
      restore: N
    };
    function N() {
      r = P, u.previous = L, u.currentConstruct = U, u.events.length = W, a = B, x();
    }
  }
  function x() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function gs(e, n) {
  const t = n.start._index, r = n.start._bufferIndex, i = n.end._index, o = n.end._bufferIndex;
  let l;
  if (t === i)
    l = [e[t].slice(r, o)];
  else {
    if (l = e.slice(t, i), r > -1) {
      const a = l[0];
      typeof a == "string" ? l[0] = a.slice(r) : l.shift();
    }
    o > 0 && l.push(e[i].slice(0, o));
  }
  return l;
}
function ys(e, n) {
  let t = -1;
  const r = [];
  let i;
  for (; ++t < e.length; ) {
    const o = e[t];
    let l;
    if (typeof o == "string")
      l = o;
    else switch (o) {
      case -5: {
        l = "\r";
        break;
      }
      case -4: {
        l = `
`;
        break;
      }
      case -3: {
        l = `\r
`;
        break;
      }
      case -2: {
        l = n ? " " : "	";
        break;
      }
      case -1: {
        if (!n && i) continue;
        l = " ";
        break;
      }
      default:
        l = String.fromCharCode(o);
    }
    i = o === -2, r.push(l);
  }
  return r.join("");
}
function ks(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Jr([ds, ...(e || {}).extensions || []])
    ),
    content: i(_o),
    defined: [],
    document: i(zo),
    flow: i(Ja),
    lazy: {},
    string: i(ns),
    text: i(rs)
  };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return ms(r, o, a);
    }
  }
}
function xs(e) {
  for (; !ii(e); )
    ;
  return e;
}
const Wn = /[\0\t\n\r]/g;
function bs() {
  let e = 1, n = "", t = !0, r;
  return i;
  function i(o, l, a) {
    const s = [];
    let u, h, c, p, f;
    for (o = n + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), c = 0, n = "", t && (o.charCodeAt(0) === 65279 && c++, t = void 0); c < o.length; ) {
      if (Wn.lastIndex = c, u = Wn.exec(o), p = u && u.index !== void 0 ? u.index : o.length, f = o.charCodeAt(p), !u) {
        n = o.slice(c);
        break;
      }
      if (f === 10 && c === p && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), c < p && (s.push(o.slice(c, p)), e += p - c), f) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (h = Math.ceil(e / 4) * 4, s.push(-2); e++ < h; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      c = p + 1;
    }
    return a && (r && s.push(-5), n && s.push(n), s.push(null)), s;
  }
}
const Cs = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function ws(e) {
  return e.replace(Cs, Ss);
}
function Ss(e, n, t) {
  if (n)
    return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1), o = i === 120 || i === 88;
    return ei(t.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return cn(t) || e;
}
const ci = {}.hasOwnProperty;
function Es(e, n, t) {
  return n && typeof n == "object" && (t = n, n = void 0), vs(t)(xs(ks(t).document().write(bs()(e, n, !0))));
}
function vs(e) {
  const n = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(En),
      autolinkProtocol: R,
      autolinkEmail: R,
      atxHeading: o(Cn),
      blockQuote: o(Me),
      characterEscape: R,
      characterReference: R,
      codeFenced: o(at),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: o(at, l),
      codeText: o(Zi, l),
      codeTextData: R,
      data: R,
      codeFlowValue: R,
      definition: o(Qi),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: o(Ji),
      hardBreakEscape: o(wn),
      hardBreakTrailing: o(wn),
      htmlFlow: o(Sn, l),
      htmlFlowData: R,
      htmlText: o(Sn, l),
      htmlTextData: R,
      image: o(el),
      label: l,
      link: o(En),
      listItem: o(tl),
      listItemValue: p,
      listOrdered: o(vn, c),
      listUnordered: o(vn),
      paragraph: o(nl),
      reference: g,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: o(Cn),
      strong: o(rl),
      thematicBreak: o(ll)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: D,
      autolink: s(),
      autolinkEmail: ze,
      autolinkProtocol: Ee,
      blockQuote: s(),
      characterEscapeValue: x,
      characterReferenceMarkerHexadecimal: Pe,
      characterReferenceMarkerNumeric: Pe,
      characterReferenceValue: ie,
      characterReference: qe,
      codeFenced: s(w),
      codeFencedFence: y,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: m,
      codeFlowValue: x,
      codeIndented: s(k),
      codeText: s(B),
      codeTextData: x,
      data: x,
      definition: s(),
      definitionDestinationString: T,
      definitionLabelString: A,
      definitionTitleString: S,
      emphasis: s(),
      hardBreakEscape: s(L),
      hardBreakTrailing: s(L),
      htmlFlow: s(U),
      htmlFlowData: x,
      htmlText: s(W),
      htmlTextData: x,
      image: s($),
      label: X,
      labelText: q,
      lineEnding: P,
      link: s(N),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: le,
      resourceDestinationString: d,
      resourceTitleString: re,
      resource: ee,
      setextHeading: s(j),
      setextHeadingLineSequence: _,
      setextHeadingText: b,
      strong: s(),
      thematicBreak: s()
    }
  };
  hi(n, (e || {}).mdastExtensions || []);
  const t = {};
  return r;
  function r(C) {
    let I = {
      type: "root",
      children: []
    };
    const z = {
      stack: [I],
      tokenStack: [],
      config: n,
      enter: a,
      exit: u,
      buffer: l,
      resume: h,
      data: t
    }, H = [];
    let G = -1;
    for (; ++G < C.length; )
      if (C[G][1].type === "listOrdered" || C[G][1].type === "listUnordered")
        if (C[G][0] === "enter")
          H.push(G);
        else {
          const me = H.pop();
          G = i(C, me, G);
        }
    for (G = -1; ++G < C.length; ) {
      const me = n[C[G][0]];
      ci.call(me, C[G][1].type) && me[C[G][1].type].call(Object.assign({
        sliceSerialize: C[G][2].sliceSerialize
      }, z), C[G][1]);
    }
    if (z.tokenStack.length > 0) {
      const me = z.tokenStack[z.tokenStack.length - 1];
      (me[1] || Gn).call(z, void 0, me[0]);
    }
    for (I.position = {
      start: ve(C.length > 0 ? C[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: ve(C.length > 0 ? C[C.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, G = -1; ++G < n.transforms.length; )
      I = n.transforms[G](I) || I;
    return I;
  }
  function i(C, I, z) {
    let H = I - 1, G = -1, me = !1, Le, xe, We, Ge;
    for (; ++H <= z; ) {
      const he = C[H];
      switch (he[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          he[0] === "enter" ? G++ : G--, Ge = void 0;
          break;
        }
        case "lineEndingBlank": {
          he[0] === "enter" && (Le && !Ge && !G && !We && (We = H), Ge = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Ge = void 0;
      }
      if (!G && he[0] === "enter" && he[1].type === "listItemPrefix" || G === -1 && he[0] === "exit" && (he[1].type === "listUnordered" || he[1].type === "listOrdered")) {
        if (Le) {
          let Re = H;
          for (xe = void 0; Re--; ) {
            const be = C[Re];
            if (be[1].type === "lineEnding" || be[1].type === "lineEndingBlank") {
              if (be[0] === "exit") continue;
              xe && (C[xe][1].type = "lineEndingBlank", me = !0), be[1].type = "lineEnding", xe = Re;
            } else if (!(be[1].type === "linePrefix" || be[1].type === "blockQuotePrefix" || be[1].type === "blockQuotePrefixWhitespace" || be[1].type === "blockQuoteMarker" || be[1].type === "listItemIndent")) break;
          }
          We && (!xe || We < xe) && (Le._spread = !0), Le.end = Object.assign({}, xe ? C[xe][1].start : he[1].end), C.splice(xe || H, 0, ["exit", Le, he[2]]), H++, z++;
        }
        if (he[1].type === "listItemPrefix") {
          const Re = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, he[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Le = Re, C.splice(H, 0, ["enter", Re, he[2]]), H++, z++, We = void 0, Ge = !0;
        }
      }
    }
    return C[I][1]._spread = me, z;
  }
  function o(C, I) {
    return z;
    function z(H) {
      a.call(this, C(H), H), I && I.call(this, H);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(C, I, z) {
    this.stack[this.stack.length - 1].children.push(C), this.stack.push(C), this.tokenStack.push([I, z || void 0]), C.position = {
      start: ve(I.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(C) {
    return I;
    function I(z) {
      C && C.call(this, z), u.call(this, z);
    }
  }
  function u(C, I) {
    const z = this.stack.pop(), H = this.tokenStack.pop();
    if (H)
      H[0].type !== C.type && (I ? I.call(this, C, H[0]) : (H[1] || Gn).call(this, C, H[0]));
    else throw new Error("Cannot close `" + C.type + "` (" + Je({
      start: C.start,
      end: C.end
    }) + "): it’s not open");
    z.position.end = ve(C.end);
  }
  function h() {
    return un(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(C) {
    if (this.data.expectingFirstListItemValue) {
      const I = this.stack[this.stack.length - 2];
      I.start = Number.parseInt(this.sliceSerialize(C), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function f() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.lang = C;
  }
  function m() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.meta = C;
  }
  function y() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function w() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function k() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C.replace(/(\r?\n|\r)$/g, "");
  }
  function A(C) {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = I, z.identifier = ge(this.sliceSerialize(C)).toLowerCase();
  }
  function S() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = C;
  }
  function T() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = C;
  }
  function D(C) {
    const I = this.stack[this.stack.length - 1];
    if (!I.depth) {
      const z = this.sliceSerialize(C).length;
      I.depth = z;
    }
  }
  function b() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function _(C) {
    const I = this.stack[this.stack.length - 1];
    I.depth = this.sliceSerialize(C).codePointAt(0) === 61 ? 1 : 2;
  }
  function j() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function R(C) {
    const z = this.stack[this.stack.length - 1].children;
    let H = z[z.length - 1];
    (!H || H.type !== "text") && (H = il(), H.position = {
      start: ve(C.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, z.push(H)), this.stack.push(H);
  }
  function x(C) {
    const I = this.stack.pop();
    I.value += this.sliceSerialize(C), I.position.end = ve(C.end);
  }
  function P(C) {
    const I = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const z = I.children[I.children.length - 1];
      z.position.end = ve(C.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && n.canContainEols.includes(I.type) && (R.call(this, C), x.call(this, C));
  }
  function L() {
    this.data.atHardBreak = !0;
  }
  function U() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C;
  }
  function W() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C;
  }
  function B() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C;
  }
  function N() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      C.type += "Reference", C.referenceType = I, delete C.url, delete C.title;
    } else
      delete C.identifier, delete C.label;
    this.data.referenceType = void 0;
  }
  function $() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      C.type += "Reference", C.referenceType = I, delete C.url, delete C.title;
    } else
      delete C.identifier, delete C.label;
    this.data.referenceType = void 0;
  }
  function q(C) {
    const I = this.sliceSerialize(C), z = this.stack[this.stack.length - 2];
    z.label = ws(I), z.identifier = ge(I).toLowerCase();
  }
  function X() {
    const C = this.stack[this.stack.length - 1], I = this.resume(), z = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, z.type === "link") {
      const H = C.children;
      z.children = H;
    } else
      z.alt = I;
  }
  function d() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = C;
  }
  function re() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = C;
  }
  function ee() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = "collapsed";
  }
  function le(C) {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = I, z.identifier = ge(this.sliceSerialize(C)).toLowerCase(), this.data.referenceType = "full";
  }
  function Pe(C) {
    this.data.characterReferenceType = C.type;
  }
  function ie(C) {
    const I = this.sliceSerialize(C), z = this.data.characterReferenceType;
    let H;
    z ? (H = ei(I, z === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : H = cn(I);
    const G = this.stack[this.stack.length - 1];
    G.value += H;
  }
  function qe(C) {
    const I = this.stack.pop();
    I.position.end = ve(C.end);
  }
  function Ee(C) {
    x.call(this, C);
    const I = this.stack[this.stack.length - 1];
    I.url = this.sliceSerialize(C);
  }
  function ze(C) {
    x.call(this, C);
    const I = this.stack[this.stack.length - 1];
    I.url = "mailto:" + this.sliceSerialize(C);
  }
  function Me() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function at() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Zi() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Qi() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Ji() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Cn() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function wn() {
    return {
      type: "break"
    };
  }
  function Sn() {
    return {
      type: "html",
      value: ""
    };
  }
  function el() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function En() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function vn(C) {
    return {
      type: "list",
      ordered: C.type === "listOrdered",
      start: null,
      spread: C._spread,
      children: []
    };
  }
  function tl(C) {
    return {
      type: "listItem",
      spread: C._spread,
      checked: null,
      children: []
    };
  }
  function nl() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function rl() {
    return {
      type: "strong",
      children: []
    };
  }
  function il() {
    return {
      type: "text",
      value: ""
    };
  }
  function ll() {
    return {
      type: "thematicBreak"
    };
  }
}
function ve(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function hi(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? hi(e, r) : As(e, r);
  }
}
function As(e, n) {
  let t;
  for (t in n)
    if (ci.call(n, t))
      switch (t) {
        case "canContainEols": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "transforms": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = n[t];
          r && Object.assign(e[t], r);
          break;
        }
      }
}
function Gn(e, n) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Je({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + n.type + "`, " + Je({
    start: n.start,
    end: n.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + Je({
    start: n.start,
    end: n.end
  }) + ") is still open");
}
function Is(e) {
  const n = this;
  n.parser = t;
  function t(r) {
    return Es(r, {
      ...n.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: n.data("micromarkExtensions") || [],
      mdastExtensions: n.data("fromMarkdownExtensions") || []
    });
  }
}
function Ts(e, n) {
  const t = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(n), !0)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Ps(e, n) {
  const t = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(n, t), [e.applyData(n, t), { type: "text", value: `
` }];
}
function Ls(e, n) {
  const t = n.value ? n.value + `
` : "", r = {}, i = n.lang ? n.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let o = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: t }]
  };
  return n.meta && (o.data = { meta: n.meta }), e.patch(n, o), o = e.applyData(n, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(n, o), o;
}
function Ds(e, n) {
  const t = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Fs(e, n) {
  const t = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function _s(e, n) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(n.identifier).toUpperCase(), i = $e(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let l, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = o + 1, a += 1, e.footnoteCounts.set(r, a);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + t + "fn-" + i,
      id: t + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(l) }]
  };
  e.patch(n, s);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [s]
  };
  return e.patch(n, u), e.applyData(n, u);
}
function Ns(e, n) {
  const t = {
    type: "element",
    tagName: "h" + n.depth,
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function zs(e, n) {
  if (e.options.allowDangerousHtml) {
    const t = { type: "raw", value: n.value };
    return e.patch(n, t), e.applyData(n, t);
  }
}
function fi(e, n) {
  const t = n.referenceType;
  let r = "]";
  if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference")
    return [{ type: "text", value: "![" + n.alt + r }];
  const i = e.all(n), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function Ms(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return fi(e, n);
  const i = { src: $e(r.url || ""), alt: n.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(n, o), e.applyData(n, o);
}
function Rs(e, n) {
  const t = { src: $e(n.url) };
  n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: "element", tagName: "img", properties: t, children: [] };
  return e.patch(n, r), e.applyData(n, r);
}
function Bs(e, n) {
  const t = { type: "text", value: n.value.replace(/\r?\n|\r/g, " ") };
  e.patch(n, t);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [t]
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Os(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return fi(e, n);
  const i = { href: $e(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(n)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function Hs(e, n) {
  const t = { href: $e(n.url) };
  n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: t,
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function js(e, n, t) {
  const r = e.all(n), i = t ? Vs(t) : pi(n), o = {}, l = [];
  if (typeof n.checked == "boolean") {
    const h = r[0];
    let c;
    h && h.type === "element" && h.tagName === "p" ? c = h : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: n.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const h = r[a];
    (i || a !== 0 || h.type !== "element" || h.tagName !== "p") && l.push({ type: "text", value: `
` }), h.type === "element" && h.tagName === "p" && !i ? l.push(...h.children) : l.push(h);
  }
  const s = r[r.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && l.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: o, children: l };
  return e.patch(n, u), e.applyData(n, u);
}
function Vs(e) {
  let n = !1;
  if (e.type === "list") {
    n = e.spread || !1;
    const t = e.children;
    let r = -1;
    for (; !n && ++r < t.length; )
      n = pi(t[r]);
  }
  return n;
}
function pi(e) {
  const n = e.spread;
  return n ?? e.children.length > 1;
}
function Us(e, n) {
  const t = {}, r = e.all(n);
  let i = -1;
  for (typeof n.start == "number" && n.start !== 1 && (t.start = n.start); ++i < r.length; ) {
    const l = r[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      t.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: n.ordered ? "ol" : "ul",
    properties: t,
    children: e.wrap(r, !0)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function $s(e, n) {
  const t = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function qs(e, n) {
  const t = { type: "root", children: e.wrap(e.all(n)) };
  return e.patch(n, t), e.applyData(n, t);
}
function Ws(e, n) {
  const t = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Gs(e, n) {
  const t = e.all(n), r = t.shift(), i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(n.children[0], l), i.push(l);
  }
  if (t.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(t, !0)
    }, a = ln(n.children[1]), s = Wr(n.children[n.children.length - 1]);
    a && s && (l.position = { start: a, end: s }), i.push(l);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function Ks(e, n, t) {
  const r = t ? t.children : void 0, o = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td", l = t && t.type === "table" ? t.align : void 0, a = l ? l.length : n.children.length;
  let s = -1;
  const u = [];
  for (; ++s < a; ) {
    const c = n.children[s], p = {}, f = l ? l[s] : void 0;
    f && (p.align = f);
    let m = { type: "element", tagName: o, properties: p, children: [] };
    c && (m.children = e.all(c), e.patch(c, m), m = e.applyData(c, m)), u.push(m);
  }
  const h = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(n, h), e.applyData(n, h);
}
function Xs(e, n) {
  const t = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Kn = 9, Xn = 32;
function Ys(e) {
  const n = String(e), t = /\r?\n|\r/g;
  let r = t.exec(n), i = 0;
  const o = [];
  for (; r; )
    o.push(
      Yn(n.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = t.exec(n);
  return o.push(Yn(n.slice(i), i > 0, !1)), o.join("");
}
function Yn(e, n, t) {
  let r = 0, i = e.length;
  if (n) {
    let o = e.codePointAt(r);
    for (; o === Kn || o === Xn; )
      r++, o = e.codePointAt(r);
  }
  if (t) {
    let o = e.codePointAt(i - 1);
    for (; o === Kn || o === Xn; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Zs(e, n) {
  const t = { type: "text", value: Ys(String(n.value)) };
  return e.patch(n, t), e.applyData(n, t);
}
function Qs(e, n) {
  const t = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Js = {
  blockquote: Ts,
  break: Ps,
  code: Ls,
  delete: Ds,
  emphasis: Fs,
  footnoteReference: _s,
  heading: Ns,
  html: zs,
  imageReference: Ms,
  image: Rs,
  inlineCode: Bs,
  linkReference: Os,
  link: Hs,
  listItem: js,
  list: Us,
  paragraph: $s,
  // @ts-expect-error: root is different, but hard to type.
  root: qs,
  strong: Ws,
  table: Gs,
  tableCell: Xs,
  tableRow: Ks,
  text: Zs,
  thematicBreak: Qs,
  toml: st,
  yaml: st,
  definition: st,
  footnoteDefinition: st
};
function st() {
}
const di = -1, Et = 0, tt = 1, yt = 2, fn = 3, pn = 4, dn = 5, mn = 6, mi = 7, gi = 8, eu = typeof self == "object" ? self : globalThis, Zn = (e, n) => {
  switch (e) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + e);
  }
  return new eu[e](n);
}, tu = (e, n) => {
  const t = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, l] = n[i];
    switch (o) {
      case Et:
      case di:
        return t(l, i);
      case tt: {
        const a = t([], i);
        for (const s of l)
          a.push(r(s));
        return a;
      }
      case yt: {
        const a = t({}, i);
        for (const [s, u] of l)
          a[r(s)] = r(u);
        return a;
      }
      case fn:
        return t(new Date(l), i);
      case pn: {
        const { source: a, flags: s } = l;
        return t(new RegExp(a, s), i);
      }
      case dn: {
        const a = t(/* @__PURE__ */ new Map(), i);
        for (const [s, u] of l)
          a.set(r(s), r(u));
        return a;
      }
      case mn: {
        const a = t(/* @__PURE__ */ new Set(), i);
        for (const s of l)
          a.add(r(s));
        return a;
      }
      case mi: {
        const { name: a, message: s } = l;
        return t(Zn(a, s), i);
      }
      case gi:
        return t(BigInt(l), i);
      case "BigInt":
        return t(Object(BigInt(l)), i);
      case "ArrayBuffer":
        return t(new Uint8Array(l).buffer, l);
      case "DataView": {
        const { buffer: a } = new Uint8Array(l);
        return t(new DataView(a), l);
      }
    }
    return t(Zn(o, l), i);
  };
  return r;
}, Qn = (e) => tu(/* @__PURE__ */ new Map(), e)(0), Be = "", { toString: nu } = {}, { keys: ru } = Object, Qe = (e) => {
  const n = typeof e;
  if (n !== "object" || !e)
    return [Et, n];
  const t = nu.call(e).slice(8, -1);
  switch (t) {
    case "Array":
      return [tt, Be];
    case "Object":
      return [yt, Be];
    case "Date":
      return [fn, Be];
    case "RegExp":
      return [pn, Be];
    case "Map":
      return [dn, Be];
    case "Set":
      return [mn, Be];
    case "DataView":
      return [tt, t];
  }
  return t.includes("Array") ? [tt, t] : t.includes("Error") ? [mi, t] : [yt, t];
}, ut = ([e, n]) => e === Et && (n === "function" || n === "symbol"), iu = (e, n, t, r) => {
  const i = (l, a) => {
    const s = r.push(l) - 1;
    return t.set(a, s), s;
  }, o = (l) => {
    if (t.has(l))
      return t.get(l);
    let [a, s] = Qe(l);
    switch (a) {
      case Et: {
        let h = l;
        switch (s) {
          case "bigint":
            a = gi, h = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            h = null;
            break;
          case "undefined":
            return i([di], l);
        }
        return i([a, h], l);
      }
      case tt: {
        if (s) {
          let p = l;
          return s === "DataView" ? p = new Uint8Array(l.buffer) : s === "ArrayBuffer" && (p = new Uint8Array(l)), i([s, [...p]], l);
        }
        const h = [], c = i([a, h], l);
        for (const p of l)
          h.push(o(p));
        return c;
      }
      case yt: {
        if (s)
          switch (s) {
            case "BigInt":
              return i([s, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([s, l.valueOf()], l);
          }
        if (n && "toJSON" in l)
          return o(l.toJSON());
        const h = [], c = i([a, h], l);
        for (const p of ru(l))
          (e || !ut(Qe(l[p]))) && h.push([o(p), o(l[p])]);
        return c;
      }
      case fn:
        return i([a, l.toISOString()], l);
      case pn: {
        const { source: h, flags: c } = l;
        return i([a, { source: h, flags: c }], l);
      }
      case dn: {
        const h = [], c = i([a, h], l);
        for (const [p, f] of l)
          (e || !(ut(Qe(p)) || ut(Qe(f)))) && h.push([o(p), o(f)]);
        return c;
      }
      case mn: {
        const h = [], c = i([a, h], l);
        for (const p of l)
          (e || !ut(Qe(p))) && h.push(o(p));
        return c;
      }
    }
    const { message: u } = l;
    return i([a, { name: s, message: u }], l);
  };
  return o;
}, Jn = (e, { json: n, lossy: t } = {}) => {
  const r = [];
  return iu(!(n || t), !!n, /* @__PURE__ */ new Map(), r)(e), r;
}, kt = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, n) => n && ("json" in n || "lossy" in n) ? Qn(Jn(e, n)) : structuredClone(e)
) : (e, n) => Qn(Jn(e, n));
function lu(e, n) {
  const t = [{ type: "text", value: "↩" }];
  return n > 1 && t.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(n) }]
  }), t;
}
function ou(e, n) {
  return "Back to reference " + (e + 1) + (n > 1 ? "-" + n : "");
}
function au(e) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", t = e.options.footnoteBackContent || lu, r = e.options.footnoteBackLabel || ou, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const h = e.all(u), c = String(u.identifier).toUpperCase(), p = $e(c.toLowerCase());
    let f = 0;
    const m = [], y = e.footnoteCounts.get(c);
    for (; y !== void 0 && ++f <= y; ) {
      m.length > 0 && m.push({ type: "text", value: " " });
      let A = typeof t == "string" ? t : t(s, f);
      typeof A == "string" && (A = { type: "text", value: A }), m.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + n + "fnref-" + p + (f > 1 ? "-" + f : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, f),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(A) ? A : [A]
      });
    }
    const w = h[h.length - 1];
    if (w && w.type === "element" && w.tagName === "p") {
      const A = w.children[w.children.length - 1];
      A && A.type === "text" ? A.value += " " : w.children.push({ type: "text", value: " " }), w.children.push(...m);
    } else
      h.push(...m);
    const k = {
      type: "element",
      tagName: "li",
      properties: { id: n + "fn-" + p },
      children: e.wrap(h, !0)
    };
    e.patch(u, k), a.push(k);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...kt(l),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const vt = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return hu;
    if (typeof e == "function")
      return At(e);
    if (typeof e == "object")
      return Array.isArray(e) ? su(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        uu(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return cu(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function su(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = vt(e[t]);
  return At(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i)) return !0;
    return !1;
  }
}
function uu(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return At(t);
  function t(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== n[o]) return !1;
    return !0;
  }
}
function cu(e) {
  return At(n);
  function n(t) {
    return t && t.type === e;
  }
}
function At(e) {
  return n;
  function n(t, r, i) {
    return !!(fu(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function hu() {
  return !0;
}
function fu(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const yi = [], pu = !0, Xt = !1, du = "skip";
function ki(e, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
  const o = vt(i), l = r ? -1 : 1;
  a(e, void 0, [])();
  function a(s, u, h) {
    const c = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof c.type == "string") {
      const f = (
        // `hast`
        typeof c.tagName == "string" ? c.tagName : (
          // `xast`
          typeof c.name == "string" ? c.name : void 0
        )
      );
      Object.defineProperty(p, "name", {
        value: "node (" + (s.type + (f ? "<" + f + ">" : "")) + ")"
      });
    }
    return p;
    function p() {
      let f = yi, m, y, w;
      if ((!n || o(s, u, h[h.length - 1] || void 0)) && (f = mu(t(s, h)), f[0] === Xt))
        return f;
      if ("children" in s && s.children) {
        const k = (
          /** @type {UnistParent} */
          s
        );
        if (k.children && f[0] !== du)
          for (y = (r ? k.children.length : -1) + l, w = h.concat(k); y > -1 && y < k.children.length; ) {
            const A = k.children[y];
            if (m = a(A, y, w)(), m[0] === Xt)
              return m;
            y = typeof m[1] == "number" ? m[1] : y + l;
          }
      }
      return f;
    }
  }
}
function mu(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [pu, e] : e == null ? yi : [e];
}
function gn(e, n, t, r) {
  let i, o, l;
  typeof n == "function" && typeof t != "function" ? (o = void 0, l = n, i = t) : (o = n, l = t, i = r), ki(e, o, a, i);
  function a(s, u) {
    const h = u[u.length - 1], c = h ? h.children.indexOf(s) : void 0;
    return l(s, c, h);
  }
}
const Yt = {}.hasOwnProperty, gu = {};
function yu(e, n) {
  const t = n || gu, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = { ...Js, ...t.handlers }, a = {
    all: u,
    applyData: xu,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: l,
    one: s,
    options: t,
    patch: ku,
    wrap: Cu
  };
  return gn(e, function(h) {
    if (h.type === "definition" || h.type === "footnoteDefinition") {
      const c = h.type === "definition" ? r : i, p = String(h.identifier).toUpperCase();
      c.has(p) || c.set(p, h);
    }
  }), a;
  function s(h, c) {
    const p = h.type, f = a.handlers[p];
    if (Yt.call(a.handlers, p) && f)
      return f(a, h, c);
    if (a.options.passThrough && a.options.passThrough.includes(p)) {
      if ("children" in h) {
        const { children: y, ...w } = h, k = kt(w);
        return k.children = a.all(h), k;
      }
      return kt(h);
    }
    return (a.options.unknownHandler || bu)(a, h, c);
  }
  function u(h) {
    const c = [];
    if ("children" in h) {
      const p = h.children;
      let f = -1;
      for (; ++f < p.length; ) {
        const m = a.one(p[f], h);
        if (m) {
          if (f && p[f - 1].type === "break" && (!Array.isArray(m) && m.type === "text" && (m.value = er(m.value)), !Array.isArray(m) && m.type === "element")) {
            const y = m.children[0];
            y && y.type === "text" && (y.value = er(y.value));
          }
          Array.isArray(m) ? c.push(...m) : c.push(m);
        }
      }
    }
    return c;
  }
}
function ku(e, n) {
  e.position && (n.position = io(e));
}
function xu(e, n) {
  let t = n;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (t.type === "element")
        t.tagName = r;
      else {
        const l = "children" in t ? t.children : [t];
        t = { type: "element", tagName: r, properties: {}, children: l };
      }
    t.type === "element" && o && Object.assign(t.properties, kt(o)), "children" in t && t.children && i !== null && i !== void 0 && (t.children = i);
  }
  return t;
}
function bu(e, n) {
  const t = n.data || {}, r = "value" in n && !(Yt.call(t, "hProperties") || Yt.call(t, "hChildren")) ? { type: "text", value: n.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Cu(e, n) {
  const t = [];
  let r = -1;
  for (n && t.push({ type: "text", value: `
` }); ++r < e.length; )
    r && t.push({ type: "text", value: `
` }), t.push(e[r]);
  return n && e.length > 0 && t.push({ type: "text", value: `
` }), t;
}
function er(e) {
  let n = 0, t = e.charCodeAt(n);
  for (; t === 9 || t === 32; )
    n++, t = e.charCodeAt(n);
  return e.slice(n);
}
function tr(e, n) {
  const t = yu(e, n), r = t.one(e, void 0), i = au(t), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function wu(e, n) {
  return e && "run" in e ? async function(t, r) {
    const i = (
      /** @type {HastRoot} */
      tr(t, { file: r, ...n })
    );
    await e.run(i, r);
  } : function(t, r) {
    return (
      /** @type {HastRoot} */
      tr(t, { file: r, ...e || n })
    );
  };
}
function nr(e) {
  if (e)
    throw e;
}
var dt = Object.prototype.hasOwnProperty, xi = Object.prototype.toString, rr = Object.defineProperty, ir = Object.getOwnPropertyDescriptor, lr = function(n) {
  return typeof Array.isArray == "function" ? Array.isArray(n) : xi.call(n) === "[object Array]";
}, or = function(n) {
  if (!n || xi.call(n) !== "[object Object]")
    return !1;
  var t = dt.call(n, "constructor"), r = n.constructor && n.constructor.prototype && dt.call(n.constructor.prototype, "isPrototypeOf");
  if (n.constructor && !t && !r)
    return !1;
  var i;
  for (i in n)
    ;
  return typeof i > "u" || dt.call(n, i);
}, ar = function(n, t) {
  rr && t.name === "__proto__" ? rr(n, t.name, {
    enumerable: !0,
    configurable: !0,
    value: t.newValue,
    writable: !0
  }) : n[t.name] = t.newValue;
}, sr = function(n, t) {
  if (t === "__proto__")
    if (dt.call(n, t)) {
      if (ir)
        return ir(n, t).value;
    } else return;
  return n[t];
}, Su = function e() {
  var n, t, r, i, o, l, a = arguments[0], s = 1, u = arguments.length, h = !1;
  for (typeof a == "boolean" && (h = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s)
    if (n = arguments[s], n != null)
      for (t in n)
        r = sr(a, t), i = sr(n, t), a !== i && (h && i && (or(i) || (o = lr(i))) ? (o ? (o = !1, l = r && lr(r) ? r : []) : l = r && or(r) ? r : {}, ar(a, { name: t, newValue: e(h, l, i) })) : typeof i < "u" && ar(a, { name: t, newValue: i }));
  return a;
};
const Dt = /* @__PURE__ */ qr(Su);
function Zt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Eu() {
  const e = [], n = { run: t, use: r };
  return n;
  function t(...i) {
    let o = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    a(null, ...i);
    function a(s, ...u) {
      const h = e[++o];
      let c = -1;
      if (s) {
        l(s);
        return;
      }
      for (; ++c < i.length; )
        (u[c] === null || u[c] === void 0) && (u[c] = i[c]);
      i = u, h ? vu(h, a)(...u) : l(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), n;
  }
}
function vu(e, n) {
  let t;
  return r;
  function r(...l) {
    const a = e.length > l.length;
    let s;
    a && l.push(i);
    try {
      s = e.apply(this, l);
    } catch (u) {
      const h = (
        /** @type {Error} */
        u
      );
      if (a && t)
        throw h;
      return i(h);
    }
    a || (s && s.then && typeof s.then == "function" ? s.then(o, i) : s instanceof Error ? i(s) : o(s));
  }
  function i(l, ...a) {
    t || (t = !0, n(l, ...a));
  }
  function o(l) {
    i(null, l);
  }
}
const ye = { basename: Au, dirname: Iu, extname: Tu, join: Pu, sep: "/" };
function Au(e, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string');
  ot(e);
  let t = 0, r = -1, i = e.length, o;
  if (n === void 0 || n.length === 0 || n.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          t = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(t, r);
  }
  if (n === e)
    return "";
  let l = -1, a = n.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        t = i + 1;
        break;
      }
    } else
      l < 0 && (o = !0, l = i + 1), a > -1 && (e.codePointAt(i) === n.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = l));
  return t === r ? r = l : r < 0 && (r = e.length), e.slice(t, r);
}
function Iu(e) {
  if (ot(e), e.length === 0)
    return ".";
  let n = -1, t = e.length, r;
  for (; --t; )
    if (e.codePointAt(t) === 47) {
      if (r) {
        n = t;
        break;
      }
    } else r || (r = !0);
  return n < 0 ? e.codePointAt(0) === 47 ? "/" : "." : n === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, n);
}
function Tu(e) {
  ot(e);
  let n = e.length, t = -1, r = 0, i = -1, o = 0, l;
  for (; n--; ) {
    const a = e.codePointAt(n);
    if (a === 47) {
      if (l) {
        r = n + 1;
        break;
      }
      continue;
    }
    t < 0 && (l = !0, t = n + 1), a === 46 ? i < 0 ? i = n : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || t < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === t - 1 && i === r + 1 ? "" : e.slice(i, t);
}
function Pu(...e) {
  let n = -1, t;
  for (; ++n < e.length; )
    ot(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
  return t === void 0 ? "." : Lu(t);
}
function Lu(e) {
  ot(e);
  const n = e.codePointAt(0) === 47;
  let t = Du(e, !n);
  return t.length === 0 && !n && (t = "."), t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"), n ? "/" + t : t;
}
function Du(e, n) {
  let t = "", r = 0, i = -1, o = 0, l = -1, a, s;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      a = e.codePointAt(l);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === l - 1 || o === 1)) if (i !== l - 1 && o === 2) {
        if (t.length < 2 || r !== 2 || t.codePointAt(t.length - 1) !== 46 || t.codePointAt(t.length - 2) !== 46) {
          if (t.length > 2) {
            if (s = t.lastIndexOf("/"), s !== t.length - 1) {
              s < 0 ? (t = "", r = 0) : (t = t.slice(0, s), r = t.length - 1 - t.lastIndexOf("/")), i = l, o = 0;
              continue;
            }
          } else if (t.length > 0) {
            t = "", r = 0, i = l, o = 0;
            continue;
          }
        }
        n && (t = t.length > 0 ? t + "/.." : "..", r = 2);
      } else
        t.length > 0 ? t += "/" + e.slice(i + 1, l) : t = e.slice(i + 1, l), r = l - i - 1;
      i = l, o = 0;
    } else a === 46 && o > -1 ? o++ : o = -1;
  }
  return t;
}
function ot(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Fu = { cwd: _u };
function _u() {
  return "/";
}
function Qt(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Nu(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Qt(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw n.code = "ERR_INVALID_ARG_TYPE", n;
  }
  if (e.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file");
    throw n.code = "ERR_INVALID_URL_SCHEME", n;
  }
  return zu(e);
}
function zu(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const n = e.pathname;
  let t = -1;
  for (; ++t < n.length; )
    if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
      const r = n.codePointAt(t + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(n);
}
const Ft = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class bi {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(n) {
    let t;
    n ? Qt(n) ? t = { path: n } : typeof n == "string" || Mu(n) ? t = { value: n } : t = n : t = {}, this.cwd = "cwd" in t ? "" : Fu.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Ft.length; ) {
      const o = Ft[r];
      o in t && t[o] !== void 0 && t[o] !== null && (this[o] = o === "history" ? [...t[o]] : t[o]);
    }
    let i;
    for (i in t)
      Ft.includes(i) || (this[i] = t[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? ye.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(n) {
    Nt(n, "basename"), _t(n, "basename"), this.path = ye.join(this.dirname || "", n);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? ye.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(n) {
    ur(this.basename, "dirname"), this.path = ye.join(n || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? ye.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(n) {
    if (_t(n, "extname"), ur(this.dirname, "extname"), n) {
      if (n.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (n.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = ye.join(this.dirname, this.stem + (n || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(n) {
    Qt(n) && (n = Nu(n)), Nt(n, "path"), this.path !== n && this.history.push(n);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? ye.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(n) {
    Nt(n, "stem"), _t(n, "stem"), this.path = ye.join(this.dirname || "", n + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(n, t, r) {
    const i = this.message(n, t, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(n, t, r) {
    const i = this.message(n, t, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(n, t, r) {
    const i = new ae(
      // @ts-expect-error: the overloads are fine.
      n,
      t,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(n) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(n || void 0).decode(this.value);
  }
}
function _t(e, n) {
  if (e && e.includes(ye.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + ye.sep + "`"
    );
}
function Nt(e, n) {
  if (!e)
    throw new Error("`" + n + "` cannot be empty");
}
function ur(e, n) {
  if (!e)
    throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function Mu(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Ru = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }
), Bu = {}.hasOwnProperty;
class yn extends Ru {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Eu();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const n = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new yn()
    );
    let t = -1;
    for (; ++t < this.attachers.length; ) {
      const r = this.attachers[t];
      n.use(...r);
    }
    return n.data(Dt(!0, {}, this.namespace)), n;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(n, t) {
    return typeof n == "string" ? arguments.length === 2 ? (Rt("data", this.frozen), this.namespace[n] = t, this) : Bu.call(this.namespace, n) && this.namespace[n] || void 0 : n ? (Rt("data", this.frozen), this.namespace = n, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const n = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [t, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = t.call(n, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(n) {
    this.freeze();
    const t = ct(n), r = this.parser || this.Parser;
    return zt("parse", r), r(String(t), t);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(n, t) {
    const r = this;
    return this.freeze(), zt("process", this.parser || this.Parser), Mt("process", this.compiler || this.Compiler), t ? i(void 0, t) : new Promise(i);
    function i(o, l) {
      const a = ct(n), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(s, a, function(h, c, p) {
        if (h || !c || !p)
          return u(h);
        const f = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), m = r.stringify(f, p);
        ju(m) ? p.value = m : p.result = m, u(
          h,
          /** @type {VFileWithOutput<CompileResult>} */
          p
        );
      });
      function u(h, c) {
        h || !c ? l(h) : o ? o(c) : t(void 0, c);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(n) {
    let t = !1, r;
    return this.freeze(), zt("processSync", this.parser || this.Parser), Mt("processSync", this.compiler || this.Compiler), this.process(n, i), hr("processSync", "process", t), r;
    function i(o, l) {
      t = !0, nr(o), r = l;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(n, t, r) {
    cr(n), this.freeze();
    const i = this.transformers;
    return !r && typeof t == "function" && (r = t, t = void 0), r ? o(void 0, r) : new Promise(o);
    function o(l, a) {
      const s = ct(t);
      i.run(n, s, u);
      function u(h, c, p) {
        const f = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || n
        );
        h ? a(h) : l ? l(f) : r(void 0, f, p);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(n, t) {
    let r = !1, i;
    return this.run(n, t, o), hr("runSync", "run", r), i;
    function o(l, a) {
      nr(l), i = a, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(n, t) {
    this.freeze();
    const r = ct(t), i = this.compiler || this.Compiler;
    return Mt("stringify", i), cr(n), i(n, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(n, ...t) {
    const r = this.attachers, i = this.namespace;
    if (Rt("use", this.frozen), n != null) if (typeof n == "function")
      s(n, t);
    else if (typeof n == "object")
      Array.isArray(n) ? a(n) : l(n);
    else
      throw new TypeError("Expected usable value, not `" + n + "`");
    return this;
    function o(u) {
      if (typeof u == "function")
        s(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [h, ...c] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          s(h, c);
        } else
          l(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function l(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(u.plugins), u.settings && (i.settings = Dt(!0, i.settings, u.settings));
    }
    function a(u) {
      let h = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++h < u.length; ) {
          const c = u[h];
          o(c);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function s(u, h) {
      let c = -1, p = -1;
      for (; ++c < r.length; )
        if (r[c][0] === u) {
          p = c;
          break;
        }
      if (p === -1)
        r.push([u, ...h]);
      else if (h.length > 0) {
        let [f, ...m] = h;
        const y = r[p][1];
        Zt(y) && Zt(f) && (f = Dt(!0, y, f)), r[p] = [u, f, ...m];
      }
    }
  }
}
const Ou = new yn().freeze();
function zt(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Mt(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Rt(e, n) {
  if (n)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function cr(e) {
  if (!Zt(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function hr(e, n, t) {
  if (!t)
    throw new Error(
      "`" + e + "` finished async. Use `" + n + "` instead"
    );
}
function ct(e) {
  return Hu(e) ? e : new bi(e);
}
function Hu(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function ju(e) {
  return typeof e == "string" || Vu(e);
}
function Vu(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Uu = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", fr = [], pr = { allowDangerousHtml: !0 }, $u = /^(https?|ircs?|mailto|xmpp)$/i, qu = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function Wu(e) {
  const n = Gu(e), t = Ku(e);
  return Xu(n.runSync(n.parse(t), t), e);
}
function Gu(e) {
  const n = e.rehypePlugins || fr, t = e.remarkPlugins || fr, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...pr } : pr;
  return Ou().use(Is).use(t).use(wu, r).use(n);
}
function Ku(e) {
  const n = e.children || "", t = new bi();
  return typeof n == "string" && (t.value = n), t;
}
function Xu(e, n) {
  const t = n.allowedElements, r = n.allowElement, i = n.components, o = n.disallowedElements, l = n.skipHtml, a = n.unwrapDisallowed, s = n.urlTransform || Yu;
  for (const h of qu)
    Object.hasOwn(n, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + Uu + h.id, void 0);
  return gn(e, u), uo(e, {
    Fragment: Sr,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: v,
    jsxs: Q,
    passKeys: !0,
    passNode: !0
  });
  function u(h, c, p) {
    if (h.type === "raw" && p && typeof c == "number")
      return l ? p.children.splice(c, 1) : p.children[c] = { type: "text", value: h.value }, c;
    if (h.type === "element") {
      let f;
      for (f in Tt)
        if (Object.hasOwn(Tt, f) && Object.hasOwn(h.properties, f)) {
          const m = h.properties[f], y = Tt[f];
          (y === null || y.includes(h.tagName)) && (h.properties[f] = s(String(m || ""), f, h));
        }
    }
    if (h.type === "element") {
      let f = t ? !t.includes(h.tagName) : o ? o.includes(h.tagName) : !1;
      if (!f && r && typeof c == "number" && (f = !r(h, c, p)), f && p && typeof c == "number")
        return a && h.children ? p.children.splice(c, 1, ...h.children) : p.children.splice(c, 1), c;
    }
  }
}
function Yu(e) {
  const n = e.indexOf(":"), t = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    n === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && n > i || t !== -1 && n > t || r !== -1 && n > r || // It is a protocol, it should be allowed.
    $u.test(e.slice(0, n)) ? e : ""
  );
}
function dr(e, n) {
  const t = String(e);
  if (typeof n != "string")
    throw new TypeError("Expected character");
  let r = 0, i = t.indexOf(n);
  for (; i !== -1; )
    r++, i = t.indexOf(n, i + n.length);
  return r;
}
function Zu(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Qu(e, n, t) {
  const i = vt((t || {}).ignore || []), o = Ju(n);
  let l = -1;
  for (; ++l < o.length; )
    ki(e, "text", a);
  function a(u, h) {
    let c = -1, p;
    for (; ++c < h.length; ) {
      const f = h[c], m = p ? p.children : void 0;
      if (i(
        f,
        m ? m.indexOf(f) : void 0,
        p
      ))
        return;
      p = f;
    }
    if (p)
      return s(u, h);
  }
  function s(u, h) {
    const c = h[h.length - 1], p = o[l][0], f = o[l][1];
    let m = 0;
    const w = c.children.indexOf(u);
    let k = !1, A = [];
    p.lastIndex = 0;
    let S = p.exec(u.value);
    for (; S; ) {
      const T = S.index, D = {
        index: S.index,
        input: S.input,
        stack: [...h, u]
      };
      let b = f(...S, D);
      if (typeof b == "string" && (b = b.length > 0 ? { type: "text", value: b } : void 0), b === !1 ? p.lastIndex = T + 1 : (m !== T && A.push({
        type: "text",
        value: u.value.slice(m, T)
      }), Array.isArray(b) ? A.push(...b) : b && A.push(b), m = T + S[0].length, k = !0), !p.global)
        break;
      S = p.exec(u.value);
    }
    return k ? (m < u.value.length && A.push({ type: "text", value: u.value.slice(m) }), c.children.splice(w, 1, ...A)) : A = [u], w + A.length;
  }
}
function Ju(e) {
  const n = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const t = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < t.length; ) {
    const i = t[r];
    n.push([ec(i[0]), tc(i[1])]);
  }
  return n;
}
function ec(e) {
  return typeof e == "string" ? new RegExp(Zu(e), "g") : e;
}
function tc(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Bt = "phrasing", Ot = ["autolink", "link", "image", "label"];
function nc() {
  return {
    transforms: [uc],
    enter: {
      literalAutolink: ic,
      literalAutolinkEmail: Ht,
      literalAutolinkHttp: Ht,
      literalAutolinkWww: Ht
    },
    exit: {
      literalAutolink: sc,
      literalAutolinkEmail: ac,
      literalAutolinkHttp: lc,
      literalAutolinkWww: oc
    }
  };
}
function rc() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Bt,
        notInConstruct: Ot
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Bt,
        notInConstruct: Ot
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Bt,
        notInConstruct: Ot
      }
    ]
  };
}
function ic(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Ht(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function lc(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function oc(e) {
  this.config.exit.data.call(this, e);
  const n = this.stack[this.stack.length - 1];
  n.type, n.url = "http://" + this.sliceSerialize(e);
}
function ac(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function sc(e) {
  this.exit(e);
}
function uc(e) {
  Qu(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, cc],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), hc]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function cc(e, n, t, r, i) {
  let o = "";
  if (!Ci(i) || (/^w/i.test(n) && (t = n + t, n = "", o = "http://"), !fc(t)))
    return !1;
  const l = pc(t + r);
  if (!l[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: o + n + l[0],
    children: [{ type: "text", value: n + l[0] }]
  };
  return l[1] ? [a, { type: "text", value: l[1] }] : a;
}
function hc(e, n, t, r) {
  return (
    // Not an expected previous character.
    !Ci(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(t) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + n + "@" + t,
      children: [{ type: "text", value: n + "@" + t }]
    }
  );
}
function fc(e) {
  const n = e.split(".");
  return !(n.length < 2 || n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1])) || n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])));
}
function pc(e) {
  const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!n)
    return [e, void 0];
  e = e.slice(0, n.index);
  let t = n[0], r = t.indexOf(")");
  const i = dr(e, "(");
  let o = dr(e, ")");
  for (; r !== -1 && i > o; )
    e += t.slice(0, r + 1), t = t.slice(r + 1), r = t.indexOf(")"), o++;
  return [e, t];
}
function Ci(e, n) {
  const t = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || _e(t) || wt(t)) && // If it’s an email, the previous character should not be a slash.
  (!n || t !== 47);
}
wi.peek = wc;
function dc() {
  this.buffer();
}
function mc(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function gc() {
  this.buffer();
}
function yc(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function kc(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.identifier = ge(
    this.sliceSerialize(e)
  ).toLowerCase(), t.label = n;
}
function xc(e) {
  this.exit(e);
}
function bc(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.identifier = ge(
    this.sliceSerialize(e)
  ).toLowerCase(), t.label = n;
}
function Cc(e) {
  this.exit(e);
}
function wc() {
  return "[";
}
function wi(e, n, t, r) {
  const i = t.createTracker(r);
  let o = i.move("[^");
  const l = t.enter("footnoteReference"), a = t.enter("reference");
  return o += i.move(
    t.safe(t.associationId(e), { after: "]", before: o })
  ), a(), l(), o += i.move("]"), o;
}
function Sc() {
  return {
    enter: {
      gfmFootnoteCallString: dc,
      gfmFootnoteCall: mc,
      gfmFootnoteDefinitionLabelString: gc,
      gfmFootnoteDefinition: yc
    },
    exit: {
      gfmFootnoteCallString: kc,
      gfmFootnoteCall: xc,
      gfmFootnoteDefinitionLabelString: bc,
      gfmFootnoteDefinition: Cc
    }
  };
}
function Ec(e) {
  let n = !1;
  return e && e.firstLineBlank && (n = !0), {
    handlers: { footnoteDefinition: t, footnoteReference: wi },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function t(r, i, o, l) {
    const a = o.createTracker(l);
    let s = a.move("[^");
    const u = o.enter("footnoteDefinition"), h = o.enter("label");
    return s += a.move(
      o.safe(o.associationId(r), { before: s, after: "]" })
    ), h(), s += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), s += a.move(
      (n ? `
` : " ") + o.indentLines(
        o.containerFlow(r, a.current()),
        n ? Si : vc
      )
    )), u(), s;
  }
}
function vc(e, n, t) {
  return n === 0 ? e : Si(e, n, t);
}
function Si(e, n, t) {
  return (t ? "" : "    ") + e;
}
const Ac = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Ei.peek = Dc;
function Ic() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Pc },
    exit: { strikethrough: Lc }
  };
}
function Tc() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Ac
      }
    ],
    handlers: { delete: Ei }
  };
}
function Pc(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Lc(e) {
  this.exit(e);
}
function Ei(e, n, t, r) {
  const i = t.createTracker(r), o = t.enter("strikethrough");
  let l = i.move("~~");
  return l += t.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), o(), l;
}
function Dc() {
  return "~";
}
function Fc(e) {
  return e.length;
}
function _c(e, n) {
  const t = n || {}, r = (t.align || []).concat(), i = t.stringLength || Fc, o = [], l = [], a = [], s = [];
  let u = 0, h = -1;
  for (; ++h < e.length; ) {
    const y = [], w = [];
    let k = -1;
    for (e[h].length > u && (u = e[h].length); ++k < e[h].length; ) {
      const A = Nc(e[h][k]);
      if (t.alignDelimiters !== !1) {
        const S = i(A);
        w[k] = S, (s[k] === void 0 || S > s[k]) && (s[k] = S);
      }
      y.push(A);
    }
    l[h] = y, a[h] = w;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < u; )
      o[c] = mr(r[c]);
  else {
    const y = mr(r);
    for (; ++c < u; )
      o[c] = y;
  }
  c = -1;
  const p = [], f = [];
  for (; ++c < u; ) {
    const y = o[c];
    let w = "", k = "";
    y === 99 ? (w = ":", k = ":") : y === 108 ? w = ":" : y === 114 && (k = ":");
    let A = t.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[c] - w.length - k.length
    );
    const S = w + "-".repeat(A) + k;
    t.alignDelimiters !== !1 && (A = w.length + A + k.length, A > s[c] && (s[c] = A), f[c] = A), p[c] = S;
  }
  l.splice(1, 0, p), a.splice(1, 0, f), h = -1;
  const m = [];
  for (; ++h < l.length; ) {
    const y = l[h], w = a[h];
    c = -1;
    const k = [];
    for (; ++c < u; ) {
      const A = y[c] || "";
      let S = "", T = "";
      if (t.alignDelimiters !== !1) {
        const D = s[c] - (w[c] || 0), b = o[c];
        b === 114 ? S = " ".repeat(D) : b === 99 ? D % 2 ? (S = " ".repeat(D / 2 + 0.5), T = " ".repeat(D / 2 - 0.5)) : (S = " ".repeat(D / 2), T = S) : T = " ".repeat(D);
      }
      t.delimiterStart !== !1 && !c && k.push("|"), t.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(t.alignDelimiters === !1 && A === "") && (t.delimiterStart !== !1 || c) && k.push(" "), t.alignDelimiters !== !1 && k.push(S), k.push(A), t.alignDelimiters !== !1 && k.push(T), t.padding !== !1 && k.push(" "), (t.delimiterEnd !== !1 || c !== u - 1) && k.push("|");
    }
    m.push(
      t.delimiterEnd === !1 ? k.join("").replace(/ +$/, "") : k.join("")
    );
  }
  return m.join(`
`);
}
function Nc(e) {
  return e == null ? "" : String(e);
}
function mr(e) {
  const n = typeof e == "string" ? e.codePointAt(0) : 0;
  return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
}
function zc(e, n, t, r) {
  const i = t.enter("blockquote"), o = t.createTracker(r);
  o.move("> "), o.shift(2);
  const l = t.indentLines(
    t.containerFlow(e, o.current()),
    Mc
  );
  return i(), l;
}
function Mc(e, n, t) {
  return ">" + (t ? "" : " ") + e;
}
function Rc(e, n) {
  return gr(e, n.inConstruct, !0) && !gr(e, n.notInConstruct, !1);
}
function gr(e, n, t) {
  if (typeof n == "string" && (n = [n]), !n || n.length === 0)
    return t;
  let r = -1;
  for (; ++r < n.length; )
    if (e.includes(n[r]))
      return !0;
  return !1;
}
function yr(e, n, t, r) {
  let i = -1;
  for (; ++i < t.unsafe.length; )
    if (t.unsafe[i].character === `
` && Rc(t.stack, t.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Bc(e, n) {
  const t = String(e);
  let r = t.indexOf(n), i = r, o = 0, l = 0;
  if (typeof n != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : o = 1, i = r + n.length, r = t.indexOf(n, i);
  return l;
}
function Oc(e, n) {
  return !!(n.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Hc(e) {
  const n = e.options.fence || "`";
  if (n !== "`" && n !== "~")
    throw new Error(
      "Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return n;
}
function jc(e, n, t, r) {
  const i = Hc(t), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (Oc(e, t)) {
    const c = t.enter("codeIndented"), p = t.indentLines(o, Vc);
    return c(), p;
  }
  const a = t.createTracker(r), s = i.repeat(Math.max(Bc(o, i) + 1, 3)), u = t.enter("codeFenced");
  let h = a.move(s);
  if (e.lang) {
    const c = t.enter(`codeFencedLang${l}`);
    h += a.move(
      t.safe(e.lang, {
        before: h,
        after: " ",
        encode: ["`"],
        ...a.current()
      })
    ), c();
  }
  if (e.lang && e.meta) {
    const c = t.enter(`codeFencedMeta${l}`);
    h += a.move(" "), h += a.move(
      t.safe(e.meta, {
        before: h,
        after: `
`,
        encode: ["`"],
        ...a.current()
      })
    ), c();
  }
  return h += a.move(`
`), o && (h += a.move(o + `
`)), h += a.move(s), u(), h;
}
function Vc(e, n, t) {
  return (t ? "" : "    ") + e;
}
function kn(e) {
  const n = e.options.quote || '"';
  if (n !== '"' && n !== "'")
    throw new Error(
      "Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`"
    );
  return n;
}
function Uc(e, n, t, r) {
  const i = kn(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("definition");
  let a = t.enter("label");
  const s = t.createTracker(r);
  let u = s.move("[");
  return u += s.move(
    t.safe(t.associationId(e), {
      before: u,
      after: "]",
      ...s.current()
    })
  ), u += s.move("]: "), a(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = t.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    t.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (a = t.enter("destinationRaw"), u += s.move(
    t.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...s.current()
    })
  )), a(), e.title && (a = t.enter(`title${o}`), u += s.move(" " + i), u += s.move(
    t.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), a()), l(), u;
}
function $c(e) {
  const n = e.options.emphasis || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return n;
}
function rt(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function xt(e, n, t) {
  const r = Ve(e), i = Ve(n);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    t === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
vi.peek = qc;
function vi(e, n, t, r) {
  const i = $c(t), o = t.enter("emphasis"), l = t.createTracker(r), a = l.move(i);
  let s = l.move(
    t.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    })
  );
  const u = s.charCodeAt(0), h = xt(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  h.inside && (s = rt(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), p = xt(r.after.charCodeAt(0), c, i);
  p.inside && (s = s.slice(0, -1) + rt(c));
  const f = l.move(i);
  return o(), t.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: h.outside
  }, a + s + f;
}
function qc(e, n, t) {
  return t.options.emphasis || "*";
}
function Wc(e, n) {
  let t = !1;
  return gn(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return t = !0, Xt;
  }), !!((!e.depth || e.depth < 3) && un(e) && (n.options.setext || t));
}
function Gc(e, n, t, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = t.createTracker(r);
  if (Wc(e, t)) {
    const h = t.enter("headingSetext"), c = t.enter("phrasing"), p = t.containerPhrasing(e, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return c(), h(), p + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      p.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(p.lastIndexOf("\r"), p.lastIndexOf(`
`)) + 1)
    );
  }
  const l = "#".repeat(i), a = t.enter("headingAtx"), s = t.enter("phrasing");
  o.move(l + " ");
  let u = t.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(u) && (u = rt(u.charCodeAt(0)) + u.slice(1)), u = u ? l + " " + u : l, t.options.closeAtx && (u += " " + l), s(), a(), u;
}
Ai.peek = Kc;
function Ai(e) {
  return e.value || "";
}
function Kc() {
  return "<";
}
Ii.peek = Xc;
function Ii(e, n, t, r) {
  const i = kn(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("image");
  let a = t.enter("label");
  const s = t.createTracker(r);
  let u = s.move("![");
  return u += s.move(
    t.safe(e.alt, { before: u, after: "]", ...s.current() })
  ), u += s.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = t.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    t.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (a = t.enter("destinationRaw"), u += s.move(
    t.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), a(), e.title && (a = t.enter(`title${o}`), u += s.move(" " + i), u += s.move(
    t.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), a()), u += s.move(")"), l(), u;
}
function Xc() {
  return "!";
}
Ti.peek = Yc;
function Ti(e, n, t, r) {
  const i = e.referenceType, o = t.enter("imageReference");
  let l = t.enter("label");
  const a = t.createTracker(r);
  let s = a.move("![");
  const u = t.safe(e.alt, {
    before: s,
    after: "]",
    ...a.current()
  });
  s += a.move(u + "]["), l();
  const h = t.stack;
  t.stack = [], l = t.enter("reference");
  const c = t.safe(t.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return l(), t.stack = h, o(), i === "full" || !u || u !== c ? s += a.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function Yc() {
  return "!";
}
Pi.peek = Zc;
function Pi(e, n, t) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < t.unsafe.length; ) {
    const l = t.unsafe[o], a = t.compilePattern(l);
    let s;
    if (l.atBreak)
      for (; s = a.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return i + r + i;
}
function Zc() {
  return "`";
}
function Li(e, n) {
  const t = un(e);
  return !!(!n.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (t === e.url || "mailto:" + t === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Di.peek = Qc;
function Di(e, n, t, r) {
  const i = kn(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.createTracker(r);
  let a, s;
  if (Li(e, t)) {
    const h = t.stack;
    t.stack = [], a = t.enter("autolink");
    let c = l.move("<");
    return c += l.move(
      t.containerPhrasing(e, {
        before: c,
        after: ">",
        ...l.current()
      })
    ), c += l.move(">"), a(), t.stack = h, c;
  }
  a = t.enter("link"), s = t.enter("label");
  let u = l.move("[");
  return u += l.move(
    t.containerPhrasing(e, {
      before: u,
      after: "](",
      ...l.current()
    })
  ), u += l.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = t.enter("destinationLiteral"), u += l.move("<"), u += l.move(
    t.safe(e.url, { before: u, after: ">", ...l.current() })
  ), u += l.move(">")) : (s = t.enter("destinationRaw"), u += l.move(
    t.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), s(), e.title && (s = t.enter(`title${o}`), u += l.move(" " + i), u += l.move(
    t.safe(e.title, {
      before: u,
      after: i,
      ...l.current()
    })
  ), u += l.move(i), s()), u += l.move(")"), a(), u;
}
function Qc(e, n, t) {
  return Li(e, t) ? "<" : "[";
}
Fi.peek = Jc;
function Fi(e, n, t, r) {
  const i = e.referenceType, o = t.enter("linkReference");
  let l = t.enter("label");
  const a = t.createTracker(r);
  let s = a.move("[");
  const u = t.containerPhrasing(e, {
    before: s,
    after: "]",
    ...a.current()
  });
  s += a.move(u + "]["), l();
  const h = t.stack;
  t.stack = [], l = t.enter("reference");
  const c = t.safe(t.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return l(), t.stack = h, o(), i === "full" || !u || u !== c ? s += a.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function Jc() {
  return "[";
}
function xn(e) {
  const n = e.options.bullet || "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return n;
}
function eh(e) {
  const n = xn(e), t = e.options.bulletOther;
  if (!t)
    return n === "*" ? "-" : "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (t === n)
    throw new Error(
      "Expected `bullet` (`" + n + "`) and `bulletOther` (`" + t + "`) to be different"
    );
  return t;
}
function th(e) {
  const n = e.options.bulletOrdered || ".";
  if (n !== "." && n !== ")")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return n;
}
function _i(e) {
  const n = e.options.rule || "*";
  if (n !== "*" && n !== "-" && n !== "_")
    throw new Error(
      "Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return n;
}
function nh(e, n, t, r) {
  const i = t.enter("list"), o = t.bulletCurrent;
  let l = e.ordered ? th(t) : xn(t);
  const a = e.ordered ? l === "." ? ")" : "." : eh(t);
  let s = n && t.bulletLastUsed ? l === t.bulletLastUsed : !1;
  if (!e.ordered) {
    const h = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      h && (!h.children || !h.children[0]) && // Directly in two other list items:
      t.stack[t.stack.length - 1] === "list" && t.stack[t.stack.length - 2] === "listItem" && t.stack[t.stack.length - 3] === "list" && t.stack[t.stack.length - 4] === "listItem" && // That are each the first child.
      t.indexStack[t.indexStack.length - 1] === 0 && t.indexStack[t.indexStack.length - 2] === 0 && t.indexStack[t.indexStack.length - 3] === 0 && (s = !0), _i(t) === l && h
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const p = e.children[c];
        if (p && p.type === "listItem" && p.children && p.children[0] && p.children[0].type === "thematicBreak") {
          s = !0;
          break;
        }
      }
    }
  }
  s && (l = a), t.bulletCurrent = l;
  const u = t.containerFlow(e, r);
  return t.bulletLastUsed = l, t.bulletCurrent = o, i(), u;
}
function rh(e) {
  const n = e.options.listItemIndent || "one";
  if (n !== "tab" && n !== "one" && n !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return n;
}
function ih(e, n, t, r) {
  const i = rh(t);
  let o = t.bulletCurrent || xn(t);
  n && n.type === "list" && n.ordered && (o = (typeof n.start == "number" && n.start > -1 ? n.start : 1) + (t.options.incrementListMarker === !1 ? 0 : n.children.indexOf(e)) + o);
  let l = o.length + 1;
  (i === "tab" || i === "mixed" && (n && n.type === "list" && n.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const a = t.createTracker(r);
  a.move(o + " ".repeat(l - o.length)), a.shift(l);
  const s = t.enter("listItem"), u = t.indentLines(
    t.containerFlow(e, a.current()),
    h
  );
  return s(), u;
  function h(c, p, f) {
    return p ? (f ? "" : " ".repeat(l)) + c : (f ? o : o + " ".repeat(l - o.length)) + c;
  }
}
function lh(e, n, t, r) {
  const i = t.enter("paragraph"), o = t.enter("phrasing"), l = t.containerPhrasing(e, r);
  return o(), i(), l;
}
const oh = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  vt([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function ah(e, n, t, r) {
  return (e.children.some(function(l) {
    return oh(l);
  }) ? t.containerPhrasing : t.containerFlow).call(t, e, r);
}
function sh(e) {
  const n = e.options.strong || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`"
    );
  return n;
}
Ni.peek = uh;
function Ni(e, n, t, r) {
  const i = sh(t), o = t.enter("strong"), l = t.createTracker(r), a = l.move(i + i);
  let s = l.move(
    t.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    })
  );
  const u = s.charCodeAt(0), h = xt(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  h.inside && (s = rt(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), p = xt(r.after.charCodeAt(0), c, i);
  p.inside && (s = s.slice(0, -1) + rt(c));
  const f = l.move(i + i);
  return o(), t.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: h.outside
  }, a + s + f;
}
function uh(e, n, t) {
  return t.options.strong || "*";
}
function ch(e, n, t, r) {
  return t.safe(e.value, r);
}
function hh(e) {
  const n = e.options.ruleRepetition || 3;
  if (n < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + n + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return n;
}
function fh(e, n, t) {
  const r = (_i(t) + (t.options.ruleSpaces ? " " : "")).repeat(hh(t));
  return t.options.ruleSpaces ? r.slice(0, -1) : r;
}
const zi = {
  blockquote: zc,
  break: yr,
  code: jc,
  definition: Uc,
  emphasis: vi,
  hardBreak: yr,
  heading: Gc,
  html: Ai,
  image: Ii,
  imageReference: Ti,
  inlineCode: Pi,
  link: Di,
  linkReference: Fi,
  list: nh,
  listItem: ih,
  paragraph: lh,
  root: ah,
  strong: Ni,
  text: ch,
  thematicBreak: fh
};
function ph() {
  return {
    enter: {
      table: dh,
      tableData: kr,
      tableHeader: kr,
      tableRow: gh
    },
    exit: {
      codeText: yh,
      table: mh,
      tableData: jt,
      tableHeader: jt,
      tableRow: jt
    }
  };
}
function dh(e) {
  const n = e._align;
  this.enter(
    {
      type: "table",
      align: n.map(function(t) {
        return t === "none" ? null : t;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function mh(e) {
  this.exit(e), this.data.inTable = void 0;
}
function gh(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function jt(e) {
  this.exit(e);
}
function kr(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function yh(e) {
  let n = this.resume();
  this.data.inTable && (n = n.replace(/\\([\\|])/g, kh));
  const t = this.stack[this.stack.length - 1];
  t.type, t.value = n, this.exit(e);
}
function kh(e, n) {
  return n === "|" ? n : e;
}
function xh(e) {
  const n = e || {}, t = n.tableCellPadding, r = n.tablePipeAlign, i = n.stringLength, o = t ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: p,
      table: l,
      tableCell: s,
      tableRow: a
    }
  };
  function l(f, m, y, w) {
    return u(h(f, y, w), f.align);
  }
  function a(f, m, y, w) {
    const k = c(f, y, w), A = u([k]);
    return A.slice(0, A.indexOf(`
`));
  }
  function s(f, m, y, w) {
    const k = y.enter("tableCell"), A = y.enter("phrasing"), S = y.containerPhrasing(f, {
      ...w,
      before: o,
      after: o
    });
    return A(), k(), S;
  }
  function u(f, m) {
    return _c(f, {
      align: m,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: t,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function h(f, m, y) {
    const w = f.children;
    let k = -1;
    const A = [], S = m.enter("table");
    for (; ++k < w.length; )
      A[k] = c(w[k], m, y);
    return S(), A;
  }
  function c(f, m, y) {
    const w = f.children;
    let k = -1;
    const A = [], S = m.enter("tableRow");
    for (; ++k < w.length; )
      A[k] = s(w[k], f, m, y);
    return S(), A;
  }
  function p(f, m, y) {
    let w = zi.inlineCode(f, m, y);
    return y.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function bh() {
  return {
    exit: {
      taskListCheckValueChecked: xr,
      taskListCheckValueUnchecked: xr,
      paragraph: wh
    }
  };
}
function Ch() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Sh }
  };
}
function xr(e) {
  const n = this.stack[this.stack.length - 2];
  n.type, n.checked = e.type === "taskListCheckValueChecked";
}
function wh(e) {
  const n = this.stack[this.stack.length - 2];
  if (n && n.type === "listItem" && typeof n.checked == "boolean") {
    const t = this.stack[this.stack.length - 1];
    t.type;
    const r = t.children[0];
    if (r && r.type === "text") {
      const i = n.children;
      let o = -1, l;
      for (; ++o < i.length; ) {
        const a = i[o];
        if (a.type === "paragraph") {
          l = a;
          break;
        }
      }
      l === t && (r.value = r.value.slice(1), r.value.length === 0 ? t.children.shift() : t.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, t.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function Sh(e, n, t, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = t.createTracker(r);
  o && a.move(l);
  let s = zi.listItem(e, n, t, {
    ...r,
    ...a.current()
  });
  return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(h) {
    return h + l;
  }
}
function Eh() {
  return [
    nc(),
    Sc(),
    Ic(),
    ph(),
    bh()
  ];
}
function vh(e) {
  return {
    extensions: [
      rc(),
      Ec(e),
      Tc(),
      xh(e),
      Ch()
    ]
  };
}
const Ah = {
  tokenize: Fh,
  partial: !0
}, Mi = {
  tokenize: _h,
  partial: !0
}, Ri = {
  tokenize: Nh,
  partial: !0
}, Bi = {
  tokenize: zh,
  partial: !0
}, Ih = {
  tokenize: Mh,
  partial: !0
}, Oi = {
  name: "wwwAutolink",
  tokenize: Lh,
  previous: ji
}, Hi = {
  name: "protocolAutolink",
  tokenize: Dh,
  previous: Vi
}, Se = {
  name: "emailAutolink",
  tokenize: Ph,
  previous: Ui
}, ke = {};
function Th() {
  return {
    text: ke
  };
}
let De = 48;
for (; De < 123; )
  ke[De] = Se, De++, De === 58 ? De = 65 : De === 91 && (De = 97);
ke[43] = Se;
ke[45] = Se;
ke[46] = Se;
ke[95] = Se;
ke[72] = [Se, Hi];
ke[104] = [Se, Hi];
ke[87] = [Se, Oi];
ke[119] = [Se, Oi];
function Ph(e, n, t) {
  const r = this;
  let i, o;
  return l;
  function l(c) {
    return !Jt(c) || !Ui.call(r, r.previous) || bn(r.events) ? t(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return Jt(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), s) : t(c);
  }
  function s(c) {
    return c === 46 ? e.check(Ih, h, u)(c) : c === 45 || c === 95 || oe(c) ? (o = !0, e.consume(c), s) : h(c);
  }
  function u(c) {
    return e.consume(c), i = !0, s;
  }
  function h(c) {
    return o && i && se(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), n(c)) : t(c);
  }
}
function Lh(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !ji.call(r, r.previous) || bn(r.events) ? t(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Ah, e.attempt(Mi, e.attempt(Ri, o), t), t)(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), n(l);
  }
}
function Dh(e, n, t) {
  const r = this;
  let i = "", o = !1;
  return l;
  function l(c) {
    return (c === 72 || c === 104) && Vi.call(r, r.previous) && !bn(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : t(c);
  }
  function a(c) {
    if (se(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), a;
    if (c === 58) {
      const p = i.toLowerCase();
      if (p === "http" || p === "https")
        return e.consume(c), s;
    }
    return t(c);
  }
  function s(c) {
    return c === 47 ? (e.consume(c), o ? u : (o = !0, s)) : t(c);
  }
  function u(c) {
    return c === null || gt(c) || K(c) || _e(c) || wt(c) ? t(c) : e.attempt(Mi, e.attempt(Ri, h), t)(c);
  }
  function h(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), n(c);
  }
}
function Fh(e, n, t) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : t(l);
  }
  function o(l) {
    return l === null ? t(l) : n(l);
  }
}
function _h(e, n, t) {
  let r, i, o;
  return l;
  function l(u) {
    return u === 46 || u === 95 ? e.check(Bi, s, a)(u) : u === null || K(u) || _e(u) || u !== 45 && wt(u) ? s(u) : (o = !0, e.consume(u), l);
  }
  function a(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), l;
  }
  function s(u) {
    return i || r || !o ? t(u) : n(u);
  }
}
function Nh(e, n) {
  let t = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (t++, e.consume(l), i) : l === 41 && r < t ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(Bi, n, o)(l) : l === null || K(l) || _e(l) ? n(l) : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function zh(e, n, t) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || K(a) || _e(a) ? n(a) : t(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || K(a) || _e(a) ? n(a) : r(a);
  }
  function o(a) {
    return se(a) ? l(a) : t(a);
  }
  function l(a) {
    return a === 59 ? (e.consume(a), r) : se(a) ? (e.consume(a), l) : t(a);
  }
}
function Mh(e, n, t) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return oe(o) ? t(o) : n(o);
  }
}
function ji(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || K(e);
}
function Vi(e) {
  return !se(e);
}
function Ui(e) {
  return !(e === 47 || Jt(e));
}
function Jt(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || oe(e);
}
function bn(e) {
  let n = e.length, t = !1;
  for (; n--; ) {
    const r = e[n][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      t = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      t = !1;
      break;
    }
  }
  return e.length > 0 && !t && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), t;
}
const Rh = {
  tokenize: qh,
  partial: !0
};
function Bh() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Vh,
        continuation: {
          tokenize: Uh
        },
        exit: $h
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: jh
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Oh,
        resolveTo: Hh
      }
    }
  };
}
function Oh(e, n, t) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l;
  for (; i--; ) {
    const s = r.events[i][1];
    if (s.type === "labelImage") {
      l = s;
      break;
    }
    if (s.type === "gfmFootnoteCall" || s.type === "labelLink" || s.type === "label" || s.type === "image" || s.type === "link")
      break;
  }
  return a;
  function a(s) {
    if (!l || !l._balanced)
      return t(s);
    const u = ge(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? t(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), n(s));
  }
}
function Hh(e, n) {
  let t = e.length;
  for (; t--; )
    if (e[t][1].type === "labelImage" && e[t][0] === "enter") {
      e[t][1];
      break;
    }
  e[t + 1][1].type = "data", e[t + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[t + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[t + 3][1].end),
    end: Object.assign({}, e[t + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, l = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
  }, a = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[t + 1],
    e[t + 2],
    ["enter", r, n],
    // The `[`
    e[t + 3],
    e[t + 4],
    // The `^`.
    ["enter", i, n],
    ["exit", i, n],
    // Everything in between.
    ["enter", o, n],
    ["enter", l, n],
    ["exit", l, n],
    ["exit", o, n],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, n]
  ];
  return e.splice(t, e.length - t + 1, ...a), e;
}
function jh(e, n, t) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, l;
  return a;
  function a(c) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(c) {
    return c !== 94 ? t(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(c) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      c === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || K(c)
    )
      return t(c);
    if (c === 93) {
      e.exit("chunkString");
      const p = e.exit("gfmFootnoteCallString");
      return i.includes(ge(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), n) : t(c);
    }
    return K(c) || (l = !0), o++, e.consume(c), c === 92 ? h : u;
  }
  function h(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, u) : u(c);
  }
}
function Vh(e, n, t) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, l = 0, a;
  return s;
  function s(m) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(m) {
    return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", h) : t(m);
  }
  function h(m) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      m === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      m === null || m === 91 || K(m)
    )
      return t(m);
    if (m === 93) {
      e.exit("chunkString");
      const y = e.exit("gfmFootnoteDefinitionLabelString");
      return o = ge(r.sliceSerialize(y)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
    }
    return K(m) || (a = !0), l++, e.consume(m), m === 92 ? c : h;
  }
  function c(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), l++, h) : h(m);
  }
  function p(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), i.includes(o) || i.push(o), V(e, f, "gfmFootnoteDefinitionWhitespace")) : t(m);
  }
  function f(m) {
    return n(m);
  }
}
function Uh(e, n, t) {
  return e.check(lt, n, e.attempt(Rh, n, t));
}
function $h(e) {
  e.exit("gfmFootnoteDefinition");
}
function qh(e, n, t) {
  const r = this;
  return V(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], !0).length === 4 ? n(o) : t(o);
  }
}
function Wh(e) {
  let t = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: o,
    resolveAll: i
  };
  return t == null && (t = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(l, a) {
    let s = -1;
    for (; ++s < l.length; )
      if (l[s][0] === "enter" && l[s][1].type === "strikethroughSequenceTemporary" && l[s][1]._close) {
        let u = s;
        for (; u--; )
          if (l[u][0] === "exit" && l[u][1].type === "strikethroughSequenceTemporary" && l[u][1]._open && // If the sizes are the same:
          l[s][1].end.offset - l[s][1].start.offset === l[u][1].end.offset - l[u][1].start.offset) {
            l[s][1].type = "strikethroughSequence", l[u][1].type = "strikethroughSequence";
            const h = {
              type: "strikethrough",
              start: Object.assign({}, l[u][1].start),
              end: Object.assign({}, l[s][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, l[u][1].end),
              end: Object.assign({}, l[s][1].start)
            }, p = [["enter", h, a], ["enter", l[u][1], a], ["exit", l[u][1], a], ["enter", c, a]], f = a.parser.constructs.insideSpan.null;
            f && pe(p, p.length, 0, St(f, l.slice(u + 1, s), a)), pe(p, p.length, 0, [["exit", c, a], ["enter", l[s][1], a], ["exit", l[s][1], a], ["exit", h, a]]), pe(l, u - 1, s - u + 3, p), s = u + p.length - 2;
            break;
          }
      }
    for (s = -1; ++s < l.length; )
      l[s][1].type === "strikethroughSequenceTemporary" && (l[s][1].type = "data");
    return l;
  }
  function o(l, a, s) {
    const u = this.previous, h = this.events;
    let c = 0;
    return p;
    function p(m) {
      return u === 126 && h[h.length - 1][1].type !== "characterEscape" ? s(m) : (l.enter("strikethroughSequenceTemporary"), f(m));
    }
    function f(m) {
      const y = Ve(u);
      if (m === 126)
        return c > 1 ? s(m) : (l.consume(m), c++, f);
      if (c < 2 && !t) return s(m);
      const w = l.exit("strikethroughSequenceTemporary"), k = Ve(m);
      return w._open = !k || k === 2 && !!y, w._close = !y || y === 2 && !!k, a(m);
    }
  }
}
class Gh {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(n, t, r) {
    Kh(this, n, t, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(n) {
    if (this.map.sort(function(o, l) {
      return o[0] - l[0];
    }), this.map.length === 0)
      return;
    let t = this.map.length;
    const r = [];
    for (; t > 0; )
      t -= 1, r.push(n.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), n.length = this.map[t][0];
    r.push(n.slice()), n.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const o of i)
        n.push(o);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function Kh(e, n, t, r) {
  let i = 0;
  if (!(t === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === n) {
        e.map[i][1] += t, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([n, t, r]);
  }
}
function Xh(e, n) {
  let t = !1;
  const r = [];
  for (; n < e.length; ) {
    const i = e[n];
    if (t) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[n + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[n - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (t = !0);
    n += 1;
  }
  return r;
}
function Yh() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Zh,
        resolveAll: Qh
      }
    }
  };
}
function Zh(e, n, t) {
  const r = this;
  let i = 0, o = 0, l;
  return a;
  function a(x) {
    let P = r.events.length - 1;
    for (; P > -1; ) {
      const W = r.events[P][1].type;
      if (W === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      W === "linePrefix") P--;
      else break;
    }
    const L = P > -1 ? r.events[P][1].type : null, U = L === "tableHead" || L === "tableRow" ? b : s;
    return U === b && r.parser.lazy[r.now().line] ? t(x) : U(x);
  }
  function s(x) {
    return e.enter("tableHead"), e.enter("tableRow"), u(x);
  }
  function u(x) {
    return x === 124 || (l = !0, o += 1), h(x);
  }
  function h(x) {
    return x === null ? t(x) : F(x) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), f) : t(x) : O(x) ? V(e, h, "whitespace")(x) : (o += 1, l && (l = !1, i += 1), x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), l = !0, h) : (e.enter("data"), c(x)));
  }
  function c(x) {
    return x === null || x === 124 || K(x) ? (e.exit("data"), h(x)) : (e.consume(x), x === 92 ? p : c);
  }
  function p(x) {
    return x === 92 || x === 124 ? (e.consume(x), c) : c(x);
  }
  function f(x) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? t(x) : (e.enter("tableDelimiterRow"), l = !1, O(x) ? V(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(x) : m(x));
  }
  function m(x) {
    return x === 45 || x === 58 ? w(x) : x === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), y) : D(x);
  }
  function y(x) {
    return O(x) ? V(e, w, "whitespace")(x) : w(x);
  }
  function w(x) {
    return x === 58 ? (o += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(x), e.exit("tableDelimiterMarker"), k) : x === 45 ? (o += 1, k(x)) : x === null || F(x) ? T(x) : D(x);
  }
  function k(x) {
    return x === 45 ? (e.enter("tableDelimiterFiller"), A(x)) : D(x);
  }
  function A(x) {
    return x === 45 ? (e.consume(x), A) : x === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(x), e.exit("tableDelimiterMarker"), S) : (e.exit("tableDelimiterFiller"), S(x));
  }
  function S(x) {
    return O(x) ? V(e, T, "whitespace")(x) : T(x);
  }
  function T(x) {
    return x === 124 ? m(x) : x === null || F(x) ? !l || i !== o ? D(x) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), n(x)) : D(x);
  }
  function D(x) {
    return t(x);
  }
  function b(x) {
    return e.enter("tableRow"), _(x);
  }
  function _(x) {
    return x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), _) : x === null || F(x) ? (e.exit("tableRow"), n(x)) : O(x) ? V(e, _, "whitespace")(x) : (e.enter("data"), j(x));
  }
  function j(x) {
    return x === null || x === 124 || K(x) ? (e.exit("data"), _(x)) : (e.consume(x), x === 92 ? R : j);
  }
  function R(x) {
    return x === 92 || x === 124 ? (e.consume(x), j) : j(x);
  }
}
function Qh(e, n) {
  let t = -1, r = !0, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], a = !1, s = 0, u, h, c;
  const p = new Gh();
  for (; ++t < e.length; ) {
    const f = e[t], m = f[1];
    f[0] === "enter" ? m.type === "tableHead" ? (a = !1, s !== 0 && (br(p, n, s, u, h), h = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, p.add(t, 0, [["enter", u, n]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, c = void 0, o = [0, 0, 0, 0], l = [0, t + 1, 0, 0], a && (a = !1, h = {
      type: "tableBody",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, p.add(t, 0, [["enter", h, n]])), i = m.type === "tableDelimiterRow" ? 2 : h ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], c = ht(p, n, o, i, void 0, c), o = [0, 0, 0, 0]), l[2] = t)) : m.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (l[0] = l[1], c = ht(p, n, o, i, void 0, c)), o = l, l = [o[1], t, 0, 0])) : m.type === "tableHead" ? (a = !0, s = t) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (s = t, o[1] !== 0 ? (l[0] = l[1], c = ht(p, n, o, i, t, c)) : l[1] !== 0 && (c = ht(p, n, l, i, t, c)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (l[3] = t);
  }
  for (s !== 0 && br(p, n, s, u, h), p.consume(n.events), t = -1; ++t < n.events.length; ) {
    const f = n.events[t];
    f[0] === "enter" && f[1].type === "table" && (f[1]._align = Xh(n.events, t));
  }
  return e;
}
function ht(e, n, t, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  t[0] !== 0 && (o.end = Object.assign({}, Oe(n.events, t[0])), e.add(t[0], 0, [["exit", o, n]]));
  const s = Oe(n.events, t[1]);
  if (o = {
    type: l,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(t[1], 0, [["enter", o, n]]), t[2] !== 0) {
    const u = Oe(n.events, t[2]), h = Oe(n.events, t[3]), c = {
      type: a,
      start: Object.assign({}, u),
      end: Object.assign({}, h)
    };
    if (e.add(t[2], 0, [["enter", c, n]]), r !== 2) {
      const p = n.events[t[2]], f = n.events[t[3]];
      if (p[1].end = Object.assign({}, f[1].end), p[1].type = "chunkText", p[1].contentType = "text", t[3] > t[2] + 1) {
        const m = t[2] + 1, y = t[3] - t[2] - 1;
        e.add(m, y, []);
      }
    }
    e.add(t[3] + 1, 0, [["exit", c, n]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, Oe(n.events, i)), e.add(i, 0, [["exit", o, n]]), o = void 0), o;
}
function br(e, n, t, r, i) {
  const o = [], l = Oe(n.events, t);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, n])), r.end = Object.assign({}, l), o.push(["exit", r, n]), e.add(t + 1, 0, o);
}
function Oe(e, n) {
  const t = e[n], r = t[0] === "enter" ? "start" : "end";
  return t[1][r];
}
const Jh = {
  name: "tasklistCheck",
  tokenize: tf
};
function ef() {
  return {
    text: {
      91: Jh
    }
  };
}
function tf(e, n, t) {
  const r = this;
  return i;
  function i(s) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? t(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(s) {
    return K(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : t(s);
  }
  function l(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : t(s);
  }
  function a(s) {
    return F(s) ? n(s) : O(s) ? e.check({
      tokenize: nf
    }, n, t)(s) : t(s);
  }
}
function nf(e, n, t) {
  return V(e, r, "whitespace");
  function r(i) {
    return i === null ? t(i) : n(i);
  }
}
function rf(e) {
  return Jr([
    Th(),
    Bh(),
    Wh(e),
    Yh(),
    ef()
  ]);
}
const lf = {};
function of(e) {
  const n = (
    /** @type {Processor<Root>} */
    this
  ), t = e || lf, r = n.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(rf(t)), o.push(Eh()), l.push(vh(t));
}
const $i = J(({ content: e }) => /* @__PURE__ */ v("div", { className: "elitea-assistant-markdown", children: /* @__PURE__ */ v(Wu, { remarkPlugins: [of], children: e }) }));
$i.displayName = "MarkdownContent";
const af = (e) => {
  if (typeof e == "number") return e < 4102444800 ? e * 1e3 : e;
  if (typeof e == "string") {
    const n = new Date(e);
    return isNaN(n.getTime()) ? 0 : n.getTime();
  }
  return 0;
}, sf = (e) => {
  var r;
  const n = e.sent_to != null ? "user" : "assistant";
  let t = "";
  for (const i of e.message_items ?? []) {
    const o = i.item_type ?? i.type;
    if (o === "text_message" || o === "text") {
      t = ((r = i.item_details) == null ? void 0 : r.content) ?? i.content ?? "";
      break;
    }
  }
  return {
    id: String(e.uuid ?? e.id ?? ""),
    role: n,
    content: t,
    timestamp: af(e.created_at_ts ?? e.created_at)
  };
}, Cr = (e) => (e.message_groups ?? []).map(sf), uf = (e) => new Date(e).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), wr = (e, n) => {
  const { frequency: t, start: r, peak: i, end: o } = n, l = e.createOscillator(), a = e.createGain();
  return l.connect(a), a.connect(e.destination), l.type = "sine", l.frequency.value = t, a.gain.setValueAtTime(0, r), a.gain.linearRampToValueAtTime(0.12, i), a.gain.exponentialRampToValueAtTime(0.01, o), l.start(r), l.stop(o), l;
}, cf = async () => {
  try {
    const e = new AudioContext();
    if (e.state === "suspended" && await e.resume(), e.state !== "running") {
      e.close();
      return;
    }
    const n = e.currentTime;
    wr(e, { frequency: 784, start: n, peak: n + 0.02, end: n + 0.2 });
    const t = wr(e, { frequency: 1047, start: n + 0.12, peak: n + 0.14, end: n + 0.37 });
    t.onended = () => e.close();
  } catch {
  }
}, hf = (e) => {
  if (e.startsWith("/")) return "";
  try {
    return new URL(e).origin;
  } catch {
    return "";
  }
}, qi = J((e) => {
  const { avatar: n, messages: t, isLoading: r } = e, i = we(null), o = we(!1);
  return Ie(() => {
    var a;
    if (t.length === 0) {
      o.current = !1;
      return;
    }
    const l = o.current ? "smooth" : "instant";
    o.current = !0, (a = i.current) == null || a.scrollIntoView({ behavior: l });
  }, [t]), r ? /* @__PURE__ */ v("div", { className: "elitea-assistant-messages", children: Array.from({ length: 3 }).map((l, a) => /* @__PURE__ */ Q(
    "div",
    {
      className: `elitea-assistant-skeleton-row ${a % 2 === 0 ? "elitea-assistant-skeleton-row--left" : "elitea-assistant-skeleton-row--right"}`,
      children: [
        /* @__PURE__ */ Q("div", { className: "elitea-assistant-skeleton-meta", children: [
          /* @__PURE__ */ v("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--avatar" }),
          /* @__PURE__ */ v("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--time" })
        ] }),
        /* @__PURE__ */ v("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--bubble" })
      ]
    },
    a
  )) }) : t.length === 0 ? /* @__PURE__ */ v("div", { className: "elitea-assistant-empty", children: "Send a message to start a conversation" }) : /* @__PURE__ */ Q("div", { className: "elitea-assistant-messages", children: [
    t.map((l) => /* @__PURE__ */ Q(
      "div",
      {
        className: `elitea-assistant-message-wrapper elitea-assistant-message-wrapper--${l.role}`,
        children: [
          /* @__PURE__ */ Q("div", { className: `elitea-assistant-message-meta elitea-assistant-message-meta--${l.role}`, children: [
            l.role === "assistant" && /* @__PURE__ */ v("span", { className: "elitea-assistant-message-avatar elitea-assistant-message-avatar--assistant", children: /* @__PURE__ */ v(en, {}) }),
            /* @__PURE__ */ v("span", { className: "elitea-assistant-message-time", children: uf(l.timestamp) }),
            l.role === "user" && /* @__PURE__ */ v("span", { className: "elitea-assistant-message-avatar elitea-assistant-message-avatar--user", children: n ? /* @__PURE__ */ v(
              "img",
              {
                src: n,
                alt: "User avatar",
                className: "elitea-assistant-avatar-img"
              }
            ) : /* @__PURE__ */ v(Nr, {}) })
          ] }),
          /* @__PURE__ */ Q(
            "div",
            {
              className: `elitea-assistant-message elitea-assistant-message--${l.role}${l.isError ? " elitea-assistant-message--error" : ""}`,
              children: [
                l.content ? l.role === "assistant" ? /* @__PURE__ */ v($i, { content: l.content }) : l.content : l.isStreaming ? /* @__PURE__ */ Q("span", { className: "elitea-assistant-typing-indicator", children: [
                  /* @__PURE__ */ v("span", { className: "elitea-assistant-typing-dot" }),
                  /* @__PURE__ */ v("span", { className: "elitea-assistant-typing-dot" }),
                  /* @__PURE__ */ v("span", { className: "elitea-assistant-typing-dot" })
                ] }) : "",
                l.role === "assistant" && l.content && !l.isStreaming && /* @__PURE__ */ v(Mr, { text: l.content })
              ]
            }
          )
        ]
      },
      l.id
    )),
    /* @__PURE__ */ v("div", { ref: i })
  ] });
});
qi.displayName = "MessageList";
const Wi = J((e) => {
  const { placeholder: n, text: t, onTextChange: r, files: i, onFilesChange: o, onSend: l, expanded: a, disabled: s } = e, u = we(null), [h, c] = ne(0), p = () => {
    const T = t.trim();
    !T && i.length === 0 || (l(T, i.length > 0 ? i : void 0), r(""), o([]));
  }, f = (T) => {
    T.key === "Enter" && !T.shiftKey && (T.preventDefault(), p());
  }, m = () => {
    var T;
    (T = u.current) == null || T.click();
  }, y = (T) => {
    const D = T.target.files;
    D && o([...i, ...Array.from(D)]), c((b) => b + 1);
  }, w = (T) => {
    o(i.filter((D, b) => b !== T));
  }, k = a ? 3 : 2, A = i.slice(0, k), S = i.length - k;
  return /* @__PURE__ */ Q("div", { className: "elitea-assistant-input-area", children: [
    i.length > 0 && /* @__PURE__ */ Q("div", { className: "elitea-assistant-file-list", children: [
      A.map((T, D) => /* @__PURE__ */ v(
        He,
        {
          content: T.name,
          children: /* @__PURE__ */ Q("div", { className: "elitea-assistant-file-chip", children: [
            /* @__PURE__ */ v("span", { className: "elitea-assistant-file-chip-icon", children: /* @__PURE__ */ v(Lr, {}) }),
            /* @__PURE__ */ v("span", { className: "elitea-assistant-file-chip-name", children: T.name }),
            /* @__PURE__ */ v(
              "button",
              {
                className: "elitea-assistant-file-chip-remove",
                onClick: () => w(D),
                "aria-label": `Remove ${T.name}`,
                type: "button",
                children: /* @__PURE__ */ v(bt, {})
              }
            )
          ] })
        },
        D
      )),
      S > 0 && /* @__PURE__ */ Q("div", { className: "elitea-assistant-file-chip elitea-assistant-file-chip--count", children: [
        "+",
        S
      ] })
    ] }),
    /* @__PURE__ */ Q("div", { className: "elitea-assistant-input-row", children: [
      /* @__PURE__ */ v(
        "input",
        {
          ref: u,
          type: "file",
          multiple: !0,
          onChange: y,
          style: { display: "none" }
        },
        h
      ),
      /* @__PURE__ */ v(
        "button",
        {
          className: "elitea-assistant-attach-button",
          onClick: m,
          "aria-label": "Attach file",
          type: "button",
          disabled: s,
          children: /* @__PURE__ */ v(Ar, {})
        }
      ),
      /* @__PURE__ */ v(
        "textarea",
        {
          id: "elitea-assistant-message-input",
          className: "elitea-assistant-input",
          value: t,
          onChange: (T) => r(T.target.value),
          onKeyDown: f,
          placeholder: n,
          rows: 1,
          autoFocus: !0,
          disabled: s
        }
      ),
      /* @__PURE__ */ v(
        "button",
        {
          className: "elitea-assistant-send-button",
          onClick: p,
          disabled: s || !t.trim() && i.length === 0,
          "aria-label": "Send message",
          type: "button",
          children: /* @__PURE__ */ v(_r, {})
        }
      )
    ] })
  ] });
});
Wi.displayName = "MessageInput";
const Gi = Er(null), ff = () => {
  const e = vr(Gi);
  if (!e) throw new Error("useApi must be used within EliteaAssistant");
  return e;
}, pf = () => {
  const [e, n] = ne(!1), [t, r] = ne(!1), i = Z(() => n(!0), []), o = Z(() => n(!1), []), l = Z(() => n((h) => !h), []), a = Z(() => r(!0), []), s = Z(() => r(!1), []), u = Z(() => r((h) => !h), []);
  return {
    isOpen: e,
    isExpanded: t,
    open: i,
    close: o,
    toggle: l,
    expandFullscreen: a,
    collapseFullscreen: s,
    toggleFullscreen: u
  };
}, Ce = {
  ENTER_ROOM: "chat_enter_room",
  LEAVE_ROOM: "chat_leave_room",
  PREDICT: "support_predict",
  PREDICT_RESPONSE: "chat_predict",
  CONVERSATION_NAME_UPDATED: "chat_conversation_name_updated",
  ERROR: "support_error"
}, Ae = {
  START_TASK: "start_task",
  CHUNK: "chunk",
  AI_MESSAGE_CHUNK: "AIMessageChunk",
  AGENT_LLM_CHUNK: "agent_llm_chunk",
  AGENT_RESPONSE: "agent_response",
  PIPELINE_FINISH: "pipeline_finish",
  ERROR: "error",
  AGENT_EXCEPTION: "agent_exception"
}, Ki = Er(null), df = () => vr(Ki), mf = (e) => {
  const [n, t] = ne(null);
  return Ie(() => {
    const r = cl(e.url, {
      path: e.path,
      ...e.token && { extraHeaders: { Authorization: `Bearer ${e.token}` } },
      ...e.withCredentials && { withCredentials: !0 },
      reconnectionDelayMax: 2e3
    });
    return r.on("connect", () => {
      t(r);
    }), r.on("connect_error", () => {
    }), () => {
      r.disconnect();
    };
  }, [e.url, e.path, e.token, e.withCredentials]), n;
}, gf = (e) => {
  const { welcomeMessage: n, supportProjectId: t, initialHistory: r, initialConversation: i, isInitLoading: o } = e, l = we(!1), a = ff(), s = df(), u = Z(
    () => n ? [{ id: "welcome", role: "assistant", content: n, timestamp: Date.now() }] : [],
    [n]
  ), [h, c] = ne([]), [p, f] = ne(""), [m, y] = ne([]), [w, k] = ne(null), [A, S] = ne([]), [T, D] = ne(!1), b = ft(
    () => o || T,
    [o, T]
  ), _ = Z(
    (N) => {
      s == null || s.emit(Ce.ENTER_ROOM, {
        project_id: t,
        conversation_id: N
      });
    },
    [s, t]
  ), j = Z(
    (N) => {
      s == null || s.emit(Ce.LEAVE_ROOM, {
        project_id: t,
        conversation_id: N
      });
    },
    [s, t]
  ), R = Z(
    (N) => {
      s == null || s.emit(Ce.PREDICT, N);
    },
    [s]
  ), x = Z((N) => {
    const { message_id: $, type: q, content: X, response_metadata: d } = N;
    switch (q) {
      case Ae.START_TASK:
        c((re) => [
          ...re,
          {
            id: $,
            role: "assistant",
            content: "",
            timestamp: Date.now(),
            isStreaming: !0
          }
        ]);
        break;
      case Ae.CHUNK:
      case Ae.AI_MESSAGE_CHUNK:
      case Ae.AGENT_LLM_CHUNK:
      case Ae.AGENT_RESPONSE: {
        const re = typeof X == "string" ? X : JSON.stringify(X), ee = !!(d != null && d.finish_reason);
        c(
          (g) => g.map(
            (le) => le.id === $ ? { ...le, content: le.content + re, ...ee && { isStreaming: !1 } } : le
          )
        );
        break;
      }
      case Ae.PIPELINE_FINISH:
        c(
          (re) => re.map((ee) => ee.id === $ && ee.isStreaming ? { ...ee, isStreaming: !1 } : ee)
        );
        break;
      case Ae.ERROR:
      case Ae.AGENT_EXCEPTION:
        c(
          (re) => re.map(
            (ee) => ee.id === $ ? {
              ...ee,
              content: typeof X == "string" ? X : "An error occurred",
              isStreaming: !1,
              isError: !0
            } : ee
          )
        );
        break;
    }
  }, []), P = Z((N) => {
    c(($) => [
      ...$,
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content: N.error || "An error occurred",
        timestamp: Date.now(),
        isError: !0
      }
    ]);
  }, []), L = Z((N) => {
    S(
      ($) => $.map((q) => q.uuid === N.conversation_uuid ? { ...q, name: N.name } : q)
    );
  }, []);
  Ie(() => {
    if (!(o || l.current))
      if (l.current = !0, S(r), r.length > 0 && i) {
        const N = Cr(i);
        c(N.length > 0 ? N : u()), k(r[0].uuid), _(r[0].uuid);
      } else
        c(u());
  }, [o, r, i, u, _]), Ie(() => {
    if (s)
      return s.on(Ce.PREDICT_RESPONSE, x), s.on(Ce.ERROR, P), s.on(Ce.CONVERSATION_NAME_UPDATED, L), () => {
        s.off(Ce.PREDICT_RESPONSE, x), s.off(Ce.ERROR, P), s.off(Ce.CONVERSATION_NAME_UPDATED, L);
      };
  }, [s, x, P, L]);
  const U = Z(
    async (N) => {
      const $ = {
        id: crypto.randomUUID(),
        role: "user",
        content: N,
        timestamp: Date.now()
      };
      c((X) => [...X, $]);
      let q = w;
      if (!q)
        try {
          const X = await a.createConversation();
          q = X.uuid, k(q), S((d) => [X, ...d]), _(q);
        } catch {
          c((X) => [
            ...X,
            {
              id: crypto.randomUUID(),
              role: "assistant",
              content: "Failed to create conversation. Please try again.",
              timestamp: Date.now(),
              isError: !0
            }
          ]);
          return;
        }
      q && R({ conversation_uuid: q, content: N });
    },
    [w, a, _, R]
  ), W = Z(() => {
    w && j(w), k(null), c(u()), f(""), y([]);
  }, [w, j, u]), B = Z(
    async (N) => {
      if (w !== N) {
        w && j(w), k(N), _(N), f(""), y([]), c([]), D(!0);
        try {
          const $ = await a.getConversation(N), q = Cr($);
          c(q.length > 0 ? q : u());
        } catch {
          c(u());
        } finally {
          D(!1);
        }
      }
    },
    [w, j, _, u, a]
  );
  return {
    messages: h,
    inputText: p,
    setInputText: f,
    files: m,
    setFiles: y,
    history: A,
    currentConversationId: w ?? "",
    isLoading: b,
    handleNewChat: W,
    handleSelectConversation: B,
    handleSend: U
  };
}, yf = (e) => {
  const { api: n, title: t, welcomeMessage: r, placeholder: i } = e, [o, l] = ne(null), [a, s] = ne([]), [u, h] = ne(null), [c, p] = ne(!0);
  return Ie(() => {
    let f = !1;
    const m = n.getConfig().then((w) => {
      f || l(w);
    }).catch(() => {
    }), y = n.getConversations().then(async (w) => {
      if (f) return;
      const k = w.items || [];
      if (s(k), k.length > 0)
        try {
          const A = await n.getConversation(k[0].uuid);
          f || h(A);
        } catch {
        }
    }).catch(() => {
    });
    return Promise.all([m, y]).finally(() => {
      f || p(!1);
    }), () => {
      f = !0;
    };
  }, [n]), {
    title: (o == null ? void 0 : o.title) || t,
    welcomeMessage: (o == null ? void 0 : o.welcomeMessage) || r,
    placeholder: (o == null ? void 0 : o.placeholder) || i,
    supportProjectId: (o == null ? void 0 : o.support_project_id) ?? null,
    user: (o == null ? void 0 : o.user) || { id: 0, name: "Guest", avatar: "" },
    history: a,
    lastConversation: u,
    isLoading: c
  };
}, kf = "Hi! Need help? Ask me!", xf = 12e3, bf = 12e3, Cf = (e) => {
  const n = we(null), t = we(null), [r, i] = ne(!1), o = Z(() => {
    i(!1), n.current && (clearTimeout(n.current), n.current = null), t.current && (clearTimeout(t.current), t.current = null);
  }, []), l = Z(() => {
    e || (i(!0), cf(), n.current = setTimeout(o, xf));
  }, [e, o]);
  return Ie(() => (t.current = setTimeout(() => {
    l();
  }, bf), () => {
    n.current && clearTimeout(n.current), t.current && clearTimeout(t.current);
  }), []), Ie(() => {
    e && o();
  }, [e, o]), { showPopup: r, displayPopup: l, hidePopup: o, popupText: kf };
}, Xi = J((e) => {
  const {
    avatar: n,
    title: t,
    placeholder: r,
    welcomeMessage: i,
    supportProjectId: o,
    initialHistory: l,
    lastConversation: a,
    isInitLoading: s,
    onClose: u,
    onExpand: h,
    expanded: c
  } = e, {
    messages: p,
    inputText: f,
    setInputText: m,
    files: y,
    setFiles: w,
    history: k,
    currentConversationId: A,
    isLoading: S,
    handleNewChat: T,
    handleSelectConversation: D,
    handleSend: b
  } = gf({
    welcomeMessage: i,
    supportProjectId: o,
    initialHistory: l,
    initialConversation: a,
    isInitLoading: s
  }), _ = /* @__PURE__ */ Q("div", { className: `elitea-assistant-window${c ? " elitea-assistant-window--expanded" : ""}`, children: [
    /* @__PURE__ */ v(
      Rr,
      {
        title: t,
        expanded: c,
        history: k,
        currentConversationId: A,
        disabled: S,
        onClose: u,
        onExpand: h,
        onNewChat: T,
        onSelectConversation: D
      }
    ),
    /* @__PURE__ */ v(
      qi,
      {
        avatar: n,
        messages: p,
        isLoading: S
      }
    ),
    /* @__PURE__ */ v(
      Wi,
      {
        placeholder: r,
        text: f,
        onTextChange: m,
        files: y,
        onFilesChange: w,
        onSend: b,
        expanded: c,
        disabled: S
      }
    )
  ] });
  return c ? /* @__PURE__ */ v(
    "div",
    {
      className: "elitea-assistant-overlay",
      onClick: h,
      children: /* @__PURE__ */ v("div", { onClick: (j) => j.stopPropagation(), children: _ })
    }
  ) : _;
});
Xi.displayName = "ChatWindow";
const Yi = J((e) => {
  const { message: n, onClose: t } = e;
  return /* @__PURE__ */ Q("div", { className: "elitea-assistant-popup", children: [
    /* @__PURE__ */ v("span", { className: "elitea-assistant-popup-text", children: n }),
    /* @__PURE__ */ v(
      "button",
      {
        className: "elitea-assistant-popup-close",
        onClick: t,
        "aria-label": "Close popup",
        type: "button",
        children: /* @__PURE__ */ v(bt, {})
      }
    )
  ] });
});
Yi.displayName = "PopupMessage";
const wf = {
  buttonBackground: "linear-gradient(50.4deg, #435CFF 0%, #B3BEFF 100%)",
  buttonIcon: "#FFFFFF",
  headerBackground: "rgba(40, 69, 255, 0.25)",
  headerText: "rgba(14, 19, 29, 1)",
  headerActionBackground: "rgba(61, 68, 86, 0.1)",
  headerActionHoverBackground: "rgba(61, 68, 86, 0.2)",
  headerActionActiveBackground: "rgba(61, 68, 86, 0.2)",
  headerActionActiveColor: "rgba(14, 19, 29, 1)",
  headerActionActiveBorder: "rgba(203, 206, 214, 1)",
  headerActionDisabledBackground: "rgba(61, 68, 86, 0.1)",
  headerActionDisabledColor: "rgba(173, 175, 183, 1)",
  headerCloseBackground: "transparent",
  headerCloseHoverBackground: "rgba(61, 68, 86, 0.1)",
  headerCloseHoverColor: "rgba(14, 19, 29, 1)",
  headerCloseActiveBackground: "rgba(61, 68, 86, 0.1)",
  headerCloseActiveColor: "rgba(119, 122, 131, 1)",
  headerCloseDisabledBackground: "transparent",
  headerCloseDisabledColor: "rgba(173, 175, 183, 1)",
  headerCloseIcon: "rgba(119, 122, 131, 1)",
  chatBackground: "rgba(255, 255, 255, 1)",
  userMessageBackground: "rgba(141, 156, 255, 0.2)",
  userMessageText: "rgba(14, 19, 29, 1)",
  userAvatarBackground: "rgba(61, 68, 86, 0.15)",
  userAvatarIcon: "rgba(255, 255, 255, 1)",
  assistantMessageBackground: "#F0F0F5",
  assistantMessageText: "#1A1A2E",
  inputBackground: "rgba(40, 69, 255, 0.15)",
  inputText: "#1A1A2E",
  inputPlaceholder: "rgba(173, 175, 183, 1)",
  inputBorder: "#E0E0E8",
  sendButtonBackground: "rgba(196, 40, 221, 1)",
  sendButtonDisabledBackground: "rgba(173, 175, 183, 1)",
  sendButtonIcon: "rgba(255, 255, 255, 1)",
  chatWindowBorder: "rgba(141, 156, 255, 1)",
  chatWindowShadow: "0 0.5rem 1.875rem rgba(0, 0, 0, 0.12)",
  popupBackground: "linear-gradient(222.3deg, rgba(196, 203, 255, 1) 3.16%, rgba(245, 246, 255, 1) 100%)",
  popupBorder: "linear-gradient(50.63deg, rgba(107, 127, 255, 1) 0%, rgba(135, 151, 255, 0.4) 100%)",
  popupText: "#1A1A2E",
  popupCloseBackground: "rgba(61, 68, 86, 0.15)",
  popupCloseHoverBackground: "rgba(61, 68, 86, 0.25)",
  historyDropdownBorder: "rgba(203, 206, 213, 1)",
  historyDropdownShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.08)",
  historyDropdownHoverBackground: "rgba(61, 68, 86, 0.06)"
}, Sf = {
  buttonBackground: "linear-gradient(50.4deg, #C428DD 0%, #8A1B9E 100%)",
  buttonIcon: "#FFFFFF",
  headerBackground: "rgba(245, 81, 249, 0.3)",
  headerText: "rgba(255, 255, 255, 1)",
  headerActionBackground: "rgba(255, 255, 255, 0.1)",
  headerActionHoverBackground: "rgba(255, 255, 255, 0.2)",
  headerActionActiveBackground: "rgba(14, 19, 29, 1)",
  headerActionActiveColor: "rgba(169, 183, 193, 1)",
  headerActionActiveBorder: "rgba(59, 62, 70, 1)",
  headerActionDisabledBackground: "rgba(255, 255, 255, 0.1)",
  headerActionDisabledColor: "rgba(104, 108, 118, 1)",
  headerCloseBackground: "transparent",
  headerCloseHoverBackground: "rgba(255, 255, 255, 0.1)",
  headerCloseHoverColor: "rgba(255, 255, 255, 1)",
  headerCloseActiveBackground: "rgba(255, 255, 255, 0.2)",
  headerCloseActiveColor: "rgba(169, 183, 193, 1)",
  headerCloseDisabledBackground: "transparent",
  headerCloseDisabledColor: "rgba(104, 108, 118, 1)",
  headerCloseIcon: "rgba(169, 183, 193, 1)",
  chatBackground: "rgba(24, 31, 42, 1)",
  userMessageBackground: "rgba(128, 60, 145, 0.6)",
  userMessageText: "rgba(255, 255, 255, 1)",
  userAvatarBackground: "rgba(255, 255, 255, 0.15)",
  userAvatarIcon: "rgba(255, 255, 255, 1)",
  assistantMessageBackground: "#2A2A40",
  assistantMessageText: "#E0E0E8",
  inputBackground: "rgba(245, 81, 249, 0.1)",
  inputText: "#E0E0E8",
  inputPlaceholder: "rgba(104, 108, 118, 1)",
  inputBorder: "#2A2A40",
  sendButtonBackground: "rgba(106, 232, 250, 1)",
  sendButtonDisabledBackground: "rgba(104, 108, 118, 1)",
  sendButtonIcon: "rgba(14, 19, 29, 1)",
  chatWindowBorder: "rgba(245, 81, 249, 0.6)",
  chatWindowShadow: "0 0 1.875rem rgba(15, 34, 71, 0.3)",
  popupBackground: "linear-gradient(222.3deg, #101721 3.16%, #79237b 100%)",
  popupBorder: "linear-gradient(50.63deg, #c428dd 0%, rgba(196, 40, 221, 0.2) 100%)",
  popupText: "#FFFFFF",
  popupCloseBackground: "rgba(255, 255, 255, 0.2)",
  popupCloseHoverBackground: "rgba(255, 255, 255, 0.35)",
  historyDropdownBorder: "rgba(59, 62, 70, 1)",
  historyDropdownShadow: "0 0.5rem 0.75rem rgba(0, 0, 0, 0.3)",
  historyDropdownHoverBackground: "rgba(255, 255, 255, 0.06)"
}, Ef = {
  light: wf,
  dark: Sf
}, vf = (e, n) => ({
  ...Ef[e],
  ...n
}), Af = (e) => ({
  "--elitea-assistant-button-bg": e.buttonBackground,
  "--elitea-assistant-button-icon": e.buttonIcon,
  "--elitea-assistant-header-bg": e.headerBackground,
  "--elitea-assistant-header-action-bg": e.headerActionBackground,
  "--elitea-assistant-header-action-hover-bg": e.headerActionHoverBackground,
  "--elitea-assistant-header-action-active-bg": e.headerActionActiveBackground,
  "--elitea-assistant-header-action-active-color": e.headerActionActiveColor,
  "--elitea-assistant-header-action-active-border": e.headerActionActiveBorder,
  "--elitea-assistant-header-action-disabled-bg": e.headerActionDisabledBackground,
  "--elitea-assistant-header-action-disabled-color": e.headerActionDisabledColor,
  "--elitea-assistant-header-close-bg": e.headerCloseBackground,
  "--elitea-assistant-header-close-hover-bg": e.headerCloseHoverBackground,
  "--elitea-assistant-header-close-hover-color": e.headerCloseHoverColor,
  "--elitea-assistant-header-close-active-bg": e.headerCloseActiveBackground,
  "--elitea-assistant-header-close-active-color": e.headerCloseActiveColor,
  "--elitea-assistant-header-close-disabled-bg": e.headerCloseDisabledBackground,
  "--elitea-assistant-header-close-disabled-color": e.headerCloseDisabledColor,
  "--elitea-assistant-header-close-icon": e.headerCloseIcon,
  "--elitea-assistant-header-text": e.headerText,
  "--elitea-assistant-chat-bg": e.chatBackground,
  "--elitea-assistant-user-msg-bg": e.userMessageBackground,
  "--elitea-assistant-user-msg-text": e.userMessageText,
  "--elitea-assistant-user-avatar-bg": e.userAvatarBackground,
  "--elitea-assistant-user-avatar-icon": e.userAvatarIcon,
  "--elitea-assistant-bot-msg-bg": e.assistantMessageBackground,
  "--elitea-assistant-bot-msg-text": e.assistantMessageText,
  "--elitea-assistant-input-bg": e.inputBackground,
  "--elitea-assistant-input-text": e.inputText,
  "--elitea-assistant-input-placeholder": e.inputPlaceholder,
  "--elitea-assistant-input-border": e.inputBorder,
  "--elitea-assistant-send-btn-bg": e.sendButtonBackground,
  "--elitea-assistant-send-btn-disabled-bg": e.sendButtonDisabledBackground,
  "--elitea-assistant-send-btn-icon": e.sendButtonIcon,
  "--elitea-assistant-window-border": e.chatWindowBorder,
  "--elitea-assistant-window-shadow": e.chatWindowShadow,
  "--elitea-assistant-popup-bg": e.popupBackground,
  "--elitea-assistant-popup-border": e.popupBorder,
  "--elitea-assistant-popup-text": e.popupText,
  "--elitea-assistant-popup-close-bg": e.popupCloseBackground,
  "--elitea-assistant-popup-close-hover-bg": e.popupCloseHoverBackground,
  "--elitea-assistant-history-dropdown-border": e.historyDropdownBorder,
  "--elitea-assistant-history-dropdown-shadow": e.historyDropdownShadow,
  "--elitea-assistant-history-dropdown-hover-bg": e.historyDropdownHoverBackground
}), If = al((e, n) => {
  const {
    apiUrl: t,
    token: r,
    withCredentials: i = !1,
    socketPath: o = "/socket.io/",
    apiAdapter: l,
    title: a = "Elitea Assistant",
    placeholder: s = "Type a message...",
    welcomeMessage: u = `Hi! I'm your ELITEA Support Assistant.
Ask me anything about ELITEA or report any issues you're experiencing. I have context about your current screen and settings.`,
    position: h = "bottom-right",
    theme: c = "light",
    colors: p
  } = e, f = ft(() => Af(vf(c, p)), [c, p]), m = ft(() => {
    if (l) return l;
    if (t && (r || i)) return hl(t, { token: r, withCredentials: i });
    throw new Error(
      "EliteaAssistant: provide either apiAdapter, or apiUrl with token, or apiUrl with withCredentials"
    );
  }, [l, t, r, i]), y = ft(
    () => ({
      url: t ? hf(t) : "",
      path: o,
      token: r,
      withCredentials: i
    }),
    [t, o, r, i]
  ), w = mf(y), {
    title: k,
    welcomeMessage: A,
    placeholder: S,
    supportProjectId: T,
    user: D,
    history: b,
    lastConversation: _,
    isLoading: j
  } = yf({
    api: m,
    title: a,
    welcomeMessage: u,
    placeholder: s
  }), { isOpen: R, isExpanded: x, open: P, close: L, toggle: U, expandFullscreen: W, collapseFullscreen: B, toggleFullscreen: N } = pf(), { showPopup: $, displayPopup: q, hidePopup: X, popupText: d } = Cf(R);
  return sl(
    n,
    () => ({
      open: P,
      close: L,
      toggle: U,
      expandFullscreen: W,
      collapseFullscreen: B,
      toggleFullscreen: N,
      showPopup: q,
      hidePopup: X,
      isOpen: () => R,
      isExpanded: () => x
    }),
    [
      R,
      x,
      P,
      L,
      U,
      W,
      B,
      N,
      q,
      X
    ]
  ), /* @__PURE__ */ v(Gi.Provider, { value: m, children: /* @__PURE__ */ v(Ki.Provider, { value: w, children: /* @__PURE__ */ Q(
    "div",
    {
      className: `elitea-assistant-container elitea-assistant-container--${h}`,
      style: f,
      children: [
        R && /* @__PURE__ */ v(
          Xi,
          {
            title: k,
            placeholder: S,
            welcomeMessage: A,
            avatar: D.avatar,
            supportProjectId: T,
            initialHistory: b,
            lastConversation: _,
            isInitLoading: j,
            onClose: L,
            expanded: x,
            onExpand: N
          }
        ),
        $ && !R && /* @__PURE__ */ v(
          Yi,
          {
            message: d,
            onClose: X
          }
        ),
        /* @__PURE__ */ v(zr, { onClick: U })
      ]
    }
  ) }) });
});
If.displayName = "EliteaAssistant";
export {
  If as EliteaAssistant,
  hl as createDefaultAdapter
};
//# sourceMappingURL=elitea-assistant.js.map
