(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`@import "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";.elitea-assistant-container{z-index:2147483647;box-sizing:border-box;font-family:Montserrat,sans-serif;font-size:.875rem;line-height:1.5;position:fixed}.elitea-assistant-container *,.elitea-assistant-container :before,.elitea-assistant-container :after{box-sizing:border-box}.elitea-assistant-container--bottom-right{bottom:.75rem;right:1.09375rem}.elitea-assistant-container--bottom-left{bottom:.75rem;left:1.09375rem}.elitea-assistant-button{cursor:pointer;background:var(--elitea-assistant-button-bg);width:1.75rem;height:1.75rem;color:var(--elitea-assistant-button-icon);border:none;border-radius:50%;justify-content:center;align-items:center;padding:0;transition:transform .2s,box-shadow .2s;display:flex;box-shadow:0 .25rem .75rem #00000026}.elitea-assistant-button:hover{transform:scale(1.08);box-shadow:0 .375rem 1.25rem #0003}.elitea-assistant-button svg{fill:currentColor;width:1.75rem;height:1.75rem}.elitea-assistant-window{width:28.75rem;height:30rem;box-shadow:var(--elitea-assistant-window-shadow);background:var(--elitea-assistant-chat-bg);border:.0625rem solid var(--elitea-assistant-window-border);border-radius:1rem;flex-direction:column;animation:.25s ease-out elitea-assistant-slide-up;display:flex;position:absolute;bottom:0;overflow:hidden}.elitea-assistant-container--bottom-right .elitea-assistant-window{right:2.875rem}.elitea-assistant-container--bottom-left .elitea-assistant-window{left:2.875rem}@keyframes elitea-assistant-slide-up{0%{opacity:0;transform:translateY(.75rem)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-overlay{z-index:2147483646;background:#00000080;justify-content:center;align-items:center;animation:.2s ease-out elitea-assistant-fade-in;display:flex;position:fixed;inset:0}@keyframes elitea-assistant-fade-in{0%{opacity:0}to{opacity:1}}.elitea-assistant-window.elitea-assistant-window--expanded{z-index:2147483647;width:45rem;max-width:calc(100vw - 2rem);height:42.375rem;max-height:calc(100vh - 2rem);margin:auto;animation:.2s ease-out elitea-assistant-scale-in;position:fixed;inset:0}@media (width<=48rem){.elitea-assistant-window.elitea-assistant-window--expanded{border-radius:.75rem;width:calc(100vw - 2rem);height:calc(100vh - 2rem)}}@keyframes elitea-assistant-scale-in{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.elitea-assistant-header{background:var(--elitea-assistant-header-bg);height:3.25rem;color:var(--elitea-assistant-header-text);border-bottom:.0625rem solid var(--elitea-assistant-window-border);flex-shrink:0;justify-content:space-between;align-items:center;padding:0 1rem;display:flex}.elitea-assistant-header-left,.elitea-assistant-header-right{align-items:center;gap:.5rem;display:flex}.elitea-assistant-header-title{white-space:nowrap;margin:0;font-size:.9375rem;font-weight:600}.elitea-assistant-header-action{color:var(--elitea-assistant-header-text);cursor:pointer;width:1.75rem;min-width:auto;height:1.75rem;box-shadow:none;background:var(--elitea-assistant-header-action-bg);border:.0625rem solid #0000;border-radius:50%;justify-content:center;align-items:center;padding:0;transition:background .15s,color .15s,border-color .15s;display:flex}.elitea-assistant-header-close-action{color:var(--elitea-assistant-header-close-icon);cursor:pointer;background:var(--elitea-assistant-header-close-bg);border:none;border-radius:50%;justify-content:center;align-items:center;width:1.75rem;min-width:auto;height:1.75rem;padding:0;transition:background .15s,color .15s;display:flex}.elitea-assistant-header-close-action:hover{background:var(--elitea-assistant-header-close-hover-bg);color:var(--elitea-assistant-header-close-hover-color)}.elitea-assistant-header-close-action:active{background:var(--elitea-assistant-header-close-active-bg);color:var(--elitea-assistant-header-close-active-color)}.elitea-assistant-header-close-action:disabled{background:var(--elitea-assistant-header-close-disabled-bg);color:var(--elitea-assistant-header-close-disabled-color);cursor:not-allowed}.elitea-assistant-header-action:hover{background:var(--elitea-assistant-header-action-hover-bg)}.elitea-assistant-header-action:active{background:var(--elitea-assistant-header-action-active-bg);color:var(--elitea-assistant-header-action-active-color);border-color:var(--elitea-assistant-header-action-active-border)}.elitea-assistant-header-action svg{fill:currentColor;width:1rem;height:1rem}.elitea-assistant-header-close-action svg{fill:currentColor;width:1.3rem;height:1.3rem}.elitea-assistant-history-wrapper{position:relative}.elitea-assistant-header-action:disabled{background:var(--elitea-assistant-header-action-disabled-bg);color:var(--elitea-assistant-header-action-disabled-color);cursor:not-allowed}.elitea-assistant-header-action:disabled:hover{background:var(--elitea-assistant-header-action-disabled-bg)}.elitea-assistant-history-dropdown{width:19.125rem;max-height:21.875rem;padding:.5rem 0;top:calc(100% + .55rem);right:-2.65rem}.elitea-assistant-history-dropdown-scroll{max-height:20.875rem;overflow-y:auto}.elitea-assistant-history-item{cursor:pointer;text-align:left;width:100%;color:var(--elitea-assistant-header-text);text-overflow:ellipsis;white-space:nowrap;background:0 0;border:none;padding:.5rem .75rem;font-size:.875rem;font-weight:400;line-height:1.5rem;transition:background .15s;display:block;overflow:hidden}.elitea-assistant-history-item:hover{background:var(--elitea-assistant-history-dropdown-hover-bg)}.elitea-assistant-history-item:disabled{opacity:.45;cursor:default;background:0 0}.elitea-assistant-messages{flex-direction:column;flex:1;gap:.625rem;padding:1rem;display:flex;overflow-y:auto}.elitea-assistant-message-wrapper{flex-direction:column;max-width:80%;display:flex}.elitea-assistant-message-wrapper--user{align-self:flex-end}.elitea-assistant-message-wrapper--assistant{align-self:flex-start}.elitea-assistant-message-meta{align-items:center;gap:.375rem;margin-bottom:.375rem;display:flex}.elitea-assistant-message-meta--assistant{justify-content:flex-start}.elitea-assistant-message-meta--user{justify-content:flex-end}.elitea-assistant-message-avatar{border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;width:1.5rem;height:1.5rem;display:flex}.elitea-assistant-message-avatar--assistant{background:var(--elitea-assistant-button-bg);color:var(--elitea-assistant-button-icon)}.elitea-assistant-message-avatar--user{background:var(--elitea-assistant-user-avatar-bg);color:var(--elitea-assistant-user-avatar-icon)}.elitea-assistant-message-avatar svg{fill:currentColor;width:1.25rem;height:1.25rem}.elitea-assistant-message-avatar img{object-fit:cover;border-radius:50%;width:100%;height:100%}.elitea-assistant-message-time{opacity:.6;color:var(--elitea-assistant-bot-msg-text);font-size:.75rem}.elitea-assistant-message{word-wrap:break-word;font-weight:400;font-style:Regular;letter-spacing:0%;border-radius:.75rem;padding:.625rem .875rem;font-size:.875rem;line-height:1.5rem}.elitea-assistant-message--user{white-space:pre-wrap;background:var(--elitea-assistant-user-msg-bg);color:var(--elitea-assistant-user-msg-text);border-radius:1rem 0 1rem 1rem}.elitea-assistant-message--assistant{background:var(--elitea-assistant-bot-msg-bg);color:var(--elitea-assistant-bot-msg-text);border-radius:0 1rem 1rem;padding-bottom:1.5rem;position:relative}.elitea-assistant-message--assistant>.elitea-assistant-tooltip-trigger{opacity:0;transition:opacity .15s;position:absolute;bottom:.375rem;right:.375rem}.elitea-assistant-message--assistant:hover>.elitea-assistant-tooltip-trigger{opacity:1}.elitea-assistant-message--error{opacity:.9;border:1px solid #e53e3e}@keyframes elitea-assistant-typing-bounce{0%,60%,to{opacity:.25;transform:translateY(0)}30%{opacity:.5;transform:translateY(-.25rem)}}.elitea-assistant-typing-indicator{align-items:center;gap:.1875rem;padding:.125rem 0;display:inline-flex}.elitea-assistant-typing-dot{background:var(--elitea-assistant-bot-msg-text);opacity:.25;border-radius:50%;width:.25rem;height:.25rem;animation:1.2s ease-in-out infinite elitea-assistant-typing-bounce}.elitea-assistant-typing-dot:nth-child(2){animation-delay:.15s}.elitea-assistant-typing-dot:nth-child(3){animation-delay:.3s}@keyframes elitea-assistant-shimmer{0%{opacity:.4}50%{opacity:.7}to{opacity:.4}}.elitea-assistant-skeleton-row{flex-direction:column;gap:.375rem;max-width:70%;display:flex}.elitea-assistant-skeleton-row--left{align-self:flex-start}.elitea-assistant-skeleton-row--right{align-self:flex-end}.elitea-assistant-skeleton-meta{align-items:center;gap:.375rem;display:flex}.elitea-assistant-skeleton-row--right .elitea-assistant-skeleton-meta{justify-content:flex-end}.elitea-assistant-skeleton{background:var(--elitea-assistant-bot-msg-bg);border-radius:.5rem;animation:1.4s ease-in-out infinite elitea-assistant-shimmer}.elitea-assistant-skeleton--avatar{border-radius:50%;flex-shrink:0;width:1.5rem;height:1.5rem}.elitea-assistant-skeleton--time{border-radius:.25rem;width:2.5rem;height:.75rem}.elitea-assistant-skeleton--bubble{border-radius:.75rem;width:10rem;height:2.5rem}.elitea-assistant-skeleton-row--right .elitea-assistant-skeleton--bubble{width:8rem}.elitea-assistant-empty{color:var(--elitea-assistant-bot-msg-text);opacity:.5;text-align:center;flex:1;justify-content:center;align-items:center;padding:1.25rem;font-size:.8125rem;display:flex}@keyframes elitea-assistant-wave{0%,to{opacity:1}50%{opacity:.3}}.elitea-assistant-status-message{color:var(--elitea-assistant-bot-msg-text);opacity:.7;margin-bottom:.375rem;font-size:.875rem;font-weight:400;line-height:1.25rem}.elitea-assistant-status-message-char{animation:2s ease-in-out infinite elitea-assistant-wave;display:inline-block}.elitea-assistant-markdown{overflow-wrap:break-word}.elitea-assistant-markdown>:first-child{margin-top:0}.elitea-assistant-markdown>:last-child{margin-bottom:0}.elitea-assistant-markdown p{margin:.5em 0}.elitea-assistant-markdown h1,.elitea-assistant-markdown h2,.elitea-assistant-markdown h3,.elitea-assistant-markdown h4,.elitea-assistant-markdown h5,.elitea-assistant-markdown h6{margin:.75em 0 .375em;font-weight:600;line-height:1.3}.elitea-assistant-markdown h1{font-size:1.25em}.elitea-assistant-markdown h2{font-size:1.125em}.elitea-assistant-markdown h3{font-size:1em}.elitea-assistant-markdown ul,.elitea-assistant-markdown ol{margin:.5em 0;padding-left:1.5em}.elitea-assistant-markdown li{margin:.25em 0}.elitea-assistant-markdown li>ul,.elitea-assistant-markdown li>ol{margin:.125em 0}.elitea-assistant-markdown code{background:#0000000f;border-radius:.25em;padding:.125em .3em;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,monospace;font-size:.85em}.elitea-assistant-markdown pre{background:#0000000f;border-radius:.375em;margin:.5em 0;padding:.625em .75em;overflow-x:auto}.elitea-assistant-markdown pre code{white-space:pre;background:0 0;padding:0;font-size:.8125em}.elitea-assistant-markdown blockquote{opacity:.85;border-left:3px solid #00000026;margin:.5em 0;padding:.25em .75em}.elitea-assistant-markdown blockquote>:first-child{margin-top:0}.elitea-assistant-markdown blockquote>:last-child{margin-bottom:0}.elitea-assistant-markdown hr{border:none;border-top:1px solid #0000001a;margin:.75em 0}.elitea-assistant-markdown table{border-collapse:collapse;width:100%;margin:.5em 0;font-size:.85em}.elitea-assistant-markdown th,.elitea-assistant-markdown td{text-align:left;border:1px solid #0000001a;padding:.375em .625em}.elitea-assistant-markdown th{background:#00000008;font-weight:600}.elitea-assistant-markdown a{color:var(--elitea-assistant-button-bg);text-decoration:underline}.elitea-assistant-markdown strong{font-weight:600}.elitea-assistant-markdown img{border-radius:.375em;max-width:100%}.elitea-assistant-img-btn{cursor:zoom-in;background:0 0;border:none;border-radius:.375em;margin:0;padding:0;transition:opacity .15s;display:inline-block}.elitea-assistant-img-btn:hover{opacity:.88}.elitea-assistant-img-btn:focus-visible{outline:2px solid var(--elitea-assistant-button-bg,#6366f1);outline-offset:2px}.elitea-assistant-img-btn img{display:block}.elitea-assistant-lightbox-overlay{z-index:2147483647;cursor:zoom-out;background:#000000d1;justify-content:center;align-items:center;animation:.15s elitea-lightbox-fade-in;display:flex;position:fixed;inset:0}@keyframes elitea-lightbox-fade-in{0%{opacity:0}to{opacity:1}}.elitea-assistant-lightbox-img{cursor:default;object-fit:contain;border-radius:.5em;max-width:90vw;max-height:90vh;box-shadow:0 8px 40px #0009}.elitea-assistant-lightbox-close{color:#fff;cursor:pointer;background:#ffffff26;border:none;border-radius:50%;justify-content:center;align-items:center;width:2rem;height:2rem;font-size:.875rem;line-height:1;transition:background .15s;display:flex;position:fixed;top:1rem;right:1.25rem}.elitea-assistant-lightbox-close:hover{background:#ffffff47}.elitea-assistant-lightbox-close:focus-visible{outline-offset:2px;outline:2px solid #fff}.elitea-assistant-input-area{background:var(--elitea-assistant-input-bg);border-top:.0625rem solid var(--elitea-assistant-window-border);flex-direction:column;flex-shrink:0;padding:.75rem;display:flex;position:relative}.elitea-assistant-input-area--drag-over>:not(.elitea-assistant-drop-overlay){visibility:hidden}.elitea-assistant-drop-overlay{border:2px dashed var(--elitea-assistant-send-btn-bg);color:var(--elitea-assistant-input-text);z-index:10;border-radius:0 0 1rem 1rem;justify-content:center;align-items:center;font-size:.875rem;display:flex;position:absolute;inset:0}.elitea-assistant-input-row{align-items:center;gap:.5rem;width:100%;display:flex}.elitea-assistant-input{color:var(--elitea-assistant-input-text);resize:none;background:0 0;border:none;border-radius:0;outline:none;flex:1;max-height:10rem;padding:.5rem .25rem;font-family:inherit;font-size:.875rem;overflow-y:auto}.elitea-assistant-input-area--resizable{cursor:ns-resize}:is(.elitea-assistant-input-area--resizable:has(.elitea-assistant-resize-handle:hover),.elitea-assistant-input-area--resizing){border-top-width:.125rem}.elitea-assistant-resize-handle{cursor:ns-resize;z-index:1;height:.375rem;position:absolute;top:0;left:0;right:0}.elitea-assistant-input--expanded{max-height:16rem}.elitea-assistant-input::placeholder{color:var(--elitea-assistant-input-placeholder);opacity:1}.elitea-assistant-attach-button{cursor:pointer;background:var(--elitea-assistant-header-action-bg);width:1.75rem;height:1.75rem;color:var(--elitea-assistant-header-text);opacity:.8;border:none;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;padding:0;transition:opacity .15s;display:flex}.elitea-assistant-attach-button:hover{opacity:1}.elitea-assistant-attach-button svg{fill:currentColor;width:.875rem;height:.875rem}.elitea-assistant-send-button{cursor:pointer;background:var(--elitea-assistant-send-btn-bg);width:1.75rem;height:1.75rem;color:var(--elitea-assistant-send-btn-icon);border:none;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;padding:0;transition:background .15s;display:flex}.elitea-assistant-send-button:disabled{background:var(--elitea-assistant-send-btn-disabled-bg);cursor:default}.elitea-assistant-send-button svg{fill:currentColor;width:.875rem;height:.875rem}.elitea-assistant-stop-button{cursor:pointer;background:var(--elitea-assistant-error-color,#ef4444);width:1.75rem;height:1.75rem;color:var(--elitea-assistant-send-btn-icon,#fff);border:none;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;padding:0;transition:background .15s;display:flex}.elitea-assistant-stop-button:hover{background:var(--elitea-assistant-error-hover,#dc2626)}.elitea-assistant-stop-button svg{fill:currentColor;width:1.125rem;height:1.125rem}.elitea-assistant-file-list{align-items:center;gap:.5rem;padding-bottom:.5rem;display:flex}.elitea-assistant-file-chip{background:var(--elitea-assistant-header-action-bg);border-radius:.5rem;flex-shrink:0;align-items:center;gap:.75rem;max-width:11.25rem;height:2.25rem;padding:.375rem .75rem;display:flex}.elitea-assistant-file-chip-icon{color:var(--elitea-assistant-header-close-icon);flex-shrink:0;justify-content:center;align-items:center;display:flex}.elitea-assistant-file-chip-icon svg{width:.75rem;height:.875rem}.elitea-assistant-file-chip-name{min-width:0;color:var(--elitea-assistant-input-text);white-space:nowrap;text-overflow:ellipsis;flex:1;font-size:.75rem;overflow:hidden}.elitea-assistant-file-chip-remove{cursor:pointer;width:1rem;height:1rem;color:var(--elitea-assistant-header-close-icon);opacity:.7;background:0 0;border:none;flex-shrink:0;justify-content:center;align-items:center;padding:0;transition:opacity .15s;display:flex}.elitea-assistant-file-chip-remove:hover{opacity:1}.elitea-assistant-file-chip-remove svg{fill:currentColor;width:2rem;height:2rem}.elitea-assistant-file-chip--count{color:var(--elitea-assistant-input-text);cursor:pointer;opacity:.8;border:none;gap:0;max-width:none;font-size:.75rem;font-weight:400;transition:opacity .15s}.elitea-assistant-file-chip--count:hover{opacity:1}.elitea-assistant-overflow-wrapper{position:relative}.elitea-assistant-dropdown{background:var(--elitea-assistant-chat-bg);border:.0625rem solid var(--elitea-assistant-history-dropdown-border);box-shadow:var(--elitea-assistant-history-dropdown-shadow);z-index:100;border-radius:.5rem;padding:.25rem 0;position:absolute}.elitea-assistant-overflow-dropdown{min-width:13.75rem;max-width:18.75rem;max-height:25rem;bottom:calc(100% + .375rem);right:0;overflow-y:auto}.elitea-assistant-overflow-item{align-items:center;gap:.5rem;padding:.5rem .75rem;transition:background .15s;display:flex}.elitea-assistant-overflow-item:hover{background:var(--elitea-assistant-history-dropdown-hover-bg)}.elitea-assistant-overflow-item-name{min-width:0;color:var(--elitea-assistant-input-text);white-space:nowrap;text-overflow:ellipsis;flex:1;font-size:.75rem;overflow:hidden}.elitea-assistant-file-chip--error{border:1px solid var(--elitea-assistant-error-color,#ef4444);background:var(--elitea-assistant-error-bg,#ef44441a)}.elitea-assistant-file-chip--completed .elitea-assistant-file-chip-icon{color:var(--elitea-assistant-success-color,#22c55e)}.elitea-assistant-file-chip-progress-text{width:1.5625rem;color:var(--elitea-assistant-input-text);text-align:right;flex-shrink:0;font-size:.625rem}.elitea-assistant-file-chip-error-icon{color:var(--elitea-assistant-error-color,#ef4444);flex-shrink:0;justify-content:center;align-items:center;display:flex}.elitea-assistant-file-chip-error-icon svg{fill:currentColor;width:.875rem;height:.875rem}.elitea-assistant-file-chip-icon .elitea-assistant-file-chip-spinner{width:1.25rem;height:1.25rem;color:var(--elitea-assistant-send-btn-bg);flex-shrink:0}.elitea-assistant-file-chip-spinner-progress{transition:stroke-dashoffset .15s}.elitea-assistant-attach-button:disabled{opacity:.5;cursor:not-allowed}.elitea-assistant-tooltip-trigger{display:inline-flex}.elitea-assistant-tooltip{z-index:2147483647;color:#0e131d;word-wrap:break-word;pointer-events:none;background:#e9ebf0;border-radius:.25rem;max-width:20rem;padding:.25rem .5rem;font-family:Montserrat,sans-serif;font-size:.6875rem;font-weight:500;line-height:1.3;transition:opacity .15s;position:fixed;box-shadow:0 0 0 .0625rem #00000014,0 .125rem .5rem #0000001f}@keyframes elitea-tooltip-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-popup{background:var(--elitea-assistant-popup-bg);color:var(--elitea-assistant-popup-text);white-space:nowrap;border-radius:1.5rem 1.5rem 1.5rem 0;align-items:center;gap:1rem;padding:.75rem .75rem .75rem 1.25rem;font-size:.875rem;font-weight:500;line-height:1.5rem;animation:.3s ease-out elitea-assistant-popup-in;display:flex;position:absolute;bottom:.25rem;box-shadow:0 .25rem 1rem #0003}.elitea-assistant-popup:before{content:"";border-radius:inherit;background:var(--elitea-assistant-popup-border);-webkit-mask-composite:xor;pointer-events:none;padding:.0625rem;position:absolute;inset:-.0625rem;-webkit-mask-image:linear-gradient(#fff 0 0),linear-gradient(#fff 0 0);mask-image:linear-gradient(#fff 0 0),linear-gradient(#fff 0 0);-webkit-mask-position:0 0,0 0;mask-position:0 0,0 0;-webkit-mask-size:auto,auto;mask-size:auto,auto;-webkit-mask-repeat:repeat,repeat;mask-repeat:repeat,repeat;-webkit-mask-clip:content-box,border-box;mask-clip:content-box,border-box;-webkit-mask-origin:content-box,border-box;mask-origin:content-box,border-box;-webkit-mask-composite:xor;mask-composite:exclude;-webkit-mask-source-type:auto,auto;mask-mode:match-source,match-source}.elitea-assistant-container--bottom-right .elitea-assistant-popup{border-radius:1.5rem 1.5rem 0;flex-direction:row-reverse;padding:.75rem 1.25rem .75rem .75rem;right:2.5rem}.elitea-assistant-container--bottom-left .elitea-assistant-popup{left:2.5rem}.elitea-assistant-popup-text{-webkit-user-select:none;user-select:none}.elitea-assistant-popup-close{background:var(--elitea-assistant-popup-close-bg);width:1.75rem;height:1.75rem;color:var(--elitea-assistant-popup-text);cursor:pointer;border:none;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;padding:0;transition:background .15s;display:flex}.elitea-assistant-popup-close:hover{background:var(--elitea-assistant-popup-close-hover-bg)}.elitea-assistant-popup-close svg{fill:currentColor;width:1rem;height:1rem}@keyframes elitea-assistant-popup-in{0%{opacity:0;transform:translateY(.5rem)}to{opacity:1;transform:translateY(0)}}.elitea-assistant-toast{z-index:20;color:#fff;background:orange;border-radius:.5rem;align-items:center;gap:.75rem;width:calc(100% - 2rem);padding:.75rem .75rem .75rem 1rem;font-size:.875rem;font-weight:500;line-height:1.4;animation:.2s ease-out elitea-assistant-toast-in;display:flex;position:absolute;top:3.75rem;left:50%;transform:translate(-50%)}.elitea-assistant-toast-icon{flex-shrink:0;justify-content:center;align-items:center;display:flex}.elitea-assistant-toast-icon svg{fill:#fff;width:1.25rem;height:1.25rem}.elitea-assistant-toast-text{-webkit-user-select:none;user-select:none;flex:1}.elitea-assistant-toast-close{color:#fff;cursor:pointer;opacity:.85;background:0 0;border:none;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;width:1.5rem;height:1.5rem;padding:0;transition:opacity .15s;display:flex}.elitea-assistant-toast-close:hover{opacity:1}.elitea-assistant-toast-close svg{fill:currentColor;width:1rem;height:1rem}@keyframes elitea-assistant-toast-in{0%{opacity:0;transform:translate(-50%)translateY(-.5rem)}to{opacity:1;transform:translate(-50%)translateY(0)}}
/*$vite$:1*/`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { createContext as e, forwardRef as t, memo as n, useCallback as r, useContext as i, useEffect as a, useImperativeHandle as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { createPortal as m } from "react-dom";
import { io as h } from "socket.io-client";
//#region \0rolldown/runtime.js
var g = Object.create, _ = Object.defineProperty, v = Object.getOwnPropertyDescriptor, y = Object.getOwnPropertyNames, b = Object.getPrototypeOf, x = Object.prototype.hasOwnProperty, S = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), C = (e, t) => {
	let n = {};
	for (var r in e) _(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || _(n, Symbol.toStringTag, { value: "Module" }), n;
}, w = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = y(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !x.call(e, s) && s !== n && _(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = v(t, s)) || r.enumerable
	});
	return e;
}, T = (e, t, n) => (n = e == null ? {} : g(b(e)), w(t || !e || !e.__esModule || !x.call(e, "default") ? _(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), E = (e, t = !1) => ({
	...e.token && { Authorization: `Bearer ${e.token}` },
	...t && { "Content-Type": "application/json" }
}), D = (e) => e.withCredentials ? "include" : void 0, O = async (e) => {
	if (!e.ok) throw Error(`${e.status} ${e.statusText}`);
	return e;
}, k = (e, t = {}) => ({
	getConfig: () => fetch(`${e}/config/`, {
		headers: E(t),
		credentials: D(t)
	}).then(O).then((e) => e.json()),
	getConversations: () => fetch(`${e}/conversations/`, {
		headers: E(t),
		credentials: D(t)
	}).then(O).then((e) => e.json()),
	getConversation: (n) => fetch(`${e}/conversation/${n}`, {
		headers: E(t),
		credentials: D(t)
	}).then(O).then((e) => e.json()),
	createConversation: () => fetch(`${e}/conversations/`, {
		method: "POST",
		headers: E(t, !0),
		credentials: D(t),
		body: JSON.stringify({})
	}).then(O).then((e) => e.json()),
	deleteConversation: (n) => fetch(`${e}/conversation/${n}`, {
		method: "DELETE",
		headers: E(t),
		credentials: D(t)
	}).then(O).then(() => void 0),
	uploadFile: (n, r, i) => new Promise((a, o) => {
		let s = new XMLHttpRequest();
		i && s.upload.addEventListener("progress", (e) => {
			e.lengthComputable && i(e.loaded, e.total);
		}), s.addEventListener("load", () => {
			if (s.status >= 200 && s.status < 300) try {
				a(JSON.parse(s.responseText));
			} catch {
				o(/* @__PURE__ */ Error("Failed to parse upload response"));
			}
			else try {
				let e = JSON.parse(s.responseText);
				o(Error(e.error || `Upload failed with status: ${s.status}`));
			} catch {
				o(/* @__PURE__ */ Error(`Upload failed with status: ${s.status}`));
			}
		}), s.addEventListener("error", () => o(/* @__PURE__ */ Error("Upload failed due to network error"))), s.addEventListener("abort", () => o(/* @__PURE__ */ Error("Upload was aborted"))), s.open("POST", `${e}/attachments/${n}`), t.token && s.setRequestHeader("Authorization", `Bearer ${t.token}`), t.withCredentials && (s.withCredentials = !0), s.send(r);
	})
}), A = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 28 28",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", { d: "M14.2499 4.375C14.8319 4.375 15.3037 4.84137 15.3037 5.41666C15.3037 5.87017 15.0104 6.25575 14.6012 6.39877V8.26399H14.9524C15.5109 8.26399 15.9675 8.69328 16.0037 9.23621H18.2544C20.5477 9.23621 22.4397 10.9331 22.7159 13.1259C23.2816 13.1443 23.7344 13.6031 23.7344 14.1667V15.6945C23.7343 16.2697 23.2625 16.7362 22.6805 16.7362C22.6637 16.7362 22.6469 16.7356 22.6302 16.7348C22.2147 18.5198 20.7287 19.6036 18.2544 20.0695C15.3037 20.625 9.26175 21.875 9.26175 21.875L10.1048 20.0695C8.0024 20.0695 6.23719 18.643 5.74513 16.7159C5.67822 16.7291 5.60903 16.7362 5.53821 16.7362C4.95623 16.7362 4.48444 16.2697 4.48438 15.6945V14.1667C4.48438 13.5914 4.95619 13.1251 5.53821 13.1251C5.57345 13.1251 5.60828 13.1267 5.64263 13.1301C5.91693 10.9353 7.81012 9.23621 10.1048 9.23621H12.3556C12.3917 8.69328 12.8484 8.26399 13.4068 8.26399H13.7581V6.33788C13.4239 6.1632 13.1961 5.81633 13.1961 5.41666C13.1961 4.84137 13.6679 4.375 14.2499 4.375ZM11.2289 11.3195C9.44405 11.3195 7.99715 12.7497 7.99715 14.5139V14.6528C7.99721 16.417 9.44409 17.8473 11.2289 17.8473H17.1304C18.9152 17.8473 20.362 16.417 20.3621 14.6528V14.5139C20.3621 12.7497 18.9152 11.3195 17.1304 11.3195H11.2289ZM11.4397 13.5416C12.0217 13.5416 12.4935 14.008 12.4935 14.5833C12.4935 15.1585 12.0217 15.6249 11.4397 15.6249C10.8577 15.6249 10.3858 15.1585 10.3858 14.5833C10.3858 14.008 10.8577 13.5416 11.4397 13.5416ZM16.9196 13.5416C17.5016 13.5416 17.9734 14.008 17.9734 14.5833C17.9734 15.1585 17.5016 15.6249 16.9196 15.6249C16.3376 15.6249 15.8658 15.1585 15.8658 14.5833C15.8658 14.008 16.3376 13.5416 16.9196 13.5416Z" })
}));
A.displayName = "AssistantIcon";
//#endregion
//#region src/components/icons/AttachmentIcon.tsx
var j = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 12 14",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", { d: "M11.5876 6.6172C11.6361 6.66719 11.6746 6.72656 11.7008 6.7919C11.7271 6.85725 11.7406 6.9273 11.7406 6.99804C11.7406 7.06878 11.7271 7.13883 11.7008 7.20417C11.6746 7.26952 11.6361 7.32889 11.5876 7.37888L6.23589 12.8964C5.55078 13.6031 4.6216 14.0001 3.65277 14C2.68393 13.9999 1.7548 13.6028 1.06978 12.8961C0.384749 12.1893 -6.11425e-05 11.2307 7.28683e-09 10.2313C6.11571e-05 9.2318 0.384988 8.2733 1.0701 7.56661L7.5443 0.789483C8.03342 0.284364 8.69701 0.000378941 9.3891 3.78958e-07C10.0812 -0.000378183 10.7451 0.282881 11.2347 0.787465C11.7243 1.29205 11.9996 1.97662 12 2.69059C12.0004 3.40456 11.7258 4.08943 11.2367 4.59455L4.76116 11.3717C4.46709 11.6751 4.06823 11.8455 3.65235 11.8455C3.23646 11.8455 2.8376 11.6751 2.54353 11.3717C2.24945 11.0683 2.08424 10.6568 2.08424 10.2278C2.08424 9.79877 2.24945 9.38731 2.54353 9.08393L7.97674 3.39012C8.02433 3.33774 8.0816 3.29571 8.14518 3.26651C8.20875 3.23731 8.27735 3.22152 8.34693 3.22008C8.4165 3.21863 8.48566 3.23156 8.55032 3.2581C8.61498 3.28464 8.67385 3.32425 8.72345 3.37461C8.77305 3.42497 8.81238 3.48506 8.83913 3.55133C8.86588 3.61761 8.87951 3.68874 8.87922 3.76053C8.87893 3.83232 8.86472 3.90333 8.83742 3.96937C8.81013 4.03541 8.77031 4.09515 8.7203 4.14508L3.28643 9.84494C3.23778 9.89474 3.19911 9.95393 3.17264 10.0191C3.14616 10.0843 3.13239 10.1543 3.13212 10.225C3.13185 10.2957 3.14507 10.3658 3.17105 10.4312C3.19702 10.4966 3.23523 10.5561 3.2835 10.6063C3.33177 10.6565 3.38914 10.6964 3.45235 10.7237C3.51556 10.751 3.58337 10.7652 3.6519 10.7655C3.72043 10.7658 3.78835 10.7521 3.85176 10.7253C3.91518 10.6985 3.97287 10.6591 4.02152 10.6093L10.4964 3.83556C10.7904 3.53281 10.9559 3.12194 10.9563 2.69335C10.9568 2.26475 10.7921 1.85354 10.4987 1.55016C10.2052 1.24679 9.80691 1.0761 9.39145 1.07566C8.97599 1.07522 8.57737 1.24506 8.2833 1.54781L1.8104 8.32224C1.56791 8.572 1.37549 8.86858 1.24411 9.19506C1.11273 9.52153 1.04496 9.8715 1.04469 10.225C1.04442 10.5785 1.11164 10.9286 1.24252 11.2553C1.37339 11.5819 1.56536 11.8788 1.80747 12.129C2.04957 12.3792 2.33706 12.5777 2.65353 12.7132C2.97 12.8487 3.30924 12.9186 3.6519 12.9189C3.99456 12.9192 4.33391 12.8498 4.65059 12.7148C4.96727 12.5798 5.25506 12.3818 5.49755 12.132L10.8499 6.6145C10.9481 6.51399 11.0809 6.45781 11.2193 6.45831C11.3576 6.45881 11.4901 6.51596 11.5876 6.6172Z" })
}));
j.displayName = "AttachmentIcon";
//#endregion
//#region src/components/icons/ChatIcon.tsx
var M = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 24 24",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", { d: "M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.2L4 17.2V4H20V16Z" })
}));
M.displayName = "ChatIcon";
//#endregion
//#region src/components/icons/CheckIcon.tsx
var N = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 14 14",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", {
		d: "M11.6667 3.5L5.25 9.91667L2.33333 7",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}));
