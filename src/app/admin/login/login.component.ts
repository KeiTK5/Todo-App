import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.animation()
  }

  onSubmit(user: any, password: any) {
    const obj = {
      "email": user,
      "password": password
    }
    
    this.auth.login(obj).subscribe((e: any) => {
      localStorage.setItem('position', JSON.stringify(e.user.position))
      localStorage.setItem('name', JSON.stringify(e.user.name))
      localStorage.setItem('token', e.token)
      this.router.navigate(['/project'])
    })
  }

  register(user: any, password: any) {
    const obj = {
      "email": user,
      "password": password
    }
    this.auth.register(obj).subscribe(e => {
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
