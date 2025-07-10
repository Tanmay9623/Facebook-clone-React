import { MoreVert } from '@mui/icons-material'
import { Users } from '../../Dummy'
import React,{useState}from 'react'
import './Post.css'
export const Post = ({post}) => {
 let[like, setLike] =  useState(post.like);
 let[isLiked, setIsLiked] =  useState(false);
 let likeHandler = () => {
  setLike(isLiked ? like - 1 : like + 1);
  setIsLiked(!isLiked);}
 
  return (
    <>
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={post.photo} alt="" className="postProfileImg" 
            />
            ..

<span className="postUsername">{Users.filter((u)=>u.id === post?.userId)[0].username}</span>
<span className="postDate">{post.date}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="src/assets/like.png" alt="" className="likeIcon"  onClick={likeHandler}/>
            <img src="src/assets/heart.png" alt="" className="likeIcon" onClick={likeHandler} />
            <span className="postLikeCounter">{like} people Like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}