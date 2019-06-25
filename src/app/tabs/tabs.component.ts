import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  constructor(){
    console.log(this.tabsCon);
  }

  @Input() level: number;
  @Input() tabs: object[] = [];
  @ViewChild('tabsCon') tabsCon: HTMLDivElement;

  idx: number = 0;

  activateTab(idx: number) {
    this.idx = idx;
  }

  removeTab(idx: number) {
    if(idx === this.idx) this.idx = idx + (idx < this.tabs.length-1 ? 0 : -1); 
    this.tabs.splice(idx, 1);
  }

  appendTab() {
    const entities: string[] = ['Installer ', 'Project ', 'Something '],
    random: string = entities[Math.floor(Math.random() * entities.length)] + Math.random().toString().substring(2, 9);
    this.tabs.push({
      label: random,
      isDynamic: true
    });
    this.idx = this.tabs.length-1;
  }

}
