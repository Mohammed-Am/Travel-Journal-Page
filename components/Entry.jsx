export default function Entry({entry}){
    return(
        <main>
            <div className="first-position"> 
            <img 
                    className="main-image"
                    src={entry.img.src} 
                    alt={entry.img.alt}  
                />            </div>
            <div className="seconde-position">
                 <div className="first-info">
                     <div>
                        <img className="marker-icon" src="/images/map-marker.webp" />
                      </div>
                     <div>
                        <h4 className="place-name">{entry.country}</h4>
                     </div>
                     
                     <div>
                        <a className="place-link" target="_blank" href={entry.googleMapsLink}>View on Google Maps</a>
                     </div>
                     
                 </div>
                 <div className="second-info">
                    <h3 className="place-visit">{entry.title}</h3>
                 </div>
                 <div className="thirt-info">
                    <p>{entry.dates}</p>
                  
                 </div>
                 <div className="forth-info">
                    <p>{entry.text}</p>
                 </div>
            </div>
        </main>
    )
}