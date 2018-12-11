import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { OtherCatsComponent } from "./other-cats/other-cats.component";
import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { IAppState, rootReducer, INITIAL_STATE } from "./store";
import { ShowCatsTableComponent } from "./show-cats-table/show-cats-table.component";
import { FormsModule } from "@angular/forms";
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [AppComponent, OtherCatsComponent, ShowCatsTableComponent, SummaryPipe],
  imports: [HttpClientModule, BrowserModule, NgReduxModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
