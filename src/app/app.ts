import { Component, signal } from '@angular/core';

import { HelloComponent } from './hello/hello';

@Component({
  selector: 'app-root',
  imports: [HelloComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('simple-app');
}
