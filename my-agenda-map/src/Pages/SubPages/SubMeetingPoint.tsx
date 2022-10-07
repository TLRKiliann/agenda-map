import React, { useState } from 'react';
//import { DataType } from '../../Models/model';
import { AiFillEye } from 'react-icons/ai';
import { FaRegEyeSlash } from 'react-icons/fa';
import { MdOutlineMyLocation } from 'react-icons/md';
import '../../StylesPages/MeetingPoint.scss';


type SubMeetingPointProps = {
  key: number;

  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  hour: string;
  setHour: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  
  firstname: string;
  setFirstname: React.Dispatch<React.SetStateAction<string>>;
  
  lastname: string;
  setLastname: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  notice: string;
  setNotice: React.Dispatch<React.SetStateAction<string>>;

  handleUpdate: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleDelete: () => void;
};

const SubMeetingPoint = (props: SubMeetingPointProps) => {

  const [showMeetingPoint, setShowMeetingPoint] = useState<boolean>(false);

  const handleShow = () => {
    setShowMeetingPoint(!showMeetingPoint);
  };

  const MAPPING = "https://wego.here.com/directions/mix//";

  const styles = {
    display: 'flex', 
    alignItems: 'center',
    color: 'royalblue'
  };

  return (
    <div className="mainfirst--div">

      <div className="first--data">

        <div className="capsbtn--div">
          <div className="left--div">
            <div className="pinput--left">
              <button onClick={handleShow}>
                {showMeetingPoint 
                  ? <FaRegEyeSlash size={24} style={styles} /> 
                  : <AiFillEye size={24} style={styles} />}
              </button>
              <p>Date : </p>
            </div>
            <div className="pinput--date">
              <input
                value={props.date}
                onChange={(event) => props.setDate(event.target.value)} />
            </div>
          </div>
          <div className="right--div">
            <div className="pinput--left">
              <p>Hour : </p>
            </div>
            <div className="pinput--hour">
              <input
                value={props.hour}
                onChange={(event) => props.setHour(event.target.value)} />
            </div>
          </div>
        </div>

        {showMeetingPoint ? (
          <div>
            <div className="caps--location">

              <div className="p--location">
                <p>Location : </p>
              </div>

              <div className="input--location">
                <input
                  value={props.location}
                  onChange={(event) => props.setLocation(event.target.value)} />
              </div>  

              <div className="a--location">
                <a
                  href={`${MAPPING} ${props.location}`}
                  target="_blank"
                  title="Go to map !"
                  rel="noreferrer" 
                  className="hwg--a"
                >
                  <MdOutlineMyLocation size={24} />
                </a>
              </div>
                
            </div>

            <div className="caps--div">
              <div className="left--div">
                <div className="pinput--left">
                  <p>Firstname : </p>
                </div>
                <div className="pinput--right">
                  <input
                    value={props.firstname}
                    onChange={(event) => props.setFirstname(event.target.value)} />
                </div>
              </div>
              <div className="right--div">
                <div className="pinput--left">
                  <p>Lastname : </p>
                </div>
                <div className="pinput--right">
                  <input
                    value={props.lastname}
                    onChange={(event) => props.setLastname(event.target.value)} />             
                </div>
              </div>
            </div>

            <div className="caps--div">
              <div className="left--div">
                <div className="pinput--left">
                  <p>Phone : </p>
                </div>
                <div className="pinput--right">
                  <input
                    value={props.phone}
                    onChange={(event) => props.setPhone(event.target.value)} />
                </div>
              </div>
              <div className="right--div">
                <div className="pinput--left">
                  <p>Email : </p>
                </div>
                <div className="pinput--right">
                  <input
                    value={props.email}
                    onChange={(event) => props.setEmail(event.target.value)} />
                </div>
              </div>
            </div>

            <div className="caps--div">
              <div className="notice--div">
                <div className="ptextarea--left">
                  <p>Note(s) : </p>
                  <textarea
                    className="text--area" 
                    value={props.notice} onChange={(event) => props.setNotice(event.target.value)} />
                </div>
              </div>
            </div>

            <div className="btn--meetingpoint">
              <button onClick={props.handleUpdate}>
                Update
              </button>

              <button
                className="delete--btn"
                onClick={props.handleDelete}>
                Delete
              </button>
            </div>

          </div>

        ) : null}

      </div>
    </div>
  )
}

export default SubMeetingPoint;
