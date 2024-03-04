const Home = () => {
    const path = 'https://media.istockphoto.com/id/1403087795/de/video/mann-scannen-von-gesichtsmerkmalen-futuristische-3d-identifikation-konzept-der-gesichts-id.mp4?s=mp4-640x640-is&k=20&c=VyaZ_L2lXKMKyWtZ-IafNu5gw5ROpCNZ1Wu2FzUjWjQ='
    return <div className="home-container">
                <video autoplay controls src={path} type="video/mp4" width="40%"/>
            </div>
  };
  
  export default Home;