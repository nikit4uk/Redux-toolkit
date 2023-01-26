import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { setLoading, newUser, newAlbums } from '../reduxToolkit/toolkitSlice';
import getData from "../services/users-service";
import Popup from "../components/popup";

const getUsers = () => {
    return async dispatch => {
        const res =  await getData();
        setTimeout(() => {
            dispatch(newUser(res))
        }, 700)
    }
}
const getAlbums = (userID) => {
    return async dispatch => {
        const res =  await getData( userID, 'albums');
        console.log(res)
        setTimeout(() => {
            dispatch(newAlbums(res))
        }, 700)
    }
}

const Home = () => {
    const loading = useSelector(state => state.toolkit.loading);
    const users = useSelector(state => state.toolkit.users);
    const albums = useSelector(state => state.toolkit.albums);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setLoading())
        dispatch(getUsers())
    }, [])

    if(!loading){
        return(
            <section className='users'>
                <div className='container'>
                    <p>Loading users</p>
            </div>
            </section>
        )
    } else {
        return(
            <>
            <section className='users'>
                <div className='container'>
                    {
                        users.map((item) => {
                            return(
                                <div className='user' key={`userID-${item.id}`}>
                                    <h3>{item.name}</h3>
                                    <div className='btns-wrap'>
                                        <Link className='btn btn-posts'
                                            to={`/posts/${item.id}`}>Посты</Link>
                                        <a className='btn btn-albums' onClick={() => dispatch(getAlbums(item.id))}>Альбомы</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <Popup />
            </>
        )
    }
}

export default Home;