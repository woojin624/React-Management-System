import React, { useEffect, useState } from 'react';
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularDeterminate from './components/CircularDeterminate';

function App() {
  const [customers, setCustomers] = useState([]);

  const stateRefresh = () => {
    setCustomers([]);
    callApi()
      .then((res) => setCustomers(res))
      .catch((err) => console.log(err));
  };

  const callApi = async () => {
    const response = await fetch('/api/customers/list');
    const body = await response.json();
    return body;
  };

  useEffect(() => {
    callApi()
      .then((res) => setCustomers(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Paper style={{ width: '100%', overflowX: 'auto' }}>
        <Table style={{ minWidth: '1080px' }}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers ? (
              customers.map((customer) => {
                return (
                  <Customer
                    key={customer.id}
                    id={customer.id} //
                    image={customer.image}
                    name={customer.name}
                    birthday={customer.birthday}
                    gender={customer.gender}
                    job={customer.job}
                  />
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan='6' align='center'>
                  <CircularDeterminate />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
      <CustomerAdd stateRefresh={stateRefresh} />
    </div>
  );
}

export default App;
