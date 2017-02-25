import { Component } from '@angular/core';
import {FormService} from "./form.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: any;
  error: any;
  users: any;

  constructor (private formService: FormService){
  }
  addUser(
    firstName:string,
  lastName:string,
    

  )
}
