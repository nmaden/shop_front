

$(".services__filter__button--item").click(function(){
    var itemid = $(this).data('id');
    
    $(".services__filter__button--item").removeClass("services__filter__button--active");
    $(this).addClass("services__filter__button--active");

    if ($(window).width() > '993'){
      $(".services__filter--item").removeClass("services__filter__item--active");
      $(".services__filter__item--" + itemid).addClass("services__filter__item--active");  
    }
});


var partners = new Swiper('.partners__slider', {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 30,
    pagination: {
      el: '.partners__pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
      },
    }
});

var partners = new Swiper('.certificate__slider', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 30,
  pagination: {
    el: '.certificate__pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  }
});

$(".click__mobile").click(function(){

  jQuery(".header__mobile").toggleClass("mobile__menu--active");
  jQuery("html").toggleClass("body--hidden");

});

$(".menu-item-has-children > a").click(function(e){
  e.preventDefault();
  $(this).parents(".menu-item-has-children").find(".sub-menu").slideToggle();
});


if ($(window).width() < '1025'){

  var advantages = new Swiper('.advantages__slider', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    pagination: {
      el: '.advantages__pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
    }
  });

  

  
}
if ($(window).width() < '993'){

  var services = new Swiper('.services__slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    }
  });

  
  // $(".services__filter--item").hide();
  // $(".services__filter__item--active").show();
  $(".services__filter--item").addClass("services__filter__item--active");  

  $(".services__filter__button--item").click(function(){
    var itemid = $(this).data('id');
    $(".services__filter--item").hide();
    $(".services__filter__item--" + itemid).show();
    
    setTimeout(function(){
      servicesfilter.update();
      servicesfilter.slideTo(0);
    }, 500);
  });

  var servicesfilter = new Swiper('.services__filter--slider', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    // slidesPerColumn: 2,
    spaceBetween: 15,
    pagination: {
      el: '.services__filter__pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
        pagination: false,
      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
      568: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 15,
      },
    }

  });
  


  // setTimeout(function(){
  //   servicesfilter.slideTo(1);
  //   servicesfilter.update();
  //   // $(".services__filter__button--item.services__filter__button--active").trigger('click');
  // }, 1000);
  

}