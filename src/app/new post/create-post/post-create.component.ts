import { Component} from "@angular/core";
import { NgForm } from "@angular/forms";

import{ Post } from "./post.model";
import { PostService } from "./post.service";


@ Component({
    selector: 'app-post-create' ,
    templateUrl: './post-create.component.html',
    styleUrls:['./post-create.component.css'] 
})

export class PostCreateComponent{
    title ="";
    content ="";

    constructor( public send_data_to_service : PostService)
    {

    }
    onAddPost(form_data: NgForm)
        {
            if (form_data.invalid)
            {
                return;
            }
            this.send_data_to_service.addPost(form_data.value.title,form_data.value.content);
            form_data.resetForm()
        }

    // user_input = ""
    // onUserInput(abc: HTMLTextAreaElement)
    // {
    //     this.user_input = abc.value
    // }


}