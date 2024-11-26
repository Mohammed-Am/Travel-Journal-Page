export default function Entry(){
    return(
        <main>
            <div className="first-position"> 
                <img src="../images/Visit-Japan.png" />
            </div>
            <div className="seconde-position">
                 <div className="first-info">
                     <div>
                        <img className="marker-icon" src="/images/map-marker.webp" />
                      </div>
                     <div>
                        <h4 className="place-name">Japan</h4>
                     </div>
                     
                     <div>
                        <a className="place-link" target="_blank" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                     </div>
                     
                 </div>
                 <div className="second-info">
                    <h3 className="place-visit">  Mount Fuji</h3>
                 </div>
                 <div className="thirt-info">
                    <p><space>12 Jan, 2021</space> - <span>24 Jan, 2021</span></p>
                  
                 </div>
                 <div className="forth-info">
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                 </div>
            </div>
        </main>
    )
}