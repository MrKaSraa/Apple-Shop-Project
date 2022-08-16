
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            rewind: true,
            centeredSlides: true,
            autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });


          
      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        rewind: true,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });


      var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 30,
        rewind: true,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });





      
    
    var toast = document.querySelector('#iziToast'); // Selector of your toast
 
    iziToast.show({
      theme: 'dark',
      icon: ' ',
  
      message: `<a style="color: #000; font-family:vazir; text-decoration: none;" href="github.com">!از بقیه محصولات سایت دیدن کنید</a>`,
   
      position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
      progressBarColor: 'rgb(0, 255, 184)',
   
      onOpening: function(instance, toast){
          console.info('callback abriu!');
      },
      onClosing: function(instance, toast, closedBy){
          console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
      }
  });


  const loaderElem = document.querySelector('.loader')

  window.addEventListener('load', function () {
     

      loaderElem.style.display='none'
 
   
  
  })