import Header from '/components/Header'
import Entry from '/components/Entry'
import data  from './data'
import getUrl from './data'

export default function App(){
    const Places = data.map(
        place => <Entry 
                img = {{
                    src: place.img.src,
                    alt: place.img.alt
                }}
                alt = {place.img.alt}
                title = {place.title}
                country = {place.country}
                googleMapsLink = {place.googleMapsLink}
                dates = {place.dates}
                text = {place.text}
        
        />    
    )
    return(
        <>
          <Header />
          {Places}
         </>
      
    )
}