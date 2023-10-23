import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    "name": "rockycodes",
    "short_name": "rockycodes blog",
    "description": "Explore the ever-evolving world of technology, web development, and programming with rockycodes.vercel.app. Uncover the latest insights, trends, and tutorials on cutting-edge technologies, from web and mobile development to data science and cybersecurity. Whether you're a beginner or a seasoned pro, our platform offers a vast repository of articles, guides, and resources to enhance your skills and stay ahead in the digital landscape. Join our thriving community of tech enthusiasts, and embark on a journey of continuous learning and innovation. Start your exploration today!",
    "start_url": "/",
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}