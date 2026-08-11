(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";.elitea-assistant-container{position:fixed;z-index:2147483647;font-family:Montserrat,sans-serif;font-size:.875rem;line-height:1.5;box-sizing:border-box}.elitea-assistant-container *,.elitea-assistant-container *:before,.elitea-assistant-container *:after{box-sizing:border-box}.elitea-assistant-container--bottom-right{bottom:.75rem;right:1.09375rem}.elitea-assistant-container--bottom-left{bottom:.75rem;left:1.09375rem}.elitea-assistant-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-button-bg);color:var(--elitea-assistant-button-icon);box-shadow:0 .25rem .75rem #00000026;transition:transform .2s ease,box-shadow .2s ease;padding:0}.elitea-assistant-button:hover{transform:scale(1.08);box-shadow:0 .375rem 1.25rem #0003}.elitea-assistant-button svg{width:1.75rem;height:1.75rem;fill:currentColor}.elitea-assistant-window{position:absolute;bottom:0rem;width:28.75rem;height:30rem;border-radius:1rem;overflow:hidden;display:flex;flex-direction:column;box-shadow:var(--elitea-assistant-window-shadow);background:var(--elitea-assistant-chat-bg);border:.0625rem solid var(--elitea-assistant-window-border);animation:elitea-assistant-slide-up .25s ease-out}.elitea-assistant-container--bottom-right .elitea-assistant-window{right:2.875rem}.elitea-assistant-container--bottom-left .elitea-assistant-window{left:2.875rem}@keyframes elitea-assistant-slide-up{0%{opacity:0;transform:translateY(.75rem)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483646;background:#00000080;display:flex;align-items:center;justify-content:center;animation:elitea-assistant-fade-in .2s ease-out}@keyframes elitea-assistant-fade-in{0%{opacity:0}to{opacity:1}}.elitea-assistant-window.elitea-assistant-window--expanded{position:fixed;top:0;right:0;bottom:0;left:0;margin:auto;width:45rem;height:42.375rem;max-width:calc(100vw - 2rem);max-height:calc(100vh - 2rem);z-index:99999999999;animation:elitea-assistant-scale-in .2s ease-out}@media (max-width: 48rem){.elitea-assistant-window.elitea-assistant-window--expanded{width:calc(100vw - 2rem);height:calc(100vh - 2rem);border-radius:.75rem}}@keyframes elitea-assistant-scale-in{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.elitea-assistant-header{display:flex;align-items:center;justify-content:space-between;height:3.25rem;padding:0 1rem;background:var(--elitea-assistant-header-bg);color:var(--elitea-assistant-header-text);flex-shrink:0;border-bottom:.0625rem solid var(--elitea-assistant-window-border)}.elitea-assistant-header-left,.elitea-assistant-header-right{display:flex;align-items:center;gap:.5rem}.elitea-assistant-header-title{font-size:.9375rem;font-weight:600;margin:0;white-space:nowrap}.elitea-assistant-header-action{border:.0625rem solid transparent;color:var(--elitea-assistant-header-text);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;width:1.75rem;height:1.75rem;min-width:auto;box-shadow:none;background:var(--elitea-assistant-header-action-bg);transition:background .15s ease,color .15s ease,border-color .15s ease}.elitea-assistant-header-close-action{border:none;color:var(--elitea-assistant-header-close-icon);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;width:1.75rem;height:1.75rem;min-width:auto;background:var(--elitea-assistant-header-close-bg);transition:background .15s ease,color .15s ease}.elitea-assistant-header-close-action:hover{background:var(--elitea-assistant-header-close-hover-bg);color:var(--elitea-assistant-header-close-hover-color)}.elitea-assistant-header-close-action:active{background:var(--elitea-assistant-header-close-active-bg);color:var(--elitea-assistant-header-close-active-color)}.elitea-assistant-header-close-action:disabled{background:var(--elitea-assistant-header-close-disabled-bg);color:var(--elitea-assistant-header-close-disabled-color);cursor:not-allowed}.elitea-assistant-header-action:hover{background:var(--elitea-assistant-header-action-hover-bg)}.elitea-assistant-header-action:active{background:var(--elitea-assistant-header-action-active-bg);color:var(--elitea-assistant-header-action-active-color);border-color:var(--elitea-assistant-header-action-active-border)}.elitea-assistant-header-action svg{width:1rem;height:1rem;fill:currentColor}.elitea-assistant-header-close-action svg{width:1.3rem;height:1.3rem;fill:currentColor}.elitea-assistant-history-wrapper{position:relative}.elitea-assistant-header-action:disabled{background:var(--elitea-assistant-header-action-disabled-bg);color:var(--elitea-assistant-header-action-disabled-color);cursor:not-allowed}.elitea-assistant-header-action:disabled:hover{background:var(--elitea-assistant-header-action-disabled-bg)}.elitea-assistant-history-dropdown{position:absolute;top:calc(100% + .55rem);right:-2.65rem;width:19.125rem;max-height:21.875rem;background:var(--elitea-assistant-chat-bg);border:.0625rem solid var(--elitea-assistant-history-dropdown-border);border-radius:.5rem;box-shadow:var(--elitea-assistant-history-dropdown-shadow);z-index:100;padding:.5rem 0}.elitea-assistant-history-dropdown-scroll{max-height:20.875rem;overflow-y:auto}.elitea-assistant-history-item{display:block;width:100%;padding:.5rem .75rem;border:none;background:none;cursor:pointer;text-align:left;color:var(--elitea-assistant-header-text);font-size:.875rem;font-weight:400;line-height:1.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:background .15s ease}.elitea-assistant-history-item:hover{background:var(--elitea-assistant-history-dropdown-hover-bg)}.elitea-assistant-history-item:disabled{opacity:.45;cursor:default;background:none}.elitea-assistant-messages{flex:1;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:.625rem}.elitea-assistant-message-wrapper{display:flex;flex-direction:column;max-width:80%}.elitea-assistant-message-wrapper--user{align-self:flex-end}.elitea-assistant-message-wrapper--assistant{align-self:flex-start}.elitea-assistant-message-meta{display:flex;align-items:center;gap:.375rem;margin-bottom:.375rem}.elitea-assistant-message-meta--assistant{justify-content:flex-start}.elitea-assistant-message-meta--user{justify-content:flex-end}.elitea-assistant-message-avatar{width:1.5rem;height:1.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.elitea-assistant-message-avatar--assistant{background:var(--elitea-assistant-button-bg);color:var(--elitea-assistant-button-icon)}.elitea-assistant-message-avatar--user{background:var(--elitea-assistant-user-avatar-bg);color:var(--elitea-assistant-user-avatar-icon)}.elitea-assistant-message-avatar svg{width:1.25rem;height:1.25rem;fill:currentColor}.elitea-assistant-message-avatar img{width:100%;height:100%;border-radius:50%;object-fit:cover}.elitea-assistant-message-time{font-size:.75rem;opacity:.6;color:var(--elitea-assistant-bot-msg-text)}.elitea-assistant-message{padding:.625rem .875rem;border-radius:.75rem;word-wrap:break-word;font-weight:400;font-style:Regular;font-size:.875rem;line-height:1.5rem;letter-spacing:0%}.elitea-assistant-message--user{white-space:pre-wrap;background:var(--elitea-assistant-user-msg-bg);color:var(--elitea-assistant-user-msg-text);border-radius:1rem 0rem 1rem 1rem}.elitea-assistant-message--assistant{background:var(--elitea-assistant-bot-msg-bg);color:var(--elitea-assistant-bot-msg-text);border-radius:0 1rem 1rem;position:relative;padding-bottom:1.5rem}.elitea-assistant-message--assistant>.elitea-assistant-tooltip-trigger{position:absolute;bottom:.375rem;right:.375rem;opacity:0;transition:opacity .15s ease}.elitea-assistant-message--assistant:hover>.elitea-assistant-tooltip-trigger{opacity:1}.elitea-assistant-message--error{border:1px solid #e53e3e;opacity:.9}@keyframes elitea-assistant-typing-bounce{0%,60%,to{transform:translateY(0);opacity:.25}30%{transform:translateY(-.25rem);opacity:.5}}.elitea-assistant-typing-indicator{display:inline-flex;align-items:center;gap:.1875rem;padding:.125rem 0}.elitea-assistant-typing-dot{width:.25rem;height:.25rem;border-radius:50%;background:var(--elitea-assistant-bot-msg-text);opacity:.25;animation:elitea-assistant-typing-bounce 1.2s ease-in-out infinite}.elitea-assistant-typing-dot:nth-child(2){animation-delay:.15s}.elitea-assistant-typing-dot:nth-child(3){animation-delay:.3s}@keyframes elitea-assistant-shimmer{0%{opacity:.4}50%{opacity:.7}to{opacity:.4}}.elitea-assistant-skeleton-row{display:flex;flex-direction:column;gap:.375rem;max-width:70%}.elitea-assistant-skeleton-row--left{align-self:flex-start}.elitea-assistant-skeleton-row--right{align-self:flex-end}.elitea-assistant-skeleton-meta{display:flex;align-items:center;gap:.375rem}.elitea-assistant-skeleton-row--right .elitea-assistant-skeleton-meta{justify-content:flex-end}.elitea-assistant-skeleton{background:var(--elitea-assistant-bot-msg-bg);border-radius:.5rem;animation:elitea-assistant-shimmer 1.4s ease-in-out infinite}.elitea-assistant-skeleton--avatar{width:1.5rem;height:1.5rem;border-radius:50%;flex-shrink:0}.elitea-assistant-skeleton--time{width:2.5rem;height:.75rem;border-radius:.25rem}.elitea-assistant-skeleton--bubble{width:10rem;height:2.5rem;border-radius:.75rem}.elitea-assistant-skeleton-row--right .elitea-assistant-skeleton--bubble{width:8rem}.elitea-assistant-empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--elitea-assistant-bot-msg-text);opacity:.5;font-size:.8125rem;text-align:center;padding:1.25rem}@keyframes elitea-assistant-wave{0%,to{opacity:1}50%{opacity:.3}}.elitea-assistant-status-message{margin-bottom:.375rem;font-weight:400;font-size:.875rem;line-height:1.25rem;color:var(--elitea-assistant-bot-msg-text);opacity:.7}.elitea-assistant-status-message-char{display:inline-block;animation:elitea-assistant-wave 2s ease-in-out infinite}.elitea-assistant-markdown{overflow-wrap:break-word}.elitea-assistant-markdown>:first-child{margin-top:0}.elitea-assistant-markdown>:last-child{margin-bottom:0}.elitea-assistant-markdown p{margin:.5em 0}.elitea-assistant-markdown h1,.elitea-assistant-markdown h2,.elitea-assistant-markdown h3,.elitea-assistant-markdown h4,.elitea-assistant-markdown h5,.elitea-assistant-markdown h6{margin:.75em 0 .375em;font-weight:600;line-height:1.3}.elitea-assistant-markdown h1{font-size:1.25em}.elitea-assistant-markdown h2{font-size:1.125em}.elitea-assistant-markdown h3{font-size:1em}.elitea-assistant-markdown ul,.elitea-assistant-markdown ol{margin:.5em 0;padding-left:1.5em}.elitea-assistant-markdown li{margin:.25em 0}.elitea-assistant-markdown li>ul,.elitea-assistant-markdown li>ol{margin:.125em 0}.elitea-assistant-markdown code{background:#0000000f;padding:.125em .3em;border-radius:.25em;font-size:.85em;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,monospace}.elitea-assistant-markdown pre{margin:.5em 0;padding:.625em .75em;background:#0000000f;border-radius:.375em;overflow-x:auto}.elitea-assistant-markdown pre code{background:none;padding:0;font-size:.8125em;white-space:pre}.elitea-assistant-markdown blockquote{margin:.5em 0;padding:.25em .75em;border-left:3px solid rgba(0,0,0,.15);opacity:.85}.elitea-assistant-markdown blockquote>:first-child{margin-top:0}.elitea-assistant-markdown blockquote>:last-child{margin-bottom:0}.elitea-assistant-markdown hr{border:none;border-top:1px solid rgba(0,0,0,.1);margin:.75em 0}.elitea-assistant-markdown table{border-collapse:collapse;margin:.5em 0;font-size:.85em;width:100%}.elitea-assistant-markdown th,.elitea-assistant-markdown td{border:1px solid rgba(0,0,0,.1);padding:.375em .625em;text-align:left}.elitea-assistant-markdown th{font-weight:600;background:#00000008}.elitea-assistant-markdown a{color:var(--elitea-assistant-button-bg);text-decoration:underline}.elitea-assistant-markdown strong{font-weight:600}.elitea-assistant-markdown img{max-width:100%;border-radius:.375em}.elitea-assistant-img-btn{display:inline-block;padding:0;margin:0;background:none;border:none;cursor:zoom-in;border-radius:.375em;transition:opacity .15s ease}.elitea-assistant-img-btn:hover{opacity:.88}.elitea-assistant-img-btn:focus-visible{outline:2px solid var(--elitea-assistant-button-bg, #6366f1);outline-offset:2px}.elitea-assistant-img-btn img{display:block}.elitea-assistant-lightbox-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483647;background:#000000d1;display:flex;align-items:center;justify-content:center;cursor:zoom-out;animation:elitea-lightbox-fade-in .15s ease}@keyframes elitea-lightbox-fade-in{0%{opacity:0}to{opacity:1}}.elitea-assistant-lightbox-img{max-width:90vw;max-height:90vh;border-radius:.5em;box-shadow:0 8px 40px #0009;cursor:default;object-fit:contain}.elitea-assistant-lightbox-close{position:fixed;top:1rem;right:1.25rem;background:#ffffff26;border:none;border-radius:50%;width:2rem;height:2rem;color:#fff;font-size:.875rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s ease}.elitea-assistant-lightbox-close:hover{background:#ffffff47}.elitea-assistant-lightbox-close:focus-visible{outline:2px solid #fff;outline-offset:2px}.elitea-assistant-input-area{display:flex;flex-direction:column;padding:.75rem;background:var(--elitea-assistant-input-bg);flex-shrink:0;border-top:.0625rem solid var(--elitea-assistant-window-border);position:relative}.elitea-assistant-input-area--drag-over>*:not(.elitea-assistant-drop-overlay){visibility:hidden}.elitea-assistant-drop-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;border:2px dashed var(--elitea-assistant-send-btn-bg);border-radius:0 0 1rem 1rem;color:var(--elitea-assistant-input-text);font-size:.875rem;z-index:10}.elitea-assistant-input-row{display:flex;align-items:center;gap:.5rem;width:100%}.elitea-assistant-input{flex:1;padding:.5rem .25rem;border:none;border-radius:0;background:transparent;color:var(--elitea-assistant-input-text);font-size:.875rem;font-family:inherit;outline:none;resize:none;overflow-y:auto;max-height:8rem}.elitea-assistant-input::placeholder{color:var(--elitea-assistant-input-placeholder);opacity:1}.elitea-assistant-attach-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-header-action-bg);color:var(--elitea-assistant-header-text);flex-shrink:0;transition:opacity .15s ease;padding:0;opacity:.8}.elitea-assistant-attach-button:hover{opacity:1}.elitea-assistant-attach-button svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-send-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-send-btn-bg);color:var(--elitea-assistant-send-btn-icon);flex-shrink:0;transition:background .15s ease;padding:0}.elitea-assistant-send-button:disabled{background:var(--elitea-assistant-send-btn-disabled-bg);cursor:default}.elitea-assistant-send-button svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-file-list{display:flex;align-items:center;gap:.5rem;padding-bottom:.5rem}.elitea-assistant-file-chip{display:flex;align-items:center;gap:.75rem;max-width:11.25rem;height:2.25rem;padding:.375rem .75rem;border-radius:.5rem;background:var(--elitea-assistant-header-action-bg);flex-shrink:0}.elitea-assistant-file-chip-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--elitea-assistant-header-close-icon)}.elitea-assistant-file-chip-icon svg{width:.75rem;height:.875rem}.elitea-assistant-file-chip-name{flex:1;min-width:0;font-size:.75rem;color:var(--elitea-assistant-input-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.elitea-assistant-file-chip-remove{display:flex;align-items:center;justify-content:center;width:1rem;height:1rem;padding:0;border:none;background:none;cursor:pointer;color:var(--elitea-assistant-header-close-icon);flex-shrink:0;opacity:.7;transition:opacity .15s ease}.elitea-assistant-file-chip-remove:hover{opacity:1}.elitea-assistant-file-chip-remove svg{width:2rem;height:2rem;fill:currentColor}.elitea-assistant-file-chip--count{font-size:.75rem;font-weight:400;color:var(--elitea-assistant-input-text);max-width:none;gap:0}.elitea-assistant-file-chip--error{border:1px solid var(--elitea-assistant-error-color, #ef4444);background:var(--elitea-assistant-error-bg, rgba(239, 68, 68, .1))}.elitea-assistant-file-chip--completed .elitea-assistant-file-chip-icon{color:var(--elitea-assistant-success-color, #22c55e)}.elitea-assistant-file-chip-progress-text{width:1.5625rem;font-size:.625rem;color:var(--elitea-assistant-input-text);flex-shrink:0;text-align:right}.elitea-assistant-file-chip-error-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--elitea-assistant-error-color, #ef4444)}.elitea-assistant-file-chip-error-icon svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-file-chip-icon .elitea-assistant-file-chip-spinner{width:1.25rem;height:1.25rem;flex-shrink:0;color:var(--elitea-assistant-send-btn-bg)}.elitea-assistant-file-chip-spinner-progress{transition:stroke-dashoffset .15s ease}.elitea-assistant-attach-button:disabled{opacity:.5;cursor:not-allowed}.elitea-assistant-tooltip-trigger{display:inline-flex}.elitea-assistant-tooltip{position:fixed;z-index:2147483647;padding:.25rem .5rem;border-radius:.25rem;background:#e9ebf0;color:#0e131d;font-size:.6875rem;line-height:1.3;font-weight:500;font-family:Montserrat,sans-serif;max-width:20rem;word-wrap:break-word;pointer-events:none;box-shadow:0 0 0 .0625rem #00000014,0 .125rem .5rem #0000001f;transition:opacity .15s ease}@keyframes elitea-tooltip-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-popup{position:absolute;bottom:.25rem;display:flex;align-items:center;gap:1rem;padding:.75rem .75rem .75rem 1.25rem;border-radius:1.5rem 1.5rem 1.5rem 0;background:var(--elitea-assistant-popup-bg);color:var(--elitea-assistant-popup-text);font-size:.875rem;font-weight:500;line-height:1.5rem;white-space:nowrap;box-shadow:0 .25rem 1rem #0003;animation:elitea-assistant-popup-in .3s ease-out}.elitea-assistant-popup:before{content:"";position:absolute;top:-.0625rem;right:-.0625rem;bottom:-.0625rem;left:-.0625rem;border-radius:inherit;padding:.0625rem;background:var(--elitea-assistant-popup-border);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none}.elitea-assistant-container--bottom-right .elitea-assistant-popup{right:2.5rem;flex-direction:row-reverse;padding:.75rem 1.25rem .75rem .75rem;border-radius:1.5rem 1.5rem 0}.elitea-assistant-container--bottom-left .elitea-assistant-popup{left:2.5rem}.elitea-assistant-popup-text{-webkit-user-select:none;user-select:none}.elitea-assistant-popup-close{display:flex;align-items:center;justify-content:center;width:1.75rem;height:1.75rem;flex-shrink:0;border:none;border-radius:50%;background:var(--elitea-assistant-popup-close-bg);color:var(--elitea-assistant-popup-text);cursor:pointer;padding:0;transition:background .15s ease}.elitea-assistant-popup-close:hover{background:var(--elitea-assistant-popup-close-hover-bg)}.elitea-assistant-popup-close svg{width:1rem;height:1rem;fill:currentColor}@keyframes elitea-assistant-popup-in{0%{opacity:0;transform:translateY(.5rem)}to{opacity:1;transform:translateY(0)}}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { jsx as S, jsxs as me, Fragment as Un } from "react/jsx-runtime";
import { memo as fe, useState as pe, useCallback as q, useRef as Ae, useLayoutEffect as Cs, useEffect as Ke, useMemo as St, createContext as dn, useContext as mn, forwardRef as Es, useImperativeHandle as Ss } from "react";
import { createPortal as ia } from "react-dom";
import { io as Ts } from "socket.io-client";
const Jt = (e, t = !1) => ({
  ...e.token && { Authorization: `Bearer ${e.token}` },
  ...t && { "Content-Type": "application/json" }
}), en = (e) => e.withCredentials ? "include" : void 0, tn = async (e) => {
  if (!e.ok) throw new Error(`${e.status} ${e.statusText}`);
  return e;
}, As = (e, t = {}) => ({
  getConfig: () => fetch(`${e}/config/`, {
    headers: Jt(t),
    credentials: en(t)
  }).then(tn).then((n) => n.json()),
  getConversations: () => fetch(`${e}/conversations/`, {
    headers: Jt(t),
    credentials: en(t)
  }).then(tn).then((n) => n.json()),
  getConversation: (n) => fetch(`${e}/conversation/${n}`, {
    headers: Jt(t),
    credentials: en(t)
  }).then(tn).then((r) => r.json()),
  createConversation: () => fetch(`${e}/conversations/`, {
    method: "POST",
    headers: Jt(t, !0),
    credentials: en(t),
    body: JSON.stringify({})
  }).then(tn).then((n) => n.json()),
  deleteConversation: (n) => fetch(`${e}/conversation/${n}`, {
    method: "DELETE",
    headers: Jt(t),
    credentials: en(t)
  }).then(tn).then(() => {
  }),
  uploadFile: (n, r, i) => new Promise((o, a) => {
    const l = new XMLHttpRequest();
    i && l.upload.addEventListener("progress", (s) => {
      s.lengthComputable && i(s.loaded, s.total);
    }), l.addEventListener("load", () => {
      if (l.status >= 200 && l.status < 300)
        try {
          o(JSON.parse(l.responseText));
        } catch {
          a(new Error("Failed to parse upload response"));
        }
      else
        try {
          const s = JSON.parse(l.responseText);
          a(new Error(s.error || `Upload failed with status: ${l.status}`));
        } catch {
          a(new Error(`Upload failed with status: ${l.status}`));
        }
    }), l.addEventListener("error", () => a(new Error("Upload failed due to network error"))), l.addEventListener("abort", () => a(new Error("Upload was aborted"))), l.open("POST", `${e}/attachments/${n}`), t.token && l.setRequestHeader("Authorization", `Bearer ${t.token}`), t.withCredentials && (l.withCredentials = !0), l.send(r);
  })
}), Yr = fe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M14.2499 4.375C14.8319 4.375 15.3037 4.84137 15.3037 5.41666C15.3037 5.87017 15.0104 6.25575 14.6012 6.39877V8.26399H14.9524C15.5109 8.26399 15.9675 8.69328 16.0037 9.23621H18.2544C20.5477 9.23621 22.4397 10.9331 22.7159 13.1259C23.2816 13.1443 23.7344 13.6031 23.7344 14.1667V15.6945C23.7343 16.2697 23.2625 16.7362 22.6805 16.7362C22.6637 16.7362 22.6469 16.7356 22.6302 16.7348C22.2147 18.5198 20.7287 19.6036 18.2544 20.0695C15.3037 20.625 9.26175 21.875 9.26175 21.875L10.1048 20.0695C8.0024 20.0695 6.23719 18.643 5.74513 16.7159C5.67822 16.7291 5.60903 16.7362 5.53821 16.7362C4.95623 16.7362 4.48444 16.2697 4.48438 15.6945V14.1667C4.48438 13.5914 4.95619 13.1251 5.53821 13.1251C5.57345 13.1251 5.60828 13.1267 5.64263 13.1301C5.91693 10.9353 7.81012 9.23621 10.1048 9.23621H12.3556C12.3917 8.69328 12.8484 8.26399 13.4068 8.26399H13.7581V6.33788C13.4239 6.1632 13.1961 5.81633 13.1961 5.41666C13.1961 4.84137 13.6679 4.375 14.2499 4.375ZM11.2289 11.3195C9.44405 11.3195 7.99715 12.7497 7.99715 14.5139V14.6528C7.99721 16.417 9.44409 17.8473 11.2289 17.8473H17.1304C18.9152 17.8473 20.362 16.417 20.3621 14.6528V14.5139C20.3621 12.7497 18.9152 11.3195 17.1304 11.3195H11.2289ZM11.4397 13.5416C12.0217 13.5416 12.4935 14.008 12.4935 14.5833C12.4935 15.1585 12.0217 15.6249 11.4397 15.6249C10.8577 15.6249 10.3858 15.1585 10.3858 14.5833C10.3858 14.008 10.8577 13.5416 11.4397 13.5416ZM16.9196 13.5416C17.5016 13.5416 17.9734 14.008 17.9734 14.5833C17.9734 15.1585 17.5016 15.6249 16.9196 15.6249C16.3376 15.6249 15.8658 15.1585 15.8658 14.5833C15.8658 14.008 16.3376 13.5416 16.9196 13.5416Z" })
  }
));
Yr.displayName = "AssistantIcon";
const oa = fe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 12 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M11.5876 6.6172C11.6361 6.66719 11.6746 6.72656 11.7008 6.7919C11.7271 6.85725 11.7406 6.9273 11.7406 6.99804C11.7406 7.06878 11.7271 7.13883 11.7008 7.20417C11.6746 7.26952 11.6361 7.32889 11.5876 7.37888L6.23589 12.8964C5.55078 13.6031 4.6216 14.0001 3.65277 14C2.68393 13.9999 1.7548 13.6028 1.06978 12.8961C0.384749 12.1893 -6.11425e-05 11.2307 7.28683e-09 10.2313C6.11571e-05 9.2318 0.384988 8.2733 1.0701 7.56661L7.5443 0.789483C8.03342 0.284364 8.69701 0.000378941 9.3891 3.78958e-07C10.0812 -0.000378183 10.7451 0.282881 11.2347 0.787465C11.7243 1.29205 11.9996 1.97662 12 2.69059C12.0004 3.40456 11.7258 4.08943 11.2367 4.59455L4.76116 11.3717C4.46709 11.6751 4.06823 11.8455 3.65235 11.8455C3.23646 11.8455 2.8376 11.6751 2.54353 11.3717C2.24945 11.0683 2.08424 10.6568 2.08424 10.2278C2.08424 9.79877 2.24945 9.38731 2.54353 9.08393L7.97674 3.39012C8.02433 3.33774 8.0816 3.29571 8.14518 3.26651C8.20875 3.23731 8.27735 3.22152 8.34693 3.22008C8.4165 3.21863 8.48566 3.23156 8.55032 3.2581C8.61498 3.28464 8.67385 3.32425 8.72345 3.37461C8.77305 3.42497 8.81238 3.48506 8.83913 3.55133C8.86588 3.61761 8.87951 3.68874 8.87922 3.76053C8.87893 3.83232 8.86472 3.90333 8.83742 3.96937C8.81013 4.03541 8.77031 4.09515 8.7203 4.14508L3.28643 9.84494C3.23778 9.89474 3.19911 9.95393 3.17264 10.0191C3.14616 10.0843 3.13239 10.1543 3.13212 10.225C3.13185 10.2957 3.14507 10.3658 3.17105 10.4312C3.19702 10.4966 3.23523 10.5561 3.2835 10.6063C3.33177 10.6565 3.38914 10.6964 3.45235 10.7237C3.51556 10.751 3.58337 10.7652 3.6519 10.7655C3.72043 10.7658 3.78835 10.7521 3.85176 10.7253C3.91518 10.6985 3.97287 10.6591 4.02152 10.6093L10.4964 3.83556C10.7904 3.53281 10.9559 3.12194 10.9563 2.69335C10.9568 2.26475 10.7921 1.85354 10.4987 1.55016C10.2052 1.24679 9.80691 1.0761 9.39145 1.07566C8.97599 1.07522 8.57737 1.24506 8.2833 1.54781L1.8104 8.32224C1.56791 8.572 1.37549 8.86858 1.24411 9.19506C1.11273 9.52153 1.04496 9.8715 1.04469 10.225C1.04442 10.5785 1.11164 10.9286 1.24252 11.2553C1.37339 11.5819 1.56536 11.8788 1.80747 12.129C2.04957 12.3792 2.33706 12.5777 2.65353 12.7132C2.97 12.8487 3.30924 12.9186 3.6519 12.9189C3.99456 12.9192 4.33391 12.8498 4.65059 12.7148C4.96727 12.5798 5.25506 12.3818 5.49755 12.132L10.8499 6.6145C10.9481 6.51399 11.0809 6.45781 11.2193 6.45831C11.3576 6.45881 11.4901 6.51596 11.5876 6.6172Z" })
  }
));
oa.displayName = "AttachmentIcon";
const _s = fe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.2L4 17.2V4H20V16Z" })
  }
));
_s.displayName = "ChatIcon";
const Xr = fe(() => /* @__PURE__ */ S(
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
Xr.displayName = "CheckIcon";
const $n = fe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" })
  }
));
$n.displayName = "CloseIcon";
const aa = fe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M11.8402 0.15976C11.7379 0.0574675 11.5992 0 11.4545 0C11.3099 0 11.1711 0.0574675 11.0689 0.15976L7.63636 3.59205V1.63636C7.63636 1.4917 7.57889 1.35296 7.4766 1.25067C7.3743 1.14837 7.23557 1.09091 7.09091 1.09091C6.94624 1.09091 6.80751 1.14837 6.70521 1.25067C6.60292 1.35296 6.54545 1.4917 6.54545 1.63636V4.90909C6.54545 5.05375 6.60292 5.19249 6.70521 5.29479C6.80751 5.39708 6.94624 5.45455 7.09091 5.45455H10.3636C10.5083 5.45455 10.647 5.39708 10.7493 5.29479C10.8516 5.19249 10.9091 5.05375 10.9091 4.90909C10.9091 4.76443 10.8516 4.62569 10.7493 4.5234C10.647 4.4211 10.5083 4.36364 10.3636 4.36364H8.40795L11.8402 0.931149C11.9425 0.828856 12 0.690118 12 0.545455C12 0.400791 11.9425 0.262053 11.8402 0.15976ZM4.90909 6.54545H1.63636C1.4917 6.54545 1.35296 6.60292 1.25067 6.70521C1.14837 6.80751 1.09091 6.94624 1.09091 7.09091C1.09091 7.23557 1.14837 7.3743 1.25067 7.4766C1.35296 7.57889 1.4917 7.63636 1.63636 7.63636H3.59205L0.15976 11.0689C0.0574675 11.1711 0 11.3099 0 11.4545C0 11.5992 0.0574675 11.7379 0.15976 11.8402C0.262053 11.9425 0.400791 12 0.545455 12C0.690118 12 0.828856 11.9425 0.931149 11.8402L4.36364 8.40795V10.3636C4.36364 10.5083 4.4211 10.647 4.5234 10.7493C4.62569 10.8516 4.76443 10.9091 4.90909 10.9091C5.05375 10.9091 5.19249 10.8516 5.29479 10.7493C5.39708 10.647 5.45455 10.5083 5.45455 10.3636V7.09091C5.45455 6.94624 5.39708 6.80751 5.29479 6.70521C5.19249 6.60292 5.05375 6.54545 4.90909 6.54545Z" })
  }
));
aa.displayName = "CollapseIcon";
const la = fe(() => /* @__PURE__ */ S(
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
la.displayName = "CopyIcon";
const Is = fe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" })
  }
));
Is.displayName = "ErrorIcon";
const sa = fe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M12 0.545455V3.81818C12 3.96285 11.9425 4.10158 11.8402 4.20388C11.7379 4.30617 11.5992 4.36364 11.4545 4.36364C11.3099 4.36364 11.1711 4.30617 11.0689 4.20388C10.9666 4.10158 10.9091 3.96285 10.9091 3.81818V1.86205L7.47682 5.295C7.37447 5.39735 7.23565 5.45485 7.09091 5.45485C6.94617 5.45485 6.80735 5.39735 6.705 5.295C6.60265 5.19265 6.54515 5.05383 6.54515 4.90909C6.54515 4.76435 6.60265 4.62553 6.705 4.52318L10.138 1.09091H8.18182C8.03715 1.09091 7.89842 1.03344 7.79612 0.931149C7.69383 0.828856 7.63636 0.690118 7.63636 0.545455C7.63636 0.400791 7.69383 0.262053 7.79612 0.15976C7.89842 0.0574675 8.03715 0 8.18182 0H11.4545C11.5992 0 11.7379 0.0574675 11.8402 0.15976C11.9425 0.262053 12 0.400791 12 0.545455ZM4.52318 6.705L1.09091 10.138V8.18182C1.09091 8.03715 1.03344 7.89842 0.931149 7.79612C0.828856 7.69383 0.690118 7.63636 0.545455 7.63636C0.400791 7.63636 0.262053 7.69383 0.15976 7.79612C0.0574675 7.89842 0 8.03715 0 8.18182V11.4545C0 11.5992 0.0574675 11.7379 0.15976 11.8402C0.262053 11.9425 0.400791 12 0.545455 12H3.81818C3.96285 12 4.10158 11.9425 4.20388 11.8402C4.30617 11.7379 4.36364 11.5992 4.36364 11.4545C4.36364 11.3099 4.30617 11.1711 4.20388 11.0689C4.10158 10.9666 3.96285 10.9091 3.81818 10.9091H1.86205L5.295 7.47682C5.39735 7.37447 5.45485 7.23565 5.45485 7.09091C5.45485 6.94617 5.39735 6.80735 5.295 6.705C5.19265 6.60265 5.05383 6.54515 4.90909 6.54515C4.76435 6.54515 4.62553 6.60265 4.52318 6.705Z" })
  }
));
sa.displayName = "ExpandIcon";
const ua = fe(() => /* @__PURE__ */ S(
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
ua.displayName = "FileIcon";
const ca = fe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M7.84245 3.50002V6.6697L10.3716 8.2498C10.499 8.32948 10.5908 8.45859 10.6268 8.60874C10.6628 8.75888 10.64 8.91776 10.5635 9.05042C10.487 9.18309 10.363 9.27867 10.2188 9.31614C10.0746 9.3536 9.92206 9.32989 9.79466 9.25022L6.99378 7.50022C6.91089 7.44836 6.8423 7.37503 6.79469 7.28737C6.74708 7.19972 6.72207 7.10072 6.7221 7.00001V3.50002C6.7221 3.34531 6.78112 3.19693 6.88617 3.08754C6.99122 2.97814 7.13371 2.91668 7.28227 2.91668C7.43084 2.91668 7.57333 2.97814 7.67838 3.08754C7.78343 3.19693 7.84245 3.34531 7.84245 3.50002ZM7.28227 2.15915e-05C6.39859 -0.00227058 5.52325 0.177963 4.70691 0.530291C3.89056 0.882618 3.14943 1.40004 2.52639 2.05262C2.01733 2.58929 1.56499 3.10554 1.12035 3.64585V2.33335C1.12035 2.17864 1.06133 2.03027 0.956278 1.92087C0.851225 1.81148 0.708743 1.75002 0.560175 1.75002C0.411607 1.75002 0.269125 1.81148 0.164071 1.92087C0.0590182 2.03027 0 2.17864 0 2.33335V5.25001C0 5.40472 0.0590182 5.5531 0.164071 5.66249C0.269125 5.77189 0.411607 5.83335 0.560175 5.83335H3.36105C3.50962 5.83335 3.6521 5.77189 3.75715 5.66249C3.86221 5.5531 3.92122 5.40472 3.92122 5.25001C3.92122 5.0953 3.86221 4.94693 3.75715 4.83754C3.6521 4.72814 3.50962 4.66668 3.36105 4.66668H1.75055C2.2512 4.05272 2.74976 3.4745 3.31834 2.87512C4.09688 2.0644 5.08758 1.51057 6.16666 1.28283C7.24574 1.05509 8.36535 1.16353 9.38558 1.59462C10.4058 2.02571 11.2814 2.76032 11.903 3.70667C12.5246 4.65301 12.8646 5.76912 12.8805 6.91554C12.8965 8.06195 12.5876 9.18784 11.9926 10.1525C11.3975 11.1172 10.5427 11.8779 9.53484 12.3395C8.52702 12.8011 7.41089 12.9433 6.32594 12.7481C5.24098 12.553 4.23531 12.0292 3.43457 11.2423C3.38106 11.1896 3.3181 11.1485 3.2493 11.1211C3.18051 11.0938 3.10721 11.0808 3.03361 11.083C2.96 11.0852 2.88753 11.1024 2.82033 11.1338C2.75312 11.1651 2.6925 11.2099 2.64193 11.2656C2.59135 11.3214 2.55181 11.3869 2.52557 11.4586C2.49932 11.5302 2.48689 11.6065 2.48897 11.6832C2.49105 11.7598 2.5076 11.8353 2.53769 11.9053C2.56778 11.9753 2.61081 12.0384 2.66433 12.091C3.4622 12.8751 4.43221 13.4439 5.48972 13.7478C6.54722 14.0517 7.66008 14.0814 8.73117 13.8345C9.80226 13.5875 10.799 13.0713 11.6345 12.3309C12.4699 11.5905 13.1187 10.6485 13.5241 9.58695C13.9295 8.52544 14.0793 7.37674 13.9604 6.24108C13.8414 5.10543 13.4574 4.01735 12.8418 3.0718C12.2261 2.12625 11.3976 1.35197 10.4286 0.816529C9.4595 0.281089 8.37931 0.000765142 7.28227 2.15915e-05Z" })
  }
));
ca.displayName = "HistoryIcon";
const fa = fe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M14 7C14 7.15471 13.9385 7.30308 13.8291 7.41248C13.7197 7.52188 13.5714 7.58333 13.4167 7.58333H7.58333V13.4167C7.58333 13.5714 7.52188 13.7197 7.41248 13.8291C7.30308 13.9385 7.15471 14 7 14C6.84529 14 6.69692 13.9385 6.58752 13.8291C6.47812 13.7197 6.41667 13.5714 6.41667 13.4167V7.58333H0.583333C0.428624 7.58333 0.280251 7.52188 0.170854 7.41248C0.0614583 7.30308 0 7.15471 0 7C0 6.84529 0.0614583 6.69692 0.170854 6.58752C0.280251 6.47812 0.428624 6.41667 0.583333 6.41667H6.41667V0.583333C6.41667 0.428624 6.47812 0.280251 6.58752 0.170854C6.69692 0.0614583 6.84529 0 7 0C7.15471 0 7.30308 0.0614583 7.41248 0.170854C7.52188 0.280251 7.58333 0.428624 7.58333 0.583333V6.41667H13.4167C13.5714 6.41667 13.7197 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7Z" })
  }
));
fa.displayName = "PlusIcon";
const pa = fe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 13 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M13 6.99208C13.0005 7.17027 12.9514 7.34536 12.8579 7.49921C12.7644 7.65307 12.6299 7.78012 12.4682 7.86721L1.55229 13.8687C1.39545 13.9542 1.21835 13.9995 1.03805 14C0.871785 13.9997 0.708022 13.961 0.56049 13.8873C0.412958 13.8136 0.285957 13.7069 0.190131 13.5763C0.0943049 13.4456 0.0324474 13.2948 0.00974343 13.1364C-0.0129605 12.9781 0.00415071 12.8168 0.0596426 12.6661L1.83768 7.66843C1.8552 7.61898 1.88839 7.57606 1.93258 7.54567C1.97677 7.51529 2.02975 7.49898 2.08407 7.49903H6.75898C6.83028 7.49918 6.90085 7.48523 6.9663 7.45806C7.03176 7.43088 7.0907 7.39105 7.13948 7.34105C7.18825 7.29104 7.22581 7.23193 7.24982 7.16738C7.27384 7.10283 7.28379 7.03423 7.27907 6.96582C7.26727 6.83723 7.20539 6.71767 7.10582 6.63108C7.00624 6.5445 6.87632 6.49728 6.74208 6.49888H2.08862C2.03438 6.49897 1.98146 6.48275 1.93728 6.45249C1.89309 6.42222 1.85986 6.37943 1.84223 6.3301L0.0583424 1.32936C-0.0111263 1.13773 -0.018329 0.930327 0.0376911 0.734676C0.0937111 0.539025 0.210303 0.364388 0.371984 0.233956C0.533666 0.103523 0.732787 0.0234668 0.942905 0.00441721C1.15302 -0.0146324 1.3642 0.0282263 1.54838 0.127302L12.4702 6.12132C12.6308 6.20829 12.7645 6.33476 12.8576 6.48776C12.9507 6.64076 12.9999 6.81481 13 6.99208Z" })
  }
));
pa.displayName = "SendIcon";
const ha = fe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" })
  }
));
ha.displayName = "UserIcon";
const da = fe((e) => {
  const { onClick: t } = e;
  return /* @__PURE__ */ S(
    "button",
    {
      className: "elitea-assistant-button",
      onClick: t,
      "aria-label": "Support Assistant",
      type: "button",
      children: /* @__PURE__ */ S(Yr, {})
    }
  );
});
da.displayName = "ChatButton";
const ma = fe((e) => {
  const { text: t } = e, [n, r] = pe(!1), i = q(() => {
    navigator.clipboard.writeText(t), r(!0), setTimeout(() => r(!1), 2e3);
  }, [t]);
  return /* @__PURE__ */ S(Vt, { content: "Copy to clipboard", children: /* @__PURE__ */ S(
    "button",
    {
      className: "elitea-assistant-header-action",
      onClick: i,
      "aria-label": "Copy to clipboard",
      type: "button",
      children: n ? /* @__PURE__ */ S(Xr, {}) : /* @__PURE__ */ S(la, {})
    }
  ) });
});
ma.displayName = "CopyButton";
const Vt = fe((e) => {
  const { content: t, children: n, placement: r = "top" } = e, i = Ae(null), o = Ae(null), [a, l] = pe(!1), [s, u] = pe(!1), [f, c] = pe({ top: 0, left: 0 }), h = q(() => {
    const p = i.current, m = o.current;
    if (!p || !m) return;
    const b = p.getBoundingClientRect(), E = m.getBoundingClientRect();
    let k;
    r === "top" ? k = b.top - E.height - 8 : k = b.bottom + 8;
    let _ = b.left + b.width / 2 - E.width / 2;
    const A = 8;
    _ < A && (_ = A), _ + E.width > window.innerWidth - A && (_ = window.innerWidth - A - E.width), k < A && (k = b.bottom + 8), c({ top: k, left: _ }), u(!0);
  }, [r]);
  return Cs(() => {
    a && o.current && h(), a || u(!1);
  }, [a, h]), /* @__PURE__ */ me(Un, { children: [
    /* @__PURE__ */ S(
      "div",
      {
        ref: i,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        className: "elitea-assistant-tooltip-trigger",
        children: n
      }
    ),
    a && ia(
      /* @__PURE__ */ S(
        "div",
        {
          ref: o,
          className: "elitea-assistant-tooltip",
          style: {
            top: f.top,
            left: f.left,
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
Vt.displayName = "Tooltip";
const ga = fe((e) => {
  const {
    title: t,
    expanded: n,
    history: r,
    currentConversationId: i,
    disabled: o,
    onClose: a,
    onExpand: l,
    onNewChat: s,
    onSelectConversation: u
  } = e, f = Ae(null), [c, h] = pe(!1);
  Ke(() => {
    if (!c) return;
    const b = (E) => {
      f.current && !f.current.contains(E.target) && h(!1);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, [c]);
  const p = q(() => {
    r.length > 0 && h((b) => !b);
  }, [r.length]), m = q(
    (b) => {
      u(b), h(!1);
    },
    [u]
  );
  return /* @__PURE__ */ me("div", { className: "elitea-assistant-header", children: [
    /* @__PURE__ */ me("div", { className: "elitea-assistant-header-left", children: [
      /* @__PURE__ */ S(
        "button",
        {
          className: "elitea-assistant-header-close-action",
          onClick: a,
          "aria-label": "Close chat",
          type: "button",
          children: /* @__PURE__ */ S($n, {})
        }
      ),
      /* @__PURE__ */ S("h2", { className: "elitea-assistant-header-title", children: t })
    ] }),
    /* @__PURE__ */ me("div", { className: "elitea-assistant-header-right", children: [
      /* @__PURE__ */ S(Vt, { content: "New conversation", children: /* @__PURE__ */ S(
        "button",
        {
          className: "elitea-assistant-header-action",
          onClick: s,
          "aria-label": "New chat",
          type: "button",
          disabled: o,
          children: /* @__PURE__ */ S(fa, {})
        }
      ) }),
      /* @__PURE__ */ S(Vt, { content: "Conversations history", children: /* @__PURE__ */ me(
        "div",
        {
          ref: f,
          className: "elitea-assistant-history-wrapper",
          children: [
            /* @__PURE__ */ S(
              "button",
              {
                className: "elitea-assistant-header-action",
                onClick: p,
                "aria-label": "Chat history",
                type: "button",
                disabled: o || r.length === 0,
                children: /* @__PURE__ */ S(ca, {})
              }
            ),
            c && r.length > 0 && /* @__PURE__ */ S("div", { className: "elitea-assistant-history-dropdown", children: /* @__PURE__ */ S("div", { className: "elitea-assistant-history-dropdown-scroll", children: r.map((b) => /* @__PURE__ */ S(
              "button",
              {
                className: "elitea-assistant-history-item",
                onClick: () => m(b.uuid),
                type: "button",
                disabled: b.uuid === i,
                children: b.name
              },
              b.uuid
            )) }) })
          ]
        }
      ) }),
      /* @__PURE__ */ S(Vt, { content: n ? "Collapse" : "Expand", children: /* @__PURE__ */ S(
        "button",
        {
          className: "elitea-assistant-header-action",
          onClick: l,
          "aria-label": "Expand chat",
          type: "button",
          children: n ? /* @__PURE__ */ S(aa, {}) : /* @__PURE__ */ S(sa, {})
        }
      ) })
    ] })
  ] });
});
ga.displayName = "ChatHeader";
const ya = fe((e) => {
  const { avatar: t, messages: n, isLoading: r, onAnimationComplete: i } = e, o = Ae(null), a = Ae(null), l = Ae(!1);
  return Ke(() => {
    var b;
    const s = a.current;
    if (n.length === 0) {
      l.current = !1;
      return;
    }
    const u = l.current ? "smooth" : "instant";
    if (l.current = !0, (b = o.current) == null || b.scrollIntoView({ behavior: u }), !n.some((E) => E.isStreaming || E.isAnimating) || !s) return;
    let c = null;
    const h = (E = !1) => {
      c === null && (c = requestAnimationFrame(() => {
        (E || s.scrollHeight - s.scrollTop - s.clientHeight < 150) && (s.scrollTop = s.scrollHeight), c = null;
      }));
    }, p = new MutationObserver(() => h());
    p.observe(s, {
      childList: !0,
      subtree: !0,
      characterData: !0
    });
    const m = new ResizeObserver(() => h(!0));
    return m.observe(s), () => {
      p.disconnect(), m.disconnect(), c !== null && cancelAnimationFrame(c);
    };
  }, [n]), r ? /* @__PURE__ */ S(Ka, {}) : n.length === 0 ? /* @__PURE__ */ S("div", { className: "elitea-assistant-empty", children: "Send a message to start a conversation" }) : /* @__PURE__ */ me(
    "div",
    {
      className: "elitea-assistant-messages",
      ref: a,
      children: [
        n.map((s) => /* @__PURE__ */ S(
          Xa,
          {
            message: s,
            avatar: t,
            onAnimationComplete: i
          },
          s.id
        )),
        /* @__PURE__ */ S("div", { ref: o })
      ]
    }
  );
});
ya.displayName = "MessageList";
var ye = /* @__PURE__ */ ((e) => (e.PENDING = "pending", e.UPLOADING = "uploading", e.COMPLETED = "completed", e.ERROR = "error", e))(ye || {});
const Pn = 150 * 1024 * 1024, Ni = 3 * 1024 * 1024, Oi = 150 * 1024 * 1024, qt = 10, Mi = 10, lr = 5 * 1024 * 1024, ba = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg"]), vs = /* @__PURE__ */ new Set([
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
]), Ls = /* @__PURE__ */ new Set([
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
]), ka = /* @__PURE__ */ new Set([...ba, ...vs, ...Ls]), Ds = [...ka].map((e) => `.${e}`).join(","), Dr = 7, sr = 2 * Math.PI * Dr, xa = fe((e) => {
  const { status: t, progress: n = 0 } = e;
  if (t === ye.UPLOADING) {
    const r = sr - n / 100 * sr;
    return /* @__PURE__ */ me(
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
              r: Dr,
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
              r: Dr,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeDasharray: sr,
              strokeDashoffset: r,
              transform: "rotate(-90 9 9)",
              className: "elitea-assistant-file-chip-spinner-progress"
            }
          )
        ]
      }
    );
  }
  return t === ye.COMPLETED ? /* @__PURE__ */ S(Xr, {}) : /* @__PURE__ */ S(ua, {});
});
xa.displayName = "AttachmentIcon";
const wa = fe((e) => {
  const { status: t, progress: n } = e;
  return t === ye.UPLOADING ? /* @__PURE__ */ me("span", { className: "elitea-assistant-file-chip-progress-text", children: [
    n,
    "%"
  ] }) : null;
});
wa.displayName = "AttachmentProgress";
const Ca = fe((e) => {
  const { attachment: t, onRemove: n } = e, r = (i) => {
    const o = "elitea-assistant-file-chip";
    return {
      uploading: `${o} ${o}--uploading`,
      error: `${o} ${o}--error`,
      completed: `${o} ${o}--completed`,
      pending: o
    }[i] || o;
  };
  return /* @__PURE__ */ S(Vt, { content: t.error ?? t.name, children: /* @__PURE__ */ me("div", { className: r(t.status), children: [
    /* @__PURE__ */ S("span", { className: "elitea-assistant-file-chip-icon", children: /* @__PURE__ */ S(
      xa,
      {
        status: t.status,
        progress: t.progress
      }
    ) }),
    /* @__PURE__ */ S("span", { className: "elitea-assistant-file-chip-name", children: t.name }),
    /* @__PURE__ */ S(
      wa,
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
        disabled: t.status === ye.UPLOADING,
        children: /* @__PURE__ */ S($n, {})
      }
    )
  ] }) });
});
Ca.displayName = "AttachmentChip";
const Ea = fe((e) => {
  const {
    placeholder: t,
    text: n,
    onTextChange: r,
    attachments: i,
    onAddFiles: o,
    onRemoveAttachment: a,
    onSend: l,
    expanded: s,
    disabled: u,
    isUploading: f
  } = e, c = Ae(null), h = Ae(null), [p, m] = pe(0), [b, E] = pe(!1), k = Ae(0);
  console.log("textareaRef", h);
  const _ = q(() => {
    const O = h.current;
    O && (O.style.height = "auto", O.style.height = `${O.scrollHeight}px`);
  }, []);
  Ke(() => {
    _();
  }, [n, _]);
  const { visibleAttachments: A, remainingAttachmentsCount: R } = St(() => {
    const O = s ? 3 : 2;
    return {
      visibleAttachments: i.slice(0, O),
      remainingAttachmentsCount: i.length - O
    };
  }, [i, s]), M = St(
    () => i != null && i.length ? i.every((O) => O.status === ye.PENDING || O.status === ye.COMPLETED) : !0,
    [i]
  ), C = St(
    () => !!(u || f || !M || !n.trim()),
    [u, f, n, M]
  ), B = () => {
    const O = n.trim(), ee = i.filter((J) => J.status === ye.COMPLETED && J.filepath);
    !O && ee.length === 0 || f || (l(O), r(""));
  }, Q = (O) => {
    O.key === "Enter" && !O.shiftKey && (O.preventDefault(), B());
  }, X = () => {
    var O;
    (O = c.current) == null || O.click();
  }, w = (O) => {
    const ee = O.target.files;
    ee && o(Array.from(ee)), m((J) => J + 1);
  }, N = (O) => {
    O.preventDefault(), k.current += 1, O.dataTransfer.types.includes("Files") && E(!0);
  }, P = (O) => {
    O.preventDefault(), k.current -= 1, k.current === 0 && E(!1);
  }, Y = (O) => {
    O.preventDefault();
  }, ae = (O) => {
    O.preventDefault(), k.current = 0, E(!1);
    const ee = Array.from(O.dataTransfer.files);
    ee.length > 0 && o(ee);
  }, W = (O) => {
    const ee = Array.from(O.clipboardData.items).filter((J) => J.kind === "file").map((J) => J.getAsFile()).filter((J) => J !== null).map((J) => {
      if (!/^image\.\w+$/.test(J.name)) return J;
      const g = J.name.split(".").pop() || "png", K = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
      return new File([J], `screenshot-${K}.${g}`, { type: J.type });
    });
    ee.length !== 0 && (O.preventDefault(), o(ee));
  };
  return /* @__PURE__ */ me(
    "div",
    {
      className: `elitea-assistant-input-area${b ? " elitea-assistant-input-area--drag-over" : ""}`,
      onDragEnter: N,
      onDragLeave: P,
      onDragOver: Y,
      onDrop: ae,
      children: [
        b && /* @__PURE__ */ S("div", { className: "elitea-assistant-drop-overlay", children: "Drop files here" }),
        i.length > 0 && /* @__PURE__ */ me("div", { className: "elitea-assistant-file-list", children: [
          A.map((O) => /* @__PURE__ */ S(
            Ca,
            {
              attachment: O,
              onRemove: a
            },
            O.id
          )),
          R > 0 && /* @__PURE__ */ me("div", { className: "elitea-assistant-file-chip elitea-assistant-file-chip--count", children: [
            "+",
            R
          ] })
        ] }),
        /* @__PURE__ */ me("div", { className: "elitea-assistant-input-row", children: [
          /* @__PURE__ */ S(
            "input",
            {
              ref: c,
              type: "file",
              multiple: !0,
              accept: Ds,
              onChange: w,
              style: { display: "none" }
            },
            p
          ),
          /* @__PURE__ */ S(
            "button",
            {
              className: "elitea-assistant-attach-button",
              onClick: X,
              "aria-label": "Attach file",
              type: "button",
              disabled: u || f,
              children: /* @__PURE__ */ S(oa, {})
            }
          ),
          /* @__PURE__ */ S(
            "textarea",
            {
              ref: h,
              id: "elitea-assistant-message-input",
              className: "elitea-assistant-input",
              value: n,
              onChange: (O) => r(O.target.value),
              onKeyDown: Q,
              onPaste: W,
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
              onClick: B,
              disabled: C,
              "aria-label": "Send message",
              type: "button",
              children: /* @__PURE__ */ S(pa, {})
            }
          )
        ] })
      ]
    }
  );
});
Ea.displayName = "MessageInput";
const Sa = dn(null), Ta = () => {
  const e = mn(Sa);
  if (!e) throw new Error("useApi must be used within EliteaAssistant");
  return e;
}, Rs = () => {
  const [e, t] = pe(!1), [n, r] = pe(!1), i = q(() => t(!0), []), o = q(() => t(!1), []), a = q(() => t((f) => !f), []), l = q(() => r(!0), []), s = q(() => r(!1), []), u = q(() => r((f) => !f), []);
  return {
    isOpen: e,
    isExpanded: n,
    open: i,
    close: o,
    toggle: a,
    expandFullscreen: l,
    collapseFullscreen: s,
    toggleFullscreen: u
  };
}, gt = {
  ENTER_ROOM: "chat_enter_room",
  LEAVE_ROOM: "chat_leave_room",
  PREDICT: "support_predict",
  PREDICT_RESPONSE: "chat_predict",
  CONVERSATION_NAME_UPDATED: "chat_conversation_name_updated",
  ERROR: "support_error"
}, we = {
  START_TASK: "start_task",
  CHUNK: "chunk",
  AI_MESSAGE_CHUNK: "AIMessageChunk",
  AGENT_START: "agent_start",
  AGENT_LLM_START: "agent_llm_start",
  AGENT_LLM_CHUNK: "agent_llm_chunk",
  AGENT_LLM_END: "agent_llm_end",
  AGENT_TOOL_START: "agent_tool_start",
  AGENT_TOOL_END: "agent_tool_end",
  AGENT_ON_TRANSITIONAL_EDGE: "agent_on_transitional_edge",
  AGENT_ON_FUNCTION_TOOL_NODE: "agent_on_function_tool_node",
  AGENT_RESPONSE: "agent_response",
  PIPELINE_FINISH: "pipeline_finish",
  ERROR: "error",
  AGENT_EXCEPTION: "agent_exception"
}, Ps = (e) => {
  if (typeof e == "number") return e < 4102444800 ? e * 1e3 : e;
  if (typeof e == "string") {
    const t = new Date(e);
    return isNaN(t.getTime()) ? 0 : t.getTime();
  }
  return 0;
}, Ns = (e) => {
  var r;
  const t = e.sent_to != null ? "user" : "assistant";
  let n = "";
  for (const i of e.message_items ?? []) {
    const o = i.item_type ?? i.type;
    if (o === "text_message" || o === "text") {
      n = ((r = i.item_details) == null ? void 0 : r.content) ?? i.content ?? "";
      break;
    }
  }
  return {
    id: String(e.uuid ?? e.id ?? ""),
    role: t,
    content: n,
    timestamp: Ps(e.created_at_ts ?? e.created_at)
  };
}, Fi = (e) => (e.message_groups ?? []).map(Ns), Gt = () => typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
  const t = Math.random() * 16 | 0;
  return (e === "x" ? t : t & 3 | 8).toString(16);
}), Rr = (e) => e >= 1024 * 1024 ? `${Math.round(e / (1024 * 1024))}MB` : e >= 1024 ? `${Math.round(e / 1024)}KB` : `${e}B`, Os = (e) => {
  const t = new Date(e), n = /* @__PURE__ */ new Date(), r = t.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: !0 });
  if (t.toDateString() === n.toDateString()) return r;
  const o = new Date(n);
  return o.setDate(o.getDate() - 1), t.toDateString() === o.toDateString() ? `Yesterday, ${r}` : t.toLocaleDateString([], { month: "short", day: "numeric" }) + ", " + r;
}, zi = (e) => {
  const t = e.lastIndexOf(".");
  return t === -1 ? e : e.substring(0, t) + e.substring(t).toLowerCase();
}, Kr = (e) => (e.split(".").pop() || "").toLowerCase(), jn = (e) => ba.has(Kr(e)), Ms = (e) => ka.has(Kr(e)), Aa = (e) => Ms(e.name) ? jn(e.name) && e.size > Ni ? `Image exceeds ${Rr(Ni)} limit` : e.size > Pn ? `File exceeds ${Rr(Pn)} limit` : null : `Unsupported file type: .${Kr(e.name)}`, _a = (e, t, n) => {
  if (n.totalCount > qt) return `Max ${qt} attachments allowed`;
  const r = jn(e);
  return r && (n.imageCount += 1), n.totalSize += t, r && n.imageCount > Mi ? `Max ${Mi} images allowed` : n.totalSize > Oi ? `Total upload size exceeds ${Rr(Oi)}` : null;
}, ur = (e, t, n) => ({
  id: t,
  file: e,
  name: e.name,
  size: e.size,
  type: e.type,
  status: ye.ERROR,
  progress: 0,
  error: n
}), Ia = (e) => {
  const t = `Max ${qt} attachments allowed`;
  return e.map(
    (n) => n.status === ye.UPLOADING || n.status === ye.COMPLETED ? n : { ...n, status: ye.ERROR, error: t }
  );
}, Fs = (e, t) => {
  const n = new Set(e.map((l) => l.name)), r = t.filter((l) => !n.has(l.name)), i = r.length + e.length;
  if (i > qt) {
    const l = e.map((s) => {
      const u = Gt();
      return ur(s, u, `Max ${qt} attachments allowed`);
    });
    return Ia([...r, ...l]);
  }
  const o = {
    totalCount: i,
    imageCount: r.filter((l) => jn(l.name)).length,
    totalSize: r.reduce((l, s) => l + s.size, 0)
  }, a = e.map((l) => {
    const s = Gt(), u = Aa(l);
    if (u) return ur(l, s, u);
    const f = _a(l.name, l.size, o);
    return f ? ur(l, s, f) : {
      id: s,
      file: l,
      name: l.name,
      size: l.size,
      type: l.type,
      status: ye.PENDING,
      progress: 0
    };
  });
  return [...r, ...a];
}, zs = (e) => {
  if (e.length > qt) return Ia(e);
  const t = {
    totalCount: e.length,
    imageCount: 0,
    totalSize: 0
  };
  return e.map((n) => {
    if (n.status !== ye.ERROR)
      return jn(n.name) && (t.imageCount += 1), t.totalSize += n.size, n;
    const r = n.file ? Aa(n.file) : null;
    return r ? { ...n, error: r } : _a(n.name, n.size, t) ? n : { ...n, status: ye.PENDING, error: void 0 };
  });
}, Bi = (e, t) => {
  const { frequency: n, start: r, peak: i, end: o } = t, a = e.createOscillator(), l = e.createGain();
  return a.connect(l), l.connect(e.destination), a.type = "sine", a.frequency.value = n, l.gain.setValueAtTime(0, r), l.gain.linearRampToValueAtTime(0.12, i), l.gain.exponentialRampToValueAtTime(0.01, o), a.start(r), a.stop(o), a;
}, Bs = () => {
  try {
    const e = new AudioContext(), t = () => {
      if (e.state !== "running") {
        e.close();
        return;
      }
      const n = e.currentTime;
      Bi(e, { frequency: 784, start: n, peak: n + 0.02, end: n + 0.2 });
      const r = Bi(e, { frequency: 1047, start: n + 0.12, peak: n + 0.14, end: n + 0.37 });
      r.onended = () => e.close();
    };
    e.state === "suspended" ? e.resume().then(t) : t();
  } catch {
  }
}, Hs = (e) => {
  if (e.startsWith("/")) return "";
  try {
    return new URL(e).origin;
  } catch {
    return "";
  }
};
let va = null;
const Us = import("rehype-raw").then(({ default: e }) => (va = e, e)), Hi = () => va, $s = () => {
  const e = Ta(), [t, n] = pe(!1), r = q(
    async (s, u, f) => {
      const c = zi(s.name), h = new File([s], c, { type: s.type }), p = new FormData();
      return p.append("file", h), p.append("overwrite", "1"), (await e.uploadFile(u, p, f))[0];
    },
    [e]
  ), i = q(
    async (s) => {
      const { chunk: u, chunkIndex: f, totalChunks: c, fileId: h, fileName: p, conversationId: m, onProgress: b } = s, E = new FormData();
      E.append("file", u), E.append("chunk_index", String(f)), E.append("total_chunks", String(c)), E.append("file_id", h), E.append("file_name", zi(p)), E.append("overwrite", "1");
      const k = await e.uploadFile(m, E, b);
      return Array.isArray(k) ? k[0] : k ?? { status: "chunk_received" };
    },
    [e]
  ), o = q((s) => {
    const u = [];
    let f = 0;
    for (; f < s.size; ) {
      const c = Math.min(f + lr, s.size);
      u.push(s.slice(f, c)), f = c;
    }
    return u;
  }, []), a = q(
    async (s, u, f) => {
      const { file: c } = s;
      if (c.size > Pn)
        throw new Error(`File "${c.name}" exceeds maximum size limit of 300MB`);
      if (c.size <= lr)
        return (await r(c, u, (_, A) => {
          const R = Math.round(_ / A * 100);
          f(R);
        })).filepath;
      const h = o(c), p = Gt(), m = h.length;
      let b = 0, E = "";
      for (let k = 0; k < m; k++) {
        const _ = h[k], A = b, R = await i({
          chunk: _,
          chunkIndex: k,
          totalChunks: m,
          fileId: p,
          fileName: c.name,
          conversationId: u,
          onProgress: (M, C) => {
            const B = A + M, Q = Math.round(B / c.size * 100);
            f(Math.min(Q, 99));
          }
        });
        b += _.size, R.filepath && (E = R.filepath);
      }
      return f(100), E;
    },
    [r, i, o]
  );
  return {
    uploadAttachments: q(
      async (s) => {
        const { conversationId: u, attachments: f, onProgress: c, onComplete: h, onError: p } = s;
        if (f.length) {
          n(!0);
          try {
            await Promise.all(
              f.map(async (m) => {
                try {
                  const b = await a(m, u, (E) => {
                    c(m.id, E);
                  });
                  h(m.id, b);
                } catch (b) {
                  const E = b instanceof Error ? b.message : "Upload failed";
                  p(m.id, E);
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
    maxFileSize: Pn,
    chunkSize: lr
  };
}, js = (e) => {
  const { welcomeMessage: t, supportProjectId: n, initialHistory: r, initialConversation: i, isInitLoading: o } = e, a = Ae(!1), l = Ta(), s = ju(), u = Gu(), f = Uu(), { uploadAttachments: c, isUploading: h } = $s(), p = q(
    () => t ? [{ id: "welcome", role: "assistant", content: t, timestamp: Date.now() }] : [],
    [t]
  ), [m, b] = pe([]), [E, k] = pe(""), [_, A] = pe([]), [R, M] = pe(null), [C, B] = pe([]), [Q, X] = pe(!1), w = St(
    () => o || Q,
    [o, Q]
  ), N = St(() => m.some((V) => V.isStreaming || V.isAnimating), [m]), P = q((V) => {
    b((U) => U.map((z) => z.id === V ? { ...z, isAnimating: !1 } : z));
  }, []), Y = q(
    (V) => {
      s == null || s.emit(gt.ENTER_ROOM, {
        project_id: n,
        conversation_id: V
      });
    },
    [s, n]
  ), ae = q(
    (V) => {
      s == null || s.emit(gt.LEAVE_ROOM, {
        project_id: n,
        conversation_id: V
      });
    },
    [s, n]
  ), W = q(
    (V) => {
      s == null || s.emit(gt.PREDICT, V);
    },
    [s]
  ), O = q((V) => {
    const { message_id: U, type: z, content: ie, response_metadata: re } = V, $e = ($) => $ === we.START_TASK || $ === we.AGENT_START ? "Starting up..." : $ === we.AGENT_LLM_START ? "Looking things up..." : $ === we.AGENT_TOOL_START ? "Consulting knowledge base..." : $ === we.AGENT_LLM_CHUNK ? "Writing response..." : "";
    switch (z) {
      case we.START_TASK:
        b(($) => [
          ...$,
          {
            id: U,
            role: "assistant",
            content: "",
            timestamp: Date.now(),
            isStreaming: !0,
            statusMessage: $e(z)
          }
        ]);
        break;
      case we.AGENT_START:
        b(
          ($) => $.map((j) => j.id === U ? { ...j, statusMessage: $e(z) } : j)
        );
        break;
      case we.AGENT_LLM_START:
      case we.AGENT_TOOL_START:
        b(
          ($) => $.map((j) => j.id === U ? { ...j, statusMessage: $e(z) } : j)
        );
        break;
      case we.AGENT_TOOL_END:
      case we.AGENT_LLM_END:
      case we.AGENT_ON_TRANSITIONAL_EDGE:
      case we.AGENT_ON_FUNCTION_TOOL_NODE:
        break;
      case we.CHUNK:
      case we.AI_MESSAGE_CHUNK: {
        const $ = typeof ie == "string" ? ie : JSON.stringify(ie), j = !!(re != null && re.finish_reason);
        b(
          (_e) => _e.map(
            (Ne) => Ne.id === U ? {
              ...Ne,
              content: Ne.content + $,
              statusMessage: void 0,
              ...j && { isStreaming: !1 }
            } : Ne
          )
        );
        break;
      }
      case we.AGENT_LLM_CHUNK:
        b(
          ($) => $.map(
            (j) => j.id === U && j.statusMessage !== $e(z) ? { ...j, statusMessage: $e(z) } : j
          )
        );
        break;
      case we.AGENT_RESPONSE: {
        const $ = typeof ie == "string" ? ie : JSON.stringify(ie);
        b(
          (j) => j.map((_e) => _e.id !== U ? _e : {
            ..._e,
            content: $,
            isStreaming: !1,
            isAnimating: !0,
            statusMessage: void 0
          })
        );
        break;
      }
      case we.PIPELINE_FINISH:
        b(
          ($) => $.map(
            (j) => j.id === U && j.isStreaming ? { ...j, isStreaming: !1, statusMessage: void 0 } : j
          )
        );
        break;
      case we.ERROR:
      case we.AGENT_EXCEPTION:
        b(
          ($) => $.map(
            (j) => j.id === U ? {
              ...j,
              content: typeof ie == "string" ? ie : "An error occurred",
              isStreaming: !1,
              isAnimating: !1,
              isError: !0,
              statusMessage: void 0
            } : j
          )
        );
        break;
    }
  }, []), ee = q((V) => {
    b((U) => [
      ...U,
      {
        id: Gt(),
        role: "assistant",
        content: V.error || "An error occurred",
        timestamp: Date.now(),
        isError: !0
      }
    ]);
  }, []), J = q((V) => {
    const U = V.name.replace(/^User ID \d+\s*-\s*/, "");
    B((z) => z.map((ie) => ie.uuid === V.conversation_uuid ? { ...ie, name: U } : ie));
  }, []);
  Ke(() => {
    if (!(o || a.current))
      if (a.current = !0, B(r), r.length > 0 && i) {
        const V = Fi(i);
        b(V.length > 0 ? V : p()), M(r[0].uuid), Y(r[0].uuid);
      } else
        b(p());
  }, [o, r, i, p, Y]), Ke(() => {
    if (s)
      return s.on(gt.PREDICT_RESPONSE, O), s.on(gt.ERROR, ee), s.on(gt.CONVERSATION_NAME_UPDATED, J), () => {
        s.off(gt.PREDICT_RESPONSE, O), s.off(gt.ERROR, ee), s.off(gt.CONVERSATION_NAME_UPDATED, J);
      };
  }, [s, O, ee, J]);
  const Re = q((V) => {
    A((U) => Fs(V, U));
  }, []), g = q((V) => {
    A((U) => zs(U.filter((z) => z.id !== V)));
  }, []), K = q((V, U) => {
    A(
      (z) => z.map((ie) => ie.id === V ? { ...ie, status: ye.UPLOADING, progress: U } : ie)
    );
  }, []), Pe = q((V, U) => {
    A(
      (z) => z.map(
        (ie) => ie.id === V ? { ...ie, status: ye.COMPLETED, progress: 100, filepath: U } : ie
      )
    );
  }, []), y = q((V, U) => {
    A(
      (z) => z.map((ie) => ie.id === V ? { ...ie, status: ye.ERROR, error: U } : ie)
    );
  }, []), ge = q(() => {
    A([]);
  }, []), Ze = q(
    async (V) => {
      const U = _.filter((ie) => ie.status === ye.PENDING);
      if (U.length === 0) return [];
      A(
        (ie) => ie.map((re) => re.status === ye.PENDING ? { ...re, status: ye.UPLOADING } : re)
      );
      const z = [];
      return await c({
        conversationId: V,
        attachments: U,
        onProgress: K,
        onComplete: (ie, re) => {
          Pe(ie, re), z.push(re);
        },
        onError: y
      }), z;
    },
    [_, c, K, Pe, y]
  ), ke = q(
    async (V) => {
      let U = R;
      if (!U)
        try {
          const j = await l.createConversation();
          U = j.uuid, M(U), B((_e) => [j, ..._e]), Y(U);
        } catch {
          b((j) => [
            ...j,
            {
              id: Gt(),
              role: "assistant",
              content: "Failed to create conversation. Please try again.",
              timestamp: Date.now(),
              isError: !0
            }
          ]);
          return;
        }
      const z = _.filter((j) => j.status === ye.PENDING), ie = _.filter((j) => j.status === ye.COMPLETED && j.filepath).map((j) => j.filepath), re = z.length > 0 && U ? await Ze(U) : [];
      if (z.length > 0 && re.length < z.length) return;
      b((j) => [
        ...j,
        { id: Gt(), role: "user", content: V, timestamp: Date.now() }
      ]);
      const $e = [...ie, ...re], $ = f == null ? void 0 : f.getValidScreenshot();
      if (U && $) {
        try {
          const j = new File([$], `screenshot-${Date.now()}.png`, {
            type: "image/png"
          }), _e = new FormData();
          _e.append("file", j), _e.append("overwrite", "1");
          const it = (await l.uploadFile(U, _e))[0];
          it != null && it.filepath && $e.push(it.filepath);
        } catch {
        }
        f == null || f.clearScreenshot();
      }
      U && W({
        conversation_uuid: U,
        content: V,
        attachments: $e.length > 0 ? $e : void 0,
        support_assistant_context: u ?? void 0
      }), ge();
    },
    [
      R,
      l,
      Y,
      W,
      _,
      Ze,
      ge,
      u,
      f
    ]
  ), ht = q(() => {
    R && ae(R), M(null), b(p()), k(""), ge();
  }, [R, ae, p, ge]), We = q(
    async (V) => {
      if (R !== V) {
        R && ae(R), M(V), Y(V), k(""), ge(), b([]), X(!0);
        try {
          const U = await l.getConversation(V), z = Fi(U);
          b(z.length > 0 ? z : p());
        } catch {
          b(p());
        } finally {
          X(!1);
        }
      }
    },
    [R, ae, Y, p, l, ge]
  );
  return {
    messages: m,
    inputText: E,
    setInputText: k,
    attachments: _,
    addFiles: Re,
    removeAttachment: g,
    history: C,
    currentConversationId: R ?? "",
    isLoading: w,
    isStreaming: N,
    isUploading: h,
    handleNewChat: ht,
    handleSelectConversation: We,
    handleSend: ke,
    handleAnimationComplete: P
  };
}, Vs = (e) => {
  const { api: t, title: n, welcomeMessage: r, placeholder: i } = e, [o, a] = pe(null), [l, s] = pe([]), [u, f] = pe(null), [c, h] = pe(!0);
  return Ke(() => {
    let p = !1;
    const m = t.getConfig().then((E) => {
      p || a(E);
    }).catch(() => {
    }), b = t.getConversations().then(async (E) => {
      if (p) return;
      const k = E.items || [];
      if (s(k), k.length > 0)
        try {
          const _ = await t.getConversation(k[0].uuid);
          p || f(_);
        } catch {
        }
    }).catch(() => {
    });
    return Promise.all([m, b]).finally(() => {
      p || h(!1);
    }), () => {
      p = !0;
    };
  }, [t]), {
    title: (o == null ? void 0 : o.title) || n,
    welcomeMessage: (o == null ? void 0 : o.welcome_message) || r,
    placeholder: (o == null ? void 0 : o.placeholder) || i,
    supportProjectId: (o == null ? void 0 : o.support_project_id) ?? null,
    user: (o == null ? void 0 : o.user) || { id: 0, name: "Guest", avatar: "" },
    history: l,
    lastConversation: u,
    isLoading: c
  };
}, Gs = (e) => {
  const t = Ae(null), [n, r] = pe(!1), i = q(() => {
    r(!1), t.current && (clearTimeout(t.current), t.current = null);
  }, []), o = q(() => {
    e || (r(!0), Bs(), t.current = setTimeout(i, 12e3));
  }, [e, i]);
  return Ke(() => () => {
    t.current && clearTimeout(t.current);
  }, []), Ke(() => {
    e && i();
  }, [e, i]), { popupVissible: n, showPopup: o, hidePopup: i, popupText: "Hi! Need help? Ask me!" };
};
function Ws(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), i = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(i), t && (r.href = t), i.href = e, i.href;
}
const qs = /* @__PURE__ */ (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function Tt(e) {
  const t = [];
  for (let n = 0, r = e.length; n < r; n++)
    t.push(e[n]);
  return t;
}
let zt = null;
function La(e = {}) {
  return zt || (e.includeStyleProperties ? (zt = e.includeStyleProperties, zt) : (zt = Tt(window.getComputedStyle(document.documentElement)), zt));
}
function Nn(e, t) {
  const r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function Ys(e) {
  const t = Nn(e, "border-left-width"), n = Nn(e, "border-right-width");
  return e.clientWidth + t + n;
}
function Xs(e) {
  const t = Nn(e, "border-top-width"), n = Nn(e, "border-bottom-width");
  return e.clientHeight + t + n;
}
function Da(e, t = {}) {
  const n = t.width || Ys(e), r = t.height || Xs(e);
  return { width: n, height: r };
}
function Ks() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const n = t && t.env ? t.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const qe = 16384;
function Zs(e) {
  (e.width > qe || e.height > qe) && (e.width > qe && e.height > qe ? e.width > e.height ? (e.height *= qe / e.width, e.width = qe) : (e.width *= qe / e.height, e.height = qe) : e.width > qe ? (e.height *= qe / e.width, e.width = qe) : (e.width *= qe / e.height, e.height = qe));
}
function Qs(e, t = {}) {
  return e.toBlob ? new Promise((n) => {
    e.toBlob(n, t.type ? t.type : "image/png", t.quality ? t.quality : 1);
  }) : new Promise((n) => {
    const r = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(",")[1]), i = r.length, o = new Uint8Array(i);
    for (let a = 0; a < i; a += 1)
      o[a] = r.charCodeAt(a);
    n(new Blob([o], {
      type: t.type ? t.type : "image/png"
    }));
  });
}
function On(e) {
  return new Promise((t, n) => {
    const r = new Image();
    r.onload = () => {
      r.decode().then(() => {
        requestAnimationFrame(() => t(r));
      });
    }, r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = e;
  });
}
async function Js(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function eu(e, t, n) {
  const r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg"), o = document.createElementNS(r, "foreignObject");
  return i.setAttribute("width", `${t}`), i.setAttribute("height", `${n}`), i.setAttribute("viewBox", `0 0 ${t} ${n}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), i.appendChild(o), o.appendChild(e), Js(i);
}
const Ve = (e, t) => {
  if (e instanceof t)
    return !0;
  const n = Object.getPrototypeOf(e);
  return n === null ? !1 : n.constructor.name === t.name || Ve(n, t);
};
function tu(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function nu(e, t) {
  return La(t).map((n) => {
    const r = e.getPropertyValue(n), i = e.getPropertyPriority(n);
    return `${n}: ${r}${i ? " !important" : ""};`;
  }).join(" ");
}
function ru(e, t, n, r) {
  const i = `.${e}:${t}`, o = n.cssText ? tu(n) : nu(n, r);
  return document.createTextNode(`${i}{${o}}`);
}
function Ui(e, t, n, r) {
  const i = window.getComputedStyle(e, n), o = i.getPropertyValue("content");
  if (o === "" || o === "none")
    return;
  const a = qs();
  try {
    t.className = `${t.className} ${a}`;
  } catch {
    return;
  }
  const l = document.createElement("style");
  l.appendChild(ru(a, n, i, r)), t.appendChild(l);
}
function iu(e, t, n) {
  Ui(e, t, ":before", n), Ui(e, t, ":after", n);
}
const $i = "application/font-woff", ji = "image/jpeg", ou = {
  woff: $i,
  woff2: $i,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: ji,
  jpeg: ji,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function au(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function Zr(e) {
  const t = au(e).toLowerCase();
  return ou[t] || "";
}
function lu(e) {
  return e.split(/,/)[1];
}
function Pr(e) {
  return e.search(/^(data:)/) !== -1;
}
function su(e, t) {
  return `data:${t};base64,${e}`;
}
async function Ra(e, t, n) {
  const r = await fetch(e, t);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const i = await r.blob();
  return new Promise((o, a) => {
    const l = new FileReader();
    l.onerror = a, l.onloadend = () => {
      try {
        o(n({ res: r, result: l.result }));
      } catch (s) {
        a(s);
      }
    }, l.readAsDataURL(i);
  });
}
const cr = {};
function uu(e, t, n) {
  let r = e.replace(/\?.*/, "");
  return n && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), t ? `[${t}]${r}` : r;
}
async function Qr(e, t, n) {
  const r = uu(e, t, n.includeQueryParams);
  if (cr[r] != null)
    return cr[r];
  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i;
  try {
    const o = await Ra(e, n.fetchRequestInit, ({ res: a, result: l }) => (t || (t = a.headers.get("Content-Type") || ""), lu(l)));
    i = su(o, t);
  } catch (o) {
    i = n.imagePlaceholder || "";
    let a = `Failed to fetch resource: ${e}`;
    o && (a = typeof o == "string" ? o : o.message), a && console.warn(a);
  }
  return cr[r] = i, i;
}
async function cu(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : On(t);
}
async function fu(e, t) {
  if (e.currentSrc) {
    const o = document.createElement("canvas"), a = o.getContext("2d");
    o.width = e.clientWidth, o.height = e.clientHeight, a == null || a.drawImage(e, 0, 0, o.width, o.height);
    const l = o.toDataURL();
    return On(l);
  }
  const n = e.poster, r = Zr(n), i = await Qr(n, r, t);
  return On(i);
}
async function pu(e, t) {
  var n;
  try {
    if (!((n = e == null ? void 0 : e.contentDocument) === null || n === void 0) && n.body)
      return await Vn(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function hu(e, t) {
  return Ve(e, HTMLCanvasElement) ? cu(e) : Ve(e, HTMLVideoElement) ? fu(e, t) : Ve(e, HTMLIFrameElement) ? pu(e, t) : e.cloneNode(Pa(e));
}
const du = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Pa = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function mu(e, t, n) {
  var r, i;
  if (Pa(t))
    return t;
  let o = [];
  return du(e) && e.assignedNodes ? o = Tt(e.assignedNodes()) : Ve(e, HTMLIFrameElement) && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? o = Tt(e.contentDocument.body.childNodes) : o = Tt(((i = e.shadowRoot) !== null && i !== void 0 ? i : e).childNodes), o.length === 0 || Ve(e, HTMLVideoElement) || await o.reduce((a, l) => a.then(() => Vn(l, n)).then((s) => {
    s && t.appendChild(s);
  }), Promise.resolve()), t;
}
function gu(e, t, n) {
  const r = t.style;
  if (!r)
    return;
  const i = window.getComputedStyle(e);
  i.cssText ? (r.cssText = i.cssText, r.transformOrigin = i.transformOrigin) : La(n).forEach((o) => {
    let a = i.getPropertyValue(o);
    o === "font-size" && a.endsWith("px") && (a = `${Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1}px`), Ve(e, HTMLIFrameElement) && o === "display" && a === "inline" && (a = "block"), o === "d" && t.getAttribute("d") && (a = `path(${t.getAttribute("d")})`), r.setProperty(o, a, i.getPropertyPriority(o));
  });
}
function yu(e, t) {
  Ve(e, HTMLTextAreaElement) && (t.innerHTML = e.value), Ve(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function bu(e, t) {
  if (Ve(e, HTMLSelectElement)) {
    const n = t, r = Array.from(n.children).find((i) => e.value === i.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function ku(e, t, n) {
  return Ve(t, Element) && (gu(e, t, n), iu(e, t, n), yu(e, t), bu(e, t)), t;
}
async function xu(e, t) {
  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (n.length === 0)
    return e;
  const r = {};
  for (let o = 0; o < n.length; o++) {
    const l = n[o].getAttribute("xlink:href");
    if (l) {
      const s = e.querySelector(l), u = document.querySelector(l);
      !s && u && !r[l] && (r[l] = await Vn(u, t, !0));
    }
  }
  const i = Object.values(r);
  if (i.length) {
    const o = "http://www.w3.org/1999/xhtml", a = document.createElementNS(o, "svg");
    a.setAttribute("xmlns", o), a.style.position = "absolute", a.style.width = "0", a.style.height = "0", a.style.overflow = "hidden", a.style.display = "none";
    const l = document.createElementNS(o, "defs");
    a.appendChild(l);
    for (let s = 0; s < i.length; s++)
      l.appendChild(i[s]);
    e.appendChild(a);
  }
  return e;
}
async function Vn(e, t, n) {
  return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((r) => hu(r, t)).then((r) => mu(e, r, t)).then((r) => ku(e, r, t)).then((r) => xu(r, t));
}
const Na = /url\((['"]?)([^'"]+?)\1\)/g, wu = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Cu = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Eu(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function Su(e) {
  const t = [];
  return e.replace(Na, (n, r, i) => (t.push(i), n)), t.filter((n) => !Pr(n));
}
async function Tu(e, t, n, r, i) {
  try {
    const o = n ? Ws(t, n) : t, a = Zr(t);
    let l;
    return i || (l = await Qr(o, a, r)), e.replace(Eu(t), `$1${l}$3`);
  } catch {
  }
  return e;
}
function Au(e, { preferredFontFormat: t }) {
  return t ? e.replace(Cu, (n) => {
    for (; ; ) {
      const [r, , i] = wu.exec(n) || [];
      if (!i)
        return "";
      if (i === t)
        return `src: ${r};`;
    }
  }) : e;
}
function Oa(e) {
  return e.search(Na) !== -1;
}
async function Ma(e, t, n) {
  if (!Oa(e))
    return e;
  const r = Au(e, n);
  return Su(r).reduce((o, a) => o.then((l) => Tu(l, a, t, n)), Promise.resolve(r));
}
async function Bt(e, t, n) {
  var r;
  const i = (r = t.style) === null || r === void 0 ? void 0 : r.getPropertyValue(e);
  if (i) {
    const o = await Ma(i, null, n);
    return t.style.setProperty(e, o, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function _u(e, t) {
  await Bt("background", e, t) || await Bt("background-image", e, t), await Bt("mask", e, t) || await Bt("-webkit-mask", e, t) || await Bt("mask-image", e, t) || await Bt("-webkit-mask-image", e, t);
}
async function Iu(e, t) {
  const n = Ve(e, HTMLImageElement);
  if (!(n && !Pr(e.src)) && !(Ve(e, SVGImageElement) && !Pr(e.href.baseVal)))
    return;
  const r = n ? e.src : e.href.baseVal, i = await Qr(r, Zr(r), t);
  await new Promise((o, a) => {
    e.onload = o, e.onerror = t.onImageErrorHandler ? (...s) => {
      try {
        o(t.onImageErrorHandler(...s));
      } catch (u) {
        a(u);
      }
    } : a;
    const l = e;
    l.decode && (l.decode = o), l.loading === "lazy" && (l.loading = "eager"), n ? (e.srcset = "", e.src = i) : e.href.baseVal = i;
  });
}
async function vu(e, t) {
  const r = Tt(e.childNodes).map((i) => Fa(i, t));
  await Promise.all(r).then(() => e);
}
async function Fa(e, t) {
  Ve(e, Element) && (await _u(e, t), await Iu(e, t), await vu(e, t));
}
function Lu(e, t) {
  const { style: n } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
  const r = t.style;
  return r != null && Object.keys(r).forEach((i) => {
    n[i] = r[i];
  }), e;
}
const Vi = {};
async function Gi(e) {
  let t = Vi[e];
  if (t != null)
    return t;
  const r = await (await fetch(e)).text();
  return t = { url: e, cssText: r }, Vi[e] = t, t;
}
async function Wi(e, t) {
  let n = e.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, o = (n.match(/url\([^)]+\)/g) || []).map(async (a) => {
    let l = a.replace(r, "$1");
    return l.startsWith("https://") || (l = new URL(l, e.url).href), Ra(l, t.fetchRequestInit, ({ result: s }) => (n = n.replace(a, `url(${s})`), [a, s]));
  });
  return Promise.all(o).then(() => n);
}
function qi(e) {
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
  const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, a = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", l = new RegExp(a, "gi");
  for (; ; ) {
    let s = o.exec(r);
    if (s === null) {
      if (s = l.exec(r), s === null)
        break;
      o.lastIndex = l.lastIndex;
    } else
      l.lastIndex = o.lastIndex;
    t.push(s[0]);
  }
  return t;
}
async function Du(e, t) {
  const n = [], r = [];
  return e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Tt(i.cssRules || []).forEach((o, a) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let l = a + 1;
            const s = o.href, u = Gi(s).then((f) => Wi(f, t)).then((f) => qi(f).forEach((c) => {
              try {
                i.insertRule(c, c.startsWith("@import") ? l += 1 : i.cssRules.length);
              } catch (h) {
                console.error("Error inserting rule from remote css", {
                  rule: c,
                  error: h
                });
              }
            })).catch((f) => {
              console.error("Error loading remote css", f.toString());
            });
            r.push(u);
          }
        });
      } catch (o) {
        const a = e.find((l) => l.href == null) || document.styleSheets[0];
        i.href != null && r.push(Gi(i.href).then((l) => Wi(l, t)).then((l) => qi(l).forEach((s) => {
          a.insertRule(s, a.cssRules.length);
        })).catch((l) => {
          console.error("Error loading remote stylesheet", l);
        })), console.error("Error inlining remote css file", o);
      }
  }), Promise.all(r).then(() => (e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Tt(i.cssRules || []).forEach((o) => {
          n.push(o);
        });
      } catch (o) {
        console.error(`Error while reading CSS rules from ${i.href}`, o);
      }
  }), n));
}
function Ru(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => Oa(t.style.getPropertyValue("src")));
}
async function Pu(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Tt(e.ownerDocument.styleSheets), r = await Du(n, t);
  return Ru(r);
}
function za(e) {
  return e.trim().replace(/["']/g, "");
}
function Nu(e) {
  const t = /* @__PURE__ */ new Set();
  function n(r) {
    (r.style.fontFamily || getComputedStyle(r).fontFamily).split(",").forEach((o) => {
      t.add(za(o));
    }), Array.from(r.children).forEach((o) => {
      o instanceof HTMLElement && n(o);
    });
  }
  return n(e), t;
}
async function Ou(e, t) {
  const n = await Pu(e, t), r = Nu(e);
  return (await Promise.all(n.filter((o) => r.has(za(o.style.fontFamily))).map((o) => {
    const a = o.parentStyleSheet ? o.parentStyleSheet.href : null;
    return Ma(o.cssText, a, t);
  }))).join(`
`);
}
async function Mu(e, t) {
  const n = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await Ou(e, t);
  if (n) {
    const r = document.createElement("style"), i = document.createTextNode(n);
    r.appendChild(i), e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r);
  }
}
async function Fu(e, t = {}) {
  const { width: n, height: r } = Da(e, t), i = await Vn(e, t, !0);
  return await Mu(i, t), await Fa(i, t), Lu(i, t), await eu(i, n, r);
}
async function zu(e, t = {}) {
  const { width: n, height: r } = Da(e, t), i = await Fu(e, t), o = await On(i), a = document.createElement("canvas"), l = a.getContext("2d"), s = t.pixelRatio || Ks(), u = t.canvasWidth || n, f = t.canvasHeight || r;
  return a.width = u * s, a.height = f * s, t.skipAutoScale || Zs(a), a.style.width = `${u}`, a.style.height = `${f}`, t.backgroundColor && (l.fillStyle = t.backgroundColor, l.fillRect(0, 0, a.width, a.height)), l.drawImage(o, 0, 0, a.width, a.height), a;
}
async function Bu(e, t = {}) {
  const n = await zu(e, t);
  return await Qs(n);
}
const Hu = 3 * 60 * 1e3, Ba = dn(null), Uu = () => mn(Ba), $u = () => {
  const [e, t] = pe(null), [n, r] = pe(null), i = Ae(!1), o = q(() => {
    i.current || (i.current = !0, setTimeout(() => {
      const s = document.documentElement;
      Bu(s, {
        filter: (u) => {
          var f;
          return !((f = u.classList) != null && f.contains("elitea-assistant-container"));
        }
      }).then((u) => {
        t(u), r(Date.now());
      }).catch(() => {
        t(null), r(null);
      }).finally(() => {
        i.current = !1;
      });
    }, 1e3));
  }, []), a = q(() => {
    t(null), r(null);
  }, []), l = q(() => !e || !n || Date.now() - n > Hu ? null : e, [e, n]);
  return { screenshot: e, capturedAt: n, captureScreenshot: o, clearScreenshot: a, getValidScreenshot: l };
}, Ha = dn(null), ju = () => mn(Ha), Vu = (e) => {
  const [t, n] = pe(null);
  return Ke(() => {
    const r = Ts(e.url, {
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
}, Ua = dn(null), Gu = () => mn(Ua), Wu = 3, qu = 16, Yu = (e, t, n) => {
  const r = Ae(null), i = Ae(n), [o, a] = pe(0);
  i.current = n, Ke(() => {
    if (!t || !e) {
      a(e.length);
      return;
    }
    return a(0), r.current = setInterval(() => {
      a((s) => {
        const u = s + Wu;
        return u >= e.length ? (r.current && clearInterval(r.current), i.current(), e.length) : u;
      });
    }, qu), () => {
      r.current && clearInterval(r.current);
    };
  }, [e, t]);
  const l = q(() => {
    r.current && clearInterval(r.current), a(e.length), i.current();
  }, [e]);
  return { displayedText: e.slice(0, o), skipAnimation: l };
};
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function Yi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Xu(e) {
  if (Array.isArray(e)) return e;
}
function Ku(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, o, a, l = [], s = !0, u = !1;
    try {
      if (o = (n = n.call(e)).next, t !== 0) for (; !(s = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (f) {
      u = !0, i = f;
    } finally {
      try {
        if (!s && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw i;
      }
    }
    return l;
  }
}
function Zu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qu(e, t) {
  return Xu(e) || Ku(e, t) || Ju(e, t) || Zu();
}
function Ju(e, t) {
  if (e) {
    if (typeof e == "string") return Yi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Yi(e, t) : void 0;
  }
}
const $a = Object.entries, Xi = Object.setPrototypeOf, ec = Object.isFrozen, tc = Object.getPrototypeOf, nc = Object.getOwnPropertyDescriptor;
let Le = Object.freeze, De = Object.seal, $t = Object.create, ja = typeof Reflect < "u" && Reflect, Nr = ja.apply, Or = ja.construct;
Le || (Le = function(t) {
  return t;
});
De || (De = function(t) {
  return t;
});
Nr || (Nr = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    i[o - 2] = arguments[o];
  return t.apply(n, i);
});
Or || (Or = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const nn = Ee(Array.prototype.forEach), rc = Ee(Array.prototype.lastIndexOf), Ki = Ee(Array.prototype.pop), Ht = Ee(Array.prototype.push), ic = Ee(Array.prototype.splice), Et = Array.isArray, sn = Ee(String.prototype.toLowerCase), fr = Ee(String.prototype.toString), Zi = Ee(String.prototype.match), rn = Ee(String.prototype.replace), Qi = Ee(String.prototype.indexOf), oc = Ee(String.prototype.trim), ac = Ee(Number.prototype.toString), lc = Ee(Boolean.prototype.toString), Ji = typeof BigInt > "u" ? null : Ee(BigInt.prototype.toString), eo = typeof Symbol > "u" ? null : Ee(Symbol.prototype.toString), Te = Ee(Object.prototype.hasOwnProperty), on = Ee(Object.prototype.toString), ve = Ee(RegExp.prototype.test), vt = sc(TypeError);
function Ee(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return Nr(e, t, r);
  };
}
function sc(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Or(e, n);
  };
}
function se(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : sn;
  if (Xi && Xi(e, null), !Et(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const o = n(i);
      o !== i && (ec(t) || (t[r] = o), i = o);
    }
    e[i] = !0;
  }
  return e;
}
function uc(e) {
  for (let t = 0; t < e.length; t++)
    Te(e, t) || (e[t] = null);
  return e;
}
function He(e) {
  const t = $t(null);
  for (const r of $a(e)) {
    var n = Qu(r, 2);
    const i = n[0], o = n[1];
    Te(e, i) && (Et(o) ? t[i] = uc(o) : o && typeof o == "object" && o.constructor === Object ? t[i] = He(o) : t[i] = o);
  }
  return t;
}
function cc(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return ac(e);
    case "boolean":
      return lc(e);
    case "bigint":
      return Ji ? Ji(e) : "0";
    case "symbol":
      return eo ? eo(e) : "Symbol()";
    case "undefined":
      return on(e);
    case "function":
    case "object": {
      if (e === null)
        return on(e);
      const t = e, n = ct(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : on(r);
      }
      return on(e);
    }
    default:
      return on(e);
  }
}
function ct(e, t) {
  for (; e !== null; ) {
    const r = nc(e, t);
    if (r) {
      if (r.get)
        return Ee(r.get);
      if (typeof r.value == "function")
        return Ee(r.value);
    }
    e = tc(e);
  }
  function n() {
    return null;
  }
  return n;
}
function fc(e) {
  try {
    return ve(e, ""), !0;
  } catch {
    return !1;
  }
}
const to = Le(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), pr = Le(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), hr = Le(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), pc = Le(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), dr = Le(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), hc = Le(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), no = Le(["#text"]), ro = Le(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), mr = Le(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), io = Le(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), An = Le(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), dc = De(/{{[\w\W]*|^[\w\W]*}}/g), mc = De(/<%[\w\W]*|^[\w\W]*%>/g), gc = De(/\${[\w\W]*/g), yc = De(/^data-[\-\w.\u00B7-\uFFFF]+$/), bc = De(/^aria-[\-\w]+$/), oo = De(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), kc = De(/^(?:\w+script|data):/i), xc = De(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), wc = De(/^html$/i), Cc = De(/^[a-z][.\w]*(-[.\w]+)+$/i), ao = De(/<[/\w!]/g), Ec = De(/<[/\w]/g), Sc = De(/<\/no(script|embed|frames)/i), Tc = De(/\/>/i), ut = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, Ac = function() {
  return typeof window > "u" ? null : window;
}, _c = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const i = "data-tt-policy-suffix";
  n && n.hasAttribute(i) && (r = n.getAttribute(i));
  const o = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(o, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, lo = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, wt = function(t, n, r, i) {
  return Te(t, n) && Et(t[n]) ? se(i.base ? He(i.base) : {}, t[n], i.transform) : r;
};
function Va() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ac();
  const t = (D) => Va(D);
  if (t.version = "3.4.11", t.removed = [], !e || !e.document || e.document.nodeType !== ut.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, a = e.Node, l = e.Element, s = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, c = e.trustedTypes, h = l.prototype, p = ct(h, "cloneNode"), m = ct(h, "remove"), b = ct(h, "nextSibling"), E = ct(h, "childNodes"), k = ct(h, "parentNode"), _ = ct(h, "shadowRoot"), A = ct(h, "attributes"), R = a && a.prototype ? ct(a.prototype, "nodeType") : null, M = a && a.prototype ? ct(a.prototype, "nodeName") : null;
  if (typeof o == "function") {
    const D = n.createElement("template");
    D.content && D.content.ownerDocument && (n = D.content.ownerDocument);
  }
  let C, B = "", Q, X = !1, w = 0;
  const N = function() {
    if (w > 0)
      throw vt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, P = function(d) {
    N(), w++;
    try {
      return C.createHTML(d);
    } finally {
      w--;
    }
  }, Y = function(d) {
    N(), w++;
    try {
      return C.createScriptURL(d);
    } finally {
      w--;
    }
  }, ae = function() {
    return X || (Q = _c(c, i), X = !0), Q;
  }, W = n, O = W.implementation, ee = W.createNodeIterator, J = W.createDocumentFragment, Re = W.getElementsByTagName, g = r.importNode;
  let K = lo();
  t.isSupported = typeof $a == "function" && typeof k == "function" && O && O.createHTMLDocument !== void 0;
  const Pe = dc, y = mc, ge = gc, Ze = yc, ke = bc, ht = kc, We = xc, V = Cc;
  let U = oo, z = null;
  const ie = se({}, [...to, ...pr, ...hr, ...dr, ...no]);
  let re = null;
  const $e = se({}, [...ro, ...mr, ...io, ...An]);
  let $ = Object.seal($t(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), j = null, _e = null;
  const Ne = Object.seal($t(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let it = !0, Nt = !0, kn = !1, xn = !0, ot = !1, _t = !0, dt = !1, T = !1, v = null, G = null, te = !1, le = !1, Oe = !1, Qe = !1, Je = !0, bt = !1;
  const kt = "user-content-";
  let Ie = !0, at = !1, Me = {}, lt = null;
  const Zn = se({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let ki = null;
  const xi = se({}, ["audio", "video", "img", "source", "image", "track"]);
  let Qn = null;
  const wi = se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wn = "http://www.w3.org/1998/Math/MathML", Cn = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml";
  let Ot = st, Jn = !1, er = null;
  const as = se({}, [wn, Cn, st], fr), Ci = Le(["mi", "mo", "mn", "ms", "mtext"]);
  let tr = se({}, Ci);
  const Ei = Le(["annotation-xml"]);
  let nr = se({}, Ei);
  const ls = se({}, ["title", "style", "font", "a", "script"]);
  let Zt = null;
  const ss = ["application/xhtml+xml", "text/html"], us = "text/html";
  let be = null, Mt = null;
  const cs = n.createElement("form"), Si = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, rr = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Mt && Mt === d)
      return;
    (!d || typeof d != "object") && (d = {}), d = He(d), Zt = // eslint-disable-next-line unicorn/prefer-includes
    ss.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? us : d.PARSER_MEDIA_TYPE, be = Zt === "application/xhtml+xml" ? fr : sn, z = wt(d, "ALLOWED_TAGS", ie, {
      transform: be
    }), re = wt(d, "ALLOWED_ATTR", $e, {
      transform: be
    }), er = wt(d, "ALLOWED_NAMESPACES", as, {
      transform: fr
    }), Qn = wt(d, "ADD_URI_SAFE_ATTR", wi, {
      transform: be,
      base: wi
    }), ki = wt(d, "ADD_DATA_URI_TAGS", xi, {
      transform: be,
      base: xi
    }), lt = wt(d, "FORBID_CONTENTS", Zn, {
      transform: be
    }), j = wt(d, "FORBID_TAGS", He({}), {
      transform: be
    }), _e = wt(d, "FORBID_ATTR", He({}), {
      transform: be
    }), Me = Te(d, "USE_PROFILES") ? d.USE_PROFILES && typeof d.USE_PROFILES == "object" ? He(d.USE_PROFILES) : d.USE_PROFILES : !1, it = d.ALLOW_ARIA_ATTR !== !1, Nt = d.ALLOW_DATA_ATTR !== !1, kn = d.ALLOW_UNKNOWN_PROTOCOLS || !1, xn = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ot = d.SAFE_FOR_TEMPLATES || !1, _t = d.SAFE_FOR_XML !== !1, dt = d.WHOLE_DOCUMENT || !1, le = d.RETURN_DOM || !1, Oe = d.RETURN_DOM_FRAGMENT || !1, Qe = d.RETURN_TRUSTED_TYPE || !1, te = d.FORCE_BODY || !1, Je = d.SANITIZE_DOM !== !1, bt = d.SANITIZE_NAMED_PROPS || !1, Ie = d.KEEP_CONTENT !== !1, at = d.IN_PLACE || !1, U = fc(d.ALLOWED_URI_REGEXP) ? d.ALLOWED_URI_REGEXP : oo, Ot = typeof d.NAMESPACE == "string" ? d.NAMESPACE : st, tr = Te(d, "MATHML_TEXT_INTEGRATION_POINTS") && d.MATHML_TEXT_INTEGRATION_POINTS && typeof d.MATHML_TEXT_INTEGRATION_POINTS == "object" ? He(d.MATHML_TEXT_INTEGRATION_POINTS) : se({}, Ci), nr = Te(d, "HTML_INTEGRATION_POINTS") && d.HTML_INTEGRATION_POINTS && typeof d.HTML_INTEGRATION_POINTS == "object" ? He(d.HTML_INTEGRATION_POINTS) : se({}, Ei);
    const x = Te(d, "CUSTOM_ELEMENT_HANDLING") && d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING == "object" ? He(d.CUSTOM_ELEMENT_HANDLING) : $t(null);
    if ($ = $t(null), Te(x, "tagNameCheck") && Si(x.tagNameCheck) && ($.tagNameCheck = x.tagNameCheck), Te(x, "attributeNameCheck") && Si(x.attributeNameCheck) && ($.attributeNameCheck = x.attributeNameCheck), Te(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && ($.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), De($), ot && (Nt = !1), Oe && (le = !0), Me && (z = se({}, no), re = $t(null), Me.html === !0 && (se(z, to), se(re, ro)), Me.svg === !0 && (se(z, pr), se(re, mr), se(re, An)), Me.svgFilters === !0 && (se(z, hr), se(re, mr), se(re, An)), Me.mathMl === !0 && (se(z, dr), se(re, io), se(re, An))), Ne.tagCheck = null, Ne.attributeCheck = null, Te(d, "ADD_TAGS") && (typeof d.ADD_TAGS == "function" ? Ne.tagCheck = d.ADD_TAGS : Et(d.ADD_TAGS) && (z === ie && (z = He(z)), se(z, d.ADD_TAGS, be))), Te(d, "ADD_ATTR") && (typeof d.ADD_ATTR == "function" ? Ne.attributeCheck = d.ADD_ATTR : Et(d.ADD_ATTR) && (re === $e && (re = He(re)), se(re, d.ADD_ATTR, be))), Te(d, "ADD_URI_SAFE_ATTR") && Et(d.ADD_URI_SAFE_ATTR) && se(Qn, d.ADD_URI_SAFE_ATTR, be), Te(d, "FORBID_CONTENTS") && Et(d.FORBID_CONTENTS) && (lt === Zn && (lt = He(lt)), se(lt, d.FORBID_CONTENTS, be)), Te(d, "ADD_FORBID_CONTENTS") && Et(d.ADD_FORBID_CONTENTS) && (lt === Zn && (lt = He(lt)), se(lt, d.ADD_FORBID_CONTENTS, be)), Ie && (z["#text"] = !0), dt && se(z, ["html", "head", "body"]), z.table && (se(z, ["tbody"]), delete j.tbody), d.TRUSTED_TYPES_POLICY) {
      if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw vt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw vt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const L = C;
      C = d.TRUSTED_TYPES_POLICY;
      try {
        B = P("");
      } catch (F) {
        throw C = L, F;
      }
    } else d.TRUSTED_TYPES_POLICY === null ? (C = void 0, B = "") : (C === void 0 && (C = ae()), C && typeof B == "string" && (B = P("")));
    Le && Le(d), Mt = d;
  }, Ti = se({}, [...pr, ...hr, ...pc]), Ai = se({}, [...dr, ...hc]), fs = function(d, x, L) {
    return x.namespaceURI === st ? d === "svg" : x.namespaceURI === wn ? d === "svg" && (L === "annotation-xml" || tr[L]) : !!Ti[d];
  }, ps = function(d, x, L) {
    return x.namespaceURI === st ? d === "math" : x.namespaceURI === Cn ? d === "math" && nr[L] : !!Ai[d];
  }, hs = function(d, x, L) {
    return x.namespaceURI === Cn && !nr[L] || x.namespaceURI === wn && !tr[L] ? !1 : !Ai[d] && (ls[d] || !Ti[d]);
  }, ds = function(d) {
    let x = k(d);
    (!x || !x.tagName) && (x = {
      namespaceURI: Ot,
      tagName: "template"
    });
    const L = sn(d.tagName), F = sn(x.tagName);
    return er[d.namespaceURI] ? d.namespaceURI === Cn ? fs(L, x, F) : d.namespaceURI === wn ? ps(L, x, F) : d.namespaceURI === st ? hs(L, x, F) : !!(Zt === "application/xhtml+xml" && er[d.namespaceURI]) : !1;
  }, xt = function(d) {
    Ht(t.removed, {
      element: d
    });
    try {
      k(d).removeChild(d);
    } catch {
      if (m(d), !k(d))
        throw vt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, _i = function(d) {
    const x = E(d);
    if (x) {
      const F = [];
      nn(x, (ne) => {
        Ht(F, ne);
      }), nn(F, (ne) => {
        try {
          m(ne);
        } catch {
        }
      });
    }
    const L = A(d);
    if (L)
      for (let F = L.length - 1; F >= 0; --F) {
        const ne = L[F], ce = ne && ne.name;
        if (typeof ce == "string")
          try {
            d.removeAttribute(ce);
          } catch {
          }
      }
  }, It = function(d, x) {
    try {
      Ht(t.removed, {
        attribute: x.getAttributeNode(d),
        from: x
      });
    } catch {
      Ht(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(d), d === "is")
      if (le || Oe)
        try {
          xt(x);
        } catch {
        }
      else
        try {
          x.setAttribute(d, "");
        } catch {
        }
  }, ms = function(d) {
    const x = A(d);
    if (x)
      for (let L = x.length - 1; L >= 0; --L) {
        const F = x[L], ne = F && F.name;
        if (!(typeof ne != "string" || re[be(ne)]))
          try {
            d.removeAttribute(ne);
          } catch {
          }
      }
  }, gs = function(d) {
    const x = [d];
    for (; x.length > 0; ) {
      const L = x.pop();
      (R ? R(L) : L.nodeType) === ut.element && ms(L);
      const ne = E(L);
      if (ne)
        for (let ce = ne.length - 1; ce >= 0; --ce)
          x.push(ne[ce]);
    }
  }, Ii = function(d) {
    let x = null, L = null;
    if (te)
      d = "<remove></remove>" + d;
    else {
      const ce = Zi(d, /^[\r\n\t ]+/);
      L = ce && ce[0];
    }
    Zt === "application/xhtml+xml" && Ot === st && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const F = C ? P(d) : d;
    if (Ot === st)
      try {
        x = new f().parseFromString(F, Zt);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = O.createDocument(Ot, "template", null);
      try {
        x.documentElement.innerHTML = Jn ? B : F;
      } catch {
      }
    }
    const ne = x.body || x.documentElement;
    return d && L && ne.insertBefore(n.createTextNode(L), ne.childNodes[0] || null), Ot === st ? Re.call(x, dt ? "html" : "body")[0] : dt ? x.documentElement : ne;
  }, vi = function(d) {
    return ee.call(
      d.ownerDocument || d,
      d,
      // eslint-disable-next-line no-bitwise
      s.SHOW_ELEMENT | s.SHOW_COMMENT | s.SHOW_TEXT | s.SHOW_PROCESSING_INSTRUCTION | s.SHOW_CDATA_SECTION,
      null
    );
  }, En = function(d) {
    return d = rn(d, Pe, " "), d = rn(d, y, " "), d = rn(d, ge, " "), d;
  }, ir = function(d) {
    var x;
    d.normalize();
    const L = ee.call(
      d.ownerDocument || d,
      d,
      // eslint-disable-next-line no-bitwise
      s.SHOW_TEXT | s.SHOW_COMMENT | s.SHOW_CDATA_SECTION | s.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let F = L.nextNode();
    for (; F; )
      F.data = En(F.data), F = L.nextNode();
    const ne = (x = d.querySelectorAll) === null || x === void 0 ? void 0 : x.call(d, "template");
    ne && nn(ne, (ce) => {
      Ft(ce.content) && ir(ce.content);
    });
  }, Sn = function(d) {
    const x = M ? M(d) : null;
    return typeof x != "string" || be(x) !== "form" ? !1 : typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    d.attributes !== A(d) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    d.nodeType !== R(d) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    d.childNodes !== E(d);
  }, Ft = function(d) {
    if (!R || typeof d != "object" || d === null)
      return !1;
    try {
      return R(d) === ut.documentFragment;
    } catch {
      return !1;
    }
  }, Qt = function(d) {
    if (!R || typeof d != "object" || d === null)
      return !1;
    try {
      return typeof R(d) == "number";
    } catch {
      return !1;
    }
  };
  function mt(D, d, x) {
    D.length !== 0 && nn(D, (L) => {
      L.call(t, d, x, Mt);
    });
  }
  const ys = function(d, x) {
    return !!(_t && d.hasChildNodes() && !Qt(d.firstElementChild) && ve(ao, d.textContent) && ve(ao, d.innerHTML) || _t && d.namespaceURI === st && x === "style" && Qt(d.firstElementChild) || d.nodeType === ut.processingInstruction || _t && d.nodeType === ut.comment && ve(Ec, d.data));
  }, bs = function(d, x) {
    if (!j[x] && Ri(x) && ($.tagNameCheck instanceof RegExp && ve($.tagNameCheck, x) || $.tagNameCheck instanceof Function && $.tagNameCheck(x)))
      return !1;
    if (Ie && !lt[x]) {
      const L = k(d), F = E(d);
      if (F && L) {
        const ne = F.length;
        for (let ce = ne - 1; ce >= 0; --ce) {
          const Se = at ? F[ce] : p(F[ce], !0);
          L.insertBefore(Se, b(d));
        }
      }
    }
    return xt(d), !0;
  }, Li = function(d) {
    if (mt(K.beforeSanitizeElements, d, null), Sn(d))
      return xt(d), !0;
    const x = be(M ? M(d) : d.nodeName);
    if (mt(K.uponSanitizeElement, d, {
      tagName: x,
      allowedTags: z
    }), ys(d, x))
      return xt(d), !0;
    if (j[x] || !(Ne.tagCheck instanceof Function && Ne.tagCheck(x)) && !z[x])
      return bs(d, x);
    if ((R ? R(d) : d.nodeType) === ut.element && !ds(d) || (x === "noscript" || x === "noembed" || x === "noframes") && ve(Sc, d.innerHTML))
      return xt(d), !0;
    if (ot && d.nodeType === ut.text) {
      const F = En(d.textContent);
      d.textContent !== F && (Ht(t.removed, {
        element: d.cloneNode()
      }), d.textContent = F);
    }
    return mt(K.afterSanitizeElements, d, null), !1;
  }, Di = function(d, x, L) {
    if (_e[x] || Je && (x === "id" || x === "name") && (L in n || L in cs))
      return !1;
    const F = re[x] || Ne.attributeCheck instanceof Function && Ne.attributeCheck(x, d);
    if (!(Nt && ve(Ze, x))) {
      if (!(it && ve(ke, x))) {
        if (F) {
          if (!Qn[x]) {
            if (!ve(U, rn(L, We, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && d !== "script" && Qi(L, "data:") === 0 && ki[d])) {
                if (!(kn && !ve(ht, rn(L, We, "")))) {
                  if (L)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Ri(d) && ($.tagNameCheck instanceof RegExp && ve($.tagNameCheck, d) || $.tagNameCheck instanceof Function && $.tagNameCheck(d)) && ($.attributeNameCheck instanceof RegExp && ve($.attributeNameCheck, x) || $.attributeNameCheck instanceof Function && $.attributeNameCheck(x, d)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && $.allowCustomizedBuiltInElements && ($.tagNameCheck instanceof RegExp && ve($.tagNameCheck, L) || $.tagNameCheck instanceof Function && $.tagNameCheck(L)))
        ) return !1;
      }
    }
    return !0;
  }, ks = se({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ri = function(d) {
    return !ks[sn(d)] && ve(V, d);
  }, xs = function(d, x, L, F) {
    if (C && typeof c == "object" && typeof c.getAttributeType == "function" && !L)
      switch (c.getAttributeType(d, x)) {
        case "TrustedHTML":
          return P(F);
        case "TrustedScriptURL":
          return Y(F);
      }
    return F;
  }, ws = function(d, x, L, F) {
    try {
      L ? d.setAttributeNS(L, x, F) : d.setAttribute(x, F), Sn(d) ? xt(d) : Ki(t.removed);
    } catch {
      It(x, d);
    }
  }, Pi = function(d) {
    mt(K.beforeSanitizeAttributes, d, null);
    const x = d.attributes;
    if (!x || Sn(d))
      return;
    const L = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: re,
      forceKeepAttr: void 0
    };
    let F = x.length;
    const ne = be(d.nodeName);
    for (; F--; ) {
      const ce = x[F], Se = ce.name, xe = ce.namespaceURI, et = ce.value, nt = be(Se), ar = et;
      let Be = Se === "value" ? ar : oc(ar);
      if (L.attrName = nt, L.attrValue = Be, L.keepAttr = !0, L.forceKeepAttr = void 0, mt(K.uponSanitizeAttribute, d, L), Be = L.attrValue, bt && (nt === "id" || nt === "name") && Qi(Be, kt) !== 0 && (It(Se, d), Be = kt + Be), _t && ve(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Be)) {
        It(Se, d);
        continue;
      }
      if (nt === "attributename" && Zi(Be, "href")) {
        It(Se, d);
        continue;
      }
      if (!L.forceKeepAttr) {
        if (!L.keepAttr) {
          It(Se, d);
          continue;
        }
        if (!xn && ve(Tc, Be)) {
          It(Se, d);
          continue;
        }
        if (ot && (Be = En(Be)), !Di(ne, nt, Be)) {
          It(Se, d);
          continue;
        }
        Be = xs(ne, nt, xe, Be), Be !== ar && ws(d, Se, xe, Be);
      }
    }
    mt(K.afterSanitizeAttributes, d, null);
  }, Tn = function(d) {
    let x = null;
    const L = vi(d);
    for (mt(K.beforeSanitizeShadowDOM, d, null); x = L.nextNode(); )
      if (mt(K.uponSanitizeShadowNode, x, null), Li(x), Pi(x), Ft(x.content) && Tn(x.content), (R ? R(x) : x.nodeType) === ut.element) {
        const ne = _(x);
        Ft(ne) && (or(ne), Tn(ne));
      }
    mt(K.afterSanitizeShadowDOM, d, null);
  }, or = function(d) {
    const x = [{
      node: d,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const L = x.pop();
      if (L.shadow) {
        Tn(L.shadow);
        continue;
      }
      const F = L.node, ce = (R ? R(F) : F.nodeType) === ut.element, Se = E(F);
      if (Se)
        for (let xe = Se.length - 1; xe >= 0; --xe)
          x.push({
            node: Se[xe],
            shadow: null
          });
      if (ce) {
        const xe = M ? M(F) : null;
        if (typeof xe == "string" && be(xe) === "template") {
          const et = F.content;
          Ft(et) && x.push({
            node: et,
            shadow: null
          });
        }
      }
      if (ce) {
        const xe = _(F);
        Ft(xe) && x.push({
          node: null,
          shadow: xe
        }, {
          node: xe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(D) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, L = null, F = null, ne = null;
    if (Jn = !D, Jn && (D = "<!-->"), typeof D != "string" && !Qt(D) && (D = cc(D), typeof D != "string"))
      throw vt("dirty is not a string, aborting");
    if (!t.isSupported)
      return D;
    T ? (z = v, re = G) : rr(d), (K.uponSanitizeElement.length > 0 || K.uponSanitizeAttribute.length > 0) && (z = He(z)), K.uponSanitizeAttribute.length > 0 && (re = He(re)), t.removed = [];
    const ce = at && typeof D != "string" && Qt(D);
    if (ce) {
      const et = M ? M(D) : D.nodeName;
      if (typeof et == "string") {
        const nt = be(et);
        if (!z[nt] || j[nt])
          throw vt("root node is forbidden and cannot be sanitized in-place");
      }
      if (Sn(D))
        throw vt("root node is clobbered and cannot be sanitized in-place");
      try {
        or(D);
      } catch (nt) {
        throw _i(D), nt;
      }
    } else if (Qt(D))
      x = Ii("<!---->"), L = x.ownerDocument.importNode(D, !0), L.nodeType === ut.element && L.nodeName === "BODY" || L.nodeName === "HTML" ? x = L : x.appendChild(L), or(L);
    else {
      if (!le && !ot && !dt && // eslint-disable-next-line unicorn/prefer-includes
      D.indexOf("<") === -1)
        return C && Qe ? P(D) : D;
      if (x = Ii(D), !x)
        return le ? null : Qe ? B : "";
    }
    x && te && xt(x.firstChild);
    const Se = vi(ce ? D : x);
    try {
      for (; F = Se.nextNode(); )
        Li(F), Pi(F), Ft(F.content) && Tn(F.content);
    } catch (et) {
      throw ce && _i(D), et;
    }
    if (ce)
      return nn(t.removed, (et) => {
        et.element && gs(et.element);
      }), ot && ir(D), D;
    if (le) {
      if (ot && ir(x), Oe)
        for (ne = J.call(x.ownerDocument); x.firstChild; )
          ne.appendChild(x.firstChild);
      else
        ne = x;
      return (re.shadowroot || re.shadowrootmode) && (ne = g.call(r, ne, !0)), ne;
    }
    let xe = dt ? x.outerHTML : x.innerHTML;
    return dt && z["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && ve(wc, x.ownerDocument.doctype.name) && (xe = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + xe), ot && (xe = En(xe)), C && Qe ? P(xe) : xe;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    rr(D), T = !0, v = z, G = re;
  }, t.clearConfig = function() {
    Mt = null, T = !1, v = null, G = null, C = Q, B = "";
  }, t.isValidAttribute = function(D, d, x) {
    Mt || rr({});
    const L = be(D), F = be(d);
    return Di(L, F, x);
  }, t.addHook = function(D, d) {
    typeof d == "function" && Te(K, D) && Ht(K[D], d);
  }, t.removeHook = function(D, d) {
    if (Te(K, D)) {
      if (d !== void 0) {
        const x = rc(K[D], d);
        return x === -1 ? void 0 : ic(K[D], x, 1)[0];
      }
      return Ki(K[D]);
    }
  }, t.removeHooks = function(D) {
    Te(K, D) && (K[D] = []);
  }, t.removeAllHooks = function() {
    K = lo();
  }, t;
}
var Ic = Va();
const vc = (e) => {
  const t = Ae(`mermaid-${Math.random().toString(36).slice(2)}`), [n, r] = pe(null), [i, o] = pe(null), a = Dc();
  return Ke(() => {
    let l = !1;
    return r(null), o(null), import("mermaid").then(({ default: s }) => (s.initialize({ startOnLoad: !1, theme: a === "dark" ? "dark" : "default" }), s.render(t.current, e))).then(({ svg: s }) => {
      if (!l) {
        const u = Ic.sanitize(s, {
          ADD_TAGS: ["foreignObject"],
          HTML_INTEGRATION_POINTS: { foreignobject: !0 }
        });
        r(u);
      }
    }).catch((s) => {
      l || (console.warn("Mermaid rendering failed:", s), o("Unable to render this diagram. Please check the syntax."));
    }), () => {
      l = !0;
    };
  }, [e, a]), { svg: n, error: i };
}, Lc = () => {
  const [e, t] = pe(Hi);
  return Ke(() => {
    const n = Hi();
    if (n) {
      t(() => n);
      return;
    }
    Us.then((r) => t(() => r));
  }, []), e;
}, Ga = dn("light"), Dc = () => mn(Ga), Wa = fe((e) => {
  const {
    avatar: t,
    title: n,
    placeholder: r,
    welcomeMessage: i,
    supportProjectId: o,
    initialHistory: a,
    lastConversation: l,
    isInitLoading: s,
    isOpen: u,
    onClose: f,
    onExpand: c,
    expanded: h
  } = e, {
    messages: p,
    inputText: m,
    setInputText: b,
    attachments: E,
    addFiles: k,
    removeAttachment: _,
    history: A,
    currentConversationId: R,
    isLoading: M,
    isStreaming: C,
    isUploading: B,
    handleNewChat: Q,
    handleSelectConversation: X,
    handleSend: w,
    handleAnimationComplete: N
  } = js({
    welcomeMessage: i,
    supportProjectId: o,
    initialHistory: a,
    initialConversation: l,
    isInitLoading: s
  });
  return u ? /* @__PURE__ */ me(Un, { children: [
    h && /* @__PURE__ */ S(
      "div",
      {
        className: "elitea-assistant-overlay",
        onClick: c
      }
    ),
    /* @__PURE__ */ me("div", { className: `elitea-assistant-window${h ? " elitea-assistant-window--expanded" : ""}`, children: [
      /* @__PURE__ */ S(
        ga,
        {
          title: n,
          expanded: h,
          history: A,
          currentConversationId: R,
          disabled: M,
          onClose: f,
          onExpand: c,
          onNewChat: Q,
          onSelectConversation: X
        }
      ),
      /* @__PURE__ */ S(
        ya,
        {
          avatar: t,
          messages: p,
          isLoading: M,
          onAnimationComplete: N
        }
      ),
      /* @__PURE__ */ S(
        Ea,
        {
          placeholder: r,
          text: m,
          onTextChange: b,
          attachments: E,
          onAddFiles: k,
          onRemoveAttachment: _,
          onSend: w,
          expanded: h,
          disabled: M || C,
          isUploading: B
        }
      )
    ] })
  ] }) : null;
});
Wa.displayName = "ChatWindow";
const qa = fe((e) => {
  const { message: t, onClose: n } = e;
  return /* @__PURE__ */ me("div", { className: "elitea-assistant-popup", children: [
    /* @__PURE__ */ S("span", { className: "elitea-assistant-popup-text", children: t }),
    /* @__PURE__ */ S(
      "button",
      {
        className: "elitea-assistant-popup-close",
        onClick: n,
        "aria-label": "Close popup",
        type: "button",
        children: /* @__PURE__ */ S($n, {})
      }
    )
  ] });
});
qa.displayName = "PopupMessage";
const Ya = fe((e) => {
  const { message: t, onComplete: n } = e, { displayedText: r, skipAnimation: i } = Yu(t.content, !!t.isAnimating, n);
  return /* @__PURE__ */ S(
    "div",
    {
      onClick: i,
      style: { cursor: t.isAnimating ? "pointer" : void 0 },
      children: /* @__PURE__ */ S(
        bi,
        {
          isAnimating: !0,
          content: r
        }
      )
    }
  );
});
Ya.displayName = "AnimatedMessage";
const Xa = fe((e) => {
  const { message: t, avatar: n, onAnimationComplete: r } = e, i = t.role === "assistant" && !!t.statusMessage, o = t.role === "user" || t.content || !i && t.isStreaming;
  return /* @__PURE__ */ me("div", { className: `elitea-assistant-message-wrapper elitea-assistant-message-wrapper--${t.role}`, children: [
    /* @__PURE__ */ me("div", { className: `elitea-assistant-message-meta elitea-assistant-message-meta--${t.role}`, children: [
      t.role === "assistant" && /* @__PURE__ */ S("span", { className: "elitea-assistant-message-avatar elitea-assistant-message-avatar--assistant", children: /* @__PURE__ */ S(Yr, {}) }),
      /* @__PURE__ */ S("span", { className: "elitea-assistant-message-time", children: Os(t.timestamp) }),
      t.role === "user" && /* @__PURE__ */ S("span", { className: "elitea-assistant-message-avatar elitea-assistant-message-avatar--user", children: n ? /* @__PURE__ */ S(
        "img",
        {
          src: n,
          alt: "User avatar",
          className: "elitea-assistant-avatar-img"
        }
      ) : /* @__PURE__ */ S(ha, {}) })
    ] }),
    i && /* @__PURE__ */ S(Za, { message: t.statusMessage }),
    o && /* @__PURE__ */ me(
      "div",
      {
        className: `elitea-assistant-message elitea-assistant-message--${t.role}${t.isError ? " elitea-assistant-message--error" : ""}`,
        children: [
          t.content ? t.role === "assistant" ? t.isAnimating ? /* @__PURE__ */ S(
            Ya,
            {
              message: t,
              onComplete: () => r == null ? void 0 : r(t.id)
            }
          ) : /* @__PURE__ */ S(bi, { content: t.content }) : t.content : t.isStreaming ? /* @__PURE__ */ S(Qa, {}) : "",
          t.role === "assistant" && t.content && !t.isStreaming && !t.isAnimating && /* @__PURE__ */ S(ma, { text: t.content })
        ]
      }
    )
  ] });
});
Xa.displayName = "MessageItem";
const Ka = fe(() => /* @__PURE__ */ S("div", { className: "elitea-assistant-messages", children: Array.from({ length: 3 }).map((e, t) => /* @__PURE__ */ me(
  "div",
  {
    className: `elitea-assistant-skeleton-row ${t % 2 === 0 ? "elitea-assistant-skeleton-row--left" : "elitea-assistant-skeleton-row--right"}`,
    children: [
      /* @__PURE__ */ me("div", { className: "elitea-assistant-skeleton-meta", children: [
        /* @__PURE__ */ S("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--avatar" }),
        /* @__PURE__ */ S("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--time" })
      ] }),
      /* @__PURE__ */ S("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--bubble" })
    ]
  },
  t
)) }));
Ka.displayName = "MessageListSkeleton";
const Za = fe((e) => {
  const { message: t } = e;
  return t ? /* @__PURE__ */ S("div", { className: "elitea-assistant-status-message", children: t.split("").map((n, r) => /* @__PURE__ */ S(
    "span",
    {
      className: "elitea-assistant-status-message-char",
      style: {
        animationDelay: `${r * 0.1}s`,
        minWidth: n === " " ? "0.25em" : void 0
      },
      children: n === " " ? " " : n
    },
    `${t}-${r}`
  )) }) : null;
});
Za.displayName = "StatusMessage";
const Qa = fe(() => /* @__PURE__ */ me("span", { className: "elitea-assistant-typing-indicator", children: [
  /* @__PURE__ */ S("span", { className: "elitea-assistant-typing-dot" }),
  /* @__PURE__ */ S("span", { className: "elitea-assistant-typing-dot" }),
  /* @__PURE__ */ S("span", { className: "elitea-assistant-typing-dot" })
] }));
Qa.displayName = "TypingIndicator";
function Rc(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Pc = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Nc = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Oc = {};
function so(e, t) {
  return (Oc.jsx ? Nc : Pc).test(e);
}
const Mc = /[ \t\n\f\r]/g;
function Fc(e) {
  return typeof e == "object" ? e.type === "text" ? uo(e.value) : !1 : uo(e);
}
function uo(e) {
  return e.replace(Mc, "") === "";
}
class gn {
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
gn.prototype.normal = {};
gn.prototype.property = {};
gn.prototype.space = void 0;
function Ja(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new gn(n, r, t);
}
function Mr(e) {
  return e.toLowerCase();
}
class Ge {
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
Ge.prototype.attribute = "";
Ge.prototype.booleanish = !1;
Ge.prototype.boolean = !1;
Ge.prototype.commaOrSpaceSeparated = !1;
Ge.prototype.commaSeparated = !1;
Ge.prototype.defined = !1;
Ge.prototype.mustUseProperty = !1;
Ge.prototype.number = !1;
Ge.prototype.overloadedBoolean = !1;
Ge.prototype.property = "";
Ge.prototype.spaceSeparated = !1;
Ge.prototype.space = void 0;
let zc = 0;
const Z = Pt(), Ce = Pt(), Fr = Pt(), I = Pt(), de = Pt(), Wt = Pt(), Ye = Pt();
function Pt() {
  return 2 ** ++zc;
}
const zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Z,
  booleanish: Ce,
  commaOrSpaceSeparated: Ye,
  commaSeparated: Wt,
  number: I,
  overloadedBoolean: Fr,
  spaceSeparated: de
}, Symbol.toStringTag, { value: "Module" })), gr = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(zr)
);
class Jr extends Ge {
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
    let o = -1;
    if (super(t, n), co(this, "space", i), typeof r == "number")
      for (; ++o < gr.length; ) {
        const a = gr[o];
        co(this, gr[o], (r & zr[a]) === zr[a]);
      }
  }
}
Jr.prototype.defined = !0;
function co(e, t, n) {
  n && (e[t] = n);
}
function Xt(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new Jr(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[Mr(r)] = r, n[Mr(o.attribute)] = r;
  }
  return new gn(t, n, e.space);
}
const el = Xt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ce,
    ariaAutoComplete: null,
    ariaBusy: Ce,
    ariaChecked: Ce,
    ariaColCount: I,
    ariaColIndex: I,
    ariaColSpan: I,
    ariaControls: de,
    ariaCurrent: null,
    ariaDescribedBy: de,
    ariaDetails: null,
    ariaDisabled: Ce,
    ariaDropEffect: de,
    ariaErrorMessage: null,
    ariaExpanded: Ce,
    ariaFlowTo: de,
    ariaGrabbed: Ce,
    ariaHasPopup: null,
    ariaHidden: Ce,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: de,
    ariaLevel: I,
    ariaLive: null,
    ariaModal: Ce,
    ariaMultiLine: Ce,
    ariaMultiSelectable: Ce,
    ariaOrientation: null,
    ariaOwns: de,
    ariaPlaceholder: null,
    ariaPosInSet: I,
    ariaPressed: Ce,
    ariaReadOnly: Ce,
    ariaRelevant: null,
    ariaRequired: Ce,
    ariaRoleDescription: de,
    ariaRowCount: I,
    ariaRowIndex: I,
    ariaRowSpan: I,
    ariaSelected: Ce,
    ariaSetSize: I,
    ariaSort: null,
    ariaValueMax: I,
    ariaValueMin: I,
    ariaValueNow: I,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function tl(e, t) {
  return t in e ? e[t] : t;
}
function nl(e, t) {
  return tl(e, t.toLowerCase());
}
const Bc = Xt({
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
    accept: Wt,
    acceptCharset: de,
    accessKey: de,
    action: null,
    allow: null,
    allowFullScreen: Z,
    allowPaymentRequest: Z,
    allowUserMedia: Z,
    alt: null,
    as: null,
    async: Z,
    autoCapitalize: null,
    autoComplete: de,
    autoFocus: Z,
    autoPlay: Z,
    blocking: de,
    capture: null,
    charSet: null,
    checked: Z,
    cite: null,
    className: de,
    cols: I,
    colSpan: null,
    content: null,
    contentEditable: Ce,
    controls: Z,
    controlsList: de,
    coords: I | Wt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Z,
    defer: Z,
    dir: null,
    dirName: null,
    disabled: Z,
    download: Fr,
    draggable: Ce,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: Z,
    formTarget: null,
    headers: de,
    height: I,
    hidden: Fr,
    high: I,
    href: null,
    hrefLang: null,
    htmlFor: de,
    httpEquiv: de,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: Z,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Z,
    itemId: null,
    itemProp: de,
    itemRef: de,
    itemScope: Z,
    itemType: de,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Z,
    low: I,
    manifest: null,
    max: null,
    maxLength: I,
    media: null,
    method: null,
    min: null,
    minLength: I,
    multiple: Z,
    muted: Z,
    name: null,
    nonce: null,
    noModule: Z,
    noValidate: Z,
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
    open: Z,
    optimum: I,
    pattern: null,
    ping: de,
    placeholder: null,
    playsInline: Z,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Z,
    referrerPolicy: null,
    rel: de,
    required: Z,
    reversed: Z,
    rows: I,
    rowSpan: I,
    sandbox: de,
    scope: null,
    scoped: Z,
    seamless: Z,
    selected: Z,
    shadowRootClonable: Z,
    shadowRootDelegatesFocus: Z,
    shadowRootMode: null,
    shape: null,
    size: I,
    sizes: null,
    slot: null,
    span: I,
    spellCheck: Ce,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: I,
    step: null,
    style: null,
    tabIndex: I,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: Z,
    useMap: null,
    value: Ce,
    width: I,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: de,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: I,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: I,
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
    compact: Z,
    // Lists. Use CSS to reduce space between items instead
    declare: Z,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: I,
    // `<img>` and `<object>`
    leftMargin: I,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: I,
    // `<body>`
    marginWidth: I,
    // `<body>`
    noResize: Z,
    // `<frame>`
    noHref: Z,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: Z,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: Z,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: I,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Ce,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: I,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: I,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: Z,
    disableRemotePlayback: Z,
    prefix: null,
    property: null,
    results: I,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: nl
}), Hc = Xt({
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
    about: Ye,
    accentHeight: I,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: I,
    amplitude: I,
    arabicForm: null,
    ascent: I,
    attributeName: null,
    attributeType: null,
    azimuth: I,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: I,
    by: null,
    calcMode: null,
    capHeight: I,
    className: de,
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
    descent: I,
    diffuseConstant: I,
    direction: null,
    display: null,
    dur: null,
    divisor: I,
    dominantBaseline: null,
    download: Z,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: I,
    enableBackground: null,
    end: null,
    event: null,
    exponent: I,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: I,
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
    g1: Wt,
    g2: Wt,
    glyphName: Wt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: I,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: I,
    horizOriginX: I,
    horizOriginY: I,
    id: null,
    ideographic: I,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: I,
    k: I,
    k1: I,
    k2: I,
    k3: I,
    k4: I,
    kernelMatrix: Ye,
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
    limitingConeAngle: I,
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
    mediaSize: I,
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
    overlinePosition: I,
    overlineThickness: I,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: I,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: de,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: I,
    pointsAtY: I,
    pointsAtZ: I,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Ye,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Ye,
    rev: Ye,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Ye,
    requiredFeatures: Ye,
    requiredFonts: Ye,
    requiredFormats: Ye,
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
    specularConstant: I,
    specularExponent: I,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: I,
    strikethroughThickness: I,
    string: null,
    stroke: null,
    strokeDashArray: Ye,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: I,
    strokeOpacity: I,
    strokeWidth: null,
    style: null,
    surfaceScale: I,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ye,
    tabIndex: I,
    tableValues: null,
    target: null,
    targetX: I,
    targetY: I,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Ye,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: I,
    underlineThickness: I,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: I,
    values: null,
    vAlphabetic: I,
    vMathematical: I,
    vectorEffect: null,
    vHanging: I,
    vIdeographic: I,
    version: null,
    vertAdvY: I,
    vertOriginX: I,
    vertOriginY: I,
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
    xHeight: I,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: tl
}), rl = Xt({
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
}), il = Xt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: nl
}), ol = Xt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Uc = {
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
}, $c = /[A-Z]/g, fo = /-[a-z]/g, jc = /^data[-\w.:]+$/i;
function Vc(e, t) {
  const n = Mr(t);
  let r = t, i = Ge;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && jc.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(fo, Wc);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!fo.test(o)) {
        let a = o.replace($c, Gc);
        a.charAt(0) !== "-" && (a = "-" + a), t = "data" + a;
      }
    }
    i = Jr;
  }
  return new i(r, t);
}
function Gc(e) {
  return "-" + e.toLowerCase();
}
function Wc(e) {
  return e.charAt(1).toUpperCase();
}
const qc = Ja([el, Bc, rl, il, ol], "html"), ei = Ja([el, Hc, rl, il, ol], "svg");
function Yc(e) {
  return e.join(" ").trim();
}
var Mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function al(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ti = {}, po = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Xc = /\n/g, Kc = /^\s*/, Zc = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Qc = /^:\s*/, Jc = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, ef = /^[;\s]*/, tf = /^\s+|\s+$/g, nf = `
`, ho = "/", mo = "*", Dt = "", rf = "comment", of = "declaration";
function af(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(m) {
    var b = m.match(Xc);
    b && (n += b.length);
    var E = m.lastIndexOf(nf);
    r = ~E ? m.length - E : r + m.length;
  }
  function o() {
    var m = { line: n, column: r };
    return function(b) {
      return b.position = new a(m), u(), b;
    };
  }
  function a(m) {
    this.start = m, this.end = { line: n, column: r }, this.source = t.source;
  }
  a.prototype.content = e;
  function l(m) {
    var b = new Error(
      t.source + ":" + n + ":" + r + ": " + m
    );
    if (b.reason = m, b.filename = t.source, b.line = n, b.column = r, b.source = e, !t.silent) throw b;
  }
  function s(m) {
    var b = m.exec(e);
    if (b) {
      var E = b[0];
      return i(E), e = e.slice(E.length), b;
    }
  }
  function u() {
    s(Kc);
  }
  function f(m) {
    var b;
    for (m = m || []; b = c(); )
      b !== !1 && m.push(b);
    return m;
  }
  function c() {
    var m = o();
    if (!(ho != e.charAt(0) || mo != e.charAt(1))) {
      for (var b = 2; Dt != e.charAt(b) && (mo != e.charAt(b) || ho != e.charAt(b + 1)); )
        ++b;
      if (b += 2, Dt === e.charAt(b - 1))
        return l("End of comment missing");
      var E = e.slice(2, b - 2);
      return r += 2, i(E), e = e.slice(b), r += 2, m({
        type: rf,
        comment: E
      });
    }
  }
  function h() {
    var m = o(), b = s(Zc);
    if (b) {
      if (c(), !s(Qc)) return l("property missing ':'");
      var E = s(Jc), k = m({
        type: of,
        property: go(b[0].replace(po, Dt)),
        value: E ? go(E[0].replace(po, Dt)) : Dt
      });
      return s(ef), k;
    }
  }
  function p() {
    var m = [];
    f(m);
    for (var b; b = h(); )
      b !== !1 && (m.push(b), f(m));
    return m;
  }
  return u(), p();
}
function go(e) {
  return e ? e.replace(tf, Dt) : Dt;
}
var lf = af, sf = Mn && Mn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ti, "__esModule", { value: !0 });
ti.default = cf;
const uf = sf(lf);
function cf(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = (0, uf.default)(e), i = typeof t == "function";
  return r.forEach((o) => {
    if (o.type !== "declaration")
      return;
    const { property: a, value: l } = o;
    i ? t(a, l, o) : l && (n = n || {}, n[a] = l);
  }), n;
}
var Gn = {};
Object.defineProperty(Gn, "__esModule", { value: !0 });
Gn.camelCase = void 0;
var ff = /^--[a-zA-Z0-9_-]+$/, pf = /-([a-z])/g, hf = /^[^-]+$/, df = /^-(webkit|moz|ms|o|khtml)-/, mf = /^-(ms)-/, gf = function(e) {
  return !e || hf.test(e) || ff.test(e);
}, yf = function(e, t) {
  return t.toUpperCase();
}, yo = function(e, t) {
  return "".concat(t, "-");
}, bf = function(e, t) {
  return t === void 0 && (t = {}), gf(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(mf, yo) : e = e.replace(df, yo), e.replace(pf, yf));
};
Gn.camelCase = bf;
var kf = Mn && Mn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, xf = kf(ti), wf = Gn;
function Br(e, t) {
  var n = {};
  return !e || typeof e != "string" || (0, xf.default)(e, function(r, i) {
    r && i && (n[(0, wf.camelCase)(r, t)] = i);
  }), n;
}
Br.default = Br;
var Cf = Br;
const Ef = /* @__PURE__ */ al(Cf), ll = sl("end"), ni = sl("start");
function sl(e) {
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
function Sf(e) {
  const t = ni(e), n = ll(e);
  if (t && n)
    return { start: t, end: n };
}
function un(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? bo(e.position) : "start" in e || "end" in e ? bo(e) : "line" in e || "column" in e ? Hr(e) : "";
}
function Hr(e) {
  return ko(e && e.line) + ":" + ko(e && e.column);
}
function bo(e) {
  return Hr(e && e.start) + "-" + Hr(e && e.end);
}
function ko(e) {
  return e && typeof e == "number" ? e : 1;
}
class ze extends Error {
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
    let i = "", o = {}, a = !1;
    if (n && ("line" in n && "column" in n ? o = { place: n } : "start" in n && "end" in n ? o = { place: n } : "type" in n ? o = {
      ancestors: [n],
      place: n.position
    } : o = { ...n }), typeof t == "string" ? i = t : !o.cause && t && (a = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
      const s = r.indexOf(":");
      s === -1 ? o.ruleId = r : (o.source = r.slice(0, s), o.ruleId = r.slice(s + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const s = o.ancestors[o.ancestors.length - 1];
      s && (o.place = s.position);
    }
    const l = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = l ? l.line : void 0, this.name = un(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = a && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
ze.prototype.file = "";
ze.prototype.name = "";
ze.prototype.reason = "";
ze.prototype.message = "";
ze.prototype.stack = "";
ze.prototype.column = void 0;
ze.prototype.line = void 0;
ze.prototype.ancestors = void 0;
ze.prototype.cause = void 0;
ze.prototype.fatal = void 0;
ze.prototype.place = void 0;
ze.prototype.ruleId = void 0;
ze.prototype.source = void 0;
const ri = {}.hasOwnProperty, Tf = /* @__PURE__ */ new Map(), Af = /[A-Z]/g, _f = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), If = /* @__PURE__ */ new Set(["td", "th"]), ul = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function vf(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Ff(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Mf(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? ei : qc,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = cl(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function cl(e, t, n) {
  if (t.type === "element")
    return Lf(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Df(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return Pf(e, t, n);
  if (t.type === "mdxjsEsm")
    return Rf(e, t);
  if (t.type === "root")
    return Nf(e, t, n);
  if (t.type === "text")
    return Of(e, t);
}
function Lf(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = ei, e.schema = i), e.ancestors.push(t);
  const o = pl(e, t.tagName, !1), a = zf(e, t);
  let l = oi(e, t);
  return _f.has(t.tagName) && (l = l.filter(function(s) {
    return typeof s == "string" ? !Fc(s) : !0;
  })), fl(e, a, o, t), ii(a, l), e.ancestors.pop(), e.schema = r, e.create(t, o, a, n);
}
function Df(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  pn(e, t.position);
}
function Rf(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  pn(e, t.position);
}
function Pf(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = ei, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : pl(e, t.name, !0), a = Bf(e, t), l = oi(e, t);
  return fl(e, a, o, t), ii(a, l), e.ancestors.pop(), e.schema = r, e.create(t, o, a, n);
}
function Nf(e, t, n) {
  const r = {};
  return ii(r, oi(e, t)), e.create(t, e.Fragment, r, n);
}
function Of(e, t) {
  return t.value;
}
function fl(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function ii(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function Mf(e, t, n) {
  return r;
  function r(i, o, a, l) {
    const u = Array.isArray(a.children) ? n : t;
    return l ? u(o, a, l) : u(o, a);
  }
}
function Ff(e, t) {
  return n;
  function n(r, i, o, a) {
    const l = Array.isArray(o.children), s = ni(r);
    return t(
      i,
      o,
      a,
      l,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0
      },
      void 0
    );
  }
}
function zf(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && ri.call(t.properties, i)) {
      const o = Hf(e, i, t.properties[i]);
      if (o) {
        const [a, l] = o;
        e.tableCellAlignToStyle && a === "align" && typeof l == "string" && If.has(t.tagName) ? r = l : n[a] = l;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function Bf(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const a = o.expression;
        a.type;
        const l = a.properties[0];
        l.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(l.argument)
        );
      } else
        pn(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const l = r.value.data.estree.body[0];
          l.type, o = e.evaluater.evaluateExpression(l.expression);
        } else
          pn(e, t.position);
      else
        o = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return n;
}
function oi(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Tf;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let a;
    if (e.passKeys) {
      const s = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (s) {
        const u = i.get(s) || 0;
        a = s + "-" + u, i.set(s, u + 1);
      }
    }
    const l = cl(e, o, a);
    l !== void 0 && n.push(l);
  }
  return n;
}
function Hf(e, t, n) {
  const r = Vc(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Rc(n) : Yc(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Uf(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = $f(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Uc[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Uf(e, t) {
  try {
    return Ef(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new ze("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = ul + "#cannot-parse-style-attribute", i;
  }
}
function pl(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, a;
    for (; ++o < i.length; ) {
      const l = so(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      a = a ? {
        type: "MemberExpression",
        object: a,
        property: l,
        computed: !!(o && l.type === "Literal"),
        optional: !1
      } : l;
    }
    r = a;
  } else
    r = so(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return ri.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  pn(e);
}
function pn(e, t) {
  const n = new ze(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = ul + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function $f(e) {
  const t = {};
  let n;
  for (n in e)
    ri.call(e, n) && (t[jf(n)] = e[n]);
  return t;
}
function jf(e) {
  let t = e.replace(Af, Vf);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Vf(e) {
  return "-" + e.toLowerCase();
}
const yr = {
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
}, Gf = {};
function ai(e, t) {
  const n = Gf, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return hl(e, r, i);
}
function hl(e, t, n) {
  if (Wf(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return xo(e.children, t, n);
  }
  return Array.isArray(e) ? xo(e, t, n) : "";
}
function xo(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = hl(e[i], t, n);
  return r.join("");
}
function Wf(e) {
  return !!(e && typeof e == "object");
}
const wo = document.createElement("i");
function li(e) {
  const t = "&" + e + ";";
  wo.innerHTML = t;
  const n = wo.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Xe(e, t, n, r) {
  const i = e.length;
  let o = 0, a;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    a = Array.from(r), a.unshift(t, n), e.splice(...a);
  else
    for (n && e.splice(t, n); o < r.length; )
      a = r.slice(o, o + 1e4), a.unshift(t, 0), e.splice(...a), o += 1e4, t += 1e4;
}
function tt(e, t) {
  return e.length > 0 ? (Xe(e, e.length, 0, t), e) : t;
}
const Co = {}.hasOwnProperty;
function dl(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    qf(t, e[n]);
  return t;
}
function qf(e, t) {
  let n;
  for (n in t) {
    const i = (Co.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let a;
    if (o)
      for (a in o) {
        Co.call(i, a) || (i[a] = []);
        const l = o[a];
        Yf(
          // @ts-expect-error Looks like a list.
          i[a],
          Array.isArray(l) ? l : l ? [l] : []
        );
      }
  }
}
function Yf(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Xe(e, 0, 0, r);
}
function ml(e, t) {
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
function rt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Ue = At(/[A-Za-z]/), Fe = At(/[\dA-Za-z]/), Xf = At(/[#-'*+\--9=?A-Z^-~]/);
function Fn(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Ur = At(/\d/), Kf = At(/[\dA-Fa-f]/), Zf = At(/[!-/:-@[-`{-~]/);
function H(e) {
  return e !== null && e < -2;
}
function he(e) {
  return e !== null && (e < 0 || e === 32);
}
function oe(e) {
  return e === -2 || e === -1 || e === 32;
}
const Wn = At(new RegExp("\\p{P}|\\p{S}", "u")), Rt = At(/\s/);
function At(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Kt(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let a = "";
    if (o === 37 && Fe(e.charCodeAt(n + 1)) && Fe(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (a = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const l = e.charCodeAt(n + 1);
      o < 56320 && l > 56319 && l < 57344 ? (a = String.fromCharCode(o, l), i = 1) : a = "�";
    } else
      a = String.fromCharCode(o);
    a && (t.push(e.slice(r, n), encodeURIComponent(a)), r = n + i + 1, a = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function ue(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return a;
  function a(s) {
    return oe(s) ? (e.enter(n), l(s)) : t(s);
  }
  function l(s) {
    return oe(s) && o++ < i ? (e.consume(s), l) : (e.exit(n), t(s));
  }
}
const Qf = {
  tokenize: Jf
};
function Jf(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ue(e, t, "linePrefix");
  }
  function i(l) {
    return e.enter("paragraph"), o(l);
  }
  function o(l) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = s), n = s, a(l);
  }
  function a(l) {
    if (l === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(l);
      return;
    }
    return H(l) ? (e.consume(l), e.exit("chunkText"), o) : (e.consume(l), a);
  }
}
const ep = {
  tokenize: tp
}, Eo = {
  tokenize: np
};
function tp(e) {
  const t = this, n = [];
  let r = 0, i, o, a;
  return l;
  function l(A) {
    if (r < n.length) {
      const R = n[r];
      return t.containerState = R[1], e.attempt(R[0].continuation, s, u)(A);
    }
    return u(A);
  }
  function s(A) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && _();
      const R = t.events.length;
      let M = R, C;
      for (; M--; )
        if (t.events[M][0] === "exit" && t.events[M][1].type === "chunkFlow") {
          C = t.events[M][1].end;
          break;
        }
      k(r);
      let B = R;
      for (; B < t.events.length; )
        t.events[B][1].end = {
          ...C
        }, B++;
      return Xe(t.events, M + 1, 0, t.events.slice(R)), t.events.length = B, u(A);
    }
    return l(A);
  }
  function u(A) {
    if (r === n.length) {
      if (!i)
        return h(A);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return m(A);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Eo, f, c)(A);
  }
  function f(A) {
    return i && _(), k(r), h(A);
  }
  function c(A) {
    return t.parser.lazy[t.now().line] = r !== n.length, a = t.now().offset, m(A);
  }
  function h(A) {
    return t.containerState = {}, e.attempt(Eo, p, m)(A);
  }
  function p(A) {
    return r++, n.push([t.currentConstruct, t.containerState]), h(A);
  }
  function m(A) {
    if (A === null) {
      i && _(), k(0), e.consume(A);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: o
    }), b(A);
  }
  function b(A) {
    if (A === null) {
      E(e.exit("chunkFlow"), !0), k(0), e.consume(A);
      return;
    }
    return H(A) ? (e.consume(A), E(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, l) : (e.consume(A), b);
  }
  function E(A, R) {
    const M = t.sliceStream(A);
    if (R && M.push(null), A.previous = o, o && (o.next = A), o = A, i.defineSkip(A.start), i.write(M), t.parser.lazy[A.start.line]) {
      let C = i.events.length;
      for (; C--; )
        if (
          // The token starts before the line ending…
          i.events[C][1].start.offset < a && // …and either is not ended yet…
          (!i.events[C][1].end || // …or ends after it.
          i.events[C][1].end.offset > a)
        )
          return;
      const B = t.events.length;
      let Q = B, X, w;
      for (; Q--; )
        if (t.events[Q][0] === "exit" && t.events[Q][1].type === "chunkFlow") {
          if (X) {
            w = t.events[Q][1].end;
            break;
          }
          X = !0;
        }
      for (k(r), C = B; C < t.events.length; )
        t.events[C][1].end = {
          ...w
        }, C++;
      Xe(t.events, Q + 1, 0, t.events.slice(B)), t.events.length = C;
    }
  }
  function k(A) {
    let R = n.length;
    for (; R-- > A; ) {
      const M = n[R];
      t.containerState = M[1], M[0].exit.call(t, e);
    }
    n.length = A;
  }
  function _() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function np(e, t, n) {
  return ue(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Yt(e) {
  if (e === null || he(e) || Rt(e))
    return 1;
  if (Wn(e))
    return 2;
}
function qn(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const $r = {
  name: "attention",
  resolveAll: rp,
  tokenize: ip
};
function rp(e, t) {
  let n = -1, r, i, o, a, l, s, u, f;
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
          }, h = {
            ...e[n][1].start
          };
          So(c, -s), So(h, s), a = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
            end: {
              ...e[r][1].end
            }
          }, l = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: h
          }, o = {
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
              ...l.end
            }
          }, e[r][1].end = {
            ...a.start
          }, e[n][1].start = {
            ...l.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = tt(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = tt(u, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["enter", o, t]]), u = tt(u, qn(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = tt(u, [["exit", o, t], ["enter", l, t], ["exit", l, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (f = 2, u = tt(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : f = 0, Xe(e, r - 1, n - r + 3, u), n = r + u.length - f - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function ip(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Yt(r);
  let o;
  return a;
  function a(s) {
    return o = s, e.enter("attentionSequence"), l(s);
  }
  function l(s) {
    if (s === o)
      return e.consume(s), l;
    const u = e.exit("attentionSequence"), f = Yt(s), c = !f || f === 2 && i || n.includes(s), h = !i || i === 2 && f || n.includes(r);
    return u._open = !!(o === 42 ? c : c && (i || !h)), u._close = !!(o === 42 ? h : h && (f || !c)), t(s);
  }
}
function So(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const op = {
  name: "autolink",
  tokenize: ap
};
function ap(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(p) {
    return Ue(p) ? (e.consume(p), a) : p === 64 ? n(p) : u(p);
  }
  function a(p) {
    return p === 43 || p === 45 || p === 46 || Fe(p) ? (r = 1, l(p)) : u(p);
  }
  function l(p) {
    return p === 58 ? (e.consume(p), r = 0, s) : (p === 43 || p === 45 || p === 46 || Fe(p)) && r++ < 32 ? (e.consume(p), l) : (r = 0, u(p));
  }
  function s(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || Fn(p) ? n(p) : (e.consume(p), s);
  }
  function u(p) {
    return p === 64 ? (e.consume(p), f) : Xf(p) ? (e.consume(p), u) : n(p);
  }
  function f(p) {
    return Fe(p) ? c(p) : n(p);
  }
  function c(p) {
    return p === 46 ? (e.consume(p), r = 0, f) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(p);
  }
  function h(p) {
    if ((p === 45 || Fe(p)) && r++ < 63) {
      const m = p === 45 ? h : c;
      return e.consume(p), m;
    }
    return n(p);
  }
}
const yn = {
  partial: !0,
  tokenize: lp
};
function lp(e, t, n) {
  return r;
  function r(o) {
    return oe(o) ? ue(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || H(o) ? t(o) : n(o);
  }
}
const gl = {
  continuation: {
    tokenize: up
  },
  exit: cp,
  name: "blockQuote",
  tokenize: sp
};
function sp(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    if (a === 62) {
      const l = r.containerState;
      return l.open || (e.enter("blockQuote", {
        _container: !0
      }), l.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(a), e.exit("blockQuoteMarker"), o;
    }
    return n(a);
  }
  function o(a) {
    return oe(a) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(a));
  }
}
function up(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return oe(a) ? ue(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : o(a);
  }
  function o(a) {
    return e.attempt(gl, t, n)(a);
  }
}
function cp(e) {
  e.exit("blockQuote");
}
const yl = {
  name: "characterEscape",
  tokenize: fp
};
function fp(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return Zf(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const bl = {
  name: "characterReference",
  tokenize: pp
};
function pp(e, t, n) {
  const r = this;
  let i = 0, o, a;
  return l;
  function l(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), s;
  }
  function s(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, a = Fe, f(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, a = Kf, f) : (e.enter("characterReferenceValue"), o = 7, a = Ur, f(c));
  }
  function f(c) {
    if (c === 59 && i) {
      const h = e.exit("characterReferenceValue");
      return a === Fe && !li(r.sliceSerialize(h)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return a(c) && i++ < o ? (e.consume(c), f) : n(c);
  }
}
const To = {
  partial: !0,
  tokenize: dp
}, Ao = {
  concrete: !0,
  name: "codeFenced",
  tokenize: hp
};
function hp(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: M
  };
  let o = 0, a = 0, l;
  return s;
  function s(C) {
    return u(C);
  }
  function u(C) {
    const B = r.events[r.events.length - 1];
    return o = B && B[1].type === "linePrefix" ? B[2].sliceSerialize(B[1], !0).length : 0, l = C, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), f(C);
  }
  function f(C) {
    return C === l ? (a++, e.consume(C), f) : a < 3 ? n(C) : (e.exit("codeFencedFenceSequence"), oe(C) ? ue(e, c, "whitespace")(C) : c(C));
  }
  function c(C) {
    return C === null || H(C) ? (e.exit("codeFencedFence"), r.interrupt ? t(C) : e.check(To, b, R)(C)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), h(C));
  }
  function h(C) {
    return C === null || H(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(C)) : oe(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ue(e, p, "whitespace")(C)) : C === 96 && C === l ? n(C) : (e.consume(C), h);
  }
  function p(C) {
    return C === null || H(C) ? c(C) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(C));
  }
  function m(C) {
    return C === null || H(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(C)) : C === 96 && C === l ? n(C) : (e.consume(C), m);
  }
  function b(C) {
    return e.attempt(i, R, E)(C);
  }
  function E(C) {
    return e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), k;
  }
  function k(C) {
    return o > 0 && oe(C) ? ue(e, _, "linePrefix", o + 1)(C) : _(C);
  }
  function _(C) {
    return C === null || H(C) ? e.check(To, b, R)(C) : (e.enter("codeFlowValue"), A(C));
  }
  function A(C) {
    return C === null || H(C) ? (e.exit("codeFlowValue"), _(C)) : (e.consume(C), A);
  }
  function R(C) {
    return e.exit("codeFenced"), t(C);
  }
  function M(C, B, Q) {
    let X = 0;
    return w;
    function w(W) {
      return C.enter("lineEnding"), C.consume(W), C.exit("lineEnding"), N;
    }
    function N(W) {
      return C.enter("codeFencedFence"), oe(W) ? ue(C, P, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(W) : P(W);
    }
    function P(W) {
      return W === l ? (C.enter("codeFencedFenceSequence"), Y(W)) : Q(W);
    }
    function Y(W) {
      return W === l ? (X++, C.consume(W), Y) : X >= a ? (C.exit("codeFencedFenceSequence"), oe(W) ? ue(C, ae, "whitespace")(W) : ae(W)) : Q(W);
    }
    function ae(W) {
      return W === null || H(W) ? (C.exit("codeFencedFence"), B(W)) : Q(W);
    }
  }
}
function dp(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a === null ? n(a) : (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
const br = {
  name: "codeIndented",
  tokenize: gp
}, mp = {
  partial: !0,
  tokenize: yp
};
function gp(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), ue(e, o, "linePrefix", 5)(u);
  }
  function o(u) {
    const f = r.events[r.events.length - 1];
    return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], !0).length >= 4 ? a(u) : n(u);
  }
  function a(u) {
    return u === null ? s(u) : H(u) ? e.attempt(mp, a, s)(u) : (e.enter("codeFlowValue"), l(u));
  }
  function l(u) {
    return u === null || H(u) ? (e.exit("codeFlowValue"), a(u)) : (e.consume(u), l);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function yp(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return r.parser.lazy[r.now().line] ? n(a) : H(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i) : ue(e, o, "linePrefix", 5)(a);
  }
  function o(a) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : H(a) ? i(a) : n(a);
  }
}
const bp = {
  name: "codeText",
  previous: xp,
  resolve: kp,
  tokenize: wp
};
function kp(e) {
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
function xp(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function wp(e, t, n) {
  let r = 0, i, o;
  return a;
  function a(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), l(c);
  }
  function l(c) {
    return c === 96 ? (e.consume(c), r++, l) : (e.exit("codeTextSequence"), s(c));
  }
  function s(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), s) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, f(c)) : H(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || H(c) ? (e.exit("codeTextData"), s(c)) : (e.consume(c), u);
  }
  function f(c) {
    return c === 96 ? (e.consume(c), i++, f) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (o.type = "codeTextData", u(c));
  }
}
class Cp {
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
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && an(this.left, r), o.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), an(this.left, t);
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
    this.setCursor(0), an(this.right, t.reverse());
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
        an(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        an(this.left, n.reverse());
      }
  }
}
function an(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function kl(e) {
  const t = {};
  let n = -1, r, i, o, a, l, s, u;
  const f = new Cp(e);
  for (; ++n < f.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = f.get(n), n && r[1].type === "chunkFlow" && f.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content"))
      for (; ++o < s.length && s[o][1].type !== "content"; )
        s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Ep(f, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o--; )
        if (a = f.get(o), a[1].type === "lineEnding" || a[1].type === "lineEndingBlank")
          a[0] === "enter" && (i && (f.get(i)[1].type = "lineEndingBlank"), a[1].type = "lineEnding", i = o);
        else if (!(a[1].type === "linePrefix" || a[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...f.get(i)[1].start
      }, l = f.slice(i, n), l.unshift(r), f.splice(i, n - i + 1, l));
    }
  }
  return Xe(e, 0, Number.POSITIVE_INFINITY, f.slice(0)), !u;
}
function Ep(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [];
  let a = n._tokenizer;
  a || (a = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
  const l = a.events, s = [], u = {};
  let f, c, h = -1, p = n, m = 0, b = 0;
  const E = [b];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; )
      ;
    o.push(i), p._tokenizer || (f = r.sliceStream(p), p.next || f.push(null), c && a.defineSkip(p.start), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(f), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), c = p, p = p.next;
  }
  for (p = n; ++h < l.length; )
    // Find a void token that includes a break.
    l[h][0] === "exit" && l[h - 1][0] === "enter" && l[h][1].type === l[h - 1][1].type && l[h][1].start.line !== l[h][1].end.line && (b = h + 1, E.push(b), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (a.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : E.pop(), h = E.length; h--; ) {
    const k = l.slice(E[h], E[h + 1]), _ = o.pop();
    s.push([_, _ + k.length - 1]), e.splice(_, 2, k);
  }
  for (s.reverse(), h = -1; ++h < s.length; )
    u[m + s[h][0]] = m + s[h][1], m += s[h][1] - s[h][0] - 1;
  return u;
}
const Sp = {
  resolve: Ap,
  tokenize: _p
}, Tp = {
  partial: !0,
  tokenize: Ip
};
function Ap(e) {
  return kl(e), e;
}
function _p(e, t) {
  let n;
  return r;
  function r(l) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(l);
  }
  function i(l) {
    return l === null ? o(l) : H(l) ? e.check(Tp, a, o)(l) : (e.consume(l), i);
  }
  function o(l) {
    return e.exit("chunkContent"), e.exit("content"), t(l);
  }
  function a(l) {
    return e.consume(l), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function Ip(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ue(e, o, "linePrefix");
  }
  function o(a) {
    if (a === null || H(a))
      return n(a);
    const l = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : e.interrupt(r.parser.constructs.flow, n, t)(a);
  }
}
function xl(e, t, n, r, i, o, a, l, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(k) {
    return k === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(k), e.exit(o), h) : k === null || k === 32 || k === 41 || Fn(k) ? n(k) : (e.enter(r), e.enter(a), e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), b(k));
  }
  function h(k) {
    return k === 62 ? (e.enter(o), e.consume(k), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), p(k));
  }
  function p(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(l), h(k)) : k === null || k === 60 || H(k) ? n(k) : (e.consume(k), k === 92 ? m : p);
  }
  function m(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), p) : p(k);
  }
  function b(k) {
    return !f && (k === null || k === 41 || he(k)) ? (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(r), t(k)) : f < u && k === 40 ? (e.consume(k), f++, b) : k === 41 ? (e.consume(k), f--, b) : k === null || k === 32 || k === 40 || Fn(k) ? n(k) : (e.consume(k), k === 92 ? E : b);
  }
  function E(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), b) : b(k);
  }
}
function wl(e, t, n, r, i, o) {
  const a = this;
  let l = 0, s;
  return u;
  function u(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(o), f;
  }
  function f(p) {
    return l > 999 || p === null || p === 91 || p === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !l && "_hiddenFootnoteSupport" in a.parser.constructs ? n(p) : p === 93 ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : H(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), f) : (e.enter("chunkString", {
      contentType: "string"
    }), c(p));
  }
  function c(p) {
    return p === null || p === 91 || p === 93 || H(p) || l++ > 999 ? (e.exit("chunkString"), f(p)) : (e.consume(p), s || (s = !oe(p)), p === 92 ? h : c);
  }
  function h(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), l++, c) : c(p);
  }
}
function Cl(e, t, n, r, i, o) {
  let a;
  return l;
  function l(h) {
    return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), a = h === 40 ? 41 : h, s) : n(h);
  }
  function s(h) {
    return h === a ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(o), u(h));
  }
  function u(h) {
    return h === a ? (e.exit(o), s(a)) : h === null ? n(h) : H(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), ue(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), f(h));
  }
  function f(h) {
    return h === a || h === null || H(h) ? (e.exit("chunkString"), u(h)) : (e.consume(h), h === 92 ? c : f);
  }
  function c(h) {
    return h === a || h === 92 ? (e.consume(h), f) : f(h);
  }
}
function cn(e, t) {
  let n;
  return r;
  function r(i) {
    return H(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : oe(i) ? ue(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const vp = {
  name: "definition",
  tokenize: Dp
}, Lp = {
  partial: !0,
  tokenize: Rp
};
function Dp(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter("definition"), a(p);
  }
  function a(p) {
    return wl.call(
      r,
      e,
      l,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function l(p) {
    return i = rt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), s) : n(p);
  }
  function s(p) {
    return he(p) ? cn(e, u)(p) : u(p);
  }
  function u(p) {
    return xl(
      e,
      f,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function f(p) {
    return e.attempt(Lp, c, c)(p);
  }
  function c(p) {
    return oe(p) ? ue(e, h, "whitespace")(p) : h(p);
  }
  function h(p) {
    return p === null || H(p) ? (e.exit("definition"), r.parser.defined.push(i), t(p)) : n(p);
  }
}
function Rp(e, t, n) {
  return r;
  function r(l) {
    return he(l) ? cn(e, i)(l) : n(l);
  }
  function i(l) {
    return Cl(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(l);
  }
  function o(l) {
    return oe(l) ? ue(e, a, "whitespace")(l) : a(l);
  }
  function a(l) {
    return l === null || H(l) ? t(l) : n(l);
  }
}
const Pp = {
  name: "hardBreakEscape",
  tokenize: Np
};
function Np(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return H(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const Op = {
  name: "headingAtx",
  resolve: Mp,
  tokenize: Fp
};
function Mp(e, t) {
  let n = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Xe(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function Fp(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("atxHeading"), o(f);
  }
  function o(f) {
    return e.enter("atxHeadingSequence"), a(f);
  }
  function a(f) {
    return f === 35 && r++ < 6 ? (e.consume(f), a) : f === null || he(f) ? (e.exit("atxHeadingSequence"), l(f)) : n(f);
  }
  function l(f) {
    return f === 35 ? (e.enter("atxHeadingSequence"), s(f)) : f === null || H(f) ? (e.exit("atxHeading"), t(f)) : oe(f) ? ue(e, l, "whitespace")(f) : (e.enter("atxHeadingText"), u(f));
  }
  function s(f) {
    return f === 35 ? (e.consume(f), s) : (e.exit("atxHeadingSequence"), l(f));
  }
  function u(f) {
    return f === null || f === 35 || he(f) ? (e.exit("atxHeadingText"), l(f)) : (e.consume(f), u);
  }
}
const zp = [
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
], _o = ["pre", "script", "style", "textarea"], Bp = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: $p,
  tokenize: jp
}, Hp = {
  partial: !0,
  tokenize: Gp
}, Up = {
  partial: !0,
  tokenize: Vp
};
function $p(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function jp(e, t, n) {
  const r = this;
  let i, o, a, l, s;
  return u;
  function u(y) {
    return f(y);
  }
  function f(y) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(y), c;
  }
  function c(y) {
    return y === 33 ? (e.consume(y), h) : y === 47 ? (e.consume(y), o = !0, b) : y === 63 ? (e.consume(y), i = 3, r.interrupt ? t : g) : Ue(y) ? (e.consume(y), a = String.fromCharCode(y), E) : n(y);
  }
  function h(y) {
    return y === 45 ? (e.consume(y), i = 2, p) : y === 91 ? (e.consume(y), i = 5, l = 0, m) : Ue(y) ? (e.consume(y), i = 4, r.interrupt ? t : g) : n(y);
  }
  function p(y) {
    return y === 45 ? (e.consume(y), r.interrupt ? t : g) : n(y);
  }
  function m(y) {
    const ge = "CDATA[";
    return y === ge.charCodeAt(l++) ? (e.consume(y), l === ge.length ? r.interrupt ? t : P : m) : n(y);
  }
  function b(y) {
    return Ue(y) ? (e.consume(y), a = String.fromCharCode(y), E) : n(y);
  }
  function E(y) {
    if (y === null || y === 47 || y === 62 || he(y)) {
      const ge = y === 47, Ze = a.toLowerCase();
      return !ge && !o && _o.includes(Ze) ? (i = 1, r.interrupt ? t(y) : P(y)) : zp.includes(a.toLowerCase()) ? (i = 6, ge ? (e.consume(y), k) : r.interrupt ? t(y) : P(y)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(y) : o ? _(y) : A(y));
    }
    return y === 45 || Fe(y) ? (e.consume(y), a += String.fromCharCode(y), E) : n(y);
  }
  function k(y) {
    return y === 62 ? (e.consume(y), r.interrupt ? t : P) : n(y);
  }
  function _(y) {
    return oe(y) ? (e.consume(y), _) : w(y);
  }
  function A(y) {
    return y === 47 ? (e.consume(y), w) : y === 58 || y === 95 || Ue(y) ? (e.consume(y), R) : oe(y) ? (e.consume(y), A) : w(y);
  }
  function R(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || Fe(y) ? (e.consume(y), R) : M(y);
  }
  function M(y) {
    return y === 61 ? (e.consume(y), C) : oe(y) ? (e.consume(y), M) : A(y);
  }
  function C(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? n(y) : y === 34 || y === 39 ? (e.consume(y), s = y, B) : oe(y) ? (e.consume(y), C) : Q(y);
  }
  function B(y) {
    return y === s ? (e.consume(y), s = null, X) : y === null || H(y) ? n(y) : (e.consume(y), B);
  }
  function Q(y) {
    return y === null || y === 34 || y === 39 || y === 47 || y === 60 || y === 61 || y === 62 || y === 96 || he(y) ? M(y) : (e.consume(y), Q);
  }
  function X(y) {
    return y === 47 || y === 62 || oe(y) ? A(y) : n(y);
  }
  function w(y) {
    return y === 62 ? (e.consume(y), N) : n(y);
  }
  function N(y) {
    return y === null || H(y) ? P(y) : oe(y) ? (e.consume(y), N) : n(y);
  }
  function P(y) {
    return y === 45 && i === 2 ? (e.consume(y), O) : y === 60 && i === 1 ? (e.consume(y), ee) : y === 62 && i === 4 ? (e.consume(y), K) : y === 63 && i === 3 ? (e.consume(y), g) : y === 93 && i === 5 ? (e.consume(y), Re) : H(y) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Hp, Pe, Y)(y)) : y === null || H(y) ? (e.exit("htmlFlowData"), Y(y)) : (e.consume(y), P);
  }
  function Y(y) {
    return e.check(Up, ae, Pe)(y);
  }
  function ae(y) {
    return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), W;
  }
  function W(y) {
    return y === null || H(y) ? Y(y) : (e.enter("htmlFlowData"), P(y));
  }
  function O(y) {
    return y === 45 ? (e.consume(y), g) : P(y);
  }
  function ee(y) {
    return y === 47 ? (e.consume(y), a = "", J) : P(y);
  }
  function J(y) {
    if (y === 62) {
      const ge = a.toLowerCase();
      return _o.includes(ge) ? (e.consume(y), K) : P(y);
    }
    return Ue(y) && a.length < 8 ? (e.consume(y), a += String.fromCharCode(y), J) : P(y);
  }
  function Re(y) {
    return y === 93 ? (e.consume(y), g) : P(y);
  }
  function g(y) {
    return y === 62 ? (e.consume(y), K) : y === 45 && i === 2 ? (e.consume(y), g) : P(y);
  }
  function K(y) {
    return y === null || H(y) ? (e.exit("htmlFlowData"), Pe(y)) : (e.consume(y), K);
  }
  function Pe(y) {
    return e.exit("htmlFlow"), t(y);
  }
}
function Vp(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return H(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o) : n(a);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
function Gp(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(yn, t, n);
  }
}
const Wp = {
  name: "htmlText",
  tokenize: qp
};
function qp(e, t, n) {
  const r = this;
  let i, o, a;
  return l;
  function l(g) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(g), s;
  }
  function s(g) {
    return g === 33 ? (e.consume(g), u) : g === 47 ? (e.consume(g), M) : g === 63 ? (e.consume(g), A) : Ue(g) ? (e.consume(g), Q) : n(g);
  }
  function u(g) {
    return g === 45 ? (e.consume(g), f) : g === 91 ? (e.consume(g), o = 0, m) : Ue(g) ? (e.consume(g), _) : n(g);
  }
  function f(g) {
    return g === 45 ? (e.consume(g), p) : n(g);
  }
  function c(g) {
    return g === null ? n(g) : g === 45 ? (e.consume(g), h) : H(g) ? (a = c, ee(g)) : (e.consume(g), c);
  }
  function h(g) {
    return g === 45 ? (e.consume(g), p) : c(g);
  }
  function p(g) {
    return g === 62 ? O(g) : g === 45 ? h(g) : c(g);
  }
  function m(g) {
    const K = "CDATA[";
    return g === K.charCodeAt(o++) ? (e.consume(g), o === K.length ? b : m) : n(g);
  }
  function b(g) {
    return g === null ? n(g) : g === 93 ? (e.consume(g), E) : H(g) ? (a = b, ee(g)) : (e.consume(g), b);
  }
  function E(g) {
    return g === 93 ? (e.consume(g), k) : b(g);
  }
  function k(g) {
    return g === 62 ? O(g) : g === 93 ? (e.consume(g), k) : b(g);
  }
  function _(g) {
    return g === null || g === 62 ? O(g) : H(g) ? (a = _, ee(g)) : (e.consume(g), _);
  }
  function A(g) {
    return g === null ? n(g) : g === 63 ? (e.consume(g), R) : H(g) ? (a = A, ee(g)) : (e.consume(g), A);
  }
  function R(g) {
    return g === 62 ? O(g) : A(g);
  }
  function M(g) {
    return Ue(g) ? (e.consume(g), C) : n(g);
  }
  function C(g) {
    return g === 45 || Fe(g) ? (e.consume(g), C) : B(g);
  }
  function B(g) {
    return H(g) ? (a = B, ee(g)) : oe(g) ? (e.consume(g), B) : O(g);
  }
  function Q(g) {
    return g === 45 || Fe(g) ? (e.consume(g), Q) : g === 47 || g === 62 || he(g) ? X(g) : n(g);
  }
  function X(g) {
    return g === 47 ? (e.consume(g), O) : g === 58 || g === 95 || Ue(g) ? (e.consume(g), w) : H(g) ? (a = X, ee(g)) : oe(g) ? (e.consume(g), X) : O(g);
  }
  function w(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || Fe(g) ? (e.consume(g), w) : N(g);
  }
  function N(g) {
    return g === 61 ? (e.consume(g), P) : H(g) ? (a = N, ee(g)) : oe(g) ? (e.consume(g), N) : X(g);
  }
  function P(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), i = g, Y) : H(g) ? (a = P, ee(g)) : oe(g) ? (e.consume(g), P) : (e.consume(g), ae);
  }
  function Y(g) {
    return g === i ? (e.consume(g), i = void 0, W) : g === null ? n(g) : H(g) ? (a = Y, ee(g)) : (e.consume(g), Y);
  }
  function ae(g) {
    return g === null || g === 34 || g === 39 || g === 60 || g === 61 || g === 96 ? n(g) : g === 47 || g === 62 || he(g) ? X(g) : (e.consume(g), ae);
  }
  function W(g) {
    return g === 47 || g === 62 || he(g) ? X(g) : n(g);
  }
  function O(g) {
    return g === 62 ? (e.consume(g), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(g);
  }
  function ee(g) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), J;
  }
  function J(g) {
    return oe(g) ? ue(e, Re, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(g) : Re(g);
  }
  function Re(g) {
    return e.enter("htmlTextData"), a(g);
  }
}
const si = {
  name: "labelEnd",
  resolveAll: Zp,
  resolveTo: Qp,
  tokenize: Jp
}, Yp = {
  tokenize: eh
}, Xp = {
  tokenize: th
}, Kp = {
  tokenize: nh
};
function Zp(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && Xe(e, 0, e.length, n), e;
}
function Qp(e, t) {
  let n = e.length, r = 0, i, o, a, l;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (a) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (a = n);
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
      ...e[a][1].end
    }
  }, f = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[a - 2][1].start
    }
  };
  return l = [["enter", s, t], ["enter", u, t]], l = tt(l, e.slice(o + 1, o + r + 3)), l = tt(l, [["enter", f, t]]), l = tt(l, qn(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, a - 3), t)), l = tt(l, [["exit", f, t], e[a - 2], e[a - 1], ["exit", u, t]]), l = tt(l, e.slice(a + 1)), l = tt(l, [["exit", s, t]]), Xe(e, o, e.length, l), e;
}
function Jp(e, t, n) {
  const r = this;
  let i = r.events.length, o, a;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return l;
  function l(h) {
    return o ? o._inactive ? c(h) : (a = r.parser.defined.includes(rt(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(h);
  }
  function s(h) {
    return h === 40 ? e.attempt(Yp, f, a ? f : c)(h) : h === 91 ? e.attempt(Xp, f, a ? u : c)(h) : a ? f(h) : c(h);
  }
  function u(h) {
    return e.attempt(Kp, f, c)(h);
  }
  function f(h) {
    return t(h);
  }
  function c(h) {
    return o._balanced = !0, n(h);
  }
}
function eh(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return he(c) ? cn(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41 ? f(c) : xl(e, a, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function a(c) {
    return he(c) ? cn(e, s)(c) : f(c);
  }
  function l(c) {
    return n(c);
  }
  function s(c) {
    return c === 34 || c === 39 || c === 40 ? Cl(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : f(c);
  }
  function u(c) {
    return he(c) ? cn(e, f)(c) : f(c);
  }
  function f(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function th(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return wl.call(r, e, o, a, "reference", "referenceMarker", "referenceString")(l);
  }
  function o(l) {
    return r.parser.defined.includes(rt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(l) : n(l);
  }
  function a(l) {
    return n(l);
  }
}
function nh(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const rh = {
  name: "labelStartImage",
  resolveAll: si.resolveAll,
  tokenize: ih
};
function ih(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(l), e.exit("labelImageMarker"), o;
  }
  function o(l) {
    return l === 91 ? (e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelImage"), a) : n(l);
  }
  function a(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const oh = {
  name: "labelStartLink",
  resolveAll: si.resolveAll,
  tokenize: ah
};
function ah(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const kr = {
  name: "lineEnding",
  tokenize: lh
};
function lh(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ue(e, t, "linePrefix");
  }
}
const Dn = {
  name: "thematicBreak",
  tokenize: sh
};
function sh(e, t, n) {
  let r = 0, i;
  return o;
  function o(u) {
    return e.enter("thematicBreak"), a(u);
  }
  function a(u) {
    return i = u, l(u);
  }
  function l(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || H(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), oe(u) ? ue(e, l, "whitespace")(u) : l(u));
  }
}
const je = {
  continuation: {
    tokenize: ph
  },
  exit: dh,
  name: "list",
  tokenize: fh
}, uh = {
  partial: !0,
  tokenize: mh
}, ch = {
  partial: !0,
  tokenize: hh
};
function fh(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, a = 0;
  return l;
  function l(p) {
    const m = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (m === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : Ur(p)) {
      if (r.containerState.type || (r.containerState.type = m, e.enter(m, {
        _container: !0
      })), m === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(Dn, n, u)(p) : u(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(p);
    }
    return n(p);
  }
  function s(p) {
    return Ur(p) && ++a < 10 ? (e.consume(p), s) : (!r.interrupt || a < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), u(p)) : n(p);
  }
  function u(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      yn,
      // Can’t be empty when interrupting.
      r.interrupt ? n : f,
      e.attempt(uh, h, c)
    );
  }
  function f(p) {
    return r.containerState.initialBlankLine = !0, o++, h(p);
  }
  function c(p) {
    return oe(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), h) : n(p);
  }
  function h(p) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p);
  }
}
function ph(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(yn, i, o);
  function i(l) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ue(e, t, "listItemIndent", r.containerState.size + 1)(l);
  }
  function o(l) {
    return r.containerState.furtherBlankLines || !oe(l) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(l)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(ch, t, a)(l));
  }
  function a(l) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ue(e, e.attempt(je, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l);
  }
}
function hh(e, t, n) {
  const r = this;
  return ue(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function dh(e) {
  e.exit(this.containerState.type);
}
function mh(e, t, n) {
  const r = this;
  return ue(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return !oe(o) && a && a[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const Io = {
  name: "setextUnderline",
  resolveTo: gh,
  tokenize: yh
};
function gh(e, t) {
  let n = e.length, r, i, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const a = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", a, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = a, e.push(["exit", a, t]), e;
}
function yh(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(u) {
    let f = r.events.length, c;
    for (; f--; )
      if (r.events[f][1].type !== "lineEnding" && r.events[f][1].type !== "linePrefix" && r.events[f][1].type !== "content") {
        c = r.events[f][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = u, a(u)) : n(u);
  }
  function a(u) {
    return e.enter("setextHeadingLineSequence"), l(u);
  }
  function l(u) {
    return u === i ? (e.consume(u), l) : (e.exit("setextHeadingLineSequence"), oe(u) ? ue(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || H(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const bh = {
  tokenize: kh
};
function kh(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    yn,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, ue(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Sp, i)), "linePrefix"))
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const xh = {
  resolveAll: Sl()
}, wh = El("string"), Ch = El("text");
function El(e) {
  return {
    resolveAll: Sl(e === "text" ? Eh : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, a, l);
    return a;
    function a(f) {
      return u(f) ? o(f) : l(f);
    }
    function l(f) {
      if (f === null) {
        n.consume(f);
        return;
      }
      return n.enter("data"), n.consume(f), s;
    }
    function s(f) {
      return u(f) ? (n.exit("data"), o(f)) : (n.consume(f), s);
    }
    function u(f) {
      if (f === null)
        return !0;
      const c = i[f];
      let h = -1;
      if (c)
        for (; ++h < c.length; ) {
          const p = c[h];
          if (!p.previous || p.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Sl(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function Eh(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, a = -1, l = 0, s;
      for (; o--; ) {
        const u = i[o];
        if (typeof u == "string") {
          for (a = u.length; u.charCodeAt(a - 1) === 32; )
            l++, a--;
          if (a) break;
          a = -1;
        } else if (u === -2)
          s = !0, l++;
        else if (u !== -1) {
          o++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (l = 0), l) {
        const u = {
          type: n === e.length || s || l < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? a : r.start._bufferIndex + a,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - l,
            offset: r.end.offset - l
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
const Sh = {
  42: je,
  43: je,
  45: je,
  48: je,
  49: je,
  50: je,
  51: je,
  52: je,
  53: je,
  54: je,
  55: je,
  56: je,
  57: je,
  62: gl
}, Th = {
  91: vp
}, Ah = {
  [-2]: br,
  [-1]: br,
  32: br
}, _h = {
  35: Op,
  42: Dn,
  45: [Io, Dn],
  60: Bp,
  61: Io,
  95: Dn,
  96: Ao,
  126: Ao
}, Ih = {
  38: bl,
  92: yl
}, vh = {
  [-5]: kr,
  [-4]: kr,
  [-3]: kr,
  33: rh,
  38: bl,
  42: $r,
  60: [op, Wp],
  91: oh,
  92: [Pp, yl],
  93: si,
  95: $r,
  96: bp
}, Lh = {
  null: [$r, xh]
}, Dh = {
  null: [42, 95]
}, Rh = {
  null: []
}, Ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Dh,
  contentInitial: Th,
  disable: Rh,
  document: Sh,
  flow: _h,
  flowInitial: Ah,
  insideSpan: Lh,
  string: Ih,
  text: vh
}, Symbol.toStringTag, { value: "Module" }));
function Nh(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, o = [];
  let a = [], l = [];
  const s = {
    attempt: B(M),
    check: B(C),
    consume: _,
    enter: A,
    exit: R,
    interrupt: B(C, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: b,
    events: [],
    now: m,
    parser: e,
    previous: null,
    sliceSerialize: h,
    sliceStream: p,
    write: c
  };
  let f = t.tokenize.call(u, s);
  return t.resolveAll && o.push(t), u;
  function c(N) {
    return a = tt(a, N), E(), a[a.length - 1] !== null ? [] : (Q(t, 0), u.events = qn(o, u.events, u), u.events);
  }
  function h(N, P) {
    return Mh(p(N), P);
  }
  function p(N) {
    return Oh(a, N);
  }
  function m() {
    const {
      _bufferIndex: N,
      _index: P,
      line: Y,
      column: ae,
      offset: W
    } = r;
    return {
      _bufferIndex: N,
      _index: P,
      line: Y,
      column: ae,
      offset: W
    };
  }
  function b(N) {
    i[N.line] = N.column, w();
  }
  function E() {
    let N;
    for (; r._index < a.length; ) {
      const P = a[r._index];
      if (typeof P == "string")
        for (N = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === N && r._bufferIndex < P.length; )
          k(P.charCodeAt(r._bufferIndex));
      else
        k(P);
    }
  }
  function k(N) {
    f = f(N);
  }
  function _(N) {
    H(N) ? (r.line++, r.column = 1, r.offset += N === -3 ? 2 : 1, w()) : N !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    a[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = N;
  }
  function A(N, P) {
    const Y = P || {};
    return Y.type = N, Y.start = m(), u.events.push(["enter", Y, u]), l.push(Y), Y;
  }
  function R(N) {
    const P = l.pop();
    return P.end = m(), u.events.push(["exit", P, u]), P;
  }
  function M(N, P) {
    Q(N, P.from);
  }
  function C(N, P) {
    P.restore();
  }
  function B(N, P) {
    return Y;
    function Y(ae, W, O) {
      let ee, J, Re, g;
      return Array.isArray(ae) ? (
        /* c8 ignore next 1 */
        Pe(ae)
      ) : "tokenize" in ae ? (
        // Looks like a construct.
        Pe([
          /** @type {Construct} */
          ae
        ])
      ) : K(ae);
      function K(ke) {
        return ht;
        function ht(We) {
          const V = We !== null && ke[We], U = We !== null && ke.null, z = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(V) ? V : V ? [V] : [],
            ...Array.isArray(U) ? U : U ? [U] : []
          ];
          return Pe(z)(We);
        }
      }
      function Pe(ke) {
        return ee = ke, J = 0, ke.length === 0 ? O : y(ke[J]);
      }
      function y(ke) {
        return ht;
        function ht(We) {
          return g = X(), Re = ke, ke.partial || (u.currentConstruct = ke), ke.name && u.parser.constructs.disable.null.includes(ke.name) ? Ze() : ke.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            P ? Object.assign(Object.create(u), P) : u,
            s,
            ge,
            Ze
          )(We);
        }
      }
      function ge(ke) {
        return N(Re, g), W;
      }
      function Ze(ke) {
        return g.restore(), ++J < ee.length ? y(ee[J]) : O;
      }
    }
  }
  function Q(N, P) {
    N.resolveAll && !o.includes(N) && o.push(N), N.resolve && Xe(u.events, P, u.events.length - P, N.resolve(u.events.slice(P), u)), N.resolveTo && (u.events = N.resolveTo(u.events, u));
  }
  function X() {
    const N = m(), P = u.previous, Y = u.currentConstruct, ae = u.events.length, W = Array.from(l);
    return {
      from: ae,
      restore: O
    };
    function O() {
      r = N, u.previous = P, u.currentConstruct = Y, u.events.length = ae, l = W, w();
    }
  }
  function w() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Oh(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let a;
  if (n === i)
    a = [e[n].slice(r, o)];
  else {
    if (a = e.slice(n, i), r > -1) {
      const l = a[0];
      typeof l == "string" ? a[0] = l.slice(r) : a.shift();
    }
    o > 0 && a.push(e[i].slice(0, o));
  }
  return a;
}
function Mh(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let a;
    if (typeof o == "string")
      a = o;
    else switch (o) {
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
        a = String.fromCharCode(o);
    }
    i = o === -2, r.push(a);
  }
  return r.join("");
}
function Fh(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      dl([Ph, ...(e || {}).extensions || []])
    ),
    content: i(Qf),
    defined: [],
    document: i(ep),
    flow: i(bh),
    lazy: {},
    string: i(wh),
    text: i(Ch)
  };
  return r;
  function i(o) {
    return a;
    function a(l) {
      return Nh(r, o, l);
    }
  }
}
function zh(e) {
  for (; !kl(e); )
    ;
  return e;
}
const vo = /[\0\t\n\r]/g;
function Bh() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, a, l) {
    const s = [];
    let u, f, c, h, p;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(a || void 0).decode(o)), c = 0, t = "", n && (o.charCodeAt(0) === 65279 && c++, n = void 0); c < o.length; ) {
      if (vo.lastIndex = c, u = vo.exec(o), h = u && u.index !== void 0 ? u.index : o.length, p = o.charCodeAt(h), !u) {
        t = o.slice(c);
        break;
      }
      if (p === 10 && c === h && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), c < h && (s.push(o.slice(c, h)), e += h - c), p) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (f = Math.ceil(e / 4) * 4, s.push(-2); e++ < f; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      c = h + 1;
    }
    return l && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const Hh = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Uh(e) {
  return e.replace(Hh, $h);
}
function $h(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return ml(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return li(n) || e;
}
const Tl = {}.hasOwnProperty;
function jh(e, t, n) {
  return t && typeof t == "object" && (n = t, t = void 0), Vh(n)(zh(Fh(n).document().write(Bh()(e, t, !0))));
}
function Vh(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(it),
      autolinkProtocol: X,
      autolinkEmail: X,
      atxHeading: o($),
      blockQuote: o(U),
      characterEscape: X,
      characterReference: X,
      codeFenced: o(z),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: o(z, a),
      codeText: o(ie, a),
      codeTextData: X,
      data: X,
      codeFlowValue: X,
      definition: o(re),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: o($e),
      hardBreakEscape: o(j),
      hardBreakTrailing: o(j),
      htmlFlow: o(_e, a),
      htmlFlowData: X,
      htmlText: o(_e, a),
      htmlTextData: X,
      image: o(Ne),
      label: a,
      link: o(it),
      listItem: o(kn),
      listItemValue: h,
      listOrdered: o(Nt, c),
      listUnordered: o(Nt),
      paragraph: o(xn),
      reference: y,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: o($),
      strong: o(ot),
      thematicBreak: o(dt)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: M,
      autolink: s(),
      autolinkEmail: V,
      autolinkProtocol: We,
      blockQuote: s(),
      characterEscapeValue: w,
      characterReferenceMarkerHexadecimal: Ze,
      characterReferenceMarkerNumeric: Ze,
      characterReferenceValue: ke,
      characterReference: ht,
      codeFenced: s(E),
      codeFencedFence: b,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: m,
      codeFlowValue: w,
      codeIndented: s(k),
      codeText: s(W),
      codeTextData: w,
      data: w,
      definition: s(),
      definitionDestinationString: R,
      definitionLabelString: _,
      definitionTitleString: A,
      emphasis: s(),
      hardBreakEscape: s(P),
      hardBreakTrailing: s(P),
      htmlFlow: s(Y),
      htmlFlowData: w,
      htmlText: s(ae),
      htmlTextData: w,
      image: s(ee),
      label: Re,
      labelText: J,
      lineEnding: N,
      link: s(O),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: ge,
      resourceDestinationString: g,
      resourceTitleString: K,
      resource: Pe,
      setextHeading: s(Q),
      setextHeadingLineSequence: B,
      setextHeadingText: C,
      strong: s(),
      thematicBreak: s()
    }
  };
  Al(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(T) {
    let v = {
      type: "root",
      children: []
    };
    const G = {
      stack: [v],
      tokenStack: [],
      config: t,
      enter: l,
      exit: u,
      buffer: a,
      resume: f,
      data: n
    }, te = [];
    let le = -1;
    for (; ++le < T.length; )
      if (T[le][1].type === "listOrdered" || T[le][1].type === "listUnordered")
        if (T[le][0] === "enter")
          te.push(le);
        else {
          const Oe = te.pop();
          le = i(T, Oe, le);
        }
    for (le = -1; ++le < T.length; ) {
      const Oe = t[T[le][0]];
      Tl.call(Oe, T[le][1].type) && Oe[T[le][1].type].call(Object.assign({
        sliceSerialize: T[le][2].sliceSerialize
      }, G), T[le][1]);
    }
    if (G.tokenStack.length > 0) {
      const Oe = G.tokenStack[G.tokenStack.length - 1];
      (Oe[1] || Lo).call(G, void 0, Oe[0]);
    }
    for (v.position = {
      start: Ct(T.length > 0 ? T[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Ct(T.length > 0 ? T[T.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, le = -1; ++le < t.transforms.length; )
      v = t.transforms[le](v) || v;
    return v;
  }
  function i(T, v, G) {
    let te = v - 1, le = -1, Oe = !1, Qe, Je, bt, kt;
    for (; ++te <= G; ) {
      const Ie = T[te];
      switch (Ie[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ie[0] === "enter" ? le++ : le--, kt = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ie[0] === "enter" && (Qe && !kt && !le && !bt && (bt = te), kt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          kt = void 0;
      }
      if (!le && Ie[0] === "enter" && Ie[1].type === "listItemPrefix" || le === -1 && Ie[0] === "exit" && (Ie[1].type === "listUnordered" || Ie[1].type === "listOrdered")) {
        if (Qe) {
          let at = te;
          for (Je = void 0; at--; ) {
            const Me = T[at];
            if (Me[1].type === "lineEnding" || Me[1].type === "lineEndingBlank") {
              if (Me[0] === "exit") continue;
              Je && (T[Je][1].type = "lineEndingBlank", Oe = !0), Me[1].type = "lineEnding", Je = at;
            } else if (!(Me[1].type === "linePrefix" || Me[1].type === "blockQuotePrefix" || Me[1].type === "blockQuotePrefixWhitespace" || Me[1].type === "blockQuoteMarker" || Me[1].type === "listItemIndent")) break;
          }
          bt && (!Je || bt < Je) && (Qe._spread = !0), Qe.end = Object.assign({}, Je ? T[Je][1].start : Ie[1].end), T.splice(Je || te, 0, ["exit", Qe, Ie[2]]), te++, G++;
        }
        if (Ie[1].type === "listItemPrefix") {
          const at = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ie[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Qe = at, T.splice(te, 0, ["enter", at, Ie[2]]), te++, G++, bt = void 0, kt = !0;
        }
      }
    }
    return T[v][1]._spread = Oe, G;
  }
  function o(T, v) {
    return G;
    function G(te) {
      l.call(this, T(te), te), v && v.call(this, te);
    }
  }
  function a() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function l(T, v, G) {
    this.stack[this.stack.length - 1].children.push(T), this.stack.push(T), this.tokenStack.push([v, G || void 0]), T.position = {
      start: Ct(v.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(T) {
    return v;
    function v(G) {
      T && T.call(this, G), u.call(this, G);
    }
  }
  function u(T, v) {
    const G = this.stack.pop(), te = this.tokenStack.pop();
    if (te)
      te[0].type !== T.type && (v ? v.call(this, T, te[0]) : (te[1] || Lo).call(this, T, te[0]));
    else throw new Error("Cannot close `" + T.type + "` (" + un({
      start: T.start,
      end: T.end
    }) + "): it’s not open");
    G.position.end = Ct(T.end);
  }
  function f() {
    return ai(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function h(T) {
    if (this.data.expectingFirstListItemValue) {
      const v = this.stack[this.stack.length - 2];
      v.start = Number.parseInt(this.sliceSerialize(T), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const T = this.resume(), v = this.stack[this.stack.length - 1];
    v.lang = T;
  }
  function m() {
    const T = this.resume(), v = this.stack[this.stack.length - 1];
    v.meta = T;
  }
  function b() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function E() {
    const T = this.resume(), v = this.stack[this.stack.length - 1];
    v.value = T.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function k() {
    const T = this.resume(), v = this.stack[this.stack.length - 1];
    v.value = T.replace(/(\r?\n|\r)$/g, "");
  }
  function _(T) {
    const v = this.resume(), G = this.stack[this.stack.length - 1];
    G.label = v, G.identifier = rt(this.sliceSerialize(T)).toLowerCase();
  }
  function A() {
    const T = this.resume(), v = this.stack[this.stack.length - 1];
    v.title = T;
  }
  function R() {
    const T = this.resume(), v = this.stack[this.stack.length - 1];
    v.url = T;
  }
  function M(T) {
    const v = this.stack[this.stack.length - 1];
    if (!v.depth) {
      const G = this.sliceSerialize(T).length;
      v.depth = G;
    }
  }
  function C() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function B(T) {
    const v = this.stack[this.stack.length - 1];
    v.depth = this.sliceSerialize(T).codePointAt(0) === 61 ? 1 : 2;
  }
  function Q() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function X(T) {
    const G = this.stack[this.stack.length - 1].children;
    let te = G[G.length - 1];
    (!te || te.type !== "text") && (te = _t(), te.position = {
      start: Ct(T.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, G.push(te)), this.stack.push(te);
  }
  function w(T) {
    const v = this.stack.pop();
    v.value += this.sliceSerialize(T), v.position.end = Ct(T.end);
  }
  function N(T) {
    const v = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const G = v.children[v.children.length - 1];
      G.position.end = Ct(T.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(v.type) && (X.call(this, T), w.call(this, T));
  }
  function P() {
    this.data.atHardBreak = !0;
  }
  function Y() {
    const T = this.resume(), v = this.stack[this.stack.length - 1];
    v.value = T;
  }
  function ae() {
    const T = this.resume(), v = this.stack[this.stack.length - 1];
    v.value = T;
  }
  function W() {
    const T = this.resume(), v = this.stack[this.stack.length - 1];
    v.value = T;
  }
  function O() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const v = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = v, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function ee() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const v = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = v, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function J(T) {
    const v = this.sliceSerialize(T), G = this.stack[this.stack.length - 2];
    G.label = Uh(v), G.identifier = rt(v).toLowerCase();
  }
  function Re() {
    const T = this.stack[this.stack.length - 1], v = this.resume(), G = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, G.type === "link") {
      const te = T.children;
      G.children = te;
    } else
      G.alt = v;
  }
  function g() {
    const T = this.resume(), v = this.stack[this.stack.length - 1];
    v.url = T;
  }
  function K() {
    const T = this.resume(), v = this.stack[this.stack.length - 1];
    v.title = T;
  }
  function Pe() {
    this.data.inReference = void 0;
  }
  function y() {
    this.data.referenceType = "collapsed";
  }
  function ge(T) {
    const v = this.resume(), G = this.stack[this.stack.length - 1];
    G.label = v, G.identifier = rt(this.sliceSerialize(T)).toLowerCase(), this.data.referenceType = "full";
  }
  function Ze(T) {
    this.data.characterReferenceType = T.type;
  }
  function ke(T) {
    const v = this.sliceSerialize(T), G = this.data.characterReferenceType;
    let te;
    G ? (te = ml(v, G === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : te = li(v);
    const le = this.stack[this.stack.length - 1];
    le.value += te;
  }
  function ht(T) {
    const v = this.stack.pop();
    v.position.end = Ct(T.end);
  }
  function We(T) {
    w.call(this, T);
    const v = this.stack[this.stack.length - 1];
    v.url = this.sliceSerialize(T);
  }
  function V(T) {
    w.call(this, T);
    const v = this.stack[this.stack.length - 1];
    v.url = "mailto:" + this.sliceSerialize(T);
  }
  function U() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function z() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function ie() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function re() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function $e() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function $() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function j() {
    return {
      type: "break"
    };
  }
  function _e() {
    return {
      type: "html",
      value: ""
    };
  }
  function Ne() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function it() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Nt(T) {
    return {
      type: "list",
      ordered: T.type === "listOrdered",
      start: null,
      spread: T._spread,
      children: []
    };
  }
  function kn(T) {
    return {
      type: "listItem",
      spread: T._spread,
      checked: null,
      children: []
    };
  }
  function xn() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function ot() {
    return {
      type: "strong",
      children: []
    };
  }
  function _t() {
    return {
      type: "text",
      value: ""
    };
  }
  function dt() {
    return {
      type: "thematicBreak"
    };
  }
}
function Ct(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Al(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Al(e, r) : Gh(e, r);
  }
}
function Gh(e, t) {
  let n;
  for (n in t)
    if (Tl.call(t, n))
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
function Lo(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + un({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + un({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + un({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Wh(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return jh(r, {
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
function qh(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Yh(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Xh(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let o = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = e.applyData(t, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(t, o), o;
}
function Kh(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Zh(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Qh(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Kt(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let a, l = e.footnoteCounts.get(r);
  l === void 0 ? (l = 0, e.footnoteOrder.push(r), a = e.footnoteOrder.length) : a = o + 1, l += 1, e.footnoteCounts.set(r, l);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (l > 1 ? "-" + l : ""),
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
function Jh(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ed(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function _l(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const a = i[i.length - 1];
  return a && a.type === "text" ? a.value += r : i.push({ type: "text", value: r }), i;
}
function td(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return _l(e, t);
  const i = { src: Kt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function nd(e, t) {
  const n = { src: Kt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function rd(e, t) {
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
function id(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return _l(e, t);
  const i = { href: Kt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function od(e, t) {
  const n = { href: Kt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ad(e, t, n) {
  const r = e.all(t), i = n ? ld(n) : Il(t), o = {}, a = [];
  if (typeof t.checked == "boolean") {
    const f = r[0];
    let c;
    f && f.type === "element" && f.tagName === "p" ? c = f : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let l = -1;
  for (; ++l < r.length; ) {
    const f = r[l];
    (i || l !== 0 || f.type !== "element" || f.tagName !== "p") && a.push({ type: "text", value: `
` }), f.type === "element" && f.tagName === "p" && !i ? a.push(...f.children) : a.push(f);
  }
  const s = r[r.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && a.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: o, children: a };
  return e.patch(t, u), e.applyData(t, u);
}
function ld(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Il(n[r]);
  }
  return t;
}
function Il(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function sd(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const a = r[i];
    if (a.type === "element" && a.tagName === "li" && a.properties && Array.isArray(a.properties.className) && a.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function ud(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function cd(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function fd(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function pd(e, t) {
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
    }, l = ni(t.children[1]), s = ll(t.children[t.children.length - 1]);
    l && s && (a.position = { start: l, end: s }), i.push(a);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function hd(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, l = a ? a.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < l; ) {
    const c = t.children[s], h = {}, p = a ? a[s] : void 0;
    p && (h.align = p);
    let m = { type: "element", tagName: o, properties: h, children: [] };
    c && (m.children = e.all(c), e.patch(c, m), m = e.applyData(c, m)), u.push(m);
  }
  const f = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, f), e.applyData(t, f);
}
function dd(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Do = 9, Ro = 32;
function md(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      Po(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(Po(t.slice(i), i > 0, !1)), o.join("");
}
function Po(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === Do || o === Ro; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === Do || o === Ro; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function gd(e, t) {
  const n = { type: "text", value: md(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function yd(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const bd = {
  blockquote: qh,
  break: Yh,
  code: Xh,
  delete: Kh,
  emphasis: Zh,
  footnoteReference: Qh,
  heading: Jh,
  html: ed,
  imageReference: td,
  image: nd,
  inlineCode: rd,
  linkReference: id,
  link: od,
  listItem: ad,
  list: sd,
  paragraph: ud,
  // @ts-expect-error: root is different, but hard to type.
  root: cd,
  strong: fd,
  table: pd,
  tableCell: dd,
  tableRow: hd,
  text: gd,
  thematicBreak: yd,
  toml: _n,
  yaml: _n,
  definition: _n,
  footnoteDefinition: _n
};
function _n() {
}
const vl = -1, Yn = 0, fn = 1, zn = 2, ui = 3, ci = 4, fi = 5, pi = 6, Ll = 7, Dl = 8, kd = typeof self == "object" ? self : globalThis, No = (e, t) => {
  switch (e) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + e);
  }
  return new kd[e](t);
}, xd = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, a] = t[i];
    switch (o) {
      case Yn:
      case vl:
        return n(a, i);
      case fn: {
        const l = n([], i);
        for (const s of a)
          l.push(r(s));
        return l;
      }
      case zn: {
        const l = n({}, i);
        for (const [s, u] of a)
          l[r(s)] = r(u);
        return l;
      }
      case ui:
        return n(new Date(a), i);
      case ci: {
        const { source: l, flags: s } = a;
        return n(new RegExp(l, s), i);
      }
      case fi: {
        const l = n(/* @__PURE__ */ new Map(), i);
        for (const [s, u] of a)
          l.set(r(s), r(u));
        return l;
      }
      case pi: {
        const l = n(/* @__PURE__ */ new Set(), i);
        for (const s of a)
          l.add(r(s));
        return l;
      }
      case Ll: {
        const { name: l, message: s } = a;
        return n(No(l, s), i);
      }
      case Dl:
        return n(BigInt(a), i);
      case "BigInt":
        return n(Object(BigInt(a)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(a).buffer, a);
      case "DataView": {
        const { buffer: l } = new Uint8Array(a);
        return n(new DataView(l), a);
      }
    }
    return n(No(o, a), i);
  };
  return r;
}, Oo = (e) => xd(/* @__PURE__ */ new Map(), e)(0), Ut = "", { toString: wd } = {}, { keys: Cd } = Object, ln = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Yn, t];
  const n = wd.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [fn, Ut];
    case "Object":
      return [zn, Ut];
    case "Date":
      return [ui, Ut];
    case "RegExp":
      return [ci, Ut];
    case "Map":
      return [fi, Ut];
    case "Set":
      return [pi, Ut];
    case "DataView":
      return [fn, n];
  }
  return n.includes("Array") ? [fn, n] : n.includes("Error") ? [Ll, n] : [zn, n];
}, In = ([e, t]) => e === Yn && (t === "function" || t === "symbol"), Ed = (e, t, n, r) => {
  const i = (a, l) => {
    const s = r.push(a) - 1;
    return n.set(l, s), s;
  }, o = (a) => {
    if (n.has(a))
      return n.get(a);
    let [l, s] = ln(a);
    switch (l) {
      case Yn: {
        let f = a;
        switch (s) {
          case "bigint":
            l = Dl, f = a.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            f = null;
            break;
          case "undefined":
            return i([vl], a);
        }
        return i([l, f], a);
      }
      case fn: {
        if (s) {
          let h = a;
          return s === "DataView" ? h = new Uint8Array(a.buffer) : s === "ArrayBuffer" && (h = new Uint8Array(a)), i([s, [...h]], a);
        }
        const f = [], c = i([l, f], a);
        for (const h of a)
          f.push(o(h));
        return c;
      }
      case zn: {
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
          return o(a.toJSON());
        const f = [], c = i([l, f], a);
        for (const h of Cd(a))
          (e || !In(ln(a[h]))) && f.push([o(h), o(a[h])]);
        return c;
      }
      case ui:
        return i([l, a.toISOString()], a);
      case ci: {
        const { source: f, flags: c } = a;
        return i([l, { source: f, flags: c }], a);
      }
      case fi: {
        const f = [], c = i([l, f], a);
        for (const [h, p] of a)
          (e || !(In(ln(h)) || In(ln(p)))) && f.push([o(h), o(p)]);
        return c;
      }
      case pi: {
        const f = [], c = i([l, f], a);
        for (const h of a)
          (e || !In(ln(h))) && f.push(o(h));
        return c;
      }
    }
    const { message: u } = a;
    return i([l, { name: s, message: u }], a);
  };
  return o;
}, Mo = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Ed(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Bn = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Oo(Mo(e, t)) : structuredClone(e)
) : (e, t) => Oo(Mo(e, t));
function Sd(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Td(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Ad(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Sd, r = e.options.footnoteBackLabel || Td, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", a = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const f = e.all(u), c = String(u.identifier).toUpperCase(), h = Kt(c.toLowerCase());
    let p = 0;
    const m = [], b = e.footnoteCounts.get(c);
    for (; b !== void 0 && ++p <= b; ) {
      m.length > 0 && m.push({ type: "text", value: " " });
      let _ = typeof n == "string" ? n : n(s, p);
      typeof _ == "string" && (_ = { type: "text", value: _ }), m.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + h + (p > 1 ? "-" + p : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, p),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(_) ? _ : [_]
      });
    }
    const E = f[f.length - 1];
    if (E && E.type === "element" && E.tagName === "p") {
      const _ = E.children[E.children.length - 1];
      _ && _.type === "text" ? _.value += " " : E.children.push({ type: "text", value: " " }), E.children.push(...m);
    } else
      f.push(...m);
    const k = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + h },
      children: e.wrap(f, !0)
    };
    e.patch(u, k), l.push(k);
  }
  if (l.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...Bn(a),
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
          children: e.wrap(l, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Xn = (
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
      return Ld;
    if (typeof e == "function")
      return Kn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? _d(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Id(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return vd(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function _d(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Xn(e[n]);
  return Kn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function Id(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Kn(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function vd(e) {
  return Kn(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Kn(e) {
  return t;
  function t(n, r, i) {
    return !!(Dd(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Ld() {
  return !0;
}
function Dd(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Rl = [], Rd = !0, jr = !1, Pd = "skip";
function Pl(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = Xn(i), a = r ? -1 : 1;
  l(e, void 0, [])();
  function l(s, u, f) {
    const c = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof c.type == "string") {
      const p = (
        // `hast`
        typeof c.tagName == "string" ? c.tagName : (
          // `xast`
          typeof c.name == "string" ? c.name : void 0
        )
      );
      Object.defineProperty(h, "name", {
        value: "node (" + (s.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return h;
    function h() {
      let p = Rl, m, b, E;
      if ((!t || o(s, u, f[f.length - 1] || void 0)) && (p = Nd(n(s, f)), p[0] === jr))
        return p;
      if ("children" in s && s.children) {
        const k = (
          /** @type {UnistParent} */
          s
        );
        if (k.children && p[0] !== Pd)
          for (b = (r ? k.children.length : -1) + a, E = f.concat(k); b > -1 && b < k.children.length; ) {
            const _ = k.children[b];
            if (m = l(_, b, E)(), m[0] === jr)
              return m;
            b = typeof m[1] == "number" ? m[1] : b + a;
          }
      }
      return p;
    }
  }
}
function Nd(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Rd, e] : e == null ? Rl : [e];
}
function hi(e, t, n, r) {
  let i, o, a;
  typeof t == "function" && typeof n != "function" ? (o = void 0, a = t, i = n) : (o = t, a = n, i = r), Pl(e, o, l, i);
  function l(s, u) {
    const f = u[u.length - 1], c = f ? f.children.indexOf(s) : void 0;
    return a(s, c, f);
  }
}
const Vr = {}.hasOwnProperty, Od = {};
function Md(e, t) {
  const n = t || Od, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = { ...bd, ...n.handlers }, l = {
    all: u,
    applyData: zd,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: a,
    one: s,
    options: n,
    patch: Fd,
    wrap: Hd
  };
  return hi(e, function(f) {
    if (f.type === "definition" || f.type === "footnoteDefinition") {
      const c = f.type === "definition" ? r : i, h = String(f.identifier).toUpperCase();
      c.has(h) || c.set(h, f);
    }
  }), l;
  function s(f, c) {
    const h = f.type, p = l.handlers[h];
    if (Vr.call(l.handlers, h) && p)
      return p(l, f, c);
    if (l.options.passThrough && l.options.passThrough.includes(h)) {
      if ("children" in f) {
        const { children: b, ...E } = f, k = Bn(E);
        return k.children = l.all(f), k;
      }
      return Bn(f);
    }
    return (l.options.unknownHandler || Bd)(l, f, c);
  }
  function u(f) {
    const c = [];
    if ("children" in f) {
      const h = f.children;
      let p = -1;
      for (; ++p < h.length; ) {
        const m = l.one(h[p], f);
        if (m) {
          if (p && h[p - 1].type === "break" && (!Array.isArray(m) && m.type === "text" && (m.value = Fo(m.value)), !Array.isArray(m) && m.type === "element")) {
            const b = m.children[0];
            b && b.type === "text" && (b.value = Fo(b.value));
          }
          Array.isArray(m) ? c.push(...m) : c.push(m);
        }
      }
    }
    return c;
  }
}
function Fd(e, t) {
  e.position && (t.position = Sf(e));
}
function zd(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const a = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: a };
      }
    n.type === "element" && o && Object.assign(n.properties, Bn(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Bd(e, t) {
  const n = t.data || {}, r = "value" in t && !(Vr.call(n, "hProperties") || Vr.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Hd(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Fo(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function zo(e, t) {
  const n = Md(e, t), r = n.one(e, void 0), i = Ad(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Ud(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      zo(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      zo(n, { file: r, ...e || t })
    );
  };
}
function Bo(e) {
  if (e)
    throw e;
}
var Rn = Object.prototype.hasOwnProperty, Nl = Object.prototype.toString, Ho = Object.defineProperty, Uo = Object.getOwnPropertyDescriptor, $o = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Nl.call(t) === "[object Array]";
}, jo = function(t) {
  if (!t || Nl.call(t) !== "[object Object]")
    return !1;
  var n = Rn.call(t, "constructor"), r = t.constructor && t.constructor.prototype && Rn.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || Rn.call(t, i);
}, Vo = function(t, n) {
  Ho && n.name === "__proto__" ? Ho(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Go = function(t, n) {
  if (n === "__proto__")
    if (Rn.call(t, n)) {
      if (Uo)
        return Uo(t, n).value;
    } else return;
  return t[n];
}, $d = function e() {
  var t, n, r, i, o, a, l = arguments[0], s = 1, u = arguments.length, f = !1;
  for (typeof l == "boolean" && (f = l, l = arguments[1] || {}, s = 2), (l == null || typeof l != "object" && typeof l != "function") && (l = {}); s < u; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = Go(l, n), i = Go(t, n), l !== i && (f && i && (jo(i) || (o = $o(i))) ? (o ? (o = !1, a = r && $o(r) ? r : []) : a = r && jo(r) ? r : {}, Vo(l, { name: n, newValue: e(f, a, i) })) : typeof i < "u" && Vo(l, { name: n, newValue: i }));
  return l;
};
const xr = /* @__PURE__ */ al($d);
function Gr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function jd() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const a = i.pop();
    if (typeof a != "function")
      throw new TypeError("Expected function as last argument, not " + a);
    l(null, ...i);
    function l(s, ...u) {
      const f = e[++o];
      let c = -1;
      if (s) {
        a(s);
        return;
      }
      for (; ++c < i.length; )
        (u[c] === null || u[c] === void 0) && (u[c] = i[c]);
      i = u, f ? Vd(f, l)(...u) : a(null, ...u);
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
function Vd(e, t) {
  let n;
  return r;
  function r(...a) {
    const l = e.length > a.length;
    let s;
    l && a.push(i);
    try {
      s = e.apply(this, a);
    } catch (u) {
      const f = (
        /** @type {Error} */
        u
      );
      if (l && n)
        throw f;
      return i(f);
    }
    l || (s && s.then && typeof s.then == "function" ? s.then(o, i) : s instanceof Error ? i(s) : o(s));
  }
  function i(a, ...l) {
    n || (n = !0, t(a, ...l));
  }
  function o(a) {
    i(null, a);
  }
}
const ft = { basename: Gd, dirname: Wd, extname: qd, join: Yd, sep: "/" };
function Gd(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  bn(e);
  let n = 0, r = -1, i = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let a = -1, l = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      a < 0 && (o = !0, a = i + 1), l > -1 && (e.codePointAt(i) === t.codePointAt(l--) ? l < 0 && (r = i) : (l = -1, r = a));
  return n === r ? r = a : r < 0 && (r = e.length), e.slice(n, r);
}
function Wd(e) {
  if (bn(e), e.length === 0)
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
function qd(e) {
  bn(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, a;
  for (; t--; ) {
    const l = e.codePointAt(t);
    if (l === 47) {
      if (a) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (a = !0, n = t + 1), l === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function Yd(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    bn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Xd(n);
}
function Xd(e) {
  bn(e);
  const t = e.codePointAt(0) === 47;
  let n = Kd(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Kd(e, t) {
  let n = "", r = 0, i = -1, o = 0, a = -1, l, s;
  for (; ++a <= e.length; ) {
    if (a < e.length)
      l = e.codePointAt(a);
    else {
      if (l === 47)
        break;
      l = 47;
    }
    if (l === 47) {
      if (!(i === a - 1 || o === 1)) if (i !== a - 1 && o === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (s = n.lastIndexOf("/"), s !== n.length - 1) {
              s < 0 ? (n = "", r = 0) : (n = n.slice(0, s), r = n.length - 1 - n.lastIndexOf("/")), i = a, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = a, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, a) : n = e.slice(i + 1, a), r = a - i - 1;
      i = a, o = 0;
    } else l === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function bn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Zd = { cwd: Qd };
function Qd() {
  return "/";
}
function Wr(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Jd(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Wr(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return em(e);
}
function em(e) {
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
const wr = (
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
class Ol {
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
    t ? Wr(t) ? n = { path: t } : typeof t == "string" || tm(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Zd.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < wr.length; ) {
      const o = wr[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      wr.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? ft.basename(this.path) : void 0;
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
    Er(t, "basename"), Cr(t, "basename"), this.path = ft.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? ft.dirname(this.path) : void 0;
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
    Wo(this.basename, "dirname"), this.path = ft.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? ft.extname(this.path) : void 0;
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
    if (Cr(t, "extname"), Wo(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = ft.join(this.dirname, this.stem + (t || ""));
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
    Wr(t) && (t = Jd(t)), Er(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? ft.basename(this.path, this.extname) : void 0;
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
    Er(t, "stem"), Cr(t, "stem"), this.path = ft.join(this.dirname || "", t + (this.extname || ""));
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
    const i = new ze(
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
function Cr(e, t) {
  if (e && e.includes(ft.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + ft.sep + "`"
    );
}
function Er(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Wo(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function tm(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const nm = (
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
), rm = {}.hasOwnProperty;
class di extends nm {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = jd();
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
      new di()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(xr(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (Ar("data", this.frozen), this.namespace[t] = n, this) : rm.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Ar("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = vn(t), r = this.parser || this.Parser;
    return Sr("parse", r), r(String(n), n);
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
    return this.freeze(), Sr("process", this.parser || this.Parser), Tr("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, a) {
      const l = vn(t), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(l)
      );
      r.run(s, l, function(f, c, h) {
        if (f || !c || !h)
          return u(f);
        const p = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), m = r.stringify(p, h);
        am(m) ? h.value = m : h.result = m, u(
          f,
          /** @type {VFileWithOutput<CompileResult>} */
          h
        );
      });
      function u(f, c) {
        f || !c ? a(f) : o ? o(c) : n(void 0, c);
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
    return this.freeze(), Sr("processSync", this.parser || this.Parser), Tr("processSync", this.compiler || this.Compiler), this.process(t, i), Yo("processSync", "process", n), r;
    function i(o, a) {
      n = !0, Bo(o), r = a;
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
    qo(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(a, l) {
      const s = vn(n);
      i.run(t, s, u);
      function u(f, c, h) {
        const p = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || t
        );
        f ? l(f) : a ? a(p) : r(void 0, p, h);
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
    return this.run(t, n, o), Yo("runSync", "run", r), i;
    function o(a, l) {
      Bo(a), i = l, r = !0;
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
    const r = vn(n), i = this.compiler || this.Compiler;
    return Tr("stringify", i), qo(t), i(t, r);
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
    if (Ar("use", this.frozen), t != null) if (typeof t == "function")
      s(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? l(t) : a(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(u) {
      if (typeof u == "function")
        s(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [f, ...c] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          s(f, c);
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
      l(u.plugins), u.settings && (i.settings = xr(!0, i.settings, u.settings));
    }
    function l(u) {
      let f = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++f < u.length; ) {
          const c = u[f];
          o(c);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function s(u, f) {
      let c = -1, h = -1;
      for (; ++c < r.length; )
        if (r[c][0] === u) {
          h = c;
          break;
        }
      if (h === -1)
        r.push([u, ...f]);
      else if (f.length > 0) {
        let [p, ...m] = f;
        const b = r[h][1];
        Gr(b) && Gr(p) && (p = xr(!0, b, p)), r[h] = [u, p, ...m];
      }
    }
  }
}
const im = new di().freeze();
function Sr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Tr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Ar(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function qo(e) {
  if (!Gr(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Yo(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function vn(e) {
  return om(e) ? e : new Ol(e);
}
function om(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function am(e) {
  return typeof e == "string" || lm(e);
}
function lm(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const sm = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Xo = [], Ko = { allowDangerousHtml: !0 }, um = /^(https?|ircs?|mailto|xmpp)$/i, cm = [
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
function fm(e) {
  const t = pm(e), n = hm(e);
  return dm(t.runSync(t.parse(n), n), e);
}
function pm(e) {
  const t = e.rehypePlugins || Xo, n = e.remarkPlugins || Xo, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Ko } : Ko;
  return im().use(Wh).use(n).use(Ud, r).use(t);
}
function hm(e) {
  const t = e.children || "", n = new Ol();
  return typeof t == "string" && (n.value = t), n;
}
function dm(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, o = t.disallowedElements, a = t.skipHtml, l = t.unwrapDisallowed, s = t.urlTransform || mm;
  for (const f of cm)
    Object.hasOwn(t, f.from) && ("" + f.from + (f.to ? "use `" + f.to + "` instead" : "remove it") + sm + f.id, void 0);
  return hi(e, u), vf(e, {
    Fragment: Un,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: S,
    jsxs: me,
    passKeys: !0,
    passNode: !0
  });
  function u(f, c, h) {
    if (f.type === "raw" && h && typeof c == "number")
      return a ? h.children.splice(c, 1) : h.children[c] = { type: "text", value: f.value }, c;
    if (f.type === "element") {
      let p;
      for (p in yr)
        if (Object.hasOwn(yr, p) && Object.hasOwn(f.properties, p)) {
          const m = f.properties[p], b = yr[p];
          (b === null || b.includes(f.tagName)) && (f.properties[p] = s(String(m || ""), p, f));
        }
    }
    if (f.type === "element") {
      let p = n ? !n.includes(f.tagName) : o ? o.includes(f.tagName) : !1;
      if (!p && r && typeof c == "number" && (p = !r(f, c, h)), p && h && typeof c == "number")
        return l && f.children ? h.children.splice(c, 1, ...f.children) : h.children.splice(c, 1), c;
    }
  }
}
function mm(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    um.test(e.slice(0, t)) ? e : ""
  );
}
function Zo(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function gm(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function ym(e, t, n) {
  const i = Xn((n || {}).ignore || []), o = bm(t);
  let a = -1;
  for (; ++a < o.length; )
    Pl(e, "text", l);
  function l(u, f) {
    let c = -1, h;
    for (; ++c < f.length; ) {
      const p = f[c], m = h ? h.children : void 0;
      if (i(
        p,
        m ? m.indexOf(p) : void 0,
        h
      ))
        return;
      h = p;
    }
    if (h)
      return s(u, f);
  }
  function s(u, f) {
    const c = f[f.length - 1], h = o[a][0], p = o[a][1];
    let m = 0;
    const E = c.children.indexOf(u);
    let k = !1, _ = [];
    h.lastIndex = 0;
    let A = h.exec(u.value);
    for (; A; ) {
      const R = A.index, M = {
        index: A.index,
        input: A.input,
        stack: [...f, u]
      };
      let C = p(...A, M);
      if (typeof C == "string" && (C = C.length > 0 ? { type: "text", value: C } : void 0), C === !1 ? h.lastIndex = R + 1 : (m !== R && _.push({
        type: "text",
        value: u.value.slice(m, R)
      }), Array.isArray(C) ? _.push(...C) : C && _.push(C), m = R + A[0].length, k = !0), !h.global)
        break;
      A = h.exec(u.value);
    }
    return k ? (m < u.value.length && _.push({ type: "text", value: u.value.slice(m) }), c.children.splice(E, 1, ..._)) : _ = [u], E + _.length;
  }
}
function bm(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([km(i[0]), xm(i[1])]);
  }
  return t;
}
function km(e) {
  return typeof e == "string" ? new RegExp(gm(e), "g") : e;
}
function xm(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const _r = "phrasing", Ir = ["autolink", "link", "image", "label"];
function wm() {
  return {
    transforms: [Im],
    enter: {
      literalAutolink: Em,
      literalAutolinkEmail: vr,
      literalAutolinkHttp: vr,
      literalAutolinkWww: vr
    },
    exit: {
      literalAutolink: _m,
      literalAutolinkEmail: Am,
      literalAutolinkHttp: Sm,
      literalAutolinkWww: Tm
    }
  };
}
function Cm() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: _r,
        notInConstruct: Ir
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: _r,
        notInConstruct: Ir
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: _r,
        notInConstruct: Ir
      }
    ]
  };
}
function Em(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function vr(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Sm(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Tm(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Am(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function _m(e) {
  this.exit(e);
}
function Im(e) {
  ym(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, vm],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Lm]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function vm(e, t, n, r, i) {
  let o = "";
  if (!Ml(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !Dm(n)))
    return !1;
  const a = Rm(n + r);
  if (!a[0]) return !1;
  const l = {
    type: "link",
    title: null,
    url: o + t + a[0],
    children: [{ type: "text", value: t + a[0] }]
  };
  return a[1] ? [l, { type: "text", value: a[1] }] : l;
}
function Lm(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Ml(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function Dm(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Rm(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Zo(e, "(");
  let o = Zo(e, ")");
  for (; r !== -1 && i > o; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [e, n];
}
function Ml(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Rt(n) || Wn(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
Fl.peek = Um;
function Pm() {
  this.buffer();
}
function Nm(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function Om() {
  this.buffer();
}
function Mm(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function Fm(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = rt(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function zm(e) {
  this.exit(e);
}
function Bm(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = rt(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function Hm(e) {
  this.exit(e);
}
function Um() {
  return "[";
}
function Fl(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const a = n.enter("footnoteReference"), l = n.enter("reference");
  return o += i.move(
    n.safe(n.associationId(e), { after: "]", before: o })
  ), l(), a(), o += i.move("]"), o;
}
function $m() {
  return {
    enter: {
      gfmFootnoteCallString: Pm,
      gfmFootnoteCall: Nm,
      gfmFootnoteDefinitionLabelString: Om,
      gfmFootnoteDefinition: Mm
    },
    exit: {
      gfmFootnoteCallString: Fm,
      gfmFootnoteCall: zm,
      gfmFootnoteDefinitionLabelString: Bm,
      gfmFootnoteDefinition: Hm
    }
  };
}
function jm(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: Fl },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, o, a) {
    const l = o.createTracker(a);
    let s = l.move("[^");
    const u = o.enter("footnoteDefinition"), f = o.enter("label");
    return s += l.move(
      o.safe(o.associationId(r), { before: s, after: "]" })
    ), f(), s += l.move("]:"), r.children && r.children.length > 0 && (l.shift(4), s += l.move(
      (t ? `
` : " ") + o.indentLines(
        o.containerFlow(r, l.current()),
        t ? zl : Vm
      )
    )), u(), s;
  }
}
function Vm(e, t, n) {
  return t === 0 ? e : zl(e, t, n);
}
function zl(e, t, n) {
  return (n ? "" : "    ") + e;
}
const Gm = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Bl.peek = Km;
function Wm() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Ym },
    exit: { strikethrough: Xm }
  };
}
function qm() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Gm
      }
    ],
    handlers: { delete: Bl }
  };
}
function Ym(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Xm(e) {
  this.exit(e);
}
function Bl(e, t, n, r) {
  const i = n.createTracker(r), o = n.enter("strikethrough");
  let a = i.move("~~");
  return a += n.containerPhrasing(e, {
    ...i.current(),
    before: a,
    after: "~"
  }), a += i.move("~~"), o(), a;
}
function Km() {
  return "~";
}
function Zm(e) {
  return e.length;
}
function Qm(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Zm, o = [], a = [], l = [], s = [];
  let u = 0, f = -1;
  for (; ++f < e.length; ) {
    const b = [], E = [];
    let k = -1;
    for (e[f].length > u && (u = e[f].length); ++k < e[f].length; ) {
      const _ = Jm(e[f][k]);
      if (n.alignDelimiters !== !1) {
        const A = i(_);
        E[k] = A, (s[k] === void 0 || A > s[k]) && (s[k] = A);
      }
      b.push(_);
    }
    a[f] = b, l[f] = E;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < u; )
      o[c] = Qo(r[c]);
  else {
    const b = Qo(r);
    for (; ++c < u; )
      o[c] = b;
  }
  c = -1;
  const h = [], p = [];
  for (; ++c < u; ) {
    const b = o[c];
    let E = "", k = "";
    b === 99 ? (E = ":", k = ":") : b === 108 ? E = ":" : b === 114 && (k = ":");
    let _ = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[c] - E.length - k.length
    );
    const A = E + "-".repeat(_) + k;
    n.alignDelimiters !== !1 && (_ = E.length + _ + k.length, _ > s[c] && (s[c] = _), p[c] = _), h[c] = A;
  }
  a.splice(1, 0, h), l.splice(1, 0, p), f = -1;
  const m = [];
  for (; ++f < a.length; ) {
    const b = a[f], E = l[f];
    c = -1;
    const k = [];
    for (; ++c < u; ) {
      const _ = b[c] || "";
      let A = "", R = "";
      if (n.alignDelimiters !== !1) {
        const M = s[c] - (E[c] || 0), C = o[c];
        C === 114 ? A = " ".repeat(M) : C === 99 ? M % 2 ? (A = " ".repeat(M / 2 + 0.5), R = " ".repeat(M / 2 - 0.5)) : (A = " ".repeat(M / 2), R = A) : R = " ".repeat(M);
      }
      n.delimiterStart !== !1 && !c && k.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && _ === "") && (n.delimiterStart !== !1 || c) && k.push(" "), n.alignDelimiters !== !1 && k.push(A), k.push(_), n.alignDelimiters !== !1 && k.push(R), n.padding !== !1 && k.push(" "), (n.delimiterEnd !== !1 || c !== u - 1) && k.push("|");
    }
    m.push(
      n.delimiterEnd === !1 ? k.join("").replace(/ +$/, "") : k.join("")
    );
  }
  return m.join(`
`);
}
function Jm(e) {
  return e == null ? "" : String(e);
}
function Qo(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function e1(e, t, n, r) {
  const i = n.enter("blockquote"), o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const a = n.indentLines(
    n.containerFlow(e, o.current()),
    t1
  );
  return i(), a;
}
function t1(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function n1(e, t) {
  return Jo(e, t.inConstruct, !0) && !Jo(e, t.notInConstruct, !1);
}
function Jo(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function ea(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && n1(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function r1(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, o = 0, a = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > a && (a = o) : o = 1, i = r + t.length, r = n.indexOf(t, i);
  return a;
}
function i1(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function o1(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function a1(e, t, n, r) {
  const i = o1(n), o = e.value || "", a = i === "`" ? "GraveAccent" : "Tilde";
  if (i1(e, n)) {
    const c = n.enter("codeIndented"), h = n.indentLines(o, l1);
    return c(), h;
  }
  const l = n.createTracker(r), s = i.repeat(Math.max(r1(o, i) + 1, 3)), u = n.enter("codeFenced");
  let f = l.move(s);
  if (e.lang) {
    const c = n.enter(`codeFencedLang${a}`);
    f += l.move(
      n.safe(e.lang, {
        before: f,
        after: " ",
        encode: ["`"],
        ...l.current()
      })
    ), c();
  }
  if (e.lang && e.meta) {
    const c = n.enter(`codeFencedMeta${a}`);
    f += l.move(" "), f += l.move(
      n.safe(e.meta, {
        before: f,
        after: `
`,
        encode: ["`"],
        ...l.current()
      })
    ), c();
  }
  return f += l.move(`
`), o && (f += l.move(o + `
`)), f += l.move(s), u(), f;
}
function l1(e, t, n) {
  return (n ? "" : "    ") + e;
}
function mi(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function s1(e, t, n, r) {
  const i = mi(n), o = i === '"' ? "Quote" : "Apostrophe", a = n.enter("definition");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("[");
  return u += s.move(
    n.safe(n.associationId(e), {
      before: u,
      after: "]",
      ...s.current()
    })
  ), u += s.move("]: "), l(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (l = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...s.current()
    })
  )), l(), e.title && (l = n.enter(`title${o}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), l()), a(), u;
}
function u1(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function hn(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Hn(e, t, n) {
  const r = Yt(e), i = Yt(t);
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
Hl.peek = c1;
function Hl(e, t, n, r) {
  const i = u1(n), o = n.enter("emphasis"), a = n.createTracker(r), l = a.move(i);
  let s = a.move(
    n.containerPhrasing(e, {
      after: i,
      before: l,
      ...a.current()
    })
  );
  const u = s.charCodeAt(0), f = Hn(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  f.inside && (s = hn(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), h = Hn(r.after.charCodeAt(0), c, i);
  h.inside && (s = s.slice(0, -1) + hn(c));
  const p = a.move(i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: f.outside
  }, l + s + p;
}
function c1(e, t, n) {
  return n.options.emphasis || "*";
}
function f1(e, t) {
  let n = !1;
  return hi(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, jr;
  }), !!((!e.depth || e.depth < 3) && ai(e) && (t.options.setext || n));
}
function p1(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = n.createTracker(r);
  if (f1(e, n)) {
    const f = n.enter("headingSetext"), c = n.enter("phrasing"), h = n.containerPhrasing(e, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return c(), f(), h + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      h.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(h.lastIndexOf("\r"), h.lastIndexOf(`
`)) + 1)
    );
  }
  const a = "#".repeat(i), l = n.enter("headingAtx"), s = n.enter("phrasing");
  o.move(a + " ");
  let u = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(u) && (u = hn(u.charCodeAt(0)) + u.slice(1)), u = u ? a + " " + u : a, n.options.closeAtx && (u += " " + a), s(), l(), u;
}
Ul.peek = h1;
function Ul(e) {
  return e.value || "";
}
function h1() {
  return "<";
}
$l.peek = d1;
function $l(e, t, n, r) {
  const i = mi(n), o = i === '"' ? "Quote" : "Apostrophe", a = n.enter("image");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("![");
  return u += s.move(
    n.safe(e.alt, { before: u, after: "]", ...s.current() })
  ), u += s.move("]("), l(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (l = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), l(), e.title && (l = n.enter(`title${o}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), l()), u += s.move(")"), a(), u;
}
function d1() {
  return "!";
}
jl.peek = m1;
function jl(e, t, n, r) {
  const i = e.referenceType, o = n.enter("imageReference");
  let a = n.enter("label");
  const l = n.createTracker(r);
  let s = l.move("![");
  const u = n.safe(e.alt, {
    before: s,
    after: "]",
    ...l.current()
  });
  s += l.move(u + "]["), a();
  const f = n.stack;
  n.stack = [], a = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...l.current()
  });
  return a(), n.stack = f, o(), i === "full" || !u || u !== c ? s += l.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += l.move("]"), s;
}
function m1() {
  return "!";
}
Vl.peek = g1;
function Vl(e, t, n) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length; ) {
    const a = n.unsafe[o], l = n.compilePattern(a);
    let s;
    if (a.atBreak)
      for (; s = l.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return i + r + i;
}
function g1() {
  return "`";
}
function Gl(e, t) {
  const n = ai(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Wl.peek = y1;
function Wl(e, t, n, r) {
  const i = mi(n), o = i === '"' ? "Quote" : "Apostrophe", a = n.createTracker(r);
  let l, s;
  if (Gl(e, n)) {
    const f = n.stack;
    n.stack = [], l = n.enter("autolink");
    let c = a.move("<");
    return c += a.move(
      n.containerPhrasing(e, {
        before: c,
        after: ">",
        ...a.current()
      })
    ), c += a.move(">"), l(), n.stack = f, c;
  }
  l = n.enter("link"), s = n.enter("label");
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
  )), s(), e.title && (s = n.enter(`title${o}`), u += a.move(" " + i), u += a.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...a.current()
    })
  ), u += a.move(i), s()), u += a.move(")"), l(), u;
}
function y1(e, t, n) {
  return Gl(e, n) ? "<" : "[";
}
ql.peek = b1;
function ql(e, t, n, r) {
  const i = e.referenceType, o = n.enter("linkReference");
  let a = n.enter("label");
  const l = n.createTracker(r);
  let s = l.move("[");
  const u = n.containerPhrasing(e, {
    before: s,
    after: "]",
    ...l.current()
  });
  s += l.move(u + "]["), a();
  const f = n.stack;
  n.stack = [], a = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...l.current()
  });
  return a(), n.stack = f, o(), i === "full" || !u || u !== c ? s += l.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += l.move("]"), s;
}
function b1() {
  return "[";
}
function gi(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function k1(e) {
  const t = gi(e), n = e.options.bulletOther;
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
function x1(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Yl(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function w1(e, t, n, r) {
  const i = n.enter("list"), o = n.bulletCurrent;
  let a = e.ordered ? x1(n) : gi(n);
  const l = e.ordered ? a === "." ? ")" : "." : k1(n);
  let s = t && n.bulletLastUsed ? a === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const f = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (a === "*" || a === "-") && // Empty first list item:
      f && (!f.children || !f.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), Yl(n) === a && f
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const h = e.children[c];
        if (h && h.type === "listItem" && h.children && h.children[0] && h.children[0].type === "thematicBreak") {
          s = !0;
          break;
        }
      }
    }
  }
  s && (a = l), n.bulletCurrent = a;
  const u = n.containerFlow(e, r);
  return n.bulletLastUsed = a, n.bulletCurrent = o, i(), u;
}
function C1(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function E1(e, t, n, r) {
  const i = C1(n);
  let o = n.bulletCurrent || gi(n);
  t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
  let a = o.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (a = Math.ceil(a / 4) * 4);
  const l = n.createTracker(r);
  l.move(o + " ".repeat(a - o.length)), l.shift(a);
  const s = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, l.current()),
    f
  );
  return s(), u;
  function f(c, h, p) {
    return h ? (p ? "" : " ".repeat(a)) + c : (p ? o : o + " ".repeat(a - o.length)) + c;
  }
}
function S1(e, t, n, r) {
  const i = n.enter("paragraph"), o = n.enter("phrasing"), a = n.containerPhrasing(e, r);
  return o(), i(), a;
}
const T1 = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Xn([
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
function A1(e, t, n, r) {
  return (e.children.some(function(a) {
    return T1(a);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function _1(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
Xl.peek = I1;
function Xl(e, t, n, r) {
  const i = _1(n), o = n.enter("strong"), a = n.createTracker(r), l = a.move(i + i);
  let s = a.move(
    n.containerPhrasing(e, {
      after: i,
      before: l,
      ...a.current()
    })
  );
  const u = s.charCodeAt(0), f = Hn(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  f.inside && (s = hn(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), h = Hn(r.after.charCodeAt(0), c, i);
  h.inside && (s = s.slice(0, -1) + hn(c));
  const p = a.move(i + i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: f.outside
  }, l + s + p;
}
function I1(e, t, n) {
  return n.options.strong || "*";
}
function v1(e, t, n, r) {
  return n.safe(e.value, r);
}
function L1(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function D1(e, t, n) {
  const r = (Yl(n) + (n.options.ruleSpaces ? " " : "")).repeat(L1(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Kl = {
  blockquote: e1,
  break: ea,
  code: a1,
  definition: s1,
  emphasis: Hl,
  hardBreak: ea,
  heading: p1,
  html: Ul,
  image: $l,
  imageReference: jl,
  inlineCode: Vl,
  link: Wl,
  linkReference: ql,
  list: w1,
  listItem: E1,
  paragraph: S1,
  root: A1,
  strong: Xl,
  text: v1,
  thematicBreak: D1
};
function R1() {
  return {
    enter: {
      table: P1,
      tableData: ta,
      tableHeader: ta,
      tableRow: O1
    },
    exit: {
      codeText: M1,
      table: N1,
      tableData: Lr,
      tableHeader: Lr,
      tableRow: Lr
    }
  };
}
function P1(e) {
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
function N1(e) {
  this.exit(e), this.data.inTable = void 0;
}
function O1(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Lr(e) {
  this.exit(e);
}
function ta(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function M1(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, F1));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function F1(e, t) {
  return t === "|" ? t : e;
}
function z1(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, o = n ? " " : "|";
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
      inlineCode: h,
      table: a,
      tableCell: s,
      tableRow: l
    }
  };
  function a(p, m, b, E) {
    return u(f(p, b, E), p.align);
  }
  function l(p, m, b, E) {
    const k = c(p, b, E), _ = u([k]);
    return _.slice(0, _.indexOf(`
`));
  }
  function s(p, m, b, E) {
    const k = b.enter("tableCell"), _ = b.enter("phrasing"), A = b.containerPhrasing(p, {
      ...E,
      before: o,
      after: o
    });
    return _(), k(), A;
  }
  function u(p, m) {
    return Qm(p, {
      align: m,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function f(p, m, b) {
    const E = p.children;
    let k = -1;
    const _ = [], A = m.enter("table");
    for (; ++k < E.length; )
      _[k] = c(E[k], m, b);
    return A(), _;
  }
  function c(p, m, b) {
    const E = p.children;
    let k = -1;
    const _ = [], A = m.enter("tableRow");
    for (; ++k < E.length; )
      _[k] = s(E[k], p, m, b);
    return A(), _;
  }
  function h(p, m, b) {
    let E = Kl.inlineCode(p, m, b);
    return b.stack.includes("tableCell") && (E = E.replace(/\|/g, "\\$&")), E;
  }
}
function B1() {
  return {
    exit: {
      taskListCheckValueChecked: na,
      taskListCheckValueUnchecked: na,
      paragraph: U1
    }
  };
}
function H1() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: $1 }
  };
}
function na(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function U1(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let o = -1, a;
      for (; ++o < i.length; ) {
        const l = i[o];
        if (l.type === "paragraph") {
          a = l;
          break;
        }
      }
      a === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function $1(e, t, n, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", a = "[" + (e.checked ? "x" : " ") + "] ", l = n.createTracker(r);
  o && l.move(a);
  let s = Kl.listItem(e, t, n, {
    ...r,
    ...l.current()
  });
  return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(f) {
    return f + a;
  }
}
function j1() {
  return [
    wm(),
    $m(),
    Wm(),
    R1(),
    B1()
  ];
}
function V1(e) {
  return {
    extensions: [
      Cm(),
      jm(e),
      qm(),
      z1(e),
      H1()
    ]
  };
}
const G1 = {
  tokenize: Z1,
  partial: !0
}, Zl = {
  tokenize: Q1,
  partial: !0
}, Ql = {
  tokenize: J1,
  partial: !0
}, Jl = {
  tokenize: eg,
  partial: !0
}, W1 = {
  tokenize: tg,
  partial: !0
}, es = {
  name: "wwwAutolink",
  tokenize: X1,
  previous: ns
}, ts = {
  name: "protocolAutolink",
  tokenize: K1,
  previous: rs
}, yt = {
  name: "emailAutolink",
  tokenize: Y1,
  previous: is
}, pt = {};
function q1() {
  return {
    text: pt
  };
}
let Lt = 48;
for (; Lt < 123; )
  pt[Lt] = yt, Lt++, Lt === 58 ? Lt = 65 : Lt === 91 && (Lt = 97);
pt[43] = yt;
pt[45] = yt;
pt[46] = yt;
pt[95] = yt;
pt[72] = [yt, ts];
pt[104] = [yt, ts];
pt[87] = [yt, es];
pt[119] = [yt, es];
function Y1(e, t, n) {
  const r = this;
  let i, o;
  return a;
  function a(c) {
    return !qr(c) || !is.call(r, r.previous) || yi(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), l(c));
  }
  function l(c) {
    return qr(c) ? (e.consume(c), l) : c === 64 ? (e.consume(c), s) : n(c);
  }
  function s(c) {
    return c === 46 ? e.check(W1, f, u)(c) : c === 45 || c === 95 || Fe(c) ? (o = !0, e.consume(c), s) : f(c);
  }
  function u(c) {
    return e.consume(c), i = !0, s;
  }
  function f(c) {
    return o && i && Ue(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function X1(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a !== 87 && a !== 119 || !ns.call(r, r.previous) || yi(r.events) ? n(a) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(G1, e.attempt(Zl, e.attempt(Ql, o), n), n)(a));
  }
  function o(a) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(a);
  }
}
function K1(e, t, n) {
  const r = this;
  let i = "", o = !1;
  return a;
  function a(c) {
    return (c === 72 || c === 104) && rs.call(r, r.previous) && !yi(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), l) : n(c);
  }
  function l(c) {
    if (Ue(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), l;
    if (c === 58) {
      const h = i.toLowerCase();
      if (h === "http" || h === "https")
        return e.consume(c), s;
    }
    return n(c);
  }
  function s(c) {
    return c === 47 ? (e.consume(c), o ? u : (o = !0, s)) : n(c);
  }
  function u(c) {
    return c === null || Fn(c) || he(c) || Rt(c) || Wn(c) ? n(c) : e.attempt(Zl, e.attempt(Ql, f), n)(c);
  }
  function f(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function Z1(e, t, n) {
  let r = 0;
  return i;
  function i(a) {
    return (a === 87 || a === 119) && r < 3 ? (r++, e.consume(a), i) : a === 46 && r === 3 ? (e.consume(a), o) : n(a);
  }
  function o(a) {
    return a === null ? n(a) : t(a);
  }
}
function Q1(e, t, n) {
  let r, i, o;
  return a;
  function a(u) {
    return u === 46 || u === 95 ? e.check(Jl, s, l)(u) : u === null || he(u) || Rt(u) || u !== 45 && Wn(u) ? s(u) : (o = !0, e.consume(u), a);
  }
  function l(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), a;
  }
  function s(u) {
    return i || r || !o ? n(u) : t(u);
  }
}
function J1(e, t) {
  let n = 0, r = 0;
  return i;
  function i(a) {
    return a === 40 ? (n++, e.consume(a), i) : a === 41 && r < n ? o(a) : a === 33 || a === 34 || a === 38 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 60 || a === 63 || a === 93 || a === 95 || a === 126 ? e.check(Jl, t, o)(a) : a === null || he(a) || Rt(a) ? t(a) : (e.consume(a), i);
  }
  function o(a) {
    return a === 41 && r++, e.consume(a), i;
  }
}
function eg(e, t, n) {
  return r;
  function r(l) {
    return l === 33 || l === 34 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 63 || l === 95 || l === 126 ? (e.consume(l), r) : l === 38 ? (e.consume(l), o) : l === 93 ? (e.consume(l), i) : (
      // `<` is an end.
      l === 60 || // So is whitespace.
      l === null || he(l) || Rt(l) ? t(l) : n(l)
    );
  }
  function i(l) {
    return l === null || l === 40 || l === 91 || he(l) || Rt(l) ? t(l) : r(l);
  }
  function o(l) {
    return Ue(l) ? a(l) : n(l);
  }
  function a(l) {
    return l === 59 ? (e.consume(l), r) : Ue(l) ? (e.consume(l), a) : n(l);
  }
}
function tg(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return Fe(o) ? n(o) : t(o);
  }
}
function ns(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || he(e);
}
function rs(e) {
  return !Ue(e);
}
function is(e) {
  return !(e === 47 || qr(e));
}
function qr(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Fe(e);
}
function yi(e) {
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
const ng = {
  tokenize: cg,
  partial: !0
};
function rg() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: lg,
        continuation: {
          tokenize: sg
        },
        exit: ug
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: ag
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: ig,
        resolveTo: og
      }
    }
  };
}
function ig(e, t, n) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
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
  return l;
  function l(s) {
    if (!a || !a._balanced)
      return n(s);
    const u = rt(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function og(e, t) {
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
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, a = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
  }, l = [
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
    ["enter", o, t],
    ["enter", a, t],
    ["exit", a, t],
    ["exit", o, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...l), e;
}
function ag(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, a;
  return l;
  function l(c) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(c) {
    return c !== 94 ? n(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(c) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      c === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || he(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const h = e.exit("gfmFootnoteCallString");
      return i.includes(rt(r.sliceSerialize(h))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return he(c) || (a = !0), o++, e.consume(c), c === 92 ? f : u;
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, u) : u(c);
  }
}
function lg(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, a = 0, l;
  return s;
  function s(m) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(m) {
    return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", f) : n(m);
  }
  function f(m) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      m === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      m === null || m === 91 || he(m)
    )
      return n(m);
    if (m === 93) {
      e.exit("chunkString");
      const b = e.exit("gfmFootnoteDefinitionLabelString");
      return o = rt(r.sliceSerialize(b)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h;
    }
    return he(m) || (l = !0), a++, e.consume(m), m === 92 ? c : f;
  }
  function c(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), a++, f) : f(m);
  }
  function h(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), i.includes(o) || i.push(o), ue(e, p, "gfmFootnoteDefinitionWhitespace")) : n(m);
  }
  function p(m) {
    return t(m);
  }
}
function sg(e, t, n) {
  return e.check(yn, t, e.attempt(ng, t, n));
}
function ug(e) {
  e.exit("gfmFootnoteDefinition");
}
function cg(e, t, n) {
  const r = this;
  return ue(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "gfmFootnoteDefinitionIndent" && a[2].sliceSerialize(a[1], !0).length === 4 ? t(o) : n(o);
  }
}
function fg(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: o,
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
  function i(a, l) {
    let s = -1;
    for (; ++s < a.length; )
      if (a[s][0] === "enter" && a[s][1].type === "strikethroughSequenceTemporary" && a[s][1]._close) {
        let u = s;
        for (; u--; )
          if (a[u][0] === "exit" && a[u][1].type === "strikethroughSequenceTemporary" && a[u][1]._open && // If the sizes are the same:
          a[s][1].end.offset - a[s][1].start.offset === a[u][1].end.offset - a[u][1].start.offset) {
            a[s][1].type = "strikethroughSequence", a[u][1].type = "strikethroughSequence";
            const f = {
              type: "strikethrough",
              start: Object.assign({}, a[u][1].start),
              end: Object.assign({}, a[s][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, a[u][1].end),
              end: Object.assign({}, a[s][1].start)
            }, h = [["enter", f, l], ["enter", a[u][1], l], ["exit", a[u][1], l], ["enter", c, l]], p = l.parser.constructs.insideSpan.null;
            p && Xe(h, h.length, 0, qn(p, a.slice(u + 1, s), l)), Xe(h, h.length, 0, [["exit", c, l], ["enter", a[s][1], l], ["exit", a[s][1], l], ["exit", f, l]]), Xe(a, u - 1, s - u + 3, h), s = u + h.length - 2;
            break;
          }
      }
    for (s = -1; ++s < a.length; )
      a[s][1].type === "strikethroughSequenceTemporary" && (a[s][1].type = "data");
    return a;
  }
  function o(a, l, s) {
    const u = this.previous, f = this.events;
    let c = 0;
    return h;
    function h(m) {
      return u === 126 && f[f.length - 1][1].type !== "characterEscape" ? s(m) : (a.enter("strikethroughSequenceTemporary"), p(m));
    }
    function p(m) {
      const b = Yt(u);
      if (m === 126)
        return c > 1 ? s(m) : (a.consume(m), c++, p);
      if (c < 2 && !n) return s(m);
      const E = a.exit("strikethroughSequenceTemporary"), k = Yt(m);
      return E._open = !k || k === 2 && !!b, E._close = !b || b === 2 && !!k, l(m);
    }
  }
}
class pg {
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
    hg(this, t, n, r);
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
    if (this.map.sort(function(o, a) {
      return o[0] - a[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push(t.slice()), t.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const o of i)
        t.push(o);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function hg(e, t, n, r) {
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
function dg(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function mg() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: gg,
        resolveAll: yg
      }
    }
  };
}
function gg(e, t, n) {
  const r = this;
  let i = 0, o = 0, a;
  return l;
  function l(w) {
    let N = r.events.length - 1;
    for (; N > -1; ) {
      const ae = r.events[N][1].type;
      if (ae === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      ae === "linePrefix") N--;
      else break;
    }
    const P = N > -1 ? r.events[N][1].type : null, Y = P === "tableHead" || P === "tableRow" ? C : s;
    return Y === C && r.parser.lazy[r.now().line] ? n(w) : Y(w);
  }
  function s(w) {
    return e.enter("tableHead"), e.enter("tableRow"), u(w);
  }
  function u(w) {
    return w === 124 || (a = !0, o += 1), f(w);
  }
  function f(w) {
    return w === null ? n(w) : H(w) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), p) : n(w) : oe(w) ? ue(e, f, "whitespace")(w) : (o += 1, a && (a = !1, i += 1), w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), a = !0, f) : (e.enter("data"), c(w)));
  }
  function c(w) {
    return w === null || w === 124 || he(w) ? (e.exit("data"), f(w)) : (e.consume(w), w === 92 ? h : c);
  }
  function h(w) {
    return w === 92 || w === 124 ? (e.consume(w), c) : c(w);
  }
  function p(w) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(w) : (e.enter("tableDelimiterRow"), a = !1, oe(w) ? ue(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : m(w));
  }
  function m(w) {
    return w === 45 || w === 58 ? E(w) : w === 124 ? (a = !0, e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), b) : M(w);
  }
  function b(w) {
    return oe(w) ? ue(e, E, "whitespace")(w) : E(w);
  }
  function E(w) {
    return w === 58 ? (o += 1, a = !0, e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), k) : w === 45 ? (o += 1, k(w)) : w === null || H(w) ? R(w) : M(w);
  }
  function k(w) {
    return w === 45 ? (e.enter("tableDelimiterFiller"), _(w)) : M(w);
  }
  function _(w) {
    return w === 45 ? (e.consume(w), _) : w === 58 ? (a = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), A) : (e.exit("tableDelimiterFiller"), A(w));
  }
  function A(w) {
    return oe(w) ? ue(e, R, "whitespace")(w) : R(w);
  }
  function R(w) {
    return w === 124 ? m(w) : w === null || H(w) ? !a || i !== o ? M(w) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(w)) : M(w);
  }
  function M(w) {
    return n(w);
  }
  function C(w) {
    return e.enter("tableRow"), B(w);
  }
  function B(w) {
    return w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), B) : w === null || H(w) ? (e.exit("tableRow"), t(w)) : oe(w) ? ue(e, B, "whitespace")(w) : (e.enter("data"), Q(w));
  }
  function Q(w) {
    return w === null || w === 124 || he(w) ? (e.exit("data"), B(w)) : (e.consume(w), w === 92 ? X : Q);
  }
  function X(w) {
    return w === 92 || w === 124 ? (e.consume(w), Q) : Q(w);
  }
}
function yg(e, t) {
  let n = -1, r = !0, i = 0, o = [0, 0, 0, 0], a = [0, 0, 0, 0], l = !1, s = 0, u, f, c;
  const h = new pg();
  for (; ++n < e.length; ) {
    const p = e[n], m = p[1];
    p[0] === "enter" ? m.type === "tableHead" ? (l = !1, s !== 0 && (ra(h, t, s, u, f), f = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, h.add(n, 0, [["enter", u, t]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, c = void 0, o = [0, 0, 0, 0], a = [0, n + 1, 0, 0], l && (l = !1, f = {
      type: "tableBody",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, h.add(n, 0, [["enter", f, t]])), i = m.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, a[2] === 0 && (o[1] !== 0 && (a[0] = a[1], c = Ln(h, t, o, i, void 0, c), o = [0, 0, 0, 0]), a[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (a[0] = a[1], c = Ln(h, t, o, i, void 0, c)), o = a, a = [o[1], n, 0, 0])) : m.type === "tableHead" ? (l = !0, s = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (s = n, o[1] !== 0 ? (a[0] = a[1], c = Ln(h, t, o, i, n, c)) : a[1] !== 0 && (c = Ln(h, t, a, i, n, c)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (a[3] = n);
  }
  for (s !== 0 && ra(h, t, s, u, f), h.consume(t.events), n = -1; ++n < t.events.length; ) {
    const p = t.events[n];
    p[0] === "enter" && p[1].type === "table" && (p[1]._align = dg(t.events, n));
  }
  return e;
}
function Ln(e, t, n, r, i, o) {
  const a = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", l = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, jt(t.events, n[0])), e.add(n[0], 0, [["exit", o, t]]));
  const s = jt(t.events, n[1]);
  if (o = {
    type: a,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", o, t]]), n[2] !== 0) {
    const u = jt(t.events, n[2]), f = jt(t.events, n[3]), c = {
      type: l,
      start: Object.assign({}, u),
      end: Object.assign({}, f)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const h = t.events[n[2]], p = t.events[n[3]];
      if (h[1].end = Object.assign({}, p[1].end), h[1].type = "chunkText", h[1].contentType = "text", n[3] > n[2] + 1) {
        const m = n[2] + 1, b = n[3] - n[2] - 1;
        e.add(m, b, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, jt(t.events, i)), e.add(i, 0, [["exit", o, t]]), o = void 0), o;
}
function ra(e, t, n, r, i) {
  const o = [], a = jt(t.events, n);
  i && (i.end = Object.assign({}, a), o.push(["exit", i, t])), r.end = Object.assign({}, a), o.push(["exit", r, t]), e.add(n + 1, 0, o);
}
function jt(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const bg = {
  name: "tasklistCheck",
  tokenize: xg
};
function kg() {
  return {
    text: {
      91: bg
    }
  };
}
function xg(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(s) {
    return he(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), a) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), a) : n(s);
  }
  function a(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), l) : n(s);
  }
  function l(s) {
    return H(s) ? t(s) : oe(s) ? e.check({
      tokenize: wg
    }, t, n)(s) : n(s);
  }
}
function wg(e, t, n) {
  return ue(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function Cg(e) {
  return dl([
    q1(),
    rg(),
    fg(e),
    mg(),
    kg()
  ]);
}
const Eg = {};
function Sg(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || Eg, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), a = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(Cg(n)), o.push(j1()), a.push(V1(n));
}
const Tg = 'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])', Ag = (e) => {
  const { src: t, alt: n, onClose: r } = e, i = Ae(null), o = Ae(null), a = Ae(null);
  Ke(() => {
    var s;
    return a.current = document.activeElement, (s = i.current) == null || s.focus(), () => {
      var u;
      (u = a.current) == null || u.focus();
    };
  }, []);
  const l = q(
    (s) => {
      if (s.key === "Escape") return r();
      if (s.key !== "Tab") return;
      const u = o.current;
      if (!u) return;
      const f = Array.from(u.querySelectorAll(Tg)).filter(
        (p) => !p.closest("[inert]")
      );
      if (f.length === 0) return;
      const c = f[0], h = f[f.length - 1];
      s.shiftKey ? document.activeElement === c && (s.preventDefault(), h.focus()) : document.activeElement === h && (s.preventDefault(), c.focus());
    },
    [r]
  );
  return /* @__PURE__ */ me(
    "div",
    {
      ref: o,
      className: "elitea-assistant-lightbox-overlay",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": n || "Image preview",
      onClick: r,
      onKeyDown: l,
      children: [
        /* @__PURE__ */ S(
          "button",
          {
            ref: i,
            className: "elitea-assistant-lightbox-close",
            onClick: r,
            "aria-label": "Close image preview",
            children: "✕"
          }
        ),
        /* @__PURE__ */ S(
          "img",
          {
            className: "elitea-assistant-lightbox-img",
            src: t,
            alt: n,
            onClick: (s) => s.stopPropagation()
          }
        )
      ]
    }
  );
}, os = fe((e) => {
  const { code: t } = e, { svg: n, error: r } = vc(t);
  return r ? /* @__PURE__ */ S("pre", { className: "elitea-assistant-mermaid-error", children: /* @__PURE__ */ S("code", { children: t }) }) : n ? /* @__PURE__ */ S(
    "div",
    {
      style: { overflowX: "auto", maxWidth: "100%" },
      dangerouslySetInnerHTML: { __html: n }
    }
  ) : null;
});
os.displayName = "MermaidBlock";
const bi = fe((e) => {
  const { content: t, isAnimating: n = !1 } = e, r = Lc(), [i, o] = pe(null), a = q(() => o(null), []);
  return /* @__PURE__ */ me(Un, { children: [
    /* @__PURE__ */ S("div", { className: "elitea-assistant-markdown", children: /* @__PURE__ */ S(
      fm,
      {
        remarkPlugins: [Sg],
        rehypePlugins: !n && r ? [r] : [],
        components: {
          code(s) {
            var p;
            const { className: u, children: f } = s, c = (p = /language-(\w+)/.exec(u ?? "")) == null ? void 0 : p[1], h = String(f ?? "").replace(/\n$/, "");
            return c === "mermaid" && !n ? /* @__PURE__ */ S(os, { code: h }) : /* @__PURE__ */ S("code", { className: u, children: f });
          },
          img(s) {
            const { src: u, alt: f } = s;
            return /* @__PURE__ */ S(
              "button",
              {
                type: "button",
                className: "elitea-assistant-img-btn",
                onClick: () => u && o({ src: u, alt: f ?? "" }),
                "aria-label": `${f || "Image"} — click to expand`,
                children: /* @__PURE__ */ S(
                  "img",
                  {
                    src: u,
                    alt: f ?? ""
                  }
                )
              }
            );
          }
        },
        children: t
      }
    ) }),
    i && ia(
      /* @__PURE__ */ S(
        Ag,
        {
          src: i.src,
          alt: i.alt,
          onClose: a
        }
      ),
      document.body
    )
  ] });
});
bi.displayName = "MarkdownContent";
const _g = {
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
}, Ig = {
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
}, vg = {
  light: _g,
  dark: Ig
}, Lg = (e, t) => ({
  ...vg[e],
  ...t
}), Dg = (e) => ({
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
}), Rg = Es((e, t) => {
  const {
    apiUrl: n,
    token: r,
    withCredentials: i = !1,
    socketPath: o = "/socket.io/",
    apiAdapter: a,
    title: l = "Elitea Assistant",
    placeholder: s = "Type a message...",
    welcomeMessage: u = `Hi! I'm your ELITEA Support Assistant.
Ask me anything about ELITEA or report any issues you're experiencing. I have context about your current screen and settings.`,
    position: f = "bottom-right",
    theme: c = "light",
    colors: h,
    supportAssistantContext: p
  } = e, m = St(() => Dg(Lg(c, h)), [c, h]), b = St(() => {
    if (a) return a;
    if (n && (r || i)) return As(n, { token: r, withCredentials: i });
    throw new Error(
      "EliteaAssistant: provide either apiAdapter, or apiUrl with token, or apiUrl with withCredentials"
    );
  }, [a, n, r, i]), E = St(
    () => ({
      url: n ? Hs(n) : "",
      path: o,
      token: r,
      withCredentials: i
    }),
    [n, o, r, i]
  ), k = Vu(E), {
    title: _,
    welcomeMessage: A,
    placeholder: R,
    supportProjectId: M,
    user: C,
    history: B,
    lastConversation: Q,
    isLoading: X
  } = Vs({
    api: b,
    title: l,
    welcomeMessage: u,
    placeholder: s
  }), { isOpen: w, isExpanded: N, open: P, close: Y, toggle: ae, expandFullscreen: W, collapseFullscreen: O, toggleFullscreen: ee } = Rs(), J = $u(), { popupVissible: Re, showPopup: g, hidePopup: K, popupText: Pe } = Gs(w), y = q(() => {
    J.captureScreenshot(), g();
  }, [J, g]), ge = q(() => {
    J.clearScreenshot(), K();
  }, [J, K]);
  return Ss(
    t,
    () => ({
      open: P,
      close: Y,
      toggle: ae,
      expandFullscreen: W,
      collapseFullscreen: O,
      toggleFullscreen: ee,
      showPopup: y,
      hidePopup: ge,
      isOpen: () => w,
      isExpanded: () => N
    }),
    [
      w,
      N,
      P,
      Y,
      ae,
      W,
      O,
      ee,
      y,
      ge
    ]
  ), /* @__PURE__ */ S(Sa.Provider, { value: b, children: /* @__PURE__ */ S(Ha.Provider, { value: k, children: /* @__PURE__ */ S(Ua.Provider, { value: p ?? null, children: /* @__PURE__ */ S(Ga.Provider, { value: c, children: /* @__PURE__ */ S(Ba.Provider, { value: J, children: /* @__PURE__ */ me(
    "div",
    {
      className: `elitea-assistant-container elitea-assistant-container--${f}`,
      style: m,
      children: [
        /* @__PURE__ */ S(
          Wa,
          {
            title: _,
            placeholder: R,
            welcomeMessage: A,
            avatar: C.avatar,
            supportProjectId: M,
            initialHistory: B,
            lastConversation: Q,
            isInitLoading: X,
            isOpen: w,
            onClose: Y,
            expanded: N,
            onExpand: ee
          }
        ),
        Re && !w && /* @__PURE__ */ S(
          qa,
          {
            message: Pe,
            onClose: ge
          }
        ),
        /* @__PURE__ */ S(da, { onClick: ae })
      ]
    }
  ) }) }) }) }) });
});
Rg.displayName = "EliteaAssistant";
export {
  Rg as EliteaAssistant,
  As as createDefaultAdapter
};
//# sourceMappingURL=elitea-assistant.js.map
