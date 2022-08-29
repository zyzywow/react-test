function User({ name, say }) {
  // {}안에넣어 js코드인것을 인식시켜줘야함.
  return (
    <>
      <h2>{say}</h2>
      <p>{name}</p>
    </>
  );
}

export default User;
