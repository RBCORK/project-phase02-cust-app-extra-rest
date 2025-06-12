const baseURL = 'http://localhost:4000/customers';

// GET all customers
export async function getAll(setCustomers) {
  const myInit = {
    method: 'GET',
    mode: 'cors'
  };

  try {
    const response = await fetch(baseURL, myInit);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();
    setCustomers(data);
  } catch (error) {
    alert(error);
  }
}

// POST a new customer
export async function post(customer) {
  const myInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  };

  try {
    const response = await fetch(baseURL, myInit);
    if (!response.ok) {
      throw new Error(`Error adding customer: ${response.status}`);
    }
  } catch (error) {
    alert(error);
  }
}

// PUT (update) an existing customer
export async function put(id, updatedCustomer) {
  const myInit = {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedCustomer)
  };

  try {
    const response = await fetch(`${baseURL}/${id}`, myInit);
    if (!response.ok) {
      throw new Error(`Error updating customer: ${response.status}`);
    }
  } catch (error) {
    alert(error);
  }
}

// DELETE a customer by ID
export async function deleteById(id) {
  const myInit = {
    method: 'DELETE',
    mode: 'cors'
  };

  try {
    const response = await fetch(`${baseURL}/${id}`, myInit);
    if (!response.ok) {
      throw new Error(`Error deleting customer: ${response.status}`);
    }
  } catch (error) {
    alert(error);
  }
}
