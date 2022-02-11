import { Component } from '@angular/core';
import * as dateFns from 'date-fns';

@Component({
  selector: 'ng-angular-login-entry',
  template: `<div class="remote-entry">
    <h2>login's Remote Entry Component</h2>
    {{currentDate }}
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  public readonly currentDate = dateFns.format(new Date(2000, 12, 12), 'yyyy-mm-dd');
}
