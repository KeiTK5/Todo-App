import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle: boolean = false

  dropdown() {
    this.toggle = !this.toggle
  }
  show() {
    let dropdown = document.querySelectorAll('.dropdown')

    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', () => {
        let subMenu = document.querySelectorAll('.sub-menu')
        subMenu[i].classList.toggle('active')
        console.log(subMenu[i]);

      })
    }
  }
}
