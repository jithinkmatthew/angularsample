import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutGrup: FormGroup;

  constructor(fb: FormBuilder) {
    this.aboutGrup = fb.group({
      favFood: '',
      comment: ''

    });
   }

  ngOnInit() {
  }

}
