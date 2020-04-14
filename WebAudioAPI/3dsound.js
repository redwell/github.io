var context,pannerNode,renderer,scene,camera,mesh;

function initiate(){
  var canvas = document.getElementById("canvas");
  var width = canvas.width;
  var height = canvas.height;
  renderer = new THREE.WebGLRenderer({canvas:canvas});
  renderer.setClearColor(0xFFFFFF);
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45,width/height,0.1,10000);
  camera.position.set(0,0,150);

  var geometry = new THREE.BoxGeometry(50,50,50);
  var material = new THREE.MeshPhongMaterial({color:0xCCCCFF});
  mesh = new THREE.Mesh(geometry,material);
  mesh.rotation.y = 0.5;
  mesh.rotation.x = 0.5;
  scene.add(mesh);
  var light = new THREE.SpotLight(0xFFFFFF,1);
  light.position.set(0,100,250);
  scene.add(light);

  context = new AudioContext();
  context.listener.setPosition(0,0,150);

  var url = "engine.m4a";
  var request = new XMLHttpRequest();
  request.responseType = "arraybuffer";
  request.addEventListener("load",()=>{
    if(request.status == 200){
      context.decodeAudioData(request.response,function(buffer){
        play(buffer);
        canvas.addEventListener("mousewheel",move,false);
        renderer.render(scene,camera);
      });
    }
  });
  request.open("GET",url,true);
  request.send();
}

function play(mybuffer){
  var sourceNode = context.createBufferSource();
  sourceNode.buffer = mybuffer;
  sourceNode.loop = true;
  pannerNode = context.createPanner();
  pannerNode.refDistance = 100;
  sourceNode.connect(pannerNode);
  pannerNode.connect(context.destination);
  sourceNode.start(0);
}

function move(event){
  mesh.position.z += event.wheelDeltaY/5;
  pannerNode.setPosition(mesh.position.x,mesh.position.y,mesh.position.z);
  renderer.render(scene,camera);
}

document.addEventListener("DOMContetnLoaded",()=>{
  document.getElementById("button").addEventListener("click",initiate);
},)
