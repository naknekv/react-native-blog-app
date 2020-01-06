import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { BlogContext } from '../context/BlogContext'

const IndexScreen = () => {
    const { state: blogPosts, dispatch: crudBlogPosts } = useContext(BlogContext)
    return (
        <View>
            <Button title="Add Post" onPress={() => crudBlogPosts({ type: "create", payload: "My new post!"})} />
            <FlatList 
                data={blogPosts}
                keyExtractor={({ id }) => id} 
                renderItem={({ item }) => 
                    <View style={styles.rowStyle}>
                        <Text style={styles.titleStyle}>{item.title}</Text>
                        <TouchableOpacity onPress={() => crudBlogPosts({ type: "destroy", payload: item.id})}>
                            <Feather name="trash" style={styles.iconStyle} />
                        </TouchableOpacity>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "gray"
    },
    titleStyle: {
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 24
    }
})


export default IndexScreen
