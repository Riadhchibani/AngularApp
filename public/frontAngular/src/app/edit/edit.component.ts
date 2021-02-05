import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id: any;
  public name: any;
  public pwd: any;
  public age: any;

 
  public constructor(private router: ActivatedRoute) {
    let examp = this.router.queryParams.subscribe(params => {
      this.id = params["id"];
      this.name = params["name"];
      this.pwd = params["pwd"];
      this.age = params["age"];
  });
  console.log(this.id);
  }

  ngOnInit(): void {}

}

