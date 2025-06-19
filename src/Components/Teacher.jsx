import React, { useState } from 'react'
import './Teacher.css'
import { user_data } from "./assets/user_data.jsx";
import user_icon from "./assets/user_icon.png";




const Teacher = () => {

    const department = ['All', 'Finance', 'Engineer', 'Art'];
    const statusOptions = [
        { label: 'All', color: null },
        { label: 'Active', color: "green" },
        { label: 'Inactive', color: "orange" },
        { label: 'Blocked', color: "red" },
        { label: 'Suspended', color: "darkorange" }
    ]
    const [selectStatus, setSelectStatus] = useState("");
    const [selectDepart, setSelectDepart] = useState("");
    const [showStatus, setShowStatus] = useState(false);
    const [showDepartment, setShowDepartment] = useState(false);


    const [query, setQuery] = useState('')
    const [dropbox, setDropbox] = useState(false)
    const [selectedValue, setSelectedValue] = useState('');


    const handleChange = (status) => {
        setSelectStatus(status)

    };

    const clearFilter = () => {
        setSelectStatus('')

    }
    const handleChangeD = (depart) => {
        setSelectDepart(depart)

    };

    const clearFilterD = () => {
        setSelectDepart('')

    }
    const handleStatus =()=>{
        setShowStatus(!showStatus)
        setShowDepartment(false)
    }
    const handleDepartment=()=>{
        setShowDepartment(!showDepartment)
        setShowStatus(false)
    }
    const handleDrop = ()=>{
        setDropbox(!dropbox)
        setShowStatus(false)
        setShowDepartment(false)
    }



    const handleClick = () => {
    }

    // const handleChange = (event) => {
    //     setSelectedValue(event.target.value);
    //   };


    return (


        <>
            <div className='main'>
                <div className='navbar'>
                    <h2>Welcome, User!</h2>
                    <div className="search-bar">
                        <i className="fa-solid fa-magnifying-glass" style={{ 'color': ' #B197FC', 'marginTop': '5px' }}>
                        <input type="text" placeholder='Search here...' onChange={(e) => setQuery(e.target.value.toLowerCase())} /></i>
                        <i className="fa-solid fa-arrow-right"> </i>
                    </div>
                    <i className="fa-solid fa-rectangle-list" onClick={handleDrop} style={{ "color": " #B197FC", 'marginLeft': '-50px', 'cursor': 'pointer' }}></i>
                    <i className="fa-sotdd fa-tdst-ul list" ></i>

                    {
                        dropbox ? <div className=' filter-container'>

                            <h3>Data Filter</h3>
                            <div className="dropdown">
                                <div className="divider">
                                    <div className="header">
                                        <span className="title" onClick={handleStatus}>Status</span>
                                        <span className="clear-btn" onClick={clearFilter}>x</span>
                                    </div>
                                    {showStatus ? <div className="options">
                                        {
                                            statusOptions.map((status) => (
                                                <label htmlFor="" className="option">
                                                    <div className="label">
                                                        {status.label}
                                                        {status.color && <span className='dot' style={{ backgroundColor: status.color }}></span>}
                                                    </div>
                                                    <input type="checkbox" checked={selectStatus === status.label} onChange={() => handleChange(status.label)} />
                                                </label>

                                            ))
                                        }
                                    </div> : null}

                                    {/* Department section */}
                                    <div className="header">
                                        <span className="title" onClick={handleDepartment}>Department</span>
                                        <span className="clear-btn" onClick={clearFilterD}>x</span>
                                    </div>
                                    {showDepartment ? <div className="options">
                                        {
                                            department.map((depart) => (
                                                <label htmlFor="" className="option">
                                                    <div className="label">
                                                        {depart}
                                                    </div>
                                                    <input type="checkbox" checked={selectDepart === depart} onChange={() => handleChangeD(depart)} />
                                                </label>

                                            ))
                                        }
                                    </div> : null}

                                </div>
                            </div>
                        </div> : null
                    }


                    <i className="fa-solid fa-bell" style={{ 'color': '#FFD43B', 'marginRight': '-60px' }}></i>
                    <div className="login">
                        <img src={user_icon} alt="" />
                    </div>
                </div>

                <div className='table-conatiner'>
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <td>Recoard Id</td>
                                <td>Teacher Name</td>
                                <td>Teacher Id</td>
                                <td>Department</td>
                                <td>Student</td>
                                <td>Status</td>
                                <td>All Details</td>
                            </tr>
                        </thead>
                        <tbody>
                            {user_data.filter((data) =>
                                data.teacher_name.toLowerCase().includes(query.toLowerCase())).map((data) => {

                                    return <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.teacher_name}</td>
                                        <td>{data.teacher_id}</td>
                                        <td>{data.department}</td>
                                        <td>{data.student}</td>
                                        <td>{data.status}</td>
                                        <td >
                                            <a href='#' style={{
                                                'color': ' rgb(12, 12, 122)',
                                                'textDecoration': ' none',
                                                ' margin': '10px auto'
                                            }}> View More <i className="fa-solid fa-greater-than"></i></a>
                                        </td>

                                    </tr>


                                })}



                        </tbody>
                    </table>



                </div>
            
            </div>
        </>
    )
}

export default Teacher
