import "./styles.css";
let first = ["Keturah", "Matthew", "Judy"];
let last = [];
let role = [];
let color = [];

function addName(firstName) {
  return firstName;
}

let name = first.map(addName);

export default function App() {
  return (
    <div className="App">
      <table>
        <th>First Name</th>
        <tr>
          <td>{name[0]}</td>
        </tr>
        <tr>
          <td>{name[1]}</td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td>{name[2]}</td>
        </tr>
        <tr>
          <td>Name</td>
        </tr>
      </table>
    </div>
  );
}
