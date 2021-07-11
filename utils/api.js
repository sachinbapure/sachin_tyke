import axios from 'axios';

const apiPath = "http://dev.tykeinvest.com";

const menuApi = async ({item}) => {
  try {
    const res = await axios({
      method: 'get',
      url: `${apiPath}/${item}`
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};



export {
  menuApi
};
