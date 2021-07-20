import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor() {
  }
  keys: any[] = [];
  @Input() results = [];

  getKeys(){
    return Object.keys(this.results[0]);
  }

  ngOnInit(): void {
  }

}
