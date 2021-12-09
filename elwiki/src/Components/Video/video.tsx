import React from "react";

export const FirstVideo = () => {
  const imagen = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/42pARVpGf7E",
      title: "Elsword KR: Aisha 4th path",
    },
  ];

  return (
    <div>
      {imagen.map((item) => {
        return (
          <div key={item.id} className="embed-responsive embed-responsive-4by3">
            <iframe
              className="embed-responsive-item"
              src={item.url}
              title={item.title}
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};
export const SecondoVideo = () => {
  // Datos del Video de Youtube

  const imagen = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/OeVVEe-jzlQ",
      title: "Elsword KR: Aisha 4th path",
    },
  ];

  return (
    <div>
      {imagen.map((item) => {
        return (
          <div key={item.id} className="embed-responsive embed-responsive-4by3">
            <iframe
              className="embed-responsive-item"
              src={item.url}
              title={item.title}
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};
export const TerzoVideo = () => {
  // Datos del Video de Youtube

  const imagen = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/YVplsE3_dcQ",
      title: "Elsword KR: Aisha 4th path",
    },
  ];

  return (
    <div>
      {imagen.map((item) => {
        return (
          <div key={item.id} className="embed-responsive embed-responsive-4by3">
            <iframe
              className="embed-responsive-item"
              src={item.url}
              title={item.title}
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};
export const QuartoVideo = () => {
  // Datos del Video de Youtube

  const imagen = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/sBH1cQxwteI",
      title: "Elsword KR: Aisha 4th path",
    },
  ];

  return (
    <div>
      {imagen.map((item) => {
        return (
          <div key={item.id} className="embed-responsive embed-responsive-4by3">
            <iframe
              className="embed-responsive-item"
              src={item.url}
              title={item.title}
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};
