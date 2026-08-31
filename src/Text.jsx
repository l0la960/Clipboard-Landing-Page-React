function Text (props) {


    return(
    <>
    <h1 className="heading">{props.heading}</h1>
    <p className="text">{props.text}</p>
    </>
    );
}

export default Text