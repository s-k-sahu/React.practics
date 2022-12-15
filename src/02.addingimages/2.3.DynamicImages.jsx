import React from 'react';
import flower from './assets/flower.jpg';

const data = [
  "bird.jpg", "flower.jpg"
]
const DynamicImages = () => {
//   console.log(data2);
//   console.log(Array.isArray(data2));
  return (
    <div>
      {
                data.map((e) => {
                    return (
                        <img key={e} height={100} alt="hiii" src={require(`./assets/${e}`)}/>
                    )
                })
            }
            {/* <img height={100} alt="hiii" src={flower} /> */}
      {
        // data2.map((mantu) => {
        //   // console.log(mantu);
        //   return (
        //     <>
        //     <p>{mantu.vote_average}</p>
        //     <p>{mantu.release_date}</p>
        //     <h6>{mantu.title}</h6>
        //     </>
        //   )
        // })
      }
    </div>
  );
}

export default DynamicImages;
