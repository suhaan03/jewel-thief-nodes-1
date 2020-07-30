var button1,button2,button3,button4
var gamestate="black"
var database
var a=0
var players
var x=[]
var y=[]
var b1=[]
var b2=[]
var index
var k=1
var allplayers
var game=0

function setup() {
  createCanvas(800,400);
  database=firebase.database()
  database.ref("i").on("value",(data)=>{
    a=data.val()
  })
  database.ref("gamestate").on("value",(data)=>{
    game=data.val()
  })
  Button=createButton("sumbit")
  Button.mousePressed(function(){
    a=a+1
    console.log(a)
    index=a
    database.ref("/").update({
      i:a
    })
    database.ref("player/player"+a).set({
      index:a
    
      })
  })
  
  database.ref("j").on("value",(data)=>{
    k=data.val()
  })
 // database.ref("player"+a).on("value",(data)=>{
   // players=data.val()
  //})
 

 /*if(a==1){
    x=[100,50,140,65,200,250,310,365,400,380,40,565,600,750,540,665]
    y=[200,170,130,120,300,180,190,60,200,370,130,120,200,170,130,120]

    for(var i=0;i<3;i++){
     var c=(Math.round( random(0,15)))
      b1.push(x[c])
      b2.push(y[c])
    }
  }*/

  node1=new Node(100,200); 
  node2=new Node(50,170); 
  node3= new Node(140,130);
   node4=new Node(65,120);
    node5=new Node(200,300);
 node6=new Node(250,180);
 node7= new Node(310,190);
 node8=new Node(365,60);
node9=new Node(400,200);
node10=new Node(380,370); 
node11= new Node(440,130);
node12=new Node(565,120);
node13=new Node(600,200);
node14=new Node(750,170);
 node15= new Node(540,130); 
 node16=new Node(665,120)
 currentnode=node1
 button1=createSprite(600,380,60,20)
 button2=createSprite(670,380,60,20)
 button3=createSprite(740,380,60,20)
 button4=createSprite(530,380,60,20)

 node1.yellow=[node2,node5,node3]
 node1.red=[node16]
 node1.blue=[node4,node10]
 node1.green=[node5,node3,node11]

 node2.yellow=[node1,node5,node3]
 node2.blue=[node4,node10]
 node2.green=[node5,node7,node11]

 node3.red=[node2,node8,node16]
 node3.yellow=[node14]
 node3.blue=[node4,node10]
 node3.green=[node7,node1,]

 node4.yellow=[node9,node5,node3,node8]
 node4.red=[node12]
 node4.blue=[node4,node9,node13]
 node4.green=[node5,node3,node11]

 node5.yellow=[node16,node8,node3]
 node5.red=[node2,node10]
 node5.blue=[node4,node10]
 node5.green=[node3,node11]

 node6.yellow=[node2,node5,node11]
 node6.red=[node16]
 node6.blue=[node4]
 node6.green=[node5,node3,node11]


 node7.yellow=[node2,node14,node3]
 node7.blue=[node4,node1]
 node7.green=[node5,node3,node13]

 node8.yellow=[node2,node5,node3,node15,node11]
 node8.blue=[node4,node10]
 node8.green=[node5,node3,node9]
}

var currentnode

function draw() {
  background(0);  
  drawSprites();
  currentnode.sprite.shapeColor="purple"
  button1.shapeColor="yellow"
  button2.shapeColor="blue"
  button3.shapeColor="green"
  button4.shapeColor="red"
  if(a==3){
    game=1
    database.ref("/").update({
      gamestate:1
      
    })
    database.ref("player").on("value",(data)=>{
      allplayers=data.val()
    })
  }
  if(game==1){
    var cindex=0
   for(var g in allplayers){
     cindex++
   }
  }

  text('x:'+mouseX+'y:'+mouseY,mouseX,mouseY)

  if(mousePressedOver(button1)){
    gamestate="yellow"
  }
  if(gamestate=="yellow"){
    for( var i=0;i<currentnode.yellow.length;i++){
      stroke("yellow")
      line(currentnode.sprite.x,currentnode.sprite.y,currentnode.yellow[i].sprite.x,
        currentnode.yellow[i].sprite.y)
    }

    for( var i=0;i<currentnode.yellow.length;i++){
      if(mousePressedOver(currentnode.yellow[i].sprite)){
        currentnode.sprite.shapeColor="grey"
        currentnode=currentnode.yellow[i]
        gamestate="black"
      }
    }
  }



  if(mousePressedOver(button4)){
    gamestate="red"
  }
  if(gamestate=="red"){
    for( var i=0;i<currentnode.red.length;i++){
      stroke("red")
      line(currentnode.sprite.x,currentnode.sprite.y,currentnode.red[i].sprite.x,
        currentnode.red[i].sprite.y)
    }

    for( var i=0;i<currentnode.red.length;i++){
      if(mousePressedOver(currentnode.red[i].sprite)){
        currentnode.sprite.shapeColor="grey"
        currentnode=currentnode.red[i]
        gamestate="black"
      }
    }
  }



  if(mousePressedOver(button2)){
    gamestate="blue"
  }
  if(gamestate=="blue"){
    for( var i=0;i<currentnode.blue.length;i++){
      stroke("blue")
      line(currentnode.sprite.x,currentnode.sprite.y,currentnode.blue[i].sprite.x,
        currentnode.blue[i].sprite.y)
    }

    for( var i=0;i<currentnode.blue.length;i++){
      if(mousePressedOver(currentnode.blue[i].sprite)){
        currentnode.sprite.shapeColor="grey"
        currentnode=currentnode.blue[i]
        gamestate="black"
      }
    }
  }


  if(mousePressedOver(button3)){
    gamestate="green"
  }
  if(gamestate=="green"){
    for( var i=0;i<currentnode.green.length;i++){
      stroke("green")
      line(currentnode.sprite.x,currentnode.sprite.y,currentnode.green[i].sprite.x,
        currentnode.green[i].sprite.y)
    }

    for( var i=0;i<currentnode.green.length;i++){
      if(mousePressedOver(currentnode.green[i].sprite)){
        currentnode.sprite.shapeColor="grey"
        currentnode=currentnode.green[i]
        gamestate="black"
      }
    }
  }
}

