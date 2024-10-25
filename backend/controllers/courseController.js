const fs = require('fs');
const path = require('path');

const courses = [
  { id: 1, title: 'JavaScript Basics', description: 'Learn the fundamentals of JavaScript.' },
  { id: 2, title: 'React for Beginners', description: 'Introduction to React and building simple components.' },
  { id: 3, title: 'Node.js Essentials', description: 'Learn backend development with Node.js.' },
  { id: 4, title: 'Python Course', description: 'Learn Python with me.' }
];

exports.getCourses = (req, res) => {
  res.json(courses);
};


exports.postInquiry = (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  

  const inquiry = { name, email, message, date: new Date().toISOString() };


  const filePath = path.join(__dirname, 'inquiries.json');

  
  fs.readFile(filePath, 'utf8', (err, data) => {
    let inquiries = [];
    
    if (!err && data) {
      inquiries = JSON.parse(data);  
    }
    
    inquiries.push(inquiry);  

   
    fs.writeFile(filePath, JSON.stringify(inquiries, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ message: 'Error saving inquiry.' });
      }
      
      res.status(200).json({ message: 'Inquiry received!' });
    });
  });

  console.log(message);
};
