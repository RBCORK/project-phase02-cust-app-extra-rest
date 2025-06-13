import React, { useState, useEffect } from 'react';
import { getAll, post, put, deleteById } from './restdb.js';
import CustomerList from './CustomerList';
import CustomerAddUpdateForm from './CustomerAddUpdateForm';
import './App.css';

function log(message) {
  console.log(message);
}

export function App() {
  const blankCustomer = { id: -1, name: '', email: '', password: '' };
  const [customers, setCustomers] = useState([]);
  const [formObject, setFormObject] = useState(blankCustomer);

  const mode = formObject.id >= 0 ? 'Update' : 'Add';

  useEffect(() => {
    getAll(setCustomers);
  }, []);

 const handleListClick = (item) => {
  log('in handleListClick()');
  setFormObject((prev) =>
    prev.id === item.id ? blankCustomer : item
  );
};

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject((prev) => ({ ...prev, [name]: value }));
  };

  const onCancelClick = () => {
    setFormObject(blankCustomer);
  };

  const onDeleteClick = function () {
    if (formObject.id >= 0) {
      deleteById(formObject.id).then(() => getAll(setCustomers));
    }
    setFormObject(blankCustomer);
  };

  const onSaveClick = function () {
    if (mode === 'Add') {
      const { id, ...newCustomer } = formObject; // 🚫 don't send id: -1
      post(newCustomer).then(() => getAll(setCustomers));
    } else {
      put(formObject.id, formObject).then(() => getAll(setCustomers));
    }
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
