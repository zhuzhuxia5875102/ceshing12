import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable()
export class OverlayOutletContainerService extends OverlayContainer{
  /// 重写Create Container
  protected override _createContainer(): void {
    /// 保持样式不变
    const containerClass = 'cdk-overlay-container';
    const container = this._document.createElement('div');
    container.classList.add(containerClass);

    // 制定Dom元素插入位置
    this._document.body.querySelector('angular1-element')?.shadowRoot?.appendChild(container);
    this._containerElement = container;
  }

}
