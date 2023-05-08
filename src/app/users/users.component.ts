import { ActivatedRoute, Router } from '@angular/router';
import {Component, OnInit} from "@angular/core";

interface User{
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;

}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  userI: User[] = [
    {
      id: "1234",
      firstname: "Teodora",
      lastname: "Tat",
      email: "teotat7@gmail.com",
      phone: "0746438040"
    }
  ]

}
