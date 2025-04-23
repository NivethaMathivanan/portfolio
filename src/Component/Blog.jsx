import React from "react";
import "../Component/Css/Blog.css"

const Blog = () => {
  return (
    <div className=" blog-section" id="blog">
      <h2
       
        className=" blog-title "
      >
      Behind The Code: My Unexpected Journey into Front-End Development
      </h2>


      <div className="blog-card">
      <h2 className="blog-subtitle" >From Botany to Browsers 👩‍💻 </h2>

        <p className="blog-meta">Feb 5, 2024 • Emotional + Positive Energy</p>
        <p className="blog-content">
         Hi! I'm <strong  className="tilleRed">Nivetha Mathivanan</strong> — I started my journey with a B.Sc. in Botany, never knowing that one day I would be writing lines of code instead of studying plant cells.
          Due to some family and financial situations, I couldn't continue my higher studies. But somehow, I got curious about the computer field — especially things like design and editing. That interest slowly pulled me into the world of Front-End Development.
        </p>
        <p>
          <strong className="tilleRed"> How It Started</strong>
          ➥ Heard about HTML, CSS, and Bootstrap ,JavaScript — started learning on my own. No fancy setup or classes. Just free tutorials and a ton of Googling.
          ➥ I had no idea what I was doing with ReactJS. I tried, failed, cried, and coded again. React felt like a wall I couldn’t climb — but day by day, night after night… I kept trying.
        </p>
        <p><strong className="tilleRed">Experiments I Did (That Changed Everything)</strong>
        ➥ useState for managing form state
        ➥for-loops like: for let i = 0 ; i++
        ➥ Billing App logic: Button styles, Table layout, GST, discount, total
        ➥Every component, every function — a small win that made me confident.
        </p>
        <p><strong className="tilleRed"> UI Design Decisions (That Felt Special)</strong>
        ➥ Designing is not just code — I feel it. A button might change 15 times until it's perfect.
          I explore 5–6 websites just for layout inspiration. Animations via framer-motion add life. Alignments matter. Style + Logic = Magic.
        </p>
        <p><strong className="tilleRed">My Coding Journey</strong>
        ➥  Some paid courses. Just willpower. Science background → Self-taught developer.
          I didn’t quit when it was hard. I paused, learned, and continued. Today, I say proudly: I am a React Developer.
        </p>
        <p><strong className="tilleRed"> My Learning System</strong>

        ➥ Online classes
        ➥ Handwritten notes
        ➥ Google for every doubt
        ➥ Use ChatGPT & AI tools for ideas, debugging, and guidance
        ➥ “If it’s confusing — Google it, ask ChatGPT, read again".

        </p>
        <p>
          <strong className="tilleRed">  Mini Challenges I Solved</strong>

          ➥ Form validations using useState
          ➥ React useEffect loops and alternate hook handling
          ➥ Billing page with dynamic product table, GST & discount calculation
        </p>
        <p>
          <strong className="tilleRed"> Tips from Me to You</strong>

          ➥ Don’t fear hard topics – break them down
          ➥ Repeat code until your hands memorize it
          ➥ Design is not just visual — it reflects your logic
          ➥ Any background can switch to coding with consistency + curiosity
        </p>
        <p className="blog-quote"> <strong className="tilleRed"> ❤️Final Words" </strong>

          "I studied Botany. But today, I design, I code, and I’m building the life of a developer.
          It’s not about what you studied — it’s about what you choose to become.
        </p>
      </div>
    </div >
  );
};


export default Blog;