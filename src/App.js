import Navbar from './components/Navbar'
import Hero from './components/Hero'
import styles from './styles';
import Info from './components/Info';
import { infoData, steps } from './constants';
import Step from './components/Step';
function App() {
  return (
    <div className="bg-background w-full overflow-hidden">
      <div className={`flex justify-center items-center ${styles.gutter}`} >
        <div className='xl:max-w-[1280px] w-full' >
          <Navbar />  
        </div>
      </div>

      <hr className="bg-[#717B8C] opacity-20" />

      <div className="bg-background flex justify-center items-start">
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <hr className="bg-[#717B8C] opacity-20" />
          <div className={`${styles.gutter}`} >
            {infoData.map((data) => (
              <Info title={data.title} body={data.body} image={data.image} />
            ))}

            <div>
              <h1 className='text-center md:text-[57px] ss:text-[40px] text-[34px] font-bold tracking-wide mb-[67px]' >
                How it works
              </h1>
              <div className='flex justify-between items-center' >
                {steps.map((step) => (
                  <Step title={step.title} body={step.body} image={step.image} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
