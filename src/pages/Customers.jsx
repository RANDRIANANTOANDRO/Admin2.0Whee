import React , { Component, useState, useEffect } from 'react'

import Table from '../components/table/Table'



import customerList from '../assets/JsonData/customers-list.json'
import UserService from '../services/UserService'
import { Link } from "react-router-dom";
import YerOrNo from './YerOrNo';



const customerTableHead = [
    'id',
    'img',
    'Nom',
    'Prenom',
    'Mail',
    'Genre',
    'Contact',
    'Adresse',
    'Action'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    
    <tr key={index}>
        <td>{item.idUser}</td>
        <td><img src={"images/blog_2.jpg"} className="tableImage" /></td>
        <td>{item.nom}</td>
        <td>{item.prenom}</td>
        <td>{item.mail}</td>
        <td>{item.password}</td>
        <td>{item.contact}</td>
        <td>{item.date_naissance}</td>
        <td>
            <button className="deleteButton"><i class="fa fa-trash" aria-hidden="true" id="trashIcon"></i>Bloquer</button>
           
            <Link to={`/edit/${item.idUser}`}>
            <button className="editButton"><i class="fa-solid fa-pen-to-square"></i>  Modifier</button>
            </Link>

        </td>
    </tr>
)
// const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to={'/users/test/'+ '{data.idUsers}'} style={{ textDecoration: "none" }}>
//               <div className="viewButton">Voir Plus</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.idEvent)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];

const Customers = () => {
  
const [users, setUsers] = useState([]);

    
    useEffect(() => {
        const logInterest = async () => {
          const resp = await UserService.getCompte();
          setUsers(resp.data);
        };
        logInterest();
      }, [users, setUsers]);
    return (
        <div>
            <h2 className="page-header">
                Utilisateurs
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={users}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
