import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Form />} />
        {/* <Route path="/resultados" element={<Results />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
