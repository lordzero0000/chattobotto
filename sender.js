const
  URL = process.env.FB_API || 'https://graph.facebook.com/v2.6/me/messages',
  TOKEN = process.env.TOKEN || 'EAAOpGLrqkSQBAKFteJ0YbxxDFVunWNgE7VlukD8jaMKmAZBI1VYqASfGkcaLyZCBc3Pir3pwwPJb6qBOSn58HcRKo1H2mKHAzsdnTGSpJh1as2BfpzPZAzuwApY6e7X7QiXMTteKzR3uNAOABsSdXeetZC0h0kU9RGX7UGTIoAZDZD',
  API = URL + '?access_token=' + TOKEN;

let
  request = require('request'),
  requester = (opts) => {
    return new Promise((resolve, reject) => {
      request(opts, (error, response, body) => {
        if (error) { reject(error); }
        resolve(body);
      });
    });
  };

module.exports = {
  sendMessage: (message, recipient) => {
    return requester({
      method: 'POST',
      url: API,
      body: {
        recipient: {
          id: recipient
        },
        message:{
          text: message
        }
      },
      json: true
    }).then((res) => {
      if (res.error) { reject(res.error); }
      resolve(res);
    });
  }
};
