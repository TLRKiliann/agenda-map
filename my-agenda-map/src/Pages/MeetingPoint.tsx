import React, { useState, useEffect } from 'react';
import noteServices from '../Services/noteServices';
import './MeetingPoint.scss';

/*interface DataType {
  date: string
  location: string
  firstName: string
  lastName: string
  phone: string
  email: string
  note: string
}

(
  {date, location, firstName, 
    lastName, phone, email, note}: DataType)
*/

/*
Faudra balancer avec les id après dans les functions.
*/

export const MeetingPoint = () => {

  const [data, setData] = useState<Array<string>>();
  const [secData, setSecData] = useState<Array<string>>();
 
  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const [modify, setModify] = useState<boolean>(false);

  useEffect(() => {
    noteServices
      .getAll()
      .then(initialNote => {
        setData(initialNote);
        setSecData(initialNote);
      })
  }, []);

  const handleModify = (id: number) => {
    console.log("handleModify");
    setModify(true);
  };

  const handleSave = (e: React.FormEvent, id: number) => {
    console.log("handleSave");
    setDate(date);
    setHour(hour);
    setLocation(location);
    setFirstName(firstName);
    setLastName(lastName);
    setPhone(phone);
    setEmail(email);
    setNote(note);
  };

  const handleDelete = (id: number) => {
    console.log("handleDelete");
  };

  const handleMap = (id: number) => {
    console.log("handleMap");
  };

  return (
    <div className="MeetingPoint">

      <div className="SubMeetingPoint">

        <div className="titleMP--div">
          <h1>
            Meeting Point
          </h1>
          <button>
            New Meeting Point !
          </button>
        </div>

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

            placeholder="ex: Rue Delancienne 24, France" />
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
            cols={50}
            wrap="soft"
            placeholder="Write something here...">
          </textarea>
        </div>

        <div className="btnMP--div">

          <button onClick={() => handleModify(data.id)}>
            Modify
          </button>

          <button onClick={() => handleSave(e, data.id)}>
            Save
          </button>

          <button onClick={() => handleDelete(data.id)}>
            Delete
          </button>

          <button onClick={() => handleMap(data.id)}>
            Map Location
          </button>

        </div>

      </div>
    </div>
  )
}