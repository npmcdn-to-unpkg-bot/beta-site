<div class="contact">
	<section class="top-section">
		<div class="container">
			<h1 class="title">Contact Us</h1>
			<ul class="page-menu">
				<li class="js-to-anchor">Address</li>
				<li class="js-to-anchor">Directions</li>
			</ul>
		</div>
	</section>
	<section class="address js-anchor">
		<div class="container">
			<h2 class="header">Address</h2>
			<a href="#map">
				<p class="large-serif">390 Broadway</p>
				<p class="large-serif">3rd Floor</p>
				<p class="large-serif">New York NY 10013</p>
			</a>
			<h2 class="header phone">Phone</h2>
			<a href="tel:12126991842" class="large-serif">+1 212 699 1842</a>
			<div class="emails">
				<div class="third">
					<h3 class="header">General Inquiries</h3>
					<a href="mailto:info@case-agency.com">info@case-agency.com</a>
				</div>
				<div class="third">
					<h3 class="header">New Business</h3>
					<a href="mailto:biz@case-agency.com">biz@case-agency.com</a>
				</div>
				<div class="third">
					<h3 class="header">Media Inquiries</h3>
					<a href="mailto:press@case-agency.com">press@case-agency.com</a>
				</div>
			</div>
			<div class="social-icons">
				<a href="https://www.instagram.com/casenyc/" target="_blank"><img src="../assets/img/sm-instagram-white.png" alt="Instagram"/></a>
				<a href="https://twitter.com/casenyc" target="_blank"><img src="/assets/img/sm-twitter-white.png" alt="Twitter"/></a>
				<a href="https://www.linkedin.com/company/case-nyc" target="_blank"><img src="/assets/img/sm-linkedin-white.png" alt="LinkedIn"/></a>
				<a href="https://open.spotify.com/user/casenyc" target="_blank"><img src="/assets/img/sm-spotify-white.png" alt="Spotify"/></a>
				<a href="https://medium.com/@caseagency" target="_blank"><img src="/assets/img/sm-medium-white.png" alt="Medium"/></a>
			</div>
		</div>
	</section>
	<section class="iframe-wrapper container-large js-anchor">
		<div id="map"></div>
	</section>
	<section class="directions">
		<a href="https://www.google.com/maps/dir//40.7181591,-74.0023852/@40.715622,-73.996431,16z?hl=en-US" target="_blank"><h2 class="header">Get Directions</h2></a>
	</section>
	<img src="/assets/img/contact-city.jpg" class="container-large" alt="Case Office"/>
</div>

<?php function isMobile() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
} ?>

<script src="https://maps.googleapis.com/maps/api/js?callback=initMap" async defer></script>
<script type="text/javascript">
	initMap = function(){
		var mapDiv = $('#map');
		var map = new google.maps.Map(mapDiv[0], {
			center: {lat: 40.7181591, lng: -74.0023852},
			zoom: 14,
			disableDefaultUI: true,
			scrollwheel: false,
			zoomControl: true,
			<?php echo(isMobile()) ? 'draggable: false' : ''; ?>
		});

		var latLng = new google.maps.LatLng(40.7181591,-74.0023852);
		var marker = new google.maps.Marker({
			position: latLng,
			map: map,
			icon: '/assets/img/map-marker.png'
		});

		var styleArray = [
			{
				featureType: "all",
				elementType: "labels",
				stylers: [
					{ visibility: "off" }
				]
			},{
				featureType: "landscape",
				elementType: "all",
				stylers: [
					{ color: "#ffffff" }
				]
			},{
				featureType: "transit",
				elementType: "all",
				stylers: [
					{ color: "#acacac" }
				]
			},{
				featureType: "poi",
				elementType: "all",
				stylers: [
					{ color: "#ffffff" }
				]
			},{
				featureType: "road",
				elementType: "all",
				stylers: [
					{ color: "#D3D3D3" },
					{ weight: ".3" }
				]
			},{
				featureType: "road.highway",
				elementType: "all",
				stylers: [
					{ weight: ".5" }
				]
			},{
				featureType: "water",
				elementType: "geometry.fill",
				stylers: [
					{ color: "#ACACAC" }
				]
			}
		];

		map.setOptions({styles: styleArray});
	};
</script>