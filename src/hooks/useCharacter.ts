import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  addCharacter,
  updateCharacter,
  removeCharacter,
} from "../store/slices/characterSlice";

export const useCharacter = () => {
  const dispatch = useDispatch();
  const characters = useSelector(
    (state: RootState) => state.characters.characters
  );

  const createCharacter = (character: any) => {
    dispatch(addCharacter(character));
  };

  const editCharacter = (character: any) => {
    dispatch(updateCharacter(character));
  };

  const deleteCharacter = (id: string) => {
    dispatch(removeCharacter(id));
  };

  return {
    characters,
    createCharacter,
    editCharacter,
    deleteCharacter,
  };
};
