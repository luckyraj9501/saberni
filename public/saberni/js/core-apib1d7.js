jQuery(function() {
// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
    'Vision meets Result',
    'Data meets Insight',
    'Design meets Craft',
    'Concept meets Code',
    'Strategy meets Outcome',
    'Thought meets Action'
  ]
 
 


  const el = document.querySelector('.banner-inner-content .visions')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
        if(counter < phrases.length){
          setTimeout(next, 2000);
        }
      })
      counter = (counter + 1);
    }
  
  if(el){
    next()
  }
  
     jQuery('#twitterfeed').load(ajax_posts.themeurl+'/tweets/index.php');
      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
var trigg = false;
	jQuery('.collaps-triggernews').on('click', function() {
		if(trigg === false) {
			jQuery(this).html('COLLAPSE');
			jQuery(this).parent().prev().slideDown();
			trigg = true;
		} else {
			jQuery(this).html('LOAD MORE');
			jQuery(this).parent().prev().slideUp();
			trigg = false;
		}
	});
windowWidth = jQuery(window).width();
if(windowWidth<767) {
	jQuery(".ones").on("click", function (e) {
		window.location='privacy-policy/index.html';
		
	});
	 jQuery(".twos").on("click", function (e) {
				e.preventDefault();
				setTimeout(function() {
					localStorage.setItem('cookie_store','stored');
					localStorage.setCacheItem("cookie_store", "stored", { days: 10000 });  
				 }, 10); 
				 jQuery('.cookie_banner-wrapper').fadeOut();
		 });
	
			  function textCutter(i, text ,n) {
				var short = text.substr(0, n);
				if (/^\S/.test(text.substr(n)))
					return short.replace(/\s+\S*jQuery/, "");
				return short;
			};
				function textCutter2(totallenght, text ,n) {
					var short = text.substr(totallenght, n);
					return short;
				};

			 
			 function readMoreInfo(){
				jQuery("#full_carouselcontents .item").each(function(){
				   var t = jQuery(this).find("h3").next("p").text();
					 var sshort=textCutter(0,t,99);
					 var totallenght=sshort.length;
				 jQuery(this).find("h3").next("p").html(
					textCutter(0,t,99)+'<span style="display:none;">'+ textCutter2(totallenght,t,2000)+'</span>'
					);
				jQuery(this).find("h3").next("p").siblings("p").hide();
				});
			}

			function readMoreInfo2(){
				jQuery("#full_carouselcontents .item").each(function(){
					jQuery(this).find("a").removeClass("readmore");
					jQuery(this).find("a").addClass("readmore").text("Read More")     	 
					 var t = jQuery(this).find("h3").next("p").text();
					 var sshort=textCutter(0,t,99);
					 var totallenght=sshort.length;
						jQuery(this).find("h3").next("p").html(
					textCutter(0,t,99)+'<span style="display:none;">'+ textCutter2(totallenght,t,2000)+'</span>'
					);
				   jQuery(this).find("h3").next("p").siblings("p").hide();
				});
			}
			readMoreInfo();
			jQuery('body').on("click", "#full_carouselcontents .item a", function(event){
				event.preventDefault(); 
				if(jQuery(this).hasClass('readmore')){
					 jQuery(this).parent().parent().find("h3").next("p").find("span").show();
					 jQuery(this).parent().parent().find("h3").next("p").siblings("p").slideDown();
					 jQuery(this).text("Read Less");
					 jQuery(this).toggleClass("readmore");
				}
				else{
					jQuery(this).parent().parent().find("h3").next("p").siblings("p").slideUp();
					jQuery(this).text("Read More");

					 jQuery(this).parent().parent().find("h3").next("p").find("span").hide();
					 jQuery(this).toggleClass("readmore");
				}
			});
}

  

 jQuery('div#qnans').on('click','.delete_comment',function(){

     var userid=jQuery(this).attr('data-id');
     var comment_id=jQuery(this).attr('id');
     var ths=jQuery(this).closest('.comment-body');
      ths.hide();
          jQuery.post(ajax_posts.ajaxurl,{ userid: userid,comment_id: comment_id,action: 'delete_comment' },function(data, status, xhr) {
                   ths.hide();

                }).done(function(data) {

                 }).fail(function(jqxhr, settings, ex) {

                  alert('failed, ' + ex);
          });
});

 jQuery('div#qnansq').on('click','.delete_commentq',function(){

     var userid=jQuery(this).attr('data-id');
     var comment_id=jQuery(this).attr('id');
     var ths=jQuery(this).closest('.comment-body');
      ths.hide();
          jQuery.post(ajax_posts.ajaxurl,{ userid: userid,comment_id: comment_id,action: 'delete_commentq' },function(data, status, xhr) {
                   ths.hide();

                }).done(function(data) {

                 }).fail(function(jqxhr, settings, ex) {

                  alert('failed, ' + ex);
          });
});


  var pageNo=1;
  function load_more_ans(ppp){
     pageNo++;
    var str ='&pageNo=' + pageNo + '&ppp=' + ppp + '&action=ans_more_post_ajax';
    jQuery.ajax({
        type: "POST",
        dataType: "html",
        url: ajax_posts.ajaxurl,
        data: str,
        success: function(data){
            var jQuerydata = jQuery(data);
            if(jQuerydata.length){
                  jQuery("#qnans").append(jQuerydata);
                  jQuery("#load-more-ans").html("Load more");

            } else{
                  jQuery("#load-more-ans").css("display","none");

            }
        },
        error : function(jqXHR, textStatus, errorThrown) {
            jQueryloader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
        }

    });
    return false;
}

 jQuery(document).on( 'click', '#load-more-ans', function( event ) {
        event.preventDefault();
        jQuery("#load-more-ans").html("loading...");
        var ppp = 10;
        load_more_ans(ppp);
});

  var pageNoq=1;
  function load_more_ansq(ppp){
     pageNoq++;
    var str ='&pageNo=' + pageNoq + '&ppp=' + ppp + '&action=ans_more_post_ajaxq';
    jQuery.ajax({
        type: "POST",
        dataType: "html",
        url: ajax_posts.ajaxurl,
        data: str,
        success: function(data){
            var jQuerydata = jQuery(data);
            if(jQuerydata.length){
                  jQuery("#qnansq").append(jQuerydata);
                  jQuery("#load-more-ansq").html("Load more");

            } else{
                  jQuery("#load-more-ansq").css("display","none");

            }
        },
        error : function(jqXHR, textStatus, errorThrown) {
            jQueryloader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
        }

    });
    return false;
}

 jQuery(document).on( 'click', '#load-more-ansq', function( event ) {
        event.preventDefault();
        jQuery("#load-more-ansq").html("loading...");
        var ppp = 10;
        load_more_ansq(ppp);
});
 
 jQuery("#dws_form").validate({
        rules: {
            question: {
                required: true
            },
            ans: {
                required: true
            }
        },
        messages: {
            question: "Please select question",
            ans: "Please enter your answer",
        },
        ignore: "",
        errorClass: 'fieldError',
        onkeyup: false,
        onblur: false,
        errorElement: 'label',
        submitHandler: function() {

        /* var ans= jQuery('.editable').html();
        var question= jQuery('#question_val').val();
        var action= jQuery('#action').val();
        var userid= jQuery('#userid').val();
          */


           var formData = new FormData(jQuery('#dws_form')[0]);
          jQuery.ajax({
                url: ajax_posts.ajaxurl,
                type: 'POST',
                data: formData,
                async: true,
                cache: false,
                contentType: false,
                processData: false,
                beforeSend: function() {
                   jQuery("#submitdswfrm").prop("disabled", true).html('Processing...');
                },
                success: function(formData) {
                      jQuery(".process").css({'display': 'none'});
                      jQuery(".dnone").css({'display': 'none'});
                      jQuery('#qnans').prepend(formData).slideDown('fast');
					   jQuery(".previewbox").html('');
                        jQuery(".previewbox").prepend('<div class="previewimg preloadimg"><i class="fa fa-circle-o-notch fa-spin"></i></div>');
                      
                  },
                complete: function(formData) {
                    jQuery("#submitdswfrm").prop("disabled", false).html('Post');
                    jQuery("#dws_form").find("input[type=text],input[type=email], textarea").val("");
                    jQuery('.editable').html('');
                    jQuery('.dropdown').dropdown('clear');
                     jQuery("html, body").animate({
                        scrollTop: jQuery('#qnans').offset().top
                    });
                }
            });
       }
    });

