import { Component, OnInit } from "@angular/core";
import { CatsService } from "./cats.service";
import { createStore } from "redux";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  cats: object;
  title = "redux-app";
  age: number = 23;
  isTrue: boolean = false;

  constructor(private catService: CatsService) {
    catService.getAllCats().subscribe(res => {
      this.cats = res;
    });
  }

  // REDUX

  // Reducer - manage the state updates
  counter = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };

  store = createStore(this.counter);

  render = () => {
    // @ts-ignore
    document.getElementById('redux').innerText = this.store.getState();
  };
  click = () => {
    this.store.dispatch({ type: "INCREMENT" });
  }
  ngOnInit(): void {

    // Dispatching an action
    // this.store.dispatch({ type: "INCREMENT" });

    // Get current state
    console.log(this.store.getState());

    // Subscribe - Callback function anytime that action has been dispatch
    this.store.subscribe(this.render);
    this.render();
  }
}
