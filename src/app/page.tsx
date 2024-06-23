"use client";
import { ChangeEvent, useState } from "react";

export default function Home() {
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (event) => {
  //       const imgElement = document.createElement("img");
  //       imgElement.src = event.target?.result as string;
  //       imgElement.onload = () => {
  //         if (imgElement.width === 992 && imgElement.height === 1280) {
  //           setSelectedImage(event.target?.result as string);
  //         } else {
  //           alert('');
  //         }
  //       };
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div>
      {/* <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button
        disabled={!selectedImage}
        onClick={() => alert("Изображение сохранено в localStorage!")}>
        Отправить
      </button> */}
    </div>
  );
}
