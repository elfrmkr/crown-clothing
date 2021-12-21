import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { ToastMessage } from "../../toasts/toast";
import { ToastContainer, Zoom } from "react-toastify";

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
    <div>
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <CustomButton
          className="custom-button"
          onClick={() => {
            addItem(item);
            notify("success", "Your item has been added!");
          }}
          inverted
        >
          {" "}
          ADD TO CHART
        </CustomButton>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        transition={Zoom}
        hideProgressBar={true}
        newestOnTop
        draggable={true}
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
