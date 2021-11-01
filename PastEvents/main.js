var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";
var LEFT_RIGHT_BUTTONS = "[data-image-button=\"button\"]";

var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;


function setDetails(imageUrl, titleText) {
    'use strict';

    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumb) {
    'use strict';
    return thumb.getAttribute('data-image-url');
}

function titleFromThumb(thumb) {
    'use strict';
    return thumb.getAttribute('data-image-title');
  }

  function setDetailsFromThumb(thumbnail) {
    "use strict";
    var img = imageFromThumb(thumbnail);
    var title = titleFromThumb(thumbnail);
    setDetails(img, title);
  }
  
function addThumbClickHandler(thumb) { 
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
       console.log('clicked');
        setDetailsFromThumb(thumb);
       showDetails();
    });
}

function gettbArrayay() { 
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict';

    var frame = document.querySelector(DETAIL_IMAGE_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function() {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
}

  
  function leftRightButtons() {
    "use strict";
    var getCurrentTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    var buttons = document.querySelectorAll(LEFT_RIGHT_BUTTONS);
    var buttonArray = [].slice.call(buttons);
    var leftButton = buttonArray[0];
    var rightButton = buttonArray[1];
    var tbArray = gettbArrayay();
    var currentImage;
    var currentTitle;
  
    leftButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      for (var i = 0; i < tbArray.length; i++) {
        if (tbArray[i].getAttribute("data-image-title") == getCurrentTitle.textContent) {
          if (i == 0) {
            currentImage = imageFromThumb(tbArray[tbArray.length - 1]);
            currentTitle = titleFromThumb(tbArray[tbArray.length - 1]);
            setDetails(currentImage, currentTitle);
            break;
          } 
          
          else {
            currentImage = imageFromThumb(tbArray[i - 1]);
            currentTitle = titleFromThumb(tbArray[i - 1]);
            setDetails(currentImage, currentTitle);
          }
        }
      }
  
    });
  
    rightButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      for (var i = 0; i < tbArray.length; i++) {
        if (tbArray[i].getAttribute("data-image-title") == getCurrentTitle.textContent) {
          if (i == tbArray.length - 1) {
            currentImage = imageFromThumb(tbArray[0]);
            currentTitle = titleFromThumb(tbArray[0]);
            setDetails(currentImage, currentTitle);
          } 
          
          else {
            currentImage = imageFromThumb(tbArray[i + 1]);
            currentTitle = titleFromThumb(tbArray[i + 1]);
            setDetails(currentImage, currentTitle);
            break;
          }
        }
      }
    });
  }


  function initializeEvents() {
    "use strict";
    var thumbnails = gettbArrayay();
    thumbnails.forEach(addThumbClickHandler);
    leftRightButtons();
  }

initializeEvents();

