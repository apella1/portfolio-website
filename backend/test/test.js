const Blog = require('../models/Blog');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.should();

chai.use(chaiHttp);

describe('Blogs', () => {
    beforeEach((done) => {
        Blog.deleteMany({}, (err) => {
            done();
        })
    })
});

describe('/GET blog', () => {
    it('it should GET all the blogs', (done) => {
        chai
            .request(app)
            .get('/api/blogs')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.a('array');
                res.body.data.length.should.be.eql(0);
                done();
            })
    })
});

describe('/POST blog', () => {
    it('it should new POST a blog', (done) => {
        let blog = {
            title: "This is the first blog", 
            body: "This is the body of the first blog"
        }

        chai
            .request(app)
            .post('/api/blogs')
            .send(blog)
            .end( (err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.a('object');
                res.body.status.should.be.eql('Success');
                done();
            })
    })
});

describe(' /GET/ :id blog', () => {
    it('it should GET a blog by the id', (done) => {
        let blog = new Blog({
            title: 'This is the first blog',
            body: 'This is the body of the first blog'
        })

        blog.save((err, blog) => {
            chai
                .request(app)
                .get('/api/blogs/' + blog.id)
                .send(blog)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('object');
                    res.body.status.should.be.eql('Success');
                    done();
                })
        })
    })
})

describe ('/PUT/:id blog', () => {
    it('it should UPDATE a blog given the id', (done) => {
         let blog = new Blog({
            title: 'This is the first blog', 
            body: 'This is the body of the first blog'
         })

         blog.save((err, blog) => {
            console.log(blog.id);
            chai
                .request(app)
                .put('/api/blogs' + blog.id)
                .send({
                    title: 'This is the first blog',
                    body: 'This is the body of the first blog'
                })
                .end((err, res) => {
                    this.should.have.status(200);
                    res.body.data.should.be.a('object');
                    res.body.status.should.be.eql('Success');
                    done();
                })
         })
    })
})

describe('/ DELETE:id blog', () => {
    it('it should DELETE a blog given the id', (done) => {
        let blog = new Blog({
            title: 'This is the first blog',
            body: 'This is the body of the first blog'
        })

        blog.save((err, blog) => {
            chai
                .request(app)
                .delete('/api/blogs' + blog.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('object');
                    res.body.status.should.be.eql('Success');
                    done();
                })
        })
    })
})

// automatic test