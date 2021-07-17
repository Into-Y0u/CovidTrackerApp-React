import React , { useEffect ,useState } from 'react'
import './my.css';

const Covid = () => {
const [ data , setData ] = useState([]);

    const getCovidData = async () => {

        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData  = await res.json() ;
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);

        }catch(err){
            console.log(err);

        }
        

    }

    useEffect(() => {
        getCovidData();
  
    }, []) ;
    return (
        <div>

            <section className = "container">

                <div className="card">
                    <div className="content">
                        <h2>#Country</h2>
                        <h3>INDIA</h3>
                        <p></p>
                    </div>
                </div>


                <div className="card">
                    <div className="content">
                        <h2>#Confirmed</h2>
                        <h3>Total Confirmed Cases</h3>
                        <p>{data.confirmed}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>#active</h2>
                        <h3>Total Active Cases</h3>
                        <p>{data.active}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>#recovered</h2>
                        <h3>Total Recovered Cases</h3>
                        <p>{data.recovered}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>#deaths</h2>
                        <h3>Total Deaths</h3>
                        <p>{data.deaths}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>#update</h2>
                        <h3>Last Updated</h3>
                        <p>{data.lastupdated}</p>
                    </div>
                </div>
 
                    {/* <p className="grid-item2" >{data.confirmed}</p> */}
   
                    {/* <p className="grid-item2" > {data.recovered} </p> */}
        
                    {/* <p className="grid-item2" >{data.active}</p> */}
     
                    {/* <p className="grid-item2" >{data.deaths}</p> */}
    
         
                    {/* <p className="grid-item2" >{data.lastupdated}</p> */}
                
            
            



            </section>

   

            
        </div>
    )
}

export default Covid
