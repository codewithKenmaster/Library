import React, { useEffect, useState } from "react";

export const Library = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/Books/");
      const json = await response.json();
      setBooks(json);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Library</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index} style={{ paddingBottom: "25px" }}>
            <div>{book.name}</div>
            <div>{book.author}</div>
            <div>{book.year_pubilshed}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
