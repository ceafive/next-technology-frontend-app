import { merge } from "lodash";
import Card from "./Card";
import Input from "./Input";
import IconButton from "./IconButton";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(Card(theme), Input(theme), IconButton(theme));
}
