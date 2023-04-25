$(document).ready(function (event) {
   $(window).trigger('scroll');
   $('.i-header__burger').click(function (event) {
     $('.i-header, .i-header__burger, .i-menu').toggleClass('active');
     $('body').toggleClass('lock');
   });     
   $('.i-menu__link').click(function (event) {
      event.preventDefault();
      $(this).parent().toggleClass('active').find('ul').toggleClass('show');
   });  
   $('.i-header__actions input').change(function (event) {
      if($(this).is(':checked')){
         $('.i-footer__actions input').prop('checked',true);
         $('body').addClass('dark');
         $('img[data-dark]').each(function (event) {
            $(this).attr('src', $(this).attr('data-dark'));
         }); 
      }else{
         $('.i-footer__actions input').prop('checked',false);
         $('body').removeClass('dark');
         $('img[data-dark]').each(function (event) {
            $(this).attr('src', $(this).attr('data-light'));
         }); 
      }
   }); 
   $('.i-footer__actions input').change(function (event) {
      if($(this).is(':checked')){
         $('.i-header__actions input').prop('checked',true);
      }else{
         $('.i-header__actions input').prop('checked',false);
      }
      $('.i-header__actions input').trigger('change');
   }); 

   $('.i-filter__search input').focus(function (event) {
     $(this).parent().addClass('active');
   });  
   $('.i-filter__search input').blur(function (event) {
     $(this).parent().removeClass('active');
   });   
   $('.i-filter__all').click(function (event) {
     $('.i-filter__burger, .i-filter-menu').addClass('active');
     $('body').addClass('lock');
   });
   $('.i-filter__burger').click(function (event) {
     $('.i-filter__burger, .i-filter-menu').removeClass('active');
     $('body').removeClass('lock');
   }); 
   $('.i-filter-menu__item').click(function (event) {
     $('.i-filter-menu__item').removeClass('withborder');
     $(this).addClass('withborder');
   });   

   $('.i-filter-menu__link').click(function (event) {
      event.preventDefault();
      $(this).parent().toggleClass('active').find('ul').toggleClass('show');
   });   





   $('.deal__navslider>div').click(function (event) {  
      $('.deal__navslider>div').removeClass('current');
      $(this).addClass('current');
      $('.deal__slider').slick('slickGoTo', $(this).index());
      var dealforslider = $(window).width() - $('.deal__container').width();
      if($(this).offset().left - dealforslider/2>500){
         $('.deal__navslider').scrollLeft($(this).offset().left - dealforslider/2 + $('.deal__navslider').scrollLeft() - $('.deal__navslider').width()/2 + 70);
      }else if($(this).offset().left - dealforslider/2<100){
         $('.deal__navslider').scrollLeft($(this).offset().left - dealforslider/2 + $('.deal__navslider').scrollLeft() - $('.deal__navslider').width()/2 + 70 );
      }
   });  
   $('.deal__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      var dealnumberslide = currentSlide + 1;
      $('.deal__navslider>div.current').removeClass('current');
      $('.deal__navslider>div:nth-child('+dealnumberslide+')').addClass('current');

      var dealforslider = $(window).width() - $('.deal__container').width();
      if( $('.deal__navslider>div.current').offset().left - dealforslider/2>500){
         $('.deal__navslider').scrollLeft( $('.deal__navslider>div.current').offset().left - dealforslider/2 + $('.deal__navslider').scrollLeft() - $('.deal__navslider').width()/2 + 70);
      }else if( $('.deal__navslider>div.current').offset().left - dealforslider/2<100){
         $('.deal__navslider').scrollLeft( $('.deal__navslider>div.current').offset().left - dealforslider/2 + $('.deal__navslider').scrollLeft() - $('.deal__navslider').width()/2 + 70 );
      }
   });   
    $('.deal__video>video').click(function(event){
      if ($(this).get(0).paused) {
         $(this).get(0).play();
         $(this).next().addClass('remove');
      } else {
         $(this).get(0).pause();
         $(this).next().removeClass('remove');
      }
    });
   $('.deal__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      if($('.deal__video').length > 0){
         if(!$('.deal__video').hasClass('slick-current')){
            $('.deal__video').find('video').get(0).pause();
            $('.deal__video').find('video').next().removeClass('remove');
         }
      }

   });

   if($('.deal__slider').length>0){
      $('.deal__slider').slick({
         arrows: true,
         fade:true,
         dots:true,
         slidesToShow: 1,
         infinite:false,
         responsive: [
            {
            breakpoint: 801,
               settings: {
                  arrows:false,
                  slidesToShow: 1.1,
                  fade:false,
               }
            },
         ]         
      });
      $('.deal__image').addClass('ready');
   }
   


   $('.deal-nav__mobile').click(function (event) {
     $(this).parent().next().addClass('active');
     $(this).parent().prev().addClass('active');
     $('body').addClass('lock');
   });   
   $('.deal-nav>p').click(function (event) {
     $(this).parent().find('ul').removeClass('active');
     $(this).removeClass('active');
     $('body').removeClass('lock');
   });   
   $('.deal-nav li').click(function (event) {
      $('.deal-nav li').removeClass('active');
      $(this).addClass('active');
      $(this).parent().prev().find('p').text($(this).find('p>b').text());
      $('[data-id]').removeClass('target');
      $('[data-id="'+$(this).attr('data-inset')+'"]').addClass('target');
      $(this).parent().removeClass('active');
      $(this).parent().parent().find('>p').removeClass('active');
      $('body').removeClass('lock');
      $(window).scrollTop($('.deal-nav').offset().top - $('.i-header').outerHeight());
   });   

   $('.inset__buttons > button').click(function (event) {
      let insetbuttonsleftval = $(this).prev().find('input').val().replace(/,/g, '');
      if(insetbuttonsleftval < parseFloat($(this).prev().find('input').attr('data-minval'))){
         event.preventDefault();
         $(this).prev().addClass('active');
         $(this).prev().find('b').html( $(this).prev().find('b').attr('data-min'));
      }
      else if(insetbuttonsleftval > parseFloat($(this).prev().find('input').attr('data-maxval'))){
         event.preventDefault();
         $(this).prev().addClass('active');
         $(this).prev().find('b').html( $(this).prev().find('b').attr('data-max'));
      }
      else{
         $(this).prev().removeClass('active');
      }
   });     
   $('.inset__buttons-left div input').keyup(function (event) {
      this.value = Number(this.value.replace(/\D/g,'')).toLocaleString('en-US');
   });  
   $('.inset__buttons input').click(function (event) {
      $(this).parent().parent().removeClass('active');
   }); 

   if($(window).width()>=1056){
      $('.faqs__row>p').click(function (event) {
         $('.faqs__row').removeClass('active');
         $(this).parent().addClass('active');
         $('.faqs__content p').text($(this).text());
         $('.faqs__content span').html($(this).next().html());
      });   
   }else{
      $('.faqs__row').removeClass('active');
      $(this).parent().removeClass('active');  
      $('.faqs__row>p').click(function (event) {
         $(this).parent().toggleClass('active');
         $(this).next().slideToggle();
      });  
   }
   if($(window).width()>=1056){
      $('.risk__row>p').click(function (event) {
         $('.risk__row').removeClass('active');
         $(this).parent().addClass('active');
         $('.risk__content span').html($(this).next().html());
      });  
   }else{
      $('.risk__row').removeClass('active');
      $(this).parent().removeClass('active');  
      $('.risk__row>p').click(function (event) {
         $(this).parent().toggleClass('active');
         $(this).next().slideToggle();
      });  
      $('.risk__row>img').click(function (event) {
         $(this).parent().toggleClass('active');
         $(this).prev().slideToggle();
      });  

   }
   if($('.presses__slider').length>0){
      $('.presses__slider').slick({
         arrows: false,
         dots: true,
         fade:false,
         slidesToShow: 1,       
      });      
   }
   $('.discussion__like input').click(function (event) {
      var dlikecount = parseFloat($(this).parent().find('span').text());
      if($(this).is(':checked')){
         $(this).parent().find('span').text(dlikecount + 1);
      }else{
         $(this).parent().find('span').text(dlikecount - 1);
      }
   });  
   $('.datar__row>.datar__files .datar__foldername').click(function (event) {
      $(this).toggleClass('active');
      $(this).parent().next(".datar__documents").slideToggle();
   });   
   $('.i-updates__like input').click(function (event) {
      var updlikecount = parseFloat($(this).parent().find('span').text());
      if($(this).is(':checked')){
         $(this).parent().find('span').text(updlikecount + 1);
      }else{
         $(this).parent().find('span').text(updlikecount - 1);
      }
   });  
   $('.signin input').focus(function (event) {
      $(this).parent().addClass('focused');
   });   
   $('.signin input').blur(function (event) {
      $(this).parent().removeClass('focused');
   });   
   $('.signin__input>svg').click(function (event) {
     if ($(this).prev().attr('type') == "password") {
       $(this).prev().attr('type', 'text');
       $(this).addClass('active');
     } else {
      $(this).prev().attr('type', 'password');
      $(this).removeClass('active');
     }
   });   

});    


$(window).scroll(function (event) {
   var scrolltotop = $(window).scrollTop();
   if(scrolltotop>1){
      $('.i-header').addClass('show');
   }else{
      $('.i-header').removeClass('show');
   }
 });      




function readURL(input) {
       var reader = new FileReader();
       reader.onload = function (e) {
           $('#filename').text(input.files.item(0).name);
       };
       reader.readAsDataURL(input.files[0]);
   
};
function readU(input1) {
       var reader1 = new FileReader();
       reader1.onload = function (e) {
           $('#file').text(input1.files.item(0).name);
       };
       reader1.readAsDataURL(input1.files[0]);
   
};
