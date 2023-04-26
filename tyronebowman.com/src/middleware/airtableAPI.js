var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyQvKPyy5Ogl7L5a'
});
var base = Airtable.base('keyQvKPyy5Ogl7L5a');

const table = base('Portfolio Call me');

function sendContactForm(name, email, subject, message)
{

    //first validate that fields are not empty, if any fields are empty then return err

    table.create([
        {
          "fields": {
            "Name": name,
            "Email": email,
            "Subject": subject,
            "Message": message
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
      
}

export {sendContactForm}