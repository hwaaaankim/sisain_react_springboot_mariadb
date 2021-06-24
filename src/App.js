import { GlobalStyles } from "./global-styles";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, HeaderSub } from "./components";

function App() {
  const [archive, setArchive] = useState(["", "", ""]);
  const [gallery, setGallery] = useState(["", "", ""]);
  const archiveChange = (event) => {
    const temp = archive;
    if (event.tag === "year") {
      temp[0] = event.value;
      setArchive([...temp]);
    } else if (event.tag === "photographer") {
      temp[1] = event.value;
      setArchive([...temp]);
    } else {
      temp[2] = event.value;
      setArchive([...temp]);
    }
  };
  const galleryChange = (event) => {
    const temp = gallery;
    if (event.tag === "year") {
      temp[0] = event.value;
      setGallery([...temp]);
    } else if (event.tag === "photographer") {
      temp[1] = event.value;
      setGallery([...temp]);
    } else {
      temp[2] = event.value;
      setGallery([...temp]);
    }
  };

  const [bgColor, setBgColor] = useState("white");
  return (
    <>
      <GlobalStyles color={bgColor}></GlobalStyles>
      <Router>
        <Route path="/" render={() => <Header color={bgColor}></Header>} />
        <Route
          path="/person/:id"
          render={() => <HeaderSub color={bgColor}></HeaderSub>}
        />
        <Route
          path="/photo/:id"
          render={() => <HeaderSub color={bgColor}></HeaderSub>}
        />
        <Route
          path="/archive"
          render={() => (
            <HeaderSub color={bgColor} onChange={archiveChange}></HeaderSub>
          )}
        />
        <Route
          path="/gallery"
          render={() => (
            <HeaderSub color={bgColor} onChange={galleryChange}></HeaderSub>
          )}
        />
      </Router>
    </>
  );
}

export default App;
