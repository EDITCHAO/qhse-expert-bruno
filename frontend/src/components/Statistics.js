import './Statistics.css';

const Statistics = () => {
  const stats = [
    {
      id: 1,
      number: '45+',
      label: 'Projets réalisés',
      icon: '💼'
    },
    {
      id: 2,
      number: '3 000+',
      label: 'Ouvriers formés',
      icon: '👥'
    },
    {
      id: 3,
      number: '0',
      label: 'Accidents mortels',
      icon: '🛡️'
    }
  ];

  return (
    <section className="statistics">
      <div className="statistics-container">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon-wrapper">
              <span className="stat-icon">{stat.icon}</span>
            </div>
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
