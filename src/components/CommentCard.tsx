/* eslint-disable array-callback-return */
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import './CommentCard.css'
import { useContext } from 'react';
import { Context } from '../index';
import { user } from '../util/dataBase';

export interface Comment {
    id:any,
    name: string,
    email: string,
    body: string,
    postId:number
}

interface CommentCardContext{
    isAuth:boolean
    userIn:user
}

const CommentCard = (filmId:any) => {

    const {isAuth, userIn} = useContext<CommentCardContext>(Context)

    const [newCommentName, setNewCommentName] = useState('')
    const [newCommentEmail, setNewCommentEmail] = useState('')
    const [newCommentBody, setNewCommentBody] = useState('')

    const [comments, setComments] = useState<Comment[] | []>([])

    function getComments(){
        const src = 'https://jsonplaceholder.typicode.com/comments'
         axios.get(src)
        .then((responce:any)=>setComments(responce.data));
    }

    useEffect(()=>{ 
        getComments()
},[])

    

    const addNewComment = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(!isAuth){
            const newComment:Comment = {
                name: newCommentName,
                 body: newCommentBody,
                 email: newCommentEmail,
                 postId: filmId.filmId,
                 id: comments[comments.length-1]
        }
        setComments([newComment,...comments])
        }else{
                const newComment:Comment = {
                    name: userIn.name,
                     body: newCommentBody,
                     email: userIn.email,
                     postId: filmId.filmId,
                     id: comments[comments.length-1]
            }
            setComments([newComment,...comments])
            }    
        }

  return (
    <div>
        <form>
            {!isAuth
            &&
            <div className='nameEmailComm'>
            <div >
            <label htmlFor='text' children='Імя:'/>
            <input
                onChange={e=>setNewCommentName(e.target.value)}
                value={newCommentName}
                type='text'
                name='name'
         />
        </div>
        <div>
        <label htmlFor='email' children='Пошта:'/>
            <input
                onChange={e=>setNewCommentEmail(e.target.value)}
                value={newCommentEmail}
                name='email'
                type='email'
         />
        </div>
        </div>
            }
            <div className='commentInp'>
            <label htmlFor='commText' children='Коментар:'/>
            <div><textarea 
                onChange={e=>setNewCommentBody(e.target.value)}
                value={newCommentBody}
                    name='commText'
            /></div>
        </div>
        <button className='commButt' onClick={addNewComment}>Залишити коментар</button>
        </form>

        {comments.map((e:Comment,i:number)=>{
            if(e.postId===filmId.filmId){
                return(
                    <div key={i} className='commentCard'>
                    <div className='userData'>
             <div>
                 {e.name} |
             </div>
             <div>
                 {e.email} 
             </div>
         </div>
         <div className='commentBody'>{e.body}</div>
         </div>
                )
            }
        })}
        
         
    
    </div>
  )
}

export default CommentCard