jQuery(document).ready(function() {
            var prevScrollpos = window.pageYOffset;
						jQuery(window).on('scroll', function() {
						var currentScrollPos = window.pageYOffset;
						if (prevScrollpos > currentScrollPos) {
							jQuery('#master-header, #dashboard-header').addClass('header-sticky');
						} else {
							jQuery('#master-header, #dashboard-header').removeClass('header-sticky');
						}
						prevScrollpos = currentScrollPos;
						});
						// Check the initial scroll position on page load
						if (window.pageYOffset === 0) {
						  jQuery('#master-header, #dashboard-header').removeClass('header-sticky');
						}
					
					function updateHeaderStickyClass() {
      					var currentScrollPos = window.pageYOffset;
					  if (currentScrollPos === 0) {
						jQuery('#master-header, #dashboard-header').removeClass('header-sticky');
					  }
    					}
						// Check the initial scroll position on page load
						updateHeaderStickyClass();
						// Bind the "scroll" event to update the class when scrolling
						jQuery(window).on('scroll', function() {
						  updateHeaderStickyClass();
						});
});
