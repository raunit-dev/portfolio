"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Check if localStorage is available (client-side only)
    if (typeof window !== 'undefined') {
      // Get the current count from localStorage or initialize to 0
      const storedCount = localStorage.getItem('viewCount');
      const initialCount = storedCount ? parseInt(storedCount, 10) : 0;
      
      // Increment the count by 1 for this view
      const newCount = initialCount + 1;
      
      // Update localStorage and state
      localStorage.setItem('viewCount', newCount.toString());
      setViewCount(newCount);
    }
  }, []);

  return (
    <main>
      <nav>
        <a href="https://github.com/raunit-dev" target="_blank" rel="noopener noreferrer">
          <span style={{ marginLeft: '8px' }}>GitHub</span>
        </a>
        <a href="https://x.com/jais31118" target="_blank" rel="noopener noreferrer">
          <span style={{ marginLeft: '8px' }}>Twitter/X</span>
        </a>
      </nav>
      
      <section>
        <h2>About Me</h2>
        <p>I'm a developer...</p>
        <p>1st year BSc CS student</p>
      </section>
      
      <section>
        <h2>What I Know</h2>
        <p>I know how to build</p>
      </section>
      
      <section>
        <h2>My Tech Stack</h2>
        <ul>
          <li>NextJS</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>C++</li>
          <li>BlueJ</li>
          <li>Ask me to learn any lang for your projects i will</li>
        </ul>
      </section>
      
      <footer>
        <p>not a portfolio you wished to see, i dont want to prompt for styling my portfolio, will deploy my projects when they are functional for now see it on github</p>
        <div className="view-counter">
          This page has been viewed {viewCount} times
        </div>
      </footer>
    </main>
  )
}