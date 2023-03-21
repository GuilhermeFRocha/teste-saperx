import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { api } from './api/base';
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global/global';

function App() {
  // const [schedules, setSchedules] = useState([]);

  // const teste = useCallback(async()=>{
  //   const data = await api.get('/schedule',{
  //     headers: {
  //       'Content-Type':  "application/x-www-form-urlencoded; charset=UTF-8",
  //     }
  //   })
  //   console.log(data)
    
  // },[])

  // useEffect(() => {
  //   axios.get('http://teste-frontend.saperx.com.br/api/schedule')
  //     .then(response => {
  //       setSchedules(response.data);
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   teste()
  // }, [teste]);
  
  return (
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
  )
}

export default App
