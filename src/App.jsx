import './App.css';

const foods = [
  { name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300' },
  { name: 'Biryani', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4rspKcOUfaT2innxVuZ3XbcSkAtINiHPkd3RZjga-g&s=10' },
  { name: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300' },
  { name: 'Dosa', image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300' },
  { name: 'Pasta', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300' }
];

const animals = [
  { name: 'Lion', image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=300' },
  { name: 'Tiger', image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=300' },
  { name: 'Elephant', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=300' },
  { name: 'Dolphin', image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?w=300' },
  { name: 'Panda', image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=300' }
];

const places = [
  { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300' },
  { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300' },
  { name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300' },
  { name: 'Kashmir', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=300' },
  { name: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300' }
];

function FavoriteCard({ title, emoji, items, color }) {
  return (
    <div className={`card ${color}`}>
      <h2>{emoji} {title}</h2>

      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={item.name}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <span>{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">

      <header>
        <h1>Top 5 Favorites ✨</h1>
        <p>Explore our top picks!</p>
      </header>

      <div className="favorites">

        <FavoriteCard
          title="Top 5 Foods"
          emoji="🍔"
          items={foods}
          color="pink"
        />

        <FavoriteCard
          title="Top 5 Animals"
          emoji="🦁"
          items={animals}
          color="green"
        />

        <FavoriteCard
          title="Top 5 Tourist Places"
          emoji="🌍"
          items={places}
          color="blue"
        />

      </div>
    </div>
  );
}

export default App;