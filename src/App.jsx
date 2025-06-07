// import { useState } from 'react'

// import './App.css'

// import TopHeader from './Components/TopHeader'

// import MainHeader from './Components/MainHeader'

// import NavbarOne from './Components/NavbarOne'

// import SliderSection from './Components/SimpleSlider'
// // import PolicyAndPortals from './Components/PolicyAndPortals'
// import EVPolicyAndPortals from './Components/PolicyAndPortals'
// import FooterAndSliderOne from './Components/FooterAndSliderOne'

// import ClientLogos from './Components/ClientLogos'
// import SimpleSlider from './Components/SimpleSlider'
// import DataTable from './Components/DataTable'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
// <TopHeader/>
// <MainHeader/>
// <NavbarOne/>
// <SimpleSlider/>
// <EVPolicyAndPortals/>
// <ClientLogos/>
// <FooterAndSliderOne/>
// <DataTable/>
//     </>
//   )
// }

// export default App


import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

import TopHeader from './Common/TopHeader'
import MainHeader from './Common/MainHeader'
import NavbarOne from './Common/NavbarOne'
import SliderSection from './Components/Home/Component/SimpleSlider'
import EVPolicyAndPortals from './Components/Home/Component/EVPolicyAndPortals'
import FooterAndSliderOne from './Common/FooterAndSliderOne'
import ClientLogos from './Components/Home/Component/ClientLogos'
import SimpleSlider from './Components/Home/Component/SimpleSlider'
import DataTable from './Components/DataTable'
import HomeOne from './Components/Home/homeOne'
import Policies from './Components/Policies/Policies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <TopHeader />
        <MainHeader />
        <NavbarOne />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomeOne/>} />
          <Route path="/policy-and-portals" element={<EVPolicyAndPortals />} />
          <Route path="/client-logos" element={<ClientLogos />} />
          <Route path="/footer" element={<FooterAndSliderOne />} />
          <Route path="/data-table" element={<DataTable />} />
          <Route path="/simple-slider" element={<SimpleSlider />} />
          <Route path="/data-table" element={<DataTable/>} />
              <Route path="/policies" element={<Policies/>} />
        </Routes>

        {/* Footer */}
        <FooterAndSliderOne />
      </div>
    </Router>
  )
}

export default App
