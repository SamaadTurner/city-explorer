import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card } from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import Map from './component/Map';

const api_key = import.meta.env.VITE_API_KEY;
const apiURL = 'https://us1.locationiq.com/v1/search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      apiResults: [],
      error: null,
    };
  }

  setSearchQuery = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleExploreClick = async (e) => {
    console.log('Form Submitted');
    e.preventDefault();
    this.setState({error: null});
    const { searchQuery } = this.state;
    try {
      const response = await axios.get(`${apiURL}?key=${api_key}&q=${searchQuery}&format=json`);
      this.setState({ apiResults: response.data });
      console.log(response.data);
    } catch (error) {
      console.log('Error fetching data', error);
      this.setState({ error: 'An error occurred while fetching data.' }); e

    }
  };

  render() {
    const { lat, lon, api_key } = this.props;
    const staticMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${api_key}&center=${lat},${lon}&zoom=9`;

    const { apiResults, error } = this.state;

    return (
      <div style={{ display: 'block', width: 700, padding: 30 }}>
        <h4>City Explorer</h4>
        <Form onSubmit={this.handleExploreClick}>
          <Form.Group>
            <Form.Label>Enter city name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="seattle, tacoma, lakewood, etc."
              onChange={this.setSearchQuery}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>
        {error && <div style={{ color: 'red', fontSize: '16px', marginTop: '10px' }}>{error}</div>}

        {apiResults.map((location) => (
          <Card key={location.place_id} className="mt-4">
            <Card.Body>
              <Card.Title>{location.display_name}</Card.Title>
              <Card.Text>
                <strong>Latitude:</strong> {location.lat}<br />
                <strong>Longitude:</strong> {location.lon}
              </Card.Text>
              <Map location={location}/>
            </Card.Body>
          </Card>
        ))}
        
      </div>
    );
  }
}

export default App;