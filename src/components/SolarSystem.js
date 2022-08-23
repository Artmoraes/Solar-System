import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './PlanetCustom.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        {
          Planets.map((planeta, index) => (
            <PlanetCard
              planetName={ planeta.name }
              planetImage={ planeta.image }
              key={ index }
            />
          ))
        }
      </div>
    );
  }
}

export default SolarSystem;
