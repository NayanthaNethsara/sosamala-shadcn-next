// src/App.js
import React from "react"

function App() {
  return (
    <div className=" p-4 text-white">
      <h1 className="text-3xl font-bold">Meet Team Sosamala</h1>
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            src="/sosamala.svg"
            alt="Team"
            className="w-[50px] h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Nayantha</h2>
            <p className="text-lg">Role: Web Developer</p>
            <p className="text-lg">
              Nayantha is responsible for front-end and back-end development,
              ensuring our website is fast and user-friendly.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Dulaj</h2>
            <p className="text-lg">Role: UX Designer</p>
            <p className="text-lg">
              Dulaj specializes in creating visually appealing and intuitive
              user interfaces for our projects.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Lahiru</h2>
            <p className="text-lg">Role: Project Manager</p>
            <p className="text-lg">
              Lahiru leads our projects, ensuring they are delivered on time and
              meet our clients&apos; needs.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Minthaka</h2>
            <p className="text-lg">Role: Quality Assurance</p>
            <p className="text-lg">
              Minthaka ensures that our projects are thoroughly tested and meet
              high-quality standards before release.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
