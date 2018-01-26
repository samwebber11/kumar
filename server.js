const express=require('express');
const hbs=require('hbs');

var app=express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/package');
app.get('/',(req,res) =>
{
  res.send({
    name:'kumar sambhav',
    likes:['bikes','cities']
  });
});
hbs.registerHelper('getcurrentYear',() =>
{
	return new Date().getFullYear();
});
app.use(express.static(__dirname + '/public'));
app.get('/about',(req,res) =>
{
  res.render('about.hbs',{
  	heading: 'heading hai saale',
  	paragraph: 'you know nothing jon snow'
  });
});

app.get('/bad',(req,res) =>
{
  res.send({
    error:'Unable to fetch any data'
  });
})
app.listen(3000,() =>
	{
		console.log('Server is starting');
	});
