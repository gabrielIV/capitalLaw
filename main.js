/*
	*
	* Authour: Jackson Chegenye
	* Company: LegibraLTD 2018
	*/

	//Hide page until everything is loaded
	$(document).ready(function() {
	  	document.getElementsByTagName("html")[0].style.visibility = "visible";
	});

	// Create & cache elements in variable here
	var  
		website_content = '#fullpage, #homelogo',
		homelogo = "homelogo",
		preloader = ".preloader",
		pre_svg = ".pre_svg",
		pre_text = ".pre_text",
		logo_path = '#path_1, #path_2, #path_3, #path_4, #path_5',
		pre_text_logo = ".pre_text_logo",
		logo = ".logo",
		home_bg_curtains_1 = ".home_bg_curtains_1",
		home_bg_curtains_2 = ".home_bg_curtains_2",
		navbar = ".navbar li",
		practice_area = ".practice_area img",
		home_tagline = "#home_tagline",
		practice_area_menus = ".flex-column",
		zoomImage = '.section:nth-child(1), .section:nth-child(2)',
		progress_bar = '.progress_bar',
		text_read_more = '.text_read_more';  

	//Define classes here
	var tl = new TimelineLite();
	var $reloadPage = $('#homelogo');
	var $animate_menu = $('.about_menu, .team_menu, .contact_menu');
	var $explore_more = $('.link_read_more, .link_close');
	var $next_prev = $('.fp-controlArrow.fp-prev:before');
	var splitTextTagline = new SplitText(pre_text, {type:"chars, words, lines"});
	var splitTextMenus = new SplitText(navbar, {type:"chars, words, lines"});
	var splitHomeTagline = new SplitText(home_tagline, {type:"lines"});
	var capitalLawEaseTween = new TimelineMax({
			//reversed:true,
			ease: Power1.easeIn,
			paused:true,
			repeat:-1,
			yoyo:true,
		});

		//GENERAL
		$animate_menu.click(function() {
			TweenLite.set(".pre_text_logo", {css:{color:"#000"} });
			TweenLite.set(".hamburger_line_x, .hamburger_line_x::before", {backgroundColor:"#000000"});
		});

		//Change logo text color to white
		$(".pa-area").click(function() {
			TweenLite.set(".pre_text_logo", {css:{color:"#fff"} });
		});

		//Animate all pages entrance
		var entrance_pages = '#section0_pa .menu_links, .pa-area, .about_menu, .team_menu, .contact_menu, .back_to_practive_area a';
		$(document).on('click', entrance_pages, function(){
			TweenLite.from(".contact_curtain_left", 1, { css:{ x:"-500vw", opacity:1}, ease:Power1.easeIn});
			TweenLite.from(".page_entrance", 1, { css:{width:"100%", x: "100%", zIndex:"999999", autoAlpha:0}, ease:Power1.easeIn});
			TweenLite.from("#section2 .fp-slide, .section:nth-child(2), #about, #team, #contact", 1, { css:{autoAlpha:0}, ease:Power1.easeIn});
		});

		/*var entrance_bg_images = '#section0_pa .menu_links, .pa-area, .back_to_practive_area a';
		$(document).on('click', entrance_bg_images, function(){
			TweenLite.from("#section2 .fp-slide, .section:nth-child(2)", 1, { css:{autoAlpha:0}, ease:Power1.easeIn});
		});*/

		//Activate hidden pages and animate
		var section_pages = '.pa-area, .about_menu, .team_menu, .contact_menu';
		$(document).on('click', section_pages, function(){ 
			TweenLite.set("#practice_areas, #about, #team, #contact", 0, {opacity:1, display:"block"});

			var ww = $(window).width();	
			    if(ww < 767) {
			    	TweenLite.set(".hamburger_line_x, .hamburger_line_x::before", {backgroundColor:"#000000"});
			    }
		});

		//Animate preloader
		TweenLite.from(website_content, 1, {opacity:1, autoAlpha:0, delay:6});//Delay website content for 6sec
		TweenLite.to(pre_text, 1, {x:150, ease:SlowMo.ease, yoyo:true, display:"none", delay:0.6, opacity:1});//SlowMo ease text first before logo & main content 
		TweenLite.to(pre_svg, 1, {x:100,  scale:2, ease:SlowMo.ease, yoyo:true,  delay:0.6}); //SlowMo ease logo 
		TweenMax.set(preloader, {display:"none", delay:6});//Delay preloader for 6sec before hiding
		tl.staggerFrom(logo_path, 0.6, {alpha:0, repeatDelay:1, repeat:-1, yoyo:true}, 0.1, "stagger");//Animate preloader logo
		TweenLite.from(logo_path, 0.6, { ease: CustomEase.create("custom", "M0,0 C0,0 0.023,0.173 0.045,0.276 0.05,0.301 0.058,0.319 0.07,0.34 0.077,0.355 0.084,0.378 0.1,0.375 0.324,0.326 0.586,0.52 0.875,0.612 0.891,0.617 0.904,0.623 0.915,0.634 0.928,0.648 0.936,0.664 0.945,0.683 0.955,0.707 0.96,0.725 0.965,0.751 0.981,0.846 1,1 1,1"), x: 100 });
		tl.staggerFrom(splitTextTagline.chars, 0.60, {autoAlpha:0, scale:1, force3D:true }, 0.01, 0.5);//Animate preloader logo text

		//Animate home background curtains
		TweenLite.to(home_bg_curtains_1, 1, { ease: Back.easeOut.config(1.7), x:"-90%", delay:6, yoyo:true});
		TweenLite.to(home_bg_curtains_2, 1, { ease: Back.easeOut.config(1.7), x:"70%", delay:6, yoyo:true});

		//Animate logo/text
		tl.from(pre_text_logo, 1, {ease: Back.easeOut.config(1.7), left:-100, opacity:0});
		CustomWiggle.create("logoWiggle", {wiggles:50});
		TweenMax.to(logo, 1, {rotation:40, ease:"logoWiggle", repeat:-1, repeatDelay:6});

		//Animate home tagline
		tl.staggerFrom(splitHomeTagline.lines, 1, {opacity:0,  repeatDelay:6, repeat:-1, ease: Back.easeOut.config(1.9), x: -500}, 0.1); /*cycle:{x:[-100, 100]},*/ 

		//Animate footer menus
		tl.staggerFrom(splitTextMenus.chars, 0.5, {autoAlpha:0, scale:1, force3D:true, repeat:-1, repeatDelay:6 }, 0.01, 0.9);
		TweenLite.from(practice_area, 2.5, { ease: Bounce.easeOut, x:-50 , rotation: 360, repeat:-1, delay:6, yoyo:true});

		//Animate practice area menus
	    mySplitText = new SplitText(practice_area_menus, {type:"words"}),
	    splitTextTimeline = new TimelineLite();
		//TweenLite.set(practice_area_menus, {perspective:400});
		$(".pa-area, pa-area-back").click(function() {
		   mySplitText.split({type:"lines"})
		   splitTextTimeline.staggerFrom(mySplitText.lines, 0.9, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -150", ease:Back.easeOut}, 0.2);
		});

		// Animate background images
		// Set initial CSS autoAlpha to 0
		capitalLawEaseTween
		.set(zoomImage,{backgroundSize:"100% 100%"})
		// animate CSS autoAlpha to 1
		.to(zoomImage, 50, {
		  backgroundSize: "+=50% +=50%", 
		  autoRound:false, 
		  ease: Power1.ease0ut,
		  yoyo:true
		})
		.progress(1).progress(0)
		.play();

		//Animate text pages
		$animate_menu.click(function() {
			TweenLite.from(text_read_more, 0.6, {scale:2, ease: CustomEase.create("custom", "M0,0 C0,0 0.049,0.675 0.085,1.115 0.122,1.498 0.156,1.34 0.16,1.322 0.189,1.193 0.203,1.111 0.23,0.978 0.262,0.818 0.303,0.876 0.307,0.882 0.335,0.925 0.349,0.965 0.38,1.006 0.43,1.088 0.484,1.022 0.53,0.997 0.58,0.964 0.667,1.002 0.725,1.004 0.829,1.008 1,1 1,1"), y: "-100%" });
		});

		/*
			*
			* 1. PRACTICE AREA
			*/

		//Hide all text boxes
		$(document).on('click', "#section0_pa .menu_links", function(){ 
			TweenLite.to("#section2 .explore_more_content", 0, {opacity:0, display:"none"});
		});

		//Animate  area elements on click
		var explore_more = '.link_read_more, .link_close';
		$(document).on('click', explore_more, function(){

			if (explore_more) {

				TweenLite.to("#homelogo", 1, {ease:Power1.easeIn, left:"54%"}); //logo
				TweenLite.to("#section2 .intro h1", 1, {css:{color:"#4b4b4b", zIndex:"1", top:"-30vh", left: "65px",position:"absolute",  fontSize: "3vw"}, ease:Power1.easeIn});//heading
				TweenLite.to(".fp-controlArrow.fp-prev, .fp-controlArrow.fp-next", 1, {ease:Power1.easeIn, x:"43.5%"}); //arrows
				TweenLite.to("#section2 .intro a", 1, { ease:Power1.easeIn, left:"55%", position:"relative", opacity:0 });
				TweenLite.to("#section2 .intro a.link_close", 1, {ease:Back.easeOut, left:"60%", zIndex:'1', position:"relative", display:"block", opacity:1});
				TweenLite.to("#section2 .explore_more_content", 1, { css:{position: "absolute",bottom:'0',top:'0', left:"inherit", width:"50vw", display:"block", opacity:1, padding:"3vw", backgroundColor: "#fff"}, ease:Power1.easeIn});

				var ww_practise = $(window).width();	
			    if(ww_practise < 767) { 
			    	TweenLite.to("#section2 .explore_more_content", 1, { css:{position: "absolute",bottom:'0',top:'0', left:"inherit", width:"77vw", display:"block", opacity:1, padding:"3vw", backgroundColor: "#fff"}, ease:Power1.easeIn});
			    	TweenLite.to("#section2 .intro h1", 1, {css:{color:"#4b4b4b", zIndex:"1", top:"-30vh", left: "40px",position:"absolute",  fontSize: "5vw"}, ease:Power1.easeIn});
			    }

				TweenLite.to("#section2 .container", 1, {ease:Power1.easeIn, marginLeft:"0", marginRight: "0", paddingLeft:"0", paddingRight:"0"});
			}else{

				TweenLite.to("#homelogo", 1, {ease:Power1.easeOut, left:"10.1%", opacity:1}); //logo
				TweenLite.to("#section2 .intro h1", 1, {css:{color:"#fff", zIndex:"inherit", top:"inherit", left:"inherit", position:"inherit", fontSize: "7vw"}, ease:Power1.easeOut});//heading
				TweenLite.to(".fp-controlArrow.fp-prev, .fp-controlArrow.fp-next", 1, { ease:Power1.easeOut, x:"0%"}); //arrows
				TweenLite.to("#section2 .intro a", 1, { ease:Back.easeOut, left:"0%", position:"inherit", opacity:1});
				TweenLite.to("#section2 .intro a.link_close", 1, {ease:Power1.easeIn, left:"0%", display:"none", opacity:0 });
				TweenLite.to("#section2 .explore_more_content", 1, {ease:Back.easeOut, opacity:0, display:"none", width:"0vw", left:0, padding:0});

				TweenLite.to("#section2 .container", 1, {ease:Back.easeOut, marginLeft:"auto", marginRight: "auto", paddingLeft:"15px", paddingRight:"15px"});
				
			}
			explore_more = !explore_more;
			
		});

		//Clear Animations on practise area elements back to normal
		$(document).on('click','.pa-area-back, .fp-controlArrow.fp-next, .fp-controlArrow.fp-prev, #section0_pa .menu_links',function(){

			TweenLite.to("#homelogo", 1, {ease:Power1.easeOut, left:"10.1%", opacity:1, delay:0.8}); //logo
			TweenLite.to("#section2 .intro h1", 1, {css:{color:"#fff", zIndex:"inherit", top:"inherit", left:"inherit", position:"inherit", fontSize: "7vw"}, ease:Power1.easeOut, delay:0.8});//heading
			TweenLite.to(".fp-controlArrow.fp-prev, .fp-controlArrow.fp-next", 1, { ease:Power1.easeOut, x:"0%", delay:0.8}); //arrows
			TweenLite.to("#section2 .intro a", 1, { ease:Back.easeOut, left:"0%", position:"inherit", opacity:1});
			TweenLite.to("#section2 .intro a.link_close", 1, {ease:Power1.easeOut, left:"0%", display:"none", opacity:0 });
			TweenLite.to("#section2 .explore_more_content", 1, {ease:Power1.easeOut, display:"none", width:"0vw", padding:0});

			TweenLite.to("#section2 .container", 1, {ease:Back.easeOut, marginLeft:"auto", marginRight: "auto", paddingLeft:"15px", paddingRight:"15px"});
		
		});

		TweenMax.to("#section2 .intro i", 1, {x:12, ease:Power0.easeInOut, repeat:-1, repeatDelay:2});

		/*
		*
		* 2. TEAM
		*/
		$(document).on('click','.team_menu',function(){

			TweenMax.to(".img1", 0.6, {scale:2, transformOrigin: "center top", repeat:1, repeatDelay:5, delay:0, yoyo:true, ease:Linear.easeNone});
			TweenMax.to(".img2", 0.6, {scale:2, transformOrigin: "left center", repeat:1, repeatDelay:5, delay:5, yoyo:true, ease:Linear.easeNone});
			TweenMax.to(".img3", 0.6, {scale:2, transformOrigin: "left center", repeat:1, repeatDelay:5, delay:10, yoyo:true, ease:Linear.easeNone});

			TweenMax.to(".img4", 0.6, {scale:2, transformOrigin: "left bottom", repeat:1, repeatDelay:5, delay:15, yoyo:true, ease:Linear.easeNone});
			TweenMax.to(".img5", 0.6, {scale:2, transformOrigin: "center bottom", repeat:1, repeatDelay:5, delay:20, yoyo:true, ease:Linear.easeNone});
			TweenMax.to(".img6", 0.6, {scale:2, transformOrigin: "right center", repeat:1, repeatDelay:5, delay:25, yoyo:true, ease:Linear.easeNone});
			TweenMax.to(".img7", 0.6, {scale:2, transformOrigin: "right center", repeat:1, repeatDelay:5, delay:30, yoyo:true, ease:Linear.easeNone});
			TweenMax.to(".img8", 0.6, {scale:2, transformOrigin: "center top", repeat:1, repeatDelay:5, delay:35, yoyo:true, ease:Linear.easeNone});
			
			//TweenLite.to("#team svg", 0.6, {scale:8, repeat:-1, repeatDelay:5, css:{backgroundColor: "#fff"/*, zIndex:2 */}, ease:Linear.easeNone});

			var tl = new TimelineMax({repeat:1});

			$(".bio_1").each(function(index, element){
			  tl.to(element, 0.6, {y:100, opacity:1, display:"block"})
			    .to(element, 0.6, {x:400, opacity:0, display:"none",  autoAlpha:0, ease:Power2.easeIn}, "+=5")
			});
			$(".bio_2").each(function(index, element){
			  tl.to(element, 0.6, {y:100, opacity:1, display:"block"})
			    .to(element, 0.6, {x:400, opacity:0, display:"none", autoAlpha:0, ease:Power2.easeIn, delay:-6}, "+=10")
			});
			$(".bio_3").each(function(index, element){
			  tl.to(element, 0.6, {y:100, opacity:1, display:"block"})
			    .to(element, 0.6, {x:400, opacity:0, display:"none", autoAlpha:0, ease:Power2.easeIn, delay:-11}, "+=15")
			});
			$(".bio_4").each(function(index, element){
			  tl.to(element, 0.6, {y:100, opacity:1, display:"block"})
			    .to(element, 0.6, {x:400, opacity:0, display:"none", autoAlpha:0, ease:Power2.easeIn, delay:-16}, "+=20")
			});
			
			$(".bio_5").each(function(index, element){
			  tl.to(element, 0.6, {y:100, opacity:1, display:"block"})
			    .to(element, 0.6, {x:400, opacity:0, display:"none", autoAlpha:0, ease:Power2.easeIn, delay:-21}, "+=25")
			});
			$(".bio_6").each(function(index, element){
			  tl.to(element, 0.6, {y:100, opacity:1, display:"block"})
			    .to(element, 0.6, {x:400, opacity:0, display:"none", autoAlpha:0, ease:Power2.easeIn, delay:-26}, "+=30")
			});
			$(".bio_7").each(function(index, element){
			  tl.to(element, 0.6, {y:100, opacity:1, display:"block"})
			    .to(element, 0.6, {x:400, opacity:0, display:"none", autoAlpha:0, ease:Power2.easeIn, delay:-31}, "+=35")
			});
			$(".bio_8").each(function(index, element){
			  tl.to(element, 0.6, {y:100, opacity:1, display:"block"})
			    .to(element, 0.6, {x:400, opacity:0, display:"none", autoAlpha:0, ease:Power2.easeIn, delay:-36}, "+=40")
			});


		});


		/*
		*
		* 3. CONTACT US
		*/
		var curtain_btns_email = '#contact .email_us';
		$(document).on('click', curtain_btns_email, function(){

			if (curtain_btns_email) {

				TweenLite.to("#contact .vertical_btns", 1, { css:{right:"35.3vw"}, ease:Power1.easeIn});
				TweenLite.to("#contact .contact_curtain_right", 1, { css:{backgroundColor:"rgba(255, 255, 255, 0.95)", width:"44vw"}, ease:Power1.easeIn});
				TweenLite.to("#contact .contact_curtain_left", 1, { css:{width:"57.8em"}, ease:Power1.easeIn});

				TweenLite.to("#contact .close_email_map_btn", 1, { css:{autoAlpha:1, display:"block", right:"35.3vw"}, delay:1, ease:Power1.easeIn});

				TweenLite.to("#contact .email_us, #contact .our_map", 1, { css:{autoAlpha:0, display:"none"}, ease:Power1.easeIn});
				
				TweenLite.to("#contact .contact_box", 1, { css:{autoAlpha:1, opacity:1, display:"block", width:"44vw"}, ease:Power1.easeIn});

				//media queries
				var ww_email_us = $(window).width();	
			    if(ww_email_us < 767) {

			    	TweenLite.to("#contact .contact_location, #contact .contact_phone, #contact .contact_share_icons", 1, { css:{autoAlpha:0, display:"none"}, ease:Power1.easeIn});
			    	TweenLite.to("#contact .contact_box", 1, { css:{autoAlpha:1, opacity:1, display:"block", width:"100vw"}, delay:1, ease:Power1.easeIn});
			    	
			    	TweenLite.to("#contact .vertical_btns", 1, { css:{right:"0vw"}, ease:Power1.easeIn});
			    }

			}
			
		});

		var curtain_btns_map = '#contact .our_map';
		$(document).on('click', curtain_btns_map, function(){

			if (curtain_btns_map) {

				TweenLite.to("#contact .contact_curtain_right", 1, { css:{backgroundColor:"rgba(248, 248, 248, 0)", width:"42em"}, ease:Power1.easeIn});
				TweenLite.to("#contact .contact_curtain_left", 1, { css:{width:"57.8em"}, ease:Power1.easeIn});
				TweenLite.to("#contact .vertical_btns", 1, { css:{right:"35.3vw"}, ease:Power1.easeIn});

				TweenLite.to("#contact .close_email_map_btn", 1, { css:{autoAlpha:1, display:"block", right:"35.3vw"}, delay:1, ease:Power1.easeIn});
				TweenLite.to("#contact .email_us, #contact .our_map", 1, { css:{autoAlpha:0, display:"none"}, ease:Power1.easeIn});

				

				 //media queries
				var media_close = $(window).width();	
			    if(media_close < 767) {

			    	TweenLite.to("#contact .vertical_btns", 1, { css:{right:"0vw"}, ease:Power1.easeIn});
			    	TweenLite.to("#contact .contact_location, #contact .contact_phone, #contact .contact_share_icons", 1, { css:{autoAlpha:0, display:"none"}, ease:Power1.easeIn});
			    	TweenLite.to("#contact .contact_curtain_left", 1, { css:{backgroundColor:"rgba(255, 255, 255, 0.95)"}, ease:Power1.easeIn});

			    }
			}
			
		});

		var curtain_btns_close = '#contact .close_email_map_btn';
		$(document).on('click', curtain_btns_close, function(){

			if (curtain_btns_close) {

				TweenLite.to("#contact .vertical_btns", 1, { css:{right:"7.8vw"}, ease:Power1.easeIn});
				TweenLite.to("#contact .contact_curtain_left", 1, { css:{width:"80em"}, ease:Power1.easeIn});
				TweenLite.to("#contact .contact_curtain_right", 1, { css:{backgroundColor:"rgba(255, 255, 255, 0.95)", width:"16em"}, ease:Power1.easeIn});
				
				TweenLite.to("#contact .close_email_map_btn", 1, { css:{autoAlpha:0, opacity:0}, ease:Power1.easeIn});

				TweenLite.to("#contact .email_us, #contact .our_map", 1, { css:{right:"7.8vw",  autoAlpha:1, display:"block"}, delay:1, ease:Power1.easeIn});
				
				TweenLite.to("#contact .contact_box", 1, { css:{autoAlpha:0, opacity:0, display:"none", width:"16em"}, ease:Power1.easeIn});
				
				//media queries
				var ww_email_map = $(window).width();	
			    if(ww_email_map < 767) {

			    	TweenLite.to("#contact .contact_location, #contact .contact_phone, #contact .contact_share_icons", 1, { css:{autoAlpha:1, display:"block"}, ease:Power1.easeIn});
			    	TweenLite.to("#contact .vertical_btns", 1, { css:{right:"-27vw"}, ease:Power1.easeIn});
			    
			    }

			}
			
		});


	/*	
		*
		*Display full page
		*/
	$(document).ready(function() {
		
		$('#fullpage').fullpage({

			//Navigation
			anchors: ['secondPage','firstPage'],

			//Design
			parallax: true,

			//Scrolling
			scrollingSpeed: 1000,
	        fitToSectionDelay: 1500,
			
			onLeave: function(index, nextIndex, direction){
			if(direction == "up"){
				$("#fullpage .section:nth-child("+nextIndex+")").addClass("up");
				$("#fullpage .section:nth-child("+nextIndex+")").next().addClass("next up");
				$("#fullpage .section:nth-child("+nextIndex+")").prev().addClass("prev up");
			}else{
				$("#fullpage .section:nth-child("+nextIndex+")").addClass("down");
				$("#fullpage .section:nth-child("+nextIndex+")").next().addClass("next down");
				$("#fullpage .section:nth-child("+nextIndex+")").prev().addClass("prev down");
			}
			console.log(direction + nextIndex);
			},


		});

		//disabling scrolling down
		$.fn.fullpage.setAllowScrolling(false, 'down');
		$.fn.fullpage.setAllowScrolling(false, 'up');

		//disabling keyboard scrolling down
		$.fn.fullpage.setKeyboardScrolling(false, 'down');
		$.fn.fullpage.setKeyboardScrolling(false, 'up');

	});

	/*
	*/


