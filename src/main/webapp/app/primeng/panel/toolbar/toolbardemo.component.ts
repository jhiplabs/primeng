import { Component, OnInit } from '@angular/core';
import { Message, MenuItem } from 'primeng/components/common/api';

@Component({
    selector: 'jhi-toolbar',
    templateUrl: './toolbardemo.component.html',
    styles: []
})
export class ToolbarDemoComponent implements OnInit {
    items: MenuItem[];
    search: string;
    ngOnInit() {
        this.items = [{ label: 'Cut', icon: 'fa fa-cut' }, { label: 'Copy', icon: 'fa fa-copy' }, { label: 'Paste', icon: 'fa fa-paste' }];
    }
}
