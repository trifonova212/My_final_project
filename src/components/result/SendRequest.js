
import axios from 'axios';
import { useSelector } from 'react-redux';



async function SendRequest() {
    const objectSearch = useSelector(state=>state.objectSearch)
console.log('result objectsearchh',objectSearch )
    const token = localStorage.getItem('token');
  
  
      // Получение данных с сервера /api/v1/objectsearch
      try{
      const data = await objectSearch;
      // Отправка данных на сервер /api/v1/documents
      console.log('it is data', data.objectSearch.items[0].encodedId)
      
  
      
      const document = await axios.post('https://gateway.scan-interfax.ru/api/v1/documents',   {
        "ids": data.objectSearch.items.map((elem) =>
          elem.encodedId
                   
          )
      
      },
      {
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
      }
      }
      
      )
  console.log('it is response22222', document.document.data)// Обработка ответа от сервера /api/v1/documents
      // ...
    } catch (error) {
      // Обработка ошибок
      console.log('it is error', error.message)
    }
  }

  export default SendRequest