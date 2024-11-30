import Header from '/components/Header'
import Entry from '/components/Entry'
import data  from './data'
import getUrl from './data'

export default function App(){
    const places = data.map(
        entry => <Entry 
                key = {entry.id}
                {...entry}
        
        />    

    )
    console.log(places);

    return(
        <>
          <Header />
          {places}
         </>
      
    )
}