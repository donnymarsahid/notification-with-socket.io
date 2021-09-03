import React, { useContext } from 'react';
import { context } from '../../App';
import CardCoffe from './cardsProducts/CardCoffe';

const Coffee = () => {
  const { coffeeVariant } = useContext(context);

  const cardCoffee = coffeeVariant.map((coffee) => {
    return <CardCoffe coffee={coffee} key={coffee.id} />;
  });
  return (
    <>
      <title>WaysBucks | Best Seller</title>
      <section className="varian coffee">
        <div className="container">
          <h3>Best Seller</h3>
          <div className="row">{cardCoffee}</div>
        </div>
      </section>
    </>
  );
};

export default Coffee;
