import { Routes, Route } from "react-router-dom";
import { LinkList } from "./pages";

export const App = () => (
  <Routes>
    <Route path="/" element={<LinkList />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Routes>
);
