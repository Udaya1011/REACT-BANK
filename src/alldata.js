import UserContext from "./context";
import { useContext, useState } from "react";
import "./styles.css";

export default function Alldata() {
    const { users, setUsers } = useContext(UserContext);
    const [editUser, setEditUser] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [amount, setAmount] = useState('');

    const handleEdit = (user) => {
        setEditUser(user);
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setAmount(user.amount);
    };

    const handleUpdate = () => {
        const updatedUsers = users.map(user =>
            user.email === editUser.email ? { ...user, name, email, password, amount } : user
        );
        setUsers(updatedUsers);
        resetForm();
    };

    const handleDelete = (email) => {
        const filteredUsers = users.filter(user => user.email !== email);
        setUsers(filteredUsers);
    };

    const resetForm = () => {
        setEditUser(null);
        setName('');
        setEmail('');
        setPassword('');
        setAmount('');
    };

    return (
        <>
            {/* Background Video */}
            <video autoPlay loop muted className="background-video">
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="content-container">
                <h1 className="text-center text-white">All Data</h1>
                <div className="table-responsive">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item) => (
                                <tr key={item.email}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>{item.amount}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(item)}>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.email)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Edit Form - Moved to the Bottom */}
                {editUser && (
                    <div className="edit-form-container" style={{paddingTop:'35%'}}>
                        <div className="edit-form">
                            <h2 className="text-white text-center">Edit User</h2>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="form-control mb-2" />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control mb-2" disabled />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control mb-2" />
                            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" className="form-control mb-2" />
                            <div className="text-center">
                                <button className="btn btn-success mt-2" onClick={handleUpdate}>Update</button>
                                <button className="btn btn-secondary mt-2 ms-2" onClick={resetForm}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
