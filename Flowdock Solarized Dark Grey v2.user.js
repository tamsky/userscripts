// ==UserScript==
// @name          Flowdock Solarized Dark Grey
// @namespace     http://userstyles.org
// @description	  Flowdock style inspired by Solarized Dark color palette designed by Ethan Schoonover.
// @author        ristomatti
// @homepage      https://userstyles.org/styles/125297
// @match         https://www.flowdock.com/*
// @run-at        document-start
// @version       0.20160318134437
// ==/UserScript==
(function() {var css = [
	"/**",
	"* Flowdock Solarized Dark Grey v0.3 (2016-03-18)",
	"*",
	"* https://userstyles.org/styles/125297/flowdock-solarized-dark-grey",
	"* https://github.com/ristomatti/flowdock-solarized-dark",
	"*",
	"* The MIT License (MIT)",
	"* https://opensource.org/licenses/MIT",
	"*",
	"* (c) 2016 Ristomatti Airo <ristomatti@kallio.io>",
	"*",
	"* ",
	"* Solarized dark grey colors",
	"*",
	"*   background0  #141414",
	"*   background1  #212121",
	"*   background2  #3a3a3a",
	"*",
	"* Solarized dark base colors",
	"*",
	"*   base03       #002b36",
	"*   base02       #073642",
	"*   base01       #586e75",
	"*   base00       #657b83",
	"*   base0        #839496",
	"*   base1        #93a1a1",
	"*   base2        #eee8d5",
	"*   base3        #fdf6e3",
	"*",
	"* Solarized accent colors",
	"*",
	"*   yellow       #b58900",
	"*   orange       #cb4b16",
	"*   red          #dc322f",
	"*   magenta      #d33682",
	"*   violet       #6c71c4",
	"*   blue         #268bd2",
	"*   cyan         #2aa198",
	"*   green        #859900",
	"*/",
	"",
//	"/* Common background and text colors */",
//	".chat-message, .inbox-panel, #chat, .flow, #thread, #single {",
//	"	color: #93a1a1 !important;",
//	"	background: #cccccc !important;",
//	"}",
//	"",
	"#tab-bar {",
	"	background: #eeeeee !important;",
	"}",
	"",
	".tab .tab-name {",
	"	background: none;",
	"	color: #93a1a1;",
	"}",
	"",
	"/* Flow tab colors */",
	".flow-list .tab:nth-of-type(1) .tab-avatar { background-color: #6c71c4 !important; }",
	".flow-list .tab:nth-of-type(2) .tab-avatar { background-color: #b58900 !important; }",
	".flow-list .tab:nth-of-type(3) .tab-avatar { background-color: #cb4b16 !important; }",
	".flow-list .tab:nth-of-type(4) .tab-avatar { background-color: #d33682 !important; }",
	".flow-list .tab:nth-of-type(5) .tab-avatar { background-color: #859900 !important; }",
	".flow-list .tab:nth-of-type(6) .tab-avatar { background-color: #dc322f !important; }",
	".flow-list .tab:nth-of-type(7) .tab-avatar { background-color: #2aa198 !important; }",
	".flow-list .tab:nth-of-type(8) .tab-avatar { background-color: #268bd2 !important; }",
	".flow-list .tab:nth-of-type(9) .tab-avatar { background-color: #6c71c4 !important; }",
	".flow-list .tab:nth-of-type(10) .tab-avatar { background-color: #b58900 !important; }",
	".flow-list .tab:nth-of-type(11) .tab-avatar { background-color: #cb4b16 !important; }",
	".flow-list .tab:nth-of-type(12) .tab-avatar { background-color: #d33682 !important; }",
	".flow-list .tab:nth-of-type(13) .tab-avatar { background-color: #859900 !important; }",
	".flow-list .tab:nth-of-type(14) .tab-avatar { background-color: #dc322f !important; }",
	".flow-list .tab:nth-of-type(15) .tab-avatar { background-color: #2aa198 !important; }",
	".flow-list .tab:nth-of-type(16) .tab-avatar { background-color: #268bd2 !important; }",
	"",
	".nav-footer {",
	"	background: none;",
	"}",
	"",
	".tab-list-shadow.bottom {",
	"	bottom: 0;",
	"	background-image: none;",
	"}",
	"",
	".static-header, .floating-header {",
	"	background: #1b1b1b;",
	"	border-bottom: none;",
	"}",
	"",
	"#user-list {",
	"	background-color: #141414 !important;",
	"}",
	"",
	"#toolbar,",
	"#search-form-item,",
	"#inbox-toggle-item {",
	"	background-color: #272727;",
	"	background: #272727;",
	"	border-bottom: 1px solid #333;",
	"}",
	"",
	".right-item-group::before {",
	"	background: none;",
	"}",
	"",
	".right-panel {",
	"	border-left: 1px solid #333;",
	"}",
	"",
	"/* Inbox */",
	"#inbox {",
	"	background-color: #141414;",
	"	border-color: #272727;",
	"}",
	"",
//	"#inbox.detailed ul.inbox-message-list li.inbox-message.message.activity {",
//	"	background-color: #cccccc !important;",
//	"	border-color: #cccccc !important;",
//	"}",
//	"",
	".inbox-message .headline {",
	"	color: #93a1a1 !important;",
	"}",
	"",
	".inbox-message .excerpt {",
	"	color: #586e75 !important;",
	"}",
	"",
	".inbox-message a {",
	"	color: #cb4b16;",
	"}",
	"",
	".inbox-footer-background {",
	"	background: #141414 !important;",
	"}",
	"",
	".inbox-footer-fade {",
	"	background: none;",
	"}",
	"",
	"/* Toolbar */",
	".toolbar-toggle,",
	".toolbar-link,",
	"#search-form-item {",
	"	border: none;",
	"}",
	"",
	".user-name {",
	"	color: #93a1a1;",
	"}",
	"",
	".active .toolbar-toggle {",
	"	background: none;",
	"	color: #eee8d5;",
	"}",
	"",
	".floating-close-button:hover {",
	"	background: #1b1b1b;",
	"}",
	"",
	".close-icon {",
	"	fill: #93a1a1;",
	"}",
	"",
	"/* Chat messages */",
	"#thread .message-form,",
	".message-input,",
	"li.left,",
	"li .input-button {",
	"	color: #93a1a1 !important;",
	"	background: #1b1b1b !important;",
	"	border: none;",
	"}",
	"",
	".expanding-input .message-input {",
	"	background-color: #141414 !important;",
	"}",
	"",
	".message-form,",
	".message-form fieldset {",
	"	background: #272727 !important;",
	"	border: none;",
	"}",
	"",
	".message-form .input-button {",
	"	box-shadow: none;",
	"}",
	"",
	".chat-message,",
	".time-separator {",
	"	border-top: 1px solid #272727 !important;",
	"}",
	"",
	".chat-message.date-separator::before {",
	"	border-top: 1px solid #272727 !important;",
	"	color: #93a1a1 !important;",
	"	background: #1b1b1b;",
	"}",
	"",
	"/* preformatted messages (code) */",
	".chat-message .msg-body code,",
	".chat-message pre.formatted {",
	"	background-color: #212121 !important;",
	"	border: 1px solid #3a3a3a !important;",
	"}",
	"",
	"/* Chat mentions */",
	".tag.mention {",
	"	background: #272727 !important;",
	"	color: #93a1a1 !important;",
	"	border-color: #272727;",
	"}",
	"",
	"/* Chat message links */",
	".chat-message a {",
	"	color: #268bd2 !important; /* blue */",
	"}",
	"",
	"/* Chat own name highlight */",
	".chat-message-list.emphasize-me .me .message-author {",
	"	color: #859900 !important; /* green */",
	"}",
	"",
	"/* New messages title, user typing text */",
	".chat-message .last-read-message-text,",
	".typing-users {",
	"	background: #272727;",
	"	color: #586e75;",
	"}",
	"",
	"/* Message timestamp */",
	".timestamp {",
	"	color: #586e75 !important;",
	"}",
	"",
	".help-message {",
	"	border-top: 1px solid #272727;",
	"	color: #586e75;",
	"}",
	"",
	".tag {",
	"	color: #eee8d5 !important;",
	"	background: none;",
	"	border: none;",
	"}",
	"",
	".keycode {",
	"	border: 1px solid #93a1a1;",
	"}",
	"",
	"/* Thread and inbox tag colors */",
	".thread-status.green {",
	"	background-color: #859900;",
	"}",
	".green.bubble,",
	".dirty-green.bubble {",
	"	color: #859900;",
	"	fill: #859900 !important;",
	"	border-color: #859900;",
	"}",
	".yellow.bubble {",
	"	color: #b58900;",
	"	fill: #b58900 !important;",
	"	border-color: #b58900;",
	"}",
	".thread-status.purple {",
	"	background-color: #6c71c4;",
	"}",
	".purple.bubble {",
	"	fill: #6c71c4 !important;",
	"	color: #6c71c4;",
	"	border-color: #6c71c4;",
	"}",
	".blue.bubble {",
	"	color: #268bd2;",
	"	fill: #268bd2 !important;",
	"	border-color: #268bd2;",
	"}",
	".thread-status.red {",
	"	background-color: #dc322f;",
	"}",
	".red.bubble {",
	"	color: #dc322f;",
	"	fill: #dc322f !important;",
	"	border-color: #dc322f;",
	"}",
	".pink.bubble {",
	"	color: #d33682;",
	"	fill: #d33682 !important;",
	"	border-color: #d33682;",
	"}",
	".orange.bubble {",
	"	color: #cb4b16;",
	"	fill: #cb4b16 !important;",
	"	border-color: #cb4b16;",
	"}",
	".teal.bubble {",
	"	color: #2aa198;",
	"	fill: #2aa198 !important;",
	"	border-color: #2aa198;",
	"}",
	"",
	"/* Scrollbar */",
	"::-webkit-scrollbar {",
	"	max-width: 10px !important;",
	"	max-height: 10px !important;",
	"	background: #181818 !important;",
	"}",
	"::-webkit-scrollbar-track,",
	"::-webkit-scrollbar-corner {",
	"	background: #181818 !important;",
	"}",
	"::-webkit-scrollbar-thumb {",
	"	border-radius: 5px !important;",
	"	background: rgba(80, 80, 80, .6) !important;",
	"}",
	"::-webkit-scrollbar-thumb:hover {",
	"	background: rgba(96, 96, 96, .6) !important;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
