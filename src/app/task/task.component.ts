import { CrudService } from './../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.getData()
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  data: any = []

  obj = {
    employ: JSON.parse(localStorage.getItem('name') || ''),
    task: '',
    description: ''
  }

  totalLength: any
  page: number = 1

  getData() {
    this.crud.getData().subscribe((e: any) => {
      this.data = e
      this.totalLength = e.length
      console.log(this.obj);
    })
  }

  btnCreate(form: NgForm) {
    this.crud.create(this.obj).subscribe(e => {
      this.getData()
      form.reset()
    })
  }

  updateVariable: boolean = true

  updateId: any

  update(id: any, task: any, description: any) {
    this.updateVariable = false

    this.updateId = id

    this.obj = {
      employ: JSON.parse(localStorage.getItem('name') || ''),
      task: task,
      description: description
    }
  }

  btnUpdate(id: any, form: NgForm) {
    if (confirm('Do u want update this task ?')) {
      this.crud.update(id, this.obj).subscribe(e => {
        this.updateVariable = true
        this.getData()
        form.reset()
      })
    }
  }


  finish(id: any) {
    console.log(id);

    if (confirm('Are u sure ?')) {
      this.updateVariable = true
      this.crud.delete(id).subscribe(e => {
        this.getData()
      })
    }
  }

}
