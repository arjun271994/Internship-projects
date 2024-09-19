export function Skills() {
  return (
    <div>
      <h2>
        <b>
          With App launch you land on Home Page which fetches data from firebase
          db using axios get method and displays in grid format, when you click
          on add to cart button you are automatically directed to login page and
          if you are already a registered user you will be able to login and the
          app displays your name in the top right corner of the page with a
          welcome message. If you are not an already registered user you can
          click on sign up button, and register. As soon as you register you are
          automatically directed to login page and now you can login. When you
          are done shopping, you can logout.
        </b>
        <p>
          <b>What's more to come: </b>
          Cart feature where one can add products, product filter and sorting
          feature, multiple product pages, signup validation for username and
          password criteria, Responsive app for Mobile and Tablet
        </p>
      </h2>

      <p style={{ marginLeft: "600px", marginTop: "50px" }}>
        {" "}
        <b> Currently the project displays the below skills</b>
      </p>
      <div
        style={{
          marginLeft: "650px",
          marginTop: "10px",
        }}
      >
        <ul>
          <li>React basics</li>
          <li>Multiple Components rendering</li>
          <li>
            Hooks like useState, useRef, useContext, useNavigate, useEffect
          </li>
          <li>State Management</li>
          <li>Efficient usage of Context API</li>
          <li>Login Logic</li>
          <li>Event handling</li>
          <li>API concepts - Fetching Data using Axios </li>
          <li>Higher order functions</li>
          <li>Promises</li>
          <li>Destructuring</li>
          <li>Form data handling</li>
          <li>React Rounters</li>
          <li>Basics of Chakra UI</li>
          <li>CRUD Operations</li>
          <li>
            Data import in Firebase db and proper data handling & display
            through API
          </li>
          <li>Clean folder structure</li>
        </ul>
      </div>
    </div>
  );
}
