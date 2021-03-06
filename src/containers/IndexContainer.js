import { connect } from 'react-redux'
import Index from '../views/Index'
import { initBMap, setCustomerLat, setCustomerLng, setCustomerAddress, setDestination } from '../actions/index'

const mapStateToProps = state => {
    return {
      BMap: state.BMap,
      lat: state.lat,
      lng: state.lng,
      customerAddress: state.customerAddress,
      destination: state.destination
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      initBMap: (BMap) => {
          dispatch(initBMap(BMap))
      },
      setCustomerLng: (lng) => {
    	  dispatch(setCustomerLng(lng))
			},
			setCustomerLat: (lat) => {
				dispatch(setCustomerLat(lat))
      },
      setCustomerAddress: (customerAddress) => {
        dispatch(setCustomerAddress(customerAddress))
      },
      setDestination: (destination) => {
        dispatch(setDestination(destination))
      }
    }
  }
  
const IndexContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Index)

export default IndexContainer