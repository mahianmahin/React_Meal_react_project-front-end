import Modal from '../UI/Modal';
import style from './Cart.module.css';

const Cart = props => {
    return (
        <Modal>
            <div className={style.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={style.actions}>
                <button className={style['button--alt']} onClick={props.onClose}>Close</button>
                <button className={style.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;