
import Container from '../components/layout/Container'
import NavBar from '../components/layout/NavBar'
import './globals.css'
import { BioRhyme, BioRhyme_Expanded } from 'next/font/google'
import { Fahkwang } from 'next/font/google'
import Provider from '../helper/provider'
// import Footer from '../components/layout/Footer'
import CustomCursor from '@/components/common/CustomCursor'
// import FooterHome from '@/components/home/FooterHome'
//BioRhyme Expanded
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
  title: "CC.STUDIO - Varian Visual",
  description:
    "Frontend Engineer and Product Designer.",
  generator: "Next.js",
  applicationName: "varian visual",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  // colorScheme: "light",
  openGraph: {
    title: "CC.STUDIO - Varian Visual",
    description:
      "Frontend Engineer and Product Designer.",
    // url: "https://www.victorwilliams.me/",
    // siteName: "www.victorwilliams.me",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
        width: 1200,
        height: 630,
        alt: "CC.STUDIO - Varian Visual",
      },
    ],
    locale: "vi-VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CC.STUDIO - Varian Visual",
    description:
      "Frontend Engineer and Product Designer",
    creator: "CaoSon, HoangQuan",
    // creatorId: "1243720976552144897",
    images: [
      "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
    ],
  },
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
