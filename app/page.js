
const users = [
  {
    image:"https://img.freepik.com/free-photo/people-showing-support-respect-with-yellow-background-suicide-prevention-day_23-2151607937.jpg?ga=GA1.1.1138650661.1707985763&semt=ais_hybrid",
    name:"",
    title:"TRAVY V",
    phone:"+256741013246"
  },
  {
    image:"https://img.freepik.com/free-photo/people-showing-support-respect-with-yellow-background-suicide-prevention-day_23-2151607937.jpg?ga=GA1.1.1138650661.1707985763&semt=ais_hybrid",
    name:"",
    title:"TWASE ALVIN",
    phone:"+256741013246"
  },
  {
    image:"https://img.freepik.com/free-photo/people-showing-support-respect-with-yellow-background-suicide-prevention-day_23-2151607937.jpg?ga=GA1.1.1138650661.1707985763&semt=ais_hybrid",
    name:"",
    title:"kOOZA COLLIN",
    phone:"+256701259832"
  },
]

export default function page() {
  return (
    <section>
      <div class="container">
     {
      users.map((user,i)=>{
        return(
          <div key={i} class="card-container">
  <div class="image-1">
   <img src={user.image} alt=""/>
      </div>
    <div class="profile-details">
     <h2>{user.name}</h2>
     <p>{user.title}</p>
    </div>
    <div class="profile-number">
    <p>{user.phone}</p>
    </div>
  </div>
        )
      })
     }  
</div>
    </section>
  );
}