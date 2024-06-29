import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatInputModule,
    MatButton,
    FormsModule,
    RouterLink
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  search_text="";
  // Data directly flow from HTML file

  /* // NOT REQUIRED NOW WITH TWO WAY BINDING
  InputChange(event: any) {
    // console.log("Entered!", event.target.value);
    console.log("Entered!", this.search_text);
    this.search.emit(this.search_text);
  }

  OnTyping(event: any){
    // console.log("Typing!!", event.target.value);
    console.log("Typing!!", this.search_text);
    // this.text = event.target.value;
  }*/

  OnSearch() {
    // console.log("Searching!");
    this.search.emit(this.search_text);
  }
}