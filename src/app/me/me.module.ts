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

import { InjectionToken } from '@angular/core';
import {LANG_CONFIG} from "./token";
import {OverlayContainer} from "@angular/cdk/overlay";
import {OverlayOutletContainerService} from "./overla-outlet-container.service";
import {NzModalModule} from "ng-zorro-antd/modal";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDrawerModule} from "ng-zorro-antd/drawer";


@NgModule({
  declarations: [
    MeComponent,
    ChildrenComponent,
    ContentComponent
  ],
  providers:[ {
    provide: LANG_CONFIG,
    useValue: 'en-US' // 默认语言配置
  },
    {provide:OverlayContainer,useClass:OverlayOutletContainerService}
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzBadgeModule,
    NzStepsModule,
    NzModalModule,
    NzDropDownModule,
    NzIconModule,
    NzDrawerModule,
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
