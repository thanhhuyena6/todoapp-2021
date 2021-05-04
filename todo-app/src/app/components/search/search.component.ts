import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {
  @Output() searchTodo: EventEmitter<string> = new EventEmitter();
  @Output() isChecked: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search(event: any) {
    this.searchTodo.emit(event.target.value);
  }
  check(event: any) {
    this.isChecked.emit(event.target.checked);
  }
}
