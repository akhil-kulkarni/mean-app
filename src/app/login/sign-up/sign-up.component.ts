import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

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
      password: ['', Validators.required ],
      name: this.fb.group({
        firstName: ['', Validators.required ],
        middleName: '',
        lastName: ['', Validators.required ],
      }),
      dob: ['', Validators.required ],
      sex: ['', Validators.required ],
      email: ['', Validators.required ],
      mobile: '',
    });
  }

  ngOnInit() {

  }
}
