import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() searchedItem = new EventEmitter<string>();

  search(searchedItem: any) {
    this.searchedItem.emit(searchedItem);
  }
}
