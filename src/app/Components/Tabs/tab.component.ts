import { Component, Input } from '@angular/core';
import {TabsComponent} from './tabs.component';

@Component({
  selector: 'app-tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `
})

export class TabComponent {

  @Input() tabIcon: string;
  @Input() active = false;
  @Input() activeClass = '';
  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }
}
