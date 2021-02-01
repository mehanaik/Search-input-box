import React from "react"
import CardBody from "./CardBody"
import Clicked from "./clicked"

//card component
class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardBody id={this.props.id} name={this.props.name} address={this.props.address} pincode={this.props.pincode}/>
        </article>
      )
    }
  }

export default Card