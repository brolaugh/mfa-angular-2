import { Component } from '@angular/core';
import { format } from 'date-fns'
@Component({
  selector: 'ng-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'login';
  public readonly currentDate = format(new Date(2000, 12, 12), 'yyyy-mm-DD');
}
