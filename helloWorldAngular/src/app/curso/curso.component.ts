import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-list',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  url:String;

  courses:String[] = ['Java', 'JavaScript', 'Angular', 'TypeScript'];

  constructor() {
    this.url = 'http://mycurse.gov.br';
  }

  ngOnInit() {
  }

}
