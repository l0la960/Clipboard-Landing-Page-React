import Text from "../REUSABLE COMPONENTS/Text";
import Button from "../REUSABLE COMPONENTS/Button";
import computerImage from '../assets/image-computer.png'

function MainContent () {

return (
  <section>
  <div className="container_main-content">

  <div className="container_main-content-heading">
  <Text heading='Keep track of your Snippets'  text= 'Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and IOS apps will help you organize everything.'/>
  </div>

  <div className="container_main-content-image-text-group">
  <div id="container_main-content-image">
  <img className='computer-image' src={computerImage} alt="computer image"></img>
  </div>
  <div id="container_main-content-text">
  <div className="container_main-content-text-one">
  <Text heading='Quick Search'  text= 'Easily search your snippets by content, category, web address, application, and more.' />
  </div>
   <div  className="container_main-content-text-one">
  <Text heading='Icloud Sync'  text= 'Instantly saves and syncs snippets accross all your devices.' />
  </div>
   <div  className="container_main-content-text-one">
  <Text heading='Complete History'  text= 'Retrieve any snippets from the first moment you started using the app.' />
  </div>

  </div>
  </div>

  </div>
  </section>
);

}

export default MainContent