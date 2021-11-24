import { Data } from '@pages/';
import React, { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import { Beer } from '../beer/beer';


interface BeerListProps {
  name: string;
  beers: Data[];
}


const BeerList: React.FC<BeerListProps> = ({ name, beers }) => {

  const [beersList, setBeersList] = useState(beers);


  const setSortType = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    
    if(value === "abvLow") {
      beers.sort(function (a, b) {
        return a.abv - b.abv;
      });
    }

    if(value === "abvHigh") {
      beers.sort(function (a, b) {
        return b.abv - a.abv;
      });
    }

    if(value === "name") {
      beers.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); 
        var nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;

      });
      

    }

    setBeersList([...beers])


  };

  return (
    <section className={styles.container}> 
      <div className='container'>
        <h2 className={`center ${styles.title}`}>{name}</h2>
        <div className='row'>
          <div className='col'>
            <select className={styles.select} onChange={setSortType}>
              <option value="default" disabled selected >Sort by:</option>
              <option value="name">Name </option>
              <option value="abvLow">Alcohol Volume: low to high</option>
              <option value="abvHigh">Alcohol Volume: high to low</option>

            </select>
          </div>
        </div>
        <div className='row'>
          {beersList.map((item) => (
            <div key={item.id} className={`col-md-6 col-lg-4 ${styles.item}`}>
              <Beer 
                name={item.name}
                tagline={item.tagline}
                image_url={item.image_url}
                abv={item.abv}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export {
  BeerList 
}