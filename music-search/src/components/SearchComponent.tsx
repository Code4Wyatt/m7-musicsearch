import { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from "react-bootstrap"
import Song from "../components/Song"
// import { Song } from '../types/song'


const SearchComponent = () => {
    const [songs, setSongs] = useState([])
    const [query, setQuery] = useState('')

    const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='

    const getSongs = async () => {
        try {
            const response = await fetch(baseEndpoint + query)
            const { data } = await response.json()

            setSongs(data)
            console.log("Songs: ", data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getSongs()
    }, [])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setQuery(e.currentTarget.value)
        console.log(query)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        getSongs()
        console.log(songs)
    }



  return (
    <Container className="searchPage">
    <Row>
        <Col xs={10} className='mx-auto my-3'>
            <h1>Music Search</h1>
        </Col>
        <Col xs={10} className='mx-auto'>
            <Form onSubmit={handleSubmit}>
                <Form.Control type="search" onChange={handleChange} value={query} placeholder="Type and press enter" />
            </Form>
        </Col>
        <Col xs={10} className='mx-auto mb-5'>
            {
                songs.map((song) =>( <Song key={songs.artist.id} data={song} />))
        }
        </Col>
    </Row>
</Container>
  );
}

export default SearchComponent;
