import React from "react"
import Article from "./Article"

export default function ArticleList({posts}){
    return(
        <main>
            {
                posts.map((post, i) => {
                    return <Article key ={i} date = {post.date} minutes = {post.minutes} title = {post.title} preview = {post.preview}/>
                })
            }
        </main>
    )
}