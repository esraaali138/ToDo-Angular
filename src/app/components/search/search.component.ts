import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  isShow: boolean = true;

  showAccordian() {
    this.isShow = !this.isShow;
  }
}
