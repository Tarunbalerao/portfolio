import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter, FaInstagram, FaGraduationCap } from "react-icons/fa"; // Importing graduation cap icon
import developerIllustration from "../Assets/home.png"; 

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8">
              Let Me <span className="text-purple-400">Introduce</span> Myself
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed">
              Hello! I'm Balerao Tarun Kumar, a passionate web developer with a love for 
              creating beautiful and functional websites. I fell in love with programming 
              and have been building projects ever since. 🚀
            </p>

            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-purple-400 text-2xl mr-2" />
              <span className="text-lg">
                <strong className="text-purple-400">BV Raju Institute of Technology</strong>, 
                Medak, Telangana
              </span>
            </div>
            <p className="text-lg mb-6 leading-relaxed">
              Bachelor of Technology in Computer Science and Engineering; CGPA: <strong className="text-purple-400">8.94</strong>
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              I am excited to continue my journey in the tech world, constantly learning and adapting to new challenges. 
              Let's connect and create something amazing together!
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <div className="overflow-hidden rounded-lg shadow-2xl transition-transform transform hover:scale-105">
              <img 
                src={developerIllustration} 
                alt="Developer Illustration" 
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;