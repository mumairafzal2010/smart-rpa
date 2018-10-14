import { Component, OnInit } from '@angular/core';
import { Rpa } from '../rpa';
import { SMARTRPA } from '../smart-rpa';
import { ListService } from '../list.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {HttpParams, HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  rpa = SMARTRPA;
  selectedRPA: Rpa;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getUser()
  }
  getUser() {
    const params = new HttpParams().set('id', "126");
    return this.httpClient.get("https://api.appery.io/rest/1/apiexpress/api/MessageAPI-RPA/23?apiKey=a2e6d55a-6341-4be6-9e55-8f62d81cdd9d", {params}).subscribe(
      data => {
        console.log("PUT Request is successful ", data);
    },
    error => {
      console.log(error);
      
    }
    );
  }

onSelect(srpa: Rpa): void {
    this.selectedRPA = srpa;
  }
}
