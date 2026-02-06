import { Suspense } from 'react'
import './App.css'
import Daisynav from './component/daisy/Daisynav'
import Navbar from './component/navbar/Navbar'
import PricingOption from './component/pricingOptions/PricingOption'


const pricingPromise = fetch('price.json').then(res => res.json());

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <Daisynav></Daisynav> */}
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-infinity loading-md"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>
    </>
  )
}

export default App
