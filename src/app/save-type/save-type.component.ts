import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../data-access/database.service';
import { User } from '../data-access/entities/user.entity';
@Component({
  selector: 'app-save-type',
  templateUrl: './save-type.component.html',
  styleUrls: ['./save-type.component.scss']
})
export class SaveTypeComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Age'];

  firstName = '';
  lastName = '';
  age = '';

  ngOnInit() {
  }

  constructor(private databaseService: DatabaseService) {
    this.getUsers();
  }

  getUsers() {
    this.databaseService
      .connection
      .then(() => User.find())
      .then(users => {
        this.users = users;
      });
  }

  addUser() {
    const user = new User();

    user.FirstName = this.firstName;
    user.LastName = this.lastName;
    user.Age = +this.age;

    this.databaseService
      .connection
      .then(() => user.save())
      .then(() => {
        this.getUsers();
      })
      .then(() => {
        this.firstName = '';
        this.lastName = '';
        this.age = '';
      })
  }

}
