import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
// in order to store what users' typing in, we need to use class
import { toast, ToastContainer, Zoom } from "react-toastify";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  // target will be input element itself
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleRender = () => {
    setTimeout(() => {
      this.setState({ render: !this.state.render });
    }, 7000);

    toast.info("Logging in!", {
      theme: "colored",
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span style={{ marginBottom: "10px" }}>
          Sign in with your email and password
        </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
            style={{ marginBottom: "20px" }}
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={() => {
                signInWithGoogle();
                this.handleRender();
              }}
              isGoogleSignIn
            >
              {" "}
              Sign in with Google{" "}
            </CustomButton>
          </div>
        </form>
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
  }
}

export default SignIn;
