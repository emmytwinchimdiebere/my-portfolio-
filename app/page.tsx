
import Intro from "@/Components/intro"
import TopLeftImg from "@/Components/topleftImg"
import Particle from "@/Components/particles"
import ProjectComponent from "@/Components/projects"
import Skills from "@/Components/skills"
import Aboutme from "@/Components/aboutme"



export default function SetUpPage() {

  return (
  <main  className="items-center justify-center">
    <Particle />
    <TopLeftImg />
   <Intro />
   <Aboutme />
   <ProjectComponent />
   <Skills />
    

  </main>
  )
}
