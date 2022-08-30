import styles from '../../components/Product/Product.module.scss'
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size => <li key={size.name}><button type="button" onClick={(e) => props.setCurrentSize({size: size.name, price: size.additionalPrice})} className={clsx(size.name === props.currentSize && styles.active)}>{size.name}</button></li>))}
      </ul>
    </div>
  )
}

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
}

export default OptionSize;
