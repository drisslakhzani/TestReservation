import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isHover,setIsHover]=useState(false);
  const MouseIn=()=>{
    setIsHover(true)
  }
  const MouseOut=()=>{
    setIsHover(false)
  }
  return (
    <section className="page bg-slate-300">
      <div className=" h-screen flex w-screen justify-center items-center bg">
        <div className={`${isHover&&"backdrop-blur-sm "} duration-200 flex flex-col items-center justify-center h-screen w-screen  p-4 rounded-lg relative z-10 `}>
          <h1 onMouseEnter={MouseIn} onMouseLeave={MouseOut} className="text-4xl  text-white font-bold p-3  ">Bienvenue à la Clinique du Diabète</h1>
          <p  onMouseEnter={MouseIn} onMouseLeave={MouseOut} className="w-4/5 text-gray-200 text-center p-4 font-medium">Nous sommes heureux de vous présenter la Clinique du Diabète, votre référence en matière de soins ambulatoires spécialisés de qualité. Notre équipe dédiée est à vos côtés à chaque étape de votre parcours, que vous souffriez de diabète de type 1, de type 2 ou de diabète gestationnel. Votre santé et votre bien-être sont au cœur de nos préoccupations.</p>
          <Link onMouseEnter={MouseIn} onMouseLeave={MouseOut} className="bg-blue-500 p-3 hover:bg-blue-600 font-medium duration-100 rounded-lg text-lg text-white " to="/Contact">
            Contact Us
          </Link>
        </div>
      </div>
      <aside className={` w-screen  bg2 flex flex-col items-center justify-center z-20 rounded-3xl relative top-10`} >
        <div className={`${isHover&&"backdrop-blur-sm"} duration-200 relative py-10 z-30 w-screen h-screen  flex flex-col items-center justify-center`}>
            <div onMouseEnter={MouseIn} onMouseLeave={MouseOut} className='bg-white mt-5  h-72 w-4/5 small-bg flex justify-between shadow-xl'>
                <span className=' ml-3 flex flex-col justify-center items-center'>
                  <h1 className='text-blue-700 text-xl hover:underline p-2 '>
                    Un Plateau Technique Complet et Innovant
                  </h1>
                  <p className='ml-4 p-2 text-gray-500 text-sm w-2/3 '>À la Clinique du Diabète, nous croyons en l'importance de combiner des soins de première qualité avec une technologie de pointe. Notre programme personnalisé et adapté intègre des phases de prévention et d'éducation thérapeutique pour assurer que vous receviez les meilleurs soins possibles. Nous investissons dans des équipements de qualité et innovants, garantissant que vous ayez accès aux dernières avancées technologiques pour gérer votre diabète de manière efficace.</p>
                </span>
                
                <img className='w-3/6 redius' src="./images/innovation.jpg" alt="#" />
            </div>


            <div onMouseEnter={MouseIn} onMouseLeave={MouseOut} className='bg-white mt-5  h-72 w-4/5 small1-bg flex justify-between shadow-xl'>
                
                
                <img className='w-3/6 redius1' src="./images/innovation.jpg" alt="#" />

                <span className=' ml-3 flex flex-col justify-center items-center'>
                  <h1 className='text-blue-700 text-xl hover:underline p-2 '>
                  Consultation Pluridisciplinaire
                  </h1>
                  <p className='ml-4 p-2 text-gray-500 text-sm w-2/3 '>Nous proposons un service de consultation pluridisciplinaire, réunissant une équipe de médecins généralistes et de spécialistes en diabétologie, endocrinologie, cardiologie, néphrologie, ainsi que des diététiciens, infirmiers, aides-soignants et podologues. Vous bénéficierez de soins complets et adaptés à votre condition.</p>
                </span>
            </div>

            <div onMouseEnter={MouseIn} onMouseLeave={MouseOut} className='bg-white mt-5  h-72 w-4/5 small-bg flex justify-between shadow-xl'>
                <span className=' ml-3 flex flex-col justify-center items-center'>
                  <h1 className='text-blue-700 text-xl hover:underline p-2 '>
                    Accès Téléphonique Dédié 
                  </h1>
                  <p className='ml-4 p-2 text-gray-500 text-sm w-2/3 '>Chez nous, votre suivi médical est une priorité. Nous offrons un accès téléphonique dédié aux patients de la Clinique, afin de répondre à toutes vos questions et préoccupations, en vous offrant un soutien constant.</p>
                </span>
                
                <img className='w-3/6 redius' src="./images/innovation.jpg" alt="#" />
            </div>
        
        </div>
            
      </aside>
    </section>
  );
}

export default Home;
