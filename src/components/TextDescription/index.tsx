import React, { useState, useEffect } from "react";
import { TypeDescription } from "./type";
import { TextDescriptiona } from "./style";

export default function TextDescription(props) {
  const { pokeProps, description } = props;

  return (
    <>
      {description?.flavor_text_entries.slice(1, 7).map((item) => (
        <TextDescriptiona>
          {item.flavor_text} <br />
        </TextDescriptiona>
      ))}
    </>
  );
}
