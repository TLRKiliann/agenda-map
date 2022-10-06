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

  /*const generateId = () => {
    const maxId = datas.length > 0 ? Math.max(...datas.map(d => d.id)) : 0
    return maxId + 1;
  };*/

  //POST
  //const handleCreate = (event: React.ChangeEvent<HTMLInputElement>) => {
  //  console.log("handleCreate() ok")
  //};


  //PUT
  const handleSave = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    event.preventDefault();
    console.log("handleSave");
    setDate(date);
    setHour(hour);
    setLocation(location);
    setFirstName(firstName);
    setLastName(lastName);
    setPhone(phone);
    setEmail(email);
    setNotice(notice);
  };

  //PUT
  const handleModify = (id: number) => {
    console.log("handleModify");
    //setModify(true);
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
          alert(`The note '${data?.firstname} ${data?.lastname}' was already deleted from server`)
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
        <h3>Create New Appointment : </h3>
        <button onClick={handleCreate}>{createNewMeeting ? "Hide" : "Create"}</button>

        {createNewMeeting ? (
          <div className="display--settingsmeeting">

            <div className="title--newappointment">
              <h2>Create New Appointment</h2>
            </div>

            <div className="divMP--content">
              <label>
                Date :
              </label>
              <input
                type="text"
                autoFocus
                placeholder="00/00/0000" />
            </div>

            <div className="divMP--content">
              <label>
                Hour :
              </label>
              <input
                type="text"
                placeholder="00:00:00" />
            </div>
            
            <div className="divMP--content">
              <label>
                Location :
              </label>
              <input
                type="text"
                placeholder="Chemin du Mottier 10, 1052 Le Mont-sur-Lausanne" />
            </div>
            
            <div className="divMP--content">
              <label>
                Firstname :
              </label>
              <input
                type="text"

                placeholder="firstname" />
            </div>

            <div className="divMP--content">
              <label>
                Lastname :
              </label>
              <input
                type="text"

                placeholder="lastname" />
            </div>

            <div className="divMP--content">
              <label>
                Phone Number :
              </label>
              <input
                type="text"

                placeholder="333 333 22 22" />
            </div>

            <div className="divMP--content">
              <label>
                Email :
              </label>
              <input
                type="email"

                placeholder="super.man@mail.uk" />
            </div>

            <div className="divMP--content">
              <label>
                Note(s) :
              </label>
              <textarea
                rows={5}
                cols={50}
                wrap="soft"
                placeholder="Write something here...">
              </textarea>
            </div>

            <div className="divbtn--createmeeting">
              <button className="btn--createmeeting">
                Save New Appointment
              </button>
            </div>

          </div>

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

          handleModify={() => handleModify(data.id)}
          handleSave={(event:any) => handleSave(event, data.id)}
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



/*
  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [notice, setNotice] = useState<string>("");

  const [showMeetingPoint, setShowMeetingPoint] = useState<boolean>(false);
  const [modify, setModify] = useState<boolean>(false);

  const MAPPING = "https://wego.here.com/directions/mix//";

  useEffect(() => {
    meetingServices
      .getAll()
      .then(initialNote => {
        setDatas(initialNote);
        setSecDatas(initialNote);
      })
  }, []);

  //POST
  const handleSave = (e: React.FormEvent, id: number) => {
    console.log("handleSave");
    setDate(date);
    setHour(hour);
    setLocation(location);
    setFirstName(firstName);
    setLastName(lastName);
    setPhone(phone);
    setEmail(email);
    setNotice(notice);
  };

  //PUT
  const handleModify = (id: number) => {
    console.log("handleModify");
    setModify(true);
  };

  //DELETE
  const handleDelete = (id: number) => {
    console.log("handleDelete");
  };

  //handle for map
  const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  };

  //MAP location
  /*const handleMap = (id: number) => {
    console.log("handleMap");
    const localisation = datas.find(data => data.id === id)
  };

  return (
    <div className="MeetingPoint">

      <div className="SubMeetingPoint">

        <div className="titleMP--div">
          <h1>
            Meeting Point
          </h1>
        </div>

        <div className="newmeetingpoint">
          <h2>Add a new Meeting Point</h2>
          <button onClick={() => setShowMeetingPoint(!showMeetingPoint)}>
            New Meeting Point
          </button>
        </div>

        {showMeetingPoint ? (
          <div className="display--settingsmeeting">

            <div className="divMP--content">
              <label>
                Date :
              </label>
              <input
                type="text"
                autoFocus
                placeholder="00/00/0000" />
              <label>
                Hour :
              </label>
              <input
                type="text"
                placeholder="00:00:00" />
            </div>
            
            <div className="divMP--content">
              <label>
                Location :
              </label>
              <input
                type="text"
                value={location}
                onChange={handleLocation}
                placeholder="ex: Chemin du Mottier 10, 1052 Le Mont-sur-Lausanne" />
            </div>
            
            <div className="divMP--content">

              <div className="sub--contacts">
                <label>
                  Contact :
                </label>
                <input
                  type="text"

                  placeholder="firstname" />
                <input
                  type="text"

                  placeholder="lastname" />

                <label>
                  Phone Number :
                </label>
                <input
                  type="text"

                  placeholder="ex: 333 333 22 22" />

                <label>
                  Email :
                </label>
                <input
                  type="email"

                  placeholder="ex: super.man@mail.uk" />
              </div>

            </div>

            <div className="divMP--content">
              <label>
                Note(s) :
              </label>
              <textarea
                rows={4}
                cols={20}
                wrap="soft"
                placeholder="Write something here...">
              </textarea>
            </div>

          </div>
        ) : null}

        {datas.map(data => (
          <div key={data.id} className="result--div">

            <div className="datas--meetingpoint">
              <input value={data.date} />
              <input value={data.hour} />
              <input value={data.location} />
              <input value={data.firstName} />
              <input value={data.lastName} />
              <input value={data.phone} />
              <input value={data.email} />
              <input value={data.note} />
            </div>

            <div className="btn--meetingpoint">
              <button onClick={() => handleModify(data.id)}>
                Modify
              </button>

              <button onClick={() => handleSave(e, data.id)}>
                Save
              </button>

              <button onClick={() => handleDelete(data.id)}>
                Delete
              </button>

              <a href={`${MAPPING} ${location}`} className="hwg--a">
                Here We Go!
              </a>

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}*/

//              <Link to="/MapMap" location={location} onClick={() => handleMap(data.id)}>