import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }
  userName = JSON.parse(localStorage.getItem('name') || '')
  ngOnInit(): void {
  }

  logout() {
    this.auth.logout()
    this.router.navigate(['/'])
  }

}
