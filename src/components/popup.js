import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPopupOpened } from '../reduxToolkit/toolkitSlice';


const Popup = () => {
    const popupOpened = useSelector(state => state.toolkit.popupOpened);
    const albums = useSelector(state => state.toolkit.albums);
    const dispatch = useDispatch();

    if(!popupOpened){
        return(
            <div className='popup'>
                <h3>Loading Albums</h3>
            </div>
        )
    } else {
        return (
            <div className='popup open'>
                <div className='popup-bg'
                    onClick={() => dispatch(setPopupOpened(false))}></div>
                <div className='popup-wrap'>
                    <h3>User Albums</h3>
                    {
                        albums.map((item) => {
                            return (
                                <div className='albums'>
                                    <h4>{item.title}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Popup;