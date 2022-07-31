import "./Intro.css";
export default function Intro(props) {
  return (
    <section className="intro">
      <h1>Quizzy</h1>
      <h2>Break your limits!</h2>
      <input type="button" value="Start Quizzy" onClick={props.handleClick} />
    </section>
  );
}
