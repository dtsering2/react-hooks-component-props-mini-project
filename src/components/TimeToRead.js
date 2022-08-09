import React from "react"

export default function TimeToRead({minutes}){
    console.log(minutes)
    if (minutes < 30){
        return(<small> "☕️" {minutes} min read</small>)
    }else if (minutes>=30){
        return(<small> "🍱"{minutes} min read</small>)
    }
}
