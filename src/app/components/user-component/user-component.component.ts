import { CommonModule, FormatWidth } from '@angular/common';
import { Component} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { User } from 'src/app/Models/user';

@Component({
  standalone : true,
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
  imports: [CommonModule, ReactiveFormsModule]

})
export class UserComponentComponent{
  
  userName = new FormControl('');
  userEmail = new FormControl('');
  userPassword = new FormControl('');
  userAdress = new FormControl('');


  model: User = new User("", "", "", "");
  Users: User[] = [];


  onSumbit(){
    this.model.userName = this.userName.value;
    this.model.userEmail = this.userEmail.value;
    this.model.userPassword = this.userPassword.value;
    this.model.userAdress = this.userAdress.value;

    this.Users.push(this.model)
    console.log(this.model);
    console.log(this.Users);
  }  

  /* changeValue() {
    this.userName.setValue(this.userName.value);
} */


}
