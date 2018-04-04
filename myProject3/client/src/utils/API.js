import axios from "axios";


   const BASEURL = "https://www.googleapis.com/webfonts/v1/webfonts?";   // api route (external API)
   const APIKEY = "key=AIzaSyAXCj9PQY82qUU-dpaG6pk9ilRz3ciOM4Q";           // api key   (external API)


   export default {                                  // make available to App.js
     search: function(query){                        // seach command
       return axios.get(BASEURL + "sort=alpha&" + APIKEY);    
     } 
                                             // axios runs get route (& return data?)
  }













  // // Gets all books
  // 
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }

