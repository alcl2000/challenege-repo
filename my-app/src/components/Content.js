import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'


export default class Content extends Component{
  constructor(props){
    super(props)
    this.state = {
      'isLoaded' : false,
      'posts': []
    }
  }

  componentDidMount(){
    this.timerID = setTimeout(() => {
      this.setState({
        'isLoaded' : true,
        'posts': savedPosts
      })
    }, 1000
    );
    console.log('timer started')
  }

  componentWillUnmount(){
    this.timerID = clearTimeout()
  }

  handleChange(event){
    const name = event.target.value.toLowerCase()
    const filteredPosts = savedPosts.filter( post => {
        return post.name.toLowerCase().includes(name);
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
                  <h4>post found:{this.state.posts.length}</h4>
              </div>
              <div className={css.SearchResults}>
                  {
                    this.state.isLoaded === false ?
                      <Loader /> :
                      < PostItem savedPosts={this.state.posts}/>
                  }
              </div>
          </div>
      );
     };
}