jQuery("#attched_img").val(''); 
  jQuery(".fileup").change(function(){ 
		    var file    = document.querySelector('input[type=file]').files[0];
		    var reader  = new FileReader();
		    var sizeKB = file.size / 1024;
		 if(sizeKB<10340){
			
			jQuery("#action").val('dsw_attached');
			var formData = new FormData(jQuery('#dws_form')[0]);
          jQuery.ajax({
                url: ajax_posts.ajaxurl,
                type: 'POST',
                data: formData,
                async: true,
                cache: false,
                contentType: false,
                processData: false,
                beforeSend: function() {
                   jQuery("#submitdswfrm").prop("disabled", true);
				   jQuery(".preloadimg").css({'display':'inline-block'}).fadeIn();
                },
                success: function(returndata) {
					var returndatas=jQuery.trim(returndata);
                        jQuery(".preloadimg").fadeOut();   
                        var existimg = jQuery("#attched_img").val(); 
						if(existimg.length>0){
							var insertimg =existimg + ',' +returndatas;
							jQuery("#attched_img").val(insertimg);
						}
						else{
							jQuery("#attched_img").val(returndatas);
						}
					reader.onloadend = function () {
						src = reader.result; 
						jQuery('.previewbox').prepend('<div class="previewimg"><b class="removeattached" data-attr="'+ returndatas +'"></b><img  class="previews" src="'+ src +'"></div>').fadeIn();
					  }

					  if (file) {
						reader.readAsDataURL(file);
					  } else {
						preview.src = "";
					  }						
                       
                  },
                complete: function(returndata) {
                    jQuery("#submitdswfrm").prop("disabled", false);
                    jQuery("#action").val('dsw_form');
				  }
            });
			
			 
             
	}
	else{
		alert('File size should not be more than 10MB.');
	}
 
        });
 
 jQuery(document).on( 'click', '.removeattached', function( event ) {
	 jQuery(this).parent().css({'display':'none'});
	  var existimg = jQuery("#attched_img").val(); 
	  var img = jQuery(this).attr('data-attr');   
	   var insertimgs= existimg.replace(img,''); 
	   jQuery("#attched_img").val(insertimgs);
 });


   

 
jQuery("#conatctfrm").validate({
	rules: {
		name: {
			required: true
		},
		email: {
			required: true
		},
		binquiry: {
			required: true
		},
		responsefrom: {
			required: true
		},
		message: {
			required: true
		}
	},
	messages: {
		name: "Please enter your name.",   
	},
	ignore: "",
	errorClass: 'fieldError',
	onkeyup: false,
	onblur: false,
	errorElement: 'label',
	submitHandler: function() {
		var formData = new FormData(jQuery('#conatctfrm')[0]);
		jQuery.ajax({
			 url: ajax_posts.ajaxurl,
			type: 'POST',
			data: formData,
			async: true,
			cache: false,
			contentType: false,
			processData: false,
			beforeSend: function() {
				jQuery("#submitfrm_contact").prop("disabled", true).html('Processing...');
			},
			success: function(formData, status, xhr) {
						var json = jQuery.parseJSON(formData);
						if(json.status=='success'){  
						 if(json.type == 'Business Inquiry'){
							 window.dataLayer = window.dataLayer || [];
							 window.dataLayer.push({
								'event': 'ajaxComplete',
								'attributes': {
								 'headers': xhr.getResponseHeader("Content-Type"),
								 'response': json
								 }
							});
						 	window.location.href = ajax_posts.successBusinessUrl;  
						}  
						else{
							window.location.href = ajax_posts.successurl;  
						}   
						}
						else{
							 alert(json.msg);
						}
						 
			},
			complete: function(formData) {
				jQuery("#submitfrm_contact").prop("disabled", false).html('Submit');
				jQuery("#conatctfrm").find("input[type=text],input[type=email], textarea").val("");
			}
		});
	}
});
jQuery("#submitfrm_contact").click(function() { 
	jQuery("#conatctfrm").submit();
	return false;
});

/* Contact form popup */
jQuery("#conatctfrmp").validate({
		rules: {
		name: {
			required: true
		},
		email: {
			required: true
		},
		binquiry: {
			required: true
		},
		responsefrom: {
			required: true
		},
		message: {
			required: true
		}
	},
	messages: {
		name: "Please enter your name.",    
	},
	ignore: "",
	errorClass: 'fieldError',
	onkeyup: false,
	onblur: false,
	errorElement: 'label',
	submitHandler: function() {
		var formData = new FormData(jQuery('#conatctfrmp')[0]);
		jQuery.ajax({
			 url: ajax_posts.ajaxurl,
			type: 'POST',
			data: formData,
			async: true,
			cache: false,
			contentType: false,
			processData: false,
			beforeSend: function() {
				jQuery("#submitfrm_contactp").prop("disabled", true).html('Processing...');
			},
			success: function(formData, status, xhr) {
						var json = jQuery.parseJSON(formData);
						if(json.status=='success'){  
						 if(json.type == 'Business Inquiry'){
							 window.dataLayer = window.dataLayer || [];
							 window.dataLayer.push({
								'event': 'ajaxComplete',
								'attributes': {
								 'headers': xhr.getResponseHeader("Content-Type"),
								 'response': json
								 }
							});
							window.location.href = ajax_posts.successBusinessUrl;  
						 }  
						else{
								window.location.href = ajax_posts.successurl;  
							} 
						   
						}
						else{
							 alert(json.msg);
						}
						 
			},
			complete: function(formData) {
				jQuery("#submitfrm_contactp").prop("disabled", false).html('Submit');
				jQuery("#conatctfrmp").find("input[type=text],input[type=email], textarea").val("");
			}
		});
	}
});
jQuery("#submitfrm_contactp").click(function() { 
	jQuery("#conatctfrmp").submit();
	return false;
});

 
    jQuery("#equiry_msg").focus(function() {
        var msg= jQuery(this).val();
         jQuery(this).val('');
    });

  


    jQuery(".msgclose").click(function() {
        jQuery("#messages").css({
            'display': 'none'
        });
    });
    var scroll = jQuery(window).scrollTop();
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 150) {
            jQuery('.changeable').addClass("fixed");
            jQuery('.changeable').addClass("bgauto");
            jQuery('.sticky-drop').addClass("stickypad");
			
        } else {
            jQuery('.changeable').removeClass("fixed").removeClass("bgauto"); jQuery('.sticky-drop').removeClass("stickypad");
        }
		
		 if (jQuery(this).scrollTop() > 130) {
            jQuery('.sticky-drop').addClass("stickypad");
			
        } else {
            jQuery('.sticky-drop').removeClass("stickypad");
        }
		 
		
    });

if(jQuery('.page-id-317').length){
var elementPosition = $('.filtermmdata-group').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top + 250){
              $('.filtermmdata-group').addClass('stickyf');
        } else {
            $('.filtermmdata-group').removeClass('stickyf');
        }    
});
}

    var ww = jQuery(window).width();
    if (ww > 991) {
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > 470) {
                jQuery('.blogleft').removeClass("bloglf").addClass('bloglfr');
            } else {
                jQuery('.blogleft').removeClass("bloglfr").addClass('bloglf');
            }
        });
    }
if (ww > 767) {
        
    }
	else{
	}
	
 if (ww < 767) {
	 jQuery('#hambernav').on("click",function() {
		/*   scrollLock = true;   */
		    jQuery('html').css({'position':'fixed'});
	}); 
	jQuery('.dubli.hidden-close-toggle').on('click', function(e) { 
		 /*  scrollLock = false; */   jQuery('html').css({'position':'relative'});
	});
 }

    jQuery('.menu-toggle').on('click', function(e) {
        jQuery(this).toggleClass('active');
        jQuery(this).next().slideToggle();
    });
    jQuery('.hidden-close-toggle').on('click', function(e) {
        jQuery('#mobile-navigation').slideUp();
        jQuery('html').removeClass('overflow-hidden');
        jQuery('.hamburger').removeClass('is-active');
    });
    jQuery('.hiddenm').on('click', function(e) {
        jQuery('#mobile-navigation').slideUp();
        jQuery('html').removeClass('overflow-hidden');
        jQuery('.hamburger').removeClass('is-active');
    });

    jQuery('.icon-play-wrap a').on('click', function(e) {
        jQuery('.fullscreen-bg__video').attr('autoplay');
    });

 /*    var chk = false;
    jQuery('#hambernav').on('click', function(e) {
        if (chk === false) {
            jQuery('.hamburger').addClass('is-active');
            jQuery('#hambernav').removeClass('activem');
            chk = true;
        } else {
            jQuery('.hamburger').removeClass('is-active');
            jQuery('#hambernav').addClass('activem');

            chk = false;
        }
    });
  jQuery(document).on("click", '.activem', function() {
        jQuery('#mobile-navigation').slideUp();
        jQuery('html').removeClass('overflow-hidden');

        jQuery('.hamburger').removeClass('is-active');
    }); */

 var jQuerywindow = jQuery(window), previousScrollTop = 0, scrollLock = false;
