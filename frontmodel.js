var model = [
  //bio
  {
    section:'aa010',
	height:'605px',
	head:"Hi, I'm Joe.",
	img:{
      a:null,
	  src:'img/tuesShoulders.jpg',
	  alt:"This is me and Tuesday. She's pretty cute.",
	  height:'319',
	  width:'275'
	},
	content:[
	  "I live and work in Portland, OR.",
	  "I write clean, object-oriented, Javascript focused on boundary-pushing frameworks and platforms such as node.js and knockout. I know my way around HTML5, CSS3, and XML. I'm also comfortable with PHP, MySQL, NoSQL, Python, and AS3. If you poke around my site you'll notice that I'm really excited by the coming era of web audio and crafting interfaces.",
	  "I'm a web developer, sound artist, writer, maker, musician, father, husband, and tinkerer.",
	  "Thanks for your interest."
	]
  },
  
  //contact
  {
    section:'aa020',
	height:'525px',
	head:"Contact Me.",
	img:null,
	content:null,
	linkContent:[
	  {
        href:'mailto:josephlepper@gmail.com',
        p:'email'
	  },
	  {
        href:'http://www.linkedin.com/profile/view?id=36891080&trk=tab_pro',
		p:'linkedin'
      },
	  {
        href:'http://www.about.me/joelepper',
		p:'about.me'
      },
	  {
        href:'http://www.facebook.com/joe.lepper',
		p:'facebook'
      }
    ]
  },
  
  //this site
  {
    section:'aa030',
	height:'310px',
	head:"About this site.",
	img:null,
	content:[
	  'Formerly built on a LAMP stack, joelepper.com has been migrated to node.js and takes advantage of the express / connect middleware and jade templating engine.'
    ]
  },
  
  //step sync
  {
    section:'ba010',
	height:'920px',
	head:"Step Sync.",
	img:{
      a:'juggler',
	  src:'img/stepSync.png',
	  alt:"Step Sync - a browser-based interactive audio sequencer",
	  height:'206',
	  width:'400'
	},
	content:[
	  'Step Sync builds on ideas from my AS3 audio sequencer. It takes advantage of the Web Audio API (so right now it only works in Google Chrome) to precisely schedule the playback of individual samples, which allows the user a more precise and enjoyable experience.',
	  'The main screen of the interface allows for most of the "performance" controls. Each row of the main screen represents a different loop of audio. The user may click any of the "loop Sequencing" buttons to jump to that point in that loop, or select a series of buttons within the row to cycle through a smaller portion of the sequence. The main screen also allows the user to control the tempo, amount of swing in the beat and whether the sequencer is running, set a row\'s volume, as well as toggle that row\'s FX send and mute.',
	  'Clicking to edit a row will bring the user to a second interface, where they may program new patterns or manipulate the FX levels for an individual row.'
	]
  },
  
  //amen breaker
  {
    section:'ba020',
	height:'890px',
	head:"The Amen Breaker.",
	img:{
      a:'shuffler',
	  src:'img/amenBreaker.png',
	  alt:"The Amen Breaker",
	  height:'187',
	  width:'400'
	},
	content:[
	  'Step Sync builds on ideas from my old AS3 audio sequencer. It takes advantage of the Web Audio API (so right now it only works in Google Chrome) to precisely schedule the playback of individual samples, which allows the user a more precise and enjoyable experience.',
	  'The main screen of the interface allows for most of the "performance" controls. Each row of the main screen represents a different loop of audio. The user may click any of the "loop Sequencing" buttons to jump to that point in that loop, or select a series of buttons within the row to cycle through a smaller portion of the sequence. The main screen also allows the user to control the tempo, amount of swing in the beat and whether the sequencer is running, set a row\'s volume, as well as toggle that row\'s FX send and mute.',
	  'Clicking to edit a row will bring the user to a second interface, where they may program new patterns or manipulate the FX levels for an individual row.'
	]
  },
  
  //original compositions
  {
    section:'ca010',
	height:'910px',
	head:"Original Compositions",
	img:null,
	content:[
	  'These tracks were all composed using a combination of Propellerhead Reason, Audacity, live instrumentation and pure force of will. Enjoy.'
	],
	audio:[
	  'http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F37598031&show_artwork=false',
	  'http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F34011673&show_artwork=false',
	  'http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F14967707&show_artwork=false',
	  'http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F14245514&show_artwork=false'
	]
  },
  
  //refixes
  {
    section:'ca020',
	height:'910px',
	head:"Vocal Re-fixes",
	img:null,
	content:[
	  'All these tracks were all composed using a combination of Propellerhead Reason, Audacity, live instrumentation, and pre-recorded audio. Most of them are covers, too.'
	],
	audio:[
	  'http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F12094208&show_artwork=false',
	  'http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F12917321&show_artwork=false',
	  'http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F12536534&show_artwork=false',
	  'http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F11150572&show_artwork=false'
	]
  },
]

exports.model = model;