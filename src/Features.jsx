import Text from "./Text";
import blacklistImage from './assets/icon-blacklist.svg'
import snippetsImage from './assets/icon-text.svg'
import previewImage from './assets/icon-preview.svg'


function Features () {

return (
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

);
}

export default Features