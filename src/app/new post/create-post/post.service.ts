import { Post } from "./post.model"
import {Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import {Subject} from 'rxjs'
// using the service can be done in 2 ways by adding the service in the module.ts file inside the partition or by using INJECTABLE

@Injectable({providedIn : 'root'})

export class PostService{
   private posts:Post[] = [];
   private postUpdated = new Subject <Post[]>(); 

   constructor(private http : HttpClient)
   {

   }
   getPost()
   {
      this.http.get<{message :string , posts :Post[]}>("http://localhost:3000/api/posts")
               .subscribe((postsData) =>{
                  this.posts = postsData.posts;
                  // this.postUpdated.next([...this.posts]);
               });
      
   }

   getPostUpdatedListener(){
      return this.postUpdated.asObservable(); 
   }

   addPost(user_title:string, user_content:string)
   {
    const post:Post = {id:null,title: user_title, content: user_content};
    this.http.post<{message :string}>("http://localhost:3000/api/posts",post)
            .subscribe((responseData)=>{
                 console.log( responseData.message);
                 this.posts.push(post)
                 this.postUpdated.next([...this.posts])
            })

   }

}