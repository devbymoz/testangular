import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button1',
  standalone: true,
  imports: [],
  templateUrl: './button1.component.html',
  styleUrl: './button1.component.css',
})
export class Button1Component {
 @Input() messageEnfant: string = "Message depuis lenfant"
 @Output() messageParent: EventEmitter<string> =  new EventEmitter();

}
