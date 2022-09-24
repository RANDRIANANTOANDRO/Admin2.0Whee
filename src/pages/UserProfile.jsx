import React from 'react'

function UserProfile() {
  return (
    <div>
  <form
    className="form form-vertical"
    action="/site/avatar-upload/1"
    method="post"
    encType="multipart/form-data"
  >
    <div className="row">
      <div className="col-sm-4 text-center">
        <div className="kv-avatar">
          <div className="file-loading">
            <input id="avatar-1" name="avatar-1" type="file" required="" />
          </div>
        </div>
        <div className="kv-avatar-hint">
          <small>Select file &lt; 1500 KB</small>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="email">
                Email Address<span className="kv-reqd">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                required=""
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="pwd">
                Password<span className="kv-reqd">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                name="pwd"
                required=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                className="form-control"
                name="fname"
                required=""
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lname"
                required=""
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <hr />
          <div className="text-right">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
  <div
    id="kv-avatar-errors-1"
    className="text-center"
    style={{ display: "none" }}/>
</div>

  )
}

export default UserProfile