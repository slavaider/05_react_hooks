import React, {useReducer} from 'react'
import {GithubContext} from "./GithubContext";
import {GithubReducer} from "./GithubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";
import axios from 'axios'

const Client_ID = process.env.REACT_APP_CLIENT_ID
const Secret_ID = process.env.REACT_APP_CLIENT_SECRET

const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState);
    const search = async value => {
        setLoading()
        const response = await axios.get(
            `https://api.github.com/search/users?q=${value}&client_id=${Client_ID}&client_secret=${Secret_ID}`
        )
        console.log(response.data.items)
        dispatch({type: SEARCH_USERS, payload: response.data.items})
    }
    const getUser = async name => {
        setLoading()
        console.log(name)

        dispatch({type: GET_USER, payload: {}})
    }
    const getURepos = async name => {
        setLoading()
        console.log(name)

        dispatch({type: GET_REPOS, payload: []})
    }
    const clearUsers = () => {
        dispatch({type: CLEAR_USERS})
    }
    const setLoading = () => {
        dispatch({type: SET_LOADING})
    }
    const {user, users, repos, loading} = state
    return (
        <GithubContext.Provider value={{
            search, getUser, getURepos, clearUsers, setLoading,
            user, users, repos, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}
export default GithubState
