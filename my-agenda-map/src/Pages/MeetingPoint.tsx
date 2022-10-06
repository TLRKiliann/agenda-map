import React, { useState, useEffect } from 'react';
import meetingServices from '../Services/meetingServices';
import { DataType } from '../Models/model';
import SubMeetingPoint from './SubPages/SubMeetingPoint';
import '../StylesPages/MeetingPoint.scss';


export const MeetingPoint:React.FC = () => {

  const [datas, setDatas] = useState<Array<DataType | any>>([]);
  const [secDatas, setSecDatas] = useState<Array<DataType | any>>([]);

  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [notice, setNotice] = useState<string>("");

  const [createNewMeeting, setCreatNewMeeting] = useState<boolean>(false);

  //const [modify, setModify] = useState<boolean>(false);

  useEffect(() => {
    meetingServices
      .getAll()
      .then(initialNote => {
        setDatas(initialNote);
        setSecDatas(initialNote);
      })
  }, []);

  const handleCreate = () => {
    setCreatNewMeeting(!createNewMeeting);
  };

  //Create new appointment
  const generateId = () => {
    const maxId = datas.length > 0 ? Math.max(...datas.map(d => d.id)) : 0
    return maxId + 1;
  };

  const handleSaveAppointment = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Handle Save appointment")

    const dataObject = {
      id: generateId(),
      date: date,
      hour: hour,
      location: location,
      firstname: firstName,
      lastname: lastName,
      phone: phone,
      email: email,
      notice: notice
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
  }

  //POST
  //const handleCreate = (event: React.ChangeEvent<HTMLInputElement>) => {
  //  console.log("handleCreate() ok")
  //};


  //PUT
  const handleUpdate = (id: number) => {
    console.log("handleUpdate");
    setDate(date);
    setHour(hour);
    setLocation(location);
    setFirstName(firstName);
    setLastName(lastName);
    setPhone(phone);
    setEmail(email);
    setNotice(notice);
  };


  //DELETE
  const handleDelete = (id: number) => {
    const data = datas.find(data => data?.id === id);
    if (window.confirm(`Delete ${data?.firstname} ${data?.lastname} ?`)) {
      meetingServices
        .remove(id)
        .then(returnData => {
          setDatas(datas.filter(data => data?.id !== id))
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

  //handle for map
  /*const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  };*/

  return (
    <div className="meetingpoint">
      <h1>Meeting Point</h1>

      <div className="create--div">

        <div className="appointment--switch">
          <div style={{width: "220px"}}>
            <h3>New Appointment : </h3>
          </div>
          <div>
            <button style={{width: "100px", marginRight: "25px"}}
              onClick={handleCreate}>
              {createNewMeeting ? "Hide" : "Create"}
            </button>
          </div>
        </div>

        {createNewMeeting ? (
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
                onChange={(e) => set(e.target.value)}
                autoFocus
                placeholder="00/00/0000" />
            </div>

            <div className="divMP--content">
              <label>
                Hour :
              </label>
              <input
                type="text"
                onChange={(e) => set(e.target.value)}
                placeholder="00:00" />
            </div>
            
            <div className="divMP--content">
              <label>
                Location :
              </label>
              <input
                style={{width: '240px'}}
                type="text"
                onChange={(e) => set(e.target.value)}
                placeholder="Chemin du Devin, 1012 Lausanne" />
            </div>
            
            <div className="divMP--content">
              <label>
                Firstname :
              </label>
              <input
                type="text"
                onChange={(e) => set(e.target.value)}
                placeholder="firstname" />
            </div>

            <div className="divMP--content">
              <label>
                Lastname :
              </label>
              <input
                type="text"
                onChange={(e) => set(e.target.value)}
                placeholder="lastname" />
            </div>

            <div className="divMP--content">
              <label>
                Phone Number :
              </label>
              <input
                type="text"
                onChange={(e) => set(e.target.value)}
                placeholder="333 333 22 22" />
            </div>

            <div className="divMP--content">
              <label>
                Email :
              </label>
              <input
                type="email"
                onChange={(e) => set(e.target.value)}
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
                  rows={5}
                  cols={66}
                  wrap="soft"
                  onChange={(e) => set(e.target.value)}
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

        ) : null}

      </div>

      {datas.map((data) => (
        <SubMeetingPoint 
          key={data?.id}

          date={data.date}
          hour={data.hour}
          location={data.location}
          firstname={data.firstname}
          lastname={data.lastname}
          phone={data.phone}
          email={data.email}
          notice={data.notice}

          handleUpdate={() => handleUpdate(data.id)}
          handleDelete={() => handleDelete(data.id)}
        />
      ))}

      {secDatas.map(secData => (
        <div key={secData.id}>
          <p>{secData.date}
            {secData.hour}
            {secData.location}
            {secData.firstname}
            {secData.lastname}
            {secData.phone}
            {secData.email}
            {secData.notice}</p>
        </div>
      ))}

    </div>
  )
}
