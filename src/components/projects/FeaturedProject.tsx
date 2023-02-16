type FeaturedPr = {
  title: string;
  description: string;
  image?: string;
  stack: string[];
  site: string;
  repo: string;
};

export default function FeaturedProject({
  featuredProject,
}: {
  featuredProject: FeaturedPr;
}) {
  const { title, description, image, stack, site, repo } = featuredProject;
  return (
    <article>
      <div>
        {image ? (
          <h3>This displays project image</h3>
        ) : (
          <h3>Project has no image</h3>
        )}
      </div>
      <div>
        <h3>{title}</h3>
        <ul>
          {stack.map((item, id) => (
            <li key={id}>
              <span className="small-text">{item}</span>
            </li>
          ))}
        </ul>
        <p>{description}</p>
      </div>
      <div>
        <a href={site}>Demo</a>
        <a href={repo}>GitHub</a>
      </div>
    </article>
  );
}