jQuerywindow.scroll(function(event) {     
    if(scrollLock) {
        jQuerywindow.scrollTop(previousScrollTop); 
    }
 previousScrollTop = jQuerywindow.scrollTop();
});	
	jQuery('#hambernav').on("click",function() {
		  
	/*  scrollLock = true; */
		jQuery('.menuOverlay').fadeIn();
		jQuery('.menues').fadeIn();
		jQuery('.hidden-close-toggle').fadeIn(); 
		jQuery('#hambernav').css({'opacity':'0'}); 
	});
	jQuery('.menu-toggle').on("click", function(e) {
		jQuery(this).toggleClass('active');
		jQuery(this).next().slideToggle();
	});
	jQuery('.dubli.hidden-close-toggle').on('click', function(e) {
	     jQuery('.menuOverlay').fadeOut('fast');
	     jQuery('.menues').fadeOut('fast');
		/*  scrollLock = false; */
		 
		jQuery('.hidden-close-toggle').fadeOut('fast'); 
		jQuery('#hambernav').css({'opacity':'1'}); 
	});
 
	jQuery('.icon-play-wrap a').on('click', function(e) {
		jQuery('.fullscreen-bg__video').attr('autoplay');
	});
	var chk = false;
	jQuery('#hambernav').on('click', function(e) {
		if(chk === false) {
			jQuery('.hamburger').addClass('is-active');
			chk = true;
		} else {
			jQuery('.hamburger').removeClass('is-active');
			chk = false;
		}
	});	
	jQuery(".mainmenu .menu-item-has-children").prepend('<i class="sub_menu_navigator"></i>');
	jQuery(".mainmenu .menu-item-has-children").find(".current-menu-item").parent().css({'display':'block'}).parent().find(".sub_menu_navigator").addClass('rotate');
	jQuery(".mainmenu").find(".menu-item-has-children.current-menu-item .sub-menu").css({'display':'block'});
/* 	jQuery(".sub_menu_navigator").on('click', function(e) {  
			jQuery(this).toggleClass('rotate').parent().find(".sub-menu").slideToggle();
	}); */
	
  		
  		jQuery(".mainmenu .menu-item-has-children > a").on('click', function(e) {
			e.preventDefault(); 
		}); 

		jQuery(".mainmenu .menu-item-has-children").on('click', function(e) {
			  /*  jQuery(".sub-menu").slideToggle(); */
			  jQuery(".mainmenu .sub-menu").slideUp(); 
              jQuery(".mainmenu .sub_menu_navigator").removeClass('rotate');				  
			   if(jQuery(this).find(".sub-menu").is(":visible")){
				  jQuery(this).find(".sub-menu").slideUp();
jQuery(this).find(".sub_menu_navigator").removeClass('rotate');				  
			   }
			   else{
				  jQuery(this).find(".sub-menu").slideDown(); 
jQuery(this).find(".sub_menu_navigator").addClass('rotate');				  
			   }
			   
		});
		
		
		

   /*  jQuery('.clients-list li').hover(function() {
        jQuery(this).toggleClass('hover');
    });

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function(box) {
        },
        scrollContainer: null
    });
    new WOW().init(); */

    jQuery(".carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsiveClass: true,
    });
    jQuery(".affair-carousel").owlCarousel({
        loop: true,
        margin: 20,
	   autoplay: true,
	   autoplayTimeout: 3000,
        navigation: true,
        navigationText: false,
        responsiveClass: true,
		fluidSpeed: true,
        smartSpeed: 350, 
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 4,
                nav: true
            },
            1000: {
                items: 4,
                nav: true
            }
        }
    });
	   
      jQuery("#services_owl").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        padding: 0,
        nav: false,
        autoplay: false,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: true,
         onDrag: slideBeforeChange,

        fluidSpeed: true,
        smartSpeed: 450,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                nav: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
        jQuery("#services_owlcontent").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        autoplay: false,
        nav: false,
        margin: 0,
        merge: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: false,
        fluidSpeed: true,
        smartSpeed: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                mergeFit: true,
                nav: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
    jQuery("#services_owl").on("dragged.owl.carousel", function (event) {
         if (event.relatedTarget['_drag']['direction'] == "left") {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        console.log('Slide changed, indexAfterChange: ' + indexAfterChange);
                        jQuery("#services_owlcontent").trigger('next.owl.carousel');
                    } else {
                        console.log('Slide did not change');
                    }

        }    else {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        jQuery("#services_owlcontent").trigger('prev.owl.carousel');
                    }
    }
 });
jQuery('.service_owl_right').click(function(event) {
    jQuery("#services_owl").trigger('next.owl.carousel');
    jQuery("#services_owlcontent").trigger('next.owl.carousel');

});
jQuery('.service_owl_left').click(function(event) {
    jQuery("#services_owl").trigger('prev.owl.carousel');
    jQuery("#services_owlcontent").trigger('prev.owl.carousel');
});
  jQuery("#mvp_carousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        padding: 0,
        nav: false,
        autoplay: false,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: true,
         onDrag: slideBeforeChange,

        fluidSpeed: true,
        smartSpeed: 450,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                nav: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
        jQuery("#mvp_contentcarousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        autoplay: false,
        nav: false,
        margin: 0,
        merge: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: false,
        fluidSpeed: true,
        smartSpeed: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                mergeFit: true,
                nav: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
    jQuery("#mvp_carousel").on("dragged.owl.carousel", function (event) {
         if (event.relatedTarget['_drag']['direction'] == "left") {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        console.log('Slide changed, indexAfterChange: ' + indexAfterChange);
                        jQuery("#services_owlcontent").trigger('next.owl.carousel');
                    } else {
                        console.log('Slide did not change');
                    }

        }    else {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        jQuery("#services_owlcontent").trigger('prev.owl.carousel');
                    }
    }
 });
jQuery('.mvp_owl_right').click(function(event) {
    jQuery("#mvp_carousel").trigger('next.owl.carousel');
    jQuery("#mvp_contentcarousel").trigger('next.owl.carousel');

});
jQuery('.mvp_owl_left').click(function(event) {
    jQuery("#mvp_carousel").trigger('prev.owl.carousel');
    jQuery("#mvp_contentcarousel").trigger('prev.owl.carousel');
});
  jQuery("#full_carousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        padding: 0,
        nav: false,
        autoplay: false,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: true,
         onDrag: slideBeforeChange,

        fluidSpeed: true,
        smartSpeed: 450,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                nav: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
        jQuery("#full_carouselcontent").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        autoplay: false,
        nav: false,
        margin: 0,
        merge: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: false,
        fluidSpeed: true,
        smartSpeed: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                mergeFit: true,
                nav: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
jQuery("#full_carousel").on("dragged.owl.carousel", function (event) {
         if (event.relatedTarget['_drag']['direction'] == "left") {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        console.log('Slide changed, indexAfterChange: ' + indexAfterChange);
                        jQuery("#full_carouselcontent").trigger('next.owl.carousel');
                    } else {
                        console.log('Slide did not change');
                    }

        }    else {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        jQuery("#full_carouselcontent").trigger('prev.owl.carousel');
                    }
    }
 });
jQuery('.fullnavr').click(function(event) {
    jQuery("#full_carousel").trigger('next.owl.carousel');
    jQuery("#full_carouselcontent").trigger('next.owl.carousel');

});
jQuery('.fullnavl').click(function(event) {
    jQuery("#full_carousel").trigger('prev.owl.carousel');
    jQuery("#full_carouselcontent").trigger('prev.owl.carousel');
});

 
	
  jQuery("#full_carousels").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        padding: 0,
        nav: false,
        autoplay: false,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: true,
         onDrag: slideBeforeChange,

        fluidSpeed: true,
        smartSpeed: 450,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                nav: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
        jQuery("#full_carouselcontents").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        autoplay: false,
        nav: false,
        margin: 0,
        merge: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: false,
        fluidSpeed: true,
        smartSpeed: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                mergeFit: true,
                nav: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
jQuery("#full_carousels").on("dragged.owl.carousel", function (event) {
         if (event.relatedTarget['_drag']['direction'] == "left") {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        console.log('Slide changed, indexAfterChange: ' + indexAfterChange);
                        jQuery("#full_carouselcontents").trigger('next.owl.carousel');
                    } else {
                        console.log('Slide did not change');
                    }

        }    else {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        jQuery("#full_carouselcontents").trigger('prev.owl.carousel');
                    }
    }
 });
jQuery('body').on("click", ".fullnavrs", function(event) {
    jQuery("#full_carousels").trigger('next.owl.carousel');
    jQuery("#full_carouselcontents").trigger('next.owl.carousel');
    readMoreInfo2();

});
jQuery('body').on("click", ".fullnavls", function(event) {
    jQuery("#full_carousels").trigger('prev.owl.carousel');
    jQuery("#full_carouselcontents").trigger('prev.owl.carousel');
    readMoreInfo2();
});


jQuery("#recent_cases").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        padding: 0,
        nav: false,
        autoplay: false,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: true,
        onDrag: slideBeforeChange,
        fluidSpeed: true,
        smartSpeed: 1000,
        autoplayTimeout: 6000,
        responsive: {
            1200: {
                items: 1,
                nav: true,
                loop: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
    jQuery('.cprev').click(function(event) {
       jQuery("#recent_cases").trigger('next.owl.carousel');  });
    jQuery('.cnext').click(function(event) {
        jQuery("#recent_cases").trigger('prev.owl.carousel'); });
    jQuery('.cprev1').click(function(event) {
       jQuery("#recent_cases2").trigger('next.owl.carousel');  });
    jQuery('.cnext1').click(function(event) {
        jQuery("#recent_cases2").trigger('prev.owl.carousel'); });

    jQuery("#recent_cases2").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        padding: 0,
        nav: false,
        autoplay: false,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: true,
        onDrag: slideBeforeChange,
        fluidSpeed: true,
        smartSpeed: 1000,
        autoplayTimeout: 6000,
        responsive: {
            1200: {
                items: 1,
                nav: true,
                loop: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });

    jQuery("#method_carousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        padding: 0,
        nav: false,
        autoplay: false,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: true,
         onDrag: slideBeforeChange,

        fluidSpeed: true,
        smartSpeed: 450,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                margin: 0,
                nav: false
            },
            1024: {
                items: 1,
                nav: false
            },
            1200: {
                items: 1,
                nav: true,
                loop: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });

    jQuery("#method_contentcarousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        autoplay: false,
        nav: false,
        margin: 0,
        merge: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: false,
        fluidSpeed: true,
        smartSpeed: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                mergeFit: true,
                nav: true
            },
            600: {
                items: 1,
                margin: 0,
                mergeFit: true,
                nav: false
            },
            1024: {
                items: 1,
                mergeFit: true,
                nav: false
            },
            1200: {
                items: 1,
                nav: true,
                mergeFit: true,
                loop: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });



