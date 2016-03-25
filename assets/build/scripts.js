( function( $ ) {

	var slides = $( '.section' ),
		numSlides = slides.length;

	var Case = {
		/**
		 * Initialize site
		 */
		init : function() {
			/**
			 * Set the initial breakpoint context
			 */
			Case.challengeElement = document.querySelector( '.breakpoint-context' );
			Case.challengeContext();
			Case.initSliders();
			Case.initHomeSliderLoad();
			Case.debounce( Case.showHeader(), 200 );
			Case.scrollToAnchor();
			Case.debounce( Case.matchWindowHeight(), 200 );
			Case.homeInstagram();
			Case.homeTwitter();
			Case.homeMedium();
			Case.journalInstagram();
			Case.journalMedium();
			Case.journalTwitter();
			Case.showMainNav();
			Case.showFounderBio();
			Case.playVimeoVideo();
			Case.togglePepsiLogo();

			$( window ).resize( Case.debounce( function() {
				Case.challengeContext();
				Case.showFounderBio();
				Case.initHomeSlider();
				Case.initHomeMasonry();
				Case.togglePepsiLogo();
			}, 250 ));
		},

		/**
		 * Throttle/debounce helper
		 * Modified from http://remysharp.com/2010/07/21/throttling-function-calls/
		 */
		debounce : function( fn, delay ) {
			var timer = null;

			return function() {
				var context = this,
					args = arguments;

				clearTimeout( timer );

				timer = setTimeout( function() {
					fn.apply( context, args );
				}, delay );
			};
		},

		/**
		 * Device targeting should be based on media queries in CSS,
		 * we do not define this in scripts
		 * Modified from http://davidwalsh.name/device-state-detection-css-media-queries-javascript
		 */
		challengeContext: function() {
			var styles = window.getComputedStyle( Case.challengeElement ),
				index = parseInt( styles.getPropertyValue( 'z-index' ), 10 ),
				states = {
					1: 'mobile',
					2: 'tablet'
				};

			Case.context = states[index] || 'desktop';
		}
	};

	Case.initSliders = function() {
		$( '.js-founder-slider' ).slick( {
			dots: false,
			infinite: true,
			arrows: false,
			speed: 500,
			autoplay: false,
			pauseOnHover: true,
			cssEase: 'linear',
			adaptiveHeight: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 760,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: true,
						centerPadding: '15%'
					}
				}
			]
		} );

		$( '.js-herman-slider' ).slick( {
			dots: false,
			infinite: true,
			arrows: true,
			speed: 500,
			autoplay: false,
			pauseOnHover: true,
			cssEase: 'linear',
			adaptiveHeight: false,
			slidesToShow: 1,
			slidesToScroll: 1
		} );

		$( '.js-ouai-slider' ).slick( {
			dots: false,
			infinite: true,
			arrows: true,
			speed: 500,
			autoplay: false,
			pauseOnHover: true,
			cssEase: 'linear',
			adaptiveHeight: false,
			slidesToShow: 1,
			slidesToScroll: 1
		} );
	};

	Case.hugeSlideDestroy = function() {
		var pagePiling = $( '#js-onePage' );

		pagePiling.attr({
			style: '',
		});

		pagePiling.find( '.section' ).removeClass( 'pp-section active pp-table pp-easing' );

		pagePiling.find( 'li' ).css( {
			zIndex: '',
			transform: '',
			'-webkit-transform': '',
			'-moz-transform': '',
			'-ms-transform': ''
		} );

		pagePiling.find( '.pp-tableCell').remove();

		$( '#pp-nav' ).remove();

		$( '.keepScrolling' ).removeClass( 'section pp-scrollable' );

		$( 'html, body' ).css( 'overflow', 'auto' );

		$( '.downArrow' ).hide();

		$( '.home-onepage-inner' ).show();
	};

	Case.hugeSlide = function() {
		try {
			var homeSocialSlider = $( '#js-home-social-slider' );
			homeSocialSlider.slick( 'unslick' );
		}
		catch (err) {}

		$( 'body' ).addClass( 'enabled-onepage-scroll' );
		$( '.keepScrolling' ).addClass( 'section pp-scrollable' ).appendTo( '.home-slider-slick' );
		$( '.footer' ).appendTo( '.keepScrolling' );
		$( 'html, body' ).css( 'overflow', 'hidden' );
		$( '.downArrow' ).show();

		$( '#js-home-slider-slick' ).pagepiling({
			verticalCentered: false,
			css3: false,
			normalScrollElementTouchThreshold: 5,
			touchSensitivity: 5,
			onLeave: function ( index, nextIndex, direction ) {

				//fade out txt when leaving section
				$( '.section' ).eq( index - 1 ).find( '.home-onepage-inner' ).fadeOut( 'fast' );

				//fading in the text of the destination (in case it was fadedOut)
				$( '.section' ).eq( nextIndex - 1 ).find( '.home-onepage-inner' ).fadeIn( 'slow' );


				//reaching our last section? The one with our normal site?
				if ( nextIndex == numSlides ) {
					$( '.downArrow' ).hide();

					//fading out navigation bullets
					$( '#pp-nav' ).fadeOut();
				}

				//leaving our last section? The one with our normal site?
				if ( index == numSlides ) {
					$( '.downArrow' ).show();

					//fadding in navigation bullets
					$( '#pp-nav' ).fadeIn();
				}
			}
		});

		Case.initHomeMasonry();

		$( '.downArrow' ).click(function () {
			$.fn.pagepiling.moveSectionDown();
		});
	};

	Case.slickSlide = function() {
		Case.hugeSlideDestroy();

		$( '.keepScrolling' ).appendTo( '.onePage' );

		$( '#js-home-slider-slick' ).slick( {
			dots: true,
			infinite: true,
			arrows: false,
			speed: 500,
			autoplay: false,
			pauseOnHover: true,
			cssEase: 'linear',
			adaptiveHeight: false,
			slidesToShow: 1,
			slidesToScroll: 1
		} );
	};

	Case.initHomeSliderLoad = function() {
		if( $( '.onePage' ).length ) {
			if ( Case.context === 'desktop' || Case.context === 'tablet' ) {
				Case.hugeSlide();
			} else {
				Case.slickSlide();
			}
		}
	};

	Case.initHomeSlider = function() {
		if( $( '.onePage' ).length ) {
			var homeSlickSlider = $( '#js-home-slider-slick' ),
				homeOnePageSlider = $( '#js-onePage' );

			if ( Case.context === 'desktop' || Case.context === 'tablet' ) {
				if ( homeSlickSlider.hasClass( 'slick-initialized' ) ) {
					try {
						homeSlickSlider.slick( 'unslick' );
					}
					catch ( err ) {}
					
					Case.hugeSlide();
				}
			} else {
				if( $( '.enabled-onepage-scroll' ).length ) {
					$( 'body' ).removeClass( 'enabled-onepage-scroll' );
					Case.slickSlide();
				}
			}
		}
	};

	Case.initHomeMasonry = function() {
		var homeSocialSlider = $( '#js-home-social-slider' );
		var homeSocialMasonry = $( '.homeSocialGrid' );

		if ( Case.context === 'mobile' ) {
			if ( Masonry.data( '.homeSocialGrid' ) !== undefined ) {
				homeSocialMasonry.masonry( 'destroy' );
			}

			homeSocialSlider.slick( {
				dots: true,
				infinite: true,
				arrows: false,
				speed: 500,
				autoplay: false,
				cssEase: 'linear',
				adaptiveHeight: true,
				slidesToShow: 1,
				slidesToScroll: 1
			} );
		} else {
			if ( homeSocialSlider.hasClass( 'slick-slider' ) ) {
				try {
						homeSocialSlider.slick( 'unslick' );
					}
				catch ( err ) {}
			}

			homeSocialMasonry.masonry( {
				columnWidth: '.grid-sizer',
				gutter: '.gutter-sizer',
				itemSelector: '.grid-item',
				animate: false,
				percentPosition: true
			} );
		}
	};

	Case.showHeader = function() {
		var lastScrollTop = 0,
			header = $( '.site-header' ),
			headerHeight = header.outerHeight( true ) - header.height();

		$( window ).scroll( function() {
			var st = $( this ).scrollTop();
			if ( st > headerHeight ) {
				if ( st < lastScrollTop ){
					header.removeClass( 'sticky-down' );
					header.addClass( 'sticky-up' );
				} else {
					header.removeClass( 'sticky-up' );
					header.addClass( 'sticky-down' );
				}
				lastScrollTop = st;
			} else {
				header.removeClass( 'sticky-down' );
				header.removeClass( 'sticky-up' );
			}
		} );

		//For home page piling support which overrides the window scroll
		$( '.keepScrolling' ).scroll( function() {
			var st = $( this ).scrollTop();
			if ( st > headerHeight ) {
				if ( st < lastScrollTop ){
					header.removeClass( 'sticky-down' );
					header.addClass( 'sticky-up' );
				} else {
					header.removeClass( 'sticky-up' );
					header.addClass( 'sticky-down' );
				}
				lastScrollTop = st;
			} else {
				header.removeClass( 'sticky-down' );
				header.removeClass( 'sticky-up' );
			}
		} );
	};

	Case.showMainNav = function() {
		var mainNav = $( '.js-main-nav' );
		var menuItems = $( '.over-text' );

		$( '.js-nav-icon' ).click( function() {
			$( '.page-wrapper' ).addClass( 'navOn' );
			$( '.main-nav' ).addClass( 'navOn' );

			mainNav.fadeIn( 400 );
		});

		$('.js-nav-icon-x').click( function() {
			mainNav.fadeOut( 400 );

			$( '.page-wrapper' ).removeClass( 'navOn' );
			$( '.main-nav' ).removeClass( 'navOn' );
		});
	};

	Case.scrollToAnchor = function() {
		$( '.js-to-anchor' ).click( function() {
			var	indexNumber = $( '.js-to-anchor' ).index( this ),
				anchor = $( '.js-anchor' ).eq( indexNumber );
				
			$( 'body' ).animate({ scrollTop: anchor.offset().top }, 800 ); });
	};

	Case.matchWindowHeight = function() {
		$( window ).on( 'load resize', function() {
			var windowHeight = $( window ).height() - $( '.footer' ).outerHeight( true );
			if ( $( '.case-studies' ).height() < windowHeight ) {
				$( '.case-studies' ).css( 'height', windowHeight );
			} else if ( $( '.case-studies' ).height() > windowHeight ) {
				$( '.case-studies' ).css( 'height', '' );
				$( '.case-studies' ).css( 'min-height', $( '.case-studies .top-section' ).height()+80 );
			}
			$( '.not-found' ).css( 'height', windowHeight );
		} );
	};

	Case.homeInstagram = function() {
		jQuery.fn.spectragram.accessData = {
			accessToken: '337296859.ab103e5.1ed1ea093366435d9234d6ea248f7ba5',
			clientID: '337296859'
		};

		$( '.spectragram' ).spectragram( 'getUserFeed', {
			query: 'caseagency',
			size: 'big',
			wrapEachWith: '<div></div>',
			max: 3
		});
	};

	Case.homeMedium = function() {
		if( $( '.keepScrolling' ).length ) {
			simpleAJAXLib = {
				init: function () {
					this.fetchJSON( 'https://medium.com/feed/@caseagency' );
				},

				fetchJSON: function ( url ) {
					var root = 'https://query.yahooapis.com/v1/public/yql?q=';
					var yql = 'select * from xml where url="' + url + '"';
					var proxy_url = root + encodeURIComponent( yql ) + '&format=json&diagnostics=false&callback=simpleAJAXLib.display';
					document.getElementsByTagName( 'body' )[0].appendChild( this.jsTag( proxy_url ) );
				},

				jsTag: function (url) {
					var script = document.createElement( 'script' );
					script.setAttribute( 'type', 'text/javascript' );
					script.setAttribute( 'src', url );
					return script;
				},

				display: function ( results ) {
					var mediumHeader = '<a class="header" href="https://medium.com/@CaseAgency/" target="_blank">@CaseAgency on Medium</a><a class="topTwitterImg" href="https://medium.com/@CaseAgency/" target="_blank"><img src="/assets/img/sm-medium.png" alt="Medium"></a>';
					var json = JSON.stringify( results.query.results );
					obj = $.parseJSON( json );
					var rssTitle,
						rssLink,
						rssCreator,
						rssDescription;

					if ( obj.rss.channel.item.description ) {
						rssTitle = obj.rss.channel.item.title;
						rssLink = obj.rss.channel.item.link;
						rssCreator = obj.rss.channel.item.creator;
						rssDescription = obj.rss.channel.item.description;
					} else if ( obj.rss.channel.item[0].description ) {
						rssTitle = obj.rss.channel.item[0].title;
						rssLink = obj.rss.channel.item[0].link;
						rssCreator = obj.rss.channel.item[0].creator;
						rssDescription = obj.rss.channel.item[0].description;
					}

					try {
						var mediumContent = mediumHeader;
						mediumContent += '<div class="medium-feed-snippet">' + rssTitle + '</div>';
						mediumContent += '<a href="' + rssLink + '" class="mediumCreator">By ' + rssCreator + '</a>';

						$( mediumContent ).prependTo( '#medium0' );
					}
					catch (err) {}
				}
			};

			simpleAJAXLib.init();
		}
	};

	Case.homeTwitter = function() {
		function handleTweets( tweets ) {
			var x = tweets.length;
			var n = 0;

			while( n < x ) {
				el = 'twitter' + n;
				hasMedia = '#' + el + ' .media';

				document.getElementById(el).innerHTML =  tweets[n];
				
				var twitterHeader = '<a class="header" href="https://twitter.com/casenyc" target="_blank">@CASENYC</a><a class="topTwitterImg" href="https://twitter.com/casenyc" target="_blank"><img src="/assets/img/sm-twitter.png" alt="Twitter"></a>';

				if( $( hasMedia ).length ) {
					// If tweet has image, move it to the top and add a class hasMedia for styling.
					var theImage = twitterHeader;
						theImage += $( hasMedia ).html();

					$( theImage ).prependTo( '#' + el );
					$( hasMedia ).remove();
					$( '#' + el ).addClass( 'hasMedia' );
				}
				else {
					$( '#' + el ).addClass( 'noMedia' );
					$( twitterHeader ).prependTo( '#' + el );
				}
				
				n++;
			}
		}

		if( $( '.keepScrolling' ).length ) {
			// http://www.jasonmayes.com/projects/twitterApi/#sthash.07ulKbaa.dpbs
			
			var homeTweets = {
				id: '710217923969687552',
				maxTweets: 1,
				enableLinks: true,
				showImages: true,
				showUser: false,
				showTime: true,
				showRetweet: false,
				customCallback: handleTweets,
				showInteraction: false
			};

			twitterFetcher.fetch( homeTweets );
		}
	};

	Case.journalInstagram = function() {
		jQuery.fn.spectragram.accessData = {
			accessToken: '337296859.ab103e5.1ed1ea093366435d9234d6ea248f7ba5',
			clientID: '337296859'
		};

		$( '.instagram-grid' ).spectragram( 'getUserFeed', {
			query: 'caseagency',
			size: 'big',
			wrapEachWith: '<div class="grid-item"></div>',
			max: 6
		});
	};

	Case.journalMedium = function() {
		if( $( '.journal' ).length ) {
			simpleAJAXLib = {
				init: function () {
					this.fetchJSON( 'https://medium.com/feed/@caseagency' );
				},

				fetchJSON: function ( url ) {
					var root = 'https://query.yahooapis.com/v1/public/yql?q=';
					var yql = 'select * from xml where url="' + url + '"';
					var proxy_url = root + encodeURIComponent( yql ) + '&format=json&diagnostics=false&callback=simpleAJAXLib.display';
					document.getElementsByTagName( 'body' )[0].appendChild( this.jsTag( proxy_url ) );
				},

				jsTag: function (url) {
					var script = document.createElement( 'script' );
					script.setAttribute( 'type', 'text/javascript' );
					script.setAttribute( 'src', url );
					return script;
				},

				display: function ( results ) {
					var json = JSON.stringify( results.query.results );
					obj = $.parseJSON( json );
					var rssTitle,
						rssLink,
						rssCreator,
						rssDescription;

					if ( obj.rss.channel.item.description ) {
						rssTitle = obj.rss.channel.item.title;
						rssLink = obj.rss.channel.item.link;
						rssCreator = obj.rss.channel.item.creator;
						rssDescription = obj.rss.channel.item.description;

						try {
							var mediumContent = rssDescription;
							mediumContent += '<div class="rssTitle mediumTitle0">' + rssTitle + '</div>';
							mediumContent += '<a href="' + rssLink + '" class="mediumCreator">By ' + rssCreator + '</a>';

							$( mediumContent ).prependTo( '#medium0' );
							$( '.mediumTitle0' ).prependTo( '.medium-feed-snippet' );
						}
						catch (err) {}

					} else if ( obj.rss.channel.item[0].description ) {

						try {
							var mediumContent0 = obj.rss.channel.item[0].description;
							mediumContent0 += '<div class="rssTitle mediumTitle0">' + obj.rss.channel.item[0].title + '</div>';
							mediumContent0 += '<a href="' + obj.rss.channel.item[0].link + '" class="mediumCreator">By ' + obj.rss.channel.item[0].creator + '</a>';

							$( mediumContent0 ).prependTo( '#medium0' );
							$( '.mediumTitle0' ).prependTo( '#medium0 .medium-feed-snippet' );

							var mediumContent1 = obj.rss.channel.item[1].description;
							mediumContent1 += '<div class="rssTitle mediumTitle1">' + obj.rss.channel.item[1].title + '</div>';
							mediumContent1 += '<a href="' + obj.rss.channel.item[1].link + '" class="mediumCreator">By ' + obj.rss.channel.item[1].creator + '</a>';

							$( mediumContent1 ).prependTo( '#medium1' );
							$( '.mediumTitle1' ).prependTo( '#medium1 .medium-feed-snippet' );

							var mediumContent2 = obj.rss.channel.item[2].description;
							mediumContent2 += '<div class="rssTitle mediumTitle2">' + obj.rss.channel.item[2].title + '</div>';
							mediumContent2 += '<a href="' + obj.rss.channel.item[2].link + '" class="mediumCreator">By ' + obj.rss.channel.item[2].creator + '</a>';

							$( mediumContent2 ).prependTo( '#medium2' );
							$( '.mediumTitle2' ).prependTo( '#medium2 .medium-feed-snippet' );
						}
						catch (err) {}
					}
				}
			};

			simpleAJAXLib.init();
		}
	};

	Case.journalTwitter = function() {
		function handleTweets( tweets ) {
			var x = tweets.length;
			var n = 0;

			while( n < x ) {
				el = 'twitter' + n;
				hasMedia = '#' + el + ' .media';

				document.getElementById(el).innerHTML =  tweets[n];
				
				if( $( hasMedia ).length ) {
					// If tweet has image, move it to the top and add a class hasMedia for styling.
					var theImage = $( hasMedia ).html();
					$( theImage ).prependTo( '#' + el );
					$( hasMedia ).remove();
					$( '#' + el ).addClass( 'hasMedia' );
				}
				else {
					$( '#' + el ).addClass( 'noMedia' );
				}
				
				n++;
			}
		}

		if( $( '.journal' ).length ) {
			// http://www.jasonmayes.com/projects/twitterApi/#sthash.07ulKbaa.dpbs
			
			var journalTweets = {
				id: '710217923969687552',
				maxTweets: 3,
				enableLinks: true,
				showImages: true,
				showUser: false,
				showTime: true,
				showRetweet: false,
				customCallback: handleTweets,
				showInteraction: false
			};

			twitterFetcher.fetch( journalTweets );
		}
	};

	Case.showFounderBio = function() {
		var founder = $( '.js-founder' ),
			founderBio = $( '.js-founder-bio' );

		if ( Case.context === 'mobile' ) {
			founderBio.css( 'display', 'none' );
			founder.off( 'click' );
		} else if ( Case.context === 'tablet' || Case.context === 'desktop' ){
			founderBio.show();
			$( '.js-founder' ).on( "click", function() {
				var indexNumber = founder.index( this ),
					currentFounderBio = founderBio.eq( indexNumber );
				founder.removeClass( 'active' );
				$( this ).addClass( 'active' );
				founderBio.css( { 'opacity': '0', 'height': '0', 'overflow': 'hidden' } );
				currentFounderBio.css( { 'opacity': '1', 'height': '', 'overflow': '' } );
			} );

			$( '.active' ).trigger( 'click' );
		}
	};

	Case.playVimeoVideo = function() {
		var iframe = $( '#cs-video' )[0],
			player = $f( iframe ),
			videoWrapper = $( '.video-container .iframe-wrapper' ),
			videoImage = $( '.video-container img' );

		$( '.js-play-video' ).click( function() {
			player.api( 'play' );
			videoImage.css( 'z-index', '-1' );
			videoWrapper.css( 'z-index', '1' );
		});

		player.addEvent( 'ready', function() {
			player.addEvent( 'finish', onFinish );
		});

		function onFinish( id ) {
			videoImage.css( 'z-index', '1' );
			videoWrapper.css( 'z-index', '-1' );
		}
	};

	Case.togglePepsiLogo = function() {
		var pepsiOriginal = $( '.original-logo' ),
			pepsiRevised = $( '.revised-logo' ),
			originalText = $( '.js-show-original' ),
			revisedText = $( '.js-show-revised' );

		if ( Case.context === 'mobile' ) {
			pepsiOriginal.hide();
			pepsiRevised.show();
		} else if ( Case.context === 'desktop' || Case.context === 'tablet' ) {
			originalText.click( function() {
				$( this ).css( "opacity", "1" );
				revisedText.css( "opacity", ".3" );
				pepsiRevised.fadeOut();
				pepsiOriginal.show();
			});

			revisedText.click( function() {
				$( this ).css( "opacity", "1" );
				originalText.css( "opacity", ".3" );
				pepsiOriginal.fadeOut();
				pepsiRevised.show();
			});
		}
	};

	$( document ).ready( function() {
		Case.init();
	} );	

	$(window).load( function() {
		$( '.spectragram.home1 div:nth-child(n+2)' ).remove();
		$( '.spectragram.home2 div:nth-child(1)' ).remove();
		$( '.spectragram.home2 div:nth-child(2)' ).remove();
		$( '.spectragram.home3 div:nth-child(-n+2)' ).remove();

		// Override page piling html body classes when not on home page
		if ( ! $( '.onePage' ).length ) {
			$( 'html, body' ).css( 'overflow', 'auto' );
		}

		Case.initHomeMasonry();
	} );

} )( jQuery );
