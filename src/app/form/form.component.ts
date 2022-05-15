import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor(private readonly fb: FormBuilder) { }

  contactForm : any;
  error: boolean = true;
  errorMsg : any = "";
  messages : any = {
    name : {
      required : "Please enter name to proceed"
    },
    email: {
      required : "Please enter your email or phone number to proceed",
      pattern : "Please enter a valid email address"
    },
    phone: {
      required : "Please enter your email or phone number to proceed",
      pattern : "Please enter a valid phone number"
    }
  };
  contactDetails : any = {
    phone : environment.phone,
    token : environment.token,
    text : ""
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name :['',[Validators.required]],
      email :['', [Validators.required, Validators.email]],
      phone :['', [Validators.required, this.phoneValidator]],
      whatsapp :['']
    });
  }

  phoneValidator(control: AbstractControl): ValidationErrors | null {
    let nameRe = new RegExp("^[0-9]{10}$|^$");
    const validPhone = nameRe.test(control.value);
    return validPhone ? null : {pattern: true};
  }

  validateForm() {
    (<any>Object).values(this.contactForm.controls).forEach((control: FormControl) => {
      control.markAsTouched();
    });
    this.error = false;
    if(this.contactForm.get('name').errors)
    {
      this.error = true;
      this.errorMsg = this.messages.name.required;
    }
    else if(this.contactForm.get('email').errors)
    {
      this.error = true;
      if(this.contactForm.get('email').errors.required)
      {
        this.errorMsg = this.messages.email.required;
      }
      else
      {
        this.errorMsg = this.messages.email.pattern;
      }
    }
    else if(this.contactForm.get('phone').errors)
    {
      this.error = true;
      if(this.contactForm.get('phone').errors.required)
      {
        this.errorMsg = this.messages.phone.required;
      }
      else
      {
        this.errorMsg = this.messages.phone.pattern;
      }
    }
  }

  connect() {
    this.validateForm();
    if(!this.error)
    {
      var myHeaders = new Headers();
      myHeaders.append("X-RapidAPI-Host", environment.host);
      myHeaders.append("X-RapidAPI-Key", environment.key);
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");

      let msg : string =
        "Name : " + this.contactForm.get('name').value
        + "\nEmail : " + this.contactForm.get('email').value
        + "\nPhone : " + this.contactForm.get('phone').value
        + "\nWhatsapp : " + (this.contactForm.get('whatsapp').value == true ? "Yes" : "No");

      var raw = JSON.stringify({
        "phone": environment.phone,
        "token": environment.token,
        "text": msg
      });

      var requestOptions : RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const url = "https://" + environment.host + "/whin";

      fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  }
}
