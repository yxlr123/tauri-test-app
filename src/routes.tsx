import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1/>}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}