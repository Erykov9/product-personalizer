import styles from '../../components/Product/Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = props => {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map((color => <li key={color}><button onClick={(e) => props.setCurrentColor({color: color})} type="button" className={clsx(styles['color' + props.upper(color)], color === props.currentColor && styles.active)} /></li>))}
      </ul>
    </div>
  )
}

OptionColor.propTypes = {
  setCurrentColor: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  upper: PropTypes.func.isRequired,
}

export default OptionColor