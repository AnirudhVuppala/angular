import { Component, OnInit, OnDestroy} from '@angular/core';
import{ Post } from '../post.model'
import{PostService} from '../post.service'
import {Subscription} from 'rxjs';  

@Component({
  selector: 'app-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
// posts =[
//         {title:"First Post", content: "This is the first post\'s content"},
//         {title:"Second Post", content: "This is the second post\'s content"},
//         {title:"Third Post", content: "This is the third post\'s content"}
// ];
posts:Post[] =[];
private postSub : Subscription;

// store_service_data: PostService            -----(I)
// constructor(service_data : PostService)
// {
//   this.store_service_data = service_data -------- (II)
// }

// rather than writing the above code we can acheive it also by the below code using the 'PUBLIC' keyword
// PUBLIC keyword will automatically create a property(variable) with the same name for which public keyword is used(step (I)). 
// The data will automatically get saved into that property(step II is acheived)
// below code will store the fetched data into service_data 
constructor(public service_data : PostService)
{

}
ngOnInit(){
    this.service_data.getPost();
    this.postSub=this.service_data.getPostUpdatedListener().subscribe((posts:Post[]) => {
                                                                          this.posts = posts
    });
}
ngOnDestroy(){
    this.postSub.unsubscribe()
}
}