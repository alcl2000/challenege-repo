import React from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'

export default function PostItem(props) {
  return (
          props.savedPosts.map( post =>  {
                return (
                  <div  className={css.SearchResults} key={post.title}>
                    <p>Title: {post.title}</p>
                    <p>Artist: {post.name}</p>
                    <img src={post.image} alt="" />
                    <p>Description: {post.description}</p>
                  </div>
                )
            })
  )
}
