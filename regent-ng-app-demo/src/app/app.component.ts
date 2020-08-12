import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'regent-ng-app-demo';

  trySomething() {
    console.log('Hello!');
  }
}
