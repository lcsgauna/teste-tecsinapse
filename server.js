const axios = require ('axios');

const options = {
  method: 'POST',
  url: 'https://eventsync.portaltecsinapse.com.br/public/recrutamento/finalizar',
  params: {email: 'lucasgsamudio@gmail.com'},
  headers: {
    'Content-Type': 'text/plain'
  },
  data: 'item 1#2594.7' 
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
