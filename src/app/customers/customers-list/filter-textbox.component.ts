import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  template: `
    Filter: <input type="text" [(ngModel)]="filter"/>
  `
})
export class FilterTextboxComponent implements OnInit {

  private _filter: string;
  @Input() get filter() {
    // console.log('get filter value', this._filter);
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter);
    // console.log('set filter value', this._filter);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {

  }

}
