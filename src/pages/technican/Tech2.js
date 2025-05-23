import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import './tech.css';
function Tech2(){
  const [formData, setFormData] = useState({
    jopId: '',
    skillDescription: "",
    experienceYears: "",
    location: "",
    hourlyRateAtHire: "",
    nationalImage: "",
    userId: "",
    formFile:null
    
  });
  const [status, setStatus] = useState('');
    const[Language]=useState('ar');
    const[skills,setSkills]=useState('')
  const [loading,setLoading]=useState(false);
const [error,setError]=useState(false);
    
    const Navigate=useNavigate();
  
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
     /* useEffect(() => {
    // أول ما الصفحة تفتح، نجيب الـ userId من localStorage ونحطه
     const storedUserId = localStorage.getItem('UserId');
    if (storedUserId) {
      setFormData(prevData => ({
        ...prevData,
         UserId: storedUserId,
      }));
    }
  }, []);*/
    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})

    }
    
    const handlefileChange = (e) => {
      const image=e.target.files[0];
      if(image){
        const blob=new Blob([image], {type:image.png})
        setFormData({...formData,formFile: blob});
      }
    };

   
     /* const handleChange=(e)=>{
        setAdditionalData({...additonalData, [e.target.name]:e.target.value})
      }*/
      
      
      
    async  function Submit(e){
        e.preventDefault();
        setStatus('جارٍ الإرسال...');
        
       
        
        const data = new FormData();
        data.append('jopId',formData.jopId);
        data.append('skillDescription',formData.skillDescription);
        data.append('experienceYears',formData.experienceYears);
        data.append('location',formData.location);
        data.append('hourlyRateAtHire',formData.hourlyRateAtHire);
        data.append('nationalImage',formData.nationalImage);
        if(formData.formFile){
          data.append('formFile',formData.formFile,'uploaded_image.png');
        }
        






    
        try {
      const response = await axios.post('https://hscoding.runasp.net/api/Techinican/Add', data, {

        headers:{
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log('Response:', response.data);
      } catch (error) {
      console.error('Error submitting form:', error);
    }
    Navigate('/Congra');
  };

   


            

        
      
    return(
      <div className="parent">
        <div className="container align-items-center">
        <form onSubmit={Submit} className="   sty2 " action="" dir={Language==='ar'?'rtl':'ltr'} >
        <h4  style={{textAlign:'center', marginTop:'5px',fontWeight:'bold'}}>انشاء حساب حرفي</h4>
            <label >   معرّف الوظيفة: </label>
            <input className="form-control mb-2 intsty"
            type="text"
            required
            name="JobId"
            onChange={handleChange}
           
            ></input>
            <label >    المهارات: </label>
            <input className="form-control mb-2 intsty"  type="text"
            required
            name="SkillDescription"
            onChange={handleChange}
          
            ></input>
            <label >  سنوات الخبرة: </label>
            <input className="form-control mb-2 intsty"  type="text"
            required
            name="ExperienceYears"
            onChange={handleChange}
         
            ></input>
             <label >  الموقع:  </label>
            <input className="form-control mb-2 intsty"  type="text"
            required
            name="Location"
            onChange={handleChange} 
            ></input>
             <label >  الأجر بالساعة عند التوظيف:  </label>
            <input className="form-control mb-2 intsty"  type="text"
            required
            name="HourlyRateAtHire"
            onChange={handleChange} 
            ></input>
            <label>رابط الصورة القومية:</label>
            <input className="form-control mb-2 intsty" type="text" name="NationalImage" onChange={handleChange} />

             <label>  معرّف المستخدم:  </label>
            <input className="form-control mb-2 intsty"  type="text"
            required
            name="UserId"
            onChange={handleChange} 
          
            ></input>
             <label>الصورة الشخصية:</label>
             <input type="file" name="formFile" accept="image/*" onChange={handlefileChange} />
             
           
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <button style={{border:'none', backgroundColor:' #A9543F', padding:'10px 15px',color:'#ffffff',borderRadius:'15px'}}  >متابعة</button>
            </div>
           
            
        </form>
        </div>
        </div>
       
        
        
    )

}
export default Tech2;