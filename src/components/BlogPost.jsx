import React from 'react';
import '../styles/BlogPost.css';

function BlogPost({ title, date, content }) {
    return (
        <div className='blog-post'>
            <h2>{title}</h2>
            <p className='date'>{date}</p>
            <p>{content}</p>
        </div>
    );
}

export default BlogPost;