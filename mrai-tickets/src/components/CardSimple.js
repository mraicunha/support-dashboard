import React from "react";

import './styles.css'

export default function Card(props) {
  return (
    <div className="card-simple">
      <div className="card-simple-header">
        {props.header}
      </div>
      <div className="card-simple-body">
        {props.body}
      </div>
      <div className="card-simple-footer">
        {props.footer}
      </div>
    </div>
  )
}