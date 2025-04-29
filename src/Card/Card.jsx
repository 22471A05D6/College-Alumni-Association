import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import './Card.css';

const Card = ({ userEmail }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [chatWith, setChatWith] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [notification, setNotification] = useState('');
    const [chatAccepted, setChatAccepted] = useState(false);
    const senderEmail = userEmail || 'default@gmail.com'; // Replace with logged-in user's email

    const socket = io('http://localhost:5050', { transports: ['websocket'] });

    useEffect(() => {
        socket.on('connection-accepted', (data) => {
            if (data.sender === senderEmail) {
                setChatAccepted(true);
                setChatWith(data.recipient);
                setNotification(`${data.recipient} accepted your connection request!`);
                setTimeout(() => setNotification(''), 5000);
            }
        });

        socket.on('new-message', (data) => {
            if (data.sender === chatWith || data.recipient === chatWith) {
                setMessages((prevMessages) => [...prevMessages, data]);
            }
        });

        return () => socket.disconnect();
    }, [chatWith, senderEmail]);

    const cardsData = [
        { name: 'Ethan', email: 'bhavanavalluri292@gmail.com', company: 'Company M', role: 'Developer', image: 'https://img.freepik.com/premium-vector/people-icon-collection-vector-symbol-white-background-vector-illustration_1077884-2286.jpg' },
        { name: 'Sophia', email: 'vallurivenkatarao338@gmail.com', company: 'Company N', role: 'Manager', image: 'https://img.freepik.com/premium-vector/people-icon-collection-vector-symbol-white-background-vector-illustration_1077884-2286.jpg' },
        { name: 'Oliver', email: 'oliver@example.com', company: 'Company O', role: 'Designer', image: 'https://img.freepik.com/premium-vector/people-icon-collection-vector-symbol-white-background-vector-illustration_1077884-2286.jpg' },
        { name: 'Emma', email: 'emma@example.com', company: 'Company P', role: 'Analyst', image: 'https://img.freepik.com/premium-vector/people-icon-collection-vector-symbol-white-background-vector-illustration_1077884-2286.jpg' },
        { name: 'James', email: 'james@example.com', company: 'Company Q', role: 'Developer', image: 'https://img.freepik.com/premium-vector/people-icon-collection-vector-symbol-white-background-vector-illustration_1077884-2286.jpg' },
        { name: 'Ava', email: 'ava@example.com', company: 'Company R', role: 'Marketing', image: 'https://img.freepik.com/premium-vector/people-icon-collection-vector-symbol-white-background-vector-illustration_1077884-2286.jpg' },
        { name: 'Liam', email: 'liam@example.com', company: 'Company S', role: 'HR', image: 'https://img.freepik.com/premium-vector/people-icon-collection-vector-symbol-white-background-vector-illustration_1077884-2286.jpg' },
        { name: 'Isabella', email: 'isabella@example.com', company: 'Company T', role: 'Engineer', image: 'https://img.freepik.com/premium-vector/people-icon-collection-vector-symbol-white-background-vector-illustration_1077884-2286.jpg' },
        { name: 'Mason', email: 'mason@example.com', company: 'Company U', role: 'Developer', image: 'https://img.freepik.com/premium-vector/people-icon-collection-vector-symbol-white-background-vector-illustration_1077884-2286.jpg' },
        { name: 'Charlotte', email: 'charlotte@example.com', company: 'Company V', role: 'Team Lead', image: 'https://img.freepik.com/premium-vector/people-icon-collection-vector-symbol-white-background-vector-illustration_1077884-2286.jpg' },
    ];

    const filteredCards = cardsData.filter((card) =>
        card.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleConnectRequest = async (recipientName, recipientEmail) => {
        try {
            const response = await fetch('http://localhost:5050/send-interact-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sender: senderEmail, recipient: recipientEmail }),
            });
            const data = await response.json();
            if (data.success) {
                setNotification(`Connection request sent to ${recipientName}`);
                setTimeout(() => setNotification(''), 5000);
            } else {
                console.error('Error sending request:', data.error);
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    const sendMessage = async () => {
        if (newMessage.trim() === '') return;
        socket.emit('send-message', { sender: senderEmail, recipient: chatWith, message: newMessage });
        setMessages((prev) => [...prev, { sender: 'You', message: newMessage }]);
        setNewMessage('');
    };

    return (
        <div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by job role..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {notification && <div className="notification">{notification}</div>}
            <div className="card-display">
                {filteredCards.map((card, index) => (
                    <div key={index} className="card">
                        <div className="card-image">
                            <img src={card.image} alt={card.name} />
                        </div>
                        <div className="card-info">
                            <h2>{card.name}</h2>
                            <p>Email: {card.email}</p>
                            <p>Company: {card.company}</p>
                            <p>Role: {card.role}</p>
                            <button
                                onClick={() => handleConnectRequest(card.name, card.email)}
                            >
                                Connect
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {chatWith && chatAccepted && (
                <div className="chat-box">
                    <h3>Chatting with {chatWith}</h3>
                    <div className="messages">
                        {messages.map((msg, index) => (
                            <p key={index} className={msg.sender === 'You' ? 'sent' : 'received'}>
                                <strong>{msg.sender}: </strong>
                                {msg.message}
                            </p>
                        ))}
                    </div>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            )}
        </div>
    );
};

export default Card;