var indexBeforeChange = -1;
function slideBeforeChange(event) {
    indexBeforeChange = event.page.index;
    console.log('indexBeforeChange: ' + indexBeforeChange);
}
/* function slideChanged(event) {
    var indexAfterChange = event.page.index;
    if (indexAfterChange != indexBeforeChange) {
        console.log('Slide changed, indexAfterChange: ' + indexAfterChange);
        jQuery("#method_contentcarousel").trigger('next.owl.carousel');
    } else {
        console.log('Slide did not change');
    }
}     */







 jQuery("#method_carousel").on("dragged.owl.carousel", function (event) {
         if (event.relatedTarget['_drag']['direction'] == "left") {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        console.log('Slide changed, indexAfterChange: ' + indexAfterChange);
                        jQuery("#method_contentcarousel").trigger('next.owl.carousel');
                    } else {
                        console.log('Slide did not change');
                    }

        }    else {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        jQuery("#method_contentcarousel").trigger('prev.owl.carousel');
                    }
    }
 });
jQuery('.nexts').click(function(event) {
    jQuery("#method_carousel").trigger('next.owl.carousel');
    jQuery("#method_contentcarousel").trigger('next.owl.carousel');

});
jQuery('.prevs').click(function(event) {
    jQuery("#method_carousel").trigger('prev.owl.carousel');
    jQuery("#method_contentcarousel").trigger('prev.owl.carousel');
});


    jQuery('.home-banner-next').click(function(event) {
        jQuery("#method_carousel").trigger('next.owl.carousel');
        jQuery("#method_contentcarousel").trigger('next.owl.carousel');

    });

    jQuery('.home-banner-prev').click(function(event) {
        jQuery("#method_carousel").trigger('prev.owl.carousel');
        jQuery("#method_contentcarousel").trigger('prev.owl.carousel');
    });
