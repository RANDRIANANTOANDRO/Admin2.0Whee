import "./single.css";
import Topnav from "../topnav/TopNav";
import Sidebar from "../sidebar/Sidebar";
import 


const EditUser = () => {
    
  return (
    <div className="single">
      
      <div className="singleContainer">
        
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Fanjava RANDRIANATOANDRO</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Contact:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adresse:</span>
                  <span className="itemValue">
                  Lot 100-I Bis Ambohinambo TALATAMATY
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Genre:</span>
                  <span className="itemValue">Homme</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Evaluation:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Vos Centres d'intérêts</h1>
          {/* <List/> */}
        </div>
      </div>
    </div>
  );
};

export default EditUser;