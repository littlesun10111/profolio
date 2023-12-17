function btn_top() {
  $("#toTop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
  $(window).scroll(function () {
    var SCROLL = $(window).scrollTop(); //抓目前網頁捲軸的座標
    if (SCROLL > 300) {
      $("#toTop").stop(true, false).animate({ bottom: 40 }, 500, "");
    } else {
      $("#toTop").stop(true, false).animate({ bottom: -1000 }, 500, "");
    }
    SCROLL ? $("#toTop").fadeIn() : $("#toTop").fadeOut();
  });
}

function filterInit() {
  $('.tab[data-info="all"]').addClass("active");
}

function filterTags() {
  $('.tab[data-info="web"]').click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".work-item").parent('[data-info="graphic"]').slideUp("fast");
    $(".work-item").parent('[data-info="web"]').delay(200).slideDown("slow");
  });
  $('.tab[data-info="graphic"]').click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".work-item").parent('[data-info="web"]').slideUp("fast");
    $(".work-item")
      .parent('[data-info="graphic"]')
      .delay(200)
      .slideDown("slow");
  });
  $('.tab[data-info="all"]').click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".work-item").parent().slideDown("slow");
  });
}

function slidershow() {
  $(".works-slideshow").each(function () {
    let slideImgs = $(this).find("img"),
      slideImgsCount = slideImgs.length,
      currentIndex = 0;

    slideImgs.eq(currentIndex).fadeIn();

    setInterval(showNextSlide, 5000);

    function showNextSlide() {
      let nextIndex = (currentIndex + 1) % slideImgsCount;
      console.log(nextIndex);
      slideImgs.eq(currentIndex).fadeOut();
      slideImgs.eq(nextIndex).fadeIn();
      currentIndex = nextIndex;
    }
  });
}

$(document).ready(function () {
  btn_top();
  filterInit();
  filterTags();
  slidershow();

  const bannerSwiper = new Swiper(".works-swiper", {
    spaceBetween: 30,
    loop: false,
    grabCursor: true,
    autoHeight: true,
    autoplay: {
      delay: 2000,
    },

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const mainDetailSwiper = new Swiper(".multiMain-swiper", {
    loop: false,
    grabCursor: true,
    autoHeight: true,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
  });

  const subDetailSwiper = new Swiper(".multiSub-swiper", {
    loop: false,
    grabCursor: true,
    autoHeight: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      clickable: true,
    },
  });
});
