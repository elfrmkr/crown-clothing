import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { ToastMessage } from "../../toasts/toast";
import { ToastContainer } from "react-toastify";

const CollectionItem = ({ item, addItem }) => {
  const notify = React.useCallback((type, message) => {
    ToastMessage({ type, message });
  }, []);

  const dismiss = React.useCallback(() => {
    ToastMessage.dismiss();
  }, []);

  // we are doing this because we want these values to use still
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        className="custom-button"
        onClick={() => {
          addItem(item);
          notify("success", "Success!");
        }}
        inverted
      >
        {" "}
        ADD TO CHART
      </CustomButton>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
