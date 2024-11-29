export default function Entry(props){
    return(
        <main>
            <div className="first-position"> 
            <img 
                    className="main-image"
                    src={props.img.src} 
                    alt={props.img.alt}  
                />            </div>
            <div className="seconde-position">
                 <div className="first-info">
                     <div>
                        <img className="marker-icon" src="/images/map-marker.webp" />
                      </div>
                     <div>
                        <h4 className="place-name">{props.country}</h4>
                     </div>
                     
                     <div>
                        <a className="place-link" target="_blank" href="{props.googleMapsLink}">View on Google Maps</a>
                     </div>
                     
                 </div>
                 <div className="second-info">
                    <h3 className="place-visit">{props.title}</h3>
                 </div>
                 <div className="thirt-info">
                    <p>{props.dates}</p>
                  
                 </div>
                 <div className="forth-info">
                    <p>{props.text}</p>
                 </div>
            </div>
        </main>
    )
}