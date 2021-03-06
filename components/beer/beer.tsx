import * as React from 'react';
import Image from 'next/image'
import styles from './styles.module.scss';

export type BeerProps = {
  name: string;
  tagline	: string;
  image_url: string;
  abv: number;
};

const Beer: React.FC<BeerProps> = ({ name, tagline, image_url, abv }) => {

  return (
   
    <div className={styles.item}>
      <div className={styles.inner}>
        <figure className={styles.image}>
        <Image src={image_url} layout="fill" objectFit="contain"/>
        </figure>
      </div>
      <div className={styles.innerBottom}>
        <h3 className={styles.title}>{name}</h3>
        <p>{tagline}</p>
        <ul className={styles.list}>
          <li>Alcohol volume: {abv}</li>
        </ul>
      </div>
    </div>
       
  );
}

export {
    Beer 
}