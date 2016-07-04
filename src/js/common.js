// $(document).ready(function() {

// 	var mySelect = {
// 		init: function(element) {
// 			this.dom(element)
// 		},
// 		dom: function(element) {
// 			this.item = element;
// 			this.createHtml = this.createHtml(this.item);
// 			this.showList = this.showList(this.item);
// 			this.hideList = this.hideList(this.item);
// 			this.chooseOption = this.chooseOption(this.item);
// 			this.triggerSelect = this.triggerSelect(this.item);

// 			return this.dom;
// 		},
// 		createHtml: function(item) {
// 			var selectName = 'my-select',
// 				selectWrap = item.wrap('<div class="' + selectName + '"></div>'),
// 				selectParent = item.parent('.' + selectName),
// 				selectOption = item.find('option'),
// 				currentOption = item.find('option:selected'),
// 				selectPlaceholder = item.attr('placeholder'),
// 				iconClass = item.data('icon');

// 			selectParent.append($('<div></div>', {class: selectName + '__text', text: selectPlaceholder || currentOption.text() || selectOption.first().text()}));

// 			var selectText = selectParent.find('.' + selectName + '__text');

// 			//add placeholder
// 			if (item.is('[placeholder]')) {
// 				selectText.addClass(selectName + '__text_placeholder');
// 			};

// 			//add arrow
// 			selectParent.append($('<i></i>', {class: selectName + '__icon'}));

// 			var selectIcon = selectParent.find('.' + selectName + '__icon');

// 			if (item.is('[data-icon]')) {
// 				selectIcon.addClass(iconClass);
// 			};

// 			//dropdown
// 			selectParent.append('<ul class="' + selectName + '__list" style="display: none;"></ul>');

// 			var selectList = selectParent.find('.' + selectName + '__list'),
// 				allOptions = [];

// 			selectOption.each(function() {
// 				allOptions.push($(this).text());
// 			});  

// 			for (var i = 0; i < allOptions.length; i++) {

// 				var optionText = allOptions[i];
// 				selectList.append('<li data-value="' + optionText + '" class="' + selectName + '__item"></li>');

// 				var selectItem = selectParent.find('.' + selectName + '__item');

// 				selectItem.eq(i).text(optionText);

// 			};

// 			return this.createHtml;
// 		},
// 		showList: function(item) {
// 			var selectName = 'my-select',
// 				selectText = item.siblings('.' + selectName + '__text');

// 			selectText.click(function(event) {
// 				var selectList = item.siblings('.' + selectName + '__list'),
// 					selectParent = item.parent('.' + selectName),
// 					otherSelects = $('.' + selectName),
// 					otherLists = $('.' + selectName + '__list');

// 				if (selectParent.hasClass('is-active')) {
// 					otherSelects.removeClass('is-active');
// 					otherLists.hide();
// 				} else {
// 					otherSelects.removeClass('is-active');
// 					otherLists.hide();
// 					selectParent.addClass('is-active');
// 					selectList.show();
// 				};

// 				event.stopPropagation();
// 			});

// 			return this.showList;
// 		},
// 		hideList: function(item) {
// 			var selectName = 'my-select',
// 				body = $('body'),
// 				selectParent = item.parent('.' + selectName),
// 				selectList = selectParent.find('.' + selectName + '__list');

// 			body.click(function() {
// 				selectParent.removeClass('is-active');
// 				selectList.hide();
// 			});

// 			return this.hideList;
// 		},
// 		chooseOption: function(item) {
// 			var selectName = 'my-select',
// 				selectParent = item.parent('.' + selectName),
// 				selectList = item.siblings('.' + selectName + '__list');

// 			selectList.find('li').click(function() {
// 				var elText = $(this).data('value'),
// 					selectIn = selectParent.find('select'),
// 					selectText = item.siblings('.' + selectName + '__text');
				
// 				selectText.text($(this).text());
// 				selectList.hide();
// 				selectParent.removeClass('is-active');

// 				if (selectText.hasClass(selectName + '__text_placeholder')) {
// 					selectText.removeClass(selectName + '__text_placeholder');
// 				};

// 				selectIn.find('option').each(function() {
// 					if ($(this).val() == elText) {
// 						$(this).attr('selected', 'selected');
// 					} else {
// 						$(this).removeAttr('selected');
// 					}
// 				});

// 				selectIn.trigger('change');

// 				return false;
				
// 			});

// 			return this.chooseOption;
// 		},
// 		triggerSelect: function(item) {
// 			var selectName = 'my-select',
// 				selectParent = item.parent('.' + selectName),
// 				selectList = item.siblings('.' + selectName + '__list');

// 			item.change(function() {
// 				var elParent = $(this).parents('.' + selectName),
// 					currText = $(this).find('option:selected').text();

// 				elParent.find('.' + selectName + '__text').removeClass(selectName + '__text_placeholder').text(currText);
// 			});

// 			return this.triggerSelect;
// 		}
// 	};

// 	$('.js-my-select').each(function() {
// 		mySelect.init($(this));
// 	});


// 	function plus(a, b) {
// 		a + b;
// 		return a + b;
// 	};

// 	console.log(plus);

