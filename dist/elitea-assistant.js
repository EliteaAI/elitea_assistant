(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";.elitea-assistant-container{position:fixed;z-index:2147483647;font-family:Montserrat,sans-serif;font-size:.875rem;line-height:1.5;box-sizing:border-box}.elitea-assistant-container *,.elitea-assistant-container *:before,.elitea-assistant-container *:after{box-sizing:border-box}.elitea-assistant-container--bottom-right{bottom:.75rem;right:1.09375rem}.elitea-assistant-container--bottom-left{bottom:.75rem;left:1.09375rem}.elitea-assistant-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-button-bg);color:var(--elitea-assistant-button-icon);box-shadow:0 .25rem .75rem #00000026;transition:transform .2s ease,box-shadow .2s ease;padding:0}.elitea-assistant-button:hover{transform:scale(1.08);box-shadow:0 .375rem 1.25rem #0003}.elitea-assistant-button svg{width:1.75rem;height:1.75rem;fill:currentColor}.elitea-assistant-window{position:absolute;bottom:0rem;width:28.75rem;height:30rem;border-radius:1rem;overflow:hidden;display:flex;flex-direction:column;box-shadow:var(--elitea-assistant-window-shadow);background:var(--elitea-assistant-chat-bg);border:.0625rem solid var(--elitea-assistant-window-border);animation:elitea-assistant-slide-up .25s ease-out}.elitea-assistant-container--bottom-right .elitea-assistant-window{right:2.875rem}.elitea-assistant-container--bottom-left .elitea-assistant-window{left:2.875rem}@keyframes elitea-assistant-slide-up{0%{opacity:0;transform:translateY(.75rem)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483646;background:#00000080;display:flex;align-items:center;justify-content:center;animation:elitea-assistant-fade-in .2s ease-out}@keyframes elitea-assistant-fade-in{0%{opacity:0}to{opacity:1}}.elitea-assistant-window--expanded{position:static;width:45rem;height:42.375rem;max-width:calc(100vw - 2rem);max-height:calc(100vh - 2rem);animation:elitea-assistant-scale-in .2s ease-out}@media (max-width: 48rem){.elitea-assistant-window--expanded{width:calc(100vw - 2rem);height:calc(100vh - 2rem);border-radius:.75rem}}@keyframes elitea-assistant-scale-in{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.elitea-assistant-header{display:flex;align-items:center;justify-content:space-between;height:3.25rem;padding:0 1rem;background:var(--elitea-assistant-header-bg);color:var(--elitea-assistant-header-text);flex-shrink:0;border-bottom:.0625rem solid var(--elitea-assistant-window-border)}.elitea-assistant-header-left,.elitea-assistant-header-right{display:flex;align-items:center;gap:.5rem}.elitea-assistant-header-title{font-size:.9375rem;font-weight:600;margin:0;white-space:nowrap}.elitea-assistant-header-action{border:.0625rem solid transparent;color:var(--elitea-assistant-header-text);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;width:1.75rem;height:1.75rem;min-width:auto;box-shadow:none;background:var(--elitea-assistant-header-action-bg);transition:background .15s ease,color .15s ease,border-color .15s ease}.elitea-assistant-header-close-action{border:none;color:var(--elitea-assistant-header-close-icon);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;width:1.75rem;height:1.75rem;min-width:auto;background:var(--elitea-assistant-header-close-bg);transition:background .15s ease,color .15s ease}.elitea-assistant-header-close-action:hover{background:var(--elitea-assistant-header-close-hover-bg);color:var(--elitea-assistant-header-close-hover-color)}.elitea-assistant-header-close-action:active{background:var(--elitea-assistant-header-close-active-bg);color:var(--elitea-assistant-header-close-active-color)}.elitea-assistant-header-close-action:disabled{background:var(--elitea-assistant-header-close-disabled-bg);color:var(--elitea-assistant-header-close-disabled-color);cursor:not-allowed}.elitea-assistant-header-action:hover{background:var(--elitea-assistant-header-action-hover-bg)}.elitea-assistant-header-action:active{background:var(--elitea-assistant-header-action-active-bg);color:var(--elitea-assistant-header-action-active-color);border-color:var(--elitea-assistant-header-action-active-border)}.elitea-assistant-header-action svg{width:1rem;height:1rem;fill:currentColor}.elitea-assistant-header-close-action svg{width:1.3rem;height:1.3rem;fill:currentColor}.elitea-assistant-history-wrapper{position:relative}.elitea-assistant-header-action:disabled{background:var(--elitea-assistant-header-action-disabled-bg);color:var(--elitea-assistant-header-action-disabled-color);cursor:not-allowed}.elitea-assistant-header-action:disabled:hover{background:var(--elitea-assistant-header-action-disabled-bg)}.elitea-assistant-history-dropdown{position:absolute;top:calc(100% + .55rem);right:-2.65rem;width:19.125rem;max-height:21.875rem;background:var(--elitea-assistant-chat-bg);border:.0625rem solid var(--elitea-assistant-history-dropdown-border);border-radius:.5rem;box-shadow:var(--elitea-assistant-history-dropdown-shadow);z-index:100;padding:.5rem 0}.elitea-assistant-history-dropdown-scroll{max-height:20.875rem;overflow-y:auto}.elitea-assistant-history-item{display:block;width:100%;padding:.5rem .75rem;border:none;background:none;cursor:pointer;text-align:left;color:var(--elitea-assistant-header-text);font-size:.875rem;font-weight:400;line-height:1.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:background .15s ease}.elitea-assistant-history-item:hover{background:var(--elitea-assistant-history-dropdown-hover-bg)}.elitea-assistant-history-item:disabled{opacity:.45;cursor:default;background:none}.elitea-assistant-messages{flex:1;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:.625rem}.elitea-assistant-message-wrapper{display:flex;flex-direction:column;max-width:80%}.elitea-assistant-message-wrapper--user{align-self:flex-end}.elitea-assistant-message-wrapper--assistant{align-self:flex-start}.elitea-assistant-message-meta{display:flex;align-items:center;gap:.375rem;margin-bottom:.375rem}.elitea-assistant-message-meta--assistant{justify-content:flex-start}.elitea-assistant-message-meta--user{justify-content:flex-end}.elitea-assistant-message-avatar{width:1.5rem;height:1.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.elitea-assistant-message-avatar--assistant{background:var(--elitea-assistant-button-bg);color:var(--elitea-assistant-button-icon)}.elitea-assistant-message-avatar--user{background:var(--elitea-assistant-user-avatar-bg);color:var(--elitea-assistant-user-avatar-icon)}.elitea-assistant-message-avatar svg{width:1.25rem;height:1.25rem;fill:currentColor}.elitea-assistant-message-avatar img{width:100%;height:100%;border-radius:50%;object-fit:cover}.elitea-assistant-message-time{font-size:.75rem;opacity:.6;color:var(--elitea-assistant-bot-msg-text)}.elitea-assistant-message{padding:.625rem .875rem;border-radius:.75rem;word-wrap:break-word;font-weight:400;font-style:Regular;font-size:.875rem;line-height:1.5rem;letter-spacing:0%}.elitea-assistant-message--user{white-space:pre-wrap;background:var(--elitea-assistant-user-msg-bg);color:var(--elitea-assistant-user-msg-text);border-radius:1rem 0rem 1rem 1rem}.elitea-assistant-message--assistant{background:var(--elitea-assistant-bot-msg-bg);color:var(--elitea-assistant-bot-msg-text);border-radius:0 1rem 1rem;position:relative}.elitea-assistant-message--assistant>.elitea-assistant-tooltip-trigger{position:absolute;bottom:.375rem;right:.375rem;opacity:0;transition:opacity .15s ease}.elitea-assistant-message--assistant:hover>.elitea-assistant-tooltip-trigger{opacity:1}.elitea-assistant-message--error{border:1px solid #e53e3e;opacity:.9}@keyframes elitea-assistant-typing-bounce{0%,60%,to{transform:translateY(0);opacity:.25}30%{transform:translateY(-.25rem);opacity:.5}}.elitea-assistant-typing-indicator{display:inline-flex;align-items:center;gap:.1875rem;padding:.125rem 0}.elitea-assistant-typing-dot{width:.25rem;height:.25rem;border-radius:50%;background:var(--elitea-assistant-bot-msg-text);opacity:.25;animation:elitea-assistant-typing-bounce 1.2s ease-in-out infinite}.elitea-assistant-typing-dot:nth-child(2){animation-delay:.15s}.elitea-assistant-typing-dot:nth-child(3){animation-delay:.3s}@keyframes elitea-assistant-shimmer{0%{opacity:.4}50%{opacity:.7}to{opacity:.4}}.elitea-assistant-skeleton-row{display:flex;flex-direction:column;gap:.375rem;max-width:70%}.elitea-assistant-skeleton-row--left{align-self:flex-start}.elitea-assistant-skeleton-row--right{align-self:flex-end}.elitea-assistant-skeleton-meta{display:flex;align-items:center;gap:.375rem}.elitea-assistant-skeleton-row--right .elitea-assistant-skeleton-meta{justify-content:flex-end}.elitea-assistant-skeleton{background:var(--elitea-assistant-bot-msg-bg);border-radius:.5rem;animation:elitea-assistant-shimmer 1.4s ease-in-out infinite}.elitea-assistant-skeleton--avatar{width:1.5rem;height:1.5rem;border-radius:50%;flex-shrink:0}.elitea-assistant-skeleton--time{width:2.5rem;height:.75rem;border-radius:.25rem}.elitea-assistant-skeleton--bubble{width:10rem;height:2.5rem;border-radius:.75rem}.elitea-assistant-skeleton-row--right .elitea-assistant-skeleton--bubble{width:8rem}.elitea-assistant-empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--elitea-assistant-bot-msg-text);opacity:.5;font-size:.8125rem;text-align:center;padding:1.25rem}.elitea-assistant-markdown{overflow-wrap:break-word}.elitea-assistant-markdown>:first-child{margin-top:0}.elitea-assistant-markdown>:last-child{margin-bottom:0}.elitea-assistant-markdown p{margin:.5em 0}.elitea-assistant-markdown h1,.elitea-assistant-markdown h2,.elitea-assistant-markdown h3,.elitea-assistant-markdown h4,.elitea-assistant-markdown h5,.elitea-assistant-markdown h6{margin:.75em 0 .375em;font-weight:600;line-height:1.3}.elitea-assistant-markdown h1{font-size:1.25em}.elitea-assistant-markdown h2{font-size:1.125em}.elitea-assistant-markdown h3{font-size:1em}.elitea-assistant-markdown ul,.elitea-assistant-markdown ol{margin:.5em 0;padding-left:1.5em}.elitea-assistant-markdown li{margin:.25em 0}.elitea-assistant-markdown li>ul,.elitea-assistant-markdown li>ol{margin:.125em 0}.elitea-assistant-markdown code{background:#0000000f;padding:.125em .3em;border-radius:.25em;font-size:.85em;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,monospace}.elitea-assistant-markdown pre{margin:.5em 0;padding:.625em .75em;background:#0000000f;border-radius:.375em;overflow-x:auto}.elitea-assistant-markdown pre code{background:none;padding:0;font-size:.8125em;white-space:pre}.elitea-assistant-markdown blockquote{margin:.5em 0;padding:.25em .75em;border-left:3px solid rgba(0,0,0,.15);opacity:.85}.elitea-assistant-markdown blockquote>:first-child{margin-top:0}.elitea-assistant-markdown blockquote>:last-child{margin-bottom:0}.elitea-assistant-markdown hr{border:none;border-top:1px solid rgba(0,0,0,.1);margin:.75em 0}.elitea-assistant-markdown table{border-collapse:collapse;margin:.5em 0;font-size:.85em;width:100%}.elitea-assistant-markdown th,.elitea-assistant-markdown td{border:1px solid rgba(0,0,0,.1);padding:.375em .625em;text-align:left}.elitea-assistant-markdown th{font-weight:600;background:#00000008}.elitea-assistant-markdown a{color:var(--elitea-assistant-button-bg);text-decoration:underline}.elitea-assistant-markdown strong{font-weight:600}.elitea-assistant-markdown img{max-width:100%;border-radius:.375em}.elitea-assistant-input-area{display:flex;flex-direction:column;padding:.75rem;background:var(--elitea-assistant-input-bg);flex-shrink:0;border-top:.0625rem solid var(--elitea-assistant-window-border);position:relative}.elitea-assistant-input-area--drag-over>*:not(.elitea-assistant-drop-overlay){visibility:hidden}.elitea-assistant-drop-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;border:2px dashed var(--elitea-assistant-send-btn-bg);border-radius:0 0 1rem 1rem;color:var(--elitea-assistant-input-text);font-size:.875rem;z-index:10}.elitea-assistant-input-row{display:flex;align-items:center;gap:.5rem;width:100%}.elitea-assistant-input{flex:1;padding:.5rem .25rem;border:none;border-radius:0;background:transparent;color:var(--elitea-assistant-input-text);font-size:.875rem;font-family:inherit;outline:none;resize:none}.elitea-assistant-input::placeholder{color:var(--elitea-assistant-input-placeholder);opacity:1}.elitea-assistant-attach-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-header-action-bg);color:var(--elitea-assistant-header-text);flex-shrink:0;transition:opacity .15s ease;padding:0;opacity:.8}.elitea-assistant-attach-button:hover{opacity:1}.elitea-assistant-attach-button svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-send-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-send-btn-bg);color:var(--elitea-assistant-send-btn-icon);flex-shrink:0;transition:background .15s ease;padding:0}.elitea-assistant-send-button:disabled{background:var(--elitea-assistant-send-btn-disabled-bg);cursor:default}.elitea-assistant-send-button svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-file-list{display:flex;align-items:center;gap:.5rem;padding-bottom:.5rem}.elitea-assistant-file-chip{display:flex;align-items:center;gap:.75rem;max-width:11.25rem;height:2.25rem;padding:.375rem .75rem;border-radius:.5rem;background:var(--elitea-assistant-header-action-bg);flex-shrink:0}.elitea-assistant-file-chip-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--elitea-assistant-header-close-icon)}.elitea-assistant-file-chip-icon svg{width:.75rem;height:.875rem}.elitea-assistant-file-chip-name{flex:1;min-width:0;font-size:.75rem;color:var(--elitea-assistant-input-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.elitea-assistant-file-chip-remove{display:flex;align-items:center;justify-content:center;width:1rem;height:1rem;padding:0;border:none;background:none;cursor:pointer;color:var(--elitea-assistant-header-close-icon);flex-shrink:0;opacity:.7;transition:opacity .15s ease}.elitea-assistant-file-chip-remove:hover{opacity:1}.elitea-assistant-file-chip-remove svg{width:2rem;height:2rem;fill:currentColor}.elitea-assistant-file-chip--count{font-size:.75rem;font-weight:400;color:var(--elitea-assistant-input-text);max-width:none;gap:0}.elitea-assistant-file-chip--error{border:1px solid var(--elitea-assistant-error-color, #ef4444);background:var(--elitea-assistant-error-bg, rgba(239, 68, 68, .1))}.elitea-assistant-file-chip--completed .elitea-assistant-file-chip-icon{color:var(--elitea-assistant-success-color, #22c55e)}.elitea-assistant-file-chip-progress-text{width:1.5625rem;font-size:.625rem;color:var(--elitea-assistant-input-text);flex-shrink:0;text-align:right}.elitea-assistant-file-chip-error-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--elitea-assistant-error-color, #ef4444)}.elitea-assistant-file-chip-error-icon svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-file-chip-icon .elitea-assistant-file-chip-spinner{width:1.25rem;height:1.25rem;flex-shrink:0;color:var(--elitea-assistant-send-btn-bg)}.elitea-assistant-file-chip-spinner-progress{transition:stroke-dashoffset .15s ease}.elitea-assistant-attach-button:disabled{opacity:.5;cursor:not-allowed}.elitea-assistant-tooltip-trigger{display:inline-flex}.elitea-assistant-tooltip{position:fixed;z-index:2147483647;padding:.25rem .5rem;border-radius:.25rem;background:#e9ebf0;color:#0e131d;font-size:.6875rem;line-height:1.3;font-weight:500;font-family:Montserrat,sans-serif;max-width:20rem;word-wrap:break-word;pointer-events:none;box-shadow:0 0 0 .0625rem #00000014,0 .125rem .5rem #0000001f;transition:opacity .15s ease}@keyframes elitea-tooltip-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-popup{position:absolute;bottom:.25rem;display:flex;align-items:center;gap:1rem;padding:.75rem .75rem .75rem 1.25rem;border-radius:1.5rem 1.5rem 1.5rem 0;background:var(--elitea-assistant-popup-bg);color:var(--elitea-assistant-popup-text);font-size:.875rem;font-weight:500;line-height:1.5rem;white-space:nowrap;box-shadow:0 .25rem 1rem #0003;animation:elitea-assistant-popup-in .3s ease-out}.elitea-assistant-popup:before{content:"";position:absolute;top:-.0625rem;right:-.0625rem;bottom:-.0625rem;left:-.0625rem;border-radius:inherit;padding:.0625rem;background:var(--elitea-assistant-popup-border);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none}.elitea-assistant-container--bottom-right .elitea-assistant-popup{right:2.5rem;flex-direction:row-reverse;padding:.75rem 1.25rem .75rem .75rem;border-radius:1.5rem 1.5rem 0}.elitea-assistant-container--bottom-left .elitea-assistant-popup{left:2.5rem}.elitea-assistant-popup-text{-webkit-user-select:none;user-select:none}.elitea-assistant-popup-close{display:flex;align-items:center;justify-content:center;width:1.75rem;height:1.75rem;flex-shrink:0;border:none;border-radius:50%;background:var(--elitea-assistant-popup-close-bg);color:var(--elitea-assistant-popup-text);cursor:pointer;padding:0;transition:background .15s ease}.elitea-assistant-popup-close:hover{background:var(--elitea-assistant-popup-close-hover-bg)}.elitea-assistant-popup-close svg{width:1rem;height:1rem;fill:currentColor}@keyframes elitea-assistant-popup-in{0%{opacity:0;transform:translateY(.5rem)}to{opacity:1;transform:translateY(0)}}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { jsx as E, jsxs as re, Fragment as si } from "react/jsx-runtime";
import { memo as J, useState as te, useCallback as V, useRef as Le, useLayoutEffect as ra, useEffect as He, useMemo as We, createContext as Nt, useContext as zt, forwardRef as ia, useImperativeHandle as la } from "react";
import { createPortal as aa } from "react-dom";
import { io as oa } from "socket.io-client";
const ot = (e, t = !1) => ({
  ...e.token && { Authorization: `Bearer ${e.token}` },
  ...t && { "Content-Type": "application/json" }
}), st = (e) => e.withCredentials ? "include" : void 0, ut = async (e) => {
  if (!e.ok) throw new Error(`${e.status} ${e.statusText}`);
  return e;
}, sa = (e, t = {}) => ({
  getConfig: () => fetch(`${e}/config/`, {
    headers: ot(t),
    credentials: st(t)
  }).then(ut).then((n) => n.json()),
  getConversations: () => fetch(`${e}/conversations/`, {
    headers: ot(t),
    credentials: st(t)
  }).then(ut).then((n) => n.json()),
  getConversation: (n) => fetch(`${e}/conversation/${n}`, {
    headers: ot(t),
    credentials: st(t)
  }).then(ut).then((r) => r.json()),
  createConversation: () => fetch(`${e}/conversations/`, {
    method: "POST",
    headers: ot(t, !0),
    credentials: st(t),
    body: JSON.stringify({})
  }).then(ut).then((n) => n.json()),
  deleteConversation: (n) => fetch(`${e}/conversation/${n}`, {
    method: "DELETE",
    headers: ot(t),
    credentials: st(t)
  }).then(ut).then(() => {
  }),
  uploadFile: (n, r, i) => new Promise((a, l) => {
    const o = new XMLHttpRequest();
    i && o.upload.addEventListener("progress", (s) => {
      s.lengthComputable && i(s.loaded, s.total);
    }), o.addEventListener("load", () => {
      if (o.status >= 200 && o.status < 300)
        try {
          a(JSON.parse(o.responseText));
        } catch {
          l(new Error("Failed to parse upload response"));
        }
      else
        try {
          const s = JSON.parse(o.responseText);
          l(new Error(s.error || `Upload failed with status: ${o.status}`));
        } catch {
          l(new Error(`Upload failed with status: ${o.status}`));
        }
    }), o.addEventListener("error", () => l(new Error("Upload failed due to network error"))), o.addEventListener("abort", () => l(new Error("Upload was aborted"))), o.open("POST", `${e}/attachments/${n}`), t.token && o.setRequestHeader("Authorization", `Bearer ${t.token}`), t.withCredentials && (o.withCredentials = !0), o.send(r);
  })
}), Tn = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E("path", { d: "M14.2499 4.375C14.8319 4.375 15.3037 4.84137 15.3037 5.41666C15.3037 5.87017 15.0104 6.25575 14.6012 6.39877V8.26399H14.9524C15.5109 8.26399 15.9675 8.69328 16.0037 9.23621H18.2544C20.5477 9.23621 22.4397 10.9331 22.7159 13.1259C23.2816 13.1443 23.7344 13.6031 23.7344 14.1667V15.6945C23.7343 16.2697 23.2625 16.7362 22.6805 16.7362C22.6637 16.7362 22.6469 16.7356 22.6302 16.7348C22.2147 18.5198 20.7287 19.6036 18.2544 20.0695C15.3037 20.625 9.26175 21.875 9.26175 21.875L10.1048 20.0695C8.0024 20.0695 6.23719 18.643 5.74513 16.7159C5.67822 16.7291 5.60903 16.7362 5.53821 16.7362C4.95623 16.7362 4.48444 16.2697 4.48438 15.6945V14.1667C4.48438 13.5914 4.95619 13.1251 5.53821 13.1251C5.57345 13.1251 5.60828 13.1267 5.64263 13.1301C5.91693 10.9353 7.81012 9.23621 10.1048 9.23621H12.3556C12.3917 8.69328 12.8484 8.26399 13.4068 8.26399H13.7581V6.33788C13.4239 6.1632 13.1961 5.81633 13.1961 5.41666C13.1961 4.84137 13.6679 4.375 14.2499 4.375ZM11.2289 11.3195C9.44405 11.3195 7.99715 12.7497 7.99715 14.5139V14.6528C7.99721 16.417 9.44409 17.8473 11.2289 17.8473H17.1304C18.9152 17.8473 20.362 16.417 20.3621 14.6528V14.5139C20.3621 12.7497 18.9152 11.3195 17.1304 11.3195H11.2289ZM11.4397 13.5416C12.0217 13.5416 12.4935 14.008 12.4935 14.5833C12.4935 15.1585 12.0217 15.6249 11.4397 15.6249C10.8577 15.6249 10.3858 15.1585 10.3858 14.5833C10.3858 14.008 10.8577 13.5416 11.4397 13.5416ZM16.9196 13.5416C17.5016 13.5416 17.9734 14.008 17.9734 14.5833C17.9734 15.1585 17.5016 15.6249 16.9196 15.6249C16.3376 15.6249 15.8658 15.1585 15.8658 14.5833C15.8658 14.008 16.3376 13.5416 16.9196 13.5416Z" })
  }
));
Tn.displayName = "AssistantIcon";
const ui = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 12 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E("path", { d: "M11.5876 6.6172C11.6361 6.66719 11.6746 6.72656 11.7008 6.7919C11.7271 6.85725 11.7406 6.9273 11.7406 6.99804C11.7406 7.06878 11.7271 7.13883 11.7008 7.20417C11.6746 7.26952 11.6361 7.32889 11.5876 7.37888L6.23589 12.8964C5.55078 13.6031 4.6216 14.0001 3.65277 14C2.68393 13.9999 1.7548 13.6028 1.06978 12.8961C0.384749 12.1893 -6.11425e-05 11.2307 7.28683e-09 10.2313C6.11571e-05 9.2318 0.384988 8.2733 1.0701 7.56661L7.5443 0.789483C8.03342 0.284364 8.69701 0.000378941 9.3891 3.78958e-07C10.0812 -0.000378183 10.7451 0.282881 11.2347 0.787465C11.7243 1.29205 11.9996 1.97662 12 2.69059C12.0004 3.40456 11.7258 4.08943 11.2367 4.59455L4.76116 11.3717C4.46709 11.6751 4.06823 11.8455 3.65235 11.8455C3.23646 11.8455 2.8376 11.6751 2.54353 11.3717C2.24945 11.0683 2.08424 10.6568 2.08424 10.2278C2.08424 9.79877 2.24945 9.38731 2.54353 9.08393L7.97674 3.39012C8.02433 3.33774 8.0816 3.29571 8.14518 3.26651C8.20875 3.23731 8.27735 3.22152 8.34693 3.22008C8.4165 3.21863 8.48566 3.23156 8.55032 3.2581C8.61498 3.28464 8.67385 3.32425 8.72345 3.37461C8.77305 3.42497 8.81238 3.48506 8.83913 3.55133C8.86588 3.61761 8.87951 3.68874 8.87922 3.76053C8.87893 3.83232 8.86472 3.90333 8.83742 3.96937C8.81013 4.03541 8.77031 4.09515 8.7203 4.14508L3.28643 9.84494C3.23778 9.89474 3.19911 9.95393 3.17264 10.0191C3.14616 10.0843 3.13239 10.1543 3.13212 10.225C3.13185 10.2957 3.14507 10.3658 3.17105 10.4312C3.19702 10.4966 3.23523 10.5561 3.2835 10.6063C3.33177 10.6565 3.38914 10.6964 3.45235 10.7237C3.51556 10.751 3.58337 10.7652 3.6519 10.7655C3.72043 10.7658 3.78835 10.7521 3.85176 10.7253C3.91518 10.6985 3.97287 10.6591 4.02152 10.6093L10.4964 3.83556C10.7904 3.53281 10.9559 3.12194 10.9563 2.69335C10.9568 2.26475 10.7921 1.85354 10.4987 1.55016C10.2052 1.24679 9.80691 1.0761 9.39145 1.07566C8.97599 1.07522 8.57737 1.24506 8.2833 1.54781L1.8104 8.32224C1.56791 8.572 1.37549 8.86858 1.24411 9.19506C1.11273 9.52153 1.04496 9.8715 1.04469 10.225C1.04442 10.5785 1.11164 10.9286 1.24252 11.2553C1.37339 11.5819 1.56536 11.8788 1.80747 12.129C2.04957 12.3792 2.33706 12.5777 2.65353 12.7132C2.97 12.8487 3.30924 12.9186 3.6519 12.9189C3.99456 12.9192 4.33391 12.8498 4.65059 12.7148C4.96727 12.5798 5.25506 12.3818 5.49755 12.132L10.8499 6.6145C10.9481 6.51399 11.0809 6.45781 11.2193 6.45831C11.3576 6.45881 11.4901 6.51596 11.5876 6.6172Z" })
  }
));
ui.displayName = "AttachmentIcon";
const ua = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E("path", { d: "M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.2L4 17.2V4H20V16Z" })
  }
));
ua.displayName = "ChatIcon";
const Pn = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E(
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
Pn.displayName = "CheckIcon";
const Ot = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E("path", { d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" })
  }
));
Ot.displayName = "CloseIcon";
const ci = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E("path", { d: "M11.8402 0.15976C11.7379 0.0574675 11.5992 0 11.4545 0C11.3099 0 11.1711 0.0574675 11.0689 0.15976L7.63636 3.59205V1.63636C7.63636 1.4917 7.57889 1.35296 7.4766 1.25067C7.3743 1.14837 7.23557 1.09091 7.09091 1.09091C6.94624 1.09091 6.80751 1.14837 6.70521 1.25067C6.60292 1.35296 6.54545 1.4917 6.54545 1.63636V4.90909C6.54545 5.05375 6.60292 5.19249 6.70521 5.29479C6.80751 5.39708 6.94624 5.45455 7.09091 5.45455H10.3636C10.5083 5.45455 10.647 5.39708 10.7493 5.29479C10.8516 5.19249 10.9091 5.05375 10.9091 4.90909C10.9091 4.76443 10.8516 4.62569 10.7493 4.5234C10.647 4.4211 10.5083 4.36364 10.3636 4.36364H8.40795L11.8402 0.931149C11.9425 0.828856 12 0.690118 12 0.545455C12 0.400791 11.9425 0.262053 11.8402 0.15976ZM4.90909 6.54545H1.63636C1.4917 6.54545 1.35296 6.60292 1.25067 6.70521C1.14837 6.80751 1.09091 6.94624 1.09091 7.09091C1.09091 7.23557 1.14837 7.3743 1.25067 7.4766C1.35296 7.57889 1.4917 7.63636 1.63636 7.63636H3.59205L0.15976 11.0689C0.0574675 11.1711 0 11.3099 0 11.4545C0 11.5992 0.0574675 11.7379 0.15976 11.8402C0.262053 11.9425 0.400791 12 0.545455 12C0.690118 12 0.828856 11.9425 0.931149 11.8402L4.36364 8.40795V10.3636C4.36364 10.5083 4.4211 10.647 4.5234 10.7493C4.62569 10.8516 4.76443 10.9091 4.90909 10.9091C5.05375 10.9091 5.19249 10.8516 5.29479 10.7493C5.39708 10.647 5.45455 10.5083 5.45455 10.3636V7.09091C5.45455 6.94624 5.39708 6.80751 5.29479 6.70521C5.19249 6.60292 5.05375 6.54545 4.90909 6.54545Z" })
  }
));
ci.displayName = "CollapseIcon";
const hi = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E(
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
hi.displayName = "CopyIcon";
const ca = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" })
  }
));
ca.displayName = "ErrorIcon";
const fi = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E("path", { d: "M12 0.545455V3.81818C12 3.96285 11.9425 4.10158 11.8402 4.20388C11.7379 4.30617 11.5992 4.36364 11.4545 4.36364C11.3099 4.36364 11.1711 4.30617 11.0689 4.20388C10.9666 4.10158 10.9091 3.96285 10.9091 3.81818V1.86205L7.47682 5.295C7.37447 5.39735 7.23565 5.45485 7.09091 5.45485C6.94617 5.45485 6.80735 5.39735 6.705 5.295C6.60265 5.19265 6.54515 5.05383 6.54515 4.90909C6.54515 4.76435 6.60265 4.62553 6.705 4.52318L10.138 1.09091H8.18182C8.03715 1.09091 7.89842 1.03344 7.79612 0.931149C7.69383 0.828856 7.63636 0.690118 7.63636 0.545455C7.63636 0.400791 7.69383 0.262053 7.79612 0.15976C7.89842 0.0574675 8.03715 0 8.18182 0H11.4545C11.5992 0 11.7379 0.0574675 11.8402 0.15976C11.9425 0.262053 12 0.400791 12 0.545455ZM4.52318 6.705L1.09091 10.138V8.18182C1.09091 8.03715 1.03344 7.89842 0.931149 7.79612C0.828856 7.69383 0.690118 7.63636 0.545455 7.63636C0.400791 7.63636 0.262053 7.69383 0.15976 7.79612C0.0574675 7.89842 0 8.03715 0 8.18182V11.4545C0 11.5992 0.0574675 11.7379 0.15976 11.8402C0.262053 11.9425 0.400791 12 0.545455 12H3.81818C3.96285 12 4.10158 11.9425 4.20388 11.8402C4.30617 11.7379 4.36364 11.5992 4.36364 11.4545C4.36364 11.3099 4.30617 11.1711 4.20388 11.0689C4.10158 10.9666 3.96285 10.9091 3.81818 10.9091H1.86205L5.295 7.47682C5.39735 7.37447 5.45485 7.23565 5.45485 7.09091C5.45485 6.94617 5.39735 6.80735 5.295 6.705C5.19265 6.60265 5.05383 6.54515 4.90909 6.54515C4.76435 6.54515 4.62553 6.60265 4.52318 6.705Z" })
  }
));
fi.displayName = "ExpandIcon";
const pi = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 12 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E(
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
pi.displayName = "FileIcon";
const di = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E("path", { d: "M7.84245 3.50002V6.6697L10.3716 8.2498C10.499 8.32948 10.5908 8.45859 10.6268 8.60874C10.6628 8.75888 10.64 8.91776 10.5635 9.05042C10.487 9.18309 10.363 9.27867 10.2188 9.31614C10.0746 9.3536 9.92206 9.32989 9.79466 9.25022L6.99378 7.50022C6.91089 7.44836 6.8423 7.37503 6.79469 7.28737C6.74708 7.19972 6.72207 7.10072 6.7221 7.00001V3.50002C6.7221 3.34531 6.78112 3.19693 6.88617 3.08754C6.99122 2.97814 7.13371 2.91668 7.28227 2.91668C7.43084 2.91668 7.57333 2.97814 7.67838 3.08754C7.78343 3.19693 7.84245 3.34531 7.84245 3.50002ZM7.28227 2.15915e-05C6.39859 -0.00227058 5.52325 0.177963 4.70691 0.530291C3.89056 0.882618 3.14943 1.40004 2.52639 2.05262C2.01733 2.58929 1.56499 3.10554 1.12035 3.64585V2.33335C1.12035 2.17864 1.06133 2.03027 0.956278 1.92087C0.851225 1.81148 0.708743 1.75002 0.560175 1.75002C0.411607 1.75002 0.269125 1.81148 0.164071 1.92087C0.0590182 2.03027 0 2.17864 0 2.33335V5.25001C0 5.40472 0.0590182 5.5531 0.164071 5.66249C0.269125 5.77189 0.411607 5.83335 0.560175 5.83335H3.36105C3.50962 5.83335 3.6521 5.77189 3.75715 5.66249C3.86221 5.5531 3.92122 5.40472 3.92122 5.25001C3.92122 5.0953 3.86221 4.94693 3.75715 4.83754C3.6521 4.72814 3.50962 4.66668 3.36105 4.66668H1.75055C2.2512 4.05272 2.74976 3.4745 3.31834 2.87512C4.09688 2.0644 5.08758 1.51057 6.16666 1.28283C7.24574 1.05509 8.36535 1.16353 9.38558 1.59462C10.4058 2.02571 11.2814 2.76032 11.903 3.70667C12.5246 4.65301 12.8646 5.76912 12.8805 6.91554C12.8965 8.06195 12.5876 9.18784 11.9926 10.1525C11.3975 11.1172 10.5427 11.8779 9.53484 12.3395C8.52702 12.8011 7.41089 12.9433 6.32594 12.7481C5.24098 12.553 4.23531 12.0292 3.43457 11.2423C3.38106 11.1896 3.3181 11.1485 3.2493 11.1211C3.18051 11.0938 3.10721 11.0808 3.03361 11.083C2.96 11.0852 2.88753 11.1024 2.82033 11.1338C2.75312 11.1651 2.6925 11.2099 2.64193 11.2656C2.59135 11.3214 2.55181 11.3869 2.52557 11.4586C2.49932 11.5302 2.48689 11.6065 2.48897 11.6832C2.49105 11.7598 2.5076 11.8353 2.53769 11.9053C2.56778 11.9753 2.61081 12.0384 2.66433 12.091C3.4622 12.8751 4.43221 13.4439 5.48972 13.7478C6.54722 14.0517 7.66008 14.0814 8.73117 13.8345C9.80226 13.5875 10.799 13.0713 11.6345 12.3309C12.4699 11.5905 13.1187 10.6485 13.5241 9.58695C13.9295 8.52544 14.0793 7.37674 13.9604 6.24108C13.8414 5.10543 13.4574 4.01735 12.8418 3.0718C12.2261 2.12625 11.3976 1.35197 10.4286 0.816529C9.4595 0.281089 8.37931 0.000765142 7.28227 2.15915e-05Z" })
  }
));
di.displayName = "HistoryIcon";
const mi = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E("path", { d: "M14 7C14 7.15471 13.9385 7.30308 13.8291 7.41248C13.7197 7.52188 13.5714 7.58333 13.4167 7.58333H7.58333V13.4167C7.58333 13.5714 7.52188 13.7197 7.41248 13.8291C7.30308 13.9385 7.15471 14 7 14C6.84529 14 6.69692 13.9385 6.58752 13.8291C6.47812 13.7197 6.41667 13.5714 6.41667 13.4167V7.58333H0.583333C0.428624 7.58333 0.280251 7.52188 0.170854 7.41248C0.0614583 7.30308 0 7.15471 0 7C0 6.84529 0.0614583 6.69692 0.170854 6.58752C0.280251 6.47812 0.428624 6.41667 0.583333 6.41667H6.41667V0.583333C6.41667 0.428624 6.47812 0.280251 6.58752 0.170854C6.69692 0.0614583 6.84529 0 7 0C7.15471 0 7.30308 0.0614583 7.41248 0.170854C7.52188 0.280251 7.58333 0.428624 7.58333 0.583333V6.41667H13.4167C13.5714 6.41667 13.7197 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7Z" })
  }
));
mi.displayName = "PlusIcon";
const gi = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 13 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E("path", { d: "M13 6.99208C13.0005 7.17027 12.9514 7.34536 12.8579 7.49921C12.7644 7.65307 12.6299 7.78012 12.4682 7.86721L1.55229 13.8687C1.39545 13.9542 1.21835 13.9995 1.03805 14C0.871785 13.9997 0.708022 13.961 0.56049 13.8873C0.412958 13.8136 0.285957 13.7069 0.190131 13.5763C0.0943049 13.4456 0.0324474 13.2948 0.00974343 13.1364C-0.0129605 12.9781 0.00415071 12.8168 0.0596426 12.6661L1.83768 7.66843C1.8552 7.61898 1.88839 7.57606 1.93258 7.54567C1.97677 7.51529 2.02975 7.49898 2.08407 7.49903H6.75898C6.83028 7.49918 6.90085 7.48523 6.9663 7.45806C7.03176 7.43088 7.0907 7.39105 7.13948 7.34105C7.18825 7.29104 7.22581 7.23193 7.24982 7.16738C7.27384 7.10283 7.28379 7.03423 7.27907 6.96582C7.26727 6.83723 7.20539 6.71767 7.10582 6.63108C7.00624 6.5445 6.87632 6.49728 6.74208 6.49888H2.08862C2.03438 6.49897 1.98146 6.48275 1.93728 6.45249C1.89309 6.42222 1.85986 6.37943 1.84223 6.3301L0.0583424 1.32936C-0.0111263 1.13773 -0.018329 0.930327 0.0376911 0.734676C0.0937111 0.539025 0.210303 0.364388 0.371984 0.233956C0.533666 0.103523 0.732787 0.0234668 0.942905 0.00441721C1.15302 -0.0146324 1.3642 0.0282263 1.54838 0.127302L12.4702 6.12132C12.6308 6.20829 12.7645 6.33476 12.8576 6.48776C12.9507 6.64076 12.9999 6.81481 13 6.99208Z" })
  }
));
gi.displayName = "SendIcon";
const yi = J(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E("path", { d: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" })
  }
));
yi.displayName = "UserIcon";
const ki = J((e) => {
  const { onClick: t } = e;
  return /* @__PURE__ */ E(
    "button",
    {
      className: "elitea-assistant-button",
      onClick: t,
      "aria-label": "Support Assistant",
      type: "button",
      children: /* @__PURE__ */ E(Tn, {})
    }
  );
});
ki.displayName = "ChatButton";
const xi = J((e) => {
  const { text: t } = e, [n, r] = te(!1), i = V(() => {
    navigator.clipboard.writeText(t), r(!0), setTimeout(() => r(!1), 2e3);
  }, [t]);
  return /* @__PURE__ */ E(et, { content: "Copy to clipboard", children: /* @__PURE__ */ E(
    "button",
    {
      className: "elitea-assistant-header-action",
      onClick: i,
      "aria-label": "Copy to clipboard",
      type: "button",
      children: n ? /* @__PURE__ */ E(Pn, {}) : /* @__PURE__ */ E(hi, {})
    }
  ) });
});
xi.displayName = "CopyButton";
const et = J((e) => {
  const { content: t, children: n, placement: r = "top" } = e, i = Le(null), a = Le(null), [l, o] = te(!1), [s, u] = te(!1), [h, c] = te({ top: 0, left: 0 }), p = V(() => {
    const f = i.current, d = a.current;
    if (!f || !d) return;
    const y = f.getBoundingClientRect(), b = d.getBoundingClientRect();
    let k;
    r === "top" ? k = y.top - b.height - 8 : k = y.bottom + 8;
    let v = y.left + y.width / 2 - b.width / 2;
    const S = 8;
    v < S && (v = S), v + b.width > window.innerWidth - S && (v = window.innerWidth - S - b.width), k < S && (k = y.bottom + 8), c({ top: k, left: v }), u(!0);
  }, [r]);
  return ra(() => {
    l && a.current && p(), l || u(!1);
  }, [l, p]), /* @__PURE__ */ re(si, { children: [
    /* @__PURE__ */ E(
      "div",
      {
        ref: i,
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        className: "elitea-assistant-tooltip-trigger",
        children: n
      }
    ),
    l && aa(
      /* @__PURE__ */ E(
        "div",
        {
          ref: a,
          className: "elitea-assistant-tooltip",
          style: {
            top: h.top,
            left: h.left,
            opacity: s ? 1 : 0
          },
          role: "tooltip",
          children: t
        }
      ),
      document.body
    )
  ] });
});
et.displayName = "Tooltip";
const bi = J((e) => {
  const {
    title: t,
    expanded: n,
    history: r,
    currentConversationId: i,
    disabled: a,
    onClose: l,
    onExpand: o,
    onNewChat: s,
    onSelectConversation: u
  } = e, h = Le(null), [c, p] = te(!1);
  He(() => {
    if (!c) return;
    const y = (b) => {
      h.current && !h.current.contains(b.target) && p(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [c]);
  const f = V(() => {
    r.length > 0 && p((y) => !y);
  }, [r.length]), d = V(
    (y) => {
      u(y), p(!1);
    },
    [u]
  );
  return /* @__PURE__ */ re("div", { className: "elitea-assistant-header", children: [
    /* @__PURE__ */ re("div", { className: "elitea-assistant-header-left", children: [
      /* @__PURE__ */ E(
        "button",
        {
          className: "elitea-assistant-header-close-action",
          onClick: l,
          "aria-label": "Close chat",
          type: "button",
          children: /* @__PURE__ */ E(Ot, {})
        }
      ),
      /* @__PURE__ */ E("h2", { className: "elitea-assistant-header-title", children: t })
    ] }),
    /* @__PURE__ */ re("div", { className: "elitea-assistant-header-right", children: [
      /* @__PURE__ */ E(et, { content: "New conversation", children: /* @__PURE__ */ E(
        "button",
        {
          className: "elitea-assistant-header-action",
          onClick: s,
          "aria-label": "New chat",
          type: "button",
          disabled: a,
          children: /* @__PURE__ */ E(mi, {})
        }
      ) }),
      /* @__PURE__ */ E(et, { content: "Conversations history", children: /* @__PURE__ */ re(
        "div",
        {
          ref: h,
          className: "elitea-assistant-history-wrapper",
          children: [
            /* @__PURE__ */ E(
              "button",
              {
                className: "elitea-assistant-header-action",
                onClick: f,
                "aria-label": "Chat history",
                type: "button",
                disabled: a || r.length === 0,
                children: /* @__PURE__ */ E(di, {})
              }
            ),
            c && r.length > 0 && /* @__PURE__ */ E("div", { className: "elitea-assistant-history-dropdown", children: /* @__PURE__ */ E("div", { className: "elitea-assistant-history-dropdown-scroll", children: r.map((y) => /* @__PURE__ */ E(
              "button",
              {
                className: "elitea-assistant-history-item",
                onClick: () => d(y.uuid),
                type: "button",
                disabled: y.uuid === i,
                children: y.name
              },
              y.uuid
            )) }) })
          ]
        }
      ) }),
      /* @__PURE__ */ E(et, { content: n ? "Collapse" : "Expand", children: /* @__PURE__ */ E(
        "button",
        {
          className: "elitea-assistant-header-action",
          onClick: o,
          "aria-label": "Expand chat",
          type: "button",
          children: n ? /* @__PURE__ */ E(ci, {}) : /* @__PURE__ */ E(fi, {})
        }
      ) })
    ] })
  ] });
});
bi.displayName = "ChatHeader";
function ha(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const fa = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, pa = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, da = {};
function er(e, t) {
  return (da.jsx ? pa : fa).test(e);
}
const ma = /[ \t\n\f\r]/g;
function ga(e) {
  return typeof e == "object" ? e.type === "text" ? tr(e.value) : !1 : tr(e);
}
function tr(e) {
  return e.replace(ma, "") === "";
}
class kt {
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
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
kt.prototype.normal = {};
kt.prototype.property = {};
kt.prototype.space = void 0;
function wi(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new kt(n, r, t);
}
function fn(e) {
  return e.toLowerCase();
}
class be {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
be.prototype.attribute = "";
be.prototype.booleanish = !1;
be.prototype.boolean = !1;
be.prototype.commaOrSpaceSeparated = !1;
be.prototype.commaSeparated = !1;
be.prototype.defined = !1;
be.prototype.mustUseProperty = !1;
be.prototype.number = !1;
be.prototype.overloadedBoolean = !1;
be.prototype.property = "";
be.prototype.spaceSeparated = !1;
be.prototype.space = void 0;
let ya = 0;
const B = Xe(), le = Xe(), pn = Xe(), A = Xe(), Q = Xe(), tt = Xe(), Ee = Xe();
function Xe() {
  return 2 ** ++ya;
}
const dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: B,
  booleanish: le,
  commaOrSpaceSeparated: Ee,
  commaSeparated: tt,
  number: A,
  overloadedBoolean: pn,
  spaceSeparated: Q
}, Symbol.toStringTag, { value: "Module" })), Gt = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(dn)
);
class Ln extends be {
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
  constructor(t, n, r, i) {
    let a = -1;
    if (super(t, n), nr(this, "space", i), typeof r == "number")
      for (; ++a < Gt.length; ) {
        const l = Gt[a];
        nr(this, Gt[a], (r & dn[l]) === dn[l]);
      }
  }
}
Ln.prototype.defined = !0;
function nr(e, t, n) {
  n && (e[t] = n);
}
function rt(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const a = new Ln(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[fn(r)] = r, n[fn(a.attribute)] = r;
  }
  return new kt(t, n, e.space);
}
const Ci = rt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: le,
    ariaAutoComplete: null,
    ariaBusy: le,
    ariaChecked: le,
    ariaColCount: A,
    ariaColIndex: A,
    ariaColSpan: A,
    ariaControls: Q,
    ariaCurrent: null,
    ariaDescribedBy: Q,
    ariaDetails: null,
    ariaDisabled: le,
    ariaDropEffect: Q,
    ariaErrorMessage: null,
    ariaExpanded: le,
    ariaFlowTo: Q,
    ariaGrabbed: le,
    ariaHasPopup: null,
    ariaHidden: le,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Q,
    ariaLevel: A,
    ariaLive: null,
    ariaModal: le,
    ariaMultiLine: le,
    ariaMultiSelectable: le,
    ariaOrientation: null,
    ariaOwns: Q,
    ariaPlaceholder: null,
    ariaPosInSet: A,
    ariaPressed: le,
    ariaReadOnly: le,
    ariaRelevant: null,
    ariaRequired: le,
    ariaRoleDescription: Q,
    ariaRowCount: A,
    ariaRowIndex: A,
    ariaRowSpan: A,
    ariaSelected: le,
    ariaSetSize: A,
    ariaSort: null,
    ariaValueMax: A,
    ariaValueMin: A,
    ariaValueNow: A,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Si(e, t) {
  return t in e ? e[t] : t;
}
function Ei(e, t) {
  return Si(e, t.toLowerCase());
}
const ka = rt({
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
    accept: tt,
    acceptCharset: Q,
    accessKey: Q,
    action: null,
    allow: null,
    allowFullScreen: B,
    allowPaymentRequest: B,
    allowUserMedia: B,
    alt: null,
    as: null,
    async: B,
    autoCapitalize: null,
    autoComplete: Q,
    autoFocus: B,
    autoPlay: B,
    blocking: Q,
    capture: null,
    charSet: null,
    checked: B,
    cite: null,
    className: Q,
    cols: A,
    colSpan: null,
    content: null,
    contentEditable: le,
    controls: B,
    controlsList: Q,
    coords: A | tt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: B,
    defer: B,
    dir: null,
    dirName: null,
    disabled: B,
    download: pn,
    draggable: le,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: B,
    formTarget: null,
    headers: Q,
    height: A,
    hidden: pn,
    high: A,
    href: null,
    hrefLang: null,
    htmlFor: Q,
    httpEquiv: Q,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: B,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: B,
    itemId: null,
    itemProp: Q,
    itemRef: Q,
    itemScope: B,
    itemType: Q,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: B,
    low: A,
    manifest: null,
    max: null,
    maxLength: A,
    media: null,
    method: null,
    min: null,
    minLength: A,
    multiple: B,
    muted: B,
    name: null,
    nonce: null,
    noModule: B,
    noValidate: B,
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
    open: B,
    optimum: A,
    pattern: null,
    ping: Q,
    placeholder: null,
    playsInline: B,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: B,
    referrerPolicy: null,
    rel: Q,
    required: B,
    reversed: B,
    rows: A,
    rowSpan: A,
    sandbox: Q,
    scope: null,
    scoped: B,
    seamless: B,
    selected: B,
    shadowRootClonable: B,
    shadowRootDelegatesFocus: B,
    shadowRootMode: null,
    shape: null,
    size: A,
    sizes: null,
    slot: null,
    span: A,
    spellCheck: le,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: A,
    step: null,
    style: null,
    tabIndex: A,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: B,
    useMap: null,
    value: le,
    width: A,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Q,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: A,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: A,
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
    compact: B,
    // Lists. Use CSS to reduce space between items instead
    declare: B,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: A,
    // `<img>` and `<object>`
    leftMargin: A,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: A,
    // `<body>`
    marginWidth: A,
    // `<body>`
    noResize: B,
    // `<frame>`
    noHref: B,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: B,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: B,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: A,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: le,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: A,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: A,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: B,
    disableRemotePlayback: B,
    prefix: null,
    property: null,
    results: A,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Ei
}), xa = rt({
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
    about: Ee,
    accentHeight: A,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: A,
    amplitude: A,
    arabicForm: null,
    ascent: A,
    attributeName: null,
    attributeType: null,
    azimuth: A,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: A,
    by: null,
    calcMode: null,
    capHeight: A,
    className: Q,
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
    descent: A,
    diffuseConstant: A,
    direction: null,
    display: null,
    dur: null,
    divisor: A,
    dominantBaseline: null,
    download: B,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: A,
    enableBackground: null,
    end: null,
    event: null,
    exponent: A,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: A,
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
    g1: tt,
    g2: tt,
    glyphName: tt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: A,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: A,
    horizOriginX: A,
    horizOriginY: A,
    id: null,
    ideographic: A,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: A,
    k: A,
    k1: A,
    k2: A,
    k3: A,
    k4: A,
    kernelMatrix: Ee,
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
    limitingConeAngle: A,
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
    mediaSize: A,
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
    overlinePosition: A,
    overlineThickness: A,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: A,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Q,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: A,
    pointsAtY: A,
    pointsAtZ: A,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Ee,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Ee,
    rev: Ee,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Ee,
    requiredFeatures: Ee,
    requiredFonts: Ee,
    requiredFormats: Ee,
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
    specularConstant: A,
    specularExponent: A,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: A,
    strikethroughThickness: A,
    string: null,
    stroke: null,
    strokeDashArray: Ee,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: A,
    strokeOpacity: A,
    strokeWidth: null,
    style: null,
    surfaceScale: A,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ee,
    tabIndex: A,
    tableValues: null,
    target: null,
    targetX: A,
    targetY: A,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Ee,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: A,
    underlineThickness: A,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: A,
    values: null,
    vAlphabetic: A,
    vMathematical: A,
    vectorEffect: null,
    vHanging: A,
    vIdeographic: A,
    version: null,
    vertAdvY: A,
    vertOriginX: A,
    vertOriginY: A,
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
    xHeight: A,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Si
}), vi = rt({
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
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), Ai = rt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Ei
}), Ii = rt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), ba = {
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
}, wa = /[A-Z]/g, rr = /-[a-z]/g, Ca = /^data[-\w.:]+$/i;
function Sa(e, t) {
  const n = fn(t);
  let r = t, i = be;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Ca.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(rr, va);
      r = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!rr.test(a)) {
        let l = a.replace(wa, Ea);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    i = Ln;
  }
  return new i(r, t);
}
function Ea(e) {
  return "-" + e.toLowerCase();
}
function va(e) {
  return e.charAt(1).toUpperCase();
}
const Aa = wi([Ci, ka, vi, Ai, Ii], "html"), Dn = wi([Ci, xa, vi, Ai, Ii], "svg");
function Ia(e) {
  return e.join(" ").trim();
}
var Tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ti(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fn = {}, ir = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Ta = /\n/g, Pa = /^\s*/, La = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Da = /^:\s*/, Fa = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Ra = /^[;\s]*/, _a = /^\s+|\s+$/g, Ma = `
`, lr = "/", ar = "*", qe = "", Na = "comment", za = "declaration";
function Oa(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(d) {
    var y = d.match(Ta);
    y && (n += y.length);
    var b = d.lastIndexOf(Ma);
    r = ~b ? d.length - b : r + d.length;
  }
  function a() {
    var d = { line: n, column: r };
    return function(y) {
      return y.position = new l(d), u(), y;
    };
  }
  function l(d) {
    this.start = d, this.end = { line: n, column: r }, this.source = t.source;
  }
  l.prototype.content = e;
  function o(d) {
    var y = new Error(
      t.source + ":" + n + ":" + r + ": " + d
    );
    if (y.reason = d, y.filename = t.source, y.line = n, y.column = r, y.source = e, !t.silent) throw y;
  }
  function s(d) {
    var y = d.exec(e);
    if (y) {
      var b = y[0];
      return i(b), e = e.slice(b.length), y;
    }
  }
  function u() {
    s(Pa);
  }
  function h(d) {
    var y;
    for (d = d || []; y = c(); )
      y !== !1 && d.push(y);
    return d;
  }
  function c() {
    var d = a();
    if (!(lr != e.charAt(0) || ar != e.charAt(1))) {
      for (var y = 2; qe != e.charAt(y) && (ar != e.charAt(y) || lr != e.charAt(y + 1)); )
        ++y;
      if (y += 2, qe === e.charAt(y - 1))
        return o("End of comment missing");
      var b = e.slice(2, y - 2);
      return r += 2, i(b), e = e.slice(y), r += 2, d({
        type: Na,
        comment: b
      });
    }
  }
  function p() {
    var d = a(), y = s(La);
    if (y) {
      if (c(), !s(Da)) return o("property missing ':'");
      var b = s(Fa), k = d({
        type: za,
        property: or(y[0].replace(ir, qe)),
        value: b ? or(b[0].replace(ir, qe)) : qe
      });
      return s(Ra), k;
    }
  }
  function f() {
    var d = [];
    h(d);
    for (var y; y = p(); )
      y !== !1 && (d.push(y), h(d));
    return d;
  }
  return u(), f();
}
function or(e) {
  return e ? e.replace(_a, qe) : qe;
}
var Ba = Oa, Ha = Tt && Tt.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.default = Va;
const $a = Ha(Ba);
function Va(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = (0, $a.default)(e), i = typeof t == "function";
  return r.forEach((a) => {
    if (a.type !== "declaration")
      return;
    const { property: l, value: o } = a;
    i ? t(l, o, a) : o && (n = n || {}, n[l] = o);
  }), n;
}
var Bt = {};
Object.defineProperty(Bt, "__esModule", { value: !0 });
Bt.camelCase = void 0;
var ja = /^--[a-zA-Z0-9_-]+$/, Ua = /-([a-z])/g, qa = /^[^-]+$/, Wa = /^-(webkit|moz|ms|o|khtml)-/, Ga = /^-(ms)-/, Xa = function(e) {
  return !e || qa.test(e) || ja.test(e);
}, Za = function(e, t) {
  return t.toUpperCase();
}, sr = function(e, t) {
  return "".concat(t, "-");
}, Ka = function(e, t) {
  return t === void 0 && (t = {}), Xa(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(Ga, sr) : e = e.replace(Wa, sr), e.replace(Ua, Za));
};
Bt.camelCase = Ka;
var Ya = Tt && Tt.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, Qa = Ya(Fn), Ja = Bt;
function mn(e, t) {
  var n = {};
  return !e || typeof e != "string" || (0, Qa.default)(e, function(r, i) {
    r && i && (n[(0, Ja.camelCase)(r, t)] = i);
  }), n;
}
mn.default = mn;
var eo = mn;
const to = /* @__PURE__ */ Ti(eo), Pi = Li("end"), Rn = Li("start");
function Li(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function no(e) {
  const t = Rn(e), n = Pi(e);
  if (t && n)
    return { start: t, end: n };
}
function ft(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? ur(e.position) : "start" in e || "end" in e ? ur(e) : "line" in e || "column" in e ? gn(e) : "";
}
function gn(e) {
  return cr(e && e.line) + ":" + cr(e && e.column);
}
function ur(e) {
  return gn(e && e.start) + "-" + gn(e && e.end);
}
function cr(e) {
  return e && typeof e == "number" ? e : 1;
}
class me extends Error {
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
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", a = {}, l = !1;
    if (n && ("line" in n && "column" in n ? a = { place: n } : "start" in n && "end" in n ? a = { place: n } : "type" in n ? a = {
      ancestors: [n],
      place: n.position
    } : a = { ...n }), typeof t == "string" ? i = t : !a.cause && t && (l = !0, i = t.message, a.cause = t), !a.ruleId && !a.source && typeof r == "string") {
      const s = r.indexOf(":");
      s === -1 ? a.ruleId = r : (a.source = r.slice(0, s), a.ruleId = r.slice(s + 1));
    }
    if (!a.place && a.ancestors && a.ancestors) {
      const s = a.ancestors[a.ancestors.length - 1];
      s && (a.place = s.position);
    }
    const o = a.place && "start" in a.place ? a.place.start : a.place;
    this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = o ? o.line : void 0, this.name = ft(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = l && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
me.prototype.file = "";
me.prototype.name = "";
me.prototype.reason = "";
me.prototype.message = "";
me.prototype.stack = "";
me.prototype.column = void 0;
me.prototype.line = void 0;
me.prototype.ancestors = void 0;
me.prototype.cause = void 0;
me.prototype.fatal = void 0;
me.prototype.place = void 0;
me.prototype.ruleId = void 0;
me.prototype.source = void 0;
const _n = {}.hasOwnProperty, ro = /* @__PURE__ */ new Map(), io = /[A-Z]/g, lo = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), ao = /* @__PURE__ */ new Set(["td", "th"]), Di = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function oo(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = go(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = mo(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? Dn : Aa,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = Fi(i, e, void 0);
  return a && typeof a != "string" ? a : i.create(
    e,
    i.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function Fi(e, t, n) {
  if (t.type === "element")
    return so(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return uo(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return ho(e, t, n);
  if (t.type === "mdxjsEsm")
    return co(e, t);
  if (t.type === "root")
    return fo(e, t, n);
  if (t.type === "text")
    return po(e, t);
}
function so(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Dn, e.schema = i), e.ancestors.push(t);
  const a = _i(e, t.tagName, !1), l = yo(e, t);
  let o = Nn(e, t);
  return lo.has(t.tagName) && (o = o.filter(function(s) {
    return typeof s == "string" ? !ga(s) : !0;
  })), Ri(e, l, a, t), Mn(l, o), e.ancestors.pop(), e.schema = r, e.create(t, a, l, n);
}
function uo(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  gt(e, t.position);
}
function co(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  gt(e, t.position);
}
function ho(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = Dn, e.schema = i), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : _i(e, t.name, !0), l = ko(e, t), o = Nn(e, t);
  return Ri(e, l, a, t), Mn(l, o), e.ancestors.pop(), e.schema = r, e.create(t, a, l, n);
}
function fo(e, t, n) {
  const r = {};
  return Mn(r, Nn(e, t)), e.create(t, e.Fragment, r, n);
}
function po(e, t) {
  return t.value;
}
function Ri(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Mn(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function mo(e, t, n) {
  return r;
  function r(i, a, l, o) {
    const u = Array.isArray(l.children) ? n : t;
    return o ? u(a, l, o) : u(a, l);
  }
}
function go(e, t) {
  return n;
  function n(r, i, a, l) {
    const o = Array.isArray(a.children), s = Rn(r);
    return t(
      i,
      a,
      l,
      o,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0
      },
      void 0
    );
  }
}
function yo(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && _n.call(t.properties, i)) {
      const a = xo(e, i, t.properties[i]);
      if (a) {
        const [l, o] = a;
        e.tableCellAlignToStyle && l === "align" && typeof o == "string" && ao.has(t.tagName) ? r = o : n[l] = o;
      }
    }
  if (r) {
    const a = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    a[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function ko(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const a = r.data.estree.body[0];
        a.type;
        const l = a.expression;
        l.type;
        const o = l.properties[0];
        o.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(o.argument)
        );
      } else
        gt(e, t.position);
    else {
      const i = r.name;
      let a;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const o = r.value.data.estree.body[0];
          o.type, a = e.evaluater.evaluateExpression(o.expression);
        } else
          gt(e, t.position);
      else
        a = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      a;
    }
  return n;
}
function Nn(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : ro;
  for (; ++r < t.children.length; ) {
    const a = t.children[r];
    let l;
    if (e.passKeys) {
      const s = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
      if (s) {
        const u = i.get(s) || 0;
        l = s + "-" + u, i.set(s, u + 1);
      }
    }
    const o = Fi(e, a, l);
    o !== void 0 && n.push(o);
  }
  return n;
}
function xo(e, t, n) {
  const r = Sa(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? ha(n) : Ia(n)), r.property === "style") {
      let i = typeof n == "object" ? n : bo(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = wo(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? ba[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function bo(e, t) {
  try {
    return to(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new me("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = Di + "#cannot-parse-style-attribute", i;
  }
}
function _i(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let a = -1, l;
    for (; ++a < i.length; ) {
      const o = er(i[a]) ? { type: "Identifier", name: i[a] } : { type: "Literal", value: i[a] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: o,
        computed: !!(a && o.type === "Literal"),
        optional: !1
      } : o;
    }
    r = l;
  } else
    r = er(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return _n.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  gt(e);
}
function gt(e, t) {
  const n = new me(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Di + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function wo(e) {
  const t = {};
  let n;
  for (n in e)
    _n.call(e, n) && (t[Co(n)] = e[n]);
  return t;
}
function Co(e) {
  let t = e.replace(io, So);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function So(e) {
  return "-" + e.toLowerCase();
}
const Xt = {
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
}, Eo = {};
function zn(e, t) {
  const n = Eo, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Mi(e, r, i);
}
function Mi(e, t, n) {
  if (vo(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return hr(e.children, t, n);
  }
  return Array.isArray(e) ? hr(e, t, n) : "";
}
function hr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Mi(e[i], t, n);
  return r.join("");
}
function vo(e) {
  return !!(e && typeof e == "object");
}
const fr = document.createElement("i");
function On(e) {
  const t = "&" + e + ";";
  fr.innerHTML = t;
  const n = fr.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function ve(e, t, n, r) {
  const i = e.length;
  let a = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); a < r.length; )
      l = r.slice(a, a + 1e4), l.unshift(t, 0), e.splice(...l), a += 1e4, t += 1e4;
}
function Ae(e, t) {
  return e.length > 0 ? (ve(e, e.length, 0, t), e) : t;
}
const pr = {}.hasOwnProperty;
function Ni(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Ao(t, e[n]);
  return t;
}
function Ao(e, t) {
  let n;
  for (n in t) {
    const i = (pr.call(e, n) ? e[n] : void 0) || (e[n] = {}), a = t[n];
    let l;
    if (a)
      for (l in a) {
        pr.call(i, l) || (i[l] = []);
        const o = a[l];
        Io(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(o) ? o : o ? [o] : []
        );
      }
  }
}
function Io(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  ve(e, 0, 0, r);
}
function zi(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function Te(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ye = $e(/[A-Za-z]/), de = $e(/[\dA-Za-z]/), To = $e(/[#-'*+\--9=?A-Z^-~]/);
function Pt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const yn = $e(/\d/), Po = $e(/[\dA-Fa-f]/), Lo = $e(/[!-/:-@[-`{-~]/);
function R(e) {
  return e !== null && e < -2;
}
function Y(e) {
  return e !== null && (e < 0 || e === 32);
}
function j(e) {
  return e === -2 || e === -1 || e === 32;
}
const Ht = $e(new RegExp("\\p{P}|\\p{S}", "u")), Ge = $e(/\s/);
function $e(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function it(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const a = e.charCodeAt(n);
    let l = "";
    if (a === 37 && de(e.charCodeAt(n + 1)) && de(e.charCodeAt(n + 2)))
      i = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (l = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      const o = e.charCodeAt(n + 1);
      a < 56320 && o > 56319 && o < 57344 ? (l = String.fromCharCode(a, o), i = 1) : l = "�";
    } else
      l = String.fromCharCode(a);
    l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + i + 1, l = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function X(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return l;
  function l(s) {
    return j(s) ? (e.enter(n), o(s)) : t(s);
  }
  function o(s) {
    return j(s) && a++ < i ? (e.consume(s), o) : (e.exit(n), t(s));
  }
}
const Do = {
  tokenize: Fo
};
function Fo(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), X(e, t, "linePrefix");
  }
  function i(o) {
    return e.enter("paragraph"), a(o);
  }
  function a(o) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = s), n = s, l(o);
  }
  function l(o) {
    if (o === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(o);
      return;
    }
    return R(o) ? (e.consume(o), e.exit("chunkText"), a) : (e.consume(o), l);
  }
}
const Ro = {
  tokenize: _o
}, dr = {
  tokenize: Mo
};
function _o(e) {
  const t = this, n = [];
  let r = 0, i, a, l;
  return o;
  function o(S) {
    if (r < n.length) {
      const D = n[r];
      return t.containerState = D[1], e.attempt(D[0].continuation, s, u)(S);
    }
    return u(S);
  }
  function s(S) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && v();
      const D = t.events.length;
      let F = D, w;
      for (; F--; )
        if (t.events[F][0] === "exit" && t.events[F][1].type === "chunkFlow") {
          w = t.events[F][1].end;
          break;
        }
      k(r);
      let M = D;
      for (; M < t.events.length; )
        t.events[M][1].end = {
          ...w
        }, M++;
      return ve(t.events, F + 1, 0, t.events.slice(D)), t.events.length = M, u(S);
    }
    return o(S);
  }
  function u(S) {
    if (r === n.length) {
      if (!i)
        return p(S);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return d(S);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(dr, h, c)(S);
  }
  function h(S) {
    return i && v(), k(r), p(S);
  }
  function c(S) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, d(S);
  }
  function p(S) {
    return t.containerState = {}, e.attempt(dr, f, d)(S);
  }
  function f(S) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(S);
  }
  function d(S) {
    if (S === null) {
      i && v(), k(0), e.consume(S);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: a
    }), y(S);
  }
  function y(S) {
    if (S === null) {
      b(e.exit("chunkFlow"), !0), k(0), e.consume(S);
      return;
    }
    return R(S) ? (e.consume(S), b(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, o) : (e.consume(S), y);
  }
  function b(S, D) {
    const F = t.sliceStream(S);
    if (D && F.push(null), S.previous = a, a && (a.next = S), a = S, i.defineSkip(S.start), i.write(F), t.parser.lazy[S.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < l && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > l)
        )
          return;
      const M = t.events.length;
      let U = M, $, x;
      for (; U--; )
        if (t.events[U][0] === "exit" && t.events[U][1].type === "chunkFlow") {
          if ($) {
            x = t.events[U][1].end;
            break;
          }
          $ = !0;
        }
      for (k(r), w = M; w < t.events.length; )
        t.events[w][1].end = {
          ...x
        }, w++;
      ve(t.events, U + 1, 0, t.events.slice(M)), t.events.length = w;
    }
  }
  function k(S) {
    let D = n.length;
    for (; D-- > S; ) {
      const F = n[D];
      t.containerState = F[1], F[0].exit.call(t, e);
    }
    n.length = S;
  }
  function v() {
    i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function Mo(e, t, n) {
  return X(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function nt(e) {
  if (e === null || Y(e) || Ge(e))
    return 1;
  if (Ht(e))
    return 2;
}
function $t(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const a = e[i].resolveAll;
    a && !r.includes(a) && (t = a(t, n), r.push(a));
  }
  return t;
}
const kn = {
  name: "attention",
  resolveAll: No,
  tokenize: zo
};
function No(e, t) {
  let n = -1, r, i, a, l, o, s, u, h;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const c = {
            ...e[r][1].end
          }, p = {
            ...e[n][1].start
          };
          mr(c, -s), mr(p, s), l = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
            end: {
              ...e[r][1].end
            }
          }, o = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: p
          }, a = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: s > 1 ? "strong" : "emphasis",
            start: {
              ...l.start
            },
            end: {
              ...o.end
            }
          }, e[r][1].end = {
            ...l.start
          }, e[n][1].start = {
            ...o.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = Ae(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = Ae(u, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["enter", a, t]]), u = Ae(u, $t(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = Ae(u, [["exit", a, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (h = 2, u = Ae(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : h = 0, ve(e, r - 1, n - r + 3, u), n = r + u.length - h - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function zo(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = nt(r);
  let a;
  return l;
  function l(s) {
    return a = s, e.enter("attentionSequence"), o(s);
  }
  function o(s) {
    if (s === a)
      return e.consume(s), o;
    const u = e.exit("attentionSequence"), h = nt(s), c = !h || h === 2 && i || n.includes(s), p = !i || i === 2 && h || n.includes(r);
    return u._open = !!(a === 42 ? c : c && (i || !p)), u._close = !!(a === 42 ? p : p && (h || !c)), t(s);
  }
}
function mr(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Oo = {
  name: "autolink",
  tokenize: Bo
};
function Bo(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
  }
  function a(f) {
    return ye(f) ? (e.consume(f), l) : f === 64 ? n(f) : u(f);
  }
  function l(f) {
    return f === 43 || f === 45 || f === 46 || de(f) ? (r = 1, o(f)) : u(f);
  }
  function o(f) {
    return f === 58 ? (e.consume(f), r = 0, s) : (f === 43 || f === 45 || f === 46 || de(f)) && r++ < 32 ? (e.consume(f), o) : (r = 0, u(f));
  }
  function s(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || Pt(f) ? n(f) : (e.consume(f), s);
  }
  function u(f) {
    return f === 64 ? (e.consume(f), h) : To(f) ? (e.consume(f), u) : n(f);
  }
  function h(f) {
    return de(f) ? c(f) : n(f);
  }
  function c(f) {
    return f === 46 ? (e.consume(f), r = 0, h) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(f);
  }
  function p(f) {
    if ((f === 45 || de(f)) && r++ < 63) {
      const d = f === 45 ? p : c;
      return e.consume(f), d;
    }
    return n(f);
  }
}
const xt = {
  partial: !0,
  tokenize: Ho
};
function Ho(e, t, n) {
  return r;
  function r(a) {
    return j(a) ? X(e, i, "linePrefix")(a) : i(a);
  }
  function i(a) {
    return a === null || R(a) ? t(a) : n(a);
  }
}
const Oi = {
  continuation: {
    tokenize: Vo
  },
  exit: jo,
  name: "blockQuote",
  tokenize: $o
};
function $o(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const o = r.containerState;
      return o.open || (e.enter("blockQuote", {
        _container: !0
      }), o.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), a;
    }
    return n(l);
  }
  function a(l) {
    return j(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function Vo(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return j(l) ? X(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : a(l);
  }
  function a(l) {
    return e.attempt(Oi, t, n)(l);
  }
}
function jo(e) {
  e.exit("blockQuote");
}
const Bi = {
  name: "characterEscape",
  tokenize: Uo
};
function Uo(e, t, n) {
  return r;
  function r(a) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), i;
  }
  function i(a) {
    return Lo(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(a);
  }
}
const Hi = {
  name: "characterReference",
  tokenize: qo
};
function qo(e, t, n) {
  const r = this;
  let i = 0, a, l;
  return o;
  function o(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), s;
  }
  function s(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), a = 31, l = de, h(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, l = Po, h) : (e.enter("characterReferenceValue"), a = 7, l = yn, h(c));
  }
  function h(c) {
    if (c === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return l === de && !On(r.sliceSerialize(p)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(c) && i++ < a ? (e.consume(c), h) : n(c);
  }
}
const gr = {
  partial: !0,
  tokenize: Go
}, yr = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Wo
};
function Wo(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: F
  };
  let a = 0, l = 0, o;
  return s;
  function s(w) {
    return u(w);
  }
  function u(w) {
    const M = r.events[r.events.length - 1];
    return a = M && M[1].type === "linePrefix" ? M[2].sliceSerialize(M[1], !0).length : 0, o = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), h(w);
  }
  function h(w) {
    return w === o ? (l++, e.consume(w), h) : l < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), j(w) ? X(e, c, "whitespace")(w) : c(w));
  }
  function c(w) {
    return w === null || R(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(gr, y, D)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(w));
  }
  function p(w) {
    return w === null || R(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(w)) : j(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), X(e, f, "whitespace")(w)) : w === 96 && w === o ? n(w) : (e.consume(w), p);
  }
  function f(w) {
    return w === null || R(w) ? c(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), d(w));
  }
  function d(w) {
    return w === null || R(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(w)) : w === 96 && w === o ? n(w) : (e.consume(w), d);
  }
  function y(w) {
    return e.attempt(i, D, b)(w);
  }
  function b(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), k;
  }
  function k(w) {
    return a > 0 && j(w) ? X(e, v, "linePrefix", a + 1)(w) : v(w);
  }
  function v(w) {
    return w === null || R(w) ? e.check(gr, y, D)(w) : (e.enter("codeFlowValue"), S(w));
  }
  function S(w) {
    return w === null || R(w) ? (e.exit("codeFlowValue"), v(w)) : (e.consume(w), S);
  }
  function D(w) {
    return e.exit("codeFenced"), t(w);
  }
  function F(w, M, U) {
    let $ = 0;
    return x;
    function x(_) {
      return w.enter("lineEnding"), w.consume(_), w.exit("lineEnding"), T;
    }
    function T(_) {
      return w.enter("codeFencedFence"), j(_) ? X(w, L, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(_) : L(_);
    }
    function L(_) {
      return _ === o ? (w.enter("codeFencedFenceSequence"), q(_)) : U(_);
    }
    function q(_) {
      return _ === o ? ($++, w.consume(_), q) : $ >= l ? (w.exit("codeFencedFenceSequence"), j(_) ? X(w, P, "whitespace")(_) : P(_)) : U(_);
    }
    function P(_) {
      return _ === null || R(_) ? (w.exit("codeFencedFence"), M(_)) : U(_);
    }
  }
}
function Go(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a);
  }
  function a(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
const Zt = {
  name: "codeIndented",
  tokenize: Zo
}, Xo = {
  partial: !0,
  tokenize: Ko
};
function Zo(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), X(e, a, "linePrefix", 5)(u);
  }
  function a(u) {
    const h = r.events[r.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? l(u) : n(u);
  }
  function l(u) {
    return u === null ? s(u) : R(u) ? e.attempt(Xo, l, s)(u) : (e.enter("codeFlowValue"), o(u));
  }
  function o(u) {
    return u === null || R(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), o);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function Ko(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? n(l) : R(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : X(e, a, "linePrefix", 5)(l);
  }
  function a(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(l) : R(l) ? i(l) : n(l);
  }
}
const Yo = {
  name: "codeText",
  previous: Jo,
  resolve: Qo,
  tokenize: es
};
function Qo(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function Jo(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function es(e, t, n) {
  let r = 0, i, a;
  return l;
  function l(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), o(c);
  }
  function o(c) {
    return c === 96 ? (e.consume(c), r++, o) : (e.exit("codeTextSequence"), s(c));
  }
  function s(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), s) : c === 96 ? (a = e.enter("codeTextSequence"), i = 0, h(c)) : R(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || R(c) ? (e.exit("codeTextData"), s(c)) : (e.consume(c), u);
  }
  function h(c) {
    return c === 96 ? (e.consume(c), i++, h) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (a.type = "codeTextData", u(c));
  }
}
class ts {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
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
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
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
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
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
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const a = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && ct(this.left, r), a.reverse();
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
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
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
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), ct(this.left, t);
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
  unshift(t) {
    this.setCursor(0), this.right.push(t);
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
  unshiftMany(t) {
    this.setCursor(0), ct(this.right, t.reverse());
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
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        ct(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        ct(this.left, n.reverse());
      }
  }
}
function ct(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function $i(e) {
  const t = {};
  let n = -1, r, i, a, l, o, s, u;
  const h = new ts(e);
  for (; ++n < h.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = h.get(n), n && r[1].type === "chunkFlow" && h.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, a = 0, a < s.length && s[a][1].type === "lineEndingBlank" && (a += 2), a < s.length && s[a][1].type === "content"))
      for (; ++a < s.length && s[a][1].type !== "content"; )
        s[a][1].type === "chunkText" && (s[a][1]._isInFirstContentOfListItem = !0, a++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, ns(h, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (a = n, i = void 0; a--; )
        if (l = h.get(a), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (i && (h.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = a);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...h.get(i)[1].start
      }, o = h.slice(i, n), o.unshift(r), h.splice(i, n - i + 1, o));
    }
  }
  return ve(e, 0, Number.POSITIVE_INFINITY, h.slice(0)), !u;
}
function ns(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const a = [];
  let l = n._tokenizer;
  l || (l = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const o = l.events, s = [], u = {};
  let h, c, p = -1, f = n, d = 0, y = 0;
  const b = [y];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; )
      ;
    a.push(i), f._tokenizer || (h = r.sliceStream(f), f.next || h.push(null), c && l.defineSkip(f.start), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(h), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), c = f, f = f.next;
  }
  for (f = n; ++p < o.length; )
    // Find a void token that includes a break.
    o[p][0] === "exit" && o[p - 1][0] === "enter" && o[p][1].type === o[p - 1][1].type && o[p][1].start.line !== o[p][1].end.line && (y = p + 1, b.push(y), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (l.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : b.pop(), p = b.length; p--; ) {
    const k = o.slice(b[p], b[p + 1]), v = a.pop();
    s.push([v, v + k.length - 1]), e.splice(v, 2, k);
  }
  for (s.reverse(), p = -1; ++p < s.length; )
    u[d + s[p][0]] = d + s[p][1], d += s[p][1] - s[p][0] - 1;
  return u;
}
const rs = {
  resolve: ls,
  tokenize: as
}, is = {
  partial: !0,
  tokenize: os
};
function ls(e) {
  return $i(e), e;
}
function as(e, t) {
  let n;
  return r;
  function r(o) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(o);
  }
  function i(o) {
    return o === null ? a(o) : R(o) ? e.check(is, l, a)(o) : (e.consume(o), i);
  }
  function a(o) {
    return e.exit("chunkContent"), e.exit("content"), t(o);
  }
  function l(o) {
    return e.consume(o), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function os(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), X(e, a, "linePrefix");
  }
  function a(l) {
    if (l === null || R(l))
      return n(l);
    const o = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function Vi(e, t, n, r, i, a, l, o, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let h = 0;
  return c;
  function c(k) {
    return k === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(k), e.exit(a), p) : k === null || k === 32 || k === 41 || Pt(k) ? n(k) : (e.enter(r), e.enter(l), e.enter(o), e.enter("chunkString", {
      contentType: "string"
    }), y(k));
  }
  function p(k) {
    return k === 62 ? (e.enter(a), e.consume(k), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(o), e.enter("chunkString", {
      contentType: "string"
    }), f(k));
  }
  function f(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(o), p(k)) : k === null || k === 60 || R(k) ? n(k) : (e.consume(k), k === 92 ? d : f);
  }
  function d(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), f) : f(k);
  }
  function y(k) {
    return !h && (k === null || k === 41 || Y(k)) ? (e.exit("chunkString"), e.exit(o), e.exit(l), e.exit(r), t(k)) : h < u && k === 40 ? (e.consume(k), h++, y) : k === 41 ? (e.consume(k), h--, y) : k === null || k === 32 || k === 40 || Pt(k) ? n(k) : (e.consume(k), k === 92 ? b : y);
  }
  function b(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), y) : y(k);
  }
}
function ji(e, t, n, r, i, a) {
  const l = this;
  let o = 0, s;
  return u;
  function u(f) {
    return e.enter(r), e.enter(i), e.consume(f), e.exit(i), e.enter(a), h;
  }
  function h(f) {
    return o > 999 || f === null || f === 91 || f === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    f === 94 && !o && "_hiddenFootnoteSupport" in l.parser.constructs ? n(f) : f === 93 ? (e.exit(a), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : R(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), h) : (e.enter("chunkString", {
      contentType: "string"
    }), c(f));
  }
  function c(f) {
    return f === null || f === 91 || f === 93 || R(f) || o++ > 999 ? (e.exit("chunkString"), h(f)) : (e.consume(f), s || (s = !j(f)), f === 92 ? p : c);
  }
  function p(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), o++, c) : c(f);
  }
}
function Ui(e, t, n, r, i, a) {
  let l;
  return o;
  function o(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), l = p === 40 ? 41 : p, s) : n(p);
  }
  function s(p) {
    return p === l ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(a), u(p));
  }
  function u(p) {
    return p === l ? (e.exit(a), s(l)) : p === null ? n(p) : R(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), X(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), h(p));
  }
  function h(p) {
    return p === l || p === null || R(p) ? (e.exit("chunkString"), u(p)) : (e.consume(p), p === 92 ? c : h);
  }
  function c(p) {
    return p === l || p === 92 ? (e.consume(p), h) : h(p);
  }
}
function pt(e, t) {
  let n;
  return r;
  function r(i) {
    return R(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : j(i) ? X(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const ss = {
  name: "definition",
  tokenize: cs
}, us = {
  partial: !0,
  tokenize: hs
};
function cs(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(f) {
    return e.enter("definition"), l(f);
  }
  function l(f) {
    return ji.call(
      r,
      e,
      o,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(f);
  }
  function o(f) {
    return i = Te(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : n(f);
  }
  function s(f) {
    return Y(f) ? pt(e, u)(f) : u(f);
  }
  function u(f) {
    return Vi(
      e,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(f);
  }
  function h(f) {
    return e.attempt(us, c, c)(f);
  }
  function c(f) {
    return j(f) ? X(e, p, "whitespace")(f) : p(f);
  }
  function p(f) {
    return f === null || R(f) ? (e.exit("definition"), r.parser.defined.push(i), t(f)) : n(f);
  }
}
function hs(e, t, n) {
  return r;
  function r(o) {
    return Y(o) ? pt(e, i)(o) : n(o);
  }
  function i(o) {
    return Ui(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(o);
  }
  function a(o) {
    return j(o) ? X(e, l, "whitespace")(o) : l(o);
  }
  function l(o) {
    return o === null || R(o) ? t(o) : n(o);
  }
}
const fs = {
  name: "hardBreakEscape",
  tokenize: ps
};
function ps(e, t, n) {
  return r;
  function r(a) {
    return e.enter("hardBreakEscape"), e.consume(a), i;
  }
  function i(a) {
    return R(a) ? (e.exit("hardBreakEscape"), t(a)) : n(a);
  }
}
const ds = {
  name: "headingAtx",
  resolve: ms,
  tokenize: gs
};
function ms(e, t) {
  let n = e.length - 2, r = 3, i, a;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, a = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, ve(e, r, n - r + 1, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]])), e;
}
function gs(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("atxHeading"), a(h);
  }
  function a(h) {
    return e.enter("atxHeadingSequence"), l(h);
  }
  function l(h) {
    return h === 35 && r++ < 6 ? (e.consume(h), l) : h === null || Y(h) ? (e.exit("atxHeadingSequence"), o(h)) : n(h);
  }
  function o(h) {
    return h === 35 ? (e.enter("atxHeadingSequence"), s(h)) : h === null || R(h) ? (e.exit("atxHeading"), t(h)) : j(h) ? X(e, o, "whitespace")(h) : (e.enter("atxHeadingText"), u(h));
  }
  function s(h) {
    return h === 35 ? (e.consume(h), s) : (e.exit("atxHeadingSequence"), o(h));
  }
  function u(h) {
    return h === null || h === 35 || Y(h) ? (e.exit("atxHeadingText"), o(h)) : (e.consume(h), u);
  }
}
const ys = [
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
], kr = ["pre", "script", "style", "textarea"], ks = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: ws,
  tokenize: Cs
}, xs = {
  partial: !0,
  tokenize: Es
}, bs = {
  partial: !0,
  tokenize: Ss
};
function ws(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Cs(e, t, n) {
  const r = this;
  let i, a, l, o, s;
  return u;
  function u(g) {
    return h(g);
  }
  function h(g) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), c;
  }
  function c(g) {
    return g === 33 ? (e.consume(g), p) : g === 47 ? (e.consume(g), a = !0, y) : g === 63 ? (e.consume(g), i = 3, r.interrupt ? t : m) : ye(g) ? (e.consume(g), l = String.fromCharCode(g), b) : n(g);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), i = 2, f) : g === 91 ? (e.consume(g), i = 5, o = 0, d) : ye(g) ? (e.consume(g), i = 4, r.interrupt ? t : m) : n(g);
  }
  function f(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? t : m) : n(g);
  }
  function d(g) {
    const he = "CDATA[";
    return g === he.charCodeAt(o++) ? (e.consume(g), o === he.length ? r.interrupt ? t : L : d) : n(g);
  }
  function y(g) {
    return ye(g) ? (e.consume(g), l = String.fromCharCode(g), b) : n(g);
  }
  function b(g) {
    if (g === null || g === 47 || g === 62 || Y(g)) {
      const he = g === 47, Fe = l.toLowerCase();
      return !he && !a && kr.includes(Fe) ? (i = 1, r.interrupt ? t(g) : L(g)) : ys.includes(l.toLowerCase()) ? (i = 6, he ? (e.consume(g), k) : r.interrupt ? t(g) : L(g)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(g) : a ? v(g) : S(g));
    }
    return g === 45 || de(g) ? (e.consume(g), l += String.fromCharCode(g), b) : n(g);
  }
  function k(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? t : L) : n(g);
  }
  function v(g) {
    return j(g) ? (e.consume(g), v) : x(g);
  }
  function S(g) {
    return g === 47 ? (e.consume(g), x) : g === 58 || g === 95 || ye(g) ? (e.consume(g), D) : j(g) ? (e.consume(g), S) : x(g);
  }
  function D(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || de(g) ? (e.consume(g), D) : F(g);
  }
  function F(g) {
    return g === 61 ? (e.consume(g), w) : j(g) ? (e.consume(g), F) : S(g);
  }
  function w(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), s = g, M) : j(g) ? (e.consume(g), w) : U(g);
  }
  function M(g) {
    return g === s ? (e.consume(g), s = null, $) : g === null || R(g) ? n(g) : (e.consume(g), M);
  }
  function U(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || Y(g) ? F(g) : (e.consume(g), U);
  }
  function $(g) {
    return g === 47 || g === 62 || j(g) ? S(g) : n(g);
  }
  function x(g) {
    return g === 62 ? (e.consume(g), T) : n(g);
  }
  function T(g) {
    return g === null || R(g) ? L(g) : j(g) ? (e.consume(g), T) : n(g);
  }
  function L(g) {
    return g === 45 && i === 2 ? (e.consume(g), H) : g === 60 && i === 1 ? (e.consume(g), ee) : g === 62 && i === 4 ? (e.consume(g), ce) : g === 63 && i === 3 ? (e.consume(g), m) : g === 93 && i === 5 ? (e.consume(g), pe) : R(g) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(xs, oe, q)(g)) : g === null || R(g) ? (e.exit("htmlFlowData"), q(g)) : (e.consume(g), L);
  }
  function q(g) {
    return e.check(bs, P, oe)(g);
  }
  function P(g) {
    return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), _;
  }
  function _(g) {
    return g === null || R(g) ? q(g) : (e.enter("htmlFlowData"), L(g));
  }
  function H(g) {
    return g === 45 ? (e.consume(g), m) : L(g);
  }
  function ee(g) {
    return g === 47 ? (e.consume(g), l = "", ie) : L(g);
  }
  function ie(g) {
    if (g === 62) {
      const he = l.toLowerCase();
      return kr.includes(he) ? (e.consume(g), ce) : L(g);
    }
    return ye(g) && l.length < 8 ? (e.consume(g), l += String.fromCharCode(g), ie) : L(g);
  }
  function pe(g) {
    return g === 93 ? (e.consume(g), m) : L(g);
  }
  function m(g) {
    return g === 62 ? (e.consume(g), ce) : g === 45 && i === 2 ? (e.consume(g), m) : L(g);
  }
  function ce(g) {
    return g === null || R(g) ? (e.exit("htmlFlowData"), oe(g)) : (e.consume(g), ce);
  }
  function oe(g) {
    return e.exit("htmlFlow"), t(g);
  }
}
function Ss(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return R(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a) : n(l);
  }
  function a(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function Es(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(xt, t, n);
  }
}
const vs = {
  name: "htmlText",
  tokenize: As
};
function As(e, t, n) {
  const r = this;
  let i, a, l;
  return o;
  function o(m) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(m), s;
  }
  function s(m) {
    return m === 33 ? (e.consume(m), u) : m === 47 ? (e.consume(m), F) : m === 63 ? (e.consume(m), S) : ye(m) ? (e.consume(m), U) : n(m);
  }
  function u(m) {
    return m === 45 ? (e.consume(m), h) : m === 91 ? (e.consume(m), a = 0, d) : ye(m) ? (e.consume(m), v) : n(m);
  }
  function h(m) {
    return m === 45 ? (e.consume(m), f) : n(m);
  }
  function c(m) {
    return m === null ? n(m) : m === 45 ? (e.consume(m), p) : R(m) ? (l = c, ee(m)) : (e.consume(m), c);
  }
  function p(m) {
    return m === 45 ? (e.consume(m), f) : c(m);
  }
  function f(m) {
    return m === 62 ? H(m) : m === 45 ? p(m) : c(m);
  }
  function d(m) {
    const ce = "CDATA[";
    return m === ce.charCodeAt(a++) ? (e.consume(m), a === ce.length ? y : d) : n(m);
  }
  function y(m) {
    return m === null ? n(m) : m === 93 ? (e.consume(m), b) : R(m) ? (l = y, ee(m)) : (e.consume(m), y);
  }
  function b(m) {
    return m === 93 ? (e.consume(m), k) : y(m);
  }
  function k(m) {
    return m === 62 ? H(m) : m === 93 ? (e.consume(m), k) : y(m);
  }
  function v(m) {
    return m === null || m === 62 ? H(m) : R(m) ? (l = v, ee(m)) : (e.consume(m), v);
  }
  function S(m) {
    return m === null ? n(m) : m === 63 ? (e.consume(m), D) : R(m) ? (l = S, ee(m)) : (e.consume(m), S);
  }
  function D(m) {
    return m === 62 ? H(m) : S(m);
  }
  function F(m) {
    return ye(m) ? (e.consume(m), w) : n(m);
  }
  function w(m) {
    return m === 45 || de(m) ? (e.consume(m), w) : M(m);
  }
  function M(m) {
    return R(m) ? (l = M, ee(m)) : j(m) ? (e.consume(m), M) : H(m);
  }
  function U(m) {
    return m === 45 || de(m) ? (e.consume(m), U) : m === 47 || m === 62 || Y(m) ? $(m) : n(m);
  }
  function $(m) {
    return m === 47 ? (e.consume(m), H) : m === 58 || m === 95 || ye(m) ? (e.consume(m), x) : R(m) ? (l = $, ee(m)) : j(m) ? (e.consume(m), $) : H(m);
  }
  function x(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || de(m) ? (e.consume(m), x) : T(m);
  }
  function T(m) {
    return m === 61 ? (e.consume(m), L) : R(m) ? (l = T, ee(m)) : j(m) ? (e.consume(m), T) : $(m);
  }
  function L(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), i = m, q) : R(m) ? (l = L, ee(m)) : j(m) ? (e.consume(m), L) : (e.consume(m), P);
  }
  function q(m) {
    return m === i ? (e.consume(m), i = void 0, _) : m === null ? n(m) : R(m) ? (l = q, ee(m)) : (e.consume(m), q);
  }
  function P(m) {
    return m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96 ? n(m) : m === 47 || m === 62 || Y(m) ? $(m) : (e.consume(m), P);
  }
  function _(m) {
    return m === 47 || m === 62 || Y(m) ? $(m) : n(m);
  }
  function H(m) {
    return m === 62 ? (e.consume(m), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(m);
  }
  function ee(m) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), ie;
  }
  function ie(m) {
    return j(m) ? X(e, pe, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m) : pe(m);
  }
  function pe(m) {
    return e.enter("htmlTextData"), l(m);
  }
}
const Bn = {
  name: "labelEnd",
  resolveAll: Ls,
  resolveTo: Ds,
  tokenize: Fs
}, Is = {
  tokenize: Rs
}, Ts = {
  tokenize: _s
}, Ps = {
  tokenize: Ms
};
function Ls(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && ve(e, 0, e.length, n), e;
}
function Ds(e, t) {
  let n = e.length, r = 0, i, a, l, o;
  for (; n--; )
    if (i = e[n][1], a) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = n);
  const s = {
    type: e[a][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[l][1].end
    }
  }, h = {
    type: "labelText",
    start: {
      ...e[a + r + 2][1].end
    },
    end: {
      ...e[l - 2][1].start
    }
  };
  return o = [["enter", s, t], ["enter", u, t]], o = Ae(o, e.slice(a + 1, a + r + 3)), o = Ae(o, [["enter", h, t]]), o = Ae(o, $t(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, l - 3), t)), o = Ae(o, [["exit", h, t], e[l - 2], e[l - 1], ["exit", u, t]]), o = Ae(o, e.slice(l + 1)), o = Ae(o, [["exit", s, t]]), ve(e, a, e.length, o), e;
}
function Fs(e, t, n) {
  const r = this;
  let i = r.events.length, a, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      a = r.events[i][1];
      break;
    }
  return o;
  function o(p) {
    return a ? a._inactive ? c(p) : (l = r.parser.defined.includes(Te(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(p);
  }
  function s(p) {
    return p === 40 ? e.attempt(Is, h, l ? h : c)(p) : p === 91 ? e.attempt(Ts, h, l ? u : c)(p) : l ? h(p) : c(p);
  }
  function u(p) {
    return e.attempt(Ps, h, c)(p);
  }
  function h(p) {
    return t(p);
  }
  function c(p) {
    return a._balanced = !0, n(p);
  }
}
function Rs(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return Y(c) ? pt(e, a)(c) : a(c);
  }
  function a(c) {
    return c === 41 ? h(c) : Vi(e, l, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function l(c) {
    return Y(c) ? pt(e, s)(c) : h(c);
  }
  function o(c) {
    return n(c);
  }
  function s(c) {
    return c === 34 || c === 39 || c === 40 ? Ui(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : h(c);
  }
  function u(c) {
    return Y(c) ? pt(e, h)(c) : h(c);
  }
  function h(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function _s(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return ji.call(r, e, a, l, "reference", "referenceMarker", "referenceString")(o);
  }
  function a(o) {
    return r.parser.defined.includes(Te(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(o) : n(o);
  }
  function l(o) {
    return n(o);
  }
}
function Ms(e, t, n) {
  return r;
  function r(a) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), i;
  }
  function i(a) {
    return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : n(a);
  }
}
const Ns = {
  name: "labelStartImage",
  resolveAll: Bn.resolveAll,
  tokenize: zs
};
function zs(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(o), e.exit("labelImageMarker"), a;
  }
  function a(o) {
    return o === 91 ? (e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelImage"), l) : n(o);
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const Os = {
  name: "labelStartLink",
  resolveAll: Bn.resolveAll,
  tokenize: Bs
};
function Bs(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), a;
  }
  function a(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const Kt = {
  name: "lineEnding",
  tokenize: Hs
};
function Hs(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), X(e, t, "linePrefix");
  }
}
const At = {
  name: "thematicBreak",
  tokenize: $s
};
function $s(e, t, n) {
  let r = 0, i;
  return a;
  function a(u) {
    return e.enter("thematicBreak"), l(u);
  }
  function l(u) {
    return i = u, o(u);
  }
  function o(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || R(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), j(u) ? X(e, o, "whitespace")(u) : o(u));
  }
}
const ke = {
  continuation: {
    tokenize: qs
  },
  exit: Gs,
  name: "list",
  tokenize: Us
}, Vs = {
  partial: !0,
  tokenize: Xs
}, js = {
  partial: !0,
  tokenize: Ws
};
function Us(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return o;
  function o(f) {
    const d = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (d === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : yn(f)) {
      if (r.containerState.type || (r.containerState.type = d, e.enter(d, {
        _container: !0
      })), d === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(At, n, u)(f) : u(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(f);
    }
    return n(f);
  }
  function s(f) {
    return yn(f) && ++l < 10 ? (e.consume(f), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), u(f)) : n(f);
  }
  function u(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      xt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : h,
      e.attempt(Vs, p, c)
    );
  }
  function h(f) {
    return r.containerState.initialBlankLine = !0, a++, p(f);
  }
  function c(f) {
    return j(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), p) : n(f);
  }
  function p(f) {
    return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(f);
  }
}
function qs(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(xt, i, a);
  function i(o) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, X(e, t, "listItemIndent", r.containerState.size + 1)(o);
  }
  function a(o) {
    return r.containerState.furtherBlankLines || !j(o) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(o)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(js, t, l)(o));
  }
  function l(o) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, X(e, e.attempt(ke, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o);
  }
}
function Ws(e, t, n) {
  const r = this;
  return X(e, i, "listItemIndent", r.containerState.size + 1);
  function i(a) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(a) : n(a);
  }
}
function Gs(e) {
  e.exit(this.containerState.type);
}
function Xs(e, t, n) {
  const r = this;
  return X(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(a) {
    const l = r.events[r.events.length - 1];
    return !j(a) && l && l[1].type === "listItemPrefixWhitespace" ? t(a) : n(a);
  }
}
const xr = {
  name: "setextUnderline",
  resolveTo: Zs,
  tokenize: Ks
};
function Zs(e, t) {
  let n = e.length, r, i, a;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
  const l = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, ["enter", l, t]), e.splice(a + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[a][1].end
  }) : e[r][1] = l, e.push(["exit", l, t]), e;
}
function Ks(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(u) {
    let h = r.events.length, c;
    for (; h--; )
      if (r.events[h][1].type !== "lineEnding" && r.events[h][1].type !== "linePrefix" && r.events[h][1].type !== "content") {
        c = r.events[h][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = u, l(u)) : n(u);
  }
  function l(u) {
    return e.enter("setextHeadingLineSequence"), o(u);
  }
  function o(u) {
    return u === i ? (e.consume(u), o) : (e.exit("setextHeadingLineSequence"), j(u) ? X(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || R(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const Ys = {
  tokenize: Qs
};
function Qs(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    xt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, X(e, e.attempt(this.parser.constructs.flow, i, e.attempt(rs, i)), "linePrefix"))
  );
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(a), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Js = {
  resolveAll: Wi()
}, eu = qi("string"), tu = qi("text");
function qi(e) {
  return {
    resolveAll: Wi(e === "text" ? nu : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], a = n.attempt(i, l, o);
    return l;
    function l(h) {
      return u(h) ? a(h) : o(h);
    }
    function o(h) {
      if (h === null) {
        n.consume(h);
        return;
      }
      return n.enter("data"), n.consume(h), s;
    }
    function s(h) {
      return u(h) ? (n.exit("data"), a(h)) : (n.consume(h), s);
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
function Wi(e) {
  return t;
  function t(n, r) {
    let i = -1, a;
    for (; ++i <= n.length; )
      a === void 0 ? n[i] && n[i][1].type === "data" && (a = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== a + 2 && (n[a][1].end = n[i - 1][1].end, n.splice(a + 2, i - a - 2), i = a + 2), a = void 0);
    return e ? e(n, r) : n;
  }
}
function nu(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let a = i.length, l = -1, o = 0, s;
      for (; a--; ) {
        const u = i[a];
        if (typeof u == "string") {
          for (l = u.length; u.charCodeAt(l - 1) === 32; )
            o++, l--;
          if (l) break;
          l = -1;
        } else if (u === -2)
          s = !0, o++;
        else if (u !== -1) {
          a++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (o = 0), o) {
        const u = {
          type: n === e.length || s || o < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: a ? l : r.start._bufferIndex + l,
            _index: r.start._index + a,
            line: r.end.line,
            column: r.end.column - o,
            offset: r.end.offset - o
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2);
      }
      n++;
    }
  return e;
}
const ru = {
  42: ke,
  43: ke,
  45: ke,
  48: ke,
  49: ke,
  50: ke,
  51: ke,
  52: ke,
  53: ke,
  54: ke,
  55: ke,
  56: ke,
  57: ke,
  62: Oi
}, iu = {
  91: ss
}, lu = {
  [-2]: Zt,
  [-1]: Zt,
  32: Zt
}, au = {
  35: ds,
  42: At,
  45: [xr, At],
  60: ks,
  61: xr,
  95: At,
  96: yr,
  126: yr
}, ou = {
  38: Hi,
  92: Bi
}, su = {
  [-5]: Kt,
  [-4]: Kt,
  [-3]: Kt,
  33: Ns,
  38: Hi,
  42: kn,
  60: [Oo, vs],
  91: Os,
  92: [fs, Bi],
  93: Bn,
  95: kn,
  96: Yo
}, uu = {
  null: [kn, Js]
}, cu = {
  null: [42, 95]
}, hu = {
  null: []
}, fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: cu,
  contentInitial: iu,
  disable: hu,
  document: ru,
  flow: au,
  flowInitial: lu,
  insideSpan: uu,
  string: ou,
  text: su
}, Symbol.toStringTag, { value: "Module" }));
function pu(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, a = [];
  let l = [], o = [];
  const s = {
    attempt: M(F),
    check: M(w),
    consume: v,
    enter: S,
    exit: D,
    interrupt: M(w, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: y,
    events: [],
    now: d,
    parser: e,
    previous: null,
    sliceSerialize: p,
    sliceStream: f,
    write: c
  };
  let h = t.tokenize.call(u, s);
  return t.resolveAll && a.push(t), u;
  function c(T) {
    return l = Ae(l, T), b(), l[l.length - 1] !== null ? [] : (U(t, 0), u.events = $t(a, u.events, u), u.events);
  }
  function p(T, L) {
    return mu(f(T), L);
  }
  function f(T) {
    return du(l, T);
  }
  function d() {
    const {
      _bufferIndex: T,
      _index: L,
      line: q,
      column: P,
      offset: _
    } = r;
    return {
      _bufferIndex: T,
      _index: L,
      line: q,
      column: P,
      offset: _
    };
  }
  function y(T) {
    i[T.line] = T.column, x();
  }
  function b() {
    let T;
    for (; r._index < l.length; ) {
      const L = l[r._index];
      if (typeof L == "string")
        for (T = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === T && r._bufferIndex < L.length; )
          k(L.charCodeAt(r._bufferIndex));
      else
        k(L);
    }
  }
  function k(T) {
    h = h(T);
  }
  function v(T) {
    R(T) ? (r.line++, r.column = 1, r.offset += T === -3 ? 2 : 1, x()) : T !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = T;
  }
  function S(T, L) {
    const q = L || {};
    return q.type = T, q.start = d(), u.events.push(["enter", q, u]), o.push(q), q;
  }
  function D(T) {
    const L = o.pop();
    return L.end = d(), u.events.push(["exit", L, u]), L;
  }
  function F(T, L) {
    U(T, L.from);
  }
  function w(T, L) {
    L.restore();
  }
  function M(T, L) {
    return q;
    function q(P, _, H) {
      let ee, ie, pe, m;
      return Array.isArray(P) ? (
        /* c8 ignore next 1 */
        oe(P)
      ) : "tokenize" in P ? (
        // Looks like a construct.
        oe([
          /** @type {Construct} */
          P
        ])
      ) : ce(P);
      function ce(ae) {
        return O;
        function O(N) {
          const Z = N !== null && ae[N], W = N !== null && ae.null, se = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Z) ? Z : Z ? [Z] : [],
            ...Array.isArray(W) ? W : W ? [W] : []
          ];
          return oe(se)(N);
        }
      }
      function oe(ae) {
        return ee = ae, ie = 0, ae.length === 0 ? H : g(ae[ie]);
      }
      function g(ae) {
        return O;
        function O(N) {
          return m = $(), pe = ae, ae.partial || (u.currentConstruct = ae), ae.name && u.parser.constructs.disable.null.includes(ae.name) ? Fe() : ae.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            L ? Object.assign(Object.create(u), L) : u,
            s,
            he,
            Fe
          )(N);
        }
      }
      function he(ae) {
        return T(pe, m), _;
      }
      function Fe(ae) {
        return m.restore(), ++ie < ee.length ? g(ee[ie]) : H;
      }
    }
  }
  function U(T, L) {
    T.resolveAll && !a.includes(T) && a.push(T), T.resolve && ve(u.events, L, u.events.length - L, T.resolve(u.events.slice(L), u)), T.resolveTo && (u.events = T.resolveTo(u.events, u));
  }
  function $() {
    const T = d(), L = u.previous, q = u.currentConstruct, P = u.events.length, _ = Array.from(o);
    return {
      from: P,
      restore: H
    };
    function H() {
      r = T, u.previous = L, u.currentConstruct = q, u.events.length = P, o = _, x();
    }
  }
  function x() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function du(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex;
  let l;
  if (n === i)
    l = [e[n].slice(r, a)];
  else {
    if (l = e.slice(n, i), r > -1) {
      const o = l[0];
      typeof o == "string" ? l[0] = o.slice(r) : l.shift();
    }
    a > 0 && l.push(e[i].slice(0, a));
  }
  return l;
}
function mu(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const a = e[n];
    let l;
    if (typeof a == "string")
      l = a;
    else switch (a) {
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
        l = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        l = " ";
        break;
      }
      default:
        l = String.fromCharCode(a);
    }
    i = a === -2, r.push(l);
  }
  return r.join("");
}
function gu(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Ni([fu, ...(e || {}).extensions || []])
    ),
    content: i(Do),
    defined: [],
    document: i(Ro),
    flow: i(Ys),
    lazy: {},
    string: i(eu),
    text: i(tu)
  };
  return r;
  function i(a) {
    return l;
    function l(o) {
      return pu(r, a, o);
    }
  }
}
function yu(e) {
  for (; !$i(e); )
    ;
  return e;
}
const br = /[\0\t\n\r]/g;
function ku() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(a, l, o) {
    const s = [];
    let u, h, c, p, f;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(l || void 0).decode(a)), c = 0, t = "", n && (a.charCodeAt(0) === 65279 && c++, n = void 0); c < a.length; ) {
      if (br.lastIndex = c, u = br.exec(a), p = u && u.index !== void 0 ? u.index : a.length, f = a.charCodeAt(p), !u) {
        t = a.slice(c);
        break;
      }
      if (f === 10 && c === p && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), c < p && (s.push(a.slice(c, p)), e += p - c), f) {
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
    return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const xu = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function bu(e) {
  return e.replace(xu, wu);
}
function wu(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), a = i === 120 || i === 88;
    return zi(n.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return On(n) || e;
}
const Gi = {}.hasOwnProperty;
function Cu(e, t, n) {
  return t && typeof t == "object" && (n = t, t = void 0), Su(n)(yu(gu(n).document().write(ku()(e, t, !0))));
}
function Su(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(Qn),
      autolinkProtocol: $,
      autolinkEmail: $,
      atxHeading: a(we),
      blockQuote: a(W),
      characterEscape: $,
      characterReference: $,
      codeFenced: a(se),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: a(se, l),
      codeText: a(ge, l),
      codeTextData: $,
      data: $,
      codeFlowValue: $,
      definition: a(fe),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: a(ne),
      hardBreakEscape: a(Wt),
      hardBreakTrailing: a(Wt),
      htmlFlow: a(Ve, l),
      htmlFlowData: $,
      htmlText: a(Ve, l),
      htmlTextData: $,
      image: a(Yl),
      label: l,
      link: a(Qn),
      listItem: a(Ql),
      listItemValue: p,
      listOrdered: a(Jn, c),
      listUnordered: a(Jn),
      paragraph: a(Jl),
      reference: g,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: a(we),
      strong: a(ea),
      thematicBreak: a(na)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: F,
      autolink: s(),
      autolinkEmail: Z,
      autolinkProtocol: N,
      blockQuote: s(),
      characterEscapeValue: x,
      characterReferenceMarkerHexadecimal: Fe,
      characterReferenceMarkerNumeric: Fe,
      characterReferenceValue: ae,
      characterReference: O,
      codeFenced: s(b),
      codeFencedFence: y,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: d,
      codeFlowValue: x,
      codeIndented: s(k),
      codeText: s(_),
      codeTextData: x,
      data: x,
      definition: s(),
      definitionDestinationString: D,
      definitionLabelString: v,
      definitionTitleString: S,
      emphasis: s(),
      hardBreakEscape: s(L),
      hardBreakTrailing: s(L),
      htmlFlow: s(q),
      htmlFlowData: x,
      htmlText: s(P),
      htmlTextData: x,
      image: s(ee),
      label: pe,
      labelText: ie,
      lineEnding: T,
      link: s(H),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: he,
      resourceDestinationString: m,
      resourceTitleString: ce,
      resource: oe,
      setextHeading: s(U),
      setextHeadingLineSequence: M,
      setextHeadingText: w,
      strong: s(),
      thematicBreak: s()
    }
  };
  Xi(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(C) {
    let I = {
      type: "root",
      children: []
    };
    const z = {
      stack: [I],
      tokenStack: [],
      config: t,
      enter: o,
      exit: u,
      buffer: l,
      resume: h,
      data: n
    }, G = [];
    let K = -1;
    for (; ++K < C.length; )
      if (C[K][1].type === "listOrdered" || C[K][1].type === "listUnordered")
        if (C[K][0] === "enter")
          G.push(K);
        else {
          const Ie = G.pop();
          K = i(C, Ie, K);
        }
    for (K = -1; ++K < C.length; ) {
      const Ie = t[C[K][0]];
      Gi.call(Ie, C[K][1].type) && Ie[C[K][1].type].call(Object.assign({
        sliceSerialize: C[K][2].sliceSerialize
      }, z), C[K][1]);
    }
    if (z.tokenStack.length > 0) {
      const Ie = z.tokenStack[z.tokenStack.length - 1];
      (Ie[1] || wr).call(z, void 0, Ie[0]);
    }
    for (I.position = {
      start: ze(C.length > 0 ? C[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: ze(C.length > 0 ? C[C.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, K = -1; ++K < t.transforms.length; )
      I = t.transforms[K](I) || I;
    return I;
  }
  function i(C, I, z) {
    let G = I - 1, K = -1, Ie = !1, je, Re, lt, at;
    for (; ++G <= z; ) {
      const Ce = C[G];
      switch (Ce[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ce[0] === "enter" ? K++ : K--, at = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ce[0] === "enter" && (je && !at && !K && !lt && (lt = G), at = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          at = void 0;
      }
      if (!K && Ce[0] === "enter" && Ce[1].type === "listItemPrefix" || K === -1 && Ce[0] === "exit" && (Ce[1].type === "listUnordered" || Ce[1].type === "listOrdered")) {
        if (je) {
          let Ze = G;
          for (Re = void 0; Ze--; ) {
            const _e = C[Ze];
            if (_e[1].type === "lineEnding" || _e[1].type === "lineEndingBlank") {
              if (_e[0] === "exit") continue;
              Re && (C[Re][1].type = "lineEndingBlank", Ie = !0), _e[1].type = "lineEnding", Re = Ze;
            } else if (!(_e[1].type === "linePrefix" || _e[1].type === "blockQuotePrefix" || _e[1].type === "blockQuotePrefixWhitespace" || _e[1].type === "blockQuoteMarker" || _e[1].type === "listItemIndent")) break;
          }
          lt && (!Re || lt < Re) && (je._spread = !0), je.end = Object.assign({}, Re ? C[Re][1].start : Ce[1].end), C.splice(Re || G, 0, ["exit", je, Ce[2]]), G++, z++;
        }
        if (Ce[1].type === "listItemPrefix") {
          const Ze = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ce[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          je = Ze, C.splice(G, 0, ["enter", Ze, Ce[2]]), G++, z++, lt = void 0, at = !0;
        }
      }
    }
    return C[I][1]._spread = Ie, z;
  }
  function a(C, I) {
    return z;
    function z(G) {
      o.call(this, C(G), G), I && I.call(this, G);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function o(C, I, z) {
    this.stack[this.stack.length - 1].children.push(C), this.stack.push(C), this.tokenStack.push([I, z || void 0]), C.position = {
      start: ze(I.start),
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
    const z = this.stack.pop(), G = this.tokenStack.pop();
    if (G)
      G[0].type !== C.type && (I ? I.call(this, C, G[0]) : (G[1] || wr).call(this, C, G[0]));
    else throw new Error("Cannot close `" + C.type + "` (" + ft({
      start: C.start,
      end: C.end
    }) + "): it’s not open");
    z.position.end = ze(C.end);
  }
  function h() {
    return zn(this.stack.pop());
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
  function d() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.meta = C;
  }
  function y() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function b() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function k() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C.replace(/(\r?\n|\r)$/g, "");
  }
  function v(C) {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = I, z.identifier = Te(this.sliceSerialize(C)).toLowerCase();
  }
  function S() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = C;
  }
  function D() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = C;
  }
  function F(C) {
    const I = this.stack[this.stack.length - 1];
    if (!I.depth) {
      const z = this.sliceSerialize(C).length;
      I.depth = z;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function M(C) {
    const I = this.stack[this.stack.length - 1];
    I.depth = this.sliceSerialize(C).codePointAt(0) === 61 ? 1 : 2;
  }
  function U() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function $(C) {
    const z = this.stack[this.stack.length - 1].children;
    let G = z[z.length - 1];
    (!G || G.type !== "text") && (G = ta(), G.position = {
      start: ze(C.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, z.push(G)), this.stack.push(G);
  }
  function x(C) {
    const I = this.stack.pop();
    I.value += this.sliceSerialize(C), I.position.end = ze(C.end);
  }
  function T(C) {
    const I = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const z = I.children[I.children.length - 1];
      z.position.end = ze(C.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(I.type) && ($.call(this, C), x.call(this, C));
  }
  function L() {
    this.data.atHardBreak = !0;
  }
  function q() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C;
  }
  function P() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C;
  }
  function _() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C;
  }
  function H() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      C.type += "Reference", C.referenceType = I, delete C.url, delete C.title;
    } else
      delete C.identifier, delete C.label;
    this.data.referenceType = void 0;
  }
  function ee() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      C.type += "Reference", C.referenceType = I, delete C.url, delete C.title;
    } else
      delete C.identifier, delete C.label;
    this.data.referenceType = void 0;
  }
  function ie(C) {
    const I = this.sliceSerialize(C), z = this.stack[this.stack.length - 2];
    z.label = bu(I), z.identifier = Te(I).toLowerCase();
  }
  function pe() {
    const C = this.stack[this.stack.length - 1], I = this.resume(), z = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, z.type === "link") {
      const G = C.children;
      z.children = G;
    } else
      z.alt = I;
  }
  function m() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = C;
  }
  function ce() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = C;
  }
  function oe() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = "collapsed";
  }
  function he(C) {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = I, z.identifier = Te(this.sliceSerialize(C)).toLowerCase(), this.data.referenceType = "full";
  }
  function Fe(C) {
    this.data.characterReferenceType = C.type;
  }
  function ae(C) {
    const I = this.sliceSerialize(C), z = this.data.characterReferenceType;
    let G;
    z ? (G = zi(I, z === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : G = On(I);
    const K = this.stack[this.stack.length - 1];
    K.value += G;
  }
  function O(C) {
    const I = this.stack.pop();
    I.position.end = ze(C.end);
  }
  function N(C) {
    x.call(this, C);
    const I = this.stack[this.stack.length - 1];
    I.url = this.sliceSerialize(C);
  }
  function Z(C) {
    x.call(this, C);
    const I = this.stack[this.stack.length - 1];
    I.url = "mailto:" + this.sliceSerialize(C);
  }
  function W() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function se() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function ge() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function fe() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function ne() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function we() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Wt() {
    return {
      type: "break"
    };
  }
  function Ve() {
    return {
      type: "html",
      value: ""
    };
  }
  function Yl() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Qn() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Jn(C) {
    return {
      type: "list",
      ordered: C.type === "listOrdered",
      start: null,
      spread: C._spread,
      children: []
    };
  }
  function Ql(C) {
    return {
      type: "listItem",
      spread: C._spread,
      checked: null,
      children: []
    };
  }
  function Jl() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function ea() {
    return {
      type: "strong",
      children: []
    };
  }
  function ta() {
    return {
      type: "text",
      value: ""
    };
  }
  function na() {
    return {
      type: "thematicBreak"
    };
  }
}
function ze(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Xi(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Xi(e, r) : Eu(e, r);
  }
}
function Eu(e, t) {
  let n;
  for (n in t)
    if (Gi.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function wr(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + ft({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + ft({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + ft({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function vu(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Cu(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function Au(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Iu(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Tu(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let a = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = { type: "element", tagName: "pre", properties: {}, children: [a] }, e.patch(t, a), a;
}
function Pu(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Lu(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Du(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = it(r.toLowerCase()), a = e.footnoteOrder.indexOf(r);
  let l, o = e.footnoteCounts.get(r);
  o === void 0 ? (o = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = a + 1, o += 1, e.footnoteCounts.set(r, o);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (o > 1 ? "-" + o : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(l) }]
  };
  e.patch(t, s);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [s]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function Fu(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ru(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Zi(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), a = i[0];
  a && a.type === "text" ? a.value = "[" + a.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function _u(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Zi(e, t);
  const i = { src: it(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, a), e.applyData(t, a);
}
function Mu(e, t) {
  const n = { src: it(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Nu(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function zu(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Zi(e, t);
  const i = { href: it(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Ou(e, t) {
  const n = { href: it(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Bu(e, t, n) {
  const r = e.all(t), i = n ? Hu(n) : Ki(t), a = {}, l = [];
  if (typeof t.checked == "boolean") {
    const h = r[0];
    let c;
    h && h.type === "element" && h.tagName === "p" ? c = h : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), a.className = ["task-list-item"];
  }
  let o = -1;
  for (; ++o < r.length; ) {
    const h = r[o];
    (i || o !== 0 || h.type !== "element" || h.tagName !== "p") && l.push({ type: "text", value: `
` }), h.type === "element" && h.tagName === "p" && !i ? l.push(...h.children) : l.push(h);
  }
  const s = r[r.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && l.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: a, children: l };
  return e.patch(t, u), e.applyData(t, u);
}
function Hu(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Ki(n[r]);
  }
  return t;
}
function Ki(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function $u(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const l = r[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const a = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Vu(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ju(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Uu(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function qu(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], l), i.push(l);
  }
  if (n.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, o = Rn(t.children[1]), s = Pi(t.children[t.children.length - 1]);
    o && s && (l.position = { start: o, end: s }), i.push(l);
  }
  const a = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Wu(e, t, n) {
  const r = n ? n.children : void 0, a = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, o = l ? l.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < o; ) {
    const c = t.children[s], p = {}, f = l ? l[s] : void 0;
    f && (p.align = f);
    let d = { type: "element", tagName: a, properties: p, children: [] };
    c && (d.children = e.all(c), e.patch(c, d), d = e.applyData(c, d)), u.push(d);
  }
  const h = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, h), e.applyData(t, h);
}
function Gu(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Cr = 9, Sr = 32;
function Xu(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const a = [];
  for (; r; )
    a.push(
      Er(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return a.push(Er(t.slice(i), i > 0, !1)), a.join("");
}
function Er(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let a = e.codePointAt(r);
    for (; a === Cr || a === Sr; )
      r++, a = e.codePointAt(r);
  }
  if (n) {
    let a = e.codePointAt(i - 1);
    for (; a === Cr || a === Sr; )
      i--, a = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Zu(e, t) {
  const n = { type: "text", value: Xu(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Ku(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Yu = {
  blockquote: Au,
  break: Iu,
  code: Tu,
  delete: Pu,
  emphasis: Lu,
  footnoteReference: Du,
  heading: Fu,
  html: Ru,
  imageReference: _u,
  image: Mu,
  inlineCode: Nu,
  linkReference: zu,
  link: Ou,
  listItem: Bu,
  list: $u,
  paragraph: Vu,
  // @ts-expect-error: root is different, but hard to type.
  root: ju,
  strong: Uu,
  table: qu,
  tableCell: Gu,
  tableRow: Wu,
  text: Zu,
  thematicBreak: Ku,
  toml: wt,
  yaml: wt,
  definition: wt,
  footnoteDefinition: wt
};
function wt() {
}
const Yi = -1, Vt = 0, dt = 1, Lt = 2, Hn = 3, $n = 4, Vn = 5, jn = 6, Qi = 7, Ji = 8, Qu = typeof self == "object" ? self : globalThis, vr = (e, t) => {
  switch (e) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + e);
  }
  return new Qu[e](t);
}, Ju = (e, t) => {
  const n = (i, a) => (e.set(a, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [a, l] = t[i];
    switch (a) {
      case Vt:
      case Yi:
        return n(l, i);
      case dt: {
        const o = n([], i);
        for (const s of l)
          o.push(r(s));
        return o;
      }
      case Lt: {
        const o = n({}, i);
        for (const [s, u] of l)
          o[r(s)] = r(u);
        return o;
      }
      case Hn:
        return n(new Date(l), i);
      case $n: {
        const { source: o, flags: s } = l;
        return n(new RegExp(o, s), i);
      }
      case Vn: {
        const o = n(/* @__PURE__ */ new Map(), i);
        for (const [s, u] of l)
          o.set(r(s), r(u));
        return o;
      }
      case jn: {
        const o = n(/* @__PURE__ */ new Set(), i);
        for (const s of l)
          o.add(r(s));
        return o;
      }
      case Qi: {
        const { name: o, message: s } = l;
        return n(vr(o, s), i);
      }
      case Ji:
        return n(BigInt(l), i);
      case "BigInt":
        return n(Object(BigInt(l)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(l).buffer, l);
      case "DataView": {
        const { buffer: o } = new Uint8Array(l);
        return n(new DataView(o), l);
      }
    }
    return n(vr(a, l), i);
  };
  return r;
}, Ar = (e) => Ju(/* @__PURE__ */ new Map(), e)(0), Ke = "", { toString: ec } = {}, { keys: tc } = Object, ht = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Vt, t];
  const n = ec.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [dt, Ke];
    case "Object":
      return [Lt, Ke];
    case "Date":
      return [Hn, Ke];
    case "RegExp":
      return [$n, Ke];
    case "Map":
      return [Vn, Ke];
    case "Set":
      return [jn, Ke];
    case "DataView":
      return [dt, n];
  }
  return n.includes("Array") ? [dt, n] : n.includes("Error") ? [Qi, n] : [Lt, n];
}, Ct = ([e, t]) => e === Vt && (t === "function" || t === "symbol"), nc = (e, t, n, r) => {
  const i = (l, o) => {
    const s = r.push(l) - 1;
    return n.set(o, s), s;
  }, a = (l) => {
    if (n.has(l))
      return n.get(l);
    let [o, s] = ht(l);
    switch (o) {
      case Vt: {
        let h = l;
        switch (s) {
          case "bigint":
            o = Ji, h = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            h = null;
            break;
          case "undefined":
            return i([Yi], l);
        }
        return i([o, h], l);
      }
      case dt: {
        if (s) {
          let p = l;
          return s === "DataView" ? p = new Uint8Array(l.buffer) : s === "ArrayBuffer" && (p = new Uint8Array(l)), i([s, [...p]], l);
        }
        const h = [], c = i([o, h], l);
        for (const p of l)
          h.push(a(p));
        return c;
      }
      case Lt: {
        if (s)
          switch (s) {
            case "BigInt":
              return i([s, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([s, l.valueOf()], l);
          }
        if (t && "toJSON" in l)
          return a(l.toJSON());
        const h = [], c = i([o, h], l);
        for (const p of tc(l))
          (e || !Ct(ht(l[p]))) && h.push([a(p), a(l[p])]);
        return c;
      }
      case Hn:
        return i([o, l.toISOString()], l);
      case $n: {
        const { source: h, flags: c } = l;
        return i([o, { source: h, flags: c }], l);
      }
      case Vn: {
        const h = [], c = i([o, h], l);
        for (const [p, f] of l)
          (e || !(Ct(ht(p)) || Ct(ht(f)))) && h.push([a(p), a(f)]);
        return c;
      }
      case jn: {
        const h = [], c = i([o, h], l);
        for (const p of l)
          (e || !Ct(ht(p))) && h.push(a(p));
        return c;
      }
    }
    const { message: u } = l;
    return i([o, { name: s, message: u }], l);
  };
  return a;
}, Ir = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return nc(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Dt = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Ar(Ir(e, t)) : structuredClone(e)
) : (e, t) => Ar(Ir(e, t));
function rc(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function ic(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function lc(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || rc, r = e.options.footnoteBackLabel || ic, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, o = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const h = e.all(u), c = String(u.identifier).toUpperCase(), p = it(c.toLowerCase());
    let f = 0;
    const d = [], y = e.footnoteCounts.get(c);
    for (; y !== void 0 && ++f <= y; ) {
      d.length > 0 && d.push({ type: "text", value: " " });
      let v = typeof n == "string" ? n : n(s, f);
      typeof v == "string" && (v = { type: "text", value: v }), d.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + p + (f > 1 ? "-" + f : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, f),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(v) ? v : [v]
      });
    }
    const b = h[h.length - 1];
    if (b && b.type === "element" && b.tagName === "p") {
      const v = b.children[b.children.length - 1];
      v && v.type === "text" ? v.value += " " : b.children.push({ type: "text", value: " " }), b.children.push(...d);
    } else
      h.push(...d);
    const k = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + p },
      children: e.wrap(h, !0)
    };
    e.patch(u, k), o.push(k);
  }
  if (o.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: a,
          properties: {
            ...Dt(l),
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
          children: e.wrap(o, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const jt = (
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
      return uc;
    if (typeof e == "function")
      return Ut(e);
    if (typeof e == "object")
      return Array.isArray(e) ? ac(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        oc(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return sc(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function ac(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = jt(e[n]);
  return Ut(r);
  function r(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function oc(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Ut(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let a;
    for (a in e)
      if (i[a] !== t[a]) return !1;
    return !0;
  }
}
function sc(e) {
  return Ut(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Ut(e) {
  return t;
  function t(n, r, i) {
    return !!(cc(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function uc() {
  return !0;
}
function cc(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const el = [], hc = !0, xn = !1, fc = "skip";
function tl(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const a = jt(i), l = r ? -1 : 1;
  o(e, void 0, [])();
  function o(s, u, h) {
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
      let f = el, d, y, b;
      if ((!t || a(s, u, h[h.length - 1] || void 0)) && (f = pc(n(s, h)), f[0] === xn))
        return f;
      if ("children" in s && s.children) {
        const k = (
          /** @type {UnistParent} */
          s
        );
        if (k.children && f[0] !== fc)
          for (y = (r ? k.children.length : -1) + l, b = h.concat(k); y > -1 && y < k.children.length; ) {
            const v = k.children[y];
            if (d = o(v, y, b)(), d[0] === xn)
              return d;
            y = typeof d[1] == "number" ? d[1] : y + l;
          }
      }
      return f;
    }
  }
}
function pc(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [hc, e] : e == null ? el : [e];
}
function Un(e, t, n, r) {
  let i, a, l;
  typeof t == "function" && typeof n != "function" ? (a = void 0, l = t, i = n) : (a = t, l = n, i = r), tl(e, a, o, i);
  function o(s, u) {
    const h = u[u.length - 1], c = h ? h.children.indexOf(s) : void 0;
    return l(s, c, h);
  }
}
const bn = {}.hasOwnProperty, dc = {};
function mc(e, t) {
  const n = t || dc, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), l = { ...Yu, ...n.handlers }, o = {
    all: u,
    applyData: yc,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: a,
    footnoteOrder: [],
    handlers: l,
    one: s,
    options: n,
    patch: gc,
    wrap: xc
  };
  return Un(e, function(h) {
    if (h.type === "definition" || h.type === "footnoteDefinition") {
      const c = h.type === "definition" ? r : i, p = String(h.identifier).toUpperCase();
      c.has(p) || c.set(p, h);
    }
  }), o;
  function s(h, c) {
    const p = h.type, f = o.handlers[p];
    if (bn.call(o.handlers, p) && f)
      return f(o, h, c);
    if (o.options.passThrough && o.options.passThrough.includes(p)) {
      if ("children" in h) {
        const { children: y, ...b } = h, k = Dt(b);
        return k.children = o.all(h), k;
      }
      return Dt(h);
    }
    return (o.options.unknownHandler || kc)(o, h, c);
  }
  function u(h) {
    const c = [];
    if ("children" in h) {
      const p = h.children;
      let f = -1;
      for (; ++f < p.length; ) {
        const d = o.one(p[f], h);
        if (d) {
          if (f && p[f - 1].type === "break" && (!Array.isArray(d) && d.type === "text" && (d.value = Tr(d.value)), !Array.isArray(d) && d.type === "element")) {
            const y = d.children[0];
            y && y.type === "text" && (y.value = Tr(y.value));
          }
          Array.isArray(d) ? c.push(...d) : c.push(d);
        }
      }
    }
    return c;
  }
}
function gc(e, t) {
  e.position && (t.position = no(e));
}
function yc(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, a = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const l = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: l };
      }
    n.type === "element" && a && Object.assign(n.properties, Dt(a)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function kc(e, t) {
  const n = t.data || {}, r = "value" in t && !(bn.call(n, "hProperties") || bn.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function xc(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Tr(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Pr(e, t) {
  const n = mc(e, t), r = n.one(e, void 0), i = lc(n), a = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && a.children.push({ type: "text", value: `
` }, i), a;
}
function bc(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Pr(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Pr(n, { file: r, ...e || t })
    );
  };
}
function Lr(e) {
  if (e)
    throw e;
}
var It = Object.prototype.hasOwnProperty, nl = Object.prototype.toString, Dr = Object.defineProperty, Fr = Object.getOwnPropertyDescriptor, Rr = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : nl.call(t) === "[object Array]";
}, _r = function(t) {
  if (!t || nl.call(t) !== "[object Object]")
    return !1;
  var n = It.call(t, "constructor"), r = t.constructor && t.constructor.prototype && It.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || It.call(t, i);
}, Mr = function(t, n) {
  Dr && n.name === "__proto__" ? Dr(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Nr = function(t, n) {
  if (n === "__proto__")
    if (It.call(t, n)) {
      if (Fr)
        return Fr(t, n).value;
    } else return;
  return t[n];
}, wc = function e() {
  var t, n, r, i, a, l, o = arguments[0], s = 1, u = arguments.length, h = !1;
  for (typeof o == "boolean" && (h = o, o = arguments[1] || {}, s = 2), (o == null || typeof o != "object" && typeof o != "function") && (o = {}); s < u; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = Nr(o, n), i = Nr(t, n), o !== i && (h && i && (_r(i) || (a = Rr(i))) ? (a ? (a = !1, l = r && Rr(r) ? r : []) : l = r && _r(r) ? r : {}, Mr(o, { name: n, newValue: e(h, l, i) })) : typeof i < "u" && Mr(o, { name: n, newValue: i }));
  return o;
};
const Yt = /* @__PURE__ */ Ti(wc);
function wn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Cc() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let a = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    o(null, ...i);
    function o(s, ...u) {
      const h = e[++a];
      let c = -1;
      if (s) {
        l(s);
        return;
      }
      for (; ++c < i.length; )
        (u[c] === null || u[c] === void 0) && (u[c] = i[c]);
      i = u, h ? Sc(h, o)(...u) : l(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function Sc(e, t) {
  let n;
  return r;
  function r(...l) {
    const o = e.length > l.length;
    let s;
    o && l.push(i);
    try {
      s = e.apply(this, l);
    } catch (u) {
      const h = (
        /** @type {Error} */
        u
      );
      if (o && n)
        throw h;
      return i(h);
    }
    o || (s && s.then && typeof s.then == "function" ? s.then(a, i) : s instanceof Error ? i(s) : a(s));
  }
  function i(l, ...o) {
    n || (n = !0, t(l, ...o));
  }
  function a(l) {
    i(null, l);
  }
}
const Pe = { basename: Ec, dirname: vc, extname: Ac, join: Ic, sep: "/" };
function Ec(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  bt(e);
  let n = 0, r = -1, i = e.length, a;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (a) {
          n = i + 1;
          break;
        }
      } else r < 0 && (a = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let l = -1, o = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (a) {
        n = i + 1;
        break;
      }
    } else
      l < 0 && (a = !0, l = i + 1), o > -1 && (e.codePointAt(i) === t.codePointAt(o--) ? o < 0 && (r = i) : (o = -1, r = l));
  return n === r ? r = l : r < 0 && (r = e.length), e.slice(n, r);
}
function vc(e) {
  if (bt(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Ac(e) {
  bt(e);
  let t = e.length, n = -1, r = 0, i = -1, a = 0, l;
  for (; t--; ) {
    const o = e.codePointAt(t);
    if (o === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (l = !0, n = t + 1), o === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  a === 0 || // The (right-most) trimmed path component is exactly `..`.
  a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function Ic(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    bt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Tc(n);
}
function Tc(e) {
  bt(e);
  const t = e.codePointAt(0) === 47;
  let n = Pc(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Pc(e, t) {
  let n = "", r = 0, i = -1, a = 0, l = -1, o, s;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      o = e.codePointAt(l);
    else {
      if (o === 47)
        break;
      o = 47;
    }
    if (o === 47) {
      if (!(i === l - 1 || a === 1)) if (i !== l - 1 && a === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (s = n.lastIndexOf("/"), s !== n.length - 1) {
              s < 0 ? (n = "", r = 0) : (n = n.slice(0, s), r = n.length - 1 - n.lastIndexOf("/")), i = l, a = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = l, a = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, l) : n = e.slice(i + 1, l), r = l - i - 1;
      i = l, a = 0;
    } else o === 46 && a > -1 ? a++ : a = -1;
  }
  return n;
}
function bt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Lc = { cwd: Dc };
function Dc() {
  return "/";
}
function Cn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Fc(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Cn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Rc(e);
}
function Rc(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const Qt = (
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
class rl {
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
  constructor(t) {
    let n;
    t ? Cn(t) ? n = { path: t } : typeof t == "string" || _c(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Lc.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Qt.length; ) {
      const a = Qt[r];
      a in n && n[a] !== void 0 && n[a] !== null && (this[a] = a === "history" ? [...n[a]] : n[a]);
    }
    let i;
    for (i in n)
      Qt.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Pe.basename(this.path) : void 0;
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
  set basename(t) {
    en(t, "basename"), Jt(t, "basename"), this.path = Pe.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Pe.dirname(this.path) : void 0;
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
  set dirname(t) {
    zr(this.basename, "dirname"), this.path = Pe.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Pe.extname(this.path) : void 0;
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
  set extname(t) {
    if (Jt(t, "extname"), zr(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Pe.join(this.dirname, this.stem + (t || ""));
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
  set path(t) {
    Cn(t) && (t = Fc(t)), en(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Pe.basename(this.path, this.extname) : void 0;
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
  set stem(t) {
    en(t, "stem"), Jt(t, "stem"), this.path = Pe.join(this.dirname || "", t + (this.extname || ""));
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
  fail(t, n, r) {
    const i = this.message(t, n, r);
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
  info(t, n, r) {
    const i = this.message(t, n, r);
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
  message(t, n, r) {
    const i = new me(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
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
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function Jt(e, t) {
  if (e && e.includes(Pe.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Pe.sep + "`"
    );
}
function en(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function zr(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function _c(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Mc = (
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
    ), i = r[e], a = function() {
      return i.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, r), a;
  }
), Nc = {}.hasOwnProperty;
class qn extends Mc {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Cc();
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
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new qn()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Yt(!0, {}, this.namespace)), t;
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
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (rn("data", this.frozen), this.namespace[t] = n, this) : Nc.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (rn("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
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
  parse(t) {
    this.freeze();
    const n = St(t), r = this.parser || this.Parser;
    return tn("parse", r), r(String(n), n);
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
  process(t, n) {
    const r = this;
    return this.freeze(), tn("process", this.parser || this.Parser), nn("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(a, l) {
      const o = St(t), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(o)
      );
      r.run(s, o, function(h, c, p) {
        if (h || !c || !p)
          return u(h);
        const f = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), d = r.stringify(f, p);
        Bc(d) ? p.value = d : p.result = d, u(
          h,
          /** @type {VFileWithOutput<CompileResult>} */
          p
        );
      });
      function u(h, c) {
        h || !c ? l(h) : a ? a(c) : n(void 0, c);
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
  processSync(t) {
    let n = !1, r;
    return this.freeze(), tn("processSync", this.parser || this.Parser), nn("processSync", this.compiler || this.Compiler), this.process(t, i), Br("processSync", "process", n), r;
    function i(a, l) {
      n = !0, Lr(a), r = l;
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
  run(t, n, r) {
    Or(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? a(void 0, r) : new Promise(a);
    function a(l, o) {
      const s = St(n);
      i.run(t, s, u);
      function u(h, c, p) {
        const f = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || t
        );
        h ? o(h) : l ? l(f) : r(void 0, f, p);
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
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, a), Br("runSync", "run", r), i;
    function a(l, o) {
      Lr(l), i = o, r = !0;
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
  stringify(t, n) {
    this.freeze();
    const r = St(n), i = this.compiler || this.Compiler;
    return nn("stringify", i), Or(t), i(t, r);
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
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (rn("use", this.frozen), t != null) if (typeof t == "function")
      s(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? o(t) : l(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function a(u) {
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
      o(u.plugins), u.settings && (i.settings = Yt(!0, i.settings, u.settings));
    }
    function o(u) {
      let h = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++h < u.length; ) {
          const c = u[h];
          a(c);
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
        let [f, ...d] = h;
        const y = r[p][1];
        wn(y) && wn(f) && (f = Yt(!0, y, f)), r[p] = [u, f, ...d];
      }
    }
  }
}
const zc = new qn().freeze();
function tn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function nn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function rn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Or(e) {
  if (!wn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Br(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function St(e) {
  return Oc(e) ? e : new rl(e);
}
function Oc(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Bc(e) {
  return typeof e == "string" || Hc(e);
}
function Hc(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const $c = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Hr = [], $r = { allowDangerousHtml: !0 }, Vc = /^(https?|ircs?|mailto|xmpp)$/i, jc = [
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
function Uc(e) {
  const t = qc(e), n = Wc(e);
  return Gc(t.runSync(t.parse(n), n), e);
}
function qc(e) {
  const t = e.rehypePlugins || Hr, n = e.remarkPlugins || Hr, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...$r } : $r;
  return zc().use(vu).use(n).use(bc, r).use(t);
}
function Wc(e) {
  const t = e.children || "", n = new rl();
  return typeof t == "string" && (n.value = t), n;
}
function Gc(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, l = t.skipHtml, o = t.unwrapDisallowed, s = t.urlTransform || Xc;
  for (const h of jc)
    Object.hasOwn(t, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + $c + h.id, void 0);
  return Un(e, u), oo(e, {
    Fragment: si,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: E,
    jsxs: re,
    passKeys: !0,
    passNode: !0
  });
  function u(h, c, p) {
    if (h.type === "raw" && p && typeof c == "number")
      return l ? p.children.splice(c, 1) : p.children[c] = { type: "text", value: h.value }, c;
    if (h.type === "element") {
      let f;
      for (f in Xt)
        if (Object.hasOwn(Xt, f) && Object.hasOwn(h.properties, f)) {
          const d = h.properties[f], y = Xt[f];
          (y === null || y.includes(h.tagName)) && (h.properties[f] = s(String(d || ""), f, h));
        }
    }
    if (h.type === "element") {
      let f = n ? !n.includes(h.tagName) : a ? a.includes(h.tagName) : !1;
      if (!f && r && typeof c == "number" && (f = !r(h, c, p)), f && p && typeof c == "number")
        return o && h.children ? p.children.splice(c, 1, ...h.children) : p.children.splice(c, 1), c;
    }
  }
}
function Xc(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Vc.test(e.slice(0, t)) ? e : ""
  );
}
function Vr(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function Zc(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Kc(e, t, n) {
  const i = jt((n || {}).ignore || []), a = Yc(t);
  let l = -1;
  for (; ++l < a.length; )
    tl(e, "text", o);
  function o(u, h) {
    let c = -1, p;
    for (; ++c < h.length; ) {
      const f = h[c], d = p ? p.children : void 0;
      if (i(
        f,
        d ? d.indexOf(f) : void 0,
        p
      ))
        return;
      p = f;
    }
    if (p)
      return s(u, h);
  }
  function s(u, h) {
    const c = h[h.length - 1], p = a[l][0], f = a[l][1];
    let d = 0;
    const b = c.children.indexOf(u);
    let k = !1, v = [];
    p.lastIndex = 0;
    let S = p.exec(u.value);
    for (; S; ) {
      const D = S.index, F = {
        index: S.index,
        input: S.input,
        stack: [...h, u]
      };
      let w = f(...S, F);
      if (typeof w == "string" && (w = w.length > 0 ? { type: "text", value: w } : void 0), w === !1 ? p.lastIndex = D + 1 : (d !== D && v.push({
        type: "text",
        value: u.value.slice(d, D)
      }), Array.isArray(w) ? v.push(...w) : w && v.push(w), d = D + S[0].length, k = !0), !p.global)
        break;
      S = p.exec(u.value);
    }
    return k ? (d < u.value.length && v.push({ type: "text", value: u.value.slice(d) }), c.children.splice(b, 1, ...v)) : v = [u], b + v.length;
  }
}
function Yc(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Qc(i[0]), Jc(i[1])]);
  }
  return t;
}
function Qc(e) {
  return typeof e == "string" ? new RegExp(Zc(e), "g") : e;
}
function Jc(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const ln = "phrasing", an = ["autolink", "link", "image", "label"];
function eh() {
  return {
    transforms: [oh],
    enter: {
      literalAutolink: nh,
      literalAutolinkEmail: on,
      literalAutolinkHttp: on,
      literalAutolinkWww: on
    },
    exit: {
      literalAutolink: ah,
      literalAutolinkEmail: lh,
      literalAutolinkHttp: rh,
      literalAutolinkWww: ih
    }
  };
}
function th() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: ln,
        notInConstruct: an
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: ln,
        notInConstruct: an
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: ln,
        notInConstruct: an
      }
    ]
  };
}
function nh(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function on(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function rh(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function ih(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function lh(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function ah(e) {
  this.exit(e);
}
function oh(e) {
  Kc(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, sh],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), uh]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function sh(e, t, n, r, i) {
  let a = "";
  if (!il(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !ch(n)))
    return !1;
  const l = hh(n + r);
  if (!l[0]) return !1;
  const o = {
    type: "link",
    title: null,
    url: a + t + l[0],
    children: [{ type: "text", value: t + l[0] }]
  };
  return l[1] ? [o, { type: "text", value: l[1] }] : o;
}
function uh(e, t, n, r) {
  return (
    // Not an expected previous character.
    !il(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function ch(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function hh(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Vr(e, "(");
  let a = Vr(e, ")");
  for (; r !== -1 && i > a; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
  return [e, n];
}
function il(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ge(n) || Ht(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
ll.peek = bh;
function fh() {
  this.buffer();
}
function ph(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function dh() {
  this.buffer();
}
function mh(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function gh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Te(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function yh(e) {
  this.exit(e);
}
function kh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Te(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function xh(e) {
  this.exit(e);
}
function bh() {
  return "[";
}
function ll(e, t, n, r) {
  const i = n.createTracker(r);
  let a = i.move("[^");
  const l = n.enter("footnoteReference"), o = n.enter("reference");
  return a += i.move(
    n.safe(n.associationId(e), { after: "]", before: a })
  ), o(), l(), a += i.move("]"), a;
}
function wh() {
  return {
    enter: {
      gfmFootnoteCallString: fh,
      gfmFootnoteCall: ph,
      gfmFootnoteDefinitionLabelString: dh,
      gfmFootnoteDefinition: mh
    },
    exit: {
      gfmFootnoteCallString: gh,
      gfmFootnoteCall: yh,
      gfmFootnoteDefinitionLabelString: kh,
      gfmFootnoteDefinition: xh
    }
  };
}
function Ch(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: ll },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, a, l) {
    const o = a.createTracker(l);
    let s = o.move("[^");
    const u = a.enter("footnoteDefinition"), h = a.enter("label");
    return s += o.move(
      a.safe(a.associationId(r), { before: s, after: "]" })
    ), h(), s += o.move("]:"), r.children && r.children.length > 0 && (o.shift(4), s += o.move(
      (t ? `
` : " ") + a.indentLines(
        a.containerFlow(r, o.current()),
        t ? al : Sh
      )
    )), u(), s;
  }
}
function Sh(e, t, n) {
  return t === 0 ? e : al(e, t, n);
}
function al(e, t, n) {
  return (n ? "" : "    ") + e;
}
const Eh = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
ol.peek = Ph;
function vh() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Ih },
    exit: { strikethrough: Th }
  };
}
function Ah() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Eh
      }
    ],
    handlers: { delete: ol }
  };
}
function Ih(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Th(e) {
  this.exit(e);
}
function ol(e, t, n, r) {
  const i = n.createTracker(r), a = n.enter("strikethrough");
  let l = i.move("~~");
  return l += n.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), a(), l;
}
function Ph() {
  return "~";
}
function Lh(e) {
  return e.length;
}
function Dh(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Lh, a = [], l = [], o = [], s = [];
  let u = 0, h = -1;
  for (; ++h < e.length; ) {
    const y = [], b = [];
    let k = -1;
    for (e[h].length > u && (u = e[h].length); ++k < e[h].length; ) {
      const v = Fh(e[h][k]);
      if (n.alignDelimiters !== !1) {
        const S = i(v);
        b[k] = S, (s[k] === void 0 || S > s[k]) && (s[k] = S);
      }
      y.push(v);
    }
    l[h] = y, o[h] = b;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < u; )
      a[c] = jr(r[c]);
  else {
    const y = jr(r);
    for (; ++c < u; )
      a[c] = y;
  }
  c = -1;
  const p = [], f = [];
  for (; ++c < u; ) {
    const y = a[c];
    let b = "", k = "";
    y === 99 ? (b = ":", k = ":") : y === 108 ? b = ":" : y === 114 && (k = ":");
    let v = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[c] - b.length - k.length
    );
    const S = b + "-".repeat(v) + k;
    n.alignDelimiters !== !1 && (v = b.length + v + k.length, v > s[c] && (s[c] = v), f[c] = v), p[c] = S;
  }
  l.splice(1, 0, p), o.splice(1, 0, f), h = -1;
  const d = [];
  for (; ++h < l.length; ) {
    const y = l[h], b = o[h];
    c = -1;
    const k = [];
    for (; ++c < u; ) {
      const v = y[c] || "";
      let S = "", D = "";
      if (n.alignDelimiters !== !1) {
        const F = s[c] - (b[c] || 0), w = a[c];
        w === 114 ? S = " ".repeat(F) : w === 99 ? F % 2 ? (S = " ".repeat(F / 2 + 0.5), D = " ".repeat(F / 2 - 0.5)) : (S = " ".repeat(F / 2), D = S) : D = " ".repeat(F);
      }
      n.delimiterStart !== !1 && !c && k.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && v === "") && (n.delimiterStart !== !1 || c) && k.push(" "), n.alignDelimiters !== !1 && k.push(S), k.push(v), n.alignDelimiters !== !1 && k.push(D), n.padding !== !1 && k.push(" "), (n.delimiterEnd !== !1 || c !== u - 1) && k.push("|");
    }
    d.push(
      n.delimiterEnd === !1 ? k.join("").replace(/ +$/, "") : k.join("")
    );
  }
  return d.join(`
`);
}
function Fh(e) {
  return e == null ? "" : String(e);
}
function jr(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Rh(e, t, n, r) {
  const i = n.enter("blockquote"), a = n.createTracker(r);
  a.move("> "), a.shift(2);
  const l = n.indentLines(
    n.containerFlow(e, a.current()),
    _h
  );
  return i(), l;
}
function _h(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Mh(e, t) {
  return Ur(e, t.inConstruct, !0) && !Ur(e, t.notInConstruct, !1);
}
function Ur(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function qr(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && Mh(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Nh(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, a = 0, l = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++a > l && (l = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
  return l;
}
function zh(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Oh(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Bh(e, t, n, r) {
  const i = Oh(n), a = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (zh(e, n)) {
    const c = n.enter("codeIndented"), p = n.indentLines(a, Hh);
    return c(), p;
  }
  const o = n.createTracker(r), s = i.repeat(Math.max(Nh(a, i) + 1, 3)), u = n.enter("codeFenced");
  let h = o.move(s);
  if (e.lang) {
    const c = n.enter(`codeFencedLang${l}`);
    h += o.move(
      n.safe(e.lang, {
        before: h,
        after: " ",
        encode: ["`"],
        ...o.current()
      })
    ), c();
  }
  if (e.lang && e.meta) {
    const c = n.enter(`codeFencedMeta${l}`);
    h += o.move(" "), h += o.move(
      n.safe(e.meta, {
        before: h,
        after: `
`,
        encode: ["`"],
        ...o.current()
      })
    ), c();
  }
  return h += o.move(`
`), a && (h += o.move(a + `
`)), h += o.move(s), u(), h;
}
function Hh(e, t, n) {
  return (n ? "" : "    ") + e;
}
function Wn(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function $h(e, t, n, r) {
  const i = Wn(n), a = i === '"' ? "Quote" : "Apostrophe", l = n.enter("definition");
  let o = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("[");
  return u += s.move(
    n.safe(n.associationId(e), {
      before: u,
      after: "]",
      ...s.current()
    })
  ), u += s.move("]: "), o(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (o = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (o = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...s.current()
    })
  )), o(), e.title && (o = n.enter(`title${a}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), o()), l(), u;
}
function Vh(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function yt(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Ft(e, t, n) {
  const r = nt(e), i = nt(t);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    n === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
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
sl.peek = jh;
function sl(e, t, n, r) {
  const i = Vh(n), a = n.enter("emphasis"), l = n.createTracker(r), o = l.move(i);
  let s = l.move(
    n.containerPhrasing(e, {
      after: i,
      before: o,
      ...l.current()
    })
  );
  const u = s.charCodeAt(0), h = Ft(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  h.inside && (s = yt(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), p = Ft(r.after.charCodeAt(0), c, i);
  p.inside && (s = s.slice(0, -1) + yt(c));
  const f = l.move(i);
  return a(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: h.outside
  }, o + s + f;
}
function jh(e, t, n) {
  return n.options.emphasis || "*";
}
function Uh(e, t) {
  let n = !1;
  return Un(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, xn;
  }), !!((!e.depth || e.depth < 3) && zn(e) && (t.options.setext || n));
}
function qh(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
  if (Uh(e, n)) {
    const h = n.enter("headingSetext"), c = n.enter("phrasing"), p = n.containerPhrasing(e, {
      ...a.current(),
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
  const l = "#".repeat(i), o = n.enter("headingAtx"), s = n.enter("phrasing");
  a.move(l + " ");
  let u = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...a.current()
  });
  return /^[\t ]/.test(u) && (u = yt(u.charCodeAt(0)) + u.slice(1)), u = u ? l + " " + u : l, n.options.closeAtx && (u += " " + l), s(), o(), u;
}
ul.peek = Wh;
function ul(e) {
  return e.value || "";
}
function Wh() {
  return "<";
}
cl.peek = Gh;
function cl(e, t, n, r) {
  const i = Wn(n), a = i === '"' ? "Quote" : "Apostrophe", l = n.enter("image");
  let o = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("![");
  return u += s.move(
    n.safe(e.alt, { before: u, after: "]", ...s.current() })
  ), u += s.move("]("), o(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (o = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (o = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), o(), e.title && (o = n.enter(`title${a}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), o()), u += s.move(")"), l(), u;
}
function Gh() {
  return "!";
}
hl.peek = Xh;
function hl(e, t, n, r) {
  const i = e.referenceType, a = n.enter("imageReference");
  let l = n.enter("label");
  const o = n.createTracker(r);
  let s = o.move("![");
  const u = n.safe(e.alt, {
    before: s,
    after: "]",
    ...o.current()
  });
  s += o.move(u + "]["), l();
  const h = n.stack;
  n.stack = [], l = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...o.current()
  });
  return l(), n.stack = h, a(), i === "full" || !u || u !== c ? s += o.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += o.move("]"), s;
}
function Xh() {
  return "!";
}
fl.peek = Zh;
function fl(e, t, n) {
  let r = e.value || "", i = "`", a = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length; ) {
    const l = n.unsafe[a], o = n.compilePattern(l);
    let s;
    if (l.atBreak)
      for (; s = o.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return i + r + i;
}
function Zh() {
  return "`";
}
function pl(e, t) {
  const n = zn(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
dl.peek = Kh;
function dl(e, t, n, r) {
  const i = Wn(n), a = i === '"' ? "Quote" : "Apostrophe", l = n.createTracker(r);
  let o, s;
  if (pl(e, n)) {
    const h = n.stack;
    n.stack = [], o = n.enter("autolink");
    let c = l.move("<");
    return c += l.move(
      n.containerPhrasing(e, {
        before: c,
        after: ">",
        ...l.current()
      })
    ), c += l.move(">"), o(), n.stack = h, c;
  }
  o = n.enter("link"), s = n.enter("label");
  let u = l.move("[");
  return u += l.move(
    n.containerPhrasing(e, {
      before: u,
      after: "](",
      ...l.current()
    })
  ), u += l.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), u += l.move("<"), u += l.move(
    n.safe(e.url, { before: u, after: ">", ...l.current() })
  ), u += l.move(">")) : (s = n.enter("destinationRaw"), u += l.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), s(), e.title && (s = n.enter(`title${a}`), u += l.move(" " + i), u += l.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...l.current()
    })
  ), u += l.move(i), s()), u += l.move(")"), o(), u;
}
function Kh(e, t, n) {
  return pl(e, n) ? "<" : "[";
}
ml.peek = Yh;
function ml(e, t, n, r) {
  const i = e.referenceType, a = n.enter("linkReference");
  let l = n.enter("label");
  const o = n.createTracker(r);
  let s = o.move("[");
  const u = n.containerPhrasing(e, {
    before: s,
    after: "]",
    ...o.current()
  });
  s += o.move(u + "]["), l();
  const h = n.stack;
  n.stack = [], l = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...o.current()
  });
  return l(), n.stack = h, a(), i === "full" || !u || u !== c ? s += o.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += o.move("]"), s;
}
function Yh() {
  return "[";
}
function Gn(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Qh(e) {
  const t = Gn(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function Jh(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function gl(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function ef(e, t, n, r) {
  const i = n.enter("list"), a = n.bulletCurrent;
  let l = e.ordered ? Jh(n) : Gn(n);
  const o = e.ordered ? l === "." ? ")" : "." : Qh(n);
  let s = t && n.bulletLastUsed ? l === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const h = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      h && (!h.children || !h.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), gl(n) === l && h
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
  s && (l = o), n.bulletCurrent = l;
  const u = n.containerFlow(e, r);
  return n.bulletLastUsed = l, n.bulletCurrent = a, i(), u;
}
function tf(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function nf(e, t, n, r) {
  const i = tf(n);
  let a = n.bulletCurrent || Gn(n);
  t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
  let l = a.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const o = n.createTracker(r);
  o.move(a + " ".repeat(l - a.length)), o.shift(l);
  const s = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, o.current()),
    h
  );
  return s(), u;
  function h(c, p, f) {
    return p ? (f ? "" : " ".repeat(l)) + c : (f ? a : a + " ".repeat(l - a.length)) + c;
  }
}
function rf(e, t, n, r) {
  const i = n.enter("paragraph"), a = n.enter("phrasing"), l = n.containerPhrasing(e, r);
  return a(), i(), l;
}
const lf = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  jt([
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
function af(e, t, n, r) {
  return (e.children.some(function(l) {
    return lf(l);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function of(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
yl.peek = sf;
function yl(e, t, n, r) {
  const i = of(n), a = n.enter("strong"), l = n.createTracker(r), o = l.move(i + i);
  let s = l.move(
    n.containerPhrasing(e, {
      after: i,
      before: o,
      ...l.current()
    })
  );
  const u = s.charCodeAt(0), h = Ft(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  h.inside && (s = yt(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), p = Ft(r.after.charCodeAt(0), c, i);
  p.inside && (s = s.slice(0, -1) + yt(c));
  const f = l.move(i + i);
  return a(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: h.outside
  }, o + s + f;
}
function sf(e, t, n) {
  return n.options.strong || "*";
}
function uf(e, t, n, r) {
  return n.safe(e.value, r);
}
function cf(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function hf(e, t, n) {
  const r = (gl(n) + (n.options.ruleSpaces ? " " : "")).repeat(cf(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const kl = {
  blockquote: Rh,
  break: qr,
  code: Bh,
  definition: $h,
  emphasis: sl,
  hardBreak: qr,
  heading: qh,
  html: ul,
  image: cl,
  imageReference: hl,
  inlineCode: fl,
  link: dl,
  linkReference: ml,
  list: ef,
  listItem: nf,
  paragraph: rf,
  root: af,
  strong: yl,
  text: uf,
  thematicBreak: hf
};
function ff() {
  return {
    enter: {
      table: pf,
      tableData: Wr,
      tableHeader: Wr,
      tableRow: mf
    },
    exit: {
      codeText: gf,
      table: df,
      tableData: sn,
      tableHeader: sn,
      tableRow: sn
    }
  };
}
function pf(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function df(e) {
  this.exit(e), this.data.inTable = void 0;
}
function mf(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function sn(e) {
  this.exit(e);
}
function Wr(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function gf(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, yf));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function yf(e, t) {
  return t === "|" ? t : e;
}
function kf(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
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
      tableRow: o
    }
  };
  function l(f, d, y, b) {
    return u(h(f, y, b), f.align);
  }
  function o(f, d, y, b) {
    const k = c(f, y, b), v = u([k]);
    return v.slice(0, v.indexOf(`
`));
  }
  function s(f, d, y, b) {
    const k = y.enter("tableCell"), v = y.enter("phrasing"), S = y.containerPhrasing(f, {
      ...b,
      before: a,
      after: a
    });
    return v(), k(), S;
  }
  function u(f, d) {
    return Dh(f, {
      align: d,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function h(f, d, y) {
    const b = f.children;
    let k = -1;
    const v = [], S = d.enter("table");
    for (; ++k < b.length; )
      v[k] = c(b[k], d, y);
    return S(), v;
  }
  function c(f, d, y) {
    const b = f.children;
    let k = -1;
    const v = [], S = d.enter("tableRow");
    for (; ++k < b.length; )
      v[k] = s(b[k], f, d, y);
    return S(), v;
  }
  function p(f, d, y) {
    let b = kl.inlineCode(f, d, y);
    return y.stack.includes("tableCell") && (b = b.replace(/\|/g, "\\$&")), b;
  }
}
function xf() {
  return {
    exit: {
      taskListCheckValueChecked: Gr,
      taskListCheckValueUnchecked: Gr,
      paragraph: wf
    }
  };
}
function bf() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Cf }
  };
}
function Gr(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function wf(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let a = -1, l;
      for (; ++a < i.length; ) {
        const o = i[a];
        if (o.type === "paragraph") {
          l = o;
          break;
        }
      }
      l === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function Cf(e, t, n, r) {
  const i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", o = n.createTracker(r);
  a && o.move(l);
  let s = kl.listItem(e, t, n, {
    ...r,
    ...o.current()
  });
  return a && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(h) {
    return h + l;
  }
}
function Sf() {
  return [
    eh(),
    wh(),
    vh(),
    ff(),
    xf()
  ];
}
function Ef(e) {
  return {
    extensions: [
      th(),
      Ch(e),
      Ah(),
      kf(e),
      bf()
    ]
  };
}
const vf = {
  tokenize: Df,
  partial: !0
}, xl = {
  tokenize: Ff,
  partial: !0
}, bl = {
  tokenize: Rf,
  partial: !0
}, wl = {
  tokenize: _f,
  partial: !0
}, Af = {
  tokenize: Mf,
  partial: !0
}, Cl = {
  name: "wwwAutolink",
  tokenize: Pf,
  previous: El
}, Sl = {
  name: "protocolAutolink",
  tokenize: Lf,
  previous: vl
}, Ne = {
  name: "emailAutolink",
  tokenize: Tf,
  previous: Al
}, De = {};
function If() {
  return {
    text: De
  };
}
let Ue = 48;
for (; Ue < 123; )
  De[Ue] = Ne, Ue++, Ue === 58 ? Ue = 65 : Ue === 91 && (Ue = 97);
De[43] = Ne;
De[45] = Ne;
De[46] = Ne;
De[95] = Ne;
De[72] = [Ne, Sl];
De[104] = [Ne, Sl];
De[87] = [Ne, Cl];
De[119] = [Ne, Cl];
function Tf(e, t, n) {
  const r = this;
  let i, a;
  return l;
  function l(c) {
    return !Sn(c) || !Al.call(r, r.previous) || Xn(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), o(c));
  }
  function o(c) {
    return Sn(c) ? (e.consume(c), o) : c === 64 ? (e.consume(c), s) : n(c);
  }
  function s(c) {
    return c === 46 ? e.check(Af, h, u)(c) : c === 45 || c === 95 || de(c) ? (a = !0, e.consume(c), s) : h(c);
  }
  function u(c) {
    return e.consume(c), i = !0, s;
  }
  function h(c) {
    return a && i && ye(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function Pf(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !El.call(r, r.previous) || Xn(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(vf, e.attempt(xl, e.attempt(bl, a), n), n)(l));
  }
  function a(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function Lf(e, t, n) {
  const r = this;
  let i = "", a = !1;
  return l;
  function l(c) {
    return (c === 72 || c === 104) && vl.call(r, r.previous) && !Xn(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), o) : n(c);
  }
  function o(c) {
    if (ye(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), o;
    if (c === 58) {
      const p = i.toLowerCase();
      if (p === "http" || p === "https")
        return e.consume(c), s;
    }
    return n(c);
  }
  function s(c) {
    return c === 47 ? (e.consume(c), a ? u : (a = !0, s)) : n(c);
  }
  function u(c) {
    return c === null || Pt(c) || Y(c) || Ge(c) || Ht(c) ? n(c) : e.attempt(xl, e.attempt(bl, h), n)(c);
  }
  function h(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function Df(e, t, n) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), a) : n(l);
  }
  function a(l) {
    return l === null ? n(l) : t(l);
  }
}
function Ff(e, t, n) {
  let r, i, a;
  return l;
  function l(u) {
    return u === 46 || u === 95 ? e.check(wl, s, o)(u) : u === null || Y(u) || Ge(u) || u !== 45 && Ht(u) ? s(u) : (a = !0, e.consume(u), l);
  }
  function o(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), l;
  }
  function s(u) {
    return i || r || !a ? n(u) : t(u);
  }
}
function Rf(e, t) {
  let n = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (n++, e.consume(l), i) : l === 41 && r < n ? a(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(wl, t, a)(l) : l === null || Y(l) || Ge(l) ? t(l) : (e.consume(l), i);
  }
  function a(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function _f(e, t, n) {
  return r;
  function r(o) {
    return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : (
      // `<` is an end.
      o === 60 || // So is whitespace.
      o === null || Y(o) || Ge(o) ? t(o) : n(o)
    );
  }
  function i(o) {
    return o === null || o === 40 || o === 91 || Y(o) || Ge(o) ? t(o) : r(o);
  }
  function a(o) {
    return ye(o) ? l(o) : n(o);
  }
  function l(o) {
    return o === 59 ? (e.consume(o), r) : ye(o) ? (e.consume(o), l) : n(o);
  }
}
function Mf(e, t, n) {
  return r;
  function r(a) {
    return e.consume(a), i;
  }
  function i(a) {
    return de(a) ? n(a) : t(a);
  }
}
function El(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Y(e);
}
function vl(e) {
  return !ye(e);
}
function Al(e) {
  return !(e === 47 || Sn(e));
}
function Sn(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || de(e);
}
function Xn(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
const Nf = {
  tokenize: Uf,
  partial: !0
};
function zf() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: $f,
        continuation: {
          tokenize: Vf
        },
        exit: jf
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Hf
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Of,
        resolveTo: Bf
      }
    }
  };
}
function Of(e, t, n) {
  const r = this;
  let i = r.events.length;
  const a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
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
  return o;
  function o(s) {
    if (!l || !l._balanced)
      return n(s);
    const u = Te(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !a.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function Bf(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const a = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, l = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, a.start),
    end: Object.assign({}, a.end)
  }, o = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", a, t],
    ["enter", l, t],
    ["exit", l, t],
    ["exit", a, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...o), e;
}
function Hf(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a = 0, l;
  return o;
  function o(c) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(c) {
    return c !== 94 ? n(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(c) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      c === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || Y(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const p = e.exit("gfmFootnoteCallString");
      return i.includes(Te(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return Y(c) || (l = !0), a++, e.consume(c), c === 92 ? h : u;
  }
  function h(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), a++, u) : u(c);
  }
}
function $f(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a, l = 0, o;
  return s;
  function s(d) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(d), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(d) {
    return d === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(d), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", h) : n(d);
  }
  function h(d) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      d === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      d === null || d === 91 || Y(d)
    )
      return n(d);
    if (d === 93) {
      e.exit("chunkString");
      const y = e.exit("gfmFootnoteDefinitionLabelString");
      return a = Te(r.sliceSerialize(y)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(d), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
    }
    return Y(d) || (o = !0), l++, e.consume(d), d === 92 ? c : h;
  }
  function c(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), l++, h) : h(d);
  }
  function p(d) {
    return d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), i.includes(a) || i.push(a), X(e, f, "gfmFootnoteDefinitionWhitespace")) : n(d);
  }
  function f(d) {
    return t(d);
  }
}
function Vf(e, t, n) {
  return e.check(xt, t, e.attempt(Nf, t, n));
}
function jf(e) {
  e.exit("gfmFootnoteDefinition");
}
function Uf(e, t, n) {
  const r = this;
  return X(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(a) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], !0).length === 4 ? t(a) : n(a);
  }
}
function qf(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: a,
    resolveAll: i
  };
  return n == null && (n = !0), {
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
  function i(l, o) {
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
            }, p = [["enter", h, o], ["enter", l[u][1], o], ["exit", l[u][1], o], ["enter", c, o]], f = o.parser.constructs.insideSpan.null;
            f && ve(p, p.length, 0, $t(f, l.slice(u + 1, s), o)), ve(p, p.length, 0, [["exit", c, o], ["enter", l[s][1], o], ["exit", l[s][1], o], ["exit", h, o]]), ve(l, u - 1, s - u + 3, p), s = u + p.length - 2;
            break;
          }
      }
    for (s = -1; ++s < l.length; )
      l[s][1].type === "strikethroughSequenceTemporary" && (l[s][1].type = "data");
    return l;
  }
  function a(l, o, s) {
    const u = this.previous, h = this.events;
    let c = 0;
    return p;
    function p(d) {
      return u === 126 && h[h.length - 1][1].type !== "characterEscape" ? s(d) : (l.enter("strikethroughSequenceTemporary"), f(d));
    }
    function f(d) {
      const y = nt(u);
      if (d === 126)
        return c > 1 ? s(d) : (l.consume(d), c++, f);
      if (c < 2 && !n) return s(d);
      const b = l.exit("strikethroughSequenceTemporary"), k = nt(d);
      return b._open = !k || k === 2 && !!y, b._close = !y || y === 2 && !!k, o(d);
    }
  }
}
class Wf {
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
  add(t, n, r) {
    Gf(this, t, n, r);
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
  consume(t) {
    if (this.map.sort(function(a, l) {
      return a[0] - l[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push(t.slice()), t.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const a of i)
        t.push(a);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function Gf(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        e.map[i][1] += n, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function Xf(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const a = r.length - 1;
          r[a] = r[a] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function Zf() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Kf,
        resolveAll: Yf
      }
    }
  };
}
function Kf(e, t, n) {
  const r = this;
  let i = 0, a = 0, l;
  return o;
  function o(x) {
    let T = r.events.length - 1;
    for (; T > -1; ) {
      const P = r.events[T][1].type;
      if (P === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      P === "linePrefix") T--;
      else break;
    }
    const L = T > -1 ? r.events[T][1].type : null, q = L === "tableHead" || L === "tableRow" ? w : s;
    return q === w && r.parser.lazy[r.now().line] ? n(x) : q(x);
  }
  function s(x) {
    return e.enter("tableHead"), e.enter("tableRow"), u(x);
  }
  function u(x) {
    return x === 124 || (l = !0, a += 1), h(x);
  }
  function h(x) {
    return x === null ? n(x) : R(x) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), f) : n(x) : j(x) ? X(e, h, "whitespace")(x) : (a += 1, l && (l = !1, i += 1), x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), l = !0, h) : (e.enter("data"), c(x)));
  }
  function c(x) {
    return x === null || x === 124 || Y(x) ? (e.exit("data"), h(x)) : (e.consume(x), x === 92 ? p : c);
  }
  function p(x) {
    return x === 92 || x === 124 ? (e.consume(x), c) : c(x);
  }
  function f(x) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(x) : (e.enter("tableDelimiterRow"), l = !1, j(x) ? X(e, d, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(x) : d(x));
  }
  function d(x) {
    return x === 45 || x === 58 ? b(x) : x === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), y) : F(x);
  }
  function y(x) {
    return j(x) ? X(e, b, "whitespace")(x) : b(x);
  }
  function b(x) {
    return x === 58 ? (a += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(x), e.exit("tableDelimiterMarker"), k) : x === 45 ? (a += 1, k(x)) : x === null || R(x) ? D(x) : F(x);
  }
  function k(x) {
    return x === 45 ? (e.enter("tableDelimiterFiller"), v(x)) : F(x);
  }
  function v(x) {
    return x === 45 ? (e.consume(x), v) : x === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(x), e.exit("tableDelimiterMarker"), S) : (e.exit("tableDelimiterFiller"), S(x));
  }
  function S(x) {
    return j(x) ? X(e, D, "whitespace")(x) : D(x);
  }
  function D(x) {
    return x === 124 ? d(x) : x === null || R(x) ? !l || i !== a ? F(x) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(x)) : F(x);
  }
  function F(x) {
    return n(x);
  }
  function w(x) {
    return e.enter("tableRow"), M(x);
  }
  function M(x) {
    return x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), M) : x === null || R(x) ? (e.exit("tableRow"), t(x)) : j(x) ? X(e, M, "whitespace")(x) : (e.enter("data"), U(x));
  }
  function U(x) {
    return x === null || x === 124 || Y(x) ? (e.exit("data"), M(x)) : (e.consume(x), x === 92 ? $ : U);
  }
  function $(x) {
    return x === 92 || x === 124 ? (e.consume(x), U) : U(x);
  }
}
function Yf(e, t) {
  let n = -1, r = !0, i = 0, a = [0, 0, 0, 0], l = [0, 0, 0, 0], o = !1, s = 0, u, h, c;
  const p = new Wf();
  for (; ++n < e.length; ) {
    const f = e[n], d = f[1];
    f[0] === "enter" ? d.type === "tableHead" ? (o = !1, s !== 0 && (Xr(p, t, s, u, h), h = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, d.start),
      // Note: correct end is set later.
      end: Object.assign({}, d.end)
    }, p.add(n, 0, [["enter", u, t]])) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (r = !0, c = void 0, a = [0, 0, 0, 0], l = [0, n + 1, 0, 0], o && (o = !1, h = {
      type: "tableBody",
      start: Object.assign({}, d.start),
      // Note: correct end is set later.
      end: Object.assign({}, d.end)
    }, p.add(n, 0, [["enter", h, t]])), i = d.type === "tableDelimiterRow" ? 2 : h ? 3 : 1) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") ? (r = !1, l[2] === 0 && (a[1] !== 0 && (l[0] = l[1], c = Et(p, t, a, i, void 0, c), a = [0, 0, 0, 0]), l[2] = n)) : d.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (l[0] = l[1], c = Et(p, t, a, i, void 0, c)), a = l, l = [a[1], n, 0, 0])) : d.type === "tableHead" ? (o = !0, s = n) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (s = n, a[1] !== 0 ? (l[0] = l[1], c = Et(p, t, a, i, n, c)) : l[1] !== 0 && (c = Et(p, t, l, i, n, c)), i = 0) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") && (l[3] = n);
  }
  for (s !== 0 && Xr(p, t, s, u, h), p.consume(t.events), n = -1; ++n < t.events.length; ) {
    const f = t.events[n];
    f[0] === "enter" && f[1].type === "table" && (f[1]._align = Xf(t.events, n));
  }
  return e;
}
function Et(e, t, n, r, i, a) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", o = "tableContent";
  n[0] !== 0 && (a.end = Object.assign({}, Je(t.events, n[0])), e.add(n[0], 0, [["exit", a, t]]));
  const s = Je(t.events, n[1]);
  if (a = {
    type: l,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", a, t]]), n[2] !== 0) {
    const u = Je(t.events, n[2]), h = Je(t.events, n[3]), c = {
      type: o,
      start: Object.assign({}, u),
      end: Object.assign({}, h)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const p = t.events[n[2]], f = t.events[n[3]];
      if (p[1].end = Object.assign({}, f[1].end), p[1].type = "chunkText", p[1].contentType = "text", n[3] > n[2] + 1) {
        const d = n[2] + 1, y = n[3] - n[2] - 1;
        e.add(d, y, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (a.end = Object.assign({}, Je(t.events, i)), e.add(i, 0, [["exit", a, t]]), a = void 0), a;
}
function Xr(e, t, n, r, i) {
  const a = [], l = Je(t.events, n);
  i && (i.end = Object.assign({}, l), a.push(["exit", i, t])), r.end = Object.assign({}, l), a.push(["exit", r, t]), e.add(n + 1, 0, a);
}
function Je(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Qf = {
  name: "tasklistCheck",
  tokenize: ep
};
function Jf() {
  return {
    text: {
      91: Qf
    }
  };
}
function ep(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), a)
    );
  }
  function a(s) {
    return Y(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : n(s);
  }
  function l(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), o) : n(s);
  }
  function o(s) {
    return R(s) ? t(s) : j(s) ? e.check({
      tokenize: tp
    }, t, n)(s) : n(s);
  }
}
function tp(e, t, n) {
  return X(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function np(e) {
  return Ni([
    If(),
    zf(),
    qf(e),
    Zf(),
    Jf()
  ]);
}
const rp = {};
function ip(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || rp, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), a = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(np(n)), a.push(Sf()), l.push(Ef(n));
}
const Il = J(({ content: e }) => /* @__PURE__ */ E("div", { className: "elitea-assistant-markdown", children: /* @__PURE__ */ E(Uc, { remarkPlugins: [ip], children: e }) }));
Il.displayName = "MarkdownContent";
var ue = /* @__PURE__ */ ((e) => (e.PENDING = "pending", e.UPLOADING = "uploading", e.COMPLETED = "completed", e.ERROR = "error", e))(ue || {});
const Rt = 150 * 1024 * 1024, Zr = 3 * 1024 * 1024, Kr = 150 * 1024 * 1024, Yr = 10, Qr = 10, un = 5 * 1024 * 1024, Tl = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg"]), lp = /* @__PURE__ */ new Set([
  "txt",
  "md",
  "pdf",
  "docx",
  "doc",
  "csv",
  "xlsx",
  "xls",
  "json",
  "jsonl",
  "htm",
  "html",
  "xml",
  "ppt",
  "pptx",
  "yml",
  "yaml"
]), ap = /* @__PURE__ */ new Set([
  "py",
  "js",
  "ts",
  "jsx",
  "tsx",
  "mjs",
  "cjs",
  "java",
  "cpp",
  "c",
  "h",
  "hpp",
  "cs",
  "rb",
  "go",
  "php",
  "swift",
  "kt",
  "rs",
  "m",
  "scala",
  "pl",
  "sh",
  "bat",
  "lua",
  "r",
  "pas",
  "asm",
  "dart",
  "groovy",
  "sql",
  "hs",
  "bash",
  "zsh",
  "pm",
  "toml",
  "ini",
  "cfg",
  "conf",
  "env"
]), Pl = /* @__PURE__ */ new Set([...Tl, ...lp, ...ap]), op = [...Pl].map((e) => `.${e}`).join(","), sp = (e) => {
  if (typeof e == "number") return e < 4102444800 ? e * 1e3 : e;
  if (typeof e == "string") {
    const t = new Date(e);
    return isNaN(t.getTime()) ? 0 : t.getTime();
  }
  return 0;
}, up = (e) => {
  var r;
  const t = e.sent_to != null ? "user" : "assistant";
  let n = "";
  for (const i of e.message_items ?? []) {
    const a = i.item_type ?? i.type;
    if (a === "text_message" || a === "text") {
      n = ((r = i.item_details) == null ? void 0 : r.content) ?? i.content ?? "";
      break;
    }
  }
  return {
    id: String(e.uuid ?? e.id ?? ""),
    role: t,
    content: n,
    timestamp: sp(e.created_at_ts ?? e.created_at)
  };
}, Jr = (e) => (e.message_groups ?? []).map(up), mt = () => typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
  const t = Math.random() * 16 | 0;
  return (e === "x" ? t : t & 3 | 8).toString(16);
}), En = (e) => e >= 1024 * 1024 ? `${Math.round(e / (1024 * 1024))}MB` : e >= 1024 ? `${Math.round(e / 1024)}KB` : `${e}B`, cp = (e) => {
  const t = new Date(e), n = /* @__PURE__ */ new Date(), r = t.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: !0 });
  if (t.toDateString() === n.toDateString()) return r;
  const a = new Date(n);
  return a.setDate(a.getDate() - 1), t.toDateString() === a.toDateString() ? `Yesterday, ${r}` : t.toLocaleDateString([], { month: "short", day: "numeric" }) + ", " + r;
}, Zn = (e) => (e.split(".").pop() || "").toLowerCase(), vn = (e) => Tl.has(Zn(e)), hp = (e) => Pl.has(Zn(e)), fp = (e) => hp(e.name) ? vn(e.name) && e.size > Zr ? `Image exceeds ${En(Zr)} limit` : e.size > Rt ? `File exceeds ${En(Rt)} limit` : null : `Unsupported file type: .${Zn(e.name)}`, vt = (e, t, n) => ({
  id: t,
  file: e,
  name: e.name,
  size: e.size,
  type: e.type,
  status: ue.ERROR,
  progress: 0,
  error: n
}), pp = (e, t) => {
  const n = new Set(e.map((s) => s.name)), r = t.filter((s) => !n.has(s.name));
  let i = r.filter((s) => vn(s.name)).length, a = r.reduce((s, u) => s + u.size, 0);
  const l = r.length + e.length, o = e.map((s) => {
    const u = mt(), h = fp(s);
    if (h) return vt(s, u, h);
    if (l > Yr)
      return vt(s, u, `Max ${Yr} attachments allowed`);
    const c = vn(s.name);
    return c && (i += 1), a += s.size, c && i > Qr ? vt(s, u, `Max ${Qr} images allowed`) : a > Kr ? vt(
      s,
      u,
      `Total upload size exceeds ${En(Kr)}`
    ) : {
      id: u,
      file: s,
      name: s.name,
      size: s.size,
      type: s.type,
      status: ue.PENDING,
      progress: 0
    };
  });
  return [...r, ...o];
}, ei = (e, t) => {
  const { frequency: n, start: r, peak: i, end: a } = t, l = e.createOscillator(), o = e.createGain();
  return l.connect(o), o.connect(e.destination), l.type = "sine", l.frequency.value = n, o.gain.setValueAtTime(0, r), o.gain.linearRampToValueAtTime(0.12, i), o.gain.exponentialRampToValueAtTime(0.01, a), l.start(r), l.stop(a), l;
}, dp = async () => {
  try {
    const e = new AudioContext();
    if (e.state === "suspended" && await e.resume(), e.state !== "running") {
      e.close();
      return;
    }
    const t = e.currentTime;
    ei(e, { frequency: 784, start: t, peak: t + 0.02, end: t + 0.2 });
    const n = ei(e, { frequency: 1047, start: t + 0.12, peak: t + 0.14, end: t + 0.37 });
    n.onended = () => e.close();
  } catch {
  }
}, mp = (e) => {
  if (e.startsWith("/")) return "";
  try {
    return new URL(e).origin;
  } catch {
    return "";
  }
}, Ll = J((e) => {
  const { avatar: t, messages: n, isLoading: r } = e, i = Le(null), a = Le(!1);
  return He(() => {
    var o;
    if (n.length === 0) {
      a.current = !1;
      return;
    }
    const l = a.current ? "smooth" : "instant";
    a.current = !0, (o = i.current) == null || o.scrollIntoView({ behavior: l });
  }, [n]), r ? /* @__PURE__ */ E("div", { className: "elitea-assistant-messages", children: Array.from({ length: 3 }).map((l, o) => /* @__PURE__ */ re(
    "div",
    {
      className: `elitea-assistant-skeleton-row ${o % 2 === 0 ? "elitea-assistant-skeleton-row--left" : "elitea-assistant-skeleton-row--right"}`,
      children: [
        /* @__PURE__ */ re("div", { className: "elitea-assistant-skeleton-meta", children: [
          /* @__PURE__ */ E("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--avatar" }),
          /* @__PURE__ */ E("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--time" })
        ] }),
        /* @__PURE__ */ E("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--bubble" })
      ]
    },
    o
  )) }) : n.length === 0 ? /* @__PURE__ */ E("div", { className: "elitea-assistant-empty", children: "Send a message to start a conversation" }) : /* @__PURE__ */ re("div", { className: "elitea-assistant-messages", children: [
    n.map((l) => /* @__PURE__ */ re(
      "div",
      {
        className: `elitea-assistant-message-wrapper elitea-assistant-message-wrapper--${l.role}`,
        children: [
          /* @__PURE__ */ re("div", { className: `elitea-assistant-message-meta elitea-assistant-message-meta--${l.role}`, children: [
            l.role === "assistant" && /* @__PURE__ */ E("span", { className: "elitea-assistant-message-avatar elitea-assistant-message-avatar--assistant", children: /* @__PURE__ */ E(Tn, {}) }),
            /* @__PURE__ */ E("span", { className: "elitea-assistant-message-time", children: cp(l.timestamp) }),
            l.role === "user" && /* @__PURE__ */ E("span", { className: "elitea-assistant-message-avatar elitea-assistant-message-avatar--user", children: t ? /* @__PURE__ */ E(
              "img",
              {
                src: t,
                alt: "User avatar",
                className: "elitea-assistant-avatar-img"
              }
            ) : /* @__PURE__ */ E(yi, {}) })
          ] }),
          /* @__PURE__ */ re(
            "div",
            {
              className: `elitea-assistant-message elitea-assistant-message--${l.role}${l.isError ? " elitea-assistant-message--error" : ""}`,
              children: [
                l.content ? l.role === "assistant" ? /* @__PURE__ */ E(Il, { content: l.content }) : l.content : l.isStreaming ? /* @__PURE__ */ re("span", { className: "elitea-assistant-typing-indicator", children: [
                  /* @__PURE__ */ E("span", { className: "elitea-assistant-typing-dot" }),
                  /* @__PURE__ */ E("span", { className: "elitea-assistant-typing-dot" }),
                  /* @__PURE__ */ E("span", { className: "elitea-assistant-typing-dot" })
                ] }) : "",
                l.role === "assistant" && l.content && !l.isStreaming && /* @__PURE__ */ E(xi, { text: l.content })
              ]
            }
          )
        ]
      },
      l.id
    )),
    /* @__PURE__ */ E("div", { ref: i })
  ] });
});
Ll.displayName = "MessageList";
const An = 7, cn = 2 * Math.PI * An, Dl = J((e) => {
  const { status: t, progress: n = 0 } = e;
  if (t === ue.UPLOADING) {
    const r = cn - n / 100 * cn;
    return /* @__PURE__ */ re(
      "svg",
      {
        className: "elitea-assistant-file-chip-spinner",
        viewBox: "0 0 18 18",
        children: [
          /* @__PURE__ */ E(
            "circle",
            {
              cx: "9",
              cy: "9",
              r: An,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              opacity: "0.25"
            }
          ),
          /* @__PURE__ */ E(
            "circle",
            {
              cx: "9",
              cy: "9",
              r: An,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeDasharray: cn,
              strokeDashoffset: r,
              transform: "rotate(-90 9 9)",
              className: "elitea-assistant-file-chip-spinner-progress"
            }
          )
        ]
      }
    );
  }
  return t === ue.COMPLETED ? /* @__PURE__ */ E(Pn, {}) : /* @__PURE__ */ E(pi, {});
});
Dl.displayName = "AttachmentIcon";
const Fl = J((e) => {
  const { status: t, progress: n } = e;
  return t === ue.UPLOADING ? /* @__PURE__ */ re("span", { className: "elitea-assistant-file-chip-progress-text", children: [
    n,
    "%"
  ] }) : null;
});
Fl.displayName = "AttachmentProgress";
const Rl = J((e) => {
  const { attachment: t, onRemove: n } = e, r = (i) => {
    const a = "elitea-assistant-file-chip";
    return {
      uploading: `${a} ${a}--uploading`,
      error: `${a} ${a}--error`,
      completed: `${a} ${a}--completed`,
      pending: a
    }[i] || a;
  };
  return /* @__PURE__ */ E(et, { content: t.error ?? t.name, children: /* @__PURE__ */ re("div", { className: r(t.status), children: [
    /* @__PURE__ */ E("span", { className: "elitea-assistant-file-chip-icon", children: /* @__PURE__ */ E(
      Dl,
      {
        status: t.status,
        progress: t.progress
      }
    ) }),
    /* @__PURE__ */ E("span", { className: "elitea-assistant-file-chip-name", children: t.name }),
    /* @__PURE__ */ E(
      Fl,
      {
        status: t.status,
        progress: t.progress
      }
    ),
    /* @__PURE__ */ E(
      "button",
      {
        className: "elitea-assistant-file-chip-remove",
        onClick: () => n(t.id),
        "aria-label": `Remove ${t.name}`,
        type: "button",
        disabled: t.status === ue.UPLOADING,
        children: /* @__PURE__ */ E(Ot, {})
      }
    )
  ] }) });
});
Rl.displayName = "AttachmentChip";
const _l = J((e) => {
  const {
    placeholder: t,
    text: n,
    onTextChange: r,
    attachments: i,
    onAddFiles: a,
    onRemoveAttachment: l,
    onSend: o,
    expanded: s,
    disabled: u,
    isUploading: h
  } = e, c = Le(null), [p, f] = te(0), [d, y] = te(!1), b = Le(0), { visibleAttachments: k, remainingAttachmentsCount: v } = We(() => {
    const P = s ? 3 : 2;
    return {
      visibleAttachments: i.slice(0, P),
      remainingAttachmentsCount: i.length - P
    };
  }, [i, s]), S = We(
    () => i != null && i.length ? i.every((P) => P.status === ue.PENDING || P.status === ue.COMPLETED) : !0,
    [i]
  ), D = We(
    () => !!(u || h || !S || !n.trim()),
    [u, h, n, S]
  ), F = () => {
    const P = n.trim(), _ = i.filter((H) => H.status === ue.COMPLETED && H.filepath);
    !P && _.length === 0 || h || (o(P), r(""));
  }, w = (P) => {
    P.key === "Enter" && !P.shiftKey && (P.preventDefault(), F());
  }, M = () => {
    var P;
    (P = c.current) == null || P.click();
  }, U = (P) => {
    const _ = P.target.files;
    _ && a(Array.from(_)), f((H) => H + 1);
  }, $ = (P) => {
    P.preventDefault(), b.current += 1, P.dataTransfer.types.includes("Files") && y(!0);
  }, x = (P) => {
    P.preventDefault(), b.current -= 1, b.current === 0 && y(!1);
  }, T = (P) => {
    P.preventDefault();
  }, L = (P) => {
    P.preventDefault(), b.current = 0, y(!1);
    const _ = Array.from(P.dataTransfer.files);
    _.length > 0 && a(_);
  }, q = (P) => {
    const _ = Array.from(P.clipboardData.items).filter((H) => H.kind === "file").map((H) => H.getAsFile()).filter((H) => H !== null).map((H) => {
      if (!/^image\.\w+$/.test(H.name)) return H;
      const ie = H.name.split(".").pop() || "png", pe = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
      return new File([H], `screenshot-${pe}.${ie}`, { type: H.type });
    });
    _.length !== 0 && (P.preventDefault(), a(_));
  };
  return /* @__PURE__ */ re(
    "div",
    {
      className: `elitea-assistant-input-area${d ? " elitea-assistant-input-area--drag-over" : ""}`,
      onDragEnter: $,
      onDragLeave: x,
      onDragOver: T,
      onDrop: L,
      children: [
        d && /* @__PURE__ */ E("div", { className: "elitea-assistant-drop-overlay", children: "Drop files here" }),
        i.length > 0 && /* @__PURE__ */ re("div", { className: "elitea-assistant-file-list", children: [
          k.map((P) => /* @__PURE__ */ E(
            Rl,
            {
              attachment: P,
              onRemove: l
            },
            P.id
          )),
          v > 0 && /* @__PURE__ */ re("div", { className: "elitea-assistant-file-chip elitea-assistant-file-chip--count", children: [
            "+",
            v
          ] })
        ] }),
        /* @__PURE__ */ re("div", { className: "elitea-assistant-input-row", children: [
          /* @__PURE__ */ E(
            "input",
            {
              ref: c,
              type: "file",
              multiple: !0,
              accept: op,
              onChange: U,
              style: { display: "none" }
            },
            p
          ),
          /* @__PURE__ */ E(
            "button",
            {
              className: "elitea-assistant-attach-button",
              onClick: M,
              "aria-label": "Attach file",
              type: "button",
              disabled: u || h,
              children: /* @__PURE__ */ E(ui, {})
            }
          ),
          /* @__PURE__ */ E(
            "textarea",
            {
              id: "elitea-assistant-message-input",
              className: "elitea-assistant-input",
              value: n,
              onChange: (P) => r(P.target.value),
              onKeyDown: w,
              onPaste: q,
              placeholder: t,
              rows: 1,
              autoFocus: !0,
              disabled: u
            }
          ),
          /* @__PURE__ */ E(
            "button",
            {
              className: "elitea-assistant-send-button",
              onClick: F,
              disabled: D,
              "aria-label": "Send message",
              type: "button",
              children: /* @__PURE__ */ E(gi, {})
            }
          )
        ] })
      ]
    }
  );
});
_l.displayName = "MessageInput";
const Ml = Nt(null), Nl = () => {
  const e = zt(Ml);
  if (!e) throw new Error("useApi must be used within EliteaAssistant");
  return e;
}, gp = () => {
  const [e, t] = te(!1), [n, r] = te(!1), i = V(() => t(!0), []), a = V(() => t(!1), []), l = V(() => t((h) => !h), []), o = V(() => r(!0), []), s = V(() => r(!1), []), u = V(() => r((h) => !h), []);
  return {
    isOpen: e,
    isExpanded: n,
    open: i,
    close: a,
    toggle: l,
    expandFullscreen: o,
    collapseFullscreen: s,
    toggleFullscreen: u
  };
}, Me = {
  ENTER_ROOM: "chat_enter_room",
  LEAVE_ROOM: "chat_leave_room",
  PREDICT: "support_predict",
  PREDICT_RESPONSE: "chat_predict",
  CONVERSATION_NAME_UPDATED: "chat_conversation_name_updated",
  ERROR: "support_error"
}, Oe = {
  START_TASK: "start_task",
  CHUNK: "chunk",
  AI_MESSAGE_CHUNK: "AIMessageChunk",
  AGENT_LLM_CHUNK: "agent_llm_chunk",
  AGENT_RESPONSE: "agent_response",
  PIPELINE_FINISH: "pipeline_finish",
  ERROR: "error",
  AGENT_EXCEPTION: "agent_exception"
}, yp = () => {
  const e = Nl(), [t, n] = te(!1), r = V(
    async (s, u, h) => {
      const c = new FormData();
      return c.append("file", s), c.append("overwrite", "1"), (await e.uploadFile(u, c, h))[0];
    },
    [e]
  ), i = V(
    async (s) => {
      const { chunk: u, chunkIndex: h, totalChunks: c, fileId: p, fileName: f, conversationId: d, onProgress: y } = s, b = new FormData();
      b.append("file", u), b.append("chunk_index", String(h)), b.append("total_chunks", String(c)), b.append("file_id", p), b.append("file_name", f), b.append("overwrite", "1");
      const k = await e.uploadFile(d, b, y);
      return Array.isArray(k) ? k[0] : k ?? { status: "chunk_received" };
    },
    [e]
  ), a = V((s) => {
    const u = [];
    let h = 0;
    for (; h < s.size; ) {
      const c = Math.min(h + un, s.size);
      u.push(s.slice(h, c)), h = c;
    }
    return u;
  }, []), l = V(
    async (s, u, h) => {
      const { file: c } = s;
      if (c.size > Rt)
        throw new Error(`File "${c.name}" exceeds maximum size limit of 300MB`);
      if (c.size <= un)
        return (await r(c, u, (v, S) => {
          const D = Math.round(v / S * 100);
          h(D);
        })).filepath;
      const p = a(c), f = mt(), d = p.length;
      let y = 0, b = "";
      for (let k = 0; k < d; k++) {
        const v = p[k], S = y, D = await i({
          chunk: v,
          chunkIndex: k,
          totalChunks: d,
          fileId: f,
          fileName: c.name,
          conversationId: u,
          onProgress: (F, w) => {
            const M = S + F, U = Math.round(M / c.size * 100);
            h(Math.min(U, 99));
          }
        });
        y += v.size, D.filepath && (b = D.filepath);
      }
      return h(100), b;
    },
    [r, i, a]
  );
  return {
    uploadAttachments: V(
      async (s) => {
        const { conversationId: u, attachments: h, onProgress: c, onComplete: p, onError: f } = s;
        if (h.length) {
          n(!0);
          try {
            await Promise.all(
              h.map(async (d) => {
                try {
                  const y = await l(d, u, (b) => {
                    c(d.id, b);
                  });
                  p(d.id, y);
                } catch (y) {
                  const b = y instanceof Error ? y.message : "Upload failed";
                  f(d.id, b);
                }
              })
            );
          } finally {
            n(!1);
          }
        }
      },
      [l]
    ),
    isUploading: t,
    maxFileSize: Rt,
    chunkSize: un
  };
}, kp = (e) => {
  const { welcomeMessage: t, supportProjectId: n, initialHistory: r, initialConversation: i, isInitLoading: a } = e, l = Le(!1), o = Nl(), s = k1(), u = b1(), h = g1(), { uploadAttachments: c, isUploading: p } = yp(), f = V(
    () => t ? [{ id: "welcome", role: "assistant", content: t, timestamp: Date.now() }] : [],
    [t]
  ), [d, y] = te([]), [b, k] = te(""), [v, S] = te([]), [D, F] = te(null), [w, M] = te([]), [U, $] = te(!1), x = We(
    () => a || U,
    [a, U]
  ), T = V(
    (O) => {
      s == null || s.emit(Me.ENTER_ROOM, {
        project_id: n,
        conversation_id: O
      });
    },
    [s, n]
  ), L = V(
    (O) => {
      s == null || s.emit(Me.LEAVE_ROOM, {
        project_id: n,
        conversation_id: O
      });
    },
    [s, n]
  ), q = V(
    (O) => {
      s == null || s.emit(Me.PREDICT, O);
    },
    [s]
  ), P = V((O) => {
    const { message_id: N, type: Z, content: W, response_metadata: se } = O;
    switch (Z) {
      case Oe.START_TASK:
        y((ge) => [
          ...ge,
          {
            id: N,
            role: "assistant",
            content: "",
            timestamp: Date.now(),
            isStreaming: !0
          }
        ]);
        break;
      case Oe.CHUNK:
      case Oe.AI_MESSAGE_CHUNK:
      case Oe.AGENT_LLM_CHUNK: {
        const ge = typeof W == "string" ? W : JSON.stringify(W), fe = !!(se != null && se.finish_reason);
        y(
          (ne) => ne.map(
            (we) => we.id === N ? { ...we, content: we.content + ge, ...fe && { isStreaming: !1 } } : we
          )
        );
        break;
      }
      case Oe.AGENT_RESPONSE: {
        const ge = typeof W == "string" ? W : JSON.stringify(W);
        y(
          (fe) => fe.map((ne) => ne.id === N ? { ...ne, content: ge, isStreaming: !1 } : ne)
        );
        break;
      }
      case Oe.PIPELINE_FINISH:
        y(
          (ge) => ge.map((fe) => fe.id === N && fe.isStreaming ? { ...fe, isStreaming: !1 } : fe)
        );
        break;
      case Oe.ERROR:
      case Oe.AGENT_EXCEPTION:
        y(
          (ge) => ge.map(
            (fe) => fe.id === N ? {
              ...fe,
              content: typeof W == "string" ? W : "An error occurred",
              isStreaming: !1,
              isError: !0
            } : fe
          )
        );
        break;
    }
  }, []), _ = V((O) => {
    y((N) => [
      ...N,
      {
        id: mt(),
        role: "assistant",
        content: O.error || "An error occurred",
        timestamp: Date.now(),
        isError: !0
      }
    ]);
  }, []), H = V((O) => {
    M(
      (N) => N.map((Z) => Z.uuid === O.conversation_uuid ? { ...Z, name: O.name } : Z)
    );
  }, []);
  He(() => {
    if (!(a || l.current))
      if (l.current = !0, M(r), r.length > 0 && i) {
        const O = Jr(i);
        y(O.length > 0 ? O : f()), F(r[0].uuid), T(r[0].uuid);
      } else
        y(f());
  }, [a, r, i, f, T]), He(() => {
    if (s)
      return s.on(Me.PREDICT_RESPONSE, P), s.on(Me.ERROR, _), s.on(Me.CONVERSATION_NAME_UPDATED, H), () => {
        s.off(Me.PREDICT_RESPONSE, P), s.off(Me.ERROR, _), s.off(Me.CONVERSATION_NAME_UPDATED, H);
      };
  }, [s, P, _, H]);
  const ee = V((O) => {
    S((N) => pp(O, N));
  }, []), ie = V((O) => {
    S((N) => N.filter((Z) => Z.id !== O));
  }, []), pe = V((O, N) => {
    S(
      (Z) => Z.map((W) => W.id === O ? { ...W, status: ue.UPLOADING, progress: N } : W)
    );
  }, []), m = V((O, N) => {
    S(
      (Z) => Z.map(
        (W) => W.id === O ? { ...W, status: ue.COMPLETED, progress: 100, filepath: N } : W
      )
    );
  }, []), ce = V((O, N) => {
    S(
      (Z) => Z.map((W) => W.id === O ? { ...W, status: ue.ERROR, error: N } : W)
    );
  }, []), oe = V(() => {
    S([]);
  }, []), g = V(
    async (O) => {
      const N = v.filter((W) => W.status === ue.PENDING);
      if (N.length === 0) return [];
      S(
        (W) => W.map((se) => se.status === ue.PENDING ? { ...se, status: ue.UPLOADING } : se)
      );
      const Z = [];
      return await c({
        conversationId: O,
        attachments: N,
        onProgress: pe,
        onComplete: (W, se) => {
          m(W, se), Z.push(se);
        },
        onError: ce
      }), Z;
    },
    [v, c, pe, m, ce]
  ), he = V(
    async (O) => {
      let N = D;
      if (!N)
        try {
          const ne = await o.createConversation();
          N = ne.uuid, F(N), M((we) => [ne, ...we]), T(N);
        } catch {
          y((ne) => [
            ...ne,
            {
              id: mt(),
              role: "assistant",
              content: "Failed to create conversation. Please try again.",
              timestamp: Date.now(),
              isError: !0
            }
          ]);
          return;
        }
      const Z = v.filter((ne) => ne.status === ue.PENDING), W = v.filter((ne) => ne.status === ue.COMPLETED && ne.filepath).map((ne) => ne.filepath), se = Z.length > 0 && N ? await g(N) : [];
      if (Z.length > 0 && se.length < Z.length) return;
      y((ne) => [
        ...ne,
        { id: mt(), role: "user", content: O, timestamp: Date.now() }
      ]);
      const ge = [...W, ...se], fe = h == null ? void 0 : h.getValidScreenshot();
      if (N && fe) {
        try {
          const ne = new File([fe], `screenshot-${Date.now()}.png`, {
            type: "image/png"
          }), we = new FormData();
          we.append("file", ne), we.append("overwrite", "1");
          const Ve = (await o.uploadFile(N, we))[0];
          Ve != null && Ve.filepath && ge.push(Ve.filepath);
        } catch {
        }
        h == null || h.clearScreenshot();
      }
      N && q({
        conversation_uuid: N,
        content: O,
        attachments: ge.length > 0 ? ge : void 0,
        support_assistant_context: u ?? void 0
      }), oe();
    },
    [
      D,
      o,
      T,
      q,
      v,
      g,
      oe,
      u,
      h
    ]
  ), Fe = V(() => {
    D && L(D), F(null), y(f()), k(""), oe();
  }, [D, L, f, oe]), ae = V(
    async (O) => {
      if (D !== O) {
        D && L(D), F(O), T(O), k(""), oe(), y([]), $(!0);
        try {
          const N = await o.getConversation(O), Z = Jr(N);
          y(Z.length > 0 ? Z : f());
        } catch {
          y(f());
        } finally {
          $(!1);
        }
      }
    },
    [D, L, T, f, o, oe]
  );
  return {
    messages: d,
    inputText: b,
    setInputText: k,
    attachments: v,
    addFiles: ee,
    removeAttachment: ie,
    history: w,
    currentConversationId: D ?? "",
    isLoading: x,
    isUploading: p,
    handleNewChat: Fe,
    handleSelectConversation: ae,
    handleSend: he
  };
}, xp = (e) => {
  const { api: t, title: n, welcomeMessage: r, placeholder: i } = e, [a, l] = te(null), [o, s] = te([]), [u, h] = te(null), [c, p] = te(!0);
  return He(() => {
    let f = !1;
    const d = t.getConfig().then((b) => {
      f || l(b);
    }).catch(() => {
    }), y = t.getConversations().then(async (b) => {
      if (f) return;
      const k = b.items || [];
      if (s(k), k.length > 0)
        try {
          const v = await t.getConversation(k[0].uuid);
          f || h(v);
        } catch {
        }
    }).catch(() => {
    });
    return Promise.all([d, y]).finally(() => {
      f || p(!1);
    }), () => {
      f = !0;
    };
  }, [t]), {
    title: (a == null ? void 0 : a.title) || n,
    welcomeMessage: (a == null ? void 0 : a.welcomeMessage) || r,
    placeholder: (a == null ? void 0 : a.placeholder) || i,
    supportProjectId: (a == null ? void 0 : a.support_project_id) ?? null,
    user: (a == null ? void 0 : a.user) || { id: 0, name: "Guest", avatar: "" },
    history: o,
    lastConversation: u,
    isLoading: c
  };
}, bp = (e) => {
  const t = Le(null), [n, r] = te(!1), i = V(() => {
    r(!1), t.current && (clearTimeout(t.current), t.current = null);
  }, []), a = V(() => {
    e || (r(!0), dp(), t.current = setTimeout(i, 12e3));
  }, [e, i]);
  return He(() => () => {
    t.current && clearTimeout(t.current);
  }, []), He(() => {
    e && i();
  }, [e, i]), { popupVissible: n, showPopup: a, hidePopup: i, popupText: "Hi! Need help? Ask me!" };
};
function wp(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), i = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(i), t && (r.href = t), i.href = e, i.href;
}
const Cp = /* @__PURE__ */ (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function Be(e) {
  const t = [];
  for (let n = 0, r = e.length; n < r; n++)
    t.push(e[n]);
  return t;
}
let Ye = null;
function zl(e = {}) {
  return Ye || (e.includeStyleProperties ? (Ye = e.includeStyleProperties, Ye) : (Ye = Be(window.getComputedStyle(document.documentElement)), Ye));
}
function _t(e, t) {
  const r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function Sp(e) {
  const t = _t(e, "border-left-width"), n = _t(e, "border-right-width");
  return e.clientWidth + t + n;
}
function Ep(e) {
  const t = _t(e, "border-top-width"), n = _t(e, "border-bottom-width");
  return e.clientHeight + t + n;
}
function Ol(e, t = {}) {
  const n = t.width || Sp(e), r = t.height || Ep(e);
  return { width: n, height: r };
}
function vp() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const n = t && t.env ? t.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const Se = 16384;
function Ap(e) {
  (e.width > Se || e.height > Se) && (e.width > Se && e.height > Se ? e.width > e.height ? (e.height *= Se / e.width, e.width = Se) : (e.width *= Se / e.height, e.height = Se) : e.width > Se ? (e.height *= Se / e.width, e.width = Se) : (e.width *= Se / e.height, e.height = Se));
}
function Ip(e, t = {}) {
  return e.toBlob ? new Promise((n) => {
    e.toBlob(n, t.type ? t.type : "image/png", t.quality ? t.quality : 1);
  }) : new Promise((n) => {
    const r = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(",")[1]), i = r.length, a = new Uint8Array(i);
    for (let l = 0; l < i; l += 1)
      a[l] = r.charCodeAt(l);
    n(new Blob([a], {
      type: t.type ? t.type : "image/png"
    }));
  });
}
function Mt(e) {
  return new Promise((t, n) => {
    const r = new Image();
    r.onload = () => {
      r.decode().then(() => {
        requestAnimationFrame(() => t(r));
      });
    }, r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = e;
  });
}
async function Tp(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function Pp(e, t, n) {
  const r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg"), a = document.createElementNS(r, "foreignObject");
  return i.setAttribute("width", `${t}`), i.setAttribute("height", `${n}`), i.setAttribute("viewBox", `0 0 ${t} ${n}`), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(e), Tp(i);
}
const xe = (e, t) => {
  if (e instanceof t)
    return !0;
  const n = Object.getPrototypeOf(e);
  return n === null ? !1 : n.constructor.name === t.name || xe(n, t);
};
function Lp(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function Dp(e, t) {
  return zl(t).map((n) => {
    const r = e.getPropertyValue(n), i = e.getPropertyPriority(n);
    return `${n}: ${r}${i ? " !important" : ""};`;
  }).join(" ");
}
function Fp(e, t, n, r) {
  const i = `.${e}:${t}`, a = n.cssText ? Lp(n) : Dp(n, r);
  return document.createTextNode(`${i}{${a}}`);
}
function ti(e, t, n, r) {
  const i = window.getComputedStyle(e, n), a = i.getPropertyValue("content");
  if (a === "" || a === "none")
    return;
  const l = Cp();
  try {
    t.className = `${t.className} ${l}`;
  } catch {
    return;
  }
  const o = document.createElement("style");
  o.appendChild(Fp(l, n, i, r)), t.appendChild(o);
}
function Rp(e, t, n) {
  ti(e, t, ":before", n), ti(e, t, ":after", n);
}
const ni = "application/font-woff", ri = "image/jpeg", _p = {
  woff: ni,
  woff2: ni,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: ri,
  jpeg: ri,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Mp(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function Kn(e) {
  const t = Mp(e).toLowerCase();
  return _p[t] || "";
}
function Np(e) {
  return e.split(/,/)[1];
}
function In(e) {
  return e.search(/^(data:)/) !== -1;
}
function zp(e, t) {
  return `data:${t};base64,${e}`;
}
async function Bl(e, t, n) {
  const r = await fetch(e, t);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const i = await r.blob();
  return new Promise((a, l) => {
    const o = new FileReader();
    o.onerror = l, o.onloadend = () => {
      try {
        a(n({ res: r, result: o.result }));
      } catch (s) {
        l(s);
      }
    }, o.readAsDataURL(i);
  });
}
const hn = {};
function Op(e, t, n) {
  let r = e.replace(/\?.*/, "");
  return n && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), t ? `[${t}]${r}` : r;
}
async function Yn(e, t, n) {
  const r = Op(e, t, n.includeQueryParams);
  if (hn[r] != null)
    return hn[r];
  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i;
  try {
    const a = await Bl(e, n.fetchRequestInit, ({ res: l, result: o }) => (t || (t = l.headers.get("Content-Type") || ""), Np(o)));
    i = zp(a, t);
  } catch (a) {
    i = n.imagePlaceholder || "";
    let l = `Failed to fetch resource: ${e}`;
    a && (l = typeof a == "string" ? a : a.message), l && console.warn(l);
  }
  return hn[r] = i, i;
}
async function Bp(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : Mt(t);
}
async function Hp(e, t) {
  if (e.currentSrc) {
    const a = document.createElement("canvas"), l = a.getContext("2d");
    a.width = e.clientWidth, a.height = e.clientHeight, l == null || l.drawImage(e, 0, 0, a.width, a.height);
    const o = a.toDataURL();
    return Mt(o);
  }
  const n = e.poster, r = Kn(n), i = await Yn(n, r, t);
  return Mt(i);
}
async function $p(e, t) {
  var n;
  try {
    if (!((n = e == null ? void 0 : e.contentDocument) === null || n === void 0) && n.body)
      return await qt(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function Vp(e, t) {
  return xe(e, HTMLCanvasElement) ? Bp(e) : xe(e, HTMLVideoElement) ? Hp(e, t) : xe(e, HTMLIFrameElement) ? $p(e, t) : e.cloneNode(Hl(e));
}
const jp = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Hl = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function Up(e, t, n) {
  var r, i;
  if (Hl(t))
    return t;
  let a = [];
  return jp(e) && e.assignedNodes ? a = Be(e.assignedNodes()) : xe(e, HTMLIFrameElement) && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? a = Be(e.contentDocument.body.childNodes) : a = Be(((i = e.shadowRoot) !== null && i !== void 0 ? i : e).childNodes), a.length === 0 || xe(e, HTMLVideoElement) || await a.reduce((l, o) => l.then(() => qt(o, n)).then((s) => {
    s && t.appendChild(s);
  }), Promise.resolve()), t;
}
function qp(e, t, n) {
  const r = t.style;
  if (!r)
    return;
  const i = window.getComputedStyle(e);
  i.cssText ? (r.cssText = i.cssText, r.transformOrigin = i.transformOrigin) : zl(n).forEach((a) => {
    let l = i.getPropertyValue(a);
    a === "font-size" && l.endsWith("px") && (l = `${Math.floor(parseFloat(l.substring(0, l.length - 2))) - 0.1}px`), xe(e, HTMLIFrameElement) && a === "display" && l === "inline" && (l = "block"), a === "d" && t.getAttribute("d") && (l = `path(${t.getAttribute("d")})`), r.setProperty(a, l, i.getPropertyPriority(a));
  });
}
function Wp(e, t) {
  xe(e, HTMLTextAreaElement) && (t.innerHTML = e.value), xe(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function Gp(e, t) {
  if (xe(e, HTMLSelectElement)) {
    const n = t, r = Array.from(n.children).find((i) => e.value === i.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function Xp(e, t, n) {
  return xe(t, Element) && (qp(e, t, n), Rp(e, t, n), Wp(e, t), Gp(e, t)), t;
}
async function Zp(e, t) {
  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (n.length === 0)
    return e;
  const r = {};
  for (let a = 0; a < n.length; a++) {
    const o = n[a].getAttribute("xlink:href");
    if (o) {
      const s = e.querySelector(o), u = document.querySelector(o);
      !s && u && !r[o] && (r[o] = await qt(u, t, !0));
    }
  }
  const i = Object.values(r);
  if (i.length) {
    const a = "http://www.w3.org/1999/xhtml", l = document.createElementNS(a, "svg");
    l.setAttribute("xmlns", a), l.style.position = "absolute", l.style.width = "0", l.style.height = "0", l.style.overflow = "hidden", l.style.display = "none";
    const o = document.createElementNS(a, "defs");
    l.appendChild(o);
    for (let s = 0; s < i.length; s++)
      o.appendChild(i[s]);
    e.appendChild(l);
  }
  return e;
}
async function qt(e, t, n) {
  return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((r) => Vp(r, t)).then((r) => Up(e, r, t)).then((r) => Xp(e, r, t)).then((r) => Zp(r, t));
}
const $l = /url\((['"]?)([^'"]+?)\1\)/g, Kp = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Yp = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Qp(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function Jp(e) {
  const t = [];
  return e.replace($l, (n, r, i) => (t.push(i), n)), t.filter((n) => !In(n));
}
async function e1(e, t, n, r, i) {
  try {
    const a = n ? wp(t, n) : t, l = Kn(t);
    let o;
    return i || (o = await Yn(a, l, r)), e.replace(Qp(t), `$1${o}$3`);
  } catch {
  }
  return e;
}
function t1(e, { preferredFontFormat: t }) {
  return t ? e.replace(Yp, (n) => {
    for (; ; ) {
      const [r, , i] = Kp.exec(n) || [];
      if (!i)
        return "";
      if (i === t)
        return `src: ${r};`;
    }
  }) : e;
}
function Vl(e) {
  return e.search($l) !== -1;
}
async function jl(e, t, n) {
  if (!Vl(e))
    return e;
  const r = t1(e, n);
  return Jp(r).reduce((a, l) => a.then((o) => e1(o, l, t, n)), Promise.resolve(r));
}
async function Qe(e, t, n) {
  var r;
  const i = (r = t.style) === null || r === void 0 ? void 0 : r.getPropertyValue(e);
  if (i) {
    const a = await jl(i, null, n);
    return t.style.setProperty(e, a, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function n1(e, t) {
  await Qe("background", e, t) || await Qe("background-image", e, t), await Qe("mask", e, t) || await Qe("-webkit-mask", e, t) || await Qe("mask-image", e, t) || await Qe("-webkit-mask-image", e, t);
}
async function r1(e, t) {
  const n = xe(e, HTMLImageElement);
  if (!(n && !In(e.src)) && !(xe(e, SVGImageElement) && !In(e.href.baseVal)))
    return;
  const r = n ? e.src : e.href.baseVal, i = await Yn(r, Kn(r), t);
  await new Promise((a, l) => {
    e.onload = a, e.onerror = t.onImageErrorHandler ? (...s) => {
      try {
        a(t.onImageErrorHandler(...s));
      } catch (u) {
        l(u);
      }
    } : l;
    const o = e;
    o.decode && (o.decode = a), o.loading === "lazy" && (o.loading = "eager"), n ? (e.srcset = "", e.src = i) : e.href.baseVal = i;
  });
}
async function i1(e, t) {
  const r = Be(e.childNodes).map((i) => Ul(i, t));
  await Promise.all(r).then(() => e);
}
async function Ul(e, t) {
  xe(e, Element) && (await n1(e, t), await r1(e, t), await i1(e, t));
}
function l1(e, t) {
  const { style: n } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
  const r = t.style;
  return r != null && Object.keys(r).forEach((i) => {
    n[i] = r[i];
  }), e;
}
const ii = {};
async function li(e) {
  let t = ii[e];
  if (t != null)
    return t;
  const r = await (await fetch(e)).text();
  return t = { url: e, cssText: r }, ii[e] = t, t;
}
async function ai(e, t) {
  let n = e.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, a = (n.match(/url\([^)]+\)/g) || []).map(async (l) => {
    let o = l.replace(r, "$1");
    return o.startsWith("https://") || (o = new URL(o, e.url).href), Bl(o, t.fetchRequestInit, ({ result: s }) => (n = n.replace(l, `url(${s})`), [l, s]));
  });
  return Promise.all(a).then(() => n);
}
function oi(e) {
  if (e == null)
    return [];
  const t = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let r = e.replace(n, "");
  const i = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const s = i.exec(r);
    if (s === null)
      break;
    t.push(s[0]);
  }
  r = r.replace(i, "");
  const a = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, l = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", o = new RegExp(l, "gi");
  for (; ; ) {
    let s = a.exec(r);
    if (s === null) {
      if (s = o.exec(r), s === null)
        break;
      a.lastIndex = o.lastIndex;
    } else
      o.lastIndex = a.lastIndex;
    t.push(s[0]);
  }
  return t;
}
async function a1(e, t) {
  const n = [], r = [];
  return e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Be(i.cssRules || []).forEach((a, l) => {
          if (a.type === CSSRule.IMPORT_RULE) {
            let o = l + 1;
            const s = a.href, u = li(s).then((h) => ai(h, t)).then((h) => oi(h).forEach((c) => {
              try {
                i.insertRule(c, c.startsWith("@import") ? o += 1 : i.cssRules.length);
              } catch (p) {
                console.error("Error inserting rule from remote css", {
                  rule: c,
                  error: p
                });
              }
            })).catch((h) => {
              console.error("Error loading remote css", h.toString());
            });
            r.push(u);
          }
        });
      } catch (a) {
        const l = e.find((o) => o.href == null) || document.styleSheets[0];
        i.href != null && r.push(li(i.href).then((o) => ai(o, t)).then((o) => oi(o).forEach((s) => {
          l.insertRule(s, l.cssRules.length);
        })).catch((o) => {
          console.error("Error loading remote stylesheet", o);
        })), console.error("Error inlining remote css file", a);
      }
  }), Promise.all(r).then(() => (e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Be(i.cssRules || []).forEach((a) => {
          n.push(a);
        });
      } catch (a) {
        console.error(`Error while reading CSS rules from ${i.href}`, a);
      }
  }), n));
}
function o1(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => Vl(t.style.getPropertyValue("src")));
}
async function s1(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Be(e.ownerDocument.styleSheets), r = await a1(n, t);
  return o1(r);
}
function ql(e) {
  return e.trim().replace(/["']/g, "");
}
function u1(e) {
  const t = /* @__PURE__ */ new Set();
  function n(r) {
    (r.style.fontFamily || getComputedStyle(r).fontFamily).split(",").forEach((a) => {
      t.add(ql(a));
    }), Array.from(r.children).forEach((a) => {
      a instanceof HTMLElement && n(a);
    });
  }
  return n(e), t;
}
async function c1(e, t) {
  const n = await s1(e, t), r = u1(e);
  return (await Promise.all(n.filter((a) => r.has(ql(a.style.fontFamily))).map((a) => {
    const l = a.parentStyleSheet ? a.parentStyleSheet.href : null;
    return jl(a.cssText, l, t);
  }))).join(`
`);
}
async function h1(e, t) {
  const n = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await c1(e, t);
  if (n) {
    const r = document.createElement("style"), i = document.createTextNode(n);
    r.appendChild(i), e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r);
  }
}
async function f1(e, t = {}) {
  const { width: n, height: r } = Ol(e, t), i = await qt(e, t, !0);
  return await h1(i, t), await Ul(i, t), l1(i, t), await Pp(i, n, r);
}
async function p1(e, t = {}) {
  const { width: n, height: r } = Ol(e, t), i = await f1(e, t), a = await Mt(i), l = document.createElement("canvas"), o = l.getContext("2d"), s = t.pixelRatio || vp(), u = t.canvasWidth || n, h = t.canvasHeight || r;
  return l.width = u * s, l.height = h * s, t.skipAutoScale || Ap(l), l.style.width = `${u}`, l.style.height = `${h}`, t.backgroundColor && (o.fillStyle = t.backgroundColor, o.fillRect(0, 0, l.width, l.height)), o.drawImage(a, 0, 0, l.width, l.height), l;
}
async function d1(e, t = {}) {
  const n = await p1(e, t);
  return await Ip(n);
}
const m1 = 3 * 60 * 1e3, Wl = Nt(null), g1 = () => zt(Wl), y1 = () => {
  const [e, t] = te(null), [n, r] = te(null), i = Le(!1), a = V(() => {
    if (i.current) return;
    i.current = !0;
    const s = document.documentElement;
    d1(s, {
      filter: (u) => {
        var h;
        return !((h = u.classList) != null && h.contains("elitea-assistant-container"));
      }
    }).then((u) => {
      t(u), r(Date.now());
    }).catch(() => {
      t(null), r(null);
    }).finally(() => {
      i.current = !1;
    });
  }, []), l = V(() => {
    t(null), r(null);
  }, []), o = V(() => !e || !n || Date.now() - n > m1 ? null : e, [e, n]);
  return { screenshot: e, capturedAt: n, captureScreenshot: a, clearScreenshot: l, getValidScreenshot: o };
}, Gl = Nt(null), k1 = () => zt(Gl), x1 = (e) => {
  const [t, n] = te(null);
  return He(() => {
    const r = oa(e.url, {
      path: e.path,
      ...e.token && { extraHeaders: { Authorization: `Bearer ${e.token}` } },
      ...e.withCredentials && { withCredentials: !0 },
      reconnectionDelayMax: 2e3
    });
    return r.on("connect", () => {
      n(r);
    }), r.on("connect_error", () => {
    }), () => {
      r.disconnect();
    };
  }, [e.url, e.path, e.token, e.withCredentials]), t;
}, Xl = Nt(null), b1 = () => zt(Xl), Zl = J((e) => {
  const {
    avatar: t,
    title: n,
    placeholder: r,
    welcomeMessage: i,
    supportProjectId: a,
    initialHistory: l,
    lastConversation: o,
    isInitLoading: s,
    onClose: u,
    onExpand: h,
    expanded: c
  } = e, {
    messages: p,
    inputText: f,
    setInputText: d,
    attachments: y,
    addFiles: b,
    removeAttachment: k,
    history: v,
    currentConversationId: S,
    isLoading: D,
    isUploading: F,
    handleNewChat: w,
    handleSelectConversation: M,
    handleSend: U
  } = kp({
    welcomeMessage: i,
    supportProjectId: a,
    initialHistory: l,
    initialConversation: o,
    isInitLoading: s
  }), $ = /* @__PURE__ */ re("div", { className: `elitea-assistant-window${c ? " elitea-assistant-window--expanded" : ""}`, children: [
    /* @__PURE__ */ E(
      bi,
      {
        title: n,
        expanded: c,
        history: v,
        currentConversationId: S,
        disabled: D,
        onClose: u,
        onExpand: h,
        onNewChat: w,
        onSelectConversation: M
      }
    ),
    /* @__PURE__ */ E(
      Ll,
      {
        avatar: t,
        messages: p,
        isLoading: D
      }
    ),
    /* @__PURE__ */ E(
      _l,
      {
        placeholder: r,
        text: f,
        onTextChange: d,
        attachments: y,
        onAddFiles: b,
        onRemoveAttachment: k,
        onSend: U,
        expanded: c,
        disabled: D,
        isUploading: F
      }
    )
  ] });
  return c ? /* @__PURE__ */ E(
    "div",
    {
      className: "elitea-assistant-overlay",
      onClick: h,
      children: /* @__PURE__ */ E("div", { onClick: (x) => x.stopPropagation(), children: $ })
    }
  ) : $;
});
Zl.displayName = "ChatWindow";
const Kl = J((e) => {
  const { message: t, onClose: n } = e;
  return /* @__PURE__ */ re("div", { className: "elitea-assistant-popup", children: [
    /* @__PURE__ */ E("span", { className: "elitea-assistant-popup-text", children: t }),
    /* @__PURE__ */ E(
      "button",
      {
        className: "elitea-assistant-popup-close",
        onClick: n,
        "aria-label": "Close popup",
        type: "button",
        children: /* @__PURE__ */ E(Ot, {})
      }
    )
  ] });
});
Kl.displayName = "PopupMessage";
const w1 = {
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
}, C1 = {
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
}, S1 = {
  light: w1,
  dark: C1
}, E1 = (e, t) => ({
  ...S1[e],
  ...t
}), v1 = (e) => ({
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
}), A1 = ia((e, t) => {
  const {
    apiUrl: n,
    token: r,
    withCredentials: i = !1,
    socketPath: a = "/socket.io/",
    apiAdapter: l,
    title: o = "Elitea Assistant",
    placeholder: s = "Type a message...",
    welcomeMessage: u = `Hi! I'm your ELITEA Support Assistant.
Ask me anything about ELITEA or report any issues you're experiencing. I have context about your current screen and settings.`,
    position: h = "bottom-right",
    theme: c = "light",
    colors: p,
    supportAssistantContext: f
  } = e, d = We(() => v1(E1(c, p)), [c, p]), y = We(() => {
    if (l) return l;
    if (n && (r || i)) return sa(n, { token: r, withCredentials: i });
    throw new Error(
      "EliteaAssistant: provide either apiAdapter, or apiUrl with token, or apiUrl with withCredentials"
    );
  }, [l, n, r, i]), b = We(
    () => ({
      url: n ? mp(n) : "",
      path: a,
      token: r,
      withCredentials: i
    }),
    [n, a, r, i]
  ), k = x1(b), {
    title: v,
    welcomeMessage: S,
    placeholder: D,
    supportProjectId: F,
    user: w,
    history: M,
    lastConversation: U,
    isLoading: $
  } = xp({
    api: y,
    title: o,
    welcomeMessage: u,
    placeholder: s
  }), { isOpen: x, isExpanded: T, open: L, close: q, toggle: P, expandFullscreen: _, collapseFullscreen: H, toggleFullscreen: ee } = gp(), ie = y1(), { popupVissible: pe, showPopup: m, hidePopup: ce, popupText: oe } = bp(x), g = V(() => {
    ie.captureScreenshot(), m();
  }, [ie, m]), he = V(() => {
    ie.clearScreenshot(), ce();
  }, [ie, ce]);
  return la(
    t,
    () => ({
      open: L,
      close: q,
      toggle: P,
      expandFullscreen: _,
      collapseFullscreen: H,
      toggleFullscreen: ee,
      showPopup: g,
      hidePopup: he,
      isOpen: () => x,
      isExpanded: () => T
    }),
    [
      x,
      T,
      L,
      q,
      P,
      _,
      H,
      ee,
      g,
      he
    ]
  ), /* @__PURE__ */ E(Ml.Provider, { value: y, children: /* @__PURE__ */ E(Gl.Provider, { value: k, children: /* @__PURE__ */ E(Xl.Provider, { value: f ?? null, children: /* @__PURE__ */ E(Wl.Provider, { value: ie, children: /* @__PURE__ */ re(
    "div",
    {
      className: `elitea-assistant-container elitea-assistant-container--${h}`,
      style: d,
      children: [
        x && /* @__PURE__ */ E(
          Zl,
          {
            title: v,
            placeholder: D,
            welcomeMessage: S,
            avatar: w.avatar,
            supportProjectId: F,
            initialHistory: M,
            lastConversation: U,
            isInitLoading: $,
            onClose: q,
            expanded: T,
            onExpand: ee
          }
        ),
        pe && !x && /* @__PURE__ */ E(
          Kl,
          {
            message: oe,
            onClose: he
          }
        ),
        /* @__PURE__ */ E(ki, { onClick: P })
      ]
    }
  ) }) }) }) });
});
A1.displayName = "EliteaAssistant";
export {
  A1 as EliteaAssistant,
  sa as createDefaultAdapter
};
//# sourceMappingURL=elitea-assistant.js.map
