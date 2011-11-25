/**
 * alias (namespace.style)
 */
var $$ = (your_namespace.style = {});

(function(){
	$$.backgroundColor = '#fff';
	
	$$.root = {
		backgroundColor: $$.backgroundColor
	};
	
	$$.window = {
		backgroundColor: $$.backgroundColor
	};
	
	$$.button = {
		title: L('goto_next'),
		width: 100,
		height: 50
	};
	
	$$.label = {
		font: {fontSize: 20, fontFamily: 'Helvetica Neue'},
		textAlign: 'center',
		width: 'auto',
		height: 'auto'
	};
})();

Ti.include("/your_app_name/specific_style.js");
