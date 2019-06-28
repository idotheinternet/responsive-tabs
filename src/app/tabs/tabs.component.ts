import { Component, Input, AfterViewInit } from '@angular/core';
import { TabsService } from './tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements AfterViewInit {

  constructor(public tabsService: TabsService) {}

  @Input() level: number;
  @Input() tabs: object[] = [];
  tabsCon: Element;

  excWidth: boolean = false;
  idx: number = 0;
  toggled: boolean = false;
  overflowCount: number = 0;
  width: number = 245;

  toggleMenu() {
    this.toggled = !this.toggled;
  }

  activateTab(idx: number) {
    this.idx = idx;
    if(this.toggled) this.toggled = false;
    this.getOverflow();
  }

  removeTab(idx: number) {
    if(idx === this.idx) this.idx = idx + (idx < this.tabs.length-1 ? 0 : -1); 
    this.tabs.splice(idx, 1);
    if(this.checkOverflow(false)) this.overflowCount--;
    if(!this.overflowCount) this.excWidth = false;
    this.width -= 200;
  }

  appendTab() {
    const entities: string[] = ['Installer ', 'Project ', 'Something '],
    random: string = entities[Math.floor(Math.random() * entities.length)] + Math.random().toString().substring(2, 9), 
    overflow: boolean = this.checkOverflow(true);
    this.width += 200;
    if(overflow) {
      this.tabs.splice(this.idx = 1, 0, {label: random, isDynamic: true});
      this.overflowCount++
    } else {
      this.tabs[overflow ? 'unshift' : 'push']({
        label: random,
        isDynamic: true
      });
      this.idx = this.tabs.length-1;
    }
  }

  getOverflow(): number {
    const count: number = this.overflowCount = Math.floor((this.width - this.tabsCon.parentElement.offsetWidth) / 200);
    if(count > 0 && this.idx >= this.tabs.length - count) {
      const idx: number = this.idx,
      item: object = this.tabs[idx];
      this.tabs.splice(idx, 1);
      this.tabs.splice(this.idx = 1, 0, item);
    }
    return this.overflowCount;
  }
  
  checkOverflow(onAppend: boolean): boolean {
    return this.excWidth = ((this.width + (onAppend ? 200 : 0)) - this.tabsCon.parentElement.offsetWidth) >= 100;
  }

  ngAfterViewInit() {
    this.tabsCon = (<HTMLDivElement>document.getElementsByClassName("tabs")[this.level-1]);
    this.tabsService.instances.push(this);
  }

}



