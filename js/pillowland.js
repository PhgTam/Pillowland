"use strict";

const ARTWORK = {
  "background": "./images/background.PNG",
  "blanket-1-color-1": "./images/blanket-1-color-1.PNG",
  "blanket-1-color-2": "./images/blanket-1-color-2.PNG",
  "blanket-2-color-1": "./images/blanket-2-color-1.PNG",
  "blanket-2-color-2": "./images/blanket-2-color-2.PNG",
  "bunny": "./images/bunny.PNG",
  "decoration": "./images/decoration.PNG",
  "fox": "./images/fox.PNG",
  "main-character": "./images/main-character.PNG",
  "pillow-1": "./images/pillow-1.PNG",
  "pillow-2": "./images/pillow-2.PNG",
  "pillow-3": "./images/pillow-3.PNG",
  "tiger": "./images/tiger.PNG"
};
const SOUNDS = {
  "ambient": "./audio/ambient.mp3",
  "click": "./audio/mouse-click.mp3"
};
/* Interface copy. Each pair is English, then Vietnamese. */
const COPY={
  club:["The Bedroom Club","Câu lạc bộ phòng ngủ"],
  title:["Pillowland","Xứ Sở Gối"],
  byline:["By: Le Hong Phuong Tam","Tác giả: Le Hong Phuong Tam"],
  room:["Illustrated Pillowland bedroom","Phòng ngủ minh họa của Xứ Sở Gối"],
  controls:["Game controls","Điều khiển trò chơi"],
  language:["Language","Ngôn ngữ"],
  soundOn:["Sound on","Bật âm thanh"],
  soundOff:["Sound off","Tắt âm thanh"],
  how:["How to play","Cách chơi"],
  left:["Move Left","Sang trái"],
  right:["Move Right","Sang phải"],
  click:["Click","Nhấp chuột"],
  hit:["Hit Incoming Pillow","Đánh trả gối đang bay"],
  cameraMove:["Move your hand left or right to move your character.","Di chuyển tay sang trái hoặc phải để điều khiển nhân vật."],
  cameraHit:["Aim the dot at a flying pillow. Pinch thumb and index finger, then release.","Đưa chấm tròn lên gối đang bay. Chụm ngón cái và ngón trỏ, rồi thả ra."],
  cameraInit:["Initializing camera and hand tracking…","Đang khởi tạo camera và nhận diện tay…"],
  cameraAllow:["Please allow camera access","Vui lòng cho phép truy cập camera"],
  cameraReady:["Camera ready","Camera đã sẵn sàng"],
  cameraHard:["Camera Mode – Hard","Chế độ camera – Khó"],
  cameraHardCopy:["Play with your hands! A little more challenging, but twice the fun.","Điều khiển trò chơi bằng đôi tay của bạn! Thử thách hơn một chút, nhưng cũng vui hơn nhiều."],
  pinchOpen:["Open","Mở tay"],
  pinchClose:["Bring together","Đưa ngón tay lại gần"],
  pinchTouch:["Pinch","Chụm ngón tay"],
  pinchGuide:["Bring your thumb and index finger together to pinch and hit an incoming pillow.","Chụm ngón cái và ngón trỏ lại để thực hiện động tác pinch và đánh chiếc gối đang bay tới."],
  pinchDetected:["Pinch detected!","Đã nhận diện động tác chụm!"],
  cameraDetected:["Hand detected","Đã nhận diện tay"],
  cameraLost:["No hand detected","Chưa nhận diện được tay"],
  cameraDenied:["Camera access denied","Quyền truy cập camera bị từ chối"],
  cameraUnavailable:["Camera not available","Không tìm thấy camera khả dụng"],
  cameraSecure:["Open the game over HTTPS or localhost to use your camera.","Hãy mở trò chơi qua HTTPS hoặc localhost để dùng camera."],
  cameraError:["Hand tracking could not start. Try again or choose mouse and keyboard.","Không thể khởi động nhận diện tay. Hãy thử lại hoặc chọn chuột và bàn phím."],
  cameraStart:["Start camera battle","Bắt đầu trận đấu bằng camera"],
  cameraBack:["Back to controls","Về phần điều khiển"],
  cameraSetup:["Set up your camera","Thiết lập camera"],
  cameraSetupCopy:["Practice with one hand in view, or start when ready.","Tập với một bàn tay trong khung hình hoặc bắt đầu khi đã sẵn sàng."],
  cameraExit:["Leave camera mode","Thoát chế độ camera"],
  mallow:["Mallow","Bông"],
  fig:["Fig","Sung"],
  taffy:["Taffy","Kẹo"],
  bunny:["Mallow the Bunny","Thỏ Bông"],
  fox:["Fig the Fox","Cáo Sung"],
  tiger:["Taffy the Tiger","Hổ Kẹo"],
  bunnyLine:["My ears are ready for a pillow breeze!","Đôi tai mình đã sẵn sàng đón cơn gió gối rồi!"],
  foxLine:["Let's see how high these pillows can fly!","Cùng xem những chiếc gối này bay cao tới đâu nhé!"],
  tigerLine:["I brought my softest battle paws!","Mình đã mang đôi chân mềm nhất ra đấu rồi đây!"],
  heart:["Heart Pillow","Gối Trái Tim"],
  star:["Star Pillow","Gối Ngôi Sao"],
  cloud:["Cloud Pillow","Gối Đám Mây"],
  invitation:["01 · The invitation","01 · Lời mời"],
  rustle:["A rustle on the rug","Tiếng sột soạt trên tấm thảm"],
  introCopy:["Mallow, Fig and Taffy tumble out of the blankets. “We’ve made a pillow fort,” whispers Mallow. “Will you have a pillow fight with us?”","Thỏ Bông, Cáo Sung và Hổ Kẹo lăn ra khỏi chăn. Bông thì thầm: “Bọn mình vừa dựng một pháo đài chăn. Bạn chơi ném gối cùng bọn mình nhé?”"],
  accept:["Yes, let’s play!","Ừ, chơi thôi!"],
  decline:["Maybe later","Để sau nhé"],
  quiet:["A quiet afternoon","Một buổi chiều yên ả"],
  quietCopy:["Your plush friends curl up on the rug. They’ll be here whenever you’re ready.","Các bạn thú bông cuộn mình trên thảm. Khi nào bạn sẵn sàng, các bạn ấy vẫn ở đây."],
  backInvite:["Back to the invitation","Quay lại lời mời"],
  pick:["02 · Pick a plush","02 · Chọn bạn thú bông"],
  who:["Who will you play with?","Bạn muốn chơi cùng ai?"],
  pickCopy:["Choose a friend from left to right.","Chọn một người bạn theo thứ tự từ trái sang phải."],
  fort:["03 · The blanket fort","03 · Pháo đài chăn"],
  cozy:["Make it cozy","Trang trí thật ấm cúng"],
  says:["{name} says, “{line}”","{name} nói: “{line}”"],
  shape:["Shape","Kiểu lều"],
  tall:["Tall tent","Lều cao"],
  low:["Low canopy","Lều thấp"],
  color:["Color","Màu sắc"],
  sage:["Sage","Xanh lá nhạt"],
  rose:["Rose","Hồng phấn"],
  ready:["Ready →","Sẵn sàng →"],
  mode:["04 · Controls","04 · Điều khiển"],
  chooseMode:["Choose how to play","Chọn cách chơi"],
  modeCopy:["Hold A or D to dodge. Click flying pillows to send them back. Land five hits before time runs out.","Giữ A hoặc D để né. Nhấp vào gối đang bay để đánh trả. Đánh trúng năm lần trước khi hết giờ."],
  mouse:["Mouse & Keyboard Mode","Chế độ chuột và bàn phím"],
  camera:["Camera Mode","Chế độ camera"],
  backFort:["Back to the fort","Về pháo đài"],
  battle:["05 · Pillow battle","05 · Trận ném gối"],
  over:["Over the blanket!","Gối bay qua chăn!"],
  getReady:["Get ready!","Chuẩn bị nào!"],
  direct:["Direct hit! +100","Đánh trúng! +100"],
  wrong:["Wrong target! −100","Sai mục tiêu! −100"],
  bonk:["Bonk! −50","Bị gối đập! −50"],
  dodge:["Lovely dodge! +50","Né đẹp lắm! +50"],
  incomingLeft:["Incoming left!","Gối bay tới bên trái!"],
  incomingRight:["Incoming right!","Gối bay tới bên phải!"],
  clock:["{time}s","{time} giây"],
  score:["Score {score}","Điểm {score}"],
  lives:["Lives {count}","Mạng {count}"],
  health:["{name} {count}","{name} {count}"],
  end:["06 · The end","06 · Kết thúc"],
  win:["You won the pillow fight!","Bạn thắng trận ném gối rồi!"],
  loss:["A soft landing","Hạ cánh êm ái"],
  retryCopy:["“That was fun,” says {name}. “Want another round?”","{name} nói: “Vui quá! Chơi thêm một lượt nhé?”"],
  parcel:["{name} slides a little parcel across the rug.","{name} đẩy một gói quà nhỏ qua tấm thảm."],
  unlocked:["You unlocked the {pillow}! It will fly in future rounds.","Bạn đã mở khóa {pillow}! Chiếc gối này sẽ xuất hiện ở các lượt sau."],
  storage:["This browser can keep it for this visit only.","Trình duyệt chỉ lưu phần thưởng trong lần chơi này."],
  collected:["You’ve collected every pillow. Your friends cheer from the rug!","Bạn đã sưu tập đủ gối. Các bạn thú bông reo hò trên thảm!"],
  open:["Open your gift","Mở quà"],
  again:["Play again","Chơi lại"],
  retry:["Retry with {name}","Thử lại với {name}"],
  meet:["Meet the friends again","Gặp lại các bạn"],
  loadError:["The bedroom artwork could not load. Open a complete copy of index.html and reload.","Không tải được hình phòng ngủ. Hãy mở bản index.html đầy đủ rồi tải lại."]
};
let language=0;
const text=(key,values={})=>COPY[key][language].replace(/\{(\w+)\}/g,(_,name)=>values[name]);
const friendName=friend=>text(friend.name);
/* 2. Artwork. Source rectangles are percentages of the original PNG.
   Drawing only a rectangle hides the design-sheet captions without editing the files. */
