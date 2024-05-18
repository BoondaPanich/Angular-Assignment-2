import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormComponentComponent } from '../form-component/form-component.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormComponentComponent,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: FormControl = new FormControl(null, [
    Validators.maxLength(100),
    Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    Validators.required,
  ]);
  password: FormControl = new FormControl(null, [
    Validators.minLength(8),
    Validators.maxLength(100),
    Validators.required,
  ]);
}
