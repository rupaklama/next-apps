const ResourceHighlight = ({ resources }) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resources.map(item => (
            <section className="section" key={item.id}>
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{item.createdAt}</h2>
                    <h1 className="title">{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ResourceHighlight;
