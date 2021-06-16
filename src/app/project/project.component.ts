import { CrudService } from './../service/crud.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private crud: CrudService) { }




  show: boolean = false

  editModal: boolean = false

  showModal() {
    this.show = !this.show
  }

  // editShow(value?: any) {
  //   console.log(value);

  //   this.editModal = !this.editModal
  // }

  obj = {
    name: '',
    size: ''
  }

  ngOnInit(): void {
    this.getData()
  }

  totalLength: any
  page: number = 1

  projects: any = []

  getData() {
    this.crud.readProjects().subscribe((e:any) => {
      this.projects = e
      this.totalLength = e.length
      // console.log(e.length,this.projects);
    })
  }

  btnCreate(form: NgForm) {
    this.crud.createProjects(this.obj).subscribe(e => {
      this.getData()
      form.reset()
      this.show = false
    })
  }

  btnDelete(id: any) {
    if (confirm('Are u sure ?')) {
      this.crud.deleteProject(id).subscribe(e => {
        this.getData()
      })
    }
  }

}
