(function(){
	your_namespace.ui = {};
	
	var nav = null;
	
	your_namespace.ui.createApplicationWindow = function(){
		Ti.UI.setBackgroundColor('#000');
		
		return $.osEach({
			iphone: function(){
				nav = Ti.UI.iPhone.createNavigationGroup({
					window: your_namespace.ui.createRootWindow()
				});
				var win = Ti.UI.createWindow({
					backgroundColor: $$.backgroundColor
				});
				win.add(nav);
				return win;
			},
			android: function(){
				return your_namespace.ui.createRootWindow();
			}
		})
	};
	
	your_namespace.ui.open = function(win, properties) {
		properties = properties || {};
		
		$.osEach({
			iphone: function(){
				nav.open(win, properties);
			},
			android: function(){
				win.open(properties);
			}
		});
	};
	
	your_namespace.ui.close = function(win) {
		$.osEach({
			iphone: function(){
				nav.close(win);
			},
			android: function(){
				win.close();
			}
		});
	};
	
	your_namespace.ui.createRootWindow = function(){
		var win = Ti.UI.createWindow($.mixin({
			title: L('first_window')
		}, $$.root));
		
		var button = Ti.UI.createButton($$.button);
		button.addEventListener('click', function(){
			var next = Ti.UI.createWindow($.mixin({
				title: L('next_window')
			}, $$.window));
			
			var label = Ti.UI.createLabel($.mixin({
				text: String.format("%s(%s) - %dx%d", $.osname, $.model, $.width, $.height)
			}, $$.label));
			next.add(label);
			
			your_namespace.ui.open(next);
		});
		win.add(button);
		
		return win;
	};
})();
