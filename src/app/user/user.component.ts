import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './models/user.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'], 
})
export class UserComponent implements OnInit {
  private model : IUser[];

  constructor(private service: UserService) { 

      this.service.getUsers().subscribe(users => {
          this.model = users;
      });
  }

  ngOnInit() {

  }
}
