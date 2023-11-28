/* 
-- esto indica que son lineas comentadas

import { CommonModule } from '@angular/common';
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
  -- users: User[] = []; una lista users
  

  onSumbit(){
    this.model.userName = this.userName.value;
    this.model.userEmail = this.userEmail.value;
    this.model.userPassword = this.userPassword.value;
    this.model.userAdress = this.userAdress.value;

    --this.users.push(this.model); para meterlo en la lista Users
  


    console.log(this.model);
    -- console.log([...this.users]); para mostrar toda la lista users 
    -- this.model = new User("", "", "", ""); crea un nuevo objeto model con valores a 0. Es como reiniciarlo, pero esto se puede hacer con el reset y otras cosas
    
  }  

  -- changeValue() {this.userName.setValue("hello Olivier");
} 


}
 */