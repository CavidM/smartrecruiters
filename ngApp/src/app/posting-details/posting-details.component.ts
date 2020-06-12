import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostingsService } from '../services/postings.service';
import { Posting, IPosting } from './posting';

@Component({
  selector: 'app-posting-details',
  templateUrl: './posting-details.component.html',
  styleUrls: ['./posting-details.component.scss'],
  providers: [PostingsService]
})
export class PostingDetailsComponent implements OnInit {

  posting: IPosting;
  postingId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postingsService: PostingsService
  ) { 
    this.posting = new Posting()
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {

      this.postingId = params.get("postingId");

      this.getPosting();
    })
  }

  getPosting() {
    this.postingsService.getPosting(this.postingId)
      .subscribe(posting => (this.posting.load(posting)))
  }
}