N.displayName = "CheckIcon";
//#endregion
//#region src/components/icons/CloseIcon.tsx
var P = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 24 24",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", { d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" })
}));
P.displayName = "CloseIcon";
//#endregion
//#region src/components/icons/CollapseIcon.tsx
var ee = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 12 12",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", { d: "M11.8402 0.15976C11.7379 0.0574675 11.5992 0 11.4545 0C11.3099 0 11.1711 0.0574675 11.0689 0.15976L7.63636 3.59205V1.63636C7.63636 1.4917 7.57889 1.35296 7.4766 1.25067C7.3743 1.14837 7.23557 1.09091 7.09091 1.09091C6.94624 1.09091 6.80751 1.14837 6.70521 1.25067C6.60292 1.35296 6.54545 1.4917 6.54545 1.63636V4.90909C6.54545 5.05375 6.60292 5.19249 6.70521 5.29479C6.80751 5.39708 6.94624 5.45455 7.09091 5.45455H10.3636C10.5083 5.45455 10.647 5.39708 10.7493 5.29479C10.8516 5.19249 10.9091 5.05375 10.9091 4.90909C10.9091 4.76443 10.8516 4.62569 10.7493 4.5234C10.647 4.4211 10.5083 4.36364 10.3636 4.36364H8.40795L11.8402 0.931149C11.9425 0.828856 12 0.690118 12 0.545455C12 0.400791 11.9425 0.262053 11.8402 0.15976ZM4.90909 6.54545H1.63636C1.4917 6.54545 1.35296 6.60292 1.25067 6.70521C1.14837 6.80751 1.09091 6.94624 1.09091 7.09091C1.09091 7.23557 1.14837 7.3743 1.25067 7.4766C1.35296 7.57889 1.4917 7.63636 1.63636 7.63636H3.59205L0.15976 11.0689C0.0574675 11.1711 0 11.3099 0 11.4545C0 11.5992 0.0574675 11.7379 0.15976 11.8402C0.262053 11.9425 0.400791 12 0.545455 12C0.690118 12 0.828856 11.9425 0.931149 11.8402L4.36364 8.40795V10.3636C4.36364 10.5083 4.4211 10.647 4.5234 10.7493C4.62569 10.8516 4.76443 10.9091 4.90909 10.9091C5.05375 10.9091 5.19249 10.8516 5.29479 10.7493C5.39708 10.647 5.45455 10.5083 5.45455 10.3636V7.09091C5.45455 6.94624 5.39708 6.80751 5.29479 6.70521C5.19249 6.60292 5.05375 6.54545 4.90909 6.54545Z" })
}));
ee.displayName = "CollapseIcon";
//#endregion
//#region src/components/icons/CopyIcon.tsx
var F = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 14 14",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", {
		d: "M4.66667 4.66667V2.33333C4.66667 1.97971 4.80714 1.64057 5.05719 1.39052C5.30724 1.14048 5.64638 1 6 1H11.6667C12.0203 1 12.3594 1.14048 12.6095 1.39052C12.8595 1.64057 13 1.97971 13 2.33333V8C13 8.35362 12.8595 8.69276 12.6095 8.94281C12.3594 9.19286 12.0203 9.33333 11.6667 9.33333H9.33333M2.33333 4.66667H8C8.73638 4.66667 9.33333 5.26362 9.33333 6V11.6667C9.33333 12.403 8.73638 13 8 13H2.33333C1.59695 13 1 12.403 1 11.6667V6C1 5.26362 1.59695 4.66667 2.33333 4.66667Z",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}));
