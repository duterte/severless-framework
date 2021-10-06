const parseJson = (json) => {
  const regex = /(\"[\s\r\n]*)(,)([\s\r\n]*})$/;
  const match = json.match(regex);
  if (match) json = json.replace(regex, '$1$3');
  return JSON.parse(json);
};

const eventParser = (event) => {
  if (event.version) event.version = Number(event.version);

  if (event.body) event.body = parseJson(event.body);

  return event;
};

module.exports = { eventParser, parseJson };
