import React, { useEffect, useState } from 'react'
import css from './css/Content.module.css'
import axios from 'axios'
import API_KEY from '../secrets.js'
import {savedPosts} from '../posts.json'
import Loader from './Loader'
import PostItemAPI from './PostItemAPI'


export default function ContentAPIHooks() {
  const [isLoaded, loadPosts] = useState(false);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([])

  useEffect( () =>{
    fetchImages()
  },[]
  );

  const fetchImages = async () =>{
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
    const fetchedPosts = response.data.hits;
    loadPosts(true)
    setPosts(fetchedPosts)
    setSavedPosts(fetchedPosts)
    
  }

  const handleChange = (e) => {
    const user = e.target.value.toLowerCase()
    const filteredPosts = savedPosts.filter( post => {
      return post.user.toLowerCase().includes(user);
    })
    setPosts(filteredPosts)
  }


  return (
          <div> 
              <div className={css.TitleBar}>
                My Photos
                <form>
                  <label htmlFor="searchInput">Search:</label>
                  <input type="search" placeholder="By Artist" id="searchInput" onChange={(e)=> handleChange(e)}/>
                </form>
                <h4>posts found: {posts.length}</h4>
              </div>
            <div className={css.SearchResults}>
                {
                  isLoaded === false ?
                    <Loader /> :
                    < PostItemAPI savedPosts={posts}/>
                }
            </div>
          </div>
  )
}
