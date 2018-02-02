import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JsonserverService } from '../../services/jsonserver.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signUpForm: FormGroup;

    constructor(
        fb: FormBuilder,
        private jsonServer: JsonserverService,
        private router: Router) {

        this.signUpForm = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
            password: ['', [Validators.required, Validators.minLength(3)]],

        });
    }

    ngOnInit() {
    }

    isFieldInvalid(field: string) {
        return (
            (this.signUpForm.get(field).touched ||
            this.signUpForm.get(field).dirty) &&
            this.signUpForm.get(field).errors
        );
    }


    doSignUp() {
        console.log(this.signUpForm.value);
        this.jsonServer.createUser(this.signUpForm.value).subscribe(res => {

            this.router.navigate(['/home']);
            console.log(res);

        });
    }
}
