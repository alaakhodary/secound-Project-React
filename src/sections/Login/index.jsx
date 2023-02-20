import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer";
import ToggleButton from "../../Components/ToggleButton";

import google from "../../asset/google.png";
import face from "../../asset/facebook.png";
import eye from "../../asset/eye.png";

import {
  DivBox,
  DivCheckbox,
  DivPassword,
  DivUserName,
  Heading,
  Input,
  InputCheck,
  Label,
  LabelPass,
  Remember,
  LogIn,
  DivOr,
  Or,
  DivGoogle,
  Buttongoogle,
  Imagegoogle,
  DivFacebook,
  Buttonface,
  Imageface,
  RigesterAccount,
  RigesterNow,
  ErrorsList,
  ErrorMessage,
} from "./style";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthorizationContext";
import * as yup from "yup";
import axios from "axios";

const Login = () => {
  const {
    isLoading,
    setIsLoading,
    setisAuthorized,
    setErrors,
    Errors,
    setToken,
  } = useAuthContext();

  const [Username, SetUsername] = useState("");
  const [Password, Setpassword] = useState("");
  const [checkbox, Setcheckbox] = useState(false);

  const navigate = useNavigate();
  const goToRigester = () => {
    navigate("/Signup");
  };

  const schema = yup.object().shape({
    Username: yup.string().email().required(),
    Password: yup.string().min(8).required(),
    checkbox: yup
      .boolean()
      .oneOf([true], "You should check the checkbox")
      .required(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    schema
      .validate(
        {
          checkbox,
          Password,
          Username,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const res = await axios.post(
          `https://react-tt-api.onrender.com/api/users/login`,
          {
            email: Username,
            password: Password,
          }
        );
        if (res) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          setToken(res.data.token);
          localStorage.setItem("name", res.data.name);
          setErrors([]);
          setIsLoading(false);
          setisAuthorized(true);
        }
      })
      .catch((e) => {
        setErrors(e.errors || [e.message]);
        setIsLoading(false);
      });
  };

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "email") SetUsername(value);
    if (id === "Password") Setpassword(value);
    if (id === "checkbox") Setcheckbox(e.target.checked);
  };

  return (
    <>
      <div style={{ margin: "2rem" }}>
        <ToggleButton />
      </div>
      <DivBox>
        <Heading>Sign in</Heading>
        <form onSubmit={handleSubmit}>
          <ErrorsList>
            {Errors.map((error, index) => {
              return <ErrorMessage key={index}>{error}</ErrorMessage>;
            })}
          </ErrorsList>
          <DivUserName>
            <Label htmlFor="email">Username</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email or phone"
              onChange={handleChangeInput}
              value={Username}
            />
          </DivUserName>
          <DivPassword>
            <Label htmlFor="Password">Password</Label>
            <LabelPass>Forgot Password</LabelPass>
          </DivPassword>
          <div style={{ position: "relative" }}>
            <img
              src={eye}
              alt="eye"
              style={{
                position: "absolute",
                top: "16px",
                right: "0.5rem",
                cursor: "pointer",
              }}
            />
            <Input
              type="password"
              id="Password"
              placeholder="Type here"
              value={Password}
              onChange={handleChangeInput}
            />
          </div>

          <DivCheckbox>
            <InputCheck
              type="checkbox"
              id="checkbox"
              onChange={handleChangeInput}
              checked={checkbox}
            />
            <Remember>Remember me</Remember>
          </DivCheckbox>
          <LogIn type="submit" value={isLoading ? "Loading..." : "Log In"} />
        </form>
        <DivOr>
          <hr />
          <Or>OR</Or>
        </DivOr>
        <DivGoogle>
          <Imagegoogle src={google} alt="googleImage" />
          <Buttongoogle>Continue with Google</Buttongoogle>
        </DivGoogle>
        <DivFacebook>
          <Imageface src={face} alt="FaceImage" />
          <Buttonface>Continue with Facebook</Buttonface>
        </DivFacebook>
        <RigesterAccount>
          <p>Don’t have an account?</p>
          <RigesterNow onClick={() => goToRigester()}>Register now</RigesterNow>
        </RigesterAccount>
      </DivBox>
      <Footer />
    </>
  );
};

export default Login;