const W = 960, H = 540;
const canvas = document.querySelector("#room");
const ctx = canvas.getContext("2d");
const panel = document.querySelector("#panel");
const hud = document.querySelector("#hud");
const hudFields = ["clock","score","lives","opponent"].map(id => document.getElementById(id));
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const sprite = (file, crop = [0,0,1,1]) => ({file, crop});
const room = sprite("background");
const player = sprite("main-character",[.224,.18,.565,.76]);
const confetti = sprite("decoration",[.225,.30,.53,.475]);
const friends = [
  {name:"mallow", label:"bunny", color:"soft", art:sprite("bunny",[.065,.127,.245,.72]), line:"bunnyLine"},
  {name:"fig", label:"fox", color:"sage", art:sprite("fox",[.365,.158,.27,.66]), line:"foxLine"},
  {name:"taffy", label:"tiger", color:"blue", art:sprite("tiger",[.642,.157,.346,.75]), line:"tigerLine"}
];
const forts = [1,2].map(shape => [1,2].map(color =>
  sprite("blanket-"+shape+"-color-"+color, shape===1 ? [.146,.235,.802,.69] : [.12,.365,.80,.534])));
const pillows = [
  {name:"heart",art:sprite("pillow-1",[.224,.222,.50,.437])},
  {name:"star",art:sprite("pillow-2",[.278,.258,.488,.527])},
  {name:"cloud",art:sprite("pillow-3",[.224,.152,.545,.55])}
];
const images = {};
function spriteBox(art,x,y,maxWidth,maxHeight){
  const image=images[art.file];
  const [left,top,width,height]=art.crop;
  const sw=width*image.width, sh=height*image.height;
  const scale=Math.min(maxWidth/sw,maxHeight/sh);
  const w=sw*scale,h=sh*scale;
  return {image,sx:left*image.width,sy:top*image.height,sw,sh,x:x-w/2,y:y-h,w,h};
}
function drawBox(box,outline=false){
  const {image,sx,sy,sw,sh,x,y,w,h}=box;
  if(outline) ctx.filter="drop-shadow(2px 0 white) drop-shadow(-2px 0 white) drop-shadow(0 2px white) drop-shadow(0 -2px white)";
  ctx.drawImage(image,sx,sy,sw,sh,x,y,w,h);
  ctx.filter="none";
}
function draw(art,x,y,w,h,outline=false){drawBox(spriteBox(art,x,y,w,h),outline);}