F.displayName = "CopyIcon";
//#endregion
//#region src/components/icons/ErrorIcon.tsx
var te = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 24 24",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" })
}));
te.displayName = "ErrorIcon";
//#endregion
//#region src/components/icons/ExpandIcon.tsx
var ne = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 12 12",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", { d: "M12 0.545455V3.81818C12 3.96285 11.9425 4.10158 11.8402 4.20388C11.7379 4.30617 11.5992 4.36364 11.4545 4.36364C11.3099 4.36364 11.1711 4.30617 11.0689 4.20388C10.9666 4.10158 10.9091 3.96285 10.9091 3.81818V1.86205L7.47682 5.295C7.37447 5.39735 7.23565 5.45485 7.09091 5.45485C6.94617 5.45485 6.80735 5.39735 6.705 5.295C6.60265 5.19265 6.54515 5.05383 6.54515 4.90909C6.54515 4.76435 6.60265 4.62553 6.705 4.52318L10.138 1.09091H8.18182C8.03715 1.09091 7.89842 1.03344 7.79612 0.931149C7.69383 0.828856 7.63636 0.690118 7.63636 0.545455C7.63636 0.400791 7.69383 0.262053 7.79612 0.15976C7.89842 0.0574675 8.03715 0 8.18182 0H11.4545C11.5992 0 11.7379 0.0574675 11.8402 0.15976C11.9425 0.262053 12 0.400791 12 0.545455ZM4.52318 6.705L1.09091 10.138V8.18182C1.09091 8.03715 1.03344 7.89842 0.931149 7.79612C0.828856 7.69383 0.690118 7.63636 0.545455 7.63636C0.400791 7.63636 0.262053 7.69383 0.15976 7.79612C0.0574675 7.89842 0 8.03715 0 8.18182V11.4545C0 11.5992 0.0574675 11.7379 0.15976 11.8402C0.262053 11.9425 0.400791 12 0.545455 12H3.81818C3.96285 12 4.10158 11.9425 4.20388 11.8402C4.30617 11.7379 4.36364 11.5992 4.36364 11.4545C4.36364 11.3099 4.30617 11.1711 4.20388 11.0689C4.10158 10.9666 3.96285 10.9091 3.81818 10.9091H1.86205L5.295 7.47682C5.39735 7.37447 5.45485 7.23565 5.45485 7.09091C5.45485 6.94617 5.39735 6.80735 5.295 6.705C5.19265 6.60265 5.05383 6.54515 4.90909 6.54515C4.76435 6.54515 4.62553 6.60265 4.52318 6.705Z" })
}));
ne.displayName = "ExpandIcon";
//#endregion
//#region src/components/icons/FileIcon.tsx
var re = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 12 14",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M1.04082 0.965517C1.02458 0.965517 1.00901 0.971875 0.997524 0.983192C0.986042 0.994509 0.979592 1.00986 0.979592 1.02586V12.9741C0.979592 12.9901 0.986042 13.0055 0.997524 13.0168C1.00901 13.0281 1.02458 13.0345 1.04082 13.0345H10.9592C10.9754 13.0345 10.991 13.0281 11.0025 13.0168C11.014 13.0055 11.0204 12.9901 11.0204 12.9741V4.76724H7.65306C7.38255 4.76724 7.16327 4.5511 7.16327 4.28448V0.965517H1.04082ZM8.14286 3.80172H10.3277L8.14286 1.64824V3.80172ZM12 12.9741V4.28448L7.65306 0H1.04082C0.764774 0 0.500039 0.108082 0.304848 0.300468C0.109657 0.492854 0 0.753786 0 1.02586V12.9741C0 13.2462 0.109657 13.5071 0.304848 13.6995C0.50004 13.8919 0.764776 14 1.04082 14H10.9592C11.2352 14 11.5 13.8919 11.6952 13.6995C11.8903 13.5071 12 13.2462 12 12.9741ZM4.0316 3.90417C4.45607 3.90417 4.86296 4.07081 5.16279 4.36711L5.16469 4.369L8.91136 8.12291C9.31878 8.53213 9.54623 9.084 9.54386 9.65764C9.5415 10.2313 9.30986 10.781 8.89908 11.1869C8.48826 11.5929 7.93154 11.8222 7.35012 11.8245C6.76871 11.8268 6.21011 11.602 5.79595 11.1994L5.79389 11.1974L2.69801 8.1425C2.54508 7.99159 2.54522 7.74706 2.69833 7.59632C2.85144 7.44559 3.09954 7.44572 3.25247 7.59663L6.34724 10.6504C6.61408 10.9094 6.97334 11.0536 7.34692 11.0521C7.72095 11.0506 8.07943 10.9031 8.34422 10.6414C8.60904 10.3797 8.75867 10.025 8.7602 9.65451C8.76172 9.28404 8.61506 8.92818 8.35247 8.66436L4.60708 4.91173C4.45413 4.76104 4.24717 4.67658 4.0316 4.67658C3.81563 4.67658 3.60829 4.76135 3.45527 4.91258C3.30221 5.06383 3.21603 5.26919 3.21603 5.48353C3.21603 5.69787 3.30221 5.90323 3.45527 6.05448L3.45716 6.05636L7.20016 9.80623C7.23988 9.84327 7.29236 9.86361 7.34664 9.86323C7.40195 9.86284 7.45509 9.84097 7.49452 9.80202C7.53398 9.76305 7.55652 9.71008 7.55694 9.65452C7.55736 9.59928 7.53589 9.54628 7.49744 9.50678L4.35554 6.35052C4.20398 6.19827 4.20634 5.95375 4.36081 5.80436C4.51528 5.65498 4.76337 5.65731 4.91493 5.80956L8.05796 8.96696L8.05977 8.96879C8.2418 9.15408 8.34256 9.4025 8.34059 9.66032C8.33863 9.91814 8.23409 10.165 8.04926 10.3476C7.86439 10.5302 7.61403 10.6338 7.35221 10.6356C7.0904 10.6375 6.83856 10.5374 6.65109 10.3574L6.64519 10.3516L2.8994 6.59895C2.60023 6.30278 2.43236 5.90161 2.43236 5.48353C2.43236 5.06498 2.6006 4.66337 2.90041 4.36711C3.20024 4.07081 3.60713 3.90417 4.0316 3.90417Z",
		fill: "currentColor"
	})
}));
re.displayName = "FileIcon";
//#endregion
//#region src/components/icons/HistoryIcon.tsx
var I = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 14 14",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", { d: "M7.84245 3.50002V6.6697L10.3716 8.2498C10.499 8.32948 10.5908 8.45859 10.6268 8.60874C10.6628 8.75888 10.64 8.91776 10.5635 9.05042C10.487 9.18309 10.363 9.27867 10.2188 9.31614C10.0746 9.3536 9.92206 9.32989 9.79466 9.25022L6.99378 7.50022C6.91089 7.44836 6.8423 7.37503 6.79469 7.28737C6.74708 7.19972 6.72207 7.10072 6.7221 7.00001V3.50002C6.7221 3.34531 6.78112 3.19693 6.88617 3.08754C6.99122 2.97814 7.13371 2.91668 7.28227 2.91668C7.43084 2.91668 7.57333 2.97814 7.67838 3.08754C7.78343 3.19693 7.84245 3.34531 7.84245 3.50002ZM7.28227 2.15915e-05C6.39859 -0.00227058 5.52325 0.177963 4.70691 0.530291C3.89056 0.882618 3.14943 1.40004 2.52639 2.05262C2.01733 2.58929 1.56499 3.10554 1.12035 3.64585V2.33335C1.12035 2.17864 1.06133 2.03027 0.956278 1.92087C0.851225 1.81148 0.708743 1.75002 0.560175 1.75002C0.411607 1.75002 0.269125 1.81148 0.164071 1.92087C0.0590182 2.03027 0 2.17864 0 2.33335V5.25001C0 5.40472 0.0590182 5.5531 0.164071 5.66249C0.269125 5.77189 0.411607 5.83335 0.560175 5.83335H3.36105C3.50962 5.83335 3.6521 5.77189 3.75715 5.66249C3.86221 5.5531 3.92122 5.40472 3.92122 5.25001C3.92122 5.0953 3.86221 4.94693 3.75715 4.83754C3.6521 4.72814 3.50962 4.66668 3.36105 4.66668H1.75055C2.2512 4.05272 2.74976 3.4745 3.31834 2.87512C4.09688 2.0644 5.08758 1.51057 6.16666 1.28283C7.24574 1.05509 8.36535 1.16353 9.38558 1.59462C10.4058 2.02571 11.2814 2.76032 11.903 3.70667C12.5246 4.65301 12.8646 5.76912 12.8805 6.91554C12.8965 8.06195 12.5876 9.18784 11.9926 10.1525C11.3975 11.1172 10.5427 11.8779 9.53484 12.3395C8.52702 12.8011 7.41089 12.9433 6.32594 12.7481C5.24098 12.553 4.23531 12.0292 3.43457 11.2423C3.38106 11.1896 3.3181 11.1485 3.2493 11.1211C3.18051 11.0938 3.10721 11.0808 3.03361 11.083C2.96 11.0852 2.88753 11.1024 2.82033 11.1338C2.75312 11.1651 2.6925 11.2099 2.64193 11.2656C2.59135 11.3214 2.55181 11.3869 2.52557 11.4586C2.49932 11.5302 2.48689 11.6065 2.48897 11.6832C2.49105 11.7598 2.5076 11.8353 2.53769 11.9053C2.56778 11.9753 2.61081 12.0384 2.66433 12.091C3.4622 12.8751 4.43221 13.4439 5.48972 13.7478C6.54722 14.0517 7.66008 14.0814 8.73117 13.8345C9.80226 13.5875 10.799 13.0713 11.6345 12.3309C12.4699 11.5905 13.1187 10.6485 13.5241 9.58695C13.9295 8.52544 14.0793 7.37674 13.9604 6.24108C13.8414 5.10543 13.4574 4.01735 12.8418 3.0718C12.2261 2.12625 11.3976 1.35197 10.4286 0.816529C9.4595 0.281089 8.37931 0.000765142 7.28227 2.15915e-05Z" })
}));
I.displayName = "HistoryIcon";
//#endregion
//#region src/components/icons/PlusIcon.tsx
var ie = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 14 14",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", { d: "M14 7C14 7.15471 13.9385 7.30308 13.8291 7.41248C13.7197 7.52188 13.5714 7.58333 13.4167 7.58333H7.58333V13.4167C7.58333 13.5714 7.52188 13.7197 7.41248 13.8291C7.30308 13.9385 7.15471 14 7 14C6.84529 14 6.69692 13.9385 6.58752 13.8291C6.47812 13.7197 6.41667 13.5714 6.41667 13.4167V7.58333H0.583333C0.428624 7.58333 0.280251 7.52188 0.170854 7.41248C0.0614583 7.30308 0 7.15471 0 7C0 6.84529 0.0614583 6.69692 0.170854 6.58752C0.280251 6.47812 0.428624 6.41667 0.583333 6.41667H6.41667V0.583333C6.41667 0.428624 6.47812 0.280251 6.58752 0.170854C6.69692 0.0614583 6.84529 0 7 0C7.15471 0 7.30308 0.0614583 7.41248 0.170854C7.52188 0.280251 7.58333 0.428624 7.58333 0.583333V6.41667H13.4167C13.5714 6.41667 13.7197 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7Z" })
}));
ie.displayName = "PlusIcon";
//#endregion
//#region src/components/icons/SendIcon.tsx
var ae = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 13 14",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", { d: "M13 6.99208C13.0005 7.17027 12.9514 7.34536 12.8579 7.49921C12.7644 7.65307 12.6299 7.78012 12.4682 7.86721L1.55229 13.8687C1.39545 13.9542 1.21835 13.9995 1.03805 14C0.871785 13.9997 0.708022 13.961 0.56049 13.8873C0.412958 13.8136 0.285957 13.7069 0.190131 13.5763C0.0943049 13.4456 0.0324474 13.2948 0.00974343 13.1364C-0.0129605 12.9781 0.00415071 12.8168 0.0596426 12.6661L1.83768 7.66843C1.8552 7.61898 1.88839 7.57606 1.93258 7.54567C1.97677 7.51529 2.02975 7.49898 2.08407 7.49903H6.75898C6.83028 7.49918 6.90085 7.48523 6.9663 7.45806C7.03176 7.43088 7.0907 7.39105 7.13948 7.34105C7.18825 7.29104 7.22581 7.23193 7.24982 7.16738C7.27384 7.10283 7.28379 7.03423 7.27907 6.96582C7.26727 6.83723 7.20539 6.71767 7.10582 6.63108C7.00624 6.5445 6.87632 6.49728 6.74208 6.49888H2.08862C2.03438 6.49897 1.98146 6.48275 1.93728 6.45249C1.89309 6.42222 1.85986 6.37943 1.84223 6.3301L0.0583424 1.32936C-0.0111263 1.13773 -0.018329 0.930327 0.0376911 0.734676C0.0937111 0.539025 0.210303 0.364388 0.371984 0.233956C0.533666 0.103523 0.732787 0.0234668 0.942905 0.00441721C1.15302 -0.0146324 1.3642 0.0282263 1.54838 0.127302L12.4702 6.12132C12.6308 6.20829 12.7645 6.33476 12.8576 6.48776C12.9507 6.64076 12.9999 6.81481 13 6.99208Z" })
}));
ae.displayName = "SendIcon";
//#endregion
//#region src/components/icons/StopIcon.tsx
var oe = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 20 20",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("rect", {
		x: "5",
		y: "5",
		width: "10",
		height: "10",
		rx: "1",
		fill: "currentColor"
	})
}));
oe.displayName = "StopIcon";
//#endregion
//#region src/components/icons/UserIcon.tsx
var se = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 24 24",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", { d: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" })
}));
se.displayName = "UserIcon";
//#endregion
//#region src/components/icons/WarningIcon.tsx
var ce = n(() => /* @__PURE__ */ f("svg", {
	viewBox: "0 0 24 24",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ f("path", { d: "M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" })
}));
ce.displayName = "WarningIcon";
//#endregion
//#region src/components/chat/ChatButton.tsx
var le = n((e) => {
	let { onClick: t } = e;
	return /* @__PURE__ */ f("button", {
		className: "elitea-assistant-button",
		onClick: t,
		"aria-label": "Support Assistant",
		type: "button",
		children: /* @__PURE__ */ f(A, {})
	});
});
le.displayName = "ChatButton";
//#endregion
//#region src/components/shared/CopyButton.tsx
var ue = n((e) => {
	let { text: t } = e, [n, i] = u(!1), a = r(() => {
		navigator.clipboard.writeText(t), i(!0), setTimeout(() => i(!1), 2e3);
	}, [t]);
	return /* @__PURE__ */ f(fe, {
		content: "Copy to clipboard",
		children: /* @__PURE__ */ f("button", {
			className: "elitea-assistant-header-action",
			onClick: a,
			"aria-label": "Copy to clipboard",
			type: "button",
			children: f(n ? N : F, {})
		})
	});
});
ue.displayName = "CopyButton";
//#endregion
//#region src/components/shared/Toast.tsx
var de = n((e) => {
	let { message: t, onDismiss: n } = e;
	return /* @__PURE__ */ p("div", {
		className: "elitea-assistant-toast",
		role: "alert",
		children: [
			/* @__PURE__ */ f("span", {
				className: "elitea-assistant-toast-icon",
				children: /* @__PURE__ */ f(ce, {})
			}),
			/* @__PURE__ */ f("span", {
				className: "elitea-assistant-toast-text",
				children: t
			}),
			/* @__PURE__ */ f("button", {
				className: "elitea-assistant-toast-close",
				onClick: n,
				"aria-label": "Dismiss",
				type: "button",
				children: /* @__PURE__ */ f(P, {})
			})
		]
	});
});
de.displayName = "Toast";
//#endregion
//#region src/components/shared/Tooltip.tsx
var fe = n((e) => {
	let { content: t, children: n, placement: i = "top" } = e, a = l(null), o = l(null), [c, h] = u(!1), [g, _] = u(!1), [v, y] = u({
		top: 0,
		left: 0
	}), b = r(() => {
		let e = a.current, t = o.current;
		if (!e || !t) return;
		let n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), s;
		s = i === "top" ? n.top - r.height - 8 : n.bottom + 8;
		let c = n.left + n.width / 2 - r.width / 2;
		c < 8 && (c = 8), c + r.width > window.innerWidth - 8 && (c = window.innerWidth - 8 - r.width), s < 8 && (s = n.bottom + 8), y({
			top: s,
			left: c
		}), _(!0);
	}, [i]);
	return s(() => {
		c && o.current && b(), c || _(!1);
	}, [c, b]), /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f("div", {
		ref: a,
		onMouseEnter: () => h(!0),
		onMouseLeave: () => h(!1),
		className: "elitea-assistant-tooltip-trigger",
		children: n
	}), c && m(/* @__PURE__ */ f("div", {
		ref: o,
		className: "elitea-assistant-tooltip",
		style: {
			top: v.top,
			left: v.left,
			opacity: +!!g
		},
		role: "tooltip",
		children: t
	}), document.body)] });
});
fe.displayName = "Tooltip";
//#endregion
//#region src/components/chat/ChatHeader.tsx
var L = n((e) => {
	let { title: t, expanded: n, history: i, currentConversationId: o, disabled: s, onClose: c, onExpand: d, onNewChat: m, onSelectConversation: h } = e, g = l(null), [_, v] = u(!1);
	a(() => {
		if (!_) return;
		let e = (e) => {
			g.current && !g.current.contains(e.target) && v(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [_]);
	let y = r(() => {
		i.length > 0 && v((e) => !e);
	}, [i.length]), b = r((e) => {
		h(e), v(!1);
	}, [h]);
	return /* @__PURE__ */ p("div", {
		className: "elitea-assistant-header",
		children: [/* @__PURE__ */ p("div", {
			className: "elitea-assistant-header-left",
			children: [/* @__PURE__ */ f("button", {
				className: "elitea-assistant-header-close-action",
				onClick: c,
				"aria-label": "Close chat",
				type: "button",
				children: /* @__PURE__ */ f(P, {})
			}), /* @__PURE__ */ f("h2", {
				className: "elitea-assistant-header-title",
				children: t
			})]
		}), /* @__PURE__ */ p("div", {
			className: "elitea-assistant-header-right",
			children: [
				/* @__PURE__ */ f(fe, {
					content: "New conversation",
					children: /* @__PURE__ */ f("button", {
						className: "elitea-assistant-header-action",
						onClick: m,
						"aria-label": "New chat",
						type: "button",
						disabled: s,
						children: /* @__PURE__ */ f(ie, {})
					})
				}),
				/* @__PURE__ */ f(fe, {
					content: "Conversations history",
					children: /* @__PURE__ */ p("div", {
						ref: g,
						className: "elitea-assistant-history-wrapper",
						children: [/* @__PURE__ */ f("button", {
							className: "elitea-assistant-header-action",
							onClick: y,
							"aria-label": "Chat history",
							type: "button",
							disabled: s || i.length === 0,
							children: /* @__PURE__ */ f(I, {})
						}), _ && i.length > 0 && /* @__PURE__ */ f("div", {
							className: "elitea-assistant-dropdown elitea-assistant-history-dropdown",
							children: /* @__PURE__ */ f("div", {
								className: "elitea-assistant-history-dropdown-scroll",
								children: i.map((e) => /* @__PURE__ */ f("button", {
									className: "elitea-assistant-history-item",
									onClick: () => b(e.uuid),
									type: "button",
									disabled: e.uuid === o,
									children: e.name
								}, e.uuid))
							})
						})]
					})
				}),
				/* @__PURE__ */ f(fe, {
					content: n ? "Collapse" : "Expand",
					children: /* @__PURE__ */ f("button", {
						className: "elitea-assistant-header-action",
						onClick: d,
						"aria-label": "Expand chat",
						type: "button",
						children: f(n ? ee : ne, {})
					})
				})
			]
		})]
	});
});
L.displayName = "ChatHeader";
//#endregion
//#region src/components/chat/MessageList.tsx
var pe = n((e) => {
	let { avatar: t, messages: n, isLoading: r, onAnimationComplete: i } = e, o = l(null), s = l(null), c = l(!1);
	return a(() => {
		let e = s.current;
		if (n.length === 0) {
			c.current = !1;
			return;
		}
		let t = c.current ? "smooth" : "instant";
		if (c.current = !0, o.current?.scrollIntoView({ behavior: t }), !n.some((e) => e.isStreaming || e.isAnimating) || !e) return;
		let r = null, i = (t = !1) => {
			r === null && (r = requestAnimationFrame(() => {
				(t || e.scrollHeight - e.scrollTop - e.clientHeight < 150) && (e.scrollTop = e.scrollHeight), r = null;
			}));
		}, a = new MutationObserver(() => i());
		a.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0
		});
		let l = new ResizeObserver(() => i(!0));
		return l.observe(e), () => {
			a.disconnect(), l.disconnect(), r !== null && cancelAnimationFrame(r);
		};
	}, [n]), r ? /* @__PURE__ */ f(_i, {}) : n.length === 0 ? /* @__PURE__ */ f("div", {
		className: "elitea-assistant-empty",
		children: "Send a message to start a conversation"
	}) : /* @__PURE__ */ p("div", {
		className: "elitea-assistant-messages",
		ref: s,
		children: [n.map((e) => /* @__PURE__ */ f(gi, {
			message: e,
			avatar: t,
			onAnimationComplete: i
		}, e.id)), /* @__PURE__ */ f("div", { ref: o })]
	});
});
pe.displayName = "MessageList";
//#endregion
//#region src/lib/constants/attachment.constants.ts
var R = /* @__PURE__ */ function(e) {
	return e.PENDING = "pending", e.UPLOADING = "uploading", e.COMPLETED = "completed", e.ERROR = "error", e;
}({}), me = 157286400, he = 3145728, ge = 157286400, _e = 5242880, ve = /* @__PURE__ */ new Set([
	"png",
	"jpg",
	"jpeg",
	"gif",
	"webp",
	"bmp",
	"svg"
]), ye = /* @__PURE__ */ new Set([
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
]), be = /* @__PURE__ */ new Set(/* @__PURE__ */ "py.js.ts.jsx.tsx.mjs.cjs.java.cpp.c.h.hpp.cs.rb.go.php.swift.kt.rs.m.scala.pl.sh.bat.lua.r.pas.asm.dart.groovy.sql.hs.bash.zsh.pm.toml.ini.cfg.conf.env".split(".")), xe = /* @__PURE__ */ new Set([
	...ve,
	...ye,
	...be
]), Se = [...xe].map((e) => `.${e}`).join(","), Ce = 7, we = 2 * Math.PI * Ce, Te = n((e) => {
	let { status: t, progress: n = 0 } = e;
	if (t === R.UPLOADING) {
		let e = we - n / 100 * we;
		return /* @__PURE__ */ p("svg", {
			className: "elitea-assistant-file-chip-spinner",
			viewBox: "0 0 18 18",
			children: [/* @__PURE__ */ f("circle", {
				cx: "9",
				cy: "9",
				r: Ce,
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				opacity: "0.25"
			}), /* @__PURE__ */ f("circle", {
				cx: "9",
				cy: "9",
				r: Ce,
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeDasharray: we,
				strokeDashoffset: e,
				transform: "rotate(-90 9 9)",
				className: "elitea-assistant-file-chip-spinner-progress"
			})]
		});
	}
	return t === R.COMPLETED ? /* @__PURE__ */ f(N, {}) : /* @__PURE__ */ f(re, {});
});
Te.displayName = "AttachmentIcon";
//#endregion
//#region src/components/chat/attachments/AttachmentProgress.tsx
var Ee = n((e) => {
	let { status: t, progress: n } = e;
	return t === R.UPLOADING ? /* @__PURE__ */ p("span", {
		className: "elitea-assistant-file-chip-progress-text",
		children: [n, "%"]
	}) : null;
});
Ee.displayName = "AttachmentProgress";
//#endregion
//#region src/components/chat/attachments/AttachmentChip.tsx
var De = n((e) => {
	let { attachment: t, onRemove: n } = e;
	return /* @__PURE__ */ f(fe, {
		content: t.error ?? t.name,
		children: /* @__PURE__ */ p("div", {
			className: ((e) => {
				let t = "elitea-assistant-file-chip";
				return {
					uploading: `${t} ${t}--uploading`,
					error: `${t} ${t}--error`,
					completed: `${t} ${t}--completed`,
					pending: t
				}[e] || t;
			})(t.status),
			children: [
				/* @__PURE__ */ f("span", {
					className: "elitea-assistant-file-chip-icon",
					children: /* @__PURE__ */ f(Te, {
						status: t.status,
						progress: t.progress
					})
				}),
				/* @__PURE__ */ f("span", {
					className: "elitea-assistant-file-chip-name",
					children: t.name
				}),
				/* @__PURE__ */ f(Ee, {
					status: t.status,
					progress: t.progress
				}),
				/* @__PURE__ */ f("button", {
					className: "elitea-assistant-file-chip-remove",
					onClick: () => n(t.id),
					"aria-label": `Remove ${t.name}`,
					type: "button",
					disabled: t.status === R.UPLOADING,
					children: /* @__PURE__ */ f(P, {})
				})
			]
		})
	});
});
De.displayName = "AttachmentChip";
//#endregion
//#region src/components/chat/MessageInput.tsx
var Oe = n((e) => {
	let { placeholder: t, text: n, onTextChange: i, attachments: o, onAddFiles: s, onRemoveAttachment: d, onSend: m, onStop: h, expanded: g, disabled: _, isUploading: v, isStreaming: y } = e, b = l(null), x = l(null), S = l(null), C = l(null), w = l(null), T = l(null), [E, D] = u(0), [O, k] = u(!1), [A, M] = u(!1), [N, ee] = u(!1), F = l(0), te = r(() => {
		let e = x.current;
		if (!e || C.current !== null) return;
		let t = g ? 256 : 160;
		e.style.height = "auto", e.style.maxHeight = `${t}px`, e.style.height = `${Math.min(e.scrollHeight, t)}px`;
	}, [g]);
	a(() => {
		te();
	}, [n, te]), a(() => () => {
		w.current && document.removeEventListener("mousemove", w.current), T.current && document.removeEventListener("mouseup", T.current);
	}, []);
	let ne = r((e) => {
		if (!x.current) return;
		e.preventDefault();
		let t = e.clientY, n = x.current.getBoundingClientRect().height;
		ee(!0);
		let r = (e) => {
			if (!x.current) return;
			let r = t - e.clientY, i = Math.min(g ? 256 : 160, Math.max(48, n + r));
			C.current = i, x.current.style.height = `${i}px`, x.current.style.maxHeight = `${i}px`;
		}, i = () => {
			ee(!1), document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", i), w.current = null, T.current = null;
		};
		w.current = r, T.current = i, document.addEventListener("mousemove", r), document.addEventListener("mouseup", i);
	}, [g]);
	a(() => {
		if (!A) return;
		let e = (e) => {
			S.current && !S.current.contains(e.target) && M(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [A]);
	let { visibleAttachments: re, hiddenAttachments: I, remainingAttachmentsCount: ie } = c(() => {
		let e = g ? 3 : 2;
		return {
			visibleAttachments: o.slice(0, e),
			hiddenAttachments: o.slice(e),
			remainingAttachmentsCount: o.length - e
		};
	}, [o, g]), se = c(() => !o?.length || o.every((e) => e.status === R.PENDING || e.status === R.COMPLETED), [o]), ce = c(() => o.filter((e) => e.status !== R.ERROR).length >= 10, [o]), le = c(() => !!(_ || v || ce), [
		_,
		v,
		ce
	]), ue = c(() => !(!_ && !v && se && n.trim()), [
		_,
		v,
		n,
		se
	]), de = r(() => {
		M((e) => !e);
	}, []), fe = () => {
		let e = n.trim(), t = o.filter((e) => e.status === R.COMPLETED && e.filepath);
		(e || t.length !== 0) && (v || (m(e), i("")));
	};
	return /* @__PURE__ */ p("div", {
		className: [
			"elitea-assistant-input-area",
			O ? "elitea-assistant-input-area--drag-over" : "",
			"elitea-assistant-input-area--resizable",
			N ? "elitea-assistant-input-area--resizing" : ""
		].filter(Boolean).join(" "),
		onDragEnter: (e) => {
			e.preventDefault(), F.current += 1, e.dataTransfer.types.includes("Files") && k(!0);
		},
		onDragLeave: (e) => {
			e.preventDefault(), --F.current, F.current === 0 && k(!1);
		},
		onDragOver: (e) => {
			e.preventDefault();
		},
		onDrop: (e) => {
			e.preventDefault(), F.current = 0, k(!1);
			let t = Array.from(e.dataTransfer.files);
			t.length > 0 && s(t);
		},
		children: [
			O && /* @__PURE__ */ f("div", {
				className: "elitea-assistant-drop-overlay",
				children: "Drop files here"
			}),
			/* @__PURE__ */ f("div", {
				className: "elitea-assistant-resize-handle",
				onMouseDown: ne,
				"aria-hidden": "true"
			}),
			o.length > 0 && /* @__PURE__ */ p("div", {
				className: "elitea-assistant-file-list",
				children: [re.map((e) => /* @__PURE__ */ f(De, {
					attachment: e,
					onRemove: d
				}, e.id)), ie > 0 && /* @__PURE__ */ p("div", {
					ref: S,
					className: "elitea-assistant-overflow-wrapper",
					children: [/* @__PURE__ */ p("button", {
						className: "elitea-assistant-file-chip elitea-assistant-file-chip--count",
						onClick: de,
						"aria-label": `Show ${ie} more files`,
						"aria-haspopup": "true",
						"aria-expanded": A,
						type: "button",
						children: ["+", ie]
					}), A && /* @__PURE__ */ f("div", {
						className: "elitea-assistant-dropdown elitea-assistant-overflow-dropdown",
						role: "menu",
						children: I.map((e) => /* @__PURE__ */ p("div", {
							className: "elitea-assistant-overflow-item",
							role: "menuitem",
							children: [/* @__PURE__ */ f("span", {
								className: "elitea-assistant-overflow-item-name",
								children: e.name
							}), /* @__PURE__ */ f("button", {
								className: "elitea-assistant-file-chip-remove",
								onClick: () => {
									I.length === 1 && M(!1), d(e.id);
								},
								"aria-label": `Remove ${e.name}`,
								type: "button",
								disabled: e.status === R.UPLOADING,
								children: /* @__PURE__ */ f(P, {})
							})]
						}, e.id))
					})]
				})]
			}),
			/* @__PURE__ */ p("div", {
				className: "elitea-assistant-input-row",
				children: [
					/* @__PURE__ */ f("input", {
						ref: b,
						type: "file",
						multiple: !0,
						accept: Se,
						onChange: (e) => {
							let t = e.target.files;
							t && s(Array.from(t)), D((e) => e + 1);
						},
						style: { display: "none" }
					}, E),
					/* @__PURE__ */ f("button", {
						className: "elitea-assistant-attach-button",
						onClick: () => {
							b.current?.click();
						},
						"aria-label": "Attach file",
						type: "button",
						disabled: le,
						children: /* @__PURE__ */ f(j, {})
					}),
					/* @__PURE__ */ f("textarea", {
						ref: x,
						id: "elitea-assistant-message-input",
						className: `elitea-assistant-input${g ? " elitea-assistant-input--expanded" : ""}`,
						value: n,
						onChange: (e) => i(e.target.value),
						onKeyDown: (e) => {
							e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.metaKey && (e.preventDefault(), fe());
						},
						onPaste: (e) => {
							let t = Array.from(e.clipboardData.items).filter((e) => e.kind === "file").map((e) => e.getAsFile()).filter((e) => e !== null).map((e) => {
								if (!/^image\.\w+$/.test(e.name)) return e;
								let t = e.name.split(".").pop() || "png", n = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
								return new File([e], `screenshot-${n}.${t}`, { type: e.type });
							});
							t.length !== 0 && (e.preventDefault(), s(t));
						},
						placeholder: t,
						rows: 1,
						autoFocus: !0,
						disabled: _
					}),
					y ? /* @__PURE__ */ f("button", {
						className: "elitea-assistant-stop-button",
						onClick: h,
						"aria-label": "Stop generation",
						type: "button",
						children: /* @__PURE__ */ f(oe, {})
					}) : /* @__PURE__ */ f("button", {
						className: "elitea-assistant-send-button",
						onClick: fe,
						disabled: ue,
						"aria-label": "Send message",
						type: "button",
						children: /* @__PURE__ */ f(ae, {})
					})
				]
			})
		]
	});
});
Oe.displayName = "MessageInput";
//#endregion
//#region src/lib/hooks/api.hook.ts
var ke = e(null), Ae = () => {
	let e = i(ke);
	if (!e) throw Error("useApi must be used within EliteaAssistant");
	return e;
}, je = () => {
	let [e, t] = u(!1), [n, i] = u(!1);
	return {
		isOpen: e,
		isExpanded: n,
		open: r(() => t(!0), []),
		close: r(() => t(!1), []),
		toggle: r(() => t((e) => !e), []),
		expandFullscreen: r(() => i(!0), []),
		collapseFullscreen: r(() => i(!1), []),
		toggleFullscreen: r(() => i((e) => !e), [])
	};
}, Me = {
	ENTER_ROOM: "chat_enter_room",
	LEAVE_ROOM: "chat_leave_room",
	PREDICT: "support_predict",
	PREDICT_RESPONSE: "chat_predict",
	CONVERSATION_NAME_UPDATED: "chat_conversation_name_updated",
	ERROR: "support_error",
	STOP: "support_stop"
}, z = {
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
}, Ne = (e) => {
	if (typeof e == "number") return e < 4102444800 ? e * 1e3 : e;
	if (typeof e == "string") {
		let t = new Date(e);
		return isNaN(t.getTime()) ? 0 : t.getTime();
	}
	return 0;
}, Pe = (e) => {
	let t = e.sent_to == null ? "assistant" : "user", n = "";
	for (let t of e.message_items ?? []) {
		let e = t.item_type ?? t.type;
		if (e === "text_message" || e === "text") {
			n = t.item_details?.content ?? t.content ?? "";
			break;
		}
	}
	return {
		id: String(e.uuid ?? e.id ?? ""),
		role: t,
		content: n,
		timestamp: Ne(e.created_at_ts ?? e.created_at)
	};
}, Fe = (e) => (e.message_groups ?? []).map(Pe), Ie = () => typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
	let t = Math.random() * 16 | 0;
	return (e === "x" ? t : t & 3 | 8).toString(16);
}), Le = (e) => e >= 1048576 ? `${Math.round(e / 1048576)}MB` : e >= 1024 ? `${Math.round(e / 1024)}KB` : `${e}B`, Re = (e) => {
	let t = new Date(e), n = /* @__PURE__ */ new Date(), r = t.toLocaleTimeString([], {
		hour: "numeric",
		minute: "2-digit",
		hour12: !0
	});
	if (t.toDateString() === n.toDateString()) return r;
	let i = new Date(n);
	return i.setDate(i.getDate() - 1), t.toDateString() === i.toDateString() ? `Yesterday, ${r}` : t.toLocaleDateString([], {
		month: "short",
		day: "numeric"
	}) + ", " + r;
}, ze = (e) => {
	let t = e.lastIndexOf(".");
	return t === -1 ? e : e.substring(0, t) + e.substring(t).toLowerCase();
}, Be = (e) => (e.split(".").pop() || "").toLowerCase(), Ve = (e) => ve.has(Be(e)), He = (e) => xe.has(Be(e)), Ue = (e) => He(e.name) ? Ve(e.name) && e.size > 3145728 ? `Image exceeds ${Le(he)} limit` : e.size > 157286400 ? `File exceeds ${Le(me)} limit` : null : `Unsupported file type: .${Be(e.name)}`, We = (e, t, n) => {
	if (n.totalCount > 10) return "Max 10 attachments allowed";
	let r = Ve(e);
	return r && (n.imageCount += 1), n.totalSize += t, r && n.imageCount > 10 ? "Max 10 images allowed" : n.totalSize > 157286400 ? `Total upload size exceeds ${Le(ge)}` : null;
}, Ge = (e, t, n) => ({
	id: t,
	file: e,
	name: e.name,
	size: e.size,
	type: e.type,
	status: R.ERROR,
	progress: 0,
	error: n
}), Ke = (e) => e.map((e) => e.status === R.UPLOADING || e.status === R.COMPLETED ? e : {
	...e,
	status: R.ERROR,
	error: "Max 10 attachments allowed"
}), qe = (e, t) => {
	let n = new Set(e.map((e) => e.name)), r = t.filter((e) => !n.has(e.name)), i = r.length + e.length;
	if (i > 10) {
		let t = e.map((e) => Ge(e, Ie(), "Max 10 attachments allowed"));
		return Ke([...r, ...t]);
	}
	let a = {
		totalCount: i,
		imageCount: r.filter((e) => Ve(e.name)).length,
		totalSize: r.reduce((e, t) => e + t.size, 0)
	}, o = e.map((e) => {
		let t = Ie(), n = Ue(e);
		if (n) return Ge(e, t, n);
		let r = We(e.name, e.size, a);
		return r ? Ge(e, t, r) : {
			id: t,
			file: e,
			name: e.name,
			size: e.size,
			type: e.type,
			status: R.PENDING,
			progress: 0
		};
	});
	return [...r, ...o];
}, Je = (e) => {
	if (e.length > 10) return Ke(e);
	let t = {
		totalCount: e.length,
		imageCount: 0,
		totalSize: 0
	};
	return e.map((e) => {
		if (e.status !== R.ERROR) return Ve(e.name) && (t.imageCount += 1), t.totalSize += e.size, e;
		let n = e.file ? Ue(e.file) : null;
		return n ? {
			...e,
			error: n
		} : We(e.name, e.size, t) ? e : {
			...e,
			status: R.PENDING,
			error: void 0
		};
	});
}, Ye = (e, t) => {
	let { frequency: n, start: r, peak: i, end: a } = t, o = e.createOscillator(), s = e.createGain();
	return o.connect(s), s.connect(e.destination), o.type = "sine", o.frequency.value = n, s.gain.setValueAtTime(0, r), s.gain.linearRampToValueAtTime(.12, i), s.gain.exponentialRampToValueAtTime(.01, a), o.start(r), o.stop(a), o;
}, Xe = () => {
	try {
		let e = new AudioContext(), t = () => {
			if (e.state !== "running") {
				e.close();
				return;
			}
			let t = e.currentTime;
			Ye(e, {
				frequency: 784,
				start: t,
				peak: t + .02,
				end: t + .2
			});
			let n = Ye(e, {
				frequency: 1047,
				start: t + .12,
				peak: t + .14,
				end: t + .37
			});
			n.onended = () => e.close();
		};
		e.state === "suspended" ? e.resume().then(t) : t();
	} catch {}
}, Ze = (e) => {
	if (e.startsWith("/")) return "";
	try {
		return new URL(e).origin;
	} catch {
		return "";
	}
}, Qe = null, $e = import("rehype-raw").then(({ default: e }) => (Qe = e, e)), et = () => Qe, tt = () => {
	let e = Ae(), [t, n] = u(!1), i = r(async (t, n, r) => {
		let i = ze(t.name), a = new File([t], i, { type: t.type }), o = new FormData();
		return o.append("file", a), o.append("overwrite", "1"), (await e.uploadFile(n, o, r))[0];
	}, [e]), a = r(async (t) => {
		let { chunk: n, chunkIndex: r, totalChunks: i, fileId: a, fileName: o, conversationId: s, onProgress: c } = t, l = new FormData();
		l.append("file", n), l.append("chunk_index", String(r)), l.append("total_chunks", String(i)), l.append("file_id", a), l.append("file_name", ze(o)), l.append("overwrite", "1");
		let u = await e.uploadFile(s, l, c);
		return Array.isArray(u) ? u[0] : u ?? { status: "chunk_received" };
	}, [e]), o = r((e) => {
		let t = [], n = 0;
		for (; n < e.size;) {
			let r = Math.min(n + _e, e.size);
			t.push(e.slice(n, r)), n = r;
		}
		return t;
	}, []), s = r(async (e, t, n) => {
		let { file: r } = e;
		if (r.size > 157286400) throw Error(`File "${r.name}" exceeds maximum size limit of 300MB`);
		if (r.size <= 5242880) return (await i(r, t, (e, t) => {
			n(Math.round(e / t * 100));
		})).filepath;
		let s = o(r), c = Ie(), l = s.length, u = 0, d = "";
		for (let e = 0; e < l; e++) {
			let i = s[e], o = u, f = await a({
				chunk: i,
				chunkIndex: e,
				totalChunks: l,
				fileId: c,
				fileName: r.name,
				conversationId: t,
				onProgress: (e, t) => {
					let i = o + e, a = Math.round(i / r.size * 100);
					n(Math.min(a, 99));
				}
			});
			u += i.size, f.filepath && (d = f.filepath);
		}
		return n(100), d;
	}, [
		i,
		a,
		o
	]);
	return {
		uploadAttachments: r(async (e) => {
			let { conversationId: t, attachments: r, onProgress: i, onComplete: a, onError: o } = e;
			if (r.length) {
				n(!0);
				try {
					await Promise.all(r.map(async (e) => {
						try {
							let n = await s(e, t, (t) => {
								i(e.id, t);
							});
							a(e.id, n);
						} catch (t) {
							let n = t instanceof Error ? t.message : "Upload failed";
							o(e.id, n);
						}
					}));
				} finally {
					n(!1);
				}
			}
		}, [s]),
		isUploading: t,
		maxFileSize: me,
		chunkSize: _e
	};
}, nt = (e) => {
	let { welcomeMessage: t, supportProjectId: n, initialHistory: i, initialConversation: o, isInitLoading: s, showToast: d } = e, f = l(!1), p = Ae(), m = jn(), h = Pn(), g = On(), { uploadAttachments: _, isUploading: v } = tt(), y = r(() => t ? [{
		id: "welcome",
		role: "assistant",
		content: t,
		timestamp: Date.now()
	}] : [], [t]), [b, x] = u([]), [S, C] = u(""), [w, T] = u([]), [E, D] = u(null), [O, k] = u([]), [A, j] = u(!1), M = c(() => s || A, [s, A]), N = c(() => b.some((e) => e.isStreaming), [b]), P = r((e) => {
		x((t) => t.map((t) => t.id === e ? {
			...t,
			isAnimating: !1
		} : t));
	}, []), ee = r(() => {
		let e = b.findIndex((e) => e.isStreaming);
		if (e === -1) return;
		let t = b[e], n = -1, r = "";
		for (let t = e - 1; t >= 0; t--) if (b[t].role === "user") {
			n = t, r = b[t].content;
			break;
		}
		m?.emit(Me.STOP, { message_id: t.id }), setTimeout(() => {
			x((e) => {
				let r = /* @__PURE__ */ new Set();
				return t.content?.trim() || r.add(t.id), n !== -1 && r.add(b[n].id), e.filter((e) => !r.has(e.id)).map((e) => e.id === t.id ? {
					...e,
					isStreaming: !1,
					taskId: void 0,
					statusMessage: void 0
				} : e);
			}), r && C(r);
		}, 200);
	}, [b, m]), F = r((e) => {
		m?.emit(Me.ENTER_ROOM, {
			project_id: n,
			conversation_id: e
		});
	}, [m, n]), te = r((e) => {
		m?.emit(Me.LEAVE_ROOM, {
			project_id: n,
			conversation_id: e
		});
	}, [m, n]), ne = r((e) => {
		m?.emit(Me.PREDICT, e);
	}, [m]), re = r((e) => {
		let { message_id: t, type: n, content: r, response_metadata: i } = e, a = (e) => e === z.START_TASK || e === z.AGENT_START ? "Starting up..." : e === z.AGENT_LLM_START ? "Looking things up..." : e === z.AGENT_TOOL_START ? "Consulting knowledge base..." : e === z.AGENT_LLM_CHUNK ? "Writing response..." : "";
		switch ((n === z.AGENT_START || n === z.AGENT_LLM_START || n === z.AGENT_TOOL_START || n === z.AGENT_LLM_CHUNK || n === z.CHUNK || n === z.AI_MESSAGE_CHUNK || n === z.AGENT_RESPONSE || n === z.ERROR || n === z.AGENT_EXCEPTION) && x((e) => {
			let n = e.find((e) => e.id === t);
			return n ? n.isStreaming ? e : e.map((e) => e.id === t ? {
				...e,
				isStreaming: !0
			} : e) : [...e, {
				id: t,
				role: "assistant",
				content: "",
				timestamp: Date.now(),
				isStreaming: !0
			}];
		}), n) {
			case z.START_TASK: {
				let e = r?.task_id;
				x((r) => [...r, {
					id: t,
					role: "assistant",
					content: "",
					timestamp: Date.now(),
					isStreaming: !0,
					taskId: e,
					statusMessage: a(n)
				}]);
				break;
			}
			case z.AGENT_START:
				x((e) => e.map((e) => e.id === t ? {
					...e,
					statusMessage: a(n)
				} : e));
				break;
			case z.AGENT_LLM_START:
			case z.AGENT_TOOL_START:
				x((e) => e.map((e) => e.id === t ? {
					...e,
					statusMessage: a(n)
				} : e));
				break;
			case z.AGENT_TOOL_END:
			case z.AGENT_LLM_END:
			case z.AGENT_ON_TRANSITIONAL_EDGE:
			case z.AGENT_ON_FUNCTION_TOOL_NODE: break;
			case z.CHUNK:
			case z.AI_MESSAGE_CHUNK: {
				let e = typeof r == "string" ? r : JSON.stringify(r), n = !!i?.finish_reason;
				x((r) => r.map((r) => r.id === t ? {
					...r,
					content: r.content + e,
					statusMessage: void 0,
					...n && { isStreaming: !1 }
				} : r));
				break;
			}
			case z.AGENT_LLM_CHUNK:
				x((e) => e.map((e) => e.id === t && e.statusMessage !== a(n) ? {
					...e,
					statusMessage: a(n)
				} : e));
				break;
			case z.AGENT_RESPONSE: {
				let e = typeof r == "string" ? r : JSON.stringify(r);
				x((n) => n.map((n) => n.id === t ? {
					...n,
					content: e,
					isStreaming: !1,
					statusMessage: void 0
				} : n));
				break;
			}
			case z.PIPELINE_FINISH:
				x((e) => e.map((e) => e.id === t && e.isStreaming ? {
					...e,
					isStreaming: !1,
					statusMessage: void 0
				} : e));
				break;
			case z.ERROR:
			case z.AGENT_EXCEPTION: x((e) => e.map((e) => e.id === t ? {
				...e,
				content: typeof r == "string" ? r : "An error occurred",
				isStreaming: !1,
				isAnimating: !1,
				isError: !0,
				statusMessage: void 0
			} : e));
		}
	}, []), I = r((e) => {
		x((t) => [...t, {
			id: Ie(),
			role: "assistant",
			content: e.error || "An error occurred",
			timestamp: Date.now(),
			isError: !0
		}]);
	}, []), ie = r((e) => {
		let t = e.name.replace(/^User ID \d+\s*-\s*/, "");
		k((n) => n.map((n) => n.uuid === e.conversation_uuid ? {
			...n,
			name: t
		} : n));
	}, []);
	a(() => {
		if (!(s || f.current)) {
			if (f.current = !0, k(i), i.length > 0 && o) {
				let e = Fe(o);
				x(e.length > 0 ? e : y()), D(i[0].uuid), F(i[0].uuid);
			} else x(y());
		}
	}, [
		s,
		i,
		o,
		y,
		F
	]), a(() => {
		if (m) return m.on(Me.PREDICT_RESPONSE, re), m.on(Me.ERROR, I), m.on(Me.CONVERSATION_NAME_UPDATED, ie), () => {
			m.off(Me.PREDICT_RESPONSE, re), m.off(Me.ERROR, I), m.off(Me.CONVERSATION_NAME_UPDATED, ie);
		};
	}, [
		m,
		re,
		I,
		ie
	]), a(() => {
		if (!m || !E) return;
		let e = () => {
			F(E);
		};
		return m.io.on("reconnect", e), () => {
			m.io.off("reconnect", e);
		};
	}, [
		m,
		E,
		F
	]);
	let ae = r((e) => {
		let t = 10 - w.filter((e) => e.status !== R.ERROR).length;
		if (t <= 0) {
			d("You've reached the 10-file limit. Only the first 10 will be processed.");
			return;
		}
		if (e.length > t) {
			d("You've reached the 10-file limit. Only the first 10 will be processed."), T((n) => qe(e.slice(0, t), n));
			return;
		}
		T((t) => qe(e, t));
	}, [w, d]), oe = r((e) => {
		T((t) => Je(t.filter((t) => t.id !== e)));
	}, []), se = r((e, t) => {
		T((n) => n.map((n) => n.id === e ? {
			...n,
			status: R.UPLOADING,
			progress: t
		} : n));
	}, []), ce = r((e, t) => {
		T((n) => n.map((n) => n.id === e ? {
			...n,
			status: R.COMPLETED,
			progress: 100,
			filepath: t
		} : n));
	}, []), le = r((e, t) => {
		T((n) => n.map((n) => n.id === e ? {
			...n,
			status: R.ERROR,
			error: t
		} : n));
	}, []), ue = r(() => {
		T([]);
	}, []), de = r(async (e) => {
		let t = w.filter((e) => e.status === R.PENDING);
		if (t.length === 0) return [];
		T((e) => e.map((e) => e.status === R.PENDING ? {
			...e,
			status: R.UPLOADING
		} : e));
		let n = [];
		return await _({
			conversationId: e,
			attachments: t,
			onProgress: se,
			onComplete: (e, t) => {
				ce(e, t), n.push(t);
			},
			onError: le
		}), n;
	}, [
		w,
		_,
		se,
		ce,
		le
	]), fe = r(async (e) => {
		let t = E;
		if (!t) try {
			let e = await p.createConversation();
			t = e.uuid, D(t), k((t) => [e, ...t]), F(t);
		} catch {
			x((e) => [...e, {
				id: Ie(),
				role: "assistant",
				content: "Failed to create conversation. Please try again.",
				timestamp: Date.now(),
				isError: !0
			}]);
			return;
		}
		let n = w.filter((e) => e.status === R.PENDING), r = w.filter((e) => e.status === R.COMPLETED && e.filepath).map((e) => e.filepath), i = n.length > 0 && t ? await de(t) : [];
		if (n.length > 0 && i.length < n.length) return;
		x((t) => [...t, {
			id: Ie(),
			role: "user",
			content: e,
			timestamp: Date.now()
		}]);
		let a = [...r, ...i], o = g?.getValidScreenshot();
		if (t && o) {
			try {
				let e = new File([o], `screenshot-${Date.now()}.png`, { type: "image/png" }), n = new FormData();
				n.append("file", e), n.append("overwrite", "1");
				let r = (await p.uploadFile(t, n))[0];
				r?.filepath && a.push(r.filepath);
			} catch {}
			g?.clearScreenshot();
		}
		t && ne({
			conversation_uuid: t,
			content: e,
			attachments: a.length > 0 ? a : void 0,
			support_assistant_context: h ?? void 0
		}), ue();
	}, [
		E,
		p,
		F,
		ne,
		w,
		de,
		ue,
		h,
		g
	]), L = r(() => {
		E && te(E), D(null), x(y()), C(""), ue();
	}, [
		E,
		te,
		y,
		ue
	]), pe = r(async (e) => {
		if (E !== e) {
			E && te(E), D(e), F(e), C(""), ue(), x([]), j(!0);
			try {
				let t = Fe(await p.getConversation(e));
				x(t.length > 0 ? t : y());
			} catch {
				x(y());
			} finally {
				j(!1);
			}
		}
	}, [
		E,
		te,
		F,
		y,
		p,
		ue
	]);
	return {
		messages: b,
		inputText: S,
		setInputText: C,
		attachments: w,
		addFiles: ae,
		removeAttachment: oe,
		history: O,
		currentConversationId: E ?? "",
		isLoading: M,
		isStreaming: N,
		isUploading: v,
		handleNewChat: L,
		handleSelectConversation: pe,
		handleSend: fe,
		handleStop: ee,
		handleAnimationComplete: P
	};
}, rt = (e) => {
	let { api: t, title: n, welcomeMessage: r, placeholder: i } = e, [o, s] = u(null), [c, l] = u([]), [d, f] = u(null), [p, m] = u(!0);
	return a(() => {
		let e = !1, n = t.getConfig().then((t) => {
			e || s(t);
		}).catch(() => {}), r = t.getConversations().then(async (n) => {
			if (e) return;
			let r = n.items || [];
			if (l(r), r.length > 0) try {
				let n = await t.getConversation(r[0].uuid);
				e || f(n);
			} catch {}
		}).catch(() => {});
		return Promise.all([n, r]).finally(() => {
			e || m(!1);
		}), () => {
			e = !0;
		};
	}, [t]), {
		title: o?.title || n,
		welcomeMessage: o?.welcome_message || r,
		placeholder: o?.placeholder || i,
		supportProjectId: o?.support_project_id ?? null,
		user: o?.user || {
			id: 0,
			name: "Guest",
			avatar: ""
		},
		history: c,
		lastConversation: d,
		isLoading: p
	};
}, B = (e) => {
	let t = l(null), [n, i] = u(!1), o = r(() => {
		i(!1), t.current &&= (clearTimeout(t.current), null);
	}, []), s = r(() => {
		e || (i(!0), Xe(), t.current = setTimeout(o, 12e3));
	}, [e, o]);
	return a(() => () => {
		t.current && clearTimeout(t.current);
	}, []), a(() => {
		e && o();
	}, [e, o]), {
		popupVissible: n,
		showPopup: s,
		hidePopup: o,
		popupText: "Hi! Need help? Ask me!"
	};
};
//#endregion
//#region node_modules/html-to-image/es/util.js
function it(e, t) {
	if (e.match(/^[a-z]+:\/\//i)) return e;
	if (e.match(/^\/\//)) return window.location.protocol + e;
	if (e.match(/^[a-z]+:/i)) return e;
	let n = document.implementation.createHTMLDocument(), r = n.createElement("base"), i = n.createElement("a");
	return n.head.appendChild(r), n.body.appendChild(i), t && (r.href = t), i.href = e, i.href;
}
var at = (() => {
	let e = 0, t = () => `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4);
	return () => (e += 1, `u${t()}${e}`);
})();
function ot(e) {
	let t = [];
	for (let n = 0, r = e.length; n < r; n++) t.push(e[n]);
	return t;
}
var st = null;
function ct(e = {}) {
	return st || (e.includeStyleProperties ? (st = e.includeStyleProperties, st) : (st = ot(window.getComputedStyle(document.documentElement)), st));
}
function lt(e, t) {
	let n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
	return n ? parseFloat(n.replace("px", "")) : 0;
}
function ut(e) {
	let t = lt(e, "border-left-width"), n = lt(e, "border-right-width");
	return e.clientWidth + t + n;
}
function dt(e) {
	let t = lt(e, "border-top-width"), n = lt(e, "border-bottom-width");
	return e.clientHeight + t + n;
}
function ft(e, t = {}) {
	return {
		width: t.width || ut(e),
		height: t.height || dt(e)
	};
}
function pt() {
	let e, t;
	try {
		t = process;
	} catch {}
	let n = t && t.env ? t.env.devicePixelRatio : null;
	return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
var V = 16384;
function mt(e) {
	(e.width > V || e.height > V) && (e.width > V && e.height > V ? e.width > e.height ? (e.height *= V / e.width, e.width = V) : (e.width *= V / e.height, e.height = V) : e.width > V ? (e.height *= V / e.width, e.width = V) : (e.width *= V / e.height, e.height = V));
}
function ht(e, t = {}) {
	return e.toBlob ? new Promise((n) => {
		e.toBlob(n, t.type ? t.type : "image/png", t.quality ? t.quality : 1);
	}) : new Promise((n) => {
		let r = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(",")[1]), i = r.length, a = new Uint8Array(i);
		for (let e = 0; e < i; e += 1) a[e] = r.charCodeAt(e);
		n(new Blob([a], { type: t.type ? t.type : "image/png" }));
	});
}
function gt(e) {
	return new Promise((t, n) => {
		let r = new Image();
		r.onload = () => {
			r.decode().then(() => {
				requestAnimationFrame(() => t(r));
			});
		}, r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = e;
	});
}
async function _t(e) {
	return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function vt(e, t, n) {
	let r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg"), a = document.createElementNS(r, "foreignObject");
	return i.setAttribute("width", `${t}`), i.setAttribute("height", `${n}`), i.setAttribute("viewBox", `0 0 ${t} ${n}`), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(e), _t(i);
}
var yt = (e, t) => {
	if (e instanceof t) return !0;
	let n = Object.getPrototypeOf(e);
	return n === null ? !1 : n.constructor.name === t.name || yt(n, t);
};
//#endregion
//#region node_modules/html-to-image/es/clone-pseudos.js
function bt(e) {
	let t = e.getPropertyValue("content");
	return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function xt(e, t) {
	return ct(t).map((t) => `${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t) ? " !important" : ""};`).join(" ");
}
function St(e, t, n, r) {
	let i = `.${e}:${t}`, a = n.cssText ? bt(n) : xt(n, r);
	return document.createTextNode(`${i}{${a}}`);
}
function Ct(e, t, n, r) {
	let i = window.getComputedStyle(e, n), a = i.getPropertyValue("content");
	if (a === "" || a === "none") return;
	let o = at();
	try {
		t.className = `${t.className} ${o}`;
	} catch {
		return;
	}
	let s = document.createElement("style");
	s.appendChild(St(o, n, i, r)), t.appendChild(s);
}
function wt(e, t, n) {
	Ct(e, t, ":before", n), Ct(e, t, ":after", n);
}
//#endregion
//#region node_modules/html-to-image/es/mimes.js
var Tt = "application/font-woff", Et = "image/jpeg", Dt = {
	woff: Tt,
	woff2: Tt,
	ttf: "application/font-truetype",
	eot: "application/vnd.ms-fontobject",
	png: "image/png",
	jpg: Et,
	jpeg: Et,
	gif: "image/gif",
	tiff: "image/tiff",
	svg: "image/svg+xml",
	webp: "image/webp"
};
function Ot(e) {
	let t = /\.([^./]*?)$/g.exec(e);
	return t ? t[1] : "";
}
function kt(e) {
	return Dt[Ot(e).toLowerCase()] || "";
}
//#endregion
//#region node_modules/html-to-image/es/dataurl.js
function At(e) {
	return e.split(/,/)[1];
}
function jt(e) {
	return e.search(/^(data:)/) !== -1;
}
function Mt(e, t) {
	return `data:${t};base64,${e}`;
}
async function Nt(e, t, n) {
	let r = await fetch(e, t);
	if (r.status === 404) throw Error(`Resource "${r.url}" not found`);
	let i = await r.blob();
	return new Promise((e, t) => {
		let a = new FileReader();
		a.onerror = t, a.onloadend = () => {
			try {
				e(n({
					res: r,
					result: a.result
				}));
			} catch (e) {
				t(e);
			}
		}, a.readAsDataURL(i);
	});
}
var Pt = {};
function Ft(e, t, n) {
	let r = e.replace(/\?.*/, "");
	return n && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), t ? `[${t}]${r}` : r;
}
async function It(e, t, n) {
	let r = Ft(e, t, n.includeQueryParams);
	if (Pt[r] != null) return Pt[r];
	n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
	let i;
	try {
		i = Mt(await Nt(e, n.fetchRequestInit, ({ res: e, result: n }) => (t ||= e.headers.get("Content-Type") || "", At(n))), t);
	} catch (t) {
		i = n.imagePlaceholder || "";
		let r = `Failed to fetch resource: ${e}`;
		t && (r = typeof t == "string" ? t : t.message), r && console.warn(r);
	}
	return Pt[r] = i, i;
}
//#endregion
//#region node_modules/html-to-image/es/clone-node.js
async function Lt(e) {
	let t = e.toDataURL();
	return t === "data:," ? e.cloneNode(!1) : gt(t);
}
async function Rt(e, t) {
	if (e.currentSrc) {
		let t = document.createElement("canvas"), n = t.getContext("2d");
		return t.width = e.clientWidth, t.height = e.clientHeight, n?.drawImage(e, 0, 0, t.width, t.height), gt(t.toDataURL());
	}
	let n = e.poster;
	return gt(await It(n, kt(n), t));
}
async function zt(e, t) {
	try {
		if (e?.contentDocument?.body) return await Yt(e.contentDocument.body, t, !0);
	} catch {}
	return e.cloneNode(!1);
}
async function Bt(e, t) {
	return yt(e, HTMLCanvasElement) ? Lt(e) : yt(e, HTMLVideoElement) ? Rt(e, t) : yt(e, HTMLIFrameElement) ? zt(e, t) : e.cloneNode(Ht(e));
}
var Vt = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Ht = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function Ut(e, t, n) {
	if (Ht(t)) return t;
	let r = [];
	return r = Vt(e) && e.assignedNodes ? ot(e.assignedNodes()) : yt(e, HTMLIFrameElement) && e.contentDocument?.body ? ot(e.contentDocument.body.childNodes) : ot((e.shadowRoot ?? e).childNodes), r.length === 0 || yt(e, HTMLVideoElement) || await r.reduce((e, r) => e.then(() => Yt(r, n)).then((e) => {
		e && t.appendChild(e);
	}), Promise.resolve()), t;
}
function Wt(e, t, n) {
	let r = t.style;
	if (!r) return;
	let i = window.getComputedStyle(e);
	i.cssText ? (r.cssText = i.cssText, r.transformOrigin = i.transformOrigin) : ct(n).forEach((n) => {
		let a = i.getPropertyValue(n);
		n === "font-size" && a.endsWith("px") && (a = `${Math.floor(parseFloat(a.substring(0, a.length - 2))) - .1}px`), yt(e, HTMLIFrameElement) && n === "display" && a === "inline" && (a = "block"), n === "d" && t.getAttribute("d") && (a = `path(${t.getAttribute("d")})`), r.setProperty(n, a, i.getPropertyPriority(n));
	});
}
function Gt(e, t) {
	yt(e, HTMLTextAreaElement) && (t.innerHTML = e.value), yt(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function Kt(e, t) {
	if (yt(e, HTMLSelectElement)) {
		let n = t, r = Array.from(n.children).find((t) => e.value === t.getAttribute("value"));
		r && r.setAttribute("selected", "");
	}
}
function qt(e, t, n) {
	return yt(t, Element) && (Wt(e, t, n), wt(e, t, n), Gt(e, t), Kt(e, t)), t;
}
async function Jt(e, t) {
	let n = e.querySelectorAll ? e.querySelectorAll("use") : [];
	if (n.length === 0) return e;
	let r = {};
	for (let i = 0; i < n.length; i++) {
		let a = n[i].getAttribute("xlink:href");
		if (a) {
			let n = e.querySelector(a), i = document.querySelector(a);
			!n && i && !r[a] && (r[a] = await Yt(i, t, !0));
		}
	}
	let i = Object.values(r);
	if (i.length) {
		let t = "http://www.w3.org/1999/xhtml", n = document.createElementNS(t, "svg");
		n.setAttribute("xmlns", t), n.style.position = "absolute", n.style.width = "0", n.style.height = "0", n.style.overflow = "hidden", n.style.display = "none";
		let r = document.createElementNS(t, "defs");
		n.appendChild(r);
		for (let e = 0; e < i.length; e++) r.appendChild(i[e]);
		e.appendChild(n);
	}
	return e;
}
async function Yt(e, t, n) {
	return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((e) => Bt(e, t)).then((n) => Ut(e, n, t)).then((n) => qt(e, n, t)).then((e) => Jt(e, t));
}
//#endregion
//#region node_modules/html-to-image/es/embed-resources.js
var Xt = /url\((['"]?)([^'"]+?)\1\)/g, Zt = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Qt = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function $t(e) {
	let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
	return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function en(e) {
	let t = [];
	return e.replace(Xt, (e, n, r) => (t.push(r), e)), t.filter((e) => !jt(e));
}
async function tn(e, t, n, r, i) {
	try {
		let a = n ? it(t, n) : t, o = kt(t), s;
		return s = i ? Mt(await i(a), o) : await It(a, o, r), e.replace($t(t), `$1${s}$3`);
	} catch {}
	return e;
}
function nn(e, { preferredFontFormat: t }) {
	return t ? e.replace(Qt, (e) => {
		for (;;) {
			let [n, , r] = Zt.exec(e) || [];
			if (!r) return "";
			if (r === t) return `src: ${n};`;
		}
	}) : e;
}
function rn(e) {
	return e.search(Xt) !== -1;
}
async function an(e, t, n) {
	if (!rn(e)) return e;
	let r = nn(e, n);
	return en(r).reduce((e, r) => e.then((e) => tn(e, r, t, n)), Promise.resolve(r));
}
//#endregion
//#region node_modules/html-to-image/es/embed-images.js
async function on(e, t, n) {
	let r = t.style?.getPropertyValue(e);
	if (r) {
		let i = await an(r, null, n);
		return t.style.setProperty(e, i, t.style.getPropertyPriority(e)), !0;
	}
	return !1;
}
async function sn(e, t) {
	await on("background", e, t) || await on("background-image", e, t), await on("mask", e, t) || await on("-webkit-mask", e, t) || await on("mask-image", e, t) || await on("-webkit-mask-image", e, t);
}
async function cn(e, t) {
	let n = yt(e, HTMLImageElement);
	if ((!n || jt(e.src)) && (!yt(e, SVGImageElement) || jt(e.href.baseVal))) return;
	let r = n ? e.src : e.href.baseVal, i = await It(r, kt(r), t);
	await new Promise((r, a) => {
		e.onload = r, e.onerror = t.onImageErrorHandler ? (...e) => {
			try {
				r(t.onImageErrorHandler(...e));
			} catch (e) {
				a(e);
			}
		} : a;
		let o = e;
		o.decode &&= r, o.loading === "lazy" && (o.loading = "eager"), n ? (e.srcset = "", e.src = i) : e.href.baseVal = i;
	});
}
async function ln(e, t) {
	let n = ot(e.childNodes).map((e) => un(e, t));
	await Promise.all(n).then(() => e);
}
async function un(e, t) {
	yt(e, Element) && (await sn(e, t), await cn(e, t), await ln(e, t));
}
//#endregion
//#region node_modules/html-to-image/es/apply-style.js
function dn(e, t) {
	let { style: n } = e;
	t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
	let r = t.style;
	return r != null && Object.keys(r).forEach((e) => {
		n[e] = r[e];
	}), e;
}
//#endregion
//#region node_modules/html-to-image/es/embed-webfonts.js
var fn = {};
async function pn(e) {
	let t = fn[e];
	return t ?? (t = {
		url: e,
		cssText: await (await fetch(e)).text()
	}, fn[e] = t, t);
}
async function mn(e, t) {
	let n = e.cssText, r = /url\(["']?([^"')]+)["']?\)/g, i = (n.match(/url\([^)]+\)/g) || []).map(async (i) => {
		let a = i.replace(r, "$1");
		return a.startsWith("https://") || (a = new URL(a, e.url).href), Nt(a, t.fetchRequestInit, ({ result: e }) => (n = n.replace(i, `url(${e})`), [i, e]));
	});
	return Promise.all(i).then(() => n);
}
function hn(e) {
	if (e == null) return [];
	let t = [], n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, ""), r = /* @__PURE__ */ RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
	for (;;) {
		let e = r.exec(n);
		if (e === null) break;
		t.push(e[0]);
	}
	n = n.replace(r, "");
	let i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, a = /* @__PURE__ */ RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
	for (;;) {
		let e = i.exec(n);
		if (e === null) {
			if (e = a.exec(n), e === null) break;
			i.lastIndex = a.lastIndex;
		} else a.lastIndex = i.lastIndex;
		t.push(e[0]);
	}
	return t;
}
async function gn(e, t) {
	let n = [], r = [];
	return e.forEach((n) => {
		if ("cssRules" in n) try {
			ot(n.cssRules || []).forEach((e, i) => {
				if (e.type === CSSRule.IMPORT_RULE) {
					let a = i + 1, o = e.href, s = pn(o).then((e) => mn(e, t)).then((e) => hn(e).forEach((e) => {
						try {
							n.insertRule(e, e.startsWith("@import") ? a += 1 : n.cssRules.length);
						} catch (t) {
							console.error("Error inserting rule from remote css", {
								rule: e,
								error: t
							});
						}
					})).catch((e) => {
						console.error("Error loading remote css", e.toString());
					});
					r.push(s);
				}
			});
		} catch (i) {
			let a = e.find((e) => e.href == null) || document.styleSheets[0];
			n.href != null && r.push(pn(n.href).then((e) => mn(e, t)).then((e) => hn(e).forEach((e) => {
				a.insertRule(e, a.cssRules.length);
			})).catch((e) => {
				console.error("Error loading remote stylesheet", e);
			})), console.error("Error inlining remote css file", i);
		}
	}), Promise.all(r).then(() => (e.forEach((e) => {
		if ("cssRules" in e) try {
			ot(e.cssRules || []).forEach((e) => {
				n.push(e);
			});
		} catch (t) {
			console.error(`Error while reading CSS rules from ${e.href}`, t);
		}
	}), n));
}
function _n(e) {
	return e.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => rn(e.style.getPropertyValue("src")));
}
async function vn(e, t) {
	if (e.ownerDocument == null) throw Error("Provided element is not within a Document");
	return _n(await gn(ot(e.ownerDocument.styleSheets), t));
}
function yn(e) {
	return e.trim().replace(/["']/g, "");
}
function bn(e) {
	let t = /* @__PURE__ */ new Set();
	function n(e) {
		(e.style.fontFamily || getComputedStyle(e).fontFamily).split(",").forEach((e) => {
			t.add(yn(e));
		}), Array.from(e.children).forEach((e) => {
			e instanceof HTMLElement && n(e);
		});
	}
	return n(e), t;
}
async function xn(e, t) {
	let n = await vn(e, t), r = bn(e);
	return (await Promise.all(n.filter((e) => r.has(yn(e.style.fontFamily))).map((e) => {
		let n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
		return an(e.cssText, n, t);
	}))).join("\n");
}
async function Sn(e, t) {
	let n = t.fontEmbedCSS == null ? t.skipFonts ? null : await xn(e, t) : t.fontEmbedCSS;
	if (n) {
		let t = document.createElement("style"), r = document.createTextNode(n);
		t.appendChild(r), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
	}
}
//#endregion
//#region node_modules/html-to-image/es/index.js
async function Cn(e, t = {}) {
	let { width: n, height: r } = ft(e, t), i = await Yt(e, t, !0);
	return await Sn(i, t), await un(i, t), dn(i, t), await vt(i, n, r);
}
async function wn(e, t = {}) {
	let { width: n, height: r } = ft(e, t), i = await gt(await Cn(e, t)), a = document.createElement("canvas"), o = a.getContext("2d"), s = t.pixelRatio || pt(), c = t.canvasWidth || n, l = t.canvasHeight || r;
	return a.width = c * s, a.height = l * s, t.skipAutoScale || mt(a), a.style.width = `${c}`, a.style.height = `${l}`, t.backgroundColor && (o.fillStyle = t.backgroundColor, o.fillRect(0, 0, a.width, a.height)), o.drawImage(i, 0, 0, a.width, a.height), a;
}
async function Tn(e, t = {}) {
	return await ht(await wn(e, t));
}
//#endregion
//#region src/lib/hooks/screenshot.hook.ts
var En = 18e4, Dn = e(null), On = () => i(Dn), kn = () => {
	let [e, t] = u(null), [n, i] = u(null), a = l(!1);
	return {
		screenshot: e,
		capturedAt: n,
		captureScreenshot: r(() => {
			a.current || (a.current = !0, setTimeout(() => {
				let e = document.documentElement;
				Tn(e, { filter: (e) => !e.classList?.contains("elitea-assistant-container") }).then((e) => {
					t(e), i(Date.now());
				}).catch(() => {
					t(null), i(null);
				}).finally(() => {
					a.current = !1;
				});
			}, 1e3));
		}, []),
		clearScreenshot: r(() => {
			t(null), i(null);
		}, []),
		getValidScreenshot: r(() => !e || !n || Date.now() - n > En ? null : e, [e, n])
	};
}, An = e(null), jn = () => i(An), Mn = (e) => {
	let [t, n] = u(null);
	return a(() => {
		let t = h(e.url, {
			path: e.path,
			...e.token && { extraHeaders: { Authorization: `Bearer ${e.token}` } },
			...e.withCredentials && { withCredentials: !0 },
			reconnectionDelayMax: 2e3
		});
		return t.on("connect", () => {
			n(t);
		}), t.on("connect_error", () => {}), () => {
			t.disconnect();
		};
	}, [
		e.url,
		e.path,
		e.token,
		e.withCredentials
	]), t;
}, Nn = e(null), Pn = () => i(Nn), Fn = 4e3, In = () => {
	let e = l(null), [t, n] = u(null), i = r(() => {
		n(null), e.current &&= (clearTimeout(e.current), null);
	}, []), o = r((t) => {
		n(t), e.current && clearTimeout(e.current), e.current = setTimeout(i, Fn);
	}, [i]);
	return a(() => () => {
		e.current && clearTimeout(e.current);
	}, []), {
		toastMessage: t,
		showToast: o,
		dismissToast: i
	};
}, Ln = 3, Rn = 16, zn = (e, t, n) => {
	let i = l(null), o = l(n), [s, c] = u(0);
	o.current = n, a(() => {
		if (!t || !e) {
			c(e.length);
			return;
		}
		return c(0), i.current = setInterval(() => {
			c((t) => {
				let n = t + Ln;
				return n >= e.length ? (i.current && clearInterval(i.current), o.current(), e.length) : n;
			});
		}, Rn), () => {
			i.current && clearInterval(i.current);
		};
	}, [e, t]);
	let d = r(() => {
		i.current && clearInterval(i.current), c(e.length), o.current();
	}, [e]);
	return {
		displayedText: e.slice(0, s),
		skipAnimation: d
	};
};
//#endregion
//#region node_modules/dompurify/dist/purify.es.mjs
function Bn(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Vn(e) {
	if (Array.isArray(e)) return e;
}
function Hn(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Un() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Wn(e, t) {
	return Vn(e) || Hn(e, t) || Gn(e, t) || Un();
}
function Gn(e, t) {
	if (e) {
		if (typeof e == "string") return Bn(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Bn(e, t) : void 0;
	}
}
var Kn = Object.entries, qn = Object.setPrototypeOf, Jn = Object.isFrozen, Yn = Object.getPrototypeOf, Xn = Object.getOwnPropertyDescriptor, H = Object.freeze, U = Object.seal, Zn = Object.create, Qn = typeof Reflect < "u" && Reflect, $n = Qn.apply, er = Qn.construct;
H ||= function(e) {
	return e;
}, U ||= function(e) {
	return e;
}, $n ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, er ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var tr = W(Array.prototype.forEach), nr = W(Array.prototype.lastIndexOf), rr = W(Array.prototype.pop), ir = W(Array.prototype.push), ar = W(Array.prototype.splice), or = Array.isArray, sr = W(String.prototype.toLowerCase), cr = W(String.prototype.toString), lr = W(String.prototype.match), ur = W(String.prototype.replace), dr = W(String.prototype.indexOf), fr = W(String.prototype.trim), pr = W(Number.prototype.toString), mr = W(Boolean.prototype.toString), hr = typeof BigInt > "u" ? null : W(BigInt.prototype.toString), gr = typeof Symbol > "u" ? null : W(Symbol.prototype.toString), _r = W(Object.prototype.hasOwnProperty), vr = W(Object.prototype.toString), yr = W(RegExp.prototype.test), br = xr(TypeError);
function W(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return $n(e, t, n);
	};
}
function xr(e) {
	return function() {
		return er(e, [...arguments]);
	};
}
function G(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : sr;
	if (qn && qn(e, null), !or(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (Jn(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function Sr(e) {
	for (let t = 0; t < e.length; t++) _r(e, t) || (e[t] = null);
	return e;
}
function Cr(e) {
	let t = Zn(null);
	for (let r of Kn(e)) {
		var n = Wn(r, 2);
		let i = n[0], a = n[1];
		_r(e, i) && (t[i] = or(a) ? Sr(a) : a && typeof a == "object" && a.constructor === Object ? Cr(a) : a);
	}
	return t;
}
function wr(e) {
	switch (typeof e) {
		case "string": return e;
		case "number": return pr(e);
		case "boolean": return mr(e);
		case "bigint": return hr ? hr(e) : "0";
		case "symbol": return gr ? gr(e) : "Symbol()";
		case "undefined": return vr(e);
		case "function":
		case "object": {
			if (e === null) return vr(e);
			let t = e, n = Tr(t, "toString");
			if (typeof n == "function") {
				let e = n(t);
				return typeof e == "string" ? e : vr(e);
			}
			return vr(e);
		}
		default: return vr(e);
	}
}
function Tr(e, t) {
	for (; e !== null;) {
		let n = Xn(e, t);
		if (n) {
			if (n.get) return W(n.get);
			if (typeof n.value == "function") return W(n.value);
		}
		e = Yn(e);
	}
	function n() {
		return null;
	}
	return n;
}
function Er(e) {
	try {
		return yr(e, ""), !0;
	} catch {
		return !1;
	}
}
var Dr = H(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), Or = H(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), kr = H([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), Ar = H([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), jr = H(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), Mr = H([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), Nr = H(["#text"]), Pr = H(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), Fr = H(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), Ir = H(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), Lr = H([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), Rr = U(/{{[\w\W]*|^[\w\W]*}}/g), zr = U(/<%[\w\W]*|^[\w\W]*%>/g), Br = U(/\${[\w\W]*/g), Vr = U(/^data-[\-\w.\u00B7-\uFFFF]+$/), Hr = U(/^aria-[\-\w]+$/), Ur = U(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Wr = U(/^(?:\w+script|data):/i), Gr = U(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Kr = U(/^html$/i), qr = U(/^[a-z][.\w]*(-[.\w]+)+$/i), Jr = U(/<[/\w!]/g), Yr = U(/<[/\w]/g), Xr = U(/<\/no(script|embed|frames)/i), Zr = U(/\/>/i), Qr = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	processingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, $r = [
	"style",
	"script",
	"xmp",
	"iframe",
	"noembed",
	"noframes",
	"plaintext",
	"noscript"
], ei = H(G({}, $r)), ti = function() {
	let e = {};
	return tr($r, (t) => {
		e[t] = U(RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
	}), H(e);
}(), ni = function() {
	return typeof window > "u" ? null : window;
}, ri = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, ii = function() {
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
}, ai = function(e, t, n, r) {
	return _r(e, t) && or(e[t]) ? G(r.base ? Cr(r.base) : {}, e[t], r.transform) : n;
}, oi = function(e, t, n) {
	let r = _r(e, t) ? e[t] : void 0;
	return r && typeof r == "object" ? Cr(r) : n();
};
function si() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ni(), t = (e) => si(e);
	if (t.version = "3.4.15", t.removed = [], !e || !e.document || e.document.nodeType !== Qr.document || !e.Element) return t.isSupported = !1, t;
	let n = e.document, r = n, i = r.currentScript;
	e.DocumentFragment;
	let a = e.HTMLTemplateElement, o = e.Node, s = e.Element, c = e.NodeFilter;
	e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
	let l = e.DOMParser, u = e.trustedTypes, d = s.prototype, f = Tr(d, "cloneNode"), p = Tr(d, "remove"), m = Tr(d, "removeAttributeNode"), h = Tr(d, "nextSibling"), g = Tr(d, "childNodes"), _ = Tr(d, "parentNode"), v = Tr(d, "shadowRoot"), y = Tr(d, "attributes"), b = o && o.prototype ? Tr(o.prototype, "nodeType") : null, x = o && o.prototype ? Tr(o.prototype, "nodeName") : null, S = o && o.prototype ? Tr(o.prototype, "ownerDocument") : null, C = function(e) {
		return b ? b(e) : e.nodeType;
	}, w = function(e) {
		return x ? x(e) : e.nodeName;
	};
	if (typeof a == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let T, E = "", D, O = !1, k = 0, A = function() {
		if (k > 0) throw br("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, j = function(e) {
		A(), k++;
		try {
			return T.createHTML(e);
		} finally {
			k--;
		}
	}, M = function(e) {
		A(), k++;
		try {
			return T.createScriptURL(e);
		} finally {
			k--;
		}
	}, N = function() {
		return O ||= (D = ri(u, i), !0), D;
	}, P = n, ee = P.implementation, F = P.createNodeIterator, te = P.createDocumentFragment, ne = P.getElementsByTagName, re = r.importNode, I = ii();
	t.isSupported = typeof Kn == "function" && typeof _ == "function" && ee && ee.createHTMLDocument !== void 0;
	let ie = Rr, ae = zr, oe = Br, se = Vr, ce = Hr, le = Wr, ue = Gr, de = qr, fe = Ur, L = null, pe = G({}, [
		...Dr,
		...Or,
		...kr,
		...jr,
		...Nr
	]), R = null, me = G({}, [
		...Pr,
		...Fr,
		...Ir,
		...Lr
	]), he = Object.seal(Zn(null, {
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
	})), ge = null, _e = null, ve = Object.seal(Zn(null, {
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
	})), ye = !0, be = !0, xe = !1, Se = !0, Ce = !1, we = !0, Te = !1, Ee = !1, De = null, Oe = null, ke = !1, Ae = !1, je = !1, Me = !1, z = !0, Ne = !1, Pe = "user-content-", Fe = !0, Ie = !1, Le = {}, Re = null, ze = G({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), Be = null, Ve = G({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), He = null, Ue = G({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), We = "http://www.w3.org/1998/Math/MathML", Ge = "http://www.w3.org/2000/svg", Ke = "http://www.w3.org/1999/xhtml", qe = Ke, Je = !1, Ye = null, Xe = G({}, [
		We,
		Ge,
		Ke
	], cr), Ze = H([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Qe = G({}, Ze), $e = H(["annotation-xml"]), et = G({}, $e), tt = G({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), nt = null, rt = ["application/xhtml+xml", "text/html"], B = null, it = null, at = n.createElement("form"), ot = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, st = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (it && it === e) return;
		(!e || typeof e != "object") && (e = {}), e = Cr(e), nt = rt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, B = nt === "application/xhtml+xml" ? cr : sr, L = ai(e, "ALLOWED_TAGS", pe, { transform: B }), R = ai(e, "ALLOWED_ATTR", me, { transform: B }), Ye = ai(e, "ALLOWED_NAMESPACES", Xe, { transform: cr }), He = ai(e, "ADD_URI_SAFE_ATTR", Ue, {
			transform: B,
			base: Ue
		}), Be = ai(e, "ADD_DATA_URI_TAGS", Ve, {
			transform: B,
			base: Ve
		}), Re = ai(e, "FORBID_CONTENTS", ze, { transform: B }), ge = ai(e, "FORBID_TAGS", Cr({}), { transform: B }), _e = ai(e, "FORBID_ATTR", Cr({}), { transform: B }), Le = _r(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? Cr(e.USE_PROFILES) : e.USE_PROFILES : !1, ye = e.ALLOW_ARIA_ATTR !== !1, be = e.ALLOW_DATA_ATTR !== !1, xe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Se = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ce = e.SAFE_FOR_TEMPLATES || !1, we = e.SAFE_FOR_XML !== !1, Te = e.WHOLE_DOCUMENT || !1, Ae = e.RETURN_DOM || !1, je = e.RETURN_DOM_FRAGMENT || !1, Me = e.RETURN_TRUSTED_TYPE || !1, ke = e.FORCE_BODY || !1, z = e.SANITIZE_DOM !== !1, Ne = e.SANITIZE_NAMED_PROPS || !1, Fe = e.KEEP_CONTENT !== !1, Ie = e.IN_PLACE || !1, fe = Er(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : Ur, qe = typeof e.NAMESPACE == "string" ? e.NAMESPACE : Ke, Qe = oi(e, "MATHML_TEXT_INTEGRATION_POINTS", () => G({}, Ze)), et = oi(e, "HTML_INTEGRATION_POINTS", () => G({}, $e));
		let t = oi(e, "CUSTOM_ELEMENT_HANDLING", () => Zn(null));
		if (he = Zn(null), _r(t, "tagNameCheck") && ot(t.tagNameCheck) && (he.tagNameCheck = t.tagNameCheck), _r(t, "attributeNameCheck") && ot(t.attributeNameCheck) && (he.attributeNameCheck = t.attributeNameCheck), _r(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (he.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), U(he), Ce && (be = !1), je && (Ae = !0), Le && (L = G({}, Nr), R = Zn(null), Le.html === !0 && (G(L, Dr), G(R, Pr)), Le.svg === !0 && (G(L, Or), G(R, Fr), G(R, Lr)), Le.svgFilters === !0 && (G(L, kr), G(R, Fr), G(R, Lr)), Le.mathMl === !0 && (G(L, jr), G(R, Ir), G(R, Lr))), ve.tagCheck = null, ve.attributeCheck = null, _r(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? ve.tagCheck = e.ADD_TAGS : or(e.ADD_TAGS) && (L === pe && (L = Cr(L)), G(L, e.ADD_TAGS, B))), _r(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? ve.attributeCheck = e.ADD_ATTR : or(e.ADD_ATTR) && (R === me && (R = Cr(R)), G(R, e.ADD_ATTR, B))), _r(e, "ADD_FORBID_CONTENTS") && or(e.ADD_FORBID_CONTENTS) && (Re === ze && (Re = Cr(Re)), G(Re, e.ADD_FORBID_CONTENTS, B)), Fe && (L["#text"] = !0), Te && G(L, [
			"html",
			"head",
			"body"
		]), L.table && (G(L, ["tbody"]), delete ge.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw br("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw br("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = T;
			T = e.TRUSTED_TYPES_POLICY;
			try {
				E = j("");
			} catch (e) {
				throw T = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (T = void 0, E = "") : (T === void 0 && (T = N()), T && typeof E == "string" && (E = j("")));
		H && H(e), it = e;
	}, ct = G({}, [
		...Or,
		...kr,
		...Ar
	]), lt = G({}, [...jr, ...Mr]), ut = function(e, t, n) {
		return t.namespaceURI === Ke ? e === "svg" : t.namespaceURI === We ? e === "svg" && (n === "annotation-xml" || Qe[n]) : !!ct[e];
	}, dt = function(e, t, n) {
		return t.namespaceURI === Ke ? e === "math" : t.namespaceURI === Ge ? e === "math" && et[n] : !!lt[e];
	}, ft = function(e, t, n) {
		return t.namespaceURI === Ge && !et[n] || t.namespaceURI === We && !Qe[n] ? !1 : !lt[e] && (tt[e] || !ct[e]);
	}, pt = function(e) {
		let t = _(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: qe,
			tagName: "template"
		});
		let n = sr(e.tagName), r = sr(t.tagName);
		return Ye[e.namespaceURI] ? e.namespaceURI === Ge ? ut(n, t, r) : e.namespaceURI === We ? dt(n, t, r) : e.namespaceURI === Ke ? ft(n, t, r) : !!(nt === "application/xhtml+xml" && Ye[e.namespaceURI]) : !1;
	}, V = function(e) {
		ir(t.removed, { element: e });
		try {
			_(e).removeChild(e);
		} catch {
			if (p(e), !_(e)) throw br("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, mt = function(e, t, n) {
		try {
			m(e, t);
		} catch {
			try {
				e.removeAttribute(n);
			} catch {}
		}
	}, ht = function(e) {
		vt(e);
		let t = g(e);
		if (t) {
			let e = [];
			tr(t, (t) => {
				ir(e, t);
			}), tr(e, (e) => {
				try {
					p(e);
				} catch {}
			});
		}
		let n = y(e);
		if (n) for (let t = n.length - 1; t >= 0; --t) {
			let r = n[t], i = r && r.name;
			typeof i == "string" && mt(e, r, i);
		}
	}, gt = function(e, n, r) {
		if (!r) try {
			r = n.getAttributeNode(e);
		} catch {
			r = null;
		}
		ir(t.removed, {
			attribute: r || null,
			from: n
		});
		try {
			r ? m(n, r) : n.removeAttribute(e);
		} catch {
			try {
				n.removeAttribute(e);
			} catch {}
		}
		if (e === "is") {
			if (Ae || je) try {
				V(n);
			} catch {}
			else try {
				n.setAttribute(e, "");
			} catch {}
		}
	}, _t = function(e) {
		let t = y(e);
		if (t) for (let n = t.length - 1; n >= 0; --n) {
			let r = t[n], i = r && r.name;
			typeof i != "string" || R[B(i)] || mt(e, r, i);
		}
	}, vt = function(e) {
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop();
			C(e) === Qr.element && _t(e);
			let n = g(e);
			if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
		}
	}, yt = function(e, t) {
		return we ? e === "patchsrc" || e === "for" && t !== "label" && t !== "output" : !1;
	}, bt = function(e) {
		if (!we) return;
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop(), n = C(e);
			if (n === Qr.processingInstruction || n === Qr.comment && yr(Yr, e.data)) {
				try {
					p(e);
				} catch {}
				continue;
			}
			if (n === Qr.element) {
				let t = e, n = B(w(e));
				try {
					t.hasAttribute && t.hasAttribute("patchsrc") && t.removeAttribute("patchsrc"), t.hasAttribute && t.hasAttribute("for") && yt("for", n) && t.removeAttribute("for");
				} catch {}
			}
			let r = g(e);
			if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
		}
	}, xt = function(e) {
		let t = null, r = null;
		if (ke) e = "<remove></remove>" + e;
		else {
			let t = lr(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		nt === "application/xhtml+xml" && qe === Ke && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = T ? j(e) : e;
		if (qe === Ke) try {
			t = new l().parseFromString(i, nt);
		} catch {}
		if (!t || !t.documentElement) {
			t = ee.createDocument(qe, "template", null);
			try {
				t.documentElement.innerHTML = Je ? E : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), qe === Ke ? ne.call(t, Te ? "html" : "body")[0] : Te ? t.documentElement : a;
	}, St = function(e) {
		let t = S ? S(e) : e.ownerDocument;
		return F.call(t || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
	}, Ct = function(e) {
		return e = ur(e, ie, " "), e = ur(e, ae, " "), e = ur(e, oe, " "), e;
	}, wt = function(e) {
		e.normalize();
		let t = S ? S(e) : e.ownerDocument, n = F.call(t || e, e, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null), r = n.nextNode();
		for (; r;) r.data = Ct(r.data), r = n.nextNode();
		let i = e.querySelectorAll?.call(e, "template");
		i && tr(i, (e) => {
			Et(e.content) && wt(e.content);
		});
	}, Tt = function(e) {
		let t = x ? x(e) : null;
		return typeof t != "string" || B(t) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== y(e) || typeof e.removeAttribute != "function" || typeof e.removeAttributeNode != "function" || typeof e.getAttributeNode != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== b(e) || e.childNodes !== g(e);
	}, Et = function(e) {
		if (!b || typeof e != "object" || !e) return !1;
		try {
			return b(e) === Qr.documentFragment;
		} catch {
			return !1;
		}
	}, Dt = function(e) {
		if (!b || typeof e != "object" || !e) return !1;
		try {
			return typeof b(e) == "number";
		} catch {
			return !1;
		}
	};
	function Ot(e, n, r) {
		e.length !== 0 && tr(e, (e) => {
			e.call(t, n, r, it);
		});
	}
	let kt = function(e, t) {
		return !!(we && e.hasChildNodes() && !Dt(e.firstElementChild) && yr(Jr, e.textContent) && yr(Jr, e.innerHTML) || we && e.namespaceURI === Ke && ei[t] && (Dt(e.firstElementChild) || typeof e.textContent == "string" && yr(ti[t], e.textContent)) || e.nodeType === Qr.processingInstruction || we && e.nodeType === Qr.comment && yr(Yr, e.data));
	}, At = function(e, t) {
		return e instanceof RegExp ? yr(e, t) : e instanceof Function && !!e(t, ...[...arguments].slice(2));
	}, jt = function(e, t, n) {
		if (!ge[t] && Lt(t) && At(he.tagNameCheck, t)) return !1;
		if (Fe && !Re[t]) {
			let t = _(e), r = g(e);
			if (r && t) {
				let i = r.length;
				for (let a = i - 1; a >= 0; --a) {
					let i = e === n ? f(r[a], !0) : r[a];
					t.insertBefore(i, h(e));
				}
			}
		}
		return V(e), !0;
	}, Mt = function(e, t, n, r) {
		return e.length === 0 ? t : t === n || t === r ? Cr(t) : t;
	}, Nt = function(e, t) {
		return e === t || _(e) !== null ? !1 : (Ie && vt(e), !0);
	}, Pt = function(e, n) {
		if (Ot(I.beforeSanitizeElements, e, null), Nt(e, n)) return !0;
		if (Tt(e)) return V(e), !0;
		let r = B(w(e));
		if (L = Mt(I.uponSanitizeElement, L, pe, De), Ot(I.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: L
		}), Nt(e, n)) return !0;
		if (kt(e, r)) return V(e), !0;
		if (ge[r] || !(ve.tagCheck instanceof Function && ve.tagCheck(r)) && !L[r]) {
			let t = jt(e, r, n);
			return t === !1 && Ot(I.afterSanitizeElements, e, null), t;
		}
		if (C(e) === Qr.element && !pt(e) || (r === "noscript" || r === "noembed" || r === "noframes") && yr(Xr, e.innerHTML)) return V(e), !0;
		if (Ce && e.nodeType === Qr.text) {
			let n = Ct(e.textContent);
			e.textContent !== n && (ir(t.removed, { element: e.cloneNode() }), e.textContent = n);
		}
		return Ot(I.afterSanitizeElements, e, null), !1;
	}, Ft = function(e, t, r) {
		if (_e[t] || yt(t, e) || z && (t === "id" || t === "name") && (r in n || r in at)) return !1;
		let i = R[t] || ve.attributeCheck instanceof Function && ve.attributeCheck(t, e);
		return be && yr(se, t) || ye && yr(ce, t) ? !0 : i ? He[t] || yr(fe, ur(r, ue, "")) || (t === "src" || t === "xlink:href" || t === "href") && e !== "script" && dr(r, "data:") === 0 && Be[e] || xe && !yr(le, ur(r, ue, "")) ? !0 : !r : Lt(e) && At(he.tagNameCheck, e) && At(he.attributeNameCheck, t, e) || t === "is" && he.allowCustomizedBuiltInElements && At(he.tagNameCheck, r);
	}, It = G({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), Lt = function(e) {
		return !It[sr(e)] && yr(de, e);
	}, Rt = function(e, t, n, r) {
		if (T && typeof u == "object" && typeof u.getAttributeType == "function" && !n) switch (u.getAttributeType(e, t)) {
			case "TrustedHTML": return j(r);
			case "TrustedScriptURL": return M(r);
		}
		return r;
	}, zt = function(e, t, n, r) {
		try {
			return n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r), !Tt(e) || (V(e), !1);
		} catch {
			return gt(t, e), !1;
		}
	}, Bt = function(e) {
		Ot(I.beforeSanitizeAttributes, e, null);
		let n = e.attributes;
		if (!n || Tt(e)) return;
		R = Mt(I.uponSanitizeAttribute, R, me, Oe);
		let r = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: R,
			forceKeepAttr: void 0
		}, i = n.length, a = B(e.nodeName);
		for (; i--;) {
			let o = n[i], s = o.name, c = o.namespaceURI, l = o.value, u = B(s), d = l, f = s === "value" ? d : fr(d), p = !1;
			if (r.attrName = u, r.attrValue = f, r.keepAttr = !0, r.forceKeepAttr = void 0, Ot(I.uponSanitizeAttribute, e, r), f = r.attrValue, Ne && (u === "id" || u === "name") && dr(f, Pe) !== 0 && (gt(s, e, o), f = Pe + f, p = !0), we && yr(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, f)) {
				gt(s, e, o);
				continue;
			}
			if (u === "attributename" && lr(f, "href")) {
				gt(s, e, o);
				continue;
			}
			if (!r.forceKeepAttr) {
				if (!r.keepAttr) {
					gt(s, e, o);
					continue;
				}
				if (!Se && yr(Zr, f)) {
					gt(s, e, o);
					continue;
				}
				if (Ce && (f = Ct(f)), !Ft(a, u, f)) {
					gt(s, e, o);
					continue;
				}
				f = Rt(a, u, c, f), f !== d && zt(e, s, c, f) && p && rr(t.removed);
			}
		}
		Ot(I.afterSanitizeAttributes, e, null);
	}, Vt = function(e) {
		let t = null, n = St(e);
		for (Ot(I.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if (Ot(I.uponSanitizeShadowNode, t, null), Pt(t, e), Bt(t), Et(t.content) && Vt(t.content), C(t) === Qr.element) {
			let e = v(t);
			Et(e) && (Ht(e), Vt(e));
		}
		Ot(I.afterSanitizeShadowDOM, e, null);
	}, Ht = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				Vt(e.shadow);
				continue;
			}
			let n = e.node, r = C(n) === Qr.element, i = g(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = x ? x(n) : null;
				if (typeof e == "string" && B(e) === "template") {
					let e = n.content;
					Et(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = v(n);
				Et(e) && t.push({
					node: null,
					shadow: e
				}, {
					node: e,
					shadow: null
				});
			}
		}
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, a = null, o = null, s = null;
		if (Je = !e, Je && (e = "<!-->"), typeof e != "string" && !Dt(e) && (e = wr(e), typeof e != "string")) throw br("dirty is not a string, aborting");
		if (!t.isSupported) return e;
		Ee ? (L = De, R = Oe) : st(n), (I.uponSanitizeElement.length > 0 || I.uponSanitizeAttribute.length > 0) && (L = Cr(L)), I.uponSanitizeAttribute.length > 0 && (R = Cr(R)), t.removed = [];
		let c = Ie && typeof e != "string" && Dt(e);
		if (c) {
			bt(e);
			let t = w(e);
			if (typeof t == "string") {
				let n = B(t);
				if (!L[n] || ge[n]) throw ht(e), br("root node is forbidden and cannot be sanitized in-place");
			}
			if (Tt(e)) throw ht(e), br("root node is clobbered and cannot be sanitized in-place");
			try {
				Ht(e);
			} catch (t) {
				throw ht(e), t;
			}
		} else if (Dt(e)) i = xt("<!---->"), a = i.ownerDocument.importNode(e, !0), a.nodeType === Qr.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? i = a : i.appendChild(a), Ht(i);
		else {
			if (!Ae && !Ce && !Te && e.indexOf("<") === -1) return T && Me ? j(e) : e;
			if (i = xt(e), !i) return Ae ? null : Me ? E : "";
		}
		i && ke && V(i.firstChild);
		let l = c ? e : i;
		try {
			let e = St(l);
			for (; o = e.nextNode();) Pt(o, l), Bt(o), Et(o.content) && Vt(o.content);
		} catch (n) {
			throw c && (ht(e), tr(t.removed, (e) => {
				e.element && vt(e.element);
			})), n;
		}
		if (c) return tr(t.removed, (e) => {
			e.element && vt(e.element);
		}), Ce && wt(e), e;
		if (Ae) {
			if (Ce && wt(i), je) for (s = te.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
			else s = i;
			return (R.shadowroot || R.shadowrootmode) && (s = re.call(r, s, !0)), s;
		}
		let u = Te ? i.outerHTML : i.innerHTML;
		return Te && L["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && yr(Kr, i.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + u), Ce && (u = Ct(u)), T && Me ? j(u) : u;
	}, t.setConfig = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		st(e), Ee = !0, De = L, Oe = R;
	}, t.clearConfig = function() {
		it = null, Ee = !1, De = null, Oe = null, T = D, E = "";
	}, t.isValidAttribute = function(e, t, n) {
		it || st({});
		let r = B(e), i = B(t);
		return Ft(r, i, n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && _r(I, e) && ir(I[e], t);
	}, t.removeHook = function(e, t) {
		if (_r(I, e)) {
			if (t !== void 0) {
				let n = nr(I[e], t);
				return n === -1 ? void 0 : ar(I[e], n, 1)[0];
			}
			return rr(I[e]);
		}
	}, t.removeHooks = function(e) {
		_r(I, e) && (I[e] = []);
	}, t.removeAllHooks = function() {
		I = ii();
	}, t;
}
var ci = si(), li = (e) => {
	let t = l(`mermaid-${Math.random().toString(36).slice(2)}`), [n, r] = u(null), [i, o] = u(null), s = fi();
	return a(() => {
		let n = !1;
		return r(null), o(null), import("mermaid").then(({ default: n }) => (n.initialize({
			startOnLoad: !1,
			theme: s === "dark" ? "dark" : "default"
		}), n.render(t.current, e))).then(({ svg: e }) => {
			if (!n) {
				let t = ci.sanitize(e, {
					ADD_TAGS: ["foreignObject"],
					HTML_INTEGRATION_POINTS: { foreignobject: !0 }
				});
				r(t);
			}
		}).catch((e) => {
			n || (console.warn("Mermaid rendering failed:", e), o("Unable to render this diagram. Please check the syntax."));
		}), () => {
			n = !0;
		};
	}, [e, s]), {
		svg: n,
		error: i
	};
}, ui = () => {
	let [e, t] = u(et);
	return a(() => {
		let e = et();
		if (e) {
			t(() => e);
			return;
		}
		$e.then((e) => t(() => e));
	}, []), e;
}, di = e("light"), fi = () => i(di), pi = n((e) => {
	let { avatar: t, title: n, placeholder: r, welcomeMessage: i, supportProjectId: a, initialHistory: o, lastConversation: s, isInitLoading: c, isOpen: l, onClose: u, onExpand: m, expanded: h } = e, { toastMessage: g, showToast: _, dismissToast: v } = In(), { messages: y, inputText: b, setInputText: x, attachments: S, addFiles: C, removeAttachment: w, history: T, currentConversationId: E, isLoading: D, isStreaming: O, isUploading: k, handleNewChat: A, handleSelectConversation: j, handleSend: M, handleStop: N, handleAnimationComplete: P } = nt({
		welcomeMessage: i,
		supportProjectId: a,
		initialHistory: o,
		initialConversation: s,
		isInitLoading: c,
		showToast: _
	});
	return l ? /* @__PURE__ */ p(d, { children: [h && /* @__PURE__ */ f("div", {
		className: "elitea-assistant-overlay",
		onClick: m
	}), /* @__PURE__ */ p("div", {
		className: `elitea-assistant-window${h ? " elitea-assistant-window--expanded" : ""}`,
		children: [
			g && /* @__PURE__ */ f(de, {
				message: g,
				onDismiss: v
			}),
			/* @__PURE__ */ f(L, {
				title: n,
				expanded: h,
				history: T,
				currentConversationId: E,
				disabled: D,
				onClose: u,
				onExpand: m,
				onNewChat: A,
				onSelectConversation: j
			}),
			/* @__PURE__ */ f(pe, {
				avatar: t,
				messages: y,
				isLoading: D,
				onAnimationComplete: P
			}),
			/* @__PURE__ */ f(Oe, {
				placeholder: r,
				text: b,
				onTextChange: x,
				attachments: S,
				onAddFiles: C,
				onRemoveAttachment: w,
				onSend: M,
				onStop: N,
				expanded: h,
				disabled: D,
				isUploading: k,
				isStreaming: O
			})
		]
	})] }) : null;
});
pi.displayName = "ChatWindow";
//#endregion
//#region src/components/chat/PopupMessage.tsx
var mi = n((e) => {
	let { message: t, onClose: n } = e;
	return /* @__PURE__ */ p("div", {
		className: "elitea-assistant-popup",
		children: [/* @__PURE__ */ f("span", {
			className: "elitea-assistant-popup-text",
			children: t
		}), /* @__PURE__ */ f("button", {
			className: "elitea-assistant-popup-close",
			onClick: n,
			"aria-label": "Close popup",
			type: "button",
			children: /* @__PURE__ */ f(P, {})
		})]
	});
});
mi.displayName = "PopupMessage";
//#endregion
//#region src/components/chat/AnimatedMessage.tsx
var hi = n((e) => {
	let { message: t, onComplete: n } = e, { displayedText: r, skipAnimation: i } = zn(t.content, !!t.isAnimating, n);
	return /* @__PURE__ */ f("div", {
		onClick: i,
		style: { cursor: t.isAnimating ? "pointer" : void 0 },
		children: /* @__PURE__ */ f(am, {
			isAnimating: !0,
			content: r
		})
	});
});
hi.displayName = "AnimatedMessage";
//#endregion
//#region src/components/chat/MessageItem.tsx
var gi = n((e) => {
	let { message: t, avatar: n, onAnimationComplete: r } = e, i = t.role === "assistant" && !!t.statusMessage, a = t.role === "user" || t.content || !i && t.isStreaming;
	return /* @__PURE__ */ p("div", {
		className: `elitea-assistant-message-wrapper elitea-assistant-message-wrapper--${t.role}`,
		children: [
			/* @__PURE__ */ p("div", {
				className: `elitea-assistant-message-meta elitea-assistant-message-meta--${t.role}`,
				children: [
					t.role === "assistant" && /* @__PURE__ */ f("span", {
						className: "elitea-assistant-message-avatar elitea-assistant-message-avatar--assistant",
						children: /* @__PURE__ */ f(A, {})
					}),
					/* @__PURE__ */ f("span", {
						className: "elitea-assistant-message-time",
						children: Re(t.timestamp)
					}),
					t.role === "user" && /* @__PURE__ */ f("span", {
						className: "elitea-assistant-message-avatar elitea-assistant-message-avatar--user",
						children: n ? /* @__PURE__ */ f("img", {
							src: n,
							alt: "User avatar",
							className: "elitea-assistant-avatar-img"
						}) : /* @__PURE__ */ f(se, {})
					})
				]
			}),
			i && /* @__PURE__ */ f(vi, { message: t.statusMessage }),
			a && /* @__PURE__ */ p("div", {
				className: `elitea-assistant-message elitea-assistant-message--${t.role}${t.isError ? " elitea-assistant-message--error" : ""}`,
				children: [t.content ? t.role === "assistant" ? t.isAnimating ? /* @__PURE__ */ f(hi, {
					message: t,
					onComplete: () => r?.(t.id)
				}) : /* @__PURE__ */ f(am, { content: t.content }) : t.content : t.isStreaming ? /* @__PURE__ */ f(yi, {}) : "", t.role === "assistant" && t.content && !t.isStreaming && !t.isAnimating && /* @__PURE__ */ f(ue, { text: t.content })]
			})
		]
	});
});
gi.displayName = "MessageItem";
//#endregion
//#region src/components/chat/MessageListSkeleton.tsx
var _i = n(() => /* @__PURE__ */ f("div", {
	className: "elitea-assistant-messages",
	children: Array.from({ length: 3 }).map((e, t) => /* @__PURE__ */ p("div", {
		className: `elitea-assistant-skeleton-row ${t % 2 == 0 ? "elitea-assistant-skeleton-row--left" : "elitea-assistant-skeleton-row--right"}`,
		children: [/* @__PURE__ */ p("div", {
			className: "elitea-assistant-skeleton-meta",
			children: [/* @__PURE__ */ f("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--avatar" }), /* @__PURE__ */ f("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--time" })]
		}), /* @__PURE__ */ f("div", { className: "elitea-assistant-skeleton elitea-assistant-skeleton--bubble" })]
	}, t))
}));
_i.displayName = "MessageListSkeleton";
//#endregion
//#region src/components/chat/StatusMessage.tsx
var vi = n((e) => {
	let { message: t } = e;
	return t ? /* @__PURE__ */ f("div", {
		className: "elitea-assistant-status-message",
		children: t.split("").map((e, n) => /* @__PURE__ */ f("span", {
			className: "elitea-assistant-status-message-char",
			style: {
				animationDelay: `${n * .1}s`,
				minWidth: e === " " ? "0.25em" : void 0
			},
			children: e === " " ? "\xA0" : e
		}, `${t}-${n}`))
	}) : null;
});
vi.displayName = "StatusMessage";
//#endregion
//#region src/components/chat/TypingIndicator.tsx
var yi = n(() => /* @__PURE__ */ p("span", {
	className: "elitea-assistant-typing-indicator",
	children: [
		/* @__PURE__ */ f("span", { className: "elitea-assistant-typing-dot" }),
		/* @__PURE__ */ f("span", { className: "elitea-assistant-typing-dot" }),
		/* @__PURE__ */ f("span", { className: "elitea-assistant-typing-dot" })
	]
}));
yi.displayName = "TypingIndicator";
//#endregion
//#region node_modules/comma-separated-tokens/index.js
function bi(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region node_modules/estree-util-is-identifier-name/lib/index.js
var xi = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Si = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ci = {};
function wi(e, t) {
	return ((t || Ci).jsx ? Si : xi).test(e);
}
//#endregion
//#region node_modules/hast-util-whitespace/lib/index.js
var Ti = /[ \t\n\f\r]/g;
function Ei(e) {
	return typeof e == "object" ? e.type === "text" && Di(e.value) : Di(e);
}
function Di(e) {
	return e.replace(Ti, "") === "";
}
//#endregion
//#region node_modules/property-information/lib/util/schema.js
var Oi = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
Oi.prototype.normal = {}, Oi.prototype.property = {}, Oi.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/merge.js
function ki(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new Oi(n, r, t);
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
function Ai(e) {
	return e.toLowerCase();
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
var ji = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
ji.prototype.attribute = "", ji.prototype.booleanish = !1, ji.prototype.boolean = !1, ji.prototype.commaOrSpaceSeparated = !1, ji.prototype.commaSeparated = !1, ji.prototype.defined = !1, ji.prototype.mustUseProperty = !1, ji.prototype.number = !1, ji.prototype.overloadedBoolean = !1, ji.prototype.property = "", ji.prototype.spaceSeparated = !1, ji.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/types.js
var Mi = /* @__PURE__ */ C({
	boolean: () => K,
	booleanish: () => q,
	commaOrSpaceSeparated: () => Ii,
	commaSeparated: () => Fi,
	number: () => J,
	overloadedBoolean: () => Pi,
	spaceSeparated: () => Y
}), Ni = 0, K = Li(), q = Li(), Pi = Li(), J = Li(), Y = Li(), Fi = Li(), Ii = Li();
function Li() {
	return 2 ** ++Ni;
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var Ri = Object.keys(Mi), zi = class extends ji {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), Bi(this, "space", r), typeof n == "number") for (; ++i < Ri.length;) {
			let e = Ri[i];
			Bi(this, Ri[i], (n & Mi[e]) === Mi[e]);
		}
	}
};
zi.prototype.defined = !0;
function Bi(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
function Vi(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new zi(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[Ai(r)] = r, n[Ai(a.attribute)] = r;
	}
	return new Oi(t, n, e.space);
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var Hi = Vi({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: q,
		ariaAutoComplete: null,
		ariaBusy: q,
		ariaChecked: q,
		ariaColCount: J,
		ariaColIndex: J,
		ariaColSpan: J,
		ariaControls: Y,
		ariaCurrent: null,
		ariaDescribedBy: Y,
		ariaDetails: null,
		ariaDisabled: q,
		ariaDropEffect: Y,
		ariaErrorMessage: null,
		ariaExpanded: q,
		ariaFlowTo: Y,
		ariaGrabbed: q,
		ariaHasPopup: null,
		ariaHidden: q,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: Y,
		ariaLevel: J,
		ariaLive: null,
		ariaModal: q,
		ariaMultiLine: q,
		ariaMultiSelectable: q,
		ariaOrientation: null,
		ariaOwns: Y,
		ariaPlaceholder: null,
		ariaPosInSet: J,
		ariaPressed: q,
		ariaReadOnly: q,
		ariaRelevant: null,
		ariaRequired: q,
		ariaRoleDescription: Y,
		ariaRowCount: J,
		ariaRowIndex: J,
		ariaRowSpan: J,
		ariaSelected: q,
		ariaSetSize: J,
		ariaSort: null,
		ariaValueMax: J,
		ariaValueMin: J,
		ariaValueNow: J,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
//#endregion
//#region node_modules/property-information/lib/util/case-sensitive-transform.js
function Ui(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
function Wi(e, t) {
	return Ui(e, t.toLowerCase());
}
//#endregion
//#region node_modules/property-information/lib/html.js
var Gi = Vi({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: Fi,
		acceptCharset: Y,
		accessKey: Y,
		action: null,
		allow: null,
		allowFullScreen: K,
		allowPaymentRequest: K,
		allowUserMedia: K,
		alt: null,
		as: null,
		async: K,
		autoCapitalize: null,
		autoComplete: Y,
		autoFocus: K,
		autoPlay: K,
		blocking: Y,
		capture: null,
		charSet: null,
		checked: K,
		cite: null,
		className: Y,
		cols: J,
		colSpan: null,
		content: null,
		contentEditable: q,
		controls: K,
		controlsList: Y,
		coords: J | Fi,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: K,
		defer: K,
		dir: null,
		dirName: null,
		disabled: K,
		download: Pi,
		draggable: q,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: K,
		formTarget: null,
		headers: Y,
		height: J,
		hidden: Pi,
		high: J,
		href: null,
		hrefLang: null,
		htmlFor: Y,
		httpEquiv: Y,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: K,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: K,
		itemId: null,
		itemProp: Y,
		itemRef: Y,
		itemScope: K,
		itemType: Y,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: K,
		low: J,
		manifest: null,
		max: null,
		maxLength: J,
		media: null,
		method: null,
		min: null,
		minLength: J,
		multiple: K,
		muted: K,
		name: null,
		nonce: null,
		noModule: K,
		noValidate: K,
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
		open: K,
		optimum: J,
		pattern: null,
		ping: Y,
		placeholder: null,
		playsInline: K,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: K,
		referrerPolicy: null,
		rel: Y,
		required: K,
		reversed: K,
		rows: J,
		rowSpan: J,
		sandbox: Y,
		scope: null,
		scoped: K,
		seamless: K,
		selected: K,
		shadowRootClonable: K,
		shadowRootDelegatesFocus: K,
		shadowRootMode: null,
		shape: null,
		size: J,
		sizes: null,
		slot: null,
		span: J,
		spellCheck: q,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: J,
		step: null,
		style: null,
		tabIndex: J,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: K,
		useMap: null,
		value: q,
		width: J,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: Y,
		axis: null,
		background: null,
		bgColor: null,
		border: J,
		borderColor: null,
		bottomMargin: J,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: K,
		declare: K,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: J,
		leftMargin: J,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: J,
		marginWidth: J,
		noResize: K,
		noHref: K,
		noShade: K,
		noWrap: K,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: J,
		rules: null,
		scheme: null,
		scrolling: q,
		standby: null,
		summary: null,
		text: null,
		topMargin: J,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: J,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: K,
		disableRemotePlayback: K,
		prefix: null,
		property: null,
		results: J,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: Wi
}), Ki = Vi({
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
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: Ii,
		accentHeight: J,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: J,
		amplitude: J,
		arabicForm: null,
		ascent: J,
		attributeName: null,
		attributeType: null,
		azimuth: J,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: J,
		by: null,
		calcMode: null,
		capHeight: J,
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
		descent: J,
		diffuseConstant: J,
		direction: null,
		display: null,
		dur: null,
		divisor: J,
		dominantBaseline: null,
		download: K,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: J,
		enableBackground: null,
		end: null,
		event: null,
		exponent: J,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: J,
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
		g1: Fi,
		g2: Fi,
		glyphName: Fi,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: J,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: J,
		horizOriginX: J,
		horizOriginY: J,
		id: null,
		ideographic: J,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: J,
		k: J,
		k1: J,
		k2: J,
		k3: J,
		k4: J,
		kernelMatrix: Ii,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: J,
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
		mediaSize: J,
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
		overlinePosition: J,
		overlineThickness: J,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: J,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: Y,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: J,
		pointsAtY: J,
		pointsAtZ: J,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: Ii,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: Ii,
		rev: Ii,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: Ii,
		requiredFeatures: Ii,
		requiredFonts: Ii,
		requiredFormats: Ii,
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
		specularConstant: J,
		specularExponent: J,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: J,
		strikethroughThickness: J,
		string: null,
		stroke: null,
		strokeDashArray: Ii,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: J,
		strokeOpacity: J,
		strokeWidth: null,
		style: null,
		surfaceScale: J,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: Ii,
		tabIndex: J,
		tableValues: null,
		target: null,
		targetX: J,
		targetY: J,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: Ii,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: J,
		underlineThickness: J,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: J,
		values: null,
		vAlphabetic: J,
		vMathematical: J,
		vectorEffect: null,
		vHanging: J,
		vIdeographic: J,
		version: null,
		vertAdvY: J,
		vertOriginX: J,
		vertOriginY: J,
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
		xHeight: J,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: Ui
}), qi = Vi({
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
}), Ji = Vi({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: Wi
}), Yi = Vi({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), Xi = {
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
}, Zi = /[A-Z]/g, Qi = /-[a-z]/g, $i = /^data[-\w.:]+$/i;
function ea(e, t) {
	let n = Ai(t), r = t, i = ji;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && $i.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(Qi, na);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!Qi.test(e)) {
				let n = e.replace(Zi, ta);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = zi;
	}
	return new i(r, t);
}
function ta(e) {
	return "-" + e.toLowerCase();
}
function na(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/property-information/index.js
var ra = ki([
	Hi,
	Gi,
	qi,
	Ji,
	Yi
], "html"), ia = ki([
	Hi,
	Ki,
	qi,
	Ji,
	Yi
], "svg");
//#endregion
//#region node_modules/space-separated-tokens/index.js
function aa(e) {
	return e.join(" ").trim();
}
//#endregion
//#region node_modules/inline-style-parser/cjs/index.js
var oa = /* @__PURE__ */ S(((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, l = /^\s+|\s+$/g;
	function u(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t ||= {};
		var l = 1, u = 1;
		function f(e) {
			var t = e.match(r);
			t && (l += t.length);
			var n = e.lastIndexOf("\n");
			u = ~n ? e.length - n : u + e.length;
		}
		function p() {
			var e = {
				line: l,
				column: u
			};
			return function(t) {
				return t.position = new m(e), _(), t;
			};
		}
		function m(e) {
			this.start = e, this.end = {
				line: l,
				column: u
			}, this.source = t.source;
		}
		m.prototype.content = e;
		function h(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + l + ":" + u + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = l, r.column = u, r.source = e, !t.silent) throw r;
		}
		function g(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return f(r), e = e.slice(r.length), n;
			}
		}
		function _() {
			g(i);
		}
		function v(e) {
			var t;
			for (e ||= []; t = y();) t !== !1 && e.push(t);
			return e;
		}
		function y() {
			var t = p();
			if (e.charAt(0) == "/" && e.charAt(1) == "*") {
				for (var n = 2; e.charAt(n) != "" && (e.charAt(n) != "*" || e.charAt(n + 1) != "/");) ++n;
				if (n += 2, e.charAt(n - 1) === "") return h("End of comment missing");
				var r = e.slice(2, n - 2);
				return u += 2, f(r), e = e.slice(n), u += 2, t({
					type: "comment",
					comment: r
				});
			}
		}
		function b() {
			var e = p(), t = g(a);
			if (t) {
				if (y(), !g(o)) return h("property missing ':'");
				var r = g(s), i = e({
					type: "declaration",
					property: d(t[0].replace(n, "")),
					value: r ? d(r[0].replace(n, "")) : ""
				});
				return g(c), i;
			}
		}
		function x() {
			var e = [];
			v(e);
			for (var t; t = b();) t !== !1 && (e.push(t), v(e));
			return e;
		}
		return _(), x();
	}
	function d(e) {
		return e ? e.replace(l, "") : "";
	}
	t.exports = u;
})), sa = /* @__PURE__ */ S(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(oa());
	function r(e, t) {
		let r = null;
		if (!e || typeof e != "string") return r;
		let i = (0, n.default)(e), a = typeof t == "function";
		return i.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: n, value: i } = e;
			a ? t(n, i, e) : i && (r ||= {}, r[n] = i);
		}), r;
	}
})), ca = /* @__PURE__ */ S(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, o = function(e) {
		return !e || r.test(e) || t.test(e);
	}, s = function(e, t) {
		return t.toUpperCase();
	}, c = function(e, t) {
		return `${t}-`;
	};
	e.camelCase = function(e, t) {
		return t === void 0 && (t = {}), o(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(a, c) : e.replace(i, c), e.replace(n, s));
	};
})), la = /* @__PURE__ */ S(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(sa()), r = ca();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), ua = fa("end"), da = fa("start");
function fa(e) {
	return t;
	function t(t) {
		let n = t && t.position && t.position[e] || {};
		if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
		};
	}
}
function pa(e) {
	let t = da(e), n = ua(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region node_modules/unist-util-stringify-position/lib/index.js
function ma(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? ga(e.position) : "start" in e || "end" in e ? ga(e) : "line" in e || "column" in e ? ha(e) : "";
}
function ha(e) {
	return _a(e && e.line) + ":" + _a(e && e.column);
}
function ga(e) {
	return ha(e && e.start) + "-" + ha(e && e.end);
}
function _a(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region node_modules/vfile-message/lib/index.js
var va = class extends Error {
	constructor(e, t, n) {
		super(), typeof t == "string" && (n = t, t = void 0);
		let r = "", i = {}, a = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), typeof e == "string" ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && typeof n == "string") {
			let e = n.indexOf(":");
			e === -1 ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = ma(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
va.prototype.file = "", va.prototype.name = "", va.prototype.reason = "", va.prototype.message = "", va.prototype.stack = "", va.prototype.column = void 0, va.prototype.line = void 0, va.prototype.ancestors = void 0, va.prototype.cause = void 0, va.prototype.fatal = void 0, va.prototype.place = void 0, va.prototype.ruleId = void 0, va.prototype.source = void 0;
//#endregion
//#region node_modules/hast-util-to-jsx-runtime/lib/index.js
var ya = /* @__PURE__ */ T(la(), 1), ba = {}.hasOwnProperty, xa = /* @__PURE__ */ new Map(), Sa = /[A-Z]/g, Ca = /* @__PURE__ */ new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), wa = /* @__PURE__ */ new Set(["td", "th"]), Ta = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Ea(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = La(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = Ia(n, t.jsx, t.jsxs);
	}
	let i = {
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
		schema: t.space === "svg" ? ia : ra,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = Da(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function Da(e, t, n) {
	if (t.type === "element") return Oa(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return ka(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return ja(e, t, n);
	if (t.type === "mdxjsEsm") return Aa(e, t);
	if (t.type === "root") return Ma(e, t, n);
	if (t.type === "text") return Na(e, t);
}
function Oa(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = ia, e.schema = i), e.ancestors.push(t);
	let a = Ua(e, t.tagName, !1), o = Ra(e, t), s = Ba(e, t);
	return Ca.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e != "string" || !Ei(e);
	})), Pa(e, o, a, t), Fa(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function ka(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	Wa(e, t.position);
}
function Aa(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	Wa(e, t.position);
}
function ja(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = ia, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : Ua(e, t.name, !0), o = za(e, t), s = Ba(e, t);
	return Pa(e, o, a, t), Fa(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Ma(e, t, n) {
	let r = {};
	return Fa(r, Ba(e, t)), e.create(t, e.Fragment, r, n);
}
function Na(e, t) {
	return t.value;
}
function Pa(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Fa(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function Ia(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function La(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = da(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function Ra(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && ba.call(t.properties, i)) {
		let a = Va(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && wa.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function za(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") {
		if (r.data && r.data.estree && e.evaluater) {
			let t = r.data.estree.body[0];
			t.type;
			let i = t.expression;
			i.type;
			let a = i.properties[0];
			a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
		} else Wa(e, t.position);
	} else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") {
			if (r.value.data && r.value.data.estree && e.evaluater) {
				let t = r.value.data.estree.body[0];
				t.type, a = e.evaluater.evaluateExpression(t.expression);
			} else Wa(e, t.position);
		} else a = r.value === null || r.value;
		n[i] = a;
	}
	return n;
}
function Ba(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : xa;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = Da(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function Va(e, t, n) {
	let r = ea(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? bi(n) : aa(n)), r.property === "style") {
			let t = typeof n == "object" ? n : Ha(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = Ga(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? Xi[r.property] || r.property : r.attribute, n];
	}
}
function Ha(e, t) {
	try {
		return (0, ya.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new va("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = Ta + "#cannot-parse-style-attribute", r;
	}
}
function Ua(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = wi(e[n]) ? {
				type: "Identifier",
				name: e[n]
			} : {
				type: "Literal",
				value: e[n]
			};
			i = i ? {
				type: "MemberExpression",
				object: i,
				property: t,
				computed: !!(n && t.type === "Literal"),
				optional: !1
			} : t;
		}
		r = i;
	} else r = wi(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return ba.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	Wa(e);
}
function Wa(e, t) {
	let n = new va("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = Ta + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Ga(e) {
	let t = {}, n;
	for (n in e) ba.call(e, n) && (t[Ka(n)] = e[n]);
	return t;
}
function Ka(e) {
	let t = e.replace(Sa, qa);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function qa(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region node_modules/html-url-attributes/lib/index.js
var Ja = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
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
}, Ya = {};
function Xa(e, t) {
	let n = t || Ya;
	return Za(e, typeof n.includeImageAlt != "boolean" || n.includeImageAlt, typeof n.includeHtml != "boolean" || n.includeHtml);
}
function Za(e, t, n) {
	if ($a(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return Qa(e.children, t, n);
	}
	return Array.isArray(e) ? Qa(e, t, n) : "";
}
function Qa(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = Za(e[i], t, n);
	return r.join("");
}
function $a(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region node_modules/decode-named-character-reference/index.dom.js
var eo = document.createElement("i");
function to(e) {
	let t = "&" + e + ";";
	eo.innerHTML = t;
	let n = eo.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" ? !1 : n !== t && n;
}
//#endregion
//#region node_modules/micromark-util-chunked/index.js
function no(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function ro(e, t) {
	return e.length > 0 ? (no(e, e.length, 0, t), e) : t;
}
//#endregion
//#region node_modules/micromark-util-combine-extensions/index.js
var io = {}.hasOwnProperty;
function ao(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) oo(t, e[n]);
	return t;
}
function oo(e, t) {
	let n;
	for (n in t) {
		let r = (io.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			io.call(r, a) || (r[a] = []);
			let e = i[a];
			so(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function so(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	no(e, 0, 0, r);
}
//#endregion
//#region node_modules/micromark-util-decode-numeric-character-reference/index.js
function co(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region node_modules/micromark-util-normalize-identifier/index.js
function lo(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region node_modules/micromark-util-character/index.js
var uo = bo(/[A-Za-z]/), fo = bo(/[\dA-Za-z]/), po = bo(/[#-'*+\--9=?A-Z^-~]/);
function mo(e) {
	return e !== null && (e < 32 || e === 127);
}
var ho = bo(/\d/), go = bo(/[\dA-Fa-f]/), _o = bo(/[!-/:-@[-`{-~]/);
function X(e) {
	return e !== null && e < -2;
}
function Z(e) {
	return e !== null && (e < 0 || e === 32);
}
function Q(e) {
	return e === -2 || e === -1 || e === 32;
}
var vo = bo(/\p{P}|\p{S}/u), yo = bo(/\s/);
function bo(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region node_modules/micromark-util-sanitize-uri/index.js
function xo(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && fo(e.charCodeAt(n + 1)) && fo(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region node_modules/micromark-factory-space/index.js
function $(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return Q(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return Q(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/content.js
var So = { tokenize: Co };
function Co(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), $(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return X(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/document.js
var wo = { tokenize: Eo }, To = { tokenize: Do };
function Eo(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return no(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !(!i.currentConstruct || i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(To, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(To, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) {
			i && v(), _(0), e.consume(n);
			return;
		}
		return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) {
			g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
			return;
		}
		return X(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			no(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function Do(e, t, n) {
	return $(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region node_modules/micromark-util-classify-character/index.js
function Oo(e) {
	if (e === null || Z(e) || yo(e)) return 1;
	if (vo(e)) return 2;
}
//#endregion
//#region node_modules/micromark-util-resolve-all/index.js
function ko(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/attention.js
var Ao = {
	name: "attention",
	resolveAll: jo,
	tokenize: Mo
};
function jo(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			No(d, -c), No(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = ro(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = ro(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = ro(l, ko(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = ro(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = ro(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, no(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function Mo(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Oo(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = Oo(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function No(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/autolink.js
var Po = {
	name: "autolink",
	tokenize: Fo
};
function Fo(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return uo(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || fo(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || fo(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || mo(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : po(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return fo(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || fo(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/blank-line.js
var Io = {
	partial: !0,
	tokenize: Lo
};
function Lo(e, t, n) {
	return r;
	function r(t) {
		return Q(t) ? $(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || X(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/block-quote.js
var Ro = {
	continuation: { tokenize: Bo },
	exit: Vo,
	name: "blockQuote",
	tokenize: zo
};
function zo(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return Q(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function Bo(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Q(t) ? $(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(Ro, t, n)(r);
	}
}
function Vo(e) {
	e.exit("blockQuote");
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-escape.js
var Ho = {
	name: "characterEscape",
	tokenize: Uo
};
function Uo(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return _o(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-reference.js
var Wo = {
	name: "characterReference",
	tokenize: Go
};
function Go(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = fo, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = go, u) : (e.enter("characterReferenceValue"), a = 7, o = ho, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === fo && !to(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-fenced.js
var Ko = {
	partial: !0,
	tokenize: Yo
}, qo = {
	concrete: !0,
	name: "codeFenced",
	tokenize: Jo
};
function Jo(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), Q(t) ? $(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || X(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(Ko, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || X(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : Q(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), $(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || X(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || X(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && Q(t) ? $(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || X(t) ? e.check(Ko, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || X(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), Q(t) ? $(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), Q(t) ? $(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || X(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function Yo(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-indented.js
var Xo = {
	name: "codeIndented",
	tokenize: Qo
}, Zo = {
	partial: !0,
	tokenize: $o
};
function Qo(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), $(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : X(t) ? e.attempt(Zo, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || X(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function $o(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : X(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : $(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : X(e) ? i(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-text.js
var es = {
	name: "codeText",
	previous: ns,
	resolve: ts,
	tokenize: rs
};
function ts(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function ns(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function rs(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : X(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || X(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var is = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && as(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), as(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), as(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) {
			if (e < this.left.length) {
				let t = this.left.splice(e, Infinity);
				as(this.right, t.reverse());
			} else {
				let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
				as(this.left, t.reverse());
			}
		}
	}
};
function as(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region node_modules/micromark-util-subtokenize/index.js
function os(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new is(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, ss(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (o[1].type !== "linePrefix" && o[1].type !== "listItemIndent") break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return no(e, 0, Infinity, u.slice(0)), !l;
}
function ss(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/content.js
var cs = {
	resolve: us,
	tokenize: ds
}, ls = {
	partial: !0,
	tokenize: fs
};
function us(e) {
	return os(e), e;
}
function ds(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : X(t) ? e.check(ls, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function fs(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), $(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || X(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region node_modules/micromark-factory-destination/index.js
function ps(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || mo(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || X(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || Z(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || mo(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-label/index.js
function ms(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || 
		/* c8 ignore next 3 */
		l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : X(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || X(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !Q(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-title/index.js
function hs(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : X(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), $(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || X(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-whitespace/index.js
function gs(e, t) {
	let n;
	return r;
	function r(i) {
		return X(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Q(i) ? $(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/definition.js
var _s = {
	name: "definition",
	tokenize: ys
}, vs = {
	partial: !0,
	tokenize: bs
};
function ys(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return ms.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = lo(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return Z(t) ? gs(e, l)(t) : l(t);
	}
	function l(t) {
		return ps(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(vs, d, d)(t);
	}
	function d(t) {
		return Q(t) ? $(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || X(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function bs(e, t, n) {
	return r;
	function r(t) {
		return Z(t) ? gs(e, i)(t) : n(t);
	}
	function i(t) {
		return hs(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return Q(t) ? $(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || X(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var xs = {
	name: "hardBreakEscape",
	tokenize: Ss
};
function Ss(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return X(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/heading-atx.js
var Cs = {
	name: "headingAtx",
	resolve: ws,
	tokenize: Ts
};
function ws(e, t) {
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
	}, no(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function Ts(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || Z(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || X(n) ? (e.exit("atxHeading"), t(n)) : Q(n) ? $(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || Z(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region node_modules/micromark-util-html-tag-name/index.js
var Es = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), Ds = [
	"pre",
	"script",
	"style",
	"textarea"
], Os = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: js,
	tokenize: Ms
}, ks = {
	partial: !0,
	tokenize: Ps
}, As = {
	partial: !0,
	tokenize: Ns
};
function js(e) {
	let t = e.length;
	for (; t-- && (e[t][0] !== "enter" || e[t][1].type !== "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Ms(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : F) : uo(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : uo(a) ? (e.consume(a), i = 4, r.interrupt ? t : F) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : F) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : O : m) : n(i);
	}
	function h(t) {
		return uo(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || Z(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && Ds.includes(l) ? (i = 1, r.interrupt ? t(s) : O(s)) : Es.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || fo(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
	}
	function v(t) {
		return Q(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || uo(t) ? (e.consume(t), b) : Q(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || fo(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : Q(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : Q(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || X(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || Z(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || Q(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), D) : n(t);
	}
	function D(t) {
		return t === null || X(t) ? O(t) : Q(t) ? (e.consume(t), D) : n(t);
	}
	function O(t) {
		return t === 45 && i === 2 ? (e.consume(t), M) : t === 60 && i === 1 ? (e.consume(t), N) : t === 62 && i === 4 ? (e.consume(t), te) : t === 63 && i === 3 ? (e.consume(t), F) : t === 93 && i === 5 ? (e.consume(t), ee) : X(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(ks, ne, k)(t)) : t === null || X(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), O);
	}
	function k(t) {
		return e.check(As, A, ne)(t);
	}
	function A(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), j;
	}
	function j(t) {
		return t === null || X(t) ? k(t) : (e.enter("htmlFlowData"), O(t));
	}
	function M(t) {
		return t === 45 ? (e.consume(t), F) : O(t);
	}
	function N(t) {
		return t === 47 ? (e.consume(t), o = "", P) : O(t);
	}
	function P(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return Ds.includes(n) ? (e.consume(t), te) : O(t);
		}
		return uo(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), P) : O(t);
	}
	function ee(t) {
		return t === 93 ? (e.consume(t), F) : O(t);
	}
	function F(t) {
		return t === 62 ? (e.consume(t), te) : t === 45 && i === 2 ? (e.consume(t), F) : O(t);
	}
	function te(t) {
		return t === null || X(t) ? (e.exit("htmlFlowData"), ne(t)) : (e.consume(t), te);
	}
	function ne(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function Ns(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return X(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function Ps(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(Io, t, n);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/html-text.js
var Fs = {
	name: "htmlText",
	tokenize: Is
};
function Is(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : uo(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : uo(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : X(t) ? (o = d, N(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? M(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : X(t) ? (o = h, N(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? M(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? M(t) : X(t) ? (o = v, N(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : X(t) ? (o = y, N(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? M(e) : y(e);
	}
	function x(t) {
		return uo(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || fo(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return X(t) ? (o = C, N(t)) : Q(t) ? (e.consume(t), C) : M(t);
	}
	function w(t) {
		return t === 45 || fo(t) ? (e.consume(t), w) : t === 47 || t === 62 || Z(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), M) : t === 58 || t === 95 || uo(t) ? (e.consume(t), E) : X(t) ? (o = T, N(t)) : Q(t) ? (e.consume(t), T) : M(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || fo(t) ? (e.consume(t), E) : D(t);
	}
	function D(t) {
		return t === 61 ? (e.consume(t), O) : X(t) ? (o = D, N(t)) : Q(t) ? (e.consume(t), D) : T(t);
	}
	function O(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, k) : X(t) ? (o = O, N(t)) : Q(t) ? (e.consume(t), O) : (e.consume(t), A);
	}
	function k(t) {
		return t === i ? (e.consume(t), i = void 0, j) : t === null ? n(t) : X(t) ? (o = k, N(t)) : (e.consume(t), k);
	}
	function A(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || Z(t) ? T(t) : (e.consume(t), A);
	}
	function j(e) {
		return e === 47 || e === 62 || Z(e) ? T(e) : n(e);
	}
	function M(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function N(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), P;
	}
	function P(t) {
		return Q(t) ? $(e, ee, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : ee(t);
	}
	function ee(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-end.js
var Ls = {
	name: "labelEnd",
	resolveAll: Vs,
	resolveTo: Hs,
	tokenize: Us
}, Rs = { tokenize: Ws }, zs = { tokenize: Gs }, Bs = { tokenize: Ks };
function Vs(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && no(e, 0, e.length, n), e;
}
function Hs(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = ro(s, e.slice(a + 1, a + r + 3)), s = ro(s, [[
		"enter",
		u,
		t
	]]), s = ro(s, ko(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = ro(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = ro(s, e.slice(o + 1)), s = ro(s, [[
		"exit",
		c,
		t
	]]), no(e, a, e.length, s), e;
}
function Us(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(lo(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(Rs, u, o ? u : d)(t) : t === 91 ? e.attempt(zs, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(Bs, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function Ws(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return Z(t) ? gs(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : ps(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return Z(t) ? gs(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? hs(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return Z(t) ? gs(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function Gs(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return ms.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(lo(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function Ks(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-image.js
var qs = {
	name: "labelStartImage",
	resolveAll: Ls.resolveAll,
	tokenize: Js
};
function Js(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-link.js
var Ys = {
	name: "labelStartLink",
	resolveAll: Ls.resolveAll,
	tokenize: Xs
};
function Xs(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/line-ending.js
var Zs = {
	name: "lineEnding",
	tokenize: Qs
};
function Qs(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), $(e, t, "linePrefix");
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/thematic-break.js
var $s = {
	name: "thematicBreak",
	tokenize: ec
};
function ec(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || X(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), Q(t) ? $(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/list.js
var tc = {
	continuation: { tokenize: ac },
	exit: sc,
	name: "list",
	tokenize: ic
}, nc = {
	partial: !0,
	tokenize: cc
}, rc = {
	partial: !0,
	tokenize: oc
};
function ic(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : ho(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check($s, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return ho(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(Io, r.interrupt ? n : u, e.attempt(nc, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return Q(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function ac(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(Io, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, $(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !Q(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(rc, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, $(e, e.attempt(tc, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function oc(e, t, n) {
	let r = this;
	return $(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function sc(e) {
	e.exit(this.containerState.type);
}
function cc(e, t, n) {
	let r = this;
	return $(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !Q(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/setext-underline.js
var lc = {
	name: "setextUnderline",
	resolveTo: uc,
	tokenize: dc
};
function uc(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function dc(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), Q(t) ? $(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || X(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/flow.js
var fc = { tokenize: pc };
function pc(e) {
	let t = this, n = e.attempt(Io, r, e.attempt(this.parser.constructs.flowInitial, i, $(e, e.attempt(this.parser.constructs.flow, i, e.attempt(cs, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/text.js
var mc = { resolveAll: vc() }, hc = _c("string"), gc = _c("text");
function _c(e) {
	return {
		resolveAll: vc(e === "text" ? yc : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function vc(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function yc(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region node_modules/micromark/lib/constructs.js
var bc = /* @__PURE__ */ C({
	attentionMarkers: () => Oc,
	contentInitial: () => Sc,
	disable: () => kc,
	document: () => xc,
	flow: () => wc,
	flowInitial: () => Cc,
	insideSpan: () => Dc,
	string: () => Tc,
	text: () => Ec
}), xc = {
	42: tc,
	43: tc,
	45: tc,
	48: tc,
	49: tc,
	50: tc,
	51: tc,
	52: tc,
	53: tc,
	54: tc,
	55: tc,
	56: tc,
	57: tc,
	62: Ro
}, Sc = { 91: _s }, Cc = {
	[-2]: Xo,
	[-1]: Xo,
	32: Xo
}, wc = {
	35: Cs,
	42: $s,
	45: [lc, $s],
	60: Os,
	61: lc,
	95: $s,
	96: qo,
	126: qo
}, Tc = {
	38: Wo,
	92: Ho
}, Ec = {
	[-5]: Zs,
	[-4]: Zs,
	[-3]: Zs,
	33: qs,
	38: Wo,
	42: Ao,
	60: [Po, Fs],
	91: Ys,
	92: [xs, Ho],
	93: Ls,
	95: Ao,
	96: es
}, Dc = { null: [Ao, mc] }, Oc = { null: [42, 95] }, kc = { null: [] };
//#endregion
//#region node_modules/micromark/lib/create-tokenizer.js
function Ac(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = ro(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = ko(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return Mc(p(e), t);
	}
	function p(e) {
		return jc(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, E();
	}
	function g() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) _(t.charCodeAt(r._bufferIndex));
			else _(t);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		X(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		w(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = T(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function w(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && no(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function T() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, E();
		}
	}
	function E() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function jc(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function Mc(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region node_modules/micromark/lib/parse.js
function Nc(e) {
	let t = {
		constructs: ao([bc, ...(e || {}).extensions || []]),
		content: n(So),
		defined: [],
		document: n(wo),
		flow: n(fc),
		lazy: {},
		string: n(hc),
		text: n(gc)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return Ac(t, e, n);
		}
	}
}
//#endregion
//#region node_modules/micromark/lib/postprocess.js
function Pc(e) {
	for (; !os(e););
	return e;
}
//#endregion
//#region node_modules/micromark/lib/preprocess.js
var Fc = /[\0\t\n\r]/g;
function Ic() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (Fc.lastIndex = u, c = Fc.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region node_modules/micromark-util-decode-string/index.js
var Lc = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Rc(e) {
	return e.replace(Lc, zc);
}
function zc(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return co(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return to(n) || e;
}
//#endregion
//#region node_modules/mdast-util-from-markdown/lib/index.js
var Bc = {}.hasOwnProperty;
function Vc(e, t, n) {
	return t && typeof t == "object" && (n = t, t = void 0), Hc(n)(Pc(Nc(n).document().write(Ic()(e, t, !0))));
}
function Hc(e) {
	let t = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: a(ge),
			autolinkProtocol: T,
			autolinkEmail: T,
			atxHeading: a(pe),
			blockQuote: a(le),
			characterEscape: T,
			characterReference: T,
			codeFenced: a(ue),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(ue, o),
			codeText: a(de, o),
			codeTextData: T,
			data: T,
			codeFlowValue: T,
			definition: a(fe),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(L),
			hardBreakEscape: a(R),
			hardBreakTrailing: a(R),
			htmlFlow: a(me, o),
			htmlFlowData: T,
			htmlText: a(me, o),
			htmlTextData: T,
			image: a(he),
			label: o,
			link: a(ge),
			listItem: a(ve),
			listItemValue: f,
			listOrdered: a(_e, d),
			listUnordered: a(_e),
			paragraph: a(ye),
			reference: re,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(pe),
			strong: a(be),
			thematicBreak: a(Se)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: ce,
			autolinkProtocol: se,
			blockQuote: c(),
			characterEscapeValue: E,
			characterReferenceMarkerHexadecimal: ie,
			characterReferenceMarkerNumeric: ie,
			characterReferenceValue: ae,
			characterReference: oe,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: E,
			codeIndented: c(_),
			codeText: c(j),
			codeTextData: E,
			data: E,
			definition: c(),
			definitionDestinationString: b,
			definitionLabelString: v,
			definitionTitleString: y,
			emphasis: c(),
			hardBreakEscape: c(O),
			hardBreakTrailing: c(O),
			htmlFlow: c(k),
			htmlFlowData: E,
			htmlText: c(A),
			htmlTextData: E,
			image: c(N),
			label: ee,
			labelText: P,
			lineEnding: D,
			link: c(M),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: I,
			resourceDestinationString: F,
			resourceTitleString: te,
			resource: ne,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	Wc(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: []
		}, a = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: s,
			exit: l,
			buffer: o,
			resume: u,
			data: n
		}, c = [], d = -1;
		for (; ++d < e.length;) (e[d][1].type === "listOrdered" || e[d][1].type === "listUnordered") && (e[d][0] === "enter" ? c.push(d) : d = i(e, c.pop(), d));
		for (d = -1; ++d < e.length;) {
			let n = t[e[d][0]];
			Bc.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || Kc).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: Uc(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: Uc(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, d = -1; ++d < t.transforms.length;) r = t.transforms[d](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = t - 1, i = -1, a = !1, o, s, c, l;
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, l = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !l && !i && !c && (c = r), l = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: l = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let i = r;
					for (s = void 0; i--;) {
						let t = e[i];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							s && (e[s][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", s = i;
						} else if (t[1].type !== "linePrefix" && t[1].type !== "blockQuotePrefix" && t[1].type !== "blockQuotePrefixWhitespace" && t[1].type !== "blockQuoteMarker" && t[1].type !== "listItemIndent") break;
					}
					c && (!s || c < s) && (o._spread = !0), o.end = Object.assign({}, s ? e[s][1].start : t[1].end), e.splice(s || r, 0, [
						"exit",
						o,
						t[2]
					]), r++, n++;
				}
				if (t[1].type === "listItemPrefix") {
					let i = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = i, e.splice(r, 0, [
						"enter",
						i,
						t[2]
					]), r++, n++, c = void 0, l = !0;
				}
			}
		}
		return e[t][1]._spread = a, n;
	}
	function a(e, t) {
		return n;
		function n(n) {
			s.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function s(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: Uc(t.start),
			end: void 0
		};
	}
	function c(e) {
		return t;
		function t(t) {
			e && e.call(this, t), l.call(this, t);
		}
	}
	function l(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || Kc).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + ma({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = Uc(e.end);
	}
	function u() {
		return Xa(this.stack.pop());
	}
	function d() {
		this.data.expectingFirstListItemValue = !0;
	}
	function f(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function p() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function h() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function g() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function _() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function v(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = lo(this.sliceSerialize(e)).toLowerCase();
	}
	function y() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function b() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function x(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth ||= this.sliceSerialize(e).length;
	}
	function S() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function C(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function w() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function T(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		(!n || n.type !== "text") && (n = xe(), n.position = {
			start: Uc(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = Uc(e.end);
	}
	function D(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = Uc(e.end), this.data.atHardBreak = void 0;
			return;
		}
		!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (T.call(this, e), E.call(this, e));
	}
	function O() {
		this.data.atHardBreak = !0;
	}
	function k() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function A() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function j() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function M() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function N() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function P(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = Rc(t), n.identifier = lo(t).toLowerCase();
	}
	function ee() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function F() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function te() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function ne() {
		this.data.inReference = void 0;
	}
	function re() {
		this.data.referenceType = "collapsed";
	}
	function I(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = lo(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function ie(e) {
		this.data.characterReferenceType = e.type;
	}
	function ae(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = co(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = to(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function oe(e) {
		let t = this.stack.pop();
		t.position.end = Uc(e.end);
	}
	function se(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function ce(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function le() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function ue() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function de() {
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
	function L() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function pe() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function R() {
		return { type: "break" };
	}
	function me() {
		return {
			type: "html",
			value: ""
		};
	}
	function he() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function ge() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function _e(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function ve(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function ye() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function be() {
		return {
			type: "strong",
			children: []
		};
	}
	function xe() {
		return {
			type: "text",
			value: ""
		};
	}
	function Se() {
		return { type: "thematicBreak" };
	}
}
function Uc(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function Wc(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? Wc(e, r) : Gc(e, r);
	}
}
function Gc(e, t) {
	let n;
	for (n in t) if (Bc.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function Kc(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + ma({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + ma({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + ma({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region node_modules/remark-parse/lib/index.js
function qc(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return Vc(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function Jc(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/break.js
function Yc(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/code.js
function Xc(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
	i.length > 0 && (r.className = ["language-" + i[0]]);
	let a = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [a]
	}, e.patch(t, a), a;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/delete.js
function Zc(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function Qc(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function $c(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = xo(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
	let c = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, c);
	let l = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [c]
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/heading.js
function el(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/html.js
function tl(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/revert.js
function nl(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function rl(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return nl(e, t);
	let i = {
		src: xo(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image.js
function il(e, t) {
	let n = { src: xo(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function al(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function ol(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return nl(e, t);
	let i = { href: xo(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link.js
function sl(e, t) {
	let n = { href: xo(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function cl(e, t, n) {
	let r = e.all(t), i = n ? ll(n) : ul(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let s = -1;
	for (; ++s < r.length;) {
		let e = r[s];
		(i || s !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let c = r[r.length - 1];
	c && (i || c.type !== "element" || c.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let l = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, l), e.applyData(t, l);
}
function ll(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = ul(n[r]);
	}
	return t;
}
function ul(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list.js
function dl(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function fl(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/root.js
function pl(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/strong.js
function ml(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table.js
function hl(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = da(t.children[1]), o = ua(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function gl(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, s = -1, c = [];
	for (; ++s < o;) {
		let n = t.children[s], r = {}, o = a ? a[s] : void 0;
		o && (r.align = o);
		let l = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (l.children = e.all(n), e.patch(n, l), l = e.applyData(n, l)), c.push(l);
	}
	let l = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(c, !0)
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function _l(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/trim-lines/index.js
var vl = 9, yl = 32;
function bl(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(xl(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(xl(t.slice(i), i > 0, !1)), a.join("");
}
function xl(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === vl || t === yl;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === vl || t === yl;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/text.js
function Sl(e, t) {
	let n = {
		type: "text",
		value: bl(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function Cl(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/index.js
var wl = {
	blockquote: Jc,
	break: Yc,
	code: Xc,
	delete: Zc,
	emphasis: Qc,
	footnoteReference: $c,
	heading: el,
	html: tl,
	imageReference: rl,
	image: il,
	inlineCode: al,
	linkReference: ol,
	link: sl,
	listItem: cl,
	list: dl,
	paragraph: fl,
	root: pl,
	strong: ml,
	table: hl,
	tableCell: _l,
	tableRow: gl,
	text: Sl,
	thematicBreak: Cl,
	toml: Tl,
	yaml: Tl,
	definition: Tl,
	footnoteDefinition: Tl
};
function Tl() {}
//#endregion
//#region node_modules/@ungap/structured-clone/esm/deserialize.js
var El = typeof self == "object" ? self : globalThis, Dl = (e, t) => {
	switch (e) {
		case "Function":
		case "SharedWorker":
		case "Worker":
		case "eval":
		case "setInterval":
		case "setTimeout": throw TypeError("unable to deserialize " + e);
	}
	return new El[e](t);
}, Ol = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(Dl(e, t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(Dl(a, o), i);
	};
	return r;
}, kl = (e) => Ol(/* @__PURE__ */ new Map(), e)(0), Al = "", { toString: jl } = {}, { keys: Ml } = Object, Nl = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = jl.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, Al];
		case "Object": return [2, Al];
		case "Date": return [3, Al];
		case "RegExp": return [4, Al];
		case "Map": return [5, Al];
		case "Set": return [6, Al];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, Pl = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), Fl = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = Nl(r);
		switch (o) {
			case 0: {
				let t = r;
				switch (s) {
					case "bigint":
						o = 8, t = r.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + s);
						t = null;
						break;
					case "undefined": return i([-1], r);
				}
				return i([o, t], r);
			}
			case 1: {
				if (s) {
					let e = r;
					return s === "DataView" ? e = new Uint8Array(r.buffer) : s === "ArrayBuffer" && (e = new Uint8Array(r)), i([s, [...e]], r);
				}
				let e = [], t = i([o, e], r);
				for (let t of r) e.push(a(t));
				return t;
			}
			case 2: {
				if (s) switch (s) {
					case "BigInt": return i([s, r.toString()], r);
					case "Boolean":
					case "Number":
					case "String": return i([s, r.valueOf()], r);
				}
				if (t && "toJSON" in r) return a(r.toJSON());
				let n = [], c = i([o, n], r);
				for (let t of Ml(r)) (e || !Pl(Nl(r[t]))) && n.push([a(t), a(r[t])]);
				return c;
			}
			case 3: return i([o, r.toISOString()], r);
			case 4: {
				let { source: e, flags: t } = r;
				return i([o, {
					source: e,
					flags: t
				}], r);
			}
			case 5: {
				let t = [], n = i([o, t], r);
				for (let [n, i] of r) (e || !(Pl(Nl(n)) || Pl(Nl(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !Pl(Nl(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: c } = r;
		return i([o, {
			name: s,
			message: c
		}], r);
	};
	return a;
}, Il = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return Fl(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Ll = typeof structuredClone == "function" ? 
/* c8 ignore start */
(e, t) => t && ("json" in t || "lossy" in t) ? kl(Il(e, t)) : structuredClone(e) : (e, t) => kl(Il(e, t));
//#endregion
//#region node_modules/mdast-util-to-hast/lib/footer.js
function Rl(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function zl(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Bl(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Rl, r = e.options.footnoteBackLabel || zl, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = xo(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
		for (; f !== void 0 && ++u <= f;) {
			d.length > 0 && d.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(c, u);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), d.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + l + (u > 1 ? "-" + u : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(c, u),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let p = a[a.length - 1];
		if (p && p.type === "element" && p.tagName === "p") {
			let e = p.children[p.children.length - 1];
			e && e.type === "text" ? e.value += " " : p.children.push({
				type: "text",
				value: " "
			}), p.children.push(...d);
		} else a.push(...d);
		let m = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + l },
			children: e.wrap(a, !0)
		};
		e.patch(i, m), s.push(m);
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...Ll(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(s, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
//#endregion
//#region node_modules/unist-util-is/lib/index.js
var Vl = (function(e) {
	if (e == null) return Kl;
	if (typeof e == "function") return Gl(e);
	if (typeof e == "object") return Array.isArray(e) ? Hl(e) : Ul(e);
	if (typeof e == "string") return Wl(e);
	throw Error("Expected function, string, or object as test");
});
function Hl(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = Vl(e[n]);
	return Gl(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function Ul(e) {
	let t = e;
	return Gl(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function Wl(e) {
	return Gl(t);
	function t(t) {
		return t && t.type === e;
	}
}
function Gl(e) {
	return t;
	function t(t, n, r) {
		return !!(ql(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function Kl() {
	return !0;
}
function ql(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/color.js
function Jl(e) {
	return e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/index.js
var Yl = [];
function Xl(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = Vl(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + Jl(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = Yl, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = Zl(n(e, c)), l[0] === !1)) return l;
			if ("children" in e && e.children) {
				let t = e;
				if (t.children && l[0] !== "skip") for (d = (r ? t.children.length : -1) + o, f = c.concat(t); d > -1 && d < t.children.length;) {
					let e = t.children[d];
					if (u = s(e, d, f)(), u[0] === !1) return u;
					d = typeof u[1] == "number" ? u[1] : d + o;
				}
			}
			return l;
		}
	}
}
function Zl(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? Yl : [e];
}
//#endregion
//#region node_modules/unist-util-visit/lib/index.js
function Ql(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), Xl(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/state.js
var $l = {}.hasOwnProperty, eu = {};
function tu(e, t) {
	let n = t || eu, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: ru,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...wl,
			...n.handlers
		},
		one: o,
		options: n,
		patch: nu,
		wrap: au
	};
	return Ql(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if ($l.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = Ll(n);
				return r.children = a.all(e), r;
			}
			return Ll(e);
		}
		return (a.options.unknownHandler || iu)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = ou(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = ou(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function nu(e, t) {
	e.position && (t.position = pa(e));
}
function ru(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, Ll(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function iu(e, t) {
	let n = t.data || {}, r = "value" in t && !($l.call(n, "hProperties") || $l.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function au(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function ou(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/index.js
function su(e, t) {
	let n = tu(e, t), r = n.one(e, void 0), i = Bl(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
//#endregion
//#region node_modules/remark-rehype/lib/index.js
function cu(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = su(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return su(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region node_modules/bail/index.js
function lu(e) {
	if (e) throw e;
}
//#endregion
//#region node_modules/extend/index.js
var uu = /* @__PURE__ */ S(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
}));
//#endregion
//#region node_modules/is-plain-obj/index.js
function du(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region node_modules/trough/lib/index.js
function fu() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let s = e[++n], c = -1;
			if (a) {
				r(a);
				return;
			}
			for (; ++c < t.length;) (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
			t = o, s ? pu(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function pu(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
//#endregion
//#region node_modules/vfile/lib/minpath.browser.js
var mu = {
	basename: hu,
	dirname: gu,
	extname: _u,
	join: vu,
	sep: "/"
};
function hu(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	xu(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, s = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function gu(e) {
	if (xu(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function _u(e) {
	xu(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break;
			}
			continue;
		}
		n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function vu(...e) {
	let t = -1, n;
	for (; ++t < e.length;) xu(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : yu(n);
}
function yu(e) {
	xu(e);
	let t = e.codePointAt(0) === 47, n = bu(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function bu(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, s, c;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else if (s === 47) break;
		else s = 47;
		if (s === 47) {
			if (i !== o - 1 && a !== 1) {
				if (i !== o - 1 && a === 2) {
					if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
						if (n.length > 2) {
							if (c = n.lastIndexOf("/"), c !== n.length - 1) {
								c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
								continue;
							}
						} else if (n.length > 0) {
							n = "", r = 0, i = o, a = 0;
							continue;
						}
					}
					t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
				} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			}
			i = o, a = 0;
		} else s === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function xu(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region node_modules/vfile/lib/minproc.browser.js
var Su = { cwd: Cu };
function Cu() {
	return "/";
}
//#endregion
//#region node_modules/vfile/lib/minurl.shared.js
function wu(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region node_modules/vfile/lib/minurl.browser.js
function Tu(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!wu(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return Eu(e);
}
function Eu(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
//#endregion
//#region node_modules/vfile/lib/index.js
var Du = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], Ou = class {
	constructor(e) {
		let t;
		t = e ? wu(e) ? { path: e } : typeof e == "string" || Mu(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : Su.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < Du.length;) {
			let e = Du[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) Du.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? mu.basename(this.path) : void 0;
	}
	set basename(e) {
		Au(e, "basename"), ku(e, "basename"), this.path = mu.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? mu.dirname(this.path) : void 0;
	}
	set dirname(e) {
		ju(this.basename, "dirname"), this.path = mu.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? mu.extname(this.path) : void 0;
	}
	set extname(e) {
		if (ku(e, "extname"), ju(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = mu.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		wu(e) && (e = Tu(e)), Au(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? mu.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		Au(e, "stem"), ku(e, "stem"), this.path = mu.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new va(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function ku(e, t) {
	if (e && e.includes(mu.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + mu.sep + "`");
}
function Au(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function ju(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function Mu(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/unified/lib/callable-instance.js
var Nu = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), Pu = /* @__PURE__ */ T(uu(), 1), Fu = {}.hasOwnProperty, Iu = new class e extends Nu {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = fu();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, Pu.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (zu("data", this.frozen), this.namespace[e] = t, this) : Fu.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (zu("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = Hu(e), n = this.parser || this.Parser;
		return Lu("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), Lu("process", this.parser || this.Parser), Ru("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = Hu(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				Wu(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), Lu("processSync", this.parser || this.Parser), Ru("processSync", this.compiler || this.Compiler), this.process(e, r), Vu("processSync", "process", t), n;
		function r(e, r) {
			t = !0, lu(e), n = r;
		}
	}
	run(e, t, n) {
		Bu(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = Hu(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), Vu("runSync", "run", n), r;
		function i(e, t) {
			lu(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = Hu(t), r = this.compiler || this.Compiler;
		return Ru("stringify", r), Bu(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (zu("use", this.frozen), e != null) {
			if (typeof e == "function") s(e, t);
			else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		return this;
		function i(e) {
			if (typeof e == "function") s(e, []);
			else if (typeof e == "object") {
				if (Array.isArray(e)) {
					let [t, ...n] = e;
					s(t, n);
				} else a(e);
			} else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, Pu.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) {
				if (Array.isArray(e)) for (; ++t < e.length;) {
					let n = e[t];
					i(n);
				}
				else throw TypeError("Expected a list of plugins, not `" + e + "`");
			}
		}
		function s(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				du(o) && du(r) && (r = (0, Pu.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function Lu(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function Ru(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function zu(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function Bu(e) {
	if (!du(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function Vu(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function Hu(e) {
	return Uu(e) ? e : new Ou(e);
}
function Uu(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Wu(e) {
	return typeof e == "string" || Gu(e);
}
function Gu(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/react-markdown/lib/index.js
var Ku = [], qu = { allowDangerousHtml: !0 }, Ju = /^(https?|ircs?|mailto|xmpp)$/i, Yu = [
	{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
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
	{
		from: "className",
		id: "remove-classname"
	},
	{
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	},
	{
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	},
	{
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	},
	{
		from: "linkTarget",
		id: "remove-linktarget"
	},
	{
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	},
	{
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	},
	{
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	},
	{
		from: "source",
		id: "change-source-to-children",
		to: "children"
	},
	{
		from: "sourcePos",
		id: "#remove-sourcepos"
	},
	{
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	},
	{
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}
];
function Xu(e) {
	let t = Zu(e), n = Qu(e);
	return $u(t.runSync(t.parse(n), n), e);
}
function Zu(e) {
	let t = e.rehypePlugins || Ku, n = e.remarkPlugins || Ku, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...qu
	} : qu;
	return Iu().use(qc).use(n).use(cu, r).use(t);
}
function Qu(e) {
	let t = e.children || "", n = new Ou();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function $u(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || ed;
	for (let e of Yu) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return Ql(e, l), Ea(e, {
		Fragment: d,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: f,
		jsxs: p,
		passKeys: !0,
		passNode: !0
	});
	function l(e, t, i) {
		if (e.type === "raw" && i && typeof t == "number") return o ? i.children.splice(t, 1) : i.children[t] = {
			type: "text",
			value: e.value
		}, t;
		if (e.type === "element") {
			let t;
			for (t in Ja) if (Object.hasOwn(Ja, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = Ja[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function ed(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || Ju.test(e.slice(0, t)) ? e : "";
}
//#endregion
//#region node_modules/ccount/index.js
function td(e, t) {
	let n = String(e);
	if (typeof t != "string") throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
//#endregion
//#region node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js
function nd(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
//#endregion
//#region node_modules/mdast-util-find-and-replace/lib/index.js
function rd(e, t, n) {
	let r = Vl((n || {}).ignore || []), i = id(t), a = -1;
	for (; ++a < i.length;) Xl(e, "text", o);
	function o(e, t) {
		let n = -1, i;
		for (; ++n < t.length;) {
			let e = t[n], a = i ? i.children : void 0;
			if (r(e, a ? a.indexOf(e) : void 0, i)) return;
			i = e;
		}
		if (i) return s(e, t);
	}
	function s(e, t) {
		let n = t[t.length - 1], r = i[a][0], o = i[a][1], s = 0, c = n.children.indexOf(e), l = !1, u = [];
		r.lastIndex = 0;
		let d = r.exec(e.value);
		for (; d;) {
			let n = d.index, i = {
				index: d.index,
				input: d.input,
				stack: [...t, e]
			}, a = o(...d, i);
			if (typeof a == "string" && (a = a.length > 0 ? {
				type: "text",
				value: a
			} : void 0), a === !1 ? r.lastIndex = n + 1 : (s !== n && u.push({
				type: "text",
				value: e.value.slice(s, n)
			}), Array.isArray(a) ? u.push(...a) : a && u.push(a), s = n + d[0].length, l = !0), !r.global) break;
			d = r.exec(e.value);
		}
		return l ? (s < e.value.length && u.push({
			type: "text",
			value: e.value.slice(s)
		}), n.children.splice(c, 1, ...u)) : u = [e], c + u.length;
	}
}
function id(e) {
	let t = [];
	if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
	let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
	for (; ++r < n.length;) {
		let e = n[r];
		t.push([ad(e[0]), od(e[1])]);
	}
	return t;
}
function ad(e) {
	return typeof e == "string" ? new RegExp(nd(e), "g") : e;
}
function od(e) {
	return typeof e == "function" ? e : function() {
		return e;
	};
}
//#endregion
//#region node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var sd = "phrasing", cd = [
	"autolink",
	"link",
	"image",
	"label"
];
function ld() {
	return {
		transforms: [_d],
		enter: {
			literalAutolink: dd,
			literalAutolinkEmail: fd,
			literalAutolinkHttp: fd,
			literalAutolinkWww: fd
		},
		exit: {
			literalAutolink: gd,
			literalAutolinkEmail: hd,
			literalAutolinkHttp: pd,
			literalAutolinkWww: md
		}
	};
}
function ud() {
	return { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: sd,
			notInConstruct: cd
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: sd,
			notInConstruct: cd
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: sd,
			notInConstruct: cd
		}
	] };
}
function dd(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function fd(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function pd(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function md(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function hd(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function gd(e) {
	this.exit(e);
}
function _d(e) {
	rd(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, vd], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, yd]], { ignore: ["link", "linkReference"] });
}
function vd(e, t, n, r, i) {
	let a = "";
	if (!Sd(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !bd(n))) return !1;
	let o = xd(n + r);
	if (!o[0]) return !1;
	let s = {
		type: "link",
		title: null,
		url: a + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [s, {
		type: "text",
		value: o[1]
	}] : s;
}
function yd(e, t, n, r) {
	return !Sd(r, !0) || /[-\d_]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function bd(e) {
	let t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function xd(e) {
	let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	if (!t) return [e, void 0];
	e = e.slice(0, t.index);
	let n = t[0], r = n.indexOf(")"), i = td(e, "("), a = td(e, ")");
	for (; r !== -1 && i > a;) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
	return [e, n];
}
function Sd(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || yo(n) || vo(n)) && (!t || n !== 47);
}
//#endregion
//#region node_modules/mdast-util-gfm-footnote/lib/index.js
Md.peek = jd;
function Cd() {
	this.buffer();
}
function wd(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function Td() {
	this.buffer();
}
function Ed(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function Dd(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = lo(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function Od(e) {
	this.exit(e);
}
function kd(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = lo(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function Ad(e) {
	this.exit(e);
}
function jd() {
	return "[";
}
function Md(e, t, n, r) {
	let i = n.createTracker(r), a = i.move("[^"), o = n.enter("footnoteReference"), s = n.enter("reference");
	return a += i.move(n.safe(n.associationId(e), {
		after: "]",
		before: a
	})), s(), o(), a += i.move("]"), a;
}
function Nd() {
	return {
		enter: {
			gfmFootnoteCallString: Cd,
			gfmFootnoteCall: wd,
			gfmFootnoteDefinitionLabelString: Td,
			gfmFootnoteDefinition: Ed
		},
		exit: {
			gfmFootnoteCallString: Dd,
			gfmFootnoteCall: Od,
			gfmFootnoteDefinitionLabelString: kd,
			gfmFootnoteDefinition: Ad
		}
	};
}
function Pd(e) {
	let t = !1;
	return e && e.firstLineBlank && (t = !0), {
		handlers: {
			footnoteDefinition: n,
			footnoteReference: Md
		},
		unsafe: [{
			character: "[",
			inConstruct: [
				"label",
				"phrasing",
				"reference"
			]
		}]
	};
	function n(e, n, r, i) {
		let a = r.createTracker(i), o = a.move("[^"), s = r.enter("footnoteDefinition"), c = r.enter("label");
		return o += a.move(r.safe(r.associationId(e), {
			before: o,
			after: "]"
		})), c(), o += a.move("]:"), e.children && e.children.length > 0 && (a.shift(4), o += a.move((t ? "\n" : " ") + r.indentLines(r.containerFlow(e, a.current()), t ? Id : Fd))), s(), o;
	}
}
function Fd(e, t, n) {
	return t === 0 ? e : Id(e, t, n);
}
function Id(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region node_modules/mdast-util-gfm-strikethrough/lib/index.js
var Ld = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
Hd.peek = Ud;
function Rd() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: Bd },
		exit: { strikethrough: Vd }
	};
}
function zd() {
	return {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: Ld
		}],
		handlers: { delete: Hd }
	};
}
function Bd(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function Vd(e) {
	this.exit(e);
}
function Hd(e, t, n, r) {
	let i = n.createTracker(r), a = n.enter("strikethrough"), o = i.move("~~");
	return o += n.containerPhrasing(e, {
		...i.current(),
		before: o,
		after: "~"
	}), o += i.move("~~"), a(), o;
}
function Ud() {
	return "~";
}
//#endregion
//#region node_modules/markdown-table/index.js
function Wd(e) {
	return e.length;
}
function Gd(e, t) {
	let n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Wd, a = [], o = [], s = [], c = [], l = 0, u = -1;
	for (; ++u < e.length;) {
		let t = [], r = [], a = -1;
		for (e[u].length > l && (l = e[u].length); ++a < e[u].length;) {
			let o = Kd(e[u][a]);
			if (n.alignDelimiters !== !1) {
				let e = i(o);
				r[a] = e, (c[a] === void 0 || e > c[a]) && (c[a] = e);
			}
			t.push(o);
		}
		o[u] = t, s[u] = r;
	}
	let d = -1;
	if (typeof r == "object" && "length" in r) for (; ++d < l;) a[d] = qd(r[d]);
	else {
		let e = qd(r);
		for (; ++d < l;) a[d] = e;
	}
	d = -1;
	let f = [], p = [];
	for (; ++d < l;) {
		let e = a[d], t = "", r = "";
		e === 99 ? (t = ":", r = ":") : e === 108 ? t = ":" : e === 114 && (r = ":");
		let i = n.alignDelimiters === !1 ? 1 : Math.max(1, c[d] - t.length - r.length), o = t + "-".repeat(i) + r;
		n.alignDelimiters !== !1 && (i = t.length + i + r.length, i > c[d] && (c[d] = i), p[d] = i), f[d] = o;
	}
	o.splice(1, 0, f), s.splice(1, 0, p), u = -1;
	let m = [];
	for (; ++u < o.length;) {
		let e = o[u], t = s[u];
		d = -1;
		let r = [];
		for (; ++d < l;) {
			let i = e[d] || "", o = "", s = "";
			if (n.alignDelimiters !== !1) {
				let e = c[d] - (t[d] || 0), n = a[d];
				n === 114 ? o = " ".repeat(e) : n === 99 ? e % 2 ? (o = " ".repeat(e / 2 + .5), s = " ".repeat(e / 2 - .5)) : (o = " ".repeat(e / 2), s = o) : s = " ".repeat(e);
			}
			n.delimiterStart !== !1 && !d && r.push("|"), n.padding !== !1 && (n.alignDelimiters !== !1 || i !== "") && (n.delimiterStart !== !1 || d) && r.push(" "), n.alignDelimiters !== !1 && r.push(o), r.push(i), n.alignDelimiters !== !1 && r.push(s), n.padding !== !1 && r.push(" "), (n.delimiterEnd !== !1 || d !== l - 1) && r.push("|");
		}
		m.push(n.delimiterEnd === !1 ? r.join("").replace(/ +$/, "") : r.join(""));
	}
	return m.join("\n");
}
function Kd(e) {
	return e == null ? "" : String(e);
}
function qd(e) {
	let t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function Jd(e, t, n, r) {
	let i = n.enter("blockquote"), a = n.createTracker(r);
	a.move("> "), a.shift(2);
	let o = n.indentLines(n.containerFlow(e, a.current()), Yd);
	return i(), o;
}
function Yd(e, t, n) {
	return ">" + (n ? "" : " ") + e;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function Xd(e, t) {
	return Zd(e, t.inConstruct, !0) && !Zd(e, t.notInConstruct, !1);
}
function Zd(e, t, n) {
	if (typeof t == "string" && (t = [t]), !t || t.length === 0) return n;
	let r = -1;
	for (; ++r < t.length;) if (e.includes(t[r])) return !0;
	return !1;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/break.js
function Qd(e, t, n, r) {
	let i = -1;
	for (; ++i < n.unsafe.length;) if (n.unsafe[i].character === "\n" && Xd(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
	return "\\\n";
}
//#endregion
//#region node_modules/longest-streak/index.js
function $d(e, t) {
	let n = String(e), r = n.indexOf(t), i = r, a = 0, o = 0;
	if (typeof t != "string") throw TypeError("Expected substring");
	for (; r !== -1;) r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
	return o;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function ef(e, t) {
	return !(t.options.fences !== !1 || !e.value || e.lang || !/[^ \r\n]/.test(e.value) || /^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function tf(e) {
	let t = e.options.fence || "`";
	if (t !== "`" && t !== "~") throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/code.js
function nf(e, t, n, r) {
	let i = tf(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
	if (ef(e, n)) {
		let e = n.enter("codeIndented"), t = n.indentLines(a, rf);
		return e(), t;
	}
	let s = n.createTracker(r), c = i.repeat(Math.max($d(a, i) + 1, 3)), l = n.enter("codeFenced"), u = s.move(c);
	if (e.lang) {
		let t = n.enter(`codeFencedLang${o}`);
		u += s.move(n.safe(e.lang, {
			before: u,
			after: " ",
			encode: ["`"],
			...s.current()
		})), t();
	}
	if (e.lang && e.meta) {
		let t = n.enter(`codeFencedMeta${o}`);
		u += s.move(" "), u += s.move(n.safe(e.meta, {
			before: u,
			after: "\n",
			encode: ["`"],
			...s.current()
		})), t();
	}
	return u += s.move("\n"), a && (u += s.move(a + "\n")), u += s.move(c), l(), u;
}
function rf(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function af(e) {
	let t = e.options.quote || "\"";
	if (t !== "\"" && t !== "'") throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/definition.js
function of(e, t, n, r) {
	let i = af(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("definition"), s = n.enter("label"), c = n.createTracker(r), l = c.move("[");
	return l += c.move(n.safe(n.associationId(e), {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]: "), s(), !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : "\n",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), o(), l;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function sf(e) {
	let t = e.options.emphasis || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function cf(e) {
	return "&#x" + e.toString(16).toUpperCase() + ";";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/encode-info.js
function lf(e, t, n) {
	let r = Oo(e), i = Oo(t);
	return r === void 0 ? i === void 0 ? n === "_" ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !0
	} : r === 1 ? i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !1
	} : {
		inside: !1,
		outside: !1
	};
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
uf.peek = df;
function uf(e, t, n, r) {
	let i = sf(n), a = n.enter("emphasis"), o = n.createTracker(r), s = o.move(i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = lf(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = cf(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = lf(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + cf(d));
	let p = o.move(i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function df(e, t, n) {
	return n.options.emphasis || "*";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function ff(e, t) {
	let n = !1;
	return Ql(e, function(e) {
		if ("value" in e && /\r?\n|\r/.test(e.value) || e.type === "break") return n = !0, !1;
	}), !!((!e.depth || e.depth < 3) && Xa(e) && (t.options.setext || n));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/heading.js
function pf(e, t, n, r) {
	let i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
	if (ff(e, n)) {
		let t = n.enter("headingSetext"), r = n.enter("phrasing"), o = n.containerPhrasing(e, {
			...a.current(),
			before: "\n",
			after: "\n"
		});
		return r(), t(), o + "\n" + (i === 1 ? "=" : "-").repeat(o.length - (Math.max(o.lastIndexOf("\r"), o.lastIndexOf("\n")) + 1));
	}
	let o = "#".repeat(i), s = n.enter("headingAtx"), c = n.enter("phrasing");
	a.move(o + " ");
	let l = n.containerPhrasing(e, {
		before: "# ",
		after: "\n",
		...a.current()
	});
	return /^[\t ]/.test(l) && (l = cf(l.charCodeAt(0)) + l.slice(1)), l = l ? o + " " + l : o, n.options.closeAtx && (l += " " + o), c(), s(), l;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/html.js
mf.peek = hf;
function mf(e) {
	return e.value || "";
}
function hf() {
	return "<";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/image.js
gf.peek = _f;
function gf(e, t, n, r) {
	let i = af(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("image"), s = n.enter("label"), c = n.createTracker(r), l = c.move("![");
	return l += c.move(n.safe(e.alt, {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), l += c.move(")"), o(), l;
}
function _f() {
	return "!";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
vf.peek = yf;
function vf(e, t, n, r) {
	let i = e.referenceType, a = n.enter("imageReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("!["), l = n.safe(e.alt, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function yf() {
	return "!";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
bf.peek = xf;
function bf(e, t, n) {
	let r = e.value || "", i = "`", a = -1;
	for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
	for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length;) {
		let e = n.unsafe[a], t = n.compilePattern(e), i;
		if (e.atBreak) for (; i = t.exec(r);) {
			let e = i.index;
			r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--, r = r.slice(0, e) + " " + r.slice(i.index + 1);
		}
	}
	return i + r + i;
}
function xf() {
	return "`";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function Sf(e, t) {
	let n = Xa(e);
	return !(t.options.resourceLink || !e.url || e.title || !e.children || e.children.length !== 1 || e.children[0].type !== "text" || n !== e.url && "mailto:" + n !== e.url || !/^[a-z][a-z+.-]+:/i.test(e.url) || /[\0- <>\u007F]/.test(e.url));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/link.js
Cf.peek = wf;
function Cf(e, t, n, r) {
	let i = af(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.createTracker(r), s, c;
	if (Sf(e, n)) {
		let t = n.stack;
		n.stack = [], s = n.enter("autolink");
		let r = o.move("<");
		return r += o.move(n.containerPhrasing(e, {
			before: r,
			after: ">",
			...o.current()
		})), r += o.move(">"), s(), n.stack = t, r;
	}
	s = n.enter("link"), c = n.enter("label");
	let l = o.move("[");
	return l += o.move(n.containerPhrasing(e, {
		before: l,
		after: "](",
		...o.current()
	})), l += o.move("]("), c(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (c = n.enter("destinationLiteral"), l += o.move("<"), l += o.move(n.safe(e.url, {
		before: l,
		after: ">",
		...o.current()
	})), l += o.move(">")) : (c = n.enter("destinationRaw"), l += o.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...o.current()
	}))), c(), e.title && (c = n.enter(`title${a}`), l += o.move(" " + i), l += o.move(n.safe(e.title, {
		before: l,
		after: i,
		...o.current()
	})), l += o.move(i), c()), l += o.move(")"), s(), l;
}
function wf(e, t, n) {
	return Sf(e, n) ? "<" : "[";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
Tf.peek = Ef;
function Tf(e, t, n, r) {
	let i = e.referenceType, a = n.enter("linkReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("["), l = n.containerPhrasing(e, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function Ef() {
	return "[";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function Df(e) {
	let t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function Of(e) {
	let t = Df(e), n = e.options.bulletOther;
	if (!n) return t === "*" ? "-" : "*";
	if (n !== "*" && n !== "+" && n !== "-") throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
	return n;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function kf(e) {
	let t = e.options.bulletOrdered || ".";
	if (t !== "." && t !== ")") throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function Af(e) {
	let t = e.options.rule || "*";
	if (t !== "*" && t !== "-" && t !== "_") throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/list.js
function jf(e, t, n, r) {
	let i = n.enter("list"), a = n.bulletCurrent, o = e.ordered ? kf(n) : Df(n), s = e.ordered ? o === "." ? ")" : "." : Of(n), c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
	if (!e.ordered) {
		let t = e.children ? e.children[0] : void 0;
		if ((o === "*" || o === "-") && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), Af(n) === o && t) {
			let t = -1;
			for (; ++t < e.children.length;) {
				let n = e.children[t];
				if (n && n.type === "listItem" && n.children && n.children[0] && n.children[0].type === "thematicBreak") {
					c = !0;
					break;
				}
			}
		}
	}
	c && (o = s), n.bulletCurrent = o;
	let l = n.containerFlow(e, r);
	return n.bulletLastUsed = o, n.bulletCurrent = a, i(), l;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function Mf(e) {
	let t = e.options.listItemIndent || "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function Nf(e, t, n, r) {
	let i = Mf(n), a = n.bulletCurrent || Df(n);
	t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
	let o = a.length + 1;
	(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
	let s = n.createTracker(r);
	s.move(a + " ".repeat(o - a.length)), s.shift(o);
	let c = n.enter("listItem"), l = n.indentLines(n.containerFlow(e, s.current()), u);
	return c(), l;
	function u(e, t, n) {
		return t ? (n ? "" : " ".repeat(o)) + e : (n ? a : a + " ".repeat(o - a.length)) + e;
	}
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function Pf(e, t, n, r) {
	let i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
	return a(), i(), o;
}
//#endregion
//#region node_modules/mdast-util-phrasing/lib/index.js
var Ff = Vl([
	"break",
	"delete",
	"emphasis",
	"footnote",
	"footnoteReference",
	"image",
	"imageReference",
	"inlineCode",
	"inlineMath",
	"link",
	"linkReference",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"strong",
	"text",
	"textDirective"
]);
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/root.js
function If(e, t, n, r) {
	return (e.children.some(function(e) {
		return Ff(e);
	}) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function Lf(e) {
	let t = e.options.strong || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/strong.js
Rf.peek = zf;
function Rf(e, t, n, r) {
	let i = Lf(n), a = n.enter("strong"), o = n.createTracker(r), s = o.move(i + i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = lf(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = cf(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = lf(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + cf(d));
	let p = o.move(i + i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function zf(e, t, n) {
	return n.options.strong || "*";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/text.js
function Bf(e, t, n, r) {
	return n.safe(e.value, r);
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function Vf(e) {
	let t = e.options.ruleRepetition || 3;
	if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function Hf(e, t, n) {
	let r = (Af(n) + (n.options.ruleSpaces ? " " : "")).repeat(Vf(n));
	return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/index.js
var Uf = {
	blockquote: Jd,
	break: Qd,
	code: nf,
	definition: of,
	emphasis: uf,
	hardBreak: Qd,
	heading: pf,
	html: mf,
	image: gf,
	imageReference: vf,
	inlineCode: bf,
	link: Cf,
	linkReference: Tf,
	list: jf,
	listItem: Nf,
	paragraph: Pf,
	root: If,
	strong: Rf,
	text: Bf,
	thematicBreak: Hf
};
//#endregion
//#region node_modules/mdast-util-gfm-table/lib/index.js
function Wf() {
	return {
		enter: {
			table: Gf,
			tableData: Yf,
			tableHeader: Yf,
			tableRow: qf
		},
		exit: {
			codeText: Xf,
			table: Kf,
			tableData: Jf,
			tableHeader: Jf,
			tableRow: Jf
		}
	};
}
function Gf(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return e === "none" ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function Kf(e) {
	this.exit(e), this.data.inTable = void 0;
}
function qf(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function Jf(e) {
	this.exit(e);
}
function Yf(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function Xf(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, Zf));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function Zf(e, t) {
	return t === "|" ? t : e;
}
function Qf(e) {
	let t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
	return {
		unsafe: [
			{
				character: "\r",
				inConstruct: "tableCell"
			},
			{
				character: "\n",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: "|",
				after: "[	 :-]"
			},
			{
				character: "|",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: ":",
				after: "-"
			},
			{
				atBreak: !0,
				character: "-",
				after: "[:|-]"
			}
		],
		handlers: {
			inlineCode: f,
			table: o,
			tableCell: c,
			tableRow: s
		}
	};
	function o(e, t, n, r) {
		return l(u(e, n, r), e.align);
	}
	function s(e, t, n, r) {
		let i = l([d(e, n, r)]);
		return i.slice(0, i.indexOf("\n"));
	}
	function c(e, t, n, r) {
		let i = n.enter("tableCell"), o = n.enter("phrasing"), s = n.containerPhrasing(e, {
			...r,
			before: a,
			after: a
		});
		return o(), i(), s;
	}
	function l(e, t) {
		return Gd(e, {
			align: t,
			alignDelimiters: r,
			padding: n,
			stringLength: i
		});
	}
	function u(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("table");
		for (; ++i < r.length;) a[i] = d(r[i], t, n);
		return o(), a;
	}
	function d(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("tableRow");
		for (; ++i < r.length;) a[i] = c(r[i], e, t, n);
		return o(), a;
	}
	function f(e, t, n) {
		let r = Uf.inlineCode(e, t, n);
		return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r;
	}
}
//#endregion
//#region node_modules/mdast-util-gfm-task-list-item/lib/index.js
function $f() {
	return { exit: {
		taskListCheckValueChecked: tp,
		taskListCheckValueUnchecked: tp,
		paragraph: np
	} };
}
function ep() {
	return {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: rp }
	};
}
function tp(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function np(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && t.type === "listItem" && typeof t.checked == "boolean") {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && n.type === "text") {
			let r = t.children, i = -1, a;
			for (; ++i < r.length;) {
				let e = r[i];
				if (e.type === "paragraph") {
					a = e;
					break;
				}
			}
			a === e && (n.value = n.value.slice(1), n.value.length === 0 ? e.children.shift() : e.position && n.position && typeof n.position.start.offset == "number" && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
function rp(e, t, n, r) {
	let i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
	a && s.move(o);
	let c = Uf.listItem(e, t, n, {
		...r,
		...s.current()
	});
	return a && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), c;
	function l(e) {
		return e + o;
	}
}
//#endregion
//#region node_modules/mdast-util-gfm/lib/index.js
function ip() {
	return [
		ld(),
		Nd(),
		Rd(),
		Wf(),
		$f()
	];
}
function ap(e) {
	return { extensions: [
		ud(),
		Pd(e),
		zd(),
		Qf(e),
		ep()
	] };
}
//#endregion
//#region node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var op = {
	tokenize: bp,
	partial: !0
}, sp = {
	tokenize: xp,
	partial: !0
}, cp = {
	tokenize: Sp,
	partial: !0
}, lp = {
	tokenize: Cp,
	partial: !0
}, up = {
	tokenize: wp,
	partial: !0
}, dp = {
	name: "wwwAutolink",
	tokenize: vp,
	previous: Tp
}, fp = {
	name: "protocolAutolink",
	tokenize: yp,
	previous: Ep
}, pp = {
	name: "emailAutolink",
	tokenize: _p,
	previous: Dp
}, mp = {};
function hp() {
	return { text: mp };
}
for (var gp = 48; gp < 123;) mp[gp] = pp, gp++, gp === 58 ? gp = 65 : gp === 91 && (gp = 97);
mp[43] = pp, mp[45] = pp, mp[46] = pp, mp[95] = pp, mp[72] = [pp, fp], mp[104] = [pp, fp], mp[87] = [pp, dp], mp[119] = [pp, dp];
function _p(e, t, n) {
	let r = this, i, a;
	return o;
	function o(t) {
		return !Op(t) || !Dp.call(r, r.previous) || kp(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(t));
	}
	function s(t) {
		return Op(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
	}
	function c(t) {
		return t === 46 ? e.check(up, u, l)(t) : t === 45 || t === 95 || fo(t) ? (a = !0, e.consume(t), c) : u(t);
	}
	function l(t) {
		return e.consume(t), i = !0, c;
	}
	function u(o) {
		return a && i && uo(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
	}
}
function vp(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t !== 87 && t !== 119 || !Tp.call(r, r.previous) || kp(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(op, e.attempt(sp, e.attempt(cp, a), n), n)(t));
	}
	function a(n) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
	}
}
function yp(e, t, n) {
	let r = this, i = "", a = !1;
	return o;
	function o(t) {
		return (t === 72 || t === 104) && Ep.call(r, r.previous) && !kp(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), s) : n(t);
	}
	function s(t) {
		if (uo(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), s;
		if (t === 58) {
			let n = i.toLowerCase();
			if (n === "http" || n === "https") return e.consume(t), c;
		}
		return n(t);
	}
	function c(t) {
		return t === 47 ? (e.consume(t), a ? l : (a = !0, c)) : n(t);
	}
	function l(t) {
		return t === null || mo(t) || Z(t) || yo(t) || vo(t) ? n(t) : e.attempt(sp, e.attempt(cp, u), n)(t);
	}
	function u(n) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
	}
}
function bp(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return (t === 87 || t === 119) && r < 3 ? (r++, e.consume(t), i) : t === 46 && r === 3 ? (e.consume(t), a) : n(t);
	}
	function a(e) {
		return e === null ? n(e) : t(e);
	}
}
function xp(e, t, n) {
	let r, i, a;
	return o;
	function o(t) {
		return t === 46 || t === 95 ? e.check(lp, c, s)(t) : t === null || Z(t) || yo(t) || t !== 45 && vo(t) ? c(t) : (a = !0, e.consume(t), o);
	}
	function s(t) {
		return t === 95 ? r = !0 : (i = r, r = void 0), e.consume(t), o;
	}
	function c(e) {
		return i || r || !a ? n(e) : t(e);
	}
}
function Sp(e, t) {
	let n = 0, r = 0;
	return i;
	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(lp, t, a)(o) : o === null || Z(o) || yo(o) ? t(o) : (e.consume(o), i);
	}
	function a(t) {
		return t === 41 && r++, e.consume(t), i;
	}
}
function Cp(e, t, n) {
	return r;
	function r(o) {
		return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : o === 60 || o === null || Z(o) || yo(o) ? t(o) : n(o);
	}
	function i(e) {
		return e === null || e === 40 || e === 91 || Z(e) || yo(e) ? t(e) : r(e);
	}
	function a(e) {
		return uo(e) ? o(e) : n(e);
	}
	function o(t) {
		return t === 59 ? (e.consume(t), r) : uo(t) ? (e.consume(t), o) : n(t);
	}
}
function wp(e, t, n) {
	return r;
	function r(t) {
		return e.consume(t), i;
	}
	function i(e) {
		return fo(e) ? n(e) : t(e);
	}
}
function Tp(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Z(e);
}
function Ep(e) {
	return !uo(e);
}
function Dp(e) {
	return !(e === 47 || Op(e));
}
function Op(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || fo(e);
}
function kp(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
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
//#endregion
//#region node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var Ap = {
	tokenize: Rp,
	partial: !0
};
function jp() {
	return {
		document: { 91: {
			name: "gfmFootnoteDefinition",
			tokenize: Fp,
			continuation: { tokenize: Ip },
			exit: Lp
		} },
		text: {
			91: {
				name: "gfmFootnoteCall",
				tokenize: Pp
			},
			93: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: Mp,
				resolveTo: Np
			}
		}
	};
}
function Mp(e, t, n) {
	let r = this, i = r.events.length, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), o;
	for (; i--;) {
		let e = r.events[i][1];
		if (e.type === "labelImage") {
			o = e;
			break;
		}
		if (e.type === "gfmFootnoteCall" || e.type === "labelLink" || e.type === "label" || e.type === "image" || e.type === "link") break;
	}
	return s;
	function s(i) {
		if (!o || !o._balanced) return n(i);
		let s = lo(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i));
	}
}
function Np(e, t) {
	let n = e.length;
	for (; n--;) if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let a = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, a.start),
		end: Object.assign({}, a.end)
	}, s = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			a,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...s), e;
}
function Pp(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
	return s;
	function s(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), c;
	}
	function c(t) {
		return t === 94 ? (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l) : n(t);
	}
	function l(s) {
		if (a > 999 || s === 93 && !o || s === null || s === 91 || Z(s)) return n(s);
		if (s === 93) {
			e.exit("chunkString");
			let a = e.exit("gfmFootnoteCallString");
			return i.includes(lo(r.sliceSerialize(a))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s);
		}
		return Z(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l;
	}
	function u(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t);
	}
}
function Fp(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, s;
	return c;
	function c(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
	}
	function l(t) {
		return t === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(t);
	}
	function u(t) {
		if (o > 999 || t === 93 && !s || t === null || t === 91 || Z(t)) return n(t);
		if (t === 93) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return a = lo(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return Z(t) || (s = !0), o++, e.consume(t), t === 92 ? d : u;
	}
	function d(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, u) : u(t);
	}
	function f(t) {
		return t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), i.includes(a) || i.push(a), $(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function Ip(e, t, n) {
	return e.check(Io, t, e.attempt(Ap, t, n));
}
function Lp(e) {
	e.exit("gfmFootnoteDefinition");
}
function Rp(e, t, n) {
	let r = this;
	return $(e, i, "gfmFootnoteDefinitionIndent", 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function zp(e) {
	let t = (e || {}).singleTilde, n = {
		name: "strikethrough",
		tokenize: i,
		resolveAll: r
	};
	return t ??= !0, {
		text: { 126: n },
		insideSpan: { null: [n] },
		attentionMarkers: { null: [126] }
	};
	function r(e, t) {
		let n = -1;
		for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "strikethroughSequenceTemporary" && e[n][1]._close) {
			let r = n;
			for (; r--;) if (e[r][0] === "exit" && e[r][1].type === "strikethroughSequenceTemporary" && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
				e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
				let i = {
					type: "strikethrough",
					start: Object.assign({}, e[r][1].start),
					end: Object.assign({}, e[n][1].end)
				}, a = {
					type: "strikethroughText",
					start: Object.assign({}, e[r][1].end),
					end: Object.assign({}, e[n][1].start)
				}, o = [
					[
						"enter",
						i,
						t
					],
					[
						"enter",
						e[r][1],
						t
					],
					[
						"exit",
						e[r][1],
						t
					],
					[
						"enter",
						a,
						t
					]
				], s = t.parser.constructs.insideSpan.null;
				s && no(o, o.length, 0, ko(s, e.slice(r + 1, n), t)), no(o, o.length, 0, [
					[
						"exit",
						a,
						t
					],
					[
						"enter",
						e[n][1],
						t
					],
					[
						"exit",
						e[n][1],
						t
					],
					[
						"exit",
						i,
						t
					]
				]), no(e, r - 1, n - r + 3, o), n = r + o.length - 2;
				break;
			}
		}
		for (n = -1; ++n < e.length;) e[n][1].type === "strikethroughSequenceTemporary" && (e[n][1].type = "data");
		return e;
	}
	function i(e, n, r) {
		let i = this.previous, a = this.events, o = 0;
		return s;
		function s(t) {
			return i === 126 && a[a.length - 1][1].type !== "characterEscape" ? r(t) : (e.enter("strikethroughSequenceTemporary"), c(t));
		}
		function c(a) {
			let s = Oo(i);
			if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c);
			if (o < 2 && !t) return r(a);
			let l = e.exit("strikethroughSequenceTemporary"), u = Oo(a);
			return l._open = !u || u === 2 && !!s, l._close = !s || s === 2 && !!u, n(a);
		}
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm-table/lib/edit-map.js
var Bp = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		Vp(this, e, t, n);
	}
	consume(e) {
		/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), this.map.length === 0) return;
		let t = this.map.length, n = [];
		for (; t > 0;) --t, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function Vp(e, t, n, r) {
	let i = 0;
	if (n !== 0 || r.length !== 0) {
		for (; i < e.map.length;) {
			if (e.map[i][0] === t) {
				e.map[i][1] += n, e.map[i][2].push(...r);
				return;
			}
			i += 1;
		}
		e.map.push([
			t,
			n,
			r
		]);
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm-table/lib/infer.js
function Hp(e, t) {
	let n = !1, r = [];
	for (; t < e.length;) {
		let i = e[t];
		if (n) {
			if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			else if (i[1].type === "tableContent") {
				if (e[t - 1][1].type === "tableDelimiterMarker") {
					let e = r.length - 1;
					r[e] = r[e] === "left" ? "center" : "right";
				}
			} else if (i[1].type === "tableDelimiterRow") break;
		} else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
		t += 1;
	}
	return r;
}
//#endregion
//#region node_modules/micromark-extension-gfm-table/lib/syntax.js
function Up() {
	return { flow: { null: {
		name: "table",
		tokenize: Wp,
		resolveAll: Gp
	} } };
}
function Wp(e, t, n) {
	let r = this, i = 0, a = 0, o;
	return s;
	function s(e) {
		let t = r.events.length - 1;
		for (; t > -1;) {
			let e = r.events[t][1].type;
			if (e === "lineEnding" || e === "linePrefix") t--;
			else break;
		}
		let i = t > -1 ? r.events[t][1].type : null, a = i === "tableHead" || i === "tableRow" ? S : c;
		return a === S && r.parser.lazy[r.now().line] ? n(e) : a(e);
	}
	function c(t) {
		return e.enter("tableHead"), e.enter("tableRow"), l(t);
	}
	function l(e) {
		return e === 124 ? u(e) : (o = !0, a += 1, u(e));
	}
	function u(t) {
		return t === null ? n(t) : X(t) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : Q(t) ? $(e, u, "whitespace")(t) : (a += 1, o && (o = !1, i += 1), t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), o = !0, u) : (e.enter("data"), d(t)));
	}
	function d(t) {
		return t === null || t === 124 || Z(t) ? (e.exit("data"), u(t)) : (e.consume(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 92 || t === 124 ? (e.consume(t), d) : d(t);
	}
	function p(t) {
		return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(t) : (e.enter("tableDelimiterRow"), o = !1, Q(t) ? $(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : m(t));
	}
	function m(t) {
		return t === 45 || t === 58 ? g(t) : t === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : x(t);
	}
	function h(t) {
		return Q(t) ? $(e, g, "whitespace")(t) : g(t);
	}
	function g(t) {
		return t === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), _) : t === 45 ? (a += 1, _(t)) : t === null || X(t) ? b(t) : x(t);
	}
	function _(t) {
		return t === 45 ? (e.enter("tableDelimiterFiller"), v(t)) : x(t);
	}
	function v(t) {
		return t === 45 ? (e.consume(t), v) : t === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), y) : (e.exit("tableDelimiterFiller"), y(t));
	}
	function y(t) {
		return Q(t) ? $(e, b, "whitespace")(t) : b(t);
	}
	function b(n) {
		return n === 124 ? m(n) : n === null || X(n) ? !o || i !== a ? x(n) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n)) : x(n);
	}
	function x(e) {
		return n(e);
	}
	function S(t) {
		return e.enter("tableRow"), C(t);
	}
	function C(n) {
		return n === 124 ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), C) : n === null || X(n) ? (e.exit("tableRow"), t(n)) : Q(n) ? $(e, C, "whitespace")(n) : (e.enter("data"), w(n));
	}
	function w(t) {
		return t === null || t === 124 || Z(t) ? (e.exit("data"), C(t)) : (e.consume(t), t === 92 ? T : w);
	}
	function T(t) {
		return t === 92 || t === 124 ? (e.consume(t), w) : w(t);
	}
}
function Gp(e, t) {
	let n = -1, r = !0, i = 0, a = [
		0,
		0,
		0,
		0
	], o = [
		0,
		0,
		0,
		0
	], s = !1, c = 0, l, u, d, f = new Bp();
	for (; ++n < e.length;) {
		let p = e[n], m = p[1];
		p[0] === "enter" ? m.type === "tableHead" ? (s = !1, c !== 0 && (qp(f, t, c, l, u), u = void 0, c = 0), l = {
			type: "table",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			l,
			t
		]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, d = void 0, a = [
			0,
			0,
			0,
			0
		], o = [
			0,
			n + 1,
			0,
			0
		], s && (s = !1, u = {
			type: "tableBody",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			u,
			t
		]])), i = m.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], d = Kp(f, t, a, i, void 0, d), a = [
			0,
			0,
			0,
			0
		]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], d = Kp(f, t, a, i, void 0, d)), a = o, o = [
			a[1],
			n,
			0,
			0
		])) : m.type === "tableHead" ? (s = !0, c = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (c = n, a[1] === 0 ? o[1] !== 0 && (d = Kp(f, t, o, i, n, d)) : (o[0] = o[1], d = Kp(f, t, a, i, n, d)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
	}
	for (c !== 0 && qp(f, t, c, l, u), f.consume(t.events), n = -1; ++n < t.events.length;) {
		let e = t.events[n];
		e[0] === "enter" && e[1].type === "table" && (e[1]._align = Hp(t.events, n));
	}
	return e;
}
function Kp(e, t, n, r, i, a) {
	let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
	n[0] !== 0 && (a.end = Object.assign({}, Jp(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		a,
		t
	]]));
	let s = Jp(t.events, n[1]);
	if (a = {
		type: o,
		start: Object.assign({}, s),
		end: Object.assign({}, s)
	}, e.add(n[1], 0, [[
		"enter",
		a,
		t
	]]), n[2] !== 0) {
		let i = Jp(t.events, n[2]), a = Jp(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, a)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), r !== 2) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return i !== void 0 && (a.end = Object.assign({}, Jp(t.events, i)), e.add(i, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function qp(e, t, n, r, i) {
	let a = [], o = Jp(t.events, n);
	i && (i.end = Object.assign({}, o), a.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), a.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, a);
}
function Jp(e, t) {
	let n = e[t], r = n[0] === "enter" ? "start" : "end";
	return n[1][r];
}
//#endregion
//#region node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var Yp = {
	name: "tasklistCheck",
	tokenize: Zp
};
function Xp() {
	return { text: { 91: Yp } };
}
function Zp(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), a);
	}
	function a(t) {
		return Z(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : t === 88 || t === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t);
	}
	function o(t) {
		return t === 93 ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(t);
	}
	function s(r) {
		return X(r) ? t(r) : Q(r) ? e.check({ tokenize: Qp }, t, n)(r) : n(r);
	}
}
function Qp(e, t, n) {
	return $(e, r, "whitespace");
	function r(e) {
		return e === null ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm/index.js
function $p(e) {
	return ao([
		hp(),
		jp(),
		zp(e),
		Up(),
		Xp()
	]);
}
//#endregion
//#region node_modules/remark-gfm/lib/index.js
var em = {};
function tm(e) {
	let t = this, n = e || em, r = t.data(), i = r.micromarkExtensions ||= [], a = r.fromMarkdownExtensions ||= [], o = r.toMarkdownExtensions ||= [];
	i.push($p(n)), a.push(ip()), o.push(ap(n));
}
//#endregion
//#region src/components/chat/ImageLightbox.tsx
var nm = "a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex=\"-1\"])", rm = (e) => {
	let { src: t, alt: n, onClose: i } = e, o = l(null), s = l(null), c = l(null);
	a(() => (c.current = document.activeElement, o.current?.focus(), () => {
		c.current?.focus();
	}), []);
	let u = r((e) => {
		if (e.key === "Escape") return i();
		if (e.key !== "Tab") return;
		let t = s.current;
		if (!t) return;
		let n = Array.from(t.querySelectorAll(nm)).filter((e) => !e.closest("[inert]"));
		if (n.length === 0) return;
		let r = n[0], a = n[n.length - 1];
		e.shiftKey ? document.activeElement === r && (e.preventDefault(), a.focus()) : document.activeElement === a && (e.preventDefault(), r.focus());
	}, [i]);
	return /* @__PURE__ */ p("div", {
		ref: s,
		className: "elitea-assistant-lightbox-overlay",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": n || "Image preview",
		onClick: i,
		onKeyDown: u,
		children: [/* @__PURE__ */ f("button", {
			ref: o,
			className: "elitea-assistant-lightbox-close",
			onClick: i,
			"aria-label": "Close image preview",
			children: "✕"
		}), /* @__PURE__ */ f("img", {
			className: "elitea-assistant-lightbox-img",
			src: t,
			alt: n,
			onClick: (e) => e.stopPropagation()
		})]
	});
}, im = n((e) => {
	let { code: t } = e, { svg: n, error: r } = li(t);
	return r ? /* @__PURE__ */ f("pre", {
		className: "elitea-assistant-mermaid-error",
		children: /* @__PURE__ */ f("code", { children: t })
	}) : n ? /* @__PURE__ */ f("div", {
		style: {
			overflowX: "auto",
			maxWidth: "100%"
		},
		dangerouslySetInnerHTML: { __html: n }
	}) : null;
});
im.displayName = "MermaidBlock";
//#endregion
//#region src/components/chat/MarkdownContent.tsx
var am = n((e) => {
	let { content: t, isAnimating: n = !1 } = e, i = ui(), [a, o] = u(null), s = r(() => o(null), []);
	return /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f("div", {
		className: "elitea-assistant-markdown",
		children: /* @__PURE__ */ f(Xu, {
			remarkPlugins: [tm],
			rehypePlugins: !n && i ? [i] : [],
			components: {
				code(e) {
					let { className: t, children: r } = e, i = /language-(\w+)/.exec(t ?? "")?.[1], a = String(r ?? "").replace(/\n$/, "");
					return i === "mermaid" && !n ? /* @__PURE__ */ f(im, { code: a }) : /* @__PURE__ */ f("code", {
						className: t,
						children: r
					});
				},
				img(e) {
					let { src: t, alt: n } = e;
					return /* @__PURE__ */ f("button", {
						type: "button",
						className: "elitea-assistant-img-btn",
						onClick: () => t && o({
							src: t,
							alt: n ?? ""
						}),
						"aria-label": `${n || "Image"} — click to expand`,
						children: /* @__PURE__ */ f("img", {
							src: t,
							alt: n ?? ""
						})
					});
				}
			},
			children: t
		})
	}), a && m(/* @__PURE__ */ f(rm, {
		src: a.src,
		alt: a.alt,
		onClose: s
	}), document.body)] });
});
am.displayName = "MarkdownContent";
//#endregion
//#region src/theme/colors.theme.ts
var om = {
	light: {
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
	},
	dark: {
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
	}
}, sm = (e, t) => ({
	...om[e],
	...t
}), cm = (e) => ({
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
}), lm = t((e, t) => {
	let { apiUrl: n, token: i, withCredentials: a = !1, socketPath: s = "/socket.io/", apiAdapter: l, title: u = "Elitea Assistant", placeholder: d = "Type a message...", welcomeMessage: m = "Hi! I'm your ELITEA Support Assistant.\nAsk me anything about ELITEA or report any issues you're experiencing. I have context about your current screen and settings.", position: h = "bottom-right", theme: g = "light", colors: _, supportAssistantContext: v } = e, y = c(() => cm(sm(g, _)), [g, _]), b = c(() => {
		if (l) return l;
		if (n && (i || a)) return k(n, {
			token: i,
			withCredentials: a
		});
		throw Error("EliteaAssistant: provide either apiAdapter, or apiUrl with token, or apiUrl with withCredentials");
	}, [
		l,
		n,
		i,
		a
	]), x = Mn(c(() => ({
		url: n ? Ze(n) : "",
		path: s,
		token: i,
		withCredentials: a
	}), [
		n,
		s,
		i,
		a
	])), { title: S, welcomeMessage: C, placeholder: w, supportProjectId: T, user: E, history: D, lastConversation: O, isLoading: A } = rt({
		api: b,
		title: u,
		welcomeMessage: m,
		placeholder: d
	}), { isOpen: j, isExpanded: M, open: N, close: P, toggle: ee, expandFullscreen: F, collapseFullscreen: te, toggleFullscreen: ne } = je(), re = kn(), { popupVissible: I, showPopup: ie, hidePopup: ae, popupText: oe } = B(j), se = r(() => {
		re.captureScreenshot(), ie();
	}, [re, ie]), ce = r(() => {
		re.clearScreenshot(), ae();
	}, [re, ae]);
	return o(t, () => ({
		open: N,
		close: P,
		toggle: ee,
		expandFullscreen: F,
		collapseFullscreen: te,
		toggleFullscreen: ne,
		showPopup: se,
		hidePopup: ce,
		isOpen: () => j,
		isExpanded: () => M
	}), [
		j,
		M,
		N,
		P,
		ee,
		F,
		te,
		ne,
		se,
		ce
	]), /* @__PURE__ */ f(ke.Provider, {
		value: b,
		children: /* @__PURE__ */ f(An.Provider, {
			value: x,
			children: /* @__PURE__ */ f(Nn.Provider, {
				value: v ?? null,
				children: /* @__PURE__ */ f(di.Provider, {
					value: g,
					children: /* @__PURE__ */ f(Dn.Provider, {
						value: re,
						children: /* @__PURE__ */ p("div", {
							className: `elitea-assistant-container elitea-assistant-container--${h}`,
							style: y,
							children: [
								/* @__PURE__ */ f(pi, {
									title: S,
									placeholder: w,
									welcomeMessage: C,
									avatar: E.avatar,
									supportProjectId: T,
									initialHistory: D,
									lastConversation: O,
									isInitLoading: A,
									isOpen: j,
									onClose: P,
									expanded: M,
									onExpand: ne
								}),
								I && !j && /* @__PURE__ */ f(mi, {
									message: oe,
									onClose: ce
								}),
								/* @__PURE__ */ f(le, { onClick: ee })
							]
						})
					})
				})
			})
		})
	});
});
lm.displayName = "EliteaAssistant";
//#endregion
export { lm as EliteaAssistant, k as createDefaultAdapter };

//# sourceMappingURL=elitea-assistant.js.map