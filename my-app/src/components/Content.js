import React, { Component } from 'react'
import css from './css/Content.module.css'
import PostItem from './PostItem'
import Loader from './Loader'


export default class Content extends Component{
  constructor(props){
    super(props)
    this.state = {
      'isLoaded' : false
    }
  }

  componentDidMount(){
    this.timerID = setTimeout(() => {
      this.setState({
        'isLoaded' : true
      })
    }, 1000
    );
    console.log('timer started')
  }

  componentWillUnmount(){
    this.timerID = clearTimeout()
  }

  render(){
      return (
          <div>
              <div className={css.TitleBar}>
                  My Photos
              </div>
              <div className={css.SearchResults}>
                  {
                    this.state.isLoaded === false ?
                      <Loader /> :
                      < PostItem />
                  }
              </div>
          </div>
      );
     };
}

