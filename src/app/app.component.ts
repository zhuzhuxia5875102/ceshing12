import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="mydiy">app组件mydiy</div>
    <button nz-button nzType="primary">app组件button，此时没有zorro</button>
    <app-me></app-me>
  `,
})
export class AppComponent {
}
