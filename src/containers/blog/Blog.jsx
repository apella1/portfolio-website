import './blog.css'

const Blog = () => {
    return (
        <div className="portfolio__blog flex justify-center align-center" name='blog'>
            <div className="top-articles flex">
                <article>
                    <h1>First Article</h1>
                </article>

                <article>
                    <h1>First Article</h1>
                </article>
            </div>

            <div className="portfolio__blog--posts grid grid-cols-2 sm:grid-cols-4">
                <article>
                    <h1>Article 1</h1>
                </article>
                <article>
                    <h1>Article 2</h1>
                </article>
                <article>
                    <h1>Article 3</h1>
                </article>
                <article>
                    <h1>Article 4</h1>
                </article>
                <article>
                    <h1>Article 5</h1>
                </article>
                <article>
                    <h1>Article 6</h1>
                </article>
            </div>
        </div>
    )
}

export default Blog