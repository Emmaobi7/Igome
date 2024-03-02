import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import PaymentForm from './PaymentForm';


const ProjectsPage = () => {
  const [balance, setBalance] = useState(null);
  const [userTransactions, setUserTransactions] = useState(null);

  useEffect(() => {
    async function loadData() {
      // Fetch balance and user transactions
      // Implement your logic to fetch balance and transactions here
      // For demonstration purposes, I'll assume these values are fetched from an API
      try {
        const balanceResponse = await axios.get('http://localhost:5000/balance');
        if (balanceResponse.status === 200) {
          setBalance(balanceResponse.data.balance);
        }

        const transactionsResponse = await axios.get('http://localhost:5000/transactions');
        if (transactionsResponse.status === 200) {
          setUserTransactions(transactionsResponse.data.transactions);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    loadData();
  }, []);

  // Define project data
  const projects = [
    {
      title: 'Community Development',
      description: 'Supporting initiatives aimed at improving infrastructure, education, and healthcare in African communities.',
      targetCommunities: 20,
      fundraisingGoal: 50000,
      link: 'donation.js' // Replace with actual link to donation page
    },
    {
      title: 'Clean Water Initiative',
      description: 'Funding water sanitation and hygiene projects to provide access to clean and safe drinking water.',
      targetCommunities: 30,
      fundraisingGoal: 70000,
      link: 'donation.js' // Replace with actual link to donation page
    },
    { 
        title: 'Environmental Conservation',
        description: 'Funding water sanitation and hygiene projects to provide access to clean and safe drinking water. Preserving Africas natural habitats and promoting sustainable practices for future generations.',
        TargetCommunities: 15,
        FundraisingGoal: 40000,
        link: 'donation.js'
    },
    {
        title: 'Education Empowerment',
        description: 'Investing in education programs to empower youth and adults with knowledge and skills for a brighter future.',
        TargetCommunities: 25,
        FundraisingGoal: 60000,
        link: 'donation.js',
    }
    // Add more projects as needed
  ];

  return (
    <div className="row projects-container">
      {projects.map((project, index) => (
        <div className="col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
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
