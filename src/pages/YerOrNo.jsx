import React, { Component } from 'react';
import PropTypes from 'prop-types';


class YerOrNo extends Component {
    render() {
        return (
            <div>
                <>
  {/* Modal HTML */}
  <div id="myModal" className="modal fade">
    <div className="modal-dialog modal-confirm">
      <div className="modal-content">
        <div className="modal-header flex-column">
          <div className="icon-box">
            <i className="material-icons"></i>
          </div>
          <h4 className="modal-title w-100">Are you sure?</h4>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>
            Do you really want to delete these records? This process cannot be
            undone.
          </p>
        </div>
        <div className="modal-footer justify-content-center">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</>

            </div>
        );
    }
}


YerOrNo.propTypes = {

};


export default YerOrNo;
