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
      <div className="w-full my-auto overflow-hidden">
        {image ? (
          <img src={image} alt={`${title.toLowerCase()}`} />
        ) : (
          <h3>Project has no image</h3>
        )}
      </div>
      <div className="">
        <h3>{title}</h3>
        <ul className="flex flex-wrap list-none list-inside">
          {stack.map((item, id) => (
            <li
              key={id}
              className="flex items-center mr-3 opacity-50 text-brand"
            >
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
