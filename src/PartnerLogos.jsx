import googleLogo from './assets/logo-google.png'
import ibmLogo from './assets/logo-ibm.png'
import microsoftLogo from './assets/logo-microsoft.png'
import hpLogo from './assets/logo-hp.png'
import vectorgraphicsLogo from './assets/logo-vector-graphics.png'



function PartnerLogos() {
return (
<section>
  <div className="Container_logos-section">

  <div className="container_logos-container">
  <img src={googleLogo} alt='google logo'></img>
  </div>
   <div className="container_logos-container">
  <img src={ibmLogo} alt='ibm logo'></img>
  </div>
   <div className="container_logos-container">
  <img src={microsoftLogo} alt='microsoft logo'></img>
  </div>
   <div className="container_logos-container">
  <img src={hpLogo} alt='hp logo'></img>
  </div>
  <div className="container_logos-container">
  <img src={vectorgraphicsLogo} alt='vector graphics logo'></img>
  </div>

  </div>
  </section>
);
}

export default PartnerLogos