import React from 'react';
import './Modelnavbar.css';

export default function Modelnavbar() {
  const models = ['718', '911', 'Taycan', 'Panamera', 'Macan', 'Cayenne'];

  return (
    <div>
      <nav className="model-navbar">
        {models.map((model, index) => (
          <a className="navbar-brand" href="#" key={index}>
            {model}
          </a>
        ))}
      </nav>
    </div>
  );
}
