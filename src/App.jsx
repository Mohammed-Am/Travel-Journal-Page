import Header from '/components/Header'
import Entry from '/components/Entry'
import data  from './data'
import getUrl from './data'

export default function App(){
    const places = data.map(
        place => <Entry 
                key = {place.id}
                entry = {place}
        
        />    
    )
    return(
        <>
          <Header />
          {places}
         </>
      
    )
}