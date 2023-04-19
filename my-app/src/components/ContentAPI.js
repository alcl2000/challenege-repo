import React, { Component, useEffect, useState } from 'react'
import css from './css/Content.module.css'
import axios from 'axios'
import API_KEY from '../secrets.js'
import {savedPosts} from '../posts.json'
import Loader from './Loader'
import PostItemAPI from './PostItemAPI'

// the class component
export default class Content extends Component{
  constructor(props){
    super(props)
    this.state = {
      'isLoaded' : false,
      'posts': [],
      savedPosts: []
    }
  }

  componentDidMount(){
    this.fetchImages();
  }

  async fetchImages(){
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
    const fetchedPosts = response.data.hits;
    this.setState({
          'isLoaded': true,
          'posts': fetchedPosts,
          savedPosts : fetchedPosts
    })
  }

  handleChange = (event) => {
    const name = event.target.value.toLowerCase()
    const filteredPosts = this.state.savedPosts.filter( post => {
        return post.user.toLowerCase().includes(name);
    })
    this.setState({
      'posts': filteredPosts
    })
  }

  render(){
      return (
            <div>               
                <div className={css.TitleBar}>
                    My Photos
                    <form>
                      <label htmlFor="searchInput">Search:</label>
                      <input type="search" placeholder="By Artist" id="searchInput" onChange={(e)=> this.handleChange(e)}/>
                    </form>
                    <h4>posts found: {this.state.posts.length}</h4>
                  </div>
                <div className={css.SearchResults}>
                    {
                      this.state.isLoaded === false ?
                        <Loader /> :
                        < PostItemAPI savedPosts={this.state.posts}/>
                    }
                </div>
              </div>
      );
     };
}

// functional component with hooks

// export default function Content() {

//   const [isLoaded, loadPosts] = useState(false);
//   const [fetchedPosts, setFetchedPosts ] = useState([]);

//   useEffect(()=>{
//     setTimeout(() =>{
//       loadPosts(true),
//       setFetchedPosts(savedPosts)
//     },1000)
//   },[])

//   const handleChange = (event) => {
//     const name = event.target.value.toLowerCase()
//     const filteredPosts = savedPosts.filter( post => {
//         return post.name.toLowerCase().includes(name);
//     })
//     setFetchedPosts(filteredPosts)
//   }

//   return (
    // <div>
    //     <div className={css.TitleBar}>
    //               My Photos
    //               <form>
    //                 <label htmlFor="searchInput">Search:</label>
    //                 <input type="search" placeholder="By Artist" id="searchInput" onChange={(e)=> handleChange(e)}/>
    //               </form>
    //               <h4>posts found: {fetchedPosts.length}</h4>
    //           </div>
    //           <div className={css.SearchResults}>
    //               {
    //                 isLoaded === false ?
    //                   <Loader /> :
    //                   < PostItem savedPosts={fetchedPosts}/>
    //               }
    //           </div>
    // </div>
//   )
// }
