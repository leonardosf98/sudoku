import "./error-panel.css";

function errorPanel({ errors }) {
  return (
    <div className="errors">
      <p>Erros: {errors}</p>
    </div>
  );
}
export default errorPanel;
