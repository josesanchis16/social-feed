import React from 'react';
import './Post.css'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            postText: '',
            like: false,
            stared: false
        }
    }

    getPost = () => {
        return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quisquam distinctio perferendis culpa ut voluptatum dolore fugiat consectetur perspiciatis, earum impedit saepe, dolorum nisi eveniet suscipit magni, sequi sit repellendus.</p>
    }

    likePost = (event) => {
        const btnLike = event.target;

        if (this.state.like) btnLike.style.color = '#b4b4b4';
        else btnLike.style.color = '#f00';

        this.setState({
            like: !this.state.like,
        })
    }

    staredPost = (event) => {
        const btnStar = event.target;

        if (this.state.stared) btnStar.style.color = '#b4b4b4';
        else btnStar.style.color = '#ffd700';

        this.setState({
            stared: !this.state.stared,
        })
    }

    render() {
        return (
            <section>
                <div className="userImage">
                    <img src={this.state.data.picture.medium} alt="" />
                </div>

                <div className="postBody">
                    <div className="flecha"></div>
                    <div className="userInfo">
                        <div className="userName">
                            <p>{this.state.data.name.first} {this.state.data.name.last}</p>
                        </div>
                        <div className="userNick">
                            <p>@{this.state.data.login.username}</p>
                        </div>
                    </div>
                    <div className="userPost">
                        {this.getPost()}
                    </div>
                    <div className="interactions">
                        <ul>
                            <li onClick={this.likePost}><i className="fas fa-heart fa-2x"></i></li>
                            <li onClick={this.staredPost}><i className="fas fa-star fa-2x"></i></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Post;