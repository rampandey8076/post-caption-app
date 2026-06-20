import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const nav =  useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);

    try {
      const res = await axios.post(
        "http://localhost:3000/create-post",
        formData
      );

      console.log(res.data);
    //   alert("Post created!");
    nav("/")
    } catch (err) {
      console.log(err);
    }
    
  };

  return (
    <section>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <input
          type="text"
          placeholder="Enter caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;