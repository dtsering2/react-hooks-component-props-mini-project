import React from "react"
import TimeToRead from "./TimeToRead"
export default function Article({title, date ="January 1, 1970", minutes, preview}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{date} </small>
            <TimeToRead minutes={minutes} />
            <p>{preview}</p>
        </article>
    )
}