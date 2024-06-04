import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {LANG_CONFIG} from "./token";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.less'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MeComponent {
  visible = false;
  isVisible = false;
    constructor(@Inject(LANG_CONFIG) private langConfig: string) {
      console.log(langConfig);
    }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
