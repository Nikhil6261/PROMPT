"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5710],{770975:(e,n,t)=>{t.d(n,{E:()=>i,S:()=>r});let{Provider:r,useMaybeHook:i}=(0,t(498490).Z)("pwtSurfaceContext")},630118:(e,n,t)=>{t.d(n,{KJ:()=>_,Rp:()=>s});let r={merchant_catalogs_data_sources:{id:228,name:"merchant_catalogs_data_sources_user_nav"},merchant_catalogs_listings:{id:230,name:"merchant_catalogs_listings_user_nav"},merchant_catalogs_product_groups:{id:229,name:"merchant_catalogs_product_groups_user_nav"},own_profile:{id:14,name:"own_profile"},own_profile_no_pins:{id:45,name:"own_profile_no_pins"},other_profile:{id:15,name:"other_profile"},other_profile_no_pins:{id:46,name:"other_profile_no_pins"},sterling_ads_edit:{id:225,name:"sterling_edit_flow_user_nav"},sterling_reporting_overview:{id:226,name:"sterling_reporting_overview_user_nav"}},i={initial_app_load:{unauth:{board:{id:114,name:"board_page_interactive"},pin_closeup:{id:113,name:"pin_page_interactive"},other_profile:{id:115,name:"user_page_interactive"},topic:{id:119,name:"topic_page_interactive"},sterling_signup:{id:201,name:"sterling_signup_main_pageload"},sterling_login:{id:202,name:"sterling_login_main_pageload"}},auth:{bizhub:{id:607,name:"bizhub_pinteractive"},homefeed:{id:19,name:"home_feed_pinteractive"},own_profile:{id:123,name:"own_profile_page_load"},own_profile_no_pins:{id:125,name:"own_profile_no_pins_page_load"},other_profile:{id:122,name:"other_profile_page_load"},other_profile_no_pins:{id:124,name:"other_profile_no_pins_page_load"},self_profile:{id:126,name:"self_profile_page_load"},sterling_reporting_overview:{id:219,name:"sterling_reporting_overview_pageload"},sterling_ads_create:{id:221,name:"sterling_adscreate_main_pageload"},sterling_ads_duplicate:{id:206,name:"sterling_adsduplication_main_pageload"},sterling_ads_edit:{id:204,name:"sterling_adsedit_main_pageload"},sterling_billing_profile:{id:203,name:"sterling_billingprofile_main_pageload"},sterling_bulk_editor:{id:205,name:"sterling_bulkeditor_main_pageload"},sterling_pin_builder:{id:222,name:"sterling_adscreate_pinbuilder_pageload"},sterling_recommendations:{id:223,name:"sterling_recommendations_pageload"},sterling_reporting_details:{id:218,name:"sterling_reporting_details_pageload"}}},client_route_push:{unauth:{},auth:{...r,bizhub:{id:608,name:"bizhub_page_render"},homefeed:{id:2,name:"home_feed_render"},search:{id:3,name:"search_feed_render"},search_tab:{id:25,name:"search_tab_render"},self_profile:{id:47,name:"self_profile"},pin_closeup:{id:13,name:"pin_closeup_details"},sterling_audiences:{id:224,name:"sterling_audiences_page_user_nav"},sterling_reporting_details:{id:227,name:"sterling_reporting_details_user_nav"},visual_search:{id:44,name:"visual_search_page_render"}}},client_route_replace:{unauth:{},auth:{...r}}},a={initial_app_load:{auth:{pin_closeup:{product_detail_page:{id:120,name:"product_details_interactive"},product_detail_page_plus:{id:121,name:"product_details_plus_interactive"}}}},client_route_push:{auth:{pin_closeup:{story_pin:{id:700,name:"story_pin_closeup"},product_detail_page:{id:37,name:"product_details_render"},product_detail_page_plus:{id:38,name:"product_details_plus_render"}}}},client_route_replace:{auth:{pin_closeup:{product_detail_page:{id:37,name:"product_details_render"},product_detail_page_plus:{id:38,name:"product_details_plus_render"}}}}},o={board_picker:16,grid_bottom_spinner:12,facebook_autologin:500,google_autologin:501,story_pin_step:701},l=e=>{let{navigationType:n,isAuthenticated:t,segment:r,surface:o}=e,l=t?"auth":"unauth",s=a[n]?.[l]?.[o];return r&&s&&s[r]||i[n][l][o]},s=e=>{if("stopwatch"===e.type&&"name"in e)return o[e.name]||null;if("surface"===e.type){let n=l(e);return n?n.id:null}return null},_=e=>{if("stopwatch"===e.type&&"name"in e||"core_web_vitals"===e.type&&"name"in e)return e.name;let{navigationType:n,isAuthenticated:t,segment:r,surface:i}=e,a=l(e);return a?a.name:`${n}_${t?"auth":"unauth"}_${i}${r?"_"+r:""}`}},994644:(e,n,t)=>{t.d(n,{e:()=>r,n:()=>i});let r=e=>{switch(e){case"/pin/:id":case"/pin/:id/sent":return"pin_closeup";case"/:username/:slug":return"board";case"/:username":return"other_profile";case"/ideas/:interest/:id":return"topic";default:return null}},i=e=>{let n=[{pattern:"/",name:"homefeed"},{pattern:"/pin/:id",name:"pin_closeup"},{pattern:"/pin/:id/sent",name:"pin_closeup"},{pattern:"/pin/:id/visual-search",name:"flashlight"},{pattern:"/amp/pin/:id",name:"amp"},{pattern:"/today",name:"today"},{pattern:"/search",name:"search_landing_page"},{pattern:"/search/:scope",name:"search_results"},{pattern:"/notifications",name:"notifications"},{pattern:"/settings",name:"settings_landing_page"},{pattern:"/settings/:tab",name:"settings_tab"},{pattern:"/:username/_created",name:"profile_created_tab"},{pattern:"/:username/_saved",name:"profile_saved_tab"},{pattern:"/:username/:slug",name:"board"},{pattern:"/:username",name:"profile"},{pattern:"/ideas/:interest/:id",name:"topic"}].find(n=>{if(!e)return"pathname_invalid";let t=n.pattern.split("/").filter(e=>""!==e),r=e.split("/").filter(e=>""!==e);if(t.length!==r.length)return!1;for(let e=0;e<t.length;e+=1)if(!t[e].startsWith(":")&&r[e]!==t[e])return!1;return!0});return n?n.name:"unknown"}},301567:(e,n,t)=>{t.d(n,{F9:()=>p,LM:()=>_,VZ:()=>a,cQ:()=>c,rZ:()=>o});var r=t(10306),i=t(248750);let a=()=>"number"==typeof window.innerHeight&&"number"==typeof window.pageYOffset&&!!document.querySelector&&!!document.querySelectorAll,o=e=>e instanceof HTMLDivElement||e instanceof HTMLVideoElement?e.getBoundingClientRect():e.parentElement instanceof HTMLElement?e.parentElement.getBoundingClientRect():null,l=({top:e,height:n},{foldY:t,pageYOffset:r})=>{let i=e+r;if(i>=t)return!1;let a=Math.min(n,t-i);return a>.5*n||a>.2*t},s=e=>{if(e instanceof HTMLImageElement)return e.src;if(e instanceof HTMLVideoElement)return e.attributes.poster.value;let n=((e.style||{}).backgroundImage||"").match(/^url\(["'](.*)["']\)$/);return n&&n[1]||null},_=()=>document.querySelector?document.querySelectorAll(r.wc).length:((0,i.H)("missing_document_query_selector"),0),d=()=>{if(!document.querySelector)return(0,i.H)("missing_document_query_selector"),null;let e=document.querySelectorAll(r.wc);return e[e.length-1]||null},u=(e,n)=>{let t=o(e);if(!t)return(0,i.H)("missing_client_rect"),!1;if(t.width<100&&t.height<100){if(e instanceof HTMLImageElement)return!1;let n=s(e);if(n?.endsWith("svg"))return!1}return l(t,n)},p=()=>{let e=d();if(!e)return!1;let n=window.innerHeight||0,t=window.pageYOffset||0;return e.getBoundingClientRect().top+t>=n},c=(e,n,t)=>{if(!document.querySelector)return(0,i.H)("missing_document_query_selector"),[];let a={foldY:window.innerHeight||0,pageYOffset:window.pageYOffset||0},o=[r.Wf,...e?[r.fF]:[],...n?[r.$N]:[]].join(","),l=[...document.querySelectorAll(o)];if(t){let e=[...document.querySelectorAll('div[data-test-id="board-section"]')],n=e=>{let t=[...e.children];!t.length&&e.style.backgroundImage?l.push(e):t.length&&t.forEach(e=>{n(e)})};e.forEach(e=>{n(e)})}return l.reduce((e,t)=>{if((t instanceof HTMLImageElement||t instanceof HTMLDivElement||t instanceof HTMLVideoElement&&n)&&u(t,a)){let n=s(t);if(n){let r=(n||"").replace(/.*\//,"");return e.concat([{element:t,fileName:r}])}}return e},[])}},10306:(e,n,t)=>{t.d(n,{$N:()=>s,Kb:()=>r,Wf:()=>o,fF:()=>l,wc:()=>a});let r="pwt-grid-item",i=['div[data-grid-item="true"]',"div.Grid__Item",`div[data-test-id="${r}"]`],a=i.join(","),o=i.map(e=>`${e} img`).join(","),l=i.map(e=>`${e} div[style*=background-image]`).join(","),s=i.map(e=>`${e} video`).join(",")},353168:(e,n,t)=>{t.d(n,{Ao:()=>u,BA:()=>p,L8:()=>m,ZP:()=>g,at:()=>i,gQ:()=>d,tl:()=>c});var r=t(671481);let i="masonryPagination",a={},o=e=>`📌 ${e}`,l=(e,n,t)=>{let r=o(n);t?e.mark(r,{startTime:t}):e.mark(r)},s=(e,n,t,r)=>{let i=o(n);e.measure(i,t,r)},_=(e,n)=>{let t=o(n);e.clearMarks(t),e.clearMeasures(t)},d=()=>{let e={};return Object.keys(a).forEach(n=>{(a[n]||[]).slice(0,3).forEach((t,r)=>{e[r?`${n}_${r+1}`:n]=t})}),e},u=(e,n)=>(a[e]||[]).filter(e=>e<n).length,p=(e,n)=>u(e,n)>0,c=()=>{r.Z&&Object.keys(a).forEach(e=>_(r.Z,e)),a={}},m=e=>{r.Z&&(a[e]=(a[e]||[]).concat([r.Z.now()]),s(r.Z,e))},g=(e,n)=>{r.Z&&(a[e]=(a[e]||[]).concat([n||r.Z.now()]),l(r.Z,e,n))}},192307:(e,n,t)=>{t.d(n,{i:()=>r,p:()=>o});let r=({name:e,initiatorType:n})=>{switch(n){case"xmlhttprequest":return"xmlhttprequest";case"img":return"image";case"video":return"video";default:{let n=e.split("."),t=(n.length>1&&n.pop()||"").toLowerCase();if(["js","mjs"].includes(t))return"script";if("css"===t)return"css";if(["mp4","m4v","mov","ts","m3u8"].includes(t))return"video";if(["bmp","gif","jpg","jpeg","png","tiff","webp","svg"].includes(t))return"image";return"other"}}},i=e=>{let n=e.replace(RegExp(`^${window.location.origin||""}`),""),t=document&&document.querySelector(`script[src='${n}']`);return!!t&&t.hasAttribute("defer")},a=e=>["pinimg","pinterest","pinterdev"].every(n=>!e.includes(`${n}`)),o=(e,n)=>{let t=r(e),{name:o}=e;return{category:t,isDeferred:"script"===t&&i(o),isExternal:a(o),isVisuallyCompleteRequired:"image"===t&&n.includes(o),timing:e}}},314851:(e,n,t)=>{t.d(n,{Z:()=>r});let r=e=>{let n=null;return{get:()=>n||e(),save:()=>{n=e()}}}},202953:(e,n,t)=>{t.d(n,{Cg:()=>g,Eg:()=>h,Hv:()=>v,LH:()=>u,MM:()=>b,X_:()=>p,y0:()=>f});var r=t(201738),i=t(994644),a=t(248750),o=t(353168),l=t(192307),s=t(314851),_=t(561360);function d(){(0,a.A9)("resourceBufferSize",{count:(0,_.Z)("resource").length}),window.performance&&window.performance.clearResourceTimings&&((0,o.ZP)("resourceBufferCleared"),r.DQ&&console.info("Warning: Clearing resource timings in default buffer."),window.performance.clearResourceTimings())}let u=()=>({defaultBufferSize:(0,_.Z)("resource").length}),p=()=>{if(window.performance){window.performance.setResourceTimingBufferSize&&window.performance.setResourceTimingBufferSize(800);try{window.performance.onresourcetimingbufferfull=()=>{let{pathname:e}=window.location,n=(0,i.n)(e)||"no_surface_match";(0,a.A9)("resourceBufferFull",{tags:{surface:n}});let{defaultBufferSize:t}=u();(0,a.A9)("resourceBufferFullSize",{tags:{surface:n,count:t}}),(0,a.or)("resourceBufferFullSize",t,{tags:{surface:n}}),t<1500?window.performance.setResourceTimingBufferSize(1500):d()}}catch(e){}}},c=()=>(0,_.Z)("resource"),m=(0,s.Z)(c),g=c,f=()=>m.get(),h=e=>{e&&m.save(),d()},w=e=>e.length?e.reduce((e,n)=>e+n,0)/e.length:null,v=(e,n=!0)=>{let t=0,r=0,i=w(e.filter(e=>n?"image"===(0,l.i)(e)&&(e.responseEnd||(t+=1),e.transferSize||(r+=1),!!e.responseEnd&&!!e.transferSize):!!e.responseEnd&&!!e.transferSize).map(e=>8*(e.transferSize||0)/((e.responseEnd-e.responseStart)/1e3)/1e3));return n&&(t>0&&(0,a.A9)("images.downloadSpeed.noResponseEnd",{tags:{count:t}},!1),r>0&&(0,a.A9)("images.downloadSpeed.transferSize",{tags:{count:r}},!1)),i},b=e=>{if(!e)return"unknown";let n=Math.floor(e/1e3);return n<1?"0-1":n<5?"1-5":n<10?"5-10":n<20?"10-20":n<40?"20-40":n<80?"40-80":"80_or_above"}},561360:(e,n,t)=>{t.d(n,{Z:()=>r});function r(e){return window?.performance?.getEntriesByType&&window.performance.getEntriesByType(e)||[]}},671481:(e,n,t)=>{let r;t.d(n,{Z:()=>i});let i=(r=window.performance)&&r.clearMarks&&r.clearMeasures&&r.clearResourceTimings&&r.getEntries&&r.getEntriesByName&&r.getEntriesByType&&r.mark&&r.measure&&r.now&&r.setResourceTimingBufferSize?r:null}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/5710-1c8b1e0b8568c35d.mjs.map