import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './model/user';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: [ 'app.component.css' ]
})
export class AppComponent {

	name: string;
    email: string;
    phone: string;
     
    onSubmit(form: NgForm){
        console.log(form);
    }

}