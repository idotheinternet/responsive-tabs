import { Injectable } from '@angular/core';
import { TabsComponent } from './tabs.component';

@Injectable({providedIn: 'root'}) export class TabsService {
    constructor() {
        this.isMobile = document.body.offsetWidth <= 500; 
        window.onresize = ()=> {
            let i: number = 0;
            const inst = this.instances,
            len = inst.length;
            for(; i < len; i++) {
                inst[i].getOverflow(); 
                this.isMobile = document.body.offsetWidth <= 500;
            }
        }
    }
    instances: TabsComponent[] = [];
    isMobile: boolean = false;
}