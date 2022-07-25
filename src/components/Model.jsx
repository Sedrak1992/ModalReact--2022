function Model({ open, handleClose }) {
  if (open === false) {
    return null;
  }

  return (
    <div className="box">
      <div className="model">
        <h2>Your content</h2>
        <button onClick={handleClose}> X </button>
      </div>
    </div>
  );
}

export default Model;
