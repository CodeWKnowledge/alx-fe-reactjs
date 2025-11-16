const UserProfile = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(0, 136, 255)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "30px",
          borderRadius: "25px",
          color: "blue",
          width: "50%",
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px, rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
            border: '1px solid gray',  margin: '10px'
        }}
      >
        <h2>{props.name}</h2>
        <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
        <p>Bio: {props.bio}</p>
      </div>
    </div>
  );

  
};

export default UserProfile;
