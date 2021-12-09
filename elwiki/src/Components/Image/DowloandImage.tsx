import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

export const DowloadImage = (props: any) => {
  const [Imagen, setImagen] = useState("");
  Axios({
    url: `http://localhost:8081/file/download/${props.name}`,
    method: "GET",
    responseType: "blob",
  })
    .then((response) => {
      const url = URL.createObjectURL(response.data);
      setImagen(url);
    })
    .catch((error) => {
      console.log(error);
    });

  return <img src={Imagen} style={{ width: `${props.width}` }} />;
};
