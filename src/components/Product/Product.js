import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import shortid from 'shortid';

const Product = props => {
  const upper = (param) => {
    return param[0].toUpperCase() + param.slice(1);
  }


  const [currentColor, setCurrentColor] = useState([
    {
      color: upper(props.colors[0]), 
    }
  ]);

  const [currentSize, setCurrentSize] = useState([
    {
      size: props.sizes[0].name,
      price: props.sizes[0].additionalPrice,
    }
  ])


  const getPrice = (param) => {
    return props.basePrice + param;
  }


  console.log('Current Size', currentSize);
  console.log('Current Color', currentColor);





  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={`${props.title}`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor.color}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(currentSize.price)}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size =>  <li key={shortid()}><button type="button" onClick={(e) => setCurrentSize({size: size.name, price: size.additionalPrice})} className={clsx(size.name === currentSize.size && styles.active)}>{size.name}</button></li>))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color => <li key={shortid()}><button onClick={(e) => setCurrentColor({color: color})}type="button" className={clsx(styles['color' + upper(color)], color === currentColor.color && styles.active)} /></li>))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;