/* 3. Rewards. Star and Cloud join the projectile rotation after they are won. */
const RewardSystem = {
  key:"pillowland-unlocks-v1",
  read(){
    try {
      const saved=JSON.parse(localStorage.getItem(this.key));
      return new Set(Array.isArray(saved)?saved.filter(id=>id===1||id===2):[]);
    } catch { return new Set(); }
  },
  unlock(){
    const remaining=[1,2].filter(id=>!unlocks.has(id));
    if(!remaining.length) return null;
    const id=remaining[Math.floor(Math.random()*remaining.length)];
    unlocks.add(id);
    try {localStorage.setItem(this.key,JSON.stringify([...unlocks]));}
    catch { storageUnavailable=true; }
    return id;
  }
};
const unlocks=RewardSystem.read();
let storageUnavailable=false;

/* Sound starts after the first interaction to respect browser autoplay rules. */
const soundButton=document.querySelector("#sound");
function updateSoundLabel(){
  soundButton.textContent=text(soundButton.getAttribute("aria-pressed")==="true"?"soundOff":"soundOn");
}
let playCameraHit=()=>{};
function setupSound(){
  const ambient=new Audio(SOUNDS.ambient);
  const click=new Audio(SOUNDS.click);
  ambient.loop=true;
  ambient.volume=.28;
  click.volume=.55;
  let muted=false;
  function playClick(){
    click.currentTime=0;
    click.play().catch(()=>{});
  }
  playCameraHit=()=>{if(!muted) playClick();};
  document.addEventListener("click",event=>{
    if(event.target===soundButton){
      muted=!muted;
      soundButton.setAttribute("aria-pressed",muted);
      updateSoundLabel();
      if(muted){ambient.pause();click.pause();}
    }
    if(muted) return;
    if(ambient.paused) ambient.play().catch(()=>{});
    if(event.target.closest("button")||event.target===canvas) playClick();
  });
}

/* 4. Battle rules. Controllers send move or strike actions in room coordinates.
   The same simulation handles trajectory, collision, scoring and the result. */
const RULES={duration:30,playerLives:4,opponentLives:5,cooldown:.24,returnTime:.44};
const FLIGHT_PROFILES=[
  {seconds:1.70,arc:218,curve:35,rotation:.20,wobble:0,gap:[.44,.69]}, // Heart: high arc
  {seconds:1.37,arc:128,curve:18,rotation:.15,wobble:0,gap:[.45,.68]}, // Star: quick toss
  {seconds:1.88,arc:167,curve:29,rotation:.24,wobble:23,gap:[.36,.59]} // Cloud: wobbly toss
];
const SPAWN_ZONES=[{x:[666,698],y:[294,314]},{x:[704,743],y:[285,307]}];
function range(random,min,max){return min+(max-min)*random();}
function throwPillow(id,time,target,random){
  const profile=FLIGHT_PROFILES[id];
  const progress=clamp(time/RULES.duration,0,1);
  const zone=SPAWN_ZONES[Math.floor(random()*SPAWN_ZONES.length)];
  return {
    id,start:time,target,
    duration:profile.seconds*range(random,.95,1.06)*(1.12-.20*progress),
    gap:range(random,...profile.gap),
    x:range(random,...zone.x),y:range(random,...zone.y),
    endX:target+range(random,-22,22),
    arc:profile.arc*range(random,.91,1.09),
    curve:profile.curve*range(random,-1,1),
    spin:profile.rotation*range(random,.55,1.35)*(random()<.5?-1:1),
    wobble:profile.wobble*range(random,.50,1.20)*(.55+.45*progress),
    phase:range(random,0,2*Math.PI)
  };
}
function flightPosition(shot,time){
  const t=clamp((time-shot.start)/shot.duration,0,1);
  // A small ease at each end keeps the toss soft without a midair stall.
  const eased=.76*t+.24*t*t*(3-2*t);
  const arch=4*t*(1-t);
  const wave=Math.sin(t*4*Math.PI+shot.phase)*arch;
  const launch=Math.sin(Math.PI*clamp(t/.18,0,1))*.09;
  return {
    x:shot.x+(shot.endX-shot.x)*eased+arch*shot.curve+wave*shot.wobble,
    y:shot.y+(450-shot.y)*t-shot.arc*arch+wave*shot.wobble*.22,
    size:60+66*eased,
    angle:reducedMotion?0:shot.spin*(2*t-.55)+wave*shot.wobble*.003,
    stretch:reducedMotion?1:1+launch
  };
}
const LANES=[180,360];
const MOVEMENT={speed:235,acceleration:1100,braking:1550};
const laneAt=x=>x<(LANES[0]+LANES[1])/2?LANES[0]:LANES[1];
const clamp=(value,min,max)=>Math.max(min,Math.min(value,max));
function createBattle(pillowIds, random=Math.random){
  const state={time:0,score:0,lives:RULES.playerLives,health:RULES.opponentLives,
    x:LANES[0], nextThrow:.8, nextStrike:0, shot:null, returns:[], bursts:[], feedback:"getReady", result:null};
  function position(shot){
    return flightPosition(shot,state.time);
  }
  function send(action){
    if(state.result) return;
    if(action.type==="move"){
      if(Number.isFinite(action.x)) state.x=clamp(action.x,LANES[0],LANES[1]);
      return;
    }
    if(action.type!=="strike"||state.time<state.nextStrike) return;
    state.nextStrike=state.time+RULES.cooldown;
    const shot=state.shot;
    if(shot&&action.collides(position(shot),shot.id)){
      const point=position(shot);
      state.shot=null;
      state.returns.push({point,id:shot.id,start:state.time});
      if(!reducedMotion) state.bursts.push({point,start:state.time});
      state.score+=100;
      state.feedback="direct";
    } else {
      state.score-=100;
      state.feedback="wrong";
    }
  }
  function update(delta){
    if(state.result) return;
    state.time=Math.min(RULES.duration,state.time+delta);
    state.bursts=state.bursts.filter(burst=>state.time-burst.start<.48);
    // Returned pillows deal damage only when their return flight finishes.
    state.returns=state.returns.filter(shot=>{
      if(state.time-shot.start<RULES.returnTime) return true;
      state.health--;
      return false;
    });
    if(state.health<=0){state.result="win";return;}
    if(state.shot&&state.time-state.shot.start>=state.shot.duration){
      if(state.shot.target===laneAt(state.x)){
        state.lives--;state.score-=50;state.feedback="bonk";
      }else{
        state.score+=50;state.feedback="dodge";
      }
      state.shot=null;
    }
    if(state.lives<=0||state.time>=RULES.duration){state.result="loss";return;}
    if(!state.shot&&state.time>=state.nextThrow){
      const id=pillowIds[Math.floor(random()*pillowIds.length)];
      // Keep the two original attack lanes for dodge scoring and trajectories.
      const lane=laneAt(state.x);
      state.shot=throwPillow(id,state.time,lane,random);
      state.nextThrow=state.time+state.shot.duration+state.shot.gap;
      state.feedback=lane===LANES[0]?"incomingLeft":"incomingRight";
    }
  }
  return {state,send,update,position};
}

