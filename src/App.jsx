import Text from "./Text"
import Logo from "./Logo"
import Button from "./Button"
import Footer from "./Footer"
import computerImage from './assets/image-computer.png'
import devicesImage from './assets/image-devices.png'
import blacklistImage from './assets/icon-blacklist.svg'
import snippetsImage from './assets/icon-text.svg'
import previewImage from './assets/icon-preview.svg'
import googleLogo from './assets/logo-google.png'
import ibmLogo from './assets/logo-ibm.png'
import microsoftLogo from './assets/logo-microsoft.png'
import hpLogo from './assets/logo-hp.png'
import vectorgraphicsLogo from './assets/logo-vector-graphics.png'



function App() {
 
  return (
  <main>
  <section>
  <div className="hero">
  <div className="hero_container">
  <div className="hero_container-banner">
  <Logo/>
  </div>
  <div className="hero_container--text">
  <Text heading='A history of everything you copy'  text= 'Clipboard allows you to track and organize everything you copy. Instantly acess your Clipboard on all your devices.' />
  </div>
  <div className="hero-btns">
  <Button btnText='Download for IOS' color='hsl(171, 66%, 44%)' boxShadow=" 0px 2px 2px 2px hsl(170, 75%, 35%)"/>
  <Button btnText='Download for Mac' color='hsl(233, 100%, 69%)' boxShadow="0px 2px 2px 2px hsl(233, 46%, 56%)"/>
  </div>
  </div>
  </div>
  </section>

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
  

  <section>
  <div className="container_third-text">
  <Text heading='Access Clipboard Anywhere'  text= "Whether you're on the go, or at your computer, you can access all your Clipboard snippers in a few simple clicks." />
  </div>
  <div className="container_third-section-image" >
  <img src={devicesImage} alt="image of devices" className="devices-image"></img>
  </div>
  </section>

  <section>
  <div className="container_features">
  <div className="container_features-content-heading">
  <Text heading='Supercharge your workflow'  text= "We've got the tools to boost your productivity." />
  </div>

    <div className="container_features-content">
    <div className="container_features-container">
    <img src={blacklistImage} alt="create blacklist image"></img>
    <Text heading='Create blacklists' text='Ensure sensitive information never makes its way to your Clipboard by excluding certain sources.' />
    </div>

     <div className="container_features-container">
    <img src={snippetsImage} alt='plain text snippets image'></img>
    <Text heading='Plain text snippets' text='Remove unwanted formatting from copied text for a consistent look.' />
    </div>

     <div className="container_features-container">
    <img src={previewImage} alt='sneak preview image'></img>
    <Text heading='Sneak preview' text='Quick prreview of all snippets on your Clipboard for easy access.' />
    </div>
    </div>
 </div>

  </section>


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


  <section>
  <div className="container_last-section">
  <div className="container_last-section-text">
  <Text heading='Clipboard for IOS and Mac OS' text= "Available for free on the App Store. Download for Mac or IOS, sync with icloud and you're ready to start adding to your clipboard." />
</div>
   <div className="container_last-section-btns">
   <Button btnText='Download for IOS' color='hsl(171, 66%, 44%)' boxShadow=" 0px 2px 0px 2px hsl(170, 75%, 35%)"/>
   <Button btnText='Download for Mac' color='hsl(233, 100%, 69%)' boxShadow="0px 2px 0px 2px hsl(233, 46%, 56%)"/>
   </div>

    </div>
  </section>

  <Footer/>
  </main>

  
  )
}

export default App
