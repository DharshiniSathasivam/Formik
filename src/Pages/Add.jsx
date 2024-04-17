
import React, { useState } from "react";

export const Add = ({ book, setBook }) => {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publication, setPublication] = useState("");
  const [Author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [biography, setBiography] = useState("");
  const [img, setImg] = useState("");

  
  const AddData = () => {
    const NewAddData = {
      Title: title,
      ISBN: isbn,
      publication: publication,
      Author: Author,
      birth_date: date,
      short_biography: biography,
      img: img,
    };
    setBook([...book, NewAddData]);
  };

  return (
    <div className='flex flex-rows-2 justify-center gap-10'>
      <input
        type="text"
        placeholder="Title"
        className="input input-ghost w-full max-w-xs bg-slate-300"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        className="input input-ghost w-full max-w-xs bg-slate-300"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        className="input input-ghost w-full max-w-xs bg-slate-300"
        value={publication}
        onChange={(e) => setPublication(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        className="input input-ghost w-full max-w-xs bg-slate-300"
        value={Author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        className="input input-ghost w-full max-w-xs bg-slate-300"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        className="input input-ghost w-full max-w-xs bg-slate-300"
        value={biography}
        onChange={(e) => setBiography(e.target.value)}
      />
      <input
        type=""
        placeholder="Title"
        className="input input-ghost w-full max-w-xs bg-slate-300"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="btn btn-accent w-24 justify-self-center" onClick={AddData}>
        ADD
      </button>
    </div>
  );
};
