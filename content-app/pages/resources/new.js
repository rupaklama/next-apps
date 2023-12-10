import { useState } from "react";
import Layout from "../../components/Layout";

const ResourceCreate = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
    priority: "2",
    timeToFinish: 60,
  });

  const { title, description, link, priority, timeToFinish } = form;

  const handleFormSubmit = e => {
    e.preventDefault();
    // alert(JSON.stringify(form));
    console.log(form);
  };

  const handleFormValueChange = e => {
    const { name, value } = e.target;
    // setForm({ ...form, [e.target.name]: e.target.value });
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <Layout>
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="resource-form">
                <h1 className="title">Create Resource</h1>
                <form onSubmit={handleFormSubmit}>
                  <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                      <input
                        onChange={handleFormValueChange}
                        value={title}
                        name="title"
                        className="input"
                        type="text"
                        placeholder="learn Next JS"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        onChange={handleFormValueChange}
                        value={description}
                        name="description"
                        className="textarea"
                        placeholder="popular framework now"
                      ></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Link</label>
                    <div className="control">
                      <input
                        onChange={handleFormValueChange}
                        value={link}
                        name="link"
                        className="input"
                        type="text"
                        placeholder="https://nextjs.org/"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Priority</label>
                    <div className="control">
                      <div className="select">
                        <select onChange={handleFormValueChange} value={priority} name="priority">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Time to finish</label>
                    <div className="control">
                      <input
                        onChange={handleFormValueChange}
                        value={timeToFinish}
                        name="timeToFinish"
                        className="input"
                        type="number"
                        placeholder=""
                      />
                    </div>
                    <p className="help">time is in minutes</p>
                  </div>

                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                      <button className="button is-link is-light">Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default ResourceCreate;
