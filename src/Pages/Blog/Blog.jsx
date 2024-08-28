// BlogPage.js
import React from "react";

const BlogPage = () => {
  return (
    <div className="min-h-screen  py-20 px-4 lg:px-8 w-full lg:max-w-7xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-center text-[var(--primary-color-2)] mb-12" style={{ fontFamily: "Rancho, cursive" }}>Our Blog</h1>
      <p className="text-3xl text-yellow-300">Let's know about react controlled and uncontrolled components here </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card for Controlled Components */}
        <div className="bg-gray-200 border border-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4" style={{ fontFamily: "Rancho, cursive" }}>Understanding Controlled Components</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20231010122608/Peek-2023-10-10-12-25.gif"
            alt="Controlled Components"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <ul className="text-black list-disc pl-5 text-left" style={{ fontFamily: "Arial, sans-serif" }}>
            <li>Controlled components are inputs managed by React state.</li>
            <li>The value of the input is always in sync with the state.</li>
            <li>Useful for real-time validation and form handling.</li>
            <li>Example: An input field that updates as the user types.</li>
          </ul>
        </div>

        {/* Card for Uncontrolled Components */}
        <div className="bg-gray-200 border border-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4" style={{ fontFamily: "Rancho, cursive" }}>Understanding Uncontrolled Components</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20231010122608/Peek-2023-10-10-12-25.gif"
            alt="Uncontrolled Components"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <ul className="text-black list-disc pl-5 text-left" style={{ fontFamily: "Arial, sans-serif" }}>
            <li>Uncontrolled components are managed by the DOM, not React state.</li>
            <li>Values are accessed using refs to the DOM elements.</li>
            <li>Suitable for simple forms and third-party integrations.</li>
            <li>Example: A form where values are fetched on submission.</li>
          </ul>
        </div>

        {/* Card for PropTypes */}
        <div className="bg-gray-200 border border-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4" style={{ fontFamily: "Rancho, cursive" }}>What are PropTypes?</h2>
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--rz9lKI9o--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/u1wfta8gjw0i74ihzi72.gif"
            alt="PropTypes in React"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <ul className="text-black list-disc pl-5 text-left" style={{ fontFamily: "Arial, sans-serif" }}>
            <li>PropTypes validate the types of props passed to components.</li>
            <li>Helps prevent bugs by ensuring correct data types are used.</li>
            <li>Provides warnings in the console if the wrong prop types are passed.</li>
            <li>Example: Ensuring a number is passed instead of a string.</li>
          </ul>
        </div>

        {/* Card for React Refs */}
        <div className="bg-gray-200 border border-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4" style={{ fontFamily: "Rancho, cursive" }}>Using Refs in React</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201225184850/ezgif.com-gif-maker-11.gif"
            alt="React Refs"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <ul className="text-black list-disc pl-5 text-left" style={{ fontFamily: "Arial, sans-serif" }}>
            <li>Refs provide a way to access DOM nodes directly.</li>
            <li>Useful for managing focus, text selection, or animations.</li>
            <li>Created using `React.createRef()` or `useRef` hook.</li>
            <li>Example: Focusing an input field when a component mounts.</li>
          </ul>
        </div>

        {/* Card for React Hooks */}
        <div className="bg-gray-200 border border-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4" style={{ fontFamily: "Rancho, cursive" }}>Introduction to React Hooks</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240221162015/gfg55.gif"
            alt="React Hooks"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <ul className="text-black list-disc pl-5 text-left" style={{ fontFamily: "Arial, sans-serif" }}>
            <li>Hooks allow you to use state and other features in functional components.</li>
            <li>`useState` for managing state and `useEffect` for side effects.</li>
            <li>Makes components simpler and code more readable.</li>
            <li>Example: Fetching data from an API when a component mounts.</li>
          </ul>
        </div>

        {/* Summary Card */}
        <div className="bg-gray-200 border border-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4" style={{ fontFamily: "Rancho, cursive" }}>
            Summary of Key Points
          </h2>
          <img
            src="https://img.freepik.com/premium-photo/wooden-table-black-paper-clip-lies-sheet-white-paper-with-text-key-points_380694-4354.jpg"
            alt="Summary"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <ul className="text-black list-disc pl-5 text-left" style={{ fontFamily: "Arial, sans-serif" }}>
            <li>Controlled components are managed by React state.</li>
            <li>Uncontrolled components use refs for DOM management.</li>
            <li>PropTypes are used to validate props and prevent errors.</li>
            <li>Refs allow direct access to DOM elements for dynamic operations.</li>
            <li>React Hooks like `useState` and `useEffect` simplify component logic.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
