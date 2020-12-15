(()=>{"use strict";var e={866:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(645),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,"/*\r\n\r\nDracula Theme v1.2.0\r\n\r\nhttps://github.com/zenorocha/dracula-theme\r\n\r\nCopyright 2015, All rights reserved\r\n\r\nCode licensed under the MIT license\r\nhttp://zenorocha.mit-license.org\r\n\r\n@author Éverton Ribeiro <nuxlli@gmail.com>\r\n@author Zeno Rocha <hi@zenorocha.com>\r\n\r\n*/\r\n\r\n.css_game-html_editor_block .hljs {\r\n  display: block;\r\n  overflow-x: auto;\r\n  padding: 0.5em;\r\n  background: #282a36;\r\n}\r\n\r\n.css_game-html_editor_block .hljs-keyword,\r\n.css_game-html_editor_block .hljs-selector-tag,\r\n.css_game-html_editor_block .hljs-literal,\r\n.css_game-html_editor_block .hljs-section,\r\n.css_game-html_editor_block .hljs-link {\r\n  color: #8be9fd;\r\n}\r\n\r\n.css_game-html_editor_block .hljs-function .hljs-keyword {\r\n  color: #ff79c6;\r\n}\r\n\r\n.css_game-html_editor_block .hljs,\r\n.css_game-html_editor_block .hljs-subst {\r\n  color: #f8f8f2;\r\n}\r\n\r\n.css_game-html_editor_block .hljs-string,\r\n.css_game-html_editor_block .hljs-title,\r\n.css_game-html_editor_block .hljs-name,\r\n.css_game-html_editor_block .hljs-type,\r\n.css_game-html_editor_block .hljs-attribute,\r\n.css_game-html_editor_block .hljs-symbol,\r\n.css_game-html_editor_block .hljs-bullet,\r\n.css_game-html_editor_block .hljs-addition,\r\n.css_game-html_editor_block .hljs-variable,\r\n.css_game-html_editor_block .hljs-template-tag,\r\n.css_game-html_editor_block .hljs-template-variable {\r\n  color: #f1fa8c;\r\n}\r\n\r\n.css_game-html_editor_block .hljs-comment,\r\n.css_game-html_editor_block .hljs-quote,\r\n.css_game-html_editor_block .hljs-deletion,\r\n.css_game-html_editor_block .hljs-meta {\r\n  color: #6272a4;\r\n}\r\n\r\n.css_game-html_editor_block .hljs-keyword,\r\n.css_game-html_editor_block .hljs-selector-tag,\r\n.css_game-html_editor_block .hljs-literal,\r\n.css_game-html_editor_block .hljs-title,\r\n.css_game-html_editor_block .hljs-section,\r\n.css_game-html_editor_block .hljs-doctag,\r\n.css_game-html_editor_block .hljs-type,\r\n.css_game-html_editor_block .hljs-name,\r\n.css_game-html_editor_block .hljs-strong {\r\n  font-weight: bold;\r\n}\r\n\r\n.css_game-html_editor_block .hljs-emphasis {\r\n  font-style: italic;\r\n}",""]);const a=o},538:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(645),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,'/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0-modified | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n\r\nbody {\r\n\tline-height: 1;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: \'\';\r\n\tcontent: none;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration,\r\ninput[type=search]::-webkit-search-results-button,\r\ninput[type=search]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type="button"], /* 1 */\r\ninput[type="reset"],\r\ninput[type="submit"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible;  /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type="checkbox"],\r\ninput[type="radio"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type="search"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type="search"]::-webkit-search-cancel-button,\r\ninput[type="search"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}',""]);const a=o},402:(e,n,r)=>{r.d(n,{Z:()=>d});var t=r(645),o=r.n(t),a=r(667),i=r.n(a),s=r(527),l=o()((function(e){return e[1]})),c=i()(s.Z);l.push([e.id,"@font-face {\r\n    font-family: 'Mark';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    src: url("+c+") format(\"truetype\");\r\n}\r\n\r\n/* width */\r\nbody ::-webkit-scrollbar {\r\n    width: 10px;\r\n  }\r\n  \r\n/* Track */\r\nbody ::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px rgb(68, 71, 105);\r\n    border-radius: 10px;\r\n}\r\n  \r\n/* Handle */\r\nbody ::-webkit-scrollbar-thumb {\r\n    background: rgb(61, 12, 153);\r\n    /* border-radius: 10px; */\r\n}\r\n\r\n.html-popup {\r\n    position: fixed;\r\n}\r\n\r\n.body {\r\n    font-family: 'Mark';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    background-color: #08162B;\r\n    color: white;\r\n}\r\n\r\n.header {\r\n    padding: 51px 70px 30px 70px;\r\n}\r\n\r\n.header-content {\r\n    max-width: 1920px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.header-logo_name {\r\n    margin-left: 10px;\r\n}\r\n\r\n.header-task {\r\n    font-family: \"Mark\";\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    font-size: 60px;\r\n    line-height: 91px;\r\n}\r\n\r\n.burger-wrapper {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    width: 152px;\r\n    z-index: 1000;\r\n}\r\n\r\n.burger-btn {\r\n    height: 48px;\r\n    width: 44px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.burger-menu {\r\n    border-radius: 5px;\r\n    width: 44px;\r\n    height: 6px;\r\n    background: white;\r\n}\r\n\r\n.burger-menu::before,\r\n.burger-menu::after {\r\n    content: '';\r\n    position: absolute;\r\n    border-radius: 5px;\r\n    width: 44px;\r\n    height: 6px;\r\n    background: white;\r\n    transition: 0.5s;\r\n}\r\n\r\n.burger-menu::before {\r\n    transform: translateY(-15px);\r\n}\r\n\r\n.burger-menu::after {\r\n    transform: translateY(15px);\r\n}\r\n\r\n\r\n/* Animation */\r\n.burger-open .burger-menu {\r\n    background: transparent;\r\n}\r\n\r\n.burger-open .burger-menu::before {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.burger-open .burger-menu::after {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.burger-list {\r\n    z-index: 800;\r\n    position: fixed;\r\n    top: 0;\r\n    right: -450px;\r\n    width: 450px;\r\n    background-color: black;\r\n    transition: 1s;\r\n    overflow-y: scroll;\r\n    max-height: 100vh;\r\n}\r\n\r\n.burger-open {\r\n    overflow: hidden;\r\n}\r\n\r\n.burger-open .burger-list {\r\n    right: 0px;\r\n}\r\n\r\n.burger-list__chooser {\r\n    font-size: 40px;\r\n    line-height: 51px;\r\n    padding: 68px 0px 19px 36px;\r\n}\r\n\r\n.burger-list__level {\r\n    font-size: 30px;\r\n    line-height: 45px;\r\n    padding-left: 77px;\r\n    /* margin-bottom: 18px; */\r\n    display: block;\r\n    background: transparent;\r\n    border: none;\r\n    color: white;\r\n    text-align: left;\r\n    width: 100%;\r\n}   \r\n\r\n.burger-list__level:hover {\r\n    background-color: rgb(45, 46, 49);\r\n}\r\n\r\n.burger-list__level_solved {\r\n    color: #00FF47;\r\n}\r\n\r\n.burger-list__level_solved-with-help {\r\n    color: #FFB801;\r\n}\r\n\r\n.burger-list__level-current_task {\r\n    background-color: rgb(29, 31, 61);\r\n    width: 100%;\r\n}\r\n\r\n.burger-list__level-current_task:hover {\r\n    background-color: rgb(26, 29, 77);\r\n}\r\n\r\n.resetButton {\r\n    font-size: 30px;\r\n    line-height: 38px;\r\n    padding-left: 60px;\r\n    background: transparent;\r\n    border: none;\r\n    color: white;\r\n    text-align: left;\r\n    width: 100%;\r\n    margin-top: 20px;\r\n}\r\n\r\n.resetButton:hover {\r\n    background-color: rgb(148, 48, 148);\r\n}\r\n\r\n.css-game-info {\r\n    display: flex;\r\n    max-width: 1302px;\r\n    width: 68%;\r\n    margin: 0 auto;\r\n    justify-content: space-between;\r\n}\r\n\r\n.css_game-cards {\r\n    width: 47%;\r\n    margin-bottom: 41px;\r\n    height: 170px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: .5s;\r\n    align-items: flex-end;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.css_game-task_description {\r\n    width: 47%;\r\n}\r\n\r\n.css_game-content {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    max-width: 1302px;\r\n    width: 68%;\r\n}\r\n.css_game-left_part {\r\n    width: 47%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.imgContent {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    width: 100%;\r\n}\r\n\r\n.img-card {\r\n    cursor: pointer;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    max-width: 134px;\r\n}\r\n\r\n.img-card:hover {\r\n    background: beige;\r\n    border-radius: 10%;\r\n}\r\n\r\n.imgUnderline {\r\n    width: 100%;\r\n    height: 1px;\r\n    background: white;\r\n    margin: 0;\r\n    margin-top: 10px;\r\n}\r\n\r\n.css_game-css_editor_name {\r\n    height: 70px;\r\n    border-radius: 41px 41px 0 0;\r\n    background-color: #2B3544;\r\n    text-align: center;\r\n    line-height: 70px;\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n    user-select: none;\r\n    position: relative;\r\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n}\r\n\r\n.css_game-hint {\r\n    position: absolute;\r\n    right: 35px;\r\n    cursor: pointer;\r\n}\r\n\r\n.css_game-css_editor_block {\r\n    border-radius: 0 0 41px 41px;\r\n    background-color: #f0f0f0;\r\n    color: #444;\r\n    height: 450px;\r\n    width: 100%;\r\n    border: none;\r\n    padding: 0;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.css_game-textarea {\r\n    border: none;\r\n    padding: 8px;\r\n    padding-top: 15px;\r\n    \r\n}\r\n\r\n.css_editor__default-text {\r\n    padding-left: 9px;\r\n}\r\n\r\n.css_editor__default-text-text {\r\n    display: block;\r\n    padding-left: 30px;\r\n}\r\n\r\n.css_game-right_part {\r\n    width: 47%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.css_game-task_description {\r\n    margin-bottom: 41px;\r\n    height: 170px;\r\n    font-weight: 800;\r\n    font-size: 40px;\r\n    line-height: 51px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.css_game-html_editor_name {\r\n    height: 70px;\r\n    border-radius: 41px 41px 0 0;\r\n    background-color: #2B3544;\r\n    text-align: center;\r\n    line-height: 70px;\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n    user-select: none;\r\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n}\r\n\r\n.css_game-html_editor_block {\r\n    border-radius: 0 0 41px 41px;\r\n    background-color: #282a36;\r\n    height: 450px;\r\n    width: 100%;\r\n    border: none;\r\n    padding: 0;\r\n}\r\n\r\n.footer {\r\n    padding: 27px;\r\n    padding-top: 46px;\r\n    margin: 0 auto;\r\n    max-width: 1500px;\r\n    width: 80%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.footer__year {\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n    line-height: 38px;\r\n    width: 129px;\r\n    text-align: right;\r\n    line-height: 49px;\r\n}\r\n\r\n.overlay {\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 500;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.burger-open .overlay {\r\n    cursor: pointer;\r\n    display: block;\r\n}\r\n\r\n.wrongSelector {\r\n    animation: wrongAnswer 1s linear;\r\n}\r\n\r\n@keyframes wrongAnswer {\r\n    10% {\r\n        transform: translateX(10px) scaleX(0.98);\r\n    }\r\n    30% {\r\n        transform: translateX(-10px) scaleX(0.98);\r\n    }\r\n    50% {\r\n        transform: translateX(10px) scaleX(0.98);\r\n    }\r\n    70% {\r\n        transform: translateX(-10px) scaleX(0.98);\r\n    }\r\n    90% {\r\n        transform: translateX(10px) scaleX(0.98);\r\n    }\r\n}\r\n\r\n.target {\r\n    animation: target 1000ms ease infinite;\r\n}\r\n\r\n@keyframes target {\r\n    0% {\r\n        transform: scale(1.1, 0.9);\r\n    }\r\n    \r\n    20% {\r\n        transform: scale(0.85, 1.15);\r\n    }\r\n\r\n    70% {\r\n        transform: translateY(-0.5vmin);\r\n    }\r\n\r\n    100% {\r\n        transform: scale(1.1, 0.9);\r\n    }\r\n}\r\n\r\n.border {\r\n    animation: border 1000ms ease;\r\n}\r\n\r\n@keyframes border {\r\n    0% {\r\n        background-color: seagreen;\r\n        border-radius: 10%;\r\n    }\r\n\r\n    100% {\r\n        background-color: transparent;\r\n        border-radius: 10%;\r\n    }\r\n}\r\n\r\n.card-completed {\r\n    animation: spin 1s linear;\r\n}\r\n\r\n@keyframes spin {\r\n    100% {\r\n        transform:rotate(360deg);\r\n        width: 0;\r\n        height: 0;\r\n    }\r\n}\r\n\r\n.imageSelectedViaHTML {\r\n    background: beige;\r\n    border-radius: 10%;\r\n}\r\n\r\n.html > span {\r\n    line-height: 25px;\r\n}\r\n\r\n.highlightTag .hljs-string,\r\n.highlightTag .hljs-name,\r\n.highlightTag {\r\n    color: #214a97 !important;\r\n}\r\n\r\n.htmlElemOver {\r\n    display: flex;\r\n    line-height: 25px;\r\n    padding-left: 23px;\r\n}\r\n\r\n.htmlElemOver:hover,\r\n.htmlElemOver:hover .hljs-string,\r\n.htmlElemOver:hover .hljs-name {\r\n    color: #214a97;\r\n    cursor: pointer;\r\n};\r\n\r\n@media (max-width: 950px) {\r\n    .css_game-task_description {\r\n        font-size: 32px;\r\n    }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .header {\r\n        padding: 51px 20px 30px 20px;\r\n    }\r\n\r\n    .header-task_number {\r\n        font-size: 40px;\r\n    }\r\n\r\n    .burger-list {\r\n        width: 400px;\r\n    }\r\n\r\n    .header-logo_name {\r\n        display: none;\r\n    }\r\n\r\n    .burger-wrapper {\r\n        width: 56px;\r\n    }\r\n\r\n    .css-game-info {\r\n        width: 90%;\r\n    }\r\n\r\n    .css_game-task_description {\r\n        font-size: 32px;\r\n    }\r\n    \r\n    .img-card {\r\n        width: 40%;\r\n    }\r\n\r\n    .css_game-content {\r\n        width: 90%;\r\n    }\r\n\r\n    .css_game-css_editor_name {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .css_game-html_editor_name {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .css_game-task_description {\r\n        font-size: 30px;\r\n    }\r\n}",""]);const d=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);t&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},527:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/fonts/Mark-Regular.ttf"},379:(e,n,r)=>{var t,o=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),a=[];function i(e){for(var n=-1,r=0;r<a.length;r++)if(a[r].identifier===e){n=r;break}return n}function s(e,n){for(var r={},t=[],o=0;o<e.length;o++){var s=e[o],l=n.base?s[0]+n.base:s[0],c=r[l]||0,d="".concat(l," ").concat(c);r[l]=c+1;var m=i(d),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(a[m].references++,a[m].updater(h)):a.push({identifier:d,updater:p(h,n),references:1}),t.push(d)}return t}function l(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var a=r.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var c,d=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function m(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function h(e,n,r){var t=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var g=null,u=0;function p(e,n){var r,t,o;if(n.singleton){var a=u++;r=g||(g=l(n)),t=m.bind(null,r,a,!1),o=m.bind(null,r,a,!0)}else r=l(n),t=h.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var o=i(r[t]);a[o].references--}for(var l=s(e,n),c=0;c<r.length;c++){var d=i(r[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=l}}}}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,r),o.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e=r(379),n=r.n(e),t=r(538);n()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var o=r(402);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var a=r(866);n()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const i=[{level:1,name:"A",elements:[{name:"wizard"},{name:"witch"}],description:"Give power to the wizard to defeat the witch",target:[0],hint:"wizard"},{level:2,name:"B",elements:[{name:"deer"},{name:"fox"},{name:"crow"}],description:"Choose a fox",target:[1],hint:"fox"},{level:3,name:"A, B",elements:[{name:"dragon"},{name:"castle"},{name:"phoenix"}],description:"Scare these creatures away from the castle with people",target:[0,2],hint:"dragon, phoenix"},{level:4,name:".class",elements:[{name:"goblin",attributes:{class:["monster"]}},{name:"princess"},{name:"giant",attributes:{class:["monster"]}},{name:"ogre",attributes:{class:["monster"]}}],description:"Save the princess from enemies by killing them",target:[0,2,3],hint:".monster"},{level:5,name:"#id",elements:[{name:"king"},{name:"unicorn"},{name:"cyclops"},{name:"cyclops",attributes:{id:["cylo"]}},{name:"cyclops"}],description:"Help the king kill the cyclops in the center",target:[3],hint:"#cylo"},{level:6,name:"*",elements:[{name:"tin-man"},{name:"tin-man"},{name:"tin-man"},{name:"tin-man"},{name:"tin-man"},{name:"tin-man"},{name:"tin-man"},{name:"knight"},{name:"knight"},{name:"knight"},{name:"knight"},{name:"knight"},{name:"knight"},{name:"knight"}],description:"Gather your army for battle",target:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],hint:"*"},{level:7,name:"[atrib]",elements:[{name:"snail"},{name:"rabbit",attributes:{hungry:["true"]}},{name:"horse",attributes:{hungry:["true"]}}],description:"Choose a hungry animals",target:[1,2],hint:'[hungry="true"]'},{level:8,name:"tag[atrib]",elements:[{name:"hedgehog",img:"hedgehog(sad)"},{name:"hedgehog",attributes:{happiness:["max"]}},{name:"hedgehog",img:"hedgehog(sad)"}],description:"Choose a happy hedgehog",target:[1],hint:"hedgehog[happiness]"},{level:9,name:'tag[atrib="val"]',elements:[{name:"hedgehog",img:"hedgehog(sad)",attributes:{happiness:["min"]}},{name:"hedgehog",attributes:{happiness:["max"]}},{name:"hedgehog",img:"hedgehog(sad)",attributes:{happiness:["min"]}}],description:"Choose a happy hedgehog",target:[1],hint:'hedgehog[happiness="max"]'},{level:10,name:":first-child",elements:[{name:"pirate"},{name:"pig"},{name:"pirate"},{name:"pig"},{name:"pirate"}],description:"Choose the first pirate",target:[0],hint:"pirate:first-child"},{level:11,name:":last-child",elements:[{name:"genie"},{name:"genie"},{name:"fairy"},{name:"fairy"},{name:"genie"}],description:"Choose the last genie",target:[4],hint:"genie:last-child"},{level:12,name:":nth-child(n)",elements:[{name:"vampire"},{name:"robin-hood"},{name:"vampire"},{name:"gnome"}],description:"Choose a second vampire",target:[2],hint:"vampire:nth-child(3)"},{level:13,name:":first-of-type",elements:[{name:"mermaid"},{name:"tower"},{name:"scarecrow"},{name:"tower"}],description:"Select the first tower",target:[1],hint:"tower:first-of-type"},{level:14,name:":last-of-type",elements:[{name:"orange"},{name:"lemon"},{name:"watermelon"},{name:"lemon"},{name:"lemon"},{name:"orange"}],description:"Choose the last lemon",target:[4],hint:"lemon:last-of-type"},{level:15,name:":nth-of-type(n)",elements:[{name:"gnome"},{name:"excalibur"},{name:"gnome"},{name:"cauldron"}],description:"Select the second gnome",target:[2],hint:"gnome:nth-of-type(2)"},{level:16,name:":nth-of-type(n+1)",elements:[{name:"orange"},{name:"orange"},{name:"orange"},{name:"orange"},{name:"orange"}],description:"Choose the odd fruits",target:[0,2,4,6,8],hint:"orange:nth-of-type(2n+1)"},{level:17,name:":nth-last-of-type(n+1)",elements:[{name:"pear"},{name:"pear"},{name:"pear"},{name:"pear"},{name:"pear"},{name:"pear"}],description:"Choose the odd pears from the end",target:[1,3,5],hint:"pear:nth-last-of-type(2n+1)"},{level:18,name:":nth-last-of-type(n)",elements:[{name:"mad-hatter"},{name:"tower"},{name:"lion"},{name:"crystal-ball"}],description:"Select the first tower",target:[1],hint:"tower:first-of-type"},{level:19,name:":nth-last-child(n)",elements:[{name:"glass-shoes"},{name:"poison"},{name:"poisonous"},{name:"crystal-ball"}],description:"Select the poison",target:[1],hint:"poison:nth-last-child(3)"},{level:20,name:":not()",elements:[{name:"cloud",img:"storm"},{name:"cloud",img:"storm"},{name:"cloud",img:"rainy",attributes:{id:["rain"]}},{name:"cloud",img:"storm"},{name:"cloud",img:"storm"}],description:"Choose all the clouds with lightning",target:[0,1,3,4],hint:"cloud:not(#rain)"}],s=()=>{document.body.classList.toggle("burger-open")},l=e=>{document.querySelector(`[data-level="${e}"]`).classList.toggle("burger-list__level-current_task")},c=e=>{const n=e.target.closest(".htmlElemOver"),r=(e=>{const n=e.target.closest(".htmlElemOver"),r=document.querySelector(".html").childNodes;let t=0;for(const e of r)if("DIV"===e.tagName){if(e===n)return t;t+=1}return null})(e),t=document.querySelector(".imgContent").childNodes[r];t.classList.add("imageSelectedViaHTML");const o=t.getBoundingClientRect(),a=Math.round(o.top),i=Math.round(o.left),s=document.createElement("div");s.innerText=n.innerText,s.classList.add("html-popup"),s.classList.add("html"),s.style.left=`${i+30}px`,s.style.top=a-50+"px",hljs.highlightBlock(s),document.body.appendChild(s)},d=()=>{Array.from(document.querySelector(".imgContent").childNodes).forEach((e=>{e.classList.remove("imageSelectedViaHTML")})),document.querySelectorAll(".html-popup").forEach((e=>{e.remove()}))};let m=!1;async function h(e){if(e.preventDefault(),m)return;const n=localStorage.getItem("lastLevel");let{hint:r}=i[n-1];m=!0,document.querySelector(".css_game-hint"),r=r.split("");const t=document.querySelector(".css");t.innerText="",await async function(e,n){for(let r=0;r<e.length;r++)await n(e[r])}(r,(async e=>{t.innerHTML+=e,await new Promise((e=>setTimeout(e,150)))})),(()=>{const e=localStorage.getItem("lastLevel"),n=document.querySelector(`[data-level="${e}"]`);n.classList.contains("burger-list__level_solved")||n.classList.add("burger-list__level_solved-with-help")})(),hljs.highlightBlock(document.querySelector(".css")),m=!1}const g=()=>{[...document.querySelectorAll(".htmlElemOver")].forEach((e=>{e.classList.remove("highlightTag")})),document.querySelectorAll(".html-popup").forEach((e=>{e.remove()}))},u=(e=!1)=>{e||(document.querySelector(".overlay").addEventListener("click",s),(()=>{const e=document.querySelector(".burger-list");i.forEach((n=>{const r=document.createElement("button");r.classList.add("burger-list__level"),r.setAttribute("data-level",n.level),r.innerHTML=`Level ${n.level} - ${n.name}`,e.appendChild(r)}));const n=document.createElement("button");n.innerText="Reset progress",n.classList.add("resetButton"),n.addEventListener("click",p),e.appendChild(n)})());let n=localStorage.getItem("lastLevel");var r,t;if(n||(n=1,localStorage.setItem("lastLevel",1)),r=n,t=i.length,document.querySelector(".header-task_number").innerHTML=`Task ${r}/${t}`,(e=>{const n=document.querySelector(".css_game-cards");n.innerHTML="";const r=document.createElement("div");r.classList.add("imgContent"),e.elements.forEach(((n,t)=>{const o=document.createElement("img");n.img?o.src=`./assets/images/fairy_tale/${n.img}.png`:o.src=`./assets/images/fairy_tale/${n.name}.png`,o.alt="img",o.style.width=70/e.elements.length+"%",o.classList.add("img-card"),o.setAttribute("data-id",t),"*"===e.name&&(o.style.width=70/(e.elements.length/2)+"%"),-1!==e.target.indexOf(t)&&o.classList.add("target"),r.appendChild(o)})),n.appendChild(r);const t=document.createElement("hr");t.classList.add("imgUnderline"),n.appendChild(t)})(i[n-1]),(e=>{const n=document.querySelector(".css_game-task_description");n.innerHTML="";const r=document.createElement("p");r.innerHTML=e.description,n.appendChild(r)})(i[n-1]),(e=>{const n=document.querySelector(".html");n.innerHTML="",n.innerText+="<fairytale>",e.elements.forEach((e=>{if(e.attributes){const r=[];Object.entries(e.attributes).forEach((e=>{r.push(`${e[0]} ="${e[1].join(" ")}"`)})),n.innerText+=`<${e.name} ${r.join(" ")}>`}else n.innerText+=`<${e.name}>`;n.innerText+=`</${e.name}>`})),n.innerText+="</fairytale>"})(i[n-1]),(e=>{const n=document.querySelector(".css_game-html_editor"),r=document.querySelector("fairytale");r&&r.remove();const t=document.createElement("fairytale");t.style.display="none",t.classList.add("pseudoCode"),e.elements.forEach((e=>{const n=document.createElement(e.name);e.attributes&&Object.entries(e.attributes).forEach((e=>{n.setAttribute(e[0],e[1].join(" "))})),t.appendChild(n)})),n.appendChild(t)})(i[n-1]),l(n),document.querySelector(".css").innerHTML="Type selector here..",e||document.querySelector(".css_game-hint").addEventListener("click",h),"right-selector"===e){const e=document.querySelector(".css");e.innerText="",e.focus()}const o=document.querySelector(".html");hljs.highlightBlock(o),(()=>{const e=document.querySelector(".html"),n=document.querySelectorAll(".hljs-tag");for(let r=1;r<n.length-1;r+=2){const t=document.createElement("div"),o=[...n[r].childNodes,...n[r+1].childNodes],a=document.createElement("span");a.classList.add("hljs-tag"),n[r].remove(),n[r+1].remove(),o.forEach((e=>{a.appendChild(e)})),t.appendChild(a),t.classList.add("htmlElemOver"),e.appendChild(t)}e.appendChild(n[n.length-1])})(),document.querySelectorAll(".htmlElemOver").forEach((e=>{e.addEventListener("mouseover",c),e.addEventListener("mouseout",d)})),document.querySelector(".imgContent").childNodes.forEach((e=>{e.addEventListener("mouseover",(()=>(e=>{const{id:n}=e.dataset,r=document.querySelectorAll(".htmlElemOver");r[n].classList.add("highlightTag");const t=e.getBoundingClientRect(),o=Math.round(t.top),a=Math.round(t.left),i=document.createElement("div");i.innerText=r[n].innerText,i.classList.add("html-popup"),i.classList.add("html"),i.style.left=`${a+30}px`,i.style.top=o-50+"px",hljs.highlightBlock(i),document.body.appendChild(i)})(e))),e.addEventListener("mouseout",g)}))},p=()=>{[...document.querySelectorAll(".burger-list__level")].forEach((e=>{e.classList.remove("burger-list__level_solved"),e.classList.remove("burger-list__level_solved-with-help"),e.classList.remove("burger-list__level-current_task")})),localStorage.clear(),u("reset"),document.body.classList.toggle("burger-open")},b=()=>{document.querySelector(".imgContent").childNodes.forEach((e=>{e.classList.add("card-completed"),setTimeout((()=>{e.classList.remove("card-completed")}),1e3)}))},f=e=>{const n=e.target.getAttribute("data-level");l(Number(localStorage.getItem("lastLevel"))),localStorage.setItem("lastLevel",n),u("burger"),s()},x=e=>{document.querySelectorAll(".withSelector").forEach((e=>{e.remove()}));const n=document.createElement("style");if(n.classList.add("withSelector"),n.innerHTML=`fairytale ${e} { content: "marked"; }`,document.getElementsByTagName("head")[0].appendChild(n),(()=>{const e=document.querySelector("fairytale").childNodes,n=document.querySelector(".imgContent").childNodes;for(let r=0;r<e.length;r+=1)if('"marked"'===getComputedStyle(e[r]).content!==n[r].classList.contains("target"))return!1;return!0})()){const e=Number(localStorage.getItem("lastLevel"));if(document.querySelector(`[data-level="${e}"]`).classList.add("burger-list__level_solved"),(()=>{let e=!1;return document.querySelectorAll(".burger-list__level").forEach((n=>{const r=n.classList.contains("burger-list__level_solved"),t=n.classList.contains("burger-list__level_solved-with-help");!1===r&&!1===t&&(e=!0)})),!e})())return b(),void setTimeout((()=>{alert("Вы прошли игру")}),1e3);const n=i.length===e;if(b(),n){r=Number(localStorage.getItem("lastLevel")),document.querySelector(`[data-level="${r}"]`).classList.toggle("burger-list__level-current_task"),localStorage.setItem("lastLevel",e+1),b(),setTimeout((()=>{u("right-selector")}),1e3);const n=document.querySelector(".html");hljs.highlightBlock(n)}}else(()=>{const e=document.querySelector("fairytale").childNodes,n=document.querySelector(".imgContent").childNodes;let r=!1;for(let t=0;t<n.length;t+=1)'"marked"'===getComputedStyle(e[t]).content&&(n[t].classList.add("border"),r=!0,setTimeout((()=>{n[t].classList.remove("border")}),1e3));if(!r){const e=document.querySelector(".imgContent");e.classList.add("wrongSelector"),setTimeout((()=>{e.classList.remove("wrongSelector")}),1e3)}})(),(()=>{const e=document.querySelector(".css");e.click(),e.focus()})();var r},y=()=>{const e=document.querySelector(".css"),n=e.innerText;hljs.highlightBlock(e),x(n)},v=e=>{const n=e.target;"Type selector here.."===n.innerText&&(n.innerText="")},_=()=>{document.body.classList.toggle("burger-open")};document.body.addEventListener("keypress",(e=>{const n=document.querySelector(".css");if("Enter"===e.key){const e=document.querySelector(".css_game-textarea");e.removeEventListener("blur",y),n.blur(),e.addEventListener("blur",y),y()}})),u(),(()=>{hljs.configure({languages:["css"]}),document.querySelector(".burger-btn").addEventListener("click",_);const e=document.querySelector(".css_game-textarea");e.addEventListener("click",v),e.addEventListener("blur",y)})(),document.querySelectorAll(".burger-list__level").forEach((e=>{e.addEventListener("click",f)}))})()})();