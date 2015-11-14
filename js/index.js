(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };
function em1() {
	var c = "ftsb/hlh{Ahnbjm/dpn";
	var addr = "mailto:";
	for(var i = 0; i < c.length; i++)
		addr += String.fromCharCode(c.charCodeAt(i) - 1);
	location.href=addr;
}

$(document).ready(function() {
r = function() {
if($(window).width() >= 960) {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-963.png' : 'images/logo-642.png') : 'images/logo-321.png');
} else {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-549.png' : 'images/logo-366.png') : 'images/logo-183.png');
}
};
$(window).resize(r);
r();

});