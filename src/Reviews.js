import './App.css';

function Reviews(){
    const users = [
      {
        "id": 1,
        "avatar": "avatar.jpg",
        "name": "Fikri",
        "review": "Harga boleh murah, tapi kualitas bukan murahan (emot api)"
      },
      {
        "id": 2,
        "avatar": "avatar.jpg",
        "name": "Khairul",
        "review": "Harga boleh murah, tapi kualitas bukan murahan (emot api)"
      },
      {
        "id": 3,
        "avatar": "avatar.jpg",
        "name": "Shaleh",
        "review": "Harga boleh murah, tapi kualitas bukan murahan (emot api)"
      }
    ];
    const listReview = users.map((itemReview) =>
      <div key={itemReview.id} className="Item">
        <img src={itemReview.avatar} />
        <div className="User">
          <h3>{itemReview.name}</h3>
          <p>{itemReview.review})</p>
          </div>
        </div>
    );
  
    return (
      <div className="Review-box">
        <h2>Reviews</h2>
          {listReview}
        </div>
    );
  }

export default Reviews;