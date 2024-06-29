import { Component, EventEmitter, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatInputModule,
    MatButton
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  text="";

  InputChange(event: any) {
    console.log("Entered!", event.target.value);
    this.search.emit(this.text);
  }

  OnTyping(event: any){
    console.log("Typing!!", event.target.value);
    this.text = event.target.value;
  }

  OnSearch() {
    console.log("Searching!");
    this.search.emit(this.text);
  }
}