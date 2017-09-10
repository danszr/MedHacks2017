import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "./user.model";
import { AuthService } from "./auth.service";
import { TwilioService } from "./twilio.service";

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html'
})
export class TimerComponent {


    constructor(private authService: AuthService, private router: Router) {

    }



    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    sos() {
      this.sosClicked = true;
      // this.twilioService.sendSMS();
    }

    ngOnInit() {
      var countDownDate = new Date("Sep 11, 2017 15:37:25").getTime();
      this.authService.getNextDoseTime()
            .subscribe(
                (time: time) => {
                    var countDownDate = time;
                }
            );

      // Update the count down every 1 second
      var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
            //twilio
          }
        }, 1000);
      }
    }
}
