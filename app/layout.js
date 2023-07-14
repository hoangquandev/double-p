
import NavBar from '../components/layout/NavBar'
import './globals.css'
import { BioRhyme, BioRhyme_Expanded } from 'next/font/google'
import { Fahkwang } from 'next/font/google'
import Provider from '../helper/provider'
const fahkwang = Fahkwang({
  subsets: ['latin'],
  variable: "--font-fahkwang",
  weight: ["200", "300", "400"]
})
const bioRhyme = BioRhyme({
  subsets: ['latin'],
  variable: "--font-bioRhyme",
  weight: ["200", "300", "400", "700", "800"]
})
const bioRhyme_Expanded = BioRhyme_Expanded({
  subsets: ['latin'],
  variable: "--font-bioRhyme_Expanded",
  weight: ["200", "300", "400", "700", "800"]
})

export const metadata = {
  title: "Cao Son",
  description:
    "Portfolio Product Designer.",
  generator: "Next.js",
  applicationName: "Cao Son",

  // robots: {
  //   index: true,
  //   follow: true,
  //   nocache: false,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  // category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bioRhyme.variable} ${bioRhyme_Expanded.variable} ${fahkwang.variable} relative scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531] bg-white dark:bg-black px-3 lg:px-0`}>
        <Provider>
          {/* <CustomCursor /> */}

          <NavBar />
          {children}


        </Provider>
      </body>
    </html>
  )
}
