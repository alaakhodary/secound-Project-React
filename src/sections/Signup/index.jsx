import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer";
import ToggleButton from "../../Components/ToggleButton";

import { useAuthContext } from "../../context/AuthorizationContext";

import * as yup from "yup";

import { ErrorMessage, ErrorsList, InputCheck, Label } from "../Login/style";

import {
  Agree,
  Divall,
  DivEmail,
  Divfhone,
  Divfhoneflex,
  DivName,
  DivPass,
  DivRePass,
  HaveAnAccount,
  Headings,
  InputEmail,
  InputName,
  InputPass,
  InputRePass,
  InputRigerster,
  InputSurName,
  PAgree,
  PHaveAnAccount,
  Rigester,
  Selectfhone,
  SelectInputfhone,
  SpanAgree,
  SpanLogin,
  DivBoxs,
} from "./style";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/");
  };

  const regularExpression =
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

  const {
    isLoading,
    setIsLoading,
    setisAuthorized,
    setErrors,
    Errors,
    setToken,
    setusername,
  } = useAuthContext();

  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("UZ +998");

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(6, "Name must be at least 6 characters")
      .max(16, "Name must be no more than 16 characters")
      .required("Name is required"),
    surname: yup
      .string()
      .min(6, "SurName must be at least 6 characters")
      .max(16, "SurName must be no more than 16 characters")
      .required("SurName is required"),
    phone: yup.string().required(),

    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(regularExpression, "Invalid Password")
      .required("Password is required"),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    checked: yup
      .boolean()
      .oneOf([true], "You must agree to the terms and conditions")
      .required(),
    selectedOption: yup
      .string()
      .oneOf(["UZ +998", "UZ +997", "UN +967"], "Invalid option selected"),
  });

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "name") setName(value);
    if (id === "surname") setSurName(value);
    if (id === "email") setEmail(value);
    if (id === "phone") setPhone(value);
    if (id === "password") setPassword(value);
    if (id === "confirmpass") setConfirmpass(value);
    if (id === "checked") setChecked(e.target.checked);
    if (id === "phoneA") setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    schema
      .validate(
        {
          name,
          email,
          password,
          surname,
          phone,
          confirmpass,
          checked,
          selectedOption,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const res = await axios.post(
          `https://react-tt-api.onrender.com/api/users/signup`,
          {
            name: name,
            email: email,
            password: password,
          }
        );
        if (res) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          setusername(res.data.name);
          localStorage.setItem("name", res.data.name);
          setErrors([]);
          setIsLoading(false);
          setisAuthorized(true);
        }
      })
      .catch((e) => {
        setErrors(e.errors || [e.message]);
        setIsLoading(true);
      });
  };

  return (
    <>
      <div style={{ margin: "2rem" }}>
        <ToggleButton />
      </div>
      <DivBoxs>
        <Headings>Register</Headings>
        <ErrorsList>
          {Errors.map((error, index) => {
            return <ErrorMessage key={index}>{error}</ErrorMessage>;
          })}
        </ErrorsList>
        <form onSubmit={handleSubmit}>
          <Divall>
            <DivName>
              <Label htmlFor="name">Name</Label>
              <InputName
                type="text"
                id="name"
                placeholder="Type here"
                onChange={handleChangeInput}
                value={name}
              />
            </DivName>
            <DivName>
              <Label htmlFor="surname">Surname</Label>
              <InputSurName
                type="text"
                id="surname"
                placeholder="Type here"
                onChange={handleChangeInput}
                value={surname}
              />
            </DivName>
          </Divall>
          <DivEmail>
            <Label htmlFor="email">Your e-mail </Label>
            <InputEmail
              type="email"
              id="email"
              placeholder="example@mail.com"
              onChange={handleChangeInput}
              value={email}
            />
          </DivEmail>
          <Divfhone>
            <Label htmlFor="phone">Phone</Label>
            <Divfhoneflex>
              <Selectfhone
                name="phoneA"
                id="phoneA"
                value={selectedOption}
                onChange={handleChangeInput}
              >
                <option value="970">PS +970</option>
                <option value="972">IS +972</option>
                <option value="962">JD +962</option>
              </Selectfhone>
              <SelectInputfhone
                type="tel"
                id="phone"
                name="phone"
                placeholder="00-000-00-00"
                onChange={handleChangeInput}
                value={phone}
              />
            </Divfhoneflex>
          </Divfhone>
          <DivPass>
            <Label htmlFor="Password">Password</Label>
            <InputPass
              type="password"
              id="password"
              placeholder="At least 6 characters."
              onChange={handleChangeInput}
              value={password}
            />
          </DivPass>
          <DivRePass>
            <Label htmlFor="RepeatPassword">Repeat password</Label>
            <InputRePass
              type="password"
              id="confirmpass"
              placeholder="Type here"
              onChange={handleChangeInput}
              value={confirmpass}
            />
          </DivRePass>
          <Rigester>
            <InputRigerster
              type="submit"
              value={isLoading ? "loading..." : " Register now"}
            />
          </Rigester>
          <Agree>
            <InputCheck
              type="checkbox"
              id="checked"
              onChange={handleChangeInput}
              checked={checked}
            />
            <PAgree>
              I agree with <SpanAgree>Terms and Conditions</SpanAgree>
            </PAgree>
          </Agree>
        </form>
        <hr />
        <HaveAnAccount>
          <PHaveAnAccount>Already have an accaunt?</PHaveAnAccount>
          <SpanLogin onClick={() => goToLoginPage()}>Logn in</SpanLogin>
        </HaveAnAccount>
      </DivBoxs>
      <Footer />
    </>
  );
};

export default Signup;
