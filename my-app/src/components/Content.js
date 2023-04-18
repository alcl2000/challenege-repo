import React, { useEffect, useState } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

// the class component
// export default class Content extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       'isLoaded' : false,
//       'posts': []
//     }
//   }

//   componentDidMount(){
//     this.timerID = setTimeout(() => {
//       this.setState({
//         'isLoaded' : true,
//         'posts': savedPosts
//       })
//     }, 1000
//     );
//     console.log('timer started')
//   }

//   componentWillUnmount(){
//     this.timerID = clearTimeout()
//   }

//   handleChange(event){
//     const name = event.target.value.toLowerCase()
//     const filteredPosts = savedPosts.filter( post => {
//         return post.name.toLowerCase().includes(name);
//     })
//     this.setState({
//       'posts': filteredPosts
//     })
//   }

//   render(){
//       return (
//           <div>
              
//           </div>
//       );
//      };
// }

// functional component with hooks

export default function Content() {

  const [isLoaded, loadPosts] = useState(false);
  const [fetchedPosts, setFetchedPosts ] = useState([]);

  useEffect(()=>{
    setTimeout(() =>{
      loadPosts(true),
      setFetchedPosts(savedPosts)
    },1000)
  },[])

  const handleChange = (event) => {
    const name = event.target.value.toLowerCase()
    const filteredPosts = savedPosts.filter( post => {
        return post.name.toLowerCase().includes(name);
    })
    setFetchedPosts(filteredPosts)
  }

  return (
    <div>
        <div className={css.TitleBar}>
                  My Photos
                  <form>
                    <label htmlFor="searchInput">Search:</label>
                    <input type="search" placeholder="By Artist" id="searchInput" onChange={(e)=> handleChange(e)}/>
                  </form>
                  <h4>posts found: {fetchedPosts.length}</h4>
              </div>
              <div className={css.SearchResults}>
                  {
                    isLoaded === false ?
                      <Loader /> :
                      < PostItem savedPosts={fetchedPosts}/>
                  }
              </div>
    </div>
  )
}
