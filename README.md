# Header-sticky-when-scrolling-up-on-the-page
# Sticky Header on Scroll Up
A jQuery script to make the header sticky when scrolling up on the page.
## Description
This code will make the header fixed/sticky when scrolling up the page, and change it back to original styling when scrolled to the top.
It works by:
- Tracking the scroll position on scroll event.
- Comparing current scroll position with previous position.
- Adding a 'sticky' class if scrolling up, removing it if at top.
This allows the header to stick to the top nicely when scrolling down the page.
### Compatibility
Works in modern browsers that support CSS position: sticky.
Uses jQuery for scroll event handling and class toggling.
## Usage
- Add jQuery library to your page.
- Apply 'sticky' styling to header with CSS.
- Target header selector ('#master-header')
- Initialize script on document ready.
- Handles sticky behavior on scroll automatically.
## Installation
1. Make sure jQuery is included in the page.
2. Add sticky header styling:
css
#header.sticky {
  position: fixed;
  top: 0; 
  width: 100%
}
3. Initialize script:
js
jQuery(document).ready(function() {

  // jQuery code from snippet
  
  }); 
4. Done! Header will become sticky on scroll up.
## Credits
Sticky header jQuery code written by Tanveer Ahmed Jafri.