/* 5. Input adapters. A camera adapter can later send the same two actions.
   The strike action carries a point. The battle bridge checks artwork alpha. */
const hitCanvas=document.createElement("canvas");
hitCanvas.width=hitCanvas.height=1;
const hitCtx=hitCanvas.getContext("2d",{willReadFrequently:true});
function projectileBox(point,id){
  const box=spriteBox(pillows[id].art,0,0,point.size,point.size);
  box.y=-box.h/2;
  return box;
}
function drawProjectile(point,id){
  ctx.save();
  ctx.translate(point.x,point.y);
  ctx.rotate(point.angle);
  ctx.scale(point.stretch,1/point.stretch);
  drawBox(projectileBox(point,id),true);
  ctx.restore();
}
function hitPillow(point,id,x,y){
  // Undo the same translate, rotation and stretch used by the renderer.
  const box=projectileBox(point,id);
  const dx=x-point.x,dy=y-point.y;
  const cos=Math.cos(point.angle),sin=Math.sin(point.angle);
  const localX=(dx*cos+dy*sin)/point.stretch;
  const localY=(-dx*sin+dy*cos)*point.stretch;
  const u=(localX-box.x)/box.w,v=(localY-box.y)/box.h;
  if(u<0||v<0||u>=1||v>=1) return false;
  hitCtx.clearRect(0,0,1,1);
  hitCtx.drawImage(box.image,Math.floor(box.sx+u*box.sw),Math.floor(box.sy+v*box.sh),1,1,0,0,1,1);
  return hitCtx.getImageData(0,0,1,1).data[3]>=64;
}
const MouseController={
  connect(send,initialX){
    const abort=new AbortController();
    const options={signal:abort.signal};
    canvas.addEventListener("pointerdown",event=>{
      if(event.button!==0||!event.isPrimary) return;
      const rect=canvas.getBoundingClientRect();
      send({type:"strike",x:(event.clientX-rect.left)*W/rect.width,y:(event.clientY-rect.top)*H/rect.height});
    },options);
    const held=new Set();
    let x=initialX,velocity=0;
    const typing=target=>target instanceof Element&&
      (target.isContentEditable||target.closest("input,textarea,select,[role='textbox']"));
    function stop(){
      held.clear();
      velocity=0;
    }
    window.addEventListener("keydown",event=>{
      const key=event.key.toLowerCase();
      if(!["a","d"].includes(key)||typing(event.target)||event.isComposing||
          event.ctrlKey||event.metaKey||event.altKey) return;
      event.preventDefault();
      if(!event.repeat) held.add(key);
    },options);
    window.addEventListener("keyup",event=>{
      const key=event.key.toLowerCase();
      if(!held.delete(key)) return;
      if(!typing(event.target)) event.preventDefault();
      // Release stops travel immediately. A remaining held key ramps up again.
      if((key==="a"&&velocity<0)||(key==="d"&&velocity>0)||!held.size) velocity=0;
    },options);
    window.addEventListener("blur",stop,options);
    document.addEventListener("visibilitychange",stop,options);
    document.addEventListener("focusin",event=>{if(typing(event.target)) stop();},options);
    return {
      step(delta){
        const direction=Number(held.has("d"))-Number(held.has("a"));
        if(!direction){velocity=0;return;}
        const distance=direction<0?x-LANES[0]:LANES[1]-x;
        // Ease toward the room boundary and brake smoothly when reversing.
        const desired=direction*Math.min(MOVEMENT.speed,Math.sqrt(2*MOVEMENT.braking*distance));
        const rate=Math.sign(velocity)!==direction&&velocity!==0||Math.abs(desired)<Math.abs(velocity)
          ?MOVEMENT.braking:MOVEMENT.acceleration;
        velocity+=clamp(desired-velocity,-rate*delta,rate*delta);
        x=clamp(x+velocity*delta,LANES[0],LANES[1]);
        if((x===LANES[0]&&velocity<0)||(x===LANES[1]&&velocity>0)) velocity=0;
        send({type:"move",x});
      },
      disconnect(){stop();abort.abort();}
    };
  }
};
/* MediaPipe and the FP16 hand model run locally and load only for Camera Mode. */
async function createCameraLandmarker(signal){
  const root=new URL("./mediapipe/",document.baseURI);
  const {FilesetResolver,HandLandmarker}=await import(new URL("js/vision_bundle.mjs",root).href);
  const vision=await FilesetResolver.forVisionTasks(new URL("wasm/",root).href.replace(/\/$/,""));
  const modelAssetPath=new URL("models/hand_landmarker.task",root).href;
  const create=delegate=>HandLandmarker.createFromOptions(vision,{
    baseOptions:{modelAssetPath,delegate},runningMode:"VIDEO",numHands:1
  });
  signal.throwIfAborted();
  try{return await create("GPU");}
  catch(error){signal.throwIfAborted();return await create("CPU");}
}
const cameraPanel=document.querySelector("#camera-preview");
const cameraVideo=document.querySelector("#camera-video");
const cameraStatus=document.querySelector("#camera-status");
const cameraDot=document.querySelector("#camera-dot");
const CAMERA_INPUT={
  samplesPerSecond:30, palmInset:.23, aimInset:.12, movementDeadZone:2,
  movementResponse:17, movementSpeedLimit:670, aimResponse:24,
  pinchOn:.43, pinchOff:.57, releaseFrames:2, trackingGraceMs:115,
  strikeCooldownMs:265, hitMarginRatio:.14, hitMarginMin:10, hitMarginMax:18,
  hitLookbackSeconds:.065
};
function cameraRange(value,inset){return clamp((value-inset)/(1-2*inset),0,1);}
function handSample(hand,world,aspect){
  const [wrist,thumb,index,middle]=[hand[0],hand[4],hand[8],hand[9]];
  const distance=(a,b)=>Math.hypot((a.x-b.x)*aspect,a.y-b.y);
  let pinch=distance(thumb,index)/Math.max(.015,distance(wrist,middle),distance(hand[5],hand[17]));
  // World landmarks give a second, rotation-tolerant estimate for tilted hands.
  if(world?.length===21){
    const length=(a,b)=>Math.hypot(world[a].x-world[b].x,world[a].y-world[b].y,world[a].z-world[b].z);
    const scale=Math.max(length(0,9),length(5,17));
    if(scale>.01) pinch=.7*pinch+.3*length(4,8)/scale;
  }
  return {
    palmX:1-(wrist.x+hand[5].x+middle.x+hand[17].x)/4,
    x:clamp(1-(thumb.x+index.x)/2,0,1),
    y:clamp((thumb.y+index.y)/2,0,1),
    pinch
  };
}
function createPinchLatch(){
  let openFrames=0,armed=false,closed=false;
  return {
    get closed(){return closed;},
    reset(){openFrames=0;armed=false;closed=false;},
    update(ratio){
      if(ratio>=CAMERA_INPUT.pinchOff){
        if(++openFrames>=CAMERA_INPUT.releaseFrames){armed=true;closed=false;}
      }else{
        openFrames=0;
        if(ratio<=CAMERA_INPUT.pinchOn&&armed){
          armed=false;
          closed=true;
          return true;
        }
      }
      return false;
    }
  };
}
function cameraHitNear(point,id,x,y){
  const margin=clamp(point.size*CAMERA_INPUT.hitMarginRatio,CAMERA_INPUT.hitMarginMin,CAMERA_INPUT.hitMarginMax);
  const box=projectileBox(point,id);
  const cos=Math.abs(Math.cos(point.angle)),sin=Math.abs(Math.sin(point.angle));
  const halfWidth=box.w*point.stretch/2,halfHeight=box.h/point.stretch/2;
  if(Math.abs(x-point.x)>cos*halfWidth+sin*halfHeight+margin||
     Math.abs(y-point.y)>sin*halfWidth+cos*halfHeight+margin) return false;
  if(hitPillow(point,id,x,y)) return true;
  // Sample a small disk around the pinch against the same transformed sprite mask.
  for(const radius of [margin*.5,margin]){
    for(let i=0;i<12;i++){
      const angle=i*Math.PI/6;
      if(hitPillow(point,id,x+Math.cos(angle)*radius,y+Math.sin(angle)*radius)) return true;
    }
  }
  return false;
}
let cameraRequest, cameraSession;

