import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
  ngOnInit(): void {
    this.msgComponent()
  }


  msgComponent(){
    console.log("Meu componente navbar inicialiou")
  }

}
