import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";

function ImageUpload() {
  // const [state, setState] = useState({
  //   avatar: "",
  //   name: "",
  //   picture: "",
  //   caption:"",
  // });
  
  // function handleChange(event) {
  //   //Verificar se estamos no input de arquivo para pegar o campo correto
  //   if (event.target.files) {
  //     return setState({
  //       ...state,
  //       [event.target.name]: event.target.files[0],
  //     });
  //   } else {
  //     setState({
  //       ...state,
  //       [event.target.name]: event.target.value,
  //     });
  //   }
  // }

  // async function handleUpload(file) {
  //   const uploadData = new FormData();
  //   uploadData.append("picture", file);
  //   const response = await api.post("/image-upload", uploadData);
  //   return response.data.url;
  // }

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   try {
  //     const pictureUrl = await handleUpload(state.picture);
  //     const response = await api.post("/signup", { ...state, pictureUrl });
  //     setErrors({ name: "", password: "", email: "", picture: "" });
  //     props.history.push("/book/all");
  //     console.log(response);
  //   } catch (err) {
  //     console.error(err.response);
  //     setErrors({ ...err.response.data.errors });
  //   }
  // }

  
  
  return (
    <div>

    </div>
  );
}

export default ImageUpload;
