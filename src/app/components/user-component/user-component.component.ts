import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { User } from 'src/app/Models/user';

@Component({
  standalone : true,
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
  imports: [CommonModule, ReactiveFormsModule]

})
export class UserComponentComponent{
    
  constructor(private fb: FormBuilder) {  /* 1 -se inyecta el servicio Formbuilder (fb) para poder usarlo en la construcción del formulario */
  }

  userForm = this.fb.group ({ /* 2 -aquí llama al método groupe del servicio fb y se implementa la sintaxis del formbuild*/
    userName: [''],
    userAdress : [''],
    credentials : this.fb.group({ /* se puede meter un formgroup dentro de otro para subdividir. */
    userEmail: [''],
    userPassword : ['']
    })
  })



  model: User = new User("", "", "", "");  
  

  onSumbit(){
    console.log(this.userForm.value)    
  }  

 
}


/*   
  SIN FORMSBUILDER, con los formgroups
  userForm = new FormGroup({
    userName : new FormControl(''),
    userEmail : new FormControl(''),
    userPassword : new FormControl(''),
    userAdress : new FormControl(''),
  }) 
  
  LOS Formgroups imbriqués sin FormBuilder:
  userForm = new FormGroup({
    username: new FormControl(''),
    // Gestion de l'adresse avec un FormGroup imbriqué
    address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        zipCode: new FormControl('')
    })
  });
  
  */