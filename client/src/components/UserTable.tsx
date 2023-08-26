import React, { useState, useEffect } from 'react';
import { UserModel } from '../models/UserModel';
import { UserService } from '../services/UserService';
import DataTable from 'react-data-table-component';
import AddAddress from './AddAddress';
import { AddressModel } from '../models/AddressModel';

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<UserModel[]>([]);
  const [updateAddress, setUpdateAddress] = useState<boolean>(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [addressData, setAddressData] = useState<AddressModel>({
    streetAddress: "",
    city: "",
    state: "",
    zipCode: ""
  });


  const getUsers = async () => {
    try {
      const response = await UserService.getAllUsers();
      setUsers(response.data.data.users);
      setFilteredUsers(response.data.data.users);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  const departmentOptions = ["All", "HR", "IT", "Finance", "Not assigned"];

  const columns = [
    {
      name: "First Name",
      selector: (row: UserModel) => row.f_name,
      sortable: true
    },
    {
      name: "Last Name",
      selector: (row: UserModel) => row.l_name
    },
    {
      name: "Phone Number",
      selector: (row: UserModel) => row.phn_number
    },
    {
      name: "Email",
      selector: (row: UserModel) => row.user_email,
      sortable: true
    },
    {
      name: "Date Of Birth",
      selector: (row: UserModel) => {
        const dob = new Date(row.dob);
        return dob.toLocaleDateString();
      }
    },
    {
      name: "Department",
      selector: (row: UserModel) => row.department
    },
    {
      name: "Total Addresses",
      selector: (row: UserModel) => row.total_addresses
    },
    {
      name: "Action",
      cell: (row: UserModel) => <AddAddress
        addressData={addressData}
        setAddressData={setAddressData}
        updateAddress={updateAddress}
        setUpdateAddress={setUpdateAddress}
        userID={row.id}
      />
    }
  ]

  useEffect(() => {
    getUsers();
  }, [updateAddress]); // eslint-disable-next-line


  useEffect(() => {
    const result = users.filter((user) => {
      if (selectedDepartment === "All") {
        const searchTerm = search.toLowerCase().split(" ");

        const filterByFname = searchTerm.some((term) => {
          console.log(term);
          return user.f_name.toLowerCase().includes(term)
        });

        const filterByLname = searchTerm.some((term) => {
          return user.l_name.toLowerCase().includes(term)
        });

        const filterByEmail = searchTerm.some((term) => {
          return user.user_email.toLowerCase().includes(term);
        });

        return filterByFname || filterByLname || filterByEmail;
      } else {
        return user.department === selectedDepartment;
      }
    });

    setFilteredUsers(result);
  }, [search, selectedDepartment]); // eslint-disable-next-line


  return (
    <div>
      <p className="text-5xl text-gray-600 font-semibold">Users List</p>
      <DataTable
        columns={columns}
        data={filteredUsers}
        pagination
        paginationComponentOptions={{
          rowsPerPageText: 'Rows per page:',
          rangeSeparatorText: 'of',
          noRowsPerPage: false,
          selectAllRowsItem: false,
          selectAllRowsItemText: 'All'
        }}
        paginationPerPage={10} //inital page size
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        fixedHeader
        fixedHeaderScrollHeight='450px'
        highlightOnHover
        subHeader
        subHeaderComponent={
          <div className='subheader-left'>
            <input
              type='text'
              placeholder='Enter Name or Email'
              className='subheader-input'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className='subheader-input ml-3'
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departmentOptions.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
        }
      />
    </div>
  );
};

export default UserTable;