import React, { createContext,  useState, useReducer } from 'react'
import uuid from 'uuid/v4'
import createDataContext from './createDataContext'

// const BlogContext = createContext()

const initialState = [
    { title: "Blog post #1", id: uuid() },
    { title: "Blog post #2", id: uuid()  }
]

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "create":
            return [...state, { title: payload, id: uuid() }] 
        case "destroy":
            return state.filter(({ id }) => id !== payload)
        default:
            return state
    }
}

// const createPost = dispatch => dispatch({ type: 'create' })

export const { Context: BlogContext, Provider: BlogProvider } = createDataContext(reducer, initialState)


// export const BlogProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState)

//     // const addBlogPost = title => setBlogPosts([...blogPosts, { title, id: uuid() }])

//     return (
//         <BlogContext.Provider value={{ state, dispatch }}>
//             {children}
//         </BlogContext.Provider>
//     )
// }

// export default BlogContext
