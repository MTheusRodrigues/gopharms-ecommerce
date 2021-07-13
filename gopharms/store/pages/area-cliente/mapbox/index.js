import { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import Layout from '../../../components/Layout';
import Cabecalho from '../../../containers/Cabecalho';
import Rodape from '../../../containers/Rodape';
// Ceramica: -22.7327052,-43.476693
// Area 51: 37.2431, 115.7930.

class Map extends Component {
         state = {
        viewport: {
            width: '100%',
            height: '30rem',
            latitude: -22.7327052,
            longitude: -43.476693,
            zoom: 13
        }
    };




    async componentDidMount() {
        try {
            
            if (navigator.geolocation) {
                await navigator.geolocation.getCurrentPosition( (position) => {
                    const location = {
                      width: '50rem',
                      height: '30rem',
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                      zoom: 14
                    } 
                    this.setState({ viewport: location });
                } );

            } else { 
                alert( "O seu navegador não suporta Geolocalização." );
            }

        } catch (err) {
            console.error(err);
        }
    }

    render() {
    
        return (

            <Layout title="MapBox | Go Pharms - Menor preço na  palma da mão">
                <Cabecalho/>
               <div className="mapboxConatiner" style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                <div className="mapbox" style={{width:'50rem' ,marginTop: '10rem', display: 'flex', alignItems:'center', justifyContent:'center',border:'4px solid #E6E4E0', borderRadius:'8px'}}>
                        <ReactMapGL
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                        onViewportChange={(viewport) => this.setState({viewport})}
                        {...this.state.viewport}
                        />
                    </div>
               </div>
                
                
                <Rodape />
            </Layout>




           
        );
    }
}

export default Map;
