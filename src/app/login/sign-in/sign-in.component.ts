import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  onSubmit() {
    alert('this.form.value.username: ' + this.form.value.username + '\nthis.form.value.password: ' + this.form.value.password);
  }

  createForm() {
    this.form = this.fb.group ({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {

  }

}
