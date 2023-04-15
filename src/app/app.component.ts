import {Component, OnInit} from '@angular/core';
import {of, tap} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  accept!: boolean
  form!: FormGroup
  submittingAForm!: boolean

  constructor() {
  }

  ngOnInit(): void {
    this.accept = false
    this.submittingAForm= false
    console.log(this.accept)
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl('', Validators.required)
    })
  }

  submit() {
    this.submittingAForm = true
    if(this.form.invalid){
      return
    }
    console.log(this.form.value)
    this.submittingAForm = false
  }
}
