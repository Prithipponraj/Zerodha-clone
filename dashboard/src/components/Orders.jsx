import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../hooks/useAuth";

const Orders = () => {
  const [allOrders, SetAllOrders] = useState([]);
  let { user } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL; // Use environment variable
        const res = await axios.get(`${apiUrl}/orders/index`, {
          headers: {
            Authorization: user,
          },
        });
        SetAllOrders(res.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []); // Dependency array is empty to fetch only once

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((stock, index) => (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
