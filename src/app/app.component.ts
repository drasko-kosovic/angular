import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  boja = false;
  stil: string;

  pritisni(): any
  {
    this.boja = true;
  }

  prtitisniStil() {
    this.stil ='ana';
  }
}
