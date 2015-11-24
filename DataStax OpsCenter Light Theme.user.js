// ==UserScript==
// @name		DataStax OpsCenter Light Theme
// @author              Marc Tamsky (github: tamsky)
// @namespace	        about:blank
// @version             0.0.1
// @description		make a light background theme for DataStax's OpsCenter UI
// @match        	https://localhost/opscenter/*
// ==/UserScript==

// ::Instructions::
//
// Edit @match line above to reflect the confluence server URL for
// which you want this userscript to be enabled.

// http://commons.oreilly.com/wiki/index.php/Greasemonkey_Hacks/Getting_Started
// http://commons.oreilly.com/wiki/index.php/Greasemonkey_Hacks/Getting_Started#Avoid_Common_Pitfalls  ( Pitfall #10: style )
//
//      var elmFoo = document.getElementById("foo");
//        elmFoo.style.margin = 0;
//        elmFoo.style.padding = 0;
//
// TODO:
//
// html, body {
//     /* background: black; */
// }
// 
// body.ripcord {
//     /* color: #FFF; */
// }    
// 
// 
// .rc_widgets_activities_general {
//     /* color: #ffffff; */
// }
// 
// .rc_widgets_main .opsc_clusters_nav {
//     /* background-color: rgba(56,56,56,1); */
// }
// 
// rect[Attributes Style] {
//     fill: rgb(0, 0, 0);
// }
// 
// .rc_widgets_main .main_header {
//     height: 40px;
//     background: rgba(0,0,0,1);
//     background: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(56,56,56,1) 100%);
// }
// 
// .rc_widgets_cluster_nav ul {
//     background-color: rgba(1,1,1,.8);  /* opacity is .8 -> .3 */
// }
// 
// svg:
// <circle fill="rgb(27, 27, 27)" fill-opacity="1" stroke="none" stroke-opacity="0" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" cx="202" cy="245" r="161.5" fill-rule="evenodd"></circle>
// vs
// <circle fill="rgb(227, 227, 227)" fill-opacity="1" stroke="none" stroke-opacity="0" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" cx="202" cy="245" r="161.5" fill-rule="evenodd"></circle>
// 
// .rc_widgets_clusterhealth {
//     /* background-color: #323232; */
// }
// 
// .rc_dgrid .dgrid-header {
//     background: #000;
// }
// 
// .rc_widgets_datacenter_bulkops {
//     /* background-color: #333333; */
// }
// 
// 

function main() {
    // is there an editor?
    if ( typeof(tinyMCE) == "object") {
	// is it active?
	var ae = tinyMCE.activeEditor;
	// replace shortcuts object with emptyness:
	(ae) ? ae.shortcuts={} : undefined;
   }
}

setTimeout(function(){
    var script = document.createElement('script');
    script.appendChild(document.createTextNode('('+ main + ') ();'));
    (document.body || document.head || document.documentElement).appendChild(script);
    }, 5000);


// For Posterity:  None of the following work for the editor-in-iframe:
//
// setTimeout( function(){ main(); }, 5000);
//
// main();
//
// document.addEventListener("DOMContentLoaded", function() {
//   main();
// });
//
// DEBUG version of last line:
//      (ae) ? ae.shortcuts={} : alert("no hit");
