import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('new_chat') modal: ModalController;
  @ViewChild('popover') popover: PopoverController;
  open_new_chat=false;
  segment = 'chats'
  users=[
    {id:1,name:"Niyati" ,photo:'https://instacaptionsforall.in/wp-content/uploads/2023/11/153-2-1024x1024.jpg'},
    {id:2,name:"Aditya" ,photo:'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'},
    {id:3,name:"Yimish" ,photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAgxgaZzxc0_VXWJNzJd6-2NCDmQkS64FfqBlKOIwOg&s'},
  ]

  chatRooms=[
    {id:1,name:"Niyati" ,photo:'https://instacaptionsforall.in/wp-content/uploads/2023/11/153-2-1024x1024.jpg'},
    {id:2,name:"Aditya" ,photo:'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'},
    {id:3,name:"Yimish" ,photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAgxgaZzxc0_VXWJNzJd6-2NCDmQkS64FfqBlKOIwOg&s'},
  ]
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.popover.dismiss()
  }

  onSegmentChanged(event:any) {

  }
  cancel(){
    this.modal.dismiss();
    this.open_new_chat=true;

  }

  newChat(){
    this.open_new_chat=true
  }
  onWillDismiss(event:any){

  }

  startChat(event:any) {

  }

  getChat(item) {
    this.router.navigate(['/', 'home', 'chats', item?.id]);
  }
}
