import Text from "../REUSABLE COMPONENTS/Text";
import Button from "../REUSABLE COMPONENTS/Button";


function LastSection () {

return (

  <section>
  <div className="container_last-section">
  <div className="container_last-section-text">
  <Text heading='Clipboard for IOS and Mac OS' text= "Available for free on the App Store. Download for Mac or IOS, sync with icloud and you're ready to start adding to your clipboard." />
</div>
   <div className="container_last-section-btns">
   <Button btnText='Download for IOS' color='hsl(171, 66%, 44%)' boxShadow=" 0px 2px 2px 2px hsl(170, 75%, 35%)"/>
   <Button btnText='Download for Mac' color='hsl(233, 100%, 69%)' boxShadow="0px 2px 2px 2px hsl(233, 46%, 56%)"/>
   </div>

    </div>
  </section>


);
}

export default LastSection 