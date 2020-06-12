import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostingsListComponent } from './components/postings-list/postings-list.component';
import { PostingDetailsComponent } from './posting-details/posting-details.component';


const routes: Routes = [
  { path: '', component: PostingsListComponent },
  { path: 'postings/:postingId', component: PostingDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
