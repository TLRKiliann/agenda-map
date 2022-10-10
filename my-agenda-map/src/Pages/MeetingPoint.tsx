import React, { useState, useEffect } from 'react';
import meetingServices from '../Services/meetingServices';
import phoneServices from '../Services/phoneServices';
import { DataType } from '../Models/model';
import SubMeetingPoint from '../Components/SubMeetingPoint';
import '../StylesPages/MeetingPoint.scss';


export const MeetingPoint:React.FC = () => {

  const [datas, setDatas] = useState<Array<DataType | any>>([]);

  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [firstname, setFirstname] = useState<string>("");
  const [editFirstName, setEditFirstName] = useState<string>("");

  const [lastname, setLastname] = useState<string>("");
  
  const [phone, setPhone] = useState<string>("");
  const [editPhone, setEditPhone] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [notice, setNotice] = useState<string>("");
  const [createNewMeeting, setCreatNewMeeting] = useState<boolean>(false);

  useEffect(() => {
    meetingServices
      .getAll()
      .then(initialNote => {
        setDatas(initialNote);
      })
  }, []);

  const handleRefresh = () => {
    meetingServices
      .getAll()
      .then(initialNote => {
        setDatas(initialNote);
      })
    alert("Refresh done !")
  };

  const handleCreate = () => {
    setCreatNewMeeting(!createNewMeeting);
  };

  const handleReorder = () => {
    console.log("handleReorder clicked !");
  };

  //Create new appointment (POST method)
  const generateId = () => {
    const maxId = datas.length > 0 ? Math.max(...datas.map(d => d.id)) : 0
    return maxId + 1;
  };

  //Method POST
  const handleSaveAppointment = (event: React.FormEvent) => {
    event.preventDefault();
    const dataObject = {
      id: generateId(),
      date: date,
      hour: hour,
      location: location,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      notice: notice,
      editNum: false,
      editSwitchFirstName: false
    }

    meetingServices
      .create(dataObject)
      .then(returnData => {
        setDatas(datas.concat(dataObject))
      })
      .catch((error) => {
        console.log("error with create new appointment !")
        setDatas([])
      })
    alert(`Data saved OK !`);
    setCreatNewMeeting(false);
  }

  const handleRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newDataObject = {
      id: generateId(),
      location: location,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      editNum: false,
      editSwitchFirstName: false
    }

    phoneServices
      .create(newDataObject)
      .then(returnData => {
        setDatas(datas.concat(newDataObject))
      })
      .catch((error) => {
        console.log("error with create new register !")
        setDatas([])
      })
    alert(`Data saved OK !`);
  }


   //To change note.number
  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditPhone(event.target.value);
  };

  //Update (PUT method)
  const handleUpdate = (id: number) => {
    const data = datas.find(data => data.id === id)
    const changePhone = {...data, editNum: !data.editNum}
    setEditPhone(data ? data.phone : null);

    meetingServices
      .update(id, changePhone)
      .then(returnData => {
        setDatas(datas.map(data => data.id !== id ? data : returnData))
      })
      .catch((error) => {
        console.log("error with update", error)
        setDatas(datas.filter(d => d.id !== id))
      })
  };

  const validateNumber = (id: number) => {
    const data = datas.find(data => data.id === id);
    const newPhone = {...data, phone: editPhone, editNum: !data.editNum}

    meetingServices
      .update(id, newPhone)
      .then(returnData => {
        setDatas(datas.map(data => data.id === id ? returnData : data)
      )})
      .catch((error) => {
        alert(`Phone Number: ${data.phone} not found !`)
        setDatas(datas.filter(data => data.id !== id)
      )})
    setEditPhone("");
  };


  //Change firstname
  const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditFirstName(event.target.value);
  };

  //Update (PUT method)
  const handleFirstNameSwitch = (id: number) => {
    const data = datas.find(data => data.id === id)
    const changeFirstName = {...data, editSwitchFirstName: !data.editSwitchFirstName}
    setEditFirstName(data ? data.firstname : null);

    meetingServices
      .update(id, changeFirstName)
      .then(returnFirstNameSwitch => {
        setDatas(datas.map(data => data.id !== id ? data : returnFirstNameSwitch))
      })
      .catch((error) => {
        console.log("error with update firstname", error)
        setDatas(datas.filter(d => d.id !== id))
      })
  };

  const validateFirstName = (id: number) => {
    const data = datas.find(data => data.id === id);
    const newFirstName = {...data, firstname: editFirstName,
      editSwitchFirstName: !data.editSwitchFirstName}

    meetingServices
      .update(id, newFirstName)
      .then(returnFirstName => {
        setDatas(datas.map(data => data.id === id ? returnFirstName : data)
      )})
      .catch((error) => {
        alert(`Phone Number: ${data.firstname} not found !`)
        setDatas(datas.filter(data => data.id !== id)
      )})
    setEditFirstName("");
  };

  //DELETE
  const handleDelete = (id: number) => {
    const data = datas.find(data => data?.id === id);
    if (window.confirm(`Delete ${data?.firstname} ${data?.lastname} ?`)) {
      meetingServices
        .remove(id)
        .then(returnData => {
          setDatas(datas?.filter(data => data?.id !== id))
        })
        .catch((error) => {
          alert(`The note '${data?.firstname} ${data?.lastname}'\
            was already deleted from server`)
          setDatas(datas.filter(data => data?.id !== id))
        });
    } else {
      return null;
    }
  };

  return (
    <div className="meetingpoint">
      <h1>Meeting Point</h1>

      <div className="create--div">

        <div className="appointment--switch">
          <button
            onClick={handleCreate}>
            {createNewMeeting ? "Hide Frame" : "New Appointment"}
          </button>
        </div>

        <div className="appointment--reorder">
          <button
            onClick={handleReorder}
          >
            Reorder
          </button>
        </div>

        <div className="appointment--refresh">
          <button
            onClick={handleRefresh}>
            Refresh Page
          </button>
        </div>

        {createNewMeeting ? (
          <div className="frameofsearch">

            <div className="div--xclose">
              <p 
                className="x--close" 
                onClick={handleCreate}>
                X
              </p>
            </div>

            <form
              className="display--settingsmeeting"
              onSubmit={(event) => handleSaveAppointment(event)} >

              <div className="title--newappointment">
                <h2>Create New Appointment</h2>
              </div>

              <div className="divMP--content">
                <label>
                  Date :
                </label>
                <input
                  type="text"
                  onChange={(e) => setDate(e.target.value)}
                  autoFocus
                  placeholder="00/00/0000" />
              </div>

              <div className="divMP--content">
                <label>
                  Hour :
                </label>
                <input
                  type="text"
                  onChange={(e) => setHour(e.target.value)}
                  placeholder="00:00" />
              </div>
              
              <div className="divMP--content">
                <label>
                  Location :
                </label>
                <input
                  style={{width: '240px'}}
                  type="text"
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Chemin du Devin, 1012 Lausanne" />
              </div>
              
              <div className="divMP--content">
                <label>
                  Firstname :
                </label>
                <input
                  type="text"
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="firstname" />
              </div>

              <div className="divMP--content">
                <label>
                  Lastname :
                </label>
                <input
                  type="text"
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="lastname" />
              </div>

              <div className="divMP--content">
                <label>
                  Phone Number :
                </label>
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="333 333 22 22" />
              </div>

              <div className="divMP--content">
                <label>
                  Email :
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="super.man@mail.uk" />
              </div>

              <div className="div--textarealabel">
                <div className="noticelabel--div">
                  <label>
                    Note(s) :
                  </label>
                </div>
                <div>
                  <textarea
                    className="text--areacreate"
                    rows={5}
                    cols={66}
                    wrap="soft"
                    onChange={(e) => setNotice(e.target.value)}
                    placeholder="Write something here...">
                  </textarea>
                </div>
              </div>

              <div className="divbtn--createmeeting">
                <button
                  type="submit"
                  className="btn--createmeeting"
                >
                  Save New Appointment
                </button>
              </div>

            </form>
          </div>
        ) : null}

      </div>

      <div className="submeeting--div">

        {datas.map((data) => (
          <SubMeetingPoint
            key={data?.id}
            date={data.date}
            setDate={data.setDate}
            hour={data.hour}
            setHour={data.setHour}
            location={data.location}
            setLocation={data.setLocation}

            firstname={data.firstname}
            setFirstname={data.setFirstname}
            editFirstName={editFirstName}

            lastname={data.lastname}
            setLastname={data.Lastname}
            editSwitchFirstName={data.editSwitchFirstName}

            phone={data.phone}
            setPhone={data.setPhone}
            editNum={data.editNum}
            editPhone={editPhone}

            email={data.email}
            setEmail={data.setEmail}
            notice={data.notice}
            setNotice={data.setNotice}

            handleChangeFirstName={(event) => handleChangeFirstName(event)}
            handleFirstNameSwitch={() => handleFirstNameSwitch(data.id)}
            validateFirstName={() => validateFirstName(data.id)}

            handleChangeNumber={(event) => handleChangeNumber(event)}
            validateNumber={() => validateNumber(data.id)}
            handleUpdate={() => handleUpdate(data.id)}
            handleDelete={() => handleDelete(data.id)}
            handleRegister={() => handleRegister(data.id)}
          />
        ))}
      </div>
    </div>
  )
}