function renderCameraStatus(){
  const tracked=cameraSession?.status==="cameraDetected";
  const pinched=tracked&&cameraSession.pinched;
  const label=cameraSession?text(pinched?"pinchDetected":cameraSession.status):"";
  if(cameraStatus.textContent!==label) cameraStatus.textContent=label;
  cameraStatus.dataset.tracking=String(tracked);
  cameraDot.dataset.pinched=String(pinched);
}

const CameraController={
  connect(onStatus){
    const lifetime=new AbortController();
    const {signal}=lifetime;
    let stream, landmarker, lastVideoTime=-1, lastSample=-Infinity;
    let pointer=null, target=null, playerX=LANES[0];
    let lastStrike=-Infinity,lastHand=-Infinity;
    const gesture=createPinchLatch();
    const session={status:"cameraInit",ready:false,step,disconnect,
      get pointer(){return pointer;},get pinched(){return gesture.closed;}
    };
    function loseHand(now){
      target=null;
      cameraDot.hidden=true;
      if(now-lastHand>CAMERA_INPUT.trackingGraceMs){
        pointer=null;
        gesture.reset();
        status("cameraLost");
      }
    }
    function status(key){
      if(session.status===key) return;
      session.status=key;
      onStatus();
    }
    function disconnect(){
      lifetime.abort();
      if(cameraVideo.srcObject===stream&&stream) cameraVideo.srcObject=null;
      stream?.getTracks().forEach(track=>track.stop());
      landmarker?.close();
      landmarker=null;
      session.ready=false;
      cameraDot.hidden=true;
      pointer=null;
      target=null;
    }
    function fail(key){
      disconnect();
      status(key);
    }
    async function initialize(){
      if(!window.isSecureContext) return fail("cameraSecure");
      if(!navigator.mediaDevices?.getUserMedia) return fail("cameraUnavailable");
      status("cameraAllow");
      try{
        // Wait for any dismissed setup's permission prompt to finish first.
        while(cameraRequest) await cameraRequest.catch(()=>{});
        if(signal.aborted) return;
        const request=navigator.mediaDevices.getUserMedia({
          audio:false,video:{facingMode:"user",width:{ideal:640},height:{ideal:480}}
        });
        cameraRequest=request;
        try{stream=await request;}
        finally{if(cameraRequest===request) cameraRequest=null;}
        if(signal.aborted){stream.getTracks().forEach(track=>track.stop());return;}
        stream.getVideoTracks().forEach(track=>track.addEventListener("ended",
          ()=>fail("cameraUnavailable"),{signal}));
        cameraVideo.srcObject=stream;
        await cameraVideo.play();
      }catch(error){
        if(!signal.aborted) fail(["NotAllowedError","SecurityError"].includes(error.name)?"cameraDenied":"cameraUnavailable");
        return;
      }
      if(signal.aborted) return;
      status("cameraInit");
      try{
        const model=await createCameraLandmarker(signal);
        if(signal.aborted){model.close();return;}
        landmarker=model;
        session.ready=true;
        status("cameraReady");
      }catch(error){
        if(!signal.aborted){console.warn("Pillowland camera tracking",error);fail("cameraError");}
      }
    }
    function step(delta,now){
      if(!session.ready) return;
      // Sample fresh camera frames without making inference run on every game frame.
      if(now-lastSample>=1000/CAMERA_INPUT.samplesPerSecond-.8&&cameraVideo.readyState>=2&&cameraVideo.currentTime!==lastVideoTime){
        const sampleDelta=Math.min(.1,(now-lastSample)/1000);
        lastSample=now;
        lastVideoTime=cameraVideo.currentTime;
        let result;
        try{result=landmarker.detectForVideo(cameraVideo,now);}
        catch(error){console.warn("Pillowland camera tracking",error);fail("cameraError");return;}
        const hand=result.landmarks[0];
        if(hand){
          lastHand=now;
          const aspect=cameraVideo.videoWidth/cameraVideo.videoHeight;
          const sample=handSample(hand,result.worldLandmarks?.[0],aspect);
          const travel=cameraRange(sample.palmX,CAMERA_INPUT.palmInset);
          const desired=LANES[0]+travel*(LANES[1]-LANES[0]);
          if(target===null||travel===0||travel===1||Math.abs(desired-target)>=CAMERA_INPUT.movementDeadZone) target=desired;
          const raw={x:cameraRange(sample.x,CAMERA_INPUT.aimInset)*W,y:cameraRange(sample.y,CAMERA_INPUT.aimInset)*H};
          const smoothing=1-Math.exp(-sampleDelta*CAMERA_INPUT.aimResponse);
          pointer=pointer?{x:pointer.x+(raw.x-pointer.x)*smoothing,y:pointer.y+(raw.y-pointer.y)*smoothing}:raw;
          cameraDot.parentElement.style.setProperty("--camera-aspect",aspect);
          cameraDot.style.left=sample.x*100+"%";
          cameraDot.style.top=sample.y*100+"%";
          cameraDot.hidden=false;
          const strike=gesture.update(sample.pinch);
          status("cameraDetected");
          renderCameraStatus();
          if(strike&&phase==="battle"&&now-lastStrike>=CAMERA_INPUT.strikeCooldownMs){
            lastStrike=now;
            dispatch({type:"strike",...raw,cameraAim:pointer});
          }
        }else loseHand(now);
      }
      if(now-lastSample>CAMERA_INPUT.trackingGraceMs) loseHand(now);
      if(phase==="battle"&&target!==null){
        const maxStep=CAMERA_INPUT.movementSpeedLimit*delta;
        const movement=(target-playerX)*(1-Math.exp(-delta*CAMERA_INPUT.movementResponse));
        playerX+=clamp(movement,-maxStep,maxStep);
        if(Math.abs(target-playerX)<.35) playerX=target;
        dispatch({type:"move",x:playerX});
      }
    }
    // Defer status callbacks until the caller has assigned the session.
    queueMicrotask(()=>{if(!signal.aborted) initialize();});
    return session;
  }
};
function selectCamera(){
  controlMode="camera";
  show("cameraSetup");
  cameraSession=CameraController.connect(()=>{
    renderCameraStatus();
    if(phase==="cameraSetup"){
      const start=document.querySelector("#camera-start");
      if(start) start.disabled=!cameraSession.ready;
    }
  });
  renderCameraStatus();
}
function stopCamera(){
  cameraSession?.disconnect();
  cameraSession=null;
  cameraPanel.hidden=true;
}
window.addEventListener("pagehide",()=>{
  if(cameraSession) show("mode");
});
function dispatch(action){
  if(phase!=="battle") return;
  if(action.type==="strike"){
    if(!action.cameraAim){
      battle.send({...action,collides:(point,id)=>hitPillow(point,id,action.x,action.y)});
      return;
    }
    const {state}=battle;
    const shot=state.shot;
    const score=state.score;
    battle.send({...action,collides:(point,id)=>{
      const aim=action.cameraAim;
      const closeAim=Math.hypot(aim.x-action.x,aim.y-action.y)<=CAMERA_INPUT.hitMarginMax*2;
      const current=pose=>cameraHitNear(pose,id,action.x,action.y)||(closeAim&&cameraHitNear(pose,id,aim.x,aim.y));
      // Check the same active pillow at the current and immediately preceding positions.
      return current(point)||[.5,1].some(fraction=>{
        const earlier=Math.max(shot.start,state.time-CAMERA_INPUT.hitLookbackSeconds*fraction);
        return earlier<state.time&&current(flightPosition(shot,earlier));
      });
    }});
    if(state.score>score) playCameraHit();
  }else battle.send(action);
}

