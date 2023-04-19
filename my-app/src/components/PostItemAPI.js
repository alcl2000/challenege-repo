import React from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'

export default function PostItemAPI(props) {
  return (
          props.savedPosts.map( post =>  {
            const {id, user, type, tags, webformatURL} =post
                return (
                  <div  className={css.SearchResults} key={id}>
                    <p>Artwork type: {type}</p>
                    <p>Artist: {user}</p>
                    <img src={webformatURL} alt="" />
                    <p>Description: {tags}</p>
                  </div>
                )
            })
  )
}
