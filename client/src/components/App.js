import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StreamCreate from "./streams/streamCreate";
import StreamShow from "./streams/streamShow";
import StreamDelete from "./streams/streamDelete";
import StreamEdit from "./streams/streamEdit";
import StreamList from "./streams/streamList";
import Header from "./header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="ui container">
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
