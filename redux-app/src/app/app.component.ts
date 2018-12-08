import { Component, OnInit } from "@angular/core";
import { CatsService } from "./cats.service";
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "./store";
import { ADD_TODO } from "./actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  cats: object;
  title = "redux-app";
  @select()
  todos;
  // @select(['messaging', 'newMessages']) newMessages;
  // @select((s: IAppState) => s.messaging.newMessages) newMessages;

  constructor(
    private catService: CatsService,
    private ngRedux: NgRedux<IAppState>
  ) {
    catService.getAllCats().subscribe(res => {
      this.cats = res;
    });
    // Without select operator
    // ngRedux.subscribe(() => {
    //   let store = ngRedux.getState();
    //   this.counter = store.counter;
    // });
  }

  addTodo(input) {
    if (!input.value) return;
    this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });
    input.value = "";
  }

  ngOnInit(): void {}

  // // REDUX
  //
  // // Reducer - manage the state updates
  // counter = (state = 0, action) => {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return state + 1;
  //     case "DECREMENT":
  //       return state - 1;
  //     default:
  //       return state;
  //   }
  // };
  //
  // store = createStore(this.counter);
  //
  // render = () => {
  //   // @ts-ignore
  //   document.getElementById("redux").innerText = this.store.getState();
  // };
  // increment = () => {
  //   console.log(this.store.getState());
  //   // Dispatching an action
  //   this.store.dispatch({ type: "INCREMENT" });
  //   console.log(this.store.getState());
  // };
  // decrement = () => {
  //   this.store.dispatch({ type: "DECREMENT" });
  // };
  // ngOnInit(): void {
  //   // Get current state
  //   console.log(this.store.getState());
  //
  //   // Subscribe - Callback function anytime that action has been dispatch
  //   this.store.subscribe(this.render);
  //   this.render();
  // }
}
