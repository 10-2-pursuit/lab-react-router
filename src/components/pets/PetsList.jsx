import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useParams, useNavigate } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );
  let { type } = useParams();
  console.log(type);
  useNavigate("/pets/cats");

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {type == "cats"
          ? cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)
          : type == "dogs"
          ? dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)
          : pets.map((pet) => (
              <Pet key={pet.id} kind={pet.kind.toLowerCase()} pet={pet} />
            ))}
      </section>
    </section>
  );
};

export default PetsList;
