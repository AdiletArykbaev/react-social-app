import React from 'react'

const Post = (props) => {
    return (
        <div>
             <button>удалить</button>
             {props.text}
        </div>
    )
}

export default Post
    