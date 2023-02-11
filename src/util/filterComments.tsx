import { Comment } from "../components/CommentCard"

export const filterComments = (comments:Comment[],filmId:number) =>{
    let res
    if(filmId<480){
        for(let i=filmId; i<filmId+20;i++){
            res = comments.filter(e=>e.id!==i)
        }
    }
     return res
}   