import '@styles/globals.css';
import Images from 'next/image'


import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import NewResource from '@components/NewResource';
import NewEvents from '@components/NewEvents';



export const metadata = {
    title: "Career",
    description: "Discover and Explore"
}

const RootLayout = ( { children } ) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>

        <main className="app">

            <Hero/>
            <br />
            <br />
            <br />

            <NewResource/>

            <br />
            <br />
            <br />

            <NewEvents/>
            
            { children }

        </main>
        </body>
    </html>
  )
}

export default RootLayout;


