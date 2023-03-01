import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  profileForm = this.fb.group(
    {
      firstName:['',Validators.required],
      lastName:[''],
      email:[''],
      phone:[''],
      gender:[''],
      addressInfo: this.fb.group({
        address: [''],
        city: [''],
        state: [''],
        zipCode: ['']
      })
    }
  );

  constructor(private fb: FormBuilder) { }
  
  check() {
    debugger;
    console.warn(this.profileForm.value);
  }

}
