import "./Modal.css";

export default function Modal({ onClose, isAccessGranted }) {
  return (
    <div className="modal" style={isAccessGranted ? styles.success : styles.fail}>
      {
        isAccessGranted ?
        <h2>ACCESS GRANTED</h2> :
        <h2>ACCESS DENIED</h2>
      }
      <button onClick={onClose}>Try again</button>
    </div>
  )
};

const styles = {
  success: {
    backgroundColor: "#A6FF96",
    color: "black"
  },
  fail: {
    backgroundColor: "#D80032",
    color: "white"
  }
}