/* 6. Story phases. Only the controls change. The bedroom canvas stays mounted. */
let phase="intro", chosen=0, shape=0, color=0, battle, controller, pendingGift=false, gift=null;
function button(label,click,{tone="",pressed,disabled=false}={}){
  const element=document.createElement("button");
  element.type="button";
  element.textContent=label;
  element.className=tone;
  element.disabled=disabled;
  if(pressed!==undefined) element.setAttribute("aria-pressed",pressed);
  element.addEventListener("click",click);
  return element;
}
let focusStage=true;
function page(chapter,title,description,...controls){
  panel.innerHTML='<div class="chapter"></div><h2 tabindex="-1"></h2><p></p><div class="actions"></div>';
  const [tag,heading,copy,actions]=panel.children;
  tag.textContent=chapter;heading.textContent=title;copy.textContent=description;actions.append(...controls);
  if(focusStage) heading.focus({preventScroll:true});
}
function group(label,...controls){
  const element=document.createElement("div");
  element.className="group";
  element.setAttribute("role","group");
  element.setAttribute("aria-label",label);
  element.append(label,...controls);
  return element;
}
function show(next){
  if(controller){controller.disconnect();controller=null;}
  if(next!=="cameraSetup"&&!(next==="battle"&&controlMode==="camera")) stopCamera();
  if(next==="mode") controlMode="mouse";
  phase=next;
  cameraPanel.hidden=next!=="cameraSetup"&&!(next==="battle"&&controlMode==="camera");
  renderInstructions();
  const game=document.querySelector("main");
  game.dataset.phase=phase;
  game.dataset.mode=controlMode;
  hud.hidden=next!=="battle";
  renderPhase();
}
function cameraChoice(){
  const choice=document.createElement("div");
  choice.className="camera-choice";
  const caption=document.createElement("small");
  caption.textContent=text("cameraHardCopy");
  choice.append(button(text("cameraHard"),selectCamera,{tone:"blue"}),caption);
  return choice;
}
function pinchGuide(){
  const guide=document.createElement("figure");
  guide.className="pinch-guide";
  // Original vector outlines based on the supplied gesture reference.
  const poses=[
    ["M32 25 Q38 17 46 21 L57 27 Q62 30 59 34 Q57 37 52 34 L45 31 Q41 29 40 36 L39 43 Q40 48 44 45 Q51 38 58 39 Q63 40 61 44 Q53 47 49 54",[57,31],[58,42]],
    ["M32 25 Q38 17 46 22 L53 29 Q57 33 53 36 Q50 38 46 34 Q42 29 40 36 L39 43 Q40 48 45 45 L52 39 Q57 36 60 39 Q63 42 58 46 Q52 50 49 54",[52,33],[57,41]],
    ["M32 25 Q38 17 46 22 L52 30 Q56 34 52 38 Q49 40 46 35 Q42 30 40 36 L39 43 Q40 48 45 45 L48 40 Q50 36 54 37 Q58 40 55 44 Q52 50 49 54",[52,37],[53,39]]
  ];
  poses.forEach(([fingers,index,thumb],i)=>{
    const label=document.createElement("span");
    label.innerHTML='<svg viewBox="0 0 70 68" aria-hidden="true"><path d="M49 54 Q44 59 44 64 H24 V57 Q19 52 17 43 L9 29 Q6 24 9 22 Q12 20 15 24 L21 34 L16 12 Q15 7 19 6 Q22 5 24 10 L28 29 L27 9 Q27 4 31 4 Q35 4 35 9 L35 22 '+fingers.replace(/^M32 25/,'L32 25')+' Z" fill="#f8d2ad" stroke="#895364" stroke-width="1.5" stroke-linejoin="round"/><g fill="#fff1b9" stroke="#a56874" stroke-width="1"><circle cx="'+index[0]+'" cy="'+index[1]+'" r="2.4"/><circle cx="'+thumb[0]+'" cy="'+thumb[1]+'" r="2.4"/></g>'+
      (i===1?'<path d="M63 27l-4 6m0-4v4l4-1m2 16l-4-4m4 0h-4v4" fill="none" stroke="#895364" stroke-linecap="round"/>':i===2?'<path d="M62 23l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z" fill="#f3cd76" stroke="#895364"/>':'')+'</svg>';
    label.append(text(["pinchOpen","pinchClose","pinchTouch"][i]));
    guide.append(label);
  });
  const caption=document.createElement("figcaption");
  caption.textContent=text("pinchGuide");
  guide.append(caption);
  return guide;
}
function renderPhase(){
  const friend=friends[chosen],name=friendName(friend);
  switch(phase){
    case "intro":
      page(text("invitation"),text("rustle"),
        text("introCopy"),
        button(text("accept"),()=>show("friends")),button(text("decline"),()=>show("decline"),{tone:"soft"}));
      break;
    case "decline":
      page(text("club"),text("quiet"),text("quietCopy"),
        button(text("backInvite"),()=>show("intro")));
      break;
    case "friends":
      page(text("pick"),text("who"),text("pickCopy"),
        ...friends.map((item,index)=>button(text(item.label),()=>{chosen=index;show("fort");},{tone:item.color})));
      break;
    case "fort":
      page(text("fort"),text("cozy"),text("says",{name,line:text(friend.line)}),
        group(text("shape"),...["tall","low"].map((key,index)=>button(text(key),()=>{shape=index;show("fort");panel.querySelectorAll(".group button")[index].focus();},{pressed:shape===index,tone:"soft"}))),
        group(text("color"),...["sage","rose"].map((key,index)=>button(text(key),()=>{color=index;show("fort");panel.querySelectorAll(".group button")[2+index].focus();},{pressed:color===index,tone:index===0?"sage":""}))),
        button(text("ready"),()=>show("mode")));
      break;
    case "mode":
      page(text("mode"),text("chooseMode"),text("modeCopy"),
        button(text("mouse"),()=>startBattle("mouse")),cameraChoice(),
        button(text("backFort"),()=>show("fort"),{tone:"soft"}));
      break;
    case "cameraSetup": {
      const start=button(text("cameraStart"),()=>startBattle("camera"),{disabled:!cameraSession?.ready});
      start.id="camera-start";
      page(text("camera"),text("cameraSetup"),text("cameraSetupCopy"),start,
        button(text("mouse"),()=>startBattle("mouse"),{tone:"soft"}),
        button(text("cameraBack"),()=>show("mode"),{tone:"blue"}));
      panel.querySelector(".actions").before(pinchGuide());
      break;
    }
    case "battle": {
      const feedback=document.createElement("strong");
      feedback.id="feedback";feedback.setAttribute("role","status");
      feedback.textContent=text(battle.state.feedback);
      page(text("battle"),text("over"),"",feedback,
        ...(controlMode==="camera"?[button(text("cameraExit"),()=>show("mode"),{tone:"soft"})]:[]));
      break;
    }
    case "ending": {
      const won=battle.state.result==="win";
      let description=text("score",{score:battle.state.score})+". ";
      if(!won) description+=text("retryCopy",{name});
      else if(pendingGift) description+=text("parcel",{name});
      else if(gift!==null) description+=text("unlocked",{pillow:text(pillows[gift].name)})+(storageUnavailable?" "+text("storage"):"");
      else description+=text("collected");
      const actions=pendingGift?[button(text("open"),()=>{gift=RewardSystem.unlock();pendingGift=false;show("ending");})]:[
        button(won?text("again"):text("retry",{name}),()=>show("mode")),
        button(text("meet"),()=>show("intro"),{tone:"soft"})
      ];
      page(text("end"),won?text("win"):text("loss"),description,...actions);
      if(won){
        const icon=document.createElement("span");
        icon.className="gift";icon.setAttribute("aria-hidden","true");
        icon.textContent=pendingGift?"🎁":"✦";
        panel.prepend(icon);
      }
      break;
    }
  }
}
/* Language changes repaint the current phase without reconnecting input or
   touching the battle clock, fort selection, or reward state. */
