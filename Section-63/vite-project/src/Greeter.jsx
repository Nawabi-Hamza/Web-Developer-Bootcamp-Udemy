


function Greeter({ person="anyone",from="anonymose" }) {
    
  return (
    <>
        <div style={StyleSheet.container}>
          <h3>Hi there, {person} !</h3>
          <p style={StyleSheet.paragraph}>it is from {from}</p>
        </div>
    </>
  )
}

const StyleSheet = {
  container:{
    border:"1px solid gray",
    padding:"1em 2em",
    margin:"5px"
  },
  paragraph:{
    color:"purple"
  }
}

export default Greeter