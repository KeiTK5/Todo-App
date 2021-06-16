import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  object = {
    email: '',
    password: ''
  }

  onSubmit() {
    this.auth.login(this.object).subscribe((e: any) => {
      localStorage.setItem('position', e.user.position)
      localStorage.setItem('name', JSON.stringify(e.user.name))
      localStorage.setItem('token', e.token)

      this.router.navigate(['/task'])
    })
  }


  ngOnInit(): void {
    this.animation()
  }



  register() {
    this.auth.register(this.object).subscribe(e => {
      console.log('register success');
    })
  }

  animation() {
    const form_group = document.querySelectorAll('.form-group')
    const input = document.querySelectorAll('input')
    for (let index = 0; index < input.length; index++) {
      input[index].addEventListener('keyup', () => {
        if (input[index].value.trim()) {
          form_group[index].classList.add('active')
        }
        else {
          form_group[index].classList.remove('active')
        }
      })
    }
  }
}
