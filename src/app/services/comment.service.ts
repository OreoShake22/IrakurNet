import { Injectable } from '@angular/core';
import { RestService } from  './../providers/rest.service';
import { NavController } from '@ionic/angular';
import { Comment } from '../Models/comment'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private  comments : Comment[] = [];
  constructor(public  navCtrl: NavController, public  restProvider: RestService) { 
    this.restProvider.getComment().subscribe((comments : Comment[])=>{

      this.comments = comments;
      
      });
  }

  onGetComments(){

    return this.restProvider.getComment()
  }

  onGetComment(id){

    return this.restProvider.getCommentById(id)
  }

  onCreateComment(data) {

    this.restProvider.addComment(data).subscribe();
  }

  onUpdateComment(comment) {
    this.restProvider.updateComment(comment).subscribe((updatedComment) => {
      
    });
  }

  onRemoveComment(comment) {
    this.restProvider.deleteCommentById(comment.id).subscribe(() => {
      this.comments = this.comments.filter((e) =>  e.id !== comment.id);
    });
  }
}
