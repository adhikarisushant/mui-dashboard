import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Login from "./pages/login/Login";
import List from "./pages/list/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">  
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users" >
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />             
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>  
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
