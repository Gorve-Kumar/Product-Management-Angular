import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
        <h4 class="p-2 bg-blue-900 text-white">{{title}}</h4>
        `,
  styles: `
    h4{
      text-align: center;
    }
  `
})
export class HeaderComponent {
  title = "Product Management App"
}