// 	var myObj = {
// 		dom: function() {
// 			var name = 'wtsn';
// 			var name2 = 'wtsn2';
// 			var arr = [name, name2]
// 			return arr;
// 		},
// 		init: function() {
// 			var arr = this.dom()
// 			console.log(arr[0]);
// 			// return this.init;
// 		}
// 	};
// 	myObj.init();

// 	var module = (function(pro11) {
// 		console.log(pro11);
// 	});

// 	module(myObj);

// 	var myFunction = function() {
// 		return console.log(arguments);
// 	};

// 	myFunction(10, 'str', true);

// 	console.log(window);

// 	var myFunc = function() {
// 		alert('hi');
// 	};

// 	$('button').click(myFunc)

// });
// var eventsObj = {
// 	addEvent: function(el, type, fn) {
// 		if (typeof addEventListener !== 'undefined') {
// 			el.addEventListener(type, fn, false);
// 		} else if (typeof attachEvent !== 'undefined') {
// 			el.attachEvent('on' + type, fn);
// 		} else {
// 			el['on' + type] = fn;
// 		};
// 	},
// 	removeEvent: function(el, type, fn) {
// 		if (typeof removeEventListener !== 'undefined') {
// 			el.removeEventListener(type, fn, false);
// 		} else if (typeof detachEvent !== 'undefined') {
// 			el.detachEvent('on' + type, fn);
// 		} else {
// 			el['on' + type] = null;
// 		};
// 	},
// 	getTarget: function(event) {
// 		if (typeof event.target !== 'undefined') {
// 			return event.target;
// 		} else {
// 			return event.srcElement;
// 		}
// 	},
// 	preventDefault: function(event) {
// 		if (typeof event.preventDefault !== 'undefined') {
// 			event.preventDefault();
// 		} else {
// 			event.returnValue = false;
// 		}
// 	}
// };

// (function() {

// 	var doc = document,
// 		buttons = doc.getElementsByTagName('button');

// 	var testFunc = function(e) {
// 		alert('Hi there');
// 	};

// 	var changeColor = function(e) {
// 		eventsObj.preventDefault(e);

// 		var elem = eventsObj.getTarget(e),
// 			colorData = elem.getAttribute('data-color');

// 		if (colorData) {
// 			if (e.type === 'click') {
// 				doc.body.className = '';
// 			} else if (e.type === 'mouseover') {
// 				doc.body.className = colorData;
// 			};
// 		};
// 	};

// 	eventsObj.addEvent(doc, 'click', changeColor);
// 	eventsObj.addEvent(doc, 'mouseover', changeColor);

// 	// for (var i = 0, len = buttons.length; i < len; i++) {
// 	// 	eventsObj.addEvent(buttons[i], 'click', changeColor);
// 	// 	// eventsObj.removeEvent(buttons[i], 'click', changeColor);
// 	// }

// })();


// var MYAPP = (function() {

// 	var funcPrivate = function() {
// 		//console.log(this);
// 		return 'private';
// 	};

// 	return {
// 		func: function(a, b) {
// 			//console.log(this);

// 			var that = this;

// 			var helperFunc = function(c, d) {
// 				//console.log(that);
// 				that.multiply = c*d;
// 			};

// 			helperFunc(a, b);

// 			return a + b;
// 		},
// 		funcPublic: funcPrivate
// 	};

// })();

// // console.log(MYAPP.func(2,3));
// // console.log(MYAPP.funcPublic());
// // console.log(MYAPP.multiply);

// // var arr = [3,5];

// // var add = function(a, b) {
// // 	console.log(this.func(10,3));
// // 	return a+b;
// // };

// // var sum = add.apply( MYAPP, arr );

// // console.log(sum);

// var Man = function(name) {
// 	this.name = name;
// 	this.canSpeak = true;

// 	// var priv = '34';

// 	// this.sayHello = function() {
// 	// 	return 'hi, my name is ' + this.name + '. I am ' + priv + ' years.';
// 	// }
// 	// return this;
// };

// Man.prototype.sayHello = function() {
// 	var priv = '34';
// 	return 'hi, my name is ' + this.name + '. I am ' + priv + ' years.';
// };

// var vanya = new Man('Vanya');
// var petr = new Man('Petr');

// // console.log(vanya.name);
// // console.log(vanya.canSpeak);
// // console.log(vanya);
// console.log(vanya.sayHello());
// console.log(petr.sayHello());
// // console.log(petr.priv);


// var MyApp = {
// 	Man: function(name) {
// 		this.name = name;
// 		this.canSpeak = true;
// 	}
// };

// var gena = new MyApp.Man('Gena');

// console.log(gena);


// console.log(gena instanceof MyApp.Man);
// console.log(vanya instanceof Man);

// console.log(vanya.constructor);
// console.log(gena.constructor);


// var myPlugin = function() {

// 	var name,
// 		age;

// 	for (var i = 0; i < arguments.length; i++) {
// 		if (typeof arguments[i] === 'string') {
// 			name = arguments[i];
// 		} else if (typeof arguments[i] === 'number') {
// 			age = arguments[i];
// 		};
// 	};

// 	return {
// 		name: name,
// 		age: age
// 	}
// }

// var plug = new myPlugin(28, 'Vasya');

// console.log(plug);