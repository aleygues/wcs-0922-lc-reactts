import axios from "axios";
import React, { useEffect, useState } from "react";
import { ISkill, IWilder } from "../interfaces";

interface IProps {
  wilder: IWilder;
  onCancelClicked: () => void;
  onWilderUpdated: () => void;
}

function AddSkillsToWilder(props: IProps) {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [wilderSkills, setWilderSkills] = useState<number[]>([]);

  function addSkillToWilder() {
    wilderSkills.push(skills[0].id);
    const newArray = wilderSkills.slice();
    setWilderSkills(newArray);
  }

  async function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/upvotes", {
      wilderId: props.wilder.id,
      skillsIds: wilderSkills,
    });
    props.onCancelClicked();
    props.onWilderUpdated();
  }

  useEffect(() => {
    async function fetch() {
      const result = await axios.get("http://localhost:5000/api/skills");
      setSkills(result.data);
    }
    fetch();
  }, []);

  return (
    <>
      <h2>Ajouter des skills sur {props.wilder.name}</h2>
      <form onSubmit={onSubmit}>
        {wilderSkills.map((wilderSkill, index) => (
          <>
            <select
              onChange={(e) => {
                wilderSkills[index] = Number(e.target.value);
                setWilderSkills(wilderSkills.slice());
              }}
            >
              {skills.map((skill) => (
                <option value={skill.id}>{skill.name}</option>
              ))}
            </select>
            <br />
          </>
        ))}
      </form>
      <br />
      <button type="submit" onClick={onSubmit}>
        GO!
      </button>
      <br />
      <button
        onClick={() => {
          addSkillToWilder();
        }}
      >
        Ajouter un skill
      </button>
      <br />
      <button
        onClick={() => {
          props.onCancelClicked();
        }}
      >
        Annuler
      </button>
    </>
  );
}

export default AddSkillsToWilder;
