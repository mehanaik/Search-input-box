import React from "react"
import Clicked from "./clicked"
class CardBody extends React.Component {

  emptyCard(){
    return(
    alert("No User Found")
    )
  }

    render() {
      return (
        <div className="card-body" >  
          <h4>{this.props.id}</h4>
          <p><i>{this.props.name}</i></p>
          <p>{this.props.address}</p>
          <p>{this.props.pincode}</p>
        </div>
      )
    }
  }

export default CardBody