jQuery(".common-carousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        padding: 0,
        nav: false,
        autoplay: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: true,
        fluidSpeed: true,
        onDrag: slideBeforeChange,
        smartSpeed: 450,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: { 
            1200: {
                items: 1,
                nav: true,
                loop: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
	jQuery(".common-carousel-content").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        padding: 0,
        nav: false,
        autoplay: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: true,
        fluidSpeed: true,
        onDrag: slideBeforeChange,
        smartSpeed: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: { 
            1200: {
                items: 1,
                nav: true,
                loop: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
	jQuery('.common-carousel-content .anexts').click(function(event) { 
        jQuery(this).parents('.common-slider').find('.common-carousel').trigger('next.owl.carousel'); 
        jQuery(this).parents('.common-carousel-content').trigger('next.owl.carousel'); 
    });

    jQuery('.common-carousel-content .aprevs').click(function(event) { 
       jQuery(this).parents('.common-slider').find('.common-carousel').trigger('prev.owl.carousel'); 
        jQuery(this).parents('.common-carousel-content').trigger('prev.owl.carousel'); 
   });	
	
	
	
	
	
	
	jQuery("#award_carousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        padding: 0,
        nav: false,
        autoplay: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: true,
        fluidSpeed: true,
        onDrag: slideBeforeChange,
        smartSpeed: 450,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                margin: 0,
                nav: false
            },
            1024: {
                items: 1,
                nav: false
            },
            1200: {
                items: 1,
                nav: true,
                loop: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
	jQuery("#award_carousels").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        padding: 0,
        nav: false,
        autoplay: false,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: true,
        fluidSpeed: true,
        onDrag: slideBeforeChange,
        smartSpeed: 450,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
             
            1200: {
                items: 1,
                nav: true,
                loop: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
/*  jQuery('.nextaboutsection').click(function(event) {
        jQuery("#bannerbottomcarousel").trigger('next.owl.carousel');
        jQuery("#bannerbottomcarouselnavigator").trigger('next.owl.carousel');

    }); */


  jQuery("#award_carousel").on("dragged.owl.carousel", function (event) {
         if (event.relatedTarget['_drag']['direction'] == "left") {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        console.log('Slide changed, indexAfterChange: ' + indexAfterChange);
                        jQuery("#award_contentcarousel").trigger('next.owl.carousel');
                    } else {
                        console.log('Slide did not change');
                    }

        }    else {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        jQuery("#award_contentcarousel").trigger('prev.owl.carousel');
                    }
    }
 });
  jQuery("#award_carousels").on("dragged.owl.carousel", function (event) {
         if (event.relatedTarget['_drag']['direction'] == "left") {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        console.log('Slide changed, indexAfterChange: ' + indexAfterChange);
                        jQuery("#award_contentcarousels").trigger('next.owl.carousel');
                    } else {
                        console.log('Slide did not change');
                    }

        }    else {
                    var indexAfterChange = event.page.index;
                    if (indexAfterChange != indexBeforeChange) {
                        jQuery("#award_contentcarousels").trigger('prev.owl.carousel');
                    }
    }
 });

 /*      jQuery("#bannerbottomcarousel").owlCarousel({

        items: 1,
        loop: true,
        autoplay: false,
        nav: false,
        margin: 0,
        merge: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: false,
        fluidSpeed: false,
         smartSpeed: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                mergeFit: true,
                nav: true
            },
            600: {
                items: 1,
                margin: 0,
                mergeFit: true,
                nav: false
            },
            1024: {
                items: 1,
                mergeFit: true,
                nav: false
            },
            1200: {
                items: 1,
                nav: true,
                mergeFit: true,
                loop: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });

    jQuery("#bannerbottomcarouselnavigator").owlCarousel({

        items: 1,
        loop: true,
        autoplay: false,
        nav: false,
        margin: 0,
        merge: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: false,
        fluidSpeed: false,
         smartSpeed: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                mergeFit: true,
                nav: true
            },
            600: {
                items: 1,
                margin: 0,
                mergeFit: true,
                nav: false
            },
            1024: {
                items: 1,
                mergeFit: true,
                nav: false
            },
            1200: {
                items: 1,
                nav: true,
                mergeFit: true,
                loop: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
jQuery("#bannerbottomcarousel").on("dragged.owl.carousel", function (event) {
        if (event.relatedTarget['_drag']['direction'] == "left") {
                jQuery("#bannerbottomcarouselnavigator").trigger('next.owl.carousel');
        }    else {
                jQuery("#bannerbottomcarouselnavigator").trigger('prev.owl.carousel');
    }
}); */
    jQuery("#award_contentcarousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        autoplay: true,
        nav: false,
        margin: 0,
        merge: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: false,
        fluidSpeed: true,
         smartSpeed: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                mergeFit: true,
                nav: true
            },
            600: {
                items: 1,
                margin: 0,
                mergeFit: true,
                nav: false
            },
            1024: {
                items: 1,
                mergeFit: true,
                nav: false
            },
            1200: {
                items: 1,
                nav: true,
                mergeFit: true,
                loop: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    }); 
	
	jQuery("#award_contentcarousels").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        autoplay: false,
        nav: false,
        margin: 0,
        merge: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: false,
        fluidSpeed: true,
         smartSpeed: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        responsive: {
             1200: {
                items: 1,
                nav: true,
                mergeFit: true,
                loop: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });
jQuery('.anexts').click(function(event) {
        jQuery("#award_carousel").trigger('next.owl.carousel');
        jQuery("#award_contentcarousel").trigger('next.owl.carousel');
		jQuery("#award_carousels").trigger('next.owl.carousel');
        jQuery("#award_contentcarousels").trigger('next.owl.carousel');

    });

    jQuery('.aprevs').click(function(event) {
        jQuery("#award_carousel").trigger('prev.owl.carousel');
        jQuery("#award_contentcarousel").trigger('prev.owl.carousel');
		jQuery("#award_carousels").trigger('prev.owl.carousel');
        jQuery("#award_contentcarousels").trigger('prev.owl.carousel');
    });

    jQuery('.award-banner-next').click(function(event) {
        jQuery("#award_carousel").trigger('next.owl.carousel');
        jQuery("#award_contentcarousel").trigger('next.owl.carousel'); 
		jQuery("#award_carousels").trigger('next.owl.carousel');
        jQuery("#award_contentcarousels").trigger('next.owl.carousel');

    });

    jQuery('.award-banner-prev').click(function(event) {
        jQuery("#award_carousel").trigger('prev.owl.carousel');
        jQuery("#award_contentcarousel").trigger('prev.owl.carousel'); 
		jQuery("#award_carousels").trigger('prev.owl.carousel');
        jQuery("#award_contentcarousels").trigger('prev.owl.carousel');
    });
 
jQuery('#bannercarousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: false,
        margin: 0,
        merge: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: true,
        fluidSpeed: true,
         smartSpeed: 350,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });
 jQuery("#carousel_2").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        nav: true,
        margin: 20,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                margin: 0,
                nav: false
            },
            1024: {
                items: 2,
                nav: false
            },
            1200: {
                items: 3,
                nav: true,
                loop: true
            }
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
        }
    });

    jQuery('.version-zero-sec .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        navigation: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        navigationText: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
 var trigg = false;
    jQuery('.collaps-trigger').on('click', function() {
        if (trigg === false) {
            jQuery('#morenews').slideDown();
            trigg = true;
             jQuery(this).html('Less News');
        } else {
            jQuery('#morenews').slideUp();
            trigg = false;
            jQuery(this).html('More News');
        }
    });
 jQuery('.strategic-sec-bot .videoplay').mouseover(function() {
        jQuery(this).addClass('open');
    });
    jQuery('#bot3').mouseleave(function() {
        jQuery('.videoplay').removeClass('open');
    });
    jQuery('.share-bottom-work .primary-btn-black').on('click', function() {
        jQuery(this).find('.addthis_inline_share_toolbox').fadeToggle();
    });
    jQuery(document).on("click", function(e) {
        var p = jQuery(e.target).closest('.videoplay').length;
        if (!p) {
            jQuery('.videoplay').removeClass("open");
        }
    });


/*=====================================================  SVG =====================================*/
  var jQuerygrid = jQuery('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    names: '.names',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = jQuery( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});
var filterFns = {
   numberGreaterThan50: function() {
    var number = jQuery(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
   ium: function() {
    var name = jQuery(this).find('.names').text();
    return name.match( /iumjQuery/ );
  }
};
jQuery('.filters-button-group').on( 'click', 'button', function() {
  var sortValue = jQuery(this).attr('data-sort-value');
  jQuerygrid.isotope({ sortBy: sortValue });
   var filterValue = jQuery( this ).attr('data-filter');
  filterValue = filterFns[ filterValue ] || filterValue;
  jQuerygrid.isotope({ filter: filterValue });
  if(filterValue=='*'){	
		$('.filtermmdata').val('');
	}
	else{
		$('.filtermmdata').val(filterValue);
	}
});
jQuery('.button-group').each( function( i, buttonGroup ) {
  var jQuerybuttonGroup = jQuery( buttonGroup );
  jQuerybuttonGroup.on( 'click', 'button', function() {
    jQuerybuttonGroup.find('.is-checked').removeClass('is-checked');
    jQuery( this ).addClass('is-checked');
  });
}); 


 
jQuery('.filtermmdata').change(function() { 

  var sortValue = jQuery(this).attr('data-sort-value');
  jQuerygrid.isotope({ sortBy: sortValue });
   var filterValue = jQuery(this).find("option:selected").val();
  filterValue = filterFns[ filterValue ] || filterValue;
  jQuerygrid.isotope({ filter: filterValue });
 
 $('.filters-button-group').find('.is-checked').removeClass('is-checked'); 
		if(filterValue==''){
			 $('.filters-button-group').find('.allcards').addClass('is-checked');
		}
		else{
			 $('.filters-button-group').find(filterValue).addClass('is-checked');
		} 
		
		
/* var $grid = $('.researchm_cards').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows',
  fitRows: {
    columnWidth: 'auto'
  } 
}); 
  var $this = $(this);
  var isHorizontalMode = !!$this.attr('data-is-horizontal');
  if ( isHorizontal !== isHorizontalMode ) {
    var containerStyle = isHorizontalMode ? {
      height: $window.height() * 0.7
    } : {
      width: 'auto'
    };
    $grid.css( containerStyle );
    isHorizontal = isHorizontalMode;
  }

  var layoutModeValue ='fitRows'; 
  $grid.isotope({ layoutMode: layoutModeValue });
  
  
	var filterValue = $(this).find("option:selected").val();
      
        $grid.isotope({ filter: filterValue });
		$('.filter-button-group').find('.active').removeClass('active'); 
		if(filterValue==''){
			 $('.filter-button-group').find('.all').addClass('active');
		}
		else{
			 $('.filter-button-group').find(filterValue).addClass('active');
		} */
		
});




jQuery('.method_clicked').on( 'click', function() {
  var method_cat = jQuery( this ).attr('data-filter'); 
  localStorage.setItem('method_cat', method_cat); 
});
jQuery('.method_clicked').contextmenu(function() { 
  var method_cat = jQuery( this ).attr('data-filter'); 
  localStorage.setItem('method_cat', method_cat); 
});
jQuery('.method_clicked').mousedown(function() {
  var method_cat = jQuery( this ).attr('data-filter'); 
  localStorage.setItem('method_cat', method_cat); 
});
if(jQuery('body').hasClass('page-template-design-research')){
  	if(localStorage.getItem('method_cat') != null){
		jQuery("html, body").animate({scrollTop: jQuery('#quadrant').offset().top}, 500);  
	   var methodcat = localStorage.getItem('method_cat'); 
	   jQuery('.' + methodcat).trigger('click');
	    localStorage.removeItem('method_cat');
  }
else{
	   
}   
}





jQuery(".suggested-read .read-method svg").parent().parent().parent().find('a').on("mouseover", function () {  
  var parentid= '#'+jQuery(this).find('svg').attr('id');
         animates(parentid);
});
jQuery(".suggested-read .read-method svg").parent().parent().parent().find('a').on("mouseleave", function () {  
  var parentid= '#'+jQuery(this).find('svg').attr('id');
         animates_out(parentid);
});
 

 jQuery("svg").on("mouseover", function () {
        var parentid= '#'+jQuery(this).attr('id');
         animates(parentid);
});
jQuery("svg").on("mouseleave", function () {
        var parentid= '#'+jQuery(this).attr('id');
         animates_out(parentid);
});  

function animates(parentid){
    jQuery(parentid+" #Layer_2").attr("class", "fade-in two");
    jQuery(parentid+" #Layer_3").attr("class", "fade-in three");
    jQuery(parentid+" #Layer_4").attr("class", "fade-in four");
    jQuery(parentid+" #Layer_5").attr("class", "fade-in five");
    jQuery(parentid+" #Layer_6").attr("class", "fade-in six");
    jQuery(parentid+" #Layer_7").attr("class", "fade-in seven");
    jQuery(parentid+" #Layer_8").attr("class", "fade-in eight");
    jQuery(parentid+" #Layer_9").attr("class", "fade-in nine");
    jQuery(parentid+" #Layer_10").attr("class", "fade-in ten");
    jQuery(parentid+" #Layer_11").attr("class", "fade-in eleven");
}
function animates_out(parentid){
    jQuery(parentid+" #Layer_2").attr("class", "two");
    jQuery(parentid+" #Layer_3").attr("class", "three");
    jQuery(parentid+" #Layer_4").attr("class", "four");
    jQuery(parentid+" #Layer_5").attr("class", "five");
    jQuery(parentid+" #Layer_6").attr("class", "six");
    jQuery(parentid+" #Layer_7").attr("class", "seven");
    jQuery(parentid+" #Layer_8").attr("class", "eight");
    jQuery(parentid+" #Layer_9").attr("class", "nine");
    jQuery(parentid+" #Layer_10").attr("class", "ten");
    jQuery(parentid+" #Layer_11").attr("class", "eleven");
}

jQuery('.services_card a').hover(function(){
     jQuery(this).find("p").slideToggle();
});

});
                /* OUT OF FUNCTINS */
jQuery(function() {

    var jQueryallVideos = jQuery("iframe[src*='//player.vimeo.com'], iframe[src*='//www.youtube.com'], object, embed"),
        jQueryfluidEl = jQuery("figure");

    jQueryallVideos.each(function() {

        jQuery(this)
            // jQuery .data does not work on object/embed elements
            .attr('data-aspectRatio', this.height / this.width)
            .removeAttr('height')
            .removeAttr('width');

    });

    jQuery(window).resize(function() {
				 
  		
        var newWidth = jQueryfluidEl.width();
        jQueryallVideos.each(function() {

            var jQueryel = jQuery(this);
            jQueryel
                .width(newWidth)
                .height(newWidth * jQueryel.attr('data-aspectRatio'));

        });

    }).resize();
var ullist=jQuery('.research_cardb ul li').find("strong");
if(ullist.length>0){
	jQuery('.research_cardb ul li').find("strong").parent().css({'list-style':'none','margin-left':'0px'});	
}

var ullist_recomended=jQuery('.methods_recommendation ul li').find("strong");
if(ullist_recomended.length>0){
	jQuery('.methods_recommendation ul li').find("strong").parent().css({'list-style':'none','margin-left':'0px'});	
}

    //Account Hierarchy
 /*    jQuery(".hierarchy-list li ul li span").on("click", function () {
		 jQuery(this).next().next("ul.nav").slideToggle();
        jQuery(".hierarchy-list a").removeClass("highlight"); */
        // jQuery(".hierarchy-list a").tab('hide');
       /*  jQuery(this).tab('show'); */
     /*    jQuery(this).addClass("highlight");
    }); */

    jQuery(".hierarchy-list li span").on("click", function () {
		 jQuery(this).next().next("ul.nav").slideToggle();
        jQuery(".hierarchy-list a").removeClass("highlight");
        // jQuery(".hierarchy-list a").tab('hide');
       /*  jQuery(this).tab('show'); */
        if(jQuery(this).hasClass('collapsed')){
			jQuery(this).removeClass("collapsed");
		}
		else{
			jQuery(this).addClass("collapsed").fadeIn();
		}
    });

	
	/*   jQuery(".hierarchy-list li.nocollapse a").on("click", function () { 
			 jQuery(this).next("ul.nav.stop").stop();
    }); */
	
 
});

/*  document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Thought", "Strategized", "Organized", "Conceptualized", "Managed", "Made   ", "Beyond "];
  var i=0;
  // type one text in the typwriter
  // keeps calling itself until the text is finished
    var j=0;
  function typeWriter(text, i, fnCallback) {

    // chekc if text isn't finished yet
    if (i < (text.length)) {

      // add next character to h1
     document.querySelector("#typer").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
      }, 200);

    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }


  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        j++;
        setTimeout(function() {
          StartTextAnimation(0);
        }, 700);
     }
 if(j<8){
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
 }
    j++;

  }
  if(jQuery("#typer").length>0){
  StartTextAnimation(0);
  }
 }); */
jQuery(function() { 
		 jQuery(".cookie_btn").on("click", function (e) {
				e.preventDefault();
				setTimeout(function() {
					localStorage.setItem('cookie_store','stored');
					localStorage.setCacheItem("cookie_store", "stored", { days: 10000 });  
				 }, 10); 
				 jQuery('.cookie_banner-wrapper').fadeOut();
		 });
		   if(localStorage.getItem('cookie_store') != 'stored'){ 
				  jQuery('.cookie_banner-wrapper').css({'display':'block'});  
			 } 
	 
jQuery(".quards").hover(function (e) {
	 jQuery(this).parent().find('.hovered').addClass('showing'); 
 }, function(){
     jQuery(this).parent().find('.hovered').removeClass('showing'); 
});  
  jQuery(".quard_infoicon").on("click",function (e) {
	 jQuery(this).parent().find('.hovered').addClass('showing'); 
});  
jQuery(".hovered").on("click", function (e) {
	jQuery(this).toggleClass('showing'); 
});	
/* \\\\\\\\\\\\\\\\\\ ||||||||||||||||||| === update code===	||||||||||||||||||||||		 */
 function search_result(search){
			  jQuery(".sresults").empty();
			     var str ='&search=' + search + '&action=ajax_search';
				 jQuery.ajax({
					type: "POST",
					dataType: "json",
					url: ajax_posts.ajaxurl,
					data: str,
					beforeSend: function() {
					  jQuery(".preresults").fadeOut("fast");
					  jQuery(".preloader").fadeIn("fast"); 
					  jQuery(".results").mCustomScrollbar("destroy");
					},
					success: function(data){
						if(data.length){
							jQuery(".preresults").fadeOut("fast"); 
							   jQuery(".preloader").fadeOut("fast");
							   jQuery(".sresults").empty();
							   
							 jQuery.each(data, function (index, value) {
							
						     jQuery(".sresults").fadeIn();
						     jQuery(".sresults").append('<li><a href="'+ value.href +'">'+ value.title +'<br><span>' + value.href + '</span></a></li>');
						  
						  
							});
						}
						else{
							jQuery(".preresults").fadeIn("fast"); 
							 jQuery(".sresults").empty(); 
						}
					 	 
					},
					complete: function () { 
								windowWidth = jQuery(window).width();
							  if(windowWidth>1100) { 
											jQuery('.results').mCustomScrollbar({ theme:"minimal-dark" });       
								}  
								
					 },					
					error : function(jqXHR, textStatus, errorThrown) {
						jQueryloader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
					}

				});
 }			
			
 	
 var jQuerywindow = jQuery(window), previousScrollTop = 0, scrollLock = false;
jQuerywindow.scroll(function(event) {     
    if(scrollLock) {
        jQuerywindow.scrollTop(previousScrollTop); 
    }
 previousScrollTop = jQuerywindow.scrollTop();
});		
jQuery('.search-box').val('');		
	jQuery('#searchicon').on("click",function() {
		 jQuery('.search-section').fadeIn();
		 jQuery('.search-box').focus();
		  scrollLock = true;		 		 
			 
    });
 
	jQuery('.searchclose').on("click",function() {
		 jQuery('.search-section').fadeOut('fast');
		 scrollLock = false;		
			
    });	
	jQuery(".search-box").focusin(function (e) {
		 jQuery('.search-box-container').addClass('focused');
	});	
	jQuery(".search-box").blur(function (e) {
		 jQuery('.search-box-container').removeClass('focused');
	});
		jQuery(".search-box").on("keyup",function (e) {
				
				var search = jQuery.trim(jQuery(this).val());
				 jQuery(".sresults").empty();
				 if(search.length >= 2){  
				 jQuery(".preloader").css({'opacity':'1'}); 
			        search_result(search);
				}
				else{  
				    var search =0;
						search_result(search);
					 jQuery(".sresults").fadeOut("fast");
					 jQuery(".sresults").empty();
				    jQuery(".preloader").css({'opacity':'0'});
				 }
		}); 
jQuery('.workareast>li').on("mouseover",function() {
      jQuery(this).find('a').show();
});	
jQuery('.workareast>li').on("mouseout",function() {
      jQuery(this).find('a').hide();
}); 

/* if(localStorage.getItem('havs')!='hide'){ 
	localStorage.setItem("havs", "show", { days: 1 });  
}
if(localStorage.getItem('cookie_pops') != 'popup'){
	
	havss = localStorage.getItem('havs');
	if(havss == 'show'){
		jQuery("#tdmoments").modal('show');	
	}
	else{
		jQuery("#tdmoments").modal('hide');	
	}
}
else{
	jQuery("#tdmoments").modal('hide');		
}	
jQuery('.closehavas').on("click",function() {	 
	 localStorage.setItem("havs", "hide", { days: 1 }); 
	jQuery("#tdmoments").modal('hide');	
 
});
 
jQuery('.dismissbox').on("click",function() {
	 localStorage.setItem("cookie_pops", "popup", { days: 365 });  jQuery("#tdmoments").modal('hide');	
});
	
 if(localStorage.getItem('cookie_noti') != 'popup'){ 
	 jQuery("#notipopup").addClass('show');		
	 localStorage.setItem('cookie_noti','popup');
	 Cookies.set("cookie_noti", "popup", { days: 365 });  
  }
else{
	  jQuery("#notipopup").removeClass('show');	 
}  
jQuery('#notipopup .close').on("click",function() {  
     jQuery("#notipopup").removeClass('show'); 
}); 
jQuery("#notipopup").removeClass('show'); 
jQuery("#notipopup").hide(); */

if(jQuery('.comn-slider').length){
    jQuery('.owl-award-main').owlCarousel({
      loop: true,
        items: 1,
        margin: 0,
        dots: false,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
          320: {
            nav: false,
            dots: true
          },
          800: {
            nav: true,
            dots: false
          }
        }
    });
jQuery('.responsiveslider .owl-award-mains').owlCarousel({
      loop: true,
        items: 1,
        margin: 0,
        dots: false,
        nav: true,/* autoheight */
        autoplay: false,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
          320: {
            nav: false,
            dots: true
          },
          800: {
            nav: false,
            dots: true
          },
		  
          1100: {
            nav: true,
            dots: false
          }
        }
    });
	
  }
 if(jQuery('.comn-slider').length){
    jQuery('.historys').owlCarousel({
      loop: true,
        items: 1,
        margin: 0,
        dots: false,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
          responsive: {
          320: {
            nav: false,
            dots: true
          },
          800: {
            nav: false,
            dots: true
          },
		  1100: {
            nav: true,
            dots: false
          }
        }
    })
  }
  
  if(jQuery('.fullw-slider').length){
    jQuery('.owl-fullw-main').owlCarousel({
      loop: true,
        items: 1,
        margin: 0,/* autoplayHoverPause:true, */
        dots: true,
        nav: false,
        autoplay: true,
        smartSpeed: 0,
		autoplayTimeout:4000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
          320: {
             dots: true,
			  nav: false
          },
          800: {
            dots: true,
			nav: false
          }
        }
    })
  }
   if(jQuery('.home-slider').length){
    jQuery('.owl-fullw-home').owlCarousel({
      loop: true,
        items: 1,
        margin: 0,  /* autoplayHoverPause:true,   */
        dots: true,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
		autoplayTimeout:8000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
          320: {
             dots: true,
			  nav: false
          },
          800: {
            dots: true,
			nav: false
          }
        }
    })
  }

if(jQuery('.owl-fullw-home').length>0){ 
	var leftspace = $("#about > .container").css("marginLeft");
	var topspace = $(".text-content-wraper").offset().top - 195;
	 
	 $(".owl-fullw-home .text-content-wraper").css({'left':leftspace});
	 $(".owl-fullw-home .owl-dots").css({'left':leftspace,'top':topspace});
	 
	 
	 
	 jQuery(window).resize(function() {
		var leftspace = $("#about > .container").css("marginLeft");
		var topspace = $(".text-content-wraper").offset().top - 195;
		 $(".owl-fullw-home .text-content-wraper").css({'left':leftspace});
		 $(".owl-fullw-home .owl-dots").css({'left':leftspace,'top':topspace});
	  });
 
	 function fullw_home(){
		   windowWidth = jQuery(window).width();	
			if(windowWidth<991) {
				var leftspace = $("#about > .container").css("marginLeft");
				var topspace = $(".text-content-wraper").offset().top - 180;
		  
				$(".owl-fullw-home .text-content-wraper").css({'left':leftspace});
				$(".owl-fullw-home .owl-dots").css({'left':leftspace,'top':topspace});
			}
			if(windowWidth<767) {
				var leftspace = $("#about > .container").css("marginLeft");
				var topspace = $(".text-content-wraper").offset().top - 165;
				$(".owl-fullw-home .text-content-wraper").css({'left':5});
				$(".owl-fullw-home .owl-dots").css({'left':5,'top':topspace});
			}
	 }	
	 fullw_home();
		 jQuery(window).resize(function() {
			   fullw_home();
		 });
}

