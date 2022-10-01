import './MeetingPoint.css';

/*
Faudra balancer avec les id après dans les functions.
*/

export const MeetingPoint = () => {

  const handleSet = () => {
    console.log("handleSet");
  };

  const handleSave = () => {
    console.log("handleSave");
  };

  const handleDelete = () => {
    console.log("handleDelete");
  };

  const handleMap = () => {
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
            placeholder="Date" />
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
          <label>
            Contact :
          </label>
          <input
            type="text"

            placeholder="firstname" />
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

            placeholder="ex: 333 333 22 22" />
        </div>

        <div className="divMP--content">
          <label>
            Note(s) :
          </label>
          <textarea
            type="text"

            placeholder="Write something here...">
          </textarea>
        </div>

        <div className="btnMP--div">
          <button onClick={handleSet}>
            Settings
          </button>
          <button onClick={handleSave}>
            Save
          </button>
          <button onClick={handleDelete}>
            Delete
          </button>
          <button onClick={handleMap}>
            Map Location
          </button>
        </div>

      </div>
    </div>
  )
}