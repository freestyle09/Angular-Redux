import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {ADD_TODO, FETCH_CATS, REMOVE_TODO} from './actions';
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "./store";

@Injectable({
  providedIn: "root"
})
export class CatsService {
  private readonly url = "http://localhost:8000";
  constructor(private http: HttpClient, private ngRedux: NgRedux<IAppState>) {}

  loadCats() {
    // This action is for handling request from server
    // in store we can set isFetching: true and show loading icon
    // this.ngRedux.dispatch({type: 'FETCH_CATS_REQUEST'});

    this.http.get(this.url + "/api/cats").subscribe(
      res => {
        this.ngRedux.dispatch({ type: FETCH_CATS, cats: res });
      },
      err => {
        // display error if something goes wrong
        // this.ngRedux.dispatch({ type: "FETCH_CATS_ERROR" });
      }
    );
  }

  sendCat(item) {
    this.http.post(this.url + "/api/cats", item).subscribe(resp => {
      this.ngRedux.dispatch({type: ADD_TODO, todos: resp})
    });
  }

  deleteCat(id) {
    this.http.delete(this.url + "/remove_cat/" + id).subscribe(resp => {
      this.ngRedux.dispatch({ type: REMOVE_TODO, id });
    });
  }
}