let controlMode="mouse";
function renderInstructions(){
  const aside=document.querySelector("#instructions");
  const heading=document.createElement("h2");
  heading.id="how-title";
  heading.textContent="✦ "+text("how");
  const list=document.createElement("ul");
  const rows=controlMode==="camera"
    ?[["","cameraMove"],["","cameraHit"]]
    :[["A","left"],["D","right"],[text("click"),"hit"]];
  for(const [key,label] of rows){
    const item=document.createElement("li");
    if(key){
      const cap=document.createElement("kbd");
      cap.textContent=key;
      item.append(cap);
    }
    item.append(text(label));
    list.append(item);
  }
  aside.replaceChildren(heading,list);
}
function setupLanguage(){
  const picker=document.querySelector("#languages");
  const buttons=[...picker.querySelectorAll("button")];
  function updateLanguage(){
    document.documentElement.lang=language===0?"en":"vi";
    document.title=text("title")+" · "+text("club");
    document.querySelector("#title").textContent=text("title");
    document.querySelector("#byline").textContent=text("byline");
    picker.setAttribute("aria-label",text("language"));
    canvas.setAttribute("aria-label",text("room"));
    panel.setAttribute("aria-label",text("controls"));
    buttons.forEach((element,index)=>element.setAttribute("aria-pressed",index===language));
    updateSoundLabel();
    renderCameraStatus();
    renderInstructions();
  }
  buttons.forEach((element,index)=>element.addEventListener("click",()=>{
    if(language===index) return;
    language=index;
    updateLanguage();
    focusStage=false;
    renderPhase();
    focusStage=true;
  }));
  updateLanguage();
}
function startBattle(mode="mouse"){
  if(mode==="camera"&&!cameraSession?.ready) return;
  controlMode=mode;
  gift=null;
  battle=createBattle([0,...unlocks]);
  show("battle");
  if(mode==="mouse") controller=MouseController.connect(dispatch,battle.state.x);
}

