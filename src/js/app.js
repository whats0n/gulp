//=include lib/jquery.js
// = 'include' lib/svgxuse.min.js
//=include common.js

$(document).ready(function() {
	(function() {
		//elements
		var appSlider = $('.js-slider'),
			appRow = $('.js-slider-row'),
			slide = $('.slide'),
			btn = $('.js-slider-btn'),
			slides = slide.length;
		//initial styles
		slide.css({
			width: appSlider.outerWidth()
		});

		var slideWidth = slide.outerWidth(),
			rowPos = -slides*slideWidth+3*slideWidth,
			rowWidth = appSlider.outerWidth()*slides;

		appRow.css({
			'transform': 'translate3d(' + rowPos + 'px, 0, 0)',
			'width': rowWidth
		});

	

		btn.click(function() {
			if (!$(this).hasClass('is-active')) {
				var id = $(this).data('num'),
					curSlide = slide.data('id', id),
					curSlideIndex = $('.slide[data-id="' + id + '"]').index(),
					firstEl = appSlider.find('.slide').first(),
					lastEl = appSlider.find('.slide').last(),
					oldRowPos = rowPos,
					oldWidth = rowWidth,
					clones = slides - (slides - curSlideIndex)
					dur = curSlideIndex*400;

				btn.removeClass('is-active');
				$(this).addClass('is-active');
				console.log('index: ' + curSlideIndex);

				if (clones > 1) {
					newRowPos = rowPos;
					rowWidth = rowWidth + slideWidth*clones;
					rowPos = rowPos - slideWidth*clones;

					for (var i = 0; i < 1; i++) {
					// for (var i = 0; i < clones; i++) {
						console.log('item: ' + (clones - i));
						// lastEl.after(slide.eq(clones - i).clone().addClass('slide-clone'));
						lastEl.after($('.slide').eq(1).clone().addClass('slide-clone'));
						lastEl.after($('.slide').eq(0).clone().addClass('slide-clone'));
					};
				} else {
					newRowPos = rowPos + slideWidth;
					rowWidth = rowWidth;
				};

				console.log('clones: ' + clones);


				appRow.prop('Counter', rowPos).animate({
					Counter: newRowPos,
				}, {
					step: function(now, fx) {
						$(this).css({
							'transform': 'translate3d(' + now + 'px, 0, 0)',
							'width': rowWidth
						});
					},
					duration: dur,
					easing: 'linear',
					queue: false,
					complete: function() {
						$(this).css({
							'transform': 'translate3d(' + oldRowPos + 'px, 0, 0)',
							'width': oldWidth
						});
						$('.slide-clone').remove();
						for (var i = 0; i < curSlideIndex; i++) {
							console.log('i: ' + i);
							
							lastEl.after($('.slide').eq(0));
							lastEl = appSlider.find('.slide').last();
						};
						rowPos = oldRowPos;
						rowWidth = oldWidth;
					}
				});
			};
		});
	})();
});