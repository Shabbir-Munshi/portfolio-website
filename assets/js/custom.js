$(function(){
    //typed js start here 
    $(".typed").typed({
		strings: ["Web Designer", "Web Developer", "PHP Developer", "Laravel Developer"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: Infinity,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    //counter js start here 
    $('.counter').counterUp({
        delay: 10,
        time: 2000
      });
	  //slick slider start here
	  $('.slider_parent').slick({
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 600,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		// responsive: [
		//   {
		// 	breakpoint: 1024,
		// 	settings: {
		// 	  slidesToShow: 2,
		// 	  slidesToScroll: 2,
		// 	  infinite: true,
		// 	  dots: true
		// 	}
		//   },
		//   {
		// 	breakpoint: 600,
		// 	settings: {
		// 	  slidesToShow: 2,
		// 	  slidesToScroll: 2
		// 	}
		//   },
		//   {
		// 	breakpoint: 480,
		// 	settings: {
		// 	  slidesToShow: 1,
		// 	  slidesToScroll: 1
		// 	}
		//   }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		// ]
	  });

});