import fastify from 'fastify';
import cors from '@fastify/cors'

const server = fastify(
  { logger: true }
);

server.register(cors, {
  origin: '*'
});

interface DriveParams {
  id: string;
}

interface TeamParams {
  id: string;
}

const teams = [
  {
    "id": 1,
    "name": "Ferrari",
    "base": "Maranello, Italy"
  },
  {
    "id": 2,
    "name": "Mercedes",
    "base": "Brackley, UK"
  },
  {
    "id": 3,
    "name": "Red Bull Racing",
    "base": "Milton Keynes, UK"
  },
  {
    "id": 4,
    "name": "McLaren",
    "base": "Woking, UK"
  },
  {
    "id": 5,
    "name": "Aston Martin",
    "base": "Silverstone, UK"
  },
  {
    "id": 6,
    "name": "Alpine",
    "base": "Enstone, UK"
  },
  {
    "id": 7,
    "name": "Williams",
    "base": "Grove, UK"
  },
  {
    "id": 8,
    "name": "RB",
    "base": "Faenza, Italy"
  },
  {
    "id": 9,
    "name": "Kick Sauber",
    "base": "Hinwil, Switzerland"
  },
  {
    "id": 10,
    "name": "Haas",
    "base": "Kannapolis, USA"
  }
];

const drivers = [
  {
    "id": 1,
    "name": "Charles Leclerc",
    "team": "Ferrari"
  },
  {
    "id": 2,
    "name": "Lewis Hamilton",
    "team": "Ferrari"
  },
  {
    "id": 3,
    "name": "George Russell",
    "team": "Mercedes"
  },
  {
    "id": 4,
    "name": "Kimi Antonelli",
    "team": "Mercedes"
  },
  {
    "id": 5,
    "name": "Max Verstappen",
    "team": "Red Bull Racing"
  },
  {
    "id": 6,
    "name": "Isack Hadjar",
    "team": "Red Bull Racing"
  },
  {
    "id": 7,
    "name": "Lando Norris",
    "team": "McLaren"
  },
  {
    "id": 8,
    "name": "Oscar Piastri",
    "team": "McLaren"
  },
  {
    "id": 9,
    "name": "Fernando Alonso",
    "team": "Aston Martin"
  },
  {
    "id": 10,
    "name": "Lance Stroll",
    "team": "Aston Martin"
  },
  {
    "id": 11,
    "name": "Pierre Gasly",
    "team": "Alpine"
  },
  {
    "id": 12,
    "name": "Franco Colapinto",
    "team": "Alpine"
  },
  {
    "id": 13,
    "name": "Carlos Sainz",
    "team": "Williams"
  },
  {
    "id": 14,
    "name": "Alexander Albon",
    "team": "Williams"
  },
  {
    "id": 15,
    "name": "Liam Lawson",
    "team": "RB"
  },
  {
    "id": 16,
    "name": "Arvid Lindblad",
    "team": "RB"
  },
  {
    "id": 17,
    "name": "Nico Hulkenberg",
    "team": "Kick Sauber"
  },
  {
    "id": 18,
    "name": "Gabriel Bortoleto",
    "team": "Kick Sauber"
  },
  {
    "id": 19,
    "name": "Esteban Ocon",
    "team": "Haas"
  },
  {
    "id": 20,
    "name": "Oliver Bearman",
    "team": "Haas"
  }
];

server.get('/teams', async (request, reply) => {
  reply.type('application/json').code(200);

  return { teams }
})

server.get('/drivers', async (request, reply) => {
  reply.type('application/json').code(200);

  return { drivers };
});

server.get<{Params: TeamParams}>('/teams/:id', async (request, reply) => {
  const { id } = request.params as { id: string };

  const team = teams.find(team => team.id === parseInt(id));

  if (!team) {
    reply.code(404).send({ error: 'Team not found' });
    return;
  }

  reply.type('application/json').code(200);

  return { team };
});

server.get<{Params: DriveParams}>('/drivers/:id', async (request, reply) => {
  const { id } = request.params as { id: string };

  const driver = drivers.find(driver => driver.id === parseInt(id));

  if (!driver) {
    reply.code(404).send({ error: 'Driver not found' });
    return;
  }

  reply.type('application/json').code(200);

  return { driver };
});

server.listen({ port: 3333 }, () => {
  console.log('Server is running on port 3333');
});
