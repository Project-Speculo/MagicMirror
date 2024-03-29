/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		/*{
			module: "updatenotification",
			position: "top_bar"
		},*/
		{
			module: "clock",
			position: "middle_center"
		},
		{
			module: "MMM-GoogleCalendar",
			header: " My Google Calendar 2024",
			position: "upper_third",
			config: {
				calendars: [
					{
						symbol:	"calendar-week",
						calendarID: "mmcapstone23@gmail.com"
						
					}
				]
			}
		},
		{
			module: "calendar",
			header: "Ontario Holidays 2024",
			position: "bottom_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://canada-holidays.ca/ics/ON"
					}
				]
			}
		},
		{
		  module: "MMM-GoogleAssistant",
		  configDeepMerge: true,
		  config: {
			stopCommand: "stop",
			otherStopCommands: ["no", "cancel", "quiet", "no thank you", "nah fam"],
			assistantConfig: {
			  lang: "en-US",
			  latitude: 43.897095,
			  longitude: -78.865791,
			},
			recipes: [
				"EXT-Spotify.js", "EXT-Selfies.js"
			],
			website: {
			  username: "admin",
			  password: "admin",
			  CLIENT_ID: null
			}
		  }
		},
		{
		  module: "EXT-Detector",
		  position: "top_right",
		  config: {
			debug: false,
			porcupineAccessKey: "XoMhym37htyKo1V5e+v8/04fNVRIfhDD8aS+ziierU7MKd6tYkyf3g==",
			porcupineCustomModel: "wakeword_mm.ppn",
			detectors: [
			  {
				detector: "Snowboy",
				Model: "jarvis",
				Sensitivity: 0.7
			  },
			  /*{
				detector: "Snowboy",
				Model: "smart_mirror",
				Sensitivity: 0.5
			  },
			  {
				detector: "Porcupine",
				Model: "ok google",
				Sensitivity: null
			  },
			  {
				detector: "Porcupine",
				Model: "Magic Mirror",
				Sensitivity: 0.7
			  }*/
			]
		  }
		},
		{
		  module: 'EXT-Alert',
		  config: {
			debug: false,
			ignore: []
		  }
		},
		{
			module: "compliments",
			position: "top_bar"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
			  // See 'Configuration options' for more information.
			  weatherProvider: "envcanada",
			  type: "hourly",
			  units: "metric",
			  degreeLabel: "true",
			  timeFormat: "24",
	
			  siteCode: 's0000707', // this toronto: 's0000458',
			  provCode: 'ON',
			  location: 'Oshawa, ON'
			}
		 },
		 {
		  module: 'EXT-Spotify',
		  position: 'top_left',
		  animateIn: "flipInX",
		  animateOut: "flipOutX",
		  config: {
			updateInterval: 1000,
			idleInterval: 10000,
			useBottomBar: false,
			CLIENT_ID: "2fda49dd5d3946da88d07e53f40c8d9c",
			CLIENT_SECRET: "04111eb3e9344953ba2322f993eeaf13",
			mini: true,
			forceSCL: false,
			noCanvas: false
		  }
		},
		{
		  module: 'EXT-Librespot',
		  config: {
			debug: false,
			email: "hbrooksd@gmail.com",
			password: "Damani49zz22",
			deviceName: "MagicMirror",
			minVolume: 40,
			maxVolume: 100
		  }
		},
		
		{
			module: 'EXT-SpotifyCanvasLyrics'
		},
		{
		  module: "MMM-GoogleTTS", // no `position` is needed.
		  config: {}
		},	
		{
			module: 'gotransit',
			position: 'bottom_bar',    // This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				line: 'LE'
			}
		},
		{
		  module: 'EXT-Selfies',
		  position: 'top_left',
		  config: {
			debug: false,
			captureWidth:1280,
			captureHeight:720,
			device: null,
			usePreview: true,
			previewWidth:640,
			previewHeight:360,
			displayButton: true,
			buttonStyle: 0,
			buttons: {
			  1: "master.png",
			  2: "halloween.png",
			  3: "birthday.png",
			  4: "christmas.png"
			},
			blinkButton: false,
			playShutter: true,
			resultDuration: 1000 * 10,
			autoValidate: true,
			counterStyle: 0,
			showResult: true
		  }
		},
		{
		  module: 'EXT-SelfiesViewer',
		  position: 'top_left',
		  config: {
			debug: false,
			moduleWidth: 300,
			moduleHeight: 250,
			displayDelay: 1000 * 10,
			displayBackground: true,
			sortBy: "new" // old or random
		  }
		},
		{
		  module: 'EXT-Motion',
		  config: {
			debug: false,
			captureIntervalTime: 1000,
			scoreThreshold: 100,
			deviceId: null
		  }
		},
		{
		  module: 'EXT-Screen',
		  position: 'top_left',
		  animateIn: "flipInX",
		  animateOut: "flipOutX",
		  config: {
			debug: false,
			animateBody: true,
			autoDimmer: true,
			delay: 1 * 60 * 1000,
			mode: 1,
			xrandrForceRotation: "normal",
			wrandrForceRotation: "normal",
			wrandrForceMode: null,
			displayCounter: false,
			displayBar: true,
			displayStyle: "Text",
			displayLastPresence: false,
			lastPresenceTimeFormat: "LL H:mm",
			displayAvailability: false,
			detectorSleeping: false,
			gpio: 20,
			clearGpioValue: true,
			sound: false,
			touchMode: 0,
			ON: [],
			OFF: []
		  }
		},
		{
			module: 'MMM-EmbedYoutube', // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/MMM-EmbedYoutube/ so it's custom/MMM-EmbedYoutube
			position: 'bottom_right', // This can be any of the regions.
			config: {
			  // See 'Configuration options' in README.md for more information.
			  video_id: 'xVWeRnStdSA',
			  video_list: [
				"KtHgi1MgIes",
				"JnebIOdlgA",
				],
			  loop: true,
			}
		 },
		 {
			 module: 'MMM-Cursor',
			 config: {
			}
		 }, 
		 {
			  module: "MMM-AVStock",
			  position: "top_right",
			  config: {
				symbols : ["GOOGL", "TSLA", "VEQT.TO","TD.TO"], //GOOGL
				alias: ["GOOGLE", "TESLA", "VANGUARD", "TDBANK"],
			}
		 },
			 
        /*{
            module: 'MMM-XKCD',
            position: 'upper_third',
            config: {
                header: "xkcd",
                updateInterval: 10 * 60 * 60 * 1000,
                grayScale: false,
                invertColors: false,
                limitComicWidth: 400,
                limitComicHeight: 0,
                randomComic: false,
                alwaysRandom: false,
                showTitle: true,
            }
        },*/ 
        /*{
		  module: 'MMM-MyTTC',
		  position: 'bottom_right',
		  header: 'TTC Schedule',
		  config: {
			routeList: [
			  {
				routeNo : '905',
				stop : '2942'
			  },
			  {
				routeNo : '525',
				stop : '2332',
			  }
			]
		  }
		},*/

		/*{
			module: 	'MMM-Weather-Now',
			position: 	'top_center',
			config: {
					api_key:    '5cb19f686f9a876ebec1fcbb567c359f',
					lat:		43.8971,
					lon:		78.8658,
					units:		'M',
					lang:		'en',
					interval:   900000
			}
		},*/
		{
			module:     'MMM-3Day-Forecast',
			position:   'top_center',
			config: {
				api_key:    '5cb19f686f9a876ebec1fcbb567c359f',
				lat:        43.8971,
				lon:        78.8658,
				units:      'M',
				lang:       'en',
				interval:   900000
			}
		},
		{
            module: "MMM-DailyPokemon",
            position: "bottom_left",
            config: {
                updateInterval: 600000,
                minPoke: 4,
                maxPoke: 151,
                grayscale: true,
                showType: true,
                language: "en",
                genera: true,
                gbaMode: true,
                nameSize: 26,
                flavorText: false
            }
        },
        /*{
			module: 'MMM-PokemonGOEvents',
			position: 'bottom_left',
			header: "Pokemon GO Events",
			config: {
				category: "current",
				theme: "default",
				updateInterval: 5000,
				maxEvents: 5,
				truncateTitle: 0,
				exactTimestamp: false,
				eventWhitelist: [],
				eventBlacklist: [],
				specificEventBlacklist: [],
				eventIcon: "fa-solid fa-ticket"
			}
		},*/
		/*{
		  module: 'MMM-SoccerLiveScore',
		  position: 'lower_third',
		  header: 'Live-Scores',
		  config: {
			leagues: [17],
			showNames: true,
			showLogos: true,
			displayTime: 60 * 1000,
			showStandings: true,
			showTables: true,
			showScorers: true,
			scrollVertical: false,
			language: 'en', // supported values are en, de, it
		  }
		},*/
		/*{
			module: "newsfeed",
			position: "lower_third",
			config: {
				feeds: [
					{
						title: "CBC- Top Stories",
						url: "https://www.cbc.ca/webfeed/rss/rss-topstories"
						//CTV: "http://toronto.ctvnews.ca/rss/Latest"
						//CBC: "https://www.cbc.ca/webfeed/rss/rss-topstories"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		}
		/*{
			module: 'MMM-GoogleFit',
			position: 'bottom_right',
			config: {
				startOnMonday: true,
				stepCountLabel: true,
				showRealSteps: true,
				displayDays: ["L", "M", "X", "J", "V", "S", "D"],
				updateInterval: 15,
				colors: ["#EEEEEE", "#1E88E5", "#9CCC65", "#5E35B1", "#FFB300", "#F4511E"],
				displayWeight: true,
			}
		}*/ 
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "CBC News",
						url: "https://www.cbc.ca/webfeed/rss/rss-topstories"
						//CTV: "http://toronto.ctvnews.ca/rss/Latest"
						//CBC: "https://www.cbc.ca/webfeed/rss/rss-topstories"
					},
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

