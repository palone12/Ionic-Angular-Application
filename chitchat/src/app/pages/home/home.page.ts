import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  open_new_chat=false;
  segment = 'chats'
  users=[
    {id:1,name:"Niyati" ,photo:'https://instacaptionsforall.in/wp-content/uploads/2023/11/153-2-1024x1024.jpg'},
    {id:2,name:"Aditya" ,photo:'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'},
    {id:3,name:"Yimish" ,photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAgxgaZzxc0_VXWJNzJd6-2NCDmQkS64FfqBlKOIwOg&s'},
  ]
  constructor() { }

  ngOnInit() {
  }

  logout() {
  }

  onSegmentChanged(event:any) {

  }
  cancel(){

  }

  newChat(){
    this.open_new_chat=true
  }
  onWillDismiss(event:any){

  }
}
