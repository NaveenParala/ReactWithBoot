import React, { Component } from 'react'
// class NavBar extends Component {
    
//     render() { 
//         return (
// <nav class="navbar navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar
//      <span className="badge badge-pill bge-secondary">
//          {this.props.totalCounters}
//      </span>
//      </a>
//   </div>
// </nav>
//           );
//     }
// }
 
// export default NavBar;

// Stateless functional component
const NavBar = (props) => {
    console.log('navbae-render');
    return ( 
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar
     <span className="badge badge-pill badge-secondary">
         {props.totalCounters}
     </span>
     </a>
  </div>
</nav>
     );
}
 
export default NavBar;