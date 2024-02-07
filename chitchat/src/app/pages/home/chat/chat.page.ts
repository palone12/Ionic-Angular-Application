import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
 name:string = 'Sender'
 isLoading=true
 message:string
 currentUserId=1;
 chats=[
   {id:1, sender:1,message:'Hi'},
   {id:1, sender:1,message:'Hello'}
 ]
  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    
  }

}
