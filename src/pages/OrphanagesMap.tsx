import React from 'react';
import {Link} from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css'

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside> 
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Choose a orphanage in the map</h2>
                    <p>Many children are waiting for our visit</p>
                </header>
                <footer> 
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            <Map
                center={[-23.4958645!,-46.6222915]}
                zoom={15}
                style={{ width:'100%', height:'100%'}}
            >
                {/* <TileLayer url = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
                <TileLayer 
                url = {`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}
export default OrphanagesMap;