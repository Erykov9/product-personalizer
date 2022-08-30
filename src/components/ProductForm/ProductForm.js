import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";
import Button from "../Button/Button";
import styles from "../../components/Product/Product.module.scss";
import PropTypes from 'prop-types';


const ProductForm = props => {
  return (
    <form onSubmit={(e) => props.addToCart(e)}>
      <OptionSize sizes={props.sizes} setCurrentSize={props.setCurrentSize} currentSize={props.currentSize}/>
      <OptionColor currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} upper={props.upper} colors={props.colors}/>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

ProductForm.propTypes = {
  sizes: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  upper: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,

}


export default ProductForm;