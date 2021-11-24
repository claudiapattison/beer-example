import React, {useState} from 'react';
import Image from 'next/image'
import styles from './styles.module.scss';

export type BeerProps = {
  name: string;
  tagline?: string;
  image_url: string;
  abv?: number;
};

const AccordionItem: React.FC<BeerProps> = ({ name, tagline, image_url, abv }) => {

  const [itemActive, setItemActive] = useState(false)

  const toggleItem = (): void => {
    if (itemActive) {
      setItemActive(false);
    } else {
      setItemActive(true);
    }
  }

  const handleKeyDown = (e: any): void => {
    if (e.key === 'Enter') {
      toggleItem();
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header} 
       tabIndex={1}
       role="button"
       onClick={toggleItem}
       onKeyDown={handleKeyDown}
       >
        <h3 className={styles.title}>{name}</h3>
      </div>
      <div className={
        itemActive === true
          ? `${styles.item} ${styles['item-active']}`
          : styles.item
        }>
          <div className="row">
            <div className="col-md-4">
              <figure className={styles.image}>
                <Image src={image_url} layout="fill" objectFit="contain"/>
              </figure>  
            </div>
            <div className="col-md-8">
              <p>{tagline}</p>
              <p>{abv}</p>
            </div>
          </div>
      </div>
    </div>
       
  );
}

export {
    AccordionItem 
}