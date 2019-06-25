import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  constructor(){}

  @Input() level: number;
  @Input() tabs: [];

  activateTab(idx: number) {
    console.log(this.tabs[idx]);
  }

}
