import { Component, OnInit } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store";

@Component({
  selector: "app-other-cats",
  templateUrl: "./other-cats.component.html",
  styleUrls: ["./other-cats.component.scss"]
})
export class OtherCatsComponent implements OnInit {
  @select('lastUpdate') lastUpdate;
  @select('todos') todos;
  constructor(private ngRedux: NgRedux<IAppState>) {}

  deleteAll() {
    this.ngRedux.dispatch({type: "DELETE_ALL_TODOS"})
  }

  ngOnInit() {}
}
