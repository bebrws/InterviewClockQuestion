To run:
docker-compose up

API:
/angle takes 2 GET paramters
    hour - the hour hands location: 0 - 12
    min - the minute hands location: 0 - 60
It responds with a JSON object containing a property named angle whos value is the angle between the minute and hour hands.

An example request to:
    http://localhost/angle?hour=4&min=42
Should result in:
    {"angle":111}