import {Component, Input, OnInit} from '@angular/core';
import {ClipInfoService} from '../../services/clip-info.service';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SortTypes} from '../../enum/sort-types.enum';
import {SortTypesEnum} from '../../models/sort-types-enum';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss', '../../app.component.scss']
})
export class SearchSettingsComponent implements OnInit {

  @Input() private clipInfo: ClipInfoFromStatistics[];

  public filterForm: FormGroup;
  public sortTypes: SortTypesEnum = SortTypes;

  constructor(private clipInfoService: ClipInfoService,
              private formBuilder: FormBuilder) { }

  private initFilterForm(): void {
    this.filterForm = this.formBuilder.group({
      filterValue: null,
      sortType: null,
      sortOrder: null
    });
  }

  public ngOnInit(): void {
    this.initFilterForm();
  }

  public sortClips(sort: Sort): void {
    this.clipInfoService.sortKind.next(sort);
  }

  public setFilterValue(filterValue: string): void {
    this.clipInfoService.filterValue.next(filterValue);
  }
}
