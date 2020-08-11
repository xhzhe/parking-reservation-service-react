import React from 'react'
import PropTypes from 'prop-types';
import ParkingLotInfo from '../../components/OrderCreatePage/ParkingLotInfo'
import BookInfoForm from '../../components/OrderCreatePage/BookInfoForm'
import './index.css'

class OrderCreatePage extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="item">
            <ParkingLotInfo 
            parkingLot={this.props.parkingLot}
            />
          </div>
          <div className="item">
            <BookInfoForm 
            parkingLot={this.props.parkingLot}
            setBookOrder={this.props.setBookOrder}
            />
          </div>
        </div>
      </div>
    );
  }
}


OrderCreatePage.propTypes = {
  parkingLot:PropTypes.object.isRequired,
  setBookOrder:PropTypes.func.isRequired
}

export default OrderCreatePage;