import './blog.css'
import React from 'react'
import {Footer, Navbar} from '../../components';

const Blog = () => {
    return (
        <section className="blog">
			<Navbar />
			<div className='blog-display'>
				<h3>Blog Title</h3>
			</div>
			<Footer />
        </section>
    )

}

export default Blog;
