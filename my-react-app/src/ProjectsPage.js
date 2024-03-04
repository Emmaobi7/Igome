import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import PaymentForm from './PaymentForm';


const ProjectsPage = () => {
  const [balance, setBalance] = useState(null);
  const [userTransactions, setUserTransactions] = useState(null);

  useEffect(() => {
    async function loadData() {
      let data;
      let transactions;
      const token = localStorage.getItem('token')
      const options = {headers: {Authorization: `Bearer ${token}`}}
      try{
        const balanceResponse = await axios.get('http://localhost:5000/balance', options)
        if (balanceResponse.status === 200) { data = balanceResponse.data.message.data[0] }
        setBalance(data.balance / 100)

        // const transactionsResponse = await axios.get('http://localhost:5000/transactions', options)
        // if (transactionsResponse.status === 200) {transactions = transactionsResponse.data.message.data}
        // setUserTransactions(transactions)
        
      } catch(err) {
        console.log(err)
      }
    }

    loadData();
  }, [])

  const projects = [
    {
      title: 'Community Development',
      description: 'Supporting initiatives aimed at improving infrastructure, education, and healthcare in African communities.',
      targetCommunities: 20,
      fundraisingGoal: 50000,
      imageUrl: '/cdev.jpg', // Assuming the image is in the public directory
      link: 'donation.js' // Replace with actual link to donation page
    },
    {
      title: 'Clean Water Initiative',
      description: 'Funding water sanitation and hygiene projects to provide access to clean and safe drinking water.',
      targetCommunities: 30,
      fundraisingGoal: 70000,
      imageUrl: '/water.jpg', // Assuming the image is in the public directory
      link: 'donation.js' // Replace with actual link to donation page
    },
    { 
        title: 'Environmental Conservation',
        description: 'Preserving Africa\'s natural habitats and promoting sustainable practices for future generations.',
        targetCommunities: 15,
        fundraisingGoal: 40000,
        imageUrl: '/env.jpg', // Assuming the image is in the public directory
        link: 'donation.js'
    },
    {
        title: 'Education Empowerment',
        description: 'Investing in education programs to empower youth and adults with knowledge and skills for a brighter future.',
        targetCommunities: 25,
        fundraisingGoal: 60000,
        imageUrl: '/edu.jpg', // Assuming the image is in the public directory
        link: 'donation.js',
    }
  ];

  return (
    <div className="row projects-container">
      {projects.map((project, index) => (
        <div className="col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
          <div className="card">
            <div className="card-body" >
              <h3 className="card-title">{project.title}</h3>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="project-image" 
                style={{ width: '100%', height: '300px', objectFit: 'cover' }} // Adjust dimensions as needed
              />
              <p className="card-text">{project.description}</p>
              <p className="card-text">Target Communities: {project.targetCommunities}</p>
              <p className="card-text">Fundraising Goal: ${project.fundraisingGoal}</p>
              <p className="card-text">Progress: {(balance / project.fundraisingGoal) * 100}%</p>
              
              <div className='square'>current Balance</div>
              <div className='balance'>
                <div className=''>
                  {/* Balance Circle */}
                  <div className='balance-amount'>
                    ${balance}
                    <span id='span'>.00</span>
                  </div>
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary">
                <NavLink to='/payment' style={{ color: 'white', textDecoration: 'none' }}>Donate to this project</NavLink>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default ProjectsPage;
