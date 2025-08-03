import React, { useState, useEffect } from "react";
import axios from "axios";


import "./Direct.css";
import Cards from "../Card/Card";

const Direct = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "read", "update"
  const [isInsertFormOpen, setIsInsertFormOpen] = useState(false); // For Insert Form
  const [newMember, setNewMember] = useState({ name: "", email: "", company: "", role: "" });
  const [newlyAddedMember, setNewlyAddedMember] = useState(null); // State to store newly added member
  const API_URL = "http://localhost:4060/api/members";

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get(API_URL);
      setMembers(response.data);
    } catch (err) {
      console.error("Error fetching members:", err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this member?");
    if (confirmDelete) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchMembers();
      } catch (err) {
        console.error("Error deleting member:", err);
      }
    }
  };

  const handleRead = (member) => {
    setSelectedMember(member);
    setModalType("read");
    setIsModalOpen(true);
  };

  const handleUpdate = (member) => {
    setSelectedMember(member);
    setModalType("update");
    setIsModalOpen(true);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${selectedMember.id}`, selectedMember);
      setIsModalOpen(false);
      fetchMembers();
      alert("Member updated successfully!");
    } catch (err) {
      console.error("Error updating member:", err);
    }
  };

  const handleInsertSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, newMember);
      setNewlyAddedMember(response.data); // Set the newly added member
      alert("Member added successfully!"); // Show success notification
      setIsInsertFormOpen(false);
      setNewMember({ name: "", email: "", company: "", role: "" });
      fetchMembers();
    } catch (err) {
      console.error("Error adding member:", err);
    }
  };

  const handleInsertChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  return (
    <div className="directory">
      <h2>Member Directory</h2>
      <button
        className="insert-button"
        onClick={() => setIsInsertFormOpen(true)}
      >
        Insert Member
      </button>

      {/* Insert Form */}
      {isInsertFormOpen && (
        <form className="insert-form" onSubmit={handleInsertSubmit}>
          <h3>Insert New Member</h3>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={newMember.name}
              onChange={handleInsertChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={newMember.email}
              onChange={handleInsertChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={newMember.company}
              onChange={handleInsertChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={newMember.role}
              onChange={handleInsertChange}
              required
            />
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsInsertFormOpen(false)}>Cancel</button>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
           
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.email}</td>
             
              <td>
                <button onClick={() => handleRead(member)}>Read</button>
                <button onClick={() => handleUpdate(member)}>Update</button>
                <button onClick={() => handleDelete(member.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="overlay">
          {modalType === "read" && (
            <div className="read-container">
              <h3>Member Details</h3>
              <p><strong>Name:</strong> {selectedMember.name}</p>
              <p><strong>Email:</strong> {selectedMember.email}</p>
             
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            </div>
          )}

          {modalType === "update" && (
            <form className="update-form" onSubmit={handleUpdateSubmit}>
              <h3>Update Member</h3>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={selectedMember.name}
                  onChange={(e) => setSelectedMember({ ...selectedMember, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={selectedMember.email}
                  onChange={(e) => setSelectedMember({ ...selectedMember, email: e.target.value })}
                  required
                />
              </div>
              
              <button type="submit">Save</button>
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </form>
          )}
        </div>
      )}

      {/* Pass the newly added member to Cards component */}
      {newlyAddedMember && <Cards member={newlyAddedMember} />}
      <Cards/>
    </div>
  );
};

export default Direct;
