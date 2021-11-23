import { Data } from '@pages/';
import * as React from 'react';
import styles from './styles.module.scss';
import { Beer } from '../beer/beer';


interface BeerListProps {
  name: string;
  beers: Data[];
}

const BeerList: React.FC<BeerListProps> = ({ name, beers }) => {

  return (
    <section className={styles.container}> 
      <div className='container'>
        <h2 className={`center ${styles.title}`}>{name}</h2>
        <div className='row'>
          {beers.slice(0,8).map((item) => (
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