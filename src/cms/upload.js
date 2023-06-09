import axios from 'axios';

export const upload = async data => {

     const formData = new FormData();
     formData.append('image', data);
  try {
    const response = await axios.post(
      'http://localhost:6633/api/upload',
      formData,
      {
        headers: { 'content-type': 'multipart/form-data' },
      }
    );
 
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
