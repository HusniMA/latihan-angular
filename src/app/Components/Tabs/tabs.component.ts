import { Component} from '@angular/core';
import {TabComponent} from './tab.component';
import {faThLarge, faThList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="section-heading d-flex align-items-center justify-content-between">
      <h6 class="ml-1">All Products</h6>
      <div class="layout-options">
        <a *ngFor="let tab of tabs; let i = index" class="{{tab.activeClass}}" (click)="selectTab(tab)">
          <ng-template *ngIf="i == 0; then grid; else list">
          </ng-template>
          <ng-template #grid>
            <fa-icon [icon]="faThLarge"></fa-icon>
          </ng-template>
          <ng-template #list>
            <fa-icon [icon]="faThList"></fa-icon>
          </ng-template>
        </a>
      </div>
    </div>
    <ng-content></ng-content>
  `,
  styleUrls: ['../../Pages/product/product.component.css']
})

export class TabsComponent {
  faThLarge = faThLarge;
  faThList = faThList;
  tabs: TabComponent[] = [];

  selectTab(tab: TabComponent) {
    this.tabs.forEach((t) => {
      t.active = false;
      t.activeClass = '';
    });
    tab.active = true;
    tab.activeClass = 'active';
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
      tab.activeClass = 'active';
    }
    this.tabs.push(tab);
  }
}
