import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";

function ListPage() {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const query = searchParams.toString();
        const response = await apiRequest(`/posts?${query}`);
        if (response.data && Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts: {error}</p>;
  if (!posts.length) return <p>No posts available</p>;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {posts.map((post) => (
            <Card key={post.id} item={post} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={posts} />
      </div>
    </div>
  );
}

export default ListPage;
