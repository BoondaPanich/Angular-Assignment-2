import { CommonModule } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { TimerPipe } from './timer-pipe';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    FormsModule,
    TimerPipe,
  ],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css',
})
export class FormComponentComponent implements OnInit {
  firstname: FormControl = new FormControl(null, [
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern(/[a-z]|[A-Z]/),
    Validators.required,
  ]);
  lastname: FormControl = new FormControl(null, [
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern(/[a-z]|[A-Z]/),
    Validators.required,
  ]);
  birthdate: FormControl = new FormControl(null, [
    Validators.pattern(
      /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(18\d{2}|19\d{2}|20[01][0-9]|202[0-4])$/
    ),
    Validators.required,
  ]);
  age: FormControl = new FormControl(null, [
    Validators.max(130),
    Validators.required,
  ]);

  timer: number = 0;
  private timerSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private startTimer(): void {
    this.timerSubscription = interval(10).subscribe(() => {
      // increments every 5 millisecs
      this.timer += 5;
    });
  }
}
