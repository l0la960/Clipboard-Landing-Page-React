import Text from "./Text";
import devicesImage from './assets/image-devices.png'

function ThirdSection () {

return (
  <section>
  <div className="container_third-section-text">
  <Text heading='Access Clipboard Anywhere'  text= "Whether you're on the go, or at your computer, you can access all your Clipboard snippers in a few simple clicks." />
  </div>
  <div className="container_third-section-image" >
  <img src={devicesImage} alt="image of devices" className="devices-image"></img>
  </div>
  </section>
);
}

export default ThirdSection