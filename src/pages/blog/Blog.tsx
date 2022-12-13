import './blog.css'
import React from 'react'
import {Footer, Navbar} from '../../components';

const Blog = () => {
    return (
        <section className="blog bg-stone-900 text-white">
			<Navbar />
			<div className='blog-display flex flex-col items-center justify-center'>
				<h3>Blog Title</h3>
				<p>Below is a list of trending articles that I've written in the past year.</p>
			</div>
			<Footer />
        </section>
    )

}

export default Blog;
