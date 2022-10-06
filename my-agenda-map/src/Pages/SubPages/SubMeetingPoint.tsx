import React, {useState} from 'react';
//import { DataType } from '../../Models/model';
import { AiFillEye } from 'react-icons/ai';
import { FaRegEyeSlash } from 'react-icons/fa';
import { MdOutlineMyLocation } from 'react-icons/md';
import '../../StylesPages/MeetingPoint.scss';

type SubMeetingPointProps = {
  key: number
  date: string
  hour: string
  location: string
  firstname: string
  lastname: string
  phone: string
  email: string
  notice: string
  handleModify: () => void;
  handleSave: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleDelete: () => void;
};

const SubMeetingPoint = (props: SubMeetingPointProps) => {

  const [showMeetingPoint, setShowMeetingPoint] = useState<boolean>(false);

  const handleShow = () => {
    setShowMeetingPoint(!showMeetingPoint);
  };

  const MAPPING = "https://wego.here.com/directions/mix//";

  const styles = {display: 'flex', alignItems: 'center'}

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
            <div className="pinput--right">
              <input value={props.date} />
            </div>
          </div>
          <div className="right--div">
            <div className="pinput--left">
              <p>Hour : </p>
            </div>
            <div className="pinput--right">
              <input value={props.hour} />
            </div>
          </div>
        </div>

        {showMeetingPoint ? (
          <div>
            <div className="caps--div">
              <div className="left--mapcaps">
                <div className="p--left">
                  <p>Location : </p>
                </div>
                <div className="locationinput--right">
                  <input value={props.location}/>
                </div>
              </div>
            </div>

            <div className="caps--div">
              <div className="left--mapcaps">
                <div className="p--left">
                  <p>See map : </p>
                </div>
                <div className="mapbtn--right">
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
            </div>

            <div className="caps--div">
              <div className="left--div">
                <div className="pinput--left">
                  <p>Firstname : </p>
                </div>
                <div className="pinput--right">
                  <input value={props.firstname} />
                </div>
              </div>
              <div className="right--div">
                <div className="pinput--left">
                  <p>Lastname : </p>
                </div>
                <div className="pinput--right">
                  <input value={props.lastname} />              
                </div>
              </div>
            </div>

            <div className="caps--div">
              <div className="left--div">
                <div className="pinput--left">
                  <p>Phone : </p>
                </div>
                <div className="pinput--right">
                  <input value={props.phone} />
                </div>
              </div>
              <div className="right--div">
                <div className="pinput--left">
                  <p>Email : </p>
                </div>
                <div className="pinput--right">
                  <input value={props.email} />
                </div>
              </div>
            </div>

            <div className="caps--div">
              <div className="notice--div">
                <div className="ptextarea--left">
                  <p>Note(s) : </p>
                  <textarea
                    className="text--area" 
                    value={props.notice} />
                </div>
              </div>
            </div>

            <div className="btn--meetingpoint">
              <button onClick={props.handleModify}>
                Modify
              </button>

              <button onClick={props.handleSave}>
                Save
              </button>

              <button onClick={props.handleDelete}>
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