import { NgForm } from '@angular/forms';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: AuthService) { }



  ngOnInit(): void {
    this.animation()
  }


  obj = {
    name:'',
    email: '',
    password: '',
    confirm: '',
    position: ''
  }

  register(form: NgForm) {
    this.http.register(this.obj).subscribe(e => {
      console.log(this.obj);
      form.reset()
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