if(windowWidth>1100) { 
	jQuery('.menues').mCustomScrollbar({ theme:"minimal-dark" });     
}
 jQuery(window).resize(function() {
		 windowWidth = jQuery(window).width();	
		 if(windowWidth>1100) { 
				jQuery('.menues').mCustomScrollbar({ theme:"minimal-dark" });     
			}
	  });

jQuery(".close").click(function() { 
	  $('video').trigger('pause');
});

});


jQuery(function() {
 
//var $grid = $('.work-showcase-block').isotope();


/* var $isotopegrid = jQuery('.work-showcase-block');
     $isotopegrid.imagesLoaded( function() {
        $isotopegrid.isotope({
           itemSelector: '.item',
			  layoutMode: 'fitRows',
			  fitRows: {
				columnWidth: 'auto'
			  }
        });
    }) */



var $grid = $('.work-showcase-block').isotope({
           itemSelector: '.item',
			  layoutMode: 'fitRows',
			  fitRows: {
				columnWidth: 'auto'
			  }
        });
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope();
});  




/* if($('body').hasClass('page-template-work')){ 
	 setTimeout(function () {
		 
			var $grid = $('.work-showcase-block').isotope({
			  itemSelector: '.item',
			  layoutMode: 'fitRows',
			  fitRows: {
				columnWidth: 'auto'
			  }
			});
		}, 1500); 
}  */
var isHorizontal = false;
var $window = $( window );



  
$('.filter-button-group').on( 'click', 'button', function() { 
  var $this = $(this);
  var isHorizontalMode = !!$this.attr('data-is-horizontal');
  if ( isHorizontal !== isHorizontalMode ) { 
    var containerStyle = isHorizontalMode ? {
      height: $window.height() * 0.7
    } : {
      width: 'auto'
    };
    $grid.css( containerStyle );
    isHorizontal = isHorizontalMode;
  } 
  var layoutModeValue ='fitRows'; 
  $grid.isotope({ layoutMode: layoutModeValue });
  
  
   var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
	if(filterValue=='*'){	
		$('.filtermm').val('');
	}
	else{
		$('.filtermm').val(filterValue);
	}
});  


$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.active').removeClass('active');
    $( this ).addClass('active');
  });
});


$('.filtermm').change(function() { 
var $grid = $('.work-showcase-block').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows',
  fitRows: {
    columnWidth: 'auto'
  } 
}); 
  var $this = $(this);
  var isHorizontalMode = !!$this.attr('data-is-horizontal');
  if ( isHorizontal !== isHorizontalMode ) {
    var containerStyle = isHorizontalMode ? {
      height: $window.height() * 0.7
    } : {
      width: 'auto'
    };
    $grid.css( containerStyle );
    isHorizontal = isHorizontalMode;
  }

  var layoutModeValue ='fitRows'; 
  $grid.isotope({ layoutMode: layoutModeValue });
  
  
	var filterValue = $(this).find("option:selected").val();
      
        $grid.isotope({ filter: filterValue });
		$('.filter-button-group').find('.active').removeClass('active'); 
		if(filterValue==''){
			 $('.filter-button-group').find('.all').addClass('active');
		}
		else{
			 $('.filter-button-group').find(filterValue).addClass('active');
		}
		
});






jQuery('.blogfilter .filter-button-group button').on( 'click', function() {
  var blog_cat = jQuery( this ).attr('data-filter');  
    localStorage.setItem('blog_cat', blog_cat); 
});

if($('body').hasClass('page-template-blog') || $('body').hasClass('single-post')){
	 var blog_cat = localStorage.getItem('blog_cat');    
	 jQuery(blog_cat).trigger('click');
}
else{
	localStorage.removeItem('blog_cat');
}

jQuery('.workfilter .filter-button-group button').on( 'click', function() {
  var work_cat = jQuery( this ).attr('data-filter');  
    localStorage.setItem('work_cat', work_cat); 
});

if($('body').hasClass('page-template-work') || $('body').hasClass('single-work')){
	 var work_cat = localStorage.getItem('work_cat');    
	 jQuery(work_cat).trigger('click');
}
else{
	localStorage.removeItem('work_cat');
}

 
	    
 
jQuery('.researchm_card.filters-button-group button').on( 'click', function() {
  var methodcat = jQuery( this ).attr('data-filter');  
    localStorage.setItem('methodcat', methodcat); 
});

if($('body').hasClass('page-template-data-research') || $('body').hasClass('single-methods')){
	 var methodcat = localStorage.getItem('methodcat');    
	 jQuery(methodcat).trigger('click');
}
else{
	localStorage.removeItem('methodcat');
}

if(localStorage.getItem('methodcat') != null){
		jQuery("html, body").animate({scrollTop: jQuery('#quadrant').offset().top}, 500);  
	   var methodcat = localStorage.getItem('methodcat'); 
	   jQuery('.' + methodcat).trigger('click');
	    localStorage.removeItem('methodcat');
  }

  firstchild = $('.breadcrumb li:first-child').find('span').text();
  secondchild = $('.breadcrumb li:nth-child(2)').find('span').text();
	
function breadcrumbtxt(){
	windowWidth = jQuery(window).width();	
	if(windowWidth>767) {
		
				if($('body').hasClass('single-methods')){
					    $('.breadcrumb li:first-child').show(); 
						 $('.breadcrumb li:nth-child(2)').find('span').text(secondchild);
					  
					}
					if($('body').hasClass('single-work') || $('body').hasClass('single-post') || $('body').hasClass('single-newsn')){
					  
						 $('.breadcrumb li:first-child').find('span').text(firstchild); 
					  
			      }
		
	}
		if(windowWidth<767) { 
		if(jQuery('.breadcrumb').length>0){
				   
					if($('body').hasClass('single-methods')){ 
						 $('.breadcrumb li:first-child').hide();
						 $('.breadcrumb li:nth-child(2)').find('span').text('...'); 
					}
					if($('body').hasClass('single-work') || $('body').hasClass('single-post') || $('body').hasClass('single-newsn')){ 
						 $('.breadcrumb li:first-child').find('span').text('...');  
					}
		}
		
	}
	 
}
breadcrumbtxt();

 if(jQuery('.error404').length>0){
	setTimeout(function() {
						window.location.href = 'index.html';
					 }, 5000);  
 }
if(jQuery('.text-content-wraper').length>0){
 var divs = jQuery('.text-content-wraper'),
            limit = 550;
        jQuery(window).on('scroll', function() {
            var st = jQuery(this).scrollTop();
            if (st <= limit) {
                divs.css({
                    'opacity': (1 - st / limit)
                });
				jQuery('.owl-fullw-home .owl-dots').css({
                    'opacity': (1 - st / limit)
                });
            }
        });
  }	

jQuery(window).resize(function() {
	  breadcrumbtxt();
 });
setTimeout(function() {
					jQuery('.pagenotfound').addClass('animatnow'); 
					jQuery('.checkmarks').addClass('animatnowsucc'); 
					jQuery('.scountdown').addClass('startanimate'); 
				 }, 1000);  


