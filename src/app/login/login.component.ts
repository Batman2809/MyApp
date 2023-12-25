import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup ;
  constructor(private fb: FormBuilder, private ls:LoginService){};
  ngOnInit(){
    this.loginForm =this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
  })
  }

  onSubmit() {
    const credentials = this.loginForm.value;
    this.ls.login(credentials).subscribe(
      (response)=>{
        this.ls.navigate('user');
        console.log("Succesful");
      },
      (error)=>{
        console.log("Incorrect details");
      }
    )
  }
}
