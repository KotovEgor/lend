$('.services__item').viewportChecker({
	classToAdd: 'animated fadeIn',
	offset: 0,
	classToRemove: 'invisible'
});


$('.banner__wrapper').viewportChecker({
	classToAdd: 'animated slideInLeft',
	offset: 0,
	classToRemove: 'invisible'
});


$('.offer__wrapper').viewportChecker({
	classToAdd: 'animated bounceIn',
	offset: 100,
	classToRemove: 'invisible'
});


$('.plus__item').addClass('hidden').viewportChecker({
	classToAdd: 'animated fadeInUp',
	offset: 100,
	classToRemove: 'invisible'
});

