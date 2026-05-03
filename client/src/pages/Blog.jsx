import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import Moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Blog = () => {
  const { id } = useParams();
  const { axios } = useAppContext();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      data.success ? setData(data.blog) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.post("/api/blog/comments", { blogId: id });

      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/blog/add-comment", {
        blogId: id,
        name,
        content,
      });

      if (data.success) {
        toast.success(data.message);
        setName("");
        setContent("");
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, [id]);

  const cleanBlogHtml = (html = "") => {
    return html
      .replace(/color\s*:\s*[^;"']+;?/gi, "")
      .replace(/background-color\s*:\s*[^;"']+;?/gi, "")
      .replace(/style=""/gi, "");
  };

  return data ? (
    <main className="relative min-h-screen overflow-hidden bg-white text-black dark:bg-[#070b16] dark:text-white transition-colors duration-300">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-28 left-0 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute top-24 right-0 h-96 w-96 rounded-full bg-purple-300/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Blog Header */}
        <section className="max-w-5xl mx-auto px-4 pt-16 sm:pt-20 text-center">
          <p className="text-primary font-semibold text-sm sm:text-base">
            {data?.createdAt
              ? Moment(data.createdAt).format("MMMM Do YYYY")
              : "Unknown date"}
          </p>

          <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black dark:text-white">
            {data.title}
          </h1>

          <p className="mt-5 max-w-5xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {data.subTitle}
          </p>

          <p className="inline-block mt-7 py-2 px-6 rounded-full text-sm font-medium border border-primary/20 bg-primary/10 text-primary">
            Author
          </p>
        </section>

        {/* Blog Image */}
        <section className="max-w-5xl mx-auto px-4 mt-12">
          <img
            src={data.image}
            alt={data.title}
            className="w-full rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/40 object-cover"
          />
        </section>

        {/* Blog Content */}
        <section className="max-w-5xl mx-auto px-4 mt-10">
        <div
          className="rich-text"
          dangerouslySetInnerHTML={{ __html: cleanBlogHtml(data.description) }}
        />
        </section>

        {/* Comments Section */}
        <section className="max-w-5xl mx-auto px-4 mt-16">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold mb-6 text-black dark:text-white">
              Comments ({comments.length})
            </h2>

            <div className="flex flex-col gap-4">
              {comments.length > 0 ? (
                comments.map((item, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={assets.user_icon}
                        alt="user"
                        className="w-8 h-8 rounded-full"
                      />

                      <div>
                        <p className="font-semibold text-black dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {item?.createdAt
                            ? Moment(item.createdAt).fromNow()
                            : ""}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {item.content}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">
                  No comments yet. Be the first to comment.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Add Comment */}
        <section className="max-w-5xl mx-auto px-4 mt-12">
          <div className="max-w-3xl rounded-3xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-5 text-black dark:text-white">
              Add your comment
            </h2>

            <form onSubmit={addComment} className="flex flex-col gap-4">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Your name"
                required
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1020] text-black dark:text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder="Write your comment..."
                required
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1020] text-black dark:text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary h-36 resize-none"
              />

              <button
                type="submit"
                className="w-fit bg-primary text-white rounded-full py-2.5 px-8 hover:scale-105 active:scale-95 transition cursor-pointer shadow-lg shadow-primary/20"
              >
                Submit Comment
              </button>
            </form>
          </div>
        </section>

        {/* Share Buttons */}
        <section className="max-w-5xl mx-auto px-4 my-20">
          <div className="max-w-3xl">
            <p className="font-semibold mb-4 text-black dark:text-white">
              Share this article
            </p>

            <div className="flex items-center gap-3">
              <img
                src={assets.facebook_icon}
                width={46}
                alt="facebook"
                className="cursor-pointer hover:scale-110 transition"
              />
              <img
                src={assets.twitter_icon}
                width={46}
                alt="twitter"
                className="cursor-pointer hover:scale-110 transition"
              />
              <img
                src={assets.googleplus_icon}
                width={46}
                alt="google plus"
                className="cursor-pointer hover:scale-110 transition"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  ) : (
    <Loader />
  );
};

export default Blog;