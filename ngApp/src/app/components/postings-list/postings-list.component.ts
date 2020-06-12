import { Component, OnInit, EventEmitter } from '@angular/core';
import { PostingsService } from 'src/app/services/postings.service';

@Component({
  selector: 'app-postings-list',
  templateUrl: './postings-list.component.html',
  styleUrls: ['./postings-list.component.scss'],
  providers: [PostingsService]
})
export class PostingsListComponent implements OnInit {
  postings: any[];
  filter = {
    country: '',
    department: ''
  }

  constructor(private postingsService: PostingsService) { }

  ngOnInit(): void {
    this.getPostings();
  }

  getPostings(): void {
    this.postingsService.getPostings(this.filter)
      .subscribe((postings: any) => (this.postings = postings.content));
  }

  filterChange(filter) {

    if (filter instanceof Event) {
      return;
    }

    this.filter = filter;

    this.getPostings();
  }

}
