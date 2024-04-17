import React, { useState } from "react";
import { Add } from "../Pages/Add";

export default function MainBar() {
  const data = [
    {
      Title: "Rich Dad Poor Dad",
      ISBN: "113-4343-343435-366",
      publication: "April 8, 1997 ",
      Author: "Book by Robert Kiyosaki and Sharon Lechter",
      birth_date: "April 8, 1947",
      short_biography: "Businessman, author, Personal finance, business investing",
      img: "https://5.imimg.com/data5/HB/LA/MY-11183377/rich-dad-poor-dad-500x500.png",
    },
  ];

  const [book, setBook] = useState(data);
 
  return (
    <div className="main-bar-col">
      <Add book={book} setBook={setBook} />
      <div className="navbar bg-base-100">
        <a className="text-xl">Library Details</a>
        <div className="navbar-end">
          <a className="btn btn-outline btn-secondary" onClick={()=>handleAddClick()} >ADD</a>
        </div>
      </div>
      {book?.map((value, idx) => (
        <div key={idx} className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img className="img w-60" src={value.img} alt="Book" />
          </figure>
          <div className="card-body gap-3">
            <h1 className="card-title">Title: {value.Title}</h1>
            <h3>Author: {value.Author}</h3>
            <p>Publication: {value.publication}</p>
            <p>Short biography: {value.short_biography}</p>
            <p>Birth date: {value.birth_date}</p>
            <p>ISBN: {value.ISBN}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Update</button>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
