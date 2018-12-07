import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "redux-app";
  age: number = 23;
  isTrue: boolean = false;

  reverseTrue = () => {
    this.isTrue = !this.isTrue;
  };

  myArray: Array<object> = [
    { name: "Arnold" },
    { name: "Franek" },
    { name: "Stanisław" }
  ];




}
