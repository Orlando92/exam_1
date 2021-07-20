import './App.css';
import { PickGroup } from './PickGroup';
import { useState } from 'react';
import { Report } from './Report';
import { Container, Row } from 'react-bootstrap';
import groups from './groups';

function App() {

  const [group, setGroup] = useState(groups[0]);
  const [results, setResults] = useState([]);

  const fetchData = (e) => {
    e.preventDefault();
    if (group !== '') {
      const url = `http://localhost:3000?group=${group.attributeName}`;
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          const filtered = data.map(element => Object.keys(element)
            .filter(key => group.columnsToShow.includes(key))
            .reduce((obj, key) => {
              obj[key] = element[key];
              return obj;
            }, {}));
          setResults(filtered);
        })
        .catch(e => console.log(e));
    }

  }

  return (
    <>
      <Container className="mt-5">
        <Row>
          <h2>Reporting</h2>
          <hr />
          <PickGroup setGroup={setGroup} fetchData={fetchData} />
          <Report results={results} />
        </Row>
      </Container>
    </>
  );
}

export default App;
