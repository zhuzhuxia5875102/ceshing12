import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="mydiy">远程应用的app组件的mydiy</div>
    <button nz-button nzType="primary">远程应用app组件button，此时没有zorro</button>
    <app-me></app-me>
  `,
})
export class AppComponent {
}
