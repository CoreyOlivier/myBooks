import React from "react";
import { get } from "lodash";

export function BookCover({ book }) {
  console.log(get(book, ["VolumeInfo"]));
  return (
    <img
      src={get(book, ["volumeInfo", "imageLinks", "smallThumbnail"])}
      alt="cover"
    />
  );
}
