// Café Menu Board — Module 4 exercise lab
// Name: __________   Student ID: _________

// The data. Do not change the field names; you may change the values.
const menu = [
  {
    id: 1,
    name: "Espresso",
    description: "A double shot, pulled short",
    price: 3.25,
    vegetarian: true,
    soldOut: false,
  },
  {
    id: 2,
    name: "Maple Latte",
    description: "Espresso, steamed milk and maple syrup",
    price: 5.5,
    vegetarian: true,
    soldOut: false,
  },
  {
    id: 3,
    name: "Smoked Salmon Bagel",
    description: "Cream cheese, capers and red onion",
    price: 9.75,
    vegetarian: false,
    soldOut: false,
  },
  {
    id: 4,
    name: "Butter Croissant",
    description: "Baked fresh every morning",
    price: 3.95,
    vegetarian: true,
    soldOut: true,
  },
  {
    id: 5,
    name: "Turkey Club",
    description: "Roast turkey, bacon and tomato on sourdough",
    price: 11.5,
    vegetarian: false,
    soldOut: false,
  },
];

// TODO Task 1: MenuHeader component

const MenuHeader = ({ cafeName, itemCount }) => {
  return (
    <header>
      <h1>{cafeName}</h1>
      <span className="count">Items: {itemCount}</span>
    </header>
  );
};

// TODO Task 2: PriceTag and MenuItem components

const PriceTag = (props) => {
  return <span className="price">${props.price.toFixed(2)}</span>;
};

const MenuItem = (props) => {
  return (
    <div className="menu-item">
      <div className="item-text">
        <ItemText
          name={props.name}
          description={props.description}
          vegetarian={props.vegetarian}
        />
      </div>
      {props.soldOut ? (
        <span className="sold-out">SOLD OUT</span>
      ) : (
        <PriceTag price={props.price} />
      )}
    </div>
  );
};

// TODO Task 5: ItemText component (returns a fragment)

const ItemText = (props) => {
  return (
    <>
      <span className="item-name">{props.name}</span>
      {props.vegetarian && <span className="badge-veg">VEG</span>}
      <span className="item-desc">{props.description}</span>
    </>
  );
};

// TODO Task 5: Footer component

const Footer = (props) => {
  return (
    <footer>
      {props.availableCount} of {props.itemCount} items available today
    </footer>
  );
};

// TODO Task 1 / 3: App component

const App = (props) => {
  const availableCount = props.items.filter((item) => !item.soldOut).length;

  return (
    <div className="menu">
      <MenuHeader cafeName="Redzee's Café" itemCount={props.items.length} />
      {props.items.map((item) => (
        <MenuItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          vegetarian={item.vegetarian}
          soldOut={item.soldOut}
        />
      ))}

      <Footer availableCount={availableCount} itemCount={props.items.length} />
    </div>
  );
};

// TODO Task 1: render <App /> here, passing the menu array as a prop
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App items={menu} />);
