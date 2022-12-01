import { Ilocation, IPeopleInSpace, IPeople } from '../models/IssDTO';

export const useConvertDTO = (location: Ilocation | undefined) => {
  return {
    lat: Number(location?.iss_position.latitude),
    lng: Number(location?.iss_position.longitude)
  }
}

export const useISSPeople = (peopleInSpace: IPeopleInSpace | undefined) => {
  let peopleOnIss:IPeople[] = []
  peopleInSpace?.people.map( element => 
    element.craft === 'ISS'
    ? peopleOnIss.push(element)
    : null
  )
  return peopleOnIss;
}

export const useDate = (timestamp : number | undefined) => {
  if (timestamp !== undefined) {
    let date = new Date(timestamp * 1000);
    return date.toUTCString()
  }
}