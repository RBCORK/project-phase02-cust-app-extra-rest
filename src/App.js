import React, { useState, useEffect } from 'react';
import { getAll, post, put, deleteById } from './memdb.js';
import CustomerList from './CustomerList';
import CustomerAddUpdateForm from './CustomerAddUpdateForm';
import './App.css';

function log(message) { console.log(message); }

export function App() {
  const blankCustomer = { id: -1, name: '', email: '', password: '' };
  const [customers, setCustomers] = useState([]);
  const [formObject, setFormObject] = useState(blankCustomer);

  const mode = formObject.id >= 0 ? 'Update' : 'Add';

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    log('in getCustomers()');
    setCustomers(getAll());
  };

  const handleListClick = (item) => {
    log('in handleListClick()');
    setFormObject(formObject.id === item.id ? blankCustomer : item);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject((prev) => ({ ...prev, [name]: value }));
  };

  const onCancelClick = () => {
    setFormObject(blankCustomer);
  };

  const onDeleteClick = () => {
    if (formObject.id >= 0) deleteById(formObject.id);
    setFormObject(blankCustomer);
  };

  const onSaveClick = () => {
    if (mode === 'Add') post(formObject);
    if (mode === 'Update') put(formObject.id, formObject);
    setFormObject(blankCustomer);
  };

  return (
    <div>
      <CustomerList
        customers={customers}
        selectedCustomerId={formObject.id}
        onCustomerClick={handleListClick}
      />
      <CustomerAddUpdateForm
        formObject={formObject}
        onChange={handleInputChange}
        onDelete={onDeleteClick}
        onSave={onSaveClick}
        onCancel={onCancelClick}
        mode={mode}
      />
    </div>
  );
}

export default App;
