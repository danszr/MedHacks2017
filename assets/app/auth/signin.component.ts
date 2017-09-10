import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "./user.model";
import { AuthService } from "./auth.service";
import { TwilioService } from "./twilio.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    myForm: FormGroup;
    sosClicked: boolean;

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            );
        this.myForm.reset();
        this.sosClicked = false;
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    sos() {
      this.sosClicked = true;
      // this.twilioService.sendSMS();
    }

    ngOnInit() {
      // if (isLoggedIn()) {
      //   router.navigateByUrl("/auth/timer");
      // }
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}
