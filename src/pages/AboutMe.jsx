// src/pages/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Capture form data
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // For demonstration, log the data to the console
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Example: Send the data via email using `mailto`
    window.location.href = `mailto:dallascgiles@gmail.com?subject=Contact from ${name}&body=${message} - ${email}`;

    // Optionally reset the form after submission
    event.target.reset();
  };

  // Function to handle form cancellation
  const handleCancel = () => {
    // Clear all the form fields
    document.getElementById('contactForm').reset();
  };

  return (
    <section className="aboutMe">
      <div className="coloumn-left">
        <h2 className="about-name">Dallas Giles</h2>
        <img className='picture' src='src/images/portfolio-shot.jpg'></img>
        <p className="about-text">Full stack web developer</p>
        <p className="about-para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam omnis
          natus deserunt pariatur necessitatibus explicabo qui cum provident
          ducimus perspiciatis. Velit ea sunt excepturi, omnis mollitia labore
          cum quis voluptate vitae, a nihil, ut laboriosam!
        </p>
      </div>
      <div className="coloumn-right">
        <section className="contact">
          <div className="background">
            <div className="container">
              <div className="screen">
                <div className="screen-header">
                  <div className="screen-header-left">
                    <div className="screen-header-button close"></div>
                    <div className="screen-header-button maximize"></div>
                    <div className="screen-header-button minimize"></div>
                  </div>
                  <div className="screen-header-right">
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                  </div>
                </div>
                <div className="screen-body">
                  <div className="screen-body-item left">
                    <div className="app-title">
                      <span>What's Your</span>
                      <span>Name?</span>
                    </div>
                    <div className="app-contact">
                      CONTACT INFO :{' '}
                      <a href="mailto:dallascgiles@gmail.com?subject=&body">
                        dallascgiles@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="screen-body-item">
                    <form
                      className="app-form"
                      id="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="app-form-group">
                        <input
                          type="text"
                          className="app-form-control"
                          id="name"
                          name="name"
                          placeholder="NAME"
                          required
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          type="email"
                          className="app-form-control"
                          id="email"
                          name="email"
                          placeholder="EMAIL"
                          required
                        />
                      </div>
                      <div className="app-form-group message">
                        <textarea
                          className="app-form-control"
                          id="message"
                          name="message"
                          placeholder="MESSAGE"
                          required
                        ></textarea>
                      </div>
                      <div className="app-form-group buttons">
                        <button
                          type="button"
                          className="app-form-button"
                          onClick={handleCancel}
                        >
                          CANCEL
                        </button>
                        <button type="submit" className="app-form-button">
                          SEND
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutMe;