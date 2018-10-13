import { Component, OnInit } from '@angular/core';
import { Rpa } from '../rpa';
import { SMARTRPA } from '../smart-rpa';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  rpa = SMARTRPA;
  selectedRPA: Rpa;

  constructor() { }

  ngOnInit() {
  }
onSelect(srpa: Rpa): void {
    this.selectedRPA = srpa;
  }
}
