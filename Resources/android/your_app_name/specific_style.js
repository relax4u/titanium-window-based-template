(function(){
	// for android style.
	$.mixin($$.root, {
		fullscreen: false,
		navBarHidden: true,
		exitOnClose: true     // don't remove
	});
	
	$.mixin($$.window, {
		fullscreen: false,
		navBarHidden: true,
		exitOnClose: false    // don't remove
	});
	
	$.displayEach({
		"480x800": function(){
			$.mixin($$.label, {color: '#0f0'}, true);
		},
		"default": function(){
			$.mixin($$.label, {color: '#00f'}, true);
		}
	});
	
	$.modelEach({
		"X06HT": function(){
			$.mixin($$.label, {font: {fontSize: 30}}, true);
		}
	});
})();
