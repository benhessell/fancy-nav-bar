import React, {useState} from 'react';

export default function Nav() {

  return (
    <div className="nav_container">
      <div class="logo_flex">
      <div class="logo-animation_container">
        <svg width="70" height="70">
          <path class="logo_svg" d="M 10 10 H 60 V 60 H 10 Z" fill="transparent" stroke="white"/>
        </svg>
        <p class="logo_p">BH</p>
      </div>
      </div>
      <div class="nav-menu">
        <ul class="nav-menu_items">
          <li class="nav-menu_item">About</li>
          <li class="nav-menu_item">Work</li>
          <li class="nav-menu_item">Eductation</li>
          <li class="nav-menu_item">Awards</li>
          <li class="nav-menu_item">Interests</li>
        </ul>
      </div>
    </div>
    );
}