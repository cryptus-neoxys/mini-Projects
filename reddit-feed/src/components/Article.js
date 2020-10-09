import React from 'react'

function Article(props) {
    return (
        <article>
            <a href={`https://www.reddit.com${props.permalink}`} rel="noopener noreferrer" target="_blank">
                <h3>{props.title}</h3>
            </a>
        </article>
    )
}

export default Article
