import React, { useEffect } from "react";
import { ImageInput, ImageField } from "react-admin";
import { useForm, useFormState } from "react-final-form";
import toBase64 from "image-to-base64";

const ImageInputBase64 = props => {
  const { source } = props;
  const form = useForm();
  const formState = useFormState();
  const image = formState.values[source];

  useEffect(() => {
    if (image) {
      if (Array.isArray(image)) {
        image.map((imageRes, index) => {
          toBase64(imageRes.src).then(res => {
            form.change(
              source + "[" + index + "]" + ".src",
              "data:" + imageRes.rawFile.type + ";base64," + res
            );
          });
        });
      } else {
        toBase64(image.src).then(res => {
          form.change(
            source + ".src",
            "data:" + image.rawFile.type + ";base64," + res
          );
        });
      }
    }
  }, [image]);

  return (
    <ImageInput {...props}>
      <ImageField source="src" title="title" />
    </ImageInput>
  );
};

export default ImageInputBase64;
