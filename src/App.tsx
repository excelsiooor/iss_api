import { useEffect } from 'react';
import './App.css';
import { issApi } from './services/IssService';
import Map from './components/Map';
import { useConvertDTO, useDate, useISSPeople } from './hooks/issHooks';
import Lyout from './components/Lyout';
import { Avatar, Typography, Box  } from '@mui/material';

function App() {
  const [getLocation, {data: location}] = issApi.useLazyGetLocationQuery()
  const {data: peopleInSpace} = issApi.useGetPeopleQuery('')
  const center = useConvertDTO(location)
  const astros = useISSPeople(peopleInSpace)
  const date = useDate(location?.timestamp)

  useEffect (() => {
    getLocation('')
    let interval = setInterval(() => {
      getLocation('')
    }, 5000)
    return () => clearInterval(interval)
  }, [getLocation])

  return (
    <Lyout>
      <Box sx={{display: 'flex', '& > :not(style)': { m: 1 },}}>
        <Lyout minHeight='85px' width='100%'>
          <Typography variant='h5'>
            Iss is now located at:
          </Typography>
          <Typography variant='h6'>
            Longitude: {location?.iss_position.longitude} Latitude: {location?.iss_position.latitude}
          </Typography>
        </Lyout>
        <Lyout minHeight='85px' width='800px'>
          <Typography variant='h6'>
            Current UTC time: {date&&date}
          </Typography>
        </Lyout>
      </Box>
      <Box sx={{display: 'flex', '& > :not(style)': { m: 1 },}}>
        <Lyout width='100%'>
          {location &&
            <Map 
              center={center}
            />
          }
        </Lyout>
        <Lyout minHeight='680px' width='800px'>
          {astros?.map(astronaut => 
            <Lyout key={astronaut.name} display='flex'>
              <Avatar src="/broken-image.jpg" sx={{ width: 56, height: 56 }}/>
              <Typography variant='h6'>
                {astronaut.name}
              </Typography>
            </Lyout>
          )}
          <Lyout minHeight='40px'>
            <Typography variant='h6'>
              Total amount: {astros.length} people on ISS
            </Typography>
          </Lyout>
        </Lyout>
      </Box>
    </Lyout>
  );
}

export default App;
