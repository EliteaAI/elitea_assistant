(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";.elitea-assistant-container{position:fixed;z-index:2147483647;font-family:Montserrat,sans-serif;font-size:.875rem;line-height:1.5;box-sizing:border-box}.elitea-assistant-container *,.elitea-assistant-container *:before,.elitea-assistant-container *:after{box-sizing:border-box}.elitea-assistant-container--bottom-right{bottom:.75rem;right:1.09375rem}.elitea-assistant-container--bottom-left{bottom:.75rem;left:1.09375rem}.elitea-assistant-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-button-bg);color:var(--elitea-assistant-button-icon);box-shadow:0 .25rem .75rem #00000026;transition:transform .2s ease,box-shadow .2s ease;padding:0}.elitea-assistant-button:hover{transform:scale(1.08);box-shadow:0 .375rem 1.25rem #0003}.elitea-assistant-button svg{width:1.75rem;height:1.75rem;fill:currentColor}.elitea-assistant-window{position:absolute;bottom:0rem;width:28.75rem;height:30rem;border-radius:1rem;overflow:hidden;display:flex;flex-direction:column;box-shadow:var(--elitea-assistant-window-shadow);background:var(--elitea-assistant-chat-bg);border:.0625rem solid var(--elitea-assistant-window-border);animation:elitea-assistant-slide-up .25s ease-out}.elitea-assistant-container--bottom-right .elitea-assistant-window{right:2.875rem}.elitea-assistant-container--bottom-left .elitea-assistant-window{left:2.875rem}@keyframes elitea-assistant-slide-up{0%{opacity:0;transform:translateY(.75rem)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483646;background:#00000080;display:flex;align-items:center;justify-content:center;animation:elitea-assistant-fade-in .2s ease-out}@keyframes elitea-assistant-fade-in{0%{opacity:0}to{opacity:1}}.elitea-assistant-window--expanded{position:static;width:45rem;height:42.375rem;max-width:calc(100vw - 2rem);max-height:calc(100vh - 2rem);animation:elitea-assistant-scale-in .2s ease-out}@media (max-width: 48rem){.elitea-assistant-window--expanded{width:calc(100vw - 2rem);height:calc(100vh - 2rem);border-radius:.75rem}}@keyframes elitea-assistant-scale-in{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.elitea-assistant-header{display:flex;align-items:center;justify-content:space-between;height:3.25rem;padding:0 1rem;background:var(--elitea-assistant-header-bg);color:var(--elitea-assistant-header-text);flex-shrink:0;border-bottom:.0625rem solid var(--elitea-assistant-window-border)}.elitea-assistant-header-left,.elitea-assistant-header-right{display:flex;align-items:center;gap:.5rem}.elitea-assistant-header-title{font-size:.9375rem;font-weight:600;margin:0;white-space:nowrap}.elitea-assistant-header-action{border:.0625rem solid transparent;color:var(--elitea-assistant-header-text);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;width:1.75rem;height:1.75rem;min-width:auto;box-shadow:none;background:var(--elitea-assistant-header-action-bg);transition:background .15s ease,color .15s ease,border-color .15s ease}.elitea-assistant-header-close-action{border:none;color:var(--elitea-assistant-header-close-icon);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;width:1.75rem;height:1.75rem;min-width:auto;background:var(--elitea-assistant-header-close-bg);transition:background .15s ease,color .15s ease}.elitea-assistant-header-close-action:hover{background:var(--elitea-assistant-header-close-hover-bg);color:var(--elitea-assistant-header-close-hover-color)}.elitea-assistant-header-close-action:active{background:var(--elitea-assistant-header-close-active-bg);color:var(--elitea-assistant-header-close-active-color)}.elitea-assistant-header-close-action:disabled{background:var(--elitea-assistant-header-close-disabled-bg);color:var(--elitea-assistant-header-close-disabled-color);cursor:not-allowed}.elitea-assistant-header-action:hover{background:var(--elitea-assistant-header-action-hover-bg)}.elitea-assistant-header-action:active{background:var(--elitea-assistant-header-action-active-bg);color:var(--elitea-assistant-header-action-active-color);border-color:var(--elitea-assistant-header-action-active-border)}.elitea-assistant-header-action svg{width:1rem;height:1rem;fill:currentColor}.elitea-assistant-header-close-action svg{width:1.3rem;height:1.3rem;fill:currentColor}.elitea-assistant-history-wrapper{position:relative}.elitea-assistant-header-action:disabled{background:var(--elitea-assistant-header-action-disabled-bg);color:var(--elitea-assistant-header-action-disabled-color);cursor:not-allowed}.elitea-assistant-header-action:disabled:hover{background:var(--elitea-assistant-header-action-disabled-bg)}.elitea-assistant-history-dropdown{position:absolute;top:calc(100% + .55rem);right:-2.65rem;width:19.125rem;max-height:21.875rem;background:var(--elitea-assistant-chat-bg);border:.0625rem solid var(--elitea-assistant-history-dropdown-border);border-radius:.5rem;box-shadow:var(--elitea-assistant-history-dropdown-shadow);z-index:100;padding:.5rem 0}.elitea-assistant-history-dropdown-scroll{max-height:20.875rem;overflow-y:auto}.elitea-assistant-history-item{display:block;width:100%;padding:.5rem .75rem;border:none;background:none;cursor:pointer;text-align:left;color:var(--elitea-assistant-header-text);font-size:.875rem;font-weight:400;line-height:1.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:background .15s ease}.elitea-assistant-history-item:hover{background:var(--elitea-assistant-history-dropdown-hover-bg)}.elitea-assistant-history-item:disabled{opacity:.45;cursor:default;background:none}.elitea-assistant-messages{flex:1;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:.625rem}.elitea-assistant-message-wrapper{display:flex;flex-direction:column;max-width:80%}.elitea-assistant-message-wrapper--user{align-self:flex-end}.elitea-assistant-message-wrapper--assistant{align-self:flex-start}.elitea-assistant-message-meta{display:flex;align-items:center;gap:.375rem;margin-bottom:.375rem}.elitea-assistant-message-meta--assistant{justify-content:flex-start}.elitea-assistant-message-meta--user{justify-content:flex-end}.elitea-assistant-message-avatar{width:1.5rem;height:1.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.elitea-assistant-message-avatar--assistant{background:var(--elitea-assistant-button-bg);color:var(--elitea-assistant-button-icon)}.elitea-assistant-message-avatar--user{background:var(--elitea-assistant-user-avatar-bg);color:var(--elitea-assistant-user-avatar-icon)}.elitea-assistant-message-avatar svg{width:1.25rem;height:1.25rem;fill:currentColor}.elitea-assistant-message-avatar img{width:100%;height:100%;border-radius:50%;object-fit:cover}.elitea-assistant-message-time{font-size:.75rem;opacity:.6;color:var(--elitea-assistant-bot-msg-text)}.elitea-assistant-message{padding:.625rem .875rem;border-radius:.75rem;word-wrap:break-word;font-weight:400;font-style:Regular;font-size:.875rem;line-height:1.5rem;letter-spacing:0%}.elitea-assistant-message--user{white-space:pre-wrap;background:var(--elitea-assistant-user-msg-bg);color:var(--elitea-assistant-user-msg-text);border-radius:1rem 0rem 1rem 1rem}.elitea-assistant-message--assistant{background:var(--elitea-assistant-bot-msg-bg);color:var(--elitea-assistant-bot-msg-text);border-radius:0 1rem 1rem;position:relative;padding-bottom:1.5rem}.elitea-assistant-message--assistant>.elitea-assistant-tooltip-trigger{position:absolute;bottom:.375rem;right:.375rem;opacity:0;transition:opacity .15s ease}.elitea-assistant-message--assistant:hover>.elitea-assistant-tooltip-trigger{opacity:1}.elitea-assistant-message--error{border:1px solid #e53e3e;opacity:.9}@keyframes elitea-assistant-typing-bounce{0%,60%,to{transform:translateY(0);opacity:.25}30%{transform:translateY(-.25rem);opacity:.5}}.elitea-assistant-typing-indicator{display:inline-flex;align-items:center;gap:.1875rem;padding:.125rem 0}.elitea-assistant-typing-dot{width:.25rem;height:.25rem;border-radius:50%;background:var(--elitea-assistant-bot-msg-text);opacity:.25;animation:elitea-assistant-typing-bounce 1.2s ease-in-out infinite}.elitea-assistant-typing-dot:nth-child(2){animation-delay:.15s}.elitea-assistant-typing-dot:nth-child(3){animation-delay:.3s}@keyframes elitea-assistant-shimmer{0%{opacity:.4}50%{opacity:.7}to{opacity:.4}}.elitea-assistant-skeleton-row{display:flex;flex-direction:column;gap:.375rem;max-width:70%}.elitea-assistant-skeleton-row--left{align-self:flex-start}.elitea-assistant-skeleton-row--right{align-self:flex-end}.elitea-assistant-skeleton-meta{display:flex;align-items:center;gap:.375rem}.elitea-assistant-skeleton-row--right .elitea-assistant-skeleton-meta{justify-content:flex-end}.elitea-assistant-skeleton{background:var(--elitea-assistant-bot-msg-bg);border-radius:.5rem;animation:elitea-assistant-shimmer 1.4s ease-in-out infinite}.elitea-assistant-skeleton--avatar{width:1.5rem;height:1.5rem;border-radius:50%;flex-shrink:0}.elitea-assistant-skeleton--time{width:2.5rem;height:.75rem;border-radius:.25rem}.elitea-assistant-skeleton--bubble{width:10rem;height:2.5rem;border-radius:.75rem}.elitea-assistant-skeleton-row--right .elitea-assistant-skeleton--bubble{width:8rem}.elitea-assistant-empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--elitea-assistant-bot-msg-text);opacity:.5;font-size:.8125rem;text-align:center;padding:1.25rem}.elitea-assistant-status-chips{display:flex;flex-wrap:wrap;gap:.375rem;margin-bottom:.375rem}.elitea-assistant-status-chip{display:inline-flex;align-items:center;gap:.25rem;padding:.1875rem .5rem;border-radius:1rem;font-size:.6875rem;font-weight:500;background:var(--elitea-assistant-bot-msg-bg);border:1px solid var(--elitea-assistant-border);color:var(--elitea-assistant-bot-msg-text);opacity:.85;transition:opacity .2s ease}.elitea-assistant-status-chip--done{opacity:.55}.elitea-assistant-chip-spinner{width:.5rem;height:.5rem;border:1.5px solid currentColor;border-top-color:transparent;border-radius:50%;animation:elitea-assistant-chip-spin .6s linear infinite}@keyframes elitea-assistant-chip-spin{to{transform:rotate(360deg)}}.elitea-assistant-chip-check{font-size:.625rem;line-height:1}.elitea-assistant-markdown{overflow-wrap:break-word}.elitea-assistant-markdown>:first-child{margin-top:0}.elitea-assistant-markdown>:last-child{margin-bottom:0}.elitea-assistant-markdown p{margin:.5em 0}.elitea-assistant-markdown h1,.elitea-assistant-markdown h2,.elitea-assistant-markdown h3,.elitea-assistant-markdown h4,.elitea-assistant-markdown h5,.elitea-assistant-markdown h6{margin:.75em 0 .375em;font-weight:600;line-height:1.3}.elitea-assistant-markdown h1{font-size:1.25em}.elitea-assistant-markdown h2{font-size:1.125em}.elitea-assistant-markdown h3{font-size:1em}.elitea-assistant-markdown ul,.elitea-assistant-markdown ol{margin:.5em 0;padding-left:1.5em}.elitea-assistant-markdown li{margin:.25em 0}.elitea-assistant-markdown li>ul,.elitea-assistant-markdown li>ol{margin:.125em 0}.elitea-assistant-markdown code{background:#0000000f;padding:.125em .3em;border-radius:.25em;font-size:.85em;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,monospace}.elitea-assistant-markdown pre{margin:.5em 0;padding:.625em .75em;background:#0000000f;border-radius:.375em;overflow-x:auto}.elitea-assistant-markdown pre code{background:none;padding:0;font-size:.8125em;white-space:pre}.elitea-assistant-markdown blockquote{margin:.5em 0;padding:.25em .75em;border-left:3px solid rgba(0,0,0,.15);opacity:.85}.elitea-assistant-markdown blockquote>:first-child{margin-top:0}.elitea-assistant-markdown blockquote>:last-child{margin-bottom:0}.elitea-assistant-markdown hr{border:none;border-top:1px solid rgba(0,0,0,.1);margin:.75em 0}.elitea-assistant-markdown table{border-collapse:collapse;margin:.5em 0;font-size:.85em;width:100%}.elitea-assistant-markdown th,.elitea-assistant-markdown td{border:1px solid rgba(0,0,0,.1);padding:.375em .625em;text-align:left}.elitea-assistant-markdown th{font-weight:600;background:#00000008}.elitea-assistant-markdown a{color:var(--elitea-assistant-button-bg);text-decoration:underline}.elitea-assistant-markdown strong{font-weight:600}.elitea-assistant-markdown img{max-width:100%;border-radius:.375em}.elitea-assistant-input-area{display:flex;flex-direction:column;padding:.75rem;background:var(--elitea-assistant-input-bg);flex-shrink:0;border-top:.0625rem solid var(--elitea-assistant-window-border);position:relative}.elitea-assistant-input-area--drag-over>*:not(.elitea-assistant-drop-overlay){visibility:hidden}.elitea-assistant-drop-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;border:2px dashed var(--elitea-assistant-send-btn-bg);border-radius:0 0 1rem 1rem;color:var(--elitea-assistant-input-text);font-size:.875rem;z-index:10}.elitea-assistant-input-row{display:flex;align-items:center;gap:.5rem;width:100%}.elitea-assistant-input{flex:1;padding:.5rem .25rem;border:none;border-radius:0;background:transparent;color:var(--elitea-assistant-input-text);font-size:.875rem;font-family:inherit;outline:none;resize:none}.elitea-assistant-input::placeholder{color:var(--elitea-assistant-input-placeholder);opacity:1}.elitea-assistant-attach-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-header-action-bg);color:var(--elitea-assistant-header-text);flex-shrink:0;transition:opacity .15s ease;padding:0;opacity:.8}.elitea-assistant-attach-button:hover{opacity:1}.elitea-assistant-attach-button svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-send-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-send-btn-bg);color:var(--elitea-assistant-send-btn-icon);flex-shrink:0;transition:background .15s ease;padding:0}.elitea-assistant-send-button:disabled{background:var(--elitea-assistant-send-btn-disabled-bg);cursor:default}.elitea-assistant-send-button svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-file-list{display:flex;align-items:center;gap:.5rem;padding-bottom:.5rem}.elitea-assistant-file-chip{display:flex;align-items:center;gap:.75rem;max-width:11.25rem;height:2.25rem;padding:.375rem .75rem;border-radius:.5rem;background:var(--elitea-assistant-header-action-bg);flex-shrink:0}.elitea-assistant-file-chip-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--elitea-assistant-header-close-icon)}.elitea-assistant-file-chip-icon svg{width:.75rem;height:.875rem}.elitea-assistant-file-chip-name{flex:1;min-width:0;font-size:.75rem;color:var(--elitea-assistant-input-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.elitea-assistant-file-chip-remove{display:flex;align-items:center;justify-content:center;width:1rem;height:1rem;padding:0;border:none;background:none;cursor:pointer;color:var(--elitea-assistant-header-close-icon);flex-shrink:0;opacity:.7;transition:opacity .15s ease}.elitea-assistant-file-chip-remove:hover{opacity:1}.elitea-assistant-file-chip-remove svg{width:2rem;height:2rem;fill:currentColor}.elitea-assistant-file-chip--count{font-size:.75rem;font-weight:400;color:var(--elitea-assistant-input-text);max-width:none;gap:0}.elitea-assistant-file-chip--error{border:1px solid var(--elitea-assistant-error-color, #ef4444);background:var(--elitea-assistant-error-bg, rgba(239, 68, 68, .1))}.elitea-assistant-file-chip--completed .elitea-assistant-file-chip-icon{color:var(--elitea-assistant-success-color, #22c55e)}.elitea-assistant-file-chip-progress-text{width:1.5625rem;font-size:.625rem;color:var(--elitea-assistant-input-text);flex-shrink:0;text-align:right}.elitea-assistant-file-chip-error-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--elitea-assistant-error-color, #ef4444)}.elitea-assistant-file-chip-error-icon svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-file-chip-icon .elitea-assistant-file-chip-spinner{width:1.25rem;height:1.25rem;flex-shrink:0;color:var(--elitea-assistant-send-btn-bg)}.elitea-assistant-file-chip-spinner-progress{transition:stroke-dashoffset .15s ease}.elitea-assistant-attach-button:disabled{opacity:.5;cursor:not-allowed}.elitea-assistant-tooltip-trigger{display:inline-flex}.elitea-assistant-tooltip{position:fixed;z-index:2147483647;padding:.25rem .5rem;border-radius:.25rem;background:#e9ebf0;color:#0e131d;font-size:.6875rem;line-height:1.3;font-weight:500;font-family:Montserrat,sans-serif;max-width:20rem;word-wrap:break-word;pointer-events:none;box-shadow:0 0 0 .0625rem #00000014,0 .125rem .5rem #0000001f;transition:opacity .15s ease}@keyframes elitea-tooltip-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-popup{position:absolute;bottom:.25rem;display:flex;align-items:center;gap:1rem;padding:.75rem .75rem .75rem 1.25rem;border-radius:1.5rem 1.5rem 1.5rem 0;background:var(--elitea-assistant-popup-bg);color:var(--elitea-assistant-popup-text);font-size:.875rem;font-weight:500;line-height:1.5rem;white-space:nowrap;box-shadow:0 .25rem 1rem #0003;animation:elitea-assistant-popup-in .3s ease-out}.elitea-assistant-popup:before{content:"";position:absolute;top:-.0625rem;right:-.0625rem;bottom:-.0625rem;left:-.0625rem;border-radius:inherit;padding:.0625rem;background:var(--elitea-assistant-popup-border);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none}.elitea-assistant-container--bottom-right .elitea-assistant-popup{right:2.5rem;flex-direction:row-reverse;padding:.75rem 1.25rem .75rem .75rem;border-radius:1.5rem 1.5rem 0}.elitea-assistant-container--bottom-left .elitea-assistant-popup{left:2.5rem}.elitea-assistant-popup-text{-webkit-user-select:none;user-select:none}.elitea-assistant-popup-close{display:flex;align-items:center;justify-content:center;width:1.75rem;height:1.75rem;flex-shrink:0;border:none;border-radius:50%;background:var(--elitea-assistant-popup-close-bg);color:var(--elitea-assistant-popup-text);cursor:pointer;padding:0;transition:background .15s ease}.elitea-assistant-popup-close:hover{background:var(--elitea-assistant-popup-close-hover-bg)}.elitea-assistant-popup-close svg{width:1rem;height:1rem;fill:currentColor}@keyframes elitea-assistant-popup-in{0%{opacity:0;transform:translateY(.5rem)}to{opacity:1;transform:translateY(0)}}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { jsx as S, jsxs as ae, Fragment as hi } from "react/jsx-runtime";
import { memo as Z, useState as le, useCallback as $, useRef as Te, useLayoutEffect as fa, useEffect as $e, useMemo as Ue, createContext as Ht, useContext as $t, forwardRef as pa, useImperativeHandle as da } from "react";
import { createPortal as ma } from "react-dom";
import { io as ga } from "socket.io-client";
const pt = (e, t = !1) => ({
  ...e.token && { Authorization: `Bearer ${e.token}` },
  ...t && { "Content-Type": "application/json" }
}), dt = (e) => e.withCredentials ? "include" : void 0, mt = async (e) => {
  if (!e.ok) throw new Error(`${e.status} ${e.statusText}`);
  return e;
}, ya = (e, t = {}) => ({
  getConfig: () => fetch(`${e}/config/`, {
    headers: pt(t),
    credentials: dt(t)
  }).then(mt).then((n) => n.json()),
  getConversations: () => fetch(`${e}/conversations/`, {
    headers: pt(t),
    credentials: dt(t)
  }).then(mt).then((n) => n.json()),
  getConversation: (n) => fetch(`${e}/conversation/${n}`, {
    headers: pt(t),
    credentials: dt(t)
  }).then(mt).then((r) => r.json()),
  createConversation: () => fetch(`${e}/conversations/`, {
    method: "POST",
    headers: pt(t, !0),
    credentials: dt(t),
    body: JSON.stringify({})
  }).then(mt).then((n) => n.json()),
  deleteConversation: (n) => fetch(`${e}/conversation/${n}`, {
    method: "DELETE",
    headers: pt(t),
    credentials: dt(t)
  }).then(mt).then(() => {
  }),
  uploadFile: (n, r, i) => new Promise((l, a) => {
    const o = new XMLHttpRequest();
    i && o.upload.addEventListener("progress", (s) => {
      s.lengthComputable && i(s.loaded, s.total);
    }), o.addEventListener("load", () => {
      if (o.status >= 200 && o.status < 300)
        try {
          l(JSON.parse(o.responseText));
        } catch {
          a(new Error("Failed to parse upload response"));
        }
      else
        try {
          const s = JSON.parse(o.responseText);
          a(new Error(s.error || `Upload failed with status: ${o.status}`));
        } catch {
          a(new Error(`Upload failed with status: ${o.status}`));
        }
    }), o.addEventListener("error", () => a(new Error("Upload failed due to network error"))), o.addEventListener("abort", () => a(new Error("Upload was aborted"))), o.open("POST", `${e}/attachments/${n}`), t.token && o.setRequestHeader("Authorization", `Bearer ${t.token}`), t.withCredentials && (o.withCredentials = !0), o.send(r);
  })
}), Rn = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M14.2499 4.375C14.8319 4.375 15.3037 4.84137 15.3037 5.41666C15.3037 5.87017 15.0104 6.25575 14.6012 6.39877V8.26399H14.9524C15.5109 8.26399 15.9675 8.69328 16.0037 9.23621H18.2544C20.5477 9.23621 22.4397 10.9331 22.7159 13.1259C23.2816 13.1443 23.7344 13.6031 23.7344 14.1667V15.6945C23.7343 16.2697 23.2625 16.7362 22.6805 16.7362C22.6637 16.7362 22.6469 16.7356 22.6302 16.7348C22.2147 18.5198 20.7287 19.6036 18.2544 20.0695C15.3037 20.625 9.26175 21.875 9.26175 21.875L10.1048 20.0695C8.0024 20.0695 6.23719 18.643 5.74513 16.7159C5.67822 16.7291 5.60903 16.7362 5.53821 16.7362C4.95623 16.7362 4.48444 16.2697 4.48438 15.6945V14.1667C4.48438 13.5914 4.95619 13.1251 5.53821 13.1251C5.57345 13.1251 5.60828 13.1267 5.64263 13.1301C5.91693 10.9353 7.81012 9.23621 10.1048 9.23621H12.3556C12.3917 8.69328 12.8484 8.26399 13.4068 8.26399H13.7581V6.33788C13.4239 6.1632 13.1961 5.81633 13.1961 5.41666C13.1961 4.84137 13.6679 4.375 14.2499 4.375ZM11.2289 11.3195C9.44405 11.3195 7.99715 12.7497 7.99715 14.5139V14.6528C7.99721 16.417 9.44409 17.8473 11.2289 17.8473H17.1304C18.9152 17.8473 20.362 16.417 20.3621 14.6528V14.5139C20.3621 12.7497 18.9152 11.3195 17.1304 11.3195H11.2289ZM11.4397 13.5416C12.0217 13.5416 12.4935 14.008 12.4935 14.5833C12.4935 15.1585 12.0217 15.6249 11.4397 15.6249C10.8577 15.6249 10.3858 15.1585 10.3858 14.5833C10.3858 14.008 10.8577 13.5416 11.4397 13.5416ZM16.9196 13.5416C17.5016 13.5416 17.9734 14.008 17.9734 14.5833C17.9734 15.1585 17.5016 15.6249 16.9196 15.6249C16.3376 15.6249 15.8658 15.1585 15.8658 14.5833C15.8658 14.008 16.3376 13.5416 16.9196 13.5416Z" })
  }
));
Rn.displayName = "AssistantIcon";
const fi = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 12 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M11.5876 6.6172C11.6361 6.66719 11.6746 6.72656 11.7008 6.7919C11.7271 6.85725 11.7406 6.9273 11.7406 6.99804C11.7406 7.06878 11.7271 7.13883 11.7008 7.20417C11.6746 7.26952 11.6361 7.32889 11.5876 7.37888L6.23589 12.8964C5.55078 13.6031 4.6216 14.0001 3.65277 14C2.68393 13.9999 1.7548 13.6028 1.06978 12.8961C0.384749 12.1893 -6.11425e-05 11.2307 7.28683e-09 10.2313C6.11571e-05 9.2318 0.384988 8.2733 1.0701 7.56661L7.5443 0.789483C8.03342 0.284364 8.69701 0.000378941 9.3891 3.78958e-07C10.0812 -0.000378183 10.7451 0.282881 11.2347 0.787465C11.7243 1.29205 11.9996 1.97662 12 2.69059C12.0004 3.40456 11.7258 4.08943 11.2367 4.59455L4.76116 11.3717C4.46709 11.6751 4.06823 11.8455 3.65235 11.8455C3.23646 11.8455 2.8376 11.6751 2.54353 11.3717C2.24945 11.0683 2.08424 10.6568 2.08424 10.2278C2.08424 9.79877 2.24945 9.38731 2.54353 9.08393L7.97674 3.39012C8.02433 3.33774 8.0816 3.29571 8.14518 3.26651C8.20875 3.23731 8.27735 3.22152 8.34693 3.22008C8.4165 3.21863 8.48566 3.23156 8.55032 3.2581C8.61498 3.28464 8.67385 3.32425 8.72345 3.37461C8.77305 3.42497 8.81238 3.48506 8.83913 3.55133C8.86588 3.61761 8.87951 3.68874 8.87922 3.76053C8.87893 3.83232 8.86472 3.90333 8.83742 3.96937C8.81013 4.03541 8.77031 4.09515 8.7203 4.14508L3.28643 9.84494C3.23778 9.89474 3.19911 9.95393 3.17264 10.0191C3.14616 10.0843 3.13239 10.1543 3.13212 10.225C3.13185 10.2957 3.14507 10.3658 3.17105 10.4312C3.19702 10.4966 3.23523 10.5561 3.2835 10.6063C3.33177 10.6565 3.38914 10.6964 3.45235 10.7237C3.51556 10.751 3.58337 10.7652 3.6519 10.7655C3.72043 10.7658 3.78835 10.7521 3.85176 10.7253C3.91518 10.6985 3.97287 10.6591 4.02152 10.6093L10.4964 3.83556C10.7904 3.53281 10.9559 3.12194 10.9563 2.69335C10.9568 2.26475 10.7921 1.85354 10.4987 1.55016C10.2052 1.24679 9.80691 1.0761 9.39145 1.07566C8.97599 1.07522 8.57737 1.24506 8.2833 1.54781L1.8104 8.32224C1.56791 8.572 1.37549 8.86858 1.24411 9.19506C1.11273 9.52153 1.04496 9.8715 1.04469 10.225C1.04442 10.5785 1.11164 10.9286 1.24252 11.2553C1.37339 11.5819 1.56536 11.8788 1.80747 12.129C2.04957 12.3792 2.33706 12.5777 2.65353 12.7132C2.97 12.8487 3.30924 12.9186 3.6519 12.9189C3.99456 12.9192 4.33391 12.8498 4.65059 12.7148C4.96727 12.5798 5.25506 12.3818 5.49755 12.132L10.8499 6.6145C10.9481 6.51399 11.0809 6.45781 11.2193 6.45831C11.3576 6.45881 11.4901 6.51596 11.5876 6.6172Z" })
  }
));
fi.displayName = "AttachmentIcon";
const ka = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.2L4 17.2V4H20V16Z" })
  }
));
ka.displayName = "ChatIcon";
const Fn = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S(
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
Fn.displayName = "CheckIcon";
const Vt = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" })
  }
));
Vt.displayName = "CloseIcon";
const pi = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M11.8402 0.15976C11.7379 0.0574675 11.5992 0 11.4545 0C11.3099 0 11.1711 0.0574675 11.0689 0.15976L7.63636 3.59205V1.63636C7.63636 1.4917 7.57889 1.35296 7.4766 1.25067C7.3743 1.14837 7.23557 1.09091 7.09091 1.09091C6.94624 1.09091 6.80751 1.14837 6.70521 1.25067C6.60292 1.35296 6.54545 1.4917 6.54545 1.63636V4.90909C6.54545 5.05375 6.60292 5.19249 6.70521 5.29479C6.80751 5.39708 6.94624 5.45455 7.09091 5.45455H10.3636C10.5083 5.45455 10.647 5.39708 10.7493 5.29479C10.8516 5.19249 10.9091 5.05375 10.9091 4.90909C10.9091 4.76443 10.8516 4.62569 10.7493 4.5234C10.647 4.4211 10.5083 4.36364 10.3636 4.36364H8.40795L11.8402 0.931149C11.9425 0.828856 12 0.690118 12 0.545455C12 0.400791 11.9425 0.262053 11.8402 0.15976ZM4.90909 6.54545H1.63636C1.4917 6.54545 1.35296 6.60292 1.25067 6.70521C1.14837 6.80751 1.09091 6.94624 1.09091 7.09091C1.09091 7.23557 1.14837 7.3743 1.25067 7.4766C1.35296 7.57889 1.4917 7.63636 1.63636 7.63636H3.59205L0.15976 11.0689C0.0574675 11.1711 0 11.3099 0 11.4545C0 11.5992 0.0574675 11.7379 0.15976 11.8402C0.262053 11.9425 0.400791 12 0.545455 12C0.690118 12 0.828856 11.9425 0.931149 11.8402L4.36364 8.40795V10.3636C4.36364 10.5083 4.4211 10.647 4.5234 10.7493C4.62569 10.8516 4.76443 10.9091 4.90909 10.9091C5.05375 10.9091 5.19249 10.8516 5.29479 10.7493C5.39708 10.647 5.45455 10.5083 5.45455 10.3636V7.09091C5.45455 6.94624 5.39708 6.80751 5.29479 6.70521C5.19249 6.60292 5.05375 6.54545 4.90909 6.54545Z" })
  }
));
pi.displayName = "CollapseIcon";
const di = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S(
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
di.displayName = "CopyIcon";
const xa = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" })
  }
));
xa.displayName = "ErrorIcon";
const mi = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M12 0.545455V3.81818C12 3.96285 11.9425 4.10158 11.8402 4.20388C11.7379 4.30617 11.5992 4.36364 11.4545 4.36364C11.3099 4.36364 11.1711 4.30617 11.0689 4.20388C10.9666 4.10158 10.9091 3.96285 10.9091 3.81818V1.86205L7.47682 5.295C7.37447 5.39735 7.23565 5.45485 7.09091 5.45485C6.94617 5.45485 6.80735 5.39735 6.705 5.295C6.60265 5.19265 6.54515 5.05383 6.54515 4.90909C6.54515 4.76435 6.60265 4.62553 6.705 4.52318L10.138 1.09091H8.18182C8.03715 1.09091 7.89842 1.03344 7.79612 0.931149C7.69383 0.828856 7.63636 0.690118 7.63636 0.545455C7.63636 0.400791 7.69383 0.262053 7.79612 0.15976C7.89842 0.0574675 8.03715 0 8.18182 0H11.4545C11.5992 0 11.7379 0.0574675 11.8402 0.15976C11.9425 0.262053 12 0.400791 12 0.545455ZM4.52318 6.705L1.09091 10.138V8.18182C1.09091 8.03715 1.03344 7.89842 0.931149 7.79612C0.828856 7.69383 0.690118 7.63636 0.545455 7.63636C0.400791 7.63636 0.262053 7.69383 0.15976 7.79612C0.0574675 7.89842 0 8.03715 0 8.18182V11.4545C0 11.5992 0.0574675 11.7379 0.15976 11.8402C0.262053 11.9425 0.400791 12 0.545455 12H3.81818C3.96285 12 4.10158 11.9425 4.20388 11.8402C4.30617 11.7379 4.36364 11.5992 4.36364 11.4545C4.36364 11.3099 4.30617 11.1711 4.20388 11.0689C4.10158 10.9666 3.96285 10.9091 3.81818 10.9091H1.86205L5.295 7.47682C5.39735 7.37447 5.45485 7.23565 5.45485 7.09091C5.45485 6.94617 5.39735 6.80735 5.295 6.705C5.19265 6.60265 5.05383 6.54515 4.90909 6.54515C4.76435 6.54515 4.62553 6.60265 4.52318 6.705Z" })
  }
));
mi.displayName = "ExpandIcon";
const gi = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 12 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S(
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
gi.displayName = "FileIcon";
const yi = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M7.84245 3.50002V6.6697L10.3716 8.2498C10.499 8.32948 10.5908 8.45859 10.6268 8.60874C10.6628 8.75888 10.64 8.91776 10.5635 9.05042C10.487 9.18309 10.363 9.27867 10.2188 9.31614C10.0746 9.3536 9.92206 9.32989 9.79466 9.25022L6.99378 7.50022C6.91089 7.44836 6.8423 7.37503 6.79469 7.28737C6.74708 7.19972 6.72207 7.10072 6.7221 7.00001V3.50002C6.7221 3.34531 6.78112 3.19693 6.88617 3.08754C6.99122 2.97814 7.13371 2.91668 7.28227 2.91668C7.43084 2.91668 7.57333 2.97814 7.67838 3.08754C7.78343 3.19693 7.84245 3.34531 7.84245 3.50002ZM7.28227 2.15915e-05C6.39859 -0.00227058 5.52325 0.177963 4.70691 0.530291C3.89056 0.882618 3.14943 1.40004 2.52639 2.05262C2.01733 2.58929 1.56499 3.10554 1.12035 3.64585V2.33335C1.12035 2.17864 1.06133 2.03027 0.956278 1.92087C0.851225 1.81148 0.708743 1.75002 0.560175 1.75002C0.411607 1.75002 0.269125 1.81148 0.164071 1.92087C0.0590182 2.03027 0 2.17864 0 2.33335V5.25001C0 5.40472 0.0590182 5.5531 0.164071 5.66249C0.269125 5.77189 0.411607 5.83335 0.560175 5.83335H3.36105C3.50962 5.83335 3.6521 5.77189 3.75715 5.66249C3.86221 5.5531 3.92122 5.40472 3.92122 5.25001C3.92122 5.0953 3.86221 4.94693 3.75715 4.83754C3.6521 4.72814 3.50962 4.66668 3.36105 4.66668H1.75055C2.2512 4.05272 2.74976 3.4745 3.31834 2.87512C4.09688 2.0644 5.08758 1.51057 6.16666 1.28283C7.24574 1.05509 8.36535 1.16353 9.38558 1.59462C10.4058 2.02571 11.2814 2.76032 11.903 3.70667C12.5246 4.65301 12.8646 5.76912 12.8805 6.91554C12.8965 8.06195 12.5876 9.18784 11.9926 10.1525C11.3975 11.1172 10.5427 11.8779 9.53484 12.3395C8.52702 12.8011 7.41089 12.9433 6.32594 12.7481C5.24098 12.553 4.23531 12.0292 3.43457 11.2423C3.38106 11.1896 3.3181 11.1485 3.2493 11.1211C3.18051 11.0938 3.10721 11.0808 3.03361 11.083C2.96 11.0852 2.88753 11.1024 2.82033 11.1338C2.75312 11.1651 2.6925 11.2099 2.64193 11.2656C2.59135 11.3214 2.55181 11.3869 2.52557 11.4586C2.49932 11.5302 2.48689 11.6065 2.48897 11.6832C2.49105 11.7598 2.5076 11.8353 2.53769 11.9053C2.56778 11.9753 2.61081 12.0384 2.66433 12.091C3.4622 12.8751 4.43221 13.4439 5.48972 13.7478C6.54722 14.0517 7.66008 14.0814 8.73117 13.8345C9.80226 13.5875 10.799 13.0713 11.6345 12.3309C12.4699 11.5905 13.1187 10.6485 13.5241 9.58695C13.9295 8.52544 14.0793 7.37674 13.9604 6.24108C13.8414 5.10543 13.4574 4.01735 12.8418 3.0718C12.2261 2.12625 11.3976 1.35197 10.4286 0.816529C9.4595 0.281089 8.37931 0.000765142 7.28227 2.15915e-05Z" })
  }
));
yi.displayName = "HistoryIcon";
const ki = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M14 7C14 7.15471 13.9385 7.30308 13.8291 7.41248C13.7197 7.52188 13.5714 7.58333 13.4167 7.58333H7.58333V13.4167C7.58333 13.5714 7.52188 13.7197 7.41248 13.8291C7.30308 13.9385 7.15471 14 7 14C6.84529 14 6.69692 13.9385 6.58752 13.8291C6.47812 13.7197 6.41667 13.5714 6.41667 13.4167V7.58333H0.583333C0.428624 7.58333 0.280251 7.52188 0.170854 7.41248C0.0614583 7.30308 0 7.15471 0 7C0 6.84529 0.0614583 6.69692 0.170854 6.58752C0.280251 6.47812 0.428624 6.41667 0.583333 6.41667H6.41667V0.583333C6.41667 0.428624 6.47812 0.280251 6.58752 0.170854C6.69692 0.0614583 6.84529 0 7 0C7.15471 0 7.30308 0.0614583 7.41248 0.170854C7.52188 0.280251 7.58333 0.428624 7.58333 0.583333V6.41667H13.4167C13.5714 6.41667 13.7197 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7Z" })
  }
));
ki.displayName = "PlusIcon";
const xi = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 13 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M13 6.99208C13.0005 7.17027 12.9514 7.34536 12.8579 7.49921C12.7644 7.65307 12.6299 7.78012 12.4682 7.86721L1.55229 13.8687C1.39545 13.9542 1.21835 13.9995 1.03805 14C0.871785 13.9997 0.708022 13.961 0.56049 13.8873C0.412958 13.8136 0.285957 13.7069 0.190131 13.5763C0.0943049 13.4456 0.0324474 13.2948 0.00974343 13.1364C-0.0129605 12.9781 0.00415071 12.8168 0.0596426 12.6661L1.83768 7.66843C1.8552 7.61898 1.88839 7.57606 1.93258 7.54567C1.97677 7.51529 2.02975 7.49898 2.08407 7.49903H6.75898C6.83028 7.49918 6.90085 7.48523 6.9663 7.45806C7.03176 7.43088 7.0907 7.39105 7.13948 7.34105C7.18825 7.29104 7.22581 7.23193 7.24982 7.16738C7.27384 7.10283 7.28379 7.03423 7.27907 6.96582C7.26727 6.83723 7.20539 6.71767 7.10582 6.63108C7.00624 6.5445 6.87632 6.49728 6.74208 6.49888H2.08862C2.03438 6.49897 1.98146 6.48275 1.93728 6.45249C1.89309 6.42222 1.85986 6.37943 1.84223 6.3301L0.0583424 1.32936C-0.0111263 1.13773 -0.018329 0.930327 0.0376911 0.734676C0.0937111 0.539025 0.210303 0.364388 0.371984 0.233956C0.533666 0.103523 0.732787 0.0234668 0.942905 0.00441721C1.15302 -0.0146324 1.3642 0.0282263 1.54838 0.127302L12.4702 6.12132C12.6308 6.20829 12.7645 6.33476 12.8576 6.48776C12.9507 6.64076 12.9999 6.81481 13 6.99208Z" })
  }
));
xi.displayName = "SendIcon";
const bi = Z(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" })
  }
));
bi.displayName = "UserIcon";
const wi = Z((e) => {
  const { onClick: t } = e;
  return /* @__PURE__ */ S(
    "button",
    {
      className: "elitea-assistant-button",
      onClick: t,
      "aria-label": "Support Assistant",
      type: "button",
      children: /* @__PURE__ */ S(Rn, {})
    }
  );
});
wi.displayName = "ChatButton";
const Ci = Z((e) => {
  const { text: t } = e, [n, r] = le(!1), i = $(() => {
    navigator.clipboard.writeText(t), r(!0), setTimeout(() => r(!1), 2e3);
  }, [t]);
  return /* @__PURE__ */ S(it, { content: "Copy to clipboard", children: /* @__PURE__ */ S(
    "button",
    {
      className: "elitea-assistant-header-action",
      onClick: i,
      "aria-label": "Copy to clipboard",
      type: "button",
      children: n ? /* @__PURE__ */ S(Fn, {}) : /* @__PURE__ */ S(di, {})
    }
  ) });
});
Ci.displayName = "CopyButton";
const it = Z((e) => {
  const { content: t, children: n, placement: r = "top" } = e, i = Te(null), l = Te(null), [a, o] = le(!1), [s, u] = le(!1), [h, c] = le({ top: 0, left: 0 }), p = $(() => {
    const f = i.current, d = l.current;
    if (!f || !d) return;
    const y = f.getBoundingClientRect(), b = d.getBoundingClientRect();
    let k;
    r === "top" ? k = y.top - b.height - 8 : k = y.bottom + 8;
    let A = y.left + y.width / 2 - b.width / 2;
    const E = 8;
    A < E && (A = E), A + b.width > window.innerWidth - E && (A = window.innerWidth - E - b.width), k < E && (k = y.bottom + 8), c({ top: k, left: A }), u(!0);
  }, [r]);
  return fa(() => {
    a && l.current && p(), a || u(!1);
  }, [a, p]), /* @__PURE__ */ ae(hi, { children: [
    /* @__PURE__ */ S(
      "div",
      {
        ref: i,
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        className: "elitea-assistant-tooltip-trigger",
        children: n
      }
    ),
    a && ma(
      /* @__PURE__ */ S(
        "div",
        {
          ref: l,
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
it.displayName = "Tooltip";
const Si = Z((e) => {
  const {
    title: t,
    expanded: n,
    history: r,
    currentConversationId: i,
    disabled: l,
    onClose: a,
    onExpand: o,
    onNewChat: s,
    onSelectConversation: u
  } = e, h = Te(null), [c, p] = le(!1);
  $e(() => {
    if (!c) return;
    const y = (b) => {
      h.current && !h.current.contains(b.target) && p(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [c]);
  const f = $(() => {
    r.length > 0 && p((y) => !y);
  }, [r.length]), d = $(
    (y) => {
      u(y), p(!1);
    },
    [u]
  );
  return /* @__PURE__ */ ae("div", { className: "elitea-assistant-header", children: [
    /* @__PURE__ */ ae("div", { className: "elitea-assistant-header-left", children: [
      /* @__PURE__ */ S(
        "button",
        {
          className: "elitea-assistant-header-close-action",
          onClick: a,
          "aria-label": "Close chat",
          type: "button",
          children: /* @__PURE__ */ S(Vt, {})
        }
      ),
      /* @__PURE__ */ S("h2", { className: "elitea-assistant-header-title", children: t })
    ] }),
    /* @__PURE__ */ ae("div", { className: "elitea-assistant-header-right", children: [
      /* @__PURE__ */ S(it, { content: "New conversation", children: /* @__PURE__ */ S(
        "button",
        {
          className: "elitea-assistant-header-action",
          onClick: s,
          "aria-label": "New chat",
          type: "button",
          disabled: l,
          children: /* @__PURE__ */ S(ki, {})
        }
      ) }),
      /* @__PURE__ */ S(it, { content: "Conversations history", children: /* @__PURE__ */ ae(
        "div",
        {
          ref: h,
          className: "elitea-assistant-history-wrapper",
          children: [
            /* @__PURE__ */ S(
              "button",
              {
                className: "elitea-assistant-header-action",
                onClick: f,
                "aria-label": "Chat history",
                type: "button",
                disabled: l || r.length === 0,
                children: /* @__PURE__ */ S(yi, {})
              }
            ),
            c && r.length > 0 && /* @__PURE__ */ S("div", { className: "elitea-assistant-history-dropdown", children: /* @__PURE__ */ S("div", { className: "elitea-assistant-history-dropdown-scroll", children: r.map((y) => /* @__PURE__ */ S(
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
      /* @__PURE__ */ S(it, { content: n ? "Collapse" : "Expand", children: /* @__PURE__ */ S(
        "button",
        {
          className: "elitea-assistant-header-action",
          onClick: o,
          "aria-label": "Expand chat",
          type: "button",
          children: n ? /* @__PURE__ */ S(pi, {}) : /* @__PURE__ */ S(mi, {})
        }
      ) })
    ] })
  ] });
});
Si.displayName = "ChatHeader";
const Ei = Z((e) => {
  const { avatar: t, messages: n, isLoading: r, onAnimationComplete: i } = e, l = Te(null), a = Te(!1);
  return $e(() => {
    var s;
    if (n.length === 0) {
      a.current = !1;
      return;
    }
    const o = a.current ? "smooth" : "instant";
    a.current = !0, (s = l.current) == null || s.scrollIntoView({ behavior: o });
  }, [n]), r ? /* @__PURE__ */ S(Qi, {}) : n.length === 0 ? /* @__PURE__ */ S("div", { className: "elitea-assistant-empty", children: "Send a message to start a conversation" }) : /* @__PURE__ */ ae("div", { className: "elitea-assistant-messages", children: [
    n.map((o) => /* @__PURE__ */ S(
      Yi,
      {
        message: o,
        avatar: t,
        onAnimationComplete: i
      },
      o.id
    )),
    /* @__PURE__ */ S("div", { ref: l })
  ] });
});
Ei.displayName = "MessageList";
var se = /* @__PURE__ */ ((e) => (e.PENDING = "pending", e.UPLOADING = "uploading", e.COMPLETED = "completed", e.ERROR = "error", e))(se || {});
const Rt = 150 * 1024 * 1024, rr = 3 * 1024 * 1024, ir = 150 * 1024 * 1024, ot = 10, lr = 10, Yt = 5 * 1024 * 1024, Ai = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg"]), ba = /* @__PURE__ */ new Set([
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
]), wa = /* @__PURE__ */ new Set([
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
]), vi = /* @__PURE__ */ new Set([...Ai, ...ba, ...wa]), Ca = [...vi].map((e) => `.${e}`).join(","), yn = 7, Qt = 2 * Math.PI * yn, Ii = Z((e) => {
  const { status: t, progress: n = 0 } = e;
  if (t === se.UPLOADING) {
    const r = Qt - n / 100 * Qt;
    return /* @__PURE__ */ ae(
      "svg",
      {
        className: "elitea-assistant-file-chip-spinner",
        viewBox: "0 0 18 18",
        children: [
          /* @__PURE__ */ S(
            "circle",
            {
              cx: "9",
              cy: "9",
              r: yn,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              opacity: "0.25"
            }
          ),
          /* @__PURE__ */ S(
            "circle",
            {
              cx: "9",
              cy: "9",
              r: yn,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeDasharray: Qt,
              strokeDashoffset: r,
              transform: "rotate(-90 9 9)",
              className: "elitea-assistant-file-chip-spinner-progress"
            }
          )
        ]
      }
    );
  }
  return t === se.COMPLETED ? /* @__PURE__ */ S(Fn, {}) : /* @__PURE__ */ S(gi, {});
});
Ii.displayName = "AttachmentIcon";
const Ti = Z((e) => {
  const { status: t, progress: n } = e;
  return t === se.UPLOADING ? /* @__PURE__ */ ae("span", { className: "elitea-assistant-file-chip-progress-text", children: [
    n,
    "%"
  ] }) : null;
});
Ti.displayName = "AttachmentProgress";
const Pi = Z((e) => {
  const { attachment: t, onRemove: n } = e, r = (i) => {
    const l = "elitea-assistant-file-chip";
    return {
      uploading: `${l} ${l}--uploading`,
      error: `${l} ${l}--error`,
      completed: `${l} ${l}--completed`,
      pending: l
    }[i] || l;
  };
  return /* @__PURE__ */ S(it, { content: t.error ?? t.name, children: /* @__PURE__ */ ae("div", { className: r(t.status), children: [
    /* @__PURE__ */ S("span", { className: "elitea-assistant-file-chip-icon", children: /* @__PURE__ */ S(
      Ii,
      {
        status: t.status,
        progress: t.progress
      }
    ) }),
    /* @__PURE__ */ S("span", { className: "elitea-assistant-file-chip-name", children: t.name }),
    /* @__PURE__ */ S(
      Ti,
      {
        status: t.status,
        progress: t.progress
      }
    ),
    /* @__PURE__ */ S(
      "button",
      {
        className: "elitea-assistant-file-chip-remove",
        onClick: () => n(t.id),
        "aria-label": `Remove ${t.name}`,
        type: "button",
        disabled: t.status === se.UPLOADING,
        children: /* @__PURE__ */ S(Vt, {})
      }
    )
  ] }) });
});
Pi.displayName = "AttachmentChip";
const Li = Z((e) => {
  const {
    placeholder: t,
    text: n,
    onTextChange: r,
    attachments: i,
    onAddFiles: l,
    onRemoveAttachment: a,
    onSend: o,
    expanded: s,
    disabled: u,
    isUploading: h
  } = e, c = Te(null), [p, f] = le(0), [d, y] = le(!1), b = Te(0), { visibleAttachments: k, remainingAttachmentsCount: A } = Ue(() => {
    const T = s ? 3 : 2;
    return {
      visibleAttachments: i.slice(0, T),
      remainingAttachmentsCount: i.length - T
    };
  }, [i, s]), E = Ue(
    () => i != null && i.length ? i.every((T) => T.status === se.PENDING || T.status === se.COMPLETED) : !0,
    [i]
  ), D = Ue(
    () => !!(u || h || !E || !n.trim()),
    [u, h, n, E]
  ), R = () => {
    const T = n.trim(), _ = i.filter((V) => V.status === se.COMPLETED && V.filepath);
    !T && _.length === 0 || h || (o(T), r(""));
  }, w = (T) => {
    T.key === "Enter" && !T.shiftKey && (T.preventDefault(), R());
  }, z = () => {
    var T;
    (T = c.current) == null || T.click();
  }, q = (T) => {
    const _ = T.target.files;
    _ && l(Array.from(_)), f((V) => V + 1);
  }, j = (T) => {
    T.preventDefault(), b.current += 1, T.dataTransfer.types.includes("Files") && y(!0);
  }, x = (T) => {
    T.preventDefault(), b.current -= 1, b.current === 0 && y(!1);
  }, P = (T) => {
    T.preventDefault();
  }, L = (T) => {
    T.preventDefault(), b.current = 0, y(!1);
    const _ = Array.from(T.dataTransfer.files);
    _.length > 0 && l(_);
  }, B = (T) => {
    const _ = Array.from(T.clipboardData.items).filter((V) => V.kind === "file").map((V) => V.getAsFile()).filter((V) => V !== null).map((V) => {
      if (!/^image\.\w+$/.test(V.name)) return V;
      const oe = V.name.split(".").pop() || "png", ge = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
      return new File([V], `screenshot-${ge}.${oe}`, { type: V.type });
    });
    _.length !== 0 && (T.preventDefault(), l(_));
  };
  return /* @__PURE__ */ ae(
    "div",
    {
      className: `elitea-assistant-input-area${d ? " elitea-assistant-input-area--drag-over" : ""}`,
      onDragEnter: j,
      onDragLeave: x,
      onDragOver: P,
      onDrop: L,
      children: [
        d && /* @__PURE__ */ S("div", { className: "elitea-assistant-drop-overlay", children: "Drop files here" }),
        i.length > 0 && /* @__PURE__ */ ae("div", { className: "elitea-assistant-file-list", children: [
          k.map((T) => /* @__PURE__ */ S(
            Pi,
            {
              attachment: T,
              onRemove: a
            },
            T.id
          )),
          A > 0 && /* @__PURE__ */ ae("div", { className: "elitea-assistant-file-chip elitea-assistant-file-chip--count", children: [
            "+",
            A
          ] })
        ] }),
        /* @__PURE__ */ ae("div", { className: "elitea-assistant-input-row", children: [
          /* @__PURE__ */ S(
            "input",
            {
              ref: c,
              type: "file",
              multiple: !0,
              accept: Ca,
              onChange: q,
              style: { display: "none" }
            },
            p
          ),
          /* @__PURE__ */ S(
            "button",
            {
              className: "elitea-assistant-attach-button",
              onClick: z,
              "aria-label": "Attach file",
              type: "button",
              disabled: u || h,
              children: /* @__PURE__ */ S(fi, {})
            }
          ),
          /* @__PURE__ */ S(
            "textarea",
            {
              id: "elitea-assistant-message-input",
              className: "elitea-assistant-input",
              value: n,
              onChange: (T) => r(T.target.value),
              onKeyDown: w,
              onPaste: B,
              placeholder: t,
              rows: 1,
              autoFocus: !0,
              disabled: u
            }
          ),
          /* @__PURE__ */ S(
            "button",
            {
              className: "elitea-assistant-send-button",
              onClick: R,
              disabled: D,
              "aria-label": "Send message",
              type: "button",
              children: /* @__PURE__ */ S(xi, {})
            }
          )
        ] })
      ]
    }
  );
});
Li.displayName = "MessageInput";
const Di = Ht(null), Ri = () => {
  const e = $t(Di);
  if (!e) throw new Error("useApi must be used within EliteaAssistant");
  return e;
}, Sa = () => {
  const [e, t] = le(!1), [n, r] = le(!1), i = $(() => t(!0), []), l = $(() => t(!1), []), a = $(() => t((h) => !h), []), o = $(() => r(!0), []), s = $(() => r(!1), []), u = $(() => r((h) => !h), []);
  return {
    isOpen: e,
    isExpanded: n,
    open: i,
    close: l,
    toggle: a,
    expandFullscreen: o,
    collapseFullscreen: s,
    toggleFullscreen: u
  };
}, He = {
  ENTER_ROOM: "chat_enter_room",
  LEAVE_ROOM: "chat_leave_room",
  PREDICT: "support_predict",
  PREDICT_RESPONSE: "chat_predict",
  CONVERSATION_NAME_UPDATED: "chat_conversation_name_updated",
  ERROR: "support_error"
}, De = {
  START_TASK: "start_task",
  CHUNK: "chunk",
  AI_MESSAGE_CHUNK: "AIMessageChunk",
  AGENT_LLM_CHUNK: "agent_llm_chunk",
  AGENT_LLM_START: "agent_llm_start",
  AGENT_TOOL_START: "agent_tool_start",
  AGENT_TOOL_END: "agent_tool_end",
  AGENT_RESPONSE: "agent_response",
  PIPELINE_FINISH: "pipeline_finish",
  ERROR: "error",
  AGENT_EXCEPTION: "agent_exception"
}, Ea = (e) => {
  if (typeof e == "number") return e < 4102444800 ? e * 1e3 : e;
  if (typeof e == "string") {
    const t = new Date(e);
    return isNaN(t.getTime()) ? 0 : t.getTime();
  }
  return 0;
}, Aa = (e) => {
  var r;
  const t = e.sent_to != null ? "user" : "assistant";
  let n = "";
  for (const i of e.message_items ?? []) {
    const l = i.item_type ?? i.type;
    if (l === "text_message" || l === "text") {
      n = ((r = i.item_details) == null ? void 0 : r.content) ?? i.content ?? "";
      break;
    }
  }
  return {
    id: String(e.uuid ?? e.id ?? ""),
    role: t,
    content: n,
    timestamp: Ea(e.created_at_ts ?? e.created_at)
  };
}, ar = (e) => (e.message_groups ?? []).map(Aa), lt = () => typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
  const t = Math.random() * 16 | 0;
  return (e === "x" ? t : t & 3 | 8).toString(16);
}), kn = (e) => e >= 1024 * 1024 ? `${Math.round(e / (1024 * 1024))}MB` : e >= 1024 ? `${Math.round(e / 1024)}KB` : `${e}B`, va = (e) => {
  const t = new Date(e), n = /* @__PURE__ */ new Date(), r = t.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: !0 });
  if (t.toDateString() === n.toDateString()) return r;
  const l = new Date(n);
  return l.setDate(l.getDate() - 1), t.toDateString() === l.toDateString() ? `Yesterday, ${r}` : t.toLocaleDateString([], { month: "short", day: "numeric" }) + ", " + r;
}, or = (e) => {
  const t = e.lastIndexOf(".");
  return t === -1 ? e : e.substring(0, t) + e.substring(t).toLowerCase();
}, _n = (e) => (e.split(".").pop() || "").toLowerCase(), jt = (e) => Ai.has(_n(e)), Ia = (e) => vi.has(_n(e)), Fi = (e) => Ia(e.name) ? jt(e.name) && e.size > rr ? `Image exceeds ${kn(rr)} limit` : e.size > Rt ? `File exceeds ${kn(Rt)} limit` : null : `Unsupported file type: .${_n(e.name)}`, _i = (e, t, n) => {
  if (n.totalCount > ot) return `Max ${ot} attachments allowed`;
  const r = jt(e);
  return r && (n.imageCount += 1), n.totalSize += t, r && n.imageCount > lr ? `Max ${lr} images allowed` : n.totalSize > ir ? `Total upload size exceeds ${kn(ir)}` : null;
}, Jt = (e, t, n) => ({
  id: t,
  file: e,
  name: e.name,
  size: e.size,
  type: e.type,
  status: se.ERROR,
  progress: 0,
  error: n
}), Mi = (e) => {
  const t = `Max ${ot} attachments allowed`;
  return e.map(
    (n) => n.status === se.UPLOADING || n.status === se.COMPLETED ? n : { ...n, status: se.ERROR, error: t }
  );
}, Ta = (e, t) => {
  const n = new Set(e.map((o) => o.name)), r = t.filter((o) => !n.has(o.name)), i = r.length + e.length;
  if (i > ot) {
    const o = e.map((s) => {
      const u = lt();
      return Jt(s, u, `Max ${ot} attachments allowed`);
    });
    return Mi([...r, ...o]);
  }
  const l = {
    totalCount: i,
    imageCount: r.filter((o) => jt(o.name)).length,
    totalSize: r.reduce((o, s) => o + s.size, 0)
  }, a = e.map((o) => {
    const s = lt(), u = Fi(o);
    if (u) return Jt(o, s, u);
    const h = _i(o.name, o.size, l);
    return h ? Jt(o, s, h) : {
      id: s,
      file: o,
      name: o.name,
      size: o.size,
      type: o.type,
      status: se.PENDING,
      progress: 0
    };
  });
  return [...r, ...a];
}, Pa = (e) => {
  if (e.length > ot) return Mi(e);
  const t = {
    totalCount: e.length,
    imageCount: 0,
    totalSize: 0
  };
  return e.map((n) => {
    if (n.status !== se.ERROR)
      return jt(n.name) && (t.imageCount += 1), t.totalSize += n.size, n;
    const r = n.file ? Fi(n.file) : null;
    return r ? { ...n, error: r } : _i(n.name, n.size, t) ? n : { ...n, status: se.PENDING, error: void 0 };
  });
}, sr = (e, t) => {
  const { frequency: n, start: r, peak: i, end: l } = t, a = e.createOscillator(), o = e.createGain();
  return a.connect(o), o.connect(e.destination), a.type = "sine", a.frequency.value = n, o.gain.setValueAtTime(0, r), o.gain.linearRampToValueAtTime(0.12, i), o.gain.exponentialRampToValueAtTime(0.01, l), a.start(r), a.stop(l), a;
}, La = async () => {
  try {
    const e = new AudioContext();
    if (e.state === "suspended" && await e.resume(), e.state !== "running") {
      e.close();
      return;
    }
    const t = e.currentTime;
    sr(e, { frequency: 784, start: t, peak: t + 0.02, end: t + 0.2 });
    const n = sr(e, { frequency: 1047, start: t + 0.12, peak: t + 0.14, end: t + 0.37 });
    n.onended = () => e.close();
  } catch {
  }
}, Da = (e) => {
  if (e.startsWith("/")) return "";
  try {
    return new URL(e).origin;
  } catch {
    return "";
  }
}, Ra = () => {
  const e = Ri(), [t, n] = le(!1), r = $(
    async (s, u, h) => {
      const c = or(s.name), p = new File([s], c, { type: s.type }), f = new FormData();
      return f.append("file", p), f.append("overwrite", "1"), (await e.uploadFile(u, f, h))[0];
    },
    [e]
  ), i = $(
    async (s) => {
      const { chunk: u, chunkIndex: h, totalChunks: c, fileId: p, fileName: f, conversationId: d, onProgress: y } = s, b = new FormData();
      b.append("file", u), b.append("chunk_index", String(h)), b.append("total_chunks", String(c)), b.append("file_id", p), b.append("file_name", or(f)), b.append("overwrite", "1");
      const k = await e.uploadFile(d, b, y);
      return Array.isArray(k) ? k[0] : k ?? { status: "chunk_received" };
    },
    [e]
  ), l = $((s) => {
    const u = [];
    let h = 0;
    for (; h < s.size; ) {
      const c = Math.min(h + Yt, s.size);
      u.push(s.slice(h, c)), h = c;
    }
    return u;
  }, []), a = $(
    async (s, u, h) => {
      const { file: c } = s;
      if (c.size > Rt)
        throw new Error(`File "${c.name}" exceeds maximum size limit of 300MB`);
      if (c.size <= Yt)
        return (await r(c, u, (A, E) => {
          const D = Math.round(A / E * 100);
          h(D);
        })).filepath;
      const p = l(c), f = lt(), d = p.length;
      let y = 0, b = "";
      for (let k = 0; k < d; k++) {
        const A = p[k], E = y, D = await i({
          chunk: A,
          chunkIndex: k,
          totalChunks: d,
          fileId: f,
          fileName: c.name,
          conversationId: u,
          onProgress: (R, w) => {
            const z = E + R, q = Math.round(z / c.size * 100);
            h(Math.min(q, 99));
          }
        });
        y += A.size, D.filepath && (b = D.filepath);
      }
      return h(100), b;
    },
    [r, i, l]
  );
  return {
    uploadAttachments: $(
      async (s) => {
        const { conversationId: u, attachments: h, onProgress: c, onComplete: p, onError: f } = s;
        if (h.length) {
          n(!0);
          try {
            await Promise.all(
              h.map(async (d) => {
                try {
                  const y = await a(d, u, (b) => {
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
      [a]
    ),
    isUploading: t,
    maxFileSize: Rt,
    chunkSize: Yt
  };
}, Fa = (e) => {
  const { welcomeMessage: t, supportProjectId: n, initialHistory: r, initialConversation: i, isInitLoading: l } = e, a = Te(!1), o = Ri(), s = _o(), u = No(), h = Ro(), { uploadAttachments: c, isUploading: p } = Ra(), f = $(
    () => t ? [{ id: "welcome", role: "assistant", content: t, timestamp: Date.now() }] : [],
    [t]
  ), [d, y] = le([]), [b, k] = le(""), [A, E] = le([]), [D, R] = le(null), [w, z] = le([]), [q, j] = le(!1), x = Ue(
    () => l || q,
    [l, q]
  ), P = Ue(() => d.some((N) => N.isStreaming || N.isAnimating), [d]), L = $((N) => {
    y((M) => M.map((Y) => Y.id === N ? { ...Y, isAnimating: !1 } : Y));
  }, []), B = $(
    (N) => {
      s == null || s.emit(He.ENTER_ROOM, {
        project_id: n,
        conversation_id: N
      });
    },
    [s, n]
  ), T = $(
    (N) => {
      s == null || s.emit(He.LEAVE_ROOM, {
        project_id: n,
        conversation_id: N
      });
    },
    [s, n]
  ), _ = $(
    (N) => {
      s == null || s.emit(He.PREDICT, N);
    },
    [s]
  ), V = $((N) => {
    const { message_id: M, type: Y, content: G, response_metadata: Q } = N;
    switch (Y) {
      case De.START_TASK:
        y((ce) => [
          ...ce,
          {
            id: M,
            role: "assistant",
            content: "",
            timestamp: Date.now(),
            isStreaming: !0,
            statusChips: [{ id: "initializing", label: "initializing", status: "active" }]
          }
        ]);
        break;
      case De.AGENT_LLM_START: {
        const ce = (Q == null ? void 0 : Q.tool_name) || "thinking", ie = (Q == null ? void 0 : Q.tool_run_id) || M;
        y(
          (K) => K.map((ne) => {
            if (ne.id !== M) return ne;
            const Me = ne.statusChips || [];
            if (Me.some((ve) => ve.id === ie)) return ne;
            const Pe = Me.map(
              (ve) => ve.status === "active" ? { ...ve, status: "done" } : ve
            );
            return {
              ...ne,
              statusChips: [...Pe, { id: ie, label: ce, status: "active" }]
            };
          })
        );
        break;
      }
      case De.AGENT_TOOL_START: {
        const ce = (Q == null ? void 0 : Q.tool_name) || "Tool", ie = (Q == null ? void 0 : Q.tool_run_id) || M;
        y(
          (K) => K.map((ne) => {
            if (ne.id !== M) return ne;
            const Pe = (ne.statusChips || []).map(
              (ve) => ve.status === "active" ? { ...ve, status: "done" } : ve
            );
            return {
              ...ne,
              statusChips: [...Pe, { id: ie, label: ce, status: "active" }]
            };
          })
        );
        break;
      }
      case De.AGENT_TOOL_END: {
        const ce = (Q == null ? void 0 : Q.tool_run_id) || "";
        y(
          (ie) => ie.map((K) => {
            if (K.id !== M) return K;
            const ne = (K.statusChips || []).map(
              (Me) => Me.id === ce ? { ...Me, status: "done" } : Me
            );
            return { ...K, statusChips: ne };
          })
        );
        break;
      }
      case De.CHUNK:
      case De.AI_MESSAGE_CHUNK: {
        const ce = typeof G == "string" ? G : JSON.stringify(G), ie = !!(Q != null && Q.finish_reason);
        y(
          (K) => K.map(
            (ne) => ne.id === M ? { ...ne, content: ne.content + ce, ...ie && { isStreaming: !1 } } : ne
          )
        );
        break;
      }
      case De.AGENT_LLM_CHUNK:
        break;
      case De.AGENT_RESPONSE: {
        const ce = typeof G == "string" ? G : JSON.stringify(G);
        y(
          (ie) => ie.map((K) => K.id !== M ? K : {
            ...K,
            content: ce,
            isStreaming: !1,
            isAnimating: !0,
            statusChips: []
          })
        );
        break;
      }
      case De.PIPELINE_FINISH:
        y(
          (ce) => ce.map((ie) => ie.id === M && ie.isStreaming ? { ...ie, isStreaming: !1 } : ie)
        );
        break;
      case De.ERROR:
      case De.AGENT_EXCEPTION:
        y(
          (ce) => ce.map(
            (ie) => ie.id === M ? {
              ...ie,
              content: typeof G == "string" ? G : "An error occurred",
              isStreaming: !1,
              isAnimating: !1,
              isError: !0,
              statusChips: []
            } : ie
          )
        );
        break;
    }
  }, []), te = $((N) => {
    y((M) => [
      ...M,
      {
        id: lt(),
        role: "assistant",
        content: N.error || "An error occurred",
        timestamp: Date.now(),
        isError: !0
      }
    ]);
  }, []), oe = $((N) => {
    const M = N.name.replace(/^User ID \d+\s*-\s*/, "");
    z((Y) => Y.map((G) => G.uuid === N.conversation_uuid ? { ...G, name: M } : G));
  }, []);
  $e(() => {
    if (!(l || a.current))
      if (a.current = !0, z(r), r.length > 0 && i) {
        const N = ar(i);
        y(N.length > 0 ? N : f()), R(r[0].uuid), B(r[0].uuid);
      } else
        y(f());
  }, [l, r, i, f, B]), $e(() => {
    if (s)
      return s.on(He.PREDICT_RESPONSE, V), s.on(He.ERROR, te), s.on(He.CONVERSATION_NAME_UPDATED, oe), () => {
        s.off(He.PREDICT_RESPONSE, V), s.off(He.ERROR, te), s.off(He.CONVERSATION_NAME_UPDATED, oe);
      };
  }, [s, V, te, oe]);
  const ge = $((N) => {
    E((M) => Ta(N, M));
  }, []), m = $((N) => {
    E((M) => Pa(M.filter((Y) => Y.id !== N)));
  }, []), pe = $((N, M) => {
    E(
      (Y) => Y.map((G) => G.id === N ? { ...G, status: se.UPLOADING, progress: M } : G)
    );
  }, []), ke = $((N, M) => {
    E(
      (Y) => Y.map(
        (G) => G.id === N ? { ...G, status: se.COMPLETED, progress: 100, filepath: M } : G
      )
    );
  }, []), g = $((N, M) => {
    E(
      (Y) => Y.map((G) => G.id === N ? { ...G, status: se.ERROR, error: M } : G)
    );
  }, []), ue = $(() => {
    E([]);
  }, []), Fe = $(
    async (N) => {
      const M = A.filter((G) => G.status === se.PENDING);
      if (M.length === 0) return [];
      E(
        (G) => G.map((Q) => Q.status === se.PENDING ? { ...Q, status: se.UPLOADING } : Q)
      );
      const Y = [];
      return await c({
        conversationId: N,
        attachments: M,
        onProgress: pe,
        onComplete: (G, Q) => {
          ke(G, Q), Y.push(Q);
        },
        onError: g
      }), Y;
    },
    [A, c, pe, ke, g]
  ), fe = $(
    async (N) => {
      let M = D;
      if (!M)
        try {
          const K = await o.createConversation();
          M = K.uuid, R(M), z((ne) => [K, ...ne]), B(M);
        } catch {
          y((K) => [
            ...K,
            {
              id: lt(),
              role: "assistant",
              content: "Failed to create conversation. Please try again.",
              timestamp: Date.now(),
              isError: !0
            }
          ]);
          return;
        }
      const Y = A.filter((K) => K.status === se.PENDING), G = A.filter((K) => K.status === se.COMPLETED && K.filepath).map((K) => K.filepath), Q = Y.length > 0 && M ? await Fe(M) : [];
      if (Y.length > 0 && Q.length < Y.length) return;
      y((K) => [
        ...K,
        { id: lt(), role: "user", content: N, timestamp: Date.now() }
      ]);
      const ce = [...G, ...Q], ie = h == null ? void 0 : h.getValidScreenshot();
      if (M && ie) {
        try {
          const K = new File([ie], `screenshot-${Date.now()}.png`, {
            type: "image/png"
          }), ne = new FormData();
          ne.append("file", K), ne.append("overwrite", "1");
          const Pe = (await o.uploadFile(M, ne))[0];
          Pe != null && Pe.filepath && ce.push(Pe.filepath);
        } catch {
        }
        h == null || h.clearScreenshot();
      }
      M && _({
        conversation_uuid: M,
        content: N,
        attachments: ce.length > 0 ? ce : void 0,
        support_assistant_context: u ?? void 0
      }), ue();
    },
    [
      D,
      o,
      B,
      _,
      A,
      Fe,
      ue,
      u,
      h
    ]
  ), Ge = $(() => {
    D && T(D), R(null), y(f()), k(""), ue();
  }, [D, T, f, ue]), _e = $(
    async (N) => {
      if (D !== N) {
        D && T(D), R(N), B(N), k(""), ue(), y([]), j(!0);
        try {
          const M = await o.getConversation(N), Y = ar(M);
          y(Y.length > 0 ? Y : f());
        } catch {
          y(f());
        } finally {
          j(!1);
        }
      }
    },
    [D, T, B, f, o, ue]
  );
  return {
    messages: d,
    inputText: b,
    setInputText: k,
    attachments: A,
    addFiles: ge,
    removeAttachment: m,
    history: w,
    currentConversationId: D ?? "",
    isLoading: x,
    isStreaming: P,
    isUploading: p,
    handleNewChat: Ge,
    handleSelectConversation: _e,
    handleSend: fe,
    handleAnimationComplete: L
  };
}, _a = (e) => {
  const { api: t, title: n, welcomeMessage: r, placeholder: i } = e, [l, a] = le(null), [o, s] = le([]), [u, h] = le(null), [c, p] = le(!0);
  return $e(() => {
    let f = !1;
    const d = t.getConfig().then((b) => {
      f || a(b);
    }).catch(() => {
    }), y = t.getConversations().then(async (b) => {
      if (f) return;
      const k = b.items || [];
      if (s(k), k.length > 0)
        try {
          const A = await t.getConversation(k[0].uuid);
          f || h(A);
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
    title: (l == null ? void 0 : l.title) || n,
    welcomeMessage: (l == null ? void 0 : l.welcome_message) || r,
    placeholder: (l == null ? void 0 : l.placeholder) || i,
    supportProjectId: (l == null ? void 0 : l.support_project_id) ?? null,
    user: (l == null ? void 0 : l.user) || { id: 0, name: "Guest", avatar: "" },
    history: o,
    lastConversation: u,
    isLoading: c
  };
}, Ma = (e) => {
  const t = Te(null), [n, r] = le(!1), i = $(() => {
    r(!1), t.current && (clearTimeout(t.current), t.current = null);
  }, []), l = $(() => {
    e || (r(!0), La(), t.current = setTimeout(i, 12e3));
  }, [e, i]);
  return $e(() => () => {
    t.current && clearTimeout(t.current);
  }, []), $e(() => {
    e && i();
  }, [e, i]), { popupVissible: n, showPopup: l, hidePopup: i, popupText: "Hi! Need help? Ask me!" };
};
function Na(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), i = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(i), t && (r.href = t), i.href = e, i.href;
}
const za = /* @__PURE__ */ (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function qe(e) {
  const t = [];
  for (let n = 0, r = e.length; n < r; n++)
    t.push(e[n]);
  return t;
}
let et = null;
function Ni(e = {}) {
  return et || (e.includeStyleProperties ? (et = e.includeStyleProperties, et) : (et = qe(window.getComputedStyle(document.documentElement)), et));
}
function Ft(e, t) {
  const r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function Oa(e) {
  const t = Ft(e, "border-left-width"), n = Ft(e, "border-right-width");
  return e.clientWidth + t + n;
}
function Ba(e) {
  const t = Ft(e, "border-top-width"), n = Ft(e, "border-bottom-width");
  return e.clientHeight + t + n;
}
function zi(e, t = {}) {
  const n = t.width || Oa(e), r = t.height || Ba(e);
  return { width: n, height: r };
}
function Ha() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const n = t && t.env ? t.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const Se = 16384;
function $a(e) {
  (e.width > Se || e.height > Se) && (e.width > Se && e.height > Se ? e.width > e.height ? (e.height *= Se / e.width, e.width = Se) : (e.width *= Se / e.height, e.height = Se) : e.width > Se ? (e.height *= Se / e.width, e.width = Se) : (e.width *= Se / e.height, e.height = Se));
}
function Va(e, t = {}) {
  return e.toBlob ? new Promise((n) => {
    e.toBlob(n, t.type ? t.type : "image/png", t.quality ? t.quality : 1);
  }) : new Promise((n) => {
    const r = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(",")[1]), i = r.length, l = new Uint8Array(i);
    for (let a = 0; a < i; a += 1)
      l[a] = r.charCodeAt(a);
    n(new Blob([l], {
      type: t.type ? t.type : "image/png"
    }));
  });
}
function _t(e) {
  return new Promise((t, n) => {
    const r = new Image();
    r.onload = () => {
      r.decode().then(() => {
        requestAnimationFrame(() => t(r));
      });
    }, r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = e;
  });
}
async function ja(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function Ua(e, t, n) {
  const r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg"), l = document.createElementNS(r, "foreignObject");
  return i.setAttribute("width", `${t}`), i.setAttribute("height", `${n}`), i.setAttribute("viewBox", `0 0 ${t} ${n}`), l.setAttribute("width", "100%"), l.setAttribute("height", "100%"), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("externalResourcesRequired", "true"), i.appendChild(l), l.appendChild(e), ja(i);
}
const be = (e, t) => {
  if (e instanceof t)
    return !0;
  const n = Object.getPrototypeOf(e);
  return n === null ? !1 : n.constructor.name === t.name || be(n, t);
};
function qa(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function Wa(e, t) {
  return Ni(t).map((n) => {
    const r = e.getPropertyValue(n), i = e.getPropertyPriority(n);
    return `${n}: ${r}${i ? " !important" : ""};`;
  }).join(" ");
}
function Ga(e, t, n, r) {
  const i = `.${e}:${t}`, l = n.cssText ? qa(n) : Wa(n, r);
  return document.createTextNode(`${i}{${l}}`);
}
function ur(e, t, n, r) {
  const i = window.getComputedStyle(e, n), l = i.getPropertyValue("content");
  if (l === "" || l === "none")
    return;
  const a = za();
  try {
    t.className = `${t.className} ${a}`;
  } catch {
    return;
  }
  const o = document.createElement("style");
  o.appendChild(Ga(a, n, i, r)), t.appendChild(o);
}
function Xa(e, t, n) {
  ur(e, t, ":before", n), ur(e, t, ":after", n);
}
const cr = "application/font-woff", hr = "image/jpeg", Ka = {
  woff: cr,
  woff2: cr,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: hr,
  jpeg: hr,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Za(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function Mn(e) {
  const t = Za(e).toLowerCase();
  return Ka[t] || "";
}
function Ya(e) {
  return e.split(/,/)[1];
}
function xn(e) {
  return e.search(/^(data:)/) !== -1;
}
function Qa(e, t) {
  return `data:${t};base64,${e}`;
}
async function Oi(e, t, n) {
  const r = await fetch(e, t);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const i = await r.blob();
  return new Promise((l, a) => {
    const o = new FileReader();
    o.onerror = a, o.onloadend = () => {
      try {
        l(n({ res: r, result: o.result }));
      } catch (s) {
        a(s);
      }
    }, o.readAsDataURL(i);
  });
}
const en = {};
function Ja(e, t, n) {
  let r = e.replace(/\?.*/, "");
  return n && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), t ? `[${t}]${r}` : r;
}
async function Nn(e, t, n) {
  const r = Ja(e, t, n.includeQueryParams);
  if (en[r] != null)
    return en[r];
  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i;
  try {
    const l = await Oi(e, n.fetchRequestInit, ({ res: a, result: o }) => (t || (t = a.headers.get("Content-Type") || ""), Ya(o)));
    i = Qa(l, t);
  } catch (l) {
    i = n.imagePlaceholder || "";
    let a = `Failed to fetch resource: ${e}`;
    l && (a = typeof l == "string" ? l : l.message), a && console.warn(a);
  }
  return en[r] = i, i;
}
async function eo(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : _t(t);
}
async function to(e, t) {
  if (e.currentSrc) {
    const l = document.createElement("canvas"), a = l.getContext("2d");
    l.width = e.clientWidth, l.height = e.clientHeight, a == null || a.drawImage(e, 0, 0, l.width, l.height);
    const o = l.toDataURL();
    return _t(o);
  }
  const n = e.poster, r = Mn(n), i = await Nn(n, r, t);
  return _t(i);
}
async function no(e, t) {
  var n;
  try {
    if (!((n = e == null ? void 0 : e.contentDocument) === null || n === void 0) && n.body)
      return await Ut(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function ro(e, t) {
  return be(e, HTMLCanvasElement) ? eo(e) : be(e, HTMLVideoElement) ? to(e, t) : be(e, HTMLIFrameElement) ? no(e, t) : e.cloneNode(Bi(e));
}
const io = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Bi = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function lo(e, t, n) {
  var r, i;
  if (Bi(t))
    return t;
  let l = [];
  return io(e) && e.assignedNodes ? l = qe(e.assignedNodes()) : be(e, HTMLIFrameElement) && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? l = qe(e.contentDocument.body.childNodes) : l = qe(((i = e.shadowRoot) !== null && i !== void 0 ? i : e).childNodes), l.length === 0 || be(e, HTMLVideoElement) || await l.reduce((a, o) => a.then(() => Ut(o, n)).then((s) => {
    s && t.appendChild(s);
  }), Promise.resolve()), t;
}
function ao(e, t, n) {
  const r = t.style;
  if (!r)
    return;
  const i = window.getComputedStyle(e);
  i.cssText ? (r.cssText = i.cssText, r.transformOrigin = i.transformOrigin) : Ni(n).forEach((l) => {
    let a = i.getPropertyValue(l);
    l === "font-size" && a.endsWith("px") && (a = `${Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1}px`), be(e, HTMLIFrameElement) && l === "display" && a === "inline" && (a = "block"), l === "d" && t.getAttribute("d") && (a = `path(${t.getAttribute("d")})`), r.setProperty(l, a, i.getPropertyPriority(l));
  });
}
function oo(e, t) {
  be(e, HTMLTextAreaElement) && (t.innerHTML = e.value), be(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function so(e, t) {
  if (be(e, HTMLSelectElement)) {
    const n = t, r = Array.from(n.children).find((i) => e.value === i.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function uo(e, t, n) {
  return be(t, Element) && (ao(e, t, n), Xa(e, t, n), oo(e, t), so(e, t)), t;
}
async function co(e, t) {
  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (n.length === 0)
    return e;
  const r = {};
  for (let l = 0; l < n.length; l++) {
    const o = n[l].getAttribute("xlink:href");
    if (o) {
      const s = e.querySelector(o), u = document.querySelector(o);
      !s && u && !r[o] && (r[o] = await Ut(u, t, !0));
    }
  }
  const i = Object.values(r);
  if (i.length) {
    const l = "http://www.w3.org/1999/xhtml", a = document.createElementNS(l, "svg");
    a.setAttribute("xmlns", l), a.style.position = "absolute", a.style.width = "0", a.style.height = "0", a.style.overflow = "hidden", a.style.display = "none";
    const o = document.createElementNS(l, "defs");
    a.appendChild(o);
    for (let s = 0; s < i.length; s++)
      o.appendChild(i[s]);
    e.appendChild(a);
  }
  return e;
}
async function Ut(e, t, n) {
  return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((r) => ro(r, t)).then((r) => lo(e, r, t)).then((r) => uo(e, r, t)).then((r) => co(r, t));
}
const Hi = /url\((['"]?)([^'"]+?)\1\)/g, ho = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, fo = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function po(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function mo(e) {
  const t = [];
  return e.replace(Hi, (n, r, i) => (t.push(i), n)), t.filter((n) => !xn(n));
}
async function go(e, t, n, r, i) {
  try {
    const l = n ? Na(t, n) : t, a = Mn(t);
    let o;
    return i || (o = await Nn(l, a, r)), e.replace(po(t), `$1${o}$3`);
  } catch {
  }
  return e;
}
function yo(e, { preferredFontFormat: t }) {
  return t ? e.replace(fo, (n) => {
    for (; ; ) {
      const [r, , i] = ho.exec(n) || [];
      if (!i)
        return "";
      if (i === t)
        return `src: ${r};`;
    }
  }) : e;
}
function $i(e) {
  return e.search(Hi) !== -1;
}
async function Vi(e, t, n) {
  if (!$i(e))
    return e;
  const r = yo(e, n);
  return mo(r).reduce((l, a) => l.then((o) => go(o, a, t, n)), Promise.resolve(r));
}
async function tt(e, t, n) {
  var r;
  const i = (r = t.style) === null || r === void 0 ? void 0 : r.getPropertyValue(e);
  if (i) {
    const l = await Vi(i, null, n);
    return t.style.setProperty(e, l, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function ko(e, t) {
  await tt("background", e, t) || await tt("background-image", e, t), await tt("mask", e, t) || await tt("-webkit-mask", e, t) || await tt("mask-image", e, t) || await tt("-webkit-mask-image", e, t);
}
async function xo(e, t) {
  const n = be(e, HTMLImageElement);
  if (!(n && !xn(e.src)) && !(be(e, SVGImageElement) && !xn(e.href.baseVal)))
    return;
  const r = n ? e.src : e.href.baseVal, i = await Nn(r, Mn(r), t);
  await new Promise((l, a) => {
    e.onload = l, e.onerror = t.onImageErrorHandler ? (...s) => {
      try {
        l(t.onImageErrorHandler(...s));
      } catch (u) {
        a(u);
      }
    } : a;
    const o = e;
    o.decode && (o.decode = l), o.loading === "lazy" && (o.loading = "eager"), n ? (e.srcset = "", e.src = i) : e.href.baseVal = i;
  });
}
async function bo(e, t) {
  const r = qe(e.childNodes).map((i) => ji(i, t));
  await Promise.all(r).then(() => e);
}
async function ji(e, t) {
  be(e, Element) && (await ko(e, t), await xo(e, t), await bo(e, t));
}
function wo(e, t) {
  const { style: n } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
  const r = t.style;
  return r != null && Object.keys(r).forEach((i) => {
    n[i] = r[i];
  }), e;
}
const fr = {};
async function pr(e) {
  let t = fr[e];
  if (t != null)
    return t;
  const r = await (await fetch(e)).text();
  return t = { url: e, cssText: r }, fr[e] = t, t;
}
async function dr(e, t) {
  let n = e.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, l = (n.match(/url\([^)]+\)/g) || []).map(async (a) => {
    let o = a.replace(r, "$1");
    return o.startsWith("https://") || (o = new URL(o, e.url).href), Oi(o, t.fetchRequestInit, ({ result: s }) => (n = n.replace(a, `url(${s})`), [a, s]));
  });
  return Promise.all(l).then(() => n);
}
function mr(e) {
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
  const l = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, a = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", o = new RegExp(a, "gi");
  for (; ; ) {
    let s = l.exec(r);
    if (s === null) {
      if (s = o.exec(r), s === null)
        break;
      l.lastIndex = o.lastIndex;
    } else
      o.lastIndex = l.lastIndex;
    t.push(s[0]);
  }
  return t;
}
async function Co(e, t) {
  const n = [], r = [];
  return e.forEach((i) => {
    if ("cssRules" in i)
      try {
        qe(i.cssRules || []).forEach((l, a) => {
          if (l.type === CSSRule.IMPORT_RULE) {
            let o = a + 1;
            const s = l.href, u = pr(s).then((h) => dr(h, t)).then((h) => mr(h).forEach((c) => {
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
      } catch (l) {
        const a = e.find((o) => o.href == null) || document.styleSheets[0];
        i.href != null && r.push(pr(i.href).then((o) => dr(o, t)).then((o) => mr(o).forEach((s) => {
          a.insertRule(s, a.cssRules.length);
        })).catch((o) => {
          console.error("Error loading remote stylesheet", o);
        })), console.error("Error inlining remote css file", l);
      }
  }), Promise.all(r).then(() => (e.forEach((i) => {
    if ("cssRules" in i)
      try {
        qe(i.cssRules || []).forEach((l) => {
          n.push(l);
        });
      } catch (l) {
        console.error(`Error while reading CSS rules from ${i.href}`, l);
      }
  }), n));
}
function So(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => $i(t.style.getPropertyValue("src")));
}
async function Eo(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = qe(e.ownerDocument.styleSheets), r = await Co(n, t);
  return So(r);
}
function Ui(e) {
  return e.trim().replace(/["']/g, "");
}
function Ao(e) {
  const t = /* @__PURE__ */ new Set();
  function n(r) {
    (r.style.fontFamily || getComputedStyle(r).fontFamily).split(",").forEach((l) => {
      t.add(Ui(l));
    }), Array.from(r.children).forEach((l) => {
      l instanceof HTMLElement && n(l);
    });
  }
  return n(e), t;
}
async function vo(e, t) {
  const n = await Eo(e, t), r = Ao(e);
  return (await Promise.all(n.filter((l) => r.has(Ui(l.style.fontFamily))).map((l) => {
    const a = l.parentStyleSheet ? l.parentStyleSheet.href : null;
    return Vi(l.cssText, a, t);
  }))).join(`
`);
}
async function Io(e, t) {
  const n = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await vo(e, t);
  if (n) {
    const r = document.createElement("style"), i = document.createTextNode(n);
    r.appendChild(i), e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r);
  }
}
async function To(e, t = {}) {
  const { width: n, height: r } = zi(e, t), i = await Ut(e, t, !0);
  return await Io(i, t), await ji(i, t), wo(i, t), await Ua(i, n, r);
}
async function Po(e, t = {}) {
  const { width: n, height: r } = zi(e, t), i = await To(e, t), l = await _t(i), a = document.createElement("canvas"), o = a.getContext("2d"), s = t.pixelRatio || Ha(), u = t.canvasWidth || n, h = t.canvasHeight || r;
  return a.width = u * s, a.height = h * s, t.skipAutoScale || $a(a), a.style.width = `${u}`, a.style.height = `${h}`, t.backgroundColor && (o.fillStyle = t.backgroundColor, o.fillRect(0, 0, a.width, a.height)), o.drawImage(l, 0, 0, a.width, a.height), a;
}
async function Lo(e, t = {}) {
  const n = await Po(e, t);
  return await Va(n);
}
const Do = 3 * 60 * 1e3, qi = Ht(null), Ro = () => $t(qi), Fo = () => {
  const [e, t] = le(null), [n, r] = le(null), i = Te(!1), l = $(() => {
    if (i.current) return;
    i.current = !0;
    const s = document.documentElement;
    Lo(s, {
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
  }, []), a = $(() => {
    t(null), r(null);
  }, []), o = $(() => !e || !n || Date.now() - n > Do ? null : e, [e, n]);
  return { screenshot: e, capturedAt: n, captureScreenshot: l, clearScreenshot: a, getValidScreenshot: o };
}, Wi = Ht(null), _o = () => $t(Wi), Mo = (e) => {
  const [t, n] = le(null);
  return $e(() => {
    const r = ga(e.url, {
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
}, Gi = Ht(null), No = () => $t(Gi), zo = 3, Oo = 16, Bo = (e, t, n) => {
  const r = Te(null), i = Te(n), [l, a] = le(0);
  i.current = n, $e(() => {
    if (!t || !e) {
      a(e.length);
      return;
    }
    return a(0), r.current = setInterval(() => {
      a((s) => {
        const u = s + zo;
        return u >= e.length ? (r.current && clearInterval(r.current), i.current(), e.length) : u;
      });
    }, Oo), () => {
      r.current && clearInterval(r.current);
    };
  }, [e, t]);
  const o = $(() => {
    r.current && clearInterval(r.current), a(e.length), i.current();
  }, [e]);
  return { displayedText: e.slice(0, l), skipAnimation: o };
}, Xi = Z((e) => {
  const {
    avatar: t,
    title: n,
    placeholder: r,
    welcomeMessage: i,
    supportProjectId: l,
    initialHistory: a,
    lastConversation: o,
    isInitLoading: s,
    isOpen: u,
    onClose: h,
    onExpand: c,
    expanded: p
  } = e, {
    messages: f,
    inputText: d,
    setInputText: y,
    attachments: b,
    addFiles: k,
    removeAttachment: A,
    history: E,
    currentConversationId: D,
    isLoading: R,
    isStreaming: w,
    isUploading: z,
    handleNewChat: q,
    handleSelectConversation: j,
    handleSend: x,
    handleAnimationComplete: P
  } = Fa({
    welcomeMessage: i,
    supportProjectId: l,
    initialHistory: a,
    initialConversation: o,
    isInitLoading: s
  });
  if (!u) return null;
  const L = /* @__PURE__ */ ae("div", { className: `elitea-assistant-window${p ? " elitea-assistant-window--expanded" : ""}`, children: [
    /* @__PURE__ */ S(
      Si,
      {
        title: n,
        expanded: p,
        history: E,
        currentConversationId: D,
        disabled: R,
        onClose: h,
        onExpand: c,
        onNewChat: q,
        onSelectConversation: j
      }
    ),
    /* @__PURE__ */ S(
      Ei,
      {
        avatar: t,
        messages: f,
        isLoading: R,
        onAnimationComplete: P
      }
    ),
    /* @__PURE__ */ S(
      Li,
      {
        placeholder: r,
        text: d,
        onTextChange: y,
        attachments: b,
        onAddFiles: k,
        onRemoveAttachment: A,
        onSend: x,
        expanded: p,
        disabled: R || w,
        isUploading: z
      }
    )
  ] });
  return p ? /* @__PURE__ */ S(
    "div",
    {
      className: "elitea-assistant-overlay",
      onClick: c,
      children: /* @__PURE__ */ S("div", { onClick: (B) => B.stopPropagation(), children: L })
    }
  ) : L;
});
Xi.displayName = "ChatWindow";
const Ki = Z((e) => {
  const { message: t, onClose: n } = e;
  return /* @__PURE__ */ ae("div", { className: "elitea-assistant-popup", children: [
    /* @__PURE__ */ S("span", { className: "elitea-assistant-popup-text", children: t }),
    /* @__PURE__ */ S(
      "button",
      {
        className: "elitea-assistant-popup-close",
        onClick: n,
        "aria-label": "Close popup",
        type: "button",
        children: /* @__PURE__ */ S(Vt, {})
      }
    )
  ] });
});
Ki.displayName = "PopupMessage";
const Zi = Z((e) => {
  const { message: t, onComplete: n } = e, { displayedText: r, skipAnimation: i } = Bo(t.content, !!t.isAnimating, n);
  return /* @__PURE__ */ S(
    "div",
    {
      onClick: i,
      style: { cursor: t.isAnimating ? "pointer" : void 0 },
      children: /* @__PURE__ */ S(nr, { content: r })
    }
  );
});
Zi.displayName = "AnimatedMessage";
const Yi = Z((e) => {
  const { message: t, avatar: n, onAnimationComplete: r } = e, i = t.role === "assistant" && t.statusChips && t.statusChips.length > 0, l = t.role === "user" || t.content || !i && t.isStreaming;
  return /* @__PURE__ */ ae("div", { className: `elitea-assistant-message-wrapper elitea-assistant-message-wrapper--${t.role}`, children: [
    /* @__PURE__ */ ae("div", { className: `elitea-assistant-message-meta elitea-assistant-message-meta--${t.role}`, children: [
      t.role === "assistant" && /* @__PURE__ */ S("span", { className: "elitea-assistant-message-avatar elitea-assistant-message-avatar--assistant", children: /* @__PURE__ */ S(Rn, {}) }),
      /* @__PURE__ */ S("span", { className: "elitea-assistant-message-time", children: va(t.timestamp) }),
      t.role === "user" && /* @__PURE__ */ S("span", { className: "elitea-assistant-message-avatar elitea-assistant-message-avatar--user", children: n ? /* @__PURE__ */ S(
        "img",
        {
          src: n,
          alt: "User avatar",
          className: "elitea-assistant-avatar-img"
        }
      ) : /* @__PURE__ */ S(bi, {}) })
    ] }),
    i && /* @__PURE__ */ S(Ji, { chips: t.statusChips }),
    l && /* @__PURE__ */ ae(
      "div",
      {
        className: `elitea-assistant-message elitea-assistant-message--${t.role}${t.isError ? " elitea-assistant-message--error" : ""}`,
        children: [
          t.content ? t.role === "assistant" ? t.isAnimating ? /* @__PURE__ */ S(
            Zi,
            {
              message: t,
              onComplete: () => r == null ? void 0 : r(t.id)
            }
          ) : /* @__PURE__ */ S(nr, { content: t.content }) : t.content : t.isStreaming ? /* @__PURE__ */ S(el, {}) : "",
          t.role === "assistant" && t.content && !t.isStreaming && !t.isAnimating && /* @__PURE__ */ S(Ci, { text: t.content })
        ]
      }
    )
  ] });
});
Yi.displayName = "MessageItem";
const Qi = Z(() => /* @__PURE__ */ S("div", { className: "elitea-assistant-messages", children: Array.from({ length: 3 }).map((e, t) => /* @__PURE__ */ ae(
  "div",
  {
    className: `elitea-assistant-skeleton-row ${t % 2 === 0 ? "elitea-assistant-skeleton-row--left" : "elitea-assistant-skeleton-row--right"}`,
    children: [
      /* @__PURE__ */ ae("div", { className: "elitea-assistant-skeleton-meta", children: [
        /* @__PURE__ */ S("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--avatar" }),
        /* @__PURE__ */ S("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--time" })
      ] }),
      /* @__PURE__ */ S("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--bubble" })
    ]
  },
  t
)) }));
Qi.displayName = "MessageListSkeleton";
const Ji = Z((e) => {
  const { chips: t } = e;
  return !t || t.length === 0 ? null : /* @__PURE__ */ S("div", { className: "elitea-assistant-status-chips", children: t.map((n) => /* @__PURE__ */ ae(
    "span",
    {
      className: `elitea-assistant-status-chip elitea-assistant-status-chip--${n.status}`,
      children: [
        n.status === "active" && /* @__PURE__ */ S("span", { className: "elitea-assistant-chip-spinner" }),
        n.status === "done" && /* @__PURE__ */ S("span", { className: "elitea-assistant-chip-check", children: "✓" }),
        n.label
      ]
    },
    n.id
  )) });
});
Ji.displayName = "StatusChips";
const el = Z(() => /* @__PURE__ */ ae("span", { className: "elitea-assistant-typing-indicator", children: [
  /* @__PURE__ */ S("span", { className: "elitea-assistant-typing-dot" }),
  /* @__PURE__ */ S("span", { className: "elitea-assistant-typing-dot" }),
  /* @__PURE__ */ S("span", { className: "elitea-assistant-typing-dot" })
] }));
el.displayName = "TypingIndicator";
function Ho(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const $o = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Vo = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, jo = {};
function gr(e, t) {
  return (jo.jsx ? Vo : $o).test(e);
}
const Uo = /[ \t\n\f\r]/g;
function qo(e) {
  return typeof e == "object" ? e.type === "text" ? yr(e.value) : !1 : yr(e);
}
function yr(e) {
  return e.replace(Uo, "") === "";
}
class St {
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
St.prototype.normal = {};
St.prototype.property = {};
St.prototype.space = void 0;
function tl(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new St(n, r, t);
}
function bn(e) {
  return e.toLowerCase();
}
class we {
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
we.prototype.attribute = "";
we.prototype.booleanish = !1;
we.prototype.boolean = !1;
we.prototype.commaOrSpaceSeparated = !1;
we.prototype.commaSeparated = !1;
we.prototype.defined = !1;
we.prototype.mustUseProperty = !1;
we.prototype.number = !1;
we.prototype.overloadedBoolean = !1;
we.prototype.property = "";
we.prototype.spaceSeparated = !1;
we.prototype.space = void 0;
let Wo = 0;
const H = Qe(), he = Qe(), wn = Qe(), v = Qe(), re = Qe(), at = Qe(), Ee = Qe();
function Qe() {
  return 2 ** ++Wo;
}
const Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: H,
  booleanish: he,
  commaOrSpaceSeparated: Ee,
  commaSeparated: at,
  number: v,
  overloadedBoolean: wn,
  spaceSeparated: re
}, Symbol.toStringTag, { value: "Module" })), tn = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Cn)
);
class zn extends we {
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
    let l = -1;
    if (super(t, n), kr(this, "space", i), typeof r == "number")
      for (; ++l < tn.length; ) {
        const a = tn[l];
        kr(this, tn[l], (r & Cn[a]) === Cn[a]);
      }
  }
}
zn.prototype.defined = !0;
function kr(e, t, n) {
  n && (e[t] = n);
}
function ut(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new zn(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[bn(r)] = r, n[bn(l.attribute)] = r;
  }
  return new St(t, n, e.space);
}
const nl = ut({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: he,
    ariaAutoComplete: null,
    ariaBusy: he,
    ariaChecked: he,
    ariaColCount: v,
    ariaColIndex: v,
    ariaColSpan: v,
    ariaControls: re,
    ariaCurrent: null,
    ariaDescribedBy: re,
    ariaDetails: null,
    ariaDisabled: he,
    ariaDropEffect: re,
    ariaErrorMessage: null,
    ariaExpanded: he,
    ariaFlowTo: re,
    ariaGrabbed: he,
    ariaHasPopup: null,
    ariaHidden: he,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: re,
    ariaLevel: v,
    ariaLive: null,
    ariaModal: he,
    ariaMultiLine: he,
    ariaMultiSelectable: he,
    ariaOrientation: null,
    ariaOwns: re,
    ariaPlaceholder: null,
    ariaPosInSet: v,
    ariaPressed: he,
    ariaReadOnly: he,
    ariaRelevant: null,
    ariaRequired: he,
    ariaRoleDescription: re,
    ariaRowCount: v,
    ariaRowIndex: v,
    ariaRowSpan: v,
    ariaSelected: he,
    ariaSetSize: v,
    ariaSort: null,
    ariaValueMax: v,
    ariaValueMin: v,
    ariaValueNow: v,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function rl(e, t) {
  return t in e ? e[t] : t;
}
function il(e, t) {
  return rl(e, t.toLowerCase());
}
const Go = ut({
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
    accept: at,
    acceptCharset: re,
    accessKey: re,
    action: null,
    allow: null,
    allowFullScreen: H,
    allowPaymentRequest: H,
    allowUserMedia: H,
    alt: null,
    as: null,
    async: H,
    autoCapitalize: null,
    autoComplete: re,
    autoFocus: H,
    autoPlay: H,
    blocking: re,
    capture: null,
    charSet: null,
    checked: H,
    cite: null,
    className: re,
    cols: v,
    colSpan: null,
    content: null,
    contentEditable: he,
    controls: H,
    controlsList: re,
    coords: v | at,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: H,
    defer: H,
    dir: null,
    dirName: null,
    disabled: H,
    download: wn,
    draggable: he,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: H,
    formTarget: null,
    headers: re,
    height: v,
    hidden: wn,
    high: v,
    href: null,
    hrefLang: null,
    htmlFor: re,
    httpEquiv: re,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: H,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: H,
    itemId: null,
    itemProp: re,
    itemRef: re,
    itemScope: H,
    itemType: re,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: H,
    low: v,
    manifest: null,
    max: null,
    maxLength: v,
    media: null,
    method: null,
    min: null,
    minLength: v,
    multiple: H,
    muted: H,
    name: null,
    nonce: null,
    noModule: H,
    noValidate: H,
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
    open: H,
    optimum: v,
    pattern: null,
    ping: re,
    placeholder: null,
    playsInline: H,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: H,
    referrerPolicy: null,
    rel: re,
    required: H,
    reversed: H,
    rows: v,
    rowSpan: v,
    sandbox: re,
    scope: null,
    scoped: H,
    seamless: H,
    selected: H,
    shadowRootClonable: H,
    shadowRootDelegatesFocus: H,
    shadowRootMode: null,
    shape: null,
    size: v,
    sizes: null,
    slot: null,
    span: v,
    spellCheck: he,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: v,
    step: null,
    style: null,
    tabIndex: v,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: H,
    useMap: null,
    value: he,
    width: v,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: re,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: v,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: v,
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
    compact: H,
    // Lists. Use CSS to reduce space between items instead
    declare: H,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: v,
    // `<img>` and `<object>`
    leftMargin: v,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: v,
    // `<body>`
    marginWidth: v,
    // `<body>`
    noResize: H,
    // `<frame>`
    noHref: H,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: H,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: H,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: v,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: he,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: v,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: v,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: H,
    disableRemotePlayback: H,
    prefix: null,
    property: null,
    results: v,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: il
}), Xo = ut({
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
    accentHeight: v,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: v,
    amplitude: v,
    arabicForm: null,
    ascent: v,
    attributeName: null,
    attributeType: null,
    azimuth: v,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: v,
    by: null,
    calcMode: null,
    capHeight: v,
    className: re,
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
    descent: v,
    diffuseConstant: v,
    direction: null,
    display: null,
    dur: null,
    divisor: v,
    dominantBaseline: null,
    download: H,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: v,
    enableBackground: null,
    end: null,
    event: null,
    exponent: v,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: v,
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
    g1: at,
    g2: at,
    glyphName: at,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: v,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: v,
    horizOriginX: v,
    horizOriginY: v,
    id: null,
    ideographic: v,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: v,
    k: v,
    k1: v,
    k2: v,
    k3: v,
    k4: v,
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
    limitingConeAngle: v,
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
    mediaSize: v,
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
    overlinePosition: v,
    overlineThickness: v,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: v,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: re,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: v,
    pointsAtY: v,
    pointsAtZ: v,
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
    specularConstant: v,
    specularExponent: v,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: v,
    strikethroughThickness: v,
    string: null,
    stroke: null,
    strokeDashArray: Ee,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: v,
    strokeOpacity: v,
    strokeWidth: null,
    style: null,
    surfaceScale: v,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ee,
    tabIndex: v,
    tableValues: null,
    target: null,
    targetX: v,
    targetY: v,
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
    underlinePosition: v,
    underlineThickness: v,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: v,
    values: null,
    vAlphabetic: v,
    vMathematical: v,
    vectorEffect: null,
    vHanging: v,
    vIdeographic: v,
    version: null,
    vertAdvY: v,
    vertOriginX: v,
    vertOriginY: v,
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
    xHeight: v,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: rl
}), ll = ut({
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
}), al = ut({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: il
}), ol = ut({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Ko = {
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
}, Zo = /[A-Z]/g, xr = /-[a-z]/g, Yo = /^data[-\w.:]+$/i;
function Qo(e, t) {
  const n = bn(t);
  let r = t, i = we;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Yo.test(t)) {
    if (t.charAt(4) === "-") {
      const l = t.slice(5).replace(xr, es);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = t.slice(4);
      if (!xr.test(l)) {
        let a = l.replace(Zo, Jo);
        a.charAt(0) !== "-" && (a = "-" + a), t = "data" + a;
      }
    }
    i = zn;
  }
  return new i(r, t);
}
function Jo(e) {
  return "-" + e.toLowerCase();
}
function es(e) {
  return e.charAt(1).toUpperCase();
}
const ts = tl([nl, Go, ll, al, ol], "html"), On = tl([nl, Xo, ll, al, ol], "svg");
function ns(e) {
  return e.join(" ").trim();
}
var Mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bn = {}, br = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, rs = /\n/g, is = /^\s*/, ls = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, as = /^:\s*/, os = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, ss = /^[;\s]*/, us = /^\s+|\s+$/g, cs = `
`, wr = "/", Cr = "*", Ze = "", hs = "comment", fs = "declaration";
function ps(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(d) {
    var y = d.match(rs);
    y && (n += y.length);
    var b = d.lastIndexOf(cs);
    r = ~b ? d.length - b : r + d.length;
  }
  function l() {
    var d = { line: n, column: r };
    return function(y) {
      return y.position = new a(d), u(), y;
    };
  }
  function a(d) {
    this.start = d, this.end = { line: n, column: r }, this.source = t.source;
  }
  a.prototype.content = e;
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
    s(is);
  }
  function h(d) {
    var y;
    for (d = d || []; y = c(); )
      y !== !1 && d.push(y);
    return d;
  }
  function c() {
    var d = l();
    if (!(wr != e.charAt(0) || Cr != e.charAt(1))) {
      for (var y = 2; Ze != e.charAt(y) && (Cr != e.charAt(y) || wr != e.charAt(y + 1)); )
        ++y;
      if (y += 2, Ze === e.charAt(y - 1))
        return o("End of comment missing");
      var b = e.slice(2, y - 2);
      return r += 2, i(b), e = e.slice(y), r += 2, d({
        type: hs,
        comment: b
      });
    }
  }
  function p() {
    var d = l(), y = s(ls);
    if (y) {
      if (c(), !s(as)) return o("property missing ':'");
      var b = s(os), k = d({
        type: fs,
        property: Sr(y[0].replace(br, Ze)),
        value: b ? Sr(b[0].replace(br, Ze)) : Ze
      });
      return s(ss), k;
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
function Sr(e) {
  return e ? e.replace(us, Ze) : Ze;
}
var ds = ps, ms = Mt && Mt.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.default = ys;
const gs = ms(ds);
function ys(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = (0, gs.default)(e), i = typeof t == "function";
  return r.forEach((l) => {
    if (l.type !== "declaration")
      return;
    const { property: a, value: o } = l;
    i ? t(a, o, l) : o && (n = n || {}, n[a] = o);
  }), n;
}
var qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.camelCase = void 0;
var ks = /^--[a-zA-Z0-9_-]+$/, xs = /-([a-z])/g, bs = /^[^-]+$/, ws = /^-(webkit|moz|ms|o|khtml)-/, Cs = /^-(ms)-/, Ss = function(e) {
  return !e || bs.test(e) || ks.test(e);
}, Es = function(e, t) {
  return t.toUpperCase();
}, Er = function(e, t) {
  return "".concat(t, "-");
}, As = function(e, t) {
  return t === void 0 && (t = {}), Ss(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(Cs, Er) : e = e.replace(ws, Er), e.replace(xs, Es));
};
qt.camelCase = As;
var vs = Mt && Mt.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, Is = vs(Bn), Ts = qt;
function Sn(e, t) {
  var n = {};
  return !e || typeof e != "string" || (0, Is.default)(e, function(r, i) {
    r && i && (n[(0, Ts.camelCase)(r, t)] = i);
  }), n;
}
Sn.default = Sn;
var Ps = Sn;
const Ls = /* @__PURE__ */ sl(Ps), ul = cl("end"), Hn = cl("start");
function cl(e) {
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
function Ds(e) {
  const t = Hn(e), n = ul(e);
  if (t && n)
    return { start: t, end: n };
}
function kt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Ar(e.position) : "start" in e || "end" in e ? Ar(e) : "line" in e || "column" in e ? En(e) : "";
}
function En(e) {
  return vr(e && e.line) + ":" + vr(e && e.column);
}
function Ar(e) {
  return En(e && e.start) + "-" + En(e && e.end);
}
function vr(e) {
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
    let i = "", l = {}, a = !1;
    if (n && ("line" in n && "column" in n ? l = { place: n } : "start" in n && "end" in n ? l = { place: n } : "type" in n ? l = {
      ancestors: [n],
      place: n.position
    } : l = { ...n }), typeof t == "string" ? i = t : !l.cause && t && (a = !0, i = t.message, l.cause = t), !l.ruleId && !l.source && typeof r == "string") {
      const s = r.indexOf(":");
      s === -1 ? l.ruleId = r : (l.source = r.slice(0, s), l.ruleId = r.slice(s + 1));
    }
    if (!l.place && l.ancestors && l.ancestors) {
      const s = l.ancestors[l.ancestors.length - 1];
      s && (l.place = s.position);
    }
    const o = l.place && "start" in l.place ? l.place.start : l.place;
    this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = o ? o.line : void 0, this.name = kt(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = a && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
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
const $n = {}.hasOwnProperty, Rs = /* @__PURE__ */ new Map(), Fs = /[A-Z]/g, _s = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Ms = /* @__PURE__ */ new Set(["td", "th"]), hl = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Ns(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Us(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = js(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? On : ts,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, l = fl(i, e, void 0);
  return l && typeof l != "string" ? l : i.create(
    e,
    i.Fragment,
    { children: l || void 0 },
    void 0
  );
}
function fl(e, t, n) {
  if (t.type === "element")
    return zs(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Os(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return Hs(e, t, n);
  if (t.type === "mdxjsEsm")
    return Bs(e, t);
  if (t.type === "root")
    return $s(e, t, n);
  if (t.type === "text")
    return Vs(e, t);
}
function zs(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = On, e.schema = i), e.ancestors.push(t);
  const l = dl(e, t.tagName, !1), a = qs(e, t);
  let o = jn(e, t);
  return _s.has(t.tagName) && (o = o.filter(function(s) {
    return typeof s == "string" ? !qo(s) : !0;
  })), pl(e, a, l, t), Vn(a, o), e.ancestors.pop(), e.schema = r, e.create(t, l, a, n);
}
function Os(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  wt(e, t.position);
}
function Bs(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  wt(e, t.position);
}
function Hs(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = On, e.schema = i), e.ancestors.push(t);
  const l = t.name === null ? e.Fragment : dl(e, t.name, !0), a = Ws(e, t), o = jn(e, t);
  return pl(e, a, l, t), Vn(a, o), e.ancestors.pop(), e.schema = r, e.create(t, l, a, n);
}
function $s(e, t, n) {
  const r = {};
  return Vn(r, jn(e, t)), e.create(t, e.Fragment, r, n);
}
function Vs(e, t) {
  return t.value;
}
function pl(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Vn(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function js(e, t, n) {
  return r;
  function r(i, l, a, o) {
    const u = Array.isArray(a.children) ? n : t;
    return o ? u(l, a, o) : u(l, a);
  }
}
function Us(e, t) {
  return n;
  function n(r, i, l, a) {
    const o = Array.isArray(l.children), s = Hn(r);
    return t(
      i,
      l,
      a,
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
function qs(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && $n.call(t.properties, i)) {
      const l = Gs(e, i, t.properties[i]);
      if (l) {
        const [a, o] = l;
        e.tableCellAlignToStyle && a === "align" && typeof o == "string" && Ms.has(t.tagName) ? r = o : n[a] = o;
      }
    }
  if (r) {
    const l = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    l[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function Ws(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const l = r.data.estree.body[0];
        l.type;
        const a = l.expression;
        a.type;
        const o = a.properties[0];
        o.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(o.argument)
        );
      } else
        wt(e, t.position);
    else {
      const i = r.name;
      let l;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const o = r.value.data.estree.body[0];
          o.type, l = e.evaluater.evaluateExpression(o.expression);
        } else
          wt(e, t.position);
      else
        l = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      l;
    }
  return n;
}
function jn(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Rs;
  for (; ++r < t.children.length; ) {
    const l = t.children[r];
    let a;
    if (e.passKeys) {
      const s = l.type === "element" ? l.tagName : l.type === "mdxJsxFlowElement" || l.type === "mdxJsxTextElement" ? l.name : void 0;
      if (s) {
        const u = i.get(s) || 0;
        a = s + "-" + u, i.set(s, u + 1);
      }
    }
    const o = fl(e, l, a);
    o !== void 0 && n.push(o);
  }
  return n;
}
function Gs(e, t, n) {
  const r = Qo(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Ho(n) : ns(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Xs(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = Ks(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Ko[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Xs(e, t) {
  try {
    return Ls(t, { reactCompat: !0 });
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
    throw i.file = e.filePath || void 0, i.url = hl + "#cannot-parse-style-attribute", i;
  }
}
function dl(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let l = -1, a;
    for (; ++l < i.length; ) {
      const o = gr(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
      a = a ? {
        type: "MemberExpression",
        object: a,
        property: o,
        computed: !!(l && o.type === "Literal"),
        optional: !1
      } : o;
    }
    r = a;
  } else
    r = gr(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return $n.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  wt(e);
}
function wt(e, t) {
  const n = new me(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = hl + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Ks(e) {
  const t = {};
  let n;
  for (n in e)
    $n.call(e, n) && (t[Zs(n)] = e[n]);
  return t;
}
function Zs(e) {
  let t = e.replace(Fs, Ys);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Ys(e) {
  return "-" + e.toLowerCase();
}
const nn = {
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
}, Qs = {};
function Un(e, t) {
  const n = Qs, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return ml(e, r, i);
}
function ml(e, t, n) {
  if (Js(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Ir(e.children, t, n);
  }
  return Array.isArray(e) ? Ir(e, t, n) : "";
}
function Ir(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = ml(e[i], t, n);
  return r.join("");
}
function Js(e) {
  return !!(e && typeof e == "object");
}
const Tr = document.createElement("i");
function qn(e) {
  const t = "&" + e + ";";
  Tr.innerHTML = t;
  const n = Tr.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Ae(e, t, n, r) {
  const i = e.length;
  let l = 0, a;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    a = Array.from(r), a.unshift(t, n), e.splice(...a);
  else
    for (n && e.splice(t, n); l < r.length; )
      a = r.slice(l, l + 1e4), a.unshift(t, 0), e.splice(...a), l += 1e4, t += 1e4;
}
function Ie(e, t) {
  return e.length > 0 ? (Ae(e, e.length, 0, t), e) : t;
}
const Pr = {}.hasOwnProperty;
function gl(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    eu(t, e[n]);
  return t;
}
function eu(e, t) {
  let n;
  for (n in t) {
    const i = (Pr.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
    let a;
    if (l)
      for (a in l) {
        Pr.call(i, a) || (i[a] = []);
        const o = l[a];
        tu(
          // @ts-expect-error Looks like a list.
          i[a],
          Array.isArray(o) ? o : o ? [o] : []
        );
      }
  }
}
function tu(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Ae(e, 0, 0, r);
}
function yl(e, t) {
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
function Re(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ye = We(/[A-Za-z]/), de = We(/[\dA-Za-z]/), nu = We(/[#-'*+\--9=?A-Z^-~]/);
function Nt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const An = We(/\d/), ru = We(/[\dA-Fa-f]/), iu = We(/[!-/:-@[-`{-~]/);
function F(e) {
  return e !== null && e < -2;
}
function ee(e) {
  return e !== null && (e < 0 || e === 32);
}
function U(e) {
  return e === -2 || e === -1 || e === 32;
}
const Wt = We(new RegExp("\\p{P}|\\p{S}", "u")), Ye = We(/\s/);
function We(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function ct(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const l = e.charCodeAt(n);
    let a = "";
    if (l === 37 && de(e.charCodeAt(n + 1)) && de(e.charCodeAt(n + 2)))
      i = 2;
    else if (l < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (a = String.fromCharCode(l));
    else if (l > 55295 && l < 57344) {
      const o = e.charCodeAt(n + 1);
      l < 56320 && o > 56319 && o < 57344 ? (a = String.fromCharCode(l, o), i = 1) : a = "�";
    } else
      a = String.fromCharCode(l);
    a && (t.push(e.slice(r, n), encodeURIComponent(a)), r = n + i + 1, a = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function X(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let l = 0;
  return a;
  function a(s) {
    return U(s) ? (e.enter(n), o(s)) : t(s);
  }
  function o(s) {
    return U(s) && l++ < i ? (e.consume(s), o) : (e.exit(n), t(s));
  }
}
const lu = {
  tokenize: au
};
function au(e) {
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
    return e.enter("paragraph"), l(o);
  }
  function l(o) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = s), n = s, a(o);
  }
  function a(o) {
    if (o === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(o);
      return;
    }
    return F(o) ? (e.consume(o), e.exit("chunkText"), l) : (e.consume(o), a);
  }
}
const ou = {
  tokenize: su
}, Lr = {
  tokenize: uu
};
function su(e) {
  const t = this, n = [];
  let r = 0, i, l, a;
  return o;
  function o(E) {
    if (r < n.length) {
      const D = n[r];
      return t.containerState = D[1], e.attempt(D[0].continuation, s, u)(E);
    }
    return u(E);
  }
  function s(E) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && A();
      const D = t.events.length;
      let R = D, w;
      for (; R--; )
        if (t.events[R][0] === "exit" && t.events[R][1].type === "chunkFlow") {
          w = t.events[R][1].end;
          break;
        }
      k(r);
      let z = D;
      for (; z < t.events.length; )
        t.events[z][1].end = {
          ...w
        }, z++;
      return Ae(t.events, R + 1, 0, t.events.slice(D)), t.events.length = z, u(E);
    }
    return o(E);
  }
  function u(E) {
    if (r === n.length) {
      if (!i)
        return p(E);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return d(E);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Lr, h, c)(E);
  }
  function h(E) {
    return i && A(), k(r), p(E);
  }
  function c(E) {
    return t.parser.lazy[t.now().line] = r !== n.length, a = t.now().offset, d(E);
  }
  function p(E) {
    return t.containerState = {}, e.attempt(Lr, f, d)(E);
  }
  function f(E) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(E);
  }
  function d(E) {
    if (E === null) {
      i && A(), k(0), e.consume(E);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: l
    }), y(E);
  }
  function y(E) {
    if (E === null) {
      b(e.exit("chunkFlow"), !0), k(0), e.consume(E);
      return;
    }
    return F(E) ? (e.consume(E), b(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, o) : (e.consume(E), y);
  }
  function b(E, D) {
    const R = t.sliceStream(E);
    if (D && R.push(null), E.previous = l, l && (l.next = E), l = E, i.defineSkip(E.start), i.write(R), t.parser.lazy[E.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < a && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > a)
        )
          return;
      const z = t.events.length;
      let q = z, j, x;
      for (; q--; )
        if (t.events[q][0] === "exit" && t.events[q][1].type === "chunkFlow") {
          if (j) {
            x = t.events[q][1].end;
            break;
          }
          j = !0;
        }
      for (k(r), w = z; w < t.events.length; )
        t.events[w][1].end = {
          ...x
        }, w++;
      Ae(t.events, q + 1, 0, t.events.slice(z)), t.events.length = w;
    }
  }
  function k(E) {
    let D = n.length;
    for (; D-- > E; ) {
      const R = n[D];
      t.containerState = R[1], R[0].exit.call(t, e);
    }
    n.length = E;
  }
  function A() {
    i.write([null]), l = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function uu(e, t, n) {
  return X(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function st(e) {
  if (e === null || ee(e) || Ye(e))
    return 1;
  if (Wt(e))
    return 2;
}
function Gt(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll;
    l && !r.includes(l) && (t = l(t, n), r.push(l));
  }
  return t;
}
const vn = {
  name: "attention",
  resolveAll: cu,
  tokenize: hu
};
function cu(e, t) {
  let n = -1, r, i, l, a, o, s, u, h;
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
          Dr(c, -s), Dr(p, s), a = {
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
          }, l = {
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
              ...a.start
            },
            end: {
              ...o.end
            }
          }, e[r][1].end = {
            ...a.start
          }, e[n][1].start = {
            ...o.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = Ie(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = Ie(u, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["enter", l, t]]), u = Ie(u, Gt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = Ie(u, [["exit", l, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (h = 2, u = Ie(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : h = 0, Ae(e, r - 1, n - r + 3, u), n = r + u.length - h - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function hu(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = st(r);
  let l;
  return a;
  function a(s) {
    return l = s, e.enter("attentionSequence"), o(s);
  }
  function o(s) {
    if (s === l)
      return e.consume(s), o;
    const u = e.exit("attentionSequence"), h = st(s), c = !h || h === 2 && i || n.includes(s), p = !i || i === 2 && h || n.includes(r);
    return u._open = !!(l === 42 ? c : c && (i || !p)), u._close = !!(l === 42 ? p : p && (h || !c)), t(s);
  }
}
function Dr(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const fu = {
  name: "autolink",
  tokenize: pu
};
function pu(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
  }
  function l(f) {
    return ye(f) ? (e.consume(f), a) : f === 64 ? n(f) : u(f);
  }
  function a(f) {
    return f === 43 || f === 45 || f === 46 || de(f) ? (r = 1, o(f)) : u(f);
  }
  function o(f) {
    return f === 58 ? (e.consume(f), r = 0, s) : (f === 43 || f === 45 || f === 46 || de(f)) && r++ < 32 ? (e.consume(f), o) : (r = 0, u(f));
  }
  function s(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || Nt(f) ? n(f) : (e.consume(f), s);
  }
  function u(f) {
    return f === 64 ? (e.consume(f), h) : nu(f) ? (e.consume(f), u) : n(f);
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
const Et = {
  partial: !0,
  tokenize: du
};
function du(e, t, n) {
  return r;
  function r(l) {
    return U(l) ? X(e, i, "linePrefix")(l) : i(l);
  }
  function i(l) {
    return l === null || F(l) ? t(l) : n(l);
  }
}
const kl = {
  continuation: {
    tokenize: gu
  },
  exit: yu,
  name: "blockQuote",
  tokenize: mu
};
function mu(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    if (a === 62) {
      const o = r.containerState;
      return o.open || (e.enter("blockQuote", {
        _container: !0
      }), o.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(a), e.exit("blockQuoteMarker"), l;
    }
    return n(a);
  }
  function l(a) {
    return U(a) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(a));
  }
}
function gu(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return U(a) ? X(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : l(a);
  }
  function l(a) {
    return e.attempt(kl, t, n)(a);
  }
}
function yu(e) {
  e.exit("blockQuote");
}
const xl = {
  name: "characterEscape",
  tokenize: ku
};
function ku(e, t, n) {
  return r;
  function r(l) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
  }
  function i(l) {
    return iu(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(l);
  }
}
const bl = {
  name: "characterReference",
  tokenize: xu
};
function xu(e, t, n) {
  const r = this;
  let i = 0, l, a;
  return o;
  function o(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), s;
  }
  function s(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), l = 31, a = de, h(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, a = ru, h) : (e.enter("characterReferenceValue"), l = 7, a = An, h(c));
  }
  function h(c) {
    if (c === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return a === de && !qn(r.sliceSerialize(p)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return a(c) && i++ < l ? (e.consume(c), h) : n(c);
  }
}
const Rr = {
  partial: !0,
  tokenize: wu
}, Fr = {
  concrete: !0,
  name: "codeFenced",
  tokenize: bu
};
function bu(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: R
  };
  let l = 0, a = 0, o;
  return s;
  function s(w) {
    return u(w);
  }
  function u(w) {
    const z = r.events[r.events.length - 1];
    return l = z && z[1].type === "linePrefix" ? z[2].sliceSerialize(z[1], !0).length : 0, o = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), h(w);
  }
  function h(w) {
    return w === o ? (a++, e.consume(w), h) : a < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), U(w) ? X(e, c, "whitespace")(w) : c(w));
  }
  function c(w) {
    return w === null || F(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(Rr, y, D)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(w));
  }
  function p(w) {
    return w === null || F(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(w)) : U(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), X(e, f, "whitespace")(w)) : w === 96 && w === o ? n(w) : (e.consume(w), p);
  }
  function f(w) {
    return w === null || F(w) ? c(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), d(w));
  }
  function d(w) {
    return w === null || F(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(w)) : w === 96 && w === o ? n(w) : (e.consume(w), d);
  }
  function y(w) {
    return e.attempt(i, D, b)(w);
  }
  function b(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), k;
  }
  function k(w) {
    return l > 0 && U(w) ? X(e, A, "linePrefix", l + 1)(w) : A(w);
  }
  function A(w) {
    return w === null || F(w) ? e.check(Rr, y, D)(w) : (e.enter("codeFlowValue"), E(w));
  }
  function E(w) {
    return w === null || F(w) ? (e.exit("codeFlowValue"), A(w)) : (e.consume(w), E);
  }
  function D(w) {
    return e.exit("codeFenced"), t(w);
  }
  function R(w, z, q) {
    let j = 0;
    return x;
    function x(_) {
      return w.enter("lineEnding"), w.consume(_), w.exit("lineEnding"), P;
    }
    function P(_) {
      return w.enter("codeFencedFence"), U(_) ? X(w, L, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(_) : L(_);
    }
    function L(_) {
      return _ === o ? (w.enter("codeFencedFenceSequence"), B(_)) : q(_);
    }
    function B(_) {
      return _ === o ? (j++, w.consume(_), B) : j >= a ? (w.exit("codeFencedFenceSequence"), U(_) ? X(w, T, "whitespace")(_) : T(_)) : q(_);
    }
    function T(_) {
      return _ === null || F(_) ? (w.exit("codeFencedFence"), z(_)) : q(_);
    }
  }
}
function wu(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a === null ? n(a) : (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), l);
  }
  function l(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
const rn = {
  name: "codeIndented",
  tokenize: Su
}, Cu = {
  partial: !0,
  tokenize: Eu
};
function Su(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), X(e, l, "linePrefix", 5)(u);
  }
  function l(u) {
    const h = r.events[r.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? a(u) : n(u);
  }
  function a(u) {
    return u === null ? s(u) : F(u) ? e.attempt(Cu, a, s)(u) : (e.enter("codeFlowValue"), o(u));
  }
  function o(u) {
    return u === null || F(u) ? (e.exit("codeFlowValue"), a(u)) : (e.consume(u), o);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function Eu(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return r.parser.lazy[r.now().line] ? n(a) : F(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i) : X(e, l, "linePrefix", 5)(a);
  }
  function l(a) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(a) : F(a) ? i(a) : n(a);
  }
}
const Au = {
  name: "codeText",
  previous: Iu,
  resolve: vu,
  tokenize: Tu
};
function vu(e) {
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
function Iu(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Tu(e, t, n) {
  let r = 0, i, l;
  return a;
  function a(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), o(c);
  }
  function o(c) {
    return c === 96 ? (e.consume(c), r++, o) : (e.exit("codeTextSequence"), s(c));
  }
  function s(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), s) : c === 96 ? (l = e.enter("codeTextSequence"), i = 0, h(c)) : F(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || F(c) ? (e.exit("codeTextData"), s(c)) : (e.consume(c), u);
  }
  function h(c) {
    return c === 96 ? (e.consume(c), i++, h) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (l.type = "codeTextData", u(c));
  }
}
class Pu {
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
    const l = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && gt(this.left, r), l.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), gt(this.left, t);
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
    this.setCursor(0), gt(this.right, t.reverse());
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
        gt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        gt(this.left, n.reverse());
      }
  }
}
function gt(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function wl(e) {
  const t = {};
  let n = -1, r, i, l, a, o, s, u;
  const h = new Pu(e);
  for (; ++n < h.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = h.get(n), n && r[1].type === "chunkFlow" && h.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, l = 0, l < s.length && s[l][1].type === "lineEndingBlank" && (l += 2), l < s.length && s[l][1].type === "content"))
      for (; ++l < s.length && s[l][1].type !== "content"; )
        s[l][1].type === "chunkText" && (s[l][1]._isInFirstContentOfListItem = !0, l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Lu(h, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (l = n, i = void 0; l--; )
        if (a = h.get(l), a[1].type === "lineEnding" || a[1].type === "lineEndingBlank")
          a[0] === "enter" && (i && (h.get(i)[1].type = "lineEndingBlank"), a[1].type = "lineEnding", i = l);
        else if (!(a[1].type === "linePrefix" || a[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...h.get(i)[1].start
      }, o = h.slice(i, n), o.unshift(r), h.splice(i, n - i + 1, o));
    }
  }
  return Ae(e, 0, Number.POSITIVE_INFINITY, h.slice(0)), !u;
}
function Lu(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const l = [];
  let a = n._tokenizer;
  a || (a = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
  const o = a.events, s = [], u = {};
  let h, c, p = -1, f = n, d = 0, y = 0;
  const b = [y];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; )
      ;
    l.push(i), f._tokenizer || (h = r.sliceStream(f), f.next || h.push(null), c && a.defineSkip(f.start), f._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(h), f._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), c = f, f = f.next;
  }
  for (f = n; ++p < o.length; )
    // Find a void token that includes a break.
    o[p][0] === "exit" && o[p - 1][0] === "enter" && o[p][1].type === o[p - 1][1].type && o[p][1].start.line !== o[p][1].end.line && (y = p + 1, b.push(y), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (a.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : b.pop(), p = b.length; p--; ) {
    const k = o.slice(b[p], b[p + 1]), A = l.pop();
    s.push([A, A + k.length - 1]), e.splice(A, 2, k);
  }
  for (s.reverse(), p = -1; ++p < s.length; )
    u[d + s[p][0]] = d + s[p][1], d += s[p][1] - s[p][0] - 1;
  return u;
}
const Du = {
  resolve: Fu,
  tokenize: _u
}, Ru = {
  partial: !0,
  tokenize: Mu
};
function Fu(e) {
  return wl(e), e;
}
function _u(e, t) {
  let n;
  return r;
  function r(o) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(o);
  }
  function i(o) {
    return o === null ? l(o) : F(o) ? e.check(Ru, a, l)(o) : (e.consume(o), i);
  }
  function l(o) {
    return e.exit("chunkContent"), e.exit("content"), t(o);
  }
  function a(o) {
    return e.consume(o), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function Mu(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), X(e, l, "linePrefix");
  }
  function l(a) {
    if (a === null || F(a))
      return n(a);
    const o = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(a) : e.interrupt(r.parser.constructs.flow, n, t)(a);
  }
}
function Cl(e, t, n, r, i, l, a, o, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let h = 0;
  return c;
  function c(k) {
    return k === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(k), e.exit(l), p) : k === null || k === 32 || k === 41 || Nt(k) ? n(k) : (e.enter(r), e.enter(a), e.enter(o), e.enter("chunkString", {
      contentType: "string"
    }), y(k));
  }
  function p(k) {
    return k === 62 ? (e.enter(l), e.consume(k), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(o), e.enter("chunkString", {
      contentType: "string"
    }), f(k));
  }
  function f(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(o), p(k)) : k === null || k === 60 || F(k) ? n(k) : (e.consume(k), k === 92 ? d : f);
  }
  function d(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), f) : f(k);
  }
  function y(k) {
    return !h && (k === null || k === 41 || ee(k)) ? (e.exit("chunkString"), e.exit(o), e.exit(a), e.exit(r), t(k)) : h < u && k === 40 ? (e.consume(k), h++, y) : k === 41 ? (e.consume(k), h--, y) : k === null || k === 32 || k === 40 || Nt(k) ? n(k) : (e.consume(k), k === 92 ? b : y);
  }
  function b(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), y) : y(k);
  }
}
function Sl(e, t, n, r, i, l) {
  const a = this;
  let o = 0, s;
  return u;
  function u(f) {
    return e.enter(r), e.enter(i), e.consume(f), e.exit(i), e.enter(l), h;
  }
  function h(f) {
    return o > 999 || f === null || f === 91 || f === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    f === 94 && !o && "_hiddenFootnoteSupport" in a.parser.constructs ? n(f) : f === 93 ? (e.exit(l), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : F(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), h) : (e.enter("chunkString", {
      contentType: "string"
    }), c(f));
  }
  function c(f) {
    return f === null || f === 91 || f === 93 || F(f) || o++ > 999 ? (e.exit("chunkString"), h(f)) : (e.consume(f), s || (s = !U(f)), f === 92 ? p : c);
  }
  function p(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), o++, c) : c(f);
  }
}
function El(e, t, n, r, i, l) {
  let a;
  return o;
  function o(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), a = p === 40 ? 41 : p, s) : n(p);
  }
  function s(p) {
    return p === a ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(l), u(p));
  }
  function u(p) {
    return p === a ? (e.exit(l), s(a)) : p === null ? n(p) : F(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), X(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), h(p));
  }
  function h(p) {
    return p === a || p === null || F(p) ? (e.exit("chunkString"), u(p)) : (e.consume(p), p === 92 ? c : h);
  }
  function c(p) {
    return p === a || p === 92 ? (e.consume(p), h) : h(p);
  }
}
function xt(e, t) {
  let n;
  return r;
  function r(i) {
    return F(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : U(i) ? X(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const Nu = {
  name: "definition",
  tokenize: Ou
}, zu = {
  partial: !0,
  tokenize: Bu
};
function Ou(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(f) {
    return e.enter("definition"), a(f);
  }
  function a(f) {
    return Sl.call(
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
    return i = Re(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : n(f);
  }
  function s(f) {
    return ee(f) ? xt(e, u)(f) : u(f);
  }
  function u(f) {
    return Cl(
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
    return e.attempt(zu, c, c)(f);
  }
  function c(f) {
    return U(f) ? X(e, p, "whitespace")(f) : p(f);
  }
  function p(f) {
    return f === null || F(f) ? (e.exit("definition"), r.parser.defined.push(i), t(f)) : n(f);
  }
}
function Bu(e, t, n) {
  return r;
  function r(o) {
    return ee(o) ? xt(e, i)(o) : n(o);
  }
  function i(o) {
    return El(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(o);
  }
  function l(o) {
    return U(o) ? X(e, a, "whitespace")(o) : a(o);
  }
  function a(o) {
    return o === null || F(o) ? t(o) : n(o);
  }
}
const Hu = {
  name: "hardBreakEscape",
  tokenize: $u
};
function $u(e, t, n) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return F(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l);
  }
}
const Vu = {
  name: "headingAtx",
  resolve: ju,
  tokenize: Uu
};
function ju(e, t) {
  let n = e.length - 2, r = 3, i, l;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, l = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Ae(e, r, n - r + 1, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["exit", i, t]])), e;
}
function Uu(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("atxHeading"), l(h);
  }
  function l(h) {
    return e.enter("atxHeadingSequence"), a(h);
  }
  function a(h) {
    return h === 35 && r++ < 6 ? (e.consume(h), a) : h === null || ee(h) ? (e.exit("atxHeadingSequence"), o(h)) : n(h);
  }
  function o(h) {
    return h === 35 ? (e.enter("atxHeadingSequence"), s(h)) : h === null || F(h) ? (e.exit("atxHeading"), t(h)) : U(h) ? X(e, o, "whitespace")(h) : (e.enter("atxHeadingText"), u(h));
  }
  function s(h) {
    return h === 35 ? (e.consume(h), s) : (e.exit("atxHeadingSequence"), o(h));
  }
  function u(h) {
    return h === null || h === 35 || ee(h) ? (e.exit("atxHeadingText"), o(h)) : (e.consume(h), u);
  }
}
const qu = [
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
], _r = ["pre", "script", "style", "textarea"], Wu = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Ku,
  tokenize: Zu
}, Gu = {
  partial: !0,
  tokenize: Qu
}, Xu = {
  partial: !0,
  tokenize: Yu
};
function Ku(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Zu(e, t, n) {
  const r = this;
  let i, l, a, o, s;
  return u;
  function u(g) {
    return h(g);
  }
  function h(g) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), c;
  }
  function c(g) {
    return g === 33 ? (e.consume(g), p) : g === 47 ? (e.consume(g), l = !0, y) : g === 63 ? (e.consume(g), i = 3, r.interrupt ? t : m) : ye(g) ? (e.consume(g), a = String.fromCharCode(g), b) : n(g);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), i = 2, f) : g === 91 ? (e.consume(g), i = 5, o = 0, d) : ye(g) ? (e.consume(g), i = 4, r.interrupt ? t : m) : n(g);
  }
  function f(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? t : m) : n(g);
  }
  function d(g) {
    const ue = "CDATA[";
    return g === ue.charCodeAt(o++) ? (e.consume(g), o === ue.length ? r.interrupt ? t : L : d) : n(g);
  }
  function y(g) {
    return ye(g) ? (e.consume(g), a = String.fromCharCode(g), b) : n(g);
  }
  function b(g) {
    if (g === null || g === 47 || g === 62 || ee(g)) {
      const ue = g === 47, Fe = a.toLowerCase();
      return !ue && !l && _r.includes(Fe) ? (i = 1, r.interrupt ? t(g) : L(g)) : qu.includes(a.toLowerCase()) ? (i = 6, ue ? (e.consume(g), k) : r.interrupt ? t(g) : L(g)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(g) : l ? A(g) : E(g));
    }
    return g === 45 || de(g) ? (e.consume(g), a += String.fromCharCode(g), b) : n(g);
  }
  function k(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? t : L) : n(g);
  }
  function A(g) {
    return U(g) ? (e.consume(g), A) : x(g);
  }
  function E(g) {
    return g === 47 ? (e.consume(g), x) : g === 58 || g === 95 || ye(g) ? (e.consume(g), D) : U(g) ? (e.consume(g), E) : x(g);
  }
  function D(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || de(g) ? (e.consume(g), D) : R(g);
  }
  function R(g) {
    return g === 61 ? (e.consume(g), w) : U(g) ? (e.consume(g), R) : E(g);
  }
  function w(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), s = g, z) : U(g) ? (e.consume(g), w) : q(g);
  }
  function z(g) {
    return g === s ? (e.consume(g), s = null, j) : g === null || F(g) ? n(g) : (e.consume(g), z);
  }
  function q(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || ee(g) ? R(g) : (e.consume(g), q);
  }
  function j(g) {
    return g === 47 || g === 62 || U(g) ? E(g) : n(g);
  }
  function x(g) {
    return g === 62 ? (e.consume(g), P) : n(g);
  }
  function P(g) {
    return g === null || F(g) ? L(g) : U(g) ? (e.consume(g), P) : n(g);
  }
  function L(g) {
    return g === 45 && i === 2 ? (e.consume(g), V) : g === 60 && i === 1 ? (e.consume(g), te) : g === 62 && i === 4 ? (e.consume(g), pe) : g === 63 && i === 3 ? (e.consume(g), m) : g === 93 && i === 5 ? (e.consume(g), ge) : F(g) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Gu, ke, B)(g)) : g === null || F(g) ? (e.exit("htmlFlowData"), B(g)) : (e.consume(g), L);
  }
  function B(g) {
    return e.check(Xu, T, ke)(g);
  }
  function T(g) {
    return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), _;
  }
  function _(g) {
    return g === null || F(g) ? B(g) : (e.enter("htmlFlowData"), L(g));
  }
  function V(g) {
    return g === 45 ? (e.consume(g), m) : L(g);
  }
  function te(g) {
    return g === 47 ? (e.consume(g), a = "", oe) : L(g);
  }
  function oe(g) {
    if (g === 62) {
      const ue = a.toLowerCase();
      return _r.includes(ue) ? (e.consume(g), pe) : L(g);
    }
    return ye(g) && a.length < 8 ? (e.consume(g), a += String.fromCharCode(g), oe) : L(g);
  }
  function ge(g) {
    return g === 93 ? (e.consume(g), m) : L(g);
  }
  function m(g) {
    return g === 62 ? (e.consume(g), pe) : g === 45 && i === 2 ? (e.consume(g), m) : L(g);
  }
  function pe(g) {
    return g === null || F(g) ? (e.exit("htmlFlowData"), ke(g)) : (e.consume(g), pe);
  }
  function ke(g) {
    return e.exit("htmlFlow"), t(g);
  }
}
function Yu(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return F(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), l) : n(a);
  }
  function l(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
function Qu(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Et, t, n);
  }
}
const Ju = {
  name: "htmlText",
  tokenize: ec
};
function ec(e, t, n) {
  const r = this;
  let i, l, a;
  return o;
  function o(m) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(m), s;
  }
  function s(m) {
    return m === 33 ? (e.consume(m), u) : m === 47 ? (e.consume(m), R) : m === 63 ? (e.consume(m), E) : ye(m) ? (e.consume(m), q) : n(m);
  }
  function u(m) {
    return m === 45 ? (e.consume(m), h) : m === 91 ? (e.consume(m), l = 0, d) : ye(m) ? (e.consume(m), A) : n(m);
  }
  function h(m) {
    return m === 45 ? (e.consume(m), f) : n(m);
  }
  function c(m) {
    return m === null ? n(m) : m === 45 ? (e.consume(m), p) : F(m) ? (a = c, te(m)) : (e.consume(m), c);
  }
  function p(m) {
    return m === 45 ? (e.consume(m), f) : c(m);
  }
  function f(m) {
    return m === 62 ? V(m) : m === 45 ? p(m) : c(m);
  }
  function d(m) {
    const pe = "CDATA[";
    return m === pe.charCodeAt(l++) ? (e.consume(m), l === pe.length ? y : d) : n(m);
  }
  function y(m) {
    return m === null ? n(m) : m === 93 ? (e.consume(m), b) : F(m) ? (a = y, te(m)) : (e.consume(m), y);
  }
  function b(m) {
    return m === 93 ? (e.consume(m), k) : y(m);
  }
  function k(m) {
    return m === 62 ? V(m) : m === 93 ? (e.consume(m), k) : y(m);
  }
  function A(m) {
    return m === null || m === 62 ? V(m) : F(m) ? (a = A, te(m)) : (e.consume(m), A);
  }
  function E(m) {
    return m === null ? n(m) : m === 63 ? (e.consume(m), D) : F(m) ? (a = E, te(m)) : (e.consume(m), E);
  }
  function D(m) {
    return m === 62 ? V(m) : E(m);
  }
  function R(m) {
    return ye(m) ? (e.consume(m), w) : n(m);
  }
  function w(m) {
    return m === 45 || de(m) ? (e.consume(m), w) : z(m);
  }
  function z(m) {
    return F(m) ? (a = z, te(m)) : U(m) ? (e.consume(m), z) : V(m);
  }
  function q(m) {
    return m === 45 || de(m) ? (e.consume(m), q) : m === 47 || m === 62 || ee(m) ? j(m) : n(m);
  }
  function j(m) {
    return m === 47 ? (e.consume(m), V) : m === 58 || m === 95 || ye(m) ? (e.consume(m), x) : F(m) ? (a = j, te(m)) : U(m) ? (e.consume(m), j) : V(m);
  }
  function x(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || de(m) ? (e.consume(m), x) : P(m);
  }
  function P(m) {
    return m === 61 ? (e.consume(m), L) : F(m) ? (a = P, te(m)) : U(m) ? (e.consume(m), P) : j(m);
  }
  function L(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), i = m, B) : F(m) ? (a = L, te(m)) : U(m) ? (e.consume(m), L) : (e.consume(m), T);
  }
  function B(m) {
    return m === i ? (e.consume(m), i = void 0, _) : m === null ? n(m) : F(m) ? (a = B, te(m)) : (e.consume(m), B);
  }
  function T(m) {
    return m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96 ? n(m) : m === 47 || m === 62 || ee(m) ? j(m) : (e.consume(m), T);
  }
  function _(m) {
    return m === 47 || m === 62 || ee(m) ? j(m) : n(m);
  }
  function V(m) {
    return m === 62 ? (e.consume(m), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(m);
  }
  function te(m) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), oe;
  }
  function oe(m) {
    return U(m) ? X(e, ge, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m) : ge(m);
  }
  function ge(m) {
    return e.enter("htmlTextData"), a(m);
  }
}
const Wn = {
  name: "labelEnd",
  resolveAll: ic,
  resolveTo: lc,
  tokenize: ac
}, tc = {
  tokenize: oc
}, nc = {
  tokenize: sc
}, rc = {
  tokenize: uc
};
function ic(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && Ae(e, 0, e.length, n), e;
}
function lc(e, t) {
  let n = e.length, r = 0, i, l, a, o;
  for (; n--; )
    if (i = e[n][1], l) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (a) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (l = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (a = n);
  const s = {
    type: e[l][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[l][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[l][1].start
    },
    end: {
      ...e[a][1].end
    }
  }, h = {
    type: "labelText",
    start: {
      ...e[l + r + 2][1].end
    },
    end: {
      ...e[a - 2][1].start
    }
  };
  return o = [["enter", s, t], ["enter", u, t]], o = Ie(o, e.slice(l + 1, l + r + 3)), o = Ie(o, [["enter", h, t]]), o = Ie(o, Gt(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, a - 3), t)), o = Ie(o, [["exit", h, t], e[a - 2], e[a - 1], ["exit", u, t]]), o = Ie(o, e.slice(a + 1)), o = Ie(o, [["exit", s, t]]), Ae(e, l, e.length, o), e;
}
function ac(e, t, n) {
  const r = this;
  let i = r.events.length, l, a;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      l = r.events[i][1];
      break;
    }
  return o;
  function o(p) {
    return l ? l._inactive ? c(p) : (a = r.parser.defined.includes(Re(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(p);
  }
  function s(p) {
    return p === 40 ? e.attempt(tc, h, a ? h : c)(p) : p === 91 ? e.attempt(nc, h, a ? u : c)(p) : a ? h(p) : c(p);
  }
  function u(p) {
    return e.attempt(rc, h, c)(p);
  }
  function h(p) {
    return t(p);
  }
  function c(p) {
    return l._balanced = !0, n(p);
  }
}
function oc(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return ee(c) ? xt(e, l)(c) : l(c);
  }
  function l(c) {
    return c === 41 ? h(c) : Cl(e, a, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function a(c) {
    return ee(c) ? xt(e, s)(c) : h(c);
  }
  function o(c) {
    return n(c);
  }
  function s(c) {
    return c === 34 || c === 39 || c === 40 ? El(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : h(c);
  }
  function u(c) {
    return ee(c) ? xt(e, h)(c) : h(c);
  }
  function h(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function sc(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return Sl.call(r, e, l, a, "reference", "referenceMarker", "referenceString")(o);
  }
  function l(o) {
    return r.parser.defined.includes(Re(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(o) : n(o);
  }
  function a(o) {
    return n(o);
  }
}
function uc(e, t, n) {
  return r;
  function r(l) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
  }
  function i(l) {
    return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), t) : n(l);
  }
}
const cc = {
  name: "labelStartImage",
  resolveAll: Wn.resolveAll,
  tokenize: hc
};
function hc(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(o), e.exit("labelImageMarker"), l;
  }
  function l(o) {
    return o === 91 ? (e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelImage"), a) : n(o);
  }
  function a(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const fc = {
  name: "labelStartLink",
  resolveAll: Wn.resolveAll,
  tokenize: pc
};
function pc(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelLink"), l;
  }
  function l(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const ln = {
  name: "lineEnding",
  tokenize: dc
};
function dc(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), X(e, t, "linePrefix");
  }
}
const Lt = {
  name: "thematicBreak",
  tokenize: mc
};
function mc(e, t, n) {
  let r = 0, i;
  return l;
  function l(u) {
    return e.enter("thematicBreak"), a(u);
  }
  function a(u) {
    return i = u, o(u);
  }
  function o(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || F(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), U(u) ? X(e, o, "whitespace")(u) : o(u));
  }
}
const xe = {
  continuation: {
    tokenize: xc
  },
  exit: wc,
  name: "list",
  tokenize: kc
}, gc = {
  partial: !0,
  tokenize: Cc
}, yc = {
  partial: !0,
  tokenize: bc
};
function kc(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, a = 0;
  return o;
  function o(f) {
    const d = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (d === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : An(f)) {
      if (r.containerState.type || (r.containerState.type = d, e.enter(d, {
        _container: !0
      })), d === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(Lt, n, u)(f) : u(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(f);
    }
    return n(f);
  }
  function s(f) {
    return An(f) && ++a < 10 ? (e.consume(f), s) : (!r.interrupt || a < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), u(f)) : n(f);
  }
  function u(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      Et,
      // Can’t be empty when interrupting.
      r.interrupt ? n : h,
      e.attempt(gc, p, c)
    );
  }
  function h(f) {
    return r.containerState.initialBlankLine = !0, l++, p(f);
  }
  function c(f) {
    return U(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), p) : n(f);
  }
  function p(f) {
    return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(f);
  }
}
function xc(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Et, i, l);
  function i(o) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, X(e, t, "listItemIndent", r.containerState.size + 1)(o);
  }
  function l(o) {
    return r.containerState.furtherBlankLines || !U(o) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(o)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(yc, t, a)(o));
  }
  function a(o) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, X(e, e.attempt(xe, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o);
  }
}
function bc(e, t, n) {
  const r = this;
  return X(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(l) : n(l);
  }
}
function wc(e) {
  e.exit(this.containerState.type);
}
function Cc(e, t, n) {
  const r = this;
  return X(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(l) {
    const a = r.events[r.events.length - 1];
    return !U(l) && a && a[1].type === "listItemPrefixWhitespace" ? t(l) : n(l);
  }
}
const Mr = {
  name: "setextUnderline",
  resolveTo: Sc,
  tokenize: Ec
};
function Sc(e, t) {
  let n = e.length, r, i, l;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !l && e[n][1].type === "definition" && (l = n);
  const a = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", l ? (e.splice(i, 0, ["enter", a, t]), e.splice(l + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[l][1].end
  }) : e[r][1] = a, e.push(["exit", a, t]), e;
}
function Ec(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(u) {
    let h = r.events.length, c;
    for (; h--; )
      if (r.events[h][1].type !== "lineEnding" && r.events[h][1].type !== "linePrefix" && r.events[h][1].type !== "content") {
        c = r.events[h][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = u, a(u)) : n(u);
  }
  function a(u) {
    return e.enter("setextHeadingLineSequence"), o(u);
  }
  function o(u) {
    return u === i ? (e.consume(u), o) : (e.exit("setextHeadingLineSequence"), U(u) ? X(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || F(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const Ac = {
  tokenize: vc
};
function vc(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    Et,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, X(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Du, i)), "linePrefix"))
  );
  return n;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(l), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Ic = {
  resolveAll: vl()
}, Tc = Al("string"), Pc = Al("text");
function Al(e) {
  return {
    resolveAll: vl(e === "text" ? Lc : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], l = n.attempt(i, a, o);
    return a;
    function a(h) {
      return u(h) ? l(h) : o(h);
    }
    function o(h) {
      if (h === null) {
        n.consume(h);
        return;
      }
      return n.enter("data"), n.consume(h), s;
    }
    function s(h) {
      return u(h) ? (n.exit("data"), l(h)) : (n.consume(h), s);
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
function vl(e) {
  return t;
  function t(n, r) {
    let i = -1, l;
    for (; ++i <= n.length; )
      l === void 0 ? n[i] && n[i][1].type === "data" && (l = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== l + 2 && (n[l][1].end = n[i - 1][1].end, n.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
    return e ? e(n, r) : n;
  }
}
function Lc(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let l = i.length, a = -1, o = 0, s;
      for (; l--; ) {
        const u = i[l];
        if (typeof u == "string") {
          for (a = u.length; u.charCodeAt(a - 1) === 32; )
            o++, a--;
          if (a) break;
          a = -1;
        } else if (u === -2)
          s = !0, o++;
        else if (u !== -1) {
          l++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (o = 0), o) {
        const u = {
          type: n === e.length || s || o < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: l ? a : r.start._bufferIndex + a,
            _index: r.start._index + l,
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
const Dc = {
  42: xe,
  43: xe,
  45: xe,
  48: xe,
  49: xe,
  50: xe,
  51: xe,
  52: xe,
  53: xe,
  54: xe,
  55: xe,
  56: xe,
  57: xe,
  62: kl
}, Rc = {
  91: Nu
}, Fc = {
  [-2]: rn,
  [-1]: rn,
  32: rn
}, _c = {
  35: Vu,
  42: Lt,
  45: [Mr, Lt],
  60: Wu,
  61: Mr,
  95: Lt,
  96: Fr,
  126: Fr
}, Mc = {
  38: bl,
  92: xl
}, Nc = {
  [-5]: ln,
  [-4]: ln,
  [-3]: ln,
  33: cc,
  38: bl,
  42: vn,
  60: [fu, Ju],
  91: fc,
  92: [Hu, xl],
  93: Wn,
  95: vn,
  96: Au
}, zc = {
  null: [vn, Ic]
}, Oc = {
  null: [42, 95]
}, Bc = {
  null: []
}, Hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Oc,
  contentInitial: Rc,
  disable: Bc,
  document: Dc,
  flow: _c,
  flowInitial: Fc,
  insideSpan: zc,
  string: Mc,
  text: Nc
}, Symbol.toStringTag, { value: "Module" }));
function $c(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, l = [];
  let a = [], o = [];
  const s = {
    attempt: z(R),
    check: z(w),
    consume: A,
    enter: E,
    exit: D,
    interrupt: z(w, {
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
  return t.resolveAll && l.push(t), u;
  function c(P) {
    return a = Ie(a, P), b(), a[a.length - 1] !== null ? [] : (q(t, 0), u.events = Gt(l, u.events, u), u.events);
  }
  function p(P, L) {
    return jc(f(P), L);
  }
  function f(P) {
    return Vc(a, P);
  }
  function d() {
    const {
      _bufferIndex: P,
      _index: L,
      line: B,
      column: T,
      offset: _
    } = r;
    return {
      _bufferIndex: P,
      _index: L,
      line: B,
      column: T,
      offset: _
    };
  }
  function y(P) {
    i[P.line] = P.column, x();
  }
  function b() {
    let P;
    for (; r._index < a.length; ) {
      const L = a[r._index];
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
    a[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = P;
  }
  function E(P, L) {
    const B = L || {};
    return B.type = P, B.start = d(), u.events.push(["enter", B, u]), o.push(B), B;
  }
  function D(P) {
    const L = o.pop();
    return L.end = d(), u.events.push(["exit", L, u]), L;
  }
  function R(P, L) {
    q(P, L.from);
  }
  function w(P, L) {
    L.restore();
  }
  function z(P, L) {
    return B;
    function B(T, _, V) {
      let te, oe, ge, m;
      return Array.isArray(T) ? (
        /* c8 ignore next 1 */
        ke(T)
      ) : "tokenize" in T ? (
        // Looks like a construct.
        ke([
          /** @type {Construct} */
          T
        ])
      ) : pe(T);
      function pe(fe) {
        return Ge;
        function Ge(_e) {
          const N = _e !== null && fe[_e], M = _e !== null && fe.null, Y = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(N) ? N : N ? [N] : [],
            ...Array.isArray(M) ? M : M ? [M] : []
          ];
          return ke(Y)(_e);
        }
      }
      function ke(fe) {
        return te = fe, oe = 0, fe.length === 0 ? V : g(fe[oe]);
      }
      function g(fe) {
        return Ge;
        function Ge(_e) {
          return m = j(), ge = fe, fe.partial || (u.currentConstruct = fe), fe.name && u.parser.constructs.disable.null.includes(fe.name) ? Fe() : fe.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            L ? Object.assign(Object.create(u), L) : u,
            s,
            ue,
            Fe
          )(_e);
        }
      }
      function ue(fe) {
        return P(ge, m), _;
      }
      function Fe(fe) {
        return m.restore(), ++oe < te.length ? g(te[oe]) : V;
      }
    }
  }
  function q(P, L) {
    P.resolveAll && !l.includes(P) && l.push(P), P.resolve && Ae(u.events, L, u.events.length - L, P.resolve(u.events.slice(L), u)), P.resolveTo && (u.events = P.resolveTo(u.events, u));
  }
  function j() {
    const P = d(), L = u.previous, B = u.currentConstruct, T = u.events.length, _ = Array.from(o);
    return {
      from: T,
      restore: V
    };
    function V() {
      r = P, u.previous = L, u.currentConstruct = B, u.events.length = T, o = _, x();
    }
  }
  function x() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Vc(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, l = t.end._bufferIndex;
  let a;
  if (n === i)
    a = [e[n].slice(r, l)];
  else {
    if (a = e.slice(n, i), r > -1) {
      const o = a[0];
      typeof o == "string" ? a[0] = o.slice(r) : a.shift();
    }
    l > 0 && a.push(e[i].slice(0, l));
  }
  return a;
}
function jc(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const l = e[n];
    let a;
    if (typeof l == "string")
      a = l;
    else switch (l) {
      case -5: {
        a = "\r";
        break;
      }
      case -4: {
        a = `
`;
        break;
      }
      case -3: {
        a = `\r
`;
        break;
      }
      case -2: {
        a = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        a = " ";
        break;
      }
      default:
        a = String.fromCharCode(l);
    }
    i = l === -2, r.push(a);
  }
  return r.join("");
}
function Uc(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      gl([Hc, ...(e || {}).extensions || []])
    ),
    content: i(lu),
    defined: [],
    document: i(ou),
    flow: i(Ac),
    lazy: {},
    string: i(Tc),
    text: i(Pc)
  };
  return r;
  function i(l) {
    return a;
    function a(o) {
      return $c(r, l, o);
    }
  }
}
function qc(e) {
  for (; !wl(e); )
    ;
  return e;
}
const Nr = /[\0\t\n\r]/g;
function Wc() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(l, a, o) {
    const s = [];
    let u, h, c, p, f;
    for (l = t + (typeof l == "string" ? l.toString() : new TextDecoder(a || void 0).decode(l)), c = 0, t = "", n && (l.charCodeAt(0) === 65279 && c++, n = void 0); c < l.length; ) {
      if (Nr.lastIndex = c, u = Nr.exec(l), p = u && u.index !== void 0 ? u.index : l.length, f = l.charCodeAt(p), !u) {
        t = l.slice(c);
        break;
      }
      if (f === 10 && c === p && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), c < p && (s.push(l.slice(c, p)), e += p - c), f) {
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
const Gc = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Xc(e) {
  return e.replace(Gc, Kc);
}
function Kc(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), l = i === 120 || i === 88;
    return yl(n.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return qn(n) || e;
}
const Il = {}.hasOwnProperty;
function Zc(e, t, n) {
  return t && typeof t == "object" && (n = t, t = void 0), Yc(n)(qc(Uc(n).document().write(Wc()(e, t, !0))));
}
function Yc(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(Pe),
      autolinkProtocol: j,
      autolinkEmail: j,
      atxHeading: l(ie),
      blockQuote: l(M),
      characterEscape: j,
      characterReference: j,
      codeFenced: l(Y),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: l(Y, a),
      codeText: l(G, a),
      codeTextData: j,
      data: j,
      codeFlowValue: j,
      definition: l(Q),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: l(ce),
      hardBreakEscape: l(K),
      hardBreakTrailing: l(K),
      htmlFlow: l(ne, a),
      htmlFlowData: j,
      htmlText: l(ne, a),
      htmlTextData: j,
      image: l(Me),
      label: a,
      link: l(Pe),
      listItem: l(oa),
      listItemValue: p,
      listOrdered: l(ve, c),
      listUnordered: l(ve),
      paragraph: l(sa),
      reference: g,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: l(ie),
      strong: l(ua),
      thematicBreak: l(ha)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: R,
      autolink: s(),
      autolinkEmail: N,
      autolinkProtocol: _e,
      blockQuote: s(),
      characterEscapeValue: x,
      characterReferenceMarkerHexadecimal: Fe,
      characterReferenceMarkerNumeric: Fe,
      characterReferenceValue: fe,
      characterReference: Ge,
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
      definitionLabelString: A,
      definitionTitleString: E,
      emphasis: s(),
      hardBreakEscape: s(L),
      hardBreakTrailing: s(L),
      htmlFlow: s(B),
      htmlFlowData: x,
      htmlText: s(T),
      htmlTextData: x,
      image: s(te),
      label: ge,
      labelText: oe,
      lineEnding: P,
      link: s(V),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: ue,
      resourceDestinationString: m,
      resourceTitleString: pe,
      resource: ke,
      setextHeading: s(q),
      setextHeadingLineSequence: z,
      setextHeadingText: w,
      strong: s(),
      thematicBreak: s()
    }
  };
  Tl(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(C) {
    let I = {
      type: "root",
      children: []
    };
    const O = {
      stack: [I],
      tokenStack: [],
      config: t,
      enter: o,
      exit: u,
      buffer: a,
      resume: h,
      data: n
    }, W = [];
    let J = -1;
    for (; ++J < C.length; )
      if (C[J][1].type === "listOrdered" || C[J][1].type === "listUnordered")
        if (C[J][0] === "enter")
          W.push(J);
        else {
          const Le = W.pop();
          J = i(C, Le, J);
        }
    for (J = -1; ++J < C.length; ) {
      const Le = t[C[J][0]];
      Il.call(Le, C[J][1].type) && Le[C[J][1].type].call(Object.assign({
        sliceSerialize: C[J][2].sliceSerialize
      }, O), C[J][1]);
    }
    if (O.tokenStack.length > 0) {
      const Le = O.tokenStack[O.tokenStack.length - 1];
      (Le[1] || zr).call(O, void 0, Le[0]);
    }
    for (I.position = {
      start: je(C.length > 0 ? C[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: je(C.length > 0 ? C[C.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, J = -1; ++J < t.transforms.length; )
      I = t.transforms[J](I) || I;
    return I;
  }
  function i(C, I, O) {
    let W = I - 1, J = -1, Le = !1, Xe, Oe, ht, ft;
    for (; ++W <= O; ) {
      const Ce = C[W];
      switch (Ce[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ce[0] === "enter" ? J++ : J--, ft = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ce[0] === "enter" && (Xe && !ft && !J && !ht && (ht = W), ft = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ft = void 0;
      }
      if (!J && Ce[0] === "enter" && Ce[1].type === "listItemPrefix" || J === -1 && Ce[0] === "exit" && (Ce[1].type === "listUnordered" || Ce[1].type === "listOrdered")) {
        if (Xe) {
          let Je = W;
          for (Oe = void 0; Je--; ) {
            const Be = C[Je];
            if (Be[1].type === "lineEnding" || Be[1].type === "lineEndingBlank") {
              if (Be[0] === "exit") continue;
              Oe && (C[Oe][1].type = "lineEndingBlank", Le = !0), Be[1].type = "lineEnding", Oe = Je;
            } else if (!(Be[1].type === "linePrefix" || Be[1].type === "blockQuotePrefix" || Be[1].type === "blockQuotePrefixWhitespace" || Be[1].type === "blockQuoteMarker" || Be[1].type === "listItemIndent")) break;
          }
          ht && (!Oe || ht < Oe) && (Xe._spread = !0), Xe.end = Object.assign({}, Oe ? C[Oe][1].start : Ce[1].end), C.splice(Oe || W, 0, ["exit", Xe, Ce[2]]), W++, O++;
        }
        if (Ce[1].type === "listItemPrefix") {
          const Je = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ce[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Xe = Je, C.splice(W, 0, ["enter", Je, Ce[2]]), W++, O++, ht = void 0, ft = !0;
        }
      }
    }
    return C[I][1]._spread = Le, O;
  }
  function l(C, I) {
    return O;
    function O(W) {
      o.call(this, C(W), W), I && I.call(this, W);
    }
  }
  function a() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function o(C, I, O) {
    this.stack[this.stack.length - 1].children.push(C), this.stack.push(C), this.tokenStack.push([I, O || void 0]), C.position = {
      start: je(I.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(C) {
    return I;
    function I(O) {
      C && C.call(this, O), u.call(this, O);
    }
  }
  function u(C, I) {
    const O = this.stack.pop(), W = this.tokenStack.pop();
    if (W)
      W[0].type !== C.type && (I ? I.call(this, C, W[0]) : (W[1] || zr).call(this, C, W[0]));
    else throw new Error("Cannot close `" + C.type + "` (" + kt({
      start: C.start,
      end: C.end
    }) + "): it’s not open");
    O.position.end = je(C.end);
  }
  function h() {
    return Un(this.stack.pop());
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
  function A(C) {
    const I = this.resume(), O = this.stack[this.stack.length - 1];
    O.label = I, O.identifier = Re(this.sliceSerialize(C)).toLowerCase();
  }
  function E() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = C;
  }
  function D() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = C;
  }
  function R(C) {
    const I = this.stack[this.stack.length - 1];
    if (!I.depth) {
      const O = this.sliceSerialize(C).length;
      I.depth = O;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function z(C) {
    const I = this.stack[this.stack.length - 1];
    I.depth = this.sliceSerialize(C).codePointAt(0) === 61 ? 1 : 2;
  }
  function q() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function j(C) {
    const O = this.stack[this.stack.length - 1].children;
    let W = O[O.length - 1];
    (!W || W.type !== "text") && (W = ca(), W.position = {
      start: je(C.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, O.push(W)), this.stack.push(W);
  }
  function x(C) {
    const I = this.stack.pop();
    I.value += this.sliceSerialize(C), I.position.end = je(C.end);
  }
  function P(C) {
    const I = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const O = I.children[I.children.length - 1];
      O.position.end = je(C.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(I.type) && (j.call(this, C), x.call(this, C));
  }
  function L() {
    this.data.atHardBreak = !0;
  }
  function B() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C;
  }
  function T() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C;
  }
  function _() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C;
  }
  function V() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      C.type += "Reference", C.referenceType = I, delete C.url, delete C.title;
    } else
      delete C.identifier, delete C.label;
    this.data.referenceType = void 0;
  }
  function te() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      C.type += "Reference", C.referenceType = I, delete C.url, delete C.title;
    } else
      delete C.identifier, delete C.label;
    this.data.referenceType = void 0;
  }
  function oe(C) {
    const I = this.sliceSerialize(C), O = this.stack[this.stack.length - 2];
    O.label = Xc(I), O.identifier = Re(I).toLowerCase();
  }
  function ge() {
    const C = this.stack[this.stack.length - 1], I = this.resume(), O = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, O.type === "link") {
      const W = C.children;
      O.children = W;
    } else
      O.alt = I;
  }
  function m() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = C;
  }
  function pe() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = C;
  }
  function ke() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = "collapsed";
  }
  function ue(C) {
    const I = this.resume(), O = this.stack[this.stack.length - 1];
    O.label = I, O.identifier = Re(this.sliceSerialize(C)).toLowerCase(), this.data.referenceType = "full";
  }
  function Fe(C) {
    this.data.characterReferenceType = C.type;
  }
  function fe(C) {
    const I = this.sliceSerialize(C), O = this.data.characterReferenceType;
    let W;
    O ? (W = yl(I, O === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : W = qn(I);
    const J = this.stack[this.stack.length - 1];
    J.value += W;
  }
  function Ge(C) {
    const I = this.stack.pop();
    I.position.end = je(C.end);
  }
  function _e(C) {
    x.call(this, C);
    const I = this.stack[this.stack.length - 1];
    I.url = this.sliceSerialize(C);
  }
  function N(C) {
    x.call(this, C);
    const I = this.stack[this.stack.length - 1];
    I.url = "mailto:" + this.sliceSerialize(C);
  }
  function M() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Y() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function G() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Q() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function ce() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function ie() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function K() {
    return {
      type: "break"
    };
  }
  function ne() {
    return {
      type: "html",
      value: ""
    };
  }
  function Me() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Pe() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function ve(C) {
    return {
      type: "list",
      ordered: C.type === "listOrdered",
      start: null,
      spread: C._spread,
      children: []
    };
  }
  function oa(C) {
    return {
      type: "listItem",
      spread: C._spread,
      checked: null,
      children: []
    };
  }
  function sa() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function ua() {
    return {
      type: "strong",
      children: []
    };
  }
  function ca() {
    return {
      type: "text",
      value: ""
    };
  }
  function ha() {
    return {
      type: "thematicBreak"
    };
  }
}
function je(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Tl(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Tl(e, r) : Qc(e, r);
  }
}
function Qc(e, t) {
  let n;
  for (n in t)
    if (Il.call(t, n))
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
function zr(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + kt({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + kt({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + kt({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Jc(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Zc(r, {
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
function eh(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function th(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function nh(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let l = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (l.data = { meta: t.meta }), e.patch(t, l), l = e.applyData(t, l), l = { type: "element", tagName: "pre", properties: {}, children: [l] }, e.patch(t, l), l;
}
function rh(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ih(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function lh(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = ct(r.toLowerCase()), l = e.footnoteOrder.indexOf(r);
  let a, o = e.footnoteCounts.get(r);
  o === void 0 ? (o = 0, e.footnoteOrder.push(r), a = e.footnoteOrder.length) : a = l + 1, o += 1, e.footnoteCounts.set(r, o);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (o > 1 ? "-" + o : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(a) }]
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
function ah(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function oh(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Pl(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), l = i[0];
  l && l.type === "text" ? l.value = "[" + l.value : i.unshift({ type: "text", value: "[" });
  const a = i[i.length - 1];
  return a && a.type === "text" ? a.value += r : i.push({ type: "text", value: r }), i;
}
function sh(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Pl(e, t);
  const i = { src: ct(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, l), e.applyData(t, l);
}
function uh(e, t) {
  const n = { src: ct(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function ch(e, t) {
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
function hh(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Pl(e, t);
  const i = { href: ct(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function fh(e, t) {
  const n = { href: ct(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ph(e, t, n) {
  const r = e.all(t), i = n ? dh(n) : Ll(t), l = {}, a = [];
  if (typeof t.checked == "boolean") {
    const h = r[0];
    let c;
    h && h.type === "element" && h.tagName === "p" ? c = h : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), l.className = ["task-list-item"];
  }
  let o = -1;
  for (; ++o < r.length; ) {
    const h = r[o];
    (i || o !== 0 || h.type !== "element" || h.tagName !== "p") && a.push({ type: "text", value: `
` }), h.type === "element" && h.tagName === "p" && !i ? a.push(...h.children) : a.push(h);
  }
  const s = r[r.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && a.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: l, children: a };
  return e.patch(t, u), e.applyData(t, u);
}
function dh(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Ll(n[r]);
  }
  return t;
}
function Ll(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function mh(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const a = r[i];
    if (a.type === "element" && a.tagName === "li" && a.properties && Array.isArray(a.properties.className) && a.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const l = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function gh(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function yh(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function kh(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function xh(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const a = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], a), i.push(a);
  }
  if (n.length > 0) {
    const a = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, o = Hn(t.children[1]), s = ul(t.children[t.children.length - 1]);
    o && s && (a.position = { start: o, end: s }), i.push(a);
  }
  const l = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function bh(e, t, n) {
  const r = n ? n.children : void 0, l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < o; ) {
    const c = t.children[s], p = {}, f = a ? a[s] : void 0;
    f && (p.align = f);
    let d = { type: "element", tagName: l, properties: p, children: [] };
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
function wh(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Or = 9, Br = 32;
function Ch(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const l = [];
  for (; r; )
    l.push(
      Hr(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return l.push(Hr(t.slice(i), i > 0, !1)), l.join("");
}
function Hr(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let l = e.codePointAt(r);
    for (; l === Or || l === Br; )
      r++, l = e.codePointAt(r);
  }
  if (n) {
    let l = e.codePointAt(i - 1);
    for (; l === Or || l === Br; )
      i--, l = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Sh(e, t) {
  const n = { type: "text", value: Ch(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Eh(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Ah = {
  blockquote: eh,
  break: th,
  code: nh,
  delete: rh,
  emphasis: ih,
  footnoteReference: lh,
  heading: ah,
  html: oh,
  imageReference: sh,
  image: uh,
  inlineCode: ch,
  linkReference: hh,
  link: fh,
  listItem: ph,
  list: mh,
  paragraph: gh,
  // @ts-expect-error: root is different, but hard to type.
  root: yh,
  strong: kh,
  table: xh,
  tableCell: wh,
  tableRow: bh,
  text: Sh,
  thematicBreak: Eh,
  toml: vt,
  yaml: vt,
  definition: vt,
  footnoteDefinition: vt
};
function vt() {
}
const Dl = -1, Xt = 0, bt = 1, zt = 2, Gn = 3, Xn = 4, Kn = 5, Zn = 6, Rl = 7, Fl = 8, vh = typeof self == "object" ? self : globalThis, $r = (e, t) => {
  switch (e) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + e);
  }
  return new vh[e](t);
}, Ih = (e, t) => {
  const n = (i, l) => (e.set(l, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [l, a] = t[i];
    switch (l) {
      case Xt:
      case Dl:
        return n(a, i);
      case bt: {
        const o = n([], i);
        for (const s of a)
          o.push(r(s));
        return o;
      }
      case zt: {
        const o = n({}, i);
        for (const [s, u] of a)
          o[r(s)] = r(u);
        return o;
      }
      case Gn:
        return n(new Date(a), i);
      case Xn: {
        const { source: o, flags: s } = a;
        return n(new RegExp(o, s), i);
      }
      case Kn: {
        const o = n(/* @__PURE__ */ new Map(), i);
        for (const [s, u] of a)
          o.set(r(s), r(u));
        return o;
      }
      case Zn: {
        const o = n(/* @__PURE__ */ new Set(), i);
        for (const s of a)
          o.add(r(s));
        return o;
      }
      case Rl: {
        const { name: o, message: s } = a;
        return n($r(o, s), i);
      }
      case Fl:
        return n(BigInt(a), i);
      case "BigInt":
        return n(Object(BigInt(a)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(a).buffer, a);
      case "DataView": {
        const { buffer: o } = new Uint8Array(a);
        return n(new DataView(o), a);
      }
    }
    return n($r(l, a), i);
  };
  return r;
}, Vr = (e) => Ih(/* @__PURE__ */ new Map(), e)(0), nt = "", { toString: Th } = {}, { keys: Ph } = Object, yt = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Xt, t];
  const n = Th.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [bt, nt];
    case "Object":
      return [zt, nt];
    case "Date":
      return [Gn, nt];
    case "RegExp":
      return [Xn, nt];
    case "Map":
      return [Kn, nt];
    case "Set":
      return [Zn, nt];
    case "DataView":
      return [bt, n];
  }
  return n.includes("Array") ? [bt, n] : n.includes("Error") ? [Rl, n] : [zt, n];
}, It = ([e, t]) => e === Xt && (t === "function" || t === "symbol"), Lh = (e, t, n, r) => {
  const i = (a, o) => {
    const s = r.push(a) - 1;
    return n.set(o, s), s;
  }, l = (a) => {
    if (n.has(a))
      return n.get(a);
    let [o, s] = yt(a);
    switch (o) {
      case Xt: {
        let h = a;
        switch (s) {
          case "bigint":
            o = Fl, h = a.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            h = null;
            break;
          case "undefined":
            return i([Dl], a);
        }
        return i([o, h], a);
      }
      case bt: {
        if (s) {
          let p = a;
          return s === "DataView" ? p = new Uint8Array(a.buffer) : s === "ArrayBuffer" && (p = new Uint8Array(a)), i([s, [...p]], a);
        }
        const h = [], c = i([o, h], a);
        for (const p of a)
          h.push(l(p));
        return c;
      }
      case zt: {
        if (s)
          switch (s) {
            case "BigInt":
              return i([s, a.toString()], a);
            case "Boolean":
            case "Number":
            case "String":
              return i([s, a.valueOf()], a);
          }
        if (t && "toJSON" in a)
          return l(a.toJSON());
        const h = [], c = i([o, h], a);
        for (const p of Ph(a))
          (e || !It(yt(a[p]))) && h.push([l(p), l(a[p])]);
        return c;
      }
      case Gn:
        return i([o, a.toISOString()], a);
      case Xn: {
        const { source: h, flags: c } = a;
        return i([o, { source: h, flags: c }], a);
      }
      case Kn: {
        const h = [], c = i([o, h], a);
        for (const [p, f] of a)
          (e || !(It(yt(p)) || It(yt(f)))) && h.push([l(p), l(f)]);
        return c;
      }
      case Zn: {
        const h = [], c = i([o, h], a);
        for (const p of a)
          (e || !It(yt(p))) && h.push(l(p));
        return c;
      }
    }
    const { message: u } = a;
    return i([o, { name: s, message: u }], a);
  };
  return l;
}, jr = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Lh(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Ot = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Vr(jr(e, t)) : structuredClone(e)
) : (e, t) => Vr(jr(e, t));
function Dh(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Rh(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Fh(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Dh, r = e.options.footnoteBackLabel || Rh, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", a = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, o = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const h = e.all(u), c = String(u.identifier).toUpperCase(), p = ct(c.toLowerCase());
    let f = 0;
    const d = [], y = e.footnoteCounts.get(c);
    for (; y !== void 0 && ++f <= y; ) {
      d.length > 0 && d.push({ type: "text", value: " " });
      let A = typeof n == "string" ? n : n(s, f);
      typeof A == "string" && (A = { type: "text", value: A }), d.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + p + (f > 1 ? "-" + f : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, f),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(A) ? A : [A]
      });
    }
    const b = h[h.length - 1];
    if (b && b.type === "element" && b.tagName === "p") {
      const A = b.children[b.children.length - 1];
      A && A.type === "text" ? A.value += " " : b.children.push({ type: "text", value: " " }), b.children.push(...d);
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
          tagName: l,
          properties: {
            ...Ot(a),
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
const Kt = (
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
      return zh;
    if (typeof e == "function")
      return Zt(e);
    if (typeof e == "object")
      return Array.isArray(e) ? _h(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Mh(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return Nh(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function _h(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Kt(e[n]);
  return Zt(r);
  function r(...i) {
    let l = -1;
    for (; ++l < t.length; )
      if (t[l].apply(this, i)) return !0;
    return !1;
  }
}
function Mh(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Zt(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let l;
    for (l in e)
      if (i[l] !== t[l]) return !1;
    return !0;
  }
}
function Nh(e) {
  return Zt(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Zt(e) {
  return t;
  function t(n, r, i) {
    return !!(Oh(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function zh() {
  return !0;
}
function Oh(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const _l = [], Bh = !0, In = !1, Hh = "skip";
function Ml(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const l = Kt(i), a = r ? -1 : 1;
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
      let f = _l, d, y, b;
      if ((!t || l(s, u, h[h.length - 1] || void 0)) && (f = $h(n(s, h)), f[0] === In))
        return f;
      if ("children" in s && s.children) {
        const k = (
          /** @type {UnistParent} */
          s
        );
        if (k.children && f[0] !== Hh)
          for (y = (r ? k.children.length : -1) + a, b = h.concat(k); y > -1 && y < k.children.length; ) {
            const A = k.children[y];
            if (d = o(A, y, b)(), d[0] === In)
              return d;
            y = typeof d[1] == "number" ? d[1] : y + a;
          }
      }
      return f;
    }
  }
}
function $h(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Bh, e] : e == null ? _l : [e];
}
function Yn(e, t, n, r) {
  let i, l, a;
  typeof t == "function" && typeof n != "function" ? (l = void 0, a = t, i = n) : (l = t, a = n, i = r), Ml(e, l, o, i);
  function o(s, u) {
    const h = u[u.length - 1], c = h ? h.children.indexOf(s) : void 0;
    return a(s, c, h);
  }
}
const Tn = {}.hasOwnProperty, Vh = {};
function jh(e, t) {
  const n = t || Vh, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), a = { ...Ah, ...n.handlers }, o = {
    all: u,
    applyData: qh,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: l,
    footnoteOrder: [],
    handlers: a,
    one: s,
    options: n,
    patch: Uh,
    wrap: Gh
  };
  return Yn(e, function(h) {
    if (h.type === "definition" || h.type === "footnoteDefinition") {
      const c = h.type === "definition" ? r : i, p = String(h.identifier).toUpperCase();
      c.has(p) || c.set(p, h);
    }
  }), o;
  function s(h, c) {
    const p = h.type, f = o.handlers[p];
    if (Tn.call(o.handlers, p) && f)
      return f(o, h, c);
    if (o.options.passThrough && o.options.passThrough.includes(p)) {
      if ("children" in h) {
        const { children: y, ...b } = h, k = Ot(b);
        return k.children = o.all(h), k;
      }
      return Ot(h);
    }
    return (o.options.unknownHandler || Wh)(o, h, c);
  }
  function u(h) {
    const c = [];
    if ("children" in h) {
      const p = h.children;
      let f = -1;
      for (; ++f < p.length; ) {
        const d = o.one(p[f], h);
        if (d) {
          if (f && p[f - 1].type === "break" && (!Array.isArray(d) && d.type === "text" && (d.value = Ur(d.value)), !Array.isArray(d) && d.type === "element")) {
            const y = d.children[0];
            y && y.type === "text" && (y.value = Ur(y.value));
          }
          Array.isArray(d) ? c.push(...d) : c.push(d);
        }
      }
    }
    return c;
  }
}
function Uh(e, t) {
  e.position && (t.position = Ds(e));
}
function qh(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, l = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const a = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: a };
      }
    n.type === "element" && l && Object.assign(n.properties, Ot(l)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Wh(e, t) {
  const n = t.data || {}, r = "value" in t && !(Tn.call(n, "hProperties") || Tn.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Gh(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Ur(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function qr(e, t) {
  const n = jh(e, t), r = n.one(e, void 0), i = Fh(n), l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && l.children.push({ type: "text", value: `
` }, i), l;
}
function Xh(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      qr(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      qr(n, { file: r, ...e || t })
    );
  };
}
function Wr(e) {
  if (e)
    throw e;
}
var Dt = Object.prototype.hasOwnProperty, Nl = Object.prototype.toString, Gr = Object.defineProperty, Xr = Object.getOwnPropertyDescriptor, Kr = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Nl.call(t) === "[object Array]";
}, Zr = function(t) {
  if (!t || Nl.call(t) !== "[object Object]")
    return !1;
  var n = Dt.call(t, "constructor"), r = t.constructor && t.constructor.prototype && Dt.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || Dt.call(t, i);
}, Yr = function(t, n) {
  Gr && n.name === "__proto__" ? Gr(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Qr = function(t, n) {
  if (n === "__proto__")
    if (Dt.call(t, n)) {
      if (Xr)
        return Xr(t, n).value;
    } else return;
  return t[n];
}, Kh = function e() {
  var t, n, r, i, l, a, o = arguments[0], s = 1, u = arguments.length, h = !1;
  for (typeof o == "boolean" && (h = o, o = arguments[1] || {}, s = 2), (o == null || typeof o != "object" && typeof o != "function") && (o = {}); s < u; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = Qr(o, n), i = Qr(t, n), o !== i && (h && i && (Zr(i) || (l = Kr(i))) ? (l ? (l = !1, a = r && Kr(r) ? r : []) : a = r && Zr(r) ? r : {}, Yr(o, { name: n, newValue: e(h, a, i) })) : typeof i < "u" && Yr(o, { name: n, newValue: i }));
  return o;
};
const an = /* @__PURE__ */ sl(Kh);
function Pn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Zh() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let l = -1;
    const a = i.pop();
    if (typeof a != "function")
      throw new TypeError("Expected function as last argument, not " + a);
    o(null, ...i);
    function o(s, ...u) {
      const h = e[++l];
      let c = -1;
      if (s) {
        a(s);
        return;
      }
      for (; ++c < i.length; )
        (u[c] === null || u[c] === void 0) && (u[c] = i[c]);
      i = u, h ? Yh(h, o)(...u) : a(null, ...u);
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
function Yh(e, t) {
  let n;
  return r;
  function r(...a) {
    const o = e.length > a.length;
    let s;
    o && a.push(i);
    try {
      s = e.apply(this, a);
    } catch (u) {
      const h = (
        /** @type {Error} */
        u
      );
      if (o && n)
        throw h;
      return i(h);
    }
    o || (s && s.then && typeof s.then == "function" ? s.then(l, i) : s instanceof Error ? i(s) : l(s));
  }
  function i(a, ...o) {
    n || (n = !0, t(a, ...o));
  }
  function l(a) {
    i(null, a);
  }
}
const Ne = { basename: Qh, dirname: Jh, extname: ef, join: tf, sep: "/" };
function Qh(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  At(e);
  let n = 0, r = -1, i = e.length, l;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (l) {
          n = i + 1;
          break;
        }
      } else r < 0 && (l = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let a = -1, o = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (l) {
        n = i + 1;
        break;
      }
    } else
      a < 0 && (l = !0, a = i + 1), o > -1 && (e.codePointAt(i) === t.codePointAt(o--) ? o < 0 && (r = i) : (o = -1, r = a));
  return n === r ? r = a : r < 0 && (r = e.length), e.slice(n, r);
}
function Jh(e) {
  if (At(e), e.length === 0)
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
function ef(e) {
  At(e);
  let t = e.length, n = -1, r = 0, i = -1, l = 0, a;
  for (; t--; ) {
    const o = e.codePointAt(t);
    if (o === 47) {
      if (a) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (a = !0, n = t + 1), o === 46 ? i < 0 ? i = t : l !== 1 && (l = 1) : i > -1 && (l = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  l === 0 || // The (right-most) trimmed path component is exactly `..`.
  l === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function tf(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    At(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : nf(n);
}
function nf(e) {
  At(e);
  const t = e.codePointAt(0) === 47;
  let n = rf(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function rf(e, t) {
  let n = "", r = 0, i = -1, l = 0, a = -1, o, s;
  for (; ++a <= e.length; ) {
    if (a < e.length)
      o = e.codePointAt(a);
    else {
      if (o === 47)
        break;
      o = 47;
    }
    if (o === 47) {
      if (!(i === a - 1 || l === 1)) if (i !== a - 1 && l === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (s = n.lastIndexOf("/"), s !== n.length - 1) {
              s < 0 ? (n = "", r = 0) : (n = n.slice(0, s), r = n.length - 1 - n.lastIndexOf("/")), i = a, l = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = a, l = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, a) : n = e.slice(i + 1, a), r = a - i - 1;
      i = a, l = 0;
    } else o === 46 && l > -1 ? l++ : l = -1;
  }
  return n;
}
function At(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const lf = { cwd: af };
function af() {
  return "/";
}
function Ln(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function of(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Ln(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return sf(e);
}
function sf(e) {
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
const on = (
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
class zl {
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
    t ? Ln(t) ? n = { path: t } : typeof t == "string" || uf(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : lf.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < on.length; ) {
      const l = on[r];
      l in n && n[l] !== void 0 && n[l] !== null && (this[l] = l === "history" ? [...n[l]] : n[l]);
    }
    let i;
    for (i in n)
      on.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Ne.basename(this.path) : void 0;
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
    un(t, "basename"), sn(t, "basename"), this.path = Ne.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Ne.dirname(this.path) : void 0;
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
    Jr(this.basename, "dirname"), this.path = Ne.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Ne.extname(this.path) : void 0;
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
    if (sn(t, "extname"), Jr(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Ne.join(this.dirname, this.stem + (t || ""));
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
    Ln(t) && (t = of(t)), un(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Ne.basename(this.path, this.extname) : void 0;
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
    un(t, "stem"), sn(t, "stem"), this.path = Ne.join(this.dirname || "", t + (this.extname || ""));
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
function sn(e, t) {
  if (e && e.includes(Ne.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Ne.sep + "`"
    );
}
function un(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Jr(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function uf(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const cf = (
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
    ), i = r[e], l = function() {
      return i.apply(l, arguments);
    };
    return Object.setPrototypeOf(l, r), l;
  }
), hf = {}.hasOwnProperty;
class Qn extends cf {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Zh();
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
      new Qn()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(an(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (fn("data", this.frozen), this.namespace[t] = n, this) : hf.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (fn("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = Tt(t), r = this.parser || this.Parser;
    return cn("parse", r), r(String(n), n);
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
    return this.freeze(), cn("process", this.parser || this.Parser), hn("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(l, a) {
      const o = Tt(t), s = (
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
        df(d) ? p.value = d : p.result = d, u(
          h,
          /** @type {VFileWithOutput<CompileResult>} */
          p
        );
      });
      function u(h, c) {
        h || !c ? a(h) : l ? l(c) : n(void 0, c);
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
    return this.freeze(), cn("processSync", this.parser || this.Parser), hn("processSync", this.compiler || this.Compiler), this.process(t, i), ti("processSync", "process", n), r;
    function i(l, a) {
      n = !0, Wr(l), r = a;
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
    ei(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? l(void 0, r) : new Promise(l);
    function l(a, o) {
      const s = Tt(n);
      i.run(t, s, u);
      function u(h, c, p) {
        const f = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || t
        );
        h ? o(h) : a ? a(f) : r(void 0, f, p);
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
    return this.run(t, n, l), ti("runSync", "run", r), i;
    function l(a, o) {
      Wr(a), i = o, r = !0;
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
    const r = Tt(n), i = this.compiler || this.Compiler;
    return hn("stringify", i), ei(t), i(t, r);
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
    if (fn("use", this.frozen), t != null) if (typeof t == "function")
      s(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? o(t) : a(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function l(u) {
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
          a(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function a(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      o(u.plugins), u.settings && (i.settings = an(!0, i.settings, u.settings));
    }
    function o(u) {
      let h = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++h < u.length; ) {
          const c = u[h];
          l(c);
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
        Pn(y) && Pn(f) && (f = an(!0, y, f)), r[p] = [u, f, ...d];
      }
    }
  }
}
const ff = new Qn().freeze();
function cn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function hn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function fn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function ei(e) {
  if (!Pn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function ti(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Tt(e) {
  return pf(e) ? e : new zl(e);
}
function pf(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function df(e) {
  return typeof e == "string" || mf(e);
}
function mf(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const gf = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", ni = [], ri = { allowDangerousHtml: !0 }, yf = /^(https?|ircs?|mailto|xmpp)$/i, kf = [
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
function xf(e) {
  const t = bf(e), n = wf(e);
  return Cf(t.runSync(t.parse(n), n), e);
}
function bf(e) {
  const t = e.rehypePlugins || ni, n = e.remarkPlugins || ni, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...ri } : ri;
  return ff().use(Jc).use(n).use(Xh, r).use(t);
}
function wf(e) {
  const t = e.children || "", n = new zl();
  return typeof t == "string" && (n.value = t), n;
}
function Cf(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, l = t.disallowedElements, a = t.skipHtml, o = t.unwrapDisallowed, s = t.urlTransform || Sf;
  for (const h of kf)
    Object.hasOwn(t, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + gf + h.id, void 0);
  return Yn(e, u), Ns(e, {
    Fragment: hi,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: S,
    jsxs: ae,
    passKeys: !0,
    passNode: !0
  });
  function u(h, c, p) {
    if (h.type === "raw" && p && typeof c == "number")
      return a ? p.children.splice(c, 1) : p.children[c] = { type: "text", value: h.value }, c;
    if (h.type === "element") {
      let f;
      for (f in nn)
        if (Object.hasOwn(nn, f) && Object.hasOwn(h.properties, f)) {
          const d = h.properties[f], y = nn[f];
          (y === null || y.includes(h.tagName)) && (h.properties[f] = s(String(d || ""), f, h));
        }
    }
    if (h.type === "element") {
      let f = n ? !n.includes(h.tagName) : l ? l.includes(h.tagName) : !1;
      if (!f && r && typeof c == "number" && (f = !r(h, c, p)), f && p && typeof c == "number")
        return o && h.children ? p.children.splice(c, 1, ...h.children) : p.children.splice(c, 1), c;
    }
  }
}
function Sf(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    yf.test(e.slice(0, t)) ? e : ""
  );
}
function ii(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function Ef(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Af(e, t, n) {
  const i = Kt((n || {}).ignore || []), l = vf(t);
  let a = -1;
  for (; ++a < l.length; )
    Ml(e, "text", o);
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
    const c = h[h.length - 1], p = l[a][0], f = l[a][1];
    let d = 0;
    const b = c.children.indexOf(u);
    let k = !1, A = [];
    p.lastIndex = 0;
    let E = p.exec(u.value);
    for (; E; ) {
      const D = E.index, R = {
        index: E.index,
        input: E.input,
        stack: [...h, u]
      };
      let w = f(...E, R);
      if (typeof w == "string" && (w = w.length > 0 ? { type: "text", value: w } : void 0), w === !1 ? p.lastIndex = D + 1 : (d !== D && A.push({
        type: "text",
        value: u.value.slice(d, D)
      }), Array.isArray(w) ? A.push(...w) : w && A.push(w), d = D + E[0].length, k = !0), !p.global)
        break;
      E = p.exec(u.value);
    }
    return k ? (d < u.value.length && A.push({ type: "text", value: u.value.slice(d) }), c.children.splice(b, 1, ...A)) : A = [u], b + A.length;
  }
}
function vf(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([If(i[0]), Tf(i[1])]);
  }
  return t;
}
function If(e) {
  return typeof e == "string" ? new RegExp(Ef(e), "g") : e;
}
function Tf(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const pn = "phrasing", dn = ["autolink", "link", "image", "label"];
function Pf() {
  return {
    transforms: [Nf],
    enter: {
      literalAutolink: Df,
      literalAutolinkEmail: mn,
      literalAutolinkHttp: mn,
      literalAutolinkWww: mn
    },
    exit: {
      literalAutolink: Mf,
      literalAutolinkEmail: _f,
      literalAutolinkHttp: Rf,
      literalAutolinkWww: Ff
    }
  };
}
function Lf() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: pn,
        notInConstruct: dn
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: pn,
        notInConstruct: dn
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: pn,
        notInConstruct: dn
      }
    ]
  };
}
function Df(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function mn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Rf(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Ff(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function _f(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Mf(e) {
  this.exit(e);
}
function Nf(e) {
  Af(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, zf],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Of]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function zf(e, t, n, r, i) {
  let l = "";
  if (!Ol(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !Bf(n)))
    return !1;
  const a = Hf(n + r);
  if (!a[0]) return !1;
  const o = {
    type: "link",
    title: null,
    url: l + t + a[0],
    children: [{ type: "text", value: t + a[0] }]
  };
  return a[1] ? [o, { type: "text", value: a[1] }] : o;
}
function Of(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Ol(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function Bf(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Hf(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = ii(e, "(");
  let l = ii(e, ")");
  for (; r !== -1 && i > l; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), l++;
  return [e, n];
}
function Ol(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ye(n) || Wt(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
Bl.peek = Kf;
function $f() {
  this.buffer();
}
function Vf(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function jf() {
  this.buffer();
}
function Uf(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function qf(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Re(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function Wf(e) {
  this.exit(e);
}
function Gf(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Re(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function Xf(e) {
  this.exit(e);
}
function Kf() {
  return "[";
}
function Bl(e, t, n, r) {
  const i = n.createTracker(r);
  let l = i.move("[^");
  const a = n.enter("footnoteReference"), o = n.enter("reference");
  return l += i.move(
    n.safe(n.associationId(e), { after: "]", before: l })
  ), o(), a(), l += i.move("]"), l;
}
function Zf() {
  return {
    enter: {
      gfmFootnoteCallString: $f,
      gfmFootnoteCall: Vf,
      gfmFootnoteDefinitionLabelString: jf,
      gfmFootnoteDefinition: Uf
    },
    exit: {
      gfmFootnoteCallString: qf,
      gfmFootnoteCall: Wf,
      gfmFootnoteDefinitionLabelString: Gf,
      gfmFootnoteDefinition: Xf
    }
  };
}
function Yf(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: Bl },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, l, a) {
    const o = l.createTracker(a);
    let s = o.move("[^");
    const u = l.enter("footnoteDefinition"), h = l.enter("label");
    return s += o.move(
      l.safe(l.associationId(r), { before: s, after: "]" })
    ), h(), s += o.move("]:"), r.children && r.children.length > 0 && (o.shift(4), s += o.move(
      (t ? `
` : " ") + l.indentLines(
        l.containerFlow(r, o.current()),
        t ? Hl : Qf
      )
    )), u(), s;
  }
}
function Qf(e, t, n) {
  return t === 0 ? e : Hl(e, t, n);
}
function Hl(e, t, n) {
  return (n ? "" : "    ") + e;
}
const Jf = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
$l.peek = ip;
function ep() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: np },
    exit: { strikethrough: rp }
  };
}
function tp() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Jf
      }
    ],
    handlers: { delete: $l }
  };
}
function np(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function rp(e) {
  this.exit(e);
}
function $l(e, t, n, r) {
  const i = n.createTracker(r), l = n.enter("strikethrough");
  let a = i.move("~~");
  return a += n.containerPhrasing(e, {
    ...i.current(),
    before: a,
    after: "~"
  }), a += i.move("~~"), l(), a;
}
function ip() {
  return "~";
}
function lp(e) {
  return e.length;
}
function ap(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || lp, l = [], a = [], o = [], s = [];
  let u = 0, h = -1;
  for (; ++h < e.length; ) {
    const y = [], b = [];
    let k = -1;
    for (e[h].length > u && (u = e[h].length); ++k < e[h].length; ) {
      const A = op(e[h][k]);
      if (n.alignDelimiters !== !1) {
        const E = i(A);
        b[k] = E, (s[k] === void 0 || E > s[k]) && (s[k] = E);
      }
      y.push(A);
    }
    a[h] = y, o[h] = b;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < u; )
      l[c] = li(r[c]);
  else {
    const y = li(r);
    for (; ++c < u; )
      l[c] = y;
  }
  c = -1;
  const p = [], f = [];
  for (; ++c < u; ) {
    const y = l[c];
    let b = "", k = "";
    y === 99 ? (b = ":", k = ":") : y === 108 ? b = ":" : y === 114 && (k = ":");
    let A = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[c] - b.length - k.length
    );
    const E = b + "-".repeat(A) + k;
    n.alignDelimiters !== !1 && (A = b.length + A + k.length, A > s[c] && (s[c] = A), f[c] = A), p[c] = E;
  }
  a.splice(1, 0, p), o.splice(1, 0, f), h = -1;
  const d = [];
  for (; ++h < a.length; ) {
    const y = a[h], b = o[h];
    c = -1;
    const k = [];
    for (; ++c < u; ) {
      const A = y[c] || "";
      let E = "", D = "";
      if (n.alignDelimiters !== !1) {
        const R = s[c] - (b[c] || 0), w = l[c];
        w === 114 ? E = " ".repeat(R) : w === 99 ? R % 2 ? (E = " ".repeat(R / 2 + 0.5), D = " ".repeat(R / 2 - 0.5)) : (E = " ".repeat(R / 2), D = E) : D = " ".repeat(R);
      }
      n.delimiterStart !== !1 && !c && k.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && A === "") && (n.delimiterStart !== !1 || c) && k.push(" "), n.alignDelimiters !== !1 && k.push(E), k.push(A), n.alignDelimiters !== !1 && k.push(D), n.padding !== !1 && k.push(" "), (n.delimiterEnd !== !1 || c !== u - 1) && k.push("|");
    }
    d.push(
      n.delimiterEnd === !1 ? k.join("").replace(/ +$/, "") : k.join("")
    );
  }
  return d.join(`
`);
}
function op(e) {
  return e == null ? "" : String(e);
}
function li(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function sp(e, t, n, r) {
  const i = n.enter("blockquote"), l = n.createTracker(r);
  l.move("> "), l.shift(2);
  const a = n.indentLines(
    n.containerFlow(e, l.current()),
    up
  );
  return i(), a;
}
function up(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function cp(e, t) {
  return ai(e, t.inConstruct, !0) && !ai(e, t.notInConstruct, !1);
}
function ai(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function oi(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && cp(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function hp(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, l = 0, a = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++l > a && (a = l) : l = 1, i = r + t.length, r = n.indexOf(t, i);
  return a;
}
function fp(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function pp(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function dp(e, t, n, r) {
  const i = pp(n), l = e.value || "", a = i === "`" ? "GraveAccent" : "Tilde";
  if (fp(e, n)) {
    const c = n.enter("codeIndented"), p = n.indentLines(l, mp);
    return c(), p;
  }
  const o = n.createTracker(r), s = i.repeat(Math.max(hp(l, i) + 1, 3)), u = n.enter("codeFenced");
  let h = o.move(s);
  if (e.lang) {
    const c = n.enter(`codeFencedLang${a}`);
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
    const c = n.enter(`codeFencedMeta${a}`);
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
`), l && (h += o.move(l + `
`)), h += o.move(s), u(), h;
}
function mp(e, t, n) {
  return (n ? "" : "    ") + e;
}
function Jn(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function gp(e, t, n, r) {
  const i = Jn(n), l = i === '"' ? "Quote" : "Apostrophe", a = n.enter("definition");
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
  )), o(), e.title && (o = n.enter(`title${l}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), o()), a(), u;
}
function yp(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function Ct(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Bt(e, t, n) {
  const r = st(e), i = st(t);
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
Vl.peek = kp;
function Vl(e, t, n, r) {
  const i = yp(n), l = n.enter("emphasis"), a = n.createTracker(r), o = a.move(i);
  let s = a.move(
    n.containerPhrasing(e, {
      after: i,
      before: o,
      ...a.current()
    })
  );
  const u = s.charCodeAt(0), h = Bt(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  h.inside && (s = Ct(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), p = Bt(r.after.charCodeAt(0), c, i);
  p.inside && (s = s.slice(0, -1) + Ct(c));
  const f = a.move(i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: h.outside
  }, o + s + f;
}
function kp(e, t, n) {
  return n.options.emphasis || "*";
}
function xp(e, t) {
  let n = !1;
  return Yn(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, In;
  }), !!((!e.depth || e.depth < 3) && Un(e) && (t.options.setext || n));
}
function bp(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), l = n.createTracker(r);
  if (xp(e, n)) {
    const h = n.enter("headingSetext"), c = n.enter("phrasing"), p = n.containerPhrasing(e, {
      ...l.current(),
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
  const a = "#".repeat(i), o = n.enter("headingAtx"), s = n.enter("phrasing");
  l.move(a + " ");
  let u = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...l.current()
  });
  return /^[\t ]/.test(u) && (u = Ct(u.charCodeAt(0)) + u.slice(1)), u = u ? a + " " + u : a, n.options.closeAtx && (u += " " + a), s(), o(), u;
}
jl.peek = wp;
function jl(e) {
  return e.value || "";
}
function wp() {
  return "<";
}
Ul.peek = Cp;
function Ul(e, t, n, r) {
  const i = Jn(n), l = i === '"' ? "Quote" : "Apostrophe", a = n.enter("image");
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
  )), o(), e.title && (o = n.enter(`title${l}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), o()), u += s.move(")"), a(), u;
}
function Cp() {
  return "!";
}
ql.peek = Sp;
function ql(e, t, n, r) {
  const i = e.referenceType, l = n.enter("imageReference");
  let a = n.enter("label");
  const o = n.createTracker(r);
  let s = o.move("![");
  const u = n.safe(e.alt, {
    before: s,
    after: "]",
    ...o.current()
  });
  s += o.move(u + "]["), a();
  const h = n.stack;
  n.stack = [], a = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...o.current()
  });
  return a(), n.stack = h, l(), i === "full" || !u || u !== c ? s += o.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += o.move("]"), s;
}
function Sp() {
  return "!";
}
Wl.peek = Ep;
function Wl(e, t, n) {
  let r = e.value || "", i = "`", l = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++l < n.unsafe.length; ) {
    const a = n.unsafe[l], o = n.compilePattern(a);
    let s;
    if (a.atBreak)
      for (; s = o.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return i + r + i;
}
function Ep() {
  return "`";
}
function Gl(e, t) {
  const n = Un(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Xl.peek = Ap;
function Xl(e, t, n, r) {
  const i = Jn(n), l = i === '"' ? "Quote" : "Apostrophe", a = n.createTracker(r);
  let o, s;
  if (Gl(e, n)) {
    const h = n.stack;
    n.stack = [], o = n.enter("autolink");
    let c = a.move("<");
    return c += a.move(
      n.containerPhrasing(e, {
        before: c,
        after: ">",
        ...a.current()
      })
    ), c += a.move(">"), o(), n.stack = h, c;
  }
  o = n.enter("link"), s = n.enter("label");
  let u = a.move("[");
  return u += a.move(
    n.containerPhrasing(e, {
      before: u,
      after: "](",
      ...a.current()
    })
  ), u += a.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), u += a.move("<"), u += a.move(
    n.safe(e.url, { before: u, after: ">", ...a.current() })
  ), u += a.move(">")) : (s = n.enter("destinationRaw"), u += a.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...a.current()
    })
  )), s(), e.title && (s = n.enter(`title${l}`), u += a.move(" " + i), u += a.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...a.current()
    })
  ), u += a.move(i), s()), u += a.move(")"), o(), u;
}
function Ap(e, t, n) {
  return Gl(e, n) ? "<" : "[";
}
Kl.peek = vp;
function Kl(e, t, n, r) {
  const i = e.referenceType, l = n.enter("linkReference");
  let a = n.enter("label");
  const o = n.createTracker(r);
  let s = o.move("[");
  const u = n.containerPhrasing(e, {
    before: s,
    after: "]",
    ...o.current()
  });
  s += o.move(u + "]["), a();
  const h = n.stack;
  n.stack = [], a = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...o.current()
  });
  return a(), n.stack = h, l(), i === "full" || !u || u !== c ? s += o.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += o.move("]"), s;
}
function vp() {
  return "[";
}
function er(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Ip(e) {
  const t = er(e), n = e.options.bulletOther;
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
function Tp(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Zl(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function Pp(e, t, n, r) {
  const i = n.enter("list"), l = n.bulletCurrent;
  let a = e.ordered ? Tp(n) : er(n);
  const o = e.ordered ? a === "." ? ")" : "." : Ip(n);
  let s = t && n.bulletLastUsed ? a === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const h = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (a === "*" || a === "-") && // Empty first list item:
      h && (!h.children || !h.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), Zl(n) === a && h
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
  s && (a = o), n.bulletCurrent = a;
  const u = n.containerFlow(e, r);
  return n.bulletLastUsed = a, n.bulletCurrent = l, i(), u;
}
function Lp(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Dp(e, t, n, r) {
  const i = Lp(n);
  let l = n.bulletCurrent || er(n);
  t && t.type === "list" && t.ordered && (l = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + l);
  let a = l.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (a = Math.ceil(a / 4) * 4);
  const o = n.createTracker(r);
  o.move(l + " ".repeat(a - l.length)), o.shift(a);
  const s = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, o.current()),
    h
  );
  return s(), u;
  function h(c, p, f) {
    return p ? (f ? "" : " ".repeat(a)) + c : (f ? l : l + " ".repeat(a - l.length)) + c;
  }
}
function Rp(e, t, n, r) {
  const i = n.enter("paragraph"), l = n.enter("phrasing"), a = n.containerPhrasing(e, r);
  return l(), i(), a;
}
const Fp = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Kt([
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
function _p(e, t, n, r) {
  return (e.children.some(function(a) {
    return Fp(a);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function Mp(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
Yl.peek = Np;
function Yl(e, t, n, r) {
  const i = Mp(n), l = n.enter("strong"), a = n.createTracker(r), o = a.move(i + i);
  let s = a.move(
    n.containerPhrasing(e, {
      after: i,
      before: o,
      ...a.current()
    })
  );
  const u = s.charCodeAt(0), h = Bt(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  h.inside && (s = Ct(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), p = Bt(r.after.charCodeAt(0), c, i);
  p.inside && (s = s.slice(0, -1) + Ct(c));
  const f = a.move(i + i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: h.outside
  }, o + s + f;
}
function Np(e, t, n) {
  return n.options.strong || "*";
}
function zp(e, t, n, r) {
  return n.safe(e.value, r);
}
function Op(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function Bp(e, t, n) {
  const r = (Zl(n) + (n.options.ruleSpaces ? " " : "")).repeat(Op(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Ql = {
  blockquote: sp,
  break: oi,
  code: dp,
  definition: gp,
  emphasis: Vl,
  hardBreak: oi,
  heading: bp,
  html: jl,
  image: Ul,
  imageReference: ql,
  inlineCode: Wl,
  link: Xl,
  linkReference: Kl,
  list: Pp,
  listItem: Dp,
  paragraph: Rp,
  root: _p,
  strong: Yl,
  text: zp,
  thematicBreak: Bp
};
function Hp() {
  return {
    enter: {
      table: $p,
      tableData: si,
      tableHeader: si,
      tableRow: jp
    },
    exit: {
      codeText: Up,
      table: Vp,
      tableData: gn,
      tableHeader: gn,
      tableRow: gn
    }
  };
}
function $p(e) {
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
function Vp(e) {
  this.exit(e), this.data.inTable = void 0;
}
function jp(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function gn(e) {
  this.exit(e);
}
function si(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function Up(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, qp));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function qp(e, t) {
  return t === "|" ? t : e;
}
function Wp(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, l = n ? " " : "|";
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
      table: a,
      tableCell: s,
      tableRow: o
    }
  };
  function a(f, d, y, b) {
    return u(h(f, y, b), f.align);
  }
  function o(f, d, y, b) {
    const k = c(f, y, b), A = u([k]);
    return A.slice(0, A.indexOf(`
`));
  }
  function s(f, d, y, b) {
    const k = y.enter("tableCell"), A = y.enter("phrasing"), E = y.containerPhrasing(f, {
      ...b,
      before: l,
      after: l
    });
    return A(), k(), E;
  }
  function u(f, d) {
    return ap(f, {
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
    const A = [], E = d.enter("table");
    for (; ++k < b.length; )
      A[k] = c(b[k], d, y);
    return E(), A;
  }
  function c(f, d, y) {
    const b = f.children;
    let k = -1;
    const A = [], E = d.enter("tableRow");
    for (; ++k < b.length; )
      A[k] = s(b[k], f, d, y);
    return E(), A;
  }
  function p(f, d, y) {
    let b = Ql.inlineCode(f, d, y);
    return y.stack.includes("tableCell") && (b = b.replace(/\|/g, "\\$&")), b;
  }
}
function Gp() {
  return {
    exit: {
      taskListCheckValueChecked: ui,
      taskListCheckValueUnchecked: ui,
      paragraph: Kp
    }
  };
}
function Xp() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Zp }
  };
}
function ui(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Kp(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let l = -1, a;
      for (; ++l < i.length; ) {
        const o = i[l];
        if (o.type === "paragraph") {
          a = o;
          break;
        }
      }
      a === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function Zp(e, t, n, r) {
  const i = e.children[0], l = typeof e.checked == "boolean" && i && i.type === "paragraph", a = "[" + (e.checked ? "x" : " ") + "] ", o = n.createTracker(r);
  l && o.move(a);
  let s = Ql.listItem(e, t, n, {
    ...r,
    ...o.current()
  });
  return l && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(h) {
    return h + a;
  }
}
function Yp() {
  return [
    Pf(),
    Zf(),
    ep(),
    Hp(),
    Gp()
  ];
}
function Qp(e) {
  return {
    extensions: [
      Lf(),
      Yf(e),
      tp(),
      Wp(e),
      Xp()
    ]
  };
}
const Jp = {
  tokenize: l1,
  partial: !0
}, Jl = {
  tokenize: a1,
  partial: !0
}, ea = {
  tokenize: o1,
  partial: !0
}, ta = {
  tokenize: s1,
  partial: !0
}, e1 = {
  tokenize: u1,
  partial: !0
}, na = {
  name: "wwwAutolink",
  tokenize: r1,
  previous: ia
}, ra = {
  name: "protocolAutolink",
  tokenize: i1,
  previous: la
}, Ve = {
  name: "emailAutolink",
  tokenize: n1,
  previous: aa
}, ze = {};
function t1() {
  return {
    text: ze
  };
}
let Ke = 48;
for (; Ke < 123; )
  ze[Ke] = Ve, Ke++, Ke === 58 ? Ke = 65 : Ke === 91 && (Ke = 97);
ze[43] = Ve;
ze[45] = Ve;
ze[46] = Ve;
ze[95] = Ve;
ze[72] = [Ve, ra];
ze[104] = [Ve, ra];
ze[87] = [Ve, na];
ze[119] = [Ve, na];
function n1(e, t, n) {
  const r = this;
  let i, l;
  return a;
  function a(c) {
    return !Dn(c) || !aa.call(r, r.previous) || tr(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), o(c));
  }
  function o(c) {
    return Dn(c) ? (e.consume(c), o) : c === 64 ? (e.consume(c), s) : n(c);
  }
  function s(c) {
    return c === 46 ? e.check(e1, h, u)(c) : c === 45 || c === 95 || de(c) ? (l = !0, e.consume(c), s) : h(c);
  }
  function u(c) {
    return e.consume(c), i = !0, s;
  }
  function h(c) {
    return l && i && ye(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function r1(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a !== 87 && a !== 119 || !ia.call(r, r.previous) || tr(r.events) ? n(a) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Jp, e.attempt(Jl, e.attempt(ea, l), n), n)(a));
  }
  function l(a) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(a);
  }
}
function i1(e, t, n) {
  const r = this;
  let i = "", l = !1;
  return a;
  function a(c) {
    return (c === 72 || c === 104) && la.call(r, r.previous) && !tr(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), o) : n(c);
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
    return c === 47 ? (e.consume(c), l ? u : (l = !0, s)) : n(c);
  }
  function u(c) {
    return c === null || Nt(c) || ee(c) || Ye(c) || Wt(c) ? n(c) : e.attempt(Jl, e.attempt(ea, h), n)(c);
  }
  function h(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function l1(e, t, n) {
  let r = 0;
  return i;
  function i(a) {
    return (a === 87 || a === 119) && r < 3 ? (r++, e.consume(a), i) : a === 46 && r === 3 ? (e.consume(a), l) : n(a);
  }
  function l(a) {
    return a === null ? n(a) : t(a);
  }
}
function a1(e, t, n) {
  let r, i, l;
  return a;
  function a(u) {
    return u === 46 || u === 95 ? e.check(ta, s, o)(u) : u === null || ee(u) || Ye(u) || u !== 45 && Wt(u) ? s(u) : (l = !0, e.consume(u), a);
  }
  function o(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), a;
  }
  function s(u) {
    return i || r || !l ? n(u) : t(u);
  }
}
function o1(e, t) {
  let n = 0, r = 0;
  return i;
  function i(a) {
    return a === 40 ? (n++, e.consume(a), i) : a === 41 && r < n ? l(a) : a === 33 || a === 34 || a === 38 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 60 || a === 63 || a === 93 || a === 95 || a === 126 ? e.check(ta, t, l)(a) : a === null || ee(a) || Ye(a) ? t(a) : (e.consume(a), i);
  }
  function l(a) {
    return a === 41 && r++, e.consume(a), i;
  }
}
function s1(e, t, n) {
  return r;
  function r(o) {
    return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), l) : o === 93 ? (e.consume(o), i) : (
      // `<` is an end.
      o === 60 || // So is whitespace.
      o === null || ee(o) || Ye(o) ? t(o) : n(o)
    );
  }
  function i(o) {
    return o === null || o === 40 || o === 91 || ee(o) || Ye(o) ? t(o) : r(o);
  }
  function l(o) {
    return ye(o) ? a(o) : n(o);
  }
  function a(o) {
    return o === 59 ? (e.consume(o), r) : ye(o) ? (e.consume(o), a) : n(o);
  }
}
function u1(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), i;
  }
  function i(l) {
    return de(l) ? n(l) : t(l);
  }
}
function ia(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || ee(e);
}
function la(e) {
  return !ye(e);
}
function aa(e) {
  return !(e === 47 || Dn(e));
}
function Dn(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || de(e);
}
function tr(e) {
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
const c1 = {
  tokenize: k1,
  partial: !0
};
function h1() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: m1,
        continuation: {
          tokenize: g1
        },
        exit: y1
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: d1
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: f1,
        resolveTo: p1
      }
    }
  };
}
function f1(e, t, n) {
  const r = this;
  let i = r.events.length;
  const l = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a;
  for (; i--; ) {
    const s = r.events[i][1];
    if (s.type === "labelImage") {
      a = s;
      break;
    }
    if (s.type === "gfmFootnoteCall" || s.type === "labelLink" || s.type === "label" || s.type === "image" || s.type === "link")
      break;
  }
  return o;
  function o(s) {
    if (!a || !a._balanced)
      return n(s);
    const u = Re(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !l.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function p1(e, t) {
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
  const l = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, a = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, l.start),
    end: Object.assign({}, l.end)
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
    ["enter", l, t],
    ["enter", a, t],
    ["exit", a, t],
    ["exit", l, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...o), e;
}
function d1(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l = 0, a;
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
      l > 999 || // Closing brace with nothing.
      c === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || ee(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const p = e.exit("gfmFootnoteCallString");
      return i.includes(Re(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return ee(c) || (a = !0), l++, e.consume(c), c === 92 ? h : u;
  }
  function h(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), l++, u) : u(c);
  }
}
function m1(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l, a = 0, o;
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
      a > 999 || // Closing brace with nothing.
      d === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      d === null || d === 91 || ee(d)
    )
      return n(d);
    if (d === 93) {
      e.exit("chunkString");
      const y = e.exit("gfmFootnoteDefinitionLabelString");
      return l = Re(r.sliceSerialize(y)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(d), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
    }
    return ee(d) || (o = !0), a++, e.consume(d), d === 92 ? c : h;
  }
  function c(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), a++, h) : h(d);
  }
  function p(d) {
    return d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), i.includes(l) || i.push(l), X(e, f, "gfmFootnoteDefinitionWhitespace")) : n(d);
  }
  function f(d) {
    return t(d);
  }
}
function g1(e, t, n) {
  return e.check(Et, t, e.attempt(c1, t, n));
}
function y1(e) {
  e.exit("gfmFootnoteDefinition");
}
function k1(e, t, n) {
  const r = this;
  return X(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "gfmFootnoteDefinitionIndent" && a[2].sliceSerialize(a[1], !0).length === 4 ? t(l) : n(l);
  }
}
function x1(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: l,
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
  function i(a, o) {
    let s = -1;
    for (; ++s < a.length; )
      if (a[s][0] === "enter" && a[s][1].type === "strikethroughSequenceTemporary" && a[s][1]._close) {
        let u = s;
        for (; u--; )
          if (a[u][0] === "exit" && a[u][1].type === "strikethroughSequenceTemporary" && a[u][1]._open && // If the sizes are the same:
          a[s][1].end.offset - a[s][1].start.offset === a[u][1].end.offset - a[u][1].start.offset) {
            a[s][1].type = "strikethroughSequence", a[u][1].type = "strikethroughSequence";
            const h = {
              type: "strikethrough",
              start: Object.assign({}, a[u][1].start),
              end: Object.assign({}, a[s][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, a[u][1].end),
              end: Object.assign({}, a[s][1].start)
            }, p = [["enter", h, o], ["enter", a[u][1], o], ["exit", a[u][1], o], ["enter", c, o]], f = o.parser.constructs.insideSpan.null;
            f && Ae(p, p.length, 0, Gt(f, a.slice(u + 1, s), o)), Ae(p, p.length, 0, [["exit", c, o], ["enter", a[s][1], o], ["exit", a[s][1], o], ["exit", h, o]]), Ae(a, u - 1, s - u + 3, p), s = u + p.length - 2;
            break;
          }
      }
    for (s = -1; ++s < a.length; )
      a[s][1].type === "strikethroughSequenceTemporary" && (a[s][1].type = "data");
    return a;
  }
  function l(a, o, s) {
    const u = this.previous, h = this.events;
    let c = 0;
    return p;
    function p(d) {
      return u === 126 && h[h.length - 1][1].type !== "characterEscape" ? s(d) : (a.enter("strikethroughSequenceTemporary"), f(d));
    }
    function f(d) {
      const y = st(u);
      if (d === 126)
        return c > 1 ? s(d) : (a.consume(d), c++, f);
      if (c < 2 && !n) return s(d);
      const b = a.exit("strikethroughSequenceTemporary"), k = st(d);
      return b._open = !k || k === 2 && !!y, b._close = !y || y === 2 && !!k, o(d);
    }
  }
}
class b1 {
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
    w1(this, t, n, r);
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
    if (this.map.sort(function(l, a) {
      return l[0] - a[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push(t.slice()), t.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const l of i)
        t.push(l);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function w1(e, t, n, r) {
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
function C1(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const l = r.length - 1;
          r[l] = r[l] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function S1() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: E1,
        resolveAll: A1
      }
    }
  };
}
function E1(e, t, n) {
  const r = this;
  let i = 0, l = 0, a;
  return o;
  function o(x) {
    let P = r.events.length - 1;
    for (; P > -1; ) {
      const T = r.events[P][1].type;
      if (T === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      T === "linePrefix") P--;
      else break;
    }
    const L = P > -1 ? r.events[P][1].type : null, B = L === "tableHead" || L === "tableRow" ? w : s;
    return B === w && r.parser.lazy[r.now().line] ? n(x) : B(x);
  }
  function s(x) {
    return e.enter("tableHead"), e.enter("tableRow"), u(x);
  }
  function u(x) {
    return x === 124 || (a = !0, l += 1), h(x);
  }
  function h(x) {
    return x === null ? n(x) : F(x) ? l > 1 ? (l = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), f) : n(x) : U(x) ? X(e, h, "whitespace")(x) : (l += 1, a && (a = !1, i += 1), x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), a = !0, h) : (e.enter("data"), c(x)));
  }
  function c(x) {
    return x === null || x === 124 || ee(x) ? (e.exit("data"), h(x)) : (e.consume(x), x === 92 ? p : c);
  }
  function p(x) {
    return x === 92 || x === 124 ? (e.consume(x), c) : c(x);
  }
  function f(x) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(x) : (e.enter("tableDelimiterRow"), a = !1, U(x) ? X(e, d, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(x) : d(x));
  }
  function d(x) {
    return x === 45 || x === 58 ? b(x) : x === 124 ? (a = !0, e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), y) : R(x);
  }
  function y(x) {
    return U(x) ? X(e, b, "whitespace")(x) : b(x);
  }
  function b(x) {
    return x === 58 ? (l += 1, a = !0, e.enter("tableDelimiterMarker"), e.consume(x), e.exit("tableDelimiterMarker"), k) : x === 45 ? (l += 1, k(x)) : x === null || F(x) ? D(x) : R(x);
  }
  function k(x) {
    return x === 45 ? (e.enter("tableDelimiterFiller"), A(x)) : R(x);
  }
  function A(x) {
    return x === 45 ? (e.consume(x), A) : x === 58 ? (a = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(x), e.exit("tableDelimiterMarker"), E) : (e.exit("tableDelimiterFiller"), E(x));
  }
  function E(x) {
    return U(x) ? X(e, D, "whitespace")(x) : D(x);
  }
  function D(x) {
    return x === 124 ? d(x) : x === null || F(x) ? !a || i !== l ? R(x) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(x)) : R(x);
  }
  function R(x) {
    return n(x);
  }
  function w(x) {
    return e.enter("tableRow"), z(x);
  }
  function z(x) {
    return x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), z) : x === null || F(x) ? (e.exit("tableRow"), t(x)) : U(x) ? X(e, z, "whitespace")(x) : (e.enter("data"), q(x));
  }
  function q(x) {
    return x === null || x === 124 || ee(x) ? (e.exit("data"), z(x)) : (e.consume(x), x === 92 ? j : q);
  }
  function j(x) {
    return x === 92 || x === 124 ? (e.consume(x), q) : q(x);
  }
}
function A1(e, t) {
  let n = -1, r = !0, i = 0, l = [0, 0, 0, 0], a = [0, 0, 0, 0], o = !1, s = 0, u, h, c;
  const p = new b1();
  for (; ++n < e.length; ) {
    const f = e[n], d = f[1];
    f[0] === "enter" ? d.type === "tableHead" ? (o = !1, s !== 0 && (ci(p, t, s, u, h), h = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, d.start),
      // Note: correct end is set later.
      end: Object.assign({}, d.end)
    }, p.add(n, 0, [["enter", u, t]])) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (r = !0, c = void 0, l = [0, 0, 0, 0], a = [0, n + 1, 0, 0], o && (o = !1, h = {
      type: "tableBody",
      start: Object.assign({}, d.start),
      // Note: correct end is set later.
      end: Object.assign({}, d.end)
    }, p.add(n, 0, [["enter", h, t]])), i = d.type === "tableDelimiterRow" ? 2 : h ? 3 : 1) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") ? (r = !1, a[2] === 0 && (l[1] !== 0 && (a[0] = a[1], c = Pt(p, t, l, i, void 0, c), l = [0, 0, 0, 0]), a[2] = n)) : d.type === "tableCellDivider" && (r ? r = !1 : (l[1] !== 0 && (a[0] = a[1], c = Pt(p, t, l, i, void 0, c)), l = a, a = [l[1], n, 0, 0])) : d.type === "tableHead" ? (o = !0, s = n) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (s = n, l[1] !== 0 ? (a[0] = a[1], c = Pt(p, t, l, i, n, c)) : a[1] !== 0 && (c = Pt(p, t, a, i, n, c)), i = 0) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") && (a[3] = n);
  }
  for (s !== 0 && ci(p, t, s, u, h), p.consume(t.events), n = -1; ++n < t.events.length; ) {
    const f = t.events[n];
    f[0] === "enter" && f[1].type === "table" && (f[1]._align = C1(t.events, n));
  }
  return e;
}
function Pt(e, t, n, r, i, l) {
  const a = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", o = "tableContent";
  n[0] !== 0 && (l.end = Object.assign({}, rt(t.events, n[0])), e.add(n[0], 0, [["exit", l, t]]));
  const s = rt(t.events, n[1]);
  if (l = {
    type: a,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", l, t]]), n[2] !== 0) {
    const u = rt(t.events, n[2]), h = rt(t.events, n[3]), c = {
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
  return i !== void 0 && (l.end = Object.assign({}, rt(t.events, i)), e.add(i, 0, [["exit", l, t]]), l = void 0), l;
}
function ci(e, t, n, r, i) {
  const l = [], a = rt(t.events, n);
  i && (i.end = Object.assign({}, a), l.push(["exit", i, t])), r.end = Object.assign({}, a), l.push(["exit", r, t]), e.add(n + 1, 0, l);
}
function rt(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const v1 = {
  name: "tasklistCheck",
  tokenize: T1
};
function I1() {
  return {
    text: {
      91: v1
    }
  };
}
function T1(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), l)
    );
  }
  function l(s) {
    return ee(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), a) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), a) : n(s);
  }
  function a(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), o) : n(s);
  }
  function o(s) {
    return F(s) ? t(s) : U(s) ? e.check({
      tokenize: P1
    }, t, n)(s) : n(s);
  }
}
function P1(e, t, n) {
  return X(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function L1(e) {
  return gl([
    t1(),
    h1(),
    x1(e),
    S1(),
    I1()
  ]);
}
const D1 = {};
function R1(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || D1, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), a = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(L1(n)), l.push(Yp()), a.push(Qp(n));
}
const nr = Z(({ content: e }) => /* @__PURE__ */ S("div", { className: "elitea-assistant-markdown", children: /* @__PURE__ */ S(xf, { remarkPlugins: [R1], children: e }) }));
nr.displayName = "MarkdownContent";
const F1 = {
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
}, _1 = {
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
}, M1 = {
  light: F1,
  dark: _1
}, N1 = (e, t) => ({
  ...M1[e],
  ...t
}), z1 = (e) => ({
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
}), O1 = pa((e, t) => {
  const {
    apiUrl: n,
    token: r,
    withCredentials: i = !1,
    socketPath: l = "/socket.io/",
    apiAdapter: a,
    title: o = "Elitea Assistant",
    placeholder: s = "Type a message...",
    welcomeMessage: u = `Hi! I'm your ELITEA Support Assistant.
Ask me anything about ELITEA or report any issues you're experiencing. I have context about your current screen and settings.`,
    position: h = "bottom-right",
    theme: c = "light",
    colors: p,
    supportAssistantContext: f
  } = e, d = Ue(() => z1(N1(c, p)), [c, p]), y = Ue(() => {
    if (a) return a;
    if (n && (r || i)) return ya(n, { token: r, withCredentials: i });
    throw new Error(
      "EliteaAssistant: provide either apiAdapter, or apiUrl with token, or apiUrl with withCredentials"
    );
  }, [a, n, r, i]), b = Ue(
    () => ({
      url: n ? Da(n) : "",
      path: l,
      token: r,
      withCredentials: i
    }),
    [n, l, r, i]
  ), k = Mo(b), {
    title: A,
    welcomeMessage: E,
    placeholder: D,
    supportProjectId: R,
    user: w,
    history: z,
    lastConversation: q,
    isLoading: j
  } = _a({
    api: y,
    title: o,
    welcomeMessage: u,
    placeholder: s
  }), { isOpen: x, isExpanded: P, open: L, close: B, toggle: T, expandFullscreen: _, collapseFullscreen: V, toggleFullscreen: te } = Sa(), oe = Fo(), { popupVissible: ge, showPopup: m, hidePopup: pe, popupText: ke } = Ma(x), g = $(() => {
    oe.captureScreenshot(), m();
  }, [oe, m]), ue = $(() => {
    oe.clearScreenshot(), pe();
  }, [oe, pe]);
  return da(
    t,
    () => ({
      open: L,
      close: B,
      toggle: T,
      expandFullscreen: _,
      collapseFullscreen: V,
      toggleFullscreen: te,
      showPopup: g,
      hidePopup: ue,
      isOpen: () => x,
      isExpanded: () => P
    }),
    [
      x,
      P,
      L,
      B,
      T,
      _,
      V,
      te,
      g,
      ue
    ]
  ), /* @__PURE__ */ S(Di.Provider, { value: y, children: /* @__PURE__ */ S(Wi.Provider, { value: k, children: /* @__PURE__ */ S(Gi.Provider, { value: f ?? null, children: /* @__PURE__ */ S(qi.Provider, { value: oe, children: /* @__PURE__ */ ae(
    "div",
    {
      className: `elitea-assistant-container elitea-assistant-container--${h}`,
      style: d,
      children: [
        /* @__PURE__ */ S(
          Xi,
          {
            title: A,
            placeholder: D,
            welcomeMessage: E,
            avatar: w.avatar,
            supportProjectId: R,
            initialHistory: z,
            lastConversation: q,
            isInitLoading: j,
            isOpen: x,
            onClose: B,
            expanded: P,
            onExpand: te
          }
        ),
        ge && !x && /* @__PURE__ */ S(
          Ki,
          {
            message: ke,
            onClose: ue
          }
        ),
        /* @__PURE__ */ S(wi, { onClick: T })
      ]
    }
  ) }) }) }) });
});
O1.displayName = "EliteaAssistant";
export {
  O1 as EliteaAssistant,
  ya as createDefaultAdapter
};
//# sourceMappingURL=elitea-assistant.js.map
