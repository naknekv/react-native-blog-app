import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import { BlogProvider } from './src/context/BlogContext'

const App = createAppContainer(
  createStackNavigator(
    {
      Index: IndexScreen
    }, 
    {
      initialRouteName: "Index",
      defaultNavigationOptions: {
        title: "Blogs"
      }
    }
  )
)

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}