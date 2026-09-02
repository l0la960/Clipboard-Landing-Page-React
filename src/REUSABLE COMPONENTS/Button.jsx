function Button (props) {
    const styles = {
    padding: '1.2rem',
    width:'15rem',
    border: 'none',
    borderRadius: '30px',
    boxShadow: props.boxShadow,
    color:'white',
    letterSpacing:'1px',
    cursor: 'pointer' , 
    fontWeight: '600',
    backgroundColor:props.color
    }

    return (
    <button style={styles}>{props.btnText}</button>
    )
}

export default Button