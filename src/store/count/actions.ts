import { action } from "typesafe-actions";
import { CountTypes, Count } from "./types";

export const addOne = () => action(CountTypes.ADD);
export const subtractOne = () => action(CountTypes.SUBTRACT);
