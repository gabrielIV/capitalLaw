<!DOCTYPE html>
<head lang="en">
	
	<title>Capital Law Group</title>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<meta name="description" content="" />
	<meta name="keywords"  content="" />

	<link rel="stylesheet" type="text/css" href="style.css"/>
	<link rel="stylesheet" type="text/css" href="media_queries.css"/>
    <link rel="stylesheet" href="dist/bootstrap-4.0.0/css/bootstrap.min.css"><!-- Bootstrap CSS -->
    <link rel="stylesheet" href="dist/font-awesome-4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="dist/fullpagejs/jquery.fullpage.min.css"/>

	<!-- Borda Fonts -->
	<link rel="stylesheet" type="text/css" href="assets/fonts/stylesheet.css"/>

	<link rel="shortcut icon" type="image/png" href="assets/imgs/logomark-01.svg"/>
</head>

	<body>
		<!-- Preloader -->
		<div class="progress_bar"></div>

		<!-- Preloader -->
		<div class="preloader" preload>
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve" class="pre_svg">

				<g id="circles">
	                <path id="path_1" style="fill:#F5C071;" d="M25,8l-13,8l-9-5L20.4,0.3L24.9,3L25,8z"/>
	                <path id="path_2" style="fill:#F5C071;" d="M12,16v15.7l-9,5.2V11L12,16z"/>
	                <path id="path_3" style="fill:#F5C071;" d="M25.2,39.5L25,49.9l-22-13l9-5.2L25.2,39.5z"/>
	                <path id="path_4" style="fill:#F5C071;" d="M38.5,31.8l8.5,5.1l-22,13l0.2-10.4L38.5,31.8z"/>
	                <path id="path_5" style="fill:#F5C071;" d="M47,36.9l-8.5-5.1l0-10.4l-9.2,5.3L25,24.1l-0.2-5.7L42.8,8.2l4.2,2.6V36.9z"/>
	            </g>

			</svg>

			<div class="pre_text"> CAPITAL LAW GROUP</div>
		</div>

		<a href="/" id="homelogo" title="Home">
			<img src="assets/imgs/logomark-01.svg" class="img-responsive logo logo_large"> 
			<div class="pre_text_logo"> CAPITAL LAW GROUP</div>
			<img src="assets/imgs/logomark-01.svg" class="img-responsive logo logo_mobile">
		</a>

		<div class="page_entrance"></div>
		
		<div id="fullpage">
			<!-- Home section -->
			<div class="section active" id="home">
				<?php include('templates/home_section.php'); ?>
			</div>

			<!-- Menu section -->
			<div class="section" id="practice_areas"><!-- practice_areas -->
				<?php include('templates/practice_areas_menus.php'); ?>
			</div>

			<!-- Other Sections -->
		    <div class="section" id="section2">
		    	<?php include('templates/practice_areas.php'); ?>
		    </div>

		 	<div class="section" id="about">
				<?php include('templates/pages/about.php'); ?>
			</div>
			<div class="section" id="team">
				<?php include('templates/pages/team.php'); ?>
			</div>
			<div class="section" id="contact">
				<?php include('templates/pages/contact.php'); ?>
			</div>

		</div>

		
		<script src="dist/fullpagejs/jquery-3.2.1.min.js"></script>

		<!--Links for TweenLite, and EasePack-->
		<script src="dist/greensock-js-shockingly-green/minified/utils/SplitText.min.js"></script>
		<script src="dist/greensock-js-shockingly-green/minified/plugins/DrawSVGPlugin.min.js"></script>
		<script src="dist/greensock-js-shockingly-green/minified/easing/EasePack.min.js"></script>
		<script src="dist/greensock-js-shockingly-green/minified/TweenMax.min.js"></script>
		<script src="dist/greensock-js-shockingly-green/minified/TimelineLite.min.js"></script>
		<script src="dist/greensock-js-shockingly-green/minified/easing/CustomWiggle.min.js"></script>
		<script src="dist/greensock-js-shockingly-green/minified/easing/CustomEase.min.js"></script>
		<script src="dist/greensock-js-shockingly-green/minified/TweenLite.min.js"></script>
		
		<!-- <script src="dist/fullpagejs/jquery-ui.min.js"></script> -->

	    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
	    <script src="dist/bootstrap-4.0.0/js/bootstrap.min.js"></script>

		<script type="text/javascript" src="dist/scrolloverflow/scrolloverflow.min.js"></script>
		<script type="text/javascript" src="dist/fullpagejs/jquery.fullpage.extensions.min.js"></script>

		<script type="text/javascript" src="main.js"></script>

	</body>
</html>