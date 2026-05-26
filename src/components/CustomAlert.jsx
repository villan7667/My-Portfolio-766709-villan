export default function CustomAlert({ message, show }) {
  return (
    <div
      id="customAlert"
      className="custom-alert"
      style={{
        display: show ? "block" : "none",
        animation: show ? "fadeInOut 3s ease forwards" : "none",
      }}
    >
      <div className="custom-alert-box">
        <p id="customAlertMessage">{message}</p>
      </div>
    </div>
  );
}
