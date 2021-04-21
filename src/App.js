import React from 'react';
import './App.css';
import Customer from './components/Customer';

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

  return customers.map((customer) => {
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
  });
}

export default App;
