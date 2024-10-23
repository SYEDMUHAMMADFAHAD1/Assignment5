export default function Footer() {
    return (
      <footer className="flex flex-col bg-gray-900 text-white text-lg px-6 md:px-10 py-8 w-full shadow-inner">
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="mb-4 md:mb-0">
            <ul className="font-sans font-semibold space-y-2">
              <li className="font-bold text-lg md:text-xl text-yellow-400">Core Courses</li>
              <li>Programming Fundamentals</li>
              <li>Web2 Using NextJS</li>
              <li>Earn as You Learn</li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <ul className="font-sans font-semibold space-y-2">
              <li className="font-bold text-lg md:text-xl text-yellow-400">Advanced Courses</li>
              <li>Web 3 and Metaverse</li>
              <li>Cloud-Native Computing</li>
              <li>Artificial Intelligence</li>
            </ul>
          </div>
          <div>
            <ul className="font-sans font-semibold space-y-2">
              <li className="font-bold text-lg md:text-xl text-yellow-400">Social Links</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
  
        <div className="flex justify-center mt-4 py-4 border-t border-gray-700">
          <div className="text-yellow-400 font-semibold text-center text-base md:text-lg">
            <h3>© 2024 Made by Syed Muhammad Fahad. All rights reserved.</h3>
            <h3>
              Assignment Completed! <b>Given by: Sir Ali Jawwad</b> Slot: Tuesday 7 to 10
            </h3>
          </div>
        </div>
      </footer>
    );
  }
  