import Text from "./Text";
import Button from "./Button";
import Logo from "./Logo";

function Hero () {

return (
<section>
  <div className="hero">
  <div className="hero_container">
  <div className="hero_container-logo">
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
);
}

export default Hero