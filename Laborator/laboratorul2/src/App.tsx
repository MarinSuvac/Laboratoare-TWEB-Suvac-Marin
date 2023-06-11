﻿import React from 'react';
import './lab4.css';

interface User {
    name: string;
    email: string;
    age: number;
    address: string;
    isActive: boolean;
}

interface AdvancedUser extends User {
    education: string;
    skills: string[];
}

const user: AdvancedUser = {
    name: 'Suvac Marin',
    email: 'marinsuvac@mgial.com',
    age: 21,
    address: 'Hotin 4',
    isActive: true,
    education: 'UTM',
    skills: ['JavaScript', 'React', 'Node.js'],
};

function Lab4() {
    return (
        <div className="container">
            <h1 className="title">Date Personale</h1>
            <div className="card">
                <p>
                    <span className="label">Name:</span>
                    <span className="value">{user.name}</span>
                </p>
                <p>
                    <span className="label">Email:</span>
                    <span className="value">{user.email}</span>
                </p>
                <p>
                    <span className="label">Age:</span>
                    <span className="value">{user.age}</span>
                </p>
                <p>
                    <span className="label">Address:</span>
                    <span className="value">{user.address}</span>
                </p>
                <p>
                    <span className="label">Active:</span>
                    <span className="value">{user.isActive.toString()}</span>
                </p>
                <p>
                    <span className="label">Education:</span>
                    <span className="value">{user.education}</span>
                </p>
                <p>
                    <span className="label">Skills:</span>
                    <span className="value">{user.skills.join(', ')}</span>
                </p>
            </div>
        </div>
    );
}

export default Lab4;
