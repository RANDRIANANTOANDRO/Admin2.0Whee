import React , { Component, useState, useEffect } from 'react'

import Table from '../components/table/Table'



import customerList from '../assets/JsonData/customers-list.json'
import UserService from '../'


const customerTableHead = [
    'id',
    '',
    'Nom',
    'Prenom',
    'Mail',
    'Genre',
    'Contact',
    'Adresse',
    'Centre d \'intérets',
    'Evaluation'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.photo}</td>
        <td>{item.nom}</td>
        <td>{item.prenom}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.contact}</td>
        <td>{item.date_naissance}</td>
        <td>{item.interests}</td>
        <td>{item.vehicules}</td>
        <td>{item.evaluation}</td>
    </tr>
)

const Customers = () => {
  
const [users, setUsers] = useState([]);

    
    useEffect(() => {
        const logInterest = async () => {
          const resp = await InterestService.getInterest();
          setUsers(resp.data);
        };
        logInterest();
      }, []);
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
                                bodyData={customerList}
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
