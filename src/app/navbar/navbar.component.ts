import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faHome=faHome
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // edit(){
  //   this.router.navigate('editassignment');
  // }
}