var count = $('.coundown');
timeoutfn = function(){ 
       countv = parseInt(count.text()) - 1;
	   count.text(countv);
	   if(countv==0){
		   clearTimeout(timeoutfn);
		    if($('body').hasClass('page-template-success-inership')){
		       window.location = 'internships-2020/index.html'; 
		   }
		   else if($('body').hasClass('page-template-success-inership-mentor')){
		       window.location = 'internships-2020-mentorship/index.html'; 
		   }
		   else{
			    window.location = 'index.html'; 
		   }  
		   /* window.location = document.referrer;   */
	   }
	   else{
		setTimeout(timeoutfn, 1000);
	   }
};
setTimeout(timeoutfn, 1000);
 jQuery(document).ready(function(){
 if($('body').hasClass('page-template-blog') || $('body').hasClass('single-post')){	
	$(".item").each(function() {
		var ps = $(this).find('.tcontent').find('h3');
		  
		  var p = ps[0];
		  var lines = lineWrapDetector.getLines(p);    
		  var count = lines.length;
		  if(count==1){
			  $(this).find('.tcontent').css({'-webkit-line-clamp':'5'});
		  }
		  else if(count==2){
			  $(this).find('.tcontent').css({'-webkit-line-clamp':'4'});
		  }
		  else if(count==3){
			  $(this).find('.tcontent').css({'-webkit-line-clamp':'3'});
		  }
		  else if(count==4){
			  $(this).find('.tcontent').css({'-webkit-line-clamp':'2'});
		  }
		  else{
			  $(this).find('.tcontent').css({'-webkit-line-clamp':'1'});
		  }
		  
	});   
}
 });
 

jQuery('#menu-home-menu .menu-item-has-children>a').on( 'click', function() { 
	    
});
 jQuery('#menu-home-menu a').on( 'click', function() { 
		if(!$(this).parent().hasClass('menu-item-has-children')){
			jQuery('.menuOverlay').fadeOut('fast');
			jQuery('.menues').fadeOut('fast'); 
			jQuery('.hidden-close-toggle').fadeOut('fast'); 
			jQuery('#hambernav').css({'opacity':'1'}); 
		}
 });
 

jQuery('a').on("click",function() {
	if($(this).attr('data-target')=='#contact_popup'){
		 jQuery('.contactfrm-section').fadeIn();
		 jQuery('.search-box').focus();
		  scrollLock = true;
	}	  
		 
});

jQuery('.contactfrm-section .searchclose').on("click",function() {
	  jQuery('.contactfrm-section').fadeOut('fast'); 		
});	
function removeHoverCSSRule() {
  if ('createTouch' in document) {
    try {
      var ignore = /:hover/;
      for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if (!sheet.cssRules) {
          continue;
        }
        for (var j = sheet.cssRules.length - 1; j >= 0; j--) {
          var rule = sheet.cssRules[j];
          if (rule.type === CSSRule.STYLE_RULE && ignore.test(rule.selectorText)) {
            sheet.deleteRule(j);
          }
        }
      }
    }
    catch(e) {
    }
  }
}
removeHoverCSSRule();

 $("#ourvaluevideo").on('hidden.bs.modal', function (e) {
    $("#ourvaluevideo iframe").attr("src", $("#ourvaluevideo iframe").attr("src"));
});

 
 
 $('#sresults').click( function(e){
	var searchterm = $('.search-box').val(); 
	var searchedurl = (e.target).getAttribute('href');
	window.dataLayer = window.dataLayer || [];
				 window.dataLayer.push({
					'event': 'searchedclicked',
					'searchedurl': searchedurl, 
					'searchterm': searchterm 
				});
});

function checkexpiration() { 
    var oldd = localStorage.getItem('avgsession');

    if (oldd) {
        if (Date.parse(new Date()) >= Date.parse(oldd)) {
			console.log('nd');
            localStorage.removeItem("avgsession");
            localStorage.removeItem("sent");
        }
    }
	console.log('in');
    if (localStorage.getItem('avgsession')) {
        var oldt = Date.parse(oldd);
        var ct = Date.parse(new Date());

        var diffet = (oldt - ct) / (1000 * 60);
        var usrtime = 60 - diffet; 
        if (usrtime == 3 || usrtime > 3) {
            if (localStorage.getItem('sent')) {
                clearInterval(setrefresh);
            } else {
                 window.dataLayer.push({
					'event': 'sessionduration3min'
				});
                localStorage.setItem('sent', 'sent');
                clearInterval(setrefresh);
            }
        }
    } else { 
        var dt = new Date();
        dt.setMinutes(dt.getMinutes() + 60);
        localStorage.setItem('avgsession', dt);
    }

}
var myinterval = 1000;
var setrefresh = setInterval(function() {
    checkexpiration();
}, myinterval);


function loadmore_fun(){
	windowWidth = jQuery(window).height();
	var maxheight =  windowWidth / 2;
	var totalHeight=0;
		totalHeight = $('.shadowb').outerHeight(); 
	 
 	   setTimeout(function(){
			 jQuery('.shadowb').css({'height':maxheight});
		 },500) 
	
	jQuery('.loadmore').on("click",function() { 		
		jQuery('.shadowb').css({'transition':'height 2s linear','height':totalHeight+'px'});
		$('.loadmorebox').hide();
		 jQuery('.shadowb').removeClass('actives');
		  setTimeout(function(){
			jQuery('.shadowb').css({'height':'100%'});
		 },1500) 
	});	
}
if(jQuery('.single-post').length){
	loadmore_fun();  
};

jQuery('.embedcode').on("click",function() {
	jQuery('.shareBox').fadeIn();scrollLock = true;	
});	

jQuery('.closetdpop').on("click",function() {
  jQuery('.tdpopup').fadeOut('fast'); scrollLock = false;			
});	
$('.c_link').click(function(){
   var copylink = $('.sharecode').val();
	
	 var $temp = $("<input>");
	  $("body").append($temp);
	  $temp.val(copylink).select();
	  document.execCommand("copy");
	  $temp.remove(); 
	  var x = $(".link_copied");
 $(".link_copied").addClass('show');
   setTimeout(function(){ $(".link_copied").removeClass('show'); }, 3000);
});
$('.rateus').click(function(){
	if($(this).text()=='Yes'){
		var msg = 'Thank you for your feedback.';
	}
	else{
		var msg = 'Thank you for your feedback.';
	}
		$(".feedbck").text(msg);
		$(".feedbck").addClass('show');
		setTimeout(function(){ $(".feedbck").removeClass('show');$(".feedbck").text(''); }, 3000);
 });
 
 var hash= location.hash;
 if(hash){
	 console.log(hash);
	 $('html,body').animate({ scrollTop: $(hash).offset().top}, 500);
	 return false;
 }
 
   jQuery(".news-slider").owlCarousel({
        items: 3,
        loop: false,
        margin: 20,
        padding: 0,
        left: 0,
		
        nav: true,
        autoplay: false,
       /*  navigation: true, */
        navigationText: false,
        responsiveClass: true,
        mouseDrag: true,
        touchDrag: true, 

        fluidSpeed: true,
        smartSpeed: 450,
        autoplayTimeout: 6000,
        responsive: {
            0: { 
				items: 1,stagePadding: 30,
				dots: false
            },
            767: {
                items: 2,stagePadding: 30,
				dots: false 
            },
			   1000: {
                items: 3,
				dots: false
					
            } 
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
			console.log(current);
        }
    });
jQuery('.custom-owl-nav .owl-next').click(function(event) {
    jQuery(".news-slider").trigger('next.owl.carousel'); 

});
jQuery('.custom-owl-nav .owl-prev').click(function(event) {
    jQuery(".news-slider").trigger('prev.owl.carousel'); 
});

/* var rightspace = $(".footer > .container").css("marginRight");
$("#intership-pop").css({'right':rightspace});
 jQuery(window).resize(function() {
	var rightspace = $(".footer > .container").css("marginRight");
	$("#intership-pop").css({'right':rightspace}); 
 }); 
jQuery('.closeintersp').on("click",function() {	  
	   $("#intership-pop").removeClass('show');
	   localStorage.setItem('setupTimess', now);
});
var hours = 7200; 
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTimess');
if (setupTime == null) {
	$("#intership-pop").addClass('show'); 
} else {
    if(now-setupTime > hours*60*60*1000) { 
		localStorage.removeItem('setupTimess');
		 $("#intership-pop").addClass('show'); 
    }
} */

   jQuery(".intership-slider").owlCarousel({
        items: 3,
        loop: false,
        margin: 20,
        padding: 0,
        left: 0,
		
        nav: true,
        autoplay: false,
       /*  navigation: true, */
        navigationText: false,
        responsiveClass: true,
        mouseDrag: true,
        touchDrag: true, 

        fluidSpeed: true,
        smartSpeed: 450,
        autoplayTimeout: 6000,
        responsive: {
            0: { 
				items: 2,stagePadding: 40,margin: 0,
				dots: false
            },
            767: {
                items: 3,stagePadding: 10,margin: 40,
				dots: false 
            },
			   1000: {
                items: 3,
				dots: false 
            } 
        },
        afterMove: function(elem) {
            var current = this.currentItem;
            var src = elem.find(".owl-item").eq(current).addClass('active').siblings().removeClass('active');
			console.log(current);
        }
    });
	
 if($('body').hasClass('page-template-internship') || $('body').hasClass('page-template-internship-mentor')){
	windowWidth = jQuery(window).width();	
	if(windowWidth<767) {
		$('.item > iframe').css({'width':'160'});
	 }
	 jQuery(window).resize(function() {
			windowWidth = jQuery(window).width();	
			if(windowWidth<767) {
				$('.item > iframe').css({'width':'160'});
			 }
	 });	 
 }
 
});

