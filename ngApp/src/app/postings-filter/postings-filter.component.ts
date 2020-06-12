import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-postings-filter',
  templateUrl: './postings-filter.component.html',
  styleUrls: ['./postings-filter.component.scss'],
  providers: [CommonService]
})
export class PostingsFilterComponent implements OnInit {

  departments: [];

  filter =  {
    country: '',
    department: ''
  }

  @Output()
  change: EventEmitter<object> = new EventEmitter<object>();

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {

    this.commonService.getDepartments()
      .subscribe(departments => (this.departments = departments.content))
  }

  changeFilter(filter): void {
    // console.log(filter);
    this.filter = {
      ...this.filter,
      ...filter
    }

    this.change.emit(this.filter)

  }

}
