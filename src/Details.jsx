import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import FetchPet from "./FetchPet";

const Details = () => {
  const {id } = useParams();

  return <h2>{id}</h2>;
};

export default Details;