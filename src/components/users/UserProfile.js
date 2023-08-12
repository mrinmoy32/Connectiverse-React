import React, { useState } from "react";
import "./UserProfile.css";
import UserPost from "./UserPost";
import Navbar from "../common/Navbar";

function UserProfile() {
  const posts = [
    {
      id: 1,
      title: "Exploring a New Adventure",
      content:
        "Just returned from an amazing hiking trip! Nature's beauty is breathtaking.",
      date: "2023-08-10",
      author: "Amit Ghorai",
      likes: 120,
      comments: [
        {
          id: 1,
          author: "John Doe",
          content: "Wow, the photos are stunning!",
        },
        {
          id: 2,
          author: "Alex Johnson",
          content: "I wish I could have been there too.",
        },
      ],
    },
    {
      id: 2,
      title: "Trying Out New Recipes",
      content:
        "Cooking up a storm in the kitchen today. These recipes are a real game-changer!",
      date: "2023-08-09",
      author: "Amit Ghorai",
      likes: 85,
      comments: [
        {
          id: 1,
          author: "David Lee",
          content: "The dishes look so delicious!",
        },
        { id: 2, author: "Sarah Adams", content: "I need those recipes ASAP!" },
      ],
    },
    {
      id: 3,
      title: "Exploring the Great Outdoors",
      content:
        "Took a hike in the mountains today. The breathtaking views were totally worth it!",
      date: "2023-08-10",
      author: "Amit Ghorai",
      likes: 42,
      comments: [
        {
          id: 1,
          author: "Emily White",
          content: "Nature's beauty never ceases to amaze.",
        },
        { id: 2, author: "Alex Green", content: "I should plan a hike too!" },
      ],
    },
    {
      id: 4,
      title: "Movie Night Marathon",
      content:
        "Having a movie night with friends. Popcorn, cozy blankets, and a selection of classic films!",
      date: "2023-08-11",
      author: "Amit Ghorai",
      likes: 67,
      comments: [
        { id: 1, author: "Olivia Brown", content: "Sounds like so much fun!" },
        {
          id: 2,
          author: "Jacob Miller",
          content: "Count me in for the next one!",
        },
      ],
    },
  ];

  const users = [
    {
      id: 1,
      name: "Amit Ghorai",
      imageUrl:
        "https://media.licdn.com/dms/image/C4D03AQElcEcq1ldIIg/profile-displayphoto-shrink_400_400/0/1595906680024?e=1697068800&v=beta&t=Ws9d8kONrxLC7kxyOc7SQdA5pO99lGeweLqPUpUIjL0",
      postCount: 18,
    },
    {
      id: 2,
      name: "Anupam Nag",
      imageUrl:
        "https://media.licdn.com/dms/image/C5103AQEAk3l8V2lv9g/profile-displayphoto-shrink_100_100/0/1567511985370?e=1697068800&v=beta&t=lRhZyskkrf7jHkD2g5OSFLVJEbDUGXBBLOXC7t8akFk",
      postCount: 6,
    },
  ];

  const [postData, setPostData] = useState(posts);

  const handleEdit = (postId) => {
    // Implement edit functionality here using postId
    console.log(`Editing post with ID: ${postId}`);
  };

  const handleDelete = (postId) => {
    // Implement delete functionality here using postId
    setPostData(posts.filter((post) => post.id !== postId));
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="user-posts-page">
        <div className="cover-photo">
          {/* <img
              src="https://i.pinimg.com/originals/f4/20/9c/f4209cc95059f1d4e71a284efe332b93.png"
              alt="cover_photo"
            /> */}
        </div>
        <div className="profile-container">
          <div className="profile-section">
            <div className="profile-image">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQElcEcq1ldIIg/profile-displayphoto-shrink_400_400/0/1595906680024?e=1697068800&v=beta&t=Ws9d8kONrxLC7kxyOc7SQdA5pO99lGeweLqPUpUIjL0"
                alt="profile_photo"
              />
            </div>
          </div>
          <span className="user-info">
            <h2>{users[0].name}</h2>
            <p>Total Posts: {posts.length}</p>
          </span>
        </div>
        <div className="user-posts">
          {postData.map((postData, index) => (
            <UserPost
              key={index}
              post={postData}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserProfile;
