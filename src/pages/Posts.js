import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { setLoading, newPost } from '../reduxToolkit/toolkitSlice';
import getData from "../services/users-service";


const getPosts = (userID) => {
    return async dispatch => {
        const res =  await getData( userID, 'posts');
        setTimeout(() => {
            dispatch(newPost(res))
        }, 700)
    }
}

const Posts = () => {
    let { userID } = useParams();

    const posts = useSelector(state => state.toolkit.posts);
    const loading = useSelector(state => state.toolkit.loading);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setLoading())
        dispatch(getPosts(userID))
    }, [])

    if(!loading){
        return(
            <section className='users'>
                <div className='container'>
                    <p>Loading posts</p>
            </div>
            </section>
        )
    } else {
        return(
            <section className='posts'>
                <div className='container'>
                    {
                        posts.map((item) => {
                            return(
                                <div className='post' key={`postsID-${item.id}`}>
                                    <h3>{item.title}</h3>
                                    <p>{item.body}</p>
                                </div>
                            )
                        })
                    }
            </div>
            </section>
        )
    }
}

export default Posts;

