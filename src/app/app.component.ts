  // This file contain all the logic for root view
  // Need to be commented
  // Developer working on this file please keep this file well commented
  //Author : Rahul Kumar Chaudhary

  //import { Component } from '@angular/core';
  import {FormsModule} from '@angular/forms';
  import {NgModule} from '@angular/core';
  import {BrowserModule} from '@angular/platform-browser';
  import { timer } from 'rxjs';
  //import {Custom} from '../classes';
  import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
  import {custom} from '../assets/js/custom'
  import {formatDate } from '@angular/common';
  //declare const chaneBoyname: any;
  //declare const youTube: any;
  //import { Boy } from './boy';


  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    //boy=new Boy("Rahul",5);
    today= new Date();
    todaysDataTime = '';
    title = 'Game15';
    //public check="";
    public check=true;
    public CGC;
    public rnd;
    public oninit;
    public userdata;
    public disin=false;
    public GameStatus;
    colorResponse;
    //chatresponse="chat-container"
    chatcontainer;
    chatcontainerdarker;
    imgcom;
    imgyou;
    turn_class="";

    turn="";
    tog=""
    lowerbond=this.CGC;
    upperbond;
    uCGC;
    chatImgYou;
    chatImgCom;
    player="You";
    //xxx="chat-container darker";
    //rt="../assets/images/com.png";
    //yyy="img-com";

    GameZone="Game Zone"

    bool=true;
    data;
    name: string;
    list=[];
  //  p="<span style='color:red'> My erro </span>";"
    @ViewChild('div') div: ElementRef;
    constructor (private renderer: Renderer2){
      this.todaysDataTime = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');

    }
    //name: string;
    //empoloyeeID : number;
  //  empList: Array<Custom> = [];
  //  public youtube=""
    //public lowerLimit="";
    //public upperLimit="";
    //addElementYou(data) {

  //  const p: HTMLParagraphElement = this.renderer.createElement('h2');
  //  p.innerHTML ="<span style='color:blue'> You : &nbsp; </span>";
  //  this.renderer.appendChild(this.div.nativeElement, p)
  //  this.data=data;
  //  }



    async delay(ms: number) {
      await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }
    reverseClass(body,bodyDark,imgyou,imgcom){
      this.chatcontainer=bodyDark;
      this.chatcontainerdarker=body;
      this.imgyou=imgcom;
      this.imgcom=imgyou;
    }
    resetClass(){
      this.chatcontainer="chat-container";
      this.chatcontainerdarker="chat-container darker";
      this.imgcom="img-com";
      this.imgyou="img-you";
    }

    handleCGC(data){
      this.CGC=data;
    }
    setUppberbond(){
      this.uCGC=this.CGC+4;
      if(this.uCGC>=15){
        this.upperbond=15;
      }
      else{
        this.upperbond=this.CGC+4;
      }
    }
    checkTheWinningParty(player){
      //this.turn="configurations!" +""
    //  localCheckPoint=false;
      if(this.CGC==15){
        if(player=="you"){
          this.turn="Congratulation!" + player +" have  Won. You defenitly got brain faster than this Computer"
          this.GameZone="Game Over! You Won"
          this.GameStatus="Truely You are One of a kind!";
          this.colorResponse="text-successs";
          this.turn_class="text-successs";

        }
        if(player=="com"){
          this.turn="Sorry! Looks like this dumb Computer was outsmarts you for this time"
          this.GameZone="Game Over! Computer Won"
          this.GameStatus="Ooops ! Better Luck Next Time";
          this.colorResponse="text-danger";
          this.turn_class="text-danger";
        }
        this.oninit=true;
        this.disin=true;



      }

    }
    restart(){
      alert("This Feature will be Avialable in Updated Version!");
    }
    onClick(){
      this.resetClass();
      this.turn_class="text-danger"
      //this.boy.chaneBoyname("Riffs");
      this.oninit=true;
      this.disin=true;
      this.turn="Wait ! its Computer Turn and it is Still Thinking. Dumb, isn't it?";
    //  checkTheWinningParty(userdata)
      //this.addElementYou(this.userdata);
      //myTest();
      //youTube();
      //userdata=userinput.value;
      this.handleCGC(this.userdata);
      this.setUppberbond();
      //let customObj = new Custom();
      //customObj.Turn = "something";
      //customObj.Value = 12;
      //this.empList.push(customObj);
      this.bool=true;
      this.list.push("You : "+ this.userdata);
      this.player="Computer";
      this.checkTheWinningParty("you")


      this.delay(3000).then(any=>{
       //your task after delay.
      if(this.CGC<15){
        this.rnd=Math.floor(Math.random() * 3) + 1;
        if(this.rnd+this.CGC>=15){
          this.rnd=15;
          this.handleCGC(this.rnd);

          this.checkTheWinningParty("com");
        }
        else{
          this.handleCGC(this.rnd + this.CGC);

        }
        this.disin=false;
        this.turn="Again Your Trun Now";
        this.userdata= "";
        this.bool=false;
        this.reverseClass(this.chatcontainer,this.chatcontainerdarker,this.imgyou,this.imgcom)
        this.list.push("Computer : "+ this.CGC)
        this.checkTheWinningParty("com")
        this.setUppberbond();
        this.player="You";
        this.turn_class="text-successs";
        //this.reverseClass(this.chatcontainerdarker,this.chatcontainer,this.imgcom,this.imgyou)
        //yyy="img-com";
      //  rt="../assets/images/com.png";
      //rt="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7CTWylweLsBIsgmpFIYLfappmO4wU6oT4TkG5JpyXPbf0fsiN&usqp=CAU";


      }
      });
    }

    checkData(data){
      //console.alert("data recieved");,

      if(data<this.CGC+4 && data >this.CGC && data<=15 && this.CGC <=15){
        this.check=false;
        //this.CGC=data;
        this.turn="You Trun Now";
        this.turn_class="text-successs";

        this.oninit=false;
        this.GameStatus="Game Has Started. Thank You!";

        this.colorResponse="text-progress";



      }
      else{
        this.check=true;
      }

    }




    ngOnInit(): void {

      this.CGC=0;
      this.setUppberbond();
      this.oninit=true;
      this.GameStatus="Not Started! Start The Game";
      this.colorResponse="text-danger";
      //this.turn="You Trun Now";
      this.chatcontainer="chat-container";
      this.chatcontainerdarker="chat-container darker";
      this.imgcom="img-com";
      this.imgyou="img-you";
    //  chatImgCom="img-com";
    //  chatImgYou="img-you";
    }


  }
