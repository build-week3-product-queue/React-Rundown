const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let Profiles = [
  {
    id: 0,
    name: 'Brittney Fults',
    age: 22,
    idea: 'Build a new app'
  }
];
server.get('/Profiles', (req, res) => {
  res.json(Profiles);
});
let ProfileId = 1;

server.post('/Profiles', (req, res) => {
  const { name, age, idea } = req.body;
  const newProfile = { name, age, idea, id: ProfileId };
  if (!name || !age || !idea) {
    return sendUserError(
      'Oh No! Name/Age/Idea are all required to create a idea profile in the DB.',
      res
    );
  }
  const findProfileByName = Profile => {
    return Profile.name === name;
  };
  if (Profiles.find(findProfileByName)) {
    return sendUserError(
      `Oh No! ${name} already exists in the idea DB.`,
      res
    );
  }

  Profiles.push(newProfile);
  ProfileId++;
  res.json(Profiles);
});

server.put('/Profiles/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, idea } = req.body;
  const findProfileById = Profile => {
    return Profile.id == id;
  };
  const foundProfile = Profiles.find(findProfileById);
  if (!foundProfile) {
    return sendUserError('No user found by that ID', res);
  } else {
    if (name) foundProfile.name = name;
    if (age) foundProfile.age = age;
    if (height) foundProfile.idea = idea;
    res.json(Profiles);
  }
});

server.delete('/Profiles/:id', (req, res) => {
  const { id } = req.params;
  const foundProfile = Profiles.find(Profile => Profile.id == id);

  if (foundProfile) {
    const ProfileRemoved = { ...foundProfile };
    smurfs = Profiles.filter(Profile => Profile.id != id);
    res.status(200).json(Profiles);
  } else {
    sendUserError('No user by that ID exists in the idea DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
