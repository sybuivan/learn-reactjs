import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import categoryApi from "./api/categoryApi";
import NotFound from "./components/NotFound";
import AbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

function App() {
  useEffect(() => {
    const fetchCategory = async () => {
      const categoryList = await categoryApi.getAll()
      console.log(categoryList);
    }

    fetchCategory()
  }, [])

  return (
    <div className="App">
      {/* <AbumFeature /> */}

      <p>
        <Link to="todo">Todo</Link>
      </p>
      <Link to="albums">Albums</Link>

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postid" to="/post/:postid" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todo" component={TodoFeature} />
        <Route path="/albums" component={AbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
