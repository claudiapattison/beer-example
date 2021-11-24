import React, { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import { AccordionItem } from '@components/accordion-item/accordion-item';
interface AccordionProp {
  beers: any[];
}


const Accordion: React.FC<AccordionProp> = ({ beers }) => {

  return (
    <section className={styles.container}> 
      <div className='container'>
        <div className='row'>
          <div className='col'>
            {beers.map((item) => (
              <AccordionItem
                name={item.name}
                image_url={item.image_url}
                tagline={item.tagline}
                abv={item.abv}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export {
  Accordion 
}