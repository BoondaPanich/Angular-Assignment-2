import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowAnimalDirective } from './show-animal.directive';
import { ChangeColorDirective } from './change-color.directive';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ShowAnimalDirective,
    ChangeColorDirective,
    FormsModule,
  ],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  selectedAnimal: string | undefined;
  animalColor: string = 'black';
  animals: string[] = [
    'cat',
    'dog',
    'duck',
    'panda',
    'camel',
    'squirrel',
    'frog',
    'bear',
    'chick',
  ];
}
