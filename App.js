import React, { useState } from 'react';
import axios from 'axios';
import { Scatter } from 'react-chartjs-2';
import UserInputForm from './UserInputForm';

function App() {
  const [clusterResult, setClusterResult] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (userData) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/cluster', userData);
      setClusterResult(response.data.cluster);
      setRecommendations(response.data.recommendations);
      setChartData(response.data.chartData);
      setError(null);
    } catch (error) {
      console.error('API Error:', error);
      setError('An error occurred while processing your request.');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>PCOS & Hormonal Health Companion</h1>
      <UserInputForm onSubmit={handleFormSubmit} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {clusterResult && (
        <div style={{ marginTop: '20px' }}>
          <h2>Cluster: {clusterResult.clusterName}</h2>
          <p>{clusterResult.description}</p>
          {chartData && <Scatter data={chartData} />}
        </div>
      )}
      {recommendations && (
        <div style={{ marginTop: '20px' }}>
          <h2>Recommendations</h2>
          <p>Diet: {recommendations.diet}</p>
          <p>Exercise: {recommendations.exercise}</p>
          <p>Mental Health: {recommendations.mentalHealth}</p>
        </div>
      )}
    </div>
  );
}

export default App;