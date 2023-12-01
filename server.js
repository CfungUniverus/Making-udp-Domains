const express = require('express');
const fillObjectTemplate = require('./fillObjectTemplate.js');
const fillFieldTemplate = require('./fillFieldTemplate.js');
const config = require('./config.js');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

app.get("/", (req, res) => {
    const filePath = "C:\\Users\\user\\Desktop\\tickets\\makingobjects\\public\\object.html"; // Replace with the actual path to your file

    res.sendFile(filePath, (err) => {
      if (err) {
        console.log('Error sending file:', err);
        res.status(err.status).end();
      } else {
        console.log('File sent successfully');
      }
    });
})

app.get("/association", (req, res) => {
    const filePath = "C:\\Users\\user\\Desktop\\tickets\\makingobjects\\public\\association.html"; // Replace with the actual path to your file

    res.sendFile(filePath, (err) => {
      if (err) {
        console.log('Error sending file:', err);
        res.status(err.status).end();
      } else {
        console.log('File sent successfully');
      }
    });
})

app.get("/field", (req, res) => {
    const filePath = "C:\\Users\\user\\Desktop\\tickets\\makingobjects\\public\\field.html"; // Replace with the actual path to your file

    res.sendFile(filePath, (err) => {
      if (err) {
        console.log('Error sending file:', err);
        res.status(err.status).end();
      } else {
        console.log('File sent successfully');
      }
    });
})

// POST endpoint to handle incoming JSON data
app.post('/objectInfo', (req, res) => {
  const data = req.body;
  let responseScript = fillObjectTemplate(data)
    console.log(responseScript)
  res.send(responseScript);
});

// POST endpoint to handle incoming JSON data
app.post('/objectFieldInfo', (req, res) => {
    const data = req.body;
    let responseScript = fillFieldTemplate(data)
    res.send(responseScript);
  });

  // POST endpoint to handle incoming JSON data
app.post('/objectAssociationInfo', (req, res) => {
    const data = req.body;
    let responseScript = fillFieldTemplate(data)
    res.send(responseScript);
  });
  

// Start the server
const port = config.port;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
