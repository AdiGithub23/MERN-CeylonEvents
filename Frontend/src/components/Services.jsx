import React from 'react'

const Services = () => {

  const services = [
    {      
      id: 1,
      url: "/bday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/diwali.jpg",
      title: "Festival Planning",
    },
    {
      id: 3,
      url: "/dj.jpg",
      title: "DJ Party Planning",
    },
    {
      id: 4,
      url: "/halloween.jpg",
      title: "Halloween Night Planning",
    },
    {
      id: 5,
      url: "/officials.jpg",
      title: "Office Party Planning",
    },
    {
      id: 6,
      url: "/outdoor.jpg",
      title: "Outdoor Party Planning",
    },
    {
      id: 7,
      url: "/softskills.jpg",
      title: "Religious Event Planning",
    },
    {
      id: 8,
      url: "/wedding.jpg",
      title: "Wedding Planning",
    },
    {
      id: 9,
      url: "/awards.jpg",
      title: "Award Ceremony Planning",
    },
  ];

  return (
    <>
      <div className="services container">
        <h2>Our Services</h2>
        <div className="banner">
          {
            services.map((service)=>{
              return (<div className="item" key={service.id}>
                <h3>{service.title}</h3>
                <img src={service.url} alt={service.title} />
              </div>)
            })
          }
        </div>
      </div>
    </>
  )
}

export default Services