import React, {useState, useEffect}from 'react';
import {useQuery, gql} from "@apollo/client";

 
    const BookList = gql`
  {
      books {
          title
          published
          
  }
}
`


const Books = () => {
const {data, loading, error} = useQuery(BookList)
 const [bookList, setBookList] = useState()
    
    
        
            console.log(data)
            console.log(loading)
            console.log(error)

    useEffect(() => {
        (async ()=>{
            if(data){
                const {books} = data
                setBookList(books)
            }
        })()
    }, [data])        
        
    return (
        <div className="books">
        <div className="book__list">
            <h3>Books List</h3>
            <table>
                <tr>
                    <th>Book Title</th>
                    <th>Year Published</th>
                </tr>
                
                    { bookList ? bookList.map((item)=>{
                return(<><tr>
                <td key={item.index}>{item.title}</td>
                        <td key={item.index}>{item.published}</td>
                        </tr></>)
            }): <>loading</>}
                
            </table>
        </div>
            
        </div>
    );
};


export default Books;
