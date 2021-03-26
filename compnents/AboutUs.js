import React from 'react'


const AboutUs = () => {
  const style =  {
    circleImage : {
      height: '300px',
      width: '300px',
      borderRadius:'50%'
    },
    cardImg : {
      display:'flex', 
      flexDirection: 'row', 
      justifyContent: 'center', 
      borderRadius: '50%', 
      overflow:'hidden'
    },
    heading: {
      padding: '20px',
      textAlign: 'center',
    }
  }
    return (
        <section id= 'about'>
        <h3 style = {style.heading}>Our Story</h3>

    <div className="row">
    <div className="col s12 m4 offset-m2">
      <div className="card z-depth-0">
      <div className = "card-image" style = {style.cardImg}>
          <img  style = {style.circleImage}   src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-christmas-rose-single-white-flower-royalty-free-image-1578194497.jpg"></img> 
        </div>
        <div className="card-content">
          <h4 style = {style.heading}>Daneel</h4>
          <p>Aliqua enim labore enim adipisicing exercitation commodo deserunt labore veniam ad laboris in officia officia. Occaecat qui ullamco magna quis esse nisi officia dolor. Eiusmod officia elit quis ullamco ex nulla ut voluptate laborum et cillum.</p>
        </div>
      </div>
    </div>

    <div className="col s12 m4">
      <div className="card z-depth-0">
      <div className = "card-image" style = {style.cardImg}>
          <img style = {style.circleImage}  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-christmas-rose-single-white-flower-royalty-free-image-1578194497.jpg"></img> 
        </div>
        <div className="card-content">
        <h4 style = {style.heading}>Maryke</h4>
          <p>Est id incididunt reprehenderit enim sunt mollit ipsum voluptate elit amet. Minim laboris nisi tempor incididunt amet ipsum. Minim consequat consequat mollit et labore pariatur. Veniam amet deserunt duis ipsum et eiusmod laborum ex occaecat tempor.
            
          </p>
        </div>
      </div>
    </div>
  </div>    
        </section>
    ) 


}

export default AboutUs
