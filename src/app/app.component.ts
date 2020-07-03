import { Component, VERSION, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // name = "Angular " + VERSION.major;
  form: FormGroup;
  // form;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  buildForm() {
    this.form = this.formBuilder.group({
      email: [null],
      username: [null],
      userCategory: ["employee"],
      institution: [null],
      company: [null],
      salary: [null]
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.formSubmitted = true;

    if (this.form.valid) {
      console.log(this.form.value); // Process your form
    }
  }

}