/* 7. Bedroom renderer and animation loop. The opponent is drawn before the
   fort, the player after it, and every projectile above those layers. */
function drawBedroom(time){
  draw(room,W/2,H,W,H);
  const bounce=reducedMotion?0:Math.sin(time*3)*4;
  if(["intro","friends","decline"].includes(phase)){
    friends.forEach((friend,index)=>{
      const x=295+185*index;
      draw(friend.art,x,460+(index===1?-bounce:bounce),148,223,true);
      ctx.font=language===0?"bold 19px Georgia":"bold 19px system-ui";ctx.textAlign="center";
      ctx.fillStyle="#fffaf0";ctx.beginPath();ctx.roundRect(x-52,471,104,30,15);ctx.fill();
      ctx.fillStyle="#553841";ctx.fillText(friendName(friend),x,492);
    });
    return;
  }
  const active=phase==="battle";
  draw(friends[chosen].art,705,466-bounce,165,238,true);
  draw(forts[shape][color],490,510,490,260);
  draw(player,active?battle.state.x:195,525+bounce,150,211,true);
  if(active){
    const state=battle.state;
    if(state.shot){
      const point=battle.position(state.shot);
      drawProjectile(point,state.shot.id);
    }
    for(const shot of state.returns){
      const t=clamp((state.time-shot.start)/RULES.returnTime,0,1);
      const x=shot.point.x+(705-shot.point.x)*t;
      const y=shot.point.y+(290-shot.point.y)*t-95*4*t*(1-t);
      const impact=reducedMotion?0:.13*Math.sin(Math.PI*clamp(t/.30,0,1));
      drawProjectile({
        x,y,size:shot.point.size+(64-shot.point.size)*t,
        angle:shot.point.angle*(1-t),stretch:shot.point.stretch+(1-shot.point.stretch)*t-impact
      },shot.id);
    }
    state.bursts.forEach(burst=>drawFeathers(burst,state.time));
  }
  {
    const aim=cameraSession?.pointer;
    if(aim){
      ctx.beginPath();
      ctx.arc(aim.x,aim.y,cameraSession.pinched?11:8,0,Math.PI*2);
      ctx.fillStyle=cameraSession.pinched?"#ed9fba":"#fffaf0";
      ctx.fill();
      ctx.strokeStyle="#895364";
      ctx.lineWidth=2;
      ctx.stroke();
    }
  }
  if(phase==="ending"&&battle.state.result==="win"){
    draw(confetti,485,289-bounce,176,132);
    if(gift!==null) draw(pillows[gift].art,485,340-bounce,104,104,true);
  }
}
/* Small painted-style feather marks are effects, separate from the original artwork. */
function drawFeathers(burst,time){
  const t=clamp((time-burst.start)/.48,0,1);
  for(let i=0;i<6;i++){
    const angle=i*Math.PI/3;
    const spread=58*(1-(1-t)*(1-t));
    ctx.save();
    ctx.translate(burst.point.x+Math.cos(angle)*spread,burst.point.y+Math.sin(angle)*spread+16*t*t);
    ctx.rotate(angle+t*.65);
    ctx.globalAlpha=1-t;
    ctx.fillStyle=["#fff8e2","#fce1e7","#e4f1f5"][i%3];
    ctx.strokeStyle="#9b6975";
    ctx.beginPath();
    ctx.ellipse(0,0,8,3,0,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-6,1);
    ctx.lineTo(5,-1);
    ctx.stroke();
    ctx.restore();
  }
}
let lastFrame;
function frame(now){
  const delta=lastFrame===undefined?0:Math.min(.1,(now-lastFrame)/1000);
  lastFrame=now;
  cameraSession?.step(delta,now);
  if(phase==="battle"){
    controller?.step(delta);
    battle.update(delta);
    const state=battle.state;
    const values=[text("clock",{time:Math.ceil(RULES.duration-state.time)}),text("score",state),
      "♥ "+text("lives",{count:state.lives+" / "+RULES.playerLives}),
      text("health",{name:friendName(friends[chosen]),count:state.health+" / "+RULES.opponentLives})];
    hudFields.forEach((field,i)=>{if(field.textContent!==values[i])field.textContent=values[i];});
    const feedback=document.querySelector("#feedback");
    const message=text(state.feedback);
    if(feedback.textContent!==message) feedback.textContent=message;
    if(state.result){pendingGift=state.result==="win"&&unlocks.size<2;show("ending");}
  }
  drawBedroom(now/1000);
  requestAnimationFrame(frame);
}

/* 8. Load the illustrations before starting the room. */
async function initialize(){
  const entries=Object.entries(ARTWORK);
  await Promise.all(entries.map(([name,source])=>new Promise((resolve,reject)=>{
    const image=new Image();
    image.onload=()=>{images[name]=image;resolve();};
    image.onerror=()=>reject(new Error("Unable to load "+name));
    image.src=source;
  })));
  setupSound();
  setupLanguage();
  show("intro");
  requestAnimationFrame(frame);
}

initialize().catch(error=>{
  console.error(error);
  panel.textContent=text("loadError");
});
