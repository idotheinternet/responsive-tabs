import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterViewInit {



  @Input() level: number;
  @Input() tabs: object[] = [];
  @ViewChild('tabsCon', {read: ElementRef}) tabsCon: ElementRef;

  excWidth: boolean = false;
  idx: number = 0;
  toggled: boolean = false;
  overflow: object[] = [];
  item: string = "";
  overflowCount: number = 0;

  toggleMenu() {
    this.toggled = !this.toggled;
  }

  activateTab(idx: number) {
    this.idx = idx;
    if(this.toggled) this.toggled = false;
  }

  removeTab(idx: number) {
    if(idx === this.idx) this.idx = idx + (idx < this.tabs.length-1 ? 0 : -1); 
    this.tabs.splice(idx, 1);
    if(this.checkOverflow(false)) this.overflowCount--;
    console.log(this.overflowCount);
    if(!this.overflowCount) this.excWidth = false;
  }

  appendTab() {
    const entities: string[] = ['Installer ', 'Project ', 'Something '],
    random: string = entities[Math.floor(Math.random() * entities.length)] + Math.random().toString().substring(2, 9), 
    overflow: boolean = this.checkOverflow(true);
    if(overflow) {
      this.tabs.splice(this.idx = 1, 0, {label: random, isDynamic: true});
      this.overflowCount++
    } else {
      this.tabs[overflow ? 'unshift' : 'push']({
        label: this.item = random,
        isDynamic: true
      });
      this.idx = this.tabs.length-1;
    }
  }

  checkOverflow(onAppend: boolean): boolean {
      const tabsCon: HTMLDivElement = this.tabsCon.nativeElement;
      return this.excWidth = tabsCon.offsetWidth + (onAppend ? 240 : 0) > tabsCon.parentElement.offsetWidth;
  }

  ngAfterViewInit() {
    this.item = this.tabs[0]['label'];
    //console.log(this.tabsCon.nativeElement.offsetWidth);
    //window.onresize = ()=> {this.checkOverflow()}
  }

}
