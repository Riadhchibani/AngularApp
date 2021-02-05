import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-block-icon',
  templateUrl: './block-icon.component.html',
  styleUrls: ['./block-icon.component.css']
})
export class BlockIconComponent implements OnInit {

  @Input() typeIcon: string = '';
  @Input() ObjectId: any;
  @Input() ObjectName: any;
  @Input() Objectpwd: any;
  @Input() ObjectAge: any;


  constructor(private router: Router) { }

  ngOnInit(): void { }

  nav() {
    if (this.typeIcon == 'edit') {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "id": "" + this.ObjectId + "",
          "name": "" + this.ObjectName + "",
          "pwd": "" + this.Objectpwd + "",
          "age": "" + this.ObjectAge + ""
        }
      };
      this.router.navigate(["editpage"], navigationExtras);
    }

  }
}
