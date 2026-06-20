import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Feed = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPost(res.data.posts))
      .catch((err) => console.log(err));
  }, []);

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/post/${id}`);
      setPost(post.filter((p) => p._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className=" min-h-screen min-w-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 text-white px-6 py-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-purple-400 mb-1">
              Explore
            </p>
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Feed
            </h1>
          </div>
          <Link
            to="/create-post"
            className="text-sm font-semibold px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/30"
          >
            + New Post
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      {/* Grid */}
      {post.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-32">
          <p className="text-5xl mb-4">📭</p>
          <p className="text-lg font-medium text-zinc-400">No posts yet</p>
          <p className="text-sm mt-1 text-zinc-600">
            Create your first post to get started
          </p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {post.map((p) => (
            <div
              key={p._id}
              className="break-inside-avoid rounded-2xl overflow-hidden group relative border border-purple-900/40 bg-gradient-to-b from-zinc-900 to-purple-950/40 shadow-lg hover:shadow-purple-500/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
               <img
                   src={p.image}
                     alt={p.caption}
                     className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
/>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Delete button */}
                <button
                  onClick={() => deletePost(p._id)}
                  className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-red-800 to-red-600 shadow-lg shadow-red-500/30 opacity-0 group-hover:opacity-100 hover:scale-105 transition-all duration-200"
                >
                  Delete
                </button>
              </div>

              {/* Caption */}
              {p.caption && (
                <div className="px-4 py-3">
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {p.caption}
                  </p>
                </div>
              )}

              {/* Bottom accent */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Feed;