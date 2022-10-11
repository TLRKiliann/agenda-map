type ButtonMeetingProps = {
  key: number;
  handleDelete: () => void;
  handleRegister: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonMeeting = (props: ButtonMeetingProps) => {
  return (
    <div key={props.key} className="btn--meetingdelete">
      <button
        className="delete--btn"
        onClick={props.handleDelete}
      >
        Delete
      </button>

      <button
        className="register--btn"
        onClick={props.handleRegister}
      >
        Register
      </button>
    </div>
  )
}

export default ButtonMeeting;