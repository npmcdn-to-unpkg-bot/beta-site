<!doctype html>
<html lang=en>

<head>
	<meta charset=utf-8>
	<meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1, minimum-scale=1, user-scalable=no">
	<?php
		$title = '';
		$metaDescription = '';
		$altHeaderClass = '';

		// Check the names set above in $router->map
		switch ( $match[ 'name' ] ) {
			case 'home' :
				$title = 'Case | New York';
				$metaDescription = 'Case is a creative branding and design agency that architects visually rich solutions proven to elevate brands.';
				break;
			case 'about' :
				$title = 'About Us | Case';
				break;
			case 'case-studies' :
				$title = 'Case Studies | Case';
				$altHeaderClass = 'alt-header';
				break;
			case 'clinique' :
				$title = 'Clinique Case Study | Case';
				$altHeaderClass = 'alt-header';
				break;
			case 'araks' :
				$title = 'Araks Case Study | Case';
				$altHeaderClass = 'alt-header';
				break;
			case 'pepsi' :
				$title = 'Pepsi Case Study | Case';
				$altHeaderClass = 'alt-header';
				break;
			case 'kobalt' :
				$title = 'Kobalt Case Study | Case';
				$altHeaderClass = 'alt-header';
				break;
			case 'sheraton' :
				$title = 'Sheraton Case Study | Case';
				$altHeaderClass = 'alt-header';
				break;
			case 'herman-miller' :
				$title = 'Herman Miller Case Study | Case';
				$altHeaderClass = 'alt-header';
				break;
			case 'ouai' :
				$title = 'Ouai Case Study | Case';
				$altHeaderClass = 'alt-header';
				break;
			case 'contact' :
				$title = 'Contact Us | Case';
				break;
			case 'join-us' :
				$title = 'Join Us | Case';
				break;
			case 'journal' :
				$title = 'Journal | Case';
				break;
			default:
				$title = 'Case | New York';
				break;
		}
	?>
	<title><?php echo $title; ?></title>
	<?php if ( $metaDescription ): ?>
	<meta name="description" content="<?php echo $metaDescription; ?>">
	<?php endif; ?>
	<?php if ( $isLocal ): ?>
	<link rel="stylesheet" href="/assets/build/styles.css?v=<?php echo $version ?>">
	<?php else: ?>
	<link rel="stylesheet" href="/assets/dist/styles.min.css?v=<?php echo $version ?>">
	<?php endif; ?>
	<link rel="stylesheet" href="/assets/vendor/fancybox/source/jquery.fancybox.css">
	<link rel="stylesheet" href="/assets/vendor/pagePiling.js/jquery.pagepiling.css">
	<link rel="stylesheet" href="/assets/vendor/slick.js/slick/slick.css">
	<link rel="stylesheet" href="/assets/vendor/slick.js/slick/slick-theme.css">
	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="/assets/img/favicons/apple-touch-icon-57x57.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/img/favicons/apple-touch-icon-114x114.png" />
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/assets/img/favicons/apple-touch-icon-72x72.png" />
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/img/favicons/apple-touch-icon-144x144.png" />
	<link rel="apple-touch-icon-precomposed" sizes="60x60" href="/assets/img/favicons/apple-touch-icon-60x60.png" />
	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="/assets/img/favicons/apple-touch-icon-120x120.png" />
	<link rel="apple-touch-icon-precomposed" sizes="76x76" href="/assets/img/favicons/apple-touch-icon-76x76.png" />
	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="/assets/img/favicons/apple-touch-icon-152x152.png" />
	<link rel="icon" type="image/png" href="/assets/img/favicons/favicon-196x196.png" sizes="196x196" />
	<link rel="icon" type="image/png" href="/assets/img/favicons/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/png" href="/assets/img/favicons/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="/assets/img/favicons/favicon-16x16.png" sizes="16x16" />
	<link rel="icon" type="image/png" href="/assets/img/favicons/favicon-128.png" sizes="128x128" />
	<meta name="application-name" content="CASE"/>
	<meta name="msapplication-TileColor" content="#FFFFFF" />
	<meta name="msapplication-TileImage" content="/assets/img/favicons/mstile-144x144.png" />
	<meta name="msapplication-square70x70logo" content="/assets/img/favicons/mstile-70x70.png" />
	<meta name="msapplication-square150x150logo" content="/assets/img/favicons/mstile-150x150.png" />
	<meta name="msapplication-wide310x150logo" content="/assets/img/favicons/mstile-310x150.png" />
	<meta name="msapplication-square310x310logo" content="/assets/img/favicons/mstile-310x310.png" />
	<script src='/assets/vendor/jquery/dist/jquery.min.js'></script>
	<script src='/assets/vendor/pagePiling.js/jquery.pagepiling.min.js'></script>
	<script src='/assets/vendor/modernizr/modernizr.js'></script>
	<script src='/assets/vendor/slick.js/slick/slick.min.js'></script>
	<script src='/assets/vendor/fancybox/source/jquery.fancybox.js'></script>
	<script src='/assets/vendor/spectragram/spectragram.min.js'></script>
	<script src="/assets/vendor/masonry/dist/masonry.pkgd.min.js"></script>
	<script src='/assets/vendor/vtg_twitter/twitter-post-fetcher.js'></script>
	<script src="https://f.vimeocdn.com/js/froogaloop2.min.js"></script>
</head>

<body>

	<div class="breakpoint-context"></div>

	<nav class="main-nav js-main-nav" id="main-nav">
		<header class="site-header">
			<div class="nav-icon nav-x js-nav-icon-x"></div>
			<a href="http://<?php echo $_SERVER['SERVER_NAME']; ?>" class="case-logo"></a>
		</header>
		<div class="over-text">
			<div class="outer-table">
				<div class="inner-table">
					<a href="/about" class="title">About Us</a>
					<a href="/case-studies" class="title">Case Studies</a>
					<a href="/journal" class="title">Journal</a>
					<a href="/contact" class="title">Contact Us</a>
					<a href="/join-us" class="title">Join Us</a>
				</div>
			</div>
		</div>
		<div class="social-icons">
			<a href="https://www.instagram.com/casenyc/" target="_blank"><img src="/assets/img/sm-instagram-white.png" alt="Instagram white"/></a>
			<a href="https://twitter.com/casenyc" target="_blank"><img src="/assets/img/sm-twitter-white.png" alt="Twitter white"/></a>
			<a href="https://www.linkedin.com/company/case-nyc" target="_blank"><img src="/assets/img/sm-linkedin-white.png" alt="LinkedIn white"/></a>
			<a href="https://open.spotify.com/user/casenyc" target="_blank"><img src="/assets/img/sm-spotify-white.png" alt="Spotify white"/></a>
			<a href="https://medium.com/@caseagency" target="_blank"><img src="/assets/img/sm-medium-white.png" alt="Medium white"/></a>
		</div>
	</nav>

	<div class="page-wrapper">
		<header class="site-header <?php echo ($altHeaderClass); ?>">
			<div class="nav-icon js-nav-icon"></div>
			<a href="http://<?php echo $_SERVER['SERVER_NAME']; ?>" class="case-logo"></a>
		</header>

		<main class="site-content">