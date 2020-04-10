var context;

function initiate(){
  var mybuffer;
  var button = document.getElementById("button");
  button.addEventListener("click",()=>{
    play(mybuffer);
  },false)

  context = new AudioContext();

  var url = "./gunshot.m4a";
  var request = new XMLHttpRequest();
  request.responseType = "arraybuffer";
  reqest.addEventListener("load",()=>{
    if(request.status == 200){
      context.decodeAudioData(request.response, (buffer)=>{
        mybuffer = buffer;
        button.disabled = false;
      });
    }
  },false);
  request.open("GET",url,true);
  request.send();
}

function play(mybuffer){
  var souceNode = context.createBufferSource();
  sourceNode.buffer = mybuffer;
  sourceNode.connect(context.destination);
  sourceNode.start(0);
}

window.getElementById("init").addEventListener("click",initiate);
