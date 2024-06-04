import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Button1Component } from './components/buttons/button1/button1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Button1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Titre du H1 composant app';
  titleH2: string = 'Titre H2 du composant app';

  displayLog() {
    console.log("Hello depuis la methode displayLog");
  }

  getValueInput(e: Event) {
    console.log((e.target as HTMLInputElement).value);
  }

  handleEvent(event: string) {
    console.log(event);
  }

  @ViewChildren('child2') children!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.children.forEach((child) => {
      console.log(child.nativeElement);
    });
  }
}
