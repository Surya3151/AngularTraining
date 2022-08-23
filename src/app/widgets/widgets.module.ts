import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppFooter } from "./components/appFooter/appFooter.component";
import { AppHeader } from "./components/appHeader/appHeader.components";
import { BmiCalcApp } from "./components/bmicalculator/bmicalculator.component";

@NgModule({
    declarations: [AppFooter, AppHeader, BmiCalcApp],
    exports: [AppFooter, AppHeader, BmiCalcApp],
    imports: [FormsModule]
  })

export class WidgetsModule{

}