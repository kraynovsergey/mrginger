(function() {
	'use strict';

	const lazyLoadInstance = new LazyLoad();

	const header = document.querySelector('.header')
	if ( header ) {
		window.addEventListener('scroll', () => {
			document.documentElement.scrollTop > 50 ?
				header.classList.add('_scroll') : header.classList.remove('_scroll');
		});
	}

	const dataPrevent = document.querySelectorAll('[data-prevent]');
	if ( dataPrevent.length > 0 ) {
		dataPrevent.forEach(item => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
			})
		});
	}

	const lastMenu = document.querySelectorAll('.nav__lastmenu');
	if ( lastMenu.length > 0 ) {
		lastMenu.forEach(item => {
			window.addEventListener('DOMContentLoaded', () => {
				lastMenuSizes(item);
			});
			window.addEventListener('resize', () => {
				lastMenuSizes(item);
			})
		});

		function lastMenuSizes(item) {
			let listWidth = item.closest('.nav__submenu-list').offsetWidth,
				containerWidth = item.closest('.nav__submenu-scroll').offsetWidth,
				listHeight = item.closest('.nav__submenu-list').offsetHeight;

			item.style.width = +containerWidth - +listWidth - 70 + 'px';
			item.style.height = +listHeight + 70 + 'px';
		}
	}

	const dataToggleAccordion = document.querySelectorAll('[data-toggle-accordion]');
	if ( dataToggleAccordion.length > 0 ) {
		dataToggleAccordion.forEach(item => {
			item.addEventListener('click', () => {
				let parent = item.getAttribute('data-toggle-accordion');
				if ( item.hasAttribute('data-toggle-accordion-mobile') ) {
					if (document.documentElement.clientWidth > 701 ) {
						acc(item, parent);
					}
				} else {
					acc(item, parent);
				}

				function acc(item,parent) {
					item.closest(parent).querySelectorAll('[data-toggle]').forEach(subitem => {
						subitem.classList.remove('_active');
					});
				}
			});
		});
	}

	const dataToggle = document.querySelectorAll('[data-toggle]');
	if ( dataToggle.length > 0 ) {
		dataToggle.forEach(item => {
			item.addEventListener('click', () => {
				item.classList.toggle('_active');
			});
		});
	}

	const navLastmenuList = document.querySelectorAll('.nav__lastmenu-list');
	if ( navLastmenuList.length > 0 ) {
		navLastmenuList.forEach(item => {
			if ( item.querySelectorAll('li').length > 15 ) {
				item.classList.add('_col');
			}
		});
	}

	const dataNav = document.querySelectorAll('[data-nav]');
	if ( dataNav.length > 0 ) {
		dataNav.forEach(item => {
			item.addEventListener('click', () => {
				dataNav.forEach(subitem => {
					subitem.classList.toggle('_active');
				});
			});
		});
	}

	const dataBurger = document.querySelectorAll('[data-burger]');
	if ( dataBurger.length > 0 ) {
		dataBurger.forEach(item => {
			item.addEventListener('click', () => {
				item.classList.toggle('_active');
				header.classList.toggle('_active');
			});
		});
	}

	const homeSlider = document.querySelector('.home-slider');
	if ( homeSlider ) {
		new Swiper(homeSlider, {
			loop: true,
			navigation: {
				nextEl: '.home-slider__navigation-btn._next',
				prevEl: '.home-slider__navigation-btn._prev'
			},
			pagination: {
				el: '.home-slider__pagination',
				clickable: true
			},
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					spaceBetween: 9
				},
				701: {
					slidesPerView: 1,
					spaceBetween: 0
				}
			},
		});
	}

	const popularCategories = document.querySelectorAll('.popular-category__swiper');
	if ( popularCategories.length > 0 ) {
		popularCategories.forEach(item => {
			new Swiper(item, {
				breakpoints: {
					0: {
						slidesPerView: 'auto',
						spaceBetween: 9,
						loop: true
					},
					701: {
						slidesPerView: 4,
						spaceBetween: 20,
						loop: false
					},
					991: {
						slidesPerView: 4,
						spaceBetween: 30,
						loop: false
					}
				},
			});
		});
	}

	const dataTab = document.querySelectorAll('[data-tab]');
	if ( dataTab.length > 0 ) {
		dataTab.forEach(item => {
			item.addEventListener('click', () => {
				let tabs = item.closest('[data-tab-parent]').querySelectorAll('[data-tab]'),
					tabContent = item.closest('[data-tab-parent]').querySelectorAll('[data-tab-content]'),
					tabItem = item.getAttribute('data-tab');

				tabs.forEach(item => {
					item.classList.remove('_active');
				});

				tabContent.forEach(item => {
					item.classList.remove('_active');
					item.getAttribute('data-tab-content') === tabItem ?
						item.classList.add('_active') : '';
				});

				item.classList.add('_active');
			});
		});
	}

	const bestProducts = document.querySelectorAll('.best-products__carousel');
	if ( bestProducts.length > 0 ) {
		bestProducts.forEach(item => {
			let itemData = item.getAttribute('data-item');

			new Swiper(item, {
				loop: false,
				breakpoints: {
					0: {
						slidesPerView: 'auto',
						spaceBetween: 15
					},
					701: {
						slidesPerView: 3,
						spaceBetween: 20
					},
					991: {
						slidesPerView: 4,
						spaceBetween: 30
					}
				},
				navigation: {
					nextEl: '.best-products__navigation._next[data-tab-content="'+itemData+'"]',
					prevEl: '.best-products__navigation._prev[data-tab-content="'+itemData+'"]'
				}
			});
		});
	}

	const categoriesCarousel = document.querySelectorAll('.categories__carousel');
	if ( categoriesCarousel.length > 0 ) {
		categoriesCarousel.forEach(item => {
			new Swiper(item, {
				loop: true,
				spaceBetween: 20,
				breakpoints: {
					0: {
						slidesPerView: 2,
						spaceBetween: 17
					},
					701: {
						slidesPerView: 5
					},
					991: {
						slidesPerView: 6
					},
					1100: {
						slidesPerView: 7
					}
				},
				navigation: {
					nextEl: '.categories__navigation._next',
					prevEl: '.categories__navigation._prev'
				}
			});
		});
	}

	const dataFilterValue= document.querySelectorAll('[data-filter-value]');
	if ( dataFilterValue.length > 0 ) {
		dataFilterValue.forEach(item => {
			item.addEventListener('change', () => {
				let target = item.closest('[data-filter-value-parent]').querySelector('[data-filter-value-target]');
				target ?
					target.innerHTML = item.value : '';
			});
		});
	}

	const dataFilterShow = document.querySelectorAll('[data-filter-show]');
	if ( dataFilterShow.length > 0 ) {
		dataFilterShow.forEach(item => {
			item.addEventListener('click', () => {
				let parent = item.closest('[data-filter-show-parent]');
				parent ?
					parent.classList.toggle('_show') : '';
			});
		});
	}

	const interestingCarousel = document.querySelectorAll('.interesting__carousel');
	if ( interestingCarousel.length > 0 ) {
		interestingCarousel.forEach((item) => {
			let parent = item.closest('.interesting');
			new Swiper(item, {
				breakpoints: {
					0: {
						slidesPerView: 'auto',
						spaceBetween: 15
					},
					701: {
						slidesPerView: 3,
						spaceBetween: 20
					},
					991: {
						slidesPerView: 4,
						spaceBetween: 30
					}
				},
				navigation: {
					nextEl: parent.querySelector('.interesting__navigation._next'),
					prevEl: parent.querySelector('.interesting__navigation._prev'),
				}
			});
		});
	}

	const productPageGallery = document.querySelector('.product-page__gallery'),
		productPageThumbs= document.querySelector('.product-page__thumbs');

	if ( productPageThumbs && productPageGallery ) {
		const productPageThumbsSwiper  = new Swiper(productPageThumbs, {
			spaceBetween: 10,
			slidesPerView: 4
		});

		const productPageGallerySwiper = new Swiper(productPageGallery, {
			slidesPerView: 1,
			spaceBetween: 0,
			thumbs: {
				swiper: productPageThumbsSwiper
			},
		});
	}

	const dataCount = document.querySelectorAll('[data-count]');
	if ( dataCount.length > 0 ) {
		dataCount.forEach((item) => {
			item.addEventListener('click', () => {
				let parent = item.closest('[data-count-parent]'),
					input = parent.querySelector('[data-count-input]'),
					interval = parent.getAttribute('data-count-interval'),
					min = parent.getAttribute('data-count-min');

				item.hasAttribute('data-count-plus') ?
					input.value = +input.value + +interval : '';

				if ( item.hasAttribute('data-count-minus') && input.value > +min ) {
					input.value = +input.value - +interval;
				}
			});
		});
	}

	const dataSelectInputs = document.querySelectorAll('[data-select]');
	if ( dataSelectInputs.length > 0 ) {
		dataSelectInputs.forEach((item) => {
			let parent = item.closest('[data-select-parent]'),
				inputs = parent.querySelectorAll('label');

			inputs.forEach((input) => {
				input.addEventListener('click', () => {
					parent.querySelector('[data-select]').classList.remove('_active');
					item.innerHTML = input.innerHTML;
				});
			});
		});
	}

	const datepickerElem = document.querySelector('[data-datepicker]');
	if ( datepickerElem ) {
		const datepicker = new Datepicker(datepickerElem, {
			autohide: true,
			format: 'dd.mm.yyyy',
			showDaysOfWeek: false
		});
	}

	const dataDelivery = document.querySelectorAll('[data-delivery]');
	if ( dataDelivery.length > 0 ) {
		dataDelivery.forEach((item) => {
			item.addEventListener('change', () => {
				let i = item.getAttribute('data-delivery'),
					fieldset = document.querySelectorAll('[data-delivery-fieldset]');

				fieldset.forEach((subitem) => {
					subitem.getAttribute('data-delivery-fieldset') == i ?
						subitem.classList.remove('hidden') : subitem.classList.add('hidden');
				});
			});
		});
	}

	const aboutCarousel = document.querySelectorAll('.about__carousel');
	if ( aboutCarousel.length > 0 ) {
		aboutCarousel.forEach((item) => {
			new Swiper(item, {
				breakpoints: {
					0: {
						slidesPerView: 'auto',
						spaceBetween: 20
					},
					701: {
						slidesPerView: 3,
						spaceBetween: 20
					},
					991: {
						slidesPerView: 3,
						spaceBetween: 30
					}
				},
			});
		});
	}

	const masonry = document.querySelector('[data-masonry]');
	if ( masonry ) {
		setTimeout(() => {
			new Masonry( masonry, {
				itemSelector: '.reviews__col',
				columnWidth: 0,
				percentPosition: true
			});
		}, 1000);
	}

	const dataFilter = document.querySelectorAll('[data-filter]');
	if ( dataFilter.length > 0 ) {
		dataFilter.forEach((item) => {
			item.addEventListener('click', () => {
				let parent = item.closest('[data-filter-parent]'),
					itemValue = item.getAttribute('data-filter'),
					items = parent.querySelectorAll('[data-filter-item]');

				parent.querySelectorAll('[data-filter]').forEach((item) => {
					item.classList.remove('_active');
				});

				item.classList.add('_active');

				if ( itemValue == 'all' ) {
					items.forEach(item => {
						item.classList.add('_active');
					});
				} else {
					items.forEach(item => {
						item.getAttribute('data-filter-item').indexOf(itemValue) >= 0 ?
							item.classList.add('_active') : item.classList.remove('_active');
					});
				}
			});
		});
	}

})();