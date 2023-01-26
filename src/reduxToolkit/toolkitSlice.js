import { createSlice } from "@reduxjs/toolkit";

const toolkit = createSlice({
    name: 'toolkit',
    initialState: {
        loading: false,
        users: [],
        posts: [],
        popupOpened: false,
        albums: []
    },
    reducers: {
        setLoading(state) {
            state.loading = false
        },
        newUser(state, action) {
            let allUsers = action.payload;
            allUsers.forEach(item => {
                state.users.push(item)
            })
            state.loading = true
        },
        newPost(state, action) {
            let allPosts = action.payload;
            allPosts.forEach(item => {
                state.posts.push(item)
            })
            state.loading = true
        },
        newAlbums(state, action) {
            let allAlbums = action.payload;
            state.albums = []
            allAlbums.forEach(item => {
                state.albums.push(item)
            })
            state.loading = true
            state.popupOpened = true
        },
        setPopupOpened(state, action) {
            state.popupOpened = action.payload;
        }
    }
});

export default toolkit.reducer
export const { setLoading, newUser, newPost, newAlbums, setPopupOpened } = toolkit.actions