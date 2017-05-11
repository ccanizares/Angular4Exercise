import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { IUser } from './models/user.model';

@Injectable()
export class UserService {
  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private dataSvc: DataService) { 

  }

  getUsers():Observable<IUser[]>{
      return this.dataSvc.get(this.usersUrl).map((response: Response) => {
          return response.json();
      });
  }

}
