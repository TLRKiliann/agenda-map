import React, { useState, useEffect } from 'react';
import { DataTypeContact } from '../Models/contactModel';
//import meetingServices from '../Services/meetingServices';
import phoneServices from '../Services/phoneServices';
import '../StylesPages/PhoneContact.scss';

export const PhoneContact:React.FC = () => {

  const [secDatas, setSecDatas] = useState<Array<DataTypeContact | any>>([]);
  const [searchName, setSearchName] = useState<string>("");
  const [filterData, setFilterData] = useState<Array<DataTypeContact | any>>([]);
  const [switchContactSearch, setSwitchContactSearch] = useState<boolean>(false);

  useEffect(() => {
    phoneServices
      .getAllContact()
      .then((initialContact:any) => {
        setSecDatas(initialContact);
      })
  }, []);

  const switchSearch= () => {
    setSwitchContactSearch(!switchContactSearch);
  };

  const writterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
  };

  const handleResultPhone = (event: React.MouseEvent<HTMLButtonElement>) => {
    //const searchName = event.target.value;
    setSearchName(searchName);
    const retrievePhone = secDatas.map(secData => secData).filter(secData => {
      return secData.firstname === searchName
        ? `${secData.firstname} ${secData.phone}` : null;
    })
    event.preventDefault();
    //console.log(retrievePhone)
    if (searchName === "") {
      setFilterData([]);
    } else {
      setFilterData(retrievePhone);
      setSearchName("");
    }
  };

  const handlePhoneDelete = (id: number) => {
    const secData = secDatas.find(secData => secData?.id === id);
    if (window.confirm(`Delete ${secData?.firstname} ${secData?.lastname} ?`)) {
      phoneServices
        .removePhone(id)
        .then(returnsecData => {
          setSecDatas(secDatas?.filter(secData => secData?.id !== id))
        })
        .catch((error) => {
          alert(`The note '${secData?.firstname} ${secData?.lastname}'\
            was already deleted from server`)
          setSecDatas(secDatas.filter(secData => secData?.id !== id))
        });
    } else {
      return null;
    }
  };

  return (
    <div className="phonecontact">
      <h1 title="All contacts are here !">Phone Contacts</h1>

      <details className="details--div">
        <summary>info</summary>
        <p>Epcot is a theme park at Walt Disney World Resort 
          featuring exciting attractions, international pavilions,
          award-winning fireworks and seasonal special events.
        </p>
      </details>

      <div className="searchSwitch">
        <button onClick={switchSearch}>
          Search Contact
        </button>
      </div>

      {switchContactSearch ? (

        <div className="search">

          <div className="div--xclosephone">
            <p 
              className="x--close" 
              onClick={switchSearch}>
              X
            </p>
          </div>

          <div className="sub--search">
            <h2>
              Search Contact
            </h2>
          </div>
          <div className="sub--searchnext">
            <input
              type="text"
              value={searchName} 
              onChange={writterName}
              placeholder="Enter name of contact"
            />
          </div>
          <div className="sub--searchnext">
            <button onClick={handleResultPhone}>
              Search
            </button>
          </div>

          {filterData.slice(0, 1).map(secData => ( 

            <div key={secData.id} className="sub--searchnext">
              <p>{secData.firstname} :&nbsp;</p> 
              <p>{secData.phone}</p>
            </div>
          ))}          

        </div>
      ) : null}


      <div className="div--separator">
      </div>

      {secDatas.map(secData => (

        <div key={secData.id} className="phoneCall--data">
            
          <div className="inter--data">
            <div className="divphone--data">
              <p>Firstname: {secData.firstname}</p>
              <p>Lastname: {secData.lastname}</p>
            </div>

            <div className="divphone--datasec">
              <p>Phone: {secData.phone}</p>
              <p>Email: {secData.email}</p>
            </div>

            <div className="locationphone--data">
              <p>{secData.location}</p>
            </div>

            <div>
              <button onClick={() => handlePhoneDelete(secData.id)}>
                Delete
              </button>
            </div>
          </div>

        </div>
      ))}

      <div className="div--separator">
      </div>

    </div>
  )
}