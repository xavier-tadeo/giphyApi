import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGif = (categorie) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    setTimeout(() => {
      getGif(categorie).then((img) => {
        setState({
          data: img,
          loading: false,
        });
      });
    }, 4000);
  }, [categorie]);

  return state;
};
