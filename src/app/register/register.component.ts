import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user: any = {};
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //this.registerationForm = new FormGroup({
     // userName: new FormControl(null, Validators.required),
     // email: new FormControl(null,[Validators.required, Validators.email]),
     // Password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
     // Mobile: new FormControl(null,[Validators.required, Validators.maxLength(10)]);
  
    //});

    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registerationForm = this.fb.group({
    userName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password:  [null,[ Validators.required, Validators.minLength(8)]],
    Mobile: [null,[Validators.required,Validators.maxLength(10)]]
    });
  }

  onSubmit(){
    console.log(this.registerationForm);
    if(this.registerationForm.valid){
      this.user = Object.assign(this.user, this.registerationForm.value);
      this.addUser(this.user);
      this.registerationForm.reset();
    }
    
  }

  addUser(user) {
    let users = [] as any;
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users')!);
      users = [user, ...users];
    }else{
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
