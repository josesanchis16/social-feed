import React from 'react';
import './Content.css';

import Post from './Post/Post';
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoaded: false,
        }
    }

    getPost = () => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(array => {
                console.log(array.results[0]);
                this.setState({
                    posts: [
                        <Post data={array.results[0]} key={this.state.posts.length} />,
                        ...this.state.posts
                    ]
                })
            })
            .catch(console.log);
    }

    getAllPosts = () => {
        fetch('https://randomuser.me/api/?results=10')
            .then(res => res.json())
            .then(array => {
                array.results.map((user, index) => {
                    console.log(user);
                    this.setState({
                        posts: [
                            <Post data={user} key={index} />,
                            ...this.state.posts
                        ],
                        isLoaded: true,
                    })
                })
            })
            .catch(console.log);
    }

    render() {
        { !this.state.isLoaded && this.getAllPosts() }
        return (
            <div className="divContent">
                <div>
                    {this.state.posts}
                    <div className="divBtnRefresh">
                        <i className="fas fa-sync-alt fa-2x" onClick={this.getPost}></i>
                    </div>
                </div>

            </div>
        )
    }
}

export default Content;