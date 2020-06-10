const header = document.querySelector('#header');
const mobileHeader = document.querySelector('#mobile-header');

const headerTags = document.querySelectorAll('.header-tags');
const mobileHeaderTags = document.querySelectorAll('.mobile-header-tags');

window.onscroll = function() {

  if (window.scrollY > 200) {

    header.classList.add('activate-scroll');
    mobileHeader.classList.add('activate-scroll');

    headerTags.forEach(function(tag) {
      tag.classList.add('activate-color');
    });
      mobileHeaderTags.forEach(function(tag) {
      tag.classList.add('activate-color');
    });

  } else {

    header.classList.remove('activate-scroll');

    headerTags.forEach(function(tag) {
      tag.classList.remove('activate-color');
    });

    if (mobileHeaderDivTwo.classList.contains('deactivate-mobile-div-2')) {
      mobileHeader.classList.remove('activate-scroll');
      mobileHeaderTags.forEach(function(tag) {
        tag.classList.remove('activate-color');
      });
    };

  };

};


const mobileHeaderDivTwo = document.querySelector('.mobile-div-2');

document.getElementById('hamburger-menu').addEventListener('click', function() {

  if (window.scrollY < 200) {
    mobileHeader.classList.toggle('activate-scroll');
    mobileHeaderTags.forEach(function(tag) {
      tag.classList.toggle('activate-color');
    });
    mobileHeaderDivTwo.classList.toggle('deactivate-mobile-div-2');
  } else {
    mobileHeaderDivTwo.classList.toggle('deactivate-mobile-div-2');
  };

});