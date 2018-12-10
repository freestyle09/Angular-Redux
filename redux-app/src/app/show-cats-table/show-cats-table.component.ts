import { Component, OnInit } from '@angular/core';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-show-cats-table',
  templateUrl: './show-cats-table.component.html',
  styleUrls: ['./show-cats-table.component.scss']
})
export class ShowCatsTableComponent implements OnInit {
  @select('todos') cats;
  constructor() { }

  ngOnInit() {
  }

}
