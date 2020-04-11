var context;
var mybuffers = [];

function initiate(){
  var button = document.getElementById("button");
  button.addEventListener("click",()=>{
    play();
  },false)

  var button2 = document.getElementById("button2");
  button2.addEventListener("click",()=>{
    play2();
  },false)

  context = new AudioContext();

  loadbuffers("./gunshot.m4a",0);
  loadbuffers("./garage.m4a",1);

  var control = function(){
    if(mybuffers.length >= 2){
      button.disabled = false;
    } else {
      setTimeout(control,200);
    }
  };
  control();
}

  function loadbuffers(url,id){
    var request = new XMLHttpRequest();
    request.responseType = "arraybuffer";
    request.addEventListener("load",()=>{
      if(request.status == 200){
        context.decodeAudioData(request.response,(buffer)=>{
          mybuffers[id] = buffer;
        });
      }
    });
    request.open("GET",url,true);
    request.send();
  }

function play(){
  var sourceNode = context.createBufferSource();
  sourceNode.buffer = mybuffer[0];

  var volumeNode = context.createGain();
  volumeNode.gain.value = 0.2;

  sourceNode.connect(volumeNode);
  volumeNode.connect(context.destination);
  sourceNode.start(0);
}

function play2(){
  var sourceNode = context.createBufferSource();
  sourceNode.buffer = mybuffer[0];

  var convolverNode = context.createConvolver();
  convolverNode.buffer = mybuffers[1]

  sourceNode.connect(convolverNode);
  convolverNode.connect(context.destination);
  sourceNode.start(0);
}


document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("init").addEventListener("click",initiate);
},false)
