import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}

  public getClipInfo(event: Event): void {
    console.log(event)
  }
}
