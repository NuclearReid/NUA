import FAQ from '../../components/FAQ';
import About from '../../components/About';
import Stats from '../../components/Stats';
import LandingHeader from '../../components/LandingHeader';

export default function Landing() {
    
  return (
    <>
        <LandingHeader />
        <About />
        <Stats />
        <div className='p-5 col-7'>
            <FAQ />
        </div>      
    </>
  );
}
