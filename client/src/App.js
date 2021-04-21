import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function App() {
  const customers = [
    {
      id: 1,
      image: 'http://placeimg.com/64/64/1',
      name: '홍길동',
      birthday: 961222,
      gender: '남자',
      job: '대학생',
    },
    {
      id: 2,
      image: 'http://placeimg.com/64/64/2',
      name: '김시민',
      birthday: 791101,
      gender: '남자',
      job: '디자이너',
    },
    {
      id: 3,
      image: 'http://placeimg.com/64/64/3',
      name: '이순신',
      birthday: 920924,
      gender: '남자',
      job: '프로그래머',
    },
  ];

  return (
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
          {customers.map((customer) => {
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
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
