import { useEffect, useState, useContext } from "react";
import { Await, Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage() {
  const [postResponse, setPostResponse] = useState(null);
  const [chatResponse, setChatResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const postRes = await apiRequest("/users/profilePosts");
        const chatRes = await apiRequest("/chats");
        setPostResponse(postRes.data);
        setChatResponse(chatRes.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile data!</p>;

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <List posts={postResponse.userPosts} />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List posts={postResponse.savedPosts} />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat chats={chatResponse} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
