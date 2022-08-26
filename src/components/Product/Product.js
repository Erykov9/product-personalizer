import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

const Product = props => {
  const upper = (param) => {
    return param[0].toUpperCase() + param.slice(1);
  }
 console.log(props.sizes[0].name);


  const [currentColor, setCurrentColor] = useState([
    {
      color: upper(props.colors[0]), 
    }
  ]);


  const [currentSize, setCurrentSize] = useState([
    {
      size: undefined,
    }
  ])

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
          <span className={styles.price}>Price: {props.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              
              <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li>
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

Product.propTypes = {

}

export default Product;