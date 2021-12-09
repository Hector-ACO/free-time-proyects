import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { Character } from "./interface";

export const CharacterList = () => {
  const [character, setCharacter] = useState<Character[]>([]);

  Axios({
    url: "http://localhost:8081/Character/all",
    method: "GET",
  })
    .then((response) => {
      setCharacter(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return character;
};
