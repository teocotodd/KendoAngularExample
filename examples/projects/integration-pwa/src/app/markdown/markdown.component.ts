import { Component, Input, OnChanges } from '@angular/core';
import * as marked from 'marked';

@Component({
    selector: 'app-markdown',
    template: '<div [innerHTML]="convertedData"></div>'
})
export class MarkdownComponent implements OnChanges {
    @Input() public data: string;
    public convertedData: string;

    ngOnChanges() {
        const md = marked.setOptions({});
        this.convertedData = md.parse(this.data);
    }
}
