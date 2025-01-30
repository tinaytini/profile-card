import './App.css'
import { Github } from "./icons/Github";
import { Instagram } from './icons/Instagram';
import { Linkedin } from './icons/Linkedin';
import { Twitter } from './icons/Twitter';
function App() {

  return (
    <div className="w-[340px] flex flex-col gap-10 bg-white px-4 py-6 rounded-lg">
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="w-12 h-12">
          <img
            src="./Profile Thumbnail.jpg"
            alt="profile__image"
            className="w-12 h-12 rounded-[50%] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-1 self-stretch">
          <span className="text-xl text-neutral-900">Sarah Dole</span>
          <span className="text-sm text-neutral-600">Front End Engineer @ Microsoft</span>
        </div>

        <p className="font-normal text-center text-base text-neutral-600">I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.</p>
        <div className="flex flex-col gap-6 self-stretch">
          <button className="bg-indigo-700 px-4 py-2.5 rounded text-white hover:bg-indigo-800 focus:outline-indigo-200 focus:outline-2">Contact me</button>
          <div className="flex justify-center items-center gap-6">
            <a 
              aria-label="Link to GreatFrontEnd's GitHub profile"
              href="https://github.com/greatfrontend"
            >
                <Github />
            </a>
            <a 
              aria-label="Link to GreatFrontEnd's Linkedin profile"
              href="https://linkedin.com/greatfrontend"
            > 
            <Linkedin />
            </a>
            <a 
              aria-label="Link to GreatFrontEnd's Instagram profile"
              href="https://instagram.com/greatfrontend"
            > 
            <Instagram />
            </a>
            <a 
              aria-label="Link to GreatFrontEnd's Twitter profile"
              href="https://X.com/greatfrontend"
            > 
            <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
