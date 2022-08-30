import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const upper = (param) => {
    return param[0].toUpperCase() + param.slice(1);
  };



  const [currentColor, setCurrentColor] = useState(props.colors[0]);

  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = useMemo(() => {
    return props.basePrice + currentSize.price;
  }, [currentSize.price]);



  const addToCart = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('=========');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice);
    console.log('Size: ', currentSize.size);
    console.log('Color: ', currentColor.color);
  }
  




  return (
    <article className={styles.product}>
      <ProductImage currentColor={currentColor.color} name={props.name}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm addToCart={addToCart} sizes={props.sizes} setCurrentSize={setCurrentSize} currentSize={currentSize.size} currentColor={currentColor.color} setCurrentColor={setCurrentColor} upper={upper} colors={props.colors}/>
      </div>
    </article>
  )
};

export default Product;