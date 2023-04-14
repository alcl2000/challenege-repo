import React from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'

export default function Content(){
    return (
      <div>
        <div className={css.TitleBar}>
            My Photos
        </div>
        <div>
          <PostItem />
        </div>
      </div>
    )
}

