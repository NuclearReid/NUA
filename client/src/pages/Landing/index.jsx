import FAQ from '../../components/FAQ';
import About from '../../components/About';
import StatsTable from '../../components/StatsTable';
import LandingHeader from '../../components/LandingHeader';

export default function Landing() {
    
  return (
    <>
        <LandingHeader />
        <About />
        <StatsTable />      
        <FAQ />
    </>
  );
}
