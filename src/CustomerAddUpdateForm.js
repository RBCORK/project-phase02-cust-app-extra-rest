import React from 'react';

function CustomerAddUpdateForm({ formObject, onChange, onDelete, onSave, onCancel, mode }) {
  return (
    <div className="boxed">
      <h4>{mode}</h4>
      <form>
        <table id="customer-add-update">
          <tbody>
            <tr>
              <td className="label">Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formObject.name}
                  onChange={onChange}
                  placeholder="Customer Name"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="label">Email:</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={formObject.email}
                  onChange={onChange}
                  placeholder="name@company.com"
                />
              </td>
            </tr>
            <tr>
              <td className="label">Pass:</td>
              <td>
                <input
                  type="text"
                  name="password"
                  value={formObject.password}
                  onChange={onChange}
                  placeholder="password"
                />
              </td>
            </tr>
            <tr className="button-bar">
              <td colSpan="2">
                <input type="button" value="Delete" onClick={onDelete} />
                <input type="button" value="Save" onClick={onSave} />
                <input type="button" value="Cancel" onClick={onCancel} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default CustomerAddUpdateForm;
