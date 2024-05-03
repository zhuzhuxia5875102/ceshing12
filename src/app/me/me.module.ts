import {Injector, NgModule, NgZone} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeComponent} from "./me.component";
import {ChildrenComponent} from "./children/children.component";
import {NzButtonModule} from "ng-zorro-antd/button";
import {createCustomElement} from "@angular/elements";
import {BrowserModule} from "@angular/platform-browser";
import {shareNgZone} from "@angular-architects/module-federation-tools";
import { ContentComponent } from './content/content.component';
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzStepsModule} from "ng-zorro-antd/steps";



@NgModule({
  declarations: [
    MeComponent,
    ChildrenComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NzButtonModule,
    NzBadgeModule,
    NzStepsModule,
  ],
  exports:[
    MeComponent,
    ChildrenComponent
  ],
  bootstrap: []
})
export class MeModule {

  constructor(private injector: Injector,private ngZone: NgZone) {
    shareNgZone(ngZone);
  }

  ngDoBootstrap() {
    const ce = createCustomElement(MeComponent, {injector: this.injector});
    customElements.define('angular1-element', ce);
  }
}
