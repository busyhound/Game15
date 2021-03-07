  // This file contain all the logic for root view
  // Need to be commented
  // Developer working on this file please keep this file well commented
  //Author : Rahul Kumar Chaudhary
  // This is master branch
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

    // Here are some bunch of variable to store the value

    // Attribute declaration starts here

    today= new Date();
    todaysDataTime = '';
    title = 'Game15';
    public check=true;
    public CGC=0;              // Current Game Count.Starts with 0
    public rnd;                // to store the random number. Computer uses this random number to play the game
    public oninit;            // To Disable the submit button
    public userdata;          // To store the user input
    public disin=false;           // boolean. To disable the input box when required
    public GameStatus;            // To display the game status in view 
    colorResponse;                // used for class binding. used to hold the class value which need to be active
    //chatresponse="chat-container"
    chatcontainer;
    chatcontainerdarker;
    imgcom;                           //to save the profile image name of the player
    imgyou;                             //to save the profile image name of the player    
    turn_class="";                    // class binding. to the css class name in order to make the class active

    turn="";               // This Variable will save the player turn
    tog=""
    lowerbond=this.CGC;    // Current Game Count. This variable will store the current count value
    upperbond;             // This attribute the check what is the maxmimum that can be selected by either of the player
    uCGC;                         // upper current window count i.e maximum CGC value for the next round
    player="You";         // begins with the human
    // need to improve. This should be adjusted with toss value
    //Random toss to descide which player will go first ( need to implement yet)
   
    GameZone="Game Zone"

    bool=true;
    data;
    name: string;
    list=[];

    //Attribute declaration ends here
    
    @ViewChild('div') div: ElementRef;
    constructor (private renderer: Renderer2){
      this.todaysDataTime = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');

    }

    async delay(ms: number) {
      await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }

    onClick(){
      //This function will be called when user enter the valid number and hit the 'Lock kr du' button

      this.resetClass();                                       // Reset everything i.e value of basic attribute to initial value
      
      this.turn_class="text-danger"                           // To change the turn. This will change the css color. Class binding is used here
      //this.boy.chaneBoyname("Riffs");
      this.oninit=true;                                       //
      this.disin=true;                                        // disable ==true, this will disable the input box
      this.turn="Wait ! its Computer Turn and it is Still Thinking. Dumb, isn't it?";  // Changed the turn
      this.handleCGC(this.userdata);
      this.setUppberbond();     1                             // Changed the upperbod 
      this.bool=true;
      this.list.push("You : "+ this.userdata);
      this.player="Computer";
      this.checkTheWinningParty("you")                        // To check whether the score is reached to winning point or not


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

    // Onlick method ends

    reverseClass(body,bodyDark,imgyou,imgcom){
      this.chatcontainer=bodyDark;
      this.chatcontainerdarker=body;
      this.imgyou=imgcom;
      this.imgcom=imgyou;
      // this method will reverse the above attribute value in order to print in last in firt out order (stack operation)
    }

    resetClass(){
      // This method will undo the effect of reverseClass() method
      this.chatcontainer="chat-container";
      this.chatcontainerdarker="chat-container darker";
      this.imgcom="img-com";
      this.imgyou="img-you";
    }

    handleCGC(data){
      this.CGC=data;
      // this will simply take the user data input and increase the CGC ( Current Game Count) value.
    }
    setUppberbond(){

      // This method will set the upper bond of CGC for next round in order to restrict the player to valid input
      
      this.uCGC=this.CGC+4;
      if(this.uCGC>=15){
        this.upperbond=15;
        //if CGC has reached at the end
      }
      else{
        this.upperbond=this.CGC+4;
        // CGC is not at the end
      }
    }

    checkTheWinningParty(player){
     // This funciton will check whether any player has won or not in each round

      if(this.CGC==15){
        if(player=="you"){
          this.turn="Congratulation!" + player +" have  Won. You defenitly got brain faster than this Computer"
          this.GameZone="Game Over! You Won"
          this.GameStatus="Truely You are One of a kind!";
          this.colorResponse="text-successs";
          this.turn_class="text-successs";
          // Check the winning player and show the message according to the winning player

        }
        if(player=="com"){
          this.turn="Sorry! Looks like this dumb Computer outsmarts you for this time"
          this.GameZone="Game Over! Computer Won"
          this.GameStatus="Ooops ! Better Luck Next Time";
          this.colorResponse="text-danger";
          this.turn_class="text-danger";
           // Check the winning player and show the message according to the winning player

        }
        this.oninit=true;             // Disable the input box
        this.disin=true;              // Disable the submit button

      }

    }
    restart(){
      alert("This Feature will be Avialable in Updated Version!");
      // This code to update in next version
      // Relod the page which this method is called
    }

    checkData(data){
      //Check if eneterd data is valid or not

      if(data<this.CGC+4 && data >this.CGC && data<=15 && this.CGC <=15){
        this.check=false;
        
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
      // This method to be called whenever the view is rendered for the first time
      this.CGC=0;                                                             // Current Game count set to zero
      this.setUppberbond();                                                   // to Set the maximum digit the player can choose
      this.oninit=true;
      this.GameStatus="Not Started! Start The Game";                          // Game Status , a
      this.colorResponse="text-danger";
      this.chatcontainer="chat-container";
      this.chatcontainerdarker="chat-container darker";
      this.imgcom="img-com";
      this.imgyou="img-you";
   
    }


  }
