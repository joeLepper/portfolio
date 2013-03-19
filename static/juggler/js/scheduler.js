//audio graph
var context

//all samples to be initialized
var a0,aSharp0,b0,c0,cSharp0,d0,dSharp0,e0,f0,fSharp0,g0,gSharp0,a1,aSharp1,b1,c1,cSharp1,d1,dSharp1,e1,f1,fSharp1,g1,gSharp1,a2,aSharp2,b2,c2,cSharp2,d2,dSharp2,e2,f2,fSharp2,g2,gSharp2,a3,aSharp3,b3,c3,cSharp3,d3,dSharp3,e3,f3,fSharp3,g3,gSharp3,a4,aSharp4,b4,c4,cSharp4,d4,dSharp4,e4,f4,fSharp4,g4,gSharp4,a5,aSharp5,b5,c5,cSharp5,d5,dSharp5,e5,f5,fSharp5,g5,gSharp5,a6,aSharp6,b6,c6,cSharp6,d6,dSharp6,e6,f6,fSharp6,g6,gSharp6,a7,aSharp7,b7,c7,cSharp7,d7,dSharp7,e7,f7,fSharp7,g7,gSharp7

//demo rhythm: when each note should play in the loop
var a0Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var aSharp0Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var b0Array =      [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0];
var c0Array =      [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
var cSharp0Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var d0Array =      [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0];
var dSharp0Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0];
var e0Array =      [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
var f0Array =      [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
var fSharp0Array = [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
var g0Array =      [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
var gSharp0Array = [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0];

var a1Array =      [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0];
var aSharp1Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var b1Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var c1Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cSharp1Array = [0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0];
var d1Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dSharp1Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var e1Array =      [0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
var f1Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fSharp1Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var g1Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gSharp1Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var a2Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var aSharp2Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var b2Array =      [0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0];
var c2Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cSharp2Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var d2Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dSharp2Array = [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
var e2Array =      [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
var f2Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fSharp2Array = [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
var g2Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gSharp2Array = [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];

var a3Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var aSharp3Array = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0];
var b3Array =      [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
var c3Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cSharp3Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var d3Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dSharp3Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var e3Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var f3Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fSharp3Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var g3Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gSharp3Array = [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];

var a4Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var aSharp4Array = [0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0];
var b4Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var c4Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cSharp4Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var d4Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dSharp4Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var e4Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var f4Array =      [0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1];
var fSharp4Array = [1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0];
var g4Array =      [0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0];
var gSharp4Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var a5Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var aSharp5Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var b5Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var c5Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cSharp5Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var d5Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dSharp5Array = [0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0];
var e5Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var f5Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fSharp5Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var g5Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gSharp5Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var a6Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var aSharp6Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var b6Array =      [1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1];
var c6Array =      [0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0];
var cSharp6Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var d6Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dSharp6Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var e6Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var f6Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fSharp6Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var g6Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gSharp6Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var a7Array =      [1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0];
var aSharp7Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var b7Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var c7Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cSharp7Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var d7Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dSharp7Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var e7Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var f7Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fSharp7Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var g7Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gSharp7Array = [1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0];

//all samples in their arrays
sampleBank0 = [gSharp0,g0,fSharp0,f0,e0,dSharp0,d0,cSharp0,c0,b0,aSharp0,a0]
sampleBank1 = [gSharp1,g1,fSharp1,f1,e1,dSharp1,d1,cSharp1,c1,b1,aSharp1,a1]
sampleBank2 = [gSharp2,g2,fSharp2,f2,e2,dSharp2,d2,cSharp2,c2,b2,aSharp2,a2]
sampleBank3 = [gSharp3,g3,fSharp3,f3,e3,dSharp3,d3,cSharp3,c3,b3,aSharp3,a3]
sampleBank4 = [gSharp4,g4,fSharp4,f4,e4,dSharp4,d4,cSharp4,c4,b4,aSharp4,a4]
sampleBank5 = [gSharp5,g5,fSharp5,f5,e5,dSharp5,d5,cSharp5,c5,b5,aSharp5,a5]
sampleBank6 = [gSharp6,g6,fSharp6,f6,e6,dSharp6,d6,cSharp6,c6,b6,aSharp6,a6]
sampleBank7 = [gSharp7,g7,fSharp7,f7,e7,dSharp7,d7,cSharp7,c7,b7,aSharp7,a7]
allSamples = [sampleBank0,sampleBank1,sampleBank2,sampleBank3,sampleBank4,sampleBank5,sampleBank6,sampleBank7]

blankArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//all demo rhythms sorted into arrays by row
var rhythmArray0 = [gSharp0Array,g0Array,fSharp0Array,f0Array,e0Array,dSharp0Array,d0Array,cSharp0Array,c0Array,b0Array,aSharp0Array,a0Array];
var rhythmArray1 = [gSharp1Array,g1Array,fSharp1Array,f1Array,e1Array,dSharp1Array,d1Array,cSharp1Array,c1Array,b1Array,aSharp1Array,a1Array];
var rhythmArray2 = [gSharp2Array,g2Array,fSharp2Array,f2Array,e2Array,dSharp2Array,d2Array,cSharp2Array,c2Array,b2Array,aSharp2Array,a2Array];
var rhythmArray3 = [gSharp3Array,g3Array,fSharp3Array,f3Array,e3Array,dSharp3Array,d3Array,cSharp3Array,c3Array,b3Array,aSharp3Array,a3Array];
var rhythmArray4 = [gSharp4Array,g4Array,fSharp4Array,f4Array,e4Array,dSharp4Array,d4Array,cSharp4Array,c4Array,b4Array,aSharp4Array,a4Array];
var rhythmArray5 = [gSharp5Array,g5Array,fSharp5Array,f5Array,e5Array,dSharp5Array,d5Array,cSharp5Array,c5Array,b5Array,aSharp5Array,a5Array];
var rhythmArray6 = [gSharp6Array,g6Array,fSharp6Array,f6Array,e6Array,dSharp6Array,d6Array,cSharp6Array,c6Array,b6Array,aSharp6Array,a6Array];
var rhythmArray7 = [gSharp7Array,g7Array,fSharp7Array,f7Array,e7Array,dSharp7Array,d7Array,cSharp7Array,c7Array,b7Array,aSharp7Array,a7Array];
var rhythmArrayBlank = [blankArray,blankArray,blankArray,blankArray,blankArray,blankArray,blankArray,blankArray,blankArray,blankArray,blankArray,blankArray];

var allRhythms = [rhythmArray0,rhythmArray1,rhythmArray2,rhythmArray3,rhythmArray4,rhythmArray5,rhythmArray6,rhythmArray7,rhythmArrayBlank];

//timing array for tracking what step in a row the sequencer is in and where each loop begins / stops
stepIndexArray = [0,0,0,0,0,0,0,0];
lastStepArray = [15,15,15,15,15,15,15,15];
startLoopArray = [0,0,0,0,0,0,0,0];
endLoopArray = [15,15,15,15,15,15,15,15];

//clock variables
var bpm = 260;
var eighthNoteTime = 60 / bpm;
var maxSwing = eighthNoteTime / 6;
var stepIndex = 0.0;
var stepTime = 0;
var startTime;
var clock;
var swingLevel = .6;
var swingStepIndex = 0;

//flags set while the user is setting / has set a miniloop
var isBeingDraggedIn = [false,false,false,false,false,false,false,false];
var isMiniLooping = [false,false,false,false,false,false,false,false];

//miniLoop arrays
var workingMiniLoop = new Array();
var miniLoops = [miniLoopA,miniLoopB,miniLoopC,miniLoopD,miniLoopE,miniLoopF,miniLoopG,miniLoopH];
var miniLoopA = new Array();
var miniLoopB = new Array();
var miniLoopC = new Array();
var miniLoopD = new Array();
var miniLoopE = new Array();
var miniLoopF = new Array();
var miniLoopG = new Array();
var miniLoopH = new Array();

//pre-gain nodes --- TODO: COnnect the volume sliders to post-gain nodes and use these for a distortion
var gain0;
var gain1;
var gain2;
var gain3;
var gain4;
var gain5;
var gain6;
var gain7;
var preGainNodeArray = [gain0,gain1,gain2,gain3,gain4,gain5,gain6,gain7];

//nodes to control number of repetitions for delay
var delayFeedbackGain0
var delayFeedbackGain1
var delayFeedbackGain2
var delayFeedbackGain3
var delayFeedbackGain4
var delayFeedbackGain5
var delayFeedbackGain6
var delayFeedbackGain7
var feedbackGainNodeArray = [delayFeedbackGain0,delayFeedbackGain1,delayFeedbackGain2,delayFeedbackGain3,delayFeedbackGain4,delayFeedbackGain5,delayFeedbackGain6,delayFeedbackGain7];

//delay nodes, control delay time
var delay0
var delay1
var delay2
var delay3
var delay4
var delay5
var delay6
var delay7
var delayArray = [delay0,delay1,delay2,delay3,delay4,delay5,delay6,delay7];

//low-pass filters
var filter0
var filter1
var filter2
var filter3
var filter4
var filter5
var filter6
var filter7
var filterArray = [filter0,filter1,filter2,filter3,filter4,filter5,filter6,filter7];

//overdrive feedback nodes
var overdrive0
var overdrive1
var overdrive2
var overdrive3
var overdrive4
var overdrive5
var overdrive6
var overdrive7
var overdriveArray = [overdrive0,overdrive1,overdrive2,overdrive3,overdrive4,overdrive5,overdrive6,overdrive7]

//nodes which set the actual "loudness" of a channel
var finalGainStage0
var finalGainStage1
var finalGainStage2
var finalGainStage3
var finalGainStage4
var finalGainStage5
var finalGainStage6
var finalGainStage7
var finalGainStageArray = [finalGainStage0,finalGainStage1,finalGainStage2,finalGainStage3,finalGainStage4,finalGainStage5,finalGainStage6,finalGainStage7]

//it's reverb
var reverb0

//handles the clean mix around the reverb
var cleanGain0
var cleanGain1
var cleanGain2
var cleanGain3
var cleanGain4
var cleanGain5
var cleanGain6
var cleanGain7
var cleanGainArray = [cleanGain0,cleanGain1,cleanGain2,cleanGain3,cleanGain4,cleanGain5,cleanGain6,cleanGain7,]

//handles the level of a channel into the reverb stage
var reverbGain0
var reverbGain1
var reverbGain2
var reverbGain3
var reverbGain4
var reverbGain5
var reverbGain6
var reverbGain7
var reverbGainArray = [reverbGain0,reverbGain1,reverbGain2,reverbGain3,reverbGain4,reverbGain5,reverbGain6,reverbGain7]

//it's the compressor
var compressor 

//initial FX levels
feedbackGainArray = [0.75,0.25,0.1,0.35,0.35,0.45,0.75,0.01]
delayTimeArray = [0.22,0.25,0.1,0.05,0.5,0.01,0.01,0.01]
var volumeArray = [0.8,0.1,0.8,0.2,0.75,0.9,0.85,0.8];
var filterFreqArray = [1165,1000,330,2000,2000,4800,4500,4500]
var filterQArray = [25,0,0.01,1.5,.3,0,0,0]
var filterTypeArray = [0,0,0,0,0,0,0,0]
var overdriveFeedbackArray = [0,0,0,0,0,0,0,.95]

//initial FX states
var fxOnArray = [1,1,1,1,1,1,1,1]
var muteArray = [1,1,1,1,1,1,1,1];
var delayOnArray =[1,1,1,1,0,1,1,0]
var filterOnArray = [1,1,1,1,1,1,1,1]
var overdriveOnArray = [0,1,1,1,1,1,1,1] //actually reverb

//global housekeeping variables
var showPattern = 8;
var lightToTurnOff;
var turnOnOrOff;
var turnOffThisRow;
var mightJumpToHere;
var rowAffected;
var isPlaying = 0;

//object for retrieving buttons from DOM
var pageButtons;

$(document).ready(function() {
	try {
		context = new webkitAudioContext();
		context = context;
		$(".blocker").delay(500).animate({opacity:0.75},1500)
		$("#welcomeOverlay").delay(2000).animate({left: "25%",opacity:1},1000)
		initButtons();
		$("#drumPattern1").hide();
		centerOverlay.readyForResize();
	}
	catch(e) {
		$(".blocker").css("opacity","1");
		$("#noChromeOverlay").animate({left: "25%",opacity:1},1000)
		//alert("Web Audio API is not supported in this browser. Download Google Chrome to take advantage of Step Sync's features.");
	}
	//handles AJAX retrieval of samples
	bufferLoader = new BufferLoader(
		context,
		[
			'audio/vibeCSharp0.wav',
			'audio/vibeDSharp0.wav',
			'audio/vibeFSharp0.wav',
			'audio/vibeGSharp0.wav',
			'audio/vibeASharp0.wav',
			'audio/vibeCSharp1.wav',
			'audio/vibeDSharp1.wav',
			'audio/vibeFSharp1.wav',
			'audio/vibeGSharp1.wav',
			'audio/vibeASharp1.wav',
			'audio/vibeCSharp2.wav',
			'audio/vibeDSharp2.wav',
			
			'audio/bassCSharp0.wav',
			'audio/bassDSharp0.wav',
			'audio/bassFSharp0.wav',
			'audio/bassGSharp0.wav',
			'audio/bassASharp0.wav',
			'audio/bassCSharp1.wav',
			'audio/bassDSharp1.wav',
			'audio/bassFSharp1.wav',
			'audio/bassGSharp1.wav',
			'audio/bassASharp1.wav',
			'audio/bassCSharp2.wav',
			'audio/bassDSharp2.wav',
			
			'audio/squareCSharp0.wav',
			'audio/squareDSharp0.wav',
			'audio/squareFSharp0.wav',
			'audio/squareGSharp0.wav',
			'audio/squareASharp0.wav',
			'audio/squareCSharp1.wav',
			'audio/squareDSharp1.wav',
			'audio/squareFSharp1.wav',
			'audio/squareGSharp1.wav',
			'audio/squareASharp1.wav',
			'audio/squareCSharp2.wav',
			'audio/squareDSharp2.wav',
			
			'audio/twinkleTwinkle00.wav',
			'audio/twinkleTwinkle01.wav',
			'audio/twinkleTwinkle02.wav',
			'audio/twinkleTwinkle03.wav',
			'audio/twinkleTwinkle04.wav',
			'audio/twinkleTwinkle05.wav',
			'audio/twinkleTwinkle06.wav',
			'audio/twinkleTwinkle07.wav',
			'audio/twinkleTwinkle08.wav',
			'audio/twinkleTwinkle09.wav',
			'audio/twinkleTwinkle10.wav',
			'audio/twinkleTwinkle11.wav',
			
			'audio/glitchKit0.wav',
			'audio/glitchKit1.wav',
			'audio/glitchKit2.wav',
			'audio/glitchKit3.wav',
			'audio/glitchKit4.wav',
			'audio/glitchKit5.wav',
			'audio/glitchKit6.wav',
			'audio/glitchKit7.wav',
			'audio/glitchKit8.wav',
			'audio/glitchKit9.wav',
			'audio/glitchKit10.wav',
			'audio/glitchKit11.wav',
			
			'audio/dirtyBassKit0.wav',
			'audio/dirtyBassKit1.wav',
			'audio/dirtyBassKit2.wav',
			'audio/dirtyBassKit11.wav',
			'audio/dirtyBassKit3.wav',
			'audio/dirtyBassKit4.wav',
			'audio/dirtyBassKit5.wav',
			'audio/dirtyBassKit6.wav',
			'audio/dirtyBassKit7.wav',
			'audio/dirtyBassKit8.wav',
			'audio/dirtyBassKit9.wav',
			'audio/dirtyBassKit10.wav',
			
			'audio/a8.wav',
			'audio/aSharp8.wav',
			'audio/b8.wav',
			'audio/c8.wav',
			'audio/cSharp8.wav',
			'audio/d8.wav',
			'audio/dSharp8.wav',
			'audio/e8.wav',
			'audio/f8.wav',
			'audio/fSharp8.wav',
			'audio/g8.wav',
			'audio/gSharp8.wav',
			
			'audio/tim-omni-rear-blend.wav' //convolver reverb
		],
		finishedLoading
	);
	init();
	bufferLoader.load();
});

//Sets the FX channel for a node, is called any time a FX is set on / off
function connectTheFX(rowIndex){
		preGainNodeArray[rowIndex].disconnect();
		filterArray[rowIndex].disconnect();
		delayArray[rowIndex].disconnect();
		finalGainStageArray[rowIndex].disconnect();
		//main channel
		if(filterOnArray[rowIndex]){
			preGainNodeArray[rowIndex].connect(filterArray[rowIndex])
			filterArray[rowIndex].connect(finalGainStageArray[rowIndex])
			filterArray[rowIndex].connect(delayArray[rowIndex])
		}
		else{
			preGainNodeArray[rowIndex].connect(finalGainStageArray[rowIndex])
			preGainNodeArray[rowIndex].connect(delayArray[rowIndex])
		}
		//reverb channels
		if(overdriveOnArray[rowIndex]){
			finalGainStageArray[rowIndex].connect(reverbGainArray[rowIndex])
			finalGainStageArray[rowIndex].connect(cleanGainArray[rowIndex])
			reverbGainArray[rowIndex].connect(reverb0)
		}
		else{
			
		}
		//delay channel
		if(delayOnArray[rowIndex]){
			delayArray[rowIndex].connect(feedbackGainNodeArray[rowIndex])
			feedbackGainNodeArray[rowIndex].connect(delayArray[rowIndex])
			delayArray[rowIndex].connect(finalGainStageArray[rowIndex])
		}
		else{
			
		}
		finalGainStageArray[rowIndex].connect(compressor)
		reverb0.connect(compressor)
		compressor.connect(context.destination)
}

function init(){
	//assign index properties to dump (FX) buttons
	$(".dump").each(function(index){
		$(this).prop("rowIndex", index)	
	})
	//initialize buffers
	for(var i = 0; i < allSamples.length; i++){
		for(var j = 0; j < sampleBank0.length; j++){
			allSamples[i][j] = context.createBufferSource();
		}	
	}
	//create FX nodes
	$(preGainNodeArray).each(function(index){
		//Gives a base gain boost to all samples
		preGainNodeArray[index] = context.createGainNode();
		preGainNodeArray[index].gain.value = .75; //set to 3/4 power to minimize clipping
		
		//Creates the nodes that set the feedback level for the delay, sets the number of delays
		feedbackGainNodeArray[index] = context.createGainNode();
		feedbackGainNodeArray[index].gain.value = feedbackGainArray[index];
		
		//Creates the actual delay nodes, these change the length of time between delay reps
		delayArray[index] = context.createDelayNode();
		delayArray[index].delayTime.value = delayTimeArray[index];
		
		//creates the low pass filters
		filterArray[index] = context.createBiquadFilter();
		filterArray[index].frequency.value = filterFreqArray[index];
		
		
		//overdriveArray[index] = context.createGainNode();
		//overdriveArray[index].gain.value = overdriveFeedbackArray[index];
		
		//creates the nodes used to control the channel's gain in the mix
		finalGainStageArray[index] = context.createGainNode();
		finalGainStageArray[index].gain.value = volumeArray[index];
		
		//creates the nodes which control the dry of the reveb mix
		cleanGainArray[index] = context.createGainNode();
		cleanGainArray[index].gain.value = 1;
		
		//only one of these, creates the "reverb chamber"
		reverb0 = context.createConvolver();
		
		//creates the nodes which control the wet of the reverb mix
		reverbGainArray[index] = context.createGainNode();
		reverbGainArray[index].gain.value = 0.1;
		
		
	})
	compressor = context.createDynamicsCompressor();
	
	//init the startTime, which is passed to noteOn to start a sample when it is called
	startTime = context.currentTime + 0.005;
	
	//inits all the buttons with their row / column indexes
	for(var i = 0; i < 20; i++){
		for(var j = 0; j < 16; j++){
			currentButton = pageButtons.getButton(i, j);
			if( i < 12 ){
					$(currentButton).prop("rowIndex", i).prop("columnIndex", j).bind("mousedown", stepToggle); // function for programming patterns
			}
			else{
					$(currentButton).prop("rowIndex", i - 12).prop("columnIndex", j).bind({click: stepJump,
																						   mousedown: startRowDrag}); //functions for sequencing
			}
		}	
	}
}

//assigns the samples to their appropriate buffers
function finishedLoading (bufferList) {
	var bufferIndex = 0
	for(var i = 0; i < allSamples.length; i++){
		for(var j = 0; j < sampleBank0.length; j++){
			if(bufferIndex < 72){
				allSamples[i][j] = bufferList[bufferIndex];
				bufferIndex++
			}
			else{
				allSamples[i][j] = bufferList[bufferIndex]; //these are the percussive samples, loaded to the bottom four rows
				if( bufferIndex === 83){
					bufferIndex = 72;	
				}
				else{
					bufferIndex++	
				}
			}
		}
	}
	
	//calls to init the FX
	$(preGainNodeArray).each(function(index){
		connectTheFX(index)
	})
	
	//assigns the reverb buffer to its node
	reverb0.buffer = bufferList[84]
}

//Checks the rhythmArrays to see what needs to be played during the next beat, this is where the bug is, I'm 99% sure
function nextSchedule (){
	currentTime = context.currentTime;
	currentTime -= startTime;
	//console.log("*****************************")
	//console.log("current Time = " + currentTime);
	//console.log("start time = " + startTime);
	//console.log("step time = " + stepTime)
	nextStep = currentTime + eighthNoteTime;
	while(stepTime < currentTime +0.040){
		var contextPlayTime = stepTime + startTime
		for(var i = 0; i < allRhythms.length; i++){
			for(var j = 0; j < rhythmArray0.length; j++){
				if(allRhythms[i][j][stepIndexArray[i]]){
					playSound(allSamples[i][Math.abs(j-11)], contextPlayTime, i)
				}
			}
		}		
		advanceStep();
	}
	clock = setTimeout("nextSchedule()", 0);
}
function playSound(buffer, time, index) {
	var source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(preGainNodeArray[index]);
	source.noteOn(time);
}
function advanceStep(){
	eighthNoteTime = 60 / bpm
	var swing = maxSwing * swingLevel
	if(swingStepIndex % 2 === 0){
		stepTime += eighthNoteTime + swing;
	}
	else{
		stepTime += eighthNoteTime - swing;
	}
	updateLights();
	swingStepIndex++;
	for(var i = 0; i < stepIndexArray.length; i++){
		if(stepIndexArray[i] != endLoopArray[i]){
			stepIndexArray[i]++
		}
		else{
			stepIndexArray[i] = startLoopArray[i];
		}
	}
}
function lightItUp(){
	//turn off
	if (turnOnOrOff){       
		allRhythms[showPattern][$(this).prop("rowIndex")][$(this).prop("columnIndex")] = 0;
		$(this).removeClass("active")
	}
	//turn on
	else{       
		allRhythms[showPattern][$(this).prop("rowIndex")][$(this).prop("columnIndex")] = 1;
		$(this).addClass("active")
	}
}
function stopToggling(){
	
	console.log("Stopping");
	$(window).unbind("mouseup", stopToggling);
	for(var i = 0; i < pageButtons.getRowLength(); i++){
		for(var j = 0; j < a7Array.length; j++){
			bindToThese = pageButtons.getButton(i,j);
			$(bindToThese).unbind("mouseover", lightItUp).unbind("mouseup", stopToggling);
		}	
	}
}
function updateLights(){
	for(var i = 0; i < 20; i++){
		if( i < 12 ){
			if(stepIndexArray[i] < startLoopArray[i] || stepIndexArray[i] > endLoopArray[i]){
				currentButton = pageButtons.getButton(i, stepIndexArray[i - 12]);
				currentButton.removeClass("active")
				var isCurrentInAMiniLoop = workingMiniLoop.indexOf(stepIndexArray[i])
				if(isCurrentInAMiniLoop != -1){
					currentButton.addClass("loop")
				}
			}
			lastStepArray[i] = stepIndexArray[i] - 1 
			if(lastStepArray[i] === -1 || (lastStepArray[i] === startLoopArray[i] - 1 && isMiniLooping[i])){
				lastStepArray[i] = endLoopArray[i]	
			}
			for(var j = 0; j < rhythmArray4.length; j++){
				lastButton = pageButtons.getButton(j, lastStepArray[showPattern]);
				currentButton = pageButtons.getButton(j,stepIndexArray[showPattern]);
				if(!allRhythms[showPattern][j][stepIndexArray[showPattern]] && !allRhythms[showPattern][j][lastStepArray[showPattern]]){
					$(currentButton).addClass("active");
					$(lastButton).removeClass("active").addClass("punch");
				}
				else if(!allRhythms[showPattern][j][stepIndexArray[showPattern]] && allRhythms[showPattern][j][lastStepArray[showPattern]]){
					$(currentButton).addClass("active");				
				}
				else if(allRhythms[showPattern][j][stepIndexArray[showPattern]] && !allRhythms[showPattern][j][lastStepArray[showPattern]]){
					$(lastButton).removeClass("active").addClass("punch");
				}
				else{
					
				}
			}
		}
		else{
				currentButton = pageButtons.getButton(i, stepIndexArray[i - 12]);
				lastButton = pageButtons.getButton(i, lastStepArray[i - 12]);
				if(isMiniLooping[i - 12]){
					if(stepIndexArray[i - 12] < startLoopArray[i - 12] || stepIndexArray[i - 12] > endLoopArray[i - 12]){
					}
					else if(lastStepArray[i - 12] < startLoopArray[i - 12] || lastStepArray[i - 12] > endLoopArray[i - 12]){
					}
					else{
						$(currentButton).removeClass("loop").addClass("active")
						$(lastButton).removeClass("active").addClass("loop")
					}
				}
				else if(isBeingDraggedIn[i - 12]){
					var isCurrentInThere = workingMiniLoop.indexOf(stepIndexArray[i - 12]);
					var isLastInThere = workingMiniLoop.indexOf(lastStepArray[i - 12]);
					if(isCurrentInThere === -1 && isLastInThere === -1){
						$(currentButton).addClass("active")
						$(lastButton).removeClass("active")
					}
					else if(isCurrentInThere != -1 && isLastInThere === -1){
						$(currentButton).removeClass("loop").addClass("active")
						$(lastButton).removeClass("active")
					}
					else if(isCurrentInThere === -1 && isLastInThere != -1){
						$(currentButton).addClass("active")
						$(lastButton).removeClass("active").addClass("loop")
					}
					else if(isCurrentInThere != -1 && isLastInThere != -1){
						$(currentButton).removeClass("loop").addClass("active")
						$(lastButton).removeClass("active").addClass("loop")
					}
				}
				else{
					$(currentButton).addClass("active")
					$(lastButton).removeClass("active")
				}
		}
	}
}
function initPattern(screen){
	$(".active").each(function(){
		$(this).removeClass("active")
	});
	if(!screen){
		filterMax = $(".filterFreq").attr("min")
		
		$(".delayFeedbackGain").attr("value", feedbackGainArray[showPattern] * 100)
		$(".delayTime").attr("value", delayTimeArray[showPattern] * 100)
		//ugly hack for setting the filter frequency slider TODO: FIX THIS OLD AND BUSTED EQUATION
		$(".filterFreq").attr("value",filterFreqArray[showPattern] / 5000 )    
		$(".filterQ").attr("value", filterQArray[showPattern] / 5)
		$(".overdriveFeedback").attr("value", overdriveFeedbackArray[showPattern])
		
		$("#delayTime").html("Time: " + (delayTimeArray[showPattern]) + "s")
		$("#delayFeedback").html("Feedback: " + (feedbackGainArray[showPattern] * 100) + "%")
		$("#filterFrequency").html("Freq: " + filterFreqArray[showPattern].toFixed(0) + "hz")
		$("#filterQ").html("Q: " + (filterQArray[showPattern] * 2) + "%")
		$("#overdriveFeedback").html("Amount: " + ((overdriveFeedbackArray[showPattern] / .95) * 100) + "%")
		if(delayOnArray[showPattern] && $("#fx0").hasClass("activeFx")){
			$("#fx0").addClass("fx").removeClass("activeFx")
		}
		else if(!delayOnArray[showPattern] && $("#fx0").hasClass("fx")){
			$("#fx0").addClass("activeFx").removeClass("fx")
		}
		if(filterOnArray[showPattern] && $("#fx1").hasClass("activeFx")){
			$("#fx1").addClass("fx").removeClass("activeFx")
		}
		else if(!filterOnArray[showPattern] && $("#fx1").hasClass("fx")){
			$("#fx1").addClass("activeFx").removeClass("fx")
		}
		if(overdriveOnArray[showPattern] && $("#fx2").hasClass("activeFx")){
			$("#fx2").addClass("fx").removeClass("activeFx")
		}
		else if(!overdriveOnArray[showPattern] && $("#fx2").hasClass("fx")){
			$("#fx2").addClass("activeFx").removeClass("fx")
		}
		if(delayOnArray[showPattern]){
				$("#delayOn").html("Delay: On")
		}
		else{
				$("#delayOn").html("Delay: Off")
		}
		if(filterOnArray[showPattern]){
				$("#filterOn").html("Filter: On")
		}
		else{
				$("#filterOn").html("Filter: Off")
		}
		if(overdriveOnArray[showPattern]){
				$("#overdriveOn").html("Reverb: On")
		}
		else{
				$("#overdriveOn").html("Reverb: Off")
		}
		if(fxOnArray[showPattern]){
				$("#fxOn").html("Effects: On")
				$("#fx3").addClass("fx").removeClass("activeFx")
		}
		else{
				$("#fxOn").html("Effects: Off")
				$("#fx3").addClass("activeFx").removeClass("fx")
		}
		for(var i = 0; i < rhythmArray0.length; i++){
			for(var j = 0; j < a1Array.length; j++){
				currentButton = pageButtons.getButton(i,j);
				if(allRhythms[showPattern][i][j]){
					$(currentButton).addClass("active");
				}
				else{

				}
			}
		}
	}
	else{
		for(var i=0; i < fxOnArray.length; i++){
			thisLight = getTheDumpButton(i)
			if(!fxOnArray[i]){
				$(thisLight).addClass("dumped").removeClass("dump")
			}
			else{
				$(thisLight).removeClass("dumped").addClass("dump")
			}
		}	
	}
}

function stepJump(){
	lightToTurnOff = pageButtons.getButton($(this).prop("rowIndex") + 12,stepIndexArray[$(this).prop("rowIndex")] - 1)
	$(lightToTurnOff).removeClass("active");
	stepIndexArray[$(this).prop("rowIndex")] = $(this).prop("columnIndex");
	startLoopArray[$(this).prop("rowIndex")] = 0;
	endLoopArray[$(this).prop("rowIndex")] = 15;
	isMiniLooping[$(this).prop("rowIndex")] = false;
}
/**********************************************************************/
/*            Begins setting miniloop                                 */ 
/**********************************************************************/
		
function startRowDrag(){
	var row = $(this).prop("rowIndex");
	var column = $(this).prop("columnIndex");
	rowAffected = row;
	workingMiniLoop = [column];
	isBeingDraggedIn[row] = true;
	turnOffThisRow = row;
	mightJumpToHere = column;
	if($(this).hasClass("punch")){
	$(this).addClass("loop")
	}
	else if($(this).hasClass("active")){
		
	}
	else{
		
	}
	$(this).bind("mouseup", escapeRowDrag)
	$(window).bind("mouseup", escapeRowDrag);
	for(var i=0; i < 16; i++){
		$(pageButtons.getButton(row + 12,i)).bind("mouseover", addRowDrag).bind("mouseup", endRowDrag);
	};
};

/**********************************************************************/
/*               Adds step to miniloop                                */ 
/**********************************************************************/

function addRowDrag(){
	var column = $(this).prop("columnIndex")
	var workingIndex;
	$(this).addClass("loop")
		   .bind("mousedown", startRowDrag)
	$(workingMiniLoop).each(function(index) { 
		$(pageButtons.getButton(rowAffected + 12, workingMiniLoop[index])).removeClass("loop")
												 .addClass("punch");
	});
	workingMiniLoop = [mightJumpToHere];
	if(column > workingMiniLoop[0]){
		workingIndex = column
		for(i = 0; i < column - workingMiniLoop[0]; i++){
			workingMiniLoop.push(workingIndex);
			workingIndex--;			
		}
	}
	else{
		workingIndex = column
		for(i = 0; i < workingMiniLoop[0] - column ; i++){
			workingMiniLoop.push(workingIndex);
			workingIndex++;			
		}
	}
	$(workingMiniLoop).each(function(index) { 
		$(pageButtons.getButton(rowAffected + 12,workingMiniLoop[index]))
												 .addClass("loop");
	});
};

/**********************************************************************/
/*               Cancels the setting of miniloop                      */ 
/**********************************************************************/
	
function escapeRowDrag(){
	if(workingMiniLoop === []){
	
	}
	else{
		$(workingMiniLoop).each(function(index){
			if($(pageButtons.getButton(rowAffected + 12,workingMiniLoop[index])).hasClass("loop")){
				$(pageButtons.getButton(rowAffected + 12,workingMiniLoop[index])).removeClass("loop")
															   .addClass("punch");
			}
			else{
				$(pageButtons.getButton(rowAffected + 12,workingMiniLoop[index])).removeClass("active")
															   .addClass("punch");
			}
		});
	}
	$(isBeingDraggedIn).each(function(index){
		isBeingDraggedIn[index] = false;
	});
	$(window).unbind("mouseup", escapeRowDrag);
	$(this).removeClass("loop")
		   .addClass("punch");
	for(var i=0; i<16; i++){
		$(pageButtons.getButton(turnOffThisRow + 12,i)).unbind("mouseover", addRowDrag)
	};
};

/**********************************************************************/
/*                         Sets the miniloop                          */ 
/**********************************************************************/

function endRowDrag(){
	lightToTurnOff = pageButtons.getButton($(this).prop("rowIndex") + 12,lastStepArray[$(this).prop("rowIndex")] + 1)
	$(lightToTurnOff).removeClass("active");
	row = $(this).prop("rowIndex");
	column = $(this).prop("columnIndex")
	isBeingDraggedIn[row] = false;
	isMiniLooping[row] = true;
	if(mightJumpToHere > column){
		startLoopArray[row] = column;
		endLoopArray[row] = mightJumpToHere;
		stepIndexArray[row] = column;
	}
	else{
		startLoopArray[row] = mightJumpToHere;
		endLoopArray[row] = column;
		stepIndexArray[row] = mightJumpToHere;
	}
	if(workingMiniLoop.indexOf(lastStepArray[row]) != -1){
		$(pageButtons.getButton(row + 12,lastStepArray[row])).removeClass("active")// <----turns off the currently active light before jumping into the new miniloop
										   .addClass("loop");
	}
	else{
		$(pageButtons.getButton(row + 12,lastStepArray[row])).removeClass("active")// <----turns off the currently active light before jumping into the new miniloop
										   .addClass("punch");
	};
	lastStepArray[row] = stepIndexArray[row] - 1;
	$(window).unbind("mouseup", escapeRowDrag);
	for(var i = 0; i < 16; i++){
		$(pageButtons.getButton(turnOffThisRow + 12, i)).each(function(index){ 
			$(this).unbind("mouseover", addRowDrag)
				   .unbind("mouseup",endRowDrag);
		})
	}
	$(miniLoops[rowAffected]).each(function(index){
		var isItInThere = workingMiniLoop.indexOf(miniLoops[rowAffected][index]);
		if($(pageButtons.getButton(rowAffected + 12, miniLoops[rowAffected][index])).hasClass("loop") && isItInThere === -1){
			$(pageButtons.getButton(rowAffected + 12, miniLoops[rowAffected][index])).removeClass("loop")
																  .addClass("punch");
		}
		else if($(pageButtons.getButton(rowAffected + 12, miniLoops[rowAffected][index]) && isItInThere != -1).hasClass("punch")){
			$(pageButtons.getButton(rowAffected + 12, miniLoops[rowAffected][index])).removeClass("loop")
																  .addClass("punch");
		}
		else{
			$(pageButtons.getButton(rowAffected + 12, miniLoops[rowAffected][index])).removeClass("active")
															  .addClass("punch");
		}
	})
	miniLoops[row] = workingMiniLoop;
};

//PageButtons.getButton here
pageButtons = function(){
	var _rowA            = ['a0','a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','a13','a14','a15'],
		_rowB            = ['b0','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15'],
		_rowC            = ['c0','c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11','c12','c13','c14','c15'],
		_rowD            = ['d0','d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15'],
		_rowE            = ['e0','e1','e2','e3','e4','e5','e6','e7','e8','e9','e10','e11','e12','e13','e14','e15'],
		_rowF            = ['f0','f1','f2','f3','f4','f5','f6','f7','f8','f9','f10','f11','f12','f13','f14','f15'],
		_rowG            = ['g0','g1','g2','g3','g4','g5','g6','g7','g8','g9','g10','g11','g12','g13','g14','g15'],
		_rowH            = ['h0','h1','h2','h3','h4','h5','h6','h7','h8','h9','h10','h11','h12','h13','h14','h15'],
		_rowI            = ['i0','i1','i2','i3','i4','i5','i6','i7','i8','i9','i10','i11','i12','i13','i14','i15'],
		_rowJ            = ['j0','j1','j2','j3','j4','j5','j6','j7','j8','j9','j10','j11','j12','j13','j14','j15'],
		_rowK            = ['k0','k1','k2','k3','k4','k5','k6','k7','k8','k9','k10','k11','k12','k13','k14','k15'],
		_rowL            = ['l0','l1','l2','l3','l4','l5','l6','l7','l8','l9','l10','l11','l12','l13','l14','l15'],
		_rowAA           = ['aa0','aa1','aa2','aa3','aa4','aa5','aa6','aa7','aa8','aa9','aa10','aa11','aa12','aa13','aa14','aa15'],
		_rowBB           = ['bb0','bb1','bb2','bb3','bb4','bb5','bb6','bb7','bb8','bb9','bb10','bb11','bb12','bb13','bb14','bb15'], 
		_rowCC           = ['cc0','cc1','cc2','cc3','cc4','cc5','cc6','cc7','cc8','cc9','cc10','cc11','cc12','cc13','cc14','cc15'], 
		_rowDD           = ['dd0','dd1','dd2','dd3','dd4','dd5','dd6','dd7','dd8','dd9','dd10','dd11','dd12','dd13','dd14','dd15'], 
		_rowEE           = ['ee0','ee1','ee2','ee3','ee4','ee5','ee6','ee7','ee8','ee9','ee10','ee11','ee12','ee13','ee14','ee15'], 
		_rowFF           = ['ff0','ff1','ff2','ff3','ff4','ff5','ff6','ff7','ff8','ff9','ff10','ff11','ff12','ff13','ff14','ff15'], 
		_rowGG           = ['gg0','gg1','gg2','gg3','gg4','gg5','gg6','gg7','gg8','gg9','gg10','gg11','gg12','gg13','gg14','gg15'], 
		_rowHH           = ['hh0','hh1','hh2','hh3','hh4','hh5','hh6','hh7','hh8','hh9','hh10','hh11','hh12','hh13','hh14','hh15'], 
		_rowII           = ['ii0','ii1','ii2','ii3','ii4','ii5','ii6','ii7','ii8','ii9','ii10','ii11','ii12','ii13','ii14','ii15'], 
		_rowJJ           = ['jj0','jj1','jj2','jj3','jj4','jj5','jj6','jj7','jj8','jj9','jj10','jj11','jj12','jj13','jj14','jj15'], 
		_rowKK           = ['kk0','kk1','kk2','kk3','kk4','kk5','kk6','kk7','kk8','kk9','kk10','kk11','kk12','kk13','kk14','kk15'], 
		_rowLL           = ['ll0','ll1','ll2','ll3','ll4','ll5','ll6','ll7','ll8','ll9','ll10','ll11','ll12','ll13','ll14','ll15'], 
		_rowArray        = [_rowA,_rowB,_rowC,_rowD,_rowE,_rowF,_rowG,_rowH,_rowI,_rowJ,_rowK,_rowL,_rowAA,_rowBB,_rowCC,_rowDD,_rowEE,_rowFF,_rowGG,_rowHH,_rowII,_rowJJ,_rowKK,_rowLL],
		_dumpArray       = ['aaD','bbD','ccD','ddD','eeD','ffD','ggD','hhD'],
		_muteArray       = ['aaM','bbM','ccM','ddM','eeM','ffM','ggM','hhM']	


		_getButton = function(row,column){
			return document.getElementById(_rowArray[row][column]);
		},
		_getDumpButton = function(index){
			return document.getElementById(_dumpArray[index]);
		},
		_getTheMuteButton = function(index){
			return document.getElementById(_muteArray[index]);
		},
		_getRowLength = function(){
			return _rowA.length;	
		}
	return{
		getButton:_getButton,
		getDumpButton:_getDumpButton,
		getTheMuteButton:_getTheMuteButton,
		getRowLength:_getRowLength
		
	}	
}();
loaderBar = function(){
	var _loaderCount = 0,
		_progressBar = document.getElementById("progressBar");
		_progressContainer = document.getElementById("progressContainer");
		_incrCount = function(){
			_loaderCount++;
			_updateBar();	
			console.log(_loaderCount);
		},
		_updateBar = function(){
			_progressBar.style.width = ( _loaderCount / 85 ) * 100 + "%";
			if(_loaderCount === 85){
				$(_progressContainer).fadeOut(2000);
				//var t = setTimeout(_progressContainer.parentNode.removeChild(_progressContainer), 2000);
			}	
		}
	return{
		incrCount:_incrCount
	}	
}();