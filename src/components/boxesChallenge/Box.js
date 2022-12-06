export default function Box({ on, toggle, id }) {
  const styles = { background: on ? "#222222" : "transparent" };
  // console.log(id);

  return <div className="box" style={styles} onClick={() => toggle(id)}></div>;
}
