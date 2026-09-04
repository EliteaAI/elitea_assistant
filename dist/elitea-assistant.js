(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";.elitea-assistant-container{position:fixed;z-index:2147483647;font-family:Montserrat,sans-serif;font-size:.875rem;line-height:1.5;box-sizing:border-box}.elitea-assistant-container *,.elitea-assistant-container *:before,.elitea-assistant-container *:after{box-sizing:border-box}.elitea-assistant-container--bottom-right{bottom:.75rem;right:1.09375rem}.elitea-assistant-container--bottom-left{bottom:.75rem;left:1.09375rem}.elitea-assistant-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-button-bg);color:var(--elitea-assistant-button-icon);box-shadow:0 .25rem .75rem #00000026;transition:transform .2s ease,box-shadow .2s ease;padding:0}.elitea-assistant-button:hover{transform:scale(1.08);box-shadow:0 .375rem 1.25rem #0003}.elitea-assistant-button svg{width:1.75rem;height:1.75rem;fill:currentColor}.elitea-assistant-window{position:absolute;bottom:0rem;width:28.75rem;height:30rem;border-radius:1rem;overflow:hidden;display:flex;flex-direction:column;box-shadow:var(--elitea-assistant-window-shadow);background:var(--elitea-assistant-chat-bg);border:.0625rem solid var(--elitea-assistant-window-border);animation:elitea-assistant-slide-up .25s ease-out}.elitea-assistant-container--bottom-right .elitea-assistant-window{right:2.875rem}.elitea-assistant-container--bottom-left .elitea-assistant-window{left:2.875rem}@keyframes elitea-assistant-slide-up{0%{opacity:0;transform:translateY(.75rem)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483646;background:#00000080;display:flex;align-items:center;justify-content:center;animation:elitea-assistant-fade-in .2s ease-out}@keyframes elitea-assistant-fade-in{0%{opacity:0}to{opacity:1}}.elitea-assistant-window.elitea-assistant-window--expanded{position:fixed;top:0;right:0;bottom:0;left:0;margin:auto;width:45rem;height:42.375rem;max-width:calc(100vw - 2rem);max-height:calc(100vh - 2rem);z-index:99999999999;animation:elitea-assistant-scale-in .2s ease-out}@media (max-width: 48rem){.elitea-assistant-window.elitea-assistant-window--expanded{width:calc(100vw - 2rem);height:calc(100vh - 2rem);border-radius:.75rem}}@keyframes elitea-assistant-scale-in{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.elitea-assistant-header{display:flex;align-items:center;justify-content:space-between;height:3.25rem;padding:0 1rem;background:var(--elitea-assistant-header-bg);color:var(--elitea-assistant-header-text);flex-shrink:0;border-bottom:.0625rem solid var(--elitea-assistant-window-border)}.elitea-assistant-header-left,.elitea-assistant-header-right{display:flex;align-items:center;gap:.5rem}.elitea-assistant-header-title{font-size:.9375rem;font-weight:600;margin:0;white-space:nowrap}.elitea-assistant-header-action{border:.0625rem solid transparent;color:var(--elitea-assistant-header-text);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;width:1.75rem;height:1.75rem;min-width:auto;box-shadow:none;background:var(--elitea-assistant-header-action-bg);transition:background .15s ease,color .15s ease,border-color .15s ease}.elitea-assistant-header-close-action{border:none;color:var(--elitea-assistant-header-close-icon);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;width:1.75rem;height:1.75rem;min-width:auto;background:var(--elitea-assistant-header-close-bg);transition:background .15s ease,color .15s ease}.elitea-assistant-header-close-action:hover{background:var(--elitea-assistant-header-close-hover-bg);color:var(--elitea-assistant-header-close-hover-color)}.elitea-assistant-header-close-action:active{background:var(--elitea-assistant-header-close-active-bg);color:var(--elitea-assistant-header-close-active-color)}.elitea-assistant-header-close-action:disabled{background:var(--elitea-assistant-header-close-disabled-bg);color:var(--elitea-assistant-header-close-disabled-color);cursor:not-allowed}.elitea-assistant-header-action:hover{background:var(--elitea-assistant-header-action-hover-bg)}.elitea-assistant-header-action:active{background:var(--elitea-assistant-header-action-active-bg);color:var(--elitea-assistant-header-action-active-color);border-color:var(--elitea-assistant-header-action-active-border)}.elitea-assistant-header-action svg{width:1rem;height:1rem;fill:currentColor}.elitea-assistant-header-close-action svg{width:1.3rem;height:1.3rem;fill:currentColor}.elitea-assistant-history-wrapper{position:relative}.elitea-assistant-header-action:disabled{background:var(--elitea-assistant-header-action-disabled-bg);color:var(--elitea-assistant-header-action-disabled-color);cursor:not-allowed}.elitea-assistant-header-action:disabled:hover{background:var(--elitea-assistant-header-action-disabled-bg)}.elitea-assistant-history-dropdown{top:calc(100% + .55rem);right:-2.65rem;width:19.125rem;max-height:21.875rem;padding:.5rem 0}.elitea-assistant-history-dropdown-scroll{max-height:20.875rem;overflow-y:auto}.elitea-assistant-history-item{display:block;width:100%;padding:.5rem .75rem;border:none;background:none;cursor:pointer;text-align:left;color:var(--elitea-assistant-header-text);font-size:.875rem;font-weight:400;line-height:1.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:background .15s ease}.elitea-assistant-history-item:hover{background:var(--elitea-assistant-history-dropdown-hover-bg)}.elitea-assistant-history-item:disabled{opacity:.45;cursor:default;background:none}.elitea-assistant-messages{flex:1;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:.625rem}.elitea-assistant-message-wrapper{display:flex;flex-direction:column;max-width:80%}.elitea-assistant-message-wrapper--user{align-self:flex-end}.elitea-assistant-message-wrapper--assistant{align-self:flex-start}.elitea-assistant-message-meta{display:flex;align-items:center;gap:.375rem;margin-bottom:.375rem}.elitea-assistant-message-meta--assistant{justify-content:flex-start}.elitea-assistant-message-meta--user{justify-content:flex-end}.elitea-assistant-message-avatar{width:1.5rem;height:1.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.elitea-assistant-message-avatar--assistant{background:var(--elitea-assistant-button-bg);color:var(--elitea-assistant-button-icon)}.elitea-assistant-message-avatar--user{background:var(--elitea-assistant-user-avatar-bg);color:var(--elitea-assistant-user-avatar-icon)}.elitea-assistant-message-avatar svg{width:1.25rem;height:1.25rem;fill:currentColor}.elitea-assistant-message-avatar img{width:100%;height:100%;border-radius:50%;object-fit:cover}.elitea-assistant-message-time{font-size:.75rem;opacity:.6;color:var(--elitea-assistant-bot-msg-text)}.elitea-assistant-message{padding:.625rem .875rem;border-radius:.75rem;word-wrap:break-word;font-weight:400;font-style:Regular;font-size:.875rem;line-height:1.5rem;letter-spacing:0%}.elitea-assistant-message--user{white-space:pre-wrap;background:var(--elitea-assistant-user-msg-bg);color:var(--elitea-assistant-user-msg-text);border-radius:1rem 0rem 1rem 1rem}.elitea-assistant-message--assistant{background:var(--elitea-assistant-bot-msg-bg);color:var(--elitea-assistant-bot-msg-text);border-radius:0 1rem 1rem;position:relative;padding-bottom:1.5rem}.elitea-assistant-message--assistant>.elitea-assistant-tooltip-trigger{position:absolute;bottom:.375rem;right:.375rem;opacity:0;transition:opacity .15s ease}.elitea-assistant-message--assistant:hover>.elitea-assistant-tooltip-trigger{opacity:1}.elitea-assistant-message--error{border:1px solid #e53e3e;opacity:.9}@keyframes elitea-assistant-typing-bounce{0%,60%,to{transform:translateY(0);opacity:.25}30%{transform:translateY(-.25rem);opacity:.5}}.elitea-assistant-typing-indicator{display:inline-flex;align-items:center;gap:.1875rem;padding:.125rem 0}.elitea-assistant-typing-dot{width:.25rem;height:.25rem;border-radius:50%;background:var(--elitea-assistant-bot-msg-text);opacity:.25;animation:elitea-assistant-typing-bounce 1.2s ease-in-out infinite}.elitea-assistant-typing-dot:nth-child(2){animation-delay:.15s}.elitea-assistant-typing-dot:nth-child(3){animation-delay:.3s}@keyframes elitea-assistant-shimmer{0%{opacity:.4}50%{opacity:.7}to{opacity:.4}}.elitea-assistant-skeleton-row{display:flex;flex-direction:column;gap:.375rem;max-width:70%}.elitea-assistant-skeleton-row--left{align-self:flex-start}.elitea-assistant-skeleton-row--right{align-self:flex-end}.elitea-assistant-skeleton-meta{display:flex;align-items:center;gap:.375rem}.elitea-assistant-skeleton-row--right .elitea-assistant-skeleton-meta{justify-content:flex-end}.elitea-assistant-skeleton{background:var(--elitea-assistant-bot-msg-bg);border-radius:.5rem;animation:elitea-assistant-shimmer 1.4s ease-in-out infinite}.elitea-assistant-skeleton--avatar{width:1.5rem;height:1.5rem;border-radius:50%;flex-shrink:0}.elitea-assistant-skeleton--time{width:2.5rem;height:.75rem;border-radius:.25rem}.elitea-assistant-skeleton--bubble{width:10rem;height:2.5rem;border-radius:.75rem}.elitea-assistant-skeleton-row--right .elitea-assistant-skeleton--bubble{width:8rem}.elitea-assistant-empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--elitea-assistant-bot-msg-text);opacity:.5;font-size:.8125rem;text-align:center;padding:1.25rem}@keyframes elitea-assistant-wave{0%,to{opacity:1}50%{opacity:.3}}.elitea-assistant-status-message{margin-bottom:.375rem;font-weight:400;font-size:.875rem;line-height:1.25rem;color:var(--elitea-assistant-bot-msg-text);opacity:.7}.elitea-assistant-status-message-char{display:inline-block;animation:elitea-assistant-wave 2s ease-in-out infinite}.elitea-assistant-markdown{overflow-wrap:break-word}.elitea-assistant-markdown>:first-child{margin-top:0}.elitea-assistant-markdown>:last-child{margin-bottom:0}.elitea-assistant-markdown p{margin:.5em 0}.elitea-assistant-markdown h1,.elitea-assistant-markdown h2,.elitea-assistant-markdown h3,.elitea-assistant-markdown h4,.elitea-assistant-markdown h5,.elitea-assistant-markdown h6{margin:.75em 0 .375em;font-weight:600;line-height:1.3}.elitea-assistant-markdown h1{font-size:1.25em}.elitea-assistant-markdown h2{font-size:1.125em}.elitea-assistant-markdown h3{font-size:1em}.elitea-assistant-markdown ul,.elitea-assistant-markdown ol{margin:.5em 0;padding-left:1.5em}.elitea-assistant-markdown li{margin:.25em 0}.elitea-assistant-markdown li>ul,.elitea-assistant-markdown li>ol{margin:.125em 0}.elitea-assistant-markdown code{background:#0000000f;padding:.125em .3em;border-radius:.25em;font-size:.85em;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,monospace}.elitea-assistant-markdown pre{margin:.5em 0;padding:.625em .75em;background:#0000000f;border-radius:.375em;overflow-x:auto}.elitea-assistant-markdown pre code{background:none;padding:0;font-size:.8125em;white-space:pre}.elitea-assistant-markdown blockquote{margin:.5em 0;padding:.25em .75em;border-left:3px solid rgba(0,0,0,.15);opacity:.85}.elitea-assistant-markdown blockquote>:first-child{margin-top:0}.elitea-assistant-markdown blockquote>:last-child{margin-bottom:0}.elitea-assistant-markdown hr{border:none;border-top:1px solid rgba(0,0,0,.1);margin:.75em 0}.elitea-assistant-markdown table{border-collapse:collapse;margin:.5em 0;font-size:.85em;width:100%}.elitea-assistant-markdown th,.elitea-assistant-markdown td{border:1px solid rgba(0,0,0,.1);padding:.375em .625em;text-align:left}.elitea-assistant-markdown th{font-weight:600;background:#00000008}.elitea-assistant-markdown a{color:var(--elitea-assistant-button-bg);text-decoration:underline}.elitea-assistant-markdown strong{font-weight:600}.elitea-assistant-markdown img{max-width:100%;border-radius:.375em}.elitea-assistant-img-btn{display:inline-block;padding:0;margin:0;background:none;border:none;cursor:zoom-in;border-radius:.375em;transition:opacity .15s ease}.elitea-assistant-img-btn:hover{opacity:.88}.elitea-assistant-img-btn:focus-visible{outline:2px solid var(--elitea-assistant-button-bg, #6366f1);outline-offset:2px}.elitea-assistant-img-btn img{display:block}.elitea-assistant-lightbox-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483647;background:#000000d1;display:flex;align-items:center;justify-content:center;cursor:zoom-out;animation:elitea-lightbox-fade-in .15s ease}@keyframes elitea-lightbox-fade-in{0%{opacity:0}to{opacity:1}}.elitea-assistant-lightbox-img{max-width:90vw;max-height:90vh;border-radius:.5em;box-shadow:0 8px 40px #0009;cursor:default;object-fit:contain}.elitea-assistant-lightbox-close{position:fixed;top:1rem;right:1.25rem;background:#ffffff26;border:none;border-radius:50%;width:2rem;height:2rem;color:#fff;font-size:.875rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s ease}.elitea-assistant-lightbox-close:hover{background:#ffffff47}.elitea-assistant-lightbox-close:focus-visible{outline:2px solid #fff;outline-offset:2px}.elitea-assistant-input-area{display:flex;flex-direction:column;padding:.75rem;background:var(--elitea-assistant-input-bg);flex-shrink:0;border-top:.0625rem solid var(--elitea-assistant-window-border);position:relative}.elitea-assistant-input-area--drag-over>*:not(.elitea-assistant-drop-overlay){visibility:hidden}.elitea-assistant-drop-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;border:2px dashed var(--elitea-assistant-send-btn-bg);border-radius:0 0 1rem 1rem;color:var(--elitea-assistant-input-text);font-size:.875rem;z-index:10}.elitea-assistant-input-row{display:flex;align-items:center;gap:.5rem;width:100%}.elitea-assistant-input{flex:1;padding:.5rem .25rem;border:none;border-radius:0;background:transparent;color:var(--elitea-assistant-input-text);font-size:.875rem;font-family:inherit;outline:none;resize:none;overflow-y:auto;max-height:10rem}.elitea-assistant-input-area--resizable{cursor:ns-resize}.elitea-assistant-input-area--resizable:has(.elitea-assistant-resize-handle:hover),.elitea-assistant-input-area--resizing{border-top-width:.125rem}.elitea-assistant-resize-handle{position:absolute;top:0;left:0;right:0;height:.375rem;cursor:ns-resize;z-index:1}.elitea-assistant-input--expanded{max-height:16rem}.elitea-assistant-input::placeholder{color:var(--elitea-assistant-input-placeholder);opacity:1}.elitea-assistant-attach-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-header-action-bg);color:var(--elitea-assistant-header-text);flex-shrink:0;transition:opacity .15s ease;padding:0;opacity:.8}.elitea-assistant-attach-button:hover{opacity:1}.elitea-assistant-attach-button svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-send-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-send-btn-bg);color:var(--elitea-assistant-send-btn-icon);flex-shrink:0;transition:background .15s ease;padding:0}.elitea-assistant-send-button:disabled{background:var(--elitea-assistant-send-btn-disabled-bg);cursor:default}.elitea-assistant-send-button svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-stop-button{width:1.75rem;height:1.75rem;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--elitea-assistant-error-color, #ef4444);color:var(--elitea-assistant-send-btn-icon, #ffffff);flex-shrink:0;transition:background .15s ease;padding:0}.elitea-assistant-stop-button:hover{background:var(--elitea-assistant-error-hover, #dc2626)}.elitea-assistant-stop-button svg{width:1.125rem;height:1.125rem;fill:currentColor}.elitea-assistant-file-list{display:flex;align-items:center;gap:.5rem;padding-bottom:.5rem}.elitea-assistant-file-chip{display:flex;align-items:center;gap:.75rem;max-width:11.25rem;height:2.25rem;padding:.375rem .75rem;border-radius:.5rem;background:var(--elitea-assistant-header-action-bg);flex-shrink:0}.elitea-assistant-file-chip-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--elitea-assistant-header-close-icon)}.elitea-assistant-file-chip-icon svg{width:.75rem;height:.875rem}.elitea-assistant-file-chip-name{flex:1;min-width:0;font-size:.75rem;color:var(--elitea-assistant-input-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.elitea-assistant-file-chip-remove{display:flex;align-items:center;justify-content:center;width:1rem;height:1rem;padding:0;border:none;background:none;cursor:pointer;color:var(--elitea-assistant-header-close-icon);flex-shrink:0;opacity:.7;transition:opacity .15s ease}.elitea-assistant-file-chip-remove:hover{opacity:1}.elitea-assistant-file-chip-remove svg{width:2rem;height:2rem;fill:currentColor}.elitea-assistant-file-chip--count{font-size:.75rem;font-weight:400;color:var(--elitea-assistant-input-text);max-width:none;gap:0;border:none;cursor:pointer;transition:opacity .15s ease;opacity:.8}.elitea-assistant-file-chip--count:hover{opacity:1}.elitea-assistant-overflow-wrapper{position:relative}.elitea-assistant-dropdown{position:absolute;background:var(--elitea-assistant-chat-bg);border:.0625rem solid var(--elitea-assistant-history-dropdown-border);border-radius:.5rem;box-shadow:var(--elitea-assistant-history-dropdown-shadow);z-index:100;padding:.25rem 0}.elitea-assistant-overflow-dropdown{bottom:calc(100% + .375rem);right:0;min-width:13.75rem;max-width:18.75rem;max-height:25rem;overflow-y:auto}.elitea-assistant-overflow-item{display:flex;align-items:center;gap:.5rem;padding:.5rem .75rem;transition:background .15s ease}.elitea-assistant-overflow-item:hover{background:var(--elitea-assistant-history-dropdown-hover-bg)}.elitea-assistant-overflow-item-name{flex:1;min-width:0;font-size:.75rem;color:var(--elitea-assistant-input-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.elitea-assistant-file-chip--error{border:1px solid var(--elitea-assistant-error-color, #ef4444);background:var(--elitea-assistant-error-bg, rgba(239, 68, 68, .1))}.elitea-assistant-file-chip--completed .elitea-assistant-file-chip-icon{color:var(--elitea-assistant-success-color, #22c55e)}.elitea-assistant-file-chip-progress-text{width:1.5625rem;font-size:.625rem;color:var(--elitea-assistant-input-text);flex-shrink:0;text-align:right}.elitea-assistant-file-chip-error-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--elitea-assistant-error-color, #ef4444)}.elitea-assistant-file-chip-error-icon svg{width:.875rem;height:.875rem;fill:currentColor}.elitea-assistant-file-chip-icon .elitea-assistant-file-chip-spinner{width:1.25rem;height:1.25rem;flex-shrink:0;color:var(--elitea-assistant-send-btn-bg)}.elitea-assistant-file-chip-spinner-progress{transition:stroke-dashoffset .15s ease}.elitea-assistant-attach-button:disabled{opacity:.5;cursor:not-allowed}.elitea-assistant-tooltip-trigger{display:inline-flex}.elitea-assistant-tooltip{position:fixed;z-index:2147483647;padding:.25rem .5rem;border-radius:.25rem;background:#e9ebf0;color:#0e131d;font-size:.6875rem;line-height:1.3;font-weight:500;font-family:Montserrat,sans-serif;max-width:20rem;word-wrap:break-word;pointer-events:none;box-shadow:0 0 0 .0625rem #00000014,0 .125rem .5rem #0000001f;transition:opacity .15s ease}@keyframes elitea-tooltip-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-popup{position:absolute;bottom:.25rem;display:flex;align-items:center;gap:1rem;padding:.75rem .75rem .75rem 1.25rem;border-radius:1.5rem 1.5rem 1.5rem 0;background:var(--elitea-assistant-popup-bg);color:var(--elitea-assistant-popup-text);font-size:.875rem;font-weight:500;line-height:1.5rem;white-space:nowrap;box-shadow:0 .25rem 1rem #0003;animation:elitea-assistant-popup-in .3s ease-out}.elitea-assistant-popup:before{content:"";position:absolute;top:-.0625rem;right:-.0625rem;bottom:-.0625rem;left:-.0625rem;border-radius:inherit;padding:.0625rem;background:var(--elitea-assistant-popup-border);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none}.elitea-assistant-container--bottom-right .elitea-assistant-popup{right:2.5rem;flex-direction:row-reverse;padding:.75rem 1.25rem .75rem .75rem;border-radius:1.5rem 1.5rem 0}.elitea-assistant-container--bottom-left .elitea-assistant-popup{left:2.5rem}.elitea-assistant-popup-text{-webkit-user-select:none;user-select:none}.elitea-assistant-popup-close{display:flex;align-items:center;justify-content:center;width:1.75rem;height:1.75rem;flex-shrink:0;border:none;border-radius:50%;background:var(--elitea-assistant-popup-close-bg);color:var(--elitea-assistant-popup-text);cursor:pointer;padding:0;transition:background .15s ease}.elitea-assistant-popup-close:hover{background:var(--elitea-assistant-popup-close-hover-bg)}.elitea-assistant-popup-close svg{width:1rem;height:1rem;fill:currentColor}@keyframes elitea-assistant-popup-in{0%{opacity:0;transform:translateY(.5rem)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-toast{position:absolute;top:3.75rem;left:50%;transform:translate(-50%);z-index:20;display:flex;align-items:center;gap:.75rem;padding:.75rem .75rem .75rem 1rem;width:calc(100% - 2rem);border-radius:.5rem;background:orange;color:#fff;font-size:.875rem;font-weight:500;line-height:1.4;animation:elitea-assistant-toast-in .2s ease-out}.elitea-assistant-toast-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0}.elitea-assistant-toast-icon svg{width:1.25rem;height:1.25rem;fill:#fff}.elitea-assistant-toast-text{flex:1;-webkit-user-select:none;user-select:none}.elitea-assistant-toast-close{display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;flex-shrink:0;border:none;border-radius:50%;background:transparent;color:#fff;cursor:pointer;padding:0;opacity:.85;transition:opacity .15s ease}.elitea-assistant-toast-close:hover{opacity:1}.elitea-assistant-toast-close svg{width:1rem;height:1rem;fill:currentColor}@keyframes elitea-assistant-toast-in{0%{opacity:0;transform:translate(-50%) translateY(-.5rem)}to{opacity:1;transform:translate(-50%) translateY(0)}}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { jsx as S, jsxs as me, Fragment as $n } from "react/jsx-runtime";
import { memo as oe, useState as fe, useCallback as q, useRef as Te, useLayoutEffect as As, useEffect as He, useMemo as gt, createContext as gn, useContext as yn, forwardRef as _s, useImperativeHandle as Is } from "react";
import { createPortal as oa } from "react-dom";
import { io as vs } from "socket.io-client";
const tn = (e, t = !1) => ({
  ...e.token && { Authorization: `Bearer ${e.token}` },
  ...t && { "Content-Type": "application/json" }
}), nn = (e) => e.withCredentials ? "include" : void 0, rn = async (e) => {
  if (!e.ok) throw new Error(`${e.status} ${e.statusText}`);
  return e;
}, Ls = (e, t = {}) => ({
  getConfig: () => fetch(`${e}/config/`, {
    headers: tn(t),
    credentials: nn(t)
  }).then(rn).then((n) => n.json()),
  getConversations: () => fetch(`${e}/conversations/`, {
    headers: tn(t),
    credentials: nn(t)
  }).then(rn).then((n) => n.json()),
  getConversation: (n) => fetch(`${e}/conversation/${n}`, {
    headers: tn(t),
    credentials: nn(t)
  }).then(rn).then((r) => r.json()),
  createConversation: () => fetch(`${e}/conversations/`, {
    method: "POST",
    headers: tn(t, !0),
    credentials: nn(t),
    body: JSON.stringify({})
  }).then(rn).then((n) => n.json()),
  deleteConversation: (n) => fetch(`${e}/conversation/${n}`, {
    method: "DELETE",
    headers: tn(t),
    credentials: nn(t)
  }).then(rn).then(() => {
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
}), Yr = oe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M14.2499 4.375C14.8319 4.375 15.3037 4.84137 15.3037 5.41666C15.3037 5.87017 15.0104 6.25575 14.6012 6.39877V8.26399H14.9524C15.5109 8.26399 15.9675 8.69328 16.0037 9.23621H18.2544C20.5477 9.23621 22.4397 10.9331 22.7159 13.1259C23.2816 13.1443 23.7344 13.6031 23.7344 14.1667V15.6945C23.7343 16.2697 23.2625 16.7362 22.6805 16.7362C22.6637 16.7362 22.6469 16.7356 22.6302 16.7348C22.2147 18.5198 20.7287 19.6036 18.2544 20.0695C15.3037 20.625 9.26175 21.875 9.26175 21.875L10.1048 20.0695C8.0024 20.0695 6.23719 18.643 5.74513 16.7159C5.67822 16.7291 5.60903 16.7362 5.53821 16.7362C4.95623 16.7362 4.48444 16.2697 4.48438 15.6945V14.1667C4.48438 13.5914 4.95619 13.1251 5.53821 13.1251C5.57345 13.1251 5.60828 13.1267 5.64263 13.1301C5.91693 10.9353 7.81012 9.23621 10.1048 9.23621H12.3556C12.3917 8.69328 12.8484 8.26399 13.4068 8.26399H13.7581V6.33788C13.4239 6.1632 13.1961 5.81633 13.1961 5.41666C13.1961 4.84137 13.6679 4.375 14.2499 4.375ZM11.2289 11.3195C9.44405 11.3195 7.99715 12.7497 7.99715 14.5139V14.6528C7.99721 16.417 9.44409 17.8473 11.2289 17.8473H17.1304C18.9152 17.8473 20.362 16.417 20.3621 14.6528V14.5139C20.3621 12.7497 18.9152 11.3195 17.1304 11.3195H11.2289ZM11.4397 13.5416C12.0217 13.5416 12.4935 14.008 12.4935 14.5833C12.4935 15.1585 12.0217 15.6249 11.4397 15.6249C10.8577 15.6249 10.3858 15.1585 10.3858 14.5833C10.3858 14.008 10.8577 13.5416 11.4397 13.5416ZM16.9196 13.5416C17.5016 13.5416 17.9734 14.008 17.9734 14.5833C17.9734 15.1585 17.5016 15.6249 16.9196 15.6249C16.3376 15.6249 15.8658 15.1585 15.8658 14.5833C15.8658 14.008 16.3376 13.5416 16.9196 13.5416Z" })
  }
));
Yr.displayName = "AssistantIcon";
const aa = oe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 12 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M11.5876 6.6172C11.6361 6.66719 11.6746 6.72656 11.7008 6.7919C11.7271 6.85725 11.7406 6.9273 11.7406 6.99804C11.7406 7.06878 11.7271 7.13883 11.7008 7.20417C11.6746 7.26952 11.6361 7.32889 11.5876 7.37888L6.23589 12.8964C5.55078 13.6031 4.6216 14.0001 3.65277 14C2.68393 13.9999 1.7548 13.6028 1.06978 12.8961C0.384749 12.1893 -6.11425e-05 11.2307 7.28683e-09 10.2313C6.11571e-05 9.2318 0.384988 8.2733 1.0701 7.56661L7.5443 0.789483C8.03342 0.284364 8.69701 0.000378941 9.3891 3.78958e-07C10.0812 -0.000378183 10.7451 0.282881 11.2347 0.787465C11.7243 1.29205 11.9996 1.97662 12 2.69059C12.0004 3.40456 11.7258 4.08943 11.2367 4.59455L4.76116 11.3717C4.46709 11.6751 4.06823 11.8455 3.65235 11.8455C3.23646 11.8455 2.8376 11.6751 2.54353 11.3717C2.24945 11.0683 2.08424 10.6568 2.08424 10.2278C2.08424 9.79877 2.24945 9.38731 2.54353 9.08393L7.97674 3.39012C8.02433 3.33774 8.0816 3.29571 8.14518 3.26651C8.20875 3.23731 8.27735 3.22152 8.34693 3.22008C8.4165 3.21863 8.48566 3.23156 8.55032 3.2581C8.61498 3.28464 8.67385 3.32425 8.72345 3.37461C8.77305 3.42497 8.81238 3.48506 8.83913 3.55133C8.86588 3.61761 8.87951 3.68874 8.87922 3.76053C8.87893 3.83232 8.86472 3.90333 8.83742 3.96937C8.81013 4.03541 8.77031 4.09515 8.7203 4.14508L3.28643 9.84494C3.23778 9.89474 3.19911 9.95393 3.17264 10.0191C3.14616 10.0843 3.13239 10.1543 3.13212 10.225C3.13185 10.2957 3.14507 10.3658 3.17105 10.4312C3.19702 10.4966 3.23523 10.5561 3.2835 10.6063C3.33177 10.6565 3.38914 10.6964 3.45235 10.7237C3.51556 10.751 3.58337 10.7652 3.6519 10.7655C3.72043 10.7658 3.78835 10.7521 3.85176 10.7253C3.91518 10.6985 3.97287 10.6591 4.02152 10.6093L10.4964 3.83556C10.7904 3.53281 10.9559 3.12194 10.9563 2.69335C10.9568 2.26475 10.7921 1.85354 10.4987 1.55016C10.2052 1.24679 9.80691 1.0761 9.39145 1.07566C8.97599 1.07522 8.57737 1.24506 8.2833 1.54781L1.8104 8.32224C1.56791 8.572 1.37549 8.86858 1.24411 9.19506C1.11273 9.52153 1.04496 9.8715 1.04469 10.225C1.04442 10.5785 1.11164 10.9286 1.24252 11.2553C1.37339 11.5819 1.56536 11.8788 1.80747 12.129C2.04957 12.3792 2.33706 12.5777 2.65353 12.7132C2.97 12.8487 3.30924 12.9186 3.6519 12.9189C3.99456 12.9192 4.33391 12.8498 4.65059 12.7148C4.96727 12.5798 5.25506 12.3818 5.49755 12.132L10.8499 6.6145C10.9481 6.51399 11.0809 6.45781 11.2193 6.45831C11.3576 6.45881 11.4901 6.51596 11.5876 6.6172Z" })
  }
));
aa.displayName = "AttachmentIcon";
const Rs = oe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.2L4 17.2V4H20V16Z" })
  }
));
Rs.displayName = "ChatIcon";
const Xr = oe(() => /* @__PURE__ */ S(
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
const Kt = oe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" })
  }
));
Kt.displayName = "CloseIcon";
const la = oe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M11.8402 0.15976C11.7379 0.0574675 11.5992 0 11.4545 0C11.3099 0 11.1711 0.0574675 11.0689 0.15976L7.63636 3.59205V1.63636C7.63636 1.4917 7.57889 1.35296 7.4766 1.25067C7.3743 1.14837 7.23557 1.09091 7.09091 1.09091C6.94624 1.09091 6.80751 1.14837 6.70521 1.25067C6.60292 1.35296 6.54545 1.4917 6.54545 1.63636V4.90909C6.54545 5.05375 6.60292 5.19249 6.70521 5.29479C6.80751 5.39708 6.94624 5.45455 7.09091 5.45455H10.3636C10.5083 5.45455 10.647 5.39708 10.7493 5.29479C10.8516 5.19249 10.9091 5.05375 10.9091 4.90909C10.9091 4.76443 10.8516 4.62569 10.7493 4.5234C10.647 4.4211 10.5083 4.36364 10.3636 4.36364H8.40795L11.8402 0.931149C11.9425 0.828856 12 0.690118 12 0.545455C12 0.400791 11.9425 0.262053 11.8402 0.15976ZM4.90909 6.54545H1.63636C1.4917 6.54545 1.35296 6.60292 1.25067 6.70521C1.14837 6.80751 1.09091 6.94624 1.09091 7.09091C1.09091 7.23557 1.14837 7.3743 1.25067 7.4766C1.35296 7.57889 1.4917 7.63636 1.63636 7.63636H3.59205L0.15976 11.0689C0.0574675 11.1711 0 11.3099 0 11.4545C0 11.5992 0.0574675 11.7379 0.15976 11.8402C0.262053 11.9425 0.400791 12 0.545455 12C0.690118 12 0.828856 11.9425 0.931149 11.8402L4.36364 8.40795V10.3636C4.36364 10.5083 4.4211 10.647 4.5234 10.7493C4.62569 10.8516 4.76443 10.9091 4.90909 10.9091C5.05375 10.9091 5.19249 10.8516 5.29479 10.7493C5.39708 10.647 5.45455 10.5083 5.45455 10.3636V7.09091C5.45455 6.94624 5.39708 6.80751 5.29479 6.70521C5.19249 6.60292 5.05375 6.54545 4.90909 6.54545Z" })
  }
));
la.displayName = "CollapseIcon";
const sa = oe(() => /* @__PURE__ */ S(
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
sa.displayName = "CopyIcon";
const Ds = oe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" })
  }
));
Ds.displayName = "ErrorIcon";
const ua = oe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M12 0.545455V3.81818C12 3.96285 11.9425 4.10158 11.8402 4.20388C11.7379 4.30617 11.5992 4.36364 11.4545 4.36364C11.3099 4.36364 11.1711 4.30617 11.0689 4.20388C10.9666 4.10158 10.9091 3.96285 10.9091 3.81818V1.86205L7.47682 5.295C7.37447 5.39735 7.23565 5.45485 7.09091 5.45485C6.94617 5.45485 6.80735 5.39735 6.705 5.295C6.60265 5.19265 6.54515 5.05383 6.54515 4.90909C6.54515 4.76435 6.60265 4.62553 6.705 4.52318L10.138 1.09091H8.18182C8.03715 1.09091 7.89842 1.03344 7.79612 0.931149C7.69383 0.828856 7.63636 0.690118 7.63636 0.545455C7.63636 0.400791 7.69383 0.262053 7.79612 0.15976C7.89842 0.0574675 8.03715 0 8.18182 0H11.4545C11.5992 0 11.7379 0.0574675 11.8402 0.15976C11.9425 0.262053 12 0.400791 12 0.545455ZM4.52318 6.705L1.09091 10.138V8.18182C1.09091 8.03715 1.03344 7.89842 0.931149 7.79612C0.828856 7.69383 0.690118 7.63636 0.545455 7.63636C0.400791 7.63636 0.262053 7.69383 0.15976 7.79612C0.0574675 7.89842 0 8.03715 0 8.18182V11.4545C0 11.5992 0.0574675 11.7379 0.15976 11.8402C0.262053 11.9425 0.400791 12 0.545455 12H3.81818C3.96285 12 4.10158 11.9425 4.20388 11.8402C4.30617 11.7379 4.36364 11.5992 4.36364 11.4545C4.36364 11.3099 4.30617 11.1711 4.20388 11.0689C4.10158 10.9666 3.96285 10.9091 3.81818 10.9091H1.86205L5.295 7.47682C5.39735 7.37447 5.45485 7.23565 5.45485 7.09091C5.45485 6.94617 5.39735 6.80735 5.295 6.705C5.19265 6.60265 5.05383 6.54515 4.90909 6.54515C4.76435 6.54515 4.62553 6.60265 4.52318 6.705Z" })
  }
));
ua.displayName = "ExpandIcon";
const ca = oe(() => /* @__PURE__ */ S(
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
ca.displayName = "FileIcon";
const fa = oe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M7.84245 3.50002V6.6697L10.3716 8.2498C10.499 8.32948 10.5908 8.45859 10.6268 8.60874C10.6628 8.75888 10.64 8.91776 10.5635 9.05042C10.487 9.18309 10.363 9.27867 10.2188 9.31614C10.0746 9.3536 9.92206 9.32989 9.79466 9.25022L6.99378 7.50022C6.91089 7.44836 6.8423 7.37503 6.79469 7.28737C6.74708 7.19972 6.72207 7.10072 6.7221 7.00001V3.50002C6.7221 3.34531 6.78112 3.19693 6.88617 3.08754C6.99122 2.97814 7.13371 2.91668 7.28227 2.91668C7.43084 2.91668 7.57333 2.97814 7.67838 3.08754C7.78343 3.19693 7.84245 3.34531 7.84245 3.50002ZM7.28227 2.15915e-05C6.39859 -0.00227058 5.52325 0.177963 4.70691 0.530291C3.89056 0.882618 3.14943 1.40004 2.52639 2.05262C2.01733 2.58929 1.56499 3.10554 1.12035 3.64585V2.33335C1.12035 2.17864 1.06133 2.03027 0.956278 1.92087C0.851225 1.81148 0.708743 1.75002 0.560175 1.75002C0.411607 1.75002 0.269125 1.81148 0.164071 1.92087C0.0590182 2.03027 0 2.17864 0 2.33335V5.25001C0 5.40472 0.0590182 5.5531 0.164071 5.66249C0.269125 5.77189 0.411607 5.83335 0.560175 5.83335H3.36105C3.50962 5.83335 3.6521 5.77189 3.75715 5.66249C3.86221 5.5531 3.92122 5.40472 3.92122 5.25001C3.92122 5.0953 3.86221 4.94693 3.75715 4.83754C3.6521 4.72814 3.50962 4.66668 3.36105 4.66668H1.75055C2.2512 4.05272 2.74976 3.4745 3.31834 2.87512C4.09688 2.0644 5.08758 1.51057 6.16666 1.28283C7.24574 1.05509 8.36535 1.16353 9.38558 1.59462C10.4058 2.02571 11.2814 2.76032 11.903 3.70667C12.5246 4.65301 12.8646 5.76912 12.8805 6.91554C12.8965 8.06195 12.5876 9.18784 11.9926 10.1525C11.3975 11.1172 10.5427 11.8779 9.53484 12.3395C8.52702 12.8011 7.41089 12.9433 6.32594 12.7481C5.24098 12.553 4.23531 12.0292 3.43457 11.2423C3.38106 11.1896 3.3181 11.1485 3.2493 11.1211C3.18051 11.0938 3.10721 11.0808 3.03361 11.083C2.96 11.0852 2.88753 11.1024 2.82033 11.1338C2.75312 11.1651 2.6925 11.2099 2.64193 11.2656C2.59135 11.3214 2.55181 11.3869 2.52557 11.4586C2.49932 11.5302 2.48689 11.6065 2.48897 11.6832C2.49105 11.7598 2.5076 11.8353 2.53769 11.9053C2.56778 11.9753 2.61081 12.0384 2.66433 12.091C3.4622 12.8751 4.43221 13.4439 5.48972 13.7478C6.54722 14.0517 7.66008 14.0814 8.73117 13.8345C9.80226 13.5875 10.799 13.0713 11.6345 12.3309C12.4699 11.5905 13.1187 10.6485 13.5241 9.58695C13.9295 8.52544 14.0793 7.37674 13.9604 6.24108C13.8414 5.10543 13.4574 4.01735 12.8418 3.0718C12.2261 2.12625 11.3976 1.35197 10.4286 0.816529C9.4595 0.281089 8.37931 0.000765142 7.28227 2.15915e-05Z" })
  }
));
fa.displayName = "HistoryIcon";
const pa = oe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M14 7C14 7.15471 13.9385 7.30308 13.8291 7.41248C13.7197 7.52188 13.5714 7.58333 13.4167 7.58333H7.58333V13.4167C7.58333 13.5714 7.52188 13.7197 7.41248 13.8291C7.30308 13.9385 7.15471 14 7 14C6.84529 14 6.69692 13.9385 6.58752 13.8291C6.47812 13.7197 6.41667 13.5714 6.41667 13.4167V7.58333H0.583333C0.428624 7.58333 0.280251 7.52188 0.170854 7.41248C0.0614583 7.30308 0 7.15471 0 7C0 6.84529 0.0614583 6.69692 0.170854 6.58752C0.280251 6.47812 0.428624 6.41667 0.583333 6.41667H6.41667V0.583333C6.41667 0.428624 6.47812 0.280251 6.58752 0.170854C6.69692 0.0614583 6.84529 0 7 0C7.15471 0 7.30308 0.0614583 7.41248 0.170854C7.52188 0.280251 7.58333 0.428624 7.58333 0.583333V6.41667H13.4167C13.5714 6.41667 13.7197 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7Z" })
  }
));
pa.displayName = "PlusIcon";
const ha = oe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 13 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M13 6.99208C13.0005 7.17027 12.9514 7.34536 12.8579 7.49921C12.7644 7.65307 12.6299 7.78012 12.4682 7.86721L1.55229 13.8687C1.39545 13.9542 1.21835 13.9995 1.03805 14C0.871785 13.9997 0.708022 13.961 0.56049 13.8873C0.412958 13.8136 0.285957 13.7069 0.190131 13.5763C0.0943049 13.4456 0.0324474 13.2948 0.00974343 13.1364C-0.0129605 12.9781 0.00415071 12.8168 0.0596426 12.6661L1.83768 7.66843C1.8552 7.61898 1.88839 7.57606 1.93258 7.54567C1.97677 7.51529 2.02975 7.49898 2.08407 7.49903H6.75898C6.83028 7.49918 6.90085 7.48523 6.9663 7.45806C7.03176 7.43088 7.0907 7.39105 7.13948 7.34105C7.18825 7.29104 7.22581 7.23193 7.24982 7.16738C7.27384 7.10283 7.28379 7.03423 7.27907 6.96582C7.26727 6.83723 7.20539 6.71767 7.10582 6.63108C7.00624 6.5445 6.87632 6.49728 6.74208 6.49888H2.08862C2.03438 6.49897 1.98146 6.48275 1.93728 6.45249C1.89309 6.42222 1.85986 6.37943 1.84223 6.3301L0.0583424 1.32936C-0.0111263 1.13773 -0.018329 0.930327 0.0376911 0.734676C0.0937111 0.539025 0.210303 0.364388 0.371984 0.233956C0.533666 0.103523 0.732787 0.0234668 0.942905 0.00441721C1.15302 -0.0146324 1.3642 0.0282263 1.54838 0.127302L12.4702 6.12132C12.6308 6.20829 12.7645 6.33476 12.8576 6.48776C12.9507 6.64076 12.9999 6.81481 13 6.99208Z" })
  }
));
ha.displayName = "SendIcon";
const da = oe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S(
      "rect",
      {
        x: "5",
        y: "5",
        width: "10",
        height: "10",
        rx: "1",
        fill: "currentColor"
      }
    )
  }
));
da.displayName = "StopIcon";
const ma = oe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" })
  }
));
ma.displayName = "UserIcon";
const ga = oe(() => /* @__PURE__ */ S(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S("path", { d: "M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" })
  }
));
ga.displayName = "WarningIcon";
const ya = oe((e) => {
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
ya.displayName = "ChatButton";
const ba = oe((e) => {
  const { text: t } = e, [n, r] = fe(!1), i = q(() => {
    navigator.clipboard.writeText(t), r(!0), setTimeout(() => r(!1), 2e3);
  }, [t]);
  return /* @__PURE__ */ S(Wt, { content: "Copy to clipboard", children: /* @__PURE__ */ S(
    "button",
    {
      className: "elitea-assistant-header-action",
      onClick: i,
      "aria-label": "Copy to clipboard",
      type: "button",
      children: n ? /* @__PURE__ */ S(Xr, {}) : /* @__PURE__ */ S(sa, {})
    }
  ) });
});
ba.displayName = "CopyButton";
const xa = oe((e) => {
  const { message: t, onDismiss: n } = e;
  return /* @__PURE__ */ me(
    "div",
    {
      className: "elitea-assistant-toast",
      role: "alert",
      children: [
        /* @__PURE__ */ S("span", { className: "elitea-assistant-toast-icon", children: /* @__PURE__ */ S(ga, {}) }),
        /* @__PURE__ */ S("span", { className: "elitea-assistant-toast-text", children: t }),
        /* @__PURE__ */ S(
          "button",
          {
            className: "elitea-assistant-toast-close",
            onClick: n,
            "aria-label": "Dismiss",
            type: "button",
            children: /* @__PURE__ */ S(Kt, {})
          }
        )
      ]
    }
  );
});
xa.displayName = "Toast";
const Wt = oe((e) => {
  const { content: t, children: n, placement: r = "top" } = e, i = Te(null), o = Te(null), [a, l] = fe(!1), [s, u] = fe(!1), [f, c] = fe({ top: 0, left: 0 }), h = q(() => {
    const p = i.current, m = o.current;
    if (!p || !m) return;
    const b = p.getBoundingClientRect(), w = m.getBoundingClientRect();
    let x;
    r === "top" ? x = b.top - w.height - 8 : x = b.bottom + 8;
    let _ = b.left + b.width / 2 - w.width / 2;
    const A = 8;
    _ < A && (_ = A), _ + w.width > window.innerWidth - A && (_ = window.innerWidth - A - w.width), x < A && (x = b.bottom + 8), c({ top: x, left: _ }), u(!0);
  }, [r]);
  return As(() => {
    a && o.current && h(), a || u(!1);
  }, [a, h]), /* @__PURE__ */ me($n, { children: [
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
    a && oa(
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
Wt.displayName = "Tooltip";
const ka = oe((e) => {
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
  } = e, f = Te(null), [c, h] = fe(!1);
  He(() => {
    if (!c) return;
    const b = (w) => {
      f.current && !f.current.contains(w.target) && h(!1);
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
          children: /* @__PURE__ */ S(Kt, {})
        }
      ),
      /* @__PURE__ */ S("h2", { className: "elitea-assistant-header-title", children: t })
    ] }),
    /* @__PURE__ */ me("div", { className: "elitea-assistant-header-right", children: [
      /* @__PURE__ */ S(Wt, { content: "New conversation", children: /* @__PURE__ */ S(
        "button",
        {
          className: "elitea-assistant-header-action",
          onClick: s,
          "aria-label": "New chat",
          type: "button",
          disabled: o,
          children: /* @__PURE__ */ S(pa, {})
        }
      ) }),
      /* @__PURE__ */ S(Wt, { content: "Conversations history", children: /* @__PURE__ */ me(
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
                children: /* @__PURE__ */ S(fa, {})
              }
            ),
            c && r.length > 0 && /* @__PURE__ */ S("div", { className: "elitea-assistant-dropdown elitea-assistant-history-dropdown", children: /* @__PURE__ */ S("div", { className: "elitea-assistant-history-dropdown-scroll", children: r.map((b) => /* @__PURE__ */ S(
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
      /* @__PURE__ */ S(Wt, { content: n ? "Collapse" : "Expand", children: /* @__PURE__ */ S(
        "button",
        {
          className: "elitea-assistant-header-action",
          onClick: l,
          "aria-label": "Expand chat",
          type: "button",
          children: n ? /* @__PURE__ */ S(la, {}) : /* @__PURE__ */ S(ua, {})
        }
      ) })
    ] })
  ] });
});
ka.displayName = "ChatHeader";
const wa = oe((e) => {
  const { avatar: t, messages: n, isLoading: r, onAnimationComplete: i } = e, o = Te(null), a = Te(null), l = Te(!1);
  return He(() => {
    var b;
    const s = a.current;
    if (n.length === 0) {
      l.current = !1;
      return;
    }
    const u = l.current ? "smooth" : "instant";
    if (l.current = !0, (b = o.current) == null || b.scrollIntoView({ behavior: u }), !n.some((w) => w.isStreaming || w.isAnimating) || !s) return;
    let c = null;
    const h = (w = !1) => {
      c === null && (c = requestAnimationFrame(() => {
        (w || s.scrollHeight - s.scrollTop - s.clientHeight < 150) && (s.scrollTop = s.scrollHeight), c = null;
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
  }, [n]), r ? /* @__PURE__ */ S(el, {}) : n.length === 0 ? /* @__PURE__ */ S("div", { className: "elitea-assistant-empty", children: "Send a message to start a conversation" }) : /* @__PURE__ */ me(
    "div",
    {
      className: "elitea-assistant-messages",
      ref: a,
      children: [
        n.map((s) => /* @__PURE__ */ S(
          Ja,
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
wa.displayName = "MessageList";
var xe = /* @__PURE__ */ ((e) => (e.PENDING = "pending", e.UPLOADING = "uploading", e.COMPLETED = "completed", e.ERROR = "error", e))(xe || {});
const Pn = 150 * 1024 * 1024, Pi = 3 * 1024 * 1024, Oi = 150 * 1024 * 1024, ot = 10, Mi = 10, lr = 5 * 1024 * 1024, Ca = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg"]), Ns = /* @__PURE__ */ new Set([
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
]), Ps = /* @__PURE__ */ new Set([
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
]), Sa = /* @__PURE__ */ new Set([...Ca, ...Ns, ...Ps]), Os = [...Sa].map((e) => `.${e}`).join(","), Rr = 7, sr = 2 * Math.PI * Rr, Ea = oe((e) => {
  const { status: t, progress: n = 0 } = e;
  if (t === xe.UPLOADING) {
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
              r: Rr,
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
              r: Rr,
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
  return t === xe.COMPLETED ? /* @__PURE__ */ S(Xr, {}) : /* @__PURE__ */ S(ca, {});
});
Ea.displayName = "AttachmentIcon";
const Ta = oe((e) => {
  const { status: t, progress: n } = e;
  return t === xe.UPLOADING ? /* @__PURE__ */ me("span", { className: "elitea-assistant-file-chip-progress-text", children: [
    n,
    "%"
  ] }) : null;
});
Ta.displayName = "AttachmentProgress";
const Aa = oe((e) => {
  const { attachment: t, onRemove: n } = e, r = (i) => {
    const o = "elitea-assistant-file-chip";
    return {
      uploading: `${o} ${o}--uploading`,
      error: `${o} ${o}--error`,
      completed: `${o} ${o}--completed`,
      pending: o
    }[i] || o;
  };
  return /* @__PURE__ */ S(Wt, { content: t.error ?? t.name, children: /* @__PURE__ */ me("div", { className: r(t.status), children: [
    /* @__PURE__ */ S("span", { className: "elitea-assistant-file-chip-icon", children: /* @__PURE__ */ S(
      Ea,
      {
        status: t.status,
        progress: t.progress
      }
    ) }),
    /* @__PURE__ */ S("span", { className: "elitea-assistant-file-chip-name", children: t.name }),
    /* @__PURE__ */ S(
      Ta,
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
        disabled: t.status === xe.UPLOADING,
        children: /* @__PURE__ */ S(Kt, {})
      }
    )
  ] }) });
});
Aa.displayName = "AttachmentChip";
const _a = oe((e) => {
  const {
    placeholder: t,
    text: n,
    onTextChange: r,
    attachments: i,
    onAddFiles: o,
    onRemoveAttachment: a,
    onSend: l,
    onStop: s,
    expanded: u,
    disabled: f,
    isUploading: c,
    isStreaming: h
  } = e, p = Te(null), m = Te(null), b = Te(null), w = Te(null), [x, _] = fe(0), [A, P] = fe(!1), [O, E] = fe(!1), [G, X] = fe(!1), K = Te(0), C = q(() => {
    const M = m.current;
    if (!M || w.current !== null) return;
    const he = u ? 256 : 160;
    M.style.height = "auto", M.style.maxHeight = `${he}px`, M.style.height = `${Math.min(M.scrollHeight, he)}px`;
  }, [u]);
  He(() => {
    C();
  }, [n, C]);
  const z = q(
    (M) => {
      if (!m.current) return;
      M.preventDefault();
      const he = M.clientY, I = m.current.getBoundingClientRect().height;
      X(!0);
      const U = (j) => {
        if (!m.current) return;
        const W = he - j.clientY, Z = Math.min(u ? 240 : 180, Math.max(48, I + W));
        w.current = Z, m.current.style.height = `${Z}px`, m.current.style.maxHeight = `${Z}px`;
      }, N = () => {
        X(!1), document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", N);
      };
      document.addEventListener("mousemove", U), document.addEventListener("mouseup", N);
    },
    [u]
  );
  He(() => {
    if (!O) return;
    const M = (he) => {
      b.current && !b.current.contains(he.target) && E(!1);
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, [O]);
  const { visibleAttachments: F, hiddenAttachments: J, remainingAttachmentsCount: re } = gt(() => {
    const M = u ? 3 : 2;
    return {
      visibleAttachments: i.slice(0, M),
      hiddenAttachments: i.slice(M),
      remainingAttachmentsCount: i.length - M
    };
  }, [i, u]), $ = gt(
    () => i != null && i.length ? i.every((M) => M.status === xe.PENDING || M.status === xe.COMPLETED) : !0,
    [i]
  ), ce = gt(
    () => i.filter((M) => M.status !== xe.ERROR).length >= ot,
    [i]
  ), pe = gt(
    () => !!(f || c || ce),
    [f, c, ce]
  ), ke = gt(
    () => !!(f || c || !$ || !n.trim()),
    [f, c, n, $]
  ), ve = q(() => {
    E((M) => !M);
  }, []), g = () => {
    const M = n.trim(), he = i.filter((I) => I.status === xe.COMPLETED && I.filepath);
    !M && he.length === 0 || c || (l(M), r(""));
  }, ee = (M) => {
    M.key === "Enter" && !M.shiftKey && !M.ctrlKey && !M.metaKey && (M.preventDefault(), g());
  }, De = () => {
    var M;
    (M = p.current) == null || M.click();
  }, y = (M) => {
    const he = M.target.files;
    he && o(Array.from(he)), _((I) => I + 1);
  }, Se = (M) => {
    M.preventDefault(), K.current += 1, M.dataTransfer.types.includes("Files") && P(!0);
  }, We = (M) => {
    M.preventDefault(), K.current -= 1, K.current === 0 && P(!1);
  }, ge = (M) => {
    M.preventDefault();
  }, Je = (M) => {
    M.preventDefault(), K.current = 0, P(!1);
    const he = Array.from(M.dataTransfer.files);
    he.length > 0 && o(he);
  }, $e = (M) => {
    const he = Array.from(M.clipboardData.items).filter((I) => I.kind === "file").map((I) => I.getAsFile()).filter((I) => I !== null).map((I) => {
      if (!/^image\.\w+$/.test(I.name)) return I;
      const N = I.name.split(".").pop() || "png", j = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
      return new File([I], `screenshot-${j}.${N}`, { type: I.type });
    });
    he.length !== 0 && (M.preventDefault(), o(he));
  };
  return /* @__PURE__ */ me(
    "div",
    {
      className: [
        "elitea-assistant-input-area",
        A ? "elitea-assistant-input-area--drag-over" : "",
        "elitea-assistant-input-area--resizable",
        G ? "elitea-assistant-input-area--resizing" : ""
      ].filter(Boolean).join(" "),
      onDragEnter: Se,
      onDragLeave: We,
      onDragOver: ge,
      onDrop: Je,
      children: [
        A && /* @__PURE__ */ S("div", { className: "elitea-assistant-drop-overlay", children: "Drop files here" }),
        /* @__PURE__ */ S(
          "div",
          {
            className: "elitea-assistant-resize-handle",
            onMouseDown: z,
            "aria-hidden": "true"
          }
        ),
        i.length > 0 && /* @__PURE__ */ me("div", { className: "elitea-assistant-file-list", children: [
          F.map((M) => /* @__PURE__ */ S(
            Aa,
            {
              attachment: M,
              onRemove: a
            },
            M.id
          )),
          re > 0 && /* @__PURE__ */ me(
            "div",
            {
              ref: b,
              className: "elitea-assistant-overflow-wrapper",
              children: [
                /* @__PURE__ */ me(
                  "button",
                  {
                    className: "elitea-assistant-file-chip elitea-assistant-file-chip--count",
                    onClick: ve,
                    "aria-label": `Show ${re} more files`,
                    "aria-haspopup": "true",
                    "aria-expanded": O,
                    type: "button",
                    children: [
                      "+",
                      re
                    ]
                  }
                ),
                O && /* @__PURE__ */ S(
                  "div",
                  {
                    className: "elitea-assistant-dropdown elitea-assistant-overflow-dropdown",
                    role: "menu",
                    children: J.map((M) => /* @__PURE__ */ me(
                      "div",
                      {
                        className: "elitea-assistant-overflow-item",
                        role: "menuitem",
                        children: [
                          /* @__PURE__ */ S("span", { className: "elitea-assistant-overflow-item-name", children: M.name }),
                          /* @__PURE__ */ S(
                            "button",
                            {
                              className: "elitea-assistant-file-chip-remove",
                              onClick: () => {
                                J.length === 1 && E(!1), a(M.id);
                              },
                              "aria-label": `Remove ${M.name}`,
                              type: "button",
                              disabled: M.status === xe.UPLOADING,
                              children: /* @__PURE__ */ S(Kt, {})
                            }
                          )
                        ]
                      },
                      M.id
                    ))
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ me("div", { className: "elitea-assistant-input-row", children: [
          /* @__PURE__ */ S(
            "input",
            {
              ref: p,
              type: "file",
              multiple: !0,
              accept: Os,
              onChange: y,
              style: { display: "none" }
            },
            x
          ),
          /* @__PURE__ */ S(
            "button",
            {
              className: "elitea-assistant-attach-button",
              onClick: De,
              "aria-label": "Attach file",
              type: "button",
              disabled: pe,
              children: /* @__PURE__ */ S(aa, {})
            }
          ),
          /* @__PURE__ */ S(
            "textarea",
            {
              ref: m,
              id: "elitea-assistant-message-input",
              className: `elitea-assistant-input${u ? " elitea-assistant-input--expanded" : ""}`,
              value: n,
              onChange: (M) => r(M.target.value),
              onKeyDown: ee,
              onPaste: $e,
              placeholder: t,
              rows: 1,
              autoFocus: !0,
              disabled: f
            }
          ),
          h ? /* @__PURE__ */ S(
            "button",
            {
              className: "elitea-assistant-stop-button",
              onClick: s,
              "aria-label": "Stop generation",
              type: "button",
              children: /* @__PURE__ */ S(da, {})
            }
          ) : /* @__PURE__ */ S(
            "button",
            {
              className: "elitea-assistant-send-button",
              onClick: g,
              disabled: ke,
              "aria-label": "Send message",
              type: "button",
              children: /* @__PURE__ */ S(ha, {})
            }
          )
        ] })
      ]
    }
  );
});
_a.displayName = "MessageInput";
const Ia = gn(null), va = () => {
  const e = yn(Ia);
  if (!e) throw new Error("useApi must be used within EliteaAssistant");
  return e;
}, Ms = () => {
  const [e, t] = fe(!1), [n, r] = fe(!1), i = q(() => t(!0), []), o = q(() => t(!1), []), a = q(() => t((f) => !f), []), l = q(() => r(!0), []), s = q(() => r(!1), []), u = q(() => r((f) => !f), []);
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
}, pt = {
  ENTER_ROOM: "chat_enter_room",
  LEAVE_ROOM: "chat_leave_room",
  PREDICT: "support_predict",
  PREDICT_RESPONSE: "chat_predict",
  CONVERSATION_NAME_UPDATED: "chat_conversation_name_updated",
  ERROR: "support_error",
  STOP: "support_stop"
}, de = {
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
}, Fs = (e) => {
  if (typeof e == "number") return e < 4102444800 ? e * 1e3 : e;
  if (typeof e == "string") {
    const t = new Date(e);
    return isNaN(t.getTime()) ? 0 : t.getTime();
  }
  return 0;
}, zs = (e) => {
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
    timestamp: Fs(e.created_at_ts ?? e.created_at)
  };
}, Fi = (e) => (e.message_groups ?? []).map(zs), qt = () => typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
  const t = Math.random() * 16 | 0;
  return (e === "x" ? t : t & 3 | 8).toString(16);
}), Dr = (e) => e >= 1024 * 1024 ? `${Math.round(e / (1024 * 1024))}MB` : e >= 1024 ? `${Math.round(e / 1024)}KB` : `${e}B`, Bs = (e) => {
  const t = new Date(e), n = /* @__PURE__ */ new Date(), r = t.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: !0 });
  if (t.toDateString() === n.toDateString()) return r;
  const o = new Date(n);
  return o.setDate(o.getDate() - 1), t.toDateString() === o.toDateString() ? `Yesterday, ${r}` : t.toLocaleDateString([], { month: "short", day: "numeric" }) + ", " + r;
}, zi = (e) => {
  const t = e.lastIndexOf(".");
  return t === -1 ? e : e.substring(0, t) + e.substring(t).toLowerCase();
}, Kr = (e) => (e.split(".").pop() || "").toLowerCase(), jn = (e) => Ca.has(Kr(e)), Hs = (e) => Sa.has(Kr(e)), La = (e) => Hs(e.name) ? jn(e.name) && e.size > Pi ? `Image exceeds ${Dr(Pi)} limit` : e.size > Pn ? `File exceeds ${Dr(Pn)} limit` : null : `Unsupported file type: .${Kr(e.name)}`, Ra = (e, t, n) => {
  if (n.totalCount > ot) return `Max ${ot} attachments allowed`;
  const r = jn(e);
  return r && (n.imageCount += 1), n.totalSize += t, r && n.imageCount > Mi ? `Max ${Mi} images allowed` : n.totalSize > Oi ? `Total upload size exceeds ${Dr(Oi)}` : null;
}, ur = (e, t, n) => ({
  id: t,
  file: e,
  name: e.name,
  size: e.size,
  type: e.type,
  status: xe.ERROR,
  progress: 0,
  error: n
}), Da = (e) => {
  const t = `Max ${ot} attachments allowed`;
  return e.map(
    (n) => n.status === xe.UPLOADING || n.status === xe.COMPLETED ? n : { ...n, status: xe.ERROR, error: t }
  );
}, Bi = (e, t) => {
  const n = new Set(e.map((l) => l.name)), r = t.filter((l) => !n.has(l.name)), i = r.length + e.length;
  if (i > ot) {
    const l = e.map((s) => {
      const u = qt();
      return ur(s, u, `Max ${ot} attachments allowed`);
    });
    return Da([...r, ...l]);
  }
  const o = {
    totalCount: i,
    imageCount: r.filter((l) => jn(l.name)).length,
    totalSize: r.reduce((l, s) => l + s.size, 0)
  }, a = e.map((l) => {
    const s = qt(), u = La(l);
    if (u) return ur(l, s, u);
    const f = Ra(l.name, l.size, o);
    return f ? ur(l, s, f) : {
      id: s,
      file: l,
      name: l.name,
      size: l.size,
      type: l.type,
      status: xe.PENDING,
      progress: 0
    };
  });
  return [...r, ...a];
}, Us = (e) => {
  if (e.length > ot) return Da(e);
  const t = {
    totalCount: e.length,
    imageCount: 0,
    totalSize: 0
  };
  return e.map((n) => {
    if (n.status !== xe.ERROR)
      return jn(n.name) && (t.imageCount += 1), t.totalSize += n.size, n;
    const r = n.file ? La(n.file) : null;
    return r ? { ...n, error: r } : Ra(n.name, n.size, t) ? n : { ...n, status: xe.PENDING, error: void 0 };
  });
}, Hi = (e, t) => {
  const { frequency: n, start: r, peak: i, end: o } = t, a = e.createOscillator(), l = e.createGain();
  return a.connect(l), l.connect(e.destination), a.type = "sine", a.frequency.value = n, l.gain.setValueAtTime(0, r), l.gain.linearRampToValueAtTime(0.12, i), l.gain.exponentialRampToValueAtTime(0.01, o), a.start(r), a.stop(o), a;
}, $s = () => {
  try {
    const e = new AudioContext(), t = () => {
      if (e.state !== "running") {
        e.close();
        return;
      }
      const n = e.currentTime;
      Hi(e, { frequency: 784, start: n, peak: n + 0.02, end: n + 0.2 });
      const r = Hi(e, { frequency: 1047, start: n + 0.12, peak: n + 0.14, end: n + 0.37 });
      r.onended = () => e.close();
    };
    e.state === "suspended" ? e.resume().then(t) : t();
  } catch {
  }
}, js = (e) => {
  if (e.startsWith("/")) return "";
  try {
    return new URL(e).origin;
  } catch {
    return "";
  }
};
let Na = null;
const Vs = import("rehype-raw").then(({ default: e }) => (Na = e, e)), Ui = () => Na, Gs = () => {
  const e = va(), [t, n] = fe(!1), r = q(
    async (s, u, f) => {
      const c = zi(s.name), h = new File([s], c, { type: s.type }), p = new FormData();
      return p.append("file", h), p.append("overwrite", "1"), (await e.uploadFile(u, p, f))[0];
    },
    [e]
  ), i = q(
    async (s) => {
      const { chunk: u, chunkIndex: f, totalChunks: c, fileId: h, fileName: p, conversationId: m, onProgress: b } = s, w = new FormData();
      w.append("file", u), w.append("chunk_index", String(f)), w.append("total_chunks", String(c)), w.append("file_id", h), w.append("file_name", zi(p)), w.append("overwrite", "1");
      const x = await e.uploadFile(m, w, b);
      return Array.isArray(x) ? x[0] : x ?? { status: "chunk_received" };
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
          const P = Math.round(_ / A * 100);
          f(P);
        })).filepath;
      const h = o(c), p = qt(), m = h.length;
      let b = 0, w = "";
      for (let x = 0; x < m; x++) {
        const _ = h[x], A = b, P = await i({
          chunk: _,
          chunkIndex: x,
          totalChunks: m,
          fileId: p,
          fileName: c.name,
          conversationId: u,
          onProgress: (O, E) => {
            const G = A + O, X = Math.round(G / c.size * 100);
            f(Math.min(X, 99));
          }
        });
        b += _.size, P.filepath && (w = P.filepath);
      }
      return f(100), w;
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
                  const b = await a(m, u, (w) => {
                    c(m.id, w);
                  });
                  h(m.id, b);
                } catch (b) {
                  const w = b instanceof Error ? b.message : "Upload failed";
                  p(m.id, w);
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
}, Ws = (e) => {
  const { welcomeMessage: t, supportProjectId: n, initialHistory: r, initialConversation: i, isInitLoading: o, showToast: a } = e, l = Te(!1), s = va(), u = Wu(), f = Yu(), c = Vu(), { uploadAttachments: h, isUploading: p } = Gs(), m = q(
    () => t ? [{ id: "welcome", role: "assistant", content: t, timestamp: Date.now() }] : [],
    [t]
  ), [b, w] = fe([]), [x, _] = fe(""), [A, P] = fe([]), [O, E] = fe(null), [G, X] = fe([]), [K, C] = fe(!1), z = gt(
    () => o || K,
    [o, K]
  ), F = gt(() => b.some((I) => I.isStreaming), [b]), J = q((I) => {
    w((U) => U.map((N) => N.id === I ? { ...N, isAnimating: !1 } : N));
  }, []), re = q(() => {
    const I = b.findIndex((W) => W.isStreaming);
    if (I === -1) return;
    const U = b[I];
    let N = -1, j = "";
    for (let W = I - 1; W >= 0; W--)
      if (b[W].role === "user") {
        N = W, j = b[W].content;
        break;
      }
    u == null || u.emit(pt.STOP, { message_id: U.id }), setTimeout(() => {
      w((W) => {
        var Z;
        const we = /* @__PURE__ */ new Set();
        return (Z = U.content) != null && Z.trim() || we.add(U.id), N !== -1 && we.add(b[N].id), W.filter((B) => !we.has(B.id)).map(
          (B) => B.id === U.id ? { ...B, isStreaming: !1, taskId: void 0, statusMessage: void 0 } : B
        );
      }), j && _(j);
    }, 200);
  }, [b, u]), $ = q(
    (I) => {
      u == null || u.emit(pt.ENTER_ROOM, {
        project_id: n,
        conversation_id: I
      });
    },
    [u, n]
  ), ce = q(
    (I) => {
      u == null || u.emit(pt.LEAVE_ROOM, {
        project_id: n,
        conversation_id: I
      });
    },
    [u, n]
  ), pe = q(
    (I) => {
      u == null || u.emit(pt.PREDICT, I);
    },
    [u]
  ), ke = q((I) => {
    const { message_id: U, type: N, content: j, response_metadata: W } = I, we = (Z) => Z === de.START_TASK || Z === de.AGENT_START ? "Starting up..." : Z === de.AGENT_LLM_START ? "Looking things up..." : Z === de.AGENT_TOOL_START ? "Consulting knowledge base..." : Z === de.AGENT_LLM_CHUNK ? "Writing response..." : "";
    switch ((N === de.AGENT_START || N === de.AGENT_LLM_START || N === de.AGENT_TOOL_START || N === de.AGENT_LLM_CHUNK || N === de.CHUNK || N === de.AI_MESSAGE_CHUNK || N === de.AGENT_RESPONSE || N === de.ERROR || N === de.AGENT_EXCEPTION) && w((Z) => {
      const B = Z.find((Ce) => Ce.id === U);
      return B ? B.isStreaming ? Z : Z.map((Ce) => Ce.id === U ? { ...Ce, isStreaming: !0 } : Ce) : [
        ...Z,
        {
          id: U,
          role: "assistant",
          content: "",
          timestamp: Date.now(),
          isStreaming: !0
        }
      ];
    }), N) {
      case de.START_TASK: {
        const Z = j == null ? void 0 : j.task_id;
        w((B) => [
          ...B,
          {
            id: U,
            role: "assistant",
            content: "",
            timestamp: Date.now(),
            isStreaming: !0,
            taskId: Z,
            statusMessage: we(N)
          }
        ]);
        break;
      }
      case de.AGENT_START:
        w(
          (Z) => Z.map((B) => B.id === U ? { ...B, statusMessage: we(N) } : B)
        );
        break;
      case de.AGENT_LLM_START:
      case de.AGENT_TOOL_START:
        w(
          (Z) => Z.map((B) => B.id === U ? { ...B, statusMessage: we(N) } : B)
        );
        break;
      case de.AGENT_TOOL_END:
      case de.AGENT_LLM_END:
      case de.AGENT_ON_TRANSITIONAL_EDGE:
      case de.AGENT_ON_FUNCTION_TOOL_NODE:
        break;
      case de.CHUNK:
      case de.AI_MESSAGE_CHUNK: {
        const Z = typeof j == "string" ? j : JSON.stringify(j), B = !!(W != null && W.finish_reason);
        w(
          (Ce) => Ce.map(
            (et) => et.id === U ? {
              ...et,
              content: et.content + Z,
              statusMessage: void 0,
              ...B && { isStreaming: !1 }
            } : et
          )
        );
        break;
      }
      case de.AGENT_LLM_CHUNK:
        w(
          (Z) => Z.map(
            (B) => B.id === U && B.statusMessage !== we(N) ? { ...B, statusMessage: we(N) } : B
          )
        );
        break;
      case de.AGENT_RESPONSE: {
        const Z = typeof j == "string" ? j : JSON.stringify(j);
        w(
          (B) => B.map((Ce) => Ce.id !== U ? Ce : {
            ...Ce,
            content: Z,
            isStreaming: !1,
            statusMessage: void 0
          })
        );
        break;
      }
      case de.PIPELINE_FINISH:
        w(
          (Z) => Z.map(
            (B) => B.id === U && B.isStreaming ? { ...B, isStreaming: !1, statusMessage: void 0 } : B
          )
        );
        break;
      case de.ERROR:
      case de.AGENT_EXCEPTION:
        w(
          (Z) => Z.map(
            (B) => B.id === U ? {
              ...B,
              content: typeof j == "string" ? j : "An error occurred",
              isStreaming: !1,
              isAnimating: !1,
              isError: !0,
              statusMessage: void 0
            } : B
          )
        );
        break;
    }
  }, []), ve = q((I) => {
    w((U) => [
      ...U,
      {
        id: qt(),
        role: "assistant",
        content: I.error || "An error occurred",
        timestamp: Date.now(),
        isError: !0
      }
    ]);
  }, []), g = q((I) => {
    const U = I.name.replace(/^User ID \d+\s*-\s*/, "");
    X((N) => N.map((j) => j.uuid === I.conversation_uuid ? { ...j, name: U } : j));
  }, []);
  He(() => {
    if (!(o || l.current))
      if (l.current = !0, X(r), r.length > 0 && i) {
        const I = Fi(i);
        w(I.length > 0 ? I : m()), E(r[0].uuid), $(r[0].uuid);
      } else
        w(m());
  }, [o, r, i, m, $]), He(() => {
    if (u)
      return u.on(pt.PREDICT_RESPONSE, ke), u.on(pt.ERROR, ve), u.on(pt.CONVERSATION_NAME_UPDATED, g), () => {
        u.off(pt.PREDICT_RESPONSE, ke), u.off(pt.ERROR, ve), u.off(pt.CONVERSATION_NAME_UPDATED, g);
      };
  }, [u, ke, ve, g]), He(() => {
    if (!u || !O) return;
    const I = () => {
      $(O);
    };
    return u.io.on("reconnect", I), () => {
      u.io.off("reconnect", I);
    };
  }, [u, O, $]);
  const ee = q(
    (I) => {
      const U = A.filter((j) => j.status !== xe.ERROR).length, N = ot - U;
      if (N <= 0) {
        a(
          `You've reached the ${ot}-file limit. Only the first ${ot} will be processed.`
        );
        return;
      }
      if (I.length > N) {
        a(
          `You've reached the ${ot}-file limit. Only the first ${ot} will be processed.`
        ), P((j) => Bi(I.slice(0, N), j));
        return;
      }
      P((j) => Bi(I, j));
    },
    [A, a]
  ), De = q((I) => {
    P((U) => Us(U.filter((N) => N.id !== I)));
  }, []), y = q((I, U) => {
    P(
      (N) => N.map((j) => j.id === I ? { ...j, status: xe.UPLOADING, progress: U } : j)
    );
  }, []), Se = q((I, U) => {
    P(
      (N) => N.map(
        (j) => j.id === I ? { ...j, status: xe.COMPLETED, progress: 100, filepath: U } : j
      )
    );
  }, []), We = q((I, U) => {
    P(
      (N) => N.map((j) => j.id === I ? { ...j, status: xe.ERROR, error: U } : j)
    );
  }, []), ge = q(() => {
    P([]);
  }, []), Je = q(
    async (I) => {
      const U = A.filter((j) => j.status === xe.PENDING);
      if (U.length === 0) return [];
      P(
        (j) => j.map((W) => W.status === xe.PENDING ? { ...W, status: xe.UPLOADING } : W)
      );
      const N = [];
      return await h({
        conversationId: I,
        attachments: U,
        onProgress: y,
        onComplete: (j, W) => {
          Se(j, W), N.push(W);
        },
        onError: We
      }), N;
    },
    [A, h, y, Se, We]
  ), $e = q(
    async (I) => {
      let U = O;
      if (!U)
        try {
          const B = await s.createConversation();
          U = B.uuid, E(U), X((Ce) => [B, ...Ce]), $(U);
        } catch {
          w((B) => [
            ...B,
            {
              id: qt(),
              role: "assistant",
              content: "Failed to create conversation. Please try again.",
              timestamp: Date.now(),
              isError: !0
            }
          ]);
          return;
        }
      const N = A.filter((B) => B.status === xe.PENDING), j = A.filter((B) => B.status === xe.COMPLETED && B.filepath).map((B) => B.filepath), W = N.length > 0 && U ? await Je(U) : [];
      if (N.length > 0 && W.length < N.length) return;
      w((B) => [
        ...B,
        { id: qt(), role: "user", content: I, timestamp: Date.now() }
      ]);
      const we = [...j, ...W], Z = c == null ? void 0 : c.getValidScreenshot();
      if (U && Z) {
        try {
          const B = new File([Z], `screenshot-${Date.now()}.png`, {
            type: "image/png"
          }), Ce = new FormData();
          Ce.append("file", B), Ce.append("overwrite", "1");
          const bt = (await s.uploadFile(U, Ce))[0];
          bt != null && bt.filepath && we.push(bt.filepath);
        } catch {
        }
        c == null || c.clearScreenshot();
      }
      U && pe({
        conversation_uuid: U,
        content: I,
        attachments: we.length > 0 ? we : void 0,
        support_assistant_context: f ?? void 0
      }), ge();
    },
    [
      O,
      s,
      $,
      pe,
      A,
      Je,
      ge,
      f,
      c
    ]
  ), M = q(() => {
    O && ce(O), E(null), w(m()), _(""), ge();
  }, [O, ce, m, ge]), he = q(
    async (I) => {
      if (O !== I) {
        O && ce(O), E(I), $(I), _(""), ge(), w([]), C(!0);
        try {
          const U = await s.getConversation(I), N = Fi(U);
          w(N.length > 0 ? N : m());
        } catch {
          w(m());
        } finally {
          C(!1);
        }
      }
    },
    [O, ce, $, m, s, ge]
  );
  return {
    messages: b,
    inputText: x,
    setInputText: _,
    attachments: A,
    addFiles: ee,
    removeAttachment: De,
    history: G,
    currentConversationId: O ?? "",
    isLoading: z,
    isStreaming: F,
    isUploading: p,
    handleNewChat: M,
    handleSelectConversation: he,
    handleSend: $e,
    handleStop: re,
    handleAnimationComplete: J
  };
}, qs = (e) => {
  const { api: t, title: n, welcomeMessage: r, placeholder: i } = e, [o, a] = fe(null), [l, s] = fe([]), [u, f] = fe(null), [c, h] = fe(!0);
  return He(() => {
    let p = !1;
    const m = t.getConfig().then((w) => {
      p || a(w);
    }).catch(() => {
    }), b = t.getConversations().then(async (w) => {
      if (p) return;
      const x = w.items || [];
      if (s(x), x.length > 0)
        try {
          const _ = await t.getConversation(x[0].uuid);
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
}, Ys = (e) => {
  const t = Te(null), [n, r] = fe(!1), i = q(() => {
    r(!1), t.current && (clearTimeout(t.current), t.current = null);
  }, []), o = q(() => {
    e || (r(!0), $s(), t.current = setTimeout(i, 12e3));
  }, [e, i]);
  return He(() => () => {
    t.current && clearTimeout(t.current);
  }, []), He(() => {
    e && i();
  }, [e, i]), { popupVissible: n, showPopup: o, hidePopup: i, popupText: "Hi! Need help? Ask me!" };
};
function Xs(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), i = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(i), t && (r.href = t), i.href = e, i.href;
}
const Ks = /* @__PURE__ */ (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function It(e) {
  const t = [];
  for (let n = 0, r = e.length; n < r; n++)
    t.push(e[n]);
  return t;
}
let Ht = null;
function Pa(e = {}) {
  return Ht || (e.includeStyleProperties ? (Ht = e.includeStyleProperties, Ht) : (Ht = It(window.getComputedStyle(document.documentElement)), Ht));
}
function On(e, t) {
  const r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function Zs(e) {
  const t = On(e, "border-left-width"), n = On(e, "border-right-width");
  return e.clientWidth + t + n;
}
function Qs(e) {
  const t = On(e, "border-top-width"), n = On(e, "border-bottom-width");
  return e.clientHeight + t + n;
}
function Oa(e, t = {}) {
  const n = t.width || Zs(e), r = t.height || Qs(e);
  return { width: n, height: r };
}
function Js() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const n = t && t.env ? t.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const Ke = 16384;
function eu(e) {
  (e.width > Ke || e.height > Ke) && (e.width > Ke && e.height > Ke ? e.width > e.height ? (e.height *= Ke / e.width, e.width = Ke) : (e.width *= Ke / e.height, e.height = Ke) : e.width > Ke ? (e.height *= Ke / e.width, e.width = Ke) : (e.width *= Ke / e.height, e.height = Ke));
}
function tu(e, t = {}) {
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
function Mn(e) {
  return new Promise((t, n) => {
    const r = new Image();
    r.onload = () => {
      r.decode().then(() => {
        requestAnimationFrame(() => t(r));
      });
    }, r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = e;
  });
}
async function nu(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function ru(e, t, n) {
  const r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg"), o = document.createElementNS(r, "foreignObject");
  return i.setAttribute("width", `${t}`), i.setAttribute("height", `${n}`), i.setAttribute("viewBox", `0 0 ${t} ${n}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), i.appendChild(o), o.appendChild(e), nu(i);
}
const Ye = (e, t) => {
  if (e instanceof t)
    return !0;
  const n = Object.getPrototypeOf(e);
  return n === null ? !1 : n.constructor.name === t.name || Ye(n, t);
};
function iu(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function ou(e, t) {
  return Pa(t).map((n) => {
    const r = e.getPropertyValue(n), i = e.getPropertyPriority(n);
    return `${n}: ${r}${i ? " !important" : ""};`;
  }).join(" ");
}
function au(e, t, n, r) {
  const i = `.${e}:${t}`, o = n.cssText ? iu(n) : ou(n, r);
  return document.createTextNode(`${i}{${o}}`);
}
function $i(e, t, n, r) {
  const i = window.getComputedStyle(e, n), o = i.getPropertyValue("content");
  if (o === "" || o === "none")
    return;
  const a = Ks();
  try {
    t.className = `${t.className} ${a}`;
  } catch {
    return;
  }
  const l = document.createElement("style");
  l.appendChild(au(a, n, i, r)), t.appendChild(l);
}
function lu(e, t, n) {
  $i(e, t, ":before", n), $i(e, t, ":after", n);
}
const ji = "application/font-woff", Vi = "image/jpeg", su = {
  woff: ji,
  woff2: ji,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Vi,
  jpeg: Vi,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function uu(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function Zr(e) {
  const t = uu(e).toLowerCase();
  return su[t] || "";
}
function cu(e) {
  return e.split(/,/)[1];
}
function Nr(e) {
  return e.search(/^(data:)/) !== -1;
}
function fu(e, t) {
  return `data:${t};base64,${e}`;
}
async function Ma(e, t, n) {
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
function pu(e, t, n) {
  let r = e.replace(/\?.*/, "");
  return n && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), t ? `[${t}]${r}` : r;
}
async function Qr(e, t, n) {
  const r = pu(e, t, n.includeQueryParams);
  if (cr[r] != null)
    return cr[r];
  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i;
  try {
    const o = await Ma(e, n.fetchRequestInit, ({ res: a, result: l }) => (t || (t = a.headers.get("Content-Type") || ""), cu(l)));
    i = fu(o, t);
  } catch (o) {
    i = n.imagePlaceholder || "";
    let a = `Failed to fetch resource: ${e}`;
    o && (a = typeof o == "string" ? o : o.message), a && console.warn(a);
  }
  return cr[r] = i, i;
}
async function hu(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : Mn(t);
}
async function du(e, t) {
  if (e.currentSrc) {
    const o = document.createElement("canvas"), a = o.getContext("2d");
    o.width = e.clientWidth, o.height = e.clientHeight, a == null || a.drawImage(e, 0, 0, o.width, o.height);
    const l = o.toDataURL();
    return Mn(l);
  }
  const n = e.poster, r = Zr(n), i = await Qr(n, r, t);
  return Mn(i);
}
async function mu(e, t) {
  var n;
  try {
    if (!((n = e == null ? void 0 : e.contentDocument) === null || n === void 0) && n.body)
      return await Vn(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function gu(e, t) {
  return Ye(e, HTMLCanvasElement) ? hu(e) : Ye(e, HTMLVideoElement) ? du(e, t) : Ye(e, HTMLIFrameElement) ? mu(e, t) : e.cloneNode(Fa(e));
}
const yu = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Fa = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function bu(e, t, n) {
  var r, i;
  if (Fa(t))
    return t;
  let o = [];
  return yu(e) && e.assignedNodes ? o = It(e.assignedNodes()) : Ye(e, HTMLIFrameElement) && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? o = It(e.contentDocument.body.childNodes) : o = It(((i = e.shadowRoot) !== null && i !== void 0 ? i : e).childNodes), o.length === 0 || Ye(e, HTMLVideoElement) || await o.reduce((a, l) => a.then(() => Vn(l, n)).then((s) => {
    s && t.appendChild(s);
  }), Promise.resolve()), t;
}
function xu(e, t, n) {
  const r = t.style;
  if (!r)
    return;
  const i = window.getComputedStyle(e);
  i.cssText ? (r.cssText = i.cssText, r.transformOrigin = i.transformOrigin) : Pa(n).forEach((o) => {
    let a = i.getPropertyValue(o);
    o === "font-size" && a.endsWith("px") && (a = `${Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1}px`), Ye(e, HTMLIFrameElement) && o === "display" && a === "inline" && (a = "block"), o === "d" && t.getAttribute("d") && (a = `path(${t.getAttribute("d")})`), r.setProperty(o, a, i.getPropertyPriority(o));
  });
}
function ku(e, t) {
  Ye(e, HTMLTextAreaElement) && (t.innerHTML = e.value), Ye(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function wu(e, t) {
  if (Ye(e, HTMLSelectElement)) {
    const n = t, r = Array.from(n.children).find((i) => e.value === i.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function Cu(e, t, n) {
  return Ye(t, Element) && (xu(e, t, n), lu(e, t, n), ku(e, t), wu(e, t)), t;
}
async function Su(e, t) {
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
  return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((r) => gu(r, t)).then((r) => bu(e, r, t)).then((r) => Cu(e, r, t)).then((r) => Su(r, t));
}
const za = /url\((['"]?)([^'"]+?)\1\)/g, Eu = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Tu = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Au(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function _u(e) {
  const t = [];
  return e.replace(za, (n, r, i) => (t.push(i), n)), t.filter((n) => !Nr(n));
}
async function Iu(e, t, n, r, i) {
  try {
    const o = n ? Xs(t, n) : t, a = Zr(t);
    let l;
    return i || (l = await Qr(o, a, r)), e.replace(Au(t), `$1${l}$3`);
  } catch {
  }
  return e;
}
function vu(e, { preferredFontFormat: t }) {
  return t ? e.replace(Tu, (n) => {
    for (; ; ) {
      const [r, , i] = Eu.exec(n) || [];
      if (!i)
        return "";
      if (i === t)
        return `src: ${r};`;
    }
  }) : e;
}
function Ba(e) {
  return e.search(za) !== -1;
}
async function Ha(e, t, n) {
  if (!Ba(e))
    return e;
  const r = vu(e, n);
  return _u(r).reduce((o, a) => o.then((l) => Iu(l, a, t, n)), Promise.resolve(r));
}
async function Ut(e, t, n) {
  var r;
  const i = (r = t.style) === null || r === void 0 ? void 0 : r.getPropertyValue(e);
  if (i) {
    const o = await Ha(i, null, n);
    return t.style.setProperty(e, o, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function Lu(e, t) {
  await Ut("background", e, t) || await Ut("background-image", e, t), await Ut("mask", e, t) || await Ut("-webkit-mask", e, t) || await Ut("mask-image", e, t) || await Ut("-webkit-mask-image", e, t);
}
async function Ru(e, t) {
  const n = Ye(e, HTMLImageElement);
  if (!(n && !Nr(e.src)) && !(Ye(e, SVGImageElement) && !Nr(e.href.baseVal)))
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
async function Du(e, t) {
  const r = It(e.childNodes).map((i) => Ua(i, t));
  await Promise.all(r).then(() => e);
}
async function Ua(e, t) {
  Ye(e, Element) && (await Lu(e, t), await Ru(e, t), await Du(e, t));
}
function Nu(e, t) {
  const { style: n } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
  const r = t.style;
  return r != null && Object.keys(r).forEach((i) => {
    n[i] = r[i];
  }), e;
}
const Gi = {};
async function Wi(e) {
  let t = Gi[e];
  if (t != null)
    return t;
  const r = await (await fetch(e)).text();
  return t = { url: e, cssText: r }, Gi[e] = t, t;
}
async function qi(e, t) {
  let n = e.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, o = (n.match(/url\([^)]+\)/g) || []).map(async (a) => {
    let l = a.replace(r, "$1");
    return l.startsWith("https://") || (l = new URL(l, e.url).href), Ma(l, t.fetchRequestInit, ({ result: s }) => (n = n.replace(a, `url(${s})`), [a, s]));
  });
  return Promise.all(o).then(() => n);
}
function Yi(e) {
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
async function Pu(e, t) {
  const n = [], r = [];
  return e.forEach((i) => {
    if ("cssRules" in i)
      try {
        It(i.cssRules || []).forEach((o, a) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let l = a + 1;
            const s = o.href, u = Wi(s).then((f) => qi(f, t)).then((f) => Yi(f).forEach((c) => {
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
        i.href != null && r.push(Wi(i.href).then((l) => qi(l, t)).then((l) => Yi(l).forEach((s) => {
          a.insertRule(s, a.cssRules.length);
        })).catch((l) => {
          console.error("Error loading remote stylesheet", l);
        })), console.error("Error inlining remote css file", o);
      }
  }), Promise.all(r).then(() => (e.forEach((i) => {
    if ("cssRules" in i)
      try {
        It(i.cssRules || []).forEach((o) => {
          n.push(o);
        });
      } catch (o) {
        console.error(`Error while reading CSS rules from ${i.href}`, o);
      }
  }), n));
}
function Ou(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => Ba(t.style.getPropertyValue("src")));
}
async function Mu(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = It(e.ownerDocument.styleSheets), r = await Pu(n, t);
  return Ou(r);
}
function $a(e) {
  return e.trim().replace(/["']/g, "");
}
function Fu(e) {
  const t = /* @__PURE__ */ new Set();
  function n(r) {
    (r.style.fontFamily || getComputedStyle(r).fontFamily).split(",").forEach((o) => {
      t.add($a(o));
    }), Array.from(r.children).forEach((o) => {
      o instanceof HTMLElement && n(o);
    });
  }
  return n(e), t;
}
async function zu(e, t) {
  const n = await Mu(e, t), r = Fu(e);
  return (await Promise.all(n.filter((o) => r.has($a(o.style.fontFamily))).map((o) => {
    const a = o.parentStyleSheet ? o.parentStyleSheet.href : null;
    return Ha(o.cssText, a, t);
  }))).join(`
`);
}
async function Bu(e, t) {
  const n = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await zu(e, t);
  if (n) {
    const r = document.createElement("style"), i = document.createTextNode(n);
    r.appendChild(i), e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r);
  }
}
async function Hu(e, t = {}) {
  const { width: n, height: r } = Oa(e, t), i = await Vn(e, t, !0);
  return await Bu(i, t), await Ua(i, t), Nu(i, t), await ru(i, n, r);
}
async function Uu(e, t = {}) {
  const { width: n, height: r } = Oa(e, t), i = await Hu(e, t), o = await Mn(i), a = document.createElement("canvas"), l = a.getContext("2d"), s = t.pixelRatio || Js(), u = t.canvasWidth || n, f = t.canvasHeight || r;
  return a.width = u * s, a.height = f * s, t.skipAutoScale || eu(a), a.style.width = `${u}`, a.style.height = `${f}`, t.backgroundColor && (l.fillStyle = t.backgroundColor, l.fillRect(0, 0, a.width, a.height)), l.drawImage(o, 0, 0, a.width, a.height), a;
}
async function $u(e, t = {}) {
  const n = await Uu(e, t);
  return await tu(n);
}
const ju = 3 * 60 * 1e3, ja = gn(null), Vu = () => yn(ja), Gu = () => {
  const [e, t] = fe(null), [n, r] = fe(null), i = Te(!1), o = q(() => {
    i.current || (i.current = !0, setTimeout(() => {
      const s = document.documentElement;
      $u(s, {
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
  }, []), l = q(() => !e || !n || Date.now() - n > ju ? null : e, [e, n]);
  return { screenshot: e, capturedAt: n, captureScreenshot: o, clearScreenshot: a, getValidScreenshot: l };
}, Va = gn(null), Wu = () => yn(Va), qu = (e) => {
  const [t, n] = fe(null);
  return He(() => {
    const r = vs(e.url, {
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
}, Ga = gn(null), Yu = () => yn(Ga), Xu = 4e3, Ku = () => {
  const e = Te(null), [t, n] = fe(null), r = q(() => {
    n(null), e.current && (clearTimeout(e.current), e.current = null);
  }, []), i = q(
    (o) => {
      n(o), e.current && clearTimeout(e.current), e.current = setTimeout(r, Xu);
    },
    [r]
  );
  return He(() => () => {
    e.current && clearTimeout(e.current);
  }, []), { toastMessage: t, showToast: i, dismissToast: r };
}, Zu = 3, Qu = 16, Ju = (e, t, n) => {
  const r = Te(null), i = Te(n), [o, a] = fe(0);
  i.current = n, He(() => {
    if (!t || !e) {
      a(e.length);
      return;
    }
    return a(0), r.current = setInterval(() => {
      a((s) => {
        const u = s + Zu;
        return u >= e.length ? (r.current && clearInterval(r.current), i.current(), e.length) : u;
      });
    }, Qu), () => {
      r.current && clearInterval(r.current);
    };
  }, [e, t]);
  const l = q(() => {
    r.current && clearInterval(r.current), a(e.length), i.current();
  }, [e]);
  return { displayedText: e.slice(0, o), skipAnimation: l };
};
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function Xi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ec(e) {
  if (Array.isArray(e)) return e;
}
function tc(e, t) {
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
function nc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rc(e, t) {
  return ec(e) || tc(e, t) || ic(e, t) || nc();
}
function ic(e, t) {
  if (e) {
    if (typeof e == "string") return Xi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xi(e, t) : void 0;
  }
}
const Wa = Object.entries, Ki = Object.setPrototypeOf, oc = Object.isFrozen, ac = Object.getPrototypeOf, lc = Object.getOwnPropertyDescriptor;
let Oe = Object.freeze, Me = Object.seal, Vt = Object.create, qa = typeof Reflect < "u" && Reflect, Pr = qa.apply, Or = qa.construct;
Oe || (Oe = function(t) {
  return t;
});
Me || (Me = function(t) {
  return t;
});
Pr || (Pr = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    i[o - 2] = arguments[o];
  return t.apply(n, i);
});
Or || (Or = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const on = Ie(Array.prototype.forEach), sc = Ie(Array.prototype.lastIndexOf), Zi = Ie(Array.prototype.pop), $t = Ie(Array.prototype.push), uc = Ie(Array.prototype.splice), _t = Array.isArray, cn = Ie(String.prototype.toLowerCase), fr = Ie(String.prototype.toString), Qi = Ie(String.prototype.match), an = Ie(String.prototype.replace), Ji = Ie(String.prototype.indexOf), cc = Ie(String.prototype.trim), fc = Ie(Number.prototype.toString), pc = Ie(Boolean.prototype.toString), eo = typeof BigInt > "u" ? null : Ie(BigInt.prototype.toString), to = typeof Symbol > "u" ? null : Ie(Symbol.prototype.toString), Re = Ie(Object.prototype.hasOwnProperty), ln = Ie(Object.prototype.toString), Pe = Ie(RegExp.prototype.test), Dt = hc(TypeError);
function Ie(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return Pr(e, t, r);
  };
}
function hc(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Or(e, n);
  };
}
function le(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : cn;
  if (Ki && Ki(e, null), !_t(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const o = n(i);
      o !== i && (oc(t) || (t[r] = o), i = o);
    }
    e[i] = !0;
  }
  return e;
}
function dc(e) {
  for (let t = 0; t < e.length; t++)
    Re(e, t) || (e[t] = null);
  return e;
}
function Ve(e) {
  const t = Vt(null);
  for (const r of Wa(e)) {
    var n = rc(r, 2);
    const i = n[0], o = n[1];
    Re(e, i) && (_t(o) ? t[i] = dc(o) : o && typeof o == "object" && o.constructor === Object ? t[i] = Ve(o) : t[i] = o);
  }
  return t;
}
function mc(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return fc(e);
    case "boolean":
      return pc(e);
    case "bigint":
      return eo ? eo(e) : "0";
    case "symbol":
      return to ? to(e) : "Symbol()";
    case "undefined":
      return ln(e);
    case "function":
    case "object": {
      if (e === null)
        return ln(e);
      const t = e, n = dt(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : ln(r);
      }
      return ln(e);
    }
    default:
      return ln(e);
  }
}
function dt(e, t) {
  for (; e !== null; ) {
    const r = lc(e, t);
    if (r) {
      if (r.get)
        return Ie(r.get);
      if (typeof r.value == "function")
        return Ie(r.value);
    }
    e = ac(e);
  }
  function n() {
    return null;
  }
  return n;
}
function gc(e) {
  try {
    return Pe(e, ""), !0;
  } catch {
    return !1;
  }
}
const no = Oe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), pr = Oe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), hr = Oe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), yc = Oe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), dr = Oe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), bc = Oe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ro = Oe(["#text"]), io = Oe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), mr = Oe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), oo = Oe(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), _n = Oe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), xc = Me(/{{[\w\W]*|^[\w\W]*}}/g), kc = Me(/<%[\w\W]*|^[\w\W]*%>/g), wc = Me(/\${[\w\W]*/g), Cc = Me(/^data-[\-\w.\u00B7-\uFFFF]+$/), Sc = Me(/^aria-[\-\w]+$/), ao = Me(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ec = Me(/^(?:\w+script|data):/i), Tc = Me(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ac = Me(/^html$/i), _c = Me(/^[a-z][.\w]*(-[.\w]+)+$/i), lo = Me(/<[/\w!]/g), Ic = Me(/<[/\w]/g), vc = Me(/<\/no(script|embed|frames)/i), Lc = Me(/\/>/i), ht = {
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
}, Rc = function() {
  return typeof window > "u" ? null : window;
}, Dc = function(t, n) {
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
}, so = function() {
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
}, Tt = function(t, n, r, i) {
  return Re(t, n) && _t(t[n]) ? le(i.base ? Ve(i.base) : {}, t[n], i.transform) : r;
};
function Ya() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Rc();
  const t = (D) => Ya(D);
  if (t.version = "3.4.11", t.removed = [], !e || !e.document || e.document.nodeType !== ht.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, a = e.Node, l = e.Element, s = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, c = e.trustedTypes, h = l.prototype, p = dt(h, "cloneNode"), m = dt(h, "remove"), b = dt(h, "nextSibling"), w = dt(h, "childNodes"), x = dt(h, "parentNode"), _ = dt(h, "shadowRoot"), A = dt(h, "attributes"), P = a && a.prototype ? dt(a.prototype, "nodeType") : null, O = a && a.prototype ? dt(a.prototype, "nodeName") : null;
  if (typeof o == "function") {
    const D = n.createElement("template");
    D.content && D.content.ownerDocument && (n = D.content.ownerDocument);
  }
  let E, G = "", X, K = !1, C = 0;
  const z = function() {
    if (C > 0)
      throw Dt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, F = function(d) {
    z(), C++;
    try {
      return E.createHTML(d);
    } finally {
      C--;
    }
  }, J = function(d) {
    z(), C++;
    try {
      return E.createScriptURL(d);
    } finally {
      C--;
    }
  }, re = function() {
    return K || (X = Dc(c, i), K = !0), X;
  }, $ = n, ce = $.implementation, pe = $.createNodeIterator, ke = $.createDocumentFragment, ve = $.getElementsByTagName, g = r.importNode;
  let ee = so();
  t.isSupported = typeof Wa == "function" && typeof x == "function" && ce && ce.createHTMLDocument !== void 0;
  const De = xc, y = kc, Se = wc, We = Cc, ge = Sc, Je = Ec, $e = Tc, M = _c;
  let he = ao, I = null;
  const U = le({}, [...no, ...pr, ...hr, ...dr, ...ro]);
  let N = null;
  const j = le({}, [...io, ...mr, ...oo, ..._n]);
  let W = Object.seal(Vt(null, {
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
  })), we = null, Z = null;
  const B = Object.seal(Vt(null, {
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
  let Ce = !0, et = !0, bt = !1, wn = !0, st = !1, Lt = !0, xt = !1, T = !1, L = null, Y = null, te = !1, ae = !1, Fe = !1, tt = !1, nt = !0, Ct = !1;
  const St = "user-content-";
  let Ne = !0, ut = !1, ze = {}, ct = null;
  const Zn = le({}, [
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
  let xi = null;
  const ki = le({}, ["audio", "video", "img", "source", "image", "track"]);
  let Qn = null;
  const wi = le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Cn = "http://www.w3.org/1998/Math/MathML", Sn = "http://www.w3.org/2000/svg", ft = "http://www.w3.org/1999/xhtml";
  let Ft = ft, Jn = !1, er = null;
  const cs = le({}, [Cn, Sn, ft], fr), Ci = Oe(["mi", "mo", "mn", "ms", "mtext"]);
  let tr = le({}, Ci);
  const Si = Oe(["annotation-xml"]);
  let nr = le({}, Si);
  const fs = le({}, ["title", "style", "font", "a", "script"]);
  let Jt = null;
  const ps = ["application/xhtml+xml", "text/html"], hs = "text/html";
  let Ee = null, zt = null;
  const ds = n.createElement("form"), Ei = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, rr = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (zt && zt === d)
      return;
    (!d || typeof d != "object") && (d = {}), d = Ve(d), Jt = // eslint-disable-next-line unicorn/prefer-includes
    ps.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? hs : d.PARSER_MEDIA_TYPE, Ee = Jt === "application/xhtml+xml" ? fr : cn, I = Tt(d, "ALLOWED_TAGS", U, {
      transform: Ee
    }), N = Tt(d, "ALLOWED_ATTR", j, {
      transform: Ee
    }), er = Tt(d, "ALLOWED_NAMESPACES", cs, {
      transform: fr
    }), Qn = Tt(d, "ADD_URI_SAFE_ATTR", wi, {
      transform: Ee,
      base: wi
    }), xi = Tt(d, "ADD_DATA_URI_TAGS", ki, {
      transform: Ee,
      base: ki
    }), ct = Tt(d, "FORBID_CONTENTS", Zn, {
      transform: Ee
    }), we = Tt(d, "FORBID_TAGS", Ve({}), {
      transform: Ee
    }), Z = Tt(d, "FORBID_ATTR", Ve({}), {
      transform: Ee
    }), ze = Re(d, "USE_PROFILES") ? d.USE_PROFILES && typeof d.USE_PROFILES == "object" ? Ve(d.USE_PROFILES) : d.USE_PROFILES : !1, Ce = d.ALLOW_ARIA_ATTR !== !1, et = d.ALLOW_DATA_ATTR !== !1, bt = d.ALLOW_UNKNOWN_PROTOCOLS || !1, wn = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, st = d.SAFE_FOR_TEMPLATES || !1, Lt = d.SAFE_FOR_XML !== !1, xt = d.WHOLE_DOCUMENT || !1, ae = d.RETURN_DOM || !1, Fe = d.RETURN_DOM_FRAGMENT || !1, tt = d.RETURN_TRUSTED_TYPE || !1, te = d.FORCE_BODY || !1, nt = d.SANITIZE_DOM !== !1, Ct = d.SANITIZE_NAMED_PROPS || !1, Ne = d.KEEP_CONTENT !== !1, ut = d.IN_PLACE || !1, he = gc(d.ALLOWED_URI_REGEXP) ? d.ALLOWED_URI_REGEXP : ao, Ft = typeof d.NAMESPACE == "string" ? d.NAMESPACE : ft, tr = Re(d, "MATHML_TEXT_INTEGRATION_POINTS") && d.MATHML_TEXT_INTEGRATION_POINTS && typeof d.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Ve(d.MATHML_TEXT_INTEGRATION_POINTS) : le({}, Ci), nr = Re(d, "HTML_INTEGRATION_POINTS") && d.HTML_INTEGRATION_POINTS && typeof d.HTML_INTEGRATION_POINTS == "object" ? Ve(d.HTML_INTEGRATION_POINTS) : le({}, Si);
    const k = Re(d, "CUSTOM_ELEMENT_HANDLING") && d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING == "object" ? Ve(d.CUSTOM_ELEMENT_HANDLING) : Vt(null);
    if (W = Vt(null), Re(k, "tagNameCheck") && Ei(k.tagNameCheck) && (W.tagNameCheck = k.tagNameCheck), Re(k, "attributeNameCheck") && Ei(k.attributeNameCheck) && (W.attributeNameCheck = k.attributeNameCheck), Re(k, "allowCustomizedBuiltInElements") && typeof k.allowCustomizedBuiltInElements == "boolean" && (W.allowCustomizedBuiltInElements = k.allowCustomizedBuiltInElements), Me(W), st && (et = !1), Fe && (ae = !0), ze && (I = le({}, ro), N = Vt(null), ze.html === !0 && (le(I, no), le(N, io)), ze.svg === !0 && (le(I, pr), le(N, mr), le(N, _n)), ze.svgFilters === !0 && (le(I, hr), le(N, mr), le(N, _n)), ze.mathMl === !0 && (le(I, dr), le(N, oo), le(N, _n))), B.tagCheck = null, B.attributeCheck = null, Re(d, "ADD_TAGS") && (typeof d.ADD_TAGS == "function" ? B.tagCheck = d.ADD_TAGS : _t(d.ADD_TAGS) && (I === U && (I = Ve(I)), le(I, d.ADD_TAGS, Ee))), Re(d, "ADD_ATTR") && (typeof d.ADD_ATTR == "function" ? B.attributeCheck = d.ADD_ATTR : _t(d.ADD_ATTR) && (N === j && (N = Ve(N)), le(N, d.ADD_ATTR, Ee))), Re(d, "ADD_URI_SAFE_ATTR") && _t(d.ADD_URI_SAFE_ATTR) && le(Qn, d.ADD_URI_SAFE_ATTR, Ee), Re(d, "FORBID_CONTENTS") && _t(d.FORBID_CONTENTS) && (ct === Zn && (ct = Ve(ct)), le(ct, d.FORBID_CONTENTS, Ee)), Re(d, "ADD_FORBID_CONTENTS") && _t(d.ADD_FORBID_CONTENTS) && (ct === Zn && (ct = Ve(ct)), le(ct, d.ADD_FORBID_CONTENTS, Ee)), Ne && (I["#text"] = !0), xt && le(I, ["html", "head", "body"]), I.table && (le(I, ["tbody"]), delete we.tbody), d.TRUSTED_TYPES_POLICY) {
      if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Dt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Dt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = E;
      E = d.TRUSTED_TYPES_POLICY;
      try {
        G = F("");
      } catch (H) {
        throw E = R, H;
      }
    } else d.TRUSTED_TYPES_POLICY === null ? (E = void 0, G = "") : (E === void 0 && (E = re()), E && typeof G == "string" && (G = F("")));
    Oe && Oe(d), zt = d;
  }, Ti = le({}, [...pr, ...hr, ...yc]), Ai = le({}, [...dr, ...bc]), ms = function(d, k, R) {
    return k.namespaceURI === ft ? d === "svg" : k.namespaceURI === Cn ? d === "svg" && (R === "annotation-xml" || tr[R]) : !!Ti[d];
  }, gs = function(d, k, R) {
    return k.namespaceURI === ft ? d === "math" : k.namespaceURI === Sn ? d === "math" && nr[R] : !!Ai[d];
  }, ys = function(d, k, R) {
    return k.namespaceURI === Sn && !nr[R] || k.namespaceURI === Cn && !tr[R] ? !1 : !Ai[d] && (fs[d] || !Ti[d]);
  }, bs = function(d) {
    let k = x(d);
    (!k || !k.tagName) && (k = {
      namespaceURI: Ft,
      tagName: "template"
    });
    const R = cn(d.tagName), H = cn(k.tagName);
    return er[d.namespaceURI] ? d.namespaceURI === Sn ? ms(R, k, H) : d.namespaceURI === Cn ? gs(R, k, H) : d.namespaceURI === ft ? ys(R, k, H) : !!(Jt === "application/xhtml+xml" && er[d.namespaceURI]) : !1;
  }, Et = function(d) {
    $t(t.removed, {
      element: d
    });
    try {
      x(d).removeChild(d);
    } catch {
      if (m(d), !x(d))
        throw Dt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, _i = function(d) {
    const k = w(d);
    if (k) {
      const H = [];
      on(k, (ne) => {
        $t(H, ne);
      }), on(H, (ne) => {
        try {
          m(ne);
        } catch {
        }
      });
    }
    const R = A(d);
    if (R)
      for (let H = R.length - 1; H >= 0; --H) {
        const ne = R[H], ue = ne && ne.name;
        if (typeof ue == "string")
          try {
            d.removeAttribute(ue);
          } catch {
          }
      }
  }, Rt = function(d, k) {
    try {
      $t(t.removed, {
        attribute: k.getAttributeNode(d),
        from: k
      });
    } catch {
      $t(t.removed, {
        attribute: null,
        from: k
      });
    }
    if (k.removeAttribute(d), d === "is")
      if (ae || Fe)
        try {
          Et(k);
        } catch {
        }
      else
        try {
          k.setAttribute(d, "");
        } catch {
        }
  }, xs = function(d) {
    const k = A(d);
    if (k)
      for (let R = k.length - 1; R >= 0; --R) {
        const H = k[R], ne = H && H.name;
        if (!(typeof ne != "string" || N[Ee(ne)]))
          try {
            d.removeAttribute(ne);
          } catch {
          }
      }
  }, ks = function(d) {
    const k = [d];
    for (; k.length > 0; ) {
      const R = k.pop();
      (P ? P(R) : R.nodeType) === ht.element && xs(R);
      const ne = w(R);
      if (ne)
        for (let ue = ne.length - 1; ue >= 0; --ue)
          k.push(ne[ue]);
    }
  }, Ii = function(d) {
    let k = null, R = null;
    if (te)
      d = "<remove></remove>" + d;
    else {
      const ue = Qi(d, /^[\r\n\t ]+/);
      R = ue && ue[0];
    }
    Jt === "application/xhtml+xml" && Ft === ft && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const H = E ? F(d) : d;
    if (Ft === ft)
      try {
        k = new f().parseFromString(H, Jt);
      } catch {
      }
    if (!k || !k.documentElement) {
      k = ce.createDocument(Ft, "template", null);
      try {
        k.documentElement.innerHTML = Jn ? G : H;
      } catch {
      }
    }
    const ne = k.body || k.documentElement;
    return d && R && ne.insertBefore(n.createTextNode(R), ne.childNodes[0] || null), Ft === ft ? ve.call(k, xt ? "html" : "body")[0] : xt ? k.documentElement : ne;
  }, vi = function(d) {
    return pe.call(
      d.ownerDocument || d,
      d,
      // eslint-disable-next-line no-bitwise
      s.SHOW_ELEMENT | s.SHOW_COMMENT | s.SHOW_TEXT | s.SHOW_PROCESSING_INSTRUCTION | s.SHOW_CDATA_SECTION,
      null
    );
  }, En = function(d) {
    return d = an(d, De, " "), d = an(d, y, " "), d = an(d, Se, " "), d;
  }, ir = function(d) {
    var k;
    d.normalize();
    const R = pe.call(
      d.ownerDocument || d,
      d,
      // eslint-disable-next-line no-bitwise
      s.SHOW_TEXT | s.SHOW_COMMENT | s.SHOW_CDATA_SECTION | s.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = R.nextNode();
    for (; H; )
      H.data = En(H.data), H = R.nextNode();
    const ne = (k = d.querySelectorAll) === null || k === void 0 ? void 0 : k.call(d, "template");
    ne && on(ne, (ue) => {
      Bt(ue.content) && ir(ue.content);
    });
  }, Tn = function(d) {
    const k = O ? O(d) : null;
    return typeof k != "string" || Ee(k) !== "form" ? !1 : typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    d.nodeType !== P(d) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    d.childNodes !== w(d);
  }, Bt = function(d) {
    if (!P || typeof d != "object" || d === null)
      return !1;
    try {
      return P(d) === ht.documentFragment;
    } catch {
      return !1;
    }
  }, en = function(d) {
    if (!P || typeof d != "object" || d === null)
      return !1;
    try {
      return typeof P(d) == "number";
    } catch {
      return !1;
    }
  };
  function kt(D, d, k) {
    D.length !== 0 && on(D, (R) => {
      R.call(t, d, k, zt);
    });
  }
  const ws = function(d, k) {
    return !!(Lt && d.hasChildNodes() && !en(d.firstElementChild) && Pe(lo, d.textContent) && Pe(lo, d.innerHTML) || Lt && d.namespaceURI === ft && k === "style" && en(d.firstElementChild) || d.nodeType === ht.processingInstruction || Lt && d.nodeType === ht.comment && Pe(Ic, d.data));
  }, Cs = function(d, k) {
    if (!we[k] && Di(k) && (W.tagNameCheck instanceof RegExp && Pe(W.tagNameCheck, k) || W.tagNameCheck instanceof Function && W.tagNameCheck(k)))
      return !1;
    if (Ne && !ct[k]) {
      const R = x(d), H = w(d);
      if (H && R) {
        const ne = H.length;
        for (let ue = ne - 1; ue >= 0; --ue) {
          const Le = ut ? H[ue] : p(H[ue], !0);
          R.insertBefore(Le, b(d));
        }
      }
    }
    return Et(d), !0;
  }, Li = function(d) {
    if (kt(ee.beforeSanitizeElements, d, null), Tn(d))
      return Et(d), !0;
    const k = Ee(O ? O(d) : d.nodeName);
    if (kt(ee.uponSanitizeElement, d, {
      tagName: k,
      allowedTags: I
    }), ws(d, k))
      return Et(d), !0;
    if (we[k] || !(B.tagCheck instanceof Function && B.tagCheck(k)) && !I[k])
      return Cs(d, k);
    if ((P ? P(d) : d.nodeType) === ht.element && !bs(d) || (k === "noscript" || k === "noembed" || k === "noframes") && Pe(vc, d.innerHTML))
      return Et(d), !0;
    if (st && d.nodeType === ht.text) {
      const H = En(d.textContent);
      d.textContent !== H && ($t(t.removed, {
        element: d.cloneNode()
      }), d.textContent = H);
    }
    return kt(ee.afterSanitizeElements, d, null), !1;
  }, Ri = function(d, k, R) {
    if (Z[k] || nt && (k === "id" || k === "name") && (R in n || R in ds))
      return !1;
    const H = N[k] || B.attributeCheck instanceof Function && B.attributeCheck(k, d);
    if (!(et && Pe(We, k))) {
      if (!(Ce && Pe(ge, k))) {
        if (H) {
          if (!Qn[k]) {
            if (!Pe(he, an(R, $e, ""))) {
              if (!((k === "src" || k === "xlink:href" || k === "href") && d !== "script" && Ji(R, "data:") === 0 && xi[d])) {
                if (!(bt && !Pe(Je, an(R, $e, "")))) {
                  if (R)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Di(d) && (W.tagNameCheck instanceof RegExp && Pe(W.tagNameCheck, d) || W.tagNameCheck instanceof Function && W.tagNameCheck(d)) && (W.attributeNameCheck instanceof RegExp && Pe(W.attributeNameCheck, k) || W.attributeNameCheck instanceof Function && W.attributeNameCheck(k, d)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          k === "is" && W.allowCustomizedBuiltInElements && (W.tagNameCheck instanceof RegExp && Pe(W.tagNameCheck, R) || W.tagNameCheck instanceof Function && W.tagNameCheck(R)))
        ) return !1;
      }
    }
    return !0;
  }, Ss = le({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Di = function(d) {
    return !Ss[cn(d)] && Pe(M, d);
  }, Es = function(d, k, R, H) {
    if (E && typeof c == "object" && typeof c.getAttributeType == "function" && !R)
      switch (c.getAttributeType(d, k)) {
        case "TrustedHTML":
          return F(H);
        case "TrustedScriptURL":
          return J(H);
      }
    return H;
  }, Ts = function(d, k, R, H) {
    try {
      R ? d.setAttributeNS(R, k, H) : d.setAttribute(k, H), Tn(d) ? Et(d) : Zi(t.removed);
    } catch {
      Rt(k, d);
    }
  }, Ni = function(d) {
    kt(ee.beforeSanitizeAttributes, d, null);
    const k = d.attributes;
    if (!k || Tn(d))
      return;
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let H = k.length;
    const ne = Ee(d.nodeName);
    for (; H--; ) {
      const ue = k[H], Le = ue.name, Ae = ue.namespaceURI, rt = ue.value, at = Ee(Le), ar = rt;
      let je = Le === "value" ? ar : cc(ar);
      if (R.attrName = at, R.attrValue = je, R.keepAttr = !0, R.forceKeepAttr = void 0, kt(ee.uponSanitizeAttribute, d, R), je = R.attrValue, Ct && (at === "id" || at === "name") && Ji(je, St) !== 0 && (Rt(Le, d), je = St + je), Lt && Pe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, je)) {
        Rt(Le, d);
        continue;
      }
      if (at === "attributename" && Qi(je, "href")) {
        Rt(Le, d);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          Rt(Le, d);
          continue;
        }
        if (!wn && Pe(Lc, je)) {
          Rt(Le, d);
          continue;
        }
        if (st && (je = En(je)), !Ri(ne, at, je)) {
          Rt(Le, d);
          continue;
        }
        je = Es(ne, at, Ae, je), je !== ar && Ts(d, Le, Ae, je);
      }
    }
    kt(ee.afterSanitizeAttributes, d, null);
  }, An = function(d) {
    let k = null;
    const R = vi(d);
    for (kt(ee.beforeSanitizeShadowDOM, d, null); k = R.nextNode(); )
      if (kt(ee.uponSanitizeShadowNode, k, null), Li(k), Ni(k), Bt(k.content) && An(k.content), (P ? P(k) : k.nodeType) === ht.element) {
        const ne = _(k);
        Bt(ne) && (or(ne), An(ne));
      }
    kt(ee.afterSanitizeShadowDOM, d, null);
  }, or = function(d) {
    const k = [{
      node: d,
      shadow: null
    }];
    for (; k.length > 0; ) {
      const R = k.pop();
      if (R.shadow) {
        An(R.shadow);
        continue;
      }
      const H = R.node, ue = (P ? P(H) : H.nodeType) === ht.element, Le = w(H);
      if (Le)
        for (let Ae = Le.length - 1; Ae >= 0; --Ae)
          k.push({
            node: Le[Ae],
            shadow: null
          });
      if (ue) {
        const Ae = O ? O(H) : null;
        if (typeof Ae == "string" && Ee(Ae) === "template") {
          const rt = H.content;
          Bt(rt) && k.push({
            node: rt,
            shadow: null
          });
        }
      }
      if (ue) {
        const Ae = _(H);
        Bt(Ae) && k.push({
          node: null,
          shadow: Ae
        }, {
          node: Ae,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(D) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, k = null, R = null, H = null, ne = null;
    if (Jn = !D, Jn && (D = "<!-->"), typeof D != "string" && !en(D) && (D = mc(D), typeof D != "string"))
      throw Dt("dirty is not a string, aborting");
    if (!t.isSupported)
      return D;
    T ? (I = L, N = Y) : rr(d), (ee.uponSanitizeElement.length > 0 || ee.uponSanitizeAttribute.length > 0) && (I = Ve(I)), ee.uponSanitizeAttribute.length > 0 && (N = Ve(N)), t.removed = [];
    const ue = ut && typeof D != "string" && en(D);
    if (ue) {
      const rt = O ? O(D) : D.nodeName;
      if (typeof rt == "string") {
        const at = Ee(rt);
        if (!I[at] || we[at])
          throw Dt("root node is forbidden and cannot be sanitized in-place");
      }
      if (Tn(D))
        throw Dt("root node is clobbered and cannot be sanitized in-place");
      try {
        or(D);
      } catch (at) {
        throw _i(D), at;
      }
    } else if (en(D))
      k = Ii("<!---->"), R = k.ownerDocument.importNode(D, !0), R.nodeType === ht.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? k = R : k.appendChild(R), or(R);
    else {
      if (!ae && !st && !xt && // eslint-disable-next-line unicorn/prefer-includes
      D.indexOf("<") === -1)
        return E && tt ? F(D) : D;
      if (k = Ii(D), !k)
        return ae ? null : tt ? G : "";
    }
    k && te && Et(k.firstChild);
    const Le = vi(ue ? D : k);
    try {
      for (; H = Le.nextNode(); )
        Li(H), Ni(H), Bt(H.content) && An(H.content);
    } catch (rt) {
      throw ue && _i(D), rt;
    }
    if (ue)
      return on(t.removed, (rt) => {
        rt.element && ks(rt.element);
      }), st && ir(D), D;
    if (ae) {
      if (st && ir(k), Fe)
        for (ne = ke.call(k.ownerDocument); k.firstChild; )
          ne.appendChild(k.firstChild);
      else
        ne = k;
      return (N.shadowroot || N.shadowrootmode) && (ne = g.call(r, ne, !0)), ne;
    }
    let Ae = xt ? k.outerHTML : k.innerHTML;
    return xt && I["!doctype"] && k.ownerDocument && k.ownerDocument.doctype && k.ownerDocument.doctype.name && Pe(Ac, k.ownerDocument.doctype.name) && (Ae = "<!DOCTYPE " + k.ownerDocument.doctype.name + `>
` + Ae), st && (Ae = En(Ae)), E && tt ? F(Ae) : Ae;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    rr(D), T = !0, L = I, Y = N;
  }, t.clearConfig = function() {
    zt = null, T = !1, L = null, Y = null, E = X, G = "";
  }, t.isValidAttribute = function(D, d, k) {
    zt || rr({});
    const R = Ee(D), H = Ee(d);
    return Ri(R, H, k);
  }, t.addHook = function(D, d) {
    typeof d == "function" && Re(ee, D) && $t(ee[D], d);
  }, t.removeHook = function(D, d) {
    if (Re(ee, D)) {
      if (d !== void 0) {
        const k = sc(ee[D], d);
        return k === -1 ? void 0 : uc(ee[D], k, 1)[0];
      }
      return Zi(ee[D]);
    }
  }, t.removeHooks = function(D) {
    Re(ee, D) && (ee[D] = []);
  }, t.removeAllHooks = function() {
    ee = so();
  }, t;
}
var Nc = Ya();
const Pc = (e) => {
  const t = Te(`mermaid-${Math.random().toString(36).slice(2)}`), [n, r] = fe(null), [i, o] = fe(null), a = Mc();
  return He(() => {
    let l = !1;
    return r(null), o(null), import("mermaid").then(({ default: s }) => (s.initialize({ startOnLoad: !1, theme: a === "dark" ? "dark" : "default" }), s.render(t.current, e))).then(({ svg: s }) => {
      if (!l) {
        const u = Nc.sanitize(s, {
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
}, Oc = () => {
  const [e, t] = fe(Ui);
  return He(() => {
    const n = Ui();
    if (n) {
      t(() => n);
      return;
    }
    Vs.then((r) => t(() => r));
  }, []), e;
}, Xa = gn("light"), Mc = () => yn(Xa), Ka = oe((e) => {
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
  } = e, { toastMessage: p, showToast: m, dismissToast: b } = Ku(), {
    messages: w,
    inputText: x,
    setInputText: _,
    attachments: A,
    addFiles: P,
    removeAttachment: O,
    history: E,
    currentConversationId: G,
    isLoading: X,
    isStreaming: K,
    isUploading: C,
    handleNewChat: z,
    handleSelectConversation: F,
    handleSend: J,
    handleStop: re,
    handleAnimationComplete: $
  } = Ws({
    welcomeMessage: i,
    supportProjectId: o,
    initialHistory: a,
    initialConversation: l,
    isInitLoading: s,
    showToast: m
  });
  return u ? /* @__PURE__ */ me($n, { children: [
    h && /* @__PURE__ */ S(
      "div",
      {
        className: "elitea-assistant-overlay",
        onClick: c
      }
    ),
    /* @__PURE__ */ me("div", { className: `elitea-assistant-window${h ? " elitea-assistant-window--expanded" : ""}`, children: [
      p && /* @__PURE__ */ S(
        xa,
        {
          message: p,
          onDismiss: b
        }
      ),
      /* @__PURE__ */ S(
        ka,
        {
          title: n,
          expanded: h,
          history: E,
          currentConversationId: G,
          disabled: X,
          onClose: f,
          onExpand: c,
          onNewChat: z,
          onSelectConversation: F
        }
      ),
      /* @__PURE__ */ S(
        wa,
        {
          avatar: t,
          messages: w,
          isLoading: X,
          onAnimationComplete: $
        }
      ),
      /* @__PURE__ */ S(
        _a,
        {
          placeholder: r,
          text: x,
          onTextChange: _,
          attachments: A,
          onAddFiles: P,
          onRemoveAttachment: O,
          onSend: J,
          onStop: re,
          expanded: h,
          disabled: X,
          isUploading: C,
          isStreaming: K
        }
      )
    ] })
  ] }) : null;
});
Ka.displayName = "ChatWindow";
const Za = oe((e) => {
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
        children: /* @__PURE__ */ S(Kt, {})
      }
    )
  ] });
});
Za.displayName = "PopupMessage";
const Qa = oe((e) => {
  const { message: t, onComplete: n } = e, { displayedText: r, skipAnimation: i } = Ju(t.content, !!t.isAnimating, n);
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
Qa.displayName = "AnimatedMessage";
const Ja = oe((e) => {
  const { message: t, avatar: n, onAnimationComplete: r } = e, i = t.role === "assistant" && !!t.statusMessage, o = t.role === "user" || t.content || !i && t.isStreaming;
  return /* @__PURE__ */ me("div", { className: `elitea-assistant-message-wrapper elitea-assistant-message-wrapper--${t.role}`, children: [
    /* @__PURE__ */ me("div", { className: `elitea-assistant-message-meta elitea-assistant-message-meta--${t.role}`, children: [
      t.role === "assistant" && /* @__PURE__ */ S("span", { className: "elitea-assistant-message-avatar elitea-assistant-message-avatar--assistant", children: /* @__PURE__ */ S(Yr, {}) }),
      /* @__PURE__ */ S("span", { className: "elitea-assistant-message-time", children: Bs(t.timestamp) }),
      t.role === "user" && /* @__PURE__ */ S("span", { className: "elitea-assistant-message-avatar elitea-assistant-message-avatar--user", children: n ? /* @__PURE__ */ S(
        "img",
        {
          src: n,
          alt: "User avatar",
          className: "elitea-assistant-avatar-img"
        }
      ) : /* @__PURE__ */ S(ma, {}) })
    ] }),
    i && /* @__PURE__ */ S(tl, { message: t.statusMessage }),
    o && /* @__PURE__ */ me(
      "div",
      {
        className: `elitea-assistant-message elitea-assistant-message--${t.role}${t.isError ? " elitea-assistant-message--error" : ""}`,
        children: [
          t.content ? t.role === "assistant" ? t.isAnimating ? /* @__PURE__ */ S(
            Qa,
            {
              message: t,
              onComplete: () => r == null ? void 0 : r(t.id)
            }
          ) : /* @__PURE__ */ S(bi, { content: t.content }) : t.content : t.isStreaming ? /* @__PURE__ */ S(nl, {}) : "",
          t.role === "assistant" && t.content && !t.isStreaming && !t.isAnimating && /* @__PURE__ */ S(ba, { text: t.content })
        ]
      }
    )
  ] });
});
Ja.displayName = "MessageItem";
const el = oe(() => /* @__PURE__ */ S("div", { className: "elitea-assistant-messages", children: Array.from({ length: 3 }).map((e, t) => /* @__PURE__ */ me(
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
el.displayName = "MessageListSkeleton";
const tl = oe((e) => {
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
tl.displayName = "StatusMessage";
const nl = oe(() => /* @__PURE__ */ me("span", { className: "elitea-assistant-typing-indicator", children: [
  /* @__PURE__ */ S("span", { className: "elitea-assistant-typing-dot" }),
  /* @__PURE__ */ S("span", { className: "elitea-assistant-typing-dot" }),
  /* @__PURE__ */ S("span", { className: "elitea-assistant-typing-dot" })
] }));
nl.displayName = "TypingIndicator";
function Fc(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const zc = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Bc = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Hc = {};
function uo(e, t) {
  return (Hc.jsx ? Bc : zc).test(e);
}
const Uc = /[ \t\n\f\r]/g;
function $c(e) {
  return typeof e == "object" ? e.type === "text" ? co(e.value) : !1 : co(e);
}
function co(e) {
  return e.replace(Uc, "") === "";
}
class bn {
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
bn.prototype.normal = {};
bn.prototype.property = {};
bn.prototype.space = void 0;
function rl(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new bn(n, r, t);
}
function Mr(e) {
  return e.toLowerCase();
}
class Xe {
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
Xe.prototype.attribute = "";
Xe.prototype.booleanish = !1;
Xe.prototype.boolean = !1;
Xe.prototype.commaOrSpaceSeparated = !1;
Xe.prototype.commaSeparated = !1;
Xe.prototype.defined = !1;
Xe.prototype.mustUseProperty = !1;
Xe.prototype.number = !1;
Xe.prototype.overloadedBoolean = !1;
Xe.prototype.property = "";
Xe.prototype.spaceSeparated = !1;
Xe.prototype.space = void 0;
let jc = 0;
const Q = Mt(), _e = Mt(), Fr = Mt(), v = Mt(), be = Mt(), Yt = Mt(), Ze = Mt();
function Mt() {
  return 2 ** ++jc;
}
const zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Q,
  booleanish: _e,
  commaOrSpaceSeparated: Ze,
  commaSeparated: Yt,
  number: v,
  overloadedBoolean: Fr,
  spaceSeparated: be
}, Symbol.toStringTag, { value: "Module" })), gr = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(zr)
);
class Jr extends Xe {
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
    if (super(t, n), fo(this, "space", i), typeof r == "number")
      for (; ++o < gr.length; ) {
        const a = gr[o];
        fo(this, gr[o], (r & zr[a]) === zr[a]);
      }
  }
}
Jr.prototype.defined = !0;
function fo(e, t, n) {
  n && (e[t] = n);
}
function Zt(e) {
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
  return new bn(t, n, e.space);
}
const il = Zt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: _e,
    ariaAutoComplete: null,
    ariaBusy: _e,
    ariaChecked: _e,
    ariaColCount: v,
    ariaColIndex: v,
    ariaColSpan: v,
    ariaControls: be,
    ariaCurrent: null,
    ariaDescribedBy: be,
    ariaDetails: null,
    ariaDisabled: _e,
    ariaDropEffect: be,
    ariaErrorMessage: null,
    ariaExpanded: _e,
    ariaFlowTo: be,
    ariaGrabbed: _e,
    ariaHasPopup: null,
    ariaHidden: _e,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: be,
    ariaLevel: v,
    ariaLive: null,
    ariaModal: _e,
    ariaMultiLine: _e,
    ariaMultiSelectable: _e,
    ariaOrientation: null,
    ariaOwns: be,
    ariaPlaceholder: null,
    ariaPosInSet: v,
    ariaPressed: _e,
    ariaReadOnly: _e,
    ariaRelevant: null,
    ariaRequired: _e,
    ariaRoleDescription: be,
    ariaRowCount: v,
    ariaRowIndex: v,
    ariaRowSpan: v,
    ariaSelected: _e,
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
function ol(e, t) {
  return t in e ? e[t] : t;
}
function al(e, t) {
  return ol(e, t.toLowerCase());
}
const Vc = Zt({
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
    accept: Yt,
    acceptCharset: be,
    accessKey: be,
    action: null,
    allow: null,
    allowFullScreen: Q,
    allowPaymentRequest: Q,
    allowUserMedia: Q,
    alt: null,
    as: null,
    async: Q,
    autoCapitalize: null,
    autoComplete: be,
    autoFocus: Q,
    autoPlay: Q,
    blocking: be,
    capture: null,
    charSet: null,
    checked: Q,
    cite: null,
    className: be,
    cols: v,
    colSpan: null,
    content: null,
    contentEditable: _e,
    controls: Q,
    controlsList: be,
    coords: v | Yt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Q,
    defer: Q,
    dir: null,
    dirName: null,
    disabled: Q,
    download: Fr,
    draggable: _e,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: Q,
    formTarget: null,
    headers: be,
    height: v,
    hidden: Fr,
    high: v,
    href: null,
    hrefLang: null,
    htmlFor: be,
    httpEquiv: be,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: Q,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Q,
    itemId: null,
    itemProp: be,
    itemRef: be,
    itemScope: Q,
    itemType: be,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Q,
    low: v,
    manifest: null,
    max: null,
    maxLength: v,
    media: null,
    method: null,
    min: null,
    minLength: v,
    multiple: Q,
    muted: Q,
    name: null,
    nonce: null,
    noModule: Q,
    noValidate: Q,
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
    open: Q,
    optimum: v,
    pattern: null,
    ping: be,
    placeholder: null,
    playsInline: Q,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Q,
    referrerPolicy: null,
    rel: be,
    required: Q,
    reversed: Q,
    rows: v,
    rowSpan: v,
    sandbox: be,
    scope: null,
    scoped: Q,
    seamless: Q,
    selected: Q,
    shadowRootClonable: Q,
    shadowRootDelegatesFocus: Q,
    shadowRootMode: null,
    shape: null,
    size: v,
    sizes: null,
    slot: null,
    span: v,
    spellCheck: _e,
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
    typeMustMatch: Q,
    useMap: null,
    value: _e,
    width: v,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: be,
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
    compact: Q,
    // Lists. Use CSS to reduce space between items instead
    declare: Q,
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
    noResize: Q,
    // `<frame>`
    noHref: Q,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: Q,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: Q,
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
    scrolling: _e,
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
    disablePictureInPicture: Q,
    disableRemotePlayback: Q,
    prefix: null,
    property: null,
    results: v,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: al
}), Gc = Zt({
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
    about: Ze,
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
    className: be,
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
    download: Q,
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
    g1: Yt,
    g2: Yt,
    glyphName: Yt,
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
    kernelMatrix: Ze,
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
    ping: be,
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
    property: Ze,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Ze,
    rev: Ze,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Ze,
    requiredFeatures: Ze,
    requiredFonts: Ze,
    requiredFormats: Ze,
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
    strokeDashArray: Ze,
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
    systemLanguage: Ze,
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
    typeOf: Ze,
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
  transform: ol
}), ll = Zt({
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
}), sl = Zt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: al
}), ul = Zt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Wc = {
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
}, qc = /[A-Z]/g, po = /-[a-z]/g, Yc = /^data[-\w.:]+$/i;
function Xc(e, t) {
  const n = Mr(t);
  let r = t, i = Xe;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Yc.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(po, Zc);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!po.test(o)) {
        let a = o.replace(qc, Kc);
        a.charAt(0) !== "-" && (a = "-" + a), t = "data" + a;
      }
    }
    i = Jr;
  }
  return new i(r, t);
}
function Kc(e) {
  return "-" + e.toLowerCase();
}
function Zc(e) {
  return e.charAt(1).toUpperCase();
}
const Qc = rl([il, Vc, ll, sl, ul], "html"), ei = rl([il, Gc, ll, sl, ul], "svg");
function Jc(e) {
  return e.join(" ").trim();
}
var Fn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ti = {}, ho = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, ef = /\n/g, tf = /^\s*/, nf = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, rf = /^:\s*/, of = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, af = /^[;\s]*/, lf = /^\s+|\s+$/g, sf = `
`, mo = "/", go = "*", Pt = "", uf = "comment", cf = "declaration";
function ff(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(m) {
    var b = m.match(ef);
    b && (n += b.length);
    var w = m.lastIndexOf(sf);
    r = ~w ? m.length - w : r + m.length;
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
      var w = b[0];
      return i(w), e = e.slice(w.length), b;
    }
  }
  function u() {
    s(tf);
  }
  function f(m) {
    var b;
    for (m = m || []; b = c(); )
      b !== !1 && m.push(b);
    return m;
  }
  function c() {
    var m = o();
    if (!(mo != e.charAt(0) || go != e.charAt(1))) {
      for (var b = 2; Pt != e.charAt(b) && (go != e.charAt(b) || mo != e.charAt(b + 1)); )
        ++b;
      if (b += 2, Pt === e.charAt(b - 1))
        return l("End of comment missing");
      var w = e.slice(2, b - 2);
      return r += 2, i(w), e = e.slice(b), r += 2, m({
        type: uf,
        comment: w
      });
    }
  }
  function h() {
    var m = o(), b = s(nf);
    if (b) {
      if (c(), !s(rf)) return l("property missing ':'");
      var w = s(of), x = m({
        type: cf,
        property: yo(b[0].replace(ho, Pt)),
        value: w ? yo(w[0].replace(ho, Pt)) : Pt
      });
      return s(af), x;
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
function yo(e) {
  return e ? e.replace(lf, Pt) : Pt;
}
var pf = ff, hf = Fn && Fn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ti, "__esModule", { value: !0 });
ti.default = mf;
const df = hf(pf);
function mf(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = (0, df.default)(e), i = typeof t == "function";
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
var gf = /^--[a-zA-Z0-9_-]+$/, yf = /-([a-z])/g, bf = /^[^-]+$/, xf = /^-(webkit|moz|ms|o|khtml)-/, kf = /^-(ms)-/, wf = function(e) {
  return !e || bf.test(e) || gf.test(e);
}, Cf = function(e, t) {
  return t.toUpperCase();
}, bo = function(e, t) {
  return "".concat(t, "-");
}, Sf = function(e, t) {
  return t === void 0 && (t = {}), wf(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(kf, bo) : e = e.replace(xf, bo), e.replace(yf, Cf));
};
Gn.camelCase = Sf;
var Ef = Fn && Fn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, Tf = Ef(ti), Af = Gn;
function Br(e, t) {
  var n = {};
  return !e || typeof e != "string" || (0, Tf.default)(e, function(r, i) {
    r && i && (n[(0, Af.camelCase)(r, t)] = i);
  }), n;
}
Br.default = Br;
var _f = Br;
const If = /* @__PURE__ */ cl(_f), fl = pl("end"), ni = pl("start");
function pl(e) {
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
function vf(e) {
  const t = ni(e), n = fl(e);
  if (t && n)
    return { start: t, end: n };
}
function fn(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? xo(e.position) : "start" in e || "end" in e ? xo(e) : "line" in e || "column" in e ? Hr(e) : "";
}
function Hr(e) {
  return ko(e && e.line) + ":" + ko(e && e.column);
}
function xo(e) {
  return Hr(e && e.start) + "-" + Hr(e && e.end);
}
function ko(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ue extends Error {
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
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = l ? l.line : void 0, this.name = fn(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = a && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
Ue.prototype.file = "";
Ue.prototype.name = "";
Ue.prototype.reason = "";
Ue.prototype.message = "";
Ue.prototype.stack = "";
Ue.prototype.column = void 0;
Ue.prototype.line = void 0;
Ue.prototype.ancestors = void 0;
Ue.prototype.cause = void 0;
Ue.prototype.fatal = void 0;
Ue.prototype.place = void 0;
Ue.prototype.ruleId = void 0;
Ue.prototype.source = void 0;
const ri = {}.hasOwnProperty, Lf = /* @__PURE__ */ new Map(), Rf = /[A-Z]/g, Df = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Nf = /* @__PURE__ */ new Set(["td", "th"]), hl = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Pf(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = $f(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Uf(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? ei : Qc,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = dl(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function dl(e, t, n) {
  if (t.type === "element")
    return Of(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Mf(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return zf(e, t, n);
  if (t.type === "mdxjsEsm")
    return Ff(e, t);
  if (t.type === "root")
    return Bf(e, t, n);
  if (t.type === "text")
    return Hf(e, t);
}
function Of(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = ei, e.schema = i), e.ancestors.push(t);
  const o = gl(e, t.tagName, !1), a = jf(e, t);
  let l = oi(e, t);
  return Df.has(t.tagName) && (l = l.filter(function(s) {
    return typeof s == "string" ? !$c(s) : !0;
  })), ml(e, a, o, t), ii(a, l), e.ancestors.pop(), e.schema = r, e.create(t, o, a, n);
}
function Mf(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  dn(e, t.position);
}
function Ff(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  dn(e, t.position);
}
function zf(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = ei, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : gl(e, t.name, !0), a = Vf(e, t), l = oi(e, t);
  return ml(e, a, o, t), ii(a, l), e.ancestors.pop(), e.schema = r, e.create(t, o, a, n);
}
function Bf(e, t, n) {
  const r = {};
  return ii(r, oi(e, t)), e.create(t, e.Fragment, r, n);
}
function Hf(e, t) {
  return t.value;
}
function ml(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function ii(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function Uf(e, t, n) {
  return r;
  function r(i, o, a, l) {
    const u = Array.isArray(a.children) ? n : t;
    return l ? u(o, a, l) : u(o, a);
  }
}
function $f(e, t) {
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
function jf(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && ri.call(t.properties, i)) {
      const o = Gf(e, i, t.properties[i]);
      if (o) {
        const [a, l] = o;
        e.tableCellAlignToStyle && a === "align" && typeof l == "string" && Nf.has(t.tagName) ? r = l : n[a] = l;
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
function Vf(e, t) {
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
        dn(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const l = r.value.data.estree.body[0];
          l.type, o = e.evaluater.evaluateExpression(l.expression);
        } else
          dn(e, t.position);
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
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Lf;
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
    const l = dl(e, o, a);
    l !== void 0 && n.push(l);
  }
  return n;
}
function Gf(e, t, n) {
  const r = Xc(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Fc(n) : Jc(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Wf(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = qf(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Wc[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Wf(e, t) {
  try {
    return If(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new Ue("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = hl + "#cannot-parse-style-attribute", i;
  }
}
function gl(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, a;
    for (; ++o < i.length; ) {
      const l = uo(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
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
    r = uo(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return ri.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  dn(e);
}
function dn(e, t) {
  const n = new Ue(
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
function qf(e) {
  const t = {};
  let n;
  for (n in e)
    ri.call(e, n) && (t[Yf(n)] = e[n]);
  return t;
}
function Yf(e) {
  let t = e.replace(Rf, Xf);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Xf(e) {
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
}, Kf = {};
function ai(e, t) {
  const n = Kf, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return yl(e, r, i);
}
function yl(e, t, n) {
  if (Zf(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return wo(e.children, t, n);
  }
  return Array.isArray(e) ? wo(e, t, n) : "";
}
function wo(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = yl(e[i], t, n);
  return r.join("");
}
function Zf(e) {
  return !!(e && typeof e == "object");
}
const Co = document.createElement("i");
function li(e) {
  const t = "&" + e + ";";
  Co.innerHTML = t;
  const n = Co.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Qe(e, t, n, r) {
  const i = e.length;
  let o = 0, a;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    a = Array.from(r), a.unshift(t, n), e.splice(...a);
  else
    for (n && e.splice(t, n); o < r.length; )
      a = r.slice(o, o + 1e4), a.unshift(t, 0), e.splice(...a), o += 1e4, t += 1e4;
}
function it(e, t) {
  return e.length > 0 ? (Qe(e, e.length, 0, t), e) : t;
}
const So = {}.hasOwnProperty;
function bl(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Qf(t, e[n]);
  return t;
}
function Qf(e, t) {
  let n;
  for (n in t) {
    const i = (So.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let a;
    if (o)
      for (a in o) {
        So.call(i, a) || (i[a] = []);
        const l = o[a];
        Jf(
          // @ts-expect-error Looks like a list.
          i[a],
          Array.isArray(l) ? l : l ? [l] : []
        );
      }
  }
}
function Jf(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Qe(e, 0, 0, r);
}
function xl(e, t) {
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
function lt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Ge = vt(/[A-Za-z]/), Be = vt(/[\dA-Za-z]/), ep = vt(/[#-'*+\--9=?A-Z^-~]/);
function zn(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Ur = vt(/\d/), tp = vt(/[\dA-Fa-f]/), np = vt(/[!-/:-@[-`{-~]/);
function V(e) {
  return e !== null && e < -2;
}
function ye(e) {
  return e !== null && (e < 0 || e === 32);
}
function ie(e) {
  return e === -2 || e === -1 || e === 32;
}
const Wn = vt(new RegExp("\\p{P}|\\p{S}", "u")), Ot = vt(/\s/);
function vt(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Qt(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let a = "";
    if (o === 37 && Be(e.charCodeAt(n + 1)) && Be(e.charCodeAt(n + 2)))
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
function se(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return a;
  function a(s) {
    return ie(s) ? (e.enter(n), l(s)) : t(s);
  }
  function l(s) {
    return ie(s) && o++ < i ? (e.consume(s), l) : (e.exit(n), t(s));
  }
}
const rp = {
  tokenize: ip
};
function ip(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), se(e, t, "linePrefix");
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
    return V(l) ? (e.consume(l), e.exit("chunkText"), o) : (e.consume(l), a);
  }
}
const op = {
  tokenize: ap
}, Eo = {
  tokenize: lp
};
function ap(e) {
  const t = this, n = [];
  let r = 0, i, o, a;
  return l;
  function l(A) {
    if (r < n.length) {
      const P = n[r];
      return t.containerState = P[1], e.attempt(P[0].continuation, s, u)(A);
    }
    return u(A);
  }
  function s(A) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && _();
      const P = t.events.length;
      let O = P, E;
      for (; O--; )
        if (t.events[O][0] === "exit" && t.events[O][1].type === "chunkFlow") {
          E = t.events[O][1].end;
          break;
        }
      x(r);
      let G = P;
      for (; G < t.events.length; )
        t.events[G][1].end = {
          ...E
        }, G++;
      return Qe(t.events, O + 1, 0, t.events.slice(P)), t.events.length = G, u(A);
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
    return i && _(), x(r), h(A);
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
      i && _(), x(0), e.consume(A);
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
      w(e.exit("chunkFlow"), !0), x(0), e.consume(A);
      return;
    }
    return V(A) ? (e.consume(A), w(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, l) : (e.consume(A), b);
  }
  function w(A, P) {
    const O = t.sliceStream(A);
    if (P && O.push(null), A.previous = o, o && (o.next = A), o = A, i.defineSkip(A.start), i.write(O), t.parser.lazy[A.start.line]) {
      let E = i.events.length;
      for (; E--; )
        if (
          // The token starts before the line ending…
          i.events[E][1].start.offset < a && // …and either is not ended yet…
          (!i.events[E][1].end || // …or ends after it.
          i.events[E][1].end.offset > a)
        )
          return;
      const G = t.events.length;
      let X = G, K, C;
      for (; X--; )
        if (t.events[X][0] === "exit" && t.events[X][1].type === "chunkFlow") {
          if (K) {
            C = t.events[X][1].end;
            break;
          }
          K = !0;
        }
      for (x(r), E = G; E < t.events.length; )
        t.events[E][1].end = {
          ...C
        }, E++;
      Qe(t.events, X + 1, 0, t.events.slice(G)), t.events.length = E;
    }
  }
  function x(A) {
    let P = n.length;
    for (; P-- > A; ) {
      const O = n[P];
      t.containerState = O[1], O[0].exit.call(t, e);
    }
    n.length = A;
  }
  function _() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function lp(e, t, n) {
  return se(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Xt(e) {
  if (e === null || ye(e) || Ot(e))
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
  resolveAll: sp,
  tokenize: up
};
function sp(e, t) {
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
          To(c, -s), To(h, s), a = {
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
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = it(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = it(u, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["enter", o, t]]), u = it(u, qn(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = it(u, [["exit", o, t], ["enter", l, t], ["exit", l, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (f = 2, u = it(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : f = 0, Qe(e, r - 1, n - r + 3, u), n = r + u.length - f - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function up(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Xt(r);
  let o;
  return a;
  function a(s) {
    return o = s, e.enter("attentionSequence"), l(s);
  }
  function l(s) {
    if (s === o)
      return e.consume(s), l;
    const u = e.exit("attentionSequence"), f = Xt(s), c = !f || f === 2 && i || n.includes(s), h = !i || i === 2 && f || n.includes(r);
    return u._open = !!(o === 42 ? c : c && (i || !h)), u._close = !!(o === 42 ? h : h && (f || !c)), t(s);
  }
}
function To(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const cp = {
  name: "autolink",
  tokenize: fp
};
function fp(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(p) {
    return Ge(p) ? (e.consume(p), a) : p === 64 ? n(p) : u(p);
  }
  function a(p) {
    return p === 43 || p === 45 || p === 46 || Be(p) ? (r = 1, l(p)) : u(p);
  }
  function l(p) {
    return p === 58 ? (e.consume(p), r = 0, s) : (p === 43 || p === 45 || p === 46 || Be(p)) && r++ < 32 ? (e.consume(p), l) : (r = 0, u(p));
  }
  function s(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || zn(p) ? n(p) : (e.consume(p), s);
  }
  function u(p) {
    return p === 64 ? (e.consume(p), f) : ep(p) ? (e.consume(p), u) : n(p);
  }
  function f(p) {
    return Be(p) ? c(p) : n(p);
  }
  function c(p) {
    return p === 46 ? (e.consume(p), r = 0, f) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(p);
  }
  function h(p) {
    if ((p === 45 || Be(p)) && r++ < 63) {
      const m = p === 45 ? h : c;
      return e.consume(p), m;
    }
    return n(p);
  }
}
const xn = {
  partial: !0,
  tokenize: pp
};
function pp(e, t, n) {
  return r;
  function r(o) {
    return ie(o) ? se(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || V(o) ? t(o) : n(o);
  }
}
const kl = {
  continuation: {
    tokenize: dp
  },
  exit: mp,
  name: "blockQuote",
  tokenize: hp
};
function hp(e, t, n) {
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
    return ie(a) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(a));
  }
}
function dp(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return ie(a) ? se(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : o(a);
  }
  function o(a) {
    return e.attempt(kl, t, n)(a);
  }
}
function mp(e) {
  e.exit("blockQuote");
}
const wl = {
  name: "characterEscape",
  tokenize: gp
};
function gp(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return np(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const Cl = {
  name: "characterReference",
  tokenize: yp
};
function yp(e, t, n) {
  const r = this;
  let i = 0, o, a;
  return l;
  function l(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), s;
  }
  function s(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, a = Be, f(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, a = tp, f) : (e.enter("characterReferenceValue"), o = 7, a = Ur, f(c));
  }
  function f(c) {
    if (c === 59 && i) {
      const h = e.exit("characterReferenceValue");
      return a === Be && !li(r.sliceSerialize(h)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return a(c) && i++ < o ? (e.consume(c), f) : n(c);
  }
}
const Ao = {
  partial: !0,
  tokenize: xp
}, _o = {
  concrete: !0,
  name: "codeFenced",
  tokenize: bp
};
function bp(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: O
  };
  let o = 0, a = 0, l;
  return s;
  function s(E) {
    return u(E);
  }
  function u(E) {
    const G = r.events[r.events.length - 1];
    return o = G && G[1].type === "linePrefix" ? G[2].sliceSerialize(G[1], !0).length : 0, l = E, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), f(E);
  }
  function f(E) {
    return E === l ? (a++, e.consume(E), f) : a < 3 ? n(E) : (e.exit("codeFencedFenceSequence"), ie(E) ? se(e, c, "whitespace")(E) : c(E));
  }
  function c(E) {
    return E === null || V(E) ? (e.exit("codeFencedFence"), r.interrupt ? t(E) : e.check(Ao, b, P)(E)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), h(E));
  }
  function h(E) {
    return E === null || V(E) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(E)) : ie(E) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), se(e, p, "whitespace")(E)) : E === 96 && E === l ? n(E) : (e.consume(E), h);
  }
  function p(E) {
    return E === null || V(E) ? c(E) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(E));
  }
  function m(E) {
    return E === null || V(E) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(E)) : E === 96 && E === l ? n(E) : (e.consume(E), m);
  }
  function b(E) {
    return e.attempt(i, P, w)(E);
  }
  function w(E) {
    return e.enter("lineEnding"), e.consume(E), e.exit("lineEnding"), x;
  }
  function x(E) {
    return o > 0 && ie(E) ? se(e, _, "linePrefix", o + 1)(E) : _(E);
  }
  function _(E) {
    return E === null || V(E) ? e.check(Ao, b, P)(E) : (e.enter("codeFlowValue"), A(E));
  }
  function A(E) {
    return E === null || V(E) ? (e.exit("codeFlowValue"), _(E)) : (e.consume(E), A);
  }
  function P(E) {
    return e.exit("codeFenced"), t(E);
  }
  function O(E, G, X) {
    let K = 0;
    return C;
    function C($) {
      return E.enter("lineEnding"), E.consume($), E.exit("lineEnding"), z;
    }
    function z($) {
      return E.enter("codeFencedFence"), ie($) ? se(E, F, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)($) : F($);
    }
    function F($) {
      return $ === l ? (E.enter("codeFencedFenceSequence"), J($)) : X($);
    }
    function J($) {
      return $ === l ? (K++, E.consume($), J) : K >= a ? (E.exit("codeFencedFenceSequence"), ie($) ? se(E, re, "whitespace")($) : re($)) : X($);
    }
    function re($) {
      return $ === null || V($) ? (E.exit("codeFencedFence"), G($)) : X($);
    }
  }
}
function xp(e, t, n) {
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
  tokenize: wp
}, kp = {
  partial: !0,
  tokenize: Cp
};
function wp(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), se(e, o, "linePrefix", 5)(u);
  }
  function o(u) {
    const f = r.events[r.events.length - 1];
    return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], !0).length >= 4 ? a(u) : n(u);
  }
  function a(u) {
    return u === null ? s(u) : V(u) ? e.attempt(kp, a, s)(u) : (e.enter("codeFlowValue"), l(u));
  }
  function l(u) {
    return u === null || V(u) ? (e.exit("codeFlowValue"), a(u)) : (e.consume(u), l);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function Cp(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return r.parser.lazy[r.now().line] ? n(a) : V(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i) : se(e, o, "linePrefix", 5)(a);
  }
  function o(a) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : V(a) ? i(a) : n(a);
  }
}
const Sp = {
  name: "codeText",
  previous: Tp,
  resolve: Ep,
  tokenize: Ap
};
function Ep(e) {
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
function Tp(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Ap(e, t, n) {
  let r = 0, i, o;
  return a;
  function a(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), l(c);
  }
  function l(c) {
    return c === 96 ? (e.consume(c), r++, l) : (e.exit("codeTextSequence"), s(c));
  }
  function s(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), s) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, f(c)) : V(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || V(c) ? (e.exit("codeTextData"), s(c)) : (e.consume(c), u);
  }
  function f(c) {
    return c === 96 ? (e.consume(c), i++, f) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (o.type = "codeTextData", u(c));
  }
}
class _p {
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
    return r && sn(this.left, r), o.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), sn(this.left, t);
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
    this.setCursor(0), sn(this.right, t.reverse());
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
        sn(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        sn(this.left, n.reverse());
      }
  }
}
function sn(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function Sl(e) {
  const t = {};
  let n = -1, r, i, o, a, l, s, u;
  const f = new _p(e);
  for (; ++n < f.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = f.get(n), n && r[1].type === "chunkFlow" && f.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content"))
      for (; ++o < s.length && s[o][1].type !== "content"; )
        s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Ip(f, n)), n = t[n], u = !0);
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
  return Qe(e, 0, Number.POSITIVE_INFINITY, f.slice(0)), !u;
}
function Ip(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [];
  let a = n._tokenizer;
  a || (a = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
  const l = a.events, s = [], u = {};
  let f, c, h = -1, p = n, m = 0, b = 0;
  const w = [b];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; )
      ;
    o.push(i), p._tokenizer || (f = r.sliceStream(p), p.next || f.push(null), c && a.defineSkip(p.start), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(f), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), c = p, p = p.next;
  }
  for (p = n; ++h < l.length; )
    // Find a void token that includes a break.
    l[h][0] === "exit" && l[h - 1][0] === "enter" && l[h][1].type === l[h - 1][1].type && l[h][1].start.line !== l[h][1].end.line && (b = h + 1, w.push(b), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (a.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : w.pop(), h = w.length; h--; ) {
    const x = l.slice(w[h], w[h + 1]), _ = o.pop();
    s.push([_, _ + x.length - 1]), e.splice(_, 2, x);
  }
  for (s.reverse(), h = -1; ++h < s.length; )
    u[m + s[h][0]] = m + s[h][1], m += s[h][1] - s[h][0] - 1;
  return u;
}
const vp = {
  resolve: Rp,
  tokenize: Dp
}, Lp = {
  partial: !0,
  tokenize: Np
};
function Rp(e) {
  return Sl(e), e;
}
function Dp(e, t) {
  let n;
  return r;
  function r(l) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(l);
  }
  function i(l) {
    return l === null ? o(l) : V(l) ? e.check(Lp, a, o)(l) : (e.consume(l), i);
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
function Np(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), se(e, o, "linePrefix");
  }
  function o(a) {
    if (a === null || V(a))
      return n(a);
    const l = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : e.interrupt(r.parser.constructs.flow, n, t)(a);
  }
}
function El(e, t, n, r, i, o, a, l, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(x) {
    return x === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(x), e.exit(o), h) : x === null || x === 32 || x === 41 || zn(x) ? n(x) : (e.enter(r), e.enter(a), e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), b(x));
  }
  function h(x) {
    return x === 62 ? (e.enter(o), e.consume(x), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), p(x));
  }
  function p(x) {
    return x === 62 ? (e.exit("chunkString"), e.exit(l), h(x)) : x === null || x === 60 || V(x) ? n(x) : (e.consume(x), x === 92 ? m : p);
  }
  function m(x) {
    return x === 60 || x === 62 || x === 92 ? (e.consume(x), p) : p(x);
  }
  function b(x) {
    return !f && (x === null || x === 41 || ye(x)) ? (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(r), t(x)) : f < u && x === 40 ? (e.consume(x), f++, b) : x === 41 ? (e.consume(x), f--, b) : x === null || x === 32 || x === 40 || zn(x) ? n(x) : (e.consume(x), x === 92 ? w : b);
  }
  function w(x) {
    return x === 40 || x === 41 || x === 92 ? (e.consume(x), b) : b(x);
  }
}
function Tl(e, t, n, r, i, o) {
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
    p === 94 && !l && "_hiddenFootnoteSupport" in a.parser.constructs ? n(p) : p === 93 ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : V(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), f) : (e.enter("chunkString", {
      contentType: "string"
    }), c(p));
  }
  function c(p) {
    return p === null || p === 91 || p === 93 || V(p) || l++ > 999 ? (e.exit("chunkString"), f(p)) : (e.consume(p), s || (s = !ie(p)), p === 92 ? h : c);
  }
  function h(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), l++, c) : c(p);
  }
}
function Al(e, t, n, r, i, o) {
  let a;
  return l;
  function l(h) {
    return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), a = h === 40 ? 41 : h, s) : n(h);
  }
  function s(h) {
    return h === a ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(o), u(h));
  }
  function u(h) {
    return h === a ? (e.exit(o), s(a)) : h === null ? n(h) : V(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), se(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), f(h));
  }
  function f(h) {
    return h === a || h === null || V(h) ? (e.exit("chunkString"), u(h)) : (e.consume(h), h === 92 ? c : f);
  }
  function c(h) {
    return h === a || h === 92 ? (e.consume(h), f) : f(h);
  }
}
function pn(e, t) {
  let n;
  return r;
  function r(i) {
    return V(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : ie(i) ? se(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const Pp = {
  name: "definition",
  tokenize: Mp
}, Op = {
  partial: !0,
  tokenize: Fp
};
function Mp(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter("definition"), a(p);
  }
  function a(p) {
    return Tl.call(
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
    return i = lt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), s) : n(p);
  }
  function s(p) {
    return ye(p) ? pn(e, u)(p) : u(p);
  }
  function u(p) {
    return El(
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
    return e.attempt(Op, c, c)(p);
  }
  function c(p) {
    return ie(p) ? se(e, h, "whitespace")(p) : h(p);
  }
  function h(p) {
    return p === null || V(p) ? (e.exit("definition"), r.parser.defined.push(i), t(p)) : n(p);
  }
}
function Fp(e, t, n) {
  return r;
  function r(l) {
    return ye(l) ? pn(e, i)(l) : n(l);
  }
  function i(l) {
    return Al(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(l);
  }
  function o(l) {
    return ie(l) ? se(e, a, "whitespace")(l) : a(l);
  }
  function a(l) {
    return l === null || V(l) ? t(l) : n(l);
  }
}
const zp = {
  name: "hardBreakEscape",
  tokenize: Bp
};
function Bp(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return V(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const Hp = {
  name: "headingAtx",
  resolve: Up,
  tokenize: $p
};
function Up(e, t) {
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
  }, Qe(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function $p(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("atxHeading"), o(f);
  }
  function o(f) {
    return e.enter("atxHeadingSequence"), a(f);
  }
  function a(f) {
    return f === 35 && r++ < 6 ? (e.consume(f), a) : f === null || ye(f) ? (e.exit("atxHeadingSequence"), l(f)) : n(f);
  }
  function l(f) {
    return f === 35 ? (e.enter("atxHeadingSequence"), s(f)) : f === null || V(f) ? (e.exit("atxHeading"), t(f)) : ie(f) ? se(e, l, "whitespace")(f) : (e.enter("atxHeadingText"), u(f));
  }
  function s(f) {
    return f === 35 ? (e.consume(f), s) : (e.exit("atxHeadingSequence"), l(f));
  }
  function u(f) {
    return f === null || f === 35 || ye(f) ? (e.exit("atxHeadingText"), l(f)) : (e.consume(f), u);
  }
}
const jp = [
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
], Io = ["pre", "script", "style", "textarea"], Vp = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: qp,
  tokenize: Yp
}, Gp = {
  partial: !0,
  tokenize: Kp
}, Wp = {
  partial: !0,
  tokenize: Xp
};
function qp(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Yp(e, t, n) {
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
    return y === 33 ? (e.consume(y), h) : y === 47 ? (e.consume(y), o = !0, b) : y === 63 ? (e.consume(y), i = 3, r.interrupt ? t : g) : Ge(y) ? (e.consume(y), a = String.fromCharCode(y), w) : n(y);
  }
  function h(y) {
    return y === 45 ? (e.consume(y), i = 2, p) : y === 91 ? (e.consume(y), i = 5, l = 0, m) : Ge(y) ? (e.consume(y), i = 4, r.interrupt ? t : g) : n(y);
  }
  function p(y) {
    return y === 45 ? (e.consume(y), r.interrupt ? t : g) : n(y);
  }
  function m(y) {
    const Se = "CDATA[";
    return y === Se.charCodeAt(l++) ? (e.consume(y), l === Se.length ? r.interrupt ? t : F : m) : n(y);
  }
  function b(y) {
    return Ge(y) ? (e.consume(y), a = String.fromCharCode(y), w) : n(y);
  }
  function w(y) {
    if (y === null || y === 47 || y === 62 || ye(y)) {
      const Se = y === 47, We = a.toLowerCase();
      return !Se && !o && Io.includes(We) ? (i = 1, r.interrupt ? t(y) : F(y)) : jp.includes(a.toLowerCase()) ? (i = 6, Se ? (e.consume(y), x) : r.interrupt ? t(y) : F(y)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(y) : o ? _(y) : A(y));
    }
    return y === 45 || Be(y) ? (e.consume(y), a += String.fromCharCode(y), w) : n(y);
  }
  function x(y) {
    return y === 62 ? (e.consume(y), r.interrupt ? t : F) : n(y);
  }
  function _(y) {
    return ie(y) ? (e.consume(y), _) : C(y);
  }
  function A(y) {
    return y === 47 ? (e.consume(y), C) : y === 58 || y === 95 || Ge(y) ? (e.consume(y), P) : ie(y) ? (e.consume(y), A) : C(y);
  }
  function P(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || Be(y) ? (e.consume(y), P) : O(y);
  }
  function O(y) {
    return y === 61 ? (e.consume(y), E) : ie(y) ? (e.consume(y), O) : A(y);
  }
  function E(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? n(y) : y === 34 || y === 39 ? (e.consume(y), s = y, G) : ie(y) ? (e.consume(y), E) : X(y);
  }
  function G(y) {
    return y === s ? (e.consume(y), s = null, K) : y === null || V(y) ? n(y) : (e.consume(y), G);
  }
  function X(y) {
    return y === null || y === 34 || y === 39 || y === 47 || y === 60 || y === 61 || y === 62 || y === 96 || ye(y) ? O(y) : (e.consume(y), X);
  }
  function K(y) {
    return y === 47 || y === 62 || ie(y) ? A(y) : n(y);
  }
  function C(y) {
    return y === 62 ? (e.consume(y), z) : n(y);
  }
  function z(y) {
    return y === null || V(y) ? F(y) : ie(y) ? (e.consume(y), z) : n(y);
  }
  function F(y) {
    return y === 45 && i === 2 ? (e.consume(y), ce) : y === 60 && i === 1 ? (e.consume(y), pe) : y === 62 && i === 4 ? (e.consume(y), ee) : y === 63 && i === 3 ? (e.consume(y), g) : y === 93 && i === 5 ? (e.consume(y), ve) : V(y) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Gp, De, J)(y)) : y === null || V(y) ? (e.exit("htmlFlowData"), J(y)) : (e.consume(y), F);
  }
  function J(y) {
    return e.check(Wp, re, De)(y);
  }
  function re(y) {
    return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), $;
  }
  function $(y) {
    return y === null || V(y) ? J(y) : (e.enter("htmlFlowData"), F(y));
  }
  function ce(y) {
    return y === 45 ? (e.consume(y), g) : F(y);
  }
  function pe(y) {
    return y === 47 ? (e.consume(y), a = "", ke) : F(y);
  }
  function ke(y) {
    if (y === 62) {
      const Se = a.toLowerCase();
      return Io.includes(Se) ? (e.consume(y), ee) : F(y);
    }
    return Ge(y) && a.length < 8 ? (e.consume(y), a += String.fromCharCode(y), ke) : F(y);
  }
  function ve(y) {
    return y === 93 ? (e.consume(y), g) : F(y);
  }
  function g(y) {
    return y === 62 ? (e.consume(y), ee) : y === 45 && i === 2 ? (e.consume(y), g) : F(y);
  }
  function ee(y) {
    return y === null || V(y) ? (e.exit("htmlFlowData"), De(y)) : (e.consume(y), ee);
  }
  function De(y) {
    return e.exit("htmlFlow"), t(y);
  }
}
function Xp(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return V(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o) : n(a);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
function Kp(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(xn, t, n);
  }
}
const Zp = {
  name: "htmlText",
  tokenize: Qp
};
function Qp(e, t, n) {
  const r = this;
  let i, o, a;
  return l;
  function l(g) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(g), s;
  }
  function s(g) {
    return g === 33 ? (e.consume(g), u) : g === 47 ? (e.consume(g), O) : g === 63 ? (e.consume(g), A) : Ge(g) ? (e.consume(g), X) : n(g);
  }
  function u(g) {
    return g === 45 ? (e.consume(g), f) : g === 91 ? (e.consume(g), o = 0, m) : Ge(g) ? (e.consume(g), _) : n(g);
  }
  function f(g) {
    return g === 45 ? (e.consume(g), p) : n(g);
  }
  function c(g) {
    return g === null ? n(g) : g === 45 ? (e.consume(g), h) : V(g) ? (a = c, pe(g)) : (e.consume(g), c);
  }
  function h(g) {
    return g === 45 ? (e.consume(g), p) : c(g);
  }
  function p(g) {
    return g === 62 ? ce(g) : g === 45 ? h(g) : c(g);
  }
  function m(g) {
    const ee = "CDATA[";
    return g === ee.charCodeAt(o++) ? (e.consume(g), o === ee.length ? b : m) : n(g);
  }
  function b(g) {
    return g === null ? n(g) : g === 93 ? (e.consume(g), w) : V(g) ? (a = b, pe(g)) : (e.consume(g), b);
  }
  function w(g) {
    return g === 93 ? (e.consume(g), x) : b(g);
  }
  function x(g) {
    return g === 62 ? ce(g) : g === 93 ? (e.consume(g), x) : b(g);
  }
  function _(g) {
    return g === null || g === 62 ? ce(g) : V(g) ? (a = _, pe(g)) : (e.consume(g), _);
  }
  function A(g) {
    return g === null ? n(g) : g === 63 ? (e.consume(g), P) : V(g) ? (a = A, pe(g)) : (e.consume(g), A);
  }
  function P(g) {
    return g === 62 ? ce(g) : A(g);
  }
  function O(g) {
    return Ge(g) ? (e.consume(g), E) : n(g);
  }
  function E(g) {
    return g === 45 || Be(g) ? (e.consume(g), E) : G(g);
  }
  function G(g) {
    return V(g) ? (a = G, pe(g)) : ie(g) ? (e.consume(g), G) : ce(g);
  }
  function X(g) {
    return g === 45 || Be(g) ? (e.consume(g), X) : g === 47 || g === 62 || ye(g) ? K(g) : n(g);
  }
  function K(g) {
    return g === 47 ? (e.consume(g), ce) : g === 58 || g === 95 || Ge(g) ? (e.consume(g), C) : V(g) ? (a = K, pe(g)) : ie(g) ? (e.consume(g), K) : ce(g);
  }
  function C(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || Be(g) ? (e.consume(g), C) : z(g);
  }
  function z(g) {
    return g === 61 ? (e.consume(g), F) : V(g) ? (a = z, pe(g)) : ie(g) ? (e.consume(g), z) : K(g);
  }
  function F(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), i = g, J) : V(g) ? (a = F, pe(g)) : ie(g) ? (e.consume(g), F) : (e.consume(g), re);
  }
  function J(g) {
    return g === i ? (e.consume(g), i = void 0, $) : g === null ? n(g) : V(g) ? (a = J, pe(g)) : (e.consume(g), J);
  }
  function re(g) {
    return g === null || g === 34 || g === 39 || g === 60 || g === 61 || g === 96 ? n(g) : g === 47 || g === 62 || ye(g) ? K(g) : (e.consume(g), re);
  }
  function $(g) {
    return g === 47 || g === 62 || ye(g) ? K(g) : n(g);
  }
  function ce(g) {
    return g === 62 ? (e.consume(g), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(g);
  }
  function pe(g) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), ke;
  }
  function ke(g) {
    return ie(g) ? se(e, ve, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(g) : ve(g);
  }
  function ve(g) {
    return e.enter("htmlTextData"), a(g);
  }
}
const si = {
  name: "labelEnd",
  resolveAll: nh,
  resolveTo: rh,
  tokenize: ih
}, Jp = {
  tokenize: oh
}, eh = {
  tokenize: ah
}, th = {
  tokenize: lh
};
function nh(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && Qe(e, 0, e.length, n), e;
}
function rh(e, t) {
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
  return l = [["enter", s, t], ["enter", u, t]], l = it(l, e.slice(o + 1, o + r + 3)), l = it(l, [["enter", f, t]]), l = it(l, qn(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, a - 3), t)), l = it(l, [["exit", f, t], e[a - 2], e[a - 1], ["exit", u, t]]), l = it(l, e.slice(a + 1)), l = it(l, [["exit", s, t]]), Qe(e, o, e.length, l), e;
}
function ih(e, t, n) {
  const r = this;
  let i = r.events.length, o, a;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return l;
  function l(h) {
    return o ? o._inactive ? c(h) : (a = r.parser.defined.includes(lt(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(h);
  }
  function s(h) {
    return h === 40 ? e.attempt(Jp, f, a ? f : c)(h) : h === 91 ? e.attempt(eh, f, a ? u : c)(h) : a ? f(h) : c(h);
  }
  function u(h) {
    return e.attempt(th, f, c)(h);
  }
  function f(h) {
    return t(h);
  }
  function c(h) {
    return o._balanced = !0, n(h);
  }
}
function oh(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return ye(c) ? pn(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41 ? f(c) : El(e, a, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function a(c) {
    return ye(c) ? pn(e, s)(c) : f(c);
  }
  function l(c) {
    return n(c);
  }
  function s(c) {
    return c === 34 || c === 39 || c === 40 ? Al(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : f(c);
  }
  function u(c) {
    return ye(c) ? pn(e, f)(c) : f(c);
  }
  function f(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function ah(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return Tl.call(r, e, o, a, "reference", "referenceMarker", "referenceString")(l);
  }
  function o(l) {
    return r.parser.defined.includes(lt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(l) : n(l);
  }
  function a(l) {
    return n(l);
  }
}
function lh(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const sh = {
  name: "labelStartImage",
  resolveAll: si.resolveAll,
  tokenize: uh
};
function uh(e, t, n) {
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
const ch = {
  name: "labelStartLink",
  resolveAll: si.resolveAll,
  tokenize: fh
};
function fh(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const xr = {
  name: "lineEnding",
  tokenize: ph
};
function ph(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), se(e, t, "linePrefix");
  }
}
const Dn = {
  name: "thematicBreak",
  tokenize: hh
};
function hh(e, t, n) {
  let r = 0, i;
  return o;
  function o(u) {
    return e.enter("thematicBreak"), a(u);
  }
  function a(u) {
    return i = u, l(u);
  }
  function l(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || V(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), ie(u) ? se(e, l, "whitespace")(u) : l(u));
  }
}
const qe = {
  continuation: {
    tokenize: yh
  },
  exit: xh,
  name: "list",
  tokenize: gh
}, dh = {
  partial: !0,
  tokenize: kh
}, mh = {
  partial: !0,
  tokenize: bh
};
function gh(e, t, n) {
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
      xn,
      // Can’t be empty when interrupting.
      r.interrupt ? n : f,
      e.attempt(dh, h, c)
    );
  }
  function f(p) {
    return r.containerState.initialBlankLine = !0, o++, h(p);
  }
  function c(p) {
    return ie(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), h) : n(p);
  }
  function h(p) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p);
  }
}
function yh(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(xn, i, o);
  function i(l) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, se(e, t, "listItemIndent", r.containerState.size + 1)(l);
  }
  function o(l) {
    return r.containerState.furtherBlankLines || !ie(l) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(l)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(mh, t, a)(l));
  }
  function a(l) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, se(e, e.attempt(qe, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l);
  }
}
function bh(e, t, n) {
  const r = this;
  return se(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function xh(e) {
  e.exit(this.containerState.type);
}
function kh(e, t, n) {
  const r = this;
  return se(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return !ie(o) && a && a[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const vo = {
  name: "setextUnderline",
  resolveTo: wh,
  tokenize: Ch
};
function wh(e, t) {
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
function Ch(e, t, n) {
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
    return u === i ? (e.consume(u), l) : (e.exit("setextHeadingLineSequence"), ie(u) ? se(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || V(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const Sh = {
  tokenize: Eh
};
function Eh(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    xn,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, se(e, e.attempt(this.parser.constructs.flow, i, e.attempt(vp, i)), "linePrefix"))
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
const Th = {
  resolveAll: Il()
}, Ah = _l("string"), _h = _l("text");
function _l(e) {
  return {
    resolveAll: Il(e === "text" ? Ih : void 0),
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
function Il(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function Ih(e, t) {
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
const vh = {
  42: qe,
  43: qe,
  45: qe,
  48: qe,
  49: qe,
  50: qe,
  51: qe,
  52: qe,
  53: qe,
  54: qe,
  55: qe,
  56: qe,
  57: qe,
  62: kl
}, Lh = {
  91: Pp
}, Rh = {
  [-2]: br,
  [-1]: br,
  32: br
}, Dh = {
  35: Hp,
  42: Dn,
  45: [vo, Dn],
  60: Vp,
  61: vo,
  95: Dn,
  96: _o,
  126: _o
}, Nh = {
  38: Cl,
  92: wl
}, Ph = {
  [-5]: xr,
  [-4]: xr,
  [-3]: xr,
  33: sh,
  38: Cl,
  42: $r,
  60: [cp, Zp],
  91: ch,
  92: [zp, wl],
  93: si,
  95: $r,
  96: Sp
}, Oh = {
  null: [$r, Th]
}, Mh = {
  null: [42, 95]
}, Fh = {
  null: []
}, zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Mh,
  contentInitial: Lh,
  disable: Fh,
  document: vh,
  flow: Dh,
  flowInitial: Rh,
  insideSpan: Oh,
  string: Nh,
  text: Ph
}, Symbol.toStringTag, { value: "Module" }));
function Bh(e, t, n) {
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
    attempt: G(O),
    check: G(E),
    consume: _,
    enter: A,
    exit: P,
    interrupt: G(E, {
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
  function c(z) {
    return a = it(a, z), w(), a[a.length - 1] !== null ? [] : (X(t, 0), u.events = qn(o, u.events, u), u.events);
  }
  function h(z, F) {
    return Uh(p(z), F);
  }
  function p(z) {
    return Hh(a, z);
  }
  function m() {
    const {
      _bufferIndex: z,
      _index: F,
      line: J,
      column: re,
      offset: $
    } = r;
    return {
      _bufferIndex: z,
      _index: F,
      line: J,
      column: re,
      offset: $
    };
  }
  function b(z) {
    i[z.line] = z.column, C();
  }
  function w() {
    let z;
    for (; r._index < a.length; ) {
      const F = a[r._index];
      if (typeof F == "string")
        for (z = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === z && r._bufferIndex < F.length; )
          x(F.charCodeAt(r._bufferIndex));
      else
        x(F);
    }
  }
  function x(z) {
    f = f(z);
  }
  function _(z) {
    V(z) ? (r.line++, r.column = 1, r.offset += z === -3 ? 2 : 1, C()) : z !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    a[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = z;
  }
  function A(z, F) {
    const J = F || {};
    return J.type = z, J.start = m(), u.events.push(["enter", J, u]), l.push(J), J;
  }
  function P(z) {
    const F = l.pop();
    return F.end = m(), u.events.push(["exit", F, u]), F;
  }
  function O(z, F) {
    X(z, F.from);
  }
  function E(z, F) {
    F.restore();
  }
  function G(z, F) {
    return J;
    function J(re, $, ce) {
      let pe, ke, ve, g;
      return Array.isArray(re) ? (
        /* c8 ignore next 1 */
        De(re)
      ) : "tokenize" in re ? (
        // Looks like a construct.
        De([
          /** @type {Construct} */
          re
        ])
      ) : ee(re);
      function ee(ge) {
        return Je;
        function Je($e) {
          const M = $e !== null && ge[$e], he = $e !== null && ge.null, I = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(M) ? M : M ? [M] : [],
            ...Array.isArray(he) ? he : he ? [he] : []
          ];
          return De(I)($e);
        }
      }
      function De(ge) {
        return pe = ge, ke = 0, ge.length === 0 ? ce : y(ge[ke]);
      }
      function y(ge) {
        return Je;
        function Je($e) {
          return g = K(), ve = ge, ge.partial || (u.currentConstruct = ge), ge.name && u.parser.constructs.disable.null.includes(ge.name) ? We() : ge.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            F ? Object.assign(Object.create(u), F) : u,
            s,
            Se,
            We
          )($e);
        }
      }
      function Se(ge) {
        return z(ve, g), $;
      }
      function We(ge) {
        return g.restore(), ++ke < pe.length ? y(pe[ke]) : ce;
      }
    }
  }
  function X(z, F) {
    z.resolveAll && !o.includes(z) && o.push(z), z.resolve && Qe(u.events, F, u.events.length - F, z.resolve(u.events.slice(F), u)), z.resolveTo && (u.events = z.resolveTo(u.events, u));
  }
  function K() {
    const z = m(), F = u.previous, J = u.currentConstruct, re = u.events.length, $ = Array.from(l);
    return {
      from: re,
      restore: ce
    };
    function ce() {
      r = z, u.previous = F, u.currentConstruct = J, u.events.length = re, l = $, C();
    }
  }
  function C() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Hh(e, t) {
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
function Uh(e, t) {
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
function $h(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      bl([zh, ...(e || {}).extensions || []])
    ),
    content: i(rp),
    defined: [],
    document: i(op),
    flow: i(Sh),
    lazy: {},
    string: i(Ah),
    text: i(_h)
  };
  return r;
  function i(o) {
    return a;
    function a(l) {
      return Bh(r, o, l);
    }
  }
}
function jh(e) {
  for (; !Sl(e); )
    ;
  return e;
}
const Lo = /[\0\t\n\r]/g;
function Vh() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, a, l) {
    const s = [];
    let u, f, c, h, p;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(a || void 0).decode(o)), c = 0, t = "", n && (o.charCodeAt(0) === 65279 && c++, n = void 0); c < o.length; ) {
      if (Lo.lastIndex = c, u = Lo.exec(o), h = u && u.index !== void 0 ? u.index : o.length, p = o.charCodeAt(h), !u) {
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
const Gh = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Wh(e) {
  return e.replace(Gh, qh);
}
function qh(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return xl(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return li(n) || e;
}
const vl = {}.hasOwnProperty;
function Yh(e, t, n) {
  return t && typeof t == "object" && (n = t, t = void 0), Xh(n)(jh($h(n).document().write(Vh()(e, t, !0))));
}
function Xh(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(Ce),
      autolinkProtocol: K,
      autolinkEmail: K,
      atxHeading: o(W),
      blockQuote: o(he),
      characterEscape: K,
      characterReference: K,
      codeFenced: o(I),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: o(I, a),
      codeText: o(U, a),
      codeTextData: K,
      data: K,
      codeFlowValue: K,
      definition: o(N),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: o(j),
      hardBreakEscape: o(we),
      hardBreakTrailing: o(we),
      htmlFlow: o(Z, a),
      htmlFlowData: K,
      htmlText: o(Z, a),
      htmlTextData: K,
      image: o(B),
      label: a,
      link: o(Ce),
      listItem: o(bt),
      listItemValue: h,
      listOrdered: o(et, c),
      listUnordered: o(et),
      paragraph: o(wn),
      reference: y,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: o(W),
      strong: o(st),
      thematicBreak: o(xt)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: O,
      autolink: s(),
      autolinkEmail: M,
      autolinkProtocol: $e,
      blockQuote: s(),
      characterEscapeValue: C,
      characterReferenceMarkerHexadecimal: We,
      characterReferenceMarkerNumeric: We,
      characterReferenceValue: ge,
      characterReference: Je,
      codeFenced: s(w),
      codeFencedFence: b,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: m,
      codeFlowValue: C,
      codeIndented: s(x),
      codeText: s($),
      codeTextData: C,
      data: C,
      definition: s(),
      definitionDestinationString: P,
      definitionLabelString: _,
      definitionTitleString: A,
      emphasis: s(),
      hardBreakEscape: s(F),
      hardBreakTrailing: s(F),
      htmlFlow: s(J),
      htmlFlowData: C,
      htmlText: s(re),
      htmlTextData: C,
      image: s(pe),
      label: ve,
      labelText: ke,
      lineEnding: z,
      link: s(ce),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: Se,
      resourceDestinationString: g,
      resourceTitleString: ee,
      resource: De,
      setextHeading: s(X),
      setextHeadingLineSequence: G,
      setextHeadingText: E,
      strong: s(),
      thematicBreak: s()
    }
  };
  Ll(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(T) {
    let L = {
      type: "root",
      children: []
    };
    const Y = {
      stack: [L],
      tokenStack: [],
      config: t,
      enter: l,
      exit: u,
      buffer: a,
      resume: f,
      data: n
    }, te = [];
    let ae = -1;
    for (; ++ae < T.length; )
      if (T[ae][1].type === "listOrdered" || T[ae][1].type === "listUnordered")
        if (T[ae][0] === "enter")
          te.push(ae);
        else {
          const Fe = te.pop();
          ae = i(T, Fe, ae);
        }
    for (ae = -1; ++ae < T.length; ) {
      const Fe = t[T[ae][0]];
      vl.call(Fe, T[ae][1].type) && Fe[T[ae][1].type].call(Object.assign({
        sliceSerialize: T[ae][2].sliceSerialize
      }, Y), T[ae][1]);
    }
    if (Y.tokenStack.length > 0) {
      const Fe = Y.tokenStack[Y.tokenStack.length - 1];
      (Fe[1] || Ro).call(Y, void 0, Fe[0]);
    }
    for (L.position = {
      start: At(T.length > 0 ? T[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: At(T.length > 0 ? T[T.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, ae = -1; ++ae < t.transforms.length; )
      L = t.transforms[ae](L) || L;
    return L;
  }
  function i(T, L, Y) {
    let te = L - 1, ae = -1, Fe = !1, tt, nt, Ct, St;
    for (; ++te <= Y; ) {
      const Ne = T[te];
      switch (Ne[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ne[0] === "enter" ? ae++ : ae--, St = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ne[0] === "enter" && (tt && !St && !ae && !Ct && (Ct = te), St = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          St = void 0;
      }
      if (!ae && Ne[0] === "enter" && Ne[1].type === "listItemPrefix" || ae === -1 && Ne[0] === "exit" && (Ne[1].type === "listUnordered" || Ne[1].type === "listOrdered")) {
        if (tt) {
          let ut = te;
          for (nt = void 0; ut--; ) {
            const ze = T[ut];
            if (ze[1].type === "lineEnding" || ze[1].type === "lineEndingBlank") {
              if (ze[0] === "exit") continue;
              nt && (T[nt][1].type = "lineEndingBlank", Fe = !0), ze[1].type = "lineEnding", nt = ut;
            } else if (!(ze[1].type === "linePrefix" || ze[1].type === "blockQuotePrefix" || ze[1].type === "blockQuotePrefixWhitespace" || ze[1].type === "blockQuoteMarker" || ze[1].type === "listItemIndent")) break;
          }
          Ct && (!nt || Ct < nt) && (tt._spread = !0), tt.end = Object.assign({}, nt ? T[nt][1].start : Ne[1].end), T.splice(nt || te, 0, ["exit", tt, Ne[2]]), te++, Y++;
        }
        if (Ne[1].type === "listItemPrefix") {
          const ut = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ne[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          tt = ut, T.splice(te, 0, ["enter", ut, Ne[2]]), te++, Y++, Ct = void 0, St = !0;
        }
      }
    }
    return T[L][1]._spread = Fe, Y;
  }
  function o(T, L) {
    return Y;
    function Y(te) {
      l.call(this, T(te), te), L && L.call(this, te);
    }
  }
  function a() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function l(T, L, Y) {
    this.stack[this.stack.length - 1].children.push(T), this.stack.push(T), this.tokenStack.push([L, Y || void 0]), T.position = {
      start: At(L.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(T) {
    return L;
    function L(Y) {
      T && T.call(this, Y), u.call(this, Y);
    }
  }
  function u(T, L) {
    const Y = this.stack.pop(), te = this.tokenStack.pop();
    if (te)
      te[0].type !== T.type && (L ? L.call(this, T, te[0]) : (te[1] || Ro).call(this, T, te[0]));
    else throw new Error("Cannot close `" + T.type + "` (" + fn({
      start: T.start,
      end: T.end
    }) + "): it’s not open");
    Y.position.end = At(T.end);
  }
  function f() {
    return ai(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function h(T) {
    if (this.data.expectingFirstListItemValue) {
      const L = this.stack[this.stack.length - 2];
      L.start = Number.parseInt(this.sliceSerialize(T), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const T = this.resume(), L = this.stack[this.stack.length - 1];
    L.lang = T;
  }
  function m() {
    const T = this.resume(), L = this.stack[this.stack.length - 1];
    L.meta = T;
  }
  function b() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function w() {
    const T = this.resume(), L = this.stack[this.stack.length - 1];
    L.value = T.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function x() {
    const T = this.resume(), L = this.stack[this.stack.length - 1];
    L.value = T.replace(/(\r?\n|\r)$/g, "");
  }
  function _(T) {
    const L = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = L, Y.identifier = lt(this.sliceSerialize(T)).toLowerCase();
  }
  function A() {
    const T = this.resume(), L = this.stack[this.stack.length - 1];
    L.title = T;
  }
  function P() {
    const T = this.resume(), L = this.stack[this.stack.length - 1];
    L.url = T;
  }
  function O(T) {
    const L = this.stack[this.stack.length - 1];
    if (!L.depth) {
      const Y = this.sliceSerialize(T).length;
      L.depth = Y;
    }
  }
  function E() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function G(T) {
    const L = this.stack[this.stack.length - 1];
    L.depth = this.sliceSerialize(T).codePointAt(0) === 61 ? 1 : 2;
  }
  function X() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function K(T) {
    const Y = this.stack[this.stack.length - 1].children;
    let te = Y[Y.length - 1];
    (!te || te.type !== "text") && (te = Lt(), te.position = {
      start: At(T.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, Y.push(te)), this.stack.push(te);
  }
  function C(T) {
    const L = this.stack.pop();
    L.value += this.sliceSerialize(T), L.position.end = At(T.end);
  }
  function z(T) {
    const L = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const Y = L.children[L.children.length - 1];
      Y.position.end = At(T.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(L.type) && (K.call(this, T), C.call(this, T));
  }
  function F() {
    this.data.atHardBreak = !0;
  }
  function J() {
    const T = this.resume(), L = this.stack[this.stack.length - 1];
    L.value = T;
  }
  function re() {
    const T = this.resume(), L = this.stack[this.stack.length - 1];
    L.value = T;
  }
  function $() {
    const T = this.resume(), L = this.stack[this.stack.length - 1];
    L.value = T;
  }
  function ce() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const L = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = L, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function pe() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const L = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = L, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function ke(T) {
    const L = this.sliceSerialize(T), Y = this.stack[this.stack.length - 2];
    Y.label = Wh(L), Y.identifier = lt(L).toLowerCase();
  }
  function ve() {
    const T = this.stack[this.stack.length - 1], L = this.resume(), Y = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, Y.type === "link") {
      const te = T.children;
      Y.children = te;
    } else
      Y.alt = L;
  }
  function g() {
    const T = this.resume(), L = this.stack[this.stack.length - 1];
    L.url = T;
  }
  function ee() {
    const T = this.resume(), L = this.stack[this.stack.length - 1];
    L.title = T;
  }
  function De() {
    this.data.inReference = void 0;
  }
  function y() {
    this.data.referenceType = "collapsed";
  }
  function Se(T) {
    const L = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = L, Y.identifier = lt(this.sliceSerialize(T)).toLowerCase(), this.data.referenceType = "full";
  }
  function We(T) {
    this.data.characterReferenceType = T.type;
  }
  function ge(T) {
    const L = this.sliceSerialize(T), Y = this.data.characterReferenceType;
    let te;
    Y ? (te = xl(L, Y === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : te = li(L);
    const ae = this.stack[this.stack.length - 1];
    ae.value += te;
  }
  function Je(T) {
    const L = this.stack.pop();
    L.position.end = At(T.end);
  }
  function $e(T) {
    C.call(this, T);
    const L = this.stack[this.stack.length - 1];
    L.url = this.sliceSerialize(T);
  }
  function M(T) {
    C.call(this, T);
    const L = this.stack[this.stack.length - 1];
    L.url = "mailto:" + this.sliceSerialize(T);
  }
  function he() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function I() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function U() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function N() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function j() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function W() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function we() {
    return {
      type: "break"
    };
  }
  function Z() {
    return {
      type: "html",
      value: ""
    };
  }
  function B() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Ce() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function et(T) {
    return {
      type: "list",
      ordered: T.type === "listOrdered",
      start: null,
      spread: T._spread,
      children: []
    };
  }
  function bt(T) {
    return {
      type: "listItem",
      spread: T._spread,
      checked: null,
      children: []
    };
  }
  function wn() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function st() {
    return {
      type: "strong",
      children: []
    };
  }
  function Lt() {
    return {
      type: "text",
      value: ""
    };
  }
  function xt() {
    return {
      type: "thematicBreak"
    };
  }
}
function At(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Ll(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Ll(e, r) : Kh(e, r);
  }
}
function Kh(e, t) {
  let n;
  for (n in t)
    if (vl.call(t, n))
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
function Ro(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + fn({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + fn({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + fn({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Zh(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Yh(r, {
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
function Qh(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Jh(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function ed(e, t) {
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
function td(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function nd(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function rd(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Qt(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
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
function id(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function od(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Rl(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const a = i[i.length - 1];
  return a && a.type === "text" ? a.value += r : i.push({ type: "text", value: r }), i;
}
function ad(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Rl(e, t);
  const i = { src: Qt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function ld(e, t) {
  const n = { src: Qt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function sd(e, t) {
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
function ud(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Rl(e, t);
  const i = { href: Qt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function cd(e, t) {
  const n = { href: Qt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function fd(e, t, n) {
  const r = e.all(t), i = n ? pd(n) : Dl(t), o = {}, a = [];
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
function pd(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Dl(n[r]);
  }
  return t;
}
function Dl(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function hd(e, t) {
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
function dd(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function md(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function gd(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function yd(e, t) {
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
    }, l = ni(t.children[1]), s = fl(t.children[t.children.length - 1]);
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
function bd(e, t, n) {
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
function xd(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Do = 9, No = 32;
function kd(e) {
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
    for (; o === Do || o === No; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === Do || o === No; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function wd(e, t) {
  const n = { type: "text", value: kd(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Cd(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Sd = {
  blockquote: Qh,
  break: Jh,
  code: ed,
  delete: td,
  emphasis: nd,
  footnoteReference: rd,
  heading: id,
  html: od,
  imageReference: ad,
  image: ld,
  inlineCode: sd,
  linkReference: ud,
  link: cd,
  listItem: fd,
  list: hd,
  paragraph: dd,
  // @ts-expect-error: root is different, but hard to type.
  root: md,
  strong: gd,
  table: yd,
  tableCell: xd,
  tableRow: bd,
  text: wd,
  thematicBreak: Cd,
  toml: In,
  yaml: In,
  definition: In,
  footnoteDefinition: In
};
function In() {
}
const Nl = -1, Yn = 0, hn = 1, Bn = 2, ui = 3, ci = 4, fi = 5, pi = 6, Pl = 7, Ol = 8, Ed = typeof self == "object" ? self : globalThis, Oo = (e, t) => {
  switch (e) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + e);
  }
  return new Ed[e](t);
}, Td = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, a] = t[i];
    switch (o) {
      case Yn:
      case Nl:
        return n(a, i);
      case hn: {
        const l = n([], i);
        for (const s of a)
          l.push(r(s));
        return l;
      }
      case Bn: {
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
      case Pl: {
        const { name: l, message: s } = a;
        return n(Oo(l, s), i);
      }
      case Ol:
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
    return n(Oo(o, a), i);
  };
  return r;
}, Mo = (e) => Td(/* @__PURE__ */ new Map(), e)(0), jt = "", { toString: Ad } = {}, { keys: _d } = Object, un = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Yn, t];
  const n = Ad.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [hn, jt];
    case "Object":
      return [Bn, jt];
    case "Date":
      return [ui, jt];
    case "RegExp":
      return [ci, jt];
    case "Map":
      return [fi, jt];
    case "Set":
      return [pi, jt];
    case "DataView":
      return [hn, n];
  }
  return n.includes("Array") ? [hn, n] : n.includes("Error") ? [Pl, n] : [Bn, n];
}, vn = ([e, t]) => e === Yn && (t === "function" || t === "symbol"), Id = (e, t, n, r) => {
  const i = (a, l) => {
    const s = r.push(a) - 1;
    return n.set(l, s), s;
  }, o = (a) => {
    if (n.has(a))
      return n.get(a);
    let [l, s] = un(a);
    switch (l) {
      case Yn: {
        let f = a;
        switch (s) {
          case "bigint":
            l = Ol, f = a.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            f = null;
            break;
          case "undefined":
            return i([Nl], a);
        }
        return i([l, f], a);
      }
      case hn: {
        if (s) {
          let h = a;
          return s === "DataView" ? h = new Uint8Array(a.buffer) : s === "ArrayBuffer" && (h = new Uint8Array(a)), i([s, [...h]], a);
        }
        const f = [], c = i([l, f], a);
        for (const h of a)
          f.push(o(h));
        return c;
      }
      case Bn: {
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
        for (const h of _d(a))
          (e || !vn(un(a[h]))) && f.push([o(h), o(a[h])]);
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
          (e || !(vn(un(h)) || vn(un(p)))) && f.push([o(h), o(p)]);
        return c;
      }
      case pi: {
        const f = [], c = i([l, f], a);
        for (const h of a)
          (e || !vn(un(h))) && f.push(o(h));
        return c;
      }
    }
    const { message: u } = a;
    return i([l, { name: s, message: u }], a);
  };
  return o;
}, Fo = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Id(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Hn = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Mo(Fo(e, t)) : structuredClone(e)
) : (e, t) => Mo(Fo(e, t));
function vd(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Ld(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Rd(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || vd, r = e.options.footnoteBackLabel || Ld, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", a = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const f = e.all(u), c = String(u.identifier).toUpperCase(), h = Qt(c.toLowerCase());
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
    const w = f[f.length - 1];
    if (w && w.type === "element" && w.tagName === "p") {
      const _ = w.children[w.children.length - 1];
      _ && _.type === "text" ? _.value += " " : w.children.push({ type: "text", value: " " }), w.children.push(...m);
    } else
      f.push(...m);
    const x = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + h },
      children: e.wrap(f, !0)
    };
    e.patch(u, x), l.push(x);
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
            ...Hn(a),
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
      return Od;
    if (typeof e == "function")
      return Kn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Dd(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Nd(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return Pd(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Dd(e) {
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
function Nd(e) {
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
function Pd(e) {
  return Kn(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Kn(e) {
  return t;
  function t(n, r, i) {
    return !!(Md(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Od() {
  return !0;
}
function Md(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ml = [], Fd = !0, jr = !1, zd = "skip";
function Fl(e, t, n, r) {
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
      let p = Ml, m, b, w;
      if ((!t || o(s, u, f[f.length - 1] || void 0)) && (p = Bd(n(s, f)), p[0] === jr))
        return p;
      if ("children" in s && s.children) {
        const x = (
          /** @type {UnistParent} */
          s
        );
        if (x.children && p[0] !== zd)
          for (b = (r ? x.children.length : -1) + a, w = f.concat(x); b > -1 && b < x.children.length; ) {
            const _ = x.children[b];
            if (m = l(_, b, w)(), m[0] === jr)
              return m;
            b = typeof m[1] == "number" ? m[1] : b + a;
          }
      }
      return p;
    }
  }
}
function Bd(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Fd, e] : e == null ? Ml : [e];
}
function hi(e, t, n, r) {
  let i, o, a;
  typeof t == "function" && typeof n != "function" ? (o = void 0, a = t, i = n) : (o = t, a = n, i = r), Fl(e, o, l, i);
  function l(s, u) {
    const f = u[u.length - 1], c = f ? f.children.indexOf(s) : void 0;
    return a(s, c, f);
  }
}
const Vr = {}.hasOwnProperty, Hd = {};
function Ud(e, t) {
  const n = t || Hd, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = { ...Sd, ...n.handlers }, l = {
    all: u,
    applyData: jd,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: a,
    one: s,
    options: n,
    patch: $d,
    wrap: Gd
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
        const { children: b, ...w } = f, x = Hn(w);
        return x.children = l.all(f), x;
      }
      return Hn(f);
    }
    return (l.options.unknownHandler || Vd)(l, f, c);
  }
  function u(f) {
    const c = [];
    if ("children" in f) {
      const h = f.children;
      let p = -1;
      for (; ++p < h.length; ) {
        const m = l.one(h[p], f);
        if (m) {
          if (p && h[p - 1].type === "break" && (!Array.isArray(m) && m.type === "text" && (m.value = zo(m.value)), !Array.isArray(m) && m.type === "element")) {
            const b = m.children[0];
            b && b.type === "text" && (b.value = zo(b.value));
          }
          Array.isArray(m) ? c.push(...m) : c.push(m);
        }
      }
    }
    return c;
  }
}
function $d(e, t) {
  e.position && (t.position = vf(e));
}
function jd(e, t) {
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
    n.type === "element" && o && Object.assign(n.properties, Hn(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Vd(e, t) {
  const n = t.data || {}, r = "value" in t && !(Vr.call(n, "hProperties") || Vr.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Gd(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function zo(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Bo(e, t) {
  const n = Ud(e, t), r = n.one(e, void 0), i = Rd(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Wd(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Bo(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Bo(n, { file: r, ...e || t })
    );
  };
}
function Ho(e) {
  if (e)
    throw e;
}
var Nn = Object.prototype.hasOwnProperty, zl = Object.prototype.toString, Uo = Object.defineProperty, $o = Object.getOwnPropertyDescriptor, jo = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : zl.call(t) === "[object Array]";
}, Vo = function(t) {
  if (!t || zl.call(t) !== "[object Object]")
    return !1;
  var n = Nn.call(t, "constructor"), r = t.constructor && t.constructor.prototype && Nn.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || Nn.call(t, i);
}, Go = function(t, n) {
  Uo && n.name === "__proto__" ? Uo(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Wo = function(t, n) {
  if (n === "__proto__")
    if (Nn.call(t, n)) {
      if ($o)
        return $o(t, n).value;
    } else return;
  return t[n];
}, qd = function e() {
  var t, n, r, i, o, a, l = arguments[0], s = 1, u = arguments.length, f = !1;
  for (typeof l == "boolean" && (f = l, l = arguments[1] || {}, s = 2), (l == null || typeof l != "object" && typeof l != "function") && (l = {}); s < u; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = Wo(l, n), i = Wo(t, n), l !== i && (f && i && (Vo(i) || (o = jo(i))) ? (o ? (o = !1, a = r && jo(r) ? r : []) : a = r && Vo(r) ? r : {}, Go(l, { name: n, newValue: e(f, a, i) })) : typeof i < "u" && Go(l, { name: n, newValue: i }));
  return l;
};
const kr = /* @__PURE__ */ cl(qd);
function Gr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Yd() {
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
      i = u, f ? Xd(f, l)(...u) : a(null, ...u);
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
function Xd(e, t) {
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
const mt = { basename: Kd, dirname: Zd, extname: Qd, join: Jd, sep: "/" };
function Kd(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  kn(e);
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
function Zd(e) {
  if (kn(e), e.length === 0)
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
function Qd(e) {
  kn(e);
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
function Jd(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    kn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : em(n);
}
function em(e) {
  kn(e);
  const t = e.codePointAt(0) === 47;
  let n = tm(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function tm(e, t) {
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
function kn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const nm = { cwd: rm };
function rm() {
  return "/";
}
function Wr(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function im(e) {
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
  return om(e);
}
function om(e) {
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
class Bl {
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
    t ? Wr(t) ? n = { path: t } : typeof t == "string" || am(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : nm.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
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
    return typeof this.path == "string" ? mt.basename(this.path) : void 0;
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
    Sr(t, "basename"), Cr(t, "basename"), this.path = mt.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? mt.dirname(this.path) : void 0;
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
    qo(this.basename, "dirname"), this.path = mt.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? mt.extname(this.path) : void 0;
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
    if (Cr(t, "extname"), qo(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = mt.join(this.dirname, this.stem + (t || ""));
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
    Wr(t) && (t = im(t)), Sr(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? mt.basename(this.path, this.extname) : void 0;
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
    Sr(t, "stem"), Cr(t, "stem"), this.path = mt.join(this.dirname || "", t + (this.extname || ""));
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
    const i = new Ue(
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
  if (e && e.includes(mt.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + mt.sep + "`"
    );
}
function Sr(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function qo(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function am(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const lm = (
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
), sm = {}.hasOwnProperty;
class di extends lm {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Yd();
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
    return t.data(kr(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (Ar("data", this.frozen), this.namespace[t] = n, this) : sm.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Ar("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = Ln(t), r = this.parser || this.Parser;
    return Er("parse", r), r(String(n), n);
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
    return this.freeze(), Er("process", this.parser || this.Parser), Tr("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, a) {
      const l = Ln(t), s = (
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
        fm(m) ? h.value = m : h.result = m, u(
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
    return this.freeze(), Er("processSync", this.parser || this.Parser), Tr("processSync", this.compiler || this.Compiler), this.process(t, i), Xo("processSync", "process", n), r;
    function i(o, a) {
      n = !0, Ho(o), r = a;
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
    Yo(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(a, l) {
      const s = Ln(n);
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
    return this.run(t, n, o), Xo("runSync", "run", r), i;
    function o(a, l) {
      Ho(a), i = l, r = !0;
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
    const r = Ln(n), i = this.compiler || this.Compiler;
    return Tr("stringify", i), Yo(t), i(t, r);
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
      l(u.plugins), u.settings && (i.settings = kr(!0, i.settings, u.settings));
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
        Gr(b) && Gr(p) && (p = kr(!0, b, p)), r[h] = [u, p, ...m];
      }
    }
  }
}
const um = new di().freeze();
function Er(e, t) {
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
function Yo(e) {
  if (!Gr(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Xo(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Ln(e) {
  return cm(e) ? e : new Bl(e);
}
function cm(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function fm(e) {
  return typeof e == "string" || pm(e);
}
function pm(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const hm = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Ko = [], Zo = { allowDangerousHtml: !0 }, dm = /^(https?|ircs?|mailto|xmpp)$/i, mm = [
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
function gm(e) {
  const t = ym(e), n = bm(e);
  return xm(t.runSync(t.parse(n), n), e);
}
function ym(e) {
  const t = e.rehypePlugins || Ko, n = e.remarkPlugins || Ko, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Zo } : Zo;
  return um().use(Zh).use(n).use(Wd, r).use(t);
}
function bm(e) {
  const t = e.children || "", n = new Bl();
  return typeof t == "string" && (n.value = t), n;
}
function xm(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, o = t.disallowedElements, a = t.skipHtml, l = t.unwrapDisallowed, s = t.urlTransform || km;
  for (const f of mm)
    Object.hasOwn(t, f.from) && ("" + f.from + (f.to ? "use `" + f.to + "` instead" : "remove it") + hm + f.id, void 0);
  return hi(e, u), Pf(e, {
    Fragment: $n,
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
function km(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    dm.test(e.slice(0, t)) ? e : ""
  );
}
function Qo(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function wm(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Cm(e, t, n) {
  const i = Xn((n || {}).ignore || []), o = Sm(t);
  let a = -1;
  for (; ++a < o.length; )
    Fl(e, "text", l);
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
    const w = c.children.indexOf(u);
    let x = !1, _ = [];
    h.lastIndex = 0;
    let A = h.exec(u.value);
    for (; A; ) {
      const P = A.index, O = {
        index: A.index,
        input: A.input,
        stack: [...f, u]
      };
      let E = p(...A, O);
      if (typeof E == "string" && (E = E.length > 0 ? { type: "text", value: E } : void 0), E === !1 ? h.lastIndex = P + 1 : (m !== P && _.push({
        type: "text",
        value: u.value.slice(m, P)
      }), Array.isArray(E) ? _.push(...E) : E && _.push(E), m = P + A[0].length, x = !0), !h.global)
        break;
      A = h.exec(u.value);
    }
    return x ? (m < u.value.length && _.push({ type: "text", value: u.value.slice(m) }), c.children.splice(w, 1, ..._)) : _ = [u], w + _.length;
  }
}
function Sm(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Em(i[0]), Tm(i[1])]);
  }
  return t;
}
function Em(e) {
  return typeof e == "string" ? new RegExp(wm(e), "g") : e;
}
function Tm(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const _r = "phrasing", Ir = ["autolink", "link", "image", "label"];
function Am() {
  return {
    transforms: [Nm],
    enter: {
      literalAutolink: Im,
      literalAutolinkEmail: vr,
      literalAutolinkHttp: vr,
      literalAutolinkWww: vr
    },
    exit: {
      literalAutolink: Dm,
      literalAutolinkEmail: Rm,
      literalAutolinkHttp: vm,
      literalAutolinkWww: Lm
    }
  };
}
function _m() {
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
function Im(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function vr(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function vm(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Lm(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Rm(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Dm(e) {
  this.exit(e);
}
function Nm(e) {
  Cm(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Pm],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Om]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Pm(e, t, n, r, i) {
  let o = "";
  if (!Hl(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !Mm(n)))
    return !1;
  const a = Fm(n + r);
  if (!a[0]) return !1;
  const l = {
    type: "link",
    title: null,
    url: o + t + a[0],
    children: [{ type: "text", value: t + a[0] }]
  };
  return a[1] ? [l, { type: "text", value: a[1] }] : l;
}
function Om(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Hl(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function Mm(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Fm(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Qo(e, "(");
  let o = Qo(e, ")");
  for (; r !== -1 && i > o; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [e, n];
}
function Hl(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ot(n) || Wn(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
Ul.peek = Wm;
function zm() {
  this.buffer();
}
function Bm(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function Hm() {
  this.buffer();
}
function Um(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function $m(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = lt(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function jm(e) {
  this.exit(e);
}
function Vm(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = lt(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function Gm(e) {
  this.exit(e);
}
function Wm() {
  return "[";
}
function Ul(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const a = n.enter("footnoteReference"), l = n.enter("reference");
  return o += i.move(
    n.safe(n.associationId(e), { after: "]", before: o })
  ), l(), a(), o += i.move("]"), o;
}
function qm() {
  return {
    enter: {
      gfmFootnoteCallString: zm,
      gfmFootnoteCall: Bm,
      gfmFootnoteDefinitionLabelString: Hm,
      gfmFootnoteDefinition: Um
    },
    exit: {
      gfmFootnoteCallString: $m,
      gfmFootnoteCall: jm,
      gfmFootnoteDefinitionLabelString: Vm,
      gfmFootnoteDefinition: Gm
    }
  };
}
function Ym(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: Ul },
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
        t ? $l : Xm
      )
    )), u(), s;
  }
}
function Xm(e, t, n) {
  return t === 0 ? e : $l(e, t, n);
}
function $l(e, t, n) {
  return (n ? "" : "    ") + e;
}
const Km = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
jl.peek = t1;
function Zm() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Jm },
    exit: { strikethrough: e1 }
  };
}
function Qm() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Km
      }
    ],
    handlers: { delete: jl }
  };
}
function Jm(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function e1(e) {
  this.exit(e);
}
function jl(e, t, n, r) {
  const i = n.createTracker(r), o = n.enter("strikethrough");
  let a = i.move("~~");
  return a += n.containerPhrasing(e, {
    ...i.current(),
    before: a,
    after: "~"
  }), a += i.move("~~"), o(), a;
}
function t1() {
  return "~";
}
function n1(e) {
  return e.length;
}
function r1(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || n1, o = [], a = [], l = [], s = [];
  let u = 0, f = -1;
  for (; ++f < e.length; ) {
    const b = [], w = [];
    let x = -1;
    for (e[f].length > u && (u = e[f].length); ++x < e[f].length; ) {
      const _ = i1(e[f][x]);
      if (n.alignDelimiters !== !1) {
        const A = i(_);
        w[x] = A, (s[x] === void 0 || A > s[x]) && (s[x] = A);
      }
      b.push(_);
    }
    a[f] = b, l[f] = w;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < u; )
      o[c] = Jo(r[c]);
  else {
    const b = Jo(r);
    for (; ++c < u; )
      o[c] = b;
  }
  c = -1;
  const h = [], p = [];
  for (; ++c < u; ) {
    const b = o[c];
    let w = "", x = "";
    b === 99 ? (w = ":", x = ":") : b === 108 ? w = ":" : b === 114 && (x = ":");
    let _ = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[c] - w.length - x.length
    );
    const A = w + "-".repeat(_) + x;
    n.alignDelimiters !== !1 && (_ = w.length + _ + x.length, _ > s[c] && (s[c] = _), p[c] = _), h[c] = A;
  }
  a.splice(1, 0, h), l.splice(1, 0, p), f = -1;
  const m = [];
  for (; ++f < a.length; ) {
    const b = a[f], w = l[f];
    c = -1;
    const x = [];
    for (; ++c < u; ) {
      const _ = b[c] || "";
      let A = "", P = "";
      if (n.alignDelimiters !== !1) {
        const O = s[c] - (w[c] || 0), E = o[c];
        E === 114 ? A = " ".repeat(O) : E === 99 ? O % 2 ? (A = " ".repeat(O / 2 + 0.5), P = " ".repeat(O / 2 - 0.5)) : (A = " ".repeat(O / 2), P = A) : P = " ".repeat(O);
      }
      n.delimiterStart !== !1 && !c && x.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && _ === "") && (n.delimiterStart !== !1 || c) && x.push(" "), n.alignDelimiters !== !1 && x.push(A), x.push(_), n.alignDelimiters !== !1 && x.push(P), n.padding !== !1 && x.push(" "), (n.delimiterEnd !== !1 || c !== u - 1) && x.push("|");
    }
    m.push(
      n.delimiterEnd === !1 ? x.join("").replace(/ +$/, "") : x.join("")
    );
  }
  return m.join(`
`);
}
function i1(e) {
  return e == null ? "" : String(e);
}
function Jo(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function o1(e, t, n, r) {
  const i = n.enter("blockquote"), o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const a = n.indentLines(
    n.containerFlow(e, o.current()),
    a1
  );
  return i(), a;
}
function a1(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function l1(e, t) {
  return ea(e, t.inConstruct, !0) && !ea(e, t.notInConstruct, !1);
}
function ea(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function ta(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && l1(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function s1(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, o = 0, a = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > a && (a = o) : o = 1, i = r + t.length, r = n.indexOf(t, i);
  return a;
}
function u1(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function c1(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function f1(e, t, n, r) {
  const i = c1(n), o = e.value || "", a = i === "`" ? "GraveAccent" : "Tilde";
  if (u1(e, n)) {
    const c = n.enter("codeIndented"), h = n.indentLines(o, p1);
    return c(), h;
  }
  const l = n.createTracker(r), s = i.repeat(Math.max(s1(o, i) + 1, 3)), u = n.enter("codeFenced");
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
function p1(e, t, n) {
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
function h1(e, t, n, r) {
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
function d1(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function mn(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Un(e, t, n) {
  const r = Xt(e), i = Xt(t);
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
Vl.peek = m1;
function Vl(e, t, n, r) {
  const i = d1(n), o = n.enter("emphasis"), a = n.createTracker(r), l = a.move(i);
  let s = a.move(
    n.containerPhrasing(e, {
      after: i,
      before: l,
      ...a.current()
    })
  );
  const u = s.charCodeAt(0), f = Un(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  f.inside && (s = mn(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), h = Un(r.after.charCodeAt(0), c, i);
  h.inside && (s = s.slice(0, -1) + mn(c));
  const p = a.move(i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: f.outside
  }, l + s + p;
}
function m1(e, t, n) {
  return n.options.emphasis || "*";
}
function g1(e, t) {
  let n = !1;
  return hi(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, jr;
  }), !!((!e.depth || e.depth < 3) && ai(e) && (t.options.setext || n));
}
function y1(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = n.createTracker(r);
  if (g1(e, n)) {
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
  return /^[\t ]/.test(u) && (u = mn(u.charCodeAt(0)) + u.slice(1)), u = u ? a + " " + u : a, n.options.closeAtx && (u += " " + a), s(), l(), u;
}
Gl.peek = b1;
function Gl(e) {
  return e.value || "";
}
function b1() {
  return "<";
}
Wl.peek = x1;
function Wl(e, t, n, r) {
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
function x1() {
  return "!";
}
ql.peek = k1;
function ql(e, t, n, r) {
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
function k1() {
  return "!";
}
Yl.peek = w1;
function Yl(e, t, n) {
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
function w1() {
  return "`";
}
function Xl(e, t) {
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
Kl.peek = C1;
function Kl(e, t, n, r) {
  const i = mi(n), o = i === '"' ? "Quote" : "Apostrophe", a = n.createTracker(r);
  let l, s;
  if (Xl(e, n)) {
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
function C1(e, t, n) {
  return Xl(e, n) ? "<" : "[";
}
Zl.peek = S1;
function Zl(e, t, n, r) {
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
function S1() {
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
function E1(e) {
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
function T1(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Ql(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function A1(e, t, n, r) {
  const i = n.enter("list"), o = n.bulletCurrent;
  let a = e.ordered ? T1(n) : gi(n);
  const l = e.ordered ? a === "." ? ")" : "." : E1(n);
  let s = t && n.bulletLastUsed ? a === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const f = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (a === "*" || a === "-") && // Empty first list item:
      f && (!f.children || !f.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), Ql(n) === a && f
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
function _1(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function I1(e, t, n, r) {
  const i = _1(n);
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
function v1(e, t, n, r) {
  const i = n.enter("paragraph"), o = n.enter("phrasing"), a = n.containerPhrasing(e, r);
  return o(), i(), a;
}
const L1 = (
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
function R1(e, t, n, r) {
  return (e.children.some(function(a) {
    return L1(a);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function D1(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
Jl.peek = N1;
function Jl(e, t, n, r) {
  const i = D1(n), o = n.enter("strong"), a = n.createTracker(r), l = a.move(i + i);
  let s = a.move(
    n.containerPhrasing(e, {
      after: i,
      before: l,
      ...a.current()
    })
  );
  const u = s.charCodeAt(0), f = Un(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  f.inside && (s = mn(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), h = Un(r.after.charCodeAt(0), c, i);
  h.inside && (s = s.slice(0, -1) + mn(c));
  const p = a.move(i + i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: f.outside
  }, l + s + p;
}
function N1(e, t, n) {
  return n.options.strong || "*";
}
function P1(e, t, n, r) {
  return n.safe(e.value, r);
}
function O1(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function M1(e, t, n) {
  const r = (Ql(n) + (n.options.ruleSpaces ? " " : "")).repeat(O1(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const es = {
  blockquote: o1,
  break: ta,
  code: f1,
  definition: h1,
  emphasis: Vl,
  hardBreak: ta,
  heading: y1,
  html: Gl,
  image: Wl,
  imageReference: ql,
  inlineCode: Yl,
  link: Kl,
  linkReference: Zl,
  list: A1,
  listItem: I1,
  paragraph: v1,
  root: R1,
  strong: Jl,
  text: P1,
  thematicBreak: M1
};
function F1() {
  return {
    enter: {
      table: z1,
      tableData: na,
      tableHeader: na,
      tableRow: H1
    },
    exit: {
      codeText: U1,
      table: B1,
      tableData: Lr,
      tableHeader: Lr,
      tableRow: Lr
    }
  };
}
function z1(e) {
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
function B1(e) {
  this.exit(e), this.data.inTable = void 0;
}
function H1(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Lr(e) {
  this.exit(e);
}
function na(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function U1(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, $1));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function $1(e, t) {
  return t === "|" ? t : e;
}
function j1(e) {
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
  function a(p, m, b, w) {
    return u(f(p, b, w), p.align);
  }
  function l(p, m, b, w) {
    const x = c(p, b, w), _ = u([x]);
    return _.slice(0, _.indexOf(`
`));
  }
  function s(p, m, b, w) {
    const x = b.enter("tableCell"), _ = b.enter("phrasing"), A = b.containerPhrasing(p, {
      ...w,
      before: o,
      after: o
    });
    return _(), x(), A;
  }
  function u(p, m) {
    return r1(p, {
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
    const w = p.children;
    let x = -1;
    const _ = [], A = m.enter("table");
    for (; ++x < w.length; )
      _[x] = c(w[x], m, b);
    return A(), _;
  }
  function c(p, m, b) {
    const w = p.children;
    let x = -1;
    const _ = [], A = m.enter("tableRow");
    for (; ++x < w.length; )
      _[x] = s(w[x], p, m, b);
    return A(), _;
  }
  function h(p, m, b) {
    let w = es.inlineCode(p, m, b);
    return b.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function V1() {
  return {
    exit: {
      taskListCheckValueChecked: ra,
      taskListCheckValueUnchecked: ra,
      paragraph: W1
    }
  };
}
function G1() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: q1 }
  };
}
function ra(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function W1(e) {
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
function q1(e, t, n, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", a = "[" + (e.checked ? "x" : " ") + "] ", l = n.createTracker(r);
  o && l.move(a);
  let s = es.listItem(e, t, n, {
    ...r,
    ...l.current()
  });
  return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(f) {
    return f + a;
  }
}
function Y1() {
  return [
    Am(),
    qm(),
    Zm(),
    F1(),
    V1()
  ];
}
function X1(e) {
  return {
    extensions: [
      _m(),
      Ym(e),
      Qm(),
      j1(e),
      G1()
    ]
  };
}
const K1 = {
  tokenize: ng,
  partial: !0
}, ts = {
  tokenize: rg,
  partial: !0
}, ns = {
  tokenize: ig,
  partial: !0
}, rs = {
  tokenize: og,
  partial: !0
}, Z1 = {
  tokenize: ag,
  partial: !0
}, is = {
  name: "wwwAutolink",
  tokenize: eg,
  previous: as
}, os = {
  name: "protocolAutolink",
  tokenize: tg,
  previous: ls
}, wt = {
  name: "emailAutolink",
  tokenize: J1,
  previous: ss
}, yt = {};
function Q1() {
  return {
    text: yt
  };
}
let Nt = 48;
for (; Nt < 123; )
  yt[Nt] = wt, Nt++, Nt === 58 ? Nt = 65 : Nt === 91 && (Nt = 97);
yt[43] = wt;
yt[45] = wt;
yt[46] = wt;
yt[95] = wt;
yt[72] = [wt, os];
yt[104] = [wt, os];
yt[87] = [wt, is];
yt[119] = [wt, is];
function J1(e, t, n) {
  const r = this;
  let i, o;
  return a;
  function a(c) {
    return !qr(c) || !ss.call(r, r.previous) || yi(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), l(c));
  }
  function l(c) {
    return qr(c) ? (e.consume(c), l) : c === 64 ? (e.consume(c), s) : n(c);
  }
  function s(c) {
    return c === 46 ? e.check(Z1, f, u)(c) : c === 45 || c === 95 || Be(c) ? (o = !0, e.consume(c), s) : f(c);
  }
  function u(c) {
    return e.consume(c), i = !0, s;
  }
  function f(c) {
    return o && i && Ge(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function eg(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a !== 87 && a !== 119 || !as.call(r, r.previous) || yi(r.events) ? n(a) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(K1, e.attempt(ts, e.attempt(ns, o), n), n)(a));
  }
  function o(a) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(a);
  }
}
function tg(e, t, n) {
  const r = this;
  let i = "", o = !1;
  return a;
  function a(c) {
    return (c === 72 || c === 104) && ls.call(r, r.previous) && !yi(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), l) : n(c);
  }
  function l(c) {
    if (Ge(c) && i.length < 5)
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
    return c === null || zn(c) || ye(c) || Ot(c) || Wn(c) ? n(c) : e.attempt(ts, e.attempt(ns, f), n)(c);
  }
  function f(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function ng(e, t, n) {
  let r = 0;
  return i;
  function i(a) {
    return (a === 87 || a === 119) && r < 3 ? (r++, e.consume(a), i) : a === 46 && r === 3 ? (e.consume(a), o) : n(a);
  }
  function o(a) {
    return a === null ? n(a) : t(a);
  }
}
function rg(e, t, n) {
  let r, i, o;
  return a;
  function a(u) {
    return u === 46 || u === 95 ? e.check(rs, s, l)(u) : u === null || ye(u) || Ot(u) || u !== 45 && Wn(u) ? s(u) : (o = !0, e.consume(u), a);
  }
  function l(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), a;
  }
  function s(u) {
    return i || r || !o ? n(u) : t(u);
  }
}
function ig(e, t) {
  let n = 0, r = 0;
  return i;
  function i(a) {
    return a === 40 ? (n++, e.consume(a), i) : a === 41 && r < n ? o(a) : a === 33 || a === 34 || a === 38 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 60 || a === 63 || a === 93 || a === 95 || a === 126 ? e.check(rs, t, o)(a) : a === null || ye(a) || Ot(a) ? t(a) : (e.consume(a), i);
  }
  function o(a) {
    return a === 41 && r++, e.consume(a), i;
  }
}
function og(e, t, n) {
  return r;
  function r(l) {
    return l === 33 || l === 34 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 63 || l === 95 || l === 126 ? (e.consume(l), r) : l === 38 ? (e.consume(l), o) : l === 93 ? (e.consume(l), i) : (
      // `<` is an end.
      l === 60 || // So is whitespace.
      l === null || ye(l) || Ot(l) ? t(l) : n(l)
    );
  }
  function i(l) {
    return l === null || l === 40 || l === 91 || ye(l) || Ot(l) ? t(l) : r(l);
  }
  function o(l) {
    return Ge(l) ? a(l) : n(l);
  }
  function a(l) {
    return l === 59 ? (e.consume(l), r) : Ge(l) ? (e.consume(l), a) : n(l);
  }
}
function ag(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return Be(o) ? n(o) : t(o);
  }
}
function as(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || ye(e);
}
function ls(e) {
  return !Ge(e);
}
function ss(e) {
  return !(e === 47 || qr(e));
}
function qr(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Be(e);
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
const lg = {
  tokenize: mg,
  partial: !0
};
function sg() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: pg,
        continuation: {
          tokenize: hg
        },
        exit: dg
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: fg
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: ug,
        resolveTo: cg
      }
    }
  };
}
function ug(e, t, n) {
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
    const u = lt(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function cg(e, t) {
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
function fg(e, t, n) {
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
      c === null || c === 91 || ye(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const h = e.exit("gfmFootnoteCallString");
      return i.includes(lt(r.sliceSerialize(h))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return ye(c) || (a = !0), o++, e.consume(c), c === 92 ? f : u;
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, u) : u(c);
  }
}
function pg(e, t, n) {
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
      m === null || m === 91 || ye(m)
    )
      return n(m);
    if (m === 93) {
      e.exit("chunkString");
      const b = e.exit("gfmFootnoteDefinitionLabelString");
      return o = lt(r.sliceSerialize(b)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h;
    }
    return ye(m) || (l = !0), a++, e.consume(m), m === 92 ? c : f;
  }
  function c(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), a++, f) : f(m);
  }
  function h(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), i.includes(o) || i.push(o), se(e, p, "gfmFootnoteDefinitionWhitespace")) : n(m);
  }
  function p(m) {
    return t(m);
  }
}
function hg(e, t, n) {
  return e.check(xn, t, e.attempt(lg, t, n));
}
function dg(e) {
  e.exit("gfmFootnoteDefinition");
}
function mg(e, t, n) {
  const r = this;
  return se(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "gfmFootnoteDefinitionIndent" && a[2].sliceSerialize(a[1], !0).length === 4 ? t(o) : n(o);
  }
}
function gg(e) {
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
            p && Qe(h, h.length, 0, qn(p, a.slice(u + 1, s), l)), Qe(h, h.length, 0, [["exit", c, l], ["enter", a[s][1], l], ["exit", a[s][1], l], ["exit", f, l]]), Qe(a, u - 1, s - u + 3, h), s = u + h.length - 2;
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
      const b = Xt(u);
      if (m === 126)
        return c > 1 ? s(m) : (a.consume(m), c++, p);
      if (c < 2 && !n) return s(m);
      const w = a.exit("strikethroughSequenceTemporary"), x = Xt(m);
      return w._open = !x || x === 2 && !!b, w._close = !b || b === 2 && !!x, l(m);
    }
  }
}
class yg {
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
    bg(this, t, n, r);
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
function bg(e, t, n, r) {
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
function xg(e, t) {
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
function kg() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: wg,
        resolveAll: Cg
      }
    }
  };
}
function wg(e, t, n) {
  const r = this;
  let i = 0, o = 0, a;
  return l;
  function l(C) {
    let z = r.events.length - 1;
    for (; z > -1; ) {
      const re = r.events[z][1].type;
      if (re === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      re === "linePrefix") z--;
      else break;
    }
    const F = z > -1 ? r.events[z][1].type : null, J = F === "tableHead" || F === "tableRow" ? E : s;
    return J === E && r.parser.lazy[r.now().line] ? n(C) : J(C);
  }
  function s(C) {
    return e.enter("tableHead"), e.enter("tableRow"), u(C);
  }
  function u(C) {
    return C === 124 || (a = !0, o += 1), f(C);
  }
  function f(C) {
    return C === null ? n(C) : V(C) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), p) : n(C) : ie(C) ? se(e, f, "whitespace")(C) : (o += 1, a && (a = !1, i += 1), C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), a = !0, f) : (e.enter("data"), c(C)));
  }
  function c(C) {
    return C === null || C === 124 || ye(C) ? (e.exit("data"), f(C)) : (e.consume(C), C === 92 ? h : c);
  }
  function h(C) {
    return C === 92 || C === 124 ? (e.consume(C), c) : c(C);
  }
  function p(C) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(C) : (e.enter("tableDelimiterRow"), a = !1, ie(C) ? se(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(C) : m(C));
  }
  function m(C) {
    return C === 45 || C === 58 ? w(C) : C === 124 ? (a = !0, e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), b) : O(C);
  }
  function b(C) {
    return ie(C) ? se(e, w, "whitespace")(C) : w(C);
  }
  function w(C) {
    return C === 58 ? (o += 1, a = !0, e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), x) : C === 45 ? (o += 1, x(C)) : C === null || V(C) ? P(C) : O(C);
  }
  function x(C) {
    return C === 45 ? (e.enter("tableDelimiterFiller"), _(C)) : O(C);
  }
  function _(C) {
    return C === 45 ? (e.consume(C), _) : C === 58 ? (a = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), A) : (e.exit("tableDelimiterFiller"), A(C));
  }
  function A(C) {
    return ie(C) ? se(e, P, "whitespace")(C) : P(C);
  }
  function P(C) {
    return C === 124 ? m(C) : C === null || V(C) ? !a || i !== o ? O(C) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(C)) : O(C);
  }
  function O(C) {
    return n(C);
  }
  function E(C) {
    return e.enter("tableRow"), G(C);
  }
  function G(C) {
    return C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), G) : C === null || V(C) ? (e.exit("tableRow"), t(C)) : ie(C) ? se(e, G, "whitespace")(C) : (e.enter("data"), X(C));
  }
  function X(C) {
    return C === null || C === 124 || ye(C) ? (e.exit("data"), G(C)) : (e.consume(C), C === 92 ? K : X);
  }
  function K(C) {
    return C === 92 || C === 124 ? (e.consume(C), X) : X(C);
  }
}
function Cg(e, t) {
  let n = -1, r = !0, i = 0, o = [0, 0, 0, 0], a = [0, 0, 0, 0], l = !1, s = 0, u, f, c;
  const h = new yg();
  for (; ++n < e.length; ) {
    const p = e[n], m = p[1];
    p[0] === "enter" ? m.type === "tableHead" ? (l = !1, s !== 0 && (ia(h, t, s, u, f), f = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, h.add(n, 0, [["enter", u, t]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, c = void 0, o = [0, 0, 0, 0], a = [0, n + 1, 0, 0], l && (l = !1, f = {
      type: "tableBody",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, h.add(n, 0, [["enter", f, t]])), i = m.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, a[2] === 0 && (o[1] !== 0 && (a[0] = a[1], c = Rn(h, t, o, i, void 0, c), o = [0, 0, 0, 0]), a[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (a[0] = a[1], c = Rn(h, t, o, i, void 0, c)), o = a, a = [o[1], n, 0, 0])) : m.type === "tableHead" ? (l = !0, s = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (s = n, o[1] !== 0 ? (a[0] = a[1], c = Rn(h, t, o, i, n, c)) : a[1] !== 0 && (c = Rn(h, t, a, i, n, c)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (a[3] = n);
  }
  for (s !== 0 && ia(h, t, s, u, f), h.consume(t.events), n = -1; ++n < t.events.length; ) {
    const p = t.events[n];
    p[0] === "enter" && p[1].type === "table" && (p[1]._align = xg(t.events, n));
  }
  return e;
}
function Rn(e, t, n, r, i, o) {
  const a = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", l = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, Gt(t.events, n[0])), e.add(n[0], 0, [["exit", o, t]]));
  const s = Gt(t.events, n[1]);
  if (o = {
    type: a,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", o, t]]), n[2] !== 0) {
    const u = Gt(t.events, n[2]), f = Gt(t.events, n[3]), c = {
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
  return i !== void 0 && (o.end = Object.assign({}, Gt(t.events, i)), e.add(i, 0, [["exit", o, t]]), o = void 0), o;
}
function ia(e, t, n, r, i) {
  const o = [], a = Gt(t.events, n);
  i && (i.end = Object.assign({}, a), o.push(["exit", i, t])), r.end = Object.assign({}, a), o.push(["exit", r, t]), e.add(n + 1, 0, o);
}
function Gt(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Sg = {
  name: "tasklistCheck",
  tokenize: Tg
};
function Eg() {
  return {
    text: {
      91: Sg
    }
  };
}
function Tg(e, t, n) {
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
    return ye(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), a) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), a) : n(s);
  }
  function a(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), l) : n(s);
  }
  function l(s) {
    return V(s) ? t(s) : ie(s) ? e.check({
      tokenize: Ag
    }, t, n)(s) : n(s);
  }
}
function Ag(e, t, n) {
  return se(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function _g(e) {
  return bl([
    Q1(),
    sg(),
    gg(e),
    kg(),
    Eg()
  ]);
}
const Ig = {};
function vg(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || Ig, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), a = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(_g(n)), o.push(Y1()), a.push(X1(n));
}
const Lg = 'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])', Rg = (e) => {
  const { src: t, alt: n, onClose: r } = e, i = Te(null), o = Te(null), a = Te(null);
  He(() => {
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
      const f = Array.from(u.querySelectorAll(Lg)).filter(
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
}, us = oe((e) => {
  const { code: t } = e, { svg: n, error: r } = Pc(t);
  return r ? /* @__PURE__ */ S("pre", { className: "elitea-assistant-mermaid-error", children: /* @__PURE__ */ S("code", { children: t }) }) : n ? /* @__PURE__ */ S(
    "div",
    {
      style: { overflowX: "auto", maxWidth: "100%" },
      dangerouslySetInnerHTML: { __html: n }
    }
  ) : null;
});
us.displayName = "MermaidBlock";
const bi = oe((e) => {
  const { content: t, isAnimating: n = !1 } = e, r = Oc(), [i, o] = fe(null), a = q(() => o(null), []);
  return /* @__PURE__ */ me($n, { children: [
    /* @__PURE__ */ S("div", { className: "elitea-assistant-markdown", children: /* @__PURE__ */ S(
      gm,
      {
        remarkPlugins: [vg],
        rehypePlugins: !n && r ? [r] : [],
        components: {
          code(s) {
            var p;
            const { className: u, children: f } = s, c = (p = /language-(\w+)/.exec(u ?? "")) == null ? void 0 : p[1], h = String(f ?? "").replace(/\n$/, "");
            return c === "mermaid" && !n ? /* @__PURE__ */ S(us, { code: h }) : /* @__PURE__ */ S("code", { className: u, children: f });
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
    i && oa(
      /* @__PURE__ */ S(
        Rg,
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
const Dg = {
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
}, Ng = {
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
}, Pg = {
  light: Dg,
  dark: Ng
}, Og = (e, t) => ({
  ...Pg[e],
  ...t
}), Mg = (e) => ({
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
}), Fg = _s((e, t) => {
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
  } = e, m = gt(() => Mg(Og(c, h)), [c, h]), b = gt(() => {
    if (a) return a;
    if (n && (r || i)) return Ls(n, { token: r, withCredentials: i });
    throw new Error(
      "EliteaAssistant: provide either apiAdapter, or apiUrl with token, or apiUrl with withCredentials"
    );
  }, [a, n, r, i]), w = gt(
    () => ({
      url: n ? js(n) : "",
      path: o,
      token: r,
      withCredentials: i
    }),
    [n, o, r, i]
  ), x = qu(w), {
    title: _,
    welcomeMessage: A,
    placeholder: P,
    supportProjectId: O,
    user: E,
    history: G,
    lastConversation: X,
    isLoading: K
  } = qs({
    api: b,
    title: l,
    welcomeMessage: u,
    placeholder: s
  }), { isOpen: C, isExpanded: z, open: F, close: J, toggle: re, expandFullscreen: $, collapseFullscreen: ce, toggleFullscreen: pe } = Ms(), ke = Gu(), { popupVissible: ve, showPopup: g, hidePopup: ee, popupText: De } = Ys(C), y = q(() => {
    ke.captureScreenshot(), g();
  }, [ke, g]), Se = q(() => {
    ke.clearScreenshot(), ee();
  }, [ke, ee]);
  return Is(
    t,
    () => ({
      open: F,
      close: J,
      toggle: re,
      expandFullscreen: $,
      collapseFullscreen: ce,
      toggleFullscreen: pe,
      showPopup: y,
      hidePopup: Se,
      isOpen: () => C,
      isExpanded: () => z
    }),
    [
      C,
      z,
      F,
      J,
      re,
      $,
      ce,
      pe,
      y,
      Se
    ]
  ), /* @__PURE__ */ S(Ia.Provider, { value: b, children: /* @__PURE__ */ S(Va.Provider, { value: x, children: /* @__PURE__ */ S(Ga.Provider, { value: p ?? null, children: /* @__PURE__ */ S(Xa.Provider, { value: c, children: /* @__PURE__ */ S(ja.Provider, { value: ke, children: /* @__PURE__ */ me(
    "div",
    {
      className: `elitea-assistant-container elitea-assistant-container--${f}`,
      style: m,
      children: [
        /* @__PURE__ */ S(
          Ka,
          {
            title: _,
            placeholder: P,
            welcomeMessage: A,
            avatar: E.avatar,
            supportProjectId: O,
            initialHistory: G,
            lastConversation: X,
            isInitLoading: K,
            isOpen: C,
            onClose: J,
            expanded: z,
            onExpand: pe
          }
        ),
        ve && !C && /* @__PURE__ */ S(
          Za,
          {
            message: De,
            onClose: Se
          }
        ),
        /* @__PURE__ */ S(ya, { onClick: re })
      ]
    }
  ) }) }) }) }) });
});
Fg.displayName = "EliteaAssistant";
export {
  Fg as EliteaAssistant,
  Ls as createDefaultAdapter
};
//# sourceMappingURL=elitea-assistant.js.map
