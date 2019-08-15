import React from 'react';
import { addFeature } from '../actions/index'
import { connect } from "react-redux";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={ () => {
        props.addFeature({
          id: props.feature.id,
          name: props.feature.name,
          price: props.feature.price
        })
      }
      }className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    // additionalPrice: state.additionalPrice,
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature);

// onClick={() => {
//           props.addFeature({
//             id: props.feature.id,
//             name: props.feature.name,
//             price: props.feature.price
//           });
//         }}
