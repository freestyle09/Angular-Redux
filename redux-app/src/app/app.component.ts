import { Component } from "@angular/core";
import { CatsService } from "./cats.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  cats: object;
  title = "redux-app";
  age: number = 23;
  isTrue: boolean = false;

  constructor(private catService: CatsService) {
    catService.getAllCats().subscribe(res => {
      this.cats = res;
    });
  }
}
