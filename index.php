<?php
	//Versioning for js and css files
	$version = '2.0';

	//Set var for loading build/dist files
	$isLocal = ( $_SERVER[ 'REMOTE_ADDR' ] == '127.0.0.1' ? true : false );

	// Create AltoRouter
	require __DIR__ . '/assets/vendor/altorouter/AltoRouter.php';
	$router = new AltoRouter();

	// Change and use this if not hosted on web root $router->setBasePath('');

	// Setup routes
	$router->map( 'GET', '/', '/templates/home.php', 'home' );
	$router->map( 'GET', '/about', '/templates/about.php', 'about' );
	$router->map( 'GET', '/case-studies', '/templates/case-studies.php', 'case-studies' );
	$router->map( 'GET', '/case-studies/clinique', '/templates/case-study-clinique.php', 'clinique' );
	$router->map( 'GET', '/case-studies/araks', '/templates/case-study-araks.php', 'araks' );
	$router->map( 'GET', '/case-studies/pepsi', '/templates/case-study-pepsi.php', 'pepsi' );
	$router->map( 'GET', '/case-studies/kobalt', '/templates/case-study-kobalt.php', 'kobalt' );
	$router->map( 'GET', '/case-studies/sheraton', '/templates/case-study-sheraton.php', 'sheraton' );
	$router->map( 'GET', '/case-studies/herman-miller', '/templates/case-study-herman-miller.php', 'herman-miller' );
	$router->map( 'GET', '/case-studies/ouai', '/templates/case-study-ouai.php', 'ouai' );
	$router->map( 'GET', '/contact', '/templates/contact.php', 'contact' );
	$router->map( 'GET', '/join-us', '/templates/join-us.php', 'join-us' );
	$router->map( 'GET', '/journal', '/templates/journal.php', 'journal' );

	$match = $router->match();

	if( !$match ) { header( 'HTTP/1.0 404 Not Found' ); }

	require_once __DIR__ . '/templates-parts/header.php';

	// Pull in the content
	if( $match ) {
	  require __DIR__ . $match[ 'target' ];
	}
	else {
	  require __DIR__ . '/templates/404.php';
	}

	// Pull in the footer code.
	require_once __DIR__ . '/templates-parts/footer.php';
?>