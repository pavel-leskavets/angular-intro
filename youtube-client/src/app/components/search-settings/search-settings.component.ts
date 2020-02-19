import {Component, Input, OnInit} from '@angular/core';
import {ClipInfoService} from '../../services/clip-info.service';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SortParameters} from '../../models/sort-parameters';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss', '../../app.component.scss']
})
export class SearchSettingsComponent implements OnInit {

  @Input() private clipInfo: ClipInfoFromStatistics[];

  public filterForm: FormGroup;

  constructor(private clipInfoService: ClipInfoService,
              private formBuilder: FormBuilder) { }

  private initFilterForm(): void {
    this.filterForm = this.formBuilder.group({
      filterValue: null
    });
  }

  public ngOnInit(): void {
    this.initFilterForm();
  }

  public sortClips(sortParameters: SortParameters): void {
    this.clipInfoService.sortKind.next(sortParameters);
  }
}
