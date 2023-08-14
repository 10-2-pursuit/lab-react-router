import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { Link, useParams } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const params = useParams();
  const { kind } = params

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* All cats section */}

        {kind === "cats" &&
          cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)}

        {/* All dogs section */}
        {kind === "dogs" &&
          dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)}

        {!kind &&
          pets.map((pet) => (
            <Pet key={pet.id} kind={pet.kind.toLowerCase()} pet={pet} />
          ))}
      </section>
    </section>
  );
};

export default PetsList;
