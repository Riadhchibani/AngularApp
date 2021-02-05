import { Component, OnInit } from '@angular/core';
import  DataJson from '../jsonFile/file.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  datalist : {id : number , name : string , pwd : string , age : number}[] = DataJson;
  
  displayedColumns: string[] = ['id', 'name', 'pwd', 'age', 'edit'];
  dataSource : any = DataJson;
  ngOnInit(): void {
  }

}
