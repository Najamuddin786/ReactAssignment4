import {Box,Flex} from '@chakra-ui/react'
import '../index.css'
export default function About(){
    return <>
        <Box bg={'gray.100'} m={20} p={10}>

  {/* <header>
    <h1>Your Name</h1>
    <p>Your Address</p>
    <p>Your City, State, Zip Code</p>
    <p>Your Phone Number</p>
    <p>Your Email Address</p>
    <p><a href="Your LinkedIn Profile Link">LinkedIn Profile</a></p>
  </header>
  <section>
    <h2>Objective:</h2>
    <p>Dedicated and proficient Software Developer with a Bachelor's degree in Computer Applications (BCA) and expertise in React, JavaScript, HTML, CSS, and Chakra UI. Eager to contribute technical skills and problem-solving abilities to a dynamic software development team.</p>
  </section>
  <section>
    <h2>Education:</h2>
    <p>Bachelor of Computer Applications (BCA)<br/>
      Your University, Year of Graduation</p>
    <ul>
      <li>Relevant coursework:
        <ul>
          <li>Data Structures</li>
          <li>Object-Oriented Programming</li>
          <li>Web Development</li>
          <li>Software Engineering</li>
        </ul>
      </li>
    </ul>
  </section>
  <section>
    <h2>Skills:</h2>
    <ul>
      <li>Proficient in React.js for building interactive user interfaces</li>
      <li>Strong understanding of JavaScript for front-end and back-end development</li>
      <li>Experienced in HTML and CSS for web layout and styling</li>
      <li>Familiarity with Chakra UI for designing accessible and responsive web applications</li>
      <li>Knowledge of version control systems like Git for collaborative development</li>
      <li>Ability to work with RESTful APIs for integrating server-side functionality</li>
      <li>Problem-solving skills and attention to detail for debugging and troubleshooting</li>
    </ul>
  </section>
  <section>
    <h2>Experience:</h2>
    <p>Software Developer Intern<br/>
      Company Name, Location, Dates</p>
    <ul>
      <li>Collaborated with team members to develop and maintain web applications using React.js</li>
      <li>Implemented responsive designs with HTML and CSS, ensuring cross-browser compatibility</li>
      <li>Integrated third-party APIs to enhance application functionality</li>
      <li>Assisted in debugging and resolving software defects to improve overall product quality</li>
      <li>Participated in code reviews and contributed to the continuous improvement of development processes</li>
    </ul>
  </section>
  <section>
    <h2>Projects:</h2>
    <p>Project Title</p>
    <ul>
      <li>Description: Developed a brief description of project, utilizing React.js, JavaScript, HTML, CSS, and Chakra UI.</li>
      <li>Responsibilities: List specific tasks and contributions</li>
      <li>Technologies Used: React.js, JavaScript, HTML, CSS, Chakra UI, etc.</li>
      <li>GitHub Repository: <a href="Link to your project repository">Link to your project repository</a></li>
    </ul>
  </section>
  <section>
    <h2>Certifications:</h2>
    <p>Certification Name, Issuing Organization, Year</p>
    <p>Brief description of certification and its relevance</p>
  </section>
  <section>
    <h2>Additional Information:</h2>
    <ul>
      <li>Fluent in Language, if applicable</li>
      <li>Strong communication and teamwork skills</li>
      <li>Quick learner with a passion for staying updated on industry trends and technologies</li>
    </ul>
  </section> */}
   

  <header>
    <h1>Grains and Oilseeds Trading Company</h1>
  </header>
  <nav>
    <a href="#about-us">About Us</a>
    <a href="#catalog-grains-oilseeds">Catalog (Grains & Oilseeds)</a>
    <a href="#catalog-cake-meal">Catalog (Cake & Meal)</a>
    <a href="#delivery-packaging">Delivery & Packaging</a>
    <a href="#contact">Contact</a>
  </nav>

  <section id="about-us" class="about-us">
    <h2>About Us</h2>
    <p>Welcome to our company. We trade the finest grains and oilseeds across the European Union. Our mission is to provide quality products and exceptional service.</p>
  </section>

  <section id="catalog-grains-oilseeds" class="catalog">
    <h2>Catalog: Grains and Oilseeds</h2>
    <div class="grid">
      <div>
        <img src="https://png.pngtree.com/element_pic/16/11/03/dda587d35b48fd01947cf38931323161.jpg" alt="Wheat"/>
        <p>Wheat</p>
      </div>
      <div>
        <img src="https://png.pngtree.com/element_pic/16/11/03/dda587d35b48fd01947cf38931323161.jpg" alt="Corn"/>
        <p>Corn</p>
      </div>
     
    </div>
  </section>

  <section id="catalog-cake-meal" class="catalog">
    <h2>Catalog: Cake and Meal</h2>
    <div class="grid">
      <div>
        <img src="https://png.pngtree.com/element_pic/16/11/03/dda587d35b48fd01947cf38931323161.jpg" alt="Soybean Cake"/>
        <p>Soybean Cake</p>
      </div>
      <div>
        <img src="https://png.pngtree.com/element_pic/16/11/03/dda587d35b48fd01947cf38931323161.jpg" alt="Sunflower Meal"/>
        <p>Sunflower Meal</p>
      </div>
    
    </div>
  </section>

  <section id="delivery-packaging" class="delivery-packaging">
    <h2>Delivery and Packaging</h2>
    <p>We offer a variety of delivery methods and packaging options to meet your needs. Our products are carefully packaged to ensure they arrive in perfect condition.</p>
  </section>

  {/* <section id="contact" class="contact">
    <h2>Contact</h2>
    <form>
      <input type="text" name="name" placeholder="Your Name">
      <input type="email" name="email" placeholder="Your Email">
      <textarea name="message" placeholder="Your Message"></textarea>
      <button type="submit">Submit</button>
    </form>
    <p>Email: info@grainsandoilseeds.eu</p>
    <p>Phone: +123 456 789</p>
  </section> */}

  <footer>
    <p>&copy; 2024 Grains and Oilseeds Trading Company. All rights reserved.</p>
  </footer>


        </Box>
    </>
}