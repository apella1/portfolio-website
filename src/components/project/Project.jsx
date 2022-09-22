import './project.css';

const Project = ({title, imageUrl, description, tech, website, repo}) => {
  return (
    <div className='project flex flex-col align-center'>
      <div className='project__introduction'>
        <h3>{title}</h3>
      </div>

      <div className='project__description flex flex-col'>
        <img src={imageUrl} alt={title.toLowerCase()} />
        <div className='project__description--text flex flex-col'>
          <p>{description}</p>
          <p className='project__description--tech'>Tech:{tech}</p>
          <div className='project__links flex align-center justify-center'>
            <a href={repo} target='_blank' rel='noreferrer'>GitHub Repo</a>
            <a href={website} target='_blank' rel='noreferrer'>Website Link</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project