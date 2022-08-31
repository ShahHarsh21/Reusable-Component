import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  formData!: FormGroup;


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formData = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit(form:any) {
    console.log(form);
  }
}
