import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/app/Models/Post'

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(posts: Post[], texto: string): Post[] {
    if(texto.length === 0 || texto == ' ' || texto == null){
      return posts;
    }
    texto = texto.toLocaleLowerCase();

    return posts.filter( post => {
      return post.title.toLocaleLowerCase().includes(texto);
    })
  }

}
