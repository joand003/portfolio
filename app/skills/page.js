import React from 'react'

export default function Skills() {
  return (
    <div className='flex flex-col justify-center'>
        <h1 className="text-center my-10">Technical Skills</h1>
        <h2 className="text-center">Languages</h2>
        <ul className="flex flex-col justify-center items-center">
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Python</li>
            <li>SQL</li>
        </ul>
        <h2 className="text-center mt-4">Libraries/Frameworks</h2>
        <ul className="flex flex-col justify-center items-center">
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>React-Spring</li>
            <li>Framer Motion</li>
        </ul>
        <h2 className="text-center mt-4">Databases</h2>
        <ul className="flex flex-col justify-center items-center">
            <li>MongoDB</li>
            <li>DynamoDB</li>
            <li>Firebase</li>
            <li>SQLite</li>
            <li>MySQL</li>
        </ul>
        <h2 className="text-center mt-4">Tools</h2>
        <ul className="flex flex-col justify-center items-center">
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Heroku</li>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>Amazon Web Services</li>
        </ul>
        <h2 className="text-center mt-4">Courses/Certifications</h2>
        <ul className="flex flex-col justify-center items-center">
            <li>Meta Back-End Developer from Coursera</li>
            <li>The Complete React Developer Course (w/ Hooks and Redux) by Andrew Mead</li>
            <li>The Complete Node.js Developer Course (3rd Edition) by Andrew Mead, Rob Percival</li>
            <li>Learn HTML from CodeCademy</li>
            <li>Learn CSS from CodeCademy</li>
            <li>Learn JavaScript from CodeCademy</li>
            <li>Learn SQL from CodeCademy</li>
            <li>Basic JavaScript from FreeCodeCamp</li>
        </ul>
    </div>
  )
}
