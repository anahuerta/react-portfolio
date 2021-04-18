import React from "react";
import profilePicture from "../../../static/assets/images/bio/profilePicture.jpg";

export default function() {
  return (
  <div className="content-page-wrapper">
    <div
      className="left-column"
      style={{
        background: "url(" + profilePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
    <div className="right-column">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget aliquet augue. Phasellus volutpat sem vel dolor porta imperdiet. Pellentesque luctus, lacus sit amet feugiat hendrerit, odio turpis fringilla orci, vel blandit est eros et velit. Nullam pretium felis a auctor porta. Praesent lorem felis, lacinia non est vitae, congue egestas diam. Pellentesque convallis vel est et aliquet. Praesent vel dolor ac arcu convallis mattis. Fusce vel sagittis odio, et tincidunt dui. Curabitur in consectetur ligula. Fusce eget mauris ac tellus gravida tincidunt. Morbi ante lacus, condimentum sed pellentesque a, tincidunt non enim. Suspendisse quis ligula quis massa consequat malesuada. Fusce vel viverra libero, egestas vehicula nunc. Aenean dignissim, mi sit amet feugiat vulputate, eros nunc elementum nulla, nec dictum dui ligula vel elit. Nulla non hendrerit nunc, eu auctor massa.
      Nunc euismod purus tellus, ut blandit velit bibendum quis. Nullam eu mi ultrices purus euismod egestas quis sit amet ligula. Duis pellentesque justo non erat facilisis blandit. Nunc pulvinar turpis nec eros viverra, sed maximus diam congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis vulputate nulla. Nullam hendrerit tempus quam finibus varius. Phasellus ac imperdiet orci.
    </div> 

  
  </div>
  